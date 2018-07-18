(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control578_U4Ub8v: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], date: [], flag: [] };var uls = elem.querySelector("ul");var lis = uls && uls.querySelectorAll("li");for (var i = 0; i < lis.length; i++) {
        var a = [];var b = [];var c = [];var title = lis[i].querySelector(".title").textContent.trim();var dates = lis[i].querySelector(".time").textContent.trim();var date = dates && dates.substr(0, 10);var flags = lis[i].querySelector(".title").querySelector("a").getAttribute("class");a.push(title);b.push(date);c.push(flags);data.title.push(a);data.date.push(b);data.flag.push(c);
      }return data;
    },
    doAction_uiControl578_GVCVlT: function (data, elem) {
      if ('click' == data.eventType) {
        var index = data.customData.index;var uls = elem.querySelector("ul");uls && uls.querySelectorAll("li")[index].querySelector('a').click();
      }
    },
    getTemplate_uiControl578_GVCVlT: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   constructor(props){\n   \t super(props);\n  }\n  handlerClick(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index: index\n        },\n        eventType: 'click'\n      })\n    }\n  }\n  render = () => {\n    var _this = this;\n    var data = this.props.customData;\n    var title = this.props.customData && this.props.customData.title  || [];\n    var date = this.props.customData && this.props.customData.date || [];\n    var flag = this.props.customData && this.props.customData.flag || [];\n    var _this = this;\n    return (\n      <div className=\"ysp-flash-more\">\n        {\n          title.map((items,index)=>{\n            return(\n            \t<div onClick={_this.handlerClick.bind(_this)}  data-index={index}>\n                <span onClick={_this.handlerClick.bind(_this)}  data-index={index} \n                  className={flag[index][0] == null ? \"\" : \"ysp-flash-text-color\"}>\n                  {items}\n                </span>\n                <span onClick={_this.handlerClick.bind(_this)}  data-index={index}>\n                  {date[index]}\n                </span>\n              </div>\n            );\n          })\n        }\n      </div>\n    )\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData;\n      var title = _this2.props.customData && _this2.props.customData.title || [];\n      var date = _this2.props.customData && _this2.props.customData.date || [];\n      var flag = _this2.props.customData && _this2.props.customData.flag || [];\n      var _this = _this2;\n      return React.createElement(\n        'div',\n        { className: 'ysp-flash-more' },\n        title.map(function (items, index) {\n          return React.createElement(\n            'div',\n            { onClick: _this.handlerClick.bind(_this), 'data-index': index },\n            React.createElement(\n              'span',\n              { onClick: _this.handlerClick.bind(_this), 'data-index': index,\n                className: flag[index][0] == null ? \"\" : \"ysp-flash-text-color\" },\n              items\n            ),\n            React.createElement(\n              'span',\n              { onClick: _this.handlerClick.bind(_this), 'data-index': index },\n              date[index]\n            )\n          );\n        })\n      );\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick(e) {\n      var target = e.target;\n      var index = target.dataset.index;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            index: index\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control579_muZruu: function (elem) {},
    doAction_uiControl579_AdDi0D: function (data, elem) {},
    getTemplate_uiControl579_AdDi0D: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"ysp-flash-hard\">\n        \u5FEB\u8BAF\u5217\u8868\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-flash-hard\" },\n      \"\\u5FEB\\u8BAF\\u5217\\u8868\"\n    );\n  }\n});";
    },
    getData_control580_wRJPTR: function (elem) {
      if (!elem) {
        return "";
      }if (elem) {
        var data = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].textContent.trim() != '...' && nodes[i].textContent.trim() != '首页' && nodes[i].textContent.trim() != '末页' && nodes[i].textContent.trim() != '下一页' && nodes[i].textContent.trim() != '上一页') {
            data.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
          }
        }return data;
      }
    },
    doAction_uiControl580_LnKI0Q: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = parseInt(data.dataCustom);if (index == 1) {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpage') {
        //debugger;
        var index = parseInt(data.dataCustom[0]);var id = data.dataCustom[1];if (id == 'prevPage') {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else if (id == 'nextPage') {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onClicknextOnce') {
        // debugger;
        var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[trsLen - 2].textContent.trim() == '...') {
          var target = trs[trsLen - 2];target.click();
        }
      } else if (data.eventType == 'onclickpreOnce') {
        debugger;var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[1].textContent.trim() == '...') {
          var target = trs[1];target.click();
        }
      } // } else if (data.eventType == 'onclickpreOnce') {
      //   // debugger;
      //   var child = elem.querySelectorAll('a');
      //   var end = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = end; i > 0; i--) {
      //     if (i == 1) {
      //       alert('已经到首页了');
      //     } else {
      //       child[i - 1].click();
      //       break;
      //     }
      //   }
      // } else if (data.eventType == 'onClicknextOnce') {
      //   var child = elem.querySelectorAll('a');
      //   var start = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = start; i < child.length; i++) {
      //     if (i == child.length - 1) {
      //       alert('已经到末页了');
      //     } else {
      //       child[i].click();
      //       break;
      //     }
      //   }
      // }
    },
    getTemplate_uiControl580_LnKI0Q: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.getAttribute('data-id')\n      })\n    }\n  },\n  onclickpage:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onclickpage',\n        data:[target.dataset.index,target.dataset.id]\n      })\n    }\n  },\n  onclickpreOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onclickpreOnce'\n        \n      })\n    }\n  },\n  onClicknextOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onClicknextOnce',\n        \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return (\n        <div>\n        \t\n        </div>\n      )\n    }\n    var str = '<',kr = '|<',\n        _this = this;\n    var lis = data.map(function(ele,index){\n      return(\n        <li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n      )\n    })\n    return (\n      <div className='footerbtn'>\n        <ul>\n          <span>\n            <li data-id='prevPage' data-index={0} onClick={_this.onclickpage.bind(_this)}\n              className='ysp-prePage'>\n              {kr}\n            </li>\n            <li data-id='prev' onClick={_this.onclickpreOnce.bind(_this)}\n              className='ysp-preOnce'>\n              {str}\n            </li>\n          </span>\n          \n          <span className='ysp-pageBtnScroll-tt'><span>{lis}</span></span>\n          <span>\n            <li data-id='next' onClick={_this.onClicknextOnce.bind(_this)} \n              className='ysp-nextOne'>\n              >\n            </li>\n            <li data-id='nextPage' data-index={data.length-1}\n              onClick={_this.onclickpage.bind(_this)} className='ysp-nextPage'>\n              >|\n            </li>\n          </span>\n         \n        </ul>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  onclickpage: function onclickpage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickpage',\n        data: [target.dataset.index, target.dataset.id]\n      });\n    }\n  },\n  onclickpreOnce: function onclickpreOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclickpreOnce'\n\n      });\n    }\n  },\n  onClicknextOnce: function onClicknextOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onClicknextOnce'\n\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement('div', null);\n    }\n    var str = '<',\n        kr = '|<',\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      return React.createElement(\n        'li',\n        { 'data-id': index, onClick: _this.onClick, className: ele.class },\n        ele.text\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'footerbtn' },\n      React.createElement(\n        'ul',\n        null,\n        React.createElement(\n          'span',\n          null,\n          React.createElement(\n            'li',\n            { 'data-id': 'prevPage', 'data-index': 0, onClick: _this.onclickpage.bind(_this),\n              className: 'ysp-prePage' },\n            kr\n          ),\n          React.createElement(\n            'li',\n            { 'data-id': 'prev', onClick: _this.onclickpreOnce.bind(_this),\n              className: 'ysp-preOnce' },\n            str\n          )\n        ),\n        React.createElement(\n          'span',\n          { className: 'ysp-pageBtnScroll-tt' },\n          React.createElement(\n            'span',\n            null,\n            lis\n          )\n        ),\n        React.createElement(\n          'span',\n          null,\n          React.createElement(\n            'li',\n            { 'data-id': 'next', onClick: _this.onClicknextOnce.bind(_this),\n              className: 'ysp-nextOne' },\n            '>'\n          ),\n          React.createElement(\n            'li',\n            { 'data-id': 'nextPage', 'data-index': data.length - 1,\n              onClick: _this.onclickpage.bind(_this), className: 'ysp-nextPage' },\n            '>|'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);