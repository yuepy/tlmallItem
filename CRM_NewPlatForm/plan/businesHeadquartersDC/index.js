(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control98_UOORsI: function (elem) {
      if (!elem) {
        return { value: '', len: '', title: '销售达成' };
      }var dataMonth = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_month"]');var dataYear = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_year"]');if (dataMonth) {
        data = dataMonth.value;flag = true;
      } else {
        data = dataYear.value;flag = false;
      }var len = data.length;data = data.slice(0, len);var title;var u_title = elem.ownerDocument.querySelector('#tab-head');if (u_title) {
        var links = u_title.querySelectorAll('li');for (var i = 0; i < links.length; i++) {
          if (links[i].className.indexOf('act') != -1) {
            title = links[i].textContent;
          }
        }
      } else {
        title = '销售达成';
      }var moreLength = elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li').length == 1 ? false : true;
      var titleLength = elem.ownerDocument.querySelector("#tab_box").querySelectorAll("li").length > 1 ? true : false;var titleName = elem.ownerDocument.querySelector("#tab_box").querySelectorAll("li")[0].textContent;return { value: data, len: len, title: title, moreLength: moreLength, flag: flag, titleLength: titleLength, titleName: titleName };
    },
    doAction_uiControl99_ZsT49M: function (data, elem) {
      if (data.eventType === 'back') {
        var li = elem && elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li').length;li > 1 ? elem.ownerDocument.querySelector('#searchHead').querySelectorAll('li')[li - 2].querySelector('a').click() : ysp.appMain.back();
      } // if (data.eventType == 'close') {
      //   ysp.appMain.back();
      // }
      // if (data.eventType == 'time') {
      // }
      // if (data.eventType == 'change') {
      //   var datetime = data.dataCustom.value;
      //   var len = data.dataCustom.len;
      //   datetime = datetime.slice(0, len);
      //   console.log(datetime);
      //   elem.ownerDocument.querySelector('#filterArea').querySelector('.input-group-addon').click();
      //   var time = elem.ownerDocument.querySelector('#filterArea').querySelector('input[placeholder="选择日期"]');
      //   time.focus();
      //   time.value = datetime;
      //   time.blur();
      //   elem.ownerDocument.querySelector('#queryBtn').click();
      // }
    },
    getTemplate_uiControl99_ZsT49M: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {ComplexHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  constructor(props){\n  \tsuper(props);\n    this.state = {\n    \tcenterText: "\u9500\u552E\u8FBE\u6210",\n      moreLength:props.customData.moreLength,\n      flag:props.customData.flag,\n      titleLength:props.customData.titleLength,\n      titleName:props.customData.titleName\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      moreLength:nextProps.customData.moreLength,\n      flag:nextProps.customData.flag,\n      titleLength:nextProps.customData.titleLength,\n      titleName:nextProps.customData.titleName\n    })\n  }\n  componentDidMount(){\n  \twindow.addEventListener(\'ysp-change-title\', this.changeTitle.bind(this), false);\n    this.setState({\n    \tcenterText: this.props.customData.title\n    })\n  }\n  componentDidUpdate(){\n  \tvar sTitle = this.state.centerText;\n    var rTitle = this.props.customData.title;\n    if(sTitle != rTitle){\n    \tthis.setState({\n      \tcenterText: rTitle\n      })\n    }\n  }\n  changeTitle(e){\n  \tvar title = e.title;\n    this.setState({\n    \tcenterText: title\n    });\n  }\n   render = () => {\n       let _this = this;\n       return (\n         <div>\n         <ComplexHeader \n           data={{centerText: this.state.centerText,rightText:"\u65F6\u95F4"}} \n           backIsShow={true} \n           back={()=>{\n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }}\n           centerTime={this.props.customData && this.props.customData.value}\n           closeIsShow={false} \n           close={()=>{\n           \tvar handler = _this.props.customHandler;\n             if(handler){\n             \thandler({\n              \teventType : \'close\'\n              })\n             }\n           }}\n           timeChange={(e)=>{\n               console.log(\'change\',EAPI.isIOS());\n               if(EAPI.isIOS()){\n                 return;\n               }\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                  data:{\n                  \tvalue: e.target.value,\n                    len: this.props.customData && this.props.customData.len\n                  },\n                \teventType : \'change\'\n                })\n               }\n             }}\n           timeBlur={(e)=>{\n               console.log(\'blur\',EAPI.isIOS());\n               if(!EAPI.isIOS()){\n                 return;\n               }\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                  data:{\n                  \tvalue: e.target.value,\n                    len: this.props.customData && this.props.customData.len\n                  },\n                \teventType : \'change\'\n                })\n               }\n             }}\n           moreIsShow={this.state.titleName == "\u5E74\u5EA6\u4E8B\u4E1A\u90E8\u8FBE\u6210" ? true : this.state.moreLength ? this.state.titleLength : false}\n           hander={()=>{\n           \tvar evt = new Event(\'ysp-dialog-close\');\n             evt.value=\'\u6210\u4E86\';\n             window.dispatchEvent(evt);\n           }}\n           filterIsShow={true} \n           filter={()=>{\n             \tvar handler = this.props.customHandler;\n               if(handler){\n               \thandler({\n                \teventType:\'time\'\n                })\n               }\n             }}\n           time={(e)=>{\n               var evt = new Event(\'ysp-time-show\')\n               window.dispatchEvent(evt)\n             }}\n           />\n         </div>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.ComplexHeader, {\n          data: { centerText: _this2.state.centerText, rightText: "\u65F6\u95F4" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'back\'\n              });\n            }\n          },\n          centerTime: _this2.props.customData && _this2.props.customData.value,\n          closeIsShow: false,\n          close: function close() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'close\'\n              });\n            }\n          },\n          timeChange: function timeChange(e) {\n            console.log(\'change\', EAPI.isIOS());\n            if (EAPI.isIOS()) {\n              return;\n            }\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                data: {\n                  value: e.target.value,\n                  len: _this2.props.customData && _this2.props.customData.len\n                },\n                eventType: \'change\'\n              });\n            }\n          },\n          timeBlur: function timeBlur(e) {\n            console.log(\'blur\', EAPI.isIOS());\n            if (!EAPI.isIOS()) {\n              return;\n            }\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                data: {\n                  value: e.target.value,\n                  len: _this2.props.customData && _this2.props.customData.len\n                },\n                eventType: \'change\'\n              });\n            }\n          },\n          moreIsShow: _this2.state.titleName == "\u5E74\u5EA6\u4E8B\u4E1A\u90E8\u8FBE\u6210" ? true : _this2.state.moreLength ? _this2.state.titleLength : false,\n          hander: function hander() {\n            var evt = new Event(\'ysp-dialog-close\');\n            evt.value = \'\u6210\u4E86\';\n            window.dispatchEvent(evt);\n          },\n          filterIsShow: true,\n          filter: function filter() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'time\'\n              });\n            }\n          },\n          time: function time(e) {\n            var evt = new Event(\'ysp-time-show\');\n            window.dispatchEvent(evt);\n          }\n        })\n      );\n    };\n\n    _this2.state = {\n      centerText: "\u9500\u552E\u8FBE\u6210",\n      moreLength: props.customData.moreLength,\n      flag: props.customData.flag,\n      titleLength: props.customData.titleLength,\n      titleName: props.customData.titleName\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        moreLength: nextProps.customData.moreLength,\n        flag: nextProps.customData.flag,\n        titleLength: nextProps.customData.titleLength,\n        titleName: nextProps.customData.titleName\n      });\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      window.addEventListener(\'ysp-change-title\', this.changeTitle.bind(this), false);\n      this.setState({\n        centerText: this.props.customData.title\n      });\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      var sTitle = this.state.centerText;\n      var rTitle = this.props.customData.title;\n      if (sTitle != rTitle) {\n        this.setState({\n          centerText: rTitle\n        });\n      }\n    }\n  }, {\n    key: \'changeTitle\',\n    value: function changeTitle(e) {\n      var title = e.title;\n      this.setState({\n        centerText: title\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control89_EwPocV: function (elem) {
      if (!elem) {
        return;
      }var data = [];var ths = elem.querySelectorAll("th");for (var i = 0; i < ths.length; i++) {
        var obj = {};var title = ths[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销量" == title || "实际销售额" == title || "销量达成率" == title || "销售额达成率" == title || "实际销量总计" == title || "实际销售总计" == title) {
          obj.title = title;data.push(obj);
        }
      }return data;
    },
    doAction_uiControl65_OItCfI: function (data, elem) {
      var eventType = data.eventType;var customData = data.customData;var index = +customData;if (eventType == 'click') {
        var titleBtns = elem.querySelectorAll("th");if (0 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销量" == title || "实际销量总计" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (1 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("实际销售额" == title || "实际销售总计" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (2 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("销量达成率" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }if (3 == index) {
          for (var i = 0; i < titleBtns.length; i++) {
            var title = titleBtns[i].querySelector(".ui-jqgrid-sortable").textContent;if ("销售额达成率" == title) {
              titleBtns[i].querySelector(".ui-jqgrid-sortable").click();
            }
          }
        }
      }
    },
    getTemplate_uiControl65_OItCfI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  handleClick: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n    \n    target.classList.add("active");\n  \tvar _broNode = target.parentNode.childNodes;\n    var _broNodeLen = _broNode.length;\n    \n    for(var i=0; i<_broNodeLen; i++){\n      var _asc = _broNode[i].querySelector(".ui-asc");\n      var _desc = _broNode[i].querySelector(".ui-desc");\n      \n      if(i == index){\n        if(_asc.classList.contains(\'ui-disabled\')==true){\n\u3000\u3000\u3000\u3000\t\t_asc.classList.remove("ui-disabled");\n      \t\t _desc.classList.add("ui-disabled");\n      \t}else{\n        \t_asc.classList.add("ui-disabled");\n      \t\t_desc.classList.remove("ui-disabled");\n        }\n      }else{\n        _broNode[i].classList.remove("active");\n      \t_asc.classList.add("ui-disabled");\n      \t_desc.classList.add("ui-disabled");\n      }\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var titleBtn = data.map(function(d,i){\n      return (\n        <div className="ysp-table-titleItem" \n          onClick={_this.handleClick.bind(_this)} data-index={i}>\n          {data[i].title == "\u5B9E\u9645\u9500\u91CF\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u91CF" : data[i].title == "\u5B9E\u9645\u9500\u552E\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u552E\u989D" : data[i].title}\n          <span className="ysp-s-ico">\n            <span className="ui-asc ui-disabled"></span>\n            <span className="ui-desc ui-disabled"></span>\n          </span>\n        </div>\n      )\n    });\n    \n    return (\n      <div className="ysp-table-titles">\n        {titleBtn}\n      </div>\n    )\n  }\n})';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n\n    target.classList.add("active");\n    var _broNode = target.parentNode.childNodes;\n    var _broNodeLen = _broNode.length;\n\n    for (var i = 0; i < _broNodeLen; i++) {\n      var _asc = _broNode[i].querySelector(".ui-asc");\n      var _desc = _broNode[i].querySelector(".ui-desc");\n\n      if (i == index) {\n        if (_asc.classList.contains(\'ui-disabled\') == true) {\n          _asc.classList.remove("ui-disabled");\n          _desc.classList.add("ui-disabled");\n        } else {\n          _asc.classList.add("ui-disabled");\n          _desc.classList.remove("ui-disabled");\n        }\n      } else {\n        _broNode[i].classList.remove("active");\n        _asc.classList.add("ui-disabled");\n        _desc.classList.add("ui-disabled");\n      }\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var titleBtn = data.map(function (d, i) {\n      return React.createElement(\n        "div",\n        { className: "ysp-table-titleItem",\n          onClick: _this.handleClick.bind(_this), "data-index": i },\n        data[i].title == "\u5B9E\u9645\u9500\u91CF\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u91CF" : data[i].title == "\u5B9E\u9645\u9500\u552E\u603B\u8BA1" ? "\u5B9E\u9645\u9500\u552E\u989D" : data[i].title,\n        React.createElement(\n          "span",\n          { className: "ysp-s-ico" },\n          React.createElement("span", { className: "ui-asc ui-disabled" }),\n          React.createElement("span", { className: "ui-desc ui-disabled" })\n        )\n      );\n    });\n\n    return React.createElement(\n      "div",\n      { className: "ysp-table-titles" },\n      titleBtn\n    );\n  }\n});';
    },

    getData_control124_1ZAE1L: function (elem) {
      if (!elem) {
        return;
      }var data = [];var tds = elem.querySelectorAll("td");var obj = {};for (var i = 1; i < tds.length; i++) {
        var _string = tds[i].getAttribute("aria-describedby");var _index = _string.lastIndexOf('_');var _str = _string.substring(_index + 1);var _textContent = tds[i].textContent;switch (_str) {case "targetSalesCount":
            obj.targetSalesCount = _textContent.trim();break;case "realSalesCount":
            obj.realSalesCount = _textContent.trim();break;case "targetSalesAmount":
            obj.targetSalesAmount = _textContent.trim();break;case "realSalesAmount":
            obj.realSalesAmount = _textContent.trim();break;case "salesCountPercent":
            obj.salesCountPercent = parseFloat(_textContent.trim());break;case "salesAmountPercent":
            obj.salesAmountPercent = parseFloat(_textContent.trim());break;}
      }data.push(obj);return data;
    },
    doAction_uiControl114_XrbJwG: function (data, elem) {},
    getTemplate_uiControl114_XrbJwG: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lists = data.map(function(d,i){\n      return (\n        <div>\n          <h5 className="title"><i class="icon"></i><span>\u603B\u8BA1</span></h5>\n          <ul>\n            <li><span>\u76EE\u6807\u9500\u91CF</span><b>{data[i].targetSalesCount}</b></li>\n            <li><span>\u76EE\u6807\u9500\u552E\u989D</span><b>{data[i].targetSalesAmount}</b></li>\n            <li><span>\u5B9E\u9645\u9500\u91CF</span><b>{data[i].realSalesCount}</b></li>\n            <li><span>\u5B9E\u9645\u9500\u552E\u989D</span><b>{data[i].realSalesAmount}</b></li>\n            <li><span>\u9500\u91CF\u8FBE\u6210\u7387</span><b>{data[i].salesCountPercent}%</b></li>\n            <li><span>\u9500\u552E\u989D\u8FBE\u6210</span><b>{data[i].salesAmountPercent}%</b></li>\n          </ul>\n        </div>\n      )\n    });\n    \n    return (\n      <div className="ysp-tableList-boxSum">\n        {lists}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    var lists = data.map(function (d, i) {\n      return React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "h5",\n          { className: "title" },\n          React.createElement("i", { "class": "icon" }),\n          React.createElement(\n            "span",\n            null,\n            "\\u603B\\u8BA1"\n          )\n        ),\n        React.createElement(\n          "ul",\n          null,\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u76EE\\u6807\\u9500\\u91CF"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].targetSalesCount\n            )\n          ),\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u76EE\\u6807\\u9500\\u552E\\u989D"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].targetSalesAmount\n            )\n          ),\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u5B9E\\u9645\\u9500\\u91CF"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].realSalesCount\n            )\n          ),\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u5B9E\\u9645\\u9500\\u552E\\u989D"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].realSalesAmount\n            )\n          ),\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u9500\\u91CF\\u8FBE\\u6210\\u7387"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].salesCountPercent,\n              "%"\n            )\n          ),\n          React.createElement(\n            "li",\n            null,\n            React.createElement(\n              "span",\n              null,\n              "\\u9500\\u552E\\u989D\\u8FBE\\u6210"\n            ),\n            React.createElement(\n              "b",\n              null,\n              data[i].salesAmountPercent,\n              "%"\n            )\n          )\n        )\n      );\n    });\n\n    return React.createElement(\n      "div",\n      { className: "ysp-tableList-boxSum" },\n      lists\n    );\n  }\n});';
    },

    getData_control275_2EgUIJ: function (elem) {
      if (elem) {
        var data = { dataLabel: [], flag: [], flags: [] };var a_s = elem.querySelector('#tab-head').querySelectorAll("li");for (var i = 0; i < a_s.length; i++) {
          var asText = a_s[i].textContent;if (asText.indexOf("销售报表") == -1) {
            data.dataLabel.push([asText]);
          }
        }return data;
      }return [];
    },
    doAction_uiControl248_nQhTnd: function (data, elem) {
      if (data.eventType == 'click') {
        var index = +data.dataCustom.index;var lis = elem.querySelector('#tab-head').querySelectorAll("li");lis[index].click();
      }
    },
    getTemplate_uiControl248_nQhTnd: function () {
      var selfTemplate = 'import {Component} from \'react\';\nimport {Overlay} from \'ysp-custom-components\';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n    \topen:false\n    }\n      window.addEventListener(\'ysp-dialog-close\',this.toogleSwitch.bind(this),false)\n  }\n  componentWillUnmount(){\n  \t\twindow.removeEventListener(\'ysp-dialog-close\',this.toogleSwitch.bind(this),false)\n  }\n  \n  toogleSwitch(){\n  \tthis.setState({\n    \topen:!this.state.open\n    })\n  }\n  render=()=>{\n    var data = this.props.customData && this.props.customData.dataLabel;\n    var flag = this.props.customData && this.props.customData.flag;\n    var flags = this.props.customData && this.props.customData.flags;\n    let _this = this;\n  \treturn (\n      <div className=\'.ysp-dialog-hander-op\'  style={{display:this.state.open ? \'block\':\'none\'}}>\n        <Overlay/>\n        <div className= \'ysp-dialog-hander\'>\n           <ul>\n          {data && data.map((d,i)=>{  \n            return(\n                <li data-index={i} onClick={(e)=>{\n                  var target = e.target;\n                  var index = target.dataset.index;\n                  var handler = this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:{\n                        index : index,\n                        flag : flag,\n                        flags : flags\n                      },\n                      eventType:\'click\'\n                    });\n                  }\n                  _this.toogleSwitch();\n                  var evt = new Event(\'ysp-change-title\');\n                  evt.title = e.target.textContent;\n                  window.dispatchEvent(evt);\n                }}>{d}</li>\n            )})}\n            </ul>\n          <button onClick={()=>{\n              _this.toogleSwitch();\n              }\n            }>\u53D6\u6D88</button>\n        </div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.render = function () {\n      var data = _this2.props.customData && _this2.props.customData.dataLabel;\n      var flag = _this2.props.customData && _this2.props.customData.flag;\n      var flags = _this2.props.customData && _this2.props.customData.flags;\n      var _this = _this2;\n      return React.createElement(\n        \'div\',\n        { className: \'.ysp-dialog-hander-op\', style: { display: _this2.state.open ? \'block\' : \'none\' } },\n        React.createElement(_yspCustomComponents.Overlay, null),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-dialog-hander\' },\n          React.createElement(\n            \'ul\',\n            null,\n            data && data.map(function (d, i) {\n              return React.createElement(\n                \'li\',\n                { \'data-index\': i, onClick: function onClick(e) {\n                    var target = e.target;\n                    var index = target.dataset.index;\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                      handler({\n                        data: {\n                          index: index,\n                          flag: flag,\n                          flags: flags\n                        },\n                        eventType: \'click\'\n                      });\n                    }\n                    _this.toogleSwitch();\n                    var evt = new Event(\'ysp-change-title\');\n                    evt.title = e.target.textContent;\n                    window.dispatchEvent(evt);\n                  } },\n                d\n              );\n            })\n          ),\n          React.createElement(\n            \'button\',\n            { onClick: function onClick() {\n                _this.toogleSwitch();\n              } },\n            \'\\u53D6\\u6D88\'\n          )\n        )\n      );\n    };\n\n    _this2.state = {\n      open: false\n    };\n    window.addEventListener(\'ysp-dialog-close\', _this2.toogleSwitch.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillUnmount\',\n    value: function componentWillUnmount() {\n      window.removeEventListener(\'ysp-dialog-close\', this.toogleSwitch.bind(this), false);\n    }\n  }, {\n    key: \'toogleSwitch\',\n    value: function toogleSwitch() {\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control253_wPBgTz: function (elem) {
      if (!elem) {
        return;
      }var dataMonth = elem.ownerDocument.querySelector('#searchHead') && elem.ownerDocument.querySelector('#searchHead').querySelector('input[name="filter_month"]');if (dataMonth) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl173_btOVow: function (data, elem) {
      if (data.eventType == 'upValue') {
        var val = data.dataCustom;var valLength = val.length;if (4 != valLength) {
          //月度销售达成
          var monthLength = +val.substr(5);var inputMonth = elem.querySelector("#searchHead").querySelector('input[name="filter_month"]');inputMonth.focus();elem.querySelector('div[class="datepicker-months"]').querySelector("tbody").querySelectorAll("span")[monthLength - 1].click();
        } else {
          //年度销售达成
          var inputYear = elem.querySelector("#searchHead").querySelector('input[name="filter_year"]');inputYear.focus();inputYear.value = data.dataCustom;var queryBtnSearch = elem.ownerDocument.querySelector("#queryBtnSearch");queryBtnSearch.click();
        } //inputMonth.value = data.dataCustom;
        //var queryBtnSearch = elem.ownerDocument.querySelector("#queryBtnSearch");
        //queryBtnSearch.click();
      }
    },
    getTemplate_uiControl173_btOVow: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      mouth : true,\n      day : false,\n      show : false,\n      data : props.customData\n    }\n    window.addEventListener('ysp-time-show',this.toggle.bind(this),false)\n  }\n  componentDidMount(){\n    if(this.props.customData){\n      this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }else{\n      this.state.show ? this.stylesId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }\n  componentDidUpdate(){\n    if(this.props.customData){\n      this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }else{\n      this.state.show ? this.stylesId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }\n  styleId(){\n    var doc = this.refs.time;\n    if(doc){\n      doc.querySelector('#year').style.width = '50%';\n      doc.querySelector('#mouth').style.width = '50%';\n      \n      // if(this.state.data && !this.state.day  && !!this.state.mouth){\n      // \tdoc.querySelector('#year').style.width = '50%';\n      // \tdoc.querySelector('#mouth').style.width = '50%';\n      // }\n      // if(!this.state.data){\n      //   doc.querySelector('#year').style.width = '50%';\n      // \tdoc.querySelector('#mouth').style.width = '50%';\n      // }\n      // if(this.state.data && !this.state.mouth && !this.state.day){\n      //   doc.querySelector('#year').style.width = '100%';\n      // }\n      // if(!this.state.data){\n      //   doc.querySelector('#mouth').removeAttribute('style');\n      //   doc.querySelector('#year').style.width = '100%';\n      // }\n    }\n  }\n  stylesId(){\n    var doc = this.refs.time;\n    if(doc){\n      doc.querySelector('#year').style.width = '100%';\n    }\n  }\n  \n  toggle(){\n    this.setState({\n      show : !this.state.show\n    })\n  }\n  activeValue(even){\n    var doc = even.parentElement.nextElementSibling;\n    if(this.props.customData){\n      var year = doc.querySelector('#year').querySelector('.active').textContent;\n    var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n\t\tmouth = mouth < 10 ? '0' + mouth : mouth; \n  \tday = day && day < 10 ? '0' + day : day;\n    var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n      return time;\n    }else{\n      return doc.querySelector('#year').querySelector('.active').textContent;\n    }\n    \n  }\n  upValue(e){\n    var handler = this.props.customHandler;\n    var value = this.activeValue(e.target);\n    if(handler){\n      handler({\n        data : value,\n        eventType : 'upValue'\n      })\n    }\n    this.setState({\n      show : false\n    })\n  }\n  render(){\n    var _this = this;\n    return(\n      <div>{this.state.show && \n        <div className='moudle-time' ref='time'>\n          <div className = 'date-time'>\n            <SaleReachCalendar \n              mouth = {_this.state.mouth}\n              day = {_this.state.day}\n              upValue = {_this.upValue.bind(_this)}\n              show = {(e)=>{\n                _this.toggle();\n              }}\n              y = {this.props.customData}\n            />\n          </div>\n        </div>}\n      </div>\n    )\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      mouth: true,\n      day: false,\n      show: false,\n      data: props.customData\n    };\n    window.addEventListener(\'ysp-time-show\', _this2.toggle.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      if (this.props.customData) {\n        this.state.show ? this.styleId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      } else {\n        this.state.show ? this.stylesId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      }\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      if (this.props.customData) {\n        this.state.show ? this.styleId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      } else {\n        this.state.show ? this.stylesId() : console.log(\'\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462\');\n      }\n    }\n  }, {\n    key: \'styleId\',\n    value: function styleId() {\n      var doc = this.refs.time;\n      if (doc) {\n        doc.querySelector(\'#year\').style.width = \'50%\';\n        doc.querySelector(\'#mouth\').style.width = \'50%\';\n\n        // if(this.state.data && !this.state.day  && !!this.state.mouth){\n        // \tdoc.querySelector(\'#year\').style.width = \'50%\';\n        // \tdoc.querySelector(\'#mouth\').style.width = \'50%\';\n        // }\n        // if(!this.state.data){\n        //   doc.querySelector(\'#year\').style.width = \'50%\';\n        // \tdoc.querySelector(\'#mouth\').style.width = \'50%\';\n        // }\n        // if(this.state.data && !this.state.mouth && !this.state.day){\n        //   doc.querySelector(\'#year\').style.width = \'100%\';\n        // }\n        // if(!this.state.data){\n        //   doc.querySelector(\'#mouth\').removeAttribute(\'style\');\n        //   doc.querySelector(\'#year\').style.width = \'100%\';\n        // }\n      }\n    }\n  }, {\n    key: \'stylesId\',\n    value: function stylesId() {\n      var doc = this.refs.time;\n      if (doc) {\n        doc.querySelector(\'#year\').style.width = \'100%\';\n      }\n    }\n  }, {\n    key: \'toggle\',\n    value: function toggle() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: \'activeValue\',\n    value: function activeValue(even) {\n      var doc = even.parentElement.nextElementSibling;\n      if (this.props.customData) {\n        var year = doc.querySelector(\'#year\').querySelector(\'.active\').textContent;\n        var mouth = this.state.mouth && doc.querySelector(\'#mouth\').querySelector(\'.active\').textContent;\n        var day = this.state.day && doc.querySelector(\'#day\').querySelector(\'.active\').textContent;\n        mouth = mouth < 10 ? \'0\' + mouth : mouth;\n        day = day && day < 10 ? \'0\' + day : day;\n        var time = day ? year + \'-\' + mouth + \'-\' + day : mouth ? year + \'-\' + mouth : year;\n        return time;\n      } else {\n        return doc.querySelector(\'#year\').querySelector(\'.active\').textContent;\n      }\n    }\n  }, {\n    key: \'upValue\',\n    value: function upValue(e) {\n      var handler = this.props.customHandler;\n      var value = this.activeValue(e.target);\n      if (handler) {\n        handler({\n          data: value,\n          eventType: \'upValue\'\n        });\n      }\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        this.state.show && React.createElement(\n          \'div\',\n          { className: \'moudle-time\', ref: \'time\' },\n          React.createElement(\n            \'div\',\n            { className: \'date-time\' },\n            React.createElement(_yspCustomComponents.SaleReachCalendar, {\n              mouth: _this.state.mouth,\n              day: _this.state.day,\n              upValue: _this.upValue.bind(_this),\n              show: function show(e) {\n                _this.toggle();\n              },\n              y: this.props.customData\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control349_5u80Vy: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var trs = elem.querySelector("#table_list_1").querySelectorAll("tr");var reportId = elem.querySelector('input[name="reportId"]').value;var titleIdx = null;var deepFlag = true;var strFuc = function (_obj) {
          var _string = _obj.getAttribute("aria-describedby");var _index = _string.lastIndexOf('_');var _str = _string.substring(_index + 1);return _str;
        };if (!titleIdx) {
          var _tds = trs[1].querySelectorAll("td");var a, b, c, d, e, f, g, h, l;if ("report34-2" == reportId || "report34-1" == reportId || "report49" == reportId) {
            //销售代表（客户与门店达成）、（产品销售达成）
            if ("report34-2" == reportId || "report34-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  a = n;
                }
              }
            } else if ("report49" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  a = n;
                }
              }
            }
          } else if ("report34" == reportId || "report33" == reportId || "report33-1" == reportId || "report33-1-1" == reportId || "report48" == reportId) {
            //办事处主任 （分公司销售人员达成）、（办事处事业部达成）
            if ("report34" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  b = n;
                }
              }
            } else if ("report33" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("department" == _str) {
                  b = n;
                }
              }
            } else if ("report33-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  b = n;
                }
              }
            } else if ("report33-1-1" == reportId || "report48" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  b = n;
                }
              }
            }
          } else if ("report15" == reportId || "report16" == reportId || "report16-1" == reportId) {
            //分总 分公司事业部达成 
            if ("report15" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("department" == _str) {
                  e = n;
                }
              }
            } else if ("report16" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  e = n;
                }
              }
            } else if ("report16-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  e = n;
                }
              }
            }
          } else if ("report20" == reportId || "report46" == reportId) {
            //分总 分公司项目达成、产品销售达成
            if ("report20" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  f = n;
                }
              }
            } else if ("report46" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  f = n;
                }
              }
            }
          } else if ("report17" == reportId || "report18" == reportId || "report18-1" == reportId || "report19" == reportId) {
            //分总 分公司办事处销售达成
            if ("report17" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                  g = n;
                }
              }
            } else if ("report18" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  g = n;
                }
              }
            } else if ("report18-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  g = n;
                }
              }
            } else if ("report19" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  g = n;
                }
              }
            }
          } else if ("report29" == reportId || "report29-1" == reportId || "report45" == reportId) {
            //产品经理 事业部分项目达成、产品销售达成
            if ("report29" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  h = n;
                }
              }
            } else if ("report29-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  h = n;
                }
              }
            } else if ("report45" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  h = n;
                }
              }
            }
          } else if ("report31" == reportId || "report31-1" == reportId || "report31-1-1" == reportId || "report31-1-1-1" == reportId) {
            //产品经理 分公司项目达成
            if ("report31" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                  h = n;
                }
              }
            } else if ("report31-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                  h = n;
                }
              }
            } else if ("report31-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  h = n;
                }
              }
            } else if ("report31-1-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  h = n;
                }
              }
            }
          } else if ("report1" == reportId || "report1-1" == reportId || "report1-1-1" == reportId || "report1-2" == reportId || "report1-2-1" == reportId || "report1-2-1-1" == reportId || "report1-2-1-1-1" == reportId || "report4" == reportId || "report4-1" == reportId || "report43" == reportId || "report2" == reportId || "report2-1" == reportId || "report2-1-1" == reportId || "report2-1-1-1" == reportId || "report2-2" == reportId || "report2-2-1" == reportId || "report2-2-1-1" == reportId) {
            //总部领导 事业部销售计划总体达成 、事业部销售计划分项目达成、事业部销售计划分渠道达成、分公司销售计划达成
            if ("report1" == reportId || "report2-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("department" == _str) {
                  l = n;
                }
              }
            } else if ("report1-1" == reportId || "report4" == reportId || "report2-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  l = n;
                }
              }
            } else if ("report1-1-1" == reportId || "report4-1" == reportId || "report43" == reportId || "report2-1-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  l = n;
                }
              }
            } else if ("report1-2" == reportId || "report2" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                  l = n;
                }
              }
            } else if ("report1-2-1" == reportId || "report2-2" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                  l = n;
                }
              }
            } else if ("report1-2-1-1" == reportId || "report2-2-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  l = n;
                }
              }
            } else if ("report1-2-1-1-1" == reportId || "report2-2-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  l = n;
                }
              }
            }
          } else if ("report7" == reportId || "report8" == reportId || "report44" == reportId || "report9" == reportId || "report10" == reportId || "report10-1" == reportId || "report9-1" == reportId || "report9-1-1" == reportId || "report9-1-1-1" == reportId) {
            //事业部总经理 事业部分项目达成、产品销售达成、分公司事业部达成
            if ("report7" == reportId || "report10" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  l = n;
                }
              }
            } else if ("report8" == reportId || "report44" == reportId || "report10-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  l = n;
                }
              }
            } else if ("report9" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                  l = n;
                }
              }
            } else if ("report9-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                  l = n;
                }
              }
            } else if ("report9-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  l = n;
                }
              }
            } else if ("report9-1-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  l = n;
                }
              }
            }
          } else if ("report23" == reportId || "report23-1" == reportId || "report23-1-1" == reportId || "report27" == reportId || "report24" == reportId || "report22" == reportId || "report22-1" == reportId) {
            //品牌经理 办事处项目达成、分公司销售人员达成、分公司分项目达成
            if ("report23" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("officeName" == _str) {
                  l = n;
                }
              }
            } else if ("report23-1" == reportId || "report24" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("salerName" == _str) {
                  l = n;
                }
              }
            } else if ("report23-1-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("customerName" == _str) {
                  l = n;
                }
              }
            } else if ("report27" == reportId || "report22-1" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("modelName" == _str) {
                  l = n;
                }
              }
            } else if ("report22" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("projectName" == _str) {
                  l = n;
                }
              }
            }
          } else if ("report5" == reportId || "report5-1" == reportId || "report6" == reportId || "report21" == reportId || "report32" == reportId || "report11" == reportId || "report28" == reportId) {
            // 总部领导 年度事业部达成、年度事业部达成
            // 分总 年度分公司事业部达成
            // 产品经理 年度分公司事业部达成
            // 品牌经理 事业部分公司达成
            // 事业部总经理 年度分公司事业部达成
            // 销售代表没有年度达成
            // 办事处主任没有年度达成
            if ("report5" == reportId || "report21" == reportId || "report28" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("department" == _str) {
                  l = n;
                }
              }
            } else if ("report5-1" == reportId || "report6" == reportId || "report32" == reportId || "report11" == reportId) {
              for (var n = 0; n < _tds.length; n++) {
                var _str = strFuc(_tds[n]);if ("branchName" == _str) {
                  l = n;
                }
              }
            }
          } else {//       for (var n = 0; n < _tds.length; n++) {
            //         var _str = strFuc(_tds[n]);
            //         switch (_str) {
            //           case "projectSeries":
            //             a = n;
            //             break;
            //           case "modelName":
            //             b = n;
            //             break;
            //           case "projectName":
            //             c = n;
            //             break;
            //           case "department":
            //             d = n;
            //             break;
            //           case "branchName":
            //             e = n;
            //             break;
            //         }
            //       }
          }if (a) {
            titleIdx = a;
          } else if (b) {
            titleIdx = b;
          } else if (c) {
            titleIdx = c;
          } else if (d) {
            titleIdx = d;
          } else if (e) {
            titleIdx = e;
          } else if (f) {
            titleIdx = f;
          } else if (g) {
            titleIdx = g;
          } else if (h) {
            titleIdx = h;
          } else if (l) {
            titleIdx = l;
          }if (!_tds[titleIdx].querySelector("a")) {
            deepFlag = false;
          }
        }for (var i = 1; i < trs.length; i++) {
          var tds = trs[i].querySelectorAll("td");var obj = {};if (!trs[i].querySelectorAll('a')) {
            obj.deepFlag = false;
          } else {
            obj.deepFlag = deepFlag;
          }for (var j = 0; j < tds.length; j++) {
            var _str = strFuc(tds[j]);var _textContent = tds[j].textContent.trim();if ("report34-2" == reportId || "report34-1" == reportId || "report18-1" == reportId || "report31-1-1-1" == reportId || "report1-2-1-1-1" == reportId || "report23-1-1" == reportId || "report2-2-1-1" == reportId || "report9-1-1-1" == reportId) {
              var titles = tds[titleIdx].textContent.trim();if ("" == titles) {
                titles = tds[titleIdx + 1].textContent.trim();
              }obj.title = titles;
            } else if ("report49" == reportId || "report33-1-1" == reportId || "report48" == reportId || "report16-1" == reportId || "report46" == reportId || "report29-1" == reportId || "report45" == reportId || "report1-1-1" == reportId || "report4-1" == reportId || "report43" == reportId || "report44" == reportId) {
              var titles = tds[titleIdx].textContent.trim();if ("" == titles) {
                titles = tds[titleIdx - 2].textContent.trim();if ("" == titles) {
                  titles = tds[titleIdx - 4].textContent.trim();
                }
              }obj.title = titles;
            } else if ("report2-1-1-1" == reportId || "report8" == reportId || "report10-1" == reportId || "report27" == reportId || "report22-1" == reportId) {
              var titles = tds[titleIdx].textContent.trim();if ("" == titles) {
                titles = tds[titleIdx - 2].textContent.trim();if ("" == titles) {
                  titles = tds[titleIdx - 5].textContent.trim();
                }
              }obj.title = titles;
            } else {
              obj.title = tds[titleIdx].textContent.trim();
            }switch (_str) {case "targetSalesCount":
                obj.targetSalesCount = _textContent;break;case "realSalesCount":
                obj.realSalesCount = _textContent;break;case "targetSalesAmount":
                obj.targetSalesAmount = _textContent;break;case "realSalesAmount":
                obj.realSalesAmount = _textContent;break;case "salesCountPercent":
                obj.salesCountPercent = parseFloat(_textContent).toFixed(2);break;case "salesAmountPercent":
                obj.salesAmountPercent = parseFloat(_textContent).toFixed(2);break;case "salesCountBigCustomer":
                obj.salesCountBigCustomer = parseFloat(_textContent).toFixed(2);break;case "salesAmountBigCustomer":
                obj.salesAmountBigCustomer = parseFloat(_textContent).toFixed(2);break;case "rank":
                var rank_a = tds[j].querySelector("a");obj.rank = {};if (rank_a) {
                  obj.rank.rankFlag = true;var tempData = rank_a.getAttribute("onmouseover");var tempStart = tempData.indexOf("[{");var tempEnd = tempData.indexOf("}]");var dataArray = JSON.parse(tempData.substring(tempStart, tempEnd + 2));obj.rank.data = dataArray;
                } else {
                  obj.rank.rankFlag = false;
                }if (rank_a) {
                  //判断排名是否可以点击，可点击的显示 不可点击的不显示
                  obj.rank.num = parseInt(_textContent);
                } else {
                  obj.rank.num = "";
                }break;}
          }data.push(obj);
        }return data;
      }
    },
    doAction_uiControl269_1Mcp0r: function (data, elem) {
      if (!elem) {
        return;
      }var trs = elem.querySelector("#table_list_1").querySelectorAll("tr");if (data.eventType === 'click') {
        var index = +data.customData + 1;if (!trs[index].querySelector('a')) {
          console.warn('到最底层了，不能在钻取了！'); // alert('已无法钻取');
          return;
        }var btn = trs[index].querySelector('a');btn.click();
      }
    },
    getTemplate_uiControl269_1Mcp0r: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Dialog,\n  ComplexHeader\n} from \'ysp-custom-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    \tclose: true,\n      idx: null\n    } \n  }\n  \n  handleClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.currentTarget;\n    var index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  }\n  \n  handleRank(e){\n    this.setState({\n      close: !this.state.close,\n      idx: e.target.dataset.index\n    });\n  }\n  \n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    var lists;\n    var a = 0;\n    \t{data?\n      lists = data.map(function(d,i){\n        return (\n            <div className="item">\n              <div className={d.deepFlag?"left":"left wd"}>\n                <h5 className="title">\n                  {\n                    d.rank && d.rank.num !="" ? \n                      <i className={d.rank.num>3?\'rank-else\':\'rank-top\'} onClick={d.rank.rankFlag ?_this.handleRank.bind(_this) : \'\'} data-index={i}>\n                        {d.rank.num}\n                      </i> : \'\'\n                  }\n                  {d.title?d.title:d.projectSeries}</h5>\n                <ul>\n                  <li><span>\u76EE\u6807\u9500\u91CF</span><b>{d.targetSalesCount}</b></li>\n                  <li><span>\u5B9E\u9645\u9500\u91CF</span><b>{d.realSalesCount}</b>\n                    {\n                      d.salesCountBigCustomer !=null || d.salesCountBigCustomer !=undefined ? \n                        <span>\n                        \t<span style={{marginRight:0}}>\n                            (\u5927\u5BA2\u6237\uFF1A\n                          </span>\n                          <b>\n                            {d.salesCountBigCustomer})\n                          </b>\n                        </span> : \'\'\n                    }\n                    </li>\n                  <li><span>\u76EE\u6807\u9500\u552E\u989D</span><b>{d.targetSalesAmount}</b></li>\n                  <li><span>\u5B9E\u9645\u9500\u552E\u989D</span><b>{d.realSalesAmount}</b>\n                    {\n                      d.salesAmountBigCustomer!=null || d.salesAmountBigCustomer!=undefined ?\n                        <span>\n                        \t<span style={{marginRight:0}}>\n                            (\u5927\u5BA2\u6237\uFF1A\n                          </span>\n                          <b> \n                            {d.salesAmountBigCustomer})\n                          </b>\n                        </span>\n                         : \'\'\n                    }\n                    \n                    \n                  </li>\n                </ul>\n              </div>\n              <div className={d.deepFlag?"right":"right mg0"}>\n                  <div className="top">\n                    <div><em>{d.salesCountPercent}</em>%</div>\n                    <h5>\u9500\u91CF\u8FBE\u6210\u7387</h5>\n                  </div>\n                  <div className="btm">\n                      <div><em>{d.salesAmountPercent}</em>%</div>\n                      <h5>\u9500\u91CF\u989D\u8FBE\u6210\u7387</h5>\n                    </div>\n              </div>\n               { d.deepFlag?<i class="ysp-cardlist-icon" onClick={_this.handleClick.bind(_this)} data-index={i}></i>:"" }\n\n           \t\t { d.rank && d.rank.data?\n              \t<DialogRank \n                  dataIndex = {i} \n                  customData = {d.rank} \n                  close = {_this.state.close} \n                  openIndex = {_this.state.idx}\n                  handleRank = {_this.handleRank.bind(_this)}\n                />:\'\'}\n            </div>\n        )  \n      })\n      :\n \xA0 \xA0 \xA0lists = <div className="ysp-no-datass" \n                style={{\'marginLeft\':\'-15px\',\'background\':\'#F0EFF5\'}}>\n                <div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n              </div>\n      }\n\n    return (\n      <div className="ysp-tableLists-box">\n        {lists}\n      </div>\n    )\n  }\n};\n\n// DialogRank\nclass DialogRank extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  \n  render() {\n    var data = this.props.customData;\n    var dataLists = data.data;\n    var index = data.num;\n    var dataMain = data.data[index-1];\n    var _this = this;\n    var _close = true;\n    if(_this.props.dataIndex == _this.props.openIndex){\n      _close = false;\n    }else{\n      _close = true;\n    }\n    \n    // console.log(data);\n    return (\n      <Dialog close={_close} dataId={_this.props.dataIndex}>\n        <ComplexHeader \n           data={{centerText: "\u9500\u91CF\u8FBE\u6210\u6392\u540D",rightText:"\u65F6\u95F4"}} \n           backIsShow={true} \n           back={_this.props.handleRank}\n           centerTime={true}\n           closeIsShow={false} \n           filterIsShow={false} \n           />\n        <div className="ysp-rank-lists">\n          <div className="main">\n            <i className="rank-main">{dataMain.rank}</i>\n            <span className="title">{dataMain.branchName}</span>\n            <div className="infos">\n              \t<div><b>{parseFloat(dataMain.salesCountPercent)}</b>%</div>\n              \t<h5>\u9500\u91CF\u8FBE\u6210\u7387</h5>\n            </div>\n          </div>\n          \n          <div className="itemLists">\n            {\n              dataLists.map(function(d,i){\n                return (\n                \t<div className={i==index-1?\'item item-main\':\'item\'}>\n                    {\n                      <i className={i!=index-1?(d.rank>3?\'rank-else\':\'rank-top\'):\'rank-main\'}>{d.rank}</i>\n                    }\n                    <span className="title">{d.branchName}</span>\n                    <div className="infos">\n                        <div><b>{parseFloat(d.salesCountPercent)}</b>%</div>\n                        <h5>\u9500\u91CF\u8FBE\u6210\u7387</h5>\n                    </div>\n                  </div>  \n                )\n              })\n            }\n          </div>\n          \n        </div>\n      </Dialog>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      close: true,\n      idx: null\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'handleClick\',\n    value: function handleClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.currentTarget;\n      var index = target.dataset.index;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: index\n        });\n      }\n    }\n  }, {\n    key: \'handleRank\',\n    value: function handleRank(e) {\n      this.setState({\n        close: !this.state.close,\n        idx: e.target.dataset.index\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      var lists;\n      var a = 0;\n      {\n        data ? lists = data.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: \'item\' },\n            React.createElement(\n              \'div\',\n              { className: d.deepFlag ? "left" : "left wd" },\n              React.createElement(\n                \'h5\',\n                { className: \'title\' },\n                d.rank && d.rank.num != "" ? React.createElement(\n                  \'i\',\n                  { className: d.rank.num > 3 ? \'rank-else\' : \'rank-top\', onClick: d.rank.rankFlag ? _this.handleRank.bind(_this) : \'\', \'data-index\': i },\n                  d.rank.num\n                ) : \'\',\n                d.title ? d.title : d.projectSeries\n              ),\n              React.createElement(\n                \'ul\',\n                null,\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u76EE\\u6807\\u9500\\u91CF\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.targetSalesCount\n                  )\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u5B9E\\u9645\\u9500\\u91CF\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.realSalesCount\n                  ),\n                  d.salesCountBigCustomer != null || d.salesCountBigCustomer != undefined ? React.createElement(\n                    \'span\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u5927\\u5BA2\\u6237\\uFF1A\'\n                    ),\n                    React.createElement(\n                      \'b\',\n                      null,\n                      d.salesCountBigCustomer,\n                      \')\'\n                    )\n                  ) : \'\'\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u76EE\\u6807\\u9500\\u552E\\u989D\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.targetSalesAmount\n                  )\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u5B9E\\u9645\\u9500\\u552E\\u989D\'\n                  ),\n                  React.createElement(\n                    \'b\',\n                    null,\n                    d.realSalesAmount\n                  ),\n                  d.salesAmountBigCustomer != null || d.salesAmountBigCustomer != undefined ? React.createElement(\n                    \'span\',\n                    null,\n                    React.createElement(\n                      \'span\',\n                      { style: { marginRight: 0 } },\n                      \'(\\u5927\\u5BA2\\u6237\\uFF1A\'\n                    ),\n                    React.createElement(\n                      \'b\',\n                      null,\n                      d.salesAmountBigCustomer,\n                      \')\'\n                    )\n                  ) : \'\'\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: d.deepFlag ? "right" : "right mg0" },\n              React.createElement(\n                \'div\',\n                { className: \'top\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'em\',\n                    null,\n                    d.salesCountPercent\n                  ),\n                  \'%\'\n                ),\n                React.createElement(\n                  \'h5\',\n                  null,\n                  \'\\u9500\\u91CF\\u8FBE\\u6210\\u7387\'\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'btm\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'em\',\n                    null,\n                    d.salesAmountPercent\n                  ),\n                  \'%\'\n                ),\n                React.createElement(\n                  \'h5\',\n                  null,\n                  \'\\u9500\\u91CF\\u989D\\u8FBE\\u6210\\u7387\'\n                )\n              )\n            ),\n            d.deepFlag ? React.createElement(\'i\', { \'class\': \'ysp-cardlist-icon\', onClick: _this.handleClick.bind(_this), \'data-index\': i }) : "",\n            d.rank && d.rank.data ? React.createElement(DialogRank, {\n              dataIndex: i,\n              customData: d.rank,\n              close: _this.state.close,\n              openIndex: _this.state.idx,\n              handleRank: _this.handleRank.bind(_this)\n            }) : \'\'\n          );\n        }) : lists = React.createElement(\n          \'div\',\n          { className: \'ysp-no-datass\',\n            style: { \'marginLeft\': \'-15px\', \'background\': \'#F0EFF5\' } },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-tableLists-box\' },\n        lists\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;\n\n// DialogRank\n\nvar DialogRank = function (_React$Component2) {\n  _inherits(DialogRank, _React$Component2);\n\n  function DialogRank(props) {\n    _classCallCheck(this, DialogRank);\n\n    return _possibleConstructorReturn(this, (DialogRank.__proto__ || Object.getPrototypeOf(DialogRank)).call(this, props));\n  }\n\n  _createClass(DialogRank, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var dataLists = data.data;\n      var index = data.num;\n      var dataMain = data.data[index - 1];\n      var _this = this;\n      var _close = true;\n      if (_this.props.dataIndex == _this.props.openIndex) {\n        _close = false;\n      } else {\n        _close = true;\n      }\n\n      // console.log(data);\n      return React.createElement(\n        _yspCustomComponents.Dialog,\n        { close: _close, dataId: _this.props.dataIndex },\n        React.createElement(_yspCustomComponents.ComplexHeader, {\n          data: { centerText: "\u9500\u91CF\u8FBE\u6210\u6392\u540D", rightText: "\u65F6\u95F4" },\n          backIsShow: true,\n          back: _this.props.handleRank,\n          centerTime: true,\n          closeIsShow: false,\n          filterIsShow: false\n        }),\n        React.createElement(\n          \'div\',\n          { className: \'ysp-rank-lists\' },\n          React.createElement(\n            \'div\',\n            { className: \'main\' },\n            React.createElement(\n              \'i\',\n              { className: \'rank-main\' },\n              dataMain.rank\n            ),\n            React.createElement(\n              \'span\',\n              { className: \'title\' },\n              dataMain.branchName\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'infos\' },\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'b\',\n                  null,\n                  parseFloat(dataMain.salesCountPercent)\n                ),\n                \'%\'\n              ),\n              React.createElement(\n                \'h5\',\n                null,\n                \'\\u9500\\u91CF\\u8FBE\\u6210\\u7387\'\n              )\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'itemLists\' },\n            dataLists.map(function (d, i) {\n              return React.createElement(\n                \'div\',\n                { className: i == index - 1 ? \'item item-main\' : \'item\' },\n                React.createElement(\n                  \'i\',\n                  { className: i != index - 1 ? d.rank > 3 ? \'rank-else\' : \'rank-top\' : \'rank-main\' },\n                  d.rank\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: \'title\' },\n                  d.branchName\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'infos\' },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    React.createElement(\n                      \'b\',\n                      null,\n                      parseFloat(d.salesCountPercent)\n                    ),\n                    \'%\'\n                  ),\n                  React.createElement(\n                    \'h5\',\n                    null,\n                    \'\\u9500\\u91CF\\u8FBE\\u6210\\u7387\'\n                  )\n                )\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return DialogRank;\n}(React.Component);';
    }
  }, "businesHeadquartersDC");
})(window, ysp);