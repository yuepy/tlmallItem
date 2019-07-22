(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_uG5kmw: function (elem) {},
    doAction_uiControl5_GlBwNE: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.defaultView.open('http://192.168.220.82:8080/pttlCrm/res/yspHome.html');
      }
    },
    getTemplate_uiControl5_GlBwNE: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div style={{textAlign:\'center\',padding:\'20px\'}} onClick={()=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}>\n        \u79FB\u52A8\u7AEF\u539F\u751F\u9875\u9762 - \u62DC\u8BBF\u603B\u89C8\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'div\',\n      { style: { textAlign: \'center\', padding: \'20px\' }, onClick: function onClick() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        } },\n      \'\\u79FB\\u52A8\\u7AEF\\u539F\\u751F\\u9875\\u9762 - \\u62DC\\u8BBF\\u603B\\u89C8\'\n    );\n  }\n});';
    }
  }, "index");
})(window, ysp);