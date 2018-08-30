(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control26_gWTnBn: function (elem) {},
    doAction_uiControl23_UO9GDq: function (data, elem) {},
    getTemplate_uiControl23_UO9GDq: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <Header amStyle=\"primary\" title=\"\u901A\u77E5\u516C\u544A\">\n          <HeaderLeft>\n            <button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: 'primary', title: '\\u901A\\u77E5\\u516C\\u544A' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            'button',\n            { amStyle: 'primary', onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control4_KbFuc5: function (elem) {
      if (!elem) return;var data = {};data.content = [];var divs = elem.children;for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent != '' || divs[i].querySelector('img')) {
          var obj = { imgs: [], text: [] };if (divs[i].querySelector('img')) {
            var imgs = divs[i].querySelectorAll('img');for (var k = 0; k < imgs.length; k++) {
              obj.imgs.push(imgs[k].src);obj.text.push(imgs[k].parentElement.textContent);
            }obj.flat = 'img';
          } else if (divs[i].querySelector('h1')) {
            data.titles = divs[i].querySelector('h1').textContent.trim();
          } else {
            obj.text = divs[i].textContent.trim();
          }if (obj.text.indexOf('创建时间') != -1) {
            data.foots = divs[i].textContent.trim();
          }if (!divs[i].querySelector('h1') && divs[i].textContent.indexOf('创建时间') == -1) {
            data.content.push(obj);
          }
        }
      }return data;
    },
    doAction_uiControl4_pPrcFA: function (data, elem) {},
    getTemplate_uiControl4_pPrcFA: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      if(ele.flat == 'img'){\n        return(\n        \t<div>\n          \t{\n              ele.imgs.map(function(d,i){\n                return(<img src={d}></img>)\n              })\n            }\n            {\n              ele.text.map(function(d,i){\n                return(<p>{d}</p>)\n              })\n            }\n          </div>\n        )\n      }else{\n      \treturn(<p>{ele.text}</p>)\n      }\n    })\n    return (\n      <div className='Dy_deil'>\n        <div className='deilTitle'><h1>{data.titles}</h1></div>\n        <div className='deilContent'>{lis}</div>\n        <div className='deilFoot'>{data.foots}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      if (ele.flat == 'img') {\n        return React.createElement(\n          'div',\n          null,\n          ele.imgs.map(function (d, i) {\n            return React.createElement('img', { src: d });\n          }),\n          ele.text.map(function (d, i) {\n            return React.createElement(\n              'p',\n              null,\n              d\n            );\n          })\n        );\n      } else {\n        return React.createElement(\n          'p',\n          null,\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'Dy_deil' },\n      React.createElement(\n        'div',\n        { className: 'deilTitle' },\n        React.createElement(\n          'h1',\n          null,\n          data.titles\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'deilContent' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'deilFoot' },\n        data.foots\n      )\n    );\n  }\n});";
    },
    getData_control68_Vg2KVi: function (elem) {},
    doAction_uiControl67_qNZl43: function (data, elem) {},
    getTemplate_uiControl67_qNZl43: function () {
      var selfTemplate = "import { FootIcon } from 'ysp-custom-components';\nimport { Component } from 'react';\nexport default class extends Component{\n  render(){\n    return(<FootIcon />)\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(_yspCustomComponents.FootIcon, null);\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);