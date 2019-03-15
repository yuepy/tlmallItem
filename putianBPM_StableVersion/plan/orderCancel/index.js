(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control284_U2B7eQ: function (elem) {
      'use strict';

      ;if (!elem) {
        return [];
      }if (elem) {
        var data = [];var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');var td_0_1 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_1');if (receive && _receive.style.display != 'none') {
          data.push(receive.textContent);
        } else if (noReceive) {
          data.push(noReceive.textContent);
        } else if (td_0_1 && td_0_1.textContent.trim() == '领取') {
          data.push(td_0_1.textContent.trim());
        }return data;
      }
    },
    doAction_uiControl281_TSd4pu: function (data, elem) {
      'use strict'; // if (data.eventType == 'click') {
      //   var d = data.dataCustom;
      //   var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];
      //   if (d == '领取') {
      //     var td_0_1 = elem.contentWindow.document.querySelector('#td_0_1');
      //     if (td_0_1.textContent.trim() == '领取') {
      //       var _click = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");
      //     } else {
      //       var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
      //     }
      //     _click.click();
      //   } else if (d == '取消领取') {
      //     var _click = elem.contentWindow.document.querySelector('#td_0_3'); //红色提示
      //     var newRow = elem.contentDocument.querySelectorAll("iframe")[0].contentDocument.querySelectorAll(".mini-grid-rowstable")[1];
      //     var reg = /\s/;
      //     if (newRow && reg.test(newRow.textContent)) {
      //       if (_click) {
      //         var _icon = _click.querySelector('a');
      //         _icon.click();
      //       } else {
      //         var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
      //         _click.click();
      //       }
      //     } else {
      //       if (_click) {
      //         var _icon = _click.querySelector('a');
      //         var _innerHTML = _click.querySelector('span').textContent;
      //         _innerHTML == '取消领取' && _icon.click();
      //         var json = {
      //           time: new Date().getTime()
      //         };
      //         ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
      //       } else {
      //         var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");

      //         var _innerHTML = _click.querySelector('span').textContent;
      //         _click.click();
      //         var json = {
      //           time: new Date().getTime()
      //         };
      //         ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
      //       }
      //     }
      //   } else {
      //     var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
      //     _click.click();
      //     var json = {
      //       time: new Date().getTime()
      //     };
      //     ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
      //   }
      // } else if (data.eventType == 'back') {
      //   if (!top.EAPI.isAndroid()) {
      //     var btns = elem.contentDocument.querySelector("#btn");
      //     if (btns && btns.style.display != "none") {
      //       if (btns.querySelector("#recover") && btns.querySelector("#recover").textContent == "追回") {
      //         var json = {
      //           time: new Date().getTime()
      //         };
      //         var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];
      //         if (btn) {
      //           btn.click();
      //           ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
      //         }
      //       } else {
      //         var json = {
      //           time: new Date().getTime()
      //         };
      //         var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];
      //         if (btn) {
      //           btn.click();
      //           ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
      //         }
      //       }
      //     } else {
      //       var json = {
      //         time: new Date().getTime()
      //       };
      //       var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];
      //       if (btn) {
      //         btn.click();
      //         ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
      //       }
      //     }
      //   } else {
      //     ysp.customHelper.AndroidBackFn();
      //   }
      // } else if (data.eventType == 'AndroidBack') {
      //   ysp.customHelper.AndroidBackModel = 'PendingTask';
      //   ysp.customHelper.AndroidBackFlag = 'destination';
      // }

      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (d == '领取') {
          var td_0_1 = elem.contentWindow.document.querySelector('#td_0_1');if (td_0_1.textContent.trim() == '领取') {
            var _click = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
          }_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3'); //红色提示
          //     var newRow = elem.contentDocument.querySelectorAll("iframe")[0].contentDocument.querySelectorAll(".mini-grid-rowstable")[1];
          //     var reg = /\s/;
          //     if (reg.test(newRow.textContent)) {
          //       if (_click) {
          //         var _icon = _click.querySelector('a');
          //         _icon.click();
          //       } else {
          //         var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
          //         _click.click();
          //       }
          //     } else {
          if (_click) {
            var _icon = _click.querySelector('a');var _innerHTML = _click.querySelector('span').textContent;_innerHTML == '取消领取' && _icon.click();var json = { time: new Date().getTime() };setTimeout(function () {
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }, 50);
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");var _innerHTML = _click.querySelector('span').textContent;_click.click();var json = { time: new Date().getTime() };setTimeout(function () {
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }, 50);
          } // }
        } else {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        }
      } else if (data.eventType == 'back') {
        //待办里面#dataForm1里面的第一个input的class里没有mini-disabled
        //   var dataForm1 = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#dataform1');
        //   if (dataForm1) {
        //     var disable = dataForm1.querySelector("#uuid");
        //   } 
        //待办里面#form1里含有#status和#statusApprove
        //   var status = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#status');
        //   var approveStatus = elem.contentWindow.document.querySelectorAll("iframe")[0].contentDocument.querySelector('#approveStatus');
        //   if (disable && disable.className.indexOf("mini-disabled") == -1 || status || approveStatus) {
        //     console.log("aa");
        //     var json = {
        //       time: new Date().getTime()
        //     }; 
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');
        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        //     }
        //   } else {
        //     console.log("bbb");
        //     var json = {
        //       time: new Date().getTime()
        //     };
        //     var btn = elem.ownerDocument.querySelector('.mini-tools-close');

        //     if (btn) {
        //       btn.click();
        //       ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
        //     }
        //   }
        var btns = elem.contentDocument.querySelector("#btn");if (btns && btns.style.display != "none") {
          if (btns.querySelector("#recover") && btns.querySelector("#recover").textContent == "追回") {
            var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
              btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
            }
          } else {
            var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
              btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl281_TSd4pu: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\', className: \'ysp-flex-top\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, className: \'ysp-Receive\', onClick: _this.onClick },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control285_sc18ml: function (elem) {
      'use strict';

      ;if (!elem) {
        return [];
      }if (elem) {
        var data = { tabs: [], tabsNum: [], key: {} }; // console.log(elem)
        var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item, i) {
          var key = item.parentElement.classList.contains('mini-tab-active');var num = item.parentElement.getAttribute("index");if (item.innerHTML != '流程监控') {
            if (key == true) {
              data.tabs.push(item.innerHTML);data.tabsNum.push(num);data.key = i;
            } else {
              data.tabs.push(item.innerHTML);data.tabsNum.push(num);
            }
          }
        });return data;
      }
    },
    doAction_uiControl282_Psm8wq: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl282_Psm8wq: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control286_D03Kxn: function (elem) {
      "use strict";

      ;if (!elem) {
        return;
      }if (elem) {
        var data = [];var table1 = elem.querySelector("table");if (table1) {
          var title = table1.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
            var obj = { title: "", content: "" };obj.title = title[i].textContent.trim();if (title[i].nextElementSibling.querySelectorAll("input").length > 0 && title[i].nextElementSibling.querySelectorAll("textarea").length == 0) {
              obj.content = title[i].nextElementSibling.querySelector('span').querySelectorAll("input")[0].value;
            } else if (title[i].nextElementSibling.querySelectorAll("textarea").length > 0) {
              obj.content = title[i].nextElementSibling.querySelectorAll("textarea")[0].value;
            } else {
              obj.content = title[i].nextElementSibling.textContent.trim();
            }data.push(obj);
          }
        }return data;
      }
    },
    doAction_uiControl283_dJhyoO: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl283_dJhyoO: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo" style={{marginTop:"10px"}}>\n       \t<div className="ysp_hrDetailInfo_title">\u57FA\u7840\u5C5E\u6027</div>\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.length>0&&data.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo", style: { marginTop: "10px" } },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title" },\n        "\\u57FA\\u7840\\u5C5E\\u6027"\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.length > 0 && data.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control287_c5MWHS: function (elem) {
      'use strict';
      ;if (elem && elem.ownerDocument.querySelectorAll('.mini-window-drag').length > 1) {
        var data = {};data.select = {};data.foot = {};data.list = [];var contentDom = elem.querySelector('.mini-panel-viewport').querySelector('iframe').contentDocument; //查询
        data.select.contractNum = contentDom.querySelectorAll('.mini-textbox-input')[0].value;data.select.contractName = contentDom.querySelectorAll('.mini-textbox-input')[1].value;data.select.contractFileName = contentDom.querySelectorAll('.mini-textbox-input')[2].value; //页脚翻页
        var footData = contentDom.querySelector('.mini-grid-pager');var _PagesMessage = footData.querySelector('.mini-pager-right').textContent;data.foot.PagesMessage = _PagesMessage;var _PageNumber = footData.querySelector('.mini-pager-num').value;data.foot.PageNumber = _PageNumber;var _PageCount = footData.querySelector('.mini-pager-pages').textContent;data.foot.PageCount = _PageCount; //列表
        var tableData = contentDom.querySelectorAll('table[class="mini-grid-table mini-grid-rowstable"]')[1];var trArr = tableData.querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trArr.length; i++) {
          var tdArr = trArr[i].querySelectorAll("td");var arry = [];for (var j = 0; j < tdArr.length; j++) {
            arry.push(tdArr[j].textContent);
          }data.list.push(arry);arry.shift();arry.shift();
        }data.list.shift();data.list.shift();return data;
      }
    },
    doAction_uiControl284_pS4lJJ: function (data, elem) {
      'use strict';
      if (data.eventType == 'back') {
        elem.querySelector('.mini-tools-close ').click();
      }
    },
    getTemplate_uiControl284_pS4lJJ: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport {Page} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true\n    }\n  }\t\n  back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  }\n  // componentDidMount(){\n  //   var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\') \n  //   setTimeout(function(){\n  //     outer.scrollTop=0\n  //   },500)\n  // }\n  showLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:\'showLoading\'\n    })\n  }\n  hideLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:\'hideLoading\'\n    })\n  }\n  stChange=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.value,\n         eventType:\'startTChange\'                         \n       })\n     }\n  }\n  etChange=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.value,\n         eventType:\'endTChange\'                         \n       })\n     }\n  }\n  flowBlur=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.value,\n         eventType:\'inputBlur\'                         \n       })\n     }\n  }\n\t/***\u9875\u811Astart***/   \n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:\'selectChange\'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:\'inputChange\'                         \n       })\n     }\n  }\n\t/***\u9875\u811Aend***/\n  render() {\n    const {\tcustomData,customHandler }=this.props;\n    var _this=this;\n    var data =this.props.customData;\n    return (\n      <div className="alertContent">\n        <Header amStyle="primary" title="\u9009\u62E9\u7B80\u6613\u91C7\u8D2D\u5408\u540C">\n          <HeaderLeft>\n            <AMUI.Button amStyle="primary" onClick={this.back} style={{\'margin\':0}}>\n              <span className=\'icon icon-left-nav\'></span>\n            </AMUI.Button>\n          </HeaderLeft>\n        </Header>\n\n        <div className="ysp-ProcessedTask-main" ref="outerWrapper">\n          <b onClick={()=>{this.setState({show:!this.state.show})}}>\n            \u67E5\u8BE2\n            <span className={\tthis.state.show\t?\t\'ysp-blue-bottom-icon\'\t:\t\'ysp-blue-top-icon\'}></span>\n          </b>\n          <Inquiry stateShow={this.state.show} click={(i,idx)=>{customHandler({data:[i,idx],eventType:\'click\'})}} blur={()=>{customHandler({data:\'1\',eventType:\'blur\'});this.showLoading();this.hideLoading()}}  startChange={this.stChange.bind(this)} endChange={this.etChange.bind(this)} inputBlur={this.flowBlur.bind(this)}\tData={customData}/>\n        </div>\n        \n        <div className="ysp_waitingTask_list">\n          {data.list.length>0? \n            data.list.map((d,i)=>{\n              return(\n                <div className="ysp_list_item">\n                  <div className="ysp_item_top">\n                    <i></i>\n                    <span className="ysp_top_title">{d[2]}</span>\n                  </div>\n                  <div className="ysp_item_bottom">\n                    <div className="ysp_bottom_left">\n                      <div>\u7B80\u6613\u5408\u540C\u7F16\u53F7\uFF1A{d[1]}</div>\n                    </div>\n                    <div className="ysp_bottom_left">\n                      <div>\u7B80\u6613\u5408\u540C\u6863\u6848\u7F16\u53F7\uFF1A{d[3]}</div>\n                    </div>\n                    <div className="ysp_btn_panel">\n                      <button className="ysp_btn_do" onClick={_this.clickBtn} data-index={i} data-i="0">\u786E\u5B9A</button>\n                    </div>\n                  </div>\n                </div>\n              )\n            }) : <div\tclassName="ysp-no-data">\n                    <i></i>\n                    <div>\u6682\u65E0\u6570\u636E</div>\n                 </div>\n          }\n        </div>\n        \n        <div>\n          <Page\tPassedCustomData={data.foot}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />\t\n        </div>\n      </div>\n    )\n  }\n}\nclass Inquiry extends React.Component{\n  render(){\n    var data=this.props.Data ||\t[];\n    return(       \n      <div className="ysp-ProcessedTask-check-main" style={{ display:this.props.stateShow\t?\t\'none\':\'block\'}}>\n        <div className="ysp-flowName">\n          <span className="ysp-flowName-span">\u7B80\u6613\u5408\u540C\u7F16\u53F7:</span>\n          <AInput\t className=\'ysp-flowName-input\' value={data.select.contractNum} onBlur={this.props.inputBlur}/>\n        </div>\n        <div className="ysp-flowName">\n          <span className="ysp-flowName-span">\u7B80\u6613\u5408\u540C\u540D\u79F0:</span>\n          <AInput\t className=\'ysp-flowName-input\' value={data.select.contractName} onBlur={this.props.inputBlur}/>\n        </div>\n        <div className="ysp-flowName">\n          <span className="ysp-flowName-span">\u7B80\u6613\u5408\u540C\u6863\u6848\u7F16\u53F7:</span>\n          <AInput\t className=\'ysp-flowName-input\' value={data.select.contractFileName} onBlur={this.props.inputBlur}/>\n        </div>\n        <div className=\'ysp-ProcessedTask-check-btnMain\'>\n          <AMUI.Button onClick={()=>{this.props.blur()}} amStyle=\'primary\' className=\'ysp-ProcessedTask-check-btn\'>\u67E5\u8BE2</AMUI.Button>\n          <AMUI.Button onClick={()=>{this.props.blur()}} amStyle=\'primary\' className=\'ysp-ProcessedTask-check-btn\'>\u91CD\u7F6E</AMUI.Button>\n        </div>\n      </div>     \n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.stChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \'startTChange\'\n        });\n      }\n    };\n\n    _this2.etChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \'endTChange\'\n        });\n      }\n    };\n\n    _this2.flowBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \'inputBlur\'\n        });\n      }\n    };\n\n    _this2.state = {\n      show: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'back\',\n    value: function back() {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'back\'\n        });\n      }\n    }\n    // componentDidMount(){\n    //   var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\') \n    //   setTimeout(function(){\n    //     outer.scrollTop=0\n    //   },500)\n    // }\n\n  }, {\n    key: \'showLoading\',\n    value: function showLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: \'showLoading\'\n      });\n    }\n  }, {\n    key: \'hideLoading\',\n    value: function hideLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: \'hideLoading\'\n      });\n    }\n  }, {\n    key: \'pagesClick\',\n\n    /***\u9875\u811Astart***/\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'selectChange\',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: \'selectChange\'\n        });\n      }\n    }\n  }, {\n    key: \'inputChange\',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \'inputChange\'\n        });\n      }\n    }\n    /***\u9875\u811Aend***/\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'alertContent\' },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u9009\\u62E9\\u7B80\\u6613\\u91C7\\u8D2D\\u5408\\u540C\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', onClick: this.back, style: { \'margin\': 0 } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-ProcessedTask-main\', ref: \'outerWrapper\' },\n          React.createElement(\n            \'b\',\n            { onClick: function onClick() {\n                _this3.setState({ show: !_this3.state.show });\n              } },\n            \'\\u67E5\\u8BE2\',\n            React.createElement(\'span\', { className: this.state.show ? \'ysp-blue-bottom-icon\' : \'ysp-blue-top-icon\' })\n          ),\n          React.createElement(Inquiry, { stateShow: this.state.show, click: function click(i, idx) {\n              customHandler({ data: [i, idx], eventType: \'click\' });\n            }, blur: function blur() {\n              customHandler({ data: \'1\', eventType: \'blur\' });_this3.showLoading();_this3.hideLoading();\n            }, startChange: this.stChange.bind(this), endChange: this.etChange.bind(this), inputBlur: this.flowBlur.bind(this), Data: customData })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp_waitingTask_list\' },\n          data.list.length > 0 ? data.list.map(function (d, i) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp_list_item\' },\n              React.createElement(\n                \'div\',\n                { className: \'ysp_item_top\' },\n                React.createElement(\'i\', null),\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp_top_title\' },\n                  d[2]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'ysp_item_bottom\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp_bottom_left\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u7B80\\u6613\\u5408\\u540C\\u7F16\\u53F7\\uFF1A\',\n                    d[1]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp_bottom_left\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u7B80\\u6613\\u5408\\u540C\\u6863\\u6848\\u7F16\\u53F7\\uFF1A\',\n                    d[3]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp_btn_panel\' },\n                  React.createElement(\n                    \'button\',\n                    { className: \'ysp_btn_do\', onClick: _this.clickBtn, \'data-index\': i, \'data-i\': \'0\' },\n                    \'\\u786E\\u5B9A\'\n                  )\n                )\n              )\n            );\n          }) : React.createElement(\n            \'div\',\n            { className: \'ysp-no-data\' },\n            React.createElement(\'i\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65E0\\u6570\\u636E\'\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(_yspCustomComponents.Page, { PassedCustomData: data.foot, pagesClick: _this.pagesClick.bind(_this), inputChange: _this.inputChange.bind(_this), selectChange: _this.selectChange.bind(_this) })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar Inquiry = function (_React$Component2) {\n  _inherits(Inquiry, _React$Component2);\n\n  function Inquiry() {\n    _classCallCheck(this, Inquiry);\n\n    return _possibleConstructorReturn(this, (Inquiry.__proto__ || Object.getPrototypeOf(Inquiry)).apply(this, arguments));\n  }\n\n  _createClass(Inquiry, [{\n    key: \'render\',\n    value: function render() {\n      var _this5 = this;\n\n      var data = this.props.Data || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-ProcessedTask-check-main\', style: { display: this.props.stateShow ? \'none\' : \'block\' } },\n        React.createElement(\n          \'div\',\n          { className: \'ysp-flowName\' },\n          React.createElement(\n            \'span\',\n            { className: \'ysp-flowName-span\' },\n            \'\\u7B80\\u6613\\u5408\\u540C\\u7F16\\u53F7:\'\n          ),\n          React.createElement(AInput, { className: \'ysp-flowName-input\', value: data.select.contractNum, onBlur: this.props.inputBlur })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-flowName\' },\n          React.createElement(\n            \'span\',\n            { className: \'ysp-flowName-span\' },\n            \'\\u7B80\\u6613\\u5408\\u540C\\u540D\\u79F0:\'\n          ),\n          React.createElement(AInput, { className: \'ysp-flowName-input\', value: data.select.contractName, onBlur: this.props.inputBlur })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-flowName\' },\n          React.createElement(\n            \'span\',\n            { className: \'ysp-flowName-span\' },\n            \'\\u7B80\\u6613\\u5408\\u540C\\u6863\\u6848\\u7F16\\u53F7:\'\n          ),\n          React.createElement(AInput, { className: \'ysp-flowName-input\', value: data.select.contractFileName, onBlur: this.props.inputBlur })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-ProcessedTask-check-btnMain\' },\n          React.createElement(\n            AMUI.Button,\n            { onClick: function onClick() {\n                _this5.props.blur();\n              }, amStyle: \'primary\', className: \'ysp-ProcessedTask-check-btn\' },\n            \'\\u67E5\\u8BE2\'\n          ),\n          React.createElement(\n            AMUI.Button,\n            { onClick: function onClick() {\n                _this5.props.blur();\n              }, amStyle: \'primary\', className: \'ysp-ProcessedTask-check-btn\' },\n            \'\\u91CD\\u7F6E\'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Inquiry;\n}(React.Component);';
    }
  });
})(window, ysp);