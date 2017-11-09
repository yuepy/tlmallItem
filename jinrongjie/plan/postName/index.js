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
    doAction_uiControl111_PdKFVi: function (data, elem) {},
    getTemplate_uiControl111_PdKFVi: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
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
    }
  });
})(window, ysp);