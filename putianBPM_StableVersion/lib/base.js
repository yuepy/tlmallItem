//Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0.3 Safari/604.5.6
(function(win, ysp) {
    var utils = ysp.utils;
    ysp.customHelper = {};
  	var indexWin = null;
    var loginWin = null;
    var forEach = Array.prototype.forEach;
    var topWindow = window.top;
  	topWindow.indexWin = null;
  	var in18 = []; // 更改加载地址
    topWindow.AndriodCardList = '';
    topWindow.num = 0;
    // topWindow.IOSBPMCard = function(u, n) {
    //     topWindow.BPMURL = {
    //         url: u,
    //         name: n,
    //         no: 'fuckBPMCard'
    //     }
    //     return topWindow.BPMURL;
    // }
    var PENDING = false; // 移动端点击待处理单点登录跳转标识
  	var PROCESSED = false; // 移动端点击已处理单点登录跳转标识
    //根据客户端传值来判断自动跳转的目标页面
    topWindow.isPending = function(str){
      if(str == '待处理'){ 
        topWindow.indexWin.location.href = 'http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp'
      }else{
        PROCESSED = true;
        PENDING = false;
        topWindow.indexWin.location.href = 'http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp'
      }
    }
    var currentModelID = ""; //当前动作
    var singleTaskManager = null; //单例任务池
    var taskTimeoutId;
    var winContainer = [];
    var clientEntry;
    var topW = top;
  	
    topW.AndroidBack = function() {
   
      var url = ysp.customHelper.AndroidBackURL;  //待跳转目标地址
      var model = ysp.customHelper.AndroidBackModel; //待跳转目标模板
      var name = ysp.customHelper.AndroidName; //客户门店返回名称标识
      var currentElem = ysp.customHelper.AndroidDocument; // 客户门店返回主元素
      if(ysp.customHelper.AndroidBackFlag == 'default'){
        ysp.customHelper.back();
      }
      if(ysp.customHelper.AndroidBackFlag == 'PageClose'){
        if(ysp.runtime.Browser.activeBrowser.contentWindow.frameElement.name == 'sencondLevelIframeContainer'){
          ysp.runtime.Browser.activeBrowser.contentWindow.close();
        }
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
        if(url == '' && model){
           ysp.customHelper.BackReload('',model);
        }
      }
      if(ysp.customHelper.AndroidBackFlag == 'destination'){
        ysp.customHelper.BackReload(url,model);
      }
      // if(ysp.customHelper.AndroidBackFlag == 'BigData'){
      //   ysp.runtime.Browser.activeBrowser.contentWindow.histroy.back();
      // }
      if(ysp.customHelper.AndroidBackFlag == 'AndroidHistory'){
        ysp.runtime.Browser.activeBrowser.contentWindow.history.go(-1);
      }
      // if(ysp.customHelper.AndroidBackFlag == 'Client&Store'){
      //   ysp.customHelper.toPlan(currentElem, name, model)
      // }
      // if(ysp.customHelper.AndroidBackFlag == 'ClientorStory'){
      //   if(ysp.runtime.Browser.activeBrowser.contentWindow.frameElement.name == 'sencondLevelIframeContainer'){
      //     ysp.runtime.Browser.activeBrowser.contentWindow.close();
      //   }
      // }
      //恢复默认值
      ysp.customHelper.AndroidBackFlag == 'default';
      ysp.customHelper.AndroidBackURL = '';
      ysp.customHelper.AndroidBackModel = '';
      ysp.customHelper.AndroidDocument = ''
      ysp.customHelper.AndroidName = '';
      //default:为默认返回 destination:为跳转目标URL地址 PageClose:为关闭页面 BigData:为大数据钻取返回 . AndroidHistory:针对与页面后退一步返回
      //Client&Store : 针对客户||门店返回方案  ClientorStory:针对客户门店360返回列表方案
    };

    utils.extend(ysp.customHelper, {
        /* 适配中定制的公共代码放在这里 */
        /*
        // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
        foo: function(){
        }
        */
				isPending:'',
        getTableData: _getTableData,
        trim: _trim,
        forceMatchModels: _forceMatchModels,
        back: _back,
        toPlan: _toPlan,
				
      	AndroidBackFn:topW.AndroidBack,
        AndroidDocument:'',//安卓物理返回键客户门店返回元素
        AndroidName:'',//安卓物理返回键客户门店返回名称
        AndroidBackURL:'',//安卓物理返回键目标地址
        AndroidBackModel:'',//安卓物理返回键目标模板
        AndroidBackFlag:'default',//安卓物理返回键返回方法 条件 标识 default:为默认返回 destination:为跳转目标URL地址 PageClose:为关闭页面
        BackReload:_BackReload,
      
        openWindow: function(url, title) {

            if (typeof url !== "string") {
                return;
            }
            if (typeof title !== "string") {
                title = "新窗口";
            }
            title = this.trim(title);
            var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
            return contentWin && contentWin.open(url, title);
        },
        menuManager: {
            init: function() {
                this.menuHash = {
                    "待处理的任务": "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp",
                    "已处理的任务": "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp",
                    "委托的任务": "/ptsoa/bps/wfclient/task/taskList.jsp?taskType=entrust",
                    "委托完成的任务": "/ptsoa/bps/wfclient/task/taskList.jsp?taskType=finishedEntrust",
                    "未阅通知": "/ptsoa/bps/wfclient/task/notificationList.jsp?state=UNVIEWED",
                    "已阅通知": "/ptsoa/bps/wfclient/task/notificationList.jsp?state=VIEWED"
                }
            },
            getMenuUrl: function(menuName) {
                if (typeof menuName !== 'string') return;
                return this.menuHash[menuName];
            }
        },
        //获取顶层窗口
        getTop: function(win) {
            var cwin = win;
            try {
                while (cwin.parent != null) {
                    try {
                        if (cwin.frameElement && cwin.frameElement.dataset.browser) {
                            break;
                        } else {
                            cwin = cwin.parent;
                        }
                    } catch (ex1) {}
                }
            } catch (ex2) {}
            return cwin;
        },
        backHome: function() {
            if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
                parent.EAPI.back();
            } else {
                ysp.appMain.back();
            }
        },
        updateHistoryStateByTabId: function(tabId) {

            if (typeof tabId !== "string") return;
            var activeWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow();
            var acitiveTab = activeWin.mini && activeWin.mini.get(tabId) && activeWin.mini.get(tabId).getActiveTab();
            if (acitiveTab) {
                var url = acitiveTab.url;
                var topWin = ysp.customHelper.getTop(activeWin);
                //topWin.history.pushState(url, null, url);
            }
        },
        // 以下两个方法用于修改原页面中的错误, 但执行时机不同
        // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
        onTargetLoad: function(aWin, doc) {
            //用于作用于原网页第一次进入时的点击;
            if (aWin && doc) {
                if (doc.querySelector('#workItemTabs')) {
                    var X = doc.querySelector('#workItemTabs').querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span')[2];
                    X.click();
                }
            }
            if (topWindow.EAPI.isIOS()) {

            }
            if (topWindow.EAPI.isAndroid()) {

            }

            //当网址含有ftp的时候去掉前面的域名
            if (aWin.location.href.indexOf("ftp") !== -1) {
                var url = aWin.location.href.replace(/http:\/\/192\.168\.220\.51:8000\/ptsoa\/bizform\//g, "")
                aWin.location.href = url;
            }

            // if(aWin.location.href.indexOf('mytasks.jsp')!==-1){
            //    ysp.runtime.Model.setForceMatchModels(['index']);
            // }
            // console.log(doc.querySelectorAll(".inner-frame")[0])
            /*****************************************/
            //获取.inner-frame，给其设置高度
            // var browser2=aWin.self;
            // browser2=aWin.top;
            // var frame=browser2.frameElement;
            // frame.style.height="100vh"
            // console.log(frame)

            // var doc = window.document;
            // var yspStlyeEl = doc.createElement('style');
            // yspStlyeEl.setAttribute("type", "text/css");
            // var cssString = "@media screen and (max-width:960px){body{height: auto;overflow: initial}}";
            // var cssText = doc.createTextNode(cssString);
            // yspStlyeEl.appendChild(cssText);
            // doc.head.appendChild(yspStlyeEl);

            // var style = aWin.document.createElement('style');
            // style.innerHTML = 'iframe.inner-frame{height: 100vh;}';
            // aWin.document.head.appendChild(style)

            /*****************************************/
            var topWin = ysp.customHelper.getTop(aWin);   
            var url = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow.location.href;
            //var tab = aWin.mini && (aWin.mini.get('_tabs') || aWin.mini.get('tabs'));
            //if(tab && tab.getActiveTab()){
                 //if(top.pendTitle=="员工录用"){
                 //	tab.getActiveTab().url += '&employeeHire';    
                 //}else {
            //tab.getActiveTab().url += "&test";
            //}
                 //topWin.history.pushState(tab.getActiveTab().url || aWin.location.href, null, tab.getActiveTab().url || aWin.location.href);
            //}
            //if(aWin.location.href.indexOf('pendingTask') !== -1)
            // topWin.history.pushState(url,null,url);

            //#############################################override pc function start##################################
            if (aWin.mini && aWin.mini.Tabs && aWin.mini.Tabs.prototype.__OnClick) {
                aWin.mini.Tabs.prototype.__OnClick = function(c) {
                    var a = this._getTabByEvent(c);
                    if (!a) {
                        return
                    }
                    var d = !!aWin.mini.findParent(c.target, "mini-tab-close");
                    if (!d && a == this.getActiveTab() && !a.refreshOnClick) {
                        return
                    }
                    if (a.enabled) {
                        var b = this;
                        setTimeout(function() {
                            if (d) {
                                b._OnCloseButtonClick(a, c)
                            } else {
                                var e = a.loadedUrl;
                                b._tryActiveTab(a);
                                //如果地址已经加载过，也需要存储到state中 @todo override
                                var topWin = ysp.customHelper.getTop(aWin);             //topWin.history.pushState(a.url, null, a.url);
                                if (a.refreshOnClick && a.url == e) {
                                    b.reloadTab(a)
                                }
                            }
                        }, 10)
                    }
                }
                aWin.mini.Tabs.prototype.setTabs = function(c) {
                    if (!aWin.mini.isArray(c)) {
                        return
                    }
                    this.beginUpdate();
                    this.removeAll();
                    for (var b = 0, a = c.length; b < a; b++) {
                        var d = c[b];
                        d.title = aWin.mini._getMap(this.titleField, d);
                        d.url = aWin.mini._getMap(this.urlField, d);
                        d.name = aWin.mini._getMap(this.nameField, d)
                    }
                    for (var b = 0, a = c.length; b < a; b++) {
                        this.addTab(c[b])
                    }
                    this.setActiveIndex(0);
                    this.endUpdate()
                }
            }
            aWin.doOperate = function(rowIndex, isShowDetail, newPage) {

                    // var row = aWin.taskListDataGridObj.getRow(rowIndex);
                    // var url = aWin.contextPath + "/bps/wfclient/task/dispatchTaskExecute.jsp?workItemID=" + row.workItemID + "&newPage=" + newPage;
                    // if (isShowDetail) {
                    //   url = aWin.contextPath + "/bps/wfclient/task/task.jsp";
                    //   //width=800;
                    // } else if (aWin.taskType == "entrust") {
                    //   url = aWin.contextPath + "/bps/wfclient/task/task.jsp";
                    //   //width=800;
                    // }
                    var row = aWin.taskListDataGridObj.getRow(rowIndex);
                    var url = aWin.contextPath + "/bps/wfclient/task/dispatchTaskExecute.jsp?workItemID=" + row.workItemID + "&newPage=" + newPage;
                    var title = "工作项执行";
                    var width = 850;
                    var topWin = ysp.customHelper.getTop(aWin);
                    topWin.history.pushState(url, null, url);
                    if (isShowDetail) {
                        url = aWin.contextPath + "/bps/wfclient/task/task.jsp";
                        title = "工作项详细信息";
                        //width=800;
                    } else if (aWin.taskType == "entrust") {
                        url = aWin.contextPath + "/bps/wfclient/task/task.jsp";
                        title = "收回工作项";
                        //width=800;
                    }

                    aWin.nui.open({
                        url: url,
                        title: title,
                        width: 1200,
                        height: 650,
                        showMaxButton: true,
                        onload: function() {
                            var iframe = this.getIFrameEl();

                            //if(top.pendTitle&&top.pendTitle=="总部转正"){
                            //topWin.test="Headquarters&";
                            //}else if(top.pendTitle&&top.pendTitle=="分公司离职管理流程(解除)"){
                            //topWin.test="branchRelease&";
                            //}else if(top.pendTitle&&top.pendTitle=="离职管理"){
                            //topWin.test="Departure&";
                            //}else if(top.pendTitle&&top.pendTitle=="员工职位变动"){
                            //topWin.test="positionChange&";
                            //}else if(top.pendTitle&&top.pendTitle=="假期申请"){
                            //topWin.test="askForLeave&";
                            // }else if(top.pendTitle&&top.pendTitle=="销假申请"){
                            //topWin.test="beginToWork&";
                            //}else if(top.pendTitle&&top.pendTitle=="忘打卡"){
                            //  topWin.test="forgetCard&";
                            //}else if (top.pendTitle&&top.pendTitle=="加班申请") {
                            // topWin.test="addWork&";
                            //}else if (top.pendTitle&&top.pendTitle=="外派探亲资格") {
                            //  topWin.test="visitRelative&";
                            //}else if (top.pendTitle&&top.pendTitle=="员工录用") {
                            // topWin.test="employeeHire&";
                            //}else{
                            //  topWin.test="test&";
                            //}

                            if (iframe.contentWindow.initData) {
                                iframe.contentWindow.initData(row, aWin.taskType, isShowDetail);
                            }
                        },
                        ondestroy: function(action) {
                            if (action == "ok") {
                                aWin.taskListDataGridObj.load();
                            } else if (action == "execute") {
                                aWin.doOperate(rowIndex, false, newPage);
                            }
                        }
                    });
                }
                /////////////////////////////////////

            //#############################################override pc function end##################################


            /*________________login - 登录__________________*/
                //PC增加了验证码之后的逻辑3.8
               
            if (aWin.login) {
                aWin.login = function() {
                    var form = new aWin.nui.Form("#form1");
                    form.validate();
                    //以下两行是原PC的验证逻辑，将其注释
                           //if (form.isValid() == false) 
                           // return false;

                    aWin.nui.get("password").setValue(aWin.encryptByDES(aWin.nui.get("password").getValue(), aWin.keyStr));
                    doc.loginForm.submit();
                }
            }

            /*________________login - 登录__________________*/
        },
        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function(aWin, doc) {
            //aWin.alert=topWin.alert.bind(aWin);
            // 插入隐藏input的css
            var testCSS = doc.createElement('style');
            testCSS.innerHTML = '.mini-grid-editwrap .mini-textbox-input { display: none; }';
            doc.head.appendChild(testCSS);

            //给页面的head里加一个标签
            var meta = doc.createElement("meta");
            meta.setAttribute("name", "google");
            meta.setAttribute("content", "notranslate");
            var head = doc.querySelector("head");
            head.appendChild(meta)

            //加载过滤后的页面
            if (aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp" || aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp#") {
              
                if (topWindow.EAPI.isIOS()) {
                  //判断当前移动端应该跳转目标页面标识
                  		topWindow.indexWin = aWin;
                       topWindow.EAPI.postMessageToNative('isPending', null);
                }
                if (topWindow.EAPI.isAndroid()) {
                   //判断当前移动端应该跳转目标页面标识
                        var str = topWindow.yspCheckIn.showBPMIsPending();
                        if(str == '待处理'){
                          aWin.location.href="http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp"
                        }else{
                          PROCESSED = true;
                          PENDING = false;
                          aWin.location.href = 'http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp';
                        }
                }
              //studio切换到移动端需要注释掉
              //代办
              // aWin.location.href="http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp";
              //已办
              aWin.location.href="http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp";
            }
            aWin.alert = function(msg) {

                    
                if (msg.indexOf('org.gocom.bos.wfclient.task') !== -1 || msg.indexOf('是否') !== -1 || msg.indexOf("不能为空") !== -1 || msg.indexOf("归还日期不能小于当前日期") !== -1 || msg.indexOf("只能为数字") !== -1) {
                    alert(msg);
                }
            }


            aWin.addEventListener('DOMContentLoaded', function() {
              	// var in18Str = doc.querySelectorAll('script');
              	// [].forEach.call(in18Str,function(item,index){
              	// if(item){
              	// if(item.src.indexOf('i18n')!==-1){
              	// if(item.src.indexOf('HANS')!=-1){
              	// item.src = item.src.replace('HANS_','');
              	// in18.push(item.src);
              	// }
              	// }
              	// }
              	// })
                
                aWin.createIframe = function createIframe(name, targetUrl, mount, data) {
                        // if (parent.EAPI.isIOS() && targetUrl.indexOf("192.168.1.174") != -1) {
                        //   var topWin = aWin.getTopWin(aWin);
                        //   if (topWin.frames[name]) {
                        //     var childrenWin = topWin.frames[name];
                        //     if (childrenWin.location.href.indexOf(targetUrl) == -1) {
                        //       aWin.postMsgToIframe(name, data, targetUrl);
                        //     } else {
                        //       aWin.postMsgToIframe(name, data);
                        //     }
                        //   } else {
                        //     var doc = topWin.document;
                        //     var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
                        //     var mountEl = doc.querySelector(mount);
                        //     var iframe = void 0;
                        //     try {
                        //       iframe = doc.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
                        //     } catch (e) {
                        //       iframe = doc.createElement('iframe');
                        //       iframe.name = name;
                        //       iframe.src = targetUrl;
                        //     }
                        //     if (iframe) {
                        //       mountEl.appendChild(iframe);
                        //     }
                        //     aWin.postMsg(name, data);
                        //   }
                        //   return;
                        // }

                        var childWin = ysp.customHelper.openWindow(targetUrl, name);
                        var flag = false;

                        function postMsg(data) {
                            if (childWin.receiveMsg) {
                                childWin.receiveMsg(data);
                                flag = true;
                            }
                            if (!flag) {
                                setTimeout(postMsg.bind(this, data), 200);
                            }
                        }
                        if (data) {
                            postMsg(data);
                        }
                    }
                    //观察页面是否等待状态,选择合适的showLoading和hideLoading
                if (aWin.location.href.indexOf('index.html') !== -1) {

                    try {
                        var MutationObserver = aWin.MutationObserver ||
                            aWin.WebKitMutationObserver ||
                            aWin.MozMutationObserver;
                        var mutationObserverSupport = !!MutationObserver;      
                        var callback = function(records) {       
                            var someFlag = records.some(function(record) {
                                if (record.type == "attributes") {
                                    console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
                                    if (record.target.tagName.toLowerCase() === 'html' && record.target.classList && record.target.classList.contains('loading')) {
                                        ysp.appMain.showLoading();
                                    } else {
                                        ysp.appMain.hideLoading();
                                    }
                                }
                            });
                        };
                        var mo = new MutationObserver(callback);
                        var option = {
                            'attributes': true,
                            'childList': true
                        };
                        var docEl = doc.documentElement
                        if (docEl) {
                            mo.observe(docEl, option);
                        }
                    } catch (e) {
                        console.log("mutationobserver is not supported! the compatibility starting ...");
                    }
                }
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
    ysp.customHelper.menuManager.init();
    /*调用场景：该方法用于采集表格数据*/
    function _getTableData(elem, titleArgs) {
        if (!elem) {
            return;
        }
        //获取头部标题，存入数组，包括空标签的内容
        if (!elem.querySelector('thead')) {
            console.warn('_getTableData没有找到table thead');
            return null;
        }
        var thead = elem.querySelector('thead');
        if (!thead.querySelectorAll('th')) {
            console.warn('_getTableData thead里面竟然没有th');
            return null;
        }
        var titlesThs = thead.querySelectorAll('th');
        var titles = [];
        var titlesIndexs = [];
        for (var i = 0; i < titlesThs.length; i++) {
            var titleValue = _trim(titlesThs[i].textContent);
            var someCallback = function(value, index, array) {
                if (value == titleValue) {
                    return true;
                }
            }
            var flag = titleArgs.some(someCallback);
            if (flag) {
                titles.push(titleValue);
                titlesIndexs.push(i);
            }
        }
        if (titlesIndexs.length == 0) {
            console.warn('_getTableData没有找到相对应的titles');
            return null;
        }
        //获取table的body数据
        if (!elem.querySelector('tbody')) {
            console.warn('_getTableData没有找到table tbody');
            return null;
        }
        var tbody = elem.querySelector('tbody');
        if (!tbody.querySelectorAll('tr')) {
            console.warn('_getTableData tbody里面竟然没有tr');
            return null;
        }
        var tbodyTrs = tbody.querySelectorAll('tr');
        var content = [];
        for (var i = 0; i < tbodyTrs.length; i++) {
            var item = [];
            if (!tbodyTrs[i].querySelectorAll('td')) {
                console.warn('_getTableData 当前tr没有td');
                continue;
            }
            var tds = tbodyTrs[i].querySelectorAll('td');
            for (var j = 0; j < tds.length; j++) {
                var someCallback = function(value, index, array) {
                    if (value == j) {
                        return true;
                    }
                }
                var flag = titlesIndexs.some(someCallback);
                if (flag) {
                    //zyt
                    if (tds[j].querySelectorAll("input[type='text']").length != 0) {
                        item.push(tds[j].querySelector("input[type='text']").value)
                    } else if (tds[j].querySelector("select")) {
                        var optionarry = [];
                        var options = tds[j].querySelector("select").querySelectorAll("option")
                        for (var v = 0; v < options.length; v++) {
                            optionarry.push(options[v].textContent)
                        }
                        item.push(optionarry)
                    } else {
                        item.push(tds[j].textContent.trim());
                    }
                }
            }
            content.push(item);
        }
        return {
            titles: titles,
            content: content
        }
    }
    /*调用场景：字符串前后需要去除空格时调用*/
    function _trim(str) {
        return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
    }
    /*调用场景：页面返回时使用*/
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
    }
    /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
    function _forceMatchModels(args) {
        if (typeof args === 'string') {
            ysp.runtime.Model.setForceMatchModels([args]);
        } else if (args instanceof Array) {
            ysp.runtime.Model.setForceMatchModels(args);
        } else {
            console.error('forceMatchModels 参数类型不正确');
        }
    }

    function _toPlan(elem, operation, planName) {
        if (typeof planName != 'string') {
            console.error('_toPlan参赛planName类型不正确');
        }
        var aEls = elem.querySelectorAll('.mini-tools-close');
        [].forEach.call(aEls, function(item, index) {
            if (item.textContent == operation) {
                item.click();
                _forceMatchModels(planName);
            }
        });
    }
		/*调用场景：新平台页面安卓返回键返回时使用*/
    function _BackReload(url,model){
      if(url && typeof url !== 'string'){
        console.info(url+'!字符串,可不行');
      }
      if(model && typeof model !== 'string'){
        console.info(model+'模板名称也得是字符串!');
      }
      var currentWin = ysp.runtime.Browser.activeBrowser.contentWindow;
      if(url && !model){
        currentWin.location.href = url
      }
      if(url=='' && model){
        
        // var btns = currentWin.document.querySelector("#btn");
        var currentDOC=currentWin.document.querySelector("iframe[src*='newPage']").contentDocument;
				var btns =currentDOC .querySelector("#btn");
        if (btns && btns.style.display != "none") {
          if (btns.querySelector("#recover") && btns.querySelector("#recover").textContent == "追回") {
            var json = {
              time: new Date().getTime()
            };
            var btn = currentWin.document.querySelector('.mini-tools-close');

            if (btn) {
              btn.click();
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
            }
          } else {
            var json = {
              time: new Date().getTime()
            };
            var btn = currentWin.document.querySelector('.mini-tools-close');

            if (btn) {
              btn.click();
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else {
          var json = {
            time: new Date().getTime()
          };
          var btn = currentWin.document.querySelector('.mini-tools-close');

          if (btn) {
            btn.click();
            ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
        // currentWin.document.querySelector('.mini-tools-close').click();
        // ysp.runtime.Model.setForceMatchModels([model]);
      }
      if(url && model){
        currentWin.location.href = url;
        ysp.runtime.Model.setForceMatchModels([model]);
      }
    }
})(window, ysp);