(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control54_osXhz1: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { title: "",
          //提示
          tip: "" };if (elem.querySelector(".mini-panel-title")) {
          data.title = elem.querySelector(".mini-panel-title").textContent;
        }if (elem.querySelector(".mini-messagebox-content-text")) {
          //提示语
          data.tip = elem.querySelector(".mini-messagebox-content-text").textContent;
        }return data;
      }
    },
    doAction_uiControl51_MPMQMZ: function (data, elem) {
      if (data.eventType == "click") {
        console.log("aa");elem.querySelector(".mini-button-text").click();var json = { time: new Date().getTime() };setTimeout(function () {
          ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp");
        }, 10);
      }
    },
    getTemplate_uiControl51_MPMQMZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    console.log(\"bbb\")\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.customData||[];\n    \n   return (\n    <div>\n       {data&&data.title!=null&&data.tip!=null?\n      <div className=\"ysp_backBrowser_wrap\">\n       \t<div className=\"ysp_active\">\n          <span className=\"ysp_activeTitle\">{data.title}</span>\n          <div className=\"ysp_activeTip\">{data.tip}</div>\n          <span className=\"ysp_activeSure\" onClick={_this.onClick.bind(_this)}>\u786E\u5B9A</span>\n        </div></div>:\n       <div></div>\n       }\n      \n    </div>\n  )\n    \n   \n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    console.log(\"bbb\");\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData || [];\n\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.title != null && data.tip != null ? React.createElement(\n        \"div\",\n        { className: \"ysp_backBrowser_wrap\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp_active\" },\n          React.createElement(\n            \"span\",\n            { className: \"ysp_activeTitle\" },\n            data.title\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp_activeTip\" },\n            data.tip\n          ),\n          React.createElement(\n            \"span\",\n            { className: \"ysp_activeSure\", onClick: _this.onClick.bind(_this) },\n            \"\\u786E\\u5B9A\"\n          )\n        )\n      ) : React.createElement(\"div\", null)\n    );\n  }\n});";
    }
  });
})(window, ysp);