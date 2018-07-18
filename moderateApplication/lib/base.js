// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */
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
    //获取table中数据
    getTabledata:function(elem,arr){
      if(!elem){
        return 'elem为空';
      }
      var data = {};
      if(!elem.querySelector('thead')){
        var ths = elem.querySelectorAll('tr')[0].querySelectorAll('th');
      }else{
        var ths = elem.querySelector('thead').querySelector('tr').querySelectorAll('th');
      }
      data.titles = [];
      for(var i=0;i<arr.length;i++){
        data.titles.push(ths[i].textContent.trim());
      }
      if(elem.querySelectorAll('tbody').length>0){
        var trs = elem.querySelectorAll('tbody')[1].querySelectorAll('tr');
      }else{
        var trs = elem.querySelector('tbody').querySelectorAll('tr');
      }
      data.content = [];
      for(var i=0;i<trs.length;i++){
        var str = [];
        var tds = trs[i].querySelectorAll('td');
        for(var k=0;k<arr.length;k++){
          str.push(tds[k].textContent.trim());
        }
        data.content.push(str);
      }
      return data;
    },
    //获取表格数据
    gettable:function(elem,titles){
      if(!elem){
        return 'elem为空'
      }
      var data = {};
      data.titles = [];
      data.content = [];
      for(var i=0;i<titles.length;i++){
        var ths = elem.querySelectorAll('th');
        for(var k=0;k<ths.length;k++){
          if(titles[i] == ths[k].textContent.trim()){
            data.titles.push(titles[i].split('*')[0]);
          }
        }
      }
      var trs = elem.querySelectorAll('tr');
      for(var i=0;i<trs.length;i++){
        var arr = [];
        var tds = trs[i].querySelectorAll('td');
        if(tds.length>0){
          for(var k=0;k<data.titles.length;k++){
            if(tds[k].querySelector('input')){
              arr.push(tds[k].querySelectorAll('input')[tds[k].querySelectorAll('input').length-1].value)
            }else{
            	arr.push(tds[k].textContent.trim());
            }
          }
          data.content.push(arr);
        }
      }
        return data;
    },
    //获取当前元素的某一个特定的父元素
    getparent:function(ele,parclass){
      var flat;
      if(ele.className == parclass){
        return ele;
        // flat = true;
      }else{
        return this.getparent(ele.parentElement,parclass);
        // flat = true;
      }
      if(flat){
        return ele;
      }
    },
    //筛选26个待办数据
    getDatamove:function(obj,arr){
      var str = [],
          dataindex = [];
      if(!arr.length>0){
        return '没有需要筛选的数据';
      }
      for(var i=0;i<obj.content.length;i++){
        for(var k=0;k<arr.length;k++){
          if(obj.content[i][0] == arr[k]){
            str.push(obj.content[i]);
            dataindex.push(i);
          }
        }
      }
      return {data:str,index:dataindex};
    },
 		/*调用场景：字符串前后需要去除空格时调用*/
    tableTrim: function(str) {
      return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
    },
    backHome: function() {
      if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
        parent.EAPI.back();
      } else {
        ysp.appMain.back();
      }
    },
  	

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
     //  if(aWin.location.href == 'http://172.16.11.61/Index.aspx'){
     //   aWin.location.href = 'http://172.16.11.61:8000/Index.aspx?Path=SysLogin';
     // }
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
