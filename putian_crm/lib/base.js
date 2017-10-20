(function(win, ysp) {
  //override fn start
  EAPI.isStudio = function() { return !!top.window.setCompanyInfo }
  //override fn end
  
  var utils = ysp.utils;
  ysp.customHelper = {};
  var targetLoadedFun;
  var watchBtnIntervalId; //监控转至按钮
  var watchLoginFormId; //监控登录表单
  var forEach = Array.prototype.forEach;
  var currentModelID = ""; //当前动作
  var currentMsg = ""; //当前消息
  var currentIframeUrl = ""; //当前iframe嵌套的URL
  var pushstateArgs = [];
  var globalUserId = '';
  var singleTaskManager = null; //单例任务池
  var singlePlanManager = null; //单利计划管理
  var visitIndexUrl = ''; //拜访首页地址
  var achievementUrl = ''; //业绩首页地址
  var originWin = null; //注入PC顶层window
  //行为拦截器
  function intercepter(type, modelID) {
    if (originWin) {
      var cwin = originWin;
      var title = cwin.document.title;
      switch (type) {
        case "信息协同":
          //pushstateArgs.push(modelID);
          break;
        case "首页":
          ysp.customHelper.openCurrentWindow('achievement');
          break;
        case "拜访首页":
          ysp.customHelper.openCurrentWindow('visitIndex');
          break;
        default:
          break;
      }
    }
  }
  //强制执行适配方案
  function executePlan(modelID) {
    if (ysp.runtime.Model.setForceMatchModels && modelID) {
      var matchs = [];
      modelID && matchs.push(modelID);
      ysp.runtime.Model.setForceMatchModels(matchs);
      setTimeout(function() {
        var taskPool = getSingletonTask();
        taskPool.status = "idle";
        taskPool.executeFinalTask();
      }, 1000);
      //currentModelID = "";
    }
  }
  var actionTimeoutId;
  var actionSubTimeoutId;
  var actionOptionSubTimeoutId;
  //分发消息策略
  //分发消息策略
  function executeAction(task) {
    var _this = this;
    clearTimeout(actionTimeoutId);
    clearTimeout(actionSubTimeoutId);
    clearTimeout(actionOptionSubTimeoutId);
    if (originWin) {
      var doc = originWin.document;
      var cwin = originWin;
      var intercepts = task.intercepts;
      var flag = false;

      function clickButton(task) {
        function go() {
          if (window.parent.EAPI.isIOS()) {
            if (currentModelID == 'goodsMessages' || currentModelID == 'productFrom' || currentModelID == 'stockInquire') {
              executePlan('informationSynergies');
            } else if (currentModelID == 'saleReach') {
              executePlan('saleTask');
            } else if (currentModelID == 'visitIndex' || currentModelID == 'achievement') {
              console.log('It does not anything about what the plan is visitIndex or achievement in IOS platformgit ');
            } else {
              executePlan(currentModelID);
            }
          } else {
            executePlan(currentModelID);
          }
        }

        function getMenu(name) {
          var delegateEl = doc.querySelector('div[name^="_swescrnbar"] div.siebui-nav-tree.siebui-view-navs');
          var xpath = "//div[@name='_swescrnbar']//div[contains(@class,'siebui-nav-tree') and contains(@class,'siebui-view-navs')]//ul/li//descendant::a[text()='" + name + "']";
          var menuItem = ysp.utils.xfind(xpath, doc) && ysp.utils.xfind(xpath, doc)[0];
          return menuItem;
        }
        if (!task.intercepts || task.intercepts.length == 0) {
          var menuItem = getMenu(task.name);
          menuItem.click();
          flag = true;
          go();
        } else {
          var isFlag = false;
          var firstMenuName;

          function nextTask() {
            var firstMenuItem
            if (task.intercepts.length != 0) {
              firstMenuName = task.intercepts.shift();
              firstMenuItem = getMenu(firstMenuName);
              firstMenuItem.click();
            } else {
              firstMenuItem = getMenu(firstMenuName);
            }
            var grandMenu = firstMenuItem.parentElement && firstMenuItem.parentElement.nextElementSibling;
            if (grandMenu) {
              var liEl = grandMenu.querySelectorAll('ul > li > span:first-child')[0];
              if (liEl.tagName.toLowerCase() === 'span' && liEl.classList.contains('dynatree-active')) {
                isFlag = true;
                var secondMenuItem = getMenu(task.name);
                secondMenuItem.click();
                go();
              }
            }
            if (!isFlag) {
              actionSubTimeoutId = setTimeout(nextTask, 200);
            }
          }
          nextTask();
        }
      }
    }
    console.info(task);
    clickButton(task);
  }

  function findMenuitemByName(name) {
    var _this = this;
    var flag = false;
    if (originWin) {
      var doc = originWin.document;
      var operation = name;
      var aEls = doc.querySelectorAll('div[name^="_swescrnbar"] div.siebui-nav-tree.siebui-view-navs li a');
      [].forEach.call(aEls, function(item, index) {
        if (item && item.textContent.replace(/(^\s*)|(\s*$)/g, "") == operation) {
          flag = true;
        }
      });
      var selectEl = doc.querySelector("div[name^='_swescrnbar'] select");
      var optionEls = selectEl ? selectEl.options : [];
      [].forEach.call(optionEls, function(item, index) {
        if (item && item.textContent.replace(/(^\s*)|(\s*$)/g, "") == operation) {
          flag = true;
        }
      });
    }
    return flag;
  }
  /*
   * type 消息类型
   */
  function dispatchMsg(task) {
    var type = task.type;
    var msgType = "";
    console.log('webview send msg type is: ' + type);
    if (!task.name) {
      switch (type) {
        case "clientList":
          msgType = "客户信息";
          task.intercepts = ['信息协同'];
          break;
        case "vistplan":
          msgType = "拜访管理"
          break;
        case "informationSynergies":
          msgType = "信息协同";
          break;
        case "infomationFill":
          msgType = "信息录入";
          break;
        case "achievement":
          msgType = "首页";
          break;
        case "visitIndex":
          msgType = "拜访首页";
          task.intercepts = ['拜访管理'];
          break;
        case "saleTask":
          msgType = "销售任务";
          break;
        default:
          msgType = "no"
          break;
      }
      task.name = msgType;
    }
    currentModelID = type;
    intercepter(msgType, type);
    executeAction(task);
    /*if (msgType == "客户信息") {
      executeAction({
        name: "信息协同",
        type: "informationSynergies"
      });
      currentModelID = ""
    }*/
  }
  //任务池，防止用户疯狂点击，造成系统卡死
  function TasksManager() {
    this.tasks = [];
    this._status = 'idle';
    this.currentTask = null;
  }
  TasksManager.prototype.addTask = function(task) {
    this.tasks.push(task);
  }
  TasksManager.prototype.removeTasks = function() {
    this.tasks = [];
  }
  TasksManager.prototype.executeTask = function(task) { //{name:,intercepts:,type:} name为任务名称，data为数据,type 任务类型
    var _this = this;
    if (typeof task === 'string') {
      task = {
        type: task
      }
    }
    setTimeout(function() { //确保用户在意外情况，强制让其进入闲置状态
      if (_this.status == 'busy') {
        _this.status = 'idle';
        _this.executeFinalTask();
      }
    }, 3000);
    if (this.status == 'idle') {
      ysp.appMain.showLoading();
      this.status = 'busy';
      this.currentTask = task;

      function execute() {
        var flag = findMenuitemByName('首页');
        if (flag) {
          dispatchMsg(task);
        } else {
          setTimeout(execute, 100);
        }
      }
      execute();
      console.info('TasksManager is executing ' + task.name);
      //var name = this.tasks[this.tasks.length - 1];
      //this.removeTasks(); 
    } else {
      this.addTask(task);
    }
  }
  TasksManager.prototype.existTask = function() {
    if (this.tasks.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  TasksManager.prototype.executeFinalTask = function() {
    if (this.status == 'idle' && this.existTask()) {
      var task = this.tasks[this.tasks.length - 1];
      task = ysp.utils.assign({}, task);
      this.removeTasks();
      if (task.name != this.currentTask.name) {
        this.executeTask(task);
      }
    }
  }
  Object.defineProperty(TasksManager.prototype, 'status', {
    set: function(newVaule) {
      this._status = newVaule;
    },
    get: function() {
      return this._status;
    }
  });
  // Object.defineProperty(TasksManager.prototype, 'currentTask', {
  //   set: function(newValue) {
  //     this._currentTask = newValue;
  //   },
  //   get: function() {
  //     return this._currentTask;
  //   }
  // });
  function getSingletonTask() {
    if (!singleTaskManager) {
      singleTaskManager = new TasksManager();
    }
    return singleTaskManager;
  }
  var cwin = window.parent;
  var waittingAction = "";
  cwin._yspNativeEventHandler = function(type) {
    currentIframeUrl = "";
    var aWin = ysp.runtime.Browser.activeBrowser.contentWindow;
    var activeContext = ysp.runtime.Context.activeContext;
    if (activeContext && activeContext.model.id == type) {
      console.log('小伙子，你在当前方案下继续触发当前方案，驳回，_yspNativeEventHandler type is ' + type);
      return;
    } else {
      if (aWin && aWin.location.href.indexOf('start.swe') == -1) {
        if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
          if (type != 'achievement' && type != 'visitIndex') {
            aWin.close();
          }
        }
      }
    }
    _singletonPlan().clearPlan();
    var taskPool = getSingletonTask();
    taskPool.executeTask(type);
  }
  /**
   *@description 执行动作行为
   *@menuName 菜单名称
   *@modelID 适配方案ID
   *@isOpenWindow 此方案是否需要打开窗口
   *@menuQueues 点击多个菜单行为队列
   */
  function _executeAction(menuName, modelID, isOpenWindow, menuQueues) { //menuName 菜单名称 modelID 模板ID
    currentModelID = modelID;
    var taskPool = getSingletonTask();
    taskPool.executeTask({
      name: menuName,
      type: modelID,
      intercepts: menuQueues
    });
    //executeAction(menuName,menuQueues);
    if (isOpenWindow) {
      ysp.customHelper.openCurrentWindow();
    }
  }

  function processLoading(doc) {
    var docEl = doc.documentElement
    if (docEl) {
      //第一次采用轮询加载时进行showLoading
      var busyIntervalId = setInterval(function() {
        if (docEl.classList && docEl.classList.contains('siebui-busy')) {
          ysp.appMain.showLoading();
        } else {
          ysp.appMain.hideLoading();
          clearInterval(busyIntervalId);
        }
      }, 100);
    }
  }

  function _openCurrentWindow(url, modelID) {
    if (modelID != 'visitIndex') {
      if (url.indexOf('toHomePage') != -1) {
        url = "";
      }
    } else if (modelID != 'achievement') {
      if (url.indexOf('firstPage') != -1) {
        url = "";
      }
    }
    if (url) {
      if (window.parent.EAPI.isStudio() || window.parent.EAPI.isAndroid()) {
        var win = ysp.runtime.Browser.activeBrowser.contentWindow;
        if (win) {
          win.open(url, "新窗口");
        }
      } else {
        ysp.appMain.openWindow(url);
      }
      currentIframeUrl = "";
    }
  }

  function _generateUrl(url) {
    var b = new Base64();
    var filter_userId = globalUserId;
    var encoder = b.encode(filter_userId + _getCurrentDate());
    var url = url + "?encoder=" + encoder + '&filter_userId=' + filter_userId;
    console.info(url);
    return url;
  }

  function _getUserId() {
    return globalUserId;
  }
  //根据PlanManager可以定义back方法
  function PlanHistoryManager() {
    this.planContainer = [];
    this._currentPlan = '';
  }
  PlanHistoryManager.prototype.back = function() {}
  PlanHistoryManager.prototype.addPlan = function(plan) {
    if (typeof plan === 'string') {
      var length = this.planContainer.length;
      this.currentPlan = plan;
      if (length == 0) {
        this.planContainer.push(plan);
        return;
      }
      if (this.planContainer[length - 1] == plan) {
        return;
      }
      var plansString = this.planContainer.join(',');
      var end = plansString.indexOf(plan);
      if (end != -1) {
        this.planContainer = plansString.substring(0, end - 1).split(',');
        this.planContainer.push(plan);
      } else {
        this.planContainer.push(plan);
      }
    } else {
      console.error('HistoryManager currentPlan type is error,this type is ' + (typeof plan));
    }
  }
  PlanHistoryManager.prototype.getPrePlan = function() {
    if (this.planContainer.length > 1) {
      return this.planContainer[this.planContainer.length - 2];
    } else {
      console.log('PlanHistoryManager 当前没有适配方案历史记录或者只有一条，总共条数为：' + this.planContainer.length);
    }
  }
  PlanHistoryManager.prototype.clearPlan = function() {
    this.planContainer = [];
  }

  function _singletonPlan() {
    if (!singlePlanManager) {
      singlePlanManager = new PlanHistoryManager();
    }
    return singlePlanManager;
  }
  setInterval(function() {
    if (ysp.runtime.Context.activeContext && ysp.runtime.Context.activeContext.model.id) {
      var modeId = ysp.runtime.Context.activeContext.model.id;
      _singletonPlan().addPlan(modeId);
    }
  }, 1500);
  Object.defineProperty(PlanHistoryManager.prototype, 'currentPlan', {
    set: function(newPlan) {
      if (typeof newPlan === 'string') {
        this._currentPlan = newPlan;
      } else {
        console.error('HistoryManager currentPlan type is error,this type is ' + (typeof newPlan));
      }
    },
    get: function() {
      return this._currentPlan;
    }
  });

  function _back(type) {
    if (typeof type === 'string') {
      if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
        ysp.appMain.back();
      } else {
        var actionEvent = '{"target":"null","data":"' + type + '"}';
        window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
        setTimeout(function() {
          window.parent.EAPI.back();
        }, 1000);
      }
    } else {
      ysp.appMain.back();
    }
  };
  utils.extend(ysp.customHelper, {
    getUserId: _getUserId,
    back: _back,
    toPlan: _executeAction,
    dispatchMsg: dispatchMsg,
    generateUrl: _generateUrl,
    singlePlanManager: _singletonPlan,
    getCurrentPlan: function() {
      var activeContext = ysp.runtime.Context.activeContext;
      return !!activeContext ? activeContext.model.id : currentModelID;
    },
    toPlanByDOM: function(elem, operation) {
      var aEls = elem.querySelectorAll("li a");
      [].forEach.call(aEls, function(item, index) {
        if (item && item.textContent == operation) {
          item.click();
          return;
        }
      });
      var selectEl = elem.querySelector("select");
      var optionEls = selectEl.options;
      [].forEach.call(optionEls, function(item, index) {
        if (item && item.textContent == operation) {
          selectEl.selectedIndex = index;
          if (selectEl.onchange) {
            selectEl.onchange();
          } else if (selectEl.dispatchEvent) {
            selectEl.dispatchEvent(new Event('change'));
          } else {
            selectEl.dispatchEvent(new MouseEvent('click', {
              view: selectEl.defaultView,
              bubbles: true,
              cancelable: true
            }));
          }
          return;
        }
      });
    },
    //查找当前方案的前一个方案model-id
    findPrevModelID(){
    	var modelStack = ysp.runtime.Model.modelsStack;
      var len = modelStack.length;
      if(len > 2){
      	var prevModel = modelStack[len - 2];
      	var id = prevModel.model.id;
        return id;
      }else{
      	console.log('当前方案是第一个方案，没有前置方案');
      }
      
    },
    forceMatchModels: function(args) {
      if (typeof args === 'string') {
        ysp.runtime.Model.setForceMatchModels([args]);
      } else if (typeof args === 'array') {
        ysp.runtime.Model.setForceMatchModels(args);
      } else {
        console.error('forceMatchModels 参数类型不正确');
      }
    },
    openCurrentWindow: function(modeId) {
      if (modeId) {
        if (modeId == "visitIndex") {
          if (!visitIndexUrl) {
            setTimeout(this.openCurrentWindow.bind(this, modeId), 1000);
          } else {
            _openCurrentWindow(visitIndexUrl, modeId);
          }
        } else if (modeId == "achievement") {
          if (!achievementUrl) {
            setTimeout(this.openCurrentWindow.bind(this, modeId), 1000);
          } else {
            _openCurrentWindow(achievementUrl, modeId);
          }
        }
        return;
      }
      if (!currentIframeUrl) {
        setTimeout(this.openCurrentWindow.bind(this, modeId), 1000);
      } else if (currentIframeUrl.indexOf('toHomePage') != -1 || currentIframeUrl.indexOf('firstPage') != -1) {
        setTimeout(this.openCurrentWindow.bind(this, modeId), 1000);
      } else {
        _openCurrentWindow(currentIframeUrl, !!modeId ? modeId : '');
      }
    },
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    /*
    用于筛选客户其他信息采集里面在手机端产生的对适配无用的td
    @param fakeTds：原网页采集过来的包含无用td的数组
    */
    filterTd(fakeTds) {
      var tds = [];
      for (var i = 0; i < fakeTds.length; i++) {
        if (!fakeTds[i].querySelector('input[type="checkbox"]')) {
          tds.push(fakeTds[i]);
        }
      }
      return tds;
    },
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    formatStringToDate(str) {
      var strArray = str.split('/');
      for (var i = 0; i < strArray.length; i++) {
        if (+strArray[i] < 10) {
          strArray[i] = '0' + strArray[i];
        }
      }
      return strArray.join('-');
    },
    getDataIndex(array, tag) {
      if (!array) {
        return;
      }
      if (!ysp.customHelper.isArray(array)) {
        console.log('getDataIndex接收了一个假的数组');
        return;
      }
      for (var i = 0; i < array.length; i++) {
        var arrayItem = array[i].trim();
        if (arrayItem.indexOf(tag) != -1) {
          return i;
        }
      }
    },
    getIndexInTitles(array, tag) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(tag) != -1) {
          return i;
        }
      }
    },
    isStringNull(str) {
      if (str && str.trim().length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isArray(array) {
      if (Object.prototype.toString.call(array).indexOf('Array') != -1) {
        return true;
      } else {
        return false;
      }
    },
    isAllNull(array) {
      var tag = true;
      for (var i = 0; i < array.length; i++) {
        var item = ysp.customHelper.trim(array[i]);
        if (item != '') {
          tag = false;
        }
      }
      return tag;
    },
    //判断array.tag是存在一个值等于item
    isExist(item, tag, array){
    	for(var i = 0; i < array.length; i++){
      	if(item == array[i][tag]){
        	return true;
        }
      }
      return false;
    },
    //数组去重
    unique(array){
    	var data = [];
      for(var i=0;i<array.length;i++){
      	if(!this.isExist(array[i].title, 'title', data)){
        	data.push(array[i]);
        }
      }
      return data;
    },
    getTemplateSaleReachData: function(elem, headerConfig, tags) { //[{lable:'',title:'',data:''}]
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      var titlesSort = [];
      for (var i = 0; i < titlesThs.length; i++) {
        var titleTh = titlesThs[i];
        titles.push(titleTh.textContent);
        var sortEl = titleTh.querySelector('div > span:first-child');
        if (sortEl && sortEl.style.display != 'none' && sortEl.classList.contains('s-ico')) {
          var ascEl = sortEl.querySelector('span[sort^="asc"]');
          var desEl = sortEl.querySelector('span[sort^="desc"]');
          var sortType = null;
          if (ascEl && ascEl.classList.contains('ui-disabled')) {
            sortType = 'desc';
          } else {
            sortType = 'asc';
          }
          titlesSort.push(sortType);
        } else {
          titlesSort.push(null);
        }
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      var headerTitle = null;
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          if(tds[j].getAttribute('aria-describedby') && tds[j].getAttribute('aria-describedby').indexOf('table_list_1_rank') != -1){
          	var isDrilled = false;
          }else{
          	var isDrilled = !!tds[j].querySelector('a');
          }
          item.push({
            content: tds[j].textContent,
            isDrilled: isDrilled
          });
          if (!headerTitle && isDrilled) {
            headerTitle = titles[j];
          }
        }
        content.push(item);
      }
      if(!headerTitle){
      	headerTitle = '分公司';
      }

      function isAllNull(array) {
        var tag = true;
        for (var i = 0; i < array.length; i++) {
          var item = ysp.customHelper.trim(array[i].content);
          if (item != '') {
            tag = false;
          }
        }
        return tag;
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      var exportTitles = [];
      if (headerTitle && headerConfig) {
        headerConfig.title = headerTitle;
      }
      if (headerConfig.title) {
        tags.unshift(headerConfig);
      }
      var filterTitles = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            var title = tag.title;
            title = title.trim();
            var index = ysp.customHelper.getDataIndex(titles, title);
            if(content[i][index] && content[i][index]['content'].trim() == ''){
            	index = ysp.customHelper.getDataIndex(titles, '办事处');
              if(content[i][index] && content[i][index]['content'].trim() == ''){
              	index = ysp.customHelper.getDataIndex(titles, '销售人员');
              }
            }
            filterTitles.push(titlesSort[index]);
            if (index != undefined) {
              item.push({
                label: tag.label,
                content: content[i][index] && content[i][index]['content'],
                isDrilled: content[i][index] && content[i][index]['isDrilled'],
                title: title,
                data: tag.data
              });
            }
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!isAllNull(item)) {
          if (exportTitles.length != item.length) {
            item.forEach(function(value, index) {
              exportTitles.push({
                label: value.label ? value.label : value.title,
                title: value.title,
                sort: (filterTitles && filterTitles[index]) || null
              });
            });
          }
          data.push(item);
        }
      }
      //去重
      exportTitles = this.unique(exportTitles);
      return {
        content: data,
        titles: exportTitles
      };
    },
    //使用范围：表格由两个同级div组成，上面div里面包含一个table,table有thead组成了整个表格的头，下面的div里面包含一个div,table由一个tbody组成
    getTemplateData: function(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    //使用范围：仅限客户经营信息采集，仅限客户经营信息采集，仅限客户经营信息采集
    getDataClientMsg: function(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].getAttribute('title'));
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    //使用范围：仅限客户基本信息采集，仅限客户基本信息采集，仅限客户基本信息采集
    getDataClientBasicMsg: function(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 1; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].getAttribute('title'));
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        data.push(item);
      }
      return data;
    },
    //信息协同部分表格采集函数模板
    getDataInInformation: function(elem, tags) {
      if (!elem) {
        return;
      }
      //采集头部table字段
      var head = elem.querySelector('.l-grid-header');
      var headTable = head.querySelector('table');
      if (!headTable) {
        return [];
      }
      var headTds = headTable.querySelectorAll('tbody tr td');
      var titles = [];
      for (var i = 0; i < headTds.length; i++) {
        titles.push(headTds[i].textContent);
      }
      //采集body部分数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var body = elem.querySelector('.l-grid-body');
      var bodyTable = body.querySelector('table');
      if (!bodyTable) {
        return [];
      }
      var bodyTrs = bodyTable.querySelectorAll('tbody tr');
      var content = [];
      for (var i = 0; i < bodyTrs.length; i++) {
        var item = [];
        if (!bodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = bodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据tags返回相应的数据
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    trim(str) {
      return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
    },
    onTargetLoad: function(aWin, doc) {
      if (aWin.Modernizr) {
        aWin.Modernizr.touch = false;
      }
      doc.addEventListener('click', function(e) {
        if (aWin.Modernizr) {
          aWin.Modernizr.touch = false;
        }
      }, false);
      var isIframeLoaded = true; //iframe页面是否第一次进入
      //页面加载时机重要函数重载✨✨✨✨✨
      // aWin.SiebelApp = aWin.SiebelApp || {};
      // if (aWin.SiebelApp) {
      //   aWin.SiebelApp.EventManager = function() {
      //     var a = {};
      //     return {
      //       addListner: function(e, d, c) {
      //         //@override preload 和 Loaded 两个时机方法
      //         if (e == "preload") {
      //           d = function OnPreload() {
      //             try {
      //               console.log("Loading...");
      //             } catch (error) {
      //               //No-Op
      //             }
      //           }
      //         } else if (e == "postload") {
      //           d = function OnPostload() {
      //             try {
      //               var title = doc.title;
      //               var stateArg = pushstateArgs.shift();
      //               if (stateArg) {
      //                 switch (stateArg) {
      //                   case "informationSynergies":
      //                     if (aWin.location.href.indexOf('&action=') == -1) {
      //                       aWin.history.pushState({
      //                         title: title
      //                       }, title, aWin.location.href.replace(/&action=informationSynergies/g, "") + "&action=" + stateArg);
      //                     }
      //                     break;
      //                   default:
      //                     break;
      //                 }
      //               }
      //               console.log("Loaded...");
      //             } catch (error) {
      //               //No-Op
      //             }
      //           }
      //         }
      //         a[e] = a[e] || [];
      //         var f = a[e];
      //         if (f && f.length) {
      //           for (var b = 0; b < f.length; b++) {
      //             if ((f[b].fn === d) && (f[b].scope === c)) {
      //               return
      //             }
      //           }
      //         }
      //         a[e].push({
      //           fn: d,
      //           scope: c
      //         })
      //       },
      //       removeListner: function(e, d, c) {
      //         var f = a[e];
      //         if (f && f.length) {
      //           for (var b = 0; b < f.length; b++) {
      //             if ((f[b].fn === d) && (f[b].scope === c)) {
      //               f.splice(b, 1)
      //             }
      //           }
      //         }
      //       },
      //       cleanListners: function(b) {
      //         a[b] = []
      //       },
      //       fireEvent: function(d, b) {
      //         var e = a[d] || {};
      //         for (var c in e) {
      //           if (e.hasOwnProperty(c)) {
      //             if (typeof e[c] != "function") {
      //               e[c].fn.call(e[c].scope || window, b)
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }();
      // }
      //重新打开用window.open 后期用openWindow
      if (aWin.SiebelApp && aWin.SiebelApp.contentUpdater) {
        aWin.SiebelApp.contentUpdater.InitializeiFrame = function(c, b) {
          console.info('InitializeiFrame is executed !');
          var url = b.substring(b.indexOf('http'), b.indexOf('\">'));
          if (currentModelID == 'visitIndex') {
            if (url.indexOf('toHomePage') != -1) {
              visitIndexUrl ? visitIndexUrl : visitIndexUrl = url;
            }
          } else if (currentModelID == 'achievement') {
            if (url.indexOf('firstPage') != -1) {
              achievementUrl ? achievementUrl : achievementUrl = url;
            }
          } else {
            currentIframeUrl = url;
          }
        }
      }
      //add username and password auto
      // var username = doc.querySelector('[name="SWEUserName"]');
      // var password = doc.querySelector('[name="SWEPassword"]');
      // var SWERememberUser = doc.querySelector('[name="SWERememberUser"]');
      // if (username && password && SWERememberUser) {
      //   username.value = 'CRM021';
      //   password.value = '12345678';
      //   SWERememberUser.checked = true;
      // }
      var href = aWin.location.href;
      if (href.indexOf("Account+Screen+Homepage+View") != -1) {
        watchBtnIntervalId = setInterval(function() {
          var toEle = doc.querySelector("button[aria-label^='搜索:转至']");
          if (toEle) {
            clearInterval(watchBtnIntervalId);
            toEle.click();
          }
        }.bind(this), 100);
      }
      var errorSessionOpenStatus = false;
      var showErrorTip = function() {
        errorSessionOpenStatus = true;
        //alert("您已在一个Siebel会话当前处于活动状态时启动了另一个Siebel会话,点击确定重新登录！");
      }
      var hideErrorTip = function() {
        errorSessionOpenStatus = false;
      }
      //监控session新会话打开
      var sessionFlag = false;

      function openSession() {
        //var errorContainer = doc.querySelector('.error');
        var errorEl = doc.getElementById('s_swepi_2');
        var warnEl = doc.querySelector('.AppletTitle');
        if (warnEl && warnEl.textContent.replace(/(^\s*)|(\s*$)/g, "") == "会话警告消息") {
          if (aWin.location.href.indexOf('&action=sessionExpire') == -1) {
            var title = doc.title;
            aWin.history.replaceState({
              title: title
            }, title, aWin.location.href.replace(/&action=sessionExpire/g, "") + "&action=sessionExpire");
            ysp.runtime.Model.setForceMatchModels(["sessionExpire"]);
            globalUserId = "";
          }
          //sessionFlag = true;
        }
        //如果session确认后，再检测，强制把页面适配到登录页面
        //         var userIDEl = ysp.utils.xfind("//input[@name^='SWEUserName' and @title='用户 ID']",doc);
        //         var userPwdEl = ysp.utils.xfind("//input[@name='SWEPassword' and @title='密码']",doc);
        //         if(userIDEl && userPwdEl){
        //         }
        if (errorEl) {
          // if(!errorSessionOpenStatus){
          //     showErrorTip();
          // }
          //var errorEl = doc.getElementById('s_swepi_2');
          //errorEl.click();
        } else {
          // if(errorSessionOpenStatus){
          //     hideErrorTip();
          // }
        }
        // if (!sessionFlag) {
        //   setTimeout(openSession.bind(this), 1500);
        // }
      }
      setInterval(openSession.bind(this), 1500);
    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
      //如果页面进入错误页面，自动跳转主页
      if (aWin.location.href && aWin.location.href.indexOf('SWEFo=SWEEntryForm&SWENeedContext=false') != -1) {
        aWin.location.href = "http://192.168.0.208:7777/loyalty_chs/start.swe";
      }
      if (!originWin) {
        originWin = aWin;
      }
      /*watchLoginFormId = setInterval(function() {
          var win = aWin;
          var formEl = doc.forms['RedirectForHost'];
          var formElClone = doc.forms['RedirectForHostClone'];
          if (formElClone) {
            clearInterval(watchLoginFormId);
            formEl.name = "RedirectForHostClone";
          }
        }.bind(this), 0.01);*/
      //尽量在页面head标签渲染后追加第三方js
      // var libIntervalId = setInterval(function(){
      //      var headEl = doc.querySelector('head');
      //      if(headEl){
      //         var extScript = doc.createElement('script');
      //         extScript.src = "libs/ysp.ext.js";
      //         headEl.insertBefore(extScript,headEl.firstElementChild);
      //         clearInterval(libIntervalId);
      //      }
      // },50);
      //观察页面是否等待状态,选择合适的showLoading和hideLoading
      try {
        var MutationObserver = aWin.MutationObserver ||
          aWin.WebKitMutationObserver ||
          aWin.MozMutationObserver;
        var mutationObserverSupport = !!MutationObserver;
        var callback = function(records) {
          records.map(function(record) {
            if (record.type == "attributes") {
              console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
              if (record.target.tagName.toLowerCase() === 'html' && record.target.classList && record.target.classList.contains('siebui-busy')) {
                ysp.appMain.showLoading();
              } else {
                ysp.appMain.hideLoading();
              }
            }
          });
        };
        var mo = new MutationObserver(callback);
        var option = {
          'childList': true,
          'arrtibutes': true,
          'attributeOldValue': true
        };
        var docEl = doc.documentElement
        if (docEl) {
          mo.observe(docEl, option);
        }
      } catch (e) {
        console.log("mutationobserver is not supported! the compatibility starting ...");
      }
      if (targetLoadedFun) {
        doc.removeEventListener("DOMContentLoaded", targetLoadedFun, false);
      }
      var YSPCustom = YSPCustom || {};
      YSPCustom.getTop = function() {
        var testedFrame = aWin;
        try {
          while (testedFrame.parent != null) {
            try {
              if (testedFrame.frameElement && testedFrame.frameElement.dataset.browser) {
                break;
              } else {
                testedFrame = testedFrame.parent;
              }
            } catch (ex1) {}
          }
        } catch (ex2) {}
        return testedFrame;
      }
      targetLoadedFun = function() {
        var formObj = doc.forms["RedirectForHost"];
        if (formObj) {
          formObj.SWEHo.value = YSPCustom.getTop().location.hostname;
          formObj.submit();
        }
        //在全部客户搜索时，找到查找元素
        var queryInputEls = ysp.utils.xfind('//*[@id="a_1"]/div[2]/div[2]/input[@name="s_1_1_1_0"] | //*[@id="a_1"]/div[2]/div[2]/input[@aria-label="查找"]', doc, true);
        if (queryInputEls.length > 0) {
          var queryInputEl = queryInputEls[0];
          queryInputEl.value = "客户全称";
        }
        //登录逻辑
        //this function is only used in login page
        aWin.SWEExecuteLogin = function(formObj, action, target) {
          if (!aWin.g_bInitialized)
            return;
          if (action != null)
            formObj.action = action;
          if (target != null)
            formObj.target = target;
          //@todo 把userId注入数据
          var userIdEl = formObj[0];
          if (userIdEl && userIdEl.name == 'SWEUserName') {
            globalUserId = userIdEl.value;
          }
          if (typeof(formObj.SWETS) != 'undefined') //always append timestamp
          {
            var now = new Date();
            formObj.SWETS.value = now.getTime();
          }
          if (typeof(formObj.SWEC) != 'undefined')
            formObj.SWEC.value = 0;
          if (aWin.localStorage) {
            var syncNodeId = doc.createElement('input');
            syncNodeId.type = 'hidden';
            syncNodeId.name = 'SyncNodeId';
            syncNodeId.value = aWin.localStorage.getItem("SyncNodeId");
            formObj.appendChild(syncNodeId);
          }
          formObj.SWECmd.value = "ExecuteLogin";
          formObj.submit();
          //ARRAI:Setting for Offline operations Sync
          //Fix for bug:14461124
          if (aWin.localStorage) {
            aWin.localStorage.setItem("ResetApp", 'true');
          }
        }
      }
      doc.addEventListener("DOMContentLoaded", targetLoadedFun, false);
      doc.addEventListener("submit", function() {
        console.info("doc form submit .... ");
      }, false);
      aWin.addEventListener("submit", function() {
        console.info("aWin form submit .... ");
      }, false);
    },
    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },
    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }
  });
  // var doc = window.document;
  // var yspStlyeEl = doc.createElement('style');
  // yspStlyeEl.setAttribute("type", "text/css");
  // var cssString = "@media screen and (max-width:960px){#sourcePageFrame{width:2000px !important;height:5500px !important;}}";
  // var cssText = doc.createTextNode(cssString);
  // yspStlyeEl.appendChild(cssText);
  // doc.head.appendChild(yspStlyeEl);
  function Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    // public method for encoding
    this.encode = function(input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = _utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output +
          _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    }
    // public method for decoding
    this.decode = function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = _utf8_decode(output);
      return output;
    }
    // private method for UTF-8 encoding
    _utf8_encode = function(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    }
    // private method for UTF-8 decoding
    _utf8_decode = function(utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return string;
    }
  }

  function _getCurrentDate() {
    var date = new Date();
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1; //注：月数从0~11为一月到十二月
    mymonth = mymonth > 0 && mymonth < 10 ? "0" + mymonth : mymonth;
    var mydate = date.getDate(); //号
    mydate = mydate > 0 && mydate < 10 ? "0" + mydate : mydate;
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return mymonth + '/' + mydate + '/' + myyear + ' ' + hour + ':' + minute + ':' + second;
  }
})(window, ysp);