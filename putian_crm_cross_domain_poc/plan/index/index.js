(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_0Nt5xu: function (elem) {},
    doAction_uiControl8_6097b4: function (data, elem) {
      var doc = elem.ownerDocument;var win = doc.defaultView;if (data.eventType === 'click1') {
        win.open('http://192.168.1.223:8088/pttlCrm/visit/visitManager/goToOtherPage?href=http%253A%252F%252F192.168.1.223%253A8088%252FptDataShow%252FcommonReports%252FcommonReportsByEncoder%253FreportPid%253DcustomerView%2526filter_userId%253DSUNWANXIN%2526encoder%253DU1VOV0FOWElOKzA3LzE5NC8yMDE3IDE2OjE2OjE5');
      } else if (data.eventType === 'click2') {
        win.open('http://192.168.1.223:8088/pttlCrm/res/page/visitManager/visitLook/visitlook.html');
      } else if (data.eventType === 'click3') {
        win.open('http://192.168.1.223:8088/pttlCrm/res/page/visitManager/visitManager.html');
      }
    },
    getTemplate_uiControl8_6097b4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    let _this = this;\n    return (\n      <div>\n        \n        <AMUI.Button amStyle=\"primary\" block \n           onClick={()=>{\n             var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click3'\n                });\n              }\n          }}\n           >\u62DC\u8BBF\u7BA1\u7406</AMUI.Button>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: \"primary\", block: true,\n          onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'click3'\n              });\n            }\n          }\n        },\n        \"\\u62DC\\u8BBF\\u7BA1\\u7406\"\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);