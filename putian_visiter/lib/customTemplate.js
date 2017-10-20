(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    BackBtn: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click: function() {\n    var handler = this.props.handler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <button className=\"back-btn\" onClick={this.click}>\n        <span className=\"icon-back\"></span>\n        <span>\u8FD4\u56DE</span>\n      </button>\n    );\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click() {\n    var handler = this.props.handler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"button\",\n      { className: \"back-btn\", onClick: this.click },\n      React.createElement(\"span\", { className: \"icon-back\" }),\n      React.createElement(\n        \"span\",\n        null,\n        \"\\u8FD4\\u56DE\"\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);