(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_zWtgEo: function (elem) {},
    doAction_uiControl11_Pwg4MO: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.querySelector('#btnAction').click();
      }
    },
    getTemplate_uiControl11_Pwg4MO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n      \t<div onClick={(e)=>{\n            var handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'click'\n              })\n            }\n          }}>\n          \u67E5\u8BE2\n        </div>\n        <div style={{textAlign:'center',color:'red'}}>\n        * \u6D4B\u8BD5\u67E5\u8BE2\u9875\u9762,\u5E76\u672A\u9002\u914D\u641C\u7D22\u9879 *\n        </div>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { onClick: function onClick(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click\'\n              });\n            }\n          } },\n        \'\\u67E5\\u8BE2\'\n      ),\n      React.createElement(\n        \'div\',\n        { style: { textAlign: \'center\', color: \'red\' } },\n        \'* \\u6D4B\\u8BD5\\u67E5\\u8BE2\\u9875\\u9762,\\u5E76\\u672A\\u9002\\u914D\\u641C\\u7D22\\u9879 *\'\n      )\n    );\n  }\n});';
    },
    getData_control12_4T5a2k: function (elem) {
      if (!elem) {
        return false;
      }var data = [];var titles = elem.querySelectorAll('p');[].forEach.call(titles, function (item, index) {
        var items = {};items.title = item.textContent;data.push(items);
      });return data;
    },
    doAction_uiControl12_QsMDqf: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelectorAll('p')[data.dataCustom].click();
      }
    },
    getTemplate_uiControl12_QsMDqf: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default  class extends Component{\n  render(){\n    var _this = this;\n    var data = _this.props.customData;\n    return (\n    \t<div>\n      \t<ul>\n        \t{data && data.map((item,index)=>{\n            return(\n            \t<li data-index = {index} onClick={(e)=>{\n                  var handler = _this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:e.target.dataset.index,\n                      eventType:\'click\'\n                    })\n                  }\n                }}>{item.title}</li>\n            )\n          })}\n        </ul>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = _this.props.customData;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'ul\',\n          null,\n          data && data.map(function (item, index) {\n            return React.createElement(\n              \'li\',\n              { \'data-index\': index, onClick: function onClick(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: e.target.dataset.index,\n                      eventType: \'click\'\n                    });\n                  }\n                } },\n              item.title\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);