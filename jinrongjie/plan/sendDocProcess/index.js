(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control199_3o679b: function (elem) {
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
    doAction_uiControl181_2ERHxW: function (data, elem) {
      var eventType = data.eventType;var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');if (eventType == 'showReceiver') {
        var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      }
    },
    getTemplate_uiControl181_2ERHxW: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n\tshowReceiver(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: { index: dataIndex },\n\t\t\t\teventType: "showReceiver"\n\t\t\t})\n\t\t}\n\t}\n  \n  render(){\n    var data = this.props.customData||{};\n    var leftData = data.leftData||[];\n    var rightData = data.rightData||[];\n    var _this = this;\n      return (\n      <div className="ysp-main-leader-sign-wrapper">\n\t{leftData ? leftData.map((litem, lindex) => {\n\t\treturn (\n\t\t\t<div className="approval-node-info">\n\t\t\t\t<div className="approval-node-info-left-div">\n\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t\t<div className="approval-node-info-right-div">\n\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex) + 1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}) : <div></div>}\n</div>\n\n      );\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'showReceiver\',\n\t\tvalue: function showReceiver(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { index: dataIndex },\n\t\t\t\t\teventType: "showReceiver"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || {};\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-main-leader-sign-wrapper\' },\n\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: \'approval-node-info\' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-left-div\' },\n\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-right-div\' },\n\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\'\\u63A5\\u6536\\u4EBA:\',\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t{ \'data-index\': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\tritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : React.createElement(\'div\', null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control200_DSSlhG: function (elem) {
      if (!elem) {
        return;
      }return elem.value;
    },
    doAction_uiControl182_tP82R5: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl182_tP82R5: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    var data = this.props.customData;\n    return (\n    \t<CommonHeader \n       data={{centerText:data}} \n       backIsShow = {true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: data },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: \'\\u4FDD\\u5B58\',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'save1\'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control201_ouNyBO: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = {};var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh input').value;data.title = title;data.numbering = numbering;return data;
    },
    doAction_uiControl183_MUGw1r: function (data, elem) {},
    getTemplate_uiControl183_MUGw1r: function () {
      var selfTemplate = '//\u6E32\u67D3\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData||{};\n    var title = data.title||"";\n    var numbering = data.numbering||"";\n    return (\n      <div>\n        <div className="ysp-manager-audit-title">\n        \t<div className="ysp-manager-audit-main-title">{title}</div>\n          <div className="ysp-manager-audit-subtitle">\n            <span>\u7F16\u53F7\uFF1A</span>\n            <span>{numbering}</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\n//\u6E32\u67D3\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData || {};\n    var title = data.title || "";\n    var numbering = data.numbering || "";\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "div",\n        { className: "ysp-manager-audit-title" },\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-main-title" },\n          title\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-subtitle" },\n          React.createElement(\n            "span",\n            null,\n            "\\u7F16\\u53F7\\uFF1A"\n          ),\n          React.createElement(\n            "span",\n            null,\n            numbering\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control203_fczppf: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl185_kb8Q8p: function (data, elem) {},
    getTemplate_uiControl185_kb8Q8p: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData||"";\n      return <div style={{\'border\':\'none\'}} className="ysp-manager-audit-title-icon"><span>{data}</span></div>;\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || "";\n      return React.createElement(\n        \'div\',\n        { style: { \'border\': \'none\' }, className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          data\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);