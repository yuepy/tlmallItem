(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control173_E2n8TE: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = { tabs: [],
          tabsNum: [], key: {} };var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');[].map.call(_tabs, function (item, i) {
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
    doAction_uiControl166_CJlkrl: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl166_CJlkrl: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:\'click\'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref="outerWrapper">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }  \n  }\n} ';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'tabsClick',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: 'click'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          'div',\n          { ref: 'outerWrapper' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control174_CI434U: function (elem) {
      if (elem) {
        var arr = [];
        var tds = elem.querySelectorAll('.form_label');
        var tdsLen = tds.length;
        var tit = [];
        var pData = [];
        for (var j = 0; j < tdsLen; j++) {
          tit.push(tds[j].textContent.trim());
        }
        arr.push(tit);
        var inps = elem.querySelectorAll('.mini-textbox-input');
        var inpsLen = inps.length;
        for (var j = 0; j < inpsLen; j++) {
          pData.push(inps[j].value);
        }
        arr.push(pData);
        return arr;
      }
      return [];
    },
    doAction_uiControl167_zVT2Aa: function (data, elem) {},
    getTemplate_uiControl167_zVT2Aa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var con = data&&data[0].length>0&&data[0].map(function(d,i){\n      return(\n        <div>\n          <span>{d}:</span>\n          {data[1]&&data[1].length>0 ? <label>{data[1][i]}</label> : ""}\n          <span></span>\n        </div>\n      )\n    })\n    return (\n      <div className="ysp-flowsheet ysp-datafrom2">{data&&data.length>0 ? <div className="ysp-flowsheet-onePart">{con}</div> : ""}</div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    var con = data && data[0].length > 0 && data[0].map(function (d, i) {\n      return React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          d,\n          ":"\n        ),\n        data[1] && data[1].length > 0 ? React.createElement(\n          "label",\n          null,\n          data[1][i]\n        ) : "",\n        React.createElement("span", null)\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "ysp-flowsheet ysp-datafrom2" },\n      data && data.length > 0 ? React.createElement(\n        "div",\n        { className: "ysp-flowsheet-onePart" },\n        con\n      ) : ""\n    );\n  }\n});';
    },

    getData_control176_GRJUNr: function (elem) {
      if (elem) {
        var arr = [];
        var tds = elem.querySelectorAll('.form_label');
        var tdsLen = tds.length;
        var tit = [];
        var pData = [];
        for (var j = 0; j < tdsLen; j++) {
          var obj = { value: "", xy: "" };
          if (tds[j].querySelectorAll('label').length > 0) {
            obj.value = tds[j].querySelector('label').textContent;
            obj.xy = tds[j].parentElement.getAttribute("style");
          }
          tit.push(obj);
        }
        arr.push(tit);
        var spans = elem.querySelectorAll('.mini-textbox-border');
        for (var j = 0; j < spans.length; j++) {
          var obj = { tip: "", value: "", xy: "" };
          if (spans[j].querySelectorAll('input').length > 0) {
            obj.tip = 'input';
            obj.value = spans[j].querySelector('input').value;
            obj.xy = spans[j].parentElement.parentElement.parentElement.getAttribute("style");
          } else if (spans[j].querySelectorAll('textarea').length > 0) {
            obj.tip = 'textarea';
            obj.value = spans[j].querySelector('textarea').value;
            obj.xy = spans[j].parentElement.parentElement.parentElement.getAttribute("style");
          }
          pData.push(obj);
        }
        arr.push(pData);
        return arr;
      }
      return [];
    },
    doAction_uiControl169_qxPrPT: function (data, elem) {},
    getTemplate_uiControl169_qxPrPT: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var con = data&&data[0].length>0&&data[0].map(function(d,i){\n      return(\n        <div>\n          {d.xy==null ? <span>{d.value}:</span> : ""}\n          {data[1][i].tip=="input"&&data[1][i].xy==null ? <AInput type="text" value={data[1][i].value} disabled/> : data[1][i].tip=="textarea"&&data[1][i].xy==null ? <ATextarea value={data[1][i].value} disabled></ATextarea> : ""}\n        </div>\n      )\n    })\n    return (\n      <div className="ysp-flowsheet ysp-datafrom2">{data&&data.length>0 ? <div className="ysp-rejectsStatus">{con}</div> : ""}</div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    var con = data && data[0].length > 0 && data[0].map(function (d, i) {\n      return React.createElement(\n        "div",\n        null,\n        d.xy == null ? React.createElement(\n          "span",\n          null,\n          d.value,\n          ":"\n        ) : "",\n        data[1][i].tip == "input" && data[1][i].xy == null ? React.createElement(AInput, { type: "text", value: data[1][i].value, disabled: true }) : data[1][i].tip == "textarea" && data[1][i].xy == null ? React.createElement(ATextarea, { value: data[1][i].value, disabled: true }) : ""\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "ysp-flowsheet ysp-datafrom2" },\n      data && data.length > 0 ? React.createElement(\n        "div",\n        { className: "ysp-rejectsStatus" },\n        con\n      ) : ""\n    );\n  }\n});';
    },
    getData_control177_d2DXkd: function (elem) {
      if (elem) {
        var arr = [];var tit = elem.querySelector(".form_label");arr.push(tit.textContent);var content = elem.querySelector("textarea");arr.push(content.textContent);return arr;
      }return [];
    },
    doAction_uiControl170_UFvWod: function (data, elem) {
      if (data.eventType == 'change') {
        var d = data.dataCustom;if (d[0] == 'ysp-agree') {
          elem.querySelector("textarea").value = d[1];var key = elem.querySelector("textarea");key.value = d[1];var $v = $(key);$v.trigger('change');
        }
      }
    },
    getTemplate_uiControl170_UFvWod: function () {
      var selfTemplate = "import { Component } from 'react';\nexport default class extends Component {\n  onChange(e){\n    var target=e.target;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value,e.target.dataset.key],\n        eventType:\"change\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    return (\n      <div className=\"ysp-flowsheet ysp-datafrom2 area\">{data&&data.length>0 ? <div className='ysp-Approval-opinions'>\n        <span>{data[0]}</span>\n      \t<ATextarea defaultValue={data[1]} onBlur={_this.onChange.bind(_this)} className='ysp-agree'/>\n      </div> : \"\"}</div>\n    )\n  }\n};";
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "onChange",\n    value: function onChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value, e.target.dataset.key],\n          eventType: "change"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        "div",\n        { className: "ysp-flowsheet ysp-datafrom2 area" },\n        data && data.length > 0 ? React.createElement(\n          "div",\n          { className: "ysp-Approval-opinions" },\n          React.createElement(\n            "span",\n            null,\n            data[0]\n          ),\n          React.createElement(ATextarea, { defaultValue: data[1], onBlur: _this.onChange.bind(_this), className: "ysp-agree" })\n        ) : ""\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;';
    },

    getData_control180_qbH13x: function (elem) {
      if (!elem) {
        return;
      } // if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
      //   return elem.querySelector("#toast").textContent;
      // }
      if (elem) {
        var data = { button: [], tip: "" };
        var windowDrag = elem.querySelector(".mini-window-drag");
        if (windowDrag) {
          var iframeOuter = elem.querySelector(".mini-window-drag").querySelector("iframe");
          if (iframeOuter) {
            var btns = iframeOuter.contentDocument.querySelector("#btn");
            var agreeBtn = iframeOuter.contentDocument.querySelector('#td_0_0');
            var disagreeBtn = iframeOuter.contentDocument.querySelector('#td_0_1');
            if (btns && btns.style.display != "none" && agreeBtn) {
              data.button.push(agreeBtn.textContent);
            }
            if (btns && btns.style.display != "none" && disagreeBtn && disagreeBtn.textContent.trim() != '领取') {
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
        }
        return data;
      }
    },
    doAction_uiControl173_cIDdi1: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom.classNames;
        if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_1')[0].querySelector(".mini-button");
          _btnTwo.click(); // setTimeout(function () {
          //   ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bizform/components/back/backActivity.jsp?");
          // }, 20);
          var redTip = elem.querySelector(".mini-window-drag").querySelector('iframe').contentWindow.document.querySelector('#tab iframe').contentWindow.document.querySelector('.mini-tips-danger');
          if (!redTip) {
            setTimeout(function () {
              var tip = elem.querySelectorAll(".mini-window-drag");
              if (tip.length == 1) {
                //_btnTwo.click(); 
                var json = { time: new Date().getTime() };
                setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 20);
              }
            }, 10);
          }
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_0')[0].querySelector("a");
          if (data.dataCustom.text == "执行") {
            btnTwo.click();
          } else if (data.dataCustom.text == "追回") {
            btnTwo.click();
            var json = { time: new Date().getTime() };
            setTimeout(function () {
              ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp");
            }, 10);
          } else {
            //有黑色提示框出现
            var tip = elem.querySelector("#toast");
            if (tip) {
              data.tip = tip.textContent;
            } //**如果流程iframe存在就留在当页，如果不存在就点击同意后回到待办里***//
            btnTwo.click();
            var timer = setInterval(function () {
              var redTip = elem.querySelector(".mini-window-drag"); //.querySelectorAll("iframe")[0].contentDocument.querySelector("#tab").querySelectorAll("iframe")[0].contentDocument.querySelector(".mini-tips-danger");
              if (!redTip) {
                var json = { time: new Date().getTime() };
                setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 10);
                clearInterval(timer);
              }
            }, 10);
          }
        }
      };
    },
    getTemplate_uiControl173_cIDdi1: function () {
      var selfTemplate = "import {Button} from 'ysp-custom-components'\nimport {Component} from 'react';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:'click'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector('.ysp-btn');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+\"px\";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:'none'}}></div>)\n    } \n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control172_EeoCIM: function (elem) {
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
    doAction_uiControl165_X9OuO6: function (data, elem) {
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
    getTemplate_uiControl165_X9OuO6: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\', className: \'ysp-flex-top\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, className: \'ysp-Receive\', onClick: _this.onClick },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control185_EFsqoK: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var data = [];
        var btns = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#btn')[0]; // data.push(btns.textContent)
        var btnOne = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_0');
        var btnTwo = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_1');
        if (btns && btns.style.display != "none" && btnOne && btnOne.length > 0) {
          data.push(btnOne[0].textContent);
        }
        if (btns && btns.style.display != "none" && btnTwo && btnTwo.length > 0) {
          data.push(btnTwo[0].textContent);
        }
        return data;
      }
    },
    doAction_uiControl178_9qOocp: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom.classNames;
        if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.contentWindow.document.querySelector('#td_0_1').querySelector(".mini-button");
          setTimeout(function () {
            _btnTwo.click();
          }, 10);
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.contentWindow.document.querySelector('#td_0_0').querySelector("a");
          if (data.dataCustom.text == "执行") {
            btnTwo.click();
          } else {
            var formTable = elem.contentWindow.document.querySelector("iframe") && elem.contentWindow.document.querySelector("iframe").contentDocument && elem.contentWindow.document.querySelector("iframe").contentDocument.querySelectorAll('.nui-form-table')[0]; //盖章及归档
            if (formTable) {
              var sealTr0 = $($(formTable).children("tbody").children("tr[id]").eq(0))[0];
              if (sealTr0) {
                var seal = sealTr0.querySelectorAll("input")[0];
              } //合同盖章
              var sealTr1 = $($(formTable).children("tbody").children("tr[id]").eq(1))[0];
              if (sealTr1) {
                var contractSignStatus = sealTr1.querySelector("#contractSignStatus") && sealTr1.querySelector("#contractSignStatus").querySelectorAll("input")[0]; //合同盖章时间
                var contractSealDate = sealTr1.querySelector("#contractSealDate") && sealTr1.querySelector("#contractSealDate").querySelectorAll("input")[0];
              } //合同归档时间
              var sealTr2 = $($(formTable).children("tbody").children("tr[id]").eq(2))[0];
              if (sealTr2) {
                var backDate = sealTr2.querySelector("#backDate") && sealTr2.querySelector("#backDate").querySelectorAll("input")[0];
              }
            }
            if (sealTr0 && sealTr0.style.display != "none" && seal && seal.value == "") {
              console.log("盖章及归档未填写");
              btnTwo.click();
            } else if (sealTr1 && sealTr1.style.display != "none" && contractSignStatus && contractSignStatus.value == "") {
              console.log("合同盖章未填写");
              btnTwo.click();
            } else if (sealTr1 && sealTr1.style.display != "none" && contractSealDate && contractSealDate.value == "") {
              console.log("合同盖章时间未填写");
              btnTwo.click();
            } else if (sealTr2 && sealTr2.style.display != "none" && backDate && backDate.value == "") {
              console.log("合同归档时间未填写");
              btnTwo.click();
            } else {
              console.log("提交成功");
              btnTwo.click();
              var json = { time: new Date().getTime() };
              setTimeout(function () {
                ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
              }, 10);
            }
          }
        }
      };
    },
    getTemplate_uiControl178_9qOocp: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    // if(\tdata\t&& data.length>0\t){\n    // \treturn(\n    // \t<Button  PassedCustomData={data} btnClick={this.click.bind(this)} />\n    // )\n    // } else{\n    //   return(<div style={{display:\'none\'}}></div>)\n    // } \n    return(<div id="test1"></div>)\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      // if(\tdata\t&& data.length>0\t){\n      // \treturn(\n      // \t<Button  PassedCustomData={data} btnClick={this.click.bind(this)} />\n      // )\n      // } else{\n      //   return(<div style={{display:\'none\'}}></div>)\n      // } \n      return React.createElement(\'div\', { id: \'test1\' });\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control186_3185AU: function (elem) {
      //loading 加载。
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var loading = elem.contentWindow.document.querySelector('.mini-mask');
        if (loading) {
          var _loading = loading.querySelector('.mini-mask-loading');
          if (_loading && _loading.style.display == 'block' && _loading.textContent.trim() == '加载中...') {
            return [true];
          } else {
            return;
          }
        }
      }
    },
    doAction_uiControl179_nPKKSK: function (data, elem) {},
    getTemplate_uiControl179_nPKKSK: function () {
      var selfTemplate = 'export default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}\n';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control189_HK8O2o: function (elem) {
      //提示
      if (!elem) {
        return;
      }
      if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl182_tg5mgt: function (data, elem) {},
    getTemplate_uiControl182_tg5mgt: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display="none";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display="none";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips" ref="yspToast" onClick={(e)=>{e.target.style.display="none"}}>\n        {data==""? "":<div className="ysp_alert_words"><span style={{height:"40px"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};\n';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display="none";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display="none";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        "div",\n        { className: "ysp_alert_tips", ref: "yspToast", onClick: function onClick(e) {\n            e.target.style.display = "none";\n          } },\n        data == "" ? "" : React.createElement(\n          "div",\n          { className: "ysp_alert_words" },\n          React.createElement(\n            "span",\n            { style: { height: "40px" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    },
    getData_control190_Aw3o9T: function (elem) {
      if (elem) {
        var arr = { status: [], headOne: [], titleOne: [], contentOne: [], headTwo: [], titleTwo: [], contentTwo: [], headThree: [], titleThree: [], contentThree: [] };var div1 = elem.querySelector("#div1");var div2 = elem.querySelector("#div2");var div3 = elem.querySelector("#div3"); //显示隐藏状态
        var a = div1.getAttribute("style");arr.status.push(a);var b = div2.getAttribute("style");arr.status.push(b);var c = div3.getAttribute("style");arr.status.push(c);if (a == "display: none;") {
          arr.titleOne.push("");arr.contentOne.push("");
        } else {
          //标题
          var tit = div1.querySelectorAll(".mini-toolbar"); //表格标题
          for (var i = 0; i < tit.length; i++) {
            arr.headOne.push(tit[i].textContent.trim());
          }var tab1 = div1.querySelectorAll(".mini-grid-columns-view");for (var i = 0; i < tab1.length; i++) {
            var tab = tab1[i].querySelector("table");var ths = tab.querySelectorAll(".mini-grid-headerCell.mini-grid-bottomCell");var con = [];for (var j = 0; j < ths.length; j++) {
              con.push(ths[j].textContent);
            }arr.titleOne.push(con);
          } //表格内容
          var tab2 = div1.querySelectorAll(".mini-grid-rows-view");for (var n = 0; n < tab2.length; n++) {
            var tab = tab2[n].querySelector("table");var trs = tab.querySelectorAll("tr");var cons = [];for (var i = 1; i < trs.length; i++) {
              var con = [];var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                con.push(tds[j].textContent);
              }cons.push(con);
            }arr.contentOne.push(cons);
          }
        }if (b == "display: none;") {
          arr.titleTwo.push("");arr.contentTwo.push("");
        } else {
          //标题
          var tit = div2.querySelectorAll(".mini-toolbar"); //表格标题
          for (var i = 0; i < tit.length; i++) {
            arr.headTwo.push(tit[i].textContent.trim());
          }var tab1 = div2.querySelectorAll(".mini-grid-columns-view");for (var i = 0; i < tab1.length; i++) {
            var tab = tab1[i].querySelector("table");var ths = tab.querySelectorAll(".mini-grid-headerCell.mini-grid-bottomCell");var con = [];for (var j = 0; j < ths.length; j++) {
              con.push(ths[j].textContent);
            }arr.titleTwo.push(con);
          } //表格内容
          var tab2 = div2.querySelectorAll(".mini-grid-rows-view");for (var n = 0; n < tab2.length; n++) {
            var tab = tab2[n].querySelector("table");var trs = tab.querySelectorAll("tr");var cons = [];for (var i = 1; i < trs.length; i++) {
              var con = [];var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                con.push(tds[j].textContent);
              }cons.push(con);
            }arr.contentTwo.push(cons);
          }
        }if (c == "display: none;") {
          arr.titleThree.push("");arr.contentThree.push("");
        } else {
          //标题
          var tit = div3.querySelectorAll(".mini-toolbar"); //表格标题
          for (var i = 0; i < tit.length; i++) {
            arr.headThree.push(tit[i].textContent.trim());
          }var tab1 = div3.querySelectorAll(".mini-grid-columns-view");for (var i = 0; i < tab1.length; i++) {
            var tab = tab1[i].querySelector("table");var ths = tab.querySelectorAll(".mini-grid-headerCell.mini-grid-bottomCell");var con = [];if (tab.querySelector("tbody").querySelectorAll("tr").length == 2) {
              for (var j = 0; j < ths.length; j++) {
                con.push(ths[j].textContent);
              }
            } else {
              for (var j = 0; j < 3; j++) {
                con.push(ths[j].textContent);
              }for (var j = 4; j < ths.length; j++) {
                con.push(ths[j].textContent);
              }con.push(ths[3].textContent);
            } // [].forEach.call(arr.headThree,function(d,i){//zyt
            //         if(d=="大盘价"){
            //           for(var j=0;j<ths.length;j++){
            //             con.push(ths[j].textContent);
            //           }
            //         }else{
            //           for (var j = 0; j < 3; j++) {
            //             con.push(ths[j].textContent);
            //           }
            //           for (var j = 4; j < ths.length; j++) {
            //             con.push(ths[j].textContent);
            //           }
            //         }
            //       })
            //       for (var j = 0; j < 3; j++) {
            //         con.push(ths[j].textContent);
            //       }
            //       for (var j = 4; j < ths.length; j++) {
            //         con.push(ths[j].textContent);
            //       }
            arr.titleThree.push(con);
          } //表格内容
          var tab2 = div3.querySelectorAll(".mini-grid-rows-view");for (var n = 0; n < tab2.length; n++) {
            var tab = tab2[n].querySelector("table");var trs = tab.querySelectorAll("tr");var cons = [];for (var i = 1; i < trs.length; i++) {
              var con = [];var tds = trs[i].querySelectorAll("td");for (var j = 1; j < tds.length; j++) {
                con.push(tds[j].textContent);
              }cons.push(con);
            }arr.contentThree.push(cons);
          }
        }return arr;
      }return [];
    },
    doAction_uiControl183_00AQUJ: function (data, elem) {},
    getTemplate_uiControl183_00AQUJ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var cards = data&&data.status.length>0&&data.status[0] == null?  <div> \n          {data.headOne.map(function(dd,ii){\n            return(\n              <div>\n                <div className="ysp-total">\n                  <h1>{dd}</h1>\n                </div>\n                {data && data.contentOne[ii].map(function(d,i){\n          return(\n              <div className="ysp-flowsheet-twoPart">\n                <div className="ysp-flowsheet-twoPart-card">\n                  <p className="ysp-twoPart-cardTit">\n                    <span>\n                      <b></b>\n                      {d[0]}\n                    </span>\n                  </p>\n                  {d.map(function(item,index){\n                    if(index !== 0){\n                      return( \n                        <div>\n                          <span>{data.titleOne[ii][index]}</span>\n                          <label>{item}</label>\n                        </div>\n                      )\n                    }\n                  })\n                  }\n              </div>\n              </div>\n          )\n        })}\n              </div>\n            )\n          })}</div>\t : data&&data.status.length>0&&data.status[1] == null?  <div> \n          {data.headTwo.map(function(dd,ii){\n            return(\n              <div>\n                <div className="ysp-total">\n                  <h1>{dd}</h1>\n                </div>\n                {data && data.contentTwo[ii].map(function(d,i){\n          return(\n              <div className="ysp-flowsheet-twoPart">\n                <div className="ysp-flowsheet-twoPart-card">\n                  <p className="ysp-twoPart-cardTit">\n                    <span>\n                      <b></b>\n                      {d[0]}\n                    </span>\n                  </p>\n                  {d.map(function(item,index){\n                    if(index !== 0){\n                      return( \n                        <div>\n                          <span>{data.titleTwo[ii][index]}</span>\n                          <label>{item}</label>\n                        </div>\n                      )\n                    }\n                  })\n                  }\n              </div>\n              </div>\n          )\n        })}\n              </div>\n            )\n          })}</div>\t :  data&&data.status.length>0&&data.status[2] == null?  <div> \n          {data.headThree.map(function(dd,ii){\n            return(\n              <div>\n                <div className="ysp-total">\n                  <h1>{dd}</h1>\n                </div>\n                {data && data.contentThree[ii].map(function(d,i){\n          return(\n              <div className="ysp-flowsheet-twoPart">\n                <div className="ysp-flowsheet-twoPart-card">\n                  <p className="ysp-twoPart-cardTit">\n                    <span>\n                      <b></b>\n                      {d[0]}\n                    </span>\n                  </p>\n                  {d.map(function(item,index){\n                    if(index !== 0){\n                      return( \n                        <div>\n                          <span>{data.titleThree[ii][index]}</span>\n                          <label>{item}</label>\n                        </div>\n                      )\n                    }\n                  })\n                  }\n              </div>\n              </div>\n          )\n        })}\n              </div>\n            )\n          })}</div>\t\t\n         : "" ;\n    // var aa=[];\n    // aa.push(<div>hahah</div>)\n    return (\n        <div className="ysp-flowsheet ysp-datafrom2">{data!=="" ? <div>{cards}</div> : ""}</div>\n    )\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var cards = data && data.status.length > 0 && data.status[0] == null ? React.createElement(\n      \"div\",\n      null,\n      data.headOne.map(function (dd, ii) {\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"div\",\n            { className: \"ysp-total\" },\n            React.createElement(\n              \"h1\",\n              null,\n              dd\n            )\n          ),\n          data && data.contentOne[ii].map(function (d, i) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp-flowsheet-twoPart\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp-flowsheet-twoPart-card\" },\n                React.createElement(\n                  \"p\",\n                  { className: \"ysp-twoPart-cardTit\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"b\", null),\n                    d[0]\n                  )\n                ),\n                d.map(function (item, index) {\n                  if (index !== 0) {\n                    return React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        data.titleOne[ii][index]\n                      ),\n                      React.createElement(\n                        \"label\",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            );\n          })\n        );\n      })\n    ) : data && data.status.length > 0 && data.status[1] == null ? React.createElement(\n      \"div\",\n      null,\n      data.headTwo.map(function (dd, ii) {\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"div\",\n            { className: \"ysp-total\" },\n            React.createElement(\n              \"h1\",\n              null,\n              dd\n            )\n          ),\n          data && data.contentTwo[ii].map(function (d, i) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp-flowsheet-twoPart\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp-flowsheet-twoPart-card\" },\n                React.createElement(\n                  \"p\",\n                  { className: \"ysp-twoPart-cardTit\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"b\", null),\n                    d[0]\n                  )\n                ),\n                d.map(function (item, index) {\n                  if (index !== 0) {\n                    return React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        data.titleTwo[ii][index]\n                      ),\n                      React.createElement(\n                        \"label\",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            );\n          })\n        );\n      })\n    ) : data && data.status.length > 0 && data.status[2] == null ? React.createElement(\n      \"div\",\n      null,\n      data.headThree.map(function (dd, ii) {\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"div\",\n            { className: \"ysp-total\" },\n            React.createElement(\n              \"h1\",\n              null,\n              dd\n            )\n          ),\n          data && data.contentThree[ii].map(function (d, i) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp-flowsheet-twoPart\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp-flowsheet-twoPart-card\" },\n                React.createElement(\n                  \"p\",\n                  { className: \"ysp-twoPart-cardTit\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"b\", null),\n                    d[0]\n                  )\n                ),\n                d.map(function (item, index) {\n                  if (index !== 0) {\n                    return React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        data.titleThree[ii][index]\n                      ),\n                      React.createElement(\n                        \"label\",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            );\n          })\n        );\n      })\n    ) : \"\";\n    // var aa=[];\n    // aa.push(<div>hahah</div>)\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-flowsheet ysp-datafrom2\" },\n      data !== \"\" ? React.createElement(\n        \"div\",\n        null,\n        cards\n      ) : \"\"\n    );\n  }\n});";
    },
    getData_control181_ptwra5: function (elem) {
      if (elem) {
        var arr = [];
        var tit = [];
        var pData = [];
        var obj1 = { tip: "", lists: [], lis: [], check: [], clas: "" };
        var obj2 = { tip: "", lists: [], lis: [], check: [], clas: "" };
        var inp = { tip: "", value: "" };
        var tds = elem.querySelectorAll('.form_label');
        var tdsLen = tds.length;
        for (var j = 0; j < tdsLen; j++) {
          tit.push(tds[j].textContent.trim());
        }
        arr.push(tit);
        var label1 = elem.querySelector("#isBelowJcPrice").querySelectorAll("input");
        for (var i = 0; i < label1.length - 1; i++) {
          obj1.tip = "div";
          var checked = label1[i].checked;
          var ys = elem.querySelector("#isBelowJcPrice").className;
          obj1.clas = ys;
          if (ys == "mini-radiobuttonlist mini-disabled") {
            if (checked) {
              obj1.check.push(label1[i].value);
            }
          } else {
            obj1.lis.push(checked);
            obj1.lists.push(label1[i].value);
          }
        }
        pData.push(obj1);
        var label2 = elem.querySelector("#isBelowKsPrice").querySelectorAll("input");
        for (var i = 0; i < label2.length - 1; i++) {
          obj2.tip = "radio";
          var checked = label2[i].checked;
          var ys = elem.querySelector("#isBelowJcPrice").className;
          obj2.clas = ys;
          if (ys == "mini-radiobuttonlist mini-disabled") {
            if (checked) {
              obj2.check.push(label2[i].value);
            }
          } else {
            obj2.lis.push(checked);
            obj2.lists.push(label2[i].value);
          }
        }
        pData.push(obj2);
        var span = elem.querySelector("#ksPrice").querySelector("input");
        inp.tip = "input";
        inp.value = span.value;
        inp.disable = span.disabled;
        pData.push(inp);
        arr.push(pData);
        return arr;
      }
      return [];
    },
    doAction_uiControl174_FXKnek: function (data, elem) {
      if (data.eventType == "inputclick") {
        var a = data.dataCustom;
        var ind = parseInt(a.ind);
        var clases = a.clas;
        var check = a.check;
        if (clases == "ysp-shenpiMoney one") {
          var target = elem.querySelector("#isBelowJcPrice").querySelectorAll("input")[ind];
          target.click();
          elem.querySelector("#isBelowJcPrice").querySelectorAll("input")[ind].checked = check;
          $($(target).parent().siblings().children("input"))[0].checked = false;
        } else {
          var target = elem.querySelector("#isBelowKsPrice").querySelectorAll("input")[ind];
          target.click();
          elem.querySelector("#isBelowKsPrice").querySelectorAll("input")[ind].checked = check;
          $($(target).parent().siblings().children("input"))[0].checked = false;
        }
      } else if (data.eventType == "change") {
        var obj = data.dataCustom;
        elem.querySelector("#ksPrice").querySelector("input").value = obj.val;
        elem.querySelector("#ksPrice").querySelector("input").dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl174_FXKnek: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  inputClick:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{ind:target.getAttribute("data-id"),clas:target.className,check:target.checked},\n        eventType:"inputclick"\n      })\n    }\n  },\n  onChange:function(e){\n    var target=e.target;\n   var reg = /[^0-9\\.]/g;\n    target.value=target.value.replace( reg, "" );\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{val:target.value},\n        eventType:"change"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    var con = data&&data.length>0&&<div className="ysp-flowsheet-onePart">\n    <div>\n        <span>{data[0][0]}:</span>\n        {data[1][0].clas=="mini-radiobuttonlist mini-disabled" ? <label>{data[1][0].check[0]=="Y" ? "\u662F" : "\u5426"}</label> : <AMUI.List>\n        {["\u662F","\u5426"].map((device, i) => {\n              return (\n                <AMUI.List.Item nested="radio">\n                  <AMUI.Field label={device} type="radio" name="radio-list-1" className=\'ysp-shenpiMoney one\' onClick={_this.inputClick.bind(_this)} data-id={i} checked={data[1][0].lis[i]==true\t?\ttrue\t:\tfalse}>\n                  </AMUI.Field>\n                </AMUI.List.Item>\n              );\n            })}\n        </AMUI.List> }\n    </div>\n    {data[1][0].lis[1]==true ? <div>\n        <span>{data[0][1]}:</span>\n        <AMUI.List>\n        {["\u662F","\u5426"].map((device, i) => {\n              return (\n                <AMUI.List.Item nested="radio">\n                  <AMUI.Field label={device} type="radio" name="radio-list-2" className=\'ysp-shenpiMoney two\' onClick={_this.inputClick.bind(_this)} data-id={i} checked={data[1][1].lis[i]==true\t?\ttrue\t:\tfalse} disabled="disabled">\n                  </AMUI.Field>\n                </AMUI.List.Item>\n              );\n            })}\n        </AMUI.List> \n    </div>: <div>\n        <span>{data[0][1]}:</span>\n        {data[1][1].clas=="mini-radiobuttonlist mini-disabled" ? <label>{data[1][1].check[0]=="Y" ? "\u662F" : "\u5426"}</label> : <AMUI.List>\n        {["\u662F","\u5426"].map((device, i) => {\n              return (\n                <AMUI.List.Item nested="radio">\n                  <AMUI.Field label={device} type="radio" name="radio-list-2" className=\'ysp-shenpiMoney two\' onClick={_this.inputClick.bind(_this)} data-id={i} checked={data[1][1].lis[i]==true\t?\ttrue\t:\tfalse}>\n                  </AMUI.Field>\n                </AMUI.List.Item>\n              );\n            })}\n        </AMUI.List> }\n    </div>}\n    <div>\n        <span>{data[0][2]}:</span>\n      {data[1][0].lis[1]==true||data[1][1].lis[1]==true ?\n        <label className="inp"><AInput type="text" onBlur={_this.onChange.bind(_this)} disabled="disabled" className="num" value={data[1][2].value} /><span>\u5143</span></label>:<label className="inp"><AInput type="text" onBlur={_this.onChange.bind(_this)} disabled={data[1][2].disable ? "disabled" : ""} className="num" value={data[1][2].value} /><span>\u5143</span></label>}\n    </div>\n</div>\n    return (\n      <div className="ysp-flowsheet ysp-datafrom2">\n        {data&&data.length>0 ? <div>{con}</div> : ""}\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  inputClick: function inputClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { ind: target.getAttribute("data-id"), clas: target.className, check: target.checked },\n        eventType: "inputclick"\n      });\n    }\n  },\n  onChange: function onChange(e) {\n    var target = e.target;\n    var reg = /[^0-9\\.]/g;\n    target.value = target.value.replace(reg, "");\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: { val: target.value },\n        eventType: "change"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var con = data && data.length > 0 && React.createElement(\n      "div",\n      { className: "ysp-flowsheet-onePart" },\n      React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          data[0][0],\n          ":"\n        ),\n        data[1][0].clas == "mini-radiobuttonlist mini-disabled" ? React.createElement(\n          "label",\n          null,\n          data[1][0].check[0] == "Y" ? "\u662F" : "\u5426"\n        ) : React.createElement(\n          AMUI.List,\n          null,\n          ["\u662F", "\u5426"].map(function (device, i) {\n            return React.createElement(\n              AMUI.List.Item,\n              { nested: "radio" },\n              React.createElement(AMUI.Field, { label: device, type: "radio", name: "radio-list-1", className: "ysp-shenpiMoney one", onClick: _this.inputClick.bind(_this), "data-id": i, checked: data[1][0].lis[i] == true ? true : false })\n            );\n          })\n        )\n      ),\n      data[1][0].lis[1] == true ? React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          data[0][1],\n          ":"\n        ),\n        React.createElement(\n          AMUI.List,\n          null,\n          ["\u662F", "\u5426"].map(function (device, i) {\n            return React.createElement(\n              AMUI.List.Item,\n              { nested: "radio" },\n              React.createElement(AMUI.Field, { label: device, type: "radio", name: "radio-list-2", className: "ysp-shenpiMoney two", onClick: _this.inputClick.bind(_this), "data-id": i, checked: data[1][1].lis[i] == true ? true : false, disabled: "disabled" })\n            );\n          })\n        )\n      ) : React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          data[0][1],\n          ":"\n        ),\n        data[1][1].clas == "mini-radiobuttonlist mini-disabled" ? React.createElement(\n          "label",\n          null,\n          data[1][1].check[0] == "Y" ? "\u662F" : "\u5426"\n        ) : React.createElement(\n          AMUI.List,\n          null,\n          ["\u662F", "\u5426"].map(function (device, i) {\n            return React.createElement(\n              AMUI.List.Item,\n              { nested: "radio" },\n              React.createElement(AMUI.Field, { label: device, type: "radio", name: "radio-list-2", className: "ysp-shenpiMoney two", onClick: _this.inputClick.bind(_this), "data-id": i, checked: data[1][1].lis[i] == true ? true : false })\n            );\n          })\n        )\n      ),\n      React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "span",\n          null,\n          data[0][2],\n          ":"\n        ),\n        data[1][0].lis[1] == true || data[1][1].lis[1] == true ? React.createElement(\n          "label",\n          { className: "inp" },\n          React.createElement(AInput, { type: "text", onBlur: _this.onChange.bind(_this), disabled: "disabled", className: "num", value: data[1][2].value }),\n          React.createElement(\n            "span",\n            null,\n            "\\u5143"\n          )\n        ) : React.createElement(\n          "label",\n          { className: "inp" },\n          React.createElement(AInput, { type: "text", onBlur: _this.onChange.bind(_this), disabled: data[1][2].disable ? "disabled" : "", className: "num", value: data[1][2].value }),\n          React.createElement(\n            "span",\n            null,\n            "\\u5143"\n          )\n        )\n      )\n    );\n    return React.createElement(\n      "div",\n      { className: "ysp-flowsheet ysp-datafrom2" },\n      data && data.length > 0 ? React.createElement(\n        "div",\n        null,\n        con\n      ) : ""\n    );\n  }\n});';
    },
    getData_control175_Sc0uNW: function (elem) {
      //红色提示
      if (!elem) {
        return;
      }if (elem && elem.contentWindow && elem.contentWindow.document) {
        if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
        }
      }
    },
    doAction_uiControl168_kqEBpB: function (data, elem) {},
    getTemplate_uiControl168_kqEBpB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips">\n        {data==""? <div></div>:<div className="ysp_alert_words"><span\tdangerouslySetInnerHTML={{__html:data}}></span></div>}\n      </div>\n    )\n  }\n});';
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      { className: \"ysp_alert_tips\" },\n      data == \"\" ? React.createElement(\"div\", null) : React.createElement(\n        \"div\",\n        { className: \"ysp_alert_words\" },\n        React.createElement(\"span\", { dangerouslySetInnerHTML: { __html: data } })\n      )\n    );\n  }\n});";
    },
    getData_control137_ecW4TU: function (elem) {
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
    doAction_uiControl130_Tg1fS0: function (data, elem) {
      if (data.eventType == "show") {
        ysp.appMain.showLoading();
      } else if (data.eventType == "hide") {
        ysp.appMain.hideLoading();
      }
    },
    getTemplate_uiControl130_Tg1fS0: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component {\n// componentWillReceiveProps(props){\n//   // debugger;\n//   var show=props.customData;\n//   var handler=props.customHandler;\n//   if(show&&handler){\n//     handler({\n//       eventType:"show"\n//     })\n//   }else{\n//     handler({\n//       eventType:"hide"\n//     })\n//   }\n// }\n   render(){\n    var data = this.props.customData;\n    if(data){\n    \treturn(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n    // componentWillReceiveProps(props){\n    //   // debugger;\n    //   var show=props.customData;\n    //   var handler=props.customHandler;\n    //   if(show&&handler){\n    //     handler({\n    //       eventType:"show"\n    //     })\n    //   }else{\n    //     handler({\n    //       eventType:"hide"\n    //     })\n    //   }\n    // }\n    value: function render() {\n      var data = this.props.customData;\n      if (data) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "goodBargain");
})(window, ysp);