// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */   
    /*调用场景：该方法用于采集表格数据*/
    getTableData: function(elem, titleArgs) {
      if (!elem) {
        return;
      }
      var titlesThs = elem.querySelectorAll('th');
      if(titlesThs.length == 0){
        var titlesThs = elem.querySelectorAll("td");
      }
      var titles = [];
      var titlesIndexs = [];
      for (var i = 0; i < titlesThs.length; i++) {
        var titleValue = (titlesThs[i].textContent).trim();
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
        // console.warn('_getTableData没有找到相对应的titles');
        return null;
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTableData没有找到table tbody');
        return null;
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTableData tbody里面竟然没有tr');
        return null;
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      var ths =  tbodyTrs[0].querySelector("th");
      if(ths){
        for (var i = 1; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTableData 当前tr没有td');
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
            if (tds[j].querySelectorAll("input[type='text']").length != 0) {
              item.push(tds[j].querySelector("input[type='text']").value)
            } else if (tds[j].querySelector("select")) {
              var optionarry = [];
              var options = tds[j].querySelector("select").querySelectorAll("option")
              for (var v = 0; v < options.length; v++) {
                if(options[v].selected){
                  optionarry.push(options[v].textContent)
                }
              }
              item.push(optionarry)
            } else {
              item.push(tds[j].textContent.trim());
            }
          }
        }
        content.push(item);
      }
      }else{
        for (var i = 2; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTableData 当前tr没有td');
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
      }
      return {
        titles: titles,
        content: content
      }
    },
    //获取首页列表里面的数据
    getTabData:function(ele){
      var trs = ele.querySelectorAll('tr');
    	if(trs.length==0){
        console.log(ele+'这个table里面没有tr');
        return
      }
      var	arr = [];
      for(var i=0;i<trs.length;i++){
				if(trs[i].style.display!='none'){
          var obj = [];
          var tds = trs[i].querySelectorAll('td');
          if(tds.length==0){
            console.log('这个tr没有td')
          }
          for(var k=0;k<tds.length;k++){
            if(tds[k].style.display!='none'){
							obj.push(tds[k].textContent.trim());
            }
          }
        }
      	arr.push(obj);
      }
      return arr;
    },
    //获取某一个特定的父元素
    getParentClass:function(ele,cls){
      if(ele.className.indexOf(cls)!=-1){
        return ele;
      }else{
        return this.getParentClass(ele.parentElement,cls);
      }
    },

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){
      //判断页面是否为登录页面是的话获取验证码
			if(aWin.location.href == 'http://egs.itownet.cn:9080/ecqs_server_web/'){
        doc.querySelector('#randomNumber').setAttribute('src','imageGenerator?'+Math.random());
      }
      //关闭页面中生成的所有的iframe
      // debugger
      // if(aWin.location.href == 'http://egs.itownet.cn:9080/ecqs_server_web/system/main.jsp'){
      //   var closes = doc.querySelectorAll('.tabs-close');
      //   for(var i=0;i<closes.length;i++){
      //     closes[i].click();
      //   }
      // }
      //判断页面是否有树存在、
      // if(aWin.location.href == 'http://egs.itownet.cn:9080/ecqs_server_web/system/main.jsp')){
      //   debugger
      //   doc.querySelector("#mainMenu").querySelector("div").querySelector('div').click();
      // }
    },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {

    },
		
    fireKeyEvent: function (el, evtType, keyCode) {
        var doc = el.ownerDocument,
            win = doc.defaultView || doc.parentWindow,
            evtObj;
        if (doc.createEvent) {
            if (win.KeyEvent) {
                evtObj = doc.createEvent('KeyEvents');
                evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0);
            } else {
                evtObj = doc.createEvent('UIEvents');
                Object.defineProperty(evtObj, 'keyCode', {
                    get: function () {
                        return this.keyCodeVal;
                    }
                });
                Object.defineProperty(evtObj, 'which', {
                    get: function () {
                        return this.keyCodeVal;
                    }
                });
                evtObj.initUIEvent(evtType, true, true, win, 1);
                evtObj.keyCodeVal = keyCode;
                if (evtObj.keyCode !== keyCode) {
                    console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
                }
            }
            el.dispatchEvent(evtObj);
        } else if (doc.createEventObject) {
            evtObj = doc.createEventObject();
            evtObj.keyCode = keyCode;
            el.fireEvent('on' + evtType, evtObj);
        }
        return false;
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
    },
     fireKeyEvent: function (el, evtType, keyCode) {
        var doc = el.ownerDocument,
            win = doc.defaultView || doc.parentWindow,
            evtObj;
        if (doc.createEvent) {
            if (win.KeyEvent) {
                evtObj = doc.createEvent('KeyEvents');
                evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0);
            } else {
                evtObj = doc.createEvent('UIEvents');
                Object.defineProperty(evtObj, 'keyCode', {
                    get: function () {
                        return this.keyCodeVal;
                    }
                });
                Object.defineProperty(evtObj, 'which', {
                    get: function () {
                        return this.keyCodeVal;
                    }
                });
                evtObj.initUIEvent(evtType, true, true, win, 1);
                evtObj.keyCodeVal = keyCode;
                if (evtObj.keyCode !== keyCode) {
                    console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
                }
            }
            el.dispatchEvent(evtObj);
        } else if (doc.createEventObject) {
            evtObj = doc.createEventObject();
            evtObj.keyCode = keyCode;
            el.fireEvent('on' + evtType, evtObj);
        }
        return false;
    }
		

  });

})(window, ysp);
