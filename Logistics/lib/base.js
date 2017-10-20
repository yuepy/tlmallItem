// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function(win, ysp) {

  var utils = ysp.utils;
  var winContainer = [];
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    trim: _trim,
    toPlan: _toPlan,
    forceMatchModels: _forceMatchModels,
    getTableData:_getTableData,
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    getCurrentOpenedWins: function() {
      return winContainer;
    },
    openWin(url, title) {
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
        if (title === 'sourcePageFrame') {
          var firstLevelEl = contentWin.document.querySelector('iframe[name^="sourcePageFrame"]');
          firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
        }
        return contentWin.open(url, title);
      }
      
    },
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc) {

    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {

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

  function _trim(str) {
    return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
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
    var aEls = elem.querySelectorAll('a');
    [].forEach.call(aEls, function(item, index) {
      if (item.textContent == operation) {
        item.click();
        _forceMatchModels(planName);
      }
    });
  }
 /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
  
   /*调用场景：针对没有thead的表格,匹配统一class来模拟表头进行取值*/
  
  /*调用场景：针对没有thead的表格,匹配统一class来模拟表头进行取值*/
function _getTableData(elem, titleArgs) {
    if (!elem) {
      return;
    }
    //获取头部标题，存入数组，包括空标签的内容
    if (!elem.querySelector('tbody').querySelectorAll("tr")[0].querySelector("th")) {
      console.warn('_getTableData没有找到table th');
      return null;
    }
    var tr1 = elem.querySelector('tbody').querySelectorAll("tr")[0].querySelector("th");
    if (!tr1.querySelectorAll('th')) {
      console.warn('_getTableData tr1里面竟然没有th');
      return null;
    }
    var titlesThs = tr1.querySelectorAll('th');
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
      // console.warn('_getTableData没有找到相对应的titles');
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
})(window, ysp);