(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_IpuWEE: function (elem) {},
    doAction_uiControl8_JQmua0: function (data, elem) {
      if (data.eventType == 'click') {
        // ysp.appMain.openWindow('http://192.168.200.63/workflow/request/RequestType.jsp?needPopupNewPage=true');
        // if (data.dataCustom == '新建') {
        //   ysp.appMain.reloadPage('http://192.168.200.63/workflow/request/RequestType.jsp?needPopupNewPage=true');
        // }
        var url = 'http://192.168.200.63/workflow/request/RequestType.jsp?needPopupNewPage=true';var option = '新建流程';ysp.customHelper.openWin(url, option);
      }
    },
    getTemplate_uiControl8_JQmua0: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div data-index=\'\u5F85\u529E\' onClick={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              data:e.target.dataset.index,\n              eventType:\'click\'\n            })\n          }\n        }}>\n        \u5F85\u529E\u6D41\u7A0B\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'div\',\n      { \'data-index\': \'\\u5F85\\u529E\', onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              data: e.target.dataset.index,\n              eventType: \'click\'\n            });\n          }\n        } },\n      \'\\u5F85\\u529E\\u6D41\\u7A0B\'\n    );\n  }\n});';
    }
  });
})(window, ysp);