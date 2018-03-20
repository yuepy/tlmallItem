(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control118_yowaCA: function (elem) {
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
    doAction_uiControl111_Xynd2K: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (d == '领取') {
          var td_0_1 = elem.contentWindow.document.querySelector('#td_0_1');if (td_0_1.textContent.trim() == '领取') {
            var _click = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
          }_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3'); //红色提示
          var newRow = elem.contentDocument.querySelectorAll("iframe")[0].contentDocument.querySelectorAll(".mini-grid-rowstable")[1];debugger;var reg = /\s/;if (reg.test(newRow.textContent)) {
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
    getTemplate_uiControl111_Xynd2K: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control119_Rk8q6K: function (elem) {
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
    doAction_uiControl112_SWOnlo: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl112_SWOnlo: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'tabsClick',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: 'click'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          'div',\n          { ref: 'outerWrapper' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control120_gG2eaa: function (elem) {
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
    doAction_uiControl113_NaRCJr: function (data, elem) {
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
    getTemplate_uiControl113_NaRCJr: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:\'none\'}}></div>)\n    } \n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control121_VyhO7K: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var title = elem.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
          var obj = { title: "", content: "" };if (title[i].textContent.trim() !== "") {
            obj.title = title[i].textContent.trim();obj.content = title[i].nextElementSibling.querySelectorAll("input")[0].value;data.push(obj);
          }
        }return data;
      }
    },
    doAction_uiControl114_U3H1TU: function (data, elem) {},
    getTemplate_uiControl114_U3H1TU: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo">\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.length>0&&data.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n      </div>\n    )\n  }\n});\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo" },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.length > 0 && data.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control122_2TWumE: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var table1 = elem.querySelector("table");if (table1) {
          var title = table1.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
            var obj = { title: "", content: "" };obj.title = title[i].textContent.trim();if (title[i].nextElementSibling.querySelectorAll("input").length > 0) {
              obj.content = title[i].nextElementSibling.querySelectorAll("input")[0].value;
            } else {
              obj.content = title[i].nextElementSibling.textContent.trim();
            }data.push(obj);
          }
        }return data;
      }
    },
    doAction_uiControl115_4V47l3: function (data, elem) {},
    getTemplate_uiControl115_4V47l3: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo" style={{marginTop:"10px"}}>\n       \t<div className="ysp_hrDetailInfo_title">\u57FA\u7840\u4FE1\u606F</div>\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.length>0&&data.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo", style: { marginTop: "10px" } },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title" },\n        "\\u57FA\\u7840\\u4FE1\\u606F"\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.length > 0 && data.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control123_vwIGHi: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { topTitle: "", totalHoliday: "", holidayDetail: [], resonLeave: "", enclosure: [], table: { columnTitle: [], content: [] } };data.topTitle = elem.querySelector(".mini-panel-header").textContent.trim();data.totalHoliday = elem.querySelector("#holidayDays").textContent.trim().match(/\d/g); //请假详情
        var holiday = elem.querySelector("#holidayDetail");if (holiday) {
          var oddTd = holiday.querySelectorAll(".form_label");[].forEach.call(oddTd, function (item, index) {
            var obj = {};obj.title = item.textContent.trim();obj.content = item.nextElementSibling.textContent.trim();data.holidayDetail.push(obj);
          });
        } //请假原因
        data.resonLeave = elem.querySelector("#reasonsLeave").textContent.trim(); //附件信息
        var enclosure = elem.querySelector("#enclosure");if (enclosure && enclosure.querySelectorAll("a").length > 0) {
          var tempArr = enclosure.querySelectorAll("a");for (var i = 0; i < tempArr.length; i++) {
            data.enclosure.push(tempArr[i].textContent.trim());
          }
        } //表格信息
        var table = elem.querySelector(".mini-datagrid");if (table) {
          var head = table.querySelectorAll(".mini-grid-headerCell");[].forEach.call(head, function (item, ind) {
            data.table.columnTitle.push(item.textContent);
          });var rowTable = table.querySelectorAll(".mini-grid-rowstable")[1];if (rowTable) {
            var trs = rowTable.querySelectorAll(".mini-grid-row");[].forEach.call(trs, function (d, i) {
              var tds = d.querySelectorAll(".mini-grid-cell");var tdsArr = [];[].forEach.call(tds, function (d, i) {
                tdsArr.push(d.textContent.trim());
              });data.table.content.push(tdsArr);
            });
          }
        }return data;
      }
    },
    doAction_uiControl116_UnmeiG: function (data, elem) {
      if (data.eventType == "enclosure") {
        debugger;var i = data.dataCustom;var _btn = elem.querySelector("#enclosure").querySelectorAll("a")[i];var url = _btn.href;_btn.click(); //ysp.customHelper.openWindow(url); // if (ysp.appMain.isIOS()) {
        //   ysp.appMain.openWindow(url);
        // } else if (ysp.appMain.isAndroid()) {
        //   top.open(url);
        // } 
        // var xhr = new XMLHttpRequest();
        //     if (ysp.appMain.isIOS()) {
        //       top.EAPI.openWindow(url + '&_ysp_filepreview=1');
        //     } else if (ysp.appMain.isAndroid()) {
        //       top.location.href = url;
        //     }
        //   } else {
        //     elem.ownerDocument.defaultView.open(url, '404 - found');
        //   }
        // };
        // xhr.send();
      }
    },
    getTemplate_uiControl116_UnmeiG: function () {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n  enclosure(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.i,\n        eventType:"enclosure"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    var _this=this;\n    if(data&&data.topTitle&&data.topTitle!==""){\n      return(\n        <div className="ysp_hrDetailInfo" style={{marginTop:"10px"}}>\n          <div className="ysp_hrDetailInfo_title">{data.topTitle}</div>\n          <div className="ysp_hrDetailInfo_content">\n            {data.holidayDetail.map(function(d,i){\n              return(\n                <div className="ysp_border">\n                  <span className="ysp_title">{d.title}</span>\n                  <label className="ysp_content">{d.content}</label>\n                </div>\n              )\n            })}\n            <div className="ysp_border">\n              <span className="ysp_title">\u603B\u4F11\u5047\u5929\u6570:</span>\n              <label className="ysp_content">{data.totalHoliday[0]}</label>\n            </div>\n            <div className="ysp_border">\n              <span className="ysp_title">\u8BF7\u5047\u539F\u56E0:</span>\n              <label className="ysp_content">{data.resonLeave}</label>\n            </div>\n            <div className="ysp_border">\n              <span className="ysp_title">\u9644\u4EF6\u4FE1\u606F:</span>\n              {data.enclosure.map(function(d,i){\n                return(\n                  <div className="ysp_hrDownload" onClick={_this.enclosure.bind(_this)} data-i={i}>{d}</div>\n                )\n              })}\n\n            </div>\n          </div>\n          <div className="ysp-flowsheet">\n            <div className="ysp-flowsheet-twoPart">\n              {data&&data.table&&data.table.content.length>0&&\n                data.table.content.map(function(d,i){\n                  return(\n                    <div className="ysp-flowsheet-twoPart-card">\n                      <p className="ysp-twoPart-cardTit">\n                        <span>\n                          <b></b>{i+1}\n                        </span>\n                      </p>\n                      {d.map(function(dd,ii){\n                        return(\n                          <div>\n                            <span>{data.table.columnTitle[ii]}\uFF1A</span>\n                            <label>{dd}</label>\n                          </div>\n                        )\n                      })}\n                    </div>\n                  )\n                })\n              }\n            </div>\n          </div>\n        </div>\n      )\n    }else{\n      return(\n      \t<div></div>\n      )\n    }\n    \n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "enclosure",\n    value: function enclosure(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.i,\n          eventType: "enclosure"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      if (data && data.topTitle && data.topTitle !== "") {\n        return React.createElement(\n          "div",\n          { className: "ysp_hrDetailInfo", style: { marginTop: "10px" } },\n          React.createElement(\n            "div",\n            { className: "ysp_hrDetailInfo_title" },\n            data.topTitle\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp_hrDetailInfo_content" },\n            data.holidayDetail.map(function (d, i) {\n              return React.createElement(\n                "div",\n                { className: "ysp_border" },\n                React.createElement(\n                  "span",\n                  { className: "ysp_title" },\n                  d.title\n                ),\n                React.createElement(\n                  "label",\n                  { className: "ysp_content" },\n                  d.content\n                )\n              );\n            }),\n            React.createElement(\n              "div",\n              { className: "ysp_border" },\n              React.createElement(\n                "span",\n                { className: "ysp_title" },\n                "\\u603B\\u4F11\\u5047\\u5929\\u6570:"\n              ),\n              React.createElement(\n                "label",\n                { className: "ysp_content" },\n                data.totalHoliday[0]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_border" },\n              React.createElement(\n                "span",\n                { className: "ysp_title" },\n                "\\u8BF7\\u5047\\u539F\\u56E0:"\n              ),\n              React.createElement(\n                "label",\n                { className: "ysp_content" },\n                data.resonLeave\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_border" },\n              React.createElement(\n                "span",\n                { className: "ysp_title" },\n                "\\u9644\\u4EF6\\u4FE1\\u606F:"\n              ),\n              data.enclosure.map(function (d, i) {\n                return React.createElement(\n                  "div",\n                  { className: "ysp_hrDownload", onClick: _this.enclosure.bind(_this), "data-i": i },\n                  d\n                );\n              })\n            )\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet" },\n            React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart" },\n              data && data.table && data.table.content.length > 0 && data.table.content.map(function (d, i) {\n                return React.createElement(\n                  "div",\n                  { className: "ysp-flowsheet-twoPart-card" },\n                  React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      i + 1\n                    )\n                  ),\n                  d.map(function (dd, ii) {\n                    return React.createElement(\n                      "div",\n                      null,\n                      React.createElement(\n                        "span",\n                        null,\n                        data.table.columnTitle[ii],\n                        "\\uFF1A"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        dd\n                      )\n                    );\n                  })\n                );\n              })\n            )\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control16_1GsVZ1: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        return ["审批意见", elem.textContent];
      }
    },
    doAction_uiControl10_KCTxvG: function (data, elem) {
      if (data.eventType == "blur") {
        elem.value = data.dataCustom;elem.blur();
      }
    },
    getTemplate_uiControl10_KCTxvG: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  blur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:"blur"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    \n    var _this=this;\n    if(data&&data[0]=="\u5BA1\u6279\u610F\u89C1"){\n      return(\n        <div className="ysp-Approval-opinions">\n          <span>\u5BA1\u6279\u610F\u89C1\uFF1A</span>\n          <ATextarea className="ysp-agree" value={data[1]} onBlur={_this.blur.bind(_this)}/>\n        </div>\n      )\n    }else {\n      return(\n      \t<div></div>\n      )\n    }\n    \n  }\n}';
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"blur\",\n    value: function blur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: \"blur\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n\n      var _this = this;\n      if (data && data[0] == \"\u5BA1\u6279\u610F\u89C1\") {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-Approval-opinions\" },\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A\"\n          ),\n          React.createElement(ATextarea, { className: \"ysp-agree\", value: data[1], onBlur: _this.blur.bind(_this) })\n        );\n      } else {\n        return React.createElement(\"div\", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "askForLeave");
})(window, ysp);