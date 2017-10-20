(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8: function (elem) {
      var data = [];var arr1 = [];var arr2 = [];var arr3 = []; //arr1 
      var trsP = $(elem).find('#s_3_l').children('body').children('tr');
      for (var i = 1; i < trsP.length; i++) {
        var obj = {};var tdsP = $(trs[i]).children('td');for (var j = 0; j < tdsP.length; j++) {
          obj.name = $(trs[i]).children('td').eq(4).text();obj.state = $(trs[i]).children('td').eq(1).text();obj.price = $(trs[i]).children('td').eq(16).text();obj.quantity = $(trs[i]).children('td').eq(2).text();obj.yes = $(trs[i]).children('td').eq(13).text();obj.cancel = $(trs[i]).children('td').eq(14).text();obj.extend = $(trs[i]).children('td').eq(15).text();
        }arr1.push(obj);
      }console.log(arr1);return { 'title1': ['物料描述', '行状态', '销售单价', '购买数量', '出库数量', '签收数量', '拒收数量'], 'data': data };
    },
    doAction_uiControl28: function (data, elem) {},
    getTemplate_uiControl28: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  render: function(){\n    return (\n      <div>\n        \u6211\u6765\u7EC4\u6210react\u7EC4\u4EF6\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nvar React = require(\'react\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      null,\n      \'\\u6211\\u6765\\u7EC4\\u6210react\\u7EC4\\u4EF6\'\n    );\n  }\n});';
    }
  });
})(window, ysp);