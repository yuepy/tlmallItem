(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control62_3Vpvzg: function (elem) {},
    doAction_uiControl61_K4RhoF: function (data, elem) {},
    getTemplate_uiControl61_K4RhoF: function () {
      var selfTemplate = "import { HeaderLeftbtn } from 'ysp-custom-components';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <HeaderLeftbtn title='\u8BC1\u4E66\u4FE1\u606F' />\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(_yspCustomComponents.HeaderLeftbtn, { title: '\\u8BC1\\u4E66\\u4FE1\\u606F' })\n    );\n  }\n});";
    },
    getData_control63_mlk6gq: function (elem) {
      if (!elem) return;var data = { title: elem.querySelector('div').textContent.trim(), content: [] };var divs = elem.querySelectorAll('.col2');for (var i = 0; i < divs.length; i++) {
        var labels = divs[i].querySelectorAll('label'),
            ipts = divs[i].querySelectorAll('input[type="text"]');for (var k = 0; k < ipts.length; k++) {
          data.content.push({ left: labels[k].textContent.trim(), text: ipts[k].value });
        }
      }return data;
    },
    doAction_uiControl62_dZW4uG: function (data, elem) {},
    getTemplate_uiControl62_dZW4uG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='deil_inspam'>\n        <div className='conditionTitle'>{data.title}</div>\n        {\n          data.content.map(function(ele,index){\n            return(\n            \t<div>\n              \t<div>{ele.left}</div>\n                <div>{ele.text}</div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'deil_inspam' },\n      React.createElement(\n        'div',\n        { className: 'conditionTitle' },\n        data.title\n      ),\n      data.content.map(function (ele, index) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            ele.text\n          )\n        );\n      })\n    );\n  }\n});";
    },
    getData_control64_OJuV8e: function (elem) {
      if (!elem) return;var data = { title: '结果登记', content: [] };var divs = elem.querySelectorAll('.col2');for (var i = 0; i < divs.length; i++) {
        if (divs[i].parentElement.style.display != 'none') {
          var labels = divs[i].querySelectorAll('label'),
              ipts = divs[i].querySelectorAll('input[type="text"]');for (var k = 0; k < labels.length; k++) {
            var obj = { left: labels[k].textContent.trim(), index: i, data_index: k };if (labels[k].nextElementSibling.onclick) {
              obj.flat = 'aimg';obj.text = labels[k].nextElementSibling.value;
            } else {
              obj.flat = 'text';obj.text = labels[k].nextElementSibling.value;
            }data.content.push(obj);
          }
        }
      }return data;
    },
    doAction_uiControl63_ghSQit: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'showimg') {
        elem.querySelectorAll('.col2')[+data.index].querySelectorAll('label')[+data.id].nextElementSibling.click();
      }
    },
    getTemplate_uiControl63_ghSQit: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(props){\n    super(props)\n    this.state = {\n      open:true\n    }\n  }\n  showimg(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.dataset.index,\n        id = target.dataset.id;\n    if(handler){\n      handler({\n        eventType:'showimg',\n        data:{\n          index:index,\n          id:id\n        }\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData,\n        _this = this;\n    return(\n      <div className='deil_inspam'>\n        <div className='conditionTitle'>{data.title}</div>\n        {\n          data.content.map(function(ele,index){\n            if(ele.flat == 'text'){\n              return(\n                <div>\n                  <div>{ele.left}</div>\n                  <div>{ele.text}</div>\n                </div>\n              )\n            }else if(ele.flat == 'aimg'){\n              return(\n                <div>\n                  <div>{ele.left}</div>\n                  <div style={{'color':'red'}} data-index={ele.index} data-id={ele.data_index} onClick={_this.showimg.bind(_this)}>{ele.text}</div>\n                </div>\n              )\n            }\n          })\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      open: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'showimg',\n    value: function showimg(e) {\n      var handler = this.props.customHandler,\n          target = e.target,\n          index = target.dataset.index,\n          id = target.dataset.id;\n      if (handler) {\n        handler({\n          eventType: 'showimg',\n          data: {\n            index: index,\n            id: id\n          }\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData,\n          _this = this;\n      return React.createElement(\n        'div',\n        { className: 'deil_inspam' },\n        React.createElement(\n          'div',\n          { className: 'conditionTitle' },\n          data.title\n        ),\n        data.content.map(function (ele, index) {\n          if (ele.flat == 'text') {\n            return React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                null,\n                ele.left\n              ),\n              React.createElement(\n                'div',\n                null,\n                ele.text\n              )\n            );\n          } else if (ele.flat == 'aimg') {\n            return React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                null,\n                ele.left\n              ),\n              React.createElement(\n                'div',\n                { style: { 'color': 'red' }, 'data-index': ele.index, 'data-id': ele.data_index, onClick: _this.showimg.bind(_this) },\n                ele.text\n              )\n            );\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);