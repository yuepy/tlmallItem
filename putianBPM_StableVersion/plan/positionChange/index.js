(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control130_yhEqFD: function (elem) {
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
    doAction_uiControl123_Q1csgM: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (d == '领取') {
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
    getTemplate_uiControl123_Q1csgM: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u9879\u6267\u884C"\tclassName="ysp-flex-top">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }}\tclassName=\'ysp-Receive\' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\', className: \'ysp-flex-top\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, className: \'ysp-Receive\', onClick: _this.onClick },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control131_9ga2oZ: function (elem) {
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
    doAction_uiControl124_q5OB9J: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl124_q5OB9J: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control133_HRK9R1: function (elem) {
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
    doAction_uiControl126_yQHaU9: function (data, elem) {
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
    getTemplate_uiControl126_yQHaU9: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:\'none\'}}></div>)\n    } \n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: 'click'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector('.ysp-btn');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+\"px\";\n    //   },500)\n    // }\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },

    getData_control137_0hQbBk: function (elem) {},
    doAction_uiControl130_AswrtP: function (data, elem) {},
    getTemplate_uiControl130_AswrtP: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div ref="qwer">\n      </div>\n    )\n  },\n  componentDidMount() {\n    setTimeout(() => {\n      var aa = this.refs.qwer.ownerDocument.querySelectorAll(\'[data-asdasdasd]\');\n      var clickFun = function(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event(\'blur\'));\n        if (index) {\n          setTimeout(() => {\n            clickFun(index-1);\n          }, 100);\n        }\n      }\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    return React.createElement(\'div\', { ref: \'qwer\' });\n  },\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n\n    setTimeout(function () {\n      var aa = _this.refs.qwer.ownerDocument.querySelectorAll(\'[data-asdasdasd]\');\n      var clickFun = function clickFun(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event(\'blur\'));\n        if (index) {\n          setTimeout(function () {\n            clickFun(index - 1);\n          }, 100);\n        }\n      };\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});';
    },
    getData_control138_xm5sDF: function (elem) {
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
    doAction_uiControl131_IkzH3X: function (data, elem) {},
    getTemplate_uiControl131_IkzH3X: function () {
      var selfTemplate = 'export default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control136_P2r8Ou: function (elem) {
      //红色提示
      if (!elem) {
        return;
      }if (elem && elem.contentWindow && elem.contentWindow.document) {
        if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
        }
      }
    },
    doAction_uiControl129_ZmNpIS: function (data, elem) {},
    getTemplate_uiControl129_ZmNpIS: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips">\n        {data==""? <div></div>:<div className="ysp_alert_words"><span\tdangerouslySetInnerHTML={{__html:data}}></span></div>}\n      </div>\n    )\n  }\n\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_alert_tips" },\n      data == "" ? React.createElement("div", null) : React.createElement(\n        "div",\n        { className: "ysp_alert_words" },\n        React.createElement("span", { dangerouslySetInnerHTML: { __html: data } })\n      )\n    );\n  }\n\n});';
    },
    getData_control166_l6VtG4: function (elem) {
      //提示
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl159_UHmuG9: function (data, elem) {},
    getTemplate_uiControl159_UHmuG9: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display="none";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display="none";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips" ref="yspToast" onClick={(e)=>{e.target.style.display="none"}}>\n        {data==""? "":<div className="ysp_alert_words"><span>{data}</span></div>}\n      </div>\n    )\n  }\n};';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display="none";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display="none";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        "div",\n        { className: "ysp_alert_tips", ref: "yspToast", onClick: function onClick(e) {\n            e.target.style.display = "none";\n          } },\n        data == "" ? "" : React.createElement(\n          "div",\n          { className: "ysp_alert_words" },\n          React.createElement(\n            "span",\n            null,\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    },
    getData_control30_viXbcS: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var input = elem.querySelector("input[name='createTime']");if (input) {
          return input.value;
        }
      }
    },
    doAction_uiControl29_IDR4sA: function (data, elem) {},
    getTemplate_uiControl29_IDR4sA: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||""\n    return (\n      <div className="ysp_hrDetailInfo">\n        <div className="ysp_hrDetailInfo_content" style={{padding:\'0px 0.75rem\',marginBottom:\'10px\'}}>\n        \n          \t<div className="ysp_border" style={{border:"none"}}>\n            \t<span className="ysp_title">\u63D0\u4EA4\u65F6\u95F4\uFF1A</span>\n              <label className="ysp_content">{data}</label>\n            </div>\n         \n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || "";\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo" },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content", style: { padding: \'0px 0.75rem\', marginBottom: \'10px\' } },\n        React.createElement(\n          "div",\n          { className: "ysp_border", style: { border: "none" } },\n          React.createElement(\n            "span",\n            { className: "ysp_title" },\n            "\\u63D0\\u4EA4\\u65F6\\u95F4\\uFF1A"\n          ),\n          React.createElement(\n            "label",\n            { className: "ysp_content" },\n            data\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control64_cElv13: function (elem) {
      if (!elem) {
        return;
      };if (elem) {
        var data = { bigTit: "", table: [] };data.bigTit = elem.querySelector(".mini-panel-header").textContent;var title = elem.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
          var obj = { title: "", content: "" };obj.title = title[i].textContent.trim();obj.content = title[i].nextElementSibling.querySelectorAll("input")[0].value;data.table.push(obj);
        }return data;
      }
    },
    doAction_uiControl60_fKwUyn: function (data, elem) {},
    getTemplate_uiControl60_fKwUyn: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo">\n       \t<div className="ysp_hrDetailInfo_title">{data.bigTit}</div>\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.table&&data.table.length>0&&data.table.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n      </div>\n    )\n  }\n});\n\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo" },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title" },\n        data.bigTit\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.table && data.table.length > 0 && data.table.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control65_QT0n3h: function (elem) {
      if (!elem) {
        return;
      };if (elem) {
        var data = { bigTit: "", table: [] };data.bigTit = elem.querySelector(".mini-panel-header").textContent;var title = elem.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
          var obj = { title: "", content: "" };obj.title = title[i].textContent.trim();obj.content = title[i].nextElementSibling.querySelectorAll("input")[0].value;data.table.push(obj);
        }return data;
      }
    },
    doAction_uiControl125_Dt7T5e: function (data, elem) {},
    getTemplate_uiControl125_Dt7T5e: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo" style={{marginBottom:"10px"}}>\n       \t<div className="ysp_hrDetailInfo_title">{data.bigTit}</div>\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.table&&data.table.length>0&&data.table.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n      </div>\n    )\n  }\n});\n\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo", style: { marginBottom: "10px" } },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title" },\n        data.bigTit\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.table && data.table.length > 0 && data.table.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control132_4yLakw: function (elem) {
      if (!elem) {
        return;
      };if (elem) {
        var data = { bigTit: "", table: [], attention: "" };data.bigTit = elem.querySelector(".mini-panel-header").textContent;var title = elem.querySelectorAll("td.form_label");for (var i = 0; i < title.length; i++) {
          var obj = { title: "", content: "" };if (title[i].parentElement.style.display !== "none" && title[i].style.display !== "none") {
            obj.title = title[i].textContent.trim();obj.content = title[i].nextElementSibling.querySelectorAll("input")[0].value;data.table.push(obj);
          }
        }if (elem.querySelector("#superPromptPc") && elem.querySelector("#superPromptPc").textContent.trim() !== "") {
          data.attention = elem.querySelector("#superPromptPc").textContent;
        } else if (elem.querySelector("#superPrompt") && elem.querySelector("#superPrompt").textContent !== "" && elem.querySelector("#payChangeType") && elem.querySelector("#payChangeType").textContent !== "") {
          data.attention = elem.querySelector("#superPrompt").textContent + "," + elem.querySelector("#payChangeType").textContent;
        }return data;
      }
    },
    doAction_uiControl146_G4H3TU: function (data, elem) {},
    getTemplate_uiControl146_G4H3TU: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    return (\n      <div className="ysp_hrDetailInfo">\n       \t<div className="ysp_hrDetailInfo_title">{data.bigTit}</div>\n        <div className="ysp_hrDetailInfo_content">\n        {data&&data.table&&data.table.length>0&&data.table.map(function(item,index){\n          return(\n          \t<div className="ysp_border">\n            \t<span className="ysp_title">{item.title}\uFF1A</span>\n              <label className="ysp_content">{item.content}</label>\n            </div>\n          )\n        })}  \n        </div>\n        {data.attention==""? "":<div style={{color:"red",textAlign:"center",padding:"5px 10px"}}>{data.attention}</div>}\n      </div>\n    )\n  }\n});\n\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo" },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title" },\n        data.bigTit\n      ),\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_content" },\n        data && data.table && data.table.length > 0 && data.table.map(function (item, index) {\n          return React.createElement(\n            "div",\n            { className: "ysp_border" },\n            React.createElement(\n              "span",\n              { className: "ysp_title" },\n              item.title,\n              "\\uFF1A"\n            ),\n            React.createElement(\n              "label",\n              { className: "ysp_content" },\n              item.content\n            )\n          );\n        })\n      ),\n      data.attention == "" ? "" : React.createElement(\n        "div",\n        { style: { color: "red", textAlign: "center", padding: "5px 10px" } },\n        data.attention\n      )\n    );\n  }\n});';
    },
    getData_control152_2zM9Ru: function (elem) {
      if (!elem) {
        return;
      };if (elem) {
        var data = { bigTit: "", isReadOnly: "", val: "" };data.bigTit = elem.querySelector(".mini-panel-header").textContent;data.isReadOnly = elem.querySelector("textarea").readOnly;data.val = elem.querySelector("textarea").value;return data;
      }
    },
    doAction_uiControl147_vb0OWO: function (data, elem) {
      if (data.eventType == "blur") {
        elem.value = data.dataCustom;elem.dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl147_vb0OWO: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  blur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:"blur"\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData||[];\n    var _this=this;\n    return (\n      <div className="ysp_hrDetailInfo" style={{marginTop:"10px",paddingBottom:"10px"}}>\n       \t<div className="ysp_hrDetailInfo_title" style={{marginBottom:"10px"}}>{data.bigTit}</div>\n        <ATextarea readOnly={data.isReadOnly==true? true:false} style={{margin:"0 auto",width:"90%"}} onBlur={_this.blur.bind(_this)} value={data.val}></ATextarea>\n      </div>\n    )\n  }\n});\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  blur: function blur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.value,\n        eventType: "blur"\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo", style: { marginTop: "10px", paddingBottom: "10px" } },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title", style: { marginBottom: "10px" } },\n        data.bigTit\n      ),\n      React.createElement(ATextarea, { readOnly: data.isReadOnly == true ? true : false, style: { margin: "0 auto", width: "90%" }, onBlur: _this.blur.bind(_this), value: data.val })\n    );\n  }\n});';
    },
    getData_control153_VJp29c: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { bigTit: "", enclosure: [] };data.bigTit = elem.querySelector(".mini-panel-header").textContent;var enclosure = elem.querySelectorAll("a");if (enclosure && enclosure.length > 0) {
          [].forEach.call(enclosure, function (d, i) {
            data.enclosure.push(d.textContent);
          });
        }return data;
      }
    },
    doAction_uiControl258_PA5I7a: function (data, elem) {
      if (data.eventType == "enclosure") {
        var i = data.dataCustom;var _btn = elem.querySelectorAll("a")[i];var url = _btn.href;var num = url.lastIndexOf(".");var type = url.slice(num);var string = encodeURIComponent(_btn.textContent.trim());if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(url + '?_ysp_filepreview=1&_ysp_ftpEncoding=gbk');
        } else if (ysp.appMain.isAndroid()) {
          // top.location.href = url;
          var _url = "ftp://hr-sit:123456@ftp.putiantaili.com//" + string;yspUser.openDocument("{'ftpDownloadUrl': '" + url + "','fileName':'1" + type + "','ftpEncoding':'GBK'}");
        }
      }
    },
    getTemplate_uiControl258_PA5I7a: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  enclosure(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.i,\n        eventType:"enclosure"\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData||[];\n    var _this=this;\n    return (\n      <div className="ysp_hrDetailInfo" style={{marginTop:"10px",paddingBottom:"10px"}}>\n       \t<div className="ysp_hrDetailInfo_title" style={{marginBottom:"10px"}}>{data.bigTit}</div>\n        <div style={{padding:"5px 10px"}}>\n        \t{data&&data.enclosure&&data.enclosure.length>0&&data.enclosure.map(function(d,i){\n            return(\n              <div className="ysp_hrDownload" onClick={_this.enclosure.bind(_this)} data-i={i} >{d}</div>\n            )\n          })}\n        </div>\n      </div>\n    )\n  }\n});\n\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n  enclosure: function enclosure(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.dataset.i,\n        eventType: "enclosure"\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return React.createElement(\n      "div",\n      { className: "ysp_hrDetailInfo", style: { marginTop: "10px", paddingBottom: "10px" } },\n      React.createElement(\n        "div",\n        { className: "ysp_hrDetailInfo_title", style: { marginBottom: "10px" } },\n        data.bigTit\n      ),\n      React.createElement(\n        "div",\n        { style: { padding: "5px 10px" } },\n        data && data.enclosure && data.enclosure.length > 0 && data.enclosure.map(function (d, i) {\n          return React.createElement(\n            "div",\n            { className: "ysp_hrDownload", onClick: _this.enclosure.bind(_this), "data-i": i },\n            d\n          );\n        })\n      )\n    );\n  }\n});';
    },
    getData_control265_CeSfCJ: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        return ["审批意见", elem.value];
      }
    },
    doAction_uiControl259_5elwoD: function (data, elem) {
      if (data.eventType == "blur") {
        elem.value = data.dataCustom;elem.dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl259_5elwoD: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  blur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.value,\n        eventType:"blur"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    \n    var _this=this;\n    if(data&&data[0]=="\u5BA1\u6279\u610F\u89C1"){\n      return(\n        <div className="ysp-Approval-opinions">\n          <span>\u5BA1\u6279\u610F\u89C1\uFF1A</span>\n          <ATextarea className="ysp-agree" defaultValue={data[1]} onBlur={_this.blur.bind(_this)}/>\n        </div>\n      )\n    }else {\n      return(\n      \t<div></div>\n      )\n    }\n    \n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "blur",\n    value: function blur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: "blur"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var data = this.props.customData;\n\n      var _this = this;\n      if (data && data[0] == "\u5BA1\u6279\u610F\u89C1") {\n        return React.createElement(\n          "div",\n          { className: "ysp-Approval-opinions" },\n          React.createElement(\n            "span",\n            null,\n            "\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A"\n          ),\n          React.createElement(ATextarea, { className: "ysp-agree", defaultValue: data[1], onBlur: _this.blur.bind(_this) })\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "positionChange");
})(window, ysp);