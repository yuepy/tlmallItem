(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_JESMRT: function (elem) {},
    doAction_uiControl2_mnXrpW: function (data, elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var win = doc.defaultView;var as = elem.querySelectorAll('ul li a');if (data.eventType === 'click1') {
        win.open('http://192.168.1.223:8088/pttlCrm/visit/visitManager/goToOtherPage?href=http%253A%252F%252F192.168.1.223%253A8088%252FptDataShow%252FcommonReports%252FcommonReportsByEncoder%253FreportPid%253DcustomerView%2526filter_userId%253DSUNWANXIN%2526encoder%253DU1VOV0FOWElOKzA3LzE5NC8yMDE3IDE2OjE2OjE5');
      } else if (data.eventType === 'click2') {
        win.open('http://192.168.1.223:8088/pttlCrm/res/page/visitManager/visitLook/visitlook.html');
      }
    },
    getTemplate_uiControl2_mnXrpW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    let _this = this;\n    return (\n      <div>\n         <AMUI.Button amStyle="primary" block \n           onClick={()=>{\n             var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'click1\'\n                });\n              }\n          }}\n           >\u4EBA\u5458\u8FBE\u6210</AMUI.Button>\n        <AMUI.Button amStyle="primary" block \n           onClick={()=>{\n             var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'click2\'\n                });\n              }\n          }}\n           >\u62DC\u8BBF\u67E5\u770B</AMUI.Button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: "primary", block: true,\n          onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click1\'\n              });\n            }\n          }\n        },\n        "\\u4EBA\\u5458\\u8FBE\\u6210"\n      ),\n      React.createElement(\n        AMUI.Button,\n        { amStyle: "primary", block: true,\n          onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click2\'\n              });\n            }\n          }\n        },\n        "\\u62DC\\u8BBF\\u67E5\\u770B"\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);