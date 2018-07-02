(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control23_P3UvaB: function (elem) {
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
    doAction_uiControl30_972bZc: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');
          _tab[d[1]].click();console.log(_tab[d[1]].textContent);
        }ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl30_972bZc: function () {
      var selfTemplate = "import {Tabs} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:'click'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref=\"outerWrapper\">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)    \n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n} ";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'tabsClick',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: 'click'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          'div',\n          { ref: 'outerWrapper' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },

    getData_control38_QOFFLs: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');if (receive && _receive.style.display != 'none') {
          data.push(receive.textContent);
        } else if (noReceive) {
          data.push(noReceive.textContent);
        }return data;
      }
    },
    doAction_uiControl39_epB6aH: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (d == '领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3');if (_click) {
            var _icon = _click.querySelector('a');var _innerHTML = _click.querySelector('span').textContent;_innerHTML == '取消领取' && _icon.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");var _innerHTML = _click.querySelector('span').textContent;_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
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
    getTemplate_uiControl39_epB6aH: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:this.props.customData,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u9879\u6267\u884C">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={_this.onClick} className=\'ysp-Receive\'>{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: _this.onClick, className: 'ysp-Receive' },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },

    getData_control52_ASAZ2n: function (elem) {
      if (!elem) {
        return [];
      }if (elem && $(elem).children("div:not([style*='none'])") && $(elem).children("div:not([style*='none'])").children("iframe")) {
        var elem = $($(elem).children("div:not([style*='none'])").children("iframe"))[0];var data = { onePartTitle: [], onePartCont: [], twoPartTitle: [], twoPartCont: [] };var signOne = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#datagrid1');if (signOne && signOne.length > 0) {
          var signTwo = elem.contentWindow.document.querySelectorAll('#datagrid1 .mini-grid-columns	.mini-grid-columns-view	.mini-grid-table');if (signTwo && signTwo.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('#datagrid1 .mini-grid-columns	.mini-grid-columns-view	.mini-grid-table	tr')[1].querySelectorAll('td');typeof sheep != 'undefined' && [].forEach.call(sheep, function (item, i) {
              var children = {};children.title = item.textContent.trim();data.twoPartTitle.push(children);
            });data.twoPartTitle.shift();
          }var signThree = elem.contentWindow.document.querySelectorAll('#datagrid1 .mini-panel-body .mini-grid-rows-view .mini-grid-table');if (signThree && signThree.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-panel-body .mini-grid-rows-view .mini-grid-table .mini-grid-row');if (sheep && sheep.length > 0) {
              for (var i = 0; i < sheep.length; i++) {
                var birth = sheep[i].children;var arry = [];for (var j = 0; j < birth.length; j++) {
                  if (birth[j] != undefined) {
                    arry.push(birth[j].textContent);
                  }
                }data.twoPartCont.push(arry);data.twoPartCont[i].shift();
              }
            }
          }var _PagesMessage = elem.contentWindow.document.querySelector('.mini-pager-right').textContent;data.PagesMessage = _PagesMessage;var _PageNumber = elem.contentWindow.document.querySelector('.mini-pager-num').value;data.PageNumber = _PageNumber;var _PageCount = elem.contentWindow.document.querySelector('.mini-pager-pages').textContent;data.PageCount = _PageCount;
        }return data;
      }
    },
    doAction_uiControl49_PmNJ8d: function (data, elem) {
      if (elem && $(elem).children("div:not([style*='none'])") && $(elem).children("div:not([style*='none'])").children("iframe")) {
        var elem = $($(elem).children("div:not([style*='none'])").children("iframe"))[0];if (data.eventType == "click") {
          var d = data.dataCustom;switch (d) {case 'ysp-PagesMessage-leftBM-icon':
              var btnId = elem.contentWindow.document.querySelector('#mini-9');btnId.click();break;case 'ysp-PagesMessage-left-icon':
              var btnId = elem.contentWindow.document.querySelector('#mini-10');btnId.click();break;case 'ysp-PagesMessage-right-icon':
              var btnId = elem.contentWindow.document.querySelector('#mini-11');btnId.click();break;case 'ysp-PagesMessage-rightBM-icon':
              var btnId = elem.contentWindow.document.querySelector('#mini-12');btnId.click();break;}
        } else if (data.eventType == "selectChange") {
          elem.contentWindow.document.querySelector(".mini-buttonedit-input").focus();elem.contentWindow.document.querySelector(".mini-buttonedit-input").click();setTimeout(function () {
            elem.contentWindow.document.querySelector(".mini-listbox-items").querySelectorAll("tr")[data.dataCustom.ind].click();
          }, 50);
        } else if (data.eventType == "inputChange") {
          elem.contentWindow.document.querySelector(".mini-pager-num").value = data.dataCustom;elem.contentWindow.document.querySelector(".mini-pager-num").dispatchEvent(new Event('change'));
        }
      }
    },
    getTemplate_uiControl49_PmNJ8d: function () {
      var selfTemplate = "import {Page} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport default class extends React.Component{\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:'selectChange'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:'inputChange'                         \n       })\n     }\n  }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var _this=this;\n    if(data && data.twoPartCont){\n      return(\n        <div className='ysp-ExamineAndApprove'>\n          <div\tclassName='ysp-ExamineAndApprove-cardBody'>\n            {\ttypeof data.twoPartCont.length\t!='undefined'\t&&\tdata.twoPartCont.length>0\t?\n              data.twoPartCont.map(function(item,index){\n              return(\n                <div className=\"ysp-ExamineAndApprove-card\">\n                  <div className='ysp-ExamineAndApprove-first'>\n                    <label>\n                      <div>\n                      \t<i></i>\n                      \t<span>{data.twoPartTitle[1].title}:</span>\n                      </div>\n                      <span>{item[1]}</span>\n                    </label>\n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[2].title}:</span>\n                      {item[2]}\n                    </label>\n                    <b className='ysp-ExamineAndApprove-name'>{item[0]}</b>\n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[3].title}:</span>\n                      {item[3]}\n                    </label>\n                  </div>\n                  <div>\n                    <label>\n                      <span>{data.twoPartTitle[4].title}:</span>\n                      {item[4]}\n                    </label>\n                  </div>\n                </div>  \n              )\n            })\t:\t<div\tclassName=\"ysp-no-data\">\n             \t\t\t\t<i></i>\n             \t\t\t\t<div>\u6682\u65E0\u6570\u636E</div>\n           \t\t\t\t</div>\n          }\n          </div>\n          <div>\n          \t{ /*<Page\tPassedCustomData={data}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />*/}\n        \t</div>\n        </div>\n      )\n    }else{\n      return(\n        <div style={{display:'none'}}></div>\n      )\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'pagesClick',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'selectChange',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: 'selectChange'\n        });\n      }\n    }\n  }, {\n    key: 'inputChange',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: 'inputChange'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      if (data && data.twoPartCont) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-ExamineAndApprove' },\n          React.createElement(\n            'div',\n            { className: 'ysp-ExamineAndApprove-cardBody' },\n            typeof data.twoPartCont.length != 'undefined' && data.twoPartCont.length > 0 ? data.twoPartCont.map(function (item, index) {\n              return React.createElement(\n                'div',\n                { className: 'ysp-ExamineAndApprove-card' },\n                React.createElement(\n                  'div',\n                  { className: 'ysp-ExamineAndApprove-first' },\n                  React.createElement(\n                    'label',\n                    null,\n                    React.createElement(\n                      'div',\n                      null,\n                      React.createElement('i', null),\n                      React.createElement(\n                        'span',\n                        null,\n                        data.twoPartTitle[1].title,\n                        ':'\n                      )\n                    ),\n                    React.createElement(\n                      'span',\n                      null,\n                      item[1]\n                    )\n                  )\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'label',\n                    null,\n                    React.createElement(\n                      'span',\n                      null,\n                      data.twoPartTitle[2].title,\n                      ':'\n                    ),\n                    item[2]\n                  ),\n                  React.createElement(\n                    'b',\n                    { className: 'ysp-ExamineAndApprove-name' },\n                    item[0]\n                  )\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'label',\n                    null,\n                    React.createElement(\n                      'span',\n                      null,\n                      data.twoPartTitle[3].title,\n                      ':'\n                    ),\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'label',\n                    null,\n                    React.createElement(\n                      'span',\n                      null,\n                      data.twoPartTitle[4].title,\n                      ':'\n                    ),\n                    item[4]\n                  )\n                )\n              );\n            }) : React.createElement(\n              'div',\n              { className: 'ysp-no-data' },\n              React.createElement('i', null),\n              React.createElement(\n                'div',\n                null,\n                '\\u6682\\u65E0\\u6570\\u636E'\n              )\n            )\n          ),\n          React.createElement('div', null)\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control24_HKVNpA: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl31_N4421V: function (data, elem) {},
    getTemplate_uiControl31_N4421V: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display=\"none\";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display=\"none\";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\" ref=\"yspToast\" onClick={(e)=>{e.target.style.display=\"none\"}}>\n        {data==\"\"? \"\":<div className=\"ysp_alert_words\"><span style={{height:\"40px\"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display=\"none\";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display=\"none\";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_alert_tips\", ref: \"yspToast\", onClick: function onClick(e) {\n            e.target.style.display = \"none\";\n          } },\n        data == \"\" ? \"\" : React.createElement(\n          \"div\",\n          { className: \"ysp_alert_words\" },\n          React.createElement(\n            \"span\",\n            { style: { height: \"40px\" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control197_Hdliue: function (elem) {
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
    doAction_uiControl190_BFndI2: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom.classNames;if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_1')[0].querySelector(".mini-button");_btnTwo.click(); // setTimeout(function () {
          //   ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bizform/components/back/backActivity.jsp?");
          // }, 20);
          var redTip = elem.querySelector(".mini-window-drag").querySelector('iframe').contentWindow.document.querySelector('#tab iframe').contentWindow.document.querySelector('.mini-tips-danger');if (!redTip) {
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
    getTemplate_uiControl190_BFndI2: function () {
      var selfTemplate = "import {Button} from 'ysp-custom-components'\nimport {Component} from 'react';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:'click'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector('.ysp-btn');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+\"px\";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<div style={{display:'none'}}>\n          <Button  PassedCustomData={btns} btnClick={this.click.bind(this)} style={{display:'none'}}/>\n        </div>\n   \t )\n    } else{\n      return(<div style={{display:'none'}}></div>)\n    } \n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert(\"\u70B9\u51FB\u4E86\u6309\u94AE\")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: 'click'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector('.ysp-btn');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+\"px\";\n    //   },500)\n    // }\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(\n          'div',\n          { style: { display: 'none' } },\n          React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this), style: { display: 'none' } })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control200_eQ23GQ: function (elem) {
      if (!elem) {
        return;
      }var iframe = elem && elem.ownerDocument.defaultView.frameElement;if (elem && elem.textContent.indexOf("回退方式") !== -1) {
        var data = [];var signOne = elem.querySelectorAll('.form-label')[0];var signTwo = elem.querySelector('.mini-buttonedit-input');var signThree = elem.querySelectorAll('.form-label')[2]; //var signFour = elem.querySelectorAll('.mini-textbox-input')[0];
        signOne && data.push(signOne.textContent);signTwo && data.push(signTwo.value);signThree && data.push(signThree.textContent.trim()); //signFour && data.push(signFour.value);
        return data;
      }
    },
    doAction_uiControl193_hCZA3k: function (data, elem) {
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
    getTemplate_uiControl193_hCZA3k: function () {
      var selfTemplate = "export default class extends React.Component{\n  change(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.value,\n         eventType:'change'                         \n       })\n     }\n  }\n  onClick(e){\n    var handler=this.props.customHandler\t;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  render(){\n    var\tdata=this.props.customData\t|| [];\n    if(data && data.length>0){\n   \treturn(\n      <div className='ysp-fallbackStrategy'>\n      \t<div className=\"ysp-fallbackStrategy-cont\">\n          <div style={{textAlign:'center',width:'100%'}}>\u56DE\u9000\u7B56\u7565</div>\n        \t<div>\n          \t<span>{data[0]}</span>\n            <label>{data[1]}</label>\n          </div>\n          <div>\n          \t<span className=\"yesOrno\">{data[2]}</span>\n            {/*<textarea defaultValue={data[3]} onBlur={this.change.bind(this)}></textarea>*/}\n          </div>\n          <div>\n          \t<AMUI.Button className=\"ysp-sure\" onClick={this.onClick.bind(this)}>\u786E\u5B9A</AMUI.Button>\n            <AMUI.Button className=\"ysp-miss\" onClick={this.onClick.bind(this)}>\u53D6\u6D88</AMUI.Button>\n          </div>\n        </div>\n      </div>\n    ) }else {\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'change',\n    value: function change(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.value,\n          eventType: 'change'\n        });\n      }\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.length > 0) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-fallbackStrategy' },\n          React.createElement(\n            'div',\n            { className: 'ysp-fallbackStrategy-cont' },\n            React.createElement(\n              'div',\n              { style: { textAlign: 'center', width: '100%' } },\n              '\\u56DE\\u9000\\u7B56\\u7565'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data[0]\n              ),\n              React.createElement(\n                'label',\n                null,\n                data[1]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                { className: 'yesOrno' },\n                data[2]\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                AMUI.Button,\n                { className: 'ysp-sure', onClick: this.onClick.bind(this) },\n                '\\u786E\\u5B9A'\n              ),\n              React.createElement(\n                AMUI.Button,\n                { className: 'ysp-miss', onClick: this.onClick.bind(this) },\n                '\\u53D6\\u6D88'\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "approveAdvice");
})(window, ysp);