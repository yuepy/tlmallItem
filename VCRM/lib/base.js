// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
  var topWin = top;
  var utils = ysp.utils;
  var winContainer = [];
  ysp.customHelper = {
		openWindow: function openWindow(url, title) {
      if (typeof url !== "string") {
        return;
      }
      if (typeof title !== "string") {
        title = "新窗口";
      }
      title = this.trim(title);
      var flag = winContainer.some(function (winTitle) {
        if (winTitle == title) {
          return true;
        }
      });
      if (!flag) {
        winContainer.push(title);
      }
      var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
      // if (url.indexOf("192.168.1.174") != -1) {
      //   if (parent.EAPI.isIOS()) {
      //     ysp.appMain.openWindow(url);
      //   } else {
      //     return contentWin.open(url, title);
      //   }
      // } else {
      //   if (contentWin) {
      //     return contentWin.open(url, title);
      //   }
      // }
      if (contentWin) {
        if (title === 'firstLevelIframeContainer') {
          var firstLevelEl = contentWin.document.querySelector('iframe[name^="firstLevelIframeContainer"]');
          firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
        }
        return contentWin.open(url, title);
      }
    },
    getCurrentOpenedWins: function getCurrentOpenedWins() {
      return winContainer;
    },
  };
  
  var loginFlag = false;
  var ALLMENU = []; //所有菜单列表集合
  var removeMenuAll = ['我是被筛除的菜单:']; //所有被指定删除菜单的集合
  function AllMobileMenu(All) {
    [].forEach.call(All, function (oneItem, oneIndex) {
      //当前oneItem为一级菜单.
      if (oneItem) {
        //当前twoMenu为二级菜单.
        var twoMenu = oneItem.subMenuList;
        [].forEach.call(twoMenu, function (twoItem, twoIndex) {
          if (twoItem) {
            if (twoItem.subMenuList == null) {
              var menus = {};
              menus.name = [];
              menus.url = [];
              menus.name.push(twoItem.name);
              menus.url.push(twoItem.url);
              ALLMENU.push(menus);
            } else {
              //当前threeMenu为三级菜单.
              var threeMenu = twoItem.subMenuList;
              [].forEach.call(threeMenu, function (threeItem, threeIndex) {
                if (threeItem) {
                  var menus = {
                    name: threeItem.name,
                    url: threeItem.url
                  };
                  ALLMENU.push(menus);
                } else {
                  console.error('闲的,完全进不来这个判断,但我就是想写,以警示后人,没有三级菜单.');
                }
              });
            }
          } else {
            console.error('不存在二级菜单.果然是有问题的请求.');
          }
        });
      }
    });
  }
  
  function AndroidGetIconNum(summary,atMe){
    this.summary = summary;
    this.atMe = atMe;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.status >= 200 && xhr.status <300 || xhr.status == 304){
        if(xhr.response != ''){
          var obj = JSON.parse(xhr.response);
          if(obj.summaryReportCount && obj.atMeUnreadReportCount){
            ysp.customHelper.IconNum.summary = obj.summaryReportCount;
    				ysp.customHelper.IconNum.atMe = obj.atMeUnreadReportCount;
            localStorage.setItem('atMe',obj.atMeUnreadReportCount);
            localStorage.setItem('summary',obj.summaryReportCount);
          }
        }
      }
    }
    xhr.open('POST','http://192.168.220.82:8080/pttlCrm/crm/workSummary/getWorkBenchSummaryCount');
    xhr.send()
  }
  
  function getAllMenu(aWin,menuList) {
   	//取值localStorage内接口数据,进行菜单渲染
    var _this = this;
    if(aWin.localStorage.listMenuForMobile && !loginFlag && !menuList){
      var AllMenu = JSON.parse(decodeURIComponent(aWin.localStorage.listMenuForMobile));
      if(AllMenu == '' || AllMenu == '{"isHaveSession":"no"}'){
        console.error('当前菜单为空,具体原因为PC端未将菜单传入');
        alert('请双击刷新低栏VCRM图标,重新加载');
      }else{
        if(top.EAPI.isIOS()){
          //top.EAPI.postMessageToNative('GetIconNum', '');//给客户端发消息 - 请求角标数据
        }else{
          //AndroidGetIconNum(); // 安卓端ICON数量取值;
        }
          ALLMENU = AllMenu;
      }
    }
    if(aWin.localStorage.listMenuForMobile && menuList && loginFlag){
      //IOS独有得菜单获取方法 - menuList是菜单集合 具体实现请看IOSLoginIn方法
      //var AllMenu = JSON.parse(decodeURIComponent(aWin.localStorage.listMenuForMobile));
      var AllMenu = menuList;
      if(AllMenu == '' || AllMenu == '{"isHaveSession":"no"}'){
        console.error('当前菜单为空,具体原因为PC端未将菜单传入');
        alert('请双击刷新低栏VCRM图标,重新加载');
      }else{
        if(top.EAPI.isIOS()){
          top.EAPI.postMessageToNative('GetIconNum', '');//给客户端发消息 - 请求角标数据
        }
      }
      	ALLMENU = AllMenu;
    }
  }
  function _getTargetMenus(arr,removeName) {
    //arr为当前要筛选的菜单名称 removeName为要排除相似的菜单名称. ps:移动端和PC名称相似却不相同,或者统一名称在移动端特殊展示
    var Allmenus = [];
    if (typeof arr === "string") {
      arr = [arr];
    }
    if(typeof removeName === 'string'){
      removeName = [removeName];
    }
    if(removeName){
      removeName.some(function(current,index,arr){
        for(var i = 0;i<ALLMENU.length;i++){
          if(ALLMENU[i].name.indexOf(current) !== -1){
            removeMenuAll.push(ALLMENU.splice(i,1));
            //打印removeMenuAll 可以得到筛选排除的所有菜单;
            //ALLMENU.splice(i,1);
          }
        }
      })
    }
    arr.some(function (current, index, arr) {
      for (var i = 0; i < ALLMENU.length; i++) {
        //在全部菜单中按照条件筛选出移动端可以进入的目标菜单及有效url存入数组.
        if (ALLMENU[i].name.indexOf(current) !== -1) {
          //针对三级菜单地址进行截取,保证url有效
          if(ALLMENU[i].url.indexOf('../') !== -1){
            ALLMENU[i].url = ALLMENU[i].url.replace('../.','');
            ALLMENU[i].url = ALLMENU[i].url.replace(/^\s+/,'');
          }
          if(current.indexOf('(新)')!=-1){
            current = current.replace('(新)','');
          }
          var menus = {
            name: current,
            url: ALLMENU[i].url,
            code:ALLMENU[i].code,
            current:ALLMENU[i].name
          };
          Allmenus.push(menus);
          break;
        }
      }
    });
    return Allmenus;
  }

  function _trim(str) {
    return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
  }
  
  var _tipMsg = {
    getMsg: function getMsg() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var contentEl = layerTipEl.querySelector('div.layui-layer-content');
          if (contentEl) {
            return contentEl.textContent;
          }
        }
      }
    },
    cancelText: function cancelText() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelTxt = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelTxt) {
            return cancelTxt.textContent;
          }
        }
      }
    },
    confirm: function confirm() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var confirmBtn = layerTipEl.querySelector('a.layui-layer-btn0');
          if (confirmBtn) {
            confirmBtn.click();
          }
        }
      }
    },
    cancel: function cancel() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelBtn = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelBtn) {
            cancelBtn.click();
          }
        }
      }
    },
    getLoading: function getLoading() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var contentEl = layerTipEl.classList.contains("layui-layer-loading");
          return contentEl;
        }
      }
    }
  };
  
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
		getTargetMenus: _getTargetMenus,
    AndroidGetIconNum:AndroidGetIconNum, //安卓端请求待办角标数量
    IconNum:{summary:'',atMe:''},//报告数量变量
    trim: _trim,
    tipMsg: _tipMsg,
    
    
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){
			if (aWin) {
        if (aWin.location.href == 'http://192.168.220.82:8080/pttlCrm/res/index.html') {
          //在登录成功时,请求PC端菜单接口,获取全部菜单列表  -- 新平台做临时调试使用 .
          getAllMenu(aWin);
        }
      }
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
			if (aWin.location.href == 'http://192.168.220.82:8080/pttlCrm/res/index.html') {
          //在登录成功时,请求菜单接口,获取全部菜单列表
          getAllMenu(aWin);
      }
        
      aWin.addEventListener('DOMContentLoaded', function () {
        if (aWin.location.href.indexOf('index.html') !== -1) {
          var actionEvent = '{"target":"null","data":"closePreLoading"}';
          //关闭主webview的loading状态
          var parent = aWin.frameElement.ownerDocument.defaultView;
          //parent && parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
          //sessionStorage.setItem('closePreLoading-domcontentloaded', true);
        }
        aWin.createIframe = function createIframe(name, targetUrl, mount, data) {
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
        };
        //观察页面是否等待状态,选择合适的showLoading和hideLoading
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

})(window, ysp);
