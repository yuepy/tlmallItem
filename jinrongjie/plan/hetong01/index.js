(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control28_IA4FdX: function (elem) {},
    doAction_uiControl27_cznHRC: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl27_cznHRC: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B"}} \n       backIsShow = {true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B" },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: \'\\u4FDD\\u5B58\',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'save1\'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control29_yn6nBP: function (elem) {
      var data = { header: { title: [], number: [] }, base_lc_info: { title: [], content: [], degree: [] }, base_info: { content: [] } }; // header-----------------
      if ($(elem).children(".bt").length > 0) {
        data.header.title.push($(elem).children(".bt").text().trim());
      }if ($(elem).children(".bh").length > 0) {
        data.header.number.push($(elem).children(".bh").text().trim());
      }if ($(elem).children("table").length == 2) {
        var elem1 = $(elem).children("table").eq(0)[0];if ($(elem1).find("tr").length > 0) {
          $(elem1).find("tr").each(function () {
            if ($(this).children("td").length == 1 && $(this).children("td")[0].className == 'zdm') {
              data.base_lc_info.title.push($(this).children("td").text().trim());
            } else {
              var tdl = $(this).find("td").length - 1;$(this).children("td").each(function (i) {
                if ($(this).find("input").length !== 3 && $(this)[0].className == 'zdn' && i == tdl) {
                  data.base_lc_info.content.push($(this).text());
                } else if ($(this).find("input").length == 3) {
                  var arr1 = [];$(this).contents().each(function (i) {
                    if ($(this)[0].tagName == 'INPUT' && $(this)[0].checked == true) {
                      arr1.push({ text: $(this).parent().contents().eq(i + 1).text().trim(), checked: 'true' });
                    } else if ($(this)[0].tagName == 'INPUT' && $(this)[0].checked == false) {
                      arr1.push({ text: $(this).parent().contents().eq(i + 1).text().trim(), checked: 'false' });
                    }
                  });data.base_lc_info.degree.push(arr1);
                }
              });
            }
          });
        }var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).children("tr").each(function () {
          var arr1 = [];$(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm') {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } //判断附件-------------------------------------
            else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                $(this).children("table").find("a").each(function () {
                  var arr3 = [];arr3.push({ text: $(this).text().trim(), type: 'fujian' });arr2.push(arr3);
                }); //判断select-------------------------------------
              } else if ($(this).children("select").length > 0) {
                var arr4 = [];$(this).children("select").children("option").each(function () {
                  if ($(this).text().trim() !== '') {
                    arr4.push($(this).text().trim());
                  }
                });arr2.push({ text: arr4, type: 'selcet' });
              } //判断input-------------------------------------
              else if ($(this).children("input").length == 1 && $(this).children("input")[0].type !== 'hidden') {
                  arr2.push({ text: $(this).children("input").prop('value'), type: 'input' });
                } //判断
            arr1.push(arr2);
          });data.base_info.content.push(arr1);
        });
      } else if ($(elem).children("table").length == 1) {
        var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody2).children("tr").each(function () {
          var arr1 = [];$(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm') {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } //判断附件-------------------------------------
            else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                $(this).children("table").find("a").each(function () {
                  var arr3 = [];arr3.push({ text: $(this).text().trim(), type: 'fujian' });arr2.push(arr3);
                }); //判断select-------------------------------------
              } else if ($(this).children("select").length > 0) {
                var arr4 = [];$(this).children("select").children("option").each(function () {
                  if ($(this).text().trim() !== '') {
                    arr4.push($(this).text().trim());
                  }
                });
                arr2.push({ text: arr4, type: 'selcet' });
              } //判断input-------------------------------------
              else if ($(this).children("input").length == 1 && $(this).children("input")[0].type !== 'hidden') {
                  arr2.push({ text: $(this).children("input").prop('value'), type: 'input' });
                } //判断
            arr1.push(arr2);
          });data.base_info.content.push(arr1);
        });
      }return data;
    },
    doAction_uiControl28_SgTJbB: function (data, elem) {},
    getTemplate_uiControl28_SgTJbB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    if(data.base_lc_info.degree[0]){\n      var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == \'true\'){\n        return(<option value={d.text} selected = "selected">{d.text}</option>)\n      }\n      else{\n        return(<option value={d.text}>{d.text}</option>)\n      }\n    })\n    }\n    return (\n      <div className=\'contractCountersigned_box\'>\n        <div className=\'header_box\'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n        \n        {data.base_lc_info.content ? <div style={{display:\'none\'}}></div> : \n        <div className=\'center_box\'>\n          <div className=\'tit_yell\'>\n          \t{data.base_lc_info.title}\n          </div>\n          <div className=\'font-yell\'>\u7B49\u7EA7</div>\n          <select>{degree}</select>\n          <div className=\'font-yell\'>\u77ED\u4FE1\u63D0\u9192</div>\n          <div>{data.base_lc_info.content}</div>\n        </div>\n        }\n        \n        \n        <div className=\'bottom_box\'>\n          <div className=\'tit_yell\'>\u57FA\u672C\u4FE1\u606F</div>\n          \n        </div>\n        \n        \n        \n        <div className=\'bottom_box\'>\n          \n        </div>\n      </div>\n    )\n  }\n});';
      return '';
    }
  });
})(window, ysp);