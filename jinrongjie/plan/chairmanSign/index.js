(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control87_RJse5F: function (elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');[].forEach.call(tds, function (item, index) {
        if (item.querySelector('input')) {
          data.title = item.querySelector('input').value || [];
        }
      });return data;
    },
    doAction_uiControl75_IEG1dL: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl75_IEG1dL: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CommonHeader } from 'ysp-custom-components';\nexport default class extends Component {\n\trender() {\n\t\tvar data = this.props.customData;\n\t\tvar title = data && data.title;\n\t\treturn (\n\t\t\t<CommonHeader\n\t\t\t\tdata={{ centerText: title && title }}\n\t\t\t\tbackIsShow={true}\n\t\t\t\teditIsShow={true}\n\t\t\t\trightText='\u4FDD\u5B58'\n\t\t\t\tsave={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'save1'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tback={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'click'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t/>\n\t\t)\n\t}\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar data = this.props.customData;\n\t\t\tvar title = data && data.title;\n\t\t\treturn React.createElement(_yspCustomComponents.CommonHeader, {\n\t\t\t\tdata: { centerText: title && title },\n\t\t\t\tbackIsShow: true,\n\t\t\t\teditIsShow: true,\n\t\t\t\trightText: \'\\u4FDD\\u5B58\',\n\t\t\t\tsave: function save(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tback: function back(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control88_2GUiNo: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = [];var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data[0] = title;data[1] = numbering;return data;
    },
    doAction_uiControl76_lZMz7z: function (data, elem) {},
    getTemplate_uiControl76_lZMz7z: function () {
      var selfTemplate = '// \u6807\u9898\nmodule.exports = React.createClass({\n\trender: function () {\n\t\tvar data = this.props.customData || [];\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div className="ysp-manager-audit-title">\n\t\t\t\t\t<div className="ysp-manager-audit-main-title">{data instanceof Array && data[0]}</div>\n\t\t\t\t\t<div className="ysp-manager-audit-subtitle">\n\t\t\t\t\t\t<span>\u7F16\u53F7\uFF1A</span>\n\t\t\t\t\t\t<span>{data instanceof Array && data[1]}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t)\n\t}\n});';
      return '"use strict";\n\n// \u6807\u9898\nmodule.exports = React.createClass({\n\tdisplayName: "exports",\n\n\trender: function render() {\n\t\tvar data = this.props.customData || [];\n\t\treturn React.createElement(\n\t\t\t"div",\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t"div",\n\t\t\t\t{ className: "ysp-manager-audit-title" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t"div",\n\t\t\t\t\t{ className: "ysp-manager-audit-main-title" },\n\t\t\t\t\tdata instanceof Array && data[0]\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t"div",\n\t\t\t\t\t{ className: "ysp-manager-audit-subtitle" },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t"span",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t"\\u7F16\\u53F7\\uFF1A"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t"span",\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tdata instanceof Array && data[1]\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});';
    },
    getData_control89_Tk1vTe: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var rows = [[], []];$(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            rows[0].push(dt.textContent.replace(/\s/g, "").trim());
          });$(trItem).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelector("select")) {
              var optionIndex = dt.querySelector('select').selectedIndex;rows[1].push(dt.querySelector("select").querySelectorAll('option')[optionIndex].textContent.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("input[type='hidden']") && rows[0][idx] !== '签字意见') {
              rows[1].push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("input[type='text']")) {
              rows[1].push(dt.querySelector("input[type='text']").value.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("textarea")) {
              rows[1].push(dt.querySelector("textarea").textContent.replace(/\s/g, "").trim());
            } else {
              rows[1].push('暂无');
            }
          });data.push(rows);
        });return data;
      }
    },
    doAction_uiControl80_gKCmKt: function (data, elem) {},
    getTemplate_uiControl80_gKCmKt: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n\t\t\tdisplayFlg: false\n\t\t}\n  }\n  \n  btnClick() {\n\t\tthis.setState((prevState, props) => ({\n\t\t\tdisplayFlg: !prevState.displayFlg\n\t\t}));\n\t}\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData||[];\n    return (\n\t\t\t<div className="ysp-manager-audit-wrapper">\n        <span className="left-border"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n      \t{data.map((trItem, trIndex)=>{\n          \n          return (\n          \t<div className="except-main-rules">\n              {trItem[0].map((tdItem, tdIndex)=>{\n                if((tdItem==\'\u7533\u8BF7\u65E5\u671F\'||trIndex>1)&&!_this.state.displayFlg){\n                \treturn null;\n                }else{\n                  return (\n                    <div>\n                      <div className="title">{tdItem}</div>\n                      <div className="content">{trItem[1][tdIndex]}</div>\n                    </div>\n                \t); \n                }\n                \n              })}\n          \t</div>\n          )\n        })}\n        <div className={_this.state.displayFlg ? "load-up-arrow" : "load-more-arrow"} onClick={_this.btnClick.bind(_this)}>\n\t\t\t\t\t{_this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'}\n\t\t\t\t</div>\n      </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      displayFlg: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick() {\n      this.setState(function (prevState, props) {\n        return {\n          displayFlg: !prevState.displayFlg\n        };\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-wrapper\' },\n        React.createElement(\'span\', { className: \'left-border\' }),\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u57FA\\u672C\\u4FE1\\u606F\'\n        ),\n        data.map(function (trItem, trIndex) {\n\n          return React.createElement(\n            \'div\',\n            { className: \'except-main-rules\' },\n            trItem[0].map(function (tdItem, tdIndex) {\n              if ((tdItem == \'\u7533\u8BF7\u65E5\u671F\' || trIndex > 1) && !_this.state.displayFlg) {\n                return null;\n              } else {\n                return React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'div\',\n                    { className: \'title\' },\n                    tdItem\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'content\' },\n                    trItem[1][tdIndex]\n                  )\n                );\n              }\n            })\n          );\n        }),\n        React.createElement(\n          \'div\',\n          { className: _this.state.displayFlg ? "load-up-arrow" : "load-more-arrow", onClick: _this.btnClick.bind(_this) },\n          _this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control90_KWZghe: function (elem) {},
    doAction_uiControl81_TmtuSV: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'dataChange') {
        var p = document.createElement('p');elem.contentDocument.querySelector('body').innerHTML = "";elem.contentDocument.querySelector('body').appendChild(p).textContent = data.dataCustom;
      }
    },
    getTemplate_uiControl81_TmtuSV: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tonChange = (e) => {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: e.target.value,\n\t\t\t\teventType: \'dataChange\'\n\t\t\t})\n\t\t}\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\t\treturn (\n\t\t\t<div className="ysp-manager-audit-sign">\n\t\t\t\t<span>\u7B7E\u5B57\u610F\u89C1</span>\n\t\t\t\t<div><textarea onBlur={_this.onChange.bind(_this)}></textarea></div>\n\t\t\t</div>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n\t\t_this2.onChange = function (e) {\n\t\t\tvar handler = _this2.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: e.target.value,\n\t\t\t\t\teventType: \'dataChange\'\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-sign\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\t\'\\u7B7E\\u5B57\\u610F\\u89C1\'\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\'textarea\', { onBlur: _this.onChange.bind(_this) })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control91_rfz5OZ: function (elem) {
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
    doAction_uiControl82_isy1uX: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());elem.querySelector('.Browser').onclick();
      }
    },
    getTemplate_uiControl82_isy1uX: function () {
      var selfTemplate = 'import {\n\tComponent\n} from \'react\';\nimport {\n\tCommonHeader, Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\tbtnClick(e) {//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n\t\tlet handler = this.props.customHandler;\n\t\tvar target = e.target;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: "docClick"\n\t\t\t})\n\t\t}\n\t}\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.data.customData;\n\t\treturn (\n\t\t\t<div className="ysp-manageraudit-relate-doc">\n\t\t\t\t<span>{data && data.title}</span>\n\t\t\t\t<div className="border-bottom"><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></div>\n\t\t\t</div>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick(e) {\n\t\t\t//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar target = e.target;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: "docClick"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.data.customData;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manageraudit-relate-doc\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\tdata && data.title\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'border-bottom\' },\n\t\t\t\t\tReact.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control92_gtLpwx: function (elem) {
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
    doAction_uiControl83_67T67w: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl83_67T67w: function () {
      var selfTemplate = 'import {\n\tComponent\n} from \'react\';\nimport {\n\tCustomHeader, Dialog, Alert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\tbtnClick(e) {//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n\t\tlet handler = this.props.customHandler;\n\t\tvar target = e.target;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: "docClick"\n\t\t\t})\n\t\t}\n\t}\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.data.customData;\n\t\treturn (\n\t\t\t<div className="ysp-manageraudit-relate-doc">\n\t\t\t\t<span>{data && data.title}</span>\n\t\t\t\t<span><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></span>\n\t\t\t</div>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick(e) {\n\t\t\t//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar target = e.target;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: "docClick"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.data.customData;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manageraudit-relate-doc\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\tdata && data.title\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control96_N97mtQ: function (elem) {
      if (!elem) {
        return;
      }var data = {};var leftData = [];var rightData = [];var title = [];var content = [];if (!elem.querySelector('#requestlogappednDiv')) {
        data.leftData = leftData;data.rightData = rightData;return data;
      }var divData = elem.querySelector('#requestlogappednDiv');var tableData = $(divData).children('table');var tbody = $(tableData).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
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
                if (item.querySelector('script')) {
                  trContent.push(item.childNodes[2].textContent.replace(/\s/g, "").trim());
                } else {
                  trContent.push(item.textContent.replace(/\s/g, "").trim());
                }
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            if (j == title.length - 1) {
              rSingleData.push(innerContent[j]);
            } else {
              rSingleData.push(title[j] + "：" + innerContent[j]);
            }
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data['leftData'] = leftData;data['rightData'] = rightData;return data;
    },
    doAction_uiControl84_T8UFpI: function (data, elem) {
      var eventType = data.eventType;var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');if (eventType == 'showReceiver') {
        var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      }
    },
    getTemplate_uiControl84_T8UFpI: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\n\tshowReceiver = (e) => {\n\t\tvar handler = this.props.cutomHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: \'showReceiver\'\n\t\t\t})\n\t\t}\n\t}\n\n\trender() {\n\t\tvar data = this.props.customData || {};\n\t\tvar leftData = data.leftData || [];\n\t\tvar rightData = data.rightData || [];\n\t\tvar _this = this;\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t{leftData ? leftData.map((litem, lindex) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<div className="approval-node-info">\n\t\t\t\t\t\t\t<div className="approval-node-info-left-div">\n\t\t\t\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div className="approval-node-info-right-div">\n\t\t\t\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex) + 1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t);\n\t\t\t\t}) : <div></div>}\n\t\t\t</div>\n\n\t\t);\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n\t\t_this2.showReceiver = function (e) {\n\t\t\tvar handler = _this2.props.cutomHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: \'showReceiver\'\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || {};\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\tnull,\n\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: \'approval-node-info\' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-left-div\' },\n\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-right-div\' },\n\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\'\\u63A5\\u6536\\u4EBA:\',\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t{ \'data-index\': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\tritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : React.createElement(\'div\', null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);