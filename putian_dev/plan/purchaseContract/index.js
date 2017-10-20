(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      return '返回';
    },
    doAction_uiControl5: function (data, elem) {
      ysp.runtime.Flow.setLastFlow('uiControl5', 'context0');
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl5: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        ysp.source.postMessage({resultType: \'loading\'});\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className=\'distribution-header-left-btn\' onClick={this.onClick}></button>)\n    }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         ysp.source.postMessage({ resultType: 'loading' });\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    },
    getData_control2: function (elem) {
      return ysp.customHelper.getFormData(elem);

    },
    doAction_uiControl0: function (data, elem) {
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
    getTemplate_uiControl0: function () {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};";
    },
    getData_control16: function (elem) {},
    doAction_uiControl26: function (data, elem) {
      if (data.eventType === 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl26: function () {
      var selfTemplate = "export default class extends React.Component{\n  \n  handleClick = () => {\n  \tconst handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  };\n\t\n  render() {\n  \treturn (\n    \t<AMUI.Button block className=\"purchase-dialog-btn\" onClick={this.handleClick}>参考数</AMUI.Button>\n    );\n  }\n}";
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      return React.createElement(\n        AMUI.Button,\n        { block: true, className: "purchase-dialog-btn", onClick: this.handleClick },\n        "参考数"\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);