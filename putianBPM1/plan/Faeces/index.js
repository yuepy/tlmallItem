(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control90_DU8NQV: function (elem) {},
    doAction_uiControl83_dZ81E4: function (data, elem) {
      if (data.eventType == 'click') {
        window.close();
      }
    },
    getTemplate_uiControl83_dZ81E4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div onClick={()=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}>\n        \u8FD4\u56DE\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { onClick: function onClick() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        } },\n      '\\u8FD4\\u56DE'\n    );\n  }\n});";
    }
  });
})(window, ysp);