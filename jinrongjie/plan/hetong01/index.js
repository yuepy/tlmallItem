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
      var data = { header: { title: [], number: [] }, base_lc_info: { title: [], content: [], degree: [] }, base_info: { content: [] }, related_document: [], related_process: [], file: [] }; //附件-----------
      if ($(elem).find("#field-annexupload_tab").length > 0 && $(elem).find("#field-annexupload_tab").find("a").length > 0) {
        $(elem).find("#field-annexupload_tab").find("a").each(function () {
          data.file.push($(this).text().trim());
        });
      }if ($(elem).find("#signdocspan").length > 0 && $(elem).find("#signdocspan").children("a").length > 0) {
        $(elem).find("#signdocspan").children("a").each(function () {
          data.related_document.push($(this).text().trim());
        });
      }if ($(elem).find("#signworkflowspan").length > 0 && $(elem).find("#signworkflowspan").children("a").length > 0) {
        $(elem).find("#signworkflowspan").children("a").each(function () {
          data.related_process.push($(this).text().trim());
        });
      } // header-----------------
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
                } else if ($(this).find("input").length == 1 && $(this).find("input")[0].type == 'hidden') {
                  var arrn = [];arrn.push($(this).text().trim());data.base_lc_info.degree.push(arrn);
                }
              });
            }
          });
        }var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).children("tr").each(function () {
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell' });
            } else if ($(this)[0].className == 'zdm') {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } //判断附件-------------------------------------
            else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                var arr3 = [];if ($(this).children("table").find("a").length > 0) {
                  $(this).children("table").find("a").each(function (i) {
                    arr3.push($(this).text().trim());
                  });
                }if ($(this).children("table").find(".btnFlowd").length > 0) {
                  var arr4 = [];$(this).children("table").find(".btnFlowd").each(function (i) {
                    if (!/全部下载/.test($(this).text())) {
                      arr4.push($(this).text().trim().match(/\(.*\)/));
                    }
                  });
                }arr2.push({ text: arr3, size: arr4, type: 'fujian' });
              } //判断select-------------------------------------
              else if ($(this).children("select").length > 0) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this).text().trim() !== '' && $(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(), select: 'selected' });
                    }if ($(this).text().trim() !== '' && $(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });arr2.push({ text: arr4, type: 'selcet'
                  });
                } //判断input-------------------------------------
                else if ($(this).children("input").length == 1 && $(this).children("input")[0].type !== 'hidden') {
                    arr2.push({ text: $(this).children("input").prop('value'), type: 'input' });
                  } //判断纯文字
                  else if ($(this).children("span").length == 1 && $(this).children("span").children("a").length == 1 && $(this).children("input").length > 0 && $(this).children("input")[0].type == 'hidden') {
                      arr2.push({ text: $(this).children("span").children("a").text(), type: 'a' });
                    } else if ($(this).children("span").length == 1 && $(this).children("input").length == 1 && $(this).children("input")[0].type == 'hidden') {
                      arr2.push({ text: $(this).children("span").text(), type: 'a' });
                    } //判断textarea-------------------------------------
                    else if ($(this).children("textarea").length == 1) {
                        arr2.push({ text: $(this).children("textarea").prop('value'), type: 'textarea' });
                      } //判断button-------------------------------------
                      else if ($(this).children("button").length > 0) {
                          //var arr5 = [];
                          $(this).children("button").each(function () {
                            arr2.push({ text: $(this).attr('title'), type: 'button' });
                          }); // arr2.push(arr5);
                        } //判断意见-------------------------------------
                        else if ($(this).children().length == 0 || $(this)[0].children.length == 1 && $(this)[0].children[0].tagName == 'BR') {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      }return data;
    },
    doAction_uiControl28_SgTJbB: function (data, elem) {},
    getTemplate_uiControl28_SgTJbB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    if(data.base_lc_info.degree[0].length > 1){\n       var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == \'true\'){\n        return(<option value={d.text} selected = "selected">{d.text}</option>)\n      }\n      else{\n        return(<option value={d.text}>{d.text}</option>)\n      }\n    })\n    }\n    \n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0])\n        if(d1[0].text == \'\u7533\u8BF7\u65E5\u671F\'){\n          \n        }\n        if (d1.length >0){\n          if(d1[0].type == \'title\' && d1[0].type){\n            return (<div className = \'font-yell\'>{d1[0].text}</div>)\n          } \n          if(d1[0].type == \'tit_yell\' && d1[0].type){\n            return (<div className = \'tit_yell espel\'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == \'a\'){\n            return (<div className = \'name\'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == \'input\'){\n            return (<AInput value = {d1[0].text} />)\n          }\n          else if(d1[0].type == \'textarea\'){\n            return (<AInput value ={d1[0].text} />)\n          }\n          else if(d1[0].type == \'fujian\'){\n           var fj =  d1[0].text.map(function(d2,i2){\n              return (<div className=\'file\'><div>{d2}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n            })\n            return (<div className=\'file_box\'>{fj}</div>)\n          }\n          else if(d1[0].type == \'button\'){\n            return (<button className = \'name\'>{d1[0].text}</button>)\n          }\n          else if(d1[0].type == \'suggest\'){\n            return (<div className = "textArea" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == \'selcet\'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select>\n              {option}\n            </select>)\n          }\nelse if(d1[0].type == \'suggest_final\'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div>            \n                <div className = "textArea2" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>\n      <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6587\u6863</span>\n                  <div className=\'about_box\'>\n                    <div className=\'box_con\'>{related_document}</div>\n                    <button></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6D41\u7A0B</span>\n                  <div  className=\'about_box\'>\n                    <div className=\'box_con\'>{related_process}</div>\n                    <button></button>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <span>\u76F8\u5173\u9644\u4EF6</span>\n                  <div>\n                    <div>{file}</div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n        }       \n      })\n    return (\n      <div className=\'contractCountersigned_box\'>\n        <div className=\'header_box\'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n        \n        <div className=\'center_box\'>\n          <div className=\'tit_yell\'>\n          \t{data.base_lc_info.title}\n          </div>\n          <div className=\'center_tb\'>\n          <div className=\'font-yell\'>\u7B49\u7EA7</div>\n          {data.base_lc_info.degree[0].length >1 ? <select>{degree}</select> : <div>{data.base_lc_info.degree}</div>}\n          <div className=\'font-yell\'>\u77ED\u4FE1\u63D0\u9192</div>\n          <div>{data.base_lc_info.content}</div>\n        </div>\n        </div>\n        <div className=\'bottom_box\'>\n          <div className=\'tit_yell\'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className=\'bottom_tb\'>{detail}</div>\n        </div>\n        \n        \n        \n        <div className=\'bottom_box\'>\n          \n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.base_lc_info.degree[0].length > 1) {\n      var degree = data.base_lc_info.degree[0].map(function (d, i) {\n        if (d.checked == \'true\') {\n          return React.createElement(\n            \'option\',\n            { value: d.text, selected: \'selected\' },\n            d.text\n          );\n        } else {\n          return React.createElement(\n            \'option\',\n            { value: d.text },\n            d.text\n          );\n        }\n      });\n    }\n\n    var detail = data.base_info.content.map(function (d1, i1) {\n      //console.log(d1[0])\n      if (d1[0].text == \'\u7533\u8BF7\u65E5\u671F\') {}\n      if (d1.length > 0) {\n        if (d1[0].type == \'title\' && d1[0].type) {\n          return React.createElement(\n            \'div\',\n            { className: \'font-yell\' },\n            d1[0].text\n          );\n        }\n        if (d1[0].type == \'tit_yell\' && d1[0].type) {\n          return React.createElement(\n            \'div\',\n            { className: \'tit_yell espel\' },\n            d1[0].text\n          );\n        } else if (d1[0].type == \'a\') {\n          return React.createElement(\n            \'div\',\n            { className: \'name\' },\n            d1[0].text\n          );\n        } else if (d1[0].type == \'input\') {\n          return React.createElement(AInput, { value: d1[0].text });\n        } else if (d1[0].type == \'textarea\') {\n          return React.createElement(AInput, { value: d1[0].text });\n        } else if (d1[0].type == \'fujian\') {\n          var fj = d1[0].text.map(function (d2, i2) {\n            return React.createElement(\n              \'div\',\n              { className: \'file\' },\n              React.createElement(\n                \'div\',\n                null,\n                d2\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                d1[0].size[i2]\n              ),\n              React.createElement(\'button\', null)\n            );\n          });\n          return React.createElement(\n            \'div\',\n            { className: \'file_box\' },\n            fj\n          );\n        } else if (d1[0].type == \'button\') {\n          return React.createElement(\n            \'button\',\n            { className: \'name\' },\n            d1[0].text\n          );\n        } else if (d1[0].type == \'suggest\') {\n          return React.createElement(\'div\', { className: \'textArea\', dangerouslySetInnerHTML: { __html: d1[0].text } });\n        } else if (d1[0].type == \'selcet\') {\n          var option = d1[0].text.map(function (d3, i3) {\n            return React.createElement(\n              \'option\',\n              { selected: d3.select },\n              d3.text\n            );\n          });\n          return React.createElement(\n            \'select\',\n            null,\n            option\n          );\n        } else if (d1[0].type == \'suggest_final\') {\n          var related_document = data.related_document.map(function (d3, i3) {\n            return React.createElement(\n              \'a\',\n              null,\n              d3\n            );\n          });\n          var related_process = data.related_process.map(function (d4, i4) {\n            return React.createElement(\n              \'a\',\n              null,\n              d4\n            );\n          });\n          if (data.file.length > 0) {\n            var file = data.file.map(function (d5, i5) {\n              return React.createElement(\n                \'div\',\n                null,\n                data.file.length\n              );\n            });\n          }\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\'div\', { className: \'textArea2\', dangerouslySetInnerHTML: { __html: d1[0].text } }),\n            React.createElement(\n              \'div\',\n              { className: \'ovh\' },\n              React.createElement(\n                \'span\',\n                { className: \'font-yell\' },\n                \'\\u76F8\\u5173\\u6587\\u6863\'\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'about_box\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'box_con\' },\n                  related_document\n                ),\n                React.createElement(\'button\', null)\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                { className: \'ovh\' },\n                React.createElement(\n                  \'span\',\n                  { className: \'font-yell\' },\n                  \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'about_box\' },\n                  React.createElement(\n                    \'div\',\n                    { className: \'box_con\' },\n                    related_process\n                  ),\n                  React.createElement(\'button\', null)\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u76F8\\u5173\\u9644\\u4EF6\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'div\',\n                  null,\n                  file\n                )\n              )\n            )\n          );\n        }\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'contractCountersigned_box\' },\n      React.createElement(\n        \'div\',\n        { className: \'header_box\' },\n        React.createElement(\n          \'center\',\n          null,\n          data.header.title\n        ),\n        React.createElement(\n          \'center\',\n          null,\n          data.header.number\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'center_box\' },\n        React.createElement(\n          \'div\',\n          { className: \'tit_yell\' },\n          data.base_lc_info.title\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'center_tb\' },\n          React.createElement(\n            \'div\',\n            { className: \'font-yell\' },\n            \'\\u7B49\\u7EA7\'\n          ),\n          data.base_lc_info.degree[0].length > 1 ? React.createElement(\n            \'select\',\n            null,\n            degree\n          ) : React.createElement(\n            \'div\',\n            null,\n            data.base_lc_info.degree\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'font-yell\' },\n            \'\\u77ED\\u4FE1\\u63D0\\u9192\'\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            data.base_lc_info.content\n          )\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'bottom_box\' },\n        React.createElement(\n          \'div\',\n          { className: \'tit_yell\' },\n          \'\\u57FA\\u672C\\u4FE1\\u606F\'\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_tb\' },\n          detail\n        )\n      ),\n      React.createElement(\'div\', { className: \'bottom_box\' })\n    );\n  }\n});';
    },

    getData_control17_dnIGpW: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], content: [] };if ($(elem).find("#requestlogappednDiv").length > 0 && $(elem).find("#requestlogappednDiv").children().length > 0) {
        var elem = $(elem).children("div").eq(0).find("tbody")[0];
      } else {
        var elem = $(elem).children("#mainWFHead").eq(0).find("tbody")[0];
      }if ($(elem).children(".HeaderForWF").length > 0 && $(elem).children(".HeaderForWF").children("th").length > 0) {
        $(elem).children(".HeaderForWF").children("th").each(function () {
          data.title.push($(this).text().replace(/\s/ig, ""));
        });
      }if ($(elem).children(".datalight").length > 0 && $(elem).children(".datalight").children("td").length > 0) {
        //console.log(11111111111111);
        $(elem).children(".datalight").each(function () {
          var arr = [];$(elem).children(".datalight").children("td").each(function () {
            arr.push($(this).text().replace(/\s/ig, ""));
          });data.content.push(arr);
        });
      }return data;
    },
    doAction_uiControl22_rpqG74: function (data, elem) {},
    getTemplate_uiControl22_rpqG74: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.content.length > 0){\n      var item = data.content.map(function(d1,i1){\n        return(\n          <section>{\n         d1.map(function(d2,i2){\n            return(<div><span>{data.title[i2]}</span><span>{d2}</span></div>)\n          })\n                }\n          </section>\n              )\n      })\n    }\n    else{\n       var item = data.title.map(function(d,i){\n      return(<div><span>{d}</span></div>)\n    })\n    }\n    return (\n      <div>\n        {item}\n      </div>\n    )\n    }\n    else{\n      return(<div style ={{display:\'none\'}}></div>)\n    }\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.content.length > 0) {\n        var item = data.content.map(function (d1, i1) {\n          return React.createElement(\n            \'section\',\n            null,\n            d1.map(function (d2, i2) {\n              return React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d2\n                )\n              );\n            })\n          );\n        });\n      } else {\n        var item = data.title.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              d\n            )\n          );\n        });\n      }\n      return React.createElement(\n        \'div\',\n        null,\n        item\n      );\n    } else {\n      return React.createElement(\'div\', { style: { display: \'none\' } });\n    }\n  }\n});';
    }
  });
})(window, ysp);