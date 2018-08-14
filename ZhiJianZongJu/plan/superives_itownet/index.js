(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_4IixOf: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl9_bFR8rb: function (data, elem) {},
    getTemplate_uiControl9_bFR8rb: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u6570\u5B57\u8D28\u91CF\u76D1\u7763\">\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u6570\\u5B57\\u8D28\\u91CF\\u76D1\\u7763' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    }
  }, "superives_itownet");
})(window, ysp);