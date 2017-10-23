// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {
  var utils = ysp.utils;
  ysp.customHelper = {};
  var winContainer = []; // openWinow 方法地址存入的数组
  var topWin = null; // Window对象
  utils.extend(ysp.customHelper, {
    openWin : _openWindow,
    tigMsg : _tipMsg,
    forceMatchModels : _forceMatchModels,
    toPlan : _toPlan,
    openWindow : _openWindow,
    trim : _trim,
    back : _back,
    /* 适配中定制的公共代码放在这里 */
		
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){

    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
      /* 为topWin赋值 */
			if (aWin.frameElement && aWin.frameElement.name == "sourcePageFrame" && aWin.frameElement.dataset.browser) {
        topWin = aWin;
        if (aWin.location.href.indexOf('login') !== -1) {
          ysp.runtime.Model.setForceMatchModels(['login']);
        }
      }
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
  /* 调用场景 : 页面返回. */
  function _back(type){
    if(typeof type === 'string'){
      if(window.parent.EAPI.isAndroid() || window.parent.EAPI.isIOS()){
        ysp.appMain.back();
      }
    }else{
      var actionEvent = '{"target":"null","data":"'+type+'"}';
      window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview',actionEvent);
      setTimeout(function(){
        window.parent.EAPI.back();
      },1000)
    }else{
      ysp.appMain.back();
    }
  }
  /* 调用场景 : 页面出现弹框时,自动点击弹框消失. */
  // function _tipMsg(elem){
  // 	if (topWin) {
  //     var doc = topWin.document;
  //     var layerTipEl = ysp.utils.xfind('//div[@id="_DialogDiv_0"]', doc)[0];
  //     if (layerTipEl) {
  //       var contentEl = layerTipEl.querySelector('div#Message_undefined');
  //       if (contentEl) {
  //         return contentEl.textContent;
  //       }
  //     }
  //   }
  // }
  /* 调用场景 : 页面返回或者进入无效,需要强制匹配方案时. */
  function _forceMatchModels(args){
    if(typeof args === 'string'){
      ysp.runtime.Model.setFoceMatchModels([args])
    }else if(typeof args instanceof Array){
      ysp.runtime.Model.setForceMatchModels(args);
    }else{
      console.error('forceMatchModel 参数类型不正确');
    }
  }
  /* 调用场景 : 适用于'结构为[ul li a]类型Menu强制匹配页面. */
  function _toPlan(elem,operation,planName){
    if(typeof planName !== 'string'){
      console.error('toPlan : planName参数类型不正确')
    }
    var aEls = elem.querySelectorAll('ul li > a');
    [].forEach.call(aEls,function(item,index){
      if(item.textContent == operation){
        item.click();
        _forceMatchModels(planName);
      }
    });
  }
  /* 调用场景 : 适用于适配同一父窗口页面,在当前window打开新窗口. */
  function _openWindow(url, title) {
    if (typeof url !== "string") {
      return;
    }
    if (typeof title !== "string") {
      title = "新窗口";
    }
    title = this.trim(title);
    var flag = winContainer.some(function(winTitle) {
      if (winTitle == title) {
        return true;
      }
    });
    if (!flag) {
      winContainer.push(title);
    }
    var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
    if (contentWin) {
      if (title === 'firstLevelIframeContainer') {
        var firstLevelEl = contentWin.document.querySelector('iframe[name^="firstLevelIframeContainer"]');
        firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
      }
      return contentWin.open(url, title);
    }
  }
  /* 调用场景 : 字符串前后去空格. */
  function _trim(str) {
    return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
  }
})(window, ysp);
