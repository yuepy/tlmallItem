"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control75_1rd5GM: function getData_control75_1rd5GM(elem) {},
    doAction_uiControl80_5gmZAb: function doAction_uiControl80_5gmZAb(data, elem) {
      //data.eventType == 'back' ? ysp.customHelper.back() : '我回不去';
      // data.eventType == 'back' ? ysp.customHelper.forceMatchModels('index') : '我回不去';
      if (data.eventType == "back") {
        ysp.customHelper.backHome();
      }
    },
    getTemplate_uiControl80_5gmZAb: function getTemplate_uiControl80_5gmZAb() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u4FE1\u606F\u5F55\u5165\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u4FE1\u606F\u5F55\u5165\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control61_uTTyws: function getData_control61_uTTyws(elem) {
      if (!elem) {
        return;
      }var as = elem.querySelectorAll('a');var content = [];[].forEach.call(as, function (item, index, self) {
        content.push(ysp.customHelper.trim(item.textContent));
      });return content;
    },
    doAction_uiControl66_tzlwIi: function doAction_uiControl66_tzlwIi(data, elem) {
      if (data.eventType === 'click') {
        var as = elem.querySelectorAll('a');var operation = data.dataCustom.value;[].forEach.call(as, function (item, index, self) {
          if (ysp.customHelper.trim(item.textContent) == operation) {
            item.click();
          }
        });
      }
    },
    getTemplate_uiControl66_tzlwIi: function getTemplate_uiControl66_tzlwIi() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nexport default class extends Component {\n    handlerClick(value) {\n      const handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n    isInclude(array, tag) {\n      for (let i = 0; i < array.length; i++) {\n        if (array[i].indexOf(tag) != -1) {\n          return true;\n        }\n      }\n      return false;\n    }\n    render () {\n      var data = this.props.customData;\n      return (\n        <div className='ysp-vistPlan'>\n        <div className='layoutFlex'>\n          {data && this.isInclude(data,'\u5BA2\u6237PSI\u91C7\u96C6') ? \n            <div className='itemNative' onClick={this.handlerClick.bind(this, '\u5BA2\u6237PSI\u91C7\u96C6')}>\n              <div className='dayPlanIcon'></div>\n              <div className='itemFont'>\u5BA2\u6237PSI\u91C7\u96C6</div>\n            </div> : undefined}\n          \n          {data && this.isInclude(data,'\u5BA2\u6237\u5176\u5B83\u4FE1\u606F\u91C7\u96C6') ? \n            <div className='itemNative' onClick={this.handlerClick.bind(this,'\u5BA2\u6237\u5176\u5B83\u4FE1\u606F\u91C7\u96C6')}>\n              <div className='planCheckIcon'></div>\n              <div className='itemFont'>\u5BA2\u6237\u5176\u4ED6\u4FE1\u606F\u91C7\u96C6</div>\n            </div> : undefined}\n          \n        </div>\n        \n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick(value) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'isInclude',\n    value: function isInclude(array, tag) {\n      for (var i = 0; i < array.length; i++) {\n        if (array[i].indexOf(tag) != -1) {\n          return true;\n        }\n      }\n      return false;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-vistPlan' },\n        React.createElement(\n          'div',\n          { className: 'layoutFlex' },\n          data && this.isInclude(data, '\u5BA2\u6237PSI\u91C7\u96C6') ? React.createElement(\n            'div',\n            { className: 'itemNative', onClick: this.handlerClick.bind(this, '\u5BA2\u6237PSI\u91C7\u96C6') },\n            React.createElement('div', { className: 'dayPlanIcon' }),\n            React.createElement(\n              'div',\n              { className: 'itemFont' },\n              '\\u5BA2\\u6237PSI\\u91C7\\u96C6'\n            )\n          ) : undefined,\n          data && this.isInclude(data, '\u5BA2\u6237\u5176\u5B83\u4FE1\u606F\u91C7\u96C6') ? React.createElement(\n            'div',\n            { className: 'itemNative', onClick: this.handlerClick.bind(this, '\u5BA2\u6237\u5176\u5B83\u4FE1\u606F\u91C7\u96C6') },\n            React.createElement('div', { className: 'planCheckIcon' }),\n            React.createElement(\n              'div',\n              { className: 'itemFont' },\n              '\\u5BA2\\u6237\\u5176\\u4ED6\\u4FE1\\u606F\\u91C7\\u96C6'\n            )\n          ) : undefined\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);