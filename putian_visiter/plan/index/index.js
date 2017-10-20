(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {},
    doAction_uiControl1: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl1: function () {
      var selfTemplate = "var BcakBtn = require('ysp-custom-components').BackBtn;\n\nmodule.exports = React.createClass({\n  render: function(){\n    return (\n      <BcakBtn handler={this.props.customHandler}/>\n    )\n  }\n});";
      return "'use strict';\n\nvar BcakBtn = require('ysp-custom-components').BackBtn;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(BcakBtn, { handler: this.props.customHandler });\n  }\n});";
    },
    getData_control1: function (elem) {},
    doAction_uiControl3: function (data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl3: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <button className=\"mcc-btn green\" onClick={this.handleClick}>\n        <span>\n           <span className=\"icon-add\"></span>\n        </span>\n        <span>\u521B\u5EFA\u5BA2\u6237\u62DC\u8BBF</span>\n      </button>\n    );\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'button',\n      { className: 'mcc-btn green', onClick: this.handleClick },\n      React.createElement(\n        'span',\n        null,\n        React.createElement('span', { className: 'icon-add' })\n      ),\n      React.createElement(\n        'span',\n        null,\n        '\\u521B\\u5EFA\\u5BA2\\u6237\\u62DC\\u8BBF'\n      )\n    );\n  }\n});";
    },
    getData_control2: function (elem) {},
    doAction_uiControl4: function (data, elem) {
      if (data.eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl4: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <button onClick={this.handleClick} className=\"mcc-btn yellow\"><span><span className=\"icon-clock\"></span></span><span>\u5BA2\u6237\u62DC\u8BBF\u8BB0\u5F55</span></button>\n    );\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'button',\n      { onClick: this.handleClick, className: 'mcc-btn yellow' },\n      React.createElement(\n        'span',\n        null,\n        React.createElement('span', { className: 'icon-clock' })\n      ),\n      React.createElement(\n        'span',\n        null,\n        '\\u5BA2\\u6237\\u62DC\\u8BBF\\u8BB0\\u5F55'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);