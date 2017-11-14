(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control163: function (elem) {
      var w = elem.ownerDocument.defaultView;return w.CKEDITOR.instances['remark'].getData();
    },
    doAction_uiControl20: function (data, elem) {
      if (data.eventType == 'onChange') {
        var text = data.dataCustom;var w = elem.ownerDocument.defaultView;w.CKEDITOR.instances['remark'].setData(text);
      }
    },
    getTemplate_uiControl20: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  render=()=>{\n    \n    return(\n      <textarea onChange={(e)=>{\n          var handler=this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'onChange',\n              data:e.target.value\n            })\n          } \n        } \n      }>\n      </textarea>\n    )\n  }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n\n      return React.createElement('textarea', { onChange: function onChange(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'onChange',\n              data: e.target.value\n            });\n          }\n        } });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);