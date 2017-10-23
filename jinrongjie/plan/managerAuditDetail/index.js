(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control20_psTrT0: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl20_N9hoUn: function (data, elem) {},
    getTemplate_uiControl20_N9hoUn: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData\n    return (\n      <div style={{'font-weight':'bold','font-size':'146x', 'text-align':'center'}}>\n        {data}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      'div',\n      { style: { 'font-weight': 'bold', 'font-size': '146x', 'text-align': 'center' } },\n      data\n    );\n  }\n});";
    },

    getData_control22_gQSvMW: function (elem) {},
    doAction_uiControl22_EqoDDT: function (data, elem) {},
    getTemplate_uiControl22_EqoDDT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  render: function() {\n    return (\n      <div className=\"ysp-manager-audit-header-tab\">\n        <div className=\"left-div\" >\u6D41\u7A0B\u8868\u5355</div>\n        <div className=\"left-div\" >\u6D41\u8F6C\u610F\u89C1</div>\n        <p className=\"border-bottom\"></p>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-manager-audit-header-tab\" },\n      React.createElement(\n        \"div\",\n        { className: \"left-div\" },\n        \"\\u6D41\\u7A0B\\u8868\\u5355\"\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"left-div\" },\n        \"\\u6D41\\u8F6C\\u610F\\u89C1\"\n      ),\n      React.createElement(\"p\", { className: \"border-bottom\" })\n    );\n  }\n});";
    },
    getData_control21_3XOAcm: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl21_c2lDLU: function (data, elem) {},
    getTemplate_uiControl21_c2lDLU: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    return (\n      <div style={{'font-size':'14px','color':'#868686', 'text-align':'center'}}>\n        \u7F16\u7801\uFF1A{data}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement(\n      'div',\n      { style: { 'font-size': '14px', 'color': '#868686', 'text-align': 'center' } },\n      '\\u7F16\\u7801\\uFF1A',\n      data\n    );\n  }\n});";
    }
  });
})(window, ysp);