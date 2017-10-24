(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control22_gQSvMW: function (elem) {},
    doAction_uiControl22_EqoDDT: function (data, elem) {// }
    },
    getTemplate_uiControl22_EqoDDT: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n\t\n\tconstructor(props){// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n    this.state={\n      activeTab:0\n    }\n\t}\n\n\tbtnClick(e){//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n    var target=e.target;\n    var index=target.getAttribute(\"data-index\");\n    this.setState(\n    \tfunction(prevState){\n        if(prevState.activeTab==0){\n          return {\n            activeTab:1\n          }\n        }else{\n          return {\n            activeTab:0\n          }\n        }\n      }\n    );\n  }\n\n\t// render\u65B9\u6CD5-->\u6E32\u67D3\n  render(){\n    var _this = this;\n    return (\n      <div className=\"ysp-manager-audit-header-tab\">\n\t\t\t\t\t<div className=\"left-div\" data-index=\"0\" onClick={_this.btnClick.bind(_this)}><i data-index=\"0\"></i><span data-index=\"0\" className={this.state.activeTab === 0 ? \"active_tab\" : \"\"}>\u6D41\u7A0B\u8868\u5355</span></div>\n\t\t\t\t\t<div className=\"left-div\" data-index=\"1\" onClick={_this.btnClick.bind(_this)}><i data-index=\"1\"></i><span data-index=\"1\" className={this.state.activeTab === 1 ? \"active_tab\" : \"\"}>\u6D41\u8F6C\u610F\u89C1</span></div>\n\t\t\t\t\t<p className=\"border-bottom\"></p>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n    _this2.state = {\n      activeTab: 0\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      //\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n      var target = e.target;\n      var index = target.getAttribute(\"data-index\");\n      this.setState(function (prevState) {\n        if (prevState.activeTab == 0) {\n          return {\n            activeTab: 1\n          };\n        } else {\n          return {\n            activeTab: 0\n          };\n        }\n      });\n    }\n\n    // render\u65B9\u6CD5-->\u6E32\u67D3\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-header-tab' },\n        React.createElement(\n          'div',\n          { className: 'left-div', 'data-index': '0', onClick: _this.btnClick.bind(_this) },\n          React.createElement('i', { 'data-index': '0' }),\n          React.createElement(\n            'span',\n            { 'data-index': '0', className: this.state.activeTab === 0 ? \"active_tab\" : \"\" },\n            '\\u6D41\\u7A0B\\u8868\\u5355'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'left-div', 'data-index': '1', onClick: _this.btnClick.bind(_this) },\n          React.createElement('i', { 'data-index': '1' }),\n          React.createElement(\n            'span',\n            { 'data-index': '1', className: this.state.activeTab === 1 ? \"active_tab\" : \"\" },\n            '\\u6D41\\u8F6C\\u610F\\u89C1'\n          )\n        ),\n        React.createElement('p', { className: 'border-bottom' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control25_PhAtSh: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = {};var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data.title = title;data.numbering = numbering;var ddddsadf = 0;return data;
    },
    doAction_uiControl25_U9iq0i: function (data, elem) {},
    getTemplate_uiControl25_U9iq0i: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    var title = data.title;\n    var numbering = data.numbering;\n    return (\n      <div>\n        <div>\n        \t<div>{title&&title}</div>\n          <div>\n            <span>\u7F16\u53F7\uFF1A</span>\n            {numbering&&numbering}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var title = data.title;\n    var numbering = data.numbering;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"div\",\n          null,\n          title && title\n        ),\n        React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u7F16\\u53F7\\uFF1A\"\n          ),\n          numbering && numbering\n        )\n      )\n    );\n  }\n});";
    },
    getData_control23_nAAQod: function (elem) {
      if (!elem) {
        return null;
      }var data = {};var content = [];var titles = [];if (!elem.querySelector('tbody')) {
        return null;
      }var tbody = elem.querySelector('tbody');if (!tbody.querySelectorAll('tr')) {
        return null;
      }var tbodyTrs = tbody.querySelectorAll('tr');var trlength = null; //tmp
      trlength = tbodyTrs.length;[].forEach.call(tbodyTrs, function (trItem, trIndex) {
        var tds = trItem.querySelectorAll('td');if (trIndex == 0) {
          [].forEach.call(tds, function (tdItem, tdIndex) {
            if (!tdItem.querySelector('span')) {
              titles.push(tdItem.textContent);
            } else {
              content.push(tdItem.textContent);
            }
          });
        }if (trIndex == 1) {
          [].forEach.call(tds, function (tdItem, tdIndex) {
            if (!tdItem.querySelector('select') && !tdItem.querySelector('span')) {
              titles.push(tdItem.textContent);
            } else {
              if (tdItem.querySelector('select')) {
                var optionIndex = tdItem.querySelector('select').selectedIndex;content.push(tdItem.querySelector('select').options[optionIndex].innerHTML);
              } else {
                content.push(tdItem.textContent);
              }
            }
          });
        }if (trIndex == 2) {
          [].forEach.call(tds, function (tdItem, tdIndex) {
            if (!tdItem.querySelector('input')) {
              titles.push(tdItem.textContent);
            } else {
              content.push(tdItem.querySelector('input').value);
            }
          });
        }if (trIndex == 3) {
          [].forEach.call(tds, function (tdItem, tdIndex) {
            if (!tdItem.querySelector('textarea')) {
              titles.push(tdItem.textContent);
            } else {
              content.push(tdItem.querySelector('textarea').value);
            }
          });
        }
      });data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl23_PUM7iP: function (data, elem) {},
    getTemplate_uiControl23_PUM7iP: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCustomHeader, Dialog, Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  render (){\n    var data = this.props.data.customData;\n    var titles = data.titles;\n    var content = data.content;\n    return (\n      <div className=\"ysp-manager-audit-wrapper\">\n        <span className=\"left-border\"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n        {titles ? titles.map((item,index)=>{\n          return (\n            <div>\n          \t\t<div className=\"title\">{item}</div>\n              <div className=\"content\">{content[index]}</div>\n            </div>\n          );\n        }):'\u65E0\u6570\u636E'}\n\t\t\t</div>\n    );\n  }\n\t\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.data.customData;\n      var titles = data.titles;\n      var content = data.content;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-wrapper' },\n        React.createElement('span', { className: 'left-border' }),\n        React.createElement(\n          'span',\n          null,\n          '\\u57FA\\u672C\\u4FE1\\u606F'\n        ),\n        titles ? titles.map(function (item, index) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'title' },\n              item\n            ),\n            React.createElement(\n              'div',\n              { className: 'content' },\n              content[index]\n            )\n          );\n        }) : '\u65E0\u6570\u636E'\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control24_s2hR81: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');[].forEach.call(tds, function (item, index) {
        if (item.querySelector('input')) {
          data.title = item.querySelector('input').value;
        }
      });return data;
    },
    doAction_uiControl24_s3lOQh: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl24_s3lOQh: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var title = this.props.data.customData.title;\n    return (\n    \t<CommonHeader \n       data={{centerText:title&&title}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var title = this.props.data.customData.title;\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: title && title },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);