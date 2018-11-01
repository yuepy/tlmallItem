'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control151_8Wixyn: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl149_i6F2w0: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '客户详情';ysp.customHelper.AndroidBackModel = 'clientInfo';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl149_i6F2w0: function getTemplate_uiControl149_i6F2w0() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n     var handler = _this.props.customHanlder;\n    if(handler){\n      handler({\n        eventType:\'AndroidBack\'\n      })\n    }\n \xA0 \xA0// const {customHandler} = _this.props;\n \xA0 \xA0// customHandler({\n \xA0 \xA0// eventType:\'AndroidBack\'\n \xA0 \xA0// })\n  }\n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u5BA2\u6237\u7ECF\u8425\u89C4\u6A21",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u5BA2\u6237\u7ECF\u8425\u89C4\u6A21", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHanlder;\n      if (handler) {\n        handler({\n          eventType: \'AndroidBack\'\n        });\n      }\n      // const {customHandler} = _this.props;\n      // customHandler({\n      // eventType:\'AndroidBack\'\n      // })\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control153_p7IFKm: function (elem) {
      if (!elem) {
        return;
      }var data = { subBrand: [], subCompetitor: [], subBusiness: [], subPrice: [], subOperator: [], subSum: [] };var sum = elem.querySelector("#capacity").textContent;data.subSum.push(sum);var brandTable = elem.querySelector(".brand-scale");var competitorTable = elem.querySelector(".competitor-scale");var businessTable = elem.querySelector(".business-scale");var priceTable = elem.querySelector(".price-scale");var operatorTable = elem.querySelector(".operator-scale");var brandContent = ysp.customHelper.getTableData(brandTable, ["品牌", "容量情况（台/月）", "品牌收入", "记录创建人", "创建时间"]);data.subBrand.push(brandContent);var competitorContent = ysp.customHelper.getTableData(competitorTable, ["竞争者", "合作规模", "记录创建人", "创建时间"]);data.subCompetitor.push(competitorContent);var businessContent = ysp.customHelper.getTableData(businessTable, ["业务类型", "百分比", "更新人", "更新时间"]);data.subBusiness.push(businessContent);var priceContent = ysp.customHelper.getTableData(priceTable, ["价格段", "百分比", "更新人", "更新时间"]);data.subPrice.push(priceContent);var operatorContent = ysp.customHelper.getTableData(operatorTable, ["运营商月容量", "百分比", "更新人", "更新时间"]);data.subOperator.push(operatorContent);return data;
    },
    doAction_uiControl151_MN3FM7: function (data, elem) {},
    getTemplate_uiControl151_MN3FM7: function getTemplate_uiControl151_MN3FM7() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   constructor(){\n      super();\n      this.state = {\n         selected:0\n      };\n   }\n   render = () => {\n     \tvar data = this.props.customData || [];\n       return (\n         <div>\n           <nav className="ysp-custom-manage-nav-wrapper">\n             <ul>\n               <li onClick={(e)=>{\n                    this.setState({selected:0});\n                 }} className={this.state.selected === 0 ?"ysp-custom-manage-nav-active":""}>\n                 <span className={this.state.selected === 0 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts"}>\u7ADE\u4E89\u8005\u89C4\u6A21</span>\n               </li>\n               <li onClick={(e)=>{\n                    this.setState({selected:1});\n                 }} className={this.state.selected === 1 ?"ysp-custom-manage-nav-active":""}>\n                 <span className={this.state.selected === 1 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts"}>\u54C1\u724C\u89C4\u6A21</span>\n               </li>\n               <li onClick={(e)=>{\n                    this.setState({selected:2});\n                 }} className={this.state.selected === 2 ?"ysp-custom-manage-nav-active":""}>\n                 <span className={this.state.selected === 2 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts"}>\u4E1A\u52A1\u7C7B\u578B\u89C4\u6A21</span> \n               </li>\n               <li onClick={(e)=>{\n                    this.setState({selected:3});\n                 }} className={this.state.selected === 3 ?"ysp-custom-manage-nav-active":""}>\n                 <span className={this.state.selected === 3 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts"}>\u4EF7\u683C\u6BB5\u89C4\u6A21</span> \n               </li>\n               <li onClick={(e)=>{\n                    this.setState({selected:4});\n                 }} className={this.state.selected === 4 ?"ysp-custom-manage-nav-active":""}>\n                 <span className={this.state.selected === 4 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts"}>\u8FD0\u8425\u5546\u6708\u89C4\u6A21</span> \n               </li>\n             </ul>\n           </nav>\n           {\n             this.state.selected === 0 ? \n               <div>\n               \t{\n                   data.subCompetitor[0].content.length == 0 ? \n                     <div className="ysp-no-datas" style={{height:\'82vh\'}}>\n        \t\t\t\t\t\t\t\t<div></div>\n                \t\t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t\t\t\t </div> : <div>\n                     <div className="ysp-custom-manage-competitor">\n                       <div>\u7ADE\u4E89\u8005</div>\n                       <div>\u5408\u4F5C\u89C4\u6A21</div>\n                     </div>\n                     { \n                      data.subCompetitor[0].content.map((item,index) =>{\n                         return(\n                         \t<div className="ysp-custom-manage-competitor-content">\n                             <div>{item[0]}</div>\n                             <div>{item[1]}</div>\n                          </div>\n                         );\n                       })\n                     }\n                   </div>\n                 }\n               </div> : this.state.selected === 1 ? \n               <div>\n               \t{\n                   data.subCompetitor[0].content.length == 0 ? \n                     <div className="ysp-no-datas" style={{height:\'82vh\'}}>\n        \t\t\t\t\t\t\t\t<div></div>\n                \t\t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t\t\t\t </div> : <div>\n                     <div style={{"padding":"20px 30px","color":"red","fontWeight":"bold","background":"#ececec"}}>\n                       \u603B\u5BB9\u91CF\uFF1A{data.subSum[0]}\n                     </div>\n                     <div className="ysp-custom-manage-competitor">\n                       <div>\u54C1\u724C</div>\n                       <div>\u5BB9\u91CF\u60C5\u51B5(\u53F0/\u6708)</div>\n                     </div>\n                     { \n                      data.subBrand[0].content.map((item,index) =>{\n                         return(\n                         \t<div className="ysp-custom-manage-competitor-content">\n                             <div>{item[0]}</div>\n                             <div>{item[1]}</div>\n                          </div>\n                         );\n                       })\n                     }\n                   </div>\n                 }\n               </div> : this.state.selected === 2 ? \n               <div>\n               \t{\n                   data.subBusiness[0].content.length == 0 ? \n                     <div className="ysp-no-datas" style={{height:\'82vh\'}}>\n        \t\t\t\t\t\t\t\t<div></div>\n                \t\t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t\t\t\t </div> : <div>\n                     <div className="ysp-custom-manage-competitor">\n                       <div>\u4E1A\u52A1\u7C7B\u578B</div>\n                       <div>\u767E\u5206\u6BD4</div>\n                     </div>\n                     { \n                      data.subBusiness[0].content.map((item,index) =>{\n                         return(\n                         \t<div className="ysp-custom-manage-competitor-content">\n                             <div>{item[0]}</div>\n                             <div>{item[1]}</div>\n                          </div>\n                         );\n                       })\n                     }\n                   </div>\n                 }\n               </div> : this.state.selected === 3 ? \n               <div>\n               \t{\n                   data.subPrice[0].content.length == 0 ? \n                     <div className="ysp-no-datas" style={{height:\'82vh\'}}>\n        \t\t\t\t\t\t\t\t<div></div>\n                \t\t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t\t\t\t </div> : <div>\n                     <div className="ysp-custom-manage-competitor">\n                       <div>\u4EF7\u683C\u6BB5</div>\n                       <div>\u767E\u5206\u6BD4</div>\n                     </div>\n                     { \n                      data.subPrice[0].content.map((item,index) =>{\n                         return(\n                         \t<div className="ysp-custom-manage-competitor-content">\n                             <div>{item[0]}</div>\n                             <div>{item[1]}</div>\n                          </div>\n                         );\n                       })\n                     }\n                   </div>\n                 }\t\n               </div> : this.state.selected === 4 ? \n               <div>\n               \t{\n                   data.subOperator[0].content.length == 0 ? \n                     <div className="ysp-no-datas" style={{height:\'82vh\'}}>\n        \t\t\t\t\t\t\t\t<div></div>\n                \t\t\t\t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t\t\t\t </div> : <div>\n                     <div className="ysp-custom-manage-competitor">\n                       <div>\u8FD0\u8425\u5546\u6708\u5BB9\u91CF</div>\n                       <div>\u767E\u5206\u6BD4</div>\n                     </div>\n                     { \n                      data.subOperator[0].content.map((item,index) =>{\n                         return(\n                         \t<div className="ysp-custom-manage-competitor-content">\n                             <div>{item[0]}</div>\n                             <div>{item[1]}</div>\n                          </div>\n                         );\n                       })\n                     }\n                   </div>\n                 }\n               </div> : ""\n           }\n         </div>  \n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this.render = function () {\n      var data = _this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'nav\',\n          { className: \'ysp-custom-manage-nav-wrapper\' },\n          React.createElement(\n            \'ul\',\n            null,\n            React.createElement(\n              \'li\',\n              { onClick: function onClick(e) {\n                  _this.setState({ selected: 0 });\n                }, className: _this.state.selected === 0 ? "ysp-custom-manage-nav-active" : "" },\n              React.createElement(\n                \'span\',\n                { className: _this.state.selected === 0 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts" },\n                \'\\u7ADE\\u4E89\\u8005\\u89C4\\u6A21\'\n              )\n            ),\n            React.createElement(\n              \'li\',\n              { onClick: function onClick(e) {\n                  _this.setState({ selected: 1 });\n                }, className: _this.state.selected === 1 ? "ysp-custom-manage-nav-active" : "" },\n              React.createElement(\n                \'span\',\n                { className: _this.state.selected === 1 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts" },\n                \'\\u54C1\\u724C\\u89C4\\u6A21\'\n              )\n            ),\n            React.createElement(\n              \'li\',\n              { onClick: function onClick(e) {\n                  _this.setState({ selected: 2 });\n                }, className: _this.state.selected === 2 ? "ysp-custom-manage-nav-active" : "" },\n              React.createElement(\n                \'span\',\n                { className: _this.state.selected === 2 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts" },\n                \'\\u4E1A\\u52A1\\u7C7B\\u578B\\u89C4\\u6A21\'\n              )\n            ),\n            React.createElement(\n              \'li\',\n              { onClick: function onClick(e) {\n                  _this.setState({ selected: 3 });\n                }, className: _this.state.selected === 3 ? "ysp-custom-manage-nav-active" : "" },\n              React.createElement(\n                \'span\',\n                { className: _this.state.selected === 3 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts" },\n                \'\\u4EF7\\u683C\\u6BB5\\u89C4\\u6A21\'\n              )\n            ),\n            React.createElement(\n              \'li\',\n              { onClick: function onClick(e) {\n                  _this.setState({ selected: 4 });\n                }, className: _this.state.selected === 4 ? "ysp-custom-manage-nav-active" : "" },\n              React.createElement(\n                \'span\',\n                { className: _this.state.selected === 4 ? "ysp-custom-manage-nav-text" : "ysp-custom-manage-nav-texts" },\n                \'\\u8FD0\\u8425\\u5546\\u6708\\u89C4\\u6A21\'\n              )\n            )\n          )\n        ),\n        _this.state.selected === 0 ? React.createElement(\n          \'div\',\n          null,\n          data.subCompetitor[0].content.length == 0 ? React.createElement(\n            \'div\',\n            { className: \'ysp-no-datas\', style: { height: \'82vh\' } },\n            React.createElement(\'div\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n            )\n          ) : React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { className: \'ysp-custom-manage-competitor\' },\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u7ADE\\u4E89\\u8005\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u5408\\u4F5C\\u89C4\\u6A21\'\n              )\n            ),\n            data.subCompetitor[0].content.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-custom-manage-competitor-content\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[0]\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[1]\n                )\n              );\n            })\n          )\n        ) : _this.state.selected === 1 ? React.createElement(\n          \'div\',\n          null,\n          data.subCompetitor[0].content.length == 0 ? React.createElement(\n            \'div\',\n            { className: \'ysp-no-datas\', style: { height: \'82vh\' } },\n            React.createElement(\'div\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n            )\n          ) : React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { style: { "padding": "20px 30px", "color": "red", "fontWeight": "bold", "background": "#ececec" } },\n              \'\\u603B\\u5BB9\\u91CF\\uFF1A\',\n              data.subSum[0]\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'ysp-custom-manage-competitor\' },\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u54C1\\u724C\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u5BB9\\u91CF\\u60C5\\u51B5(\\u53F0/\\u6708)\'\n              )\n            ),\n            data.subBrand[0].content.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-custom-manage-competitor-content\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[0]\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[1]\n                )\n              );\n            })\n          )\n        ) : _this.state.selected === 2 ? React.createElement(\n          \'div\',\n          null,\n          data.subBusiness[0].content.length == 0 ? React.createElement(\n            \'div\',\n            { className: \'ysp-no-datas\', style: { height: \'82vh\' } },\n            React.createElement(\'div\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n            )\n          ) : React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { className: \'ysp-custom-manage-competitor\' },\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u4E1A\\u52A1\\u7C7B\\u578B\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u767E\\u5206\\u6BD4\'\n              )\n            ),\n            data.subBusiness[0].content.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-custom-manage-competitor-content\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[0]\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[1]\n                )\n              );\n            })\n          )\n        ) : _this.state.selected === 3 ? React.createElement(\n          \'div\',\n          null,\n          data.subPrice[0].content.length == 0 ? React.createElement(\n            \'div\',\n            { className: \'ysp-no-datas\', style: { height: \'82vh\' } },\n            React.createElement(\'div\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n            )\n          ) : React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { className: \'ysp-custom-manage-competitor\' },\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u4EF7\\u683C\\u6BB5\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u767E\\u5206\\u6BD4\'\n              )\n            ),\n            data.subPrice[0].content.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-custom-manage-competitor-content\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[0]\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[1]\n                )\n              );\n            })\n          )\n        ) : _this.state.selected === 4 ? React.createElement(\n          \'div\',\n          null,\n          data.subOperator[0].content.length == 0 ? React.createElement(\n            \'div\',\n            { className: \'ysp-no-datas\', style: { height: \'82vh\' } },\n            React.createElement(\'div\', null),\n            React.createElement(\n              \'div\',\n              null,\n              \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n            )\n          ) : React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'div\',\n              { className: \'ysp-custom-manage-competitor\' },\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u8FD0\\u8425\\u5546\\u6708\\u5BB9\\u91CF\'\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                \'\\u767E\\u5206\\u6BD4\'\n              )\n            ),\n            data.subOperator[0].content.map(function (item, index) {\n              return React.createElement(\n                \'div\',\n                { className: \'ysp-custom-manage-competitor-content\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[0]\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  item[1]\n                )\n              );\n            })\n          )\n        ) : ""\n      );\n    };\n\n    _this.state = {\n      selected: 0\n    };\n    return _this;\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "customManageScope");
})(window, ysp);