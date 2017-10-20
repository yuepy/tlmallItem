(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control138_JGI38H: function (elem) {
      if (elem) return true; return false;
    },
    doAction_uiControl124_Kwo47d: function (data, elem) {
      if (data.eventType === 'click') {
        //ysp.runtime.Model.setForceMatchModels(["login"]);
        elem.click();
      }
    },
    getTemplate_uiControl124_Kwo47d: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function(){\n    let _this = this;\n    return (\n      <div className=\"ysp-session-btn-container\">\n        <AMUI.Button\n          onClick={()=>{\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'click'\n                });\n              }\n          }}\n          amStyle=\"secondary\"\n          block={true}\n          amSize = \"sm\"\n          >\u56DE\u5230\u767B\u5F55\u9875</AMUI.Button>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-session-btn-container\" },\n      React.createElement(\n        AMUI.Button,\n        {\n          onClick: function onClick() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'click'\n              });\n            }\n          },\n          amStyle: \"secondary\",\n          block: true,\n          amSize: \"sm\"\n        },\n        \"\\u56DE\\u5230\\u767B\\u5F55\\u9875\"\n      )\n    );\n  }\n});";
    },
    getData_control6_e0Tgsz: function (elem) {
      if (elem) return true; return false;
    },
    doAction_uiControl8_7CoOxE: function (data, elem) {},
    getTemplate_uiControl8_7CoOxE: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u4F1A\u8BDD\u5F02\u5E38\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={false} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u4F1A\u8BDD\u5F02\u5E38\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: false,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control137_uTo6T5: function (elem) {
      if (elem) return true; return false;
    },
    doAction_uiControl95_Mg8JrZ: function (data, elem) {},
    getTemplate_uiControl95_Mg8JrZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function(){\n    return (\n      <div className=\"ysp-session-tip\">\n        \u60A8\u5DF2\u5728\u4E00\u4E2A Siebel \u4F1A\u8BDD\u5F53\u524D\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u65F6\u542F\u52A8\u4E86\u53E6\u4E00\u4E2A Siebel \u4F1A\u8BDD\u3002\u8BF7\u9009\u62E9\u9002\u7528\u4E8E\u60A8\u7684\u9009\u9879\u3002\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-session-tip\" },\n      \"\\u60A8\\u5DF2\\u5728\\u4E00\\u4E2A Siebel \\u4F1A\\u8BDD\\u5F53\\u524D\\u5904\\u4E8E\\u6D3B\\u52A8\\u72B6\\u6001\\u65F6\\u542F\\u52A8\\u4E86\\u53E6\\u4E00\\u4E2A Siebel \\u4F1A\\u8BDD\\u3002\\u8BF7\\u9009\\u62E9\\u9002\\u7528\\u4E8E\\u60A8\\u7684\\u9009\\u9879\\u3002\"\n    );\n  }\n});";
    }
  });
})(window, ysp);