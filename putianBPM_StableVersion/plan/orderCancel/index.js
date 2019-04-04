(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control293_8erEc5: function (elem) {
      ;if (!elem) {
        return [];
      }if (elem) {
        var data = [];var btns = elem.contentWindow && elem.contentWindow.document.querySelector('#btn');var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');var td_0_1 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_1');var td_0_0 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_0');if (btns && btns.style.display != 'none' && receive && _receive.style.display != 'none' && receive.textContent.trim() !== "终止") {
          data.push(receive.textContent);
        } else if (btns && btns.style.display != 'none' && noReceive) {
          data.push(noReceive.textContent);
        } else if (btns && btns.style.display != 'none' && td_0_1 && td_0_1.textContent.indexOf('领取') !== -1) {
          data.push(btns && btns.style.display != 'none' && td_0_1.textContent.trim());
        } else if (btns && btns.style.display != 'none' && td_0_0 && td_0_0.textContent.indexOf('领取') !== -1) {
          data.push(td_0_0.textContent.trim());
        }return data;
      }
    },
    doAction_uiControl289_R8H9Zi: function (data, elem) {
      // if (data.eventType == 'click') {
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
    getTemplate_uiControl289_R8H9Zi: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  componentDidMount(){\n    var _this = this;\n    ysp.customHelper.AndroidBackFlag = 'PageClose';\n    ysp.customHelper.AndroidBackModel='PendingTask';\n    const {customHandler} = _this.props;\n    customHandler({eventType:'AndroidBack'});\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      ysp.customHelper.AndroidBackFlag = 'PageClose';\n      ysp.customHelper.AndroidBackModel = 'PendingTask';\n      var customHandler = _this.props.customHandler;\n\n      customHandler({ eventType: 'AndroidBack' });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control294_VIcVph: function (elem) {
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
    doAction_uiControl290_vcVOsh: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl290_vcVOsh: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control295_C7Sk6o: function (elem) {
      ;if (!elem) {
        return;
      }if (elem) {
        var data = [];var table1 = elem.querySelector("table");if (table1) {
          var title = table1.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
            var obj = { title: "", content: "", readOnly: "", id: "" };obj.title = title[i].textContent.trim();if (title[i].nextElementSibling.querySelectorAll("input").length > 0 && title[i].nextElementSibling.querySelectorAll("textarea").length == 0) {
              obj.content = title[i].nextElementSibling.querySelector('span').querySelectorAll("input")[0].value;obj.readOnly = title[i].nextElementSibling.querySelector('span').querySelectorAll("input")[0].readOnly;obj.id = title[i].nextElementSibling.querySelector('span').querySelectorAll("input")[0].getAttribute('id');
            } else if (title[i].nextElementSibling.querySelectorAll("textarea").length > 0) {
              obj.content = title[i].nextElementSibling.querySelectorAll("textarea")[0].value;obj.readOnly = title[i].nextElementSibling.querySelectorAll("textarea")[0].readOnly;obj.id = title[i].nextElementSibling.querySelectorAll("textarea")[0].getAttribute('id');
            } else {
              obj.content = title[i].nextElementSibling.textContent.trim();obj.readOnly = true;
            }data.push(obj);
          }
        }return data;
      }
    },
    doAction_uiControl291_ieswGy: function (data, elem) {
      if (data.eventType == 'change') {
        var id = data.dataCustom.id;var val = data.dataCustom.value;if (elem.querySelector('input[id=' + '"' + id + '"' + ']')) {
          elem.querySelector('input[id=' + '"' + id + '"' + ']').value = val;elem.querySelector('input[id=' + '"' + id + '"' + ']').dispatchEvent(new Event('change'));
        } else {
          elem.querySelector('textarea[id=' + '"' + id + '"' + ']').value = val;elem.querySelector('textarea[id=' + '"' + id + '"' + ']').dispatchEvent(new Event('change'));
        }
      } else if (data.eventType == 'openPage') {
        var e = elem.ownerDocument.createEvent("MouseEvents");e.initMouseEvent("focus", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);elem.ownerDocument.querySelector('.mini-buttonedit-input').dispatchEvent(e);elem.ownerDocument.querySelector('.mini-buttonedit-button').click();
      }
    },
    getTemplate_uiControl291_ieswGy: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  change: function(e){\n  \t var target = e.target;\n     var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:{id:target.getAttribute(\'data-id\'),value:target.value},\n         eventType:\'change\'                         \n       })\n     }\n  },\n  openPage:function(){\n     var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         eventType:\'openPage\'                         \n       })\n     }\n  },\n  render: function() {\n    var data=this.props.customData||[];\n    var _this = this;\n    if(data&&data.length>0){\n      return (\n        <div className="ysp_hrDetailInfo" style={{marginTop:"10px"}}>\n          <div className="ysp_hrDetailInfo_title">\u57FA\u7840\u5C5E\u6027</div>\n          <div className="ysp_hrDetailInfo_content">\n          {data&&data.length>0&&data.map(function(item,index){\n            return(\n              <div className="ysp_border">\n                <span className="ysp_title">\n                  {item.title}\uFF1A\n                </span>\n                <label className="ysp_content">\n                  {item.content}\n                </label>\n              </div>\n            )\n          })}  \n          </div>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    } \n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  change: function change(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { id: target.getAttribute(\'data-id\'), value: target.value },\n        eventType: \'change\'\n      });\n    }\n  },\n  openPage: function openPage() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'openPage\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data && data.length > 0) {\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_hrDetailInfo\', style: { marginTop: "10px" } },\n        React.createElement(\n          \'div\',\n          { className: \'ysp_hrDetailInfo_title\' },\n          \'\\u57FA\\u7840\\u5C5E\\u6027\'\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp_hrDetailInfo_content\' },\n          data && data.length > 0 && data.map(function (item, index) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp_border\' },\n              React.createElement(\n                \'span\',\n                { className: \'ysp_title\' },\n                item.title,\n                \'\\uFF1A\'\n              ),\n              React.createElement(\n                \'label\',\n                { className: \'ysp_content\' },\n                item.content\n              )\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control296_DWkOxL: function (elem) {
      if (elem) {
        var data = [];var children = elem.children;for (var i = children.length - 2; i < children.length; i++) {
          var arr = { title: '', btn: '', content: [] };arr.title = children[i].querySelectorAll('td')[0].querySelectorAll('label')[0].textContent;arr.btn = children[i].querySelector('.webuploader-pick').textContent;var tr = children[i].querySelector('div[id="Filelist"]') && children[i].querySelector('div[id="Filelist"]').querySelector('table') && children[i].querySelector('div[id="Filelist"]').querySelector('table').querySelectorAll('tr');var tr2 = children[i].querySelector('div[id="Filelist2"]') && children[i].querySelector('div[id="Filelist2"]').querySelector('table') && children[i].querySelector('div[id="Filelist2"]').querySelector('table').querySelectorAll('tr');if (tr) {
            for (var j = 0; j < tr.length; j++) {
              var file = { name: '', size: '', url: '' };file.name = tr[j].querySelectorAll('td')[0].textContent;file.size = tr[j].querySelectorAll('td')[1].textContent;file.url = tr[j].querySelectorAll('td')[0].querySelector('a').href;arr.content.push(file);
            }
          } else if (tr2) {
            for (var j = 0; j < tr2.length; j++) {
              var file = { name: '', size: '', url: '' };file.name = tr2[j].querySelectorAll('td')[0].textContent;file.size = tr2[j].querySelectorAll('td')[1].textContent;file.url = tr2[j].querySelectorAll('td')[0].querySelector('a').href;arr.content.push(file);
            }
          }data.push(arr);
        }return data;
      }
    },
    doAction_uiControl292_eB7pDn: function (data, elem) {
      if (data.eventType == 'preview') {
        var url = data.dataCustom;if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(url + '?_ysp_filepreview=1');
        } else if (ysp.appMain.isAndroid()) {
          yspUser.filePreview(url, '', '');
        }
      }
    },
    getTemplate_uiControl292_eB7pDn: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  preview: function(e) {\n     var target = e.target;\n     var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:target.getAttribute(\'data-url\'),\n         eventType:\'preview\'                         \n       })\n     }\n  },\n  render: function() {\n    var data=this.props.customData||[];\n    var _this=this;\n    if(data&&data.length>0){\n      return (\n        <div className="ysp_hrDetailInfo">\n          <div className="ysp_hrDetailInfo_content">\n          {data&&data.length>0&&data.map(function(item,index){\n            return(\n              <div className="ysp_border">\n                <span className="ysp_title">{item.title}</span> \n                  {item.content&&item.content.map(function(d,i){\n                    return(\n                      <label onClick={_this.preview} data-url={d.url} className="ysp_content" style={{\'width\':\'100%\',\'text-align\':\'left\',\'color\':\'#00A0E2\'}}>{d.name}</label>\n                    )\n                  })}  \n              </div>\n            )\n          })}  \n          </div>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  preview: function preview(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.getAttribute(\'data-url\'),\n        eventType: \'preview\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data && data.length > 0) {\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_hrDetailInfo\' },\n        React.createElement(\n          \'div\',\n          { className: \'ysp_hrDetailInfo_content\' },\n          data && data.length > 0 && data.map(function (item, index) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp_border\' },\n              React.createElement(\n                \'span\',\n                { className: \'ysp_title\' },\n                item.title\n              ),\n              item.content && item.content.map(function (d, i) {\n                return React.createElement(\n                  \'label\',\n                  { onClick: _this.preview, \'data-url\': d.url, className: \'ysp_content\', style: { \'width\': \'100%\', \'text-align\': \'left\', \'color\': \'#00A0E2\' } },\n                  d.name\n                );\n              })\n            );\n          })\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control297_uChyE8: function (elem) {
      if (elem && elem.textContent.indexOf('修改内容') > -1) {
        var data = {};data.modify = elem.querySelector('textarea').value;return data;
      }
    },
    doAction_uiControl293_UgOObC: function (data, elem) {
      if (data.eventType == "modify") {
        elem.ownerDocument.querySelector('a[id="contentOnclick"]').click();
      }
    },
    getTemplate_uiControl293_UgOObC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  modify:function(){\n    var handler=this.props.customHandler;  \n    if(\thandler\t){\n      handler({\n      \teventType:\'modify\'\n      }) \n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this=this;\n    if(data&&data.modify){\n      return (\n        <div className="ysp-Approval-opinions">\n          <span>\u4FEE\u6539\u5185\u5BB9\uFF1A</span>\n          <ATextarea className="ysp-agree" value={data.modify} disabled/>\n          <button onClick={_this.modify.bind(_this)}>\u4FEE\u6539\u5185\u5BB9\u5217\u8868</button>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  modify: function modify() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'modify\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data && data.modify) {\n      return React.createElement(\n        "div",\n        { className: "ysp-Approval-opinions" },\n        React.createElement(\n          "span",\n          null,\n          "\\u4FEE\\u6539\\u5185\\u5BB9\\uFF1A"\n        ),\n        React.createElement(ATextarea, { className: "ysp-agree", value: data.modify, disabled: true }),\n        React.createElement(\n          "button",\n          { onClick: _this.modify.bind(_this) },\n          "\\u4FEE\\u6539\\u5185\\u5BB9\\u5217\\u8868"\n        )\n      );\n    } else {\n      return React.createElement("div", null);\n    }\n  }\n});';
    },
    getData_control298_7TXSyA: function (elem) {
      ;if (!elem) {
        return;
      }if (elem) {
        return ["审批意见", elem.value];
      }
    },
    doAction_uiControl294_rWx3H9: function (data, elem) {
      if (data.eventType == "blur") {
        elem.value = data.dataCustom;elem.dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl294_rWx3H9: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  blur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:"blur"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    \n    var _this=this;\n    if(data&&data[0]=="\u5BA1\u6279\u610F\u89C1"){\n      return(\n        <div className="ysp-Approval-opinions">\n          <span>\u5BA1\u6279\u610F\u89C1\uFF1A</span>\n          <ATextarea className="ysp-agree" defaultValue={data[1]} onBlur={_this.blur.bind(_this)}/>\n        </div>\n      )\n    }else {\n      return(\n      \t<div></div>\n      )\n    }\n    \n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "blur",\n    value: function blur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: "blur"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var data = this.props.customData;\n\n      var _this = this;\n      if (data && data[0] == "\u5BA1\u6279\u610F\u89C1") {\n        return React.createElement(\n          "div",\n          { className: "ysp-Approval-opinions" },\n          React.createElement(\n            "span",\n            null,\n            "\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A"\n          ),\n          React.createElement(ATextarea, { className: "ysp-agree", defaultValue: data[1], onBlur: _this.blur.bind(_this) })\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control299_hbLX88: function (elem) {
      ;if (!elem) {
        return;
      } // if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
      //   return elem.querySelector("#toast").textContent;
      // }
      if (elem) {
        var data = { button: [], tip: "" };var windowDrag = elem.querySelector(".mini-window-drag");if (windowDrag) {
          var iframeOuter = elem.querySelector(".mini-window-drag").querySelector("iframe");if (iframeOuter) {
            var btns = iframeOuter.contentDocument.querySelector("#btn");var agreeBtn = iframeOuter.contentDocument.querySelector('#td_0_0');var disagreeBtn = iframeOuter.contentDocument.querySelector('#td_0_1');if (btns && btns.style.display != "none" && agreeBtn) {
              data.button.push(agreeBtn.textContent);
            }if (btns && btns.style.display != "none" && disagreeBtn && disagreeBtn.textContent.trim() != '领取') {
              data.button.push(disagreeBtn.textContent);
            }
          } // if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          // return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
          // }
          //有黑色提示框出现
          //   var tip = elem.querySelector("#toast");
          //   if (tip) {
          //     data.tip = tip.textContent;
          //   }
        }return data;
      }
    },
    doAction_uiControl296_Cy85MS: function (data, elem) {
      if (data.eventType == 'click') {
        debugger;var d = data.dataCustom.classNames;if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_1')[0].querySelector(".mini-button");_btnTwo.click();var redTip = elem.querySelector(".mini-window-drag").querySelector('iframe').contentWindow.document.querySelector('#tab iframe').contentWindow.document.querySelector('.mini-tips-danger');console.log(redTip);if (!redTip && data.dataCustom.text !== "保存草稿") {
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
      };
    },
    getTemplate_uiControl296_Cy85MS: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:\'none\'}}></div>)\n    } \n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control300_JHTp2k: function (elem) {
      //loading 加载。
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
    doAction_uiControl297_b2XHWm: function (data, elem) {
      if (data.eventType == "show") {
        ysp.appMain.showLoading();
      } else if (data.eventType == "hide") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl297_b2XHWm: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component {\n// componentWillReceiveProps(props){\n//   // debugger;\n//   var show=props.customData;\n//   var handler=props.customHandler;\n//   if(show&&handler){\n//     handler({\n//       eventType:"show"\n//     })\n//   }else{\n//     handler({\n//       eventType:"hide"\n//     })\n//   }\n// }\n   render(){\n    var data = this.props.customData;\n    if(data){\n      return(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n      )  \n    }else{\n      return(\n \xA0 \xA0    <div></div> \n      )\n    }\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n    // componentWillReceiveProps(props){\n    //   // debugger;\n    //   var show=props.customData;\n    //   var handler=props.customHandler;\n    //   if(show&&handler){\n    //     handler({\n    //       eventType:"show"\n    //     })\n    //   }else{\n    //     handler({\n    //       eventType:"hide"\n    //     })\n    //   }\n    // }\n    value: function render() {\n      var data = this.props.customData;\n      if (data) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control301_9f8fia: function (elem) {
      ;if (elem && elem.ownerDocument.querySelectorAll('.mini-window-drag').length > 1 && elem.querySelector('.mini-panel-title').textContent !== '回退策略') {
        var data = {};data.list = [];var contentDom = elem.querySelector('.mini-panel-viewport').querySelector('iframe').contentDocument;var trArr = contentDom.querySelectorAll('table[class="mini-grid-table mini-grid-rowstable"]')[1].querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trArr.length; i++) {
          var tdArr = trArr[i].querySelectorAll("td");var arry = [];for (var j = 0; j < tdArr.length; j++) {
            arry.push(tdArr[j].textContent);
          }data.list.push(arry);arry.shift();
        }data.list.shift();data.list.shift();return data;
      }
    },
    doAction_uiControl298_pEPrd6: function (data, elem) {
      if (data.eventType == 'back') {
        elem.querySelector('.mini-tools-close ').click();
      }
    },
    getTemplate_uiControl298_pEPrd6: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nmodule.exports = React.createClass({\n  back: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data =this.props.customData;\n    if(data){\n      return (\n        <div className="alertContent">\n          <Header amStyle="primary" title="\u5185\u5BB9\u4FE1\u606F\u5217\u8868">\n            <HeaderLeft>\n              <AMUI.Button amStyle="primary" onClick={_this.back} style={{\'margin\':0}}>\n                <span className=\'icon icon-left-nav\'></span>\n              </AMUI.Button>\n            </HeaderLeft>\n          </Header>\n          <div className="ysp_waitingTask_list" style={{\'margin-top\':\'50px\'}}>\n            {data.list.length>0? \n              data.list.map((d,i)=>{\n                return(\n                  <div className="ysp_list_item">\n                    <div className="ysp_item_top">\n                      <i></i>\n                      <span className="ysp_top_title">{d[0]}</span>\n                    </div>\n                    <div className="ysp_item_bottom">\n                      <div className="ysp_bottom_left">\n                        <div>\u4FEE\u6539\u5185\u5BB9\uFF1A{d[1]}</div>\n                      </div>\n                      <div className="ysp_bottom_left">\n                        <div>\u65F6\u95F4\uFF1A{d[2]}</div>\n                      </div>\n                    </div>\n                  </div>\n                )\n              }) : <div\tclassName="ysp-no-data">\n                      <i></i>\n                      <div>\u6682\u65E0\u6570\u636E</div>\n                   </div>\n            }\n          </div>\n        </div>\n      )\n    }else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  back: function back() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data) {\n      return React.createElement(\n        \'div\',\n        { className: \'alertContent\' },\n        React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5185\\u5BB9\\u4FE1\\u606F\\u5217\\u8868\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', onClick: _this.back, style: { \'margin\': 0 } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'ysp_waitingTask_list\', style: { \'margin-top\': \'50px\' } },\n          data.list.length > 0 ? data.list.map(function (d, i) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp_list_item\' },\n              React.createElement(\n                \'div\',\n                { className: \'ysp_item_top\' },\n                React.createElement(\'i\', null),\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp_top_title\' },\n                  d[0]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'ysp_item_bottom\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp_bottom_left\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u4FEE\\u6539\\u5185\\u5BB9\\uFF1A\',\n                    d[1]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp_bottom_left\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u65F6\\u95F4\\uFF1A\',\n                    d[2]\n                  )\n                )\n              )\n            );\n          }) : React.createElement(\n            \'div\',\n            { className: \'ysp-no-data\' },\n            React.createElement(\'i\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65E0\\u6570\\u636E\'\n            )\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control302_ALKoTQ: function (elem) {
      if (!elem) {
        return;
      }var iframe = elem && elem.ownerDocument.defaultView.frameElement;if (elem && elem.textContent.indexOf("回退方式") !== -1) {
        var data = [];var signOne = elem.querySelectorAll('.form-label')[0];var signTwo = elem.querySelector('.mini-buttonedit-input');var signThree = elem.querySelectorAll('.form-label')[2]; //var signFour = elem.querySelectorAll('.mini-textbox-input')[0];
        signOne && data.push(signOne.textContent);signTwo && data.push(signTwo.value);signThree && data.push(signThree.textContent.trim()); //signFour && data.push(signFour.value);
        return data;
      }
    },
    doAction_uiControl299_0vGyl7: function (data, elem) {
      if (data.eventType == 'change') {
        var d = data.dataCustom;var signFour = elem.querySelectorAll('.mini-textbox-input')[0];signFour.focus();signFour.value = d;signFour.dispatchEvent(new Event("change"));
      } else if (data.eventType == 'click') {
        var d = data.dataCustom;if (d == 'btn ysp-sure') {
          // var signOne = elem.ownerDocument.querySelectorAll('#cancel')[0];
          //   signOne.click();
          var signOne = elem.ownerDocument.querySelectorAll('#save')[0];signOne.click();var _fk = elem.ownerDocument.defaultView.parent.document.querySelector('.mini-window-drag').querySelector('iframe').contentWindow.document.querySelector('iframe').contentWindow.document.querySelector('.mini-tips-danger');if (_fk) {
            signOne.click();
          } else {
            var json = { time: new Date().getTime() }; // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
            var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else if (d == 'btn ysp-miss') {
          var signOne = elem.ownerDocument.querySelectorAll('#cancel')[0];signOne.click();
        }
      }
    },
    getTemplate_uiControl299_0vGyl7: function () {
      var selfTemplate = 'export default class extends React.Component{\n  change(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.value,\n         eventType:\'change\'                         \n       })\n     }\n  }\n  onClick(e){\n    var handler=this.props.customHandler\t;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render(){\n    var\tdata=this.props.customData\t|| [];\n    if(data && data.length>0){\n   \treturn(\n      <div className=\'ysp-fallbackStrategy\'>\n      \t<div className="ysp-fallbackStrategy-cont">\n          <div style={{textAlign:\'center\',width:\'100%\'}}>\u56DE\u9000\u7B56\u7565</div>\n        \t<div>\n          \t<span>{data[0]}</span>\n            <label>{data[1]}</label>\n          </div>\n          <div>\n          \t<span className="yesOrno">{data[2]}</span>\n            {/*<textarea defaultValue={data[3]} onBlur={this.change.bind(this)}></textarea>*/}\n          </div>\n          <div>\n          \t<AMUI.Button className="ysp-sure" onClick={this.onClick.bind(this)}>\u786E\u5B9A</AMUI.Button>\n            <AMUI.Button className="ysp-miss" onClick={this.onClick.bind(this)}>\u53D6\u6D88</AMUI.Button>\n          </div>\n        </div>\n      </div>\n    ) }else {\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'change\',\n    value: function change(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.value,\n          eventType: \'change\'\n        });\n      }\n    }\n  }, {\n    key: \'onClick\',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.length > 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-fallbackStrategy\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-fallbackStrategy-cont\' },\n            React.createElement(\n              \'div\',\n              { style: { textAlign: \'center\', width: \'100%\' } },\n              \'\\u56DE\\u9000\\u7B56\\u7565\'\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                data[0]\n              ),\n              React.createElement(\n                \'label\',\n                null,\n                data[1]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                { className: \'yesOrno\' },\n                data[2]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-sure\', onClick: this.onClick.bind(this) },\n                \'\\u786E\\u5B9A\'\n              ),\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-miss\', onClick: this.onClick.bind(this) },\n                \'\\u53D6\\u6D88\'\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);