'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_Nd3FGK: function (elem) {},
    doAction_uiControl7_0StoDe: function (data, elem) {
      data.eventType == 'back' ? ysp.appMain.back() : '我回不去';
    },
    getTemplate_uiControl7_0StoDe: function getTemplate_uiControl7_0StoDe() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u62DC\u8BBF\u7BA1\u7406",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}\n';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u62DC\u8BBF\u7BA1\u7406\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control35_4fcXtC: function (elem) {
      var data = { content: [], contentLoading: [] };if ($(elem).length > 0) {
        //首页抓取
        $(elem).find(".m-list").each(function (index, items) {
          var obj = {};obj.header = $(items).find(".header").find(".title").html();obj.company = $(items).find(".footer").find(".infors").find(".a").find("p").html();obj.agency = $(items).find(".footer").find(".infors").find(".b").find("p").html();obj.name = $(items).find(".footer").find(".infors").find(".c").find("p").html();obj.date = $(items).find(".footer").find(".infors").find(".d").find("p").html();data.content.push(obj);
        }); //第一个diglog页面抓取
      }var loading = ysp.customHelper.tipMsg.getLoading();data.contentLoading.push(loading);return data;
    },
    doAction_uiControl38_CM3PQ5: function (data, elem) {
      //点击查看详情按钮弹出详情页
      if ('clickopen' == data.eventType) {
        var index = +data.customData;var reports = elem.ownerDocument.querySelector(".m-report");var list = reports.querySelectorAll(".m-list");var btn = list[index].querySelector(".btn-check");btn.click();
      }
    },
    getTemplate_uiControl38_CM3PQ5: function getTemplate_uiControl38_CM3PQ5() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  Pagination\n} from 'ysp-custom-components';\nimport {\n  CustomHeader\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n  }\n\n handlerClick = (e) => {\n    var index = e.currentTarget.dataset.index;\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: 'clickopen'\n      })\n    }\n  }\n  render = () => {\n    var data = (this.props.customData && this.props.customData.content) ||[];\n    //var index = +this.state.index;\n    var dataLoading = (this.props.customData && this.props.customData.contentLoading[0]);\n    if(data.length == 0 && dataLoading == null){\n      return(\n      \t<div className=\"ysp-no-datas\">\n          <div></div>\n          <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n        </div>\n      );\n    }\n    return (\n      <section className='atreport'>\n       {\n        <div>\n          {data.map((item,index)=>{\n              return(\n                <div className = 'ysp-atreport'>\n                  <div>{item.header}</div>\n                  <div className=\"ysp-atreportcontent\">\n                    <div>\n                      <span></span>\n                      <span>\u586B\u5199\u4EBA\u5458:</span>\n                      <span>{item.name}</span>\n                    </div>\n                    <div onClick={this.handlerClick.bind(this)} data-index = {index} >\n                      <span>\u67E5\u770B</span>\n                    </div>\n                  </div>\n                  <div className=\"ysp-atreportdate\">\n                    <span></span>\n                    <span>\u586B\u5199\u65F6\u95F4:</span>\n                    <span>{item.date}</span>\n                  </div>\n                </div>\n              );\n          })}\n        </div>\n        }\n      </section>\n    );\n  }\n};";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.handlerClick = function (e) {\n      var index = e.currentTarget.dataset.index;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: \'clickopen\'\n        });\n      }\n    };\n\n    _this.render = function () {\n      var data = _this.props.customData && _this.props.customData.content || [];\n      //var index = +this.state.index;\n      var dataLoading = _this.props.customData && _this.props.customData.contentLoading[0];\n      if (data.length == 0 && dataLoading == null) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-datas\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'section\',\n        { className: \'atreport\' },\n        React.createElement(\n          \'div\',\n          null,\n          data.map(function (item, index) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp-atreport\' },\n              React.createElement(\n                \'div\',\n                null,\n                item.header\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'ysp-atreportcontent\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\'span\', null),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u586B\\u5199\\u4EBA\\u5458:\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item.name\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { onClick: _this.handlerClick.bind(_this), \'data-index\': index },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u67E5\\u770B\'\n                  )\n                )\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'ysp-atreportdate\' },\n                React.createElement(\'span\', null),\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u586B\\u5199\\u65F6\\u95F4:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item.date\n                )\n              )\n            );\n          })\n        )\n      );\n    };\n\n    return _this;\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;';
    },

    getData_control98_m4yiHk: function getData_control98_m4yiHk(elem) {
      if (!elem) {
        return;
      }return { checkedTitle: ysp.customHelper.secondMenu.getCurrentMenuName(), titles: ysp.customHelper.secondMenu.getMenuNames('visitManager') };
    },
    doAction_uiControl99_91uC2i: function doAction_uiControl99_91uC2i(data, elem) {
      if (data.eventType === 'click') {
        var as = elem.querySelectorAll('a');var operation = data.dataCustom.value;var win = elem.ownerDocument.defaultView;var planName = ysp.customHelper.secondMenu.getPlanNameByMenuName(operation);ysp.customHelper.secondMenu.toPlanByMenuName(operation, planName);
      }
    },
    getTemplate_uiControl99_91uC2i: function getTemplate_uiControl99_91uC2i() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {SecondMenu} from 'ysp-custom-components';\nexport default class extends Component {\n    handlerClick(value,e) {\n      const handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n    render () {\n      let data = this.props.customData;\n      return (\n        <SecondMenu \n          data={data && data.titles}\n          className=\"ysp-vistPlan\"\n          clickItemCb={this.handlerClick.bind(this)}\n          checkedTitle={data && data.checkedTitle}\n          />\n        \n      )\n    }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'handlerClick\',\n    value: function handlerClick(value, e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(_yspCustomComponents.SecondMenu, {\n        data: data && data.titles,\n        className: \'ysp-vistPlan\',\n        clickItemCb: this.handlerClick.bind(this),\n        checkedTitle: data && data.checkedTitle\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control134_T7tT9A: function (elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;if (elem.querySelector('.skip')) {
        data.numberTaotal = elem.querySelector('.skip').querySelectorAll('span')[0].textContent.replace(/[^0-9]/g, '');
      }var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }var liss = elem.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
        var active = liss[k].className;if (active == 'active') {
          data.currentPage = liss[k].querySelector('a').textContent;
        }
      }data.page = elem.ownerDocument.querySelector('.m-report').querySelectorAll('div').length != 0 ? true : false;return data;
    },
    doAction_uiControl134_vRICiQ: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#page').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl134_vRICiQ: function getTemplate_uiControl134_vRICiQ() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Page\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(props){\n    this.setState({\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"prev",\n              eventType:\'prev\'\n            })\n          }\n            e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n        }}\n          currentPage = {this.props.customData && this.props.customData.currentPage}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"next",\n              eventType:"next"\n            })\n          }\n            e.target.previousSibling.querySelector(\'input\').value = \'\'\n        }}\n           Click={(e)=>{\n            var handler = this.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,\'\')\n            var value = target.parentElement.querySelector(\'input\').value;\n            value = value.replace(/[^0-9]/g,\'\');\n            if(handler){\n              handler({\n                data:value,\n                eventType:\'click\'\n              })\n            }\n          }}\n          Change={(e)=>{\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g,\'\');\n          }}\n      />\n    </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(props) {\n      this.setState({\n        prevState: props.customData && props.customData.prev,\n        pageState: props.customData && props.customData.page,\n        nextState: props.customData && props.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "prev",\n                eventType: \'prev\'\n              });\n            }\n            e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n          },\n          currentPage: this.props.customData && this.props.customData.currentPage,\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "next",\n                eventType: "next"\n              });\n            }\n            e.target.previousSibling.querySelector(\'input\').value = \'\';\n          },\n          Click: function Click(e) {\n            var handler = _this3.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,\'\')\n            var value = target.parentElement.querySelector(\'input\').value;\n            value = value.replace(/[^0-9]/g, \'\');\n            if (handler) {\n              handler({\n                data: value,\n                eventType: \'click\'\n              });\n            }\n          },\n          Change: function Change(e) {\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g, \'\');\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control137_eQ1xEp: function (elem) {},
    doAction_uiControl137_Sdah0b: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('#searchCustName').value = data.dataCustom;elem.querySelector('.btn-search').click();
      }
    },
    getTemplate_uiControl137_Sdah0b: function getTemplate_uiControl137_Sdah0b() {
      var selfTemplate = 'import {Component} from \'react\';\nimport {CustomerSerch} from \'ysp-custom-components\';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      buttonState : false,\n      commitState : false,\n      commitStateBtn : false,\n      width:false,\n      flag:true\n    }\n  }\n  click(e){\n    let _this = this;\n    var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:e.target.previousSibling.value,\n          eventType:\'click\'\n        })\n      }\n      _this.setState({\n        buttonState : false,\n        commitState : false,\n        commitStateBtn : false,\n        width:false,\n        flag:true\n      })\n    e.target.previousSibling.value = \'\';\n  \t}\n  render(){\n    let _this = this;\n    return(\n      <div className=\'fixed-serch\'>\n    \t<CustomerSerch \n        placeholder=\'\u641C\u7D22\'\n        commitStateBtn ={this.state.commitStateBtn}\n\t\t\t\tclick={_this.click.bind(_this)}\n        buttonState = {this.state.buttonState}\n        commitState = {this.state.commitState}\n        width = {this.state.width}\n        flag = {this.state.flag}\n        />\n        </div>\n    )\n  }\n}';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click(e) {\n      var _this = this;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.previousSibling.value,\n          eventType: 'click'\n        });\n      }\n      _this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false,\n        flag: true\n      });\n      e.target.previousSibling.value = '';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'fixed-serch' },\n        React.createElement(_yspCustomComponents.CustomerSerch, {\n          placeholder: '\\u641C\\u7D22',\n          commitStateBtn: this.state.commitStateBtn,\n          click: _this.click.bind(_this),\n          buttonState: this.state.buttonState,\n          commitState: this.state.commitState,\n          width: this.state.width,\n          flag: this.state.flag\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, 'AtReport');
})(window, ysp);