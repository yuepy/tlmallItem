(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control172_2rke9q: function (elem) {
      if (elem) {
        var arr = [];var tit = elem.querySelector(".mini-panel-title");arr.push(tit.textContent);return arr;
      }return [];
    },
    doAction_uiControl165_FsJlK9: function (data, elem) {},
    getTemplate_uiControl165_FsJlK9: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\t\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control173_E2n8TE: function (elem) {},
    doAction_uiControl166_CJlkrl: function (data, elem) {},
    getTemplate_uiControl166_CJlkrl: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0  \u5BFC\u822A\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0  \\u5BFC\\u822A \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    },
    getData_control174_CI434U: function (elem) {},
    doAction_uiControl167_zVT2Aa: function (data, elem) {},
    getTemplate_uiControl167_zVT2Aa: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0  \u5185\u5BB9\u4E00\uFF1A\u57FA\u672C\u4FE1\u606F\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0  \\u5185\\u5BB9\\u4E00\\uFF1A\\u57FA\\u672C\\u4FE1\\u606F \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    },
    getData_control175_nBTL4G: function (elem) {},
    doAction_uiControl168_mW0fpx: function (data, elem) {},
    getTemplate_uiControl168_mW0fpx: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0  \u5185\u5BB9\u4E8C\uFF1A\u8868\u683C\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0  \\u5185\\u5BB9\\u4E8C\\uFF1A\\u8868\\u683C \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    },
    getData_control176_GRJUNr: function (elem) {},
    doAction_uiControl169_qxPrPT: function (data, elem) {},
    getTemplate_uiControl169_qxPrPT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0  \u5185\u5BB9\u4E09\uFF1A\u9500\u552E\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0  \\u5185\\u5BB9\\u4E09\\uFF1A\\u9500\\u552E \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    },
    getData_control177_d2DXkd: function (elem) {},
    doAction_uiControl170_UFvWod: function (data, elem) {},
    getTemplate_uiControl170_UFvWod: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0  \u5BA1\u6279\u610F\u89C1\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0  \\u5BA1\\u6279\\u610F\\u89C1 \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    },
    getData_control178_nk0Ptu: function (elem) {},
    doAction_uiControl171_IukKiq: function (data, elem) {},
    getTemplate_uiControl171_IukKiq: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n \xA0 \xA0 \xA0 \xA0\u9875\u811A\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\xA0 \\xA0 \\xA0 \\xA0\\u9875\\u811A \\xA0 \\xA0 \\xA0\"\n    );\n  }\n});";
    }
  });
})(window, ysp);