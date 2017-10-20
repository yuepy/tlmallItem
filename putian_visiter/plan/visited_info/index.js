(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control21: function (elem) {},
    doAction_uiControl27: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl27: function () {
      var selfTemplate = "var BackBtn = require('ysp-custom-components').BackBtn;\nmodule.exports = React.createClass({\n  render: function() {\n    return <BackBtn handler={this.props.customHandler} />;\n  }\n});\n";
      return "'use strict';\n\nvar BackBtn = require('ysp-custom-components').BackBtn;\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(BackBtn, { handler: this.props.customHandler });\n  }\n});";
    },
    getData_control22: function (elem) {},
    doAction_uiControl30: function (data, elem) {},
    getTemplate_uiControl30: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.handleClick} className=\"visiter-div\">\n        <span className=\"icon-house\"></span>\n        <span className=\"visiter-title\">\u7F8E\u901A\u8FD0\u52A8\u79D1\u6280\u6709\u9650\u516C\u53F8</span>\n        <span className=\"icon-right\"></span>\n      </div>\n    );\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { onClick: this.handleClick, className: 'visiter-div' },\n      React.createElement('span', { className: 'icon-house' }),\n      React.createElement(\n        'span',\n        { className: 'visiter-title' },\n        '\\u7F8E\\u901A\\u8FD0\\u52A8\\u79D1\\u6280\\u6709\\u9650\\u516C\\u53F8'\n      ),\n      React.createElement('span', { className: 'icon-right' })\n    );\n  }\n});";
    },
    getData_control23: function (elem) {},
    doAction_uiControl31: function (data, elem) {},
    getTemplate_uiControl31: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <ul className=\"mcc-visit-info\">\n        <li>\n          <span className=\"icon-clock-gray\"></span>\n          <span className=\"mcc-key\">\u65F6\u95F4</span>\n          <span className=\"mcc-value\">2016\u5E749\u670818\u65E5 21:47</span>\n        </li>\n        <li onClick={this.handleClick}>\n          <span className=\"icon-addr\"></span>\n          <span className=\"mcc-key\">\u5730\u5740</span>\n          <span className=\"mcc-value\">\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u6D77\u6DC0\u5927\u8857</span>\n        </li>\n      </ul>\n    );\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'ul',\n      { className: 'mcc-visit-info' },\n      React.createElement(\n        'li',\n        null,\n        React.createElement('span', { className: 'icon-clock-gray' }),\n        React.createElement(\n          'span',\n          { className: 'mcc-key' },\n          '\\u65F6\\u95F4'\n        ),\n        React.createElement(\n          'span',\n          { className: 'mcc-value' },\n          '2016\\u5E749\\u670818\\u65E5 21:47'\n        )\n      ),\n      React.createElement(\n        'li',\n        { onClick: this.handleClick },\n        React.createElement('span', { className: 'icon-addr' }),\n        React.createElement(\n          'span',\n          { className: 'mcc-key' },\n          '\\u5730\\u5740'\n        ),\n        React.createElement(\n          'span',\n          { className: 'mcc-value' },\n          '\\u5317\\u4EAC\\u5E02\\u6D77\\u6DC0\\u533A\\u6D77\\u6DC0\\u5927\\u8857'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control24: function (elem) {},
    doAction_uiControl32: function (data, elem) {},
    getTemplate_uiControl32: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"visited-detail\">\u4ECA\u5929\u62DC\u8BBF\u4E86\u7F8E\u901A\u4E91\u52A8\u516C\u53F8\uFF0C\u6709\u51E0\u70B9\u95EE\u9898\u9700\u8981\u56DE\u516C\u53F8\u786E\u8BA4\u4E00\u4E0B\uFF0C\u4E0B\u5468\u4F1A\u89C1\u4E2D\u56FD\u79FB\u52A8\u7684\u9879\u76EE\u7ECF\u7406</div>\n    );\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'visited-detail' },\n      '\\u4ECA\\u5929\\u62DC\\u8BBF\\u4E86\\u7F8E\\u901A\\u4E91\\u52A8\\u516C\\u53F8\\uFF0C\\u6709\\u51E0\\u70B9\\u95EE\\u9898\\u9700\\u8981\\u56DE\\u516C\\u53F8\\u786E\\u8BA4\\u4E00\\u4E0B\\uFF0C\\u4E0B\\u5468\\u4F1A\\u89C1\\u4E2D\\u56FD\\u79FB\\u52A8\\u7684\\u9879\\u76EE\\u7ECF\\u7406'\n    );\n  }\n});";
    }
  });
})(window, ysp);