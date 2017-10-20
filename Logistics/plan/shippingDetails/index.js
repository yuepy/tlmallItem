(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control23_z4F5Zq: function (elem) {
      if (!elem) {
        return;
      }var data = {};
    },
    doAction_uiControl27_Zfepuo: function (data, elem) {},
    getTemplate_uiControl27_Zfepuo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~\"\n    );\n  }\n});";
    },
    getData_control24_DZp627: function (elem) {},
    doAction_uiControl29_AnKNmc: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.toPlan(elem, 'R发货明细查询', 'list_tow');
      }
    },
    getTemplate_uiControl29_AnKNmc: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div onClick={()=>{\n         var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}>\n         \u8FD4\u56DE \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { onClick: function onClick() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        } },\n      '\\u8FD4\\u56DE'\n    );\n  }\n});";
    }
  });
})(window, ysp);