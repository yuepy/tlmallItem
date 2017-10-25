(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control22_gQSvMW: function (elem) {},
    doAction_uiControl22_EqoDDT: function (data, elem) {// }
    },
    getTemplate_uiControl22_EqoDDT: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n\t\n\tconstructor(props){// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n    this.state={\n      activeTab:0\n    }\n\t}\n\n\tbtnClick(e){//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n    var target=e.target;\n    var index=target.getAttribute(\"data-index\");\n    this.setState(\n    \tfunction(prevState){\n        if(prevState.activeTab==0 && index==1){\n          return {\n            activeTab:1\n          }\n        }else if(prevState.activeTab==1 && index==0){\n          return {\n            activeTab:0\n          }\n        }\n      }\n    );\n  }\n\n\t// render\u65B9\u6CD5-->\u6E32\u67D3\n  render(){\n    var _this = this;\n    return (\n      <div className=\"ysp-manager-audit-header-tab\">\n\t\t\t\t\t<div className=\"left-div\" data-index=\"0\" onClick={_this.btnClick.bind(_this)}><i data-index=\"0\"></i><span data-index=\"0\" className={this.state.activeTab === 0 ? \"active_tab\" : \"\"}>\u6D41\u7A0B\u8868\u5355</span></div>\n\t\t\t\t\t<div className=\"left-div\" data-index=\"1\" onClick={_this.btnClick.bind(_this)}><i data-index=\"1\"></i><span data-index=\"1\" className={this.state.activeTab === 1 ? \"active_tab\" : \"\"}>\u6D41\u8F6C\u610F\u89C1</span></div>\n\t\t\t\t\t<p className=\"border-bottom\"></p>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n    _this2.state = {\n      activeTab: 0\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      //\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n      var target = e.target;\n      var index = target.getAttribute(\"data-index\");\n      this.setState(function (prevState) {\n        if (prevState.activeTab == 0 && index == 1) {\n          return {\n            activeTab: 1\n          };\n        } else if (prevState.activeTab == 1 && index == 0) {\n          return {\n            activeTab: 0\n          };\n        }\n      });\n    }\n\n    // render\u65B9\u6CD5-->\u6E32\u67D3\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-header-tab' },\n        React.createElement(\n          'div',\n          { className: 'left-div', 'data-index': '0', onClick: _this.btnClick.bind(_this) },\n          React.createElement('i', { 'data-index': '0' }),\n          React.createElement(\n            'span',\n            { 'data-index': '0', className: this.state.activeTab === 0 ? \"active_tab\" : \"\" },\n            '\\u6D41\\u7A0B\\u8868\\u5355'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'left-div', 'data-index': '1', onClick: _this.btnClick.bind(_this) },\n          React.createElement('i', { 'data-index': '1' }),\n          React.createElement(\n            'span',\n            { 'data-index': '1', className: this.state.activeTab === 1 ? \"active_tab\" : \"\" },\n            '\\u6D41\\u8F6C\\u610F\\u89C1'\n          )\n        ),\n        React.createElement('p', { className: 'border-bottom' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control25_PhAtSh: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = {};var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data.title = title;data.numbering = numbering;var ddddsadf = 0;return data;
    },
    doAction_uiControl25_U9iq0i: function (data, elem) {},
    getTemplate_uiControl25_U9iq0i: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    var title = data.title;\n    var numbering = data.numbering;\n    return (\n      <div>\n        <div className=\"ysp-manager-audit-title\">\n        \t<div className=\"ysp-manager-audit-main-title\">{title&&title}</div>\n          <div className=\"ysp-manager-audit-subtitle\">\n            <span>\u7F16\u53F7\uFF1A</span>\n            <span>{numbering&&numbering}</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var title = data.title;\n    var numbering = data.numbering;\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"ysp-manager-audit-title\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp-manager-audit-main-title\" },\n          title && title\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"ysp-manager-audit-subtitle\" },\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u7F16\\u53F7\\uFF1A\"\n          ),\n          React.createElement(\n            \"span\",\n            null,\n            numbering && numbering\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control23_nAAQod: function (elem) {
      if (!elem) {
        return;
      }var data = {};var content = [];var titles = [];if (!elem.querySelector('tbody')) {
        return;
      }var tbody = elem.querySelector('tbody');if (!tbody.querySelectorAll('tr')) {
        return;
      }var tbodyTrs = tbody.querySelectorAll('tr');[].forEach.call(tbodyTrs, function (trItem, trIndex) {
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
        }if (trIndex == 11 || trIndex == 12 || trIndex == 13) {
          [].forEach.call(tds, function (tdItem, tdIndex) {
            if (tdIndex == 0) {
              titles.push(tdItem.textContent.trim());
            } else {
              content.push(tdItem.textContent.trim());
            }
          });
        }
      });data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl23_PUM7iP: function (data, elem) {},
    getTemplate_uiControl23_PUM7iP: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCustomHeader, Dialog, Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n    super(props);\n    this.state={\n      displayFlg:false\n    }\n\t}\n  \n  btnClick(){//\u663E\u793A\u66F4\u591A\n    this.setState((prevState, props) => ({\n  \t\tdisplayFlg: !prevState.displayFlg\n\t\t}));\n  }\n  \n  render (){\n    var _this = this;\n    var data = this.props.data.customData;\n    var titles = data.titles;\n    var content = data.content;\n    return (\n      <div className=\"ysp-manager-audit-wrapper\">\n        <span className=\"left-border\"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n        {titles ? titles.map((item,index)=>{\n          if(!this.state.displayFlg && index>4){\n            return null;\n          }\n          return (\n            <div>\n          \t\t<div className=\"title\">{item}</div>\n              <div className=\"content\">{content[index]}</div>\n            </div>\n          );\n        }):'\u65E0\u6570\u636E'}\n        <div style={{'text-align':'center'}} onClick={_this.btnClick.bind(_this)}>{_this.state.displayFlg ? '\u6536\u8D77\u5168\u90E8\u5185\u5BB9' : '\u663E\u793A\u66F4\u591A'}</div>\n\t\t\t</div>\n    );\n  }\n\t\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n    _this2.state = {\n      displayFlg: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick() {\n      //\u663E\u793A\u66F4\u591A\n      this.setState(function (prevState, props) {\n        return {\n          displayFlg: !prevState.displayFlg\n        };\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.data.customData;\n      var titles = data.titles;\n      var content = data.content;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-wrapper' },\n        React.createElement('span', { className: 'left-border' }),\n        React.createElement(\n          'span',\n          null,\n          '\\u57FA\\u672C\\u4FE1\\u606F'\n        ),\n        titles ? titles.map(function (item, index) {\n          if (!_this3.state.displayFlg && index > 4) {\n            return null;\n          }\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'title' },\n              item\n            ),\n            React.createElement(\n              'div',\n              { className: 'content' },\n              content[index]\n            )\n          );\n        }) : '\u65E0\u6570\u636E',\n        React.createElement(\n          'div',\n          { style: { 'text-align': 'center' }, onClick: _this.btnClick.bind(_this) },\n          _this.state.displayFlg ? '\u6536\u8D77\u5168\u90E8\u5185\u5BB9' : '\u663E\u793A\u66F4\u591A'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
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
    },

    getData_control34_3xOhRN: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl32_PTJzNp: function (data, elem) {},
    getTemplate_uiControl32_PTJzNp: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <span style={{'border-left':'4px solid #C19936', 'font-size':'14px', 'padding-left':'11px'}}>\u7B7E\u5B57\u610F\u89C1</span>\n        <div style={{'padding':'5px 15px'}}><textarea style={{'border-radius':'5px'}}></textarea></div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'span',\n        { style: { 'border-left': '4px solid #C19936', 'font-size': '14px', 'padding-left': '11px' } },\n        '\\u7B7E\\u5B57\\u610F\\u89C1'\n      ),\n      React.createElement(\n        'div',\n        { style: { 'padding': '5px 15px' } },\n        React.createElement('textarea', { style: { 'border-radius': '5px' } })\n      )\n    );\n  }\n});";
    },

    getData_control37_OEJzmu: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl35_4nXXfL: function (data, elem) {},
    getTemplate_uiControl35_4nXXfL: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div style={{'display':'inline-block'}}><span style={{'padding-left':'11px', 'font-size':'14px','border-left':'4px solid #C19936'}}>\u76F8\u5173\u6587\u6863</span></div>\n        <div style={{'border-bottom':'5px solid #ddd'}}></div>\n      </div>\n      \n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { style: { 'display': 'inline-block' } },\n        React.createElement(\n          'span',\n          { style: { 'padding-left': '11px', 'font-size': '14px', 'border-left': '4px solid #C19936' } },\n          '\\u76F8\\u5173\\u6587\\u6863'\n        )\n      ),\n      React.createElement('div', { style: { 'border-bottom': '5px solid #ddd' } })\n    );\n  }\n});";
    },
    getData_control38_xKEVrL: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl36_CWMuKW: function (data, elem) {},
    getTemplate_uiControl36_CWMuKW: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div style={{'display':'inline-block'}}><span style={{'padding-left':'11px', 'font-size':'14px','border-left':'4px solid #C19936'}}>\u76F8\u5173\u6D41\u7A0B</span></div>\n        <div style={{'border-bottom':'5px solid #ddd'}}></div>\n      </div>\n      \n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { style: { 'display': 'inline-block' } },\n        React.createElement(\n          'span',\n          { style: { 'padding-left': '11px', 'font-size': '14px', 'border-left': '4px solid #C19936' } },\n          '\\u76F8\\u5173\\u6D41\\u7A0B'\n        )\n      ),\n      React.createElement('div', { style: { 'border-bottom': '5px solid #ddd' } })\n    );\n  }\n});";
    },
    getData_control39_sTQ8TR: function (elem) {},
    doAction_uiControl37_1RuKTr: function (data, elem) {},
    getTemplate_uiControl37_1RuKTr: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div style={{'display':'inline-block'}}><span style={{'padding-left':'11px', 'font-size':'14px','border-left':'4px solid #C19936'}}>\u76F8\u5173\u9644\u4EF6</span></div>\n        <div style={{'border-bottom':'5px solid #ddd'}}></div>\n      </div>\n      \n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { style: { 'display': 'inline-block' } },\n        React.createElement(\n          'span',\n          { style: { 'padding-left': '11px', 'font-size': '14px', 'border-left': '4px solid #C19936' } },\n          '\\u76F8\\u5173\\u9644\\u4EF6'\n        )\n      ),\n      React.createElement('div', { style: { 'border-bottom': '5px solid #ddd' } })\n    );\n  }\n});";
    },
    getData_control28_hPr3qu: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl27_VCIGbH: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.ownerDocument.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl27_VCIGbH: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:\"docClick\"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <span>{data&&data.title}</span>\n        <button onClick={_this.btnClick.bind(_this)}>\uD83D\uDD0D\u6309\u94AE\u66FF\u6362</button>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: \"docClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          'button',\n          { onClick: _this.btnClick.bind(_this) },\n          '\\uD83D\\uDD0D\\u6309\\u94AE\\u66FF\\u6362'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control29_tXFBoh: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl28_xQOJEl: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.ownerDocument.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl28_xQOJEl: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:\"docClick\"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div>\n        <span>{data&&data.title}</span>\n        <button onClick={_this.btnClick.bind(_this)}>\uD83D\uDD0D\u6309\u94AE\u66FF\u6362</button>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: \"docClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          'button',\n          { onClick: _this.btnClick.bind(_this) },\n          '\\uD83D\\uDD0D\\u6309\\u94AE\\u66FF\\u6362'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control21_nsaVUJ: function (elem) {
      if (!elem) {
        return;
      }var data = {};var leftData = [];var rightData = [];var title = [];var content = [];var tbody = $(elem).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
        for (var i = 0; i < trs.length; i++) {
          if (i == 0) {
            var ths = trs[0].querySelectorAll('th');[].forEach.call(ths, function (item, index) {
              if (index !== 1) {
                title.push(item.textContent.trim());
              }
            });
          } else {
            var tds = $(trs[i]).children('td');var trContent = [];[].forEach.call(tds, function (item, index) {
              if (item.querySelector('table')) {// trContent.push(item.querySelector('p').textContent);意见
              } else {
                trContent.push(item.textContent.trim());
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            rSingleData.push(title[j] + ":" + innerContent[j]);
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data.leftData = leftData;data.rightData = rightData;return data;
    },
    doAction_uiControl21_lPfTHW: function (data, elem) {},
    getTemplate_uiControl21_lPfTHW: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCustomHeader, Dialog, Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = _this.props.data.customData;\n\t\tvar leftData = data.leftData;\n\t\tvar rightData = data.rightData;\n\n\t\treturn (\n\t\t\t<div style={{'padding':'15px'}}>\n\t\t\t\t{leftData ? leftData.map((litem, lindex)=>{\n          return(\n\t\t\t\t\t\t<div>\n              <div>\n                {litem.map((innerLitem)=>{\n                  return (\n                  \t<div>\n                    \t{innerLitem}\n                    </div>\n                  );\n                })}\n              </div>\n              <div>\n            \t{rightData[lindex].map((ritem, rindex)=>{\n                return(\n                  <div>{ritem}</div>\n                );\n              })}\n              </div>\n            </div>\n          );\n\t\t\t\t}) : '\u65E0\u6570\u636E'}\n\t\t\t</div>\n\t\t);\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = _this.props.data.customData;\n      var leftData = data.leftData;\n      var rightData = data.rightData;\n\n      return React.createElement(\n        'div',\n        { style: { 'padding': '15px' } },\n        leftData ? leftData.map(function (litem, lindex) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              litem.map(function (innerLitem) {\n                return React.createElement(\n                  'div',\n                  null,\n                  innerLitem\n                );\n              })\n            ),\n            React.createElement(\n              'div',\n              null,\n              rightData[lindex].map(function (ritem, rindex) {\n                return React.createElement(\n                  'div',\n                  null,\n                  ritem\n                );\n              })\n            )\n          );\n        }) : '\u65E0\u6570\u636E'\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);