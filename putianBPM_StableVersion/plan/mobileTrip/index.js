(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control304_9xOOrh: function (elem) {
      'use strict';

      ;if (!elem) {
        return [];
      }if (elem) {
        var data = [];var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');
        var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');var td_0_1 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_1');if (receive && _receive.style.display != 'none') {
          data.push(receive.textContent);
        } else if (noReceive) {
          data.push(noReceive.textContent);
        } else if (td_0_1 && td_0_1.textContent.trim() == '领取') {
          data.push(td_0_1.textContent.trim());
        }return data;
      }
    },
    doAction_uiControl301_aK6cKH: function (data, elem) {
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
        var btns = elem.contentDocument.querySelector("#btn");
        if (btns && btns.style.display != "none") {
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
    getTemplate_uiControl301_aK6cKH: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u9879\u6267\u884C"\tclassName="ysp-flex-top">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }}\tclassName=\'ysp-Receive\' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\', className: \'ysp-flex-top\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, className: \'ysp-Receive\', onClick: _this.onClick },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control305_fSxTz3: function (elem) {
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
    doAction_uiControl302_fPpA35: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl302_fPpA35: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control306_p28xfO: function (elem) {
      "use strict";

      if (!elem) {
        return;
      }var data = [];var content = elem.querySelectorAll("span.mini-textbox");if (!content) return;for (var i = 0; i < content.length; i++) {
        var obj = { title: "", content: "" };obj.content = content[i].querySelector("input.mini-textbox-input").value;obj.title = content[i].parentNode.previousElementSibling.textContent.trim();data.push(obj);
      }return data;
    },
    doAction_uiControl303_7yZf8R: function (data, elem) {
      "use strict";
    },
    getTemplate_uiControl303_7yZf8R: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var _this = this;\n    var data=this.props.customData||[];\n    if(data&&data.length>0){\n      return (\n        <div className="ysp_hrDetailInfo" style={{marginTop:"10px"}}>\n          <div className="ysp_hrDetailInfo_title">\u8BE6\u7EC6\u4FE1\u606F</div>\n          <div className="ysp_hrDetailInfo_content">\n          {data&&data.length>0&&data.map(function(item,index){\n            return(\n              <div className="ysp_border">\n                <span className="ysp_title">{item.title}\uFF1A</span>\n                <label className="ysp_content">\n                  {item.content}\n                </label>\n              </div>\n            )\n          })}  \n          </div>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData || [];\n    if (data && data.length > 0) {\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_hrDetailInfo\", style: { marginTop: \"10px\" } },\n        React.createElement(\n          \"div\",\n          { className: \"ysp_hrDetailInfo_title\" },\n          \"\\u8BE6\\u7EC6\\u4FE1\\u606F\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"ysp_hrDetailInfo_content\" },\n          data && data.length > 0 && data.map(function (item, index) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp_border\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp_title\" },\n                item.title,\n                \"\\uFF1A\"\n              ),\n              React.createElement(\n                \"label\",\n                { className: \"ysp_content\" },\n                item.content\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\"div\", null);\n    }\n  }\n});";
    },
    getData_control307_iP05B5: function (elem) {
      'use strict';
      if (!elem) {
        return;
      }var data = {};data.title = [];var titleData = elem.querySelector('.mini-grid-columns-view').querySelector('table.mini-grid-table').querySelectorAll('tr')[1];for (var i = 1; i < titleData.querySelectorAll('td').length; i++) {
        data.title.push(titleData.querySelectorAll('td')[i].textContent.trim());
      }data.content = [];var contentData = elem.querySelector('.mini-grid-rows-view') && elem.querySelector('.mini-grid-rows-view').querySelector('table.mini-grid-table') && elem.querySelector('.mini-grid-rows-view').querySelector('table.mini-grid-table').querySelectorAll('tr');if (contentData && contentData[1] && contentData[1].style.display == 'none') {
        for (var i = 2; i < contentData.length; i++) {
          var arr = [];for (var j = 1; j < contentData[i].querySelectorAll('td').length; j++) {
            arr.push(contentData[i].querySelectorAll('td')[j].textContent.trim());
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl304_7bSSt4: function (data, elem) {
      'use strict';
      if (data.eventType == 'agree') {
        ysp.appMain.showLoading();var num = parseInt(data.dataCustom[1]);var td = elem.querySelector('.mini-grid-rows-view').querySelector('table.mini-grid-table').querySelectorAll('.mini-grid-row')[num].querySelectorAll('.mini-grid-cell');var e = elem.ownerDocument.createEvent("MouseEvents");e.initEvent("mousedown", true, true);td[td.length - 1].dispatchEvent(e);setTimeout(function () {
          td[td.length - 1].querySelector('div').click();
        }, 300);setTimeout(function () {
          var selectInput = elem.ownerDocument.querySelector('.mini-grid-editwrap').querySelector('.mini-buttonedit-input');var e = selectInput.ownerDocument.createEvent("MouseEvents");e.initEvent("mousedown", true, true);selectInput.dispatchEvent(e);selectInput.dispatchEvent(new Event('focus'));selectInput.click();
        }, 500);setTimeout(function () {
          var agrees = elem.ownerDocument.querySelector('.mini-listbox-items').querySelectorAll('.mini-listbox-item');for (var i = 0; i < agrees.length; i++) {
            if (agrees[i].className.indexOf('selected') == -1) {
              agrees[i].click();break;
            }
          }var e = elem.ownerDocument.createEvent("MouseEvents");e.initEvent("mousedown", true, true);td[td.length - 2].dispatchEvent(e);ysp.appMain.hideLoading();
        }, 800);
      }
    },
    getTemplate_uiControl304_7bSSt4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  showList:function(e){\n    var target=e.currentTarget;\n    // var handler=this.props.customHandler;\n    // if(handler) {                                    \n    //  handler({\n    //   eventType:\'showList\'                         \n    //  })\n    // }\n    target.ownerDocument.querySelectorAll(\'.ysp-flowsheet-twoPart-alert\')[target.getAttribute(\'num\')].style.display = \'block\';\n  },\n  hideList:function(e){\n    var target=e.currentTarget;\n    target.ownerDocument.querySelectorAll(\'.ysp-flowsheet-twoPart-alert\')[target.getAttribute(\'num\')].style.display = \'none\';\n  },\n  agree:function(e){\n    var target=e.target;\n    if(target.className==\'selected\'){\n      return;\n    }\n    var handler=this.props.customHandler;\n    if(handler) {                                    \n     handler({\n      eventType:\'agree\',\n      data:[target.textContent,target.parentNode.getAttribute(\'num\')]\n     })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this=this;\n    if(data){\n      return (\n        <div className="ysp-flowsheet" style={{\'marginBottom\':\'10px\'}}>\n          <div className="ysp-flowsheet-twoPart">\n            {data&&data.content&&data.content.map(function(d,i){\n              return(\n                <div className="ysp-flowsheet-twoPart-list">\n                  <div className="ysp-flowsheet-twoPart-card">\n                    <div className="ysp-flowsheet-twoPart-div" onClick={_this.showList} num={i}>\n                      <span>{d[2]}</span>\n                      <span>{d[3]}</span>\n                      <span>{d[6]}</span>\n                    </div>\n                    <div onClick={_this.showList} num={i}>\n                      <span>\u51FA\u5DEE\u5730\u70B9\uFF1A</span>\n                      <label>{d[d.length-2]}</label>\n                    </div>       \n                    <ul className="ysp-flowsheet-twoPart-button" num={i}>\n                      <li className={d[d.length-1]==\'\u4E0D\u540C\u610F\'?\'selected\':\'unselected\'} onClick={_this.agree}>\u4E0D\u540C\u610F</li>\n                      <li className={d[d.length-1]==\'\u540C\u610F\'?\'selected\':\'unselected\'} onClick={_this.agree}>\u540C\u610F</li>\n                    </ul>\n                  </div>\n                  <div className="ysp-flowsheet-twoPart-alert" style={{\'display\':\'none\'}}>\n                    <div className="alert-shadow"></div>\n                    <div className="ysp-flowsheet-twoPart-card twoPart-list">\n                      {d.map(function(dd,ii){\n                        return(\n                          <div>\n                            <span>{data.title[ii]}</span>\n                            <label>{dd}</label>\n                          </div>\n                        )\n                      })}\n                      <div className="close-btn" onClick={_this.hideList} num={i}>\n                      \t<div>\u5173\u95ED</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>              \t\n              )\n            })}            \n          </div>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  showList: function showList(e) {\n    var target = e.currentTarget;\n    // var handler=this.props.customHandler;\n    // if(handler) {                                    \n    //  handler({\n    //   eventType:\'showList\'                         \n    //  })\n    // }\n    target.ownerDocument.querySelectorAll(\'.ysp-flowsheet-twoPart-alert\')[target.getAttribute(\'num\')].style.display = \'block\';\n  },\n  hideList: function hideList(e) {\n    var target = e.currentTarget;\n    target.ownerDocument.querySelectorAll(\'.ysp-flowsheet-twoPart-alert\')[target.getAttribute(\'num\')].style.display = \'none\';\n  },\n  agree: function agree(e) {\n    var target = e.target;\n    if (target.className == \'selected\') {\n      return;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'agree\',\n        data: [target.textContent, target.parentNode.getAttribute(\'num\')]\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-flowsheet\', style: { \'marginBottom\': \'10px\' } },\n        React.createElement(\n          \'div\',\n          { className: \'ysp-flowsheet-twoPart\' },\n          data && data.content && data.content.map(function (d, i) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp-flowsheet-twoPart-list\' },\n              React.createElement(\n                \'div\',\n                { className: \'ysp-flowsheet-twoPart-card\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp-flowsheet-twoPart-div\', onClick: _this.showList, num: i },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    d[2]\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    d[3]\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    d[6]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { onClick: _this.showList, num: i },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u51FA\\u5DEE\\u5730\\u70B9\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'label\',\n                    null,\n                    d[d.length - 2]\n                  )\n                ),\n                React.createElement(\n                  \'ul\',\n                  { className: \'ysp-flowsheet-twoPart-button\', num: i },\n                  React.createElement(\n                    \'li\',\n                    { className: d[d.length - 1] == \'\u4E0D\u540C\u610F\' ? \'selected\' : \'unselected\', onClick: _this.agree },\n                    \'\\u4E0D\\u540C\\u610F\'\n                  ),\n                  React.createElement(\n                    \'li\',\n                    { className: d[d.length - 1] == \'\u540C\u610F\' ? \'selected\' : \'unselected\', onClick: _this.agree },\n                    \'\\u540C\\u610F\'\n                  )\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'ysp-flowsheet-twoPart-alert\', style: { \'display\': \'none\' } },\n                React.createElement(\'div\', { className: \'alert-shadow\' }),\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp-flowsheet-twoPart-card twoPart-list\' },\n                  d.map(function (dd, ii) {\n                    return React.createElement(\n                      \'div\',\n                      null,\n                      React.createElement(\n                        \'span\',\n                        null,\n                        data.title[ii]\n                      ),\n                      React.createElement(\n                        \'label\',\n                        null,\n                        dd\n                      )\n                    );\n                  }),\n                  React.createElement(\n                    \'div\',\n                    { className: \'close-btn\', onClick: _this.hideList, num: i },\n                    React.createElement(\n                      \'div\',\n                      null,\n                      \'\\u5173\\u95ED\'\n                    )\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },

    getData_control309_2PcLCk: function (elem) {
      "use strict";

      ;if (!elem) {
        return;
      }if (elem) {
        var data = { button: [], tip: "" };var windowDrag = elem.querySelector(".mini-window-drag");if (windowDrag) {
          var iframeOuter = elem.querySelector(".mini-window-drag").querySelector("iframe");if (iframeOuter) {
            var btns = iframeOuter.contentDocument.querySelector("#btn");var agreeBtn = iframeOuter.contentDocument.querySelector('#td_0_0');var disagreeBtn = iframeOuter.contentDocument.querySelector('#td_0_1');if (btns && btns.style.display != "none" && agreeBtn) {
              data.button.push(agreeBtn.textContent);
            }if (btns && btns.style.display != "none" && disagreeBtn && disagreeBtn.textContent.trim() != '领取') {
              data.button.push(disagreeBtn.textContent);
            }
          }
        }return data;
      }
    },
    doAction_uiControl307_CVZMf9: function (data, elem) {
      'use strict';

      if (data.eventType == 'click') {
        debugger;var d = data.dataCustom.classNames;if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_1')[0].querySelector(".mini-button");_btnTwo.click();var redTip = elem.querySelector(".mini-window-drag").querySelector('iframe').contentWindow.document.querySelector('#tab iframe').contentWindow.document.querySelector('.mini-tips-danger');console.log(redTip);if (!redTip) {
            setTimeout(function () {
              var tip = elem.querySelectorAll(".mini-window-drag");if (tip.length == 1) {
                //_btnTwo.click(); 
                var json = { time: new Date().getTime() };setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 20);
              }
            }, 10);
          }
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_0')[0].querySelector("a");if (data.dataCustom.text == "执行") {
            btnTwo.click();
          } else if (data.dataCustom.text == "追回") {
            btnTwo.click();var json = { time: new Date().getTime() };setTimeout(function () {
              ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp");
            }, 10);
          } else {
            //有黑色提示框出现
            var tip = elem.querySelector("#toast");if (tip) {
              data.tip = tip.textContent;
            } //**如果流程iframe存在就留在当页，如果不存在就点击同意后回到待办里***//
            btnTwo.click();var timer = setInterval(function () {
              var redTip = elem.querySelector(".mini-window-drag"); //.querySelectorAll("iframe")[0].contentDocument.querySelector("#tab").querySelectorAll("iframe")[0].contentDocument.querySelector(".mini-tips-danger");
              if (!redTip) {
                var json = { time: new Date().getTime() };setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 10);clearInterval(timer);
              }
            }, 10);
          }
        }
      } else if (data.eventType == 'textInput') {
        var text = data.dataCustom;var textarea = elem.querySelector(".mini-window-drag").querySelector("iframe").contentDocument.querySelector("iframe").contentDocument.querySelector('textarea[class="mini-textbox-input"]');textarea.value = text;
      };
    },
    getTemplate_uiControl307_CVZMf9: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  approval:function(e) {\n    var target = e.target;\n    var shadow = target.ownerDocument.querySelector(\'.ysp-btn-list\').querySelector(\'.alert-shadow\');\n    var approval = target.ownerDocument.querySelector(\'.ysp-btn-list\').querySelector(\'.ysp-btn-approval\');\n    if(target.className==\'alert-shadow\'){\n      shadow.style.display = \'none\';\n      approval.style.display = \'none\'; \n    }else{\n      shadow.style.display = \'block\';\n      approval.style.display = \'block\'; \n    }\n  },\n  submit:function(e) {\n    var handler=this.props.customHandler;\n    if(handler) {                                    \n     handler({\n      data:{classNames:\'btn ysp-btn-two\',text:\'\u63D0\u4EA4\'},\n      eventType:\'click\'                         \n     })\n    }\n  },\n  textInput:function(e) {\n    var target = e.target;\n    var handler=this.props.customHandler;\n    if(handler) {                                    \n     handler({\n      data:target.value,\n      eventType:\'textInput\'                         \n     })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data=this.props.customData||[];\n    if(data&&data.button&&data.button.length>0){\n      return (\n        <div className="ysp-btn-list">\n        \t<div className="ysp-btn-m">\n            <div className="ysp-btn-twoBtn" style={{\'display\':\'block\'}}>\n              <AMUI.Button className=\'ysp-btn-one\' onClick={_this.approval}>\n                \u5BA1\u6279\u610F\u89C1\n              </AMUI.Button>\n              <AMUI.Button className=\'ysp-btn-two\' onClick={_this.submit}>\n                \u63D0\u4EA4\n              </AMUI.Button>\n            </div>                \n          </div>\n          <div className="alert-shadow" style={{\'display\':\'none\'}} onClick={_this.approval}></div>\n          <div className="ysp-btn-approval" style={{\'display\':\'none\'}}>\n          \t<div className="ysp_hrDetailInfo_title">\u5BA1\u6279\u610F\u89C1</div>\n            <textarea onChange={_this.textInput}></textarea>\n            <div className="alert-approval-btn">\n            \t<div onClick={_this.submit}>\u63D0\u4EA4</div>\n            </div>\n          </div>\n        </div>     \n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  approval: function approval(e) {\n    var target = e.target;\n    var shadow = target.ownerDocument.querySelector(\'.ysp-btn-list\').querySelector(\'.alert-shadow\');\n    var approval = target.ownerDocument.querySelector(\'.ysp-btn-list\').querySelector(\'.ysp-btn-approval\');\n    if (target.className == \'alert-shadow\') {\n      shadow.style.display = \'none\';\n      approval.style.display = \'none\';\n    } else {\n      shadow.style.display = \'block\';\n      approval.style.display = \'block\';\n    }\n  },\n  submit: function submit(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { classNames: \'btn ysp-btn-two\', text: \'\u63D0\u4EA4\' },\n        eventType: \'click\'\n      });\n    }\n  },\n  textInput: function textInput(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.value,\n        eventType: \'textInput\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData || [];\n    if (data && data.button && data.button.length > 0) {\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-btn-list\' },\n        React.createElement(\n          \'div\',\n          { className: \'ysp-btn-m\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-btn-twoBtn\', style: { \'display\': \'block\' } },\n            React.createElement(\n              AMUI.Button,\n              { className: \'ysp-btn-one\', onClick: _this.approval },\n              \'\\u5BA1\\u6279\\u610F\\u89C1\'\n            ),\n            React.createElement(\n              AMUI.Button,\n              { className: \'ysp-btn-two\', onClick: _this.submit },\n              \'\\u63D0\\u4EA4\'\n            )\n          )\n        ),\n        React.createElement(\'div\', { className: \'alert-shadow\', style: { \'display\': \'none\' }, onClick: _this.approval }),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-btn-approval\', style: { \'display\': \'none\' } },\n          React.createElement(\n            \'div\',\n            { className: \'ysp_hrDetailInfo_title\' },\n            \'\\u5BA1\\u6279\\u610F\\u89C1\'\n          ),\n          React.createElement(\'textarea\', { onChange: _this.textInput }),\n          React.createElement(\n            \'div\',\n            { className: \'alert-approval-btn\' },\n            React.createElement(\n              \'div\',\n              { onClick: _this.submit },\n              \'\\u63D0\\u4EA4\'\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control310_fGIIJl: function (elem) {
      "use strict"; //loading 加载。

      if (!elem) {
        return;
      }if (elem) {
        var loading = elem.contentDocument.querySelector("body").querySelector(".mini-mask");var _loading = elem.ownerDocument.querySelector(".mini-mask");if (loading) {
          var show = loading.querySelector('.mini-mask-loading');if (show && show.style.display == 'block') {
            return true;
          }
        } else if (_loading) {
          var _show = _loading.querySelector('.mini-mask-loading');if (_show && _show.style.display == 'block') {
            return true;
          }
        } else {
          return false;
        }
      }
    },
    doAction_uiControl308_TAzTKl: function (data, elem) {
      "use strict";

      if (data.eventType == "show") {
        ysp.appMain.showLoading();
      } else if (data.eventType == "hide") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl308_TAzTKl: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component {\n// componentWillReceiveProps(props){\n//   // debugger;\n//   var show=props.customData;\n//   var handler=props.customHandler;\n//   if(show&&handler){\n//     handler({\n//       eventType:"show"\n//     })\n//   }else{\n//     handler({\n//       eventType:"hide"\n//     })\n//   }\n// }\n   render(){\n    var data = this.props.customData;\n    if(data){\n      return(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n      )  \n    }else{\n      return(\n \xA0 \xA0    <div></div> \n      )\n    }\n  }\n}\n';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n    // componentWillReceiveProps(props){\n    //   // debugger;\n    //   var show=props.customData;\n    //   var handler=props.customHandler;\n    //   if(show&&handler){\n    //     handler({\n    //       eventType:"show"\n    //     })\n    //   }else{\n    //     handler({\n    //       eventType:"hide"\n    //     })\n    //   }\n    // }\n    value: function render() {\n      var data = this.props.customData;\n      if (data) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "mobileTrip");
})(window, ysp);