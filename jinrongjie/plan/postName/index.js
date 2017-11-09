(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control135_LFUZal: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { title: [], content: [] //标题
        };var ths = elem.querySelectorAll("th");for (var i = 0; i < ths.length; i++) {
          data.title.push(ths[i].textContent);
        }data.title.shift();data.title.pop(); //内容
        var trs = elem.querySelectorAll("tr");for (var n = 2; n < trs.length; n++) {
          var tds = trs[n].querySelectorAll("td");var tdsArr = [];tdsArr.push(tds[1].textContent);tdsArr.push(tds[2].textContent);data.content.push(tdsArr);
        }return data;
      }
    },
    doAction_uiControl111_PdKFVi: function (data, elem) {
      if (data.eventType == "click") {
        var i = parseInt(data.dataCustom.i + 2);elem.querySelectorAll("tr")[i].click();elem.ownerDocument.defaultView.parent.opener.document.querySelector('#field28481span').textContent = data.dataCustom.val;
      }
    },
    getTemplate_uiControl111_PdKFVi: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var _this=this;\n    var d=_this.props.customData;\n    return (\n    \t<div className=\"ysp_jobStation_table\">\n      \t<div className=\"title\">\n        \t<span>\u5C97\u4F4D\u540D\u79F0</span>\n          <span>\u5C97\u4F4D\u7F16\u7801</span>\n        </div>\n        <div className=\"content\">\n        \t{d.content.map(function(d,i){\n            return(\n              <div className=\"rows\" data-i={i} onClick={(e)=>{\n                  var handler=_this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:{i:e.target.dataset.i,val:d[0]},\n                      eventType:\"click\"\n                    })\n                  }\n                }}>\n                <span data-i={i}>{d[0]}</span>\n                <span data-i={i}>{d[1]}</span>\n              </div>\n            )\n          })}\n        </div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var d = _this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_jobStation_table\" },\n        React.createElement(\n          \"div\",\n          { className: \"title\" },\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u5C97\\u4F4D\\u540D\\u79F0\"\n          ),\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u5C97\\u4F4D\\u7F16\\u7801\"\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"content\" },\n          d.content.map(function (d, i) {\n            return React.createElement(\n              \"div\",\n              { className: \"rows\", \"data-i\": i, onClick: function onClick(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: { i: e.target.dataset.i, val: d[0] },\n                      eventType: \"click\"\n                    });\n                  }\n                } },\n              React.createElement(\n                \"span\",\n                { \"data-i\": i },\n                d[0]\n              ),\n              React.createElement(\n                \"span\",\n                { \"data-i\": i },\n                d[1]\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control136_TQ0Q4H: function (elem) {},
    doAction_uiControl112_kUeDPS: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl112_kUeDPS: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u5C97\u4F4D\u540D\u79F0\"}} \n       backIsShow = {true}\n        editIsShow={true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u5C97\u4F4D\u540D\u79F0\" },\n        backIsShow: true,\n        editIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control137_2lSzZL: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        return elem.value;
      }
    },
    doAction_uiControl116_Cu7o5z: function (data, elem) {
      if (data.eventType == "click") {
        // ysp.customHelper.fireKeyEvent(elem, "keydown", "13");
        // ysp.customHelper.fireKeyEvent(elem, "keyup", "13");
        // var e = new Event("keydown");
        // e.keyCode = 13;
        // elem.dispatchEvent(e);
        ysp.utils.Element.type(elem, data.dataCustom);
      } else if (data.eventType == "change") {
        elem.value = data.dataCustom;elem.dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl116_Cu7o5z: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  constructor(props){\n    super(props)\n    this.state={\n      val:this.props.customData\n    }\n  }\n  render(){\n    var _this=this;\n    return (\n    \t<div className=\"ysp_stationName\">\n      \t<div className=\"top\">\n          <span className=\"title\">\u5C97\u4F4D\u540D\u79F0</span>\n          <input placeholder=\"\u8BF7\u67E5\u8BE2\" value={_this.state.val} onChange={(e)=>{\n           \tvar _this=this;\n            var handler=_this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n                eventType:\"change\"\n              })\n            }\n              _this.setState({\n                val:e.target.value\n              })\n            }}/>\n        </div>\n        <input className=\"search\" type=\"button\" value=\"\u641C\u7D22\" onClick={(e)=>{\n            var _this=this;\n            var handler=_this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.previousElementSibling.querySelector(\"input\").value,\n                eventType:\"click\"\n              })\n            }\n          }}/>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      val: _this2.props.customData\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_stationName\" },\n        React.createElement(\n          \"div\",\n          { className: \"top\" },\n          React.createElement(\n            \"span\",\n            { className: \"title\" },\n            \"\\u5C97\\u4F4D\\u540D\\u79F0\"\n          ),\n          React.createElement(\"input\", { placeholder: \"\\u8BF7\\u67E5\\u8BE2\", value: _this.state.val, onChange: function onChange(e) {\n              var _this = _this3;\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: e.target.value,\n                  eventType: \"change\"\n                });\n              }\n              _this.setState({\n                val: e.target.value\n              });\n            } })\n        ),\n        React.createElement(\"input\", { className: \"search\", type: \"button\", value: \"\\u641C\\u7D22\", onClick: function onClick(e) {\n            var _this = _this3;\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: e.target.previousElementSibling.querySelector(\"input\").value,\n                eventType: \"click\"\n              });\n            }\n          } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);