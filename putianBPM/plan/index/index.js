(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_THhfhA: function (elem) {
      if (!elem) {
        return;
      }return [].map.call(elem.querySelectorAll('span'), function (item) {
        return item.innerHTML;
      });
    },
    doAction_uiControl3_mrOoHy: function (data, elem) {
      if (data.eventType === 'click') {
        console.log(data.dataCustom.i);$(elem).find('span').eq(data.dataCustom.i).click(); // var url = ysp.customHelper.menuManager.getMenuUrl(data.dataCustom.word);
        // var win = ysp.appMain.getActiveWindow();
        // ysp.customHelper.openWindow(url, 'taskList'); //   $(elem).find('span').eq(data.dataCustom).click(); //   console.log(data.dataCustom);
        //   setTimeout(function () {
        //     var obj = elem.ownerDocument.querySelectorAll('.mini-tabs-bodys')[0].querySelectorAll(".mini-tabs-body")[data.customData].querySelector("iframe").src;
        //     if (obj) {
        //       var newURL = ysp.appMain.getActiveWindow();
        //       newURL.location.href = obj;
        //       clearTimeout(obj);
        //     }
        //   }, 200);
      }
    },
    getTemplate_uiControl3_mrOoHy: function () {
      var selfTemplate = 'export default class extends React.Component{\n  render(){\n    const {customData,customHandler}=this.props;\n    if(\tcustomData\t&&\tcustomData.length>0\t){\n      return(\n        <div className="ysp-index">\n          <ul>\n            {customData.map((item,index)=>\n            <li  key={index} onClick={()=>customHandler({data:{word:item,i:index},eventType:\'click\'})}>\t\t\t\t\t\t\t\t\t\t\t\n              <label>\n                <span className={\'index\'+index}></span>\n              \t{item}\n              </label>\n              <span className=\'icon icon-right-nav\' style={{color:\'#C2BFB8\'}}>\n              </span>\n            </li>)}\n          </ul>\n        </div>\n    )}else{\n      return(\n        <div style={{display:\'none\'}}>\n        </div>\n      )\n    }   \n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      if (customData && customData.length > 0) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-index' },\n          React.createElement(\n            'ul',\n            null,\n            customData.map(function (item, index) {\n              return React.createElement(\n                'li',\n                { key: index, onClick: function onClick() {\n                    return customHandler({ data: { word: item, i: index }, eventType: 'click' });\n                  } },\n                React.createElement(\n                  'label',\n                  null,\n                  React.createElement('span', { className: 'index' + index }),\n                  item\n                ),\n                React.createElement('span', { className: 'icon icon-right-nav', style: { color: '#C2BFB8' } })\n              );\n            })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);