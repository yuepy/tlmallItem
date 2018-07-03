(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control172_pAOEAo: function (elem) {},
    doAction_uiControl172_qpwrqq: function (data, elem) {
      if ('click' == data.eventType) {
        var title = data.dataCustom;if ('待办' == title) {
          elem.querySelectorAll("li")[0].querySelector("a").click();
        } else {
          // var url = ysp.appMain.getActiveUrl();
          // ysp.appMain.openWindow(url);
          elem.querySelectorAll("li")[1].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl172_qpwrqq: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handlerClick:function(e){\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: title,\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div>\n        <div data-title = "\u5F85\u529E" onClick={this.handlerClick.bind(this)}>\u5F85\u529E</div>\n        <div data-title = "\u5DF2\u529E" onClick={this.handlerClick.bind(this)}>\u5DF2\u529E</div>\n      </div>\n    )\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: title,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { \"data-title\": \"\\u5F85\\u529E\", onClick: this.handlerClick.bind(this) },\n        \"\\u5F85\\u529E\"\n      ),\n      React.createElement(\n        \"div\",\n        { \"data-title\": \"\\u5DF2\\u529E\", onClick: this.handlerClick.bind(this) },\n        \"\\u5DF2\\u529E\"\n      )\n    );\n  }\n});";
    }
  }, "commission");
})(window, ysp);