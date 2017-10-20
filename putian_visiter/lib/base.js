(function(win, ysp) {
  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc) {
    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {},
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
  var mapScriptEl = top.document.getElementById("gaodeMapScript");
  if (!mapScriptEl) {
    mapScriptEl = top.document.createElement('script');
    mapScriptEl.id = "gaodeMapScript";
    mapScriptEl.type = "text/javascript";
    mapScriptEl.src = "http://webapi.amap.com/maps?v=1.3&key=ee2427c5c8189a63c6afd92deee75a5d&plugin=AMap.Geocoder";
    mapScriptEl.onload = function() {
      top.dispatchEvent(new Event("map_loaded"));
    }
    var headEl = top.document.getElementsByTagName("head")[0];
    headEl.appendChild(mapScriptEl);
  }
  var mapStyleEl = top.document.getElementById("gaodeMapStyle");
  if (mapStyleEl) {
    mapStyleEl = top.document.createElement('link');
    mapStyleEl.rel = "stylesheet";
    mapStyleEl.href = "http://cache.amap.com/lbs/static/main1119.css";
    var headEl = top.document.getElementsByTagName("head")[0];
    headEl.appendChild(mapStyleEl);
  }
  
  //地图定位
  top.setupWebViewJavascriptBridge = function(callback) {
    if (top.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    }
    if (top.WVJBCallbacks) {
      return top.WVJBCallbacks.push(callback);
    }
    top.WVJBCallbacks = [callback];
    var WVJBIframe = doc.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    top.documentElement.appendChild(WVJBIframe);
    top(function() {
      doc.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
  
  top.locationBegin = function() {
    // 判断是否是window平台，直接给客户端传入信息即可。
    if (top.enterplorer && (top.enterplorer.uwp === 'mobile' || top.enterplorer.uwp === 'desktop')) {}
    // 判断是否是Android平台
    if (top.yspCheckIn) {
        top.yspCheckIn.locationBegin();
    } else {  // 是iOS平台
        aWin.setupWebViewJavascriptBridge(function(enterplorer) {
            top.enterplorer.callHandler('locationBegin', function responseCallback() {});
        });
    }
  }
  
})(window, ysp);