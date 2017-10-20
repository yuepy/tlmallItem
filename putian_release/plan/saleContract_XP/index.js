(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control28: function (elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl40: function (data, elem) {
      var id = data.dataCustom.id;
      var value = data.dataCustom.value;
      var eventType = data.eventType;
      var el;
      var _doc = win.top.document;

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

        if (index) {
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
    getTemplate_uiControl40: function () {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};';
    },
    getData_control29: function (elem) {},
    doAction_uiControl37: function (data, elem) {},
    getTemplate_uiControl37: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nexport default () => <Header title="\u9500\u552E\u5408\u540C" ><HeaderLeft componentType="button">\u8FD4\u56DE</HeaderLeft></Header>';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspInteriorComponents = require("ysp-interior-components");\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { title: "\\u9500\\u552E\\u5408\\u540C" },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      { componentType: "button" },\n      "\\u8FD4\\u56DE"\n    )\n  );\n};';
    }
  });
})(window, ysp);