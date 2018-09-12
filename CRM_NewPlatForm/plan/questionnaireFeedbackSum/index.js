(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control331_PNp7yv: function (elem) {},
    doAction_uiControl321_0gg0A7: function (data, elem) {
      if ("back" == data.eventType) {
        if (ysp.appMain.isIOS()) {
          ysp.customHelper.BackReload('http://192.168.220.82:8080/pttlCrm/res/page/questionnaire/questionRelease.html?role=0');
        } else {
          ysp.appMain.back();
        }
      }if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackFlag = 'default';
      }
    },
    getTemplate_uiControl321_0gg0A7: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n    const {customHandler} = _this.props;\n    customHandler({eventType:'AndroidBack'});\n  }\n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u67E5\u770B\u7EDF\u8BA1\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u67E5\u770B\u7EDF\u8BA1", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({ eventType: \'AndroidBack\' });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
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
      }var data = { subArr: [] };var trs = elem.ownerDocument.querySelector("#tbody").querySelectorAll("tr");var tds = [];var newArr = [];[].forEach.call(trs, function (item, index) {
        var aa = [];var tdText = item.querySelectorAll("td")[0].textContent;if (tdText.indexOf("查看全部") > 0) {
          tdText = tdText.split("查看全部")[0];
        }aa.push(tdText);aa.push(item.querySelectorAll("td")[1].textContent);aa.push(item.querySelectorAll("td")[2].textContent);aa.push(item.querySelectorAll("td")[3].textContent);tds.push(aa);
      });var n = 0;for (var i = 0; i < tds.length; i++) {
        if (i + 1 < tds.length) {
          if (tds[i][0] != tds[i + 1][0]) {
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
      var selfTemplate = "export default class extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n    \tactive: false,\n      index: -1\n    }\n  }\n  handlerClick(e){\n    var target=e.target;\n    var i=target.dataset.index;\n    if(this.state.index != i){\n      this.setState({\n        active:true,\n      \tindex:i\n      })\n    }else{\n      this.setState({\n        active:false,\n      \tindex:-1\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData && this.props.customData.subArr[0] || [];\n    if(data && data.length == 0){ \n      return(\n      \t<div className=\"ysp-no-datasss\">\n          <div></div>\n          <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n         </div>\n      );\n    }\n    var _this = this;\n    return (\n      <div>\n        <div>\n          {\n            data && data.map((items,index)=>{\n              return(\n                <div className=\"ysp-feed-back-table\">\n                  <div className=\"ysp-feed-back-table-head\" \n                    data-index = {index} onClick={_this.handlerClick.bind(_this)}>\n                    <span data-index = {index}>\n                      {items && items[0] && items[0][0]}\n                    </span>\n                    <span data-index = {index} \n                      className={this.state.active && this.state.index == index ? 'actives' : 'active'}>\n                    </span>\n                  </div>\n                  <div className=\"ysp-feed-back-table-content\"\n                    style = {{'display' : this.state.active && this.state.index == index ? 'none': 'block'}}>\n                    <div className=\"ysp-feed-back-table-content-head\">\n                      <span>\u9009\u9879</span>\n                      <span>\u6570\u91CF</span>\n                      <span>\u6BD4\u4F8B</span>\n                    </div>\n                    {\n                      items && items.map((item,ind)=>{\n                        return(\n                          <div className=\"ysp-feed-back-table-content-text\">\n                            <span>{item[1] && item[1]}</span>\n                            <span>{item[2] && item[2]}</span>\n                            <span>{item[3] && item[3]}</span>\n                          </div>\n                        );\n                      })\n                    }\n                  </div> \n                </div>\n              );\n            })\n          }\n        </div>\n        <div className=\"ysp-feed-back-tables\"></div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      active: false,\n      index: -1\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"handlerClick\",\n    value: function handlerClick(e) {\n      var target = e.target;\n      var i = target.dataset.index;\n      if (this.state.index != i) {\n        this.setState({\n          active: true,\n          index: i\n        });\n      } else {\n        this.setState({\n          active: false,\n          index: -1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.customData && this.props.customData.subArr[0] || [];\n      if (data && data.length == 0) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-no-datasss\" },\n          React.createElement(\"div\", null),\n          React.createElement(\n            \"div\",\n            null,\n            \"\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\"\n          )\n        );\n      }\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"div\",\n          null,\n          data && data.map(function (items, index) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp-feed-back-table\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp-feed-back-table-head\",\n                  \"data-index\": index, onClick: _this.handlerClick.bind(_this) },\n                React.createElement(\n                  \"span\",\n                  { \"data-index\": index },\n                  items && items[0] && items[0][0]\n                ),\n                React.createElement(\"span\", { \"data-index\": index,\n                  className: _this3.state.active && _this3.state.index == index ? 'actives' : 'active' })\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp-feed-back-table-content\",\n                  style: { 'display': _this3.state.active && _this3.state.index == index ? 'none' : 'block' } },\n                React.createElement(\n                  \"div\",\n                  { className: \"ysp-feed-back-table-content-head\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"\\u9009\\u9879\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"\\u6570\\u91CF\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"\\u6BD4\\u4F8B\"\n                  )\n                ),\n                items && items.map(function (item, ind) {\n                  return React.createElement(\n                    \"div\",\n                    { className: \"ysp-feed-back-table-content-text\" },\n                    React.createElement(\n                      \"span\",\n                      null,\n                      item[1] && item[1]\n                    ),\n                    React.createElement(\n                      \"span\",\n                      null,\n                      item[2] && item[2]\n                    ),\n                    React.createElement(\n                      \"span\",\n                      null,\n                      item[3] && item[3]\n                    )\n                  );\n                })\n              )\n            );\n          })\n        ),\n        React.createElement(\"div\", { className: \"ysp-feed-back-tables\" })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);