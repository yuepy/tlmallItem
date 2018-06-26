(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control331_PNp7yv: function (elem) {},
    doAction_uiControl321_0gg0A7: function (data, elem) {
      if ("back" == data.eventType) {
        history.go(-1);
      }
    },
    getTemplate_uiControl321_0gg0A7: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u67E5\u770B\u7EDF\u8BA1\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u67E5\u770B\u7EDF\u8BA1\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control335_RpcT9A: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], MB: [], TJ: [], BL: [] };var quName = elem.ownerDocument.querySelector("#quName").textContent;data.title.push(quName);var targetNumber = elem.ownerDocument.querySelector("#targetNumber").textContent;data.MB.push(targetNumber);var submitNumber = elem.ownerDocument.querySelector("#submitNumber").textContent;data.TJ.push(submitNumber);var proportion = elem.ownerDocument.querySelector("#proportion").textContent;data.BL.push(proportion);return data;
    },
    doAction_uiControl325_6NQLn9: function (data, elem) {},
    getTemplate_uiControl325_6NQLn9: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div className=\"ysp-feed-back-sum\">\n        <div>{data.title}</div>\n        <div>\n          <span>\u76EE\u6807\u95EE\u5377\u6570</span>\n          <span>{data.MB}</span>\n        </div>\n        <div>\n        \t<span>\u63D0\u4EA4\u95EE\u5377\u6570</span>\n          <span>{data.TJ}</span>\n        </div>\n        <div>\n        \t<span>\u63D0\u4EA4\u6BD4\u4F8B</span>\n          <span>{data.BL}</span>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-feed-back-sum\" },\n      React.createElement(\n        \"div\",\n        null,\n        data.title\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          \"\\u76EE\\u6807\\u95EE\\u5377\\u6570\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.MB\n        )\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          \"\\u63D0\\u4EA4\\u95EE\\u5377\\u6570\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.TJ\n        )\n      ),\n      React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          \"\\u63D0\\u4EA4\\u6BD4\\u4F8B\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.BL\n        )\n      )\n    );\n  }\n});";
    },
    getData_control341_NN0az8: function (elem) {
      if (!elem) {
        return;
      } // var content = ysp.customHelper.getTableData(elem, ["题目名称"]); //return content;
      // var data = {
      //   num: []
      // };
      // var trs = elem.ownerDocument.querySelector("#tbody").querySelectorAll("tr");
      // for (var i = 0; i < trs.length; i++) {
      //   var td = trs[i].querySelectorAll("td")[0];
      //   var tdFlag = td.getAttribute("rowspan");
      //   if (tdFlag) {
      //     var index = tdFlag;
      //   }
      //   data.num.push(index);
      // }
      //return data;
      var data = { subArr: [] };var trs = elem.ownerDocument.querySelector("#tbody").querySelectorAll("tr");var tds = [];var tempArr = [];var newArr = [];[].forEach.call(trs, function (item, index) {
        var aa = [];aa.push(item.querySelectorAll("td")[1].textContent); //aa.push(item.querySelectorAll("td")[2].textContent);
        //aa.push(item.querySelectorAll("td")[3].textContent);
        tds.push(aa);
      });var n = 0;for (var i = 0; i < tds.length; i++) {
        if (i + 1 < tds.length) {
          if (tds[i][1] != tds[i + 1][1]) {
            newArr.push(tds.slice(n, i + 1));n = i + 1;
          }
        } else if (i + 1 == tds.length) {
          if (tds[i] != tds[i + 1]) {
            newArr.push(tds.slice(n, i + 1));n = i + 1;
          }
        }
      }data.subArr.push(newArr);return data;
    },
    doAction_uiControl331_06oxt9: function (data, elem) {},
    getTemplate_uiControl331_06oxt9: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData && this.props.customData.content || [];\n    return (\n      <div>\n        {\n          data && data.map((items,index)=>{\n            return(\n            \t<div>\n              \t{items[0]}\n              </div>\n            );\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData && this.props.customData.content || [];\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.map(function (items, index) {\n        return React.createElement(\n          \"div\",\n          null,\n          items[0]\n        );\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);