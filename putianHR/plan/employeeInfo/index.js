(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_mTTkVE: function (elem) {},
    doAction_uiControl12_QX7c7e: function (data, elem) {
      if (data.eventType == 'back') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl12_QX7c7e: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var _this=this;\n    return (\n    \t\t<div>\n      \t\t\t<CustomHeader data={{centerText:'\u6211\u7684\u4FE1\u606F',rightText:''}} backIsShow={true} back={()=>{\n            let handler=_this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'back'\n              })\n            }\n            \n            \n            \n          }}></CustomHeader>\n        \t\t<div style={{height:'2.7rem'}}></div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, { data: { centerText: '\u6211\u7684\u4FE1\u606F', rightText: '' }, backIsShow: true, back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          } }),\n        React.createElement('div', { style: { height: '2.7rem' } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control15_TT4EPb: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem) {
        var trs = elem.querySelectorAll('tr');var trsLen = trs.length;for (var i = 0; i < trsLen; i++) {
          if (i == 1) {
            data.name = trs[i].querySelectorAll('td')[1].textContent;data.sex = trs[i].querySelectorAll('td')[2].textContent;data.sexCon = trs[i].querySelectorAll('td')[3].textContent;
          }if (i == 2) {
            data.birth = trs[i].querySelectorAll('td')[0].textContent;data.birthCon = trs[i].querySelectorAll('td')[1].textContent;
          }
        }
      }return data;
    },
    doAction_uiControl16_pvBLnV: function (data, elem) {},
    getTemplate_uiControl16_pvBLnV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[];\n    var _this=this;\n    \n    return (\n      <div className=\"ysp-baseInfo-tt\">\n        <div className='ysp-baseInfoPhoto-tt'><h5>{data.name}</h5><div></div></div>\n        <p><span>{data.sex}\uFF1A</span><span>{data.sexCon}</span></p>\n        <p><span>{data.birth}\uFF1A</span><span>{data.birthCon}</span></p>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-baseInfo-tt\" },\n      React.createElement(\n        \"div\",\n        { className: \"ysp-baseInfoPhoto-tt\" },\n        React.createElement(\n          \"h5\",\n          null,\n          data.name\n        ),\n        React.createElement(\"div\", null)\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.sex,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.sexCon\n        )\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.birth,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.birthCon\n        )\n      )\n    );\n  }\n});";
    },

    getData_control17_MQJlnO: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl18_pZFXoU: function (data, elem) {},
    getTemplate_uiControl18_pZFXoU: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        {top.click1Status?<div>111111</div>:\"\"}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      top.click1Status ? React.createElement(\n        \"div\",\n        null,\n        \"111111\"\n      ) : \"\"\n    );\n  }\n});";
    },
    getData_control18_ysLBGm: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl19_3GFMBU: function (data, elem) {
      if (data.eventType == "click") {
        debugger;var txt = data.dataCustom;console.log(txt);if (txt == '家庭成员') {
          elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.win1, 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#28');
        } else if (txt == '银行账户') {
          elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.win1, 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#30');
        } else if (txt == '其他信息') {
          elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.win1, 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#14');
        } else {
          var tds = elem.querySelectorAll('td');[].forEach.call(tds, function (d, i) {
            var pctxt = d.querySelector('a').getAttribute('title');var pcName = d.querySelector('a').getAttribute('name');if (pctxt.indexOf(txt) != -1) {
              elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.win1, 'TAB_BUTTON_ID', pcName);
            }
          });
        }
      }
    },
    getTemplate_uiControl19_3GFMBU: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){    \n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.textContent\n      })\n    }\n    \n  },\n  render: function() {\n    var _this=this;\n    var data=['\u57FA\u672C\u4FE1\u606F','\u8054\u7CFB\u4FE1\u606F','\u4EFB\u804C\u4FE1\u606F','\u5185\u90E8\u53D1\u5C55\u4FE1\u606F','\u5408\u540C\u4FE1\u606F','\u6559\u80B2\u7ECF\u5386','\u5BB6\u5EAD\u6210\u5458','\u94F6\u884C\u8D26\u6237','\u5176\u4ED6\u4FE1\u606F'];\n    var list=data.map(function(d,i){\n      return (\n      \t\t<div onClick={_this.onclick}>\n        \t\t\t<i></i>\n          \t\t<p>{d}</p>\n        </div>\n      )\n    })\n    return (\n      <div className='ysp-baseInfo-detail'>\n        <div className='ysp-baseInfo-title'>\u8BE6\u7EC6\u4FE1\u606F</div>\n        <div className='ysp-baseInfo-detailList'>\n        \t\t{list}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.textContent\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = ['\u57FA\u672C\u4FE1\u606F', '\u8054\u7CFB\u4FE1\u606F', '\u4EFB\u804C\u4FE1\u606F', '\u5185\u90E8\u53D1\u5C55\u4FE1\u606F', '\u5408\u540C\u4FE1\u606F', '\u6559\u80B2\u7ECF\u5386', '\u5BB6\u5EAD\u6210\u5458', '\u94F6\u884C\u8D26\u6237', '\u5176\u4ED6\u4FE1\u606F'];\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { onClick: _this.onclick },\n        React.createElement('i', null),\n        React.createElement(\n          'p',\n          null,\n          d\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-baseInfo-detail' },\n      React.createElement(\n        'div',\n        { className: 'ysp-baseInfo-title' },\n        '\\u8BE6\\u7EC6\\u4FE1\\u606F'\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-baseInfo-detailList' },\n        list\n      )\n    );\n  }\n});";
    }
  }, "employeeInfo");
})(window, ysp);