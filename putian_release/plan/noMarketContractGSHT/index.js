(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control23: function (elem) {},
    doAction_uiControl26: function (data, elem) {},
    getTemplate_uiControl26: function () {
      var selfTemplate = "import appRenderer from 'appRenderer';\nexport default () =>\n  <header className=\"navbar navbar-primary header\">\n    <h2 className=\"navbar-title navbar-center\">\u975E\u91C7\u9500\u5408\u540C</h2>\n    <div className=\"navbar-nav navbar-left\">\n      <a onClick={appRenderer.back} className=\"navbar-nav-item\">\n        <span className=\"navbar-nav-title\">\u8FD4\u56DE</span>\n        <span className=\"icon icon-left-nav navbar-icon\"></span>\n      </a>\n    </div>\n  </header>";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _appRenderer = require(\"appRenderer\");\n\nvar _appRenderer2 = _interopRequireDefault(_appRenderer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  return React.createElement(\n    \"header\",\n    { className: \"navbar navbar-primary header\" },\n    React.createElement(\n      \"h2\",\n      { className: \"navbar-title navbar-center\" },\n      \"\\u975E\\u91C7\\u9500\\u5408\\u540C\"\n    ),\n    React.createElement(\n      \"div\",\n      { className: \"navbar-nav navbar-left\" },\n      React.createElement(\n        \"a\",\n        { onClick: _appRenderer2.default.back, className: \"navbar-nav-item\" },\n        React.createElement(\n          \"span\",\n          { className: \"navbar-nav-title\" },\n          \"\\u8FD4\\u56DE\"\n        ),\n        React.createElement(\"span\", { className: \"icon icon-left-nav navbar-icon\" })\n      )\n    )\n  );\n};";
    },
    getData_control24: function (elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl27: function (data, elem) {
      var id = data.dataCustom.id;
      var value = data.dataCustom.value;
      var eventType = data.eventType;
      var el;

      if (!id) {
        return;
      }

      el = elem.querySelector('#' + id);

      if (!el) {
        return;
      }

      if (eventType === 'click') {
        el.click();
      } else if (eventType === 'change') {
        el.value = value;
        el.dispatchEvent(new Event('change'));
      } else if (eventType === 'linkClick') {
        var index = data.dataCustom.index;

        if (!isNaN(index)) {
          var a = el.querySelectorAll('a')[+index];
          var link = a.href;

          if (window.top.EAPI.isIOS()) {
            window.top.EAPI.openWindow(link, "file");
          } else if (window.top.EAPI.isAndroid()) {
            if (a) {
              a.click();
            }
          }
        }
      }
    },
    getTemplate_uiControl27: function () {
      var selfTemplate = "import { GetFormTemplate } from 'ysp-custom-components';\nexport default (props) => <GetFormTemplate {...props} />";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};";
    },
    getData_control26: function (elem) {},
    doAction_uiControl29: function (data, elem) {},
    getTemplate_uiControl29: function () {
      var selfTemplate = "export default () => <AMUI.Button block onClick={() => {$('#file').click();}}>\u4E0A\u4F20\u6587\u4EF6</AMUI.Button>";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  return React.createElement(\n    AMUI.Button,\n    { block: true, onClick: function onClick() {\n        $('#file').click();\n      } },\n    '\\u4E0A\\u4F20\\u6587\\u4EF6'\n  );\n};";
    },
    getData_control27: function (elem) {
      if (elem) {
        var returnData = [];
        var trs = elem.querySelectorAll('tr');
        var trsLen = trs.length;

        if (trs[0]) {
          for (var i = 0; i < trsLen; i++) {
            if (trs[i].querySelector('.name')) returnData.push(trs[i].querySelector('.name').textContent);
          }
        }

        return returnData;
      }
      return [];
    },
    doAction_uiControl36: function (data, elem) {
      if (data.eventType === 'click') {
        elem.querySelectorAll('tr')[data.dataCustom].querySelector('.delete button').click();
      }
    },
    getTemplate_uiControl36: function () {
      var selfTemplate = "export default ({ data, customHandler }) =>\n  <div>\n\t\t{data.customData.map((item, index) => <AMUI.Card onClick={() => {if (customHandler) customHandler({ data: index, eventType: 'click' }) }} key={index}><p>{item}</p></AMUI.Card>)}\n\t</div>";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nexports.default = function (_ref) {\n\t\tvar data = _ref.data;\n\t\tvar customHandler = _ref.customHandler;\n\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tdata.customData.map(function (item, index) {\n\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\tAMUI.Card,\n\t\t\t\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\t\t\tif (customHandler) customHandler({ data: index, eventType: 'click' });\n\t\t\t\t\t\t\t\t\t\t}, key: index },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t})\n\t\t);\n};";
    }
  });
})(window, ysp);