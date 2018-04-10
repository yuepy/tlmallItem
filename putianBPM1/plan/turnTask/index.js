(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control93_7tTBHb: function (elem) {
      if (!elem) {
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
    doAction_uiControl86_4yLbM0: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (d == '领取') {
          var td_0_1 = elem.contentWindow.document.querySelector('#td_0_1');if (td_0_1.textContent.trim() == '领取') {
            var _click = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
          }_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3'); //红色提示
          var newRow = elem.contentDocument.querySelectorAll("iframe")[0].contentDocument.querySelectorAll(".mini-grid-rowstable")[1];var reg = /\s/;if (newRow && reg.test(newRow.textContent)) {
            if (_click) {
              var _icon = _click.querySelector('a');_icon.click();
            } else {
              var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();
            }
          } else {
            if (_click) {
              var _icon = _click.querySelector('a');var _innerHTML = _click.querySelector('span').textContent;_innerHTML == '取消领取' && _icon.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            } else {
              var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");var _innerHTML = _click.querySelector('span').textContent;_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
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
            var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
              btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
            }
          } else {
            var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
              btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else {
          var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl86_4yLbM0: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control94_hf5FAd: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { tabs: [], tabsNum: [], key: {} };var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item, i) {
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
    doAction_uiControl87_dTiP8T: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl87_dTiP8T: function () {
      var selfTemplate = "import {Tabs} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:'click'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref=\"outerWrapper\">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }  \n  }\n} ";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'tabsClick',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: 'click'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          'div',\n          { ref: 'outerWrapper' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control96_Ldfl3J: function (elem) {
      if (!elem) {
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
    doAction_uiControl89_sfTUqQ: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom.classNames;if (d == 'btn ysp-btn-one') {
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
      };
    },
    getTemplate_uiControl89_sfTUqQ: function () {
      var selfTemplate = "import {Button} from 'ysp-custom-components'\nimport {Component} from 'react';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:'click'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector('.ysp-btn');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+\"px\";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:'none'}}></div>)\n    } \n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: 'click'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector('.ysp-btn');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+\"px\";\n    //   },500)\n    // }\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control97_9STenR: function (elem) {},
    doAction_uiControl90_SA1b63: function (data, elem) {},
    getTemplate_uiControl90_SA1b63: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div ref=\"qwer\">\n      </div>\n    )\n  },\n  componentDidMount() {\n    setTimeout(() => {\n      var aa = this.refs.qwer.ownerDocument.querySelectorAll('[data-asdasdasd]');\n      var clickFun = function(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event('blur'));\n        if (index) {\n          setTimeout(() => {\n            clickFun(index-1);\n          }, 100);\n        }\n      }\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement('div', { ref: 'qwer' });\n  },\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n\n    setTimeout(function () {\n      var aa = _this.refs.qwer.ownerDocument.querySelectorAll('[data-asdasdasd]');\n      var clickFun = function clickFun(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event('blur'));\n        if (index) {\n          setTimeout(function () {\n            clickFun(index - 1);\n          }, 100);\n        }\n      };\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});";
    },
    getData_control98_FveLSP: function (elem) {
      //loading 加载。
      if (!elem) {
        return;
      }if (elem && elem.contentWindow && elem.contentWindow.document) {
        var loading = elem.contentWindow.document.querySelector('.mini-mask');if (loading) {
          var _loading = loading.querySelector('.mini-mask-loading');if (_loading && _loading.style.display == 'block' && _loading.textContent.trim() == '加载中...') {
            console.log('1');return [true];
          } else {
            return;
          }
        }
      }
    },
    doAction_uiControl91_LaD0EH: function (data, elem) {},
    getTemplate_uiControl91_LaD0EH: function () {
      var selfTemplate = "export default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className=\"ysp-loadEffect-background\">\n          <div className=\"ysp-loadEffect\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-loadEffect-background\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-loadEffect\" },\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null)\n          )\n        );\n      } else {\n        return React.createElement(\"div\", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control99_f09kdS: function (elem) {
      //红色提示
      if (!elem) {
        return;
      }if (elem && elem.contentWindow && elem.contentWindow.document) {
        if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
        }
      }
    },
    doAction_uiControl92_bNfOBH: function (data, elem) {},
    getTemplate_uiControl92_bNfOBH: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\">\n        {data==\"\"? <div></div>:<div className=\"ysp_alert_words\"><span\tdangerouslySetInnerHTML={{__html:data}}></span></div>}\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_alert_tips" },\n      data == "" ? React.createElement("div", null) : React.createElement(\n        "div",\n        { className: "ysp_alert_words" },\n        React.createElement("span", { dangerouslySetInnerHTML: { __html: data } })\n      )\n    );\n  }\n});';
    },
    getData_control134_I0PEHI: function (elem) {
      //提示
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl127_pu5O2E: function (data, elem) {},
    getTemplate_uiControl127_pu5O2E: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display=\"none\";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display=\"none\";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\" ref=\"yspToast\" onClick={(e)=>{e.target.style.display=\"none\"}}>\n        {data==\"\"? \"\":<div className=\"ysp_alert_words\"><span style={{\"min-height\":\"40px\"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display=\"none\";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display=\"none\";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_alert_tips\", ref: \"yspToast\", onClick: function onClick(e) {\n            e.target.style.display = \"none\";\n          } },\n        data == \"\" ? \"\" : React.createElement(\n          \"div\",\n          { className: \"ysp_alert_words\" },\n          React.createElement(\n            \"span\",\n            { style: { \"min-height\": \"40px\" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control135_MEA5FQ: function (elem) {
      if (!elem) {
        return;
      }var data = { processTit: [], time: [], base: { tit: [], con: [] }, turn: { tit: [], con: [] }, remark: {}, annex: [], total: [], surggest: [], errorTip: {} }; //各项title
      if (document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('iframe')[1].contentWindow.document.querySelector('.mini-mask-loading') == null) {
        var processtit = elem.querySelectorAll(".mini-panel");if (processtit) {
          [].map.call(processtit, function (item, i) {
            var processa = item.querySelector(".mini-panel-title");if (processa) ;data.processTit.push(processa.textContent);
          });
        } //提交日期
        var timetit = elem.querySelector("#form1").querySelector("#table1").querySelectorAll("td")[0];var timecon = elem.querySelector("#form1").querySelector("#table1").querySelectorAll("td")[1].querySelector("input");data.time.push(timetit.textContent.replace(/\s+/g, ""));data.time.push(timecon.value); //基础信息表格
        var basetit = elem.querySelectorAll(".table")[1].querySelectorAll("tbody tr");if (basetit) {
          [].map.call(basetit, function (item, index) {
            var a = item.querySelectorAll(".form_label");var b = item.querySelectorAll("td:nth-child(2n)");[].map.call(a, function (d, i) {
              data.base.tit.push(d.textContent.replace(/\s+/g, ""));
            });[].map.call(b, function (m, n) {
              data.base.con.push(m.querySelector("input").value);
            });
          });
        } //转正信息
        var turntit = elem.querySelectorAll(".table")[2].querySelectorAll("tbody tr");if (turntit) {
          [].map.call(turntit, function (item, index) {
            var a = item.querySelectorAll(".form_label");var b = item.querySelectorAll("td:nth-child(2n)");[].map.call(a, function (d, i) {
              data.turn.tit.push(d.textContent.replace(/\s+/g, ""));
            });[].map.call(b, function (m, n) {
              data.turn.con.push(m.querySelector("input").value);
            });
          });
        } //备注
        var mark = elem.querySelectorAll(".table")[3].querySelector("tbody tr td textarea");if (mark) {
          data.remark = mark.value;
        } //附件信息
        var sugg = elem.querySelector("#approval .nui-form-table tbody tr td:nth-child(2)");if (sugg) {
          data.surggest.push(sugg.querySelector("textarea").value);
        }if (sugg && sugg.querySelector(".mini-textbox-readOnly")) {
          data.surggest.push("true");
        } else {
          data.surggest.push("");
        }if (sugg && elem.querySelector("#approval") && elem.querySelector("#approval").style.display == "none") {
          data.surggest = [];
        }
      }return data;
    },
    doAction_uiControl128_etQXUR: function (data, elem) {
      if (data.eventType == 'change') {
        var data = data.dataCustom;elem.querySelectorAll(".mini-panel")[4].querySelector("tbody tr td textarea").value = data;
      } // else if (data.eventType == "enclosure") {
      //   var i = data.dataCustom;
      //   elem.querySelectorAll(".mini-panel")[3].querySelectorAll("tbody tr td a")[i].click();
      // } 
      else if (data.eventType == "enclosure") {
          var i = data.dataCustom;var _btn = elem.querySelectorAll(".mini-panel")[3].querySelectorAll("tbody tr td a")[i];var url = _btn.href;var num = url.lastIndexOf(".");var type = url.slice(num);if (ysp.appMain.isIOS()) {
            top.EAPI.openWindow(url + '&_ysp_filepreview=1');
          } else if (ysp.appMain.isAndroid()) {
            // top.location.href = url;
            yspUser.openDocument("{'url': '" + url + "','fileName':'1" + type + "'}");
          }
        } else if (data.eventType == 'change1') {
          var data = data.dataCustom;elem.querySelector("#approval .nui-form-table tbody tr td:nth-child(2)").querySelector("textarea").value = data;elem.querySelector("#approval .nui-form-table tbody tr td:nth-child(2)").querySelector("textarea").dispatchEvent(new Event('change'));
        }
    },
    getTemplate_uiControl128_etQXUR: function () {
      var selfTemplate = 'import { Component } from \'react\';\nexport default class extends React.Component {\n\n\t\t\t\trender() {\n\t\t\t\t\tvar data = this.props.data.customData;\n          /*\u9644\u4EF6\u4FE1\u606Fstart */\n          var ann;\n           if(data && data.processTit && data.annex && data.annex !="none"){\n            \n             ann = (<div className="ysp-turn-box">\n\t\t\t\t<h2>{data.processTit[3]}\uFF1A</h2>\n\t\t\t\t<div className="ysp-annex">{data && data.annex && data.annex.length>0 && data.annex.map((item,index)=>{\n\t\t\treturn(<span onClick={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.dataset.i,\n        \t\t\t\teventType:"enclosure"\n              })\n            }\n           }} data-i={index}>{item}</span>)\n\t\t\t})}</div>\n\t\t\t</div>);\n          }else{\n            ann = (<div font={{display:"none"}}></div>);\n          }\n          /*\u9644\u4EF6\u4FE1\u606F end*/\n          \n           /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 start*/\n          var Surggest;\n          if(data && data.surggest && data.surggest != ""){\n           \n             Surggest=(\n         <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>\u5BA1\u6279\u610F\u89C1\uFF1A</h2>\n\t\t\t\t<div className="ysp-area-box">\n\t\t\t\t<ATextarea placeholder={data.surggest[0]} onChange={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \t\teventType:"change1"\n              })\n            }\n           }} value={data.surggest[0]} disabled={data.surggest[1]}></ATextarea>\n\t\t\t\t\t</div>\n       </div>\n            )\n          }else{\n           Surggest=(<div style={{display:"none"}}></div>\n            ) ;\n          }\n          \n          /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 end*/\n          \n\t\t\t\t\tif(data && data.processTit) {\n\t\t\t\t\t\treturn(<div className="ysp-flowsheet ysp-turn-wrap">\n\t\t\t{data.processTit && data.time && data.time.length>0 && data.processTit.length>0?\n\t\t\t<div>\n\t\t\t<div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.processTit[0]}\uFF1A</h2>\n\t\t\t\t<ul>\n          <li><span className="li-l">{data.time[0]}</span><span className="li-r">{data.time[1]}</span></li>\n\t\t\t\t\t{ data.base.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.base.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.processTit[1]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.turn.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.turn.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div className="ysp-turn-box">\n\t\t\t\t<h2>{data.processTit[2]}\uFF1A</h2>\n\t\t\t\t<p className="ysp-txt">{data.remark}</p>\n\t\t\t</div>\n      {ann } \n\t\t\t\n      \n\t\t\t<div className="ysp-turn-box">\n        <h2><i className="ysp-tit-bar"></i>{data.processTit[4]}\uFF1A</h2>\n        <div className="ysp-area-box">\n         <ATextarea emptyText="\u6700\u591A\u53EF\u7F16\u8F911000\u5B57" placeholder={data.total[0]} onBlur={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \t\teventType:"change"\n              })\n            }\n           }} value={data.total[1]} disabled={data.total[2]}></ATextarea>      \n\t\t\t{data.errorTip && data.errorTip=="true"?<span className="ysp_user_errorIcon"></span>:<span></span>}\n          </div>\n\t\t\t</div>\n      {Surggest}\n                    \n\t\t\t</div>:\n\t\t\t<div className="ysp-no-data">\n\t\t\t\t<i></i>\n\t\t\t\t<div>\u6682\u65E0\u6570\u636E</div>\n\t\t\t</div>\n\t\t\t}\n\t\t\t</div>)\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t<div style={{display: "none"}}></div>)\n\t\t\t\t\t}\n\t\t\t\t}\n};\n';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.data.customData;\n      /*\u9644\u4EF6\u4FE1\u606Fstart */\n      var ann;\n      if (data && data.processTit && data.annex && data.annex != "none") {\n\n        ann = React.createElement(\n          "div",\n          { className: "ysp-turn-box" },\n          React.createElement(\n            "h2",\n            null,\n            data.processTit[3],\n            "\\uFF1A"\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-annex" },\n            data && data.annex && data.annex.length > 0 && data.annex.map(function (item, index) {\n              return React.createElement(\n                "span",\n                { onClick: function onClick(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                      handler({\n                        data: e.target.dataset.i,\n                        eventType: "enclosure"\n                      });\n                    }\n                  }, "data-i": index },\n                item\n              );\n            })\n          )\n        );\n      } else {\n        ann = React.createElement("div", { font: { display: "none" } });\n      }\n      /*\u9644\u4EF6\u4FE1\u606F end*/\n\n      /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 start*/\n      var Surggest;\n      if (data && data.surggest && data.surggest != "") {\n\n        Surggest = React.createElement(\n          "div",\n          { className: "ysp-turn-box" },\n          React.createElement(\n            "h2",\n            null,\n            React.createElement("i", { className: "ysp-tit-bar" }),\n            "\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A"\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-area-box" },\n            React.createElement(ATextarea, { placeholder: data.surggest[0], onChange: function onChange(e) {\n                var handler = _this2.props.customHandler;\n                if (handler) {\n                  handler({\n                    data: e.target.value,\n                    eventType: "change1"\n                  });\n                }\n              }, value: data.surggest[0], disabled: data.surggest[1] })\n          )\n        );\n      } else {\n        Surggest = React.createElement("div", { style: { display: "none" } });\n      }\n\n      /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 end*/\n\n      if (data && data.processTit) {\n        return React.createElement(\n          "div",\n          { className: "ysp-flowsheet ysp-turn-wrap" },\n          data.processTit && data.time && data.time.length > 0 && data.processTit.length > 0 ? React.createElement(\n            "div",\n            null,\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.processTit[0],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                React.createElement(\n                  "li",\n                  null,\n                  React.createElement(\n                    "span",\n                    { className: "li-l" },\n                    data.time[0]\n                  ),\n                  React.createElement(\n                    "span",\n                    { className: "li-r" },\n                    data.time[1]\n                  )\n                ),\n                data.base.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.base.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.processTit[1],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.turn.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.turn.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                data.processTit[2],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "p",\n                { className: "ysp-txt" },\n                data.remark\n              )\n            ),\n            ann,\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.processTit[4],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "div",\n                { className: "ysp-area-box" },\n                React.createElement(ATextarea, { emptyText: "\\u6700\\u591A\\u53EF\\u7F16\\u8F911000\\u5B57", placeholder: data.total[0], onBlur: function onBlur(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                      handler({\n                        data: e.target.value,\n                        eventType: "change"\n                      });\n                    }\n                  }, value: data.total[1], disabled: data.total[2] }),\n                data.errorTip && data.errorTip == "true" ? React.createElement("span", { className: "ysp_user_errorIcon" }) : React.createElement("span", null)\n              )\n            ),\n            Surggest\n          ) : React.createElement(\n            "div",\n            { className: "ysp-no-data" },\n            React.createElement("i", null),\n            React.createElement(\n              "div",\n              null,\n              "\\u6682\\u65E0\\u6570\\u636E"\n            )\n          )\n        );\n      } else {\n        return React.createElement("div", { style: { display: "none" } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    }
  }, "turnTask");
})(window, ysp);