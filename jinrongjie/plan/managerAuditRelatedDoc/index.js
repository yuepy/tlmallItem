(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control32_RBmFTr: function (elem) {},
    doAction_uiControl18_79vAeM: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl18_79vAeM: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u76F8\u5173\u6587\u6863\"}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u76F8\u5173\u6587\u6863\" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control33_gaRRTO: function (elem) {
      if (!elem) {
        return;
      }var data = {};var titles = ['标题', '主目录', '文档所有者'];var content = [];if (!elem.querySelector("#BrowseTable")) {
        data.titles = titles;data.content = content;return data;
      }var doc = elem.querySelector("#BrowseTable");var trs = doc.querySelectorAll('tr');[].forEach.call(trs, function (trItem, trIndex) {
        var tds = trItem.querySelectorAll('td');var tdContent = [];[].forEach.call(tds, function (tdItem, tdIndex) {
          if (tdIndex != 0) {
            tdContent.push(tdItem.textContent.trim());
          }
        });content.push(tdContent);
      });data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl21_S9tvqE: function (data, elem) {},
    getTemplate_uiControl21_S9tvqE: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CommonHeader, ADialog} from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor(props) {// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n\t}\n\n\trender() {\n\t\tvar data = this.props.customData;\n\t\tvar titles = data.titles;\n\t\tvar content = data.content;\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div id=\"tableData\">\n\t\t\t\t\t<table style={{ 'width': '100%', 'text-align': 'center' }}>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t{titles.map((thItem, thIndex) => {\n\t\t\t\t\t\t\t\treturn (<th>{thItem}</th>);\n\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t{content.map((trItem, trIndex) => {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<tr data-index={trIndex} >\n\t\t\t\t\t\t\t\t\t{trItem.map((tdItem, tdIndex) => {\n\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t<td>{tdItem}</td>\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})}\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"selectedData\" style={{ 'border-top': '1px solid #ddd', 'margin': '20px 0' }}>\n          \u8FD9\u91CC\u5C55\u793A\u9009\u4E2D\u7684\u5185\u5BB9\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\t// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData;\n\t\t\tvar titles = data.titles;\n\t\t\tvar content = data.content;\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ id: 'tableData' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'table',\n\t\t\t\t\t\t{ style: { 'width': '100%', 'text-align': 'center' } },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'thead',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\ttitles.map(function (thItem, thIndex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tthItem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tcontent.map(function (trItem, trIndex) {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t'tr',\n\t\t\t\t\t\t\t\t{ 'data-index': trIndex },\n\t\t\t\t\t\t\t\ttrItem.map(function (tdItem, tdIndex) {\n\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t'td',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\ttdItem\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ id: 'selectedData', style: { 'border-top': '1px solid #ddd', 'margin': '20px 0' } },\n\t\t\t\t\t'\\u8FD9\\u91CC\\u5C55\\u793A\\u9009\\u4E2D\\u7684\\u5185\\u5BB9'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control12_0yipNy: function (elem) {},
    doAction_uiControl15_IFTFa2: function (data, elem) {},
    getTemplate_uiControl15_IFTFa2: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {Dialog,CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n\tconstructor(){\n    super();\n    this.state = {\n      open:false\n    }\n  }\n  \n  render(){\n    return(\n    \t<div className=\"ysp-related-doc-content\">\n      \t<div className=\"ysp-related-doc-search-logo\">\n        \t<span>\u6807\u8BC6</span>\n          <input></input>\n          <span>\u5B50\u76EE\u5F55</span>\n          <input></input>\n        </div>\n        <div className=\"ysp-related-doc-search-title\">\n        \t<span>\u6807\u9898</span>\n          <input></input>\n          <span>\u65E5\u671F</span>\n          <input type='date' data-num = '1' /> \u2014 <input type='date' data-num = '2'/>\n        </div>\n        <div>\n        \t<span>\u5458\u5DE5</span>\n          <input></input>\n          <span>\u5BA2\u6237</span>\n          <input></input>\n        </div>\n        <div>\n        \t<span>\u4FEE\u6539\u65E5\u671F</span>\n          <select>\n          \t<option>\u6700\u8FD16\u4E2A\u6708</option>\n            <option>\u6700\u8FD112\u4E2A\u6708</option>\n            <option>\u6700\u8FD118\u4E2A\u6708</option>\n            <option>\u5168\u90E8</option>\n          </select>\n          <span>\u641C\u7D22\uD83D\uDD0D</span>\n        </div>\n      </div>\n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this.state = {\n      open: false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-related-doc-content' },\n        React.createElement(\n          'div',\n          { className: 'ysp-related-doc-search-logo' },\n          React.createElement(\n            'span',\n            null,\n            '\\u6807\\u8BC6'\n          ),\n          React.createElement('input', null),\n          React.createElement(\n            'span',\n            null,\n            '\\u5B50\\u76EE\\u5F55'\n          ),\n          React.createElement('input', null)\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-related-doc-search-title' },\n          React.createElement(\n            'span',\n            null,\n            '\\u6807\\u9898'\n          ),\n          React.createElement('input', null),\n          React.createElement(\n            'span',\n            null,\n            '\\u65E5\\u671F'\n          ),\n          React.createElement('input', { type: 'date', 'data-num': '1' }),\n          ' \\u2014 ',\n          React.createElement('input', { type: 'date', 'data-num': '2' })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u5458\\u5DE5'\n          ),\n          React.createElement('input', null),\n          React.createElement(\n            'span',\n            null,\n            '\\u5BA2\\u6237'\n          ),\n          React.createElement('input', null)\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u4FEE\\u6539\\u65E5\\u671F'\n          ),\n          React.createElement(\n            'select',\n            null,\n            React.createElement(\n              'option',\n              null,\n              '\\u6700\\u8FD16\\u4E2A\\u6708'\n            ),\n            React.createElement(\n              'option',\n              null,\n              '\\u6700\\u8FD112\\u4E2A\\u6708'\n            ),\n            React.createElement(\n              'option',\n              null,\n              '\\u6700\\u8FD118\\u4E2A\\u6708'\n            ),\n            React.createElement(\n              'option',\n              null,\n              '\\u5168\\u90E8'\n            )\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\u641C\\u7D22\\uD83D\\uDD0D'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);