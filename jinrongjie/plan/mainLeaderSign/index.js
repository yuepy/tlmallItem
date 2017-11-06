(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control70_Lm9HTE: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');[].forEach.call(tds, function (item, index) {
        if (item.querySelector('input')) {
          data.title = item.querySelector('input').value || [];
        }
      });return data;
    },
    doAction_uiControl66_PZscPM: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl66_PZscPM: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CommonHeader } from \'ysp-custom-components\';\nexport default class extends Component {\n    render() {\n        var data = this.props.customData;\n      \tvar title = data&&data.title;\n        return (\n            <CommonHeader\n                data={{ centerText: title && title }}\n                backIsShow={true}\n                editIsShow={true}\n                rightText=\'\u4FDD\u5B58\'\n                save={(e) => {\n                    var handler = this.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'save1\'\n                        })\n                    }\n                }}\n                back={(e) => {\n                    var handler = this.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'click\'\n                        })\n                    }\n                }}\n            />\n        )\n    }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n    _inherits(_class, _Component);\n\n    function _class() {\n        _classCallCheck(this, _class);\n\n        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    _createClass(_class, [{\n        key: \'render\',\n        value: function render() {\n            var _this2 = this;\n\n            var data = this.props.customData;\n            var title = data && data.title;\n            return React.createElement(_yspCustomComponents.CommonHeader, {\n                data: { centerText: title && title },\n                backIsShow: true,\n                editIsShow: true,\n                rightText: \'\\u4FDD\\u5B58\',\n                save: function save(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'save1\'\n                        });\n                    }\n                },\n                back: function back(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'click\'\n                        });\n                    }\n                }\n            });\n        }\n    }]);\n\n    return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control73_6c0Euv: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = [];var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data[0] = title;data[1] = numbering;return data;
    },
    doAction_uiControl67_78HHZ2: function (data, elem) {},
    getTemplate_uiControl67_78HHZ2: function () {
      var selfTemplate = 'module.exports = React.createClass({\n    render: function () {\n        var data = this.props.customData||[];\n        return (\n            <div>\n                <div className="ysp-manager-audit-title">\n                    <div className="ysp-manager-audit-main-title">{data instanceof Array && data[0]}</div>\n                    <div className="ysp-manager-audit-subtitle">\n                        <span>\u7F16\u53F7\uFF1A</span>\n                        <span>{data instanceof Array && data[1]}</span>\n                    </div>\n                </div>\n            </div>\n        )\n    }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n    displayName: "exports",\n\n    render: function render() {\n        var data = this.props.customData || [];\n        return React.createElement(\n            "div",\n            null,\n            React.createElement(\n                "div",\n                { className: "ysp-manager-audit-title" },\n                React.createElement(\n                    "div",\n                    { className: "ysp-manager-audit-main-title" },\n                    data instanceof Array && data[0]\n                ),\n                React.createElement(\n                    "div",\n                    { className: "ysp-manager-audit-subtitle" },\n                    React.createElement(\n                        "span",\n                        null,\n                        "\\u7F16\\u53F7\\uFF1A"\n                    ),\n                    React.createElement(\n                        "span",\n                        null,\n                        data instanceof Array && data[1]\n                    )\n                )\n            )\n        );\n    }\n});';
    },
    getData_control74_U4mcfD: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var tds = $(trItem).children('td');
        });
      }
    },
    doAction_uiControl68_2Fx8KL: function (data, elem) {},
    getTemplate_uiControl68_2Fx8KL: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    }
  });
})(window, ysp);