(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_6lGIdU: function (elem) {
      if (elem) {
        var Is_Old_Version = false;var arr = { ulStatus: [], lis: [],
          status: [], theads: [], tbodys: [], tfoots: [] }; //导航部分
        var tempstatictab = elem.contentWindow.document.querySelectorAll(".static-tabs");if (tempstatictab.length == 0) {
          tempstatictab = [elem.contentWindow.document.querySelectorAll(".tabs-panels")[1]];if (tempstatictab[0] != null) {
            Is_Old_Version = true;
          }
        }[].forEach.call(tempstatictab, function (TempTab) {
          if (Is_Old_Version) {
            var ul = TempTab.parentElement.querySelector("ul");
          } else {
            var ul = TempTab.querySelector("ul");
          }if (ul != null) {
            var li = ul.querySelectorAll("li"); //导航状态
            for (var i = 0; i < li.length; i++) {
              if (li[i].getAttribute("class") == "selected") {
                arr.ulStatus.push(true);
              } else if (li[i].getAttribute("class") == "tabs-selected") {
                arr.ulStatus.push(true);
              } else {
                arr.ulStatus.push(false);
              }if (li[i].style.display != "none") {
                arr.lis.push(li[i].textContent.trim());
              }
            } //表格内容
            var pageIDArr = [];if (TempTab.querySelector(".tabpanles")) {
              var pageIDArrItem = TempTab.querySelector("#XtraTabPage3");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPageBXMX2");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage9");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage4");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage5");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage8");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPageBIZLog");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage6");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#XtraTabPage2");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }
            } else if (TempTab.querySelector("#mxnr")) {
              var pageIDArrItem = TempTab.querySelector("#报销明细");
              if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#费用分摊");
              if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#增值税专用发票信息");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#支付明细");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#借款销核");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#状态变更记录");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#报销费用");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#支付信息");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#预付款明细");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }pageIDArrItem = TempTab.querySelector("#借款明细（必须填写）");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }
              pageIDArrItem = TempTab.querySelector("#借款核销");if (pageIDArrItem != null) {
                pageIDArr.push(pageIDArrItem);
              }
            } else {
              var PanelsArr = TempTab.querySelectorAll(".datagrid-view2");for (var k = 0; k < PanelsArr.length; k++) {
                pageIDArr.push(PanelsArr[k]);
              }
            } //采集内容
            for (var i = 0; i < pageIDArr.length; i++) {
              var TempThead = [];var TempTbody = [];var TempTfoot = [];var displayStatus;if (pageIDArr[i] != null) {
                //显示状态
                if (Is_Old_Version) {
                  arr.status.push(pageIDArr[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display);
                } else {
                  displayStatus = pageIDArr[i].getAttribute("style");if (displayStatus == null) {
                    displayStatus = pageIDArr[i].getAttribute("class");if (displayStatus == "" || displayStatus == null) {
                      displayStatus = "none";
                    }arr.status.push(displayStatus);
                  } else {
                    arr.status.push(pageIDArr[i].style.display);
                  }
                } //页面内容
                if (displayStatus == "none") {
                  TempThead.push("");TempTbody.push("");TempTfoot.push("");
                } else {
                  //表格标题
                  if (Is_Old_Version) {
                    var tab = pageIDArr[i].querySelector(".datagrid-header");var ths = tab.querySelectorAll("td");
                  } else {
                    var tab = pageIDArr[i].querySelector("table");var thead = tab.querySelector("thead");if (thead == null) {
                      var ths = tab.querySelectorAll("th");
                    } else {
                      var ths = thead.querySelectorAll("th");
                    }
                  }if (ths.length != 0) {
                    for (var j = 0; j < ths.length; j++) {
                      TempThead.push(ths[j].textContent.trim());
                    }
                  } else {
                    TempThead.push([""]);
                  } //表单内容
                  if (Is_Old_Version) {
                    var tab = pageIDArr[i].querySelector(".datagrid-body");
                  }var tbody = tab.querySelector("#YFKMX");if (tbody == null) {
                    tbody = tab.querySelector("#ZFMX");if (tbody == null) {
                      tbody = tab.querySelector("#BXFY");if (tbody == null) {
                        tbody = tab.querySelector("#JKMX");if (tbody == null) {
                          tbody = tab.querySelector("#JKHX");if (tbody == null) {
                            tbody = tab.querySelector("#BXMX");if (tbody == null) {
                              tbody = tab.querySelector("tbody");
                            }
                          }
                        }
                      }
                    }
                  }if (tbody != null) {
                    var trc = tbody.querySelectorAll("tr");if (trc.length != 0) {
                      for (var j = 0; j < trc.length; j++) {
                        var tds = trc[j].querySelectorAll("td");if (tds.length != 0) {
                          var con = [];for (var k = 0; k < tds.length; k++) {
                            if (tds[k].querySelector("select")) {
                              var sel = tds[k].querySelector("select");console.log(sel);if (sel.value == "是") {
                                con.push(sel.querySelectorAll("option")[0].textContent);
                              } else {
                                con.push(sel.querySelectorAll("option")[1].textContent);
                              }
                            } else {
                              con.push(tds[k].textContent.trim());
                            }
                          }TempTbody.push(con);
                        }
                      }
                    } else {
                      TempTbody.push("");
                    }
                  } //表单底部
                  if (Is_Old_Version) {
                    var tab = pageIDArr[i].querySelector(".datagrid-footer");var tfoot = tab.querySelector("tbody");
                  } else {
                    var tfoot = tab.querySelector("tfoot");
                  }if (tfoot != null) {
                    var trf = tfoot.querySelectorAll("tr");if (trf.length != 0) {
                      for (var j = 0; j < trf.length; j++) {
                        var tds = trf[j].querySelectorAll("th");if (tds.length == 0) {
                          tds = trf[j].querySelectorAll("td");
                        }for (var k = 0; k < tds.length; k++) {
                          TempTfoot.push(tds[k].textContent.trim());
                        }
                      }
                    } else {
                      TempTfoot.push("");
                    }
                  }
                }arr.theads.push(TempThead);arr.tbodys.push(TempTbody);arr.tfoots.push(TempTfoot);
              }
            }
          }
        });
        return arr;
      }return [];
    },
    doAction_uiControl7_a6to0y: function (data, elem) {
      if (data.eventType == "click") {
        var index = parseInt(data.dataCustom);var Is_Old_Version = false;var tempstatictab = elem.contentWindow.document.querySelectorAll(".static-tabs");if (tempstatictab.length == 0) {
          tempstatictab = [elem.contentWindow.document.querySelectorAll(".tabs-panels")[1]];if (tempstatictab[0] != null) {
            Is_Old_Version = true;
          }
        }[].forEach.call(tempstatictab, function (TempTab) {
          if (Is_Old_Version) {
            var ul = TempTab.parentElement.querySelector("ul");if (ul != null) {
              ul.querySelectorAll("li")[index].click();
            }
          } else {
            var ul = TempTab.querySelector("ul");if (ul != null) {
              ul.querySelectorAll("li")[index].click();
            }
          }
        });
      }
    },
    getTemplate_uiControl7_a6to0y: function () {
      var selfTemplate = "import {\n  Tabs\n} from 'ysp-custom-components';\nimport {\n  Component\n} from 'react';\nexport default class extends React.Component {\n  tabClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler || [];\n    if(handler){\n      handler({\n        data:target.getAttribute(\"data-index\"),\n        eventType:\"click\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    var showIndex = 0;\n     var retData = [];\n    if(data&&data.lis.length>0){\n       for(var i = 0;i<data.status.length;i++){\n        if(data.status[i] != \"none\"){\n          showIndex = i;\n        }\n      }\n      var divnum = data.tbodys[showIndex].length + 2;\n      var tabnum = data.theads[showIndex].length;\n      for (var i = 0; i < divnum; i++) {\n        if (i == 0) {\n          retData.push(<div className=\"theads\">{\n            data.theads[showIndex].map(function(elem,index){\n                return (<span>{elem}</span>)\n              })\n          }</div>)\n        } else if (i > 0 && i < divnum - 1) {\n          if(data.tbodys[showIndex][i-1].length != 0){\n            retData.push(<div className=\"tbodys\">{\n            data.tbodys[showIndex][i-1].map(function(elem,index){\n                return (<span>{elem!=\"\" ? elem : <span>&nbsp;</span>}</span>)\n              })\n          }</div>)\n          }\n          \n        } else if (i == divnum - 1) {\n          retData.push(<div className=\"tfoots\">{\n            data.tfoots[showIndex].map(function(elem,index){\n              return (<span>{elem!=\"\" ? elem : <span>&nbsp;</span>}</span>)\n            })\n          }</div>)\n        }\n      }\n    }\n    return (\n      <div className=\"contentTab\">\n      \t<Tabs PassedCustomData={data} tabClick={(e)=>{\n              var target=e.target;\n              var handler=this.props.customHandler;\n              if(handler){\n                 handler({\n                   data:target.getAttribute(\"data-index\"),\n                   eventType:'click'\n                 })\n              }\n       }}/>\n        <div className=\"tables\">\n          <div>{retData}</div>\n        </div>\n      </div>\n    )\n  }\n};";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'tabClick',\n    value: function tabClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler || [];\n      if (handler) {\n        handler({\n          data: target.getAttribute(\"data-index\"),\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.customData;\n      var _this = this;\n      var showIndex = 0;\n      var retData = [];\n      if (data && data.lis.length > 0) {\n        for (var i = 0; i < data.status.length; i++) {\n          if (data.status[i] != \"none\") {\n            showIndex = i;\n          }\n        }\n        var divnum = data.tbodys[showIndex].length + 2;\n        var tabnum = data.theads[showIndex].length;\n        for (var i = 0; i < divnum; i++) {\n          if (i == 0) {\n            retData.push(React.createElement(\n              'div',\n              { className: 'theads' },\n              data.theads[showIndex].map(function (elem, index) {\n                return React.createElement(\n                  'span',\n                  null,\n                  elem\n                );\n              })\n            ));\n          } else if (i > 0 && i < divnum - 1) {\n            if (data.tbodys[showIndex][i - 1].length != 0) {\n              retData.push(React.createElement(\n                'div',\n                { className: 'tbodys' },\n                data.tbodys[showIndex][i - 1].map(function (elem, index) {\n                  return React.createElement(\n                    'span',\n                    null,\n                    elem != \"\" ? elem : React.createElement(\n                      'span',\n                      null,\n                      '\\xA0'\n                    )\n                  );\n                })\n              ));\n            }\n          } else if (i == divnum - 1) {\n            retData.push(React.createElement(\n              'div',\n              { className: 'tfoots' },\n              data.tfoots[showIndex].map(function (elem, index) {\n                return React.createElement(\n                  'span',\n                  null,\n                  elem != \"\" ? elem : React.createElement(\n                    'span',\n                    null,\n                    '\\xA0'\n                  )\n                );\n              })\n            ));\n          }\n        }\n      }\n      return React.createElement(\n        'div',\n        { className: 'contentTab' },\n        React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabClick: function tabClick(e) {\n            var target = e.target;\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                data: target.getAttribute(\"data-index\"),\n                eventType: 'click'\n              });\n            }\n          } }),\n        React.createElement(\n          'div',\n          { className: 'tables' },\n          React.createElement(\n            'div',\n            null,\n            retData\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control3_lRJs3K: function (elem) {},
    doAction_uiControl3_EW85Bm: function (data, elem) {
      if (data.eventType == "click") {
        elem.querySelectorAll("li")[1].querySelector(".tabs-inner").click();
      }
    },
    getTemplate_uiControl3_EW85Bm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"tit\">\n        <div className=\"goback\" onClick={this.onClick.bind(this)}>\n          <span className=\"ysp_goback\"></span><span className=\"text\">\u8FD4\u56DE</span>\n        </div>\n        <div className=\"title\">\n          <h1>\u5BA1\u6279\u5355\u636E</h1>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"tit\" },\n      React.createElement(\n        \"div\",\n        { className: \"goback\", onClick: this.onClick.bind(this) },\n        React.createElement(\"span\", { className: \"ysp_goback\" }),\n        React.createElement(\n          \"span\",\n          { className: \"text\" },\n          \"\\u8FD4\\u56DE\"\n        )\n      ),\n      React.createElement(\n        \"div\",\n        { className: \"title\" },\n        React.createElement(\n          \"h1\",\n          null,\n          \"\\u5BA1\\u6279\\u5355\\u636E\"\n        )\n      )\n    );\n  }\n});";
    },
    getData_control4_ITM6u3: function (elem) {
      if (elem) {
        var arr = [];var lis = elem.querySelectorAll("a");for (var i = 0; i < lis.length - 1; i++) {
          arr.push(lis[i].textContent);
        }return arr;
      }return [];
    },
    doAction_uiControl4_VZl9Id: function (data, elem) {
      if (data.eventType == "click") {
        var ind = parseInt(data.dataCustom);elem.querySelectorAll("a")[ind].click();
      }
    },
    getTemplate_uiControl4_VZl9Id: function () {
      var selfTemplate = "\nimport {Component} from 'react';\nexport default class extends Component{\n  onClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.getAttribute(\"data-index\"),\n        eventType:\"click\"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    return (\n      <div className=\"container\">\n        <span className=\"selected\">\n          <span>\n            <span onClick={_this.onClick.bind(_this)} data-index=\"0\">\u67E5\u770B\u5355\u636E</span>\n          </span>\n        </span>\n        <span>\n          <span>\n            <span onClick={_this.onClick.bind(_this)} data-index=\"1\">\u5BA1\u6279\u65E5\u5FD7</span>\n          </span>\n        </span>\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onClick\",\n    value: function onClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.getAttribute(\"data-index\"),\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"container\" },\n        React.createElement(\n          \"span\",\n          { className: \"selected\" },\n          React.createElement(\n            \"span\",\n            null,\n            React.createElement(\n              \"span\",\n              { onClick: _this.onClick.bind(_this), \"data-index\": \"0\" },\n              \"\\u67E5\\u770B\\u5355\\u636E\"\n            )\n          )\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          React.createElement(\n            \"span\",\n            null,\n            React.createElement(\n              \"span\",\n              { onClick: _this.onClick.bind(_this), \"data-index\": \"1\" },\n              \"\\u5BA1\\u6279\\u65E5\\u5FD7\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;";
    },

    getData_control18_zVDwO4: function (elem) {
      if (elem) {
        var arr = [];var tit = [];var pData = [];var body = elem.contentWindow.document.querySelector("body");if (body.getAttribute("id") == "Form1") {
          var tab = body.querySelector("#TableLayoutPanel1");var tds = tab.querySelectorAll("td");var tdsLen = tds.length;for (var j = 0; j < tdsLen; j++) {
            if (j % 2 == 0) {
              if (tds[j].style.display != "none") {
                if (tds[j].textContent != "") {
                  tit.push(tds[j].textContent);
                }
              }
            } else {
              if (tds[j].style.display != "none") {
                if (tds[j].querySelector(".fluidWrap").querySelectorAll("input")[0]) {
                  pData.push(tds[j].querySelector(".fluidWrap").querySelectorAll("input")[0].value);
                } else {
                  pData.push(tds[j].querySelector(".fluidWrap").querySelectorAll("textarea")[0].value);
                }
              }
            }
          }arr.push(tit);arr.push(pData);
        } else {
          var trs = body.querySelectorAll("tr");for (var i = 0; i < trs.length; i++) {
            var tds = trs[i].querySelectorAll('.label_title');var tdsLen = tds.length;var ths = trs[i].querySelectorAll('td');var thsLen = ths.length;if (trs[i].style.display != "none") {
              for (var j = 0; j < tdsLen; j++) {
                if (tds[j].style.display != "none") {
                  if (tds[j].textContent != "") {
                    tit.push(tds[j].textContent);
                  }
                }
              }for (var j = 0; j < thsLen; j++) {
                if (j % 2 != 0) {
                  if (ths[j].style.display != "none") {
                    if (ths[j].querySelector("select")) {
                      if (ths[j].querySelector("select").value == "1") {
                        pData.push("内部员工");
                      } else if (ths[j].querySelector("select").value == "2") {
                        pData.push("外部供应商");
                      }
                    } else {
                      pData.push(ths[j].textContent.trim());
                    }
                  }
                }
              }
            }
          }arr.push(tit);arr.push(pData);
        }return arr;
      }return [];
    },
    doAction_uiControl16_ZW1JJU: function (data, elem) {},
    getTemplate_uiControl16_ZW1JJU: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends React.Component{  \n  constructor(){\n    super();\n    this.state={\n      open:false,\n \xA0 \xA0 \xA0text:\"\u663E\u793A\u66F4\u591A\"\n    }\n  }\npanelClick(e){\n  \tvar target = e.target\n\t\tconsole.log(\"PanelClick\");\n \xA0 \xA0if(target.className==\"unFoldIcon\"){\n      target.className=\"foldIcon\"\n      this.setState({\n        open:false,\n \xA0 \xA0 \xA0 \xA0text:\"\u663E\u793A\u66F4\u591A\"\n      })\n    }else{\n      target.className=\"unFoldIcon\"\n      this.setState({\n        open:true,\n \xA0 \xA0 \xA0 \xA0text:\"\u9690\u85CF\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    var lis = data&&data[0].length>0&&data[0].map(function(d,i){\n      return (<div className=\"xy\">\n\t\t\t\t\t{(_this.state.open == true || i<5) ? <div className=\"cards\">\n          <div className=\"cardsTit\"><span>{d}</span></div>\n          <div className=\"cardsCon\"><label>{data[1][i]!=\"\" ? data[1][i] : <span>&nbsp;</span>}</label></div>\n        </div>:\"\"}\n        </div>\n      )\n    })\n    return (\n      <div className=\"content\">\n        <div>\n          <label>\n            <b></b>\n            <span>\u57FA\u7840\u4FE1\u606F</span>\n          </label>\n        </div>\n        {lis}\n        <div className=\"more\">\n          <div className=\"foldIcon\" onClick={_this.panelClick.bind(_this)}></div>\n        \t<span>{_this.state.text}</span>\n        </div>\n      </div>\n    )\n  }\n};\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      open: false,\n      text: \"\u663E\u793A\u66F4\u591A\"\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"panelClick\",\n    value: function panelClick(e) {\n      var target = e.target;\n      console.log(\"PanelClick\");\n      if (target.className == \"unFoldIcon\") {\n        target.className = \"foldIcon\";\n        this.setState({\n          open: false,\n          text: \"\u663E\u793A\u66F4\u591A\"\n        });\n      } else {\n        target.className = \"unFoldIcon\";\n        this.setState({\n          open: true,\n          text: \"\u9690\u85CF\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      var lis = data && data[0].length > 0 && data[0].map(function (d, i) {\n        return React.createElement(\n          \"div\",\n          { className: \"xy\" },\n          _this.state.open == true || i < 5 ? React.createElement(\n            \"div\",\n            { className: \"cards\" },\n            React.createElement(\n              \"div\",\n              { className: \"cardsTit\" },\n              React.createElement(\n                \"span\",\n                null,\n                d\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"cardsCon\" },\n              React.createElement(\n                \"label\",\n                null,\n                data[1][i] != \"\" ? data[1][i] : React.createElement(\n                  \"span\",\n                  null,\n                  \"\\xA0\"\n                )\n              )\n            )\n          ) : \"\"\n        );\n      });\n      return React.createElement(\n        \"div\",\n        { className: \"content\" },\n        React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"label\",\n            null,\n            React.createElement(\"b\", null),\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u57FA\\u7840\\u4FE1\\u606F\"\n            )\n          )\n        ),\n        lis,\n        React.createElement(\n          \"div\",\n          { className: \"more\" },\n          React.createElement(\"div\", { className: \"foldIcon\", onClick: _this.panelClick.bind(_this) }),\n          React.createElement(\n            \"span\",\n            null,\n            _this.state.text\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control13_bbMbwD: function (elem) {
      if (elem) {
        var arr = [];var title = elem.querySelector(".panel-title");arr.push(title.textContent);var text = elem.querySelector(".messager-body").querySelectorAll("div")[1];arr.push(text.textContent);var btn = elem.querySelector(".messager-button").querySelectorAll("a");for (var i = 0; i < btn.length; i++) {
          arr.push(btn[i].textContent);
        }return arr;
      }return [];
    },
    doAction_uiControl9_dr96ob: function (data, elem) {
      if (data.eventType == "click") {
        var ind = parseInt(data.customData) - 1;elem.querySelector(".messager-button").querySelectorAll("a")[ind].click();
      }
    },
    getTemplate_uiControl9_dr96ob: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n     var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.getAttribute(\"data-index\"),\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return (\n      <div className=\"messagers\">{data&&data.length>0 ? <div className=\"messager\">\n        <div className=\"messager-title\">{data[0]}</div>\n        <div className=\"messager-body\">\n          <div className=\"messager-news\">{data[1]}</div>\n          <div className=\"btns\">\n            <span className=\"btn\" data-index=\"1\" onClick={_this.onClick.bind(_this)}>{data[2]}</span>\n            <span className=\"btn\" data-index=\"2\" onClick={_this.onClick.bind(_this)}>{data[3]}</span>\n          </div>\n        </div>\n      </div> : \"\"}</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.getAttribute(\"data-index\"),\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return React.createElement(\n      \"div\",\n      { className: \"messagers\" },\n      data && data.length > 0 ? React.createElement(\n        \"div\",\n        { className: \"messager\" },\n        React.createElement(\n          \"div\",\n          { className: \"messager-title\" },\n          data[0]\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"messager-body\" },\n          React.createElement(\n            \"div\",\n            { className: \"messager-news\" },\n            data[1]\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"btns\" },\n            React.createElement(\n              \"span\",\n              { className: \"btn\", \"data-index\": \"1\", onClick: _this.onClick.bind(_this) },\n              data[2]\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"btn\", \"data-index\": \"2\", onClick: _this.onClick.bind(_this) },\n              data[3]\n            )\n          )\n        )\n      ) : \"\"\n    );\n  }\n});";
    },
    getData_control24_u7VPRH: function (elem) {//   return;
      // }
      // if (elem) {
      //   var signal = elem.ownerDocument.querySelector(".layout-split-east");
      //   if (signal&&signal.style.display == "none") {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }
    },
    doAction_uiControl18_pq0uit: function (data, elem) {
      if (data.eventType == "click") {
        elem.click();
      }
    },
    getTemplate_uiControl18_pq0uit: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n//   componentDidMount(){\n// \t\t// debugger;\n//     var target=this.refs.click;\n//   setTimeout(function(){\n//     target.click()\n//   },500)\n    \n  \n    \n//   }\n  render(){\n    return(\n    \t<div ref=\"click\" onClick={()=>{\n          var handler=this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\"click\"\n            })\n          }\n        }}></div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n\n    //   componentDidMount(){\n    // \t\t// debugger;\n    //     var target=this.refs.click;\n    //   setTimeout(function(){\n    //     target.click()\n    //   },500)\n\n\n    //   }\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", { ref: \"click\", onClick: function onClick() {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \"click\"\n            });\n          }\n        } });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control30_00swzi: function (elem) {
      if (elem) {
        var arr = [];var div = elem.nextElementSibling;if (div) {
          if (div.querySelector(".messager-body.panel-body.panel-body-noheader.panel-body-noborder.window-body.notify.notify-success")) {
            return true;
          } else {
            return false;
          }
        }
      }return false;
    },
    doAction_uiControl20_ygrQQk: function (data, elem) {},
    getTemplate_uiControl20_ygrQQk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        {data? <div className=\"ysp_mask\"><span className=\"suces\"></span></div> : \"\"}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      data ? React.createElement(\n        \"div\",\n        { className: \"ysp_mask\" },\n        React.createElement(\"span\", { className: \"suces\" })\n      ) : \"\"\n    );\n  }\n});";
    },
    getData_control31_m5Ofwc: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var radio = elem.querySelectorAll("input");for (var i = 0; i < radio.length; i++) {
          if (radio[i].checked) {
            data.push(true);
          } else {
            data.push(false);
          }
        }return data;
      }
    },
    doAction_uiControl21_faCblb: function (data, elem) {
      if (data.eventType == "btnClick") {
        elem.querySelector("#btnDocCustomItemsSubmit").click();
      } else if (data.eventType == "change") {
        var val = data.dataCustom.val;elem.querySelector("#wftextareaSPYJ").value = val;
      } else if (data.eventType == "radioClick") {
        var i = parseInt(data.dataCustom);elem.querySelector(".wfcstContentRadio").querySelectorAll("input")[i].click();
      }
    },
    getTemplate_uiControl21_faCblb: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      open:false\n      // index:-1,\n      // i:-1,\n      // text:\"\"\n    }\n  }\n  menuClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n  \te.stopPropagation( );\n    if(handler){\n      handler({\n        eventType:\"menuClick\"\n      })\n    }\n     this.setState({\n        open:!this.state.open\n      })\n  }\n  radioClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"radioClick\"\n      })\n    }\n  }\n  onChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{val:target.value},\n        eventType:\"change\"\n      })\n    }\n  }\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.className,\n        eventType:\"btnClick\"\n      })\n    }\n    this.setState({\n        open:!this.state.open\n      })\n  }\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n    var pass=[\"\u901A\u8FC7\",\"\u4E0D\u901A\u8FC7\"]\n    return(\n      <div>\n        {this.state.open ? <div>\n          {data? <div className=\"ysp_mask\">\n          <div className=\"ysp_container\">\n            <div className=\"ysp_advice\">\n              <b></b>\n              <span>\u5BA1\u6279\u610F\u89C1</span>\n              <ATextarea placeholder=\"\u8BF7\u586B\u5199\u5BA1\u6279\u610F\u89C1\" onChange={_this.onChange.bind(_this)} value=\"\"/>\n            </div>\n            <div className=\"conclusion\">\n              <b></b>\n              <span>\u5BA1\u6279\u7ED3\u8BBA</span>\n              <div>\n              {data&&data.map(function(d,i){\n                return(\n                  <label >\n                    <span className={d? \"checked\":\"unchecked\"} onClick={_this.radioClick.bind(_this)} data-index={i}></span>\n                    <span>{pass[i]}</span>\n                  </label>\n                )\n              })}\n                </div>\n            </div>\n            <div className=\"ysp_btn\">\n              <div className='btns' onClick={this.menuClick.bind(this)}>\u8FD4\u56DE</div>\n              <div className='btn' onClick={_this.btnClick.bind(_this)}>\u5BA1\u6279</div>\n            </div>\n          </div>\n        </div> : \"\"}\n        </div> :\" \"}\n        <div className=\"botton\">\n          <span className=\"btn\" onClick={this.menuClick.bind(this)}>\u5BA1\u6279</span>\n        </div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      open: false\n      // index:-1,\n      // i:-1,\n      // text:\"\"\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"menuClick\",\n    value: function menuClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      e.stopPropagation();\n      if (handler) {\n        handler({\n          eventType: \"menuClick\"\n        });\n      }\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }, {\n    key: \"radioClick\",\n    value: function radioClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"radioClick\"\n        });\n      }\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { val: target.value },\n          eventType: \"change\"\n        });\n      }\n    }\n  }, {\n    key: \"btnClick\",\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: \"btnClick\"\n        });\n      }\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      var pass = [\"\u901A\u8FC7\", \"\u4E0D\u901A\u8FC7\"];\n      return React.createElement(\n        \"div\",\n        null,\n        this.state.open ? React.createElement(\n          \"div\",\n          null,\n          data ? React.createElement(\n            \"div\",\n            { className: \"ysp_mask\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_container\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_advice\" },\n                React.createElement(\"b\", null),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u5BA1\\u6279\\u610F\\u89C1\"\n                ),\n                React.createElement(ATextarea, { placeholder: \"\\u8BF7\\u586B\\u5199\\u5BA1\\u6279\\u610F\\u89C1\", onChange: _this.onChange.bind(_this), value: \"\" })\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"conclusion\" },\n                React.createElement(\"b\", null),\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u5BA1\\u6279\\u7ED3\\u8BBA\"\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  data && data.map(function (d, i) {\n                    return React.createElement(\n                      \"label\",\n                      null,\n                      React.createElement(\"span\", { className: d ? \"checked\" : \"unchecked\", onClick: _this.radioClick.bind(_this), \"data-index\": i }),\n                      React.createElement(\n                        \"span\",\n                        null,\n                        pass[i]\n                      )\n                    );\n                  })\n                )\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_btn\" },\n                React.createElement(\n                  \"div\",\n                  { className: \"btns\", onClick: this.menuClick.bind(this) },\n                  \"\\u8FD4\\u56DE\"\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"btn\", onClick: _this.btnClick.bind(_this) },\n                  \"\\u5BA1\\u6279\"\n                )\n              )\n            )\n          ) : \"\"\n        ) : \" \",\n        React.createElement(\n          \"div\",\n          { className: \"botton\" },\n          React.createElement(\n            \"span\",\n            { className: \"btn\", onClick: this.menuClick.bind(this) },\n            \"\\u5BA1\\u6279\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, 'checkForm');
})(window, ysp);