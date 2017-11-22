(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control173_bFuWdq: function (elem) {},
    doAction_uiControl4_uVGmCb: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl4_uVGmCb: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CommonHeader } from 'ysp-custom-components';\nexport default class extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<CommonHeader\n\t\t\t\tdata={{ centerText: \"\u9664IT\u7C7B\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u5355\" }}\n\t\t\t\tbackIsShow={true}\n\t\t\t\teditIsShow={true}\n\t\t\t\trightText='\u4FDD\u5B58'\n\t\t\t\tsave={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'save1'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tback={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'click'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t/>\n\t\t)\n\t}\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn React.createElement(_yspCustomComponents.CommonHeader, {\n\t\t\t\tdata: { centerText: "\u9664IT\u7C7B\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u5355" },\n\t\t\t\tbackIsShow: true,\n\t\t\t\teditIsShow: true,\n\t\t\t\trightText: \'\\u4FDD\\u5B58\',\n\t\t\t\tsave: function save(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tback: function back(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control256_t5LqXJ: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.textContent;return data;
    },
    doAction_uiControl152_7pT5rX: function (data, elem) {},
    getTemplate_uiControl152_7pT5rX: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData||{};\n    var title = data.title||"";\n    var numbering = data.numbering||"";\n    return (\n      <div style={{\'margin-top\':\'40px\'}}>\n        <div className="ysp-manager-audit-title">\n        \t<div className="ysp-manager-audit-main-title">{title}</div>\n          <div className="ysp-manager-audit-subtitle">\n            <span>\u7F16\u53F7\uFF1A</span>\n          </div>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData || {};\n    var title = data.title || "";\n    var numbering = data.numbering || "";\n    return React.createElement(\n      "div",\n      { style: { \'margin-top\': \'40px\' } },\n      React.createElement(\n        "div",\n        { className: "ysp-manager-audit-title" },\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-main-title" },\n          title\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-subtitle" },\n          React.createElement(\n            "span",\n            null,\n            "\\u7F16\\u53F7\\uFF1A"\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control257_2rC7Lf: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = {};var content = [""];var titles = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          $(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            titles.push(dt.textContent.replace(/\s/g, "").trim());
          });$(trItem).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelector("input[type='text']")) {
              content.push(dt.querySelector("input[type='text']").value.replace(/\s/g, "").trim());
            } else if (dt.querySelector("input[type='radio']")) {
              var radioOption = [[], []];[].forEach.call(dt.childNodes, function (item, idex) {
                if (item.nodeType == 1) {
                  if (item.checked == true) {
                    radioOption[0].push(item.value.replace(/\s/g, "").trim() + "_checked");
                  } else {
                    radioOption[0].push(item.value.replace(/\s/g, "").trim());
                  }
                } else if (item.nodeType == 3) {
                  radioOption[1].push(item.nodeValue.replace(/\s/g, "").trim());
                }
              });content.push(radioOption);
            } else {
              content.push(dt.textContent);
            }
          });
        });data.titles = titles;data.content = content;return data;
      }
    },
    doAction_uiControl165_4bLvVu: function (data, elem) {
      var eventType = data.eventType;var dataCustom = data.dataCustom;if (eventType == 'click') {
        elem.querySelectorAll("input[name='requestlevel']")[dataCustom].checked = true;
      }
    },
    getTemplate_uiControl165_4bLvVu: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n\n\tbtnClick(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: e.target.getAttribute(\'data-index\'),\n\t\t\t\teventType: \'click\'\n\t\t\t});\n\t\t}\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.customData || {};\n\t\tvar titles = data.titles || [];\n\t\tvar content = data.content || [];\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div className="ysp-manager-audit-title-icon" style={{ \'border-bottom\': \'none\' }}><span>{titles[0]}</span></div>\n\t\t\t\t<div className="ysp-manager-audit-wrapper">\n\t\t\t\t\t{titles.map((item, index) => {\n\t\t\t\t\t\tif (index == 0) {\n\t\t\t\t\t\t\treturn null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u77ED\u4FE1\u63D0\u9192\') {\n\t\t\t\t\t\t\treturn null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u7D27\u6025\u7A0B\u5EA6\') {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div className="title">\n\t\t\t\t\t\t\t\t\t\t\t<span>{item}</span>\n\t\t\t\t\t\t\t\t\t\t\t<div className="emergency-level-div">\n\t\t\t\t\t\t\t\t\t\t\t\t{content[index][1] instanceof Array && content[index][1].map((innerItem, innerIdx) => {\n\t\t\t\t\t\t\t\t\t\t\t\t\tif (content[index][0][innerIdx].indexOf(\'checked\') !== -1) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn <span onClick={_this.btnClick.bind(_this)} data-index={innerIdx} className="activeSpan">{innerItem}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn <span onClick={_this.btnClick.bind(_this)} data-index={innerIdx}>{innerItem}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u77ED\u4FE1\u63D0\u9192\') {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div style={{ \'border\': \'none\' }}>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div className="title" >{item}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t);\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: e.target.getAttribute(\'data-index\'),\n\t\t\t\t\teventType: \'click\'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.customData || {};\n\t\t\tvar titles = data.titles || [];\n\t\t\tvar content = data.content || [];\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'ysp-manager-audit-title-icon\', style: { \'border-bottom\': \'none\' } },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\ttitles[0]\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'ysp-manager-audit-wrapper\' },\n\t\t\t\t\ttitles.map(function (item, index) {\n\t\t\t\t\t\tif (index == 0) {\n\t\t\t\t\t\t\treturn null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u77ED\u4FE1\u63D0\u9192\') {\n\t\t\t\t\t\t\treturn null;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u7D27\u6025\u7A0B\u5EA6\') {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t\t{ className: \'emergency-level-div\' },\n\t\t\t\t\t\t\t\t\t\t\tcontent[index][1] instanceof Array && content[index][1].map(function (innerItem, innerIdx) {\n\t\t\t\t\t\t\t\t\t\t\t\tif (content[index][0][innerIdx].indexOf(\'checked\') !== -1) {\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{ onClick: _this.btnClick.bind(_this), \'data-index\': innerIdx, className: \'activeSpan\' },\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tinnerItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{ onClick: _this.btnClick.bind(_this), \'data-index\': innerIdx },\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tinnerItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (item == \'\u77ED\u4FE1\u63D0\u9192\') {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ style: { \'border\': \'none\' } },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control258_SNd53w: function (elem) {
      if (!elem) {
        return;
      }var endIndex = -1;var startIndex = -1;if (elem) {
        var data = {};var content = [];var titles = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var tdTitle = trItem.querySelector('td').textContent.replace(/\s/g, "").trim();if (tdTitle.indexOf('部门经理审批意见') !== -1) {
            startIndex = 1;
          }$(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            if ((endIndex < 0 || startIndex > 0) && tdTitle !== "签字意见") {
              titles.push(dt.textContent.replace(/\s/g, "").trim());
            }
          });if ((endIndex < 0 || startIndex > 0) && tdTitle !== "签字意见") {
            $(trItem).children("td:nth-child(even)").each(function (idx, dt) {
              if (trIndex < 1 && dt.querySelector("span") && dt.querySelector("input[type='hidden']")) {
                content.push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
              } else if (dt.querySelector("textarea")) {
                content.push(dt.querySelector("textarea").value.replace(/\s/g, "").trim());
              } else if (dt.querySelector("select")) {
                var selectContent = { values: [], options: [] };[].forEach.call(dt.querySelector("select").querySelectorAll('option'), function (opItem, opIndex) {
                  if (opItem.textContent !== "") {
                    selectContent.values.push(opItem.value);selectContent.options.push(opItem.textContent);
                  }content.push(selectContent);
                });
              } else if (tdTitle !== "签字意见" && tdTitle !== "附件") {
                content.push(dt.textContent.replace(/\s/g, "").trim());
              }
            });
          }if (trItem.querySelector('td').textContent.indexOf('附件') !== -1) {
            endIndex = 1;
          }
        });data.titles = titles;data.content = content;return data;
      }
    },
    doAction_uiControl243_Bm2xT8: function (data, elem) {},
    getTemplate_uiControl243_Bm2xT8: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    }
  });
})(window, ysp);