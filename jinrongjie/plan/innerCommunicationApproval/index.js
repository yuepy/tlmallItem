(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control168_Jlhlxy: function (elem) {},
    doAction_uiControl146_kf4VnA: function (data, elem) {},
    getTemplate_uiControl146_kf4VnA: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~\"\n    );\n  }\n});";
    },
    getData_control170_aGfVzh: function (elem) {
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
    doAction_uiControl149_IOyRzX: function (data, elem) {
      var eventType = data.eventType;var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');if (eventType == 'showReceiver') {
        var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      }
    },
    getTemplate_uiControl149_IOyRzX: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n\tshowReceiver(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tvar dataIndex = e.target.getAttribute('data-index');\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: { index: dataIndex },\n\t\t\t\teventType: \"showReceiver\"\n\t\t\t})\n\t\t}\n\t}\n  \n  render(){\n    var data = this.props.customData||{};\n    var leftData = data.leftData||[];\n    var rightData = data.rightData||[];\n    var _this = this;\n      return (\n      <div className=\"ysp-main-leader-sign-wrapper\">\n\t{leftData ? leftData.map((litem, lindex) => {\n\t\treturn (\n\t\t\t<div className=\"approval-node-info\">\n\t\t\t\t<div className=\"approval-node-info-left-div\">\n\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t\t<div className=\"approval-node-info-right-div\">\n\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex) + 1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf('\u663E\u793A') >= 0 ? '\u663E\u793A' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}) : <div></div>}\n</div>\n\n      );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'showReceiver',\n\t\tvalue: function showReceiver(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar dataIndex = e.target.getAttribute('data-index');\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { index: dataIndex },\n\t\t\t\t\teventType: \"showReceiver\"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || {};\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'ysp-main-leader-sign-wrapper' },\n\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'approval-node-info' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'approval-node-info-left-div' },\n\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'approval-node-info-right-div' },\n\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t'\\u63A5\\u6536\\u4EBA:',\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t{ 'data-index': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\tritem.indexOf('\u663E\u793A') >= 0 ? '\u663E\u793A' : ritem\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : React.createElement('div', null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);