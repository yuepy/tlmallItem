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
            var json = { time: new Date().getTime() };
            var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
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
    getData_control132_LWU68G: function (elem) {
      if (!elem) {
        return;
      }var data = { boxTit: [], time: { tit: [], con: [] }, base: { tit: [], con: [] }, before: { tit: [], con: [] }, after: { tit: [], con: [], tip: {} }, method: { tit: [], con: [] }, money: { tit: [], con: [], icon: [], error: [] }, moneypop1: [], moneypop2: [], moneypop3: [], moneypop4: [], moneypop5: [], performed: { tit: [], con: [], icon: [], error: [] }, reason: [], annex: [], surggest: [], errorTip: {} }; //提交日期
      var timetit = elem.querySelector("#form1").querySelectorAll(".table")[0].querySelectorAll("tr");[].map.call(timetit, function (item, index) {
        var a = item.querySelectorAll("td:nth-child(2n+1)");var b = item.querySelectorAll("td:nth-child(2n)");[].map.call(a, function (d, i) {
          data.time.tit.push(d.textContent.replace(/\s+/g, ""));
        });[].map.call(b, function (m, n) {
          data.time.con.push(m.querySelector("input").value);
        });
      }); //大标题
      var box = elem.querySelectorAll(".mini-panel");[].map.call(box, (item, index) => {
        var boxtit = item.querySelectorAll(".mini-panel-title");var tr = item.querySelectorAll(".mini-panel-body tbody tr");[].map.call(boxtit, (item, index) => {
          data.boxTit.push(item.textContent);
        });var aftertip = elem.querySelectorAll(".mini-panel")[2].querySelector("tr:last-child").textContent;data.after.tip = aftertip.replace(/\s+/g, ""); //基础信息
        if (index == 0) {
          [].map.call(tr, (d, i) => {
            var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
              data.base.tit.push(m.textContent.replace(/\s+/g, ""));
            });[].map.call(b, (m, n) => {
              if (m.querySelector("input")) {
                data.base.con.push(m.querySelector("input").value);
              }
            });
          }); //变动前职位信息
        } else if (index == 1) {
          [].map.call(tr, (d, i) => {
            var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
              data.before.tit.push(m.textContent.replace(/\s+/g, ""));
            });[].map.call(b, (m, n) => {
              data.before.con.push(m.querySelector("input").value);
            });
          }); //变动后职位信息
        } else if (index == 2) {
          [].map.call(tr, (d, i) => {
            if (i != tr.length - 1) {
              var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
                if (m.style.display != "none") {
                  data.after.tit.push(m.textContent.replace(/\s+/g, ""));
                }
              });[].map.call(b, (m, n) => {
                if (m.style.display != "none") {
                  data.after.con.push(m.querySelector("input").value);
                }
              });
            }
          }); //变动方式
        } else if (index == 3) {
          [].map.call(tr, (d, i) => {
            var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
              if (m.style.display != "none") {
                data.method.tit.push(m.textContent.replace(/\s+/g, ""));
              }
            });[].map.call(b, (m, n) => {
              if (m.style.display != "none") {
                data.method.con.push(m.querySelector("input").value);
              }
            });
          }); //薪酬信息
        } else if (index == 4) {
          [].map.call(tr, (d, i) => {
            var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
              data.money.tit.push(m.textContent.replace(/\s+/g, ""));
            });[].map.call(b, (m, n) => {
              data.money.con.push(m.querySelector("input").value);var readonly = m.querySelector(".mini-buttonedit-readOnly");var minierror = m.querySelector(".mini-error");if (!readonly && m.querySelector(".mini-buttonedit-icon")) {
                data.money.icon.push("true");
              } else {
                data.money.icon.push("false");
              }if (minierror) {
                data.money.error.push("true");
              } else {
                data.money.error.push("false");
              }
            });
          }); //绩效信息
        } else if (index == 5) {
          [].map.call(tr, (d, i) => {
            var a = d.querySelectorAll("td.form_label");var b = d.querySelectorAll("td:nth-child(2n)");[].map.call(a, (m, n) => {
              data.performed.tit.push(m.textContent.replace(/\s+/g, ""));
            });[].map.call(b, (m, n) => {
              if (m.querySelector("input")) {
                data.performed.con.push(m.querySelector("input").value);var readonly = m.querySelector(".mini-buttonedit-readOnly");var minierror = m.querySelector(".mini-error");if (!readonly && m.querySelector(".mini-buttonedit-icon")) {
                  data.performed.icon.push("true");
                } else {
                  data.performed.icon.push("false");
                }if (minierror) {
                  data.performed.error.push("true");
                } else {
                  data.performed.error.push("false");
                }
              }
            });
          });
        }
      }); //薪酬信息下拉弹窗
      var mpop1 = elem.querySelector("#mini-66");if (mpop1 && mpop1.style.display != "none") {
        var mpoptd1 = mpop1.querySelectorAll("td:nth-child(even)");[].map.call(mpoptd1, function (item, index) {
          data.moneypop1.push(item.textContent);
        });
      }var mpop2 = elem.querySelector("#mini-69");if (mpop2 && mpop2.style.display != "none") {
        var mpoptd2 = mpop2.querySelectorAll("td:nth-child(even)");[].map.call(mpoptd2, function (item, index) {
          data.moneypop2.push(item.textContent);
        });
      }var mpop3 = elem.querySelector("#mini-72");if (mpop3 && mpop3.style.display != "none") {
        var mpoptd3 = mpop3.querySelectorAll("td:nth-child(even)");[].map.call(mpoptd3, function (item, index) {
          data.moneypop3.push(item.textContent);
        });
      }var mpop4 = elem.querySelector("#mini-75");if (mpop4 && mpop4.style.display != "none") {
        var mpoptd4 = mpop4.querySelectorAll("td:nth-child(even)");[].map.call(mpoptd4, function (item, index) {
          data.moneypop4.push(item.textContent);
        });
      }var mpop5 = elem.querySelector("#mini-78");if (mpop5 && mpop5.style.display != "none") {
        var mpoptd5 = mpop5.querySelectorAll("td:nth-child(even)");[].map.call(mpoptd5, function (item, index) {
          data.moneypop5.push(item.textContent);
        });
      } //职位变动原因
      var reas = elem.querySelectorAll(".mini-panel")[6].querySelector(".mini-panel-body textarea");data.reason.push(reas.placeholder);data.reason.push(reas.value);var next = elem.querySelectorAll(".mini-panel")[6].nextElementSibling;data.reason.push(next.textContent.replace(/\s+/g, ""));var read = elem.querySelectorAll(".mini-panel")[6].querySelector(".mini-panel-body .mini-textbox-readOnly");if (read) {
        data.reason.push("true");
      } else {
        data.reason.push("");
      }var ann = elem.querySelectorAll(".mini-panel")[3].querySelectorAll("tbody tr td a");[].map.call(ann, (item, index) => {
        data.annex.push(item.textContent);
      }); //审批意见
      var sugg = elem.querySelector("#approval .nui-form-table tbody tr td:nth-child(2)"); //data.surggest.push(sugg.querySelector("textarea").value);
      if (sugg.querySelector(".mini-textbox-readOnly")) {
        data.surggest.push("true");
      } else {
        data.surggest.push("");
      }if (elem.querySelector("#approval").style.display == "none") {
        data.surggest = [];
      }return data;
    },
    doAction_uiControl125_5ZOR9A: function (data, elem) {
      if (data.eventType == 'change') {
        var data = data.dataCustom;elem.querySelectorAll(".mini-panel")[6].querySelector(".mini-panel-body textarea").value = data;
      } else if (data.eventType == 'change1') {
        var data = data.dataCustom;elem.querySelector("#approval").querySelector(".nui-form-table tr td textarea").value = data;elem.querySelector("#approval").querySelector(".nui-form-table tr td textarea").dispatchEvent(new Event('change'));
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
        } else if (data.eventType == "selclick") {
          var i = data.dataCustom;elem.querySelectorAll(".mini-panel")[4].querySelectorAll("tbody td")[i].querySelector(".mini-buttonedit-icon").click();
        } else if (data.eventType == "selclick1") {
          var i = data.dataCustom;elem.querySelectorAll(".mini-panel")[5].querySelectorAll("tbody td")[i].querySelector(".mini-buttonedit-icon").click();
        }
    },
    getTemplate_uiControl125_5ZOR9A: function () {
      var selfTemplate = 'import { Component } from \'react\';\nexport default class extends React.Component {\n\n\t\t\t\trender() {\n\t\t\t\t\tconst data = this.props.data.customData;\n          /*\u53D8\u52A8\u804C\u4F4D\u540E\u6A21\u5757 aftertip\u662F\u5426\u663E\u793A*/\n           let aftertip;\n           if(data && data.after.tip && data.after.tip != ""){\n             aftertip = (<div className="ysp-txt-tip">{data.after.tip}</div>);\n           }\n          /*\u7EE9\u6548\u4FE1\u606F \u4E0B\u62C9\u5F39\u7A97*/\n          let mpop1;\n          let mpop2;\n          let mpop3;\n          let mpop4;\n          let mpop5;\n          if(data.moneypop1!=""){\n            mpop1 = (<div className="ysp-sel-box">{data.moneypop1.map((item,index)=>{\n                  return(<span>{item}</span>)\n                })}</div>);\n          }else{\n            mpop1 = (<div style={{display:"none"}}></div>);\n          }\n          if(data.moneypop2!=""){\n            mpop2 = (<div className="ysp-sel-box">{data.moneypop2.map((item,index)=>{\n                  return(<span>{item}</span>)\n                })}</div>);\n          }else{\n            mpop2 = (<div style={{display:"none"}}></div>);\n          }\n          if(data.moneypop3!=""){\n            mpop3 = (<div className="ysp-sel-box">{data.moneypop3.map((item,index)=>{\n                  return(<span>{item}</span>)\n                })}</div>);\n          }else{\n            mpop3 = (<div style={{display:"none"}}></div>);\n          }\n          if(data.moneypop4!=""){\n            mpop4 = (<div className="ysp-sel-box">{data.moneypop4.map((item,index)=>{\n                  return(<span>{item}</span>)\n                })}</div>);\n          }else{\n            mpop4 = (<div style={{display:"none"}}></div>);\n          }\n          if(data.moneypop5!=""){\n            mpop5 = (<div className="ysp-sel-box">{data.moneypop5.map((item,index)=>{\n                  return(<span>{item}</span>)\n                })}</div>);\n          }else{\n            mpop5 = (<div style={{display:"none"}}></div>);\n          }\n           /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 start*/\n          let Surggest;\n          if(data && data.surggest && data.surggest != ""){\n            Surggest=(\n         <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>\u5BA1\u6279\u610F\u89C1\uFF1A</h2>\n\t\t\t\t<div className="ysp-area-box">\n\t\t\t\t<ATextarea placeholder={data.surggest[0]} onChange={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \t\teventType:"change1"\n              })\n            }\n           }} value={data.surggest[0]} disabled={data.surggest[1]}></ATextarea>\n\t\t\t\t\t</div>\n       </div>\n            )\n           \n          }else{\n          Surggest=(<div style={{display:"none"}}></div>\n            )   \n          }\n          \n          /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 end*/\n\t\t\t\t\tif(data && data.boxTit) {\n\t\t\t\t\t\treturn(<div className="ysp-flowsheet ysp-turn-wrap">\n\t\t\t{data.boxTit.length>0?\n\t\t\t<div>\n                    \n\t\t\t<div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[0]}\uFF1A</h2>\n\t\t\t\t<ul>\n          <li><span className="li-l">{data.time.tit[0]}</span><span className="li-r">{data.time.con[0]}</span></li>\n\t\t\t\t\t{ data.base.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.base.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n        \n\t\t\t</div>\n       <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[1]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.before.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.before.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n\t\t\t</div>\n       <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[2]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.after.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.after.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n        {aftertip}\n           \n\t\t\t</div>\n       <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[3]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.method.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span><span className="li-r">{data.method.con[index]}</span></li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n\t\t\t</div>\n        <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[4]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.money.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span>{data.money.icon[index] == "true"?<span className="li-r ysp-arrow-down" data-i={index*2+1} onClick={(e)=>{var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.dataset.i,\n        \t\t\t\teventType:"selclick"\n              })\n            }\n           }}>{data.money.con[index]}</span>\n                :\n                <span className="li-r">{data.money.con[index]}</span>}</li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n       {mpop1}{mpop2}{mpop3}{mpop4}{mpop5}\n\t\t\t</div>\n      <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[5]}\uFF1A</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t{ data.performed.tit.map((item,index)=>{ return(\n\t\t\t\t\t<li><span className="li-l">{item}\uFF1A</span>{data.performed.icon[index]=="true"?<span className="li-r ysp-arrow-down" data-i={index*2+1} onClick={(e)=>{var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.dataset.i,\n        \t\t\t\teventType:"selclick1"\n              })\n            }\n           }}>{data.performed.con[index]}</span>:<span className="li-r">{data.performed.con[index]}</span>}</li>\n\t\t\t\t\t) }) }\n\t\t\t\t</ul>\n\t\t\t</div>\n      <div className="ysp-turn-box">\n\t\t\t\t<h2><i className="ysp-tit-bar"></i>{data.boxTit[6]}\uFF1A</h2>\n\t\t\t\t<ATextarea emptyText={data.reason[0]} placeholder={data.reason[0]} onBlur={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \t\teventType:"change"\n              })\n            }\n           }} value={data.reason[1]} disabled={data.reason[3]}></ATextarea>\n        <div className="ysp-txt-tip">{data.reason[2]}</div>\n\t\t\t</div>\n                  \n          <div className="ysp-turn-box">\n\t\t\t\t<h2>{data.boxTit[7]}\uFF1A</h2>\n\t\t\t\t<div className="ysp-annex">{data.annex.map((item,index)=>{\n            return(<span onClick={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.dataset.i,\n        \t\t\t\teventType:"enclosure"\n              })\n            }\n           }} data-i={index}>{item}</span>)\n          })}</div>\n\t\t\t</div>\n       {Surggest}\n\t\t\n\t\t\t</div>:\n\t\t\t<div className="ysp-no-data">\n\t\t\t\t<i></i>\n\t\t\t\t<div>\u6682\u65E0\u6570\u636E</div>\n\t\t\t</div>\n\t\t\t}\n\t\t\t</div>)\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn(\n\t\t\t\t\t\t\t<div style={{display: "none"}}></div>)\n\t\t\t\t\t}\n\t\t\t\t}\n};';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.data.customData;\n      /*\u53D8\u52A8\u804C\u4F4D\u540E\u6A21\u5757 aftertip\u662F\u5426\u663E\u793A*/\n      var aftertip = void 0;\n      if (data && data.after.tip && data.after.tip != "") {\n        aftertip = React.createElement(\n          "div",\n          { className: "ysp-txt-tip" },\n          data.after.tip\n        );\n      }\n      /*\u7EE9\u6548\u4FE1\u606F \u4E0B\u62C9\u5F39\u7A97*/\n      var mpop1 = void 0;\n      var mpop2 = void 0;\n      var mpop3 = void 0;\n      var mpop4 = void 0;\n      var mpop5 = void 0;\n      if (data.moneypop1 != "") {\n        mpop1 = React.createElement(\n          "div",\n          { className: "ysp-sel-box" },\n          data.moneypop1.map(function (item, index) {\n            return React.createElement(\n              "span",\n              null,\n              item\n            );\n          })\n        );\n      } else {\n        mpop1 = React.createElement("div", { style: { display: "none" } });\n      }\n      if (data.moneypop2 != "") {\n        mpop2 = React.createElement(\n          "div",\n          { className: "ysp-sel-box" },\n          data.moneypop2.map(function (item, index) {\n            return React.createElement(\n              "span",\n              null,\n              item\n            );\n          })\n        );\n      } else {\n        mpop2 = React.createElement("div", { style: { display: "none" } });\n      }\n      if (data.moneypop3 != "") {\n        mpop3 = React.createElement(\n          "div",\n          { className: "ysp-sel-box" },\n          data.moneypop3.map(function (item, index) {\n            return React.createElement(\n              "span",\n              null,\n              item\n            );\n          })\n        );\n      } else {\n        mpop3 = React.createElement("div", { style: { display: "none" } });\n      }\n      if (data.moneypop4 != "") {\n        mpop4 = React.createElement(\n          "div",\n          { className: "ysp-sel-box" },\n          data.moneypop4.map(function (item, index) {\n            return React.createElement(\n              "span",\n              null,\n              item\n            );\n          })\n        );\n      } else {\n        mpop4 = React.createElement("div", { style: { display: "none" } });\n      }\n      if (data.moneypop5 != "") {\n        mpop5 = React.createElement(\n          "div",\n          { className: "ysp-sel-box" },\n          data.moneypop5.map(function (item, index) {\n            return React.createElement(\n              "span",\n              null,\n              item\n            );\n          })\n        );\n      } else {\n        mpop5 = React.createElement("div", { style: { display: "none" } });\n      }\n      /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 start*/\n      var Surggest = void 0;\n      if (data && data.surggest && data.surggest != "") {\n        Surggest = React.createElement(\n          "div",\n          { className: "ysp-turn-box" },\n          React.createElement(\n            "h2",\n            null,\n            React.createElement("i", { className: "ysp-tit-bar" }),\n            "\\u5BA1\\u6279\\u610F\\u89C1\\uFF1A"\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-area-box" },\n            React.createElement(ATextarea, { placeholder: data.surggest[0], onChange: function onChange(e) {\n                var handler = _this2.props.customHandler;\n                if (handler) {\n                  handler({\n                    data: e.target.value,\n                    eventType: "change1"\n                  });\n                }\n              }, value: data.surggest[0], disabled: data.surggest[1] })\n          )\n        );\n      } else {\n        Surggest = React.createElement("div", { style: { display: "none" } });\n      }\n\n      /*\u662F\u5426\u663E\u793A\u5BA1\u6279\u610F\u89C1 end*/\n      if (data && data.boxTit) {\n        return React.createElement(\n          "div",\n          { className: "ysp-flowsheet ysp-turn-wrap" },\n          data.boxTit.length > 0 ? React.createElement(\n            "div",\n            null,\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[0],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                React.createElement(\n                  "li",\n                  null,\n                  React.createElement(\n                    "span",\n                    { className: "li-l" },\n                    data.time.tit[0]\n                  ),\n                  React.createElement(\n                    "span",\n                    { className: "li-r" },\n                    data.time.con[0]\n                  )\n                ),\n                data.base.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.base.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[1],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.before.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.before.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[2],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.after.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.after.con[index]\n                    )\n                  );\n                })\n              ),\n              aftertip\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[3],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.method.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.method.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[4],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.money.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    data.money.icon[index] == "true" ? React.createElement(\n                      "span",\n                      { className: "li-r ysp-arrow-down", "data-i": index * 2 + 1, onClick: function onClick(e) {\n                          var handler = _this2.props.customHandler;\n                          if (handler) {\n                            handler({\n                              data: e.target.dataset.i,\n                              eventType: "selclick"\n                            });\n                          }\n                        } },\n                      data.money.con[index]\n                    ) : React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.money.con[index]\n                    )\n                  );\n                })\n              ),\n              mpop1,\n              mpop2,\n              mpop3,\n              mpop4,\n              mpop5\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[5],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data.performed.tit.map(function (item, index) {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      { className: "li-l" },\n                      item,\n                      "\\uFF1A"\n                    ),\n                    data.performed.icon[index] == "true" ? React.createElement(\n                      "span",\n                      { className: "li-r ysp-arrow-down", "data-i": index * 2 + 1, onClick: function onClick(e) {\n                          var handler = _this2.props.customHandler;\n                          if (handler) {\n                            handler({\n                              data: e.target.dataset.i,\n                              eventType: "selclick1"\n                            });\n                          }\n                        } },\n                      data.performed.con[index]\n                    ) : React.createElement(\n                      "span",\n                      { className: "li-r" },\n                      data.performed.con[index]\n                    )\n                  );\n                })\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                React.createElement("i", { className: "ysp-tit-bar" }),\n                data.boxTit[6],\n                "\\uFF1A"\n              ),\n              React.createElement(ATextarea, { emptyText: data.reason[0], placeholder: data.reason[0], onBlur: function onBlur(e) {\n                  var handler = _this2.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: e.target.value,\n                      eventType: "change"\n                    });\n                  }\n                }, value: data.reason[1], disabled: data.reason[3] }),\n              React.createElement(\n                "div",\n                { className: "ysp-txt-tip" },\n                data.reason[2]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-turn-box" },\n              React.createElement(\n                "h2",\n                null,\n                data.boxTit[7],\n                "\\uFF1A"\n              ),\n              React.createElement(\n                "div",\n                { className: "ysp-annex" },\n                data.annex.map(function (item, index) {\n                  return React.createElement(\n                    "span",\n                    { onClick: function onClick(e) {\n                        var handler = _this2.props.customHandler;\n                        if (handler) {\n                          handler({\n                            data: e.target.dataset.i,\n                            eventType: "enclosure"\n                          });\n                        }\n                      }, "data-i": index },\n                    item\n                  );\n                })\n              )\n            ),\n            Surggest\n          ) : React.createElement(\n            "div",\n            { className: "ysp-no-data" },\n            React.createElement("i", null),\n            React.createElement(\n              "div",\n              null,\n              "\\u6682\\u65E0\\u6570\\u636E"\n            )\n          )\n        );\n      } else {\n        return React.createElement("div", { style: { display: "none" } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
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
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display="none";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display="none";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips" ref="yspToast" onClick={(e)=>{e.target.style.display="none"}}>\n        {data==""? "":<div className="ysp_alert_words"><span style={{height:"40px"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display="none";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display="none";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        "div",\n        { className: "ysp_alert_tips", ref: "yspToast", onClick: function onClick(e) {\n            e.target.style.display = "none";\n          } },\n        data == "" ? "" : React.createElement(\n          "div",\n          { className: "ysp_alert_words" },\n          React.createElement(\n            "span",\n            { style: { height: "40px" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    }
  }, "positionChange");
})(window, ysp);