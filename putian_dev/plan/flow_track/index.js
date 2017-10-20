(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      var myData = {};
      myData.lcm = elem.children[1].children[0].value;
      myData.rwzt = elem.children[3].children[0].value;
      myData.fqr = elem.children[5].children[0].value;
      myData.lcmList = [];
      var myList = elem.children[1].children[0].querySelectorAll('option');
      var myListLength = myList.length;

      for (var i = 0; i < myListLength; i++) {
        var pushData = {};
        pushData.value = myList[i].value;
        pushData.text = myList[i].textContent;
        myData.lcmList.push(pushData);
      }

      return myData;
    },
    doAction_uiControl0: function (data, elem) {
      if (data.eventType === 'submit') {
        elem.ownerDocument.defaultView.SearchTask();
      } else if (data.eventType === 'blurRwzt') {
        elem.children[3].children[0].value = data.dataCustom;
      } else if (data.eventType === 'blurFqr') {
        elem.children[5].children[0].value = data.dataCustom;
      } else if (data.eventType === 'changeLcm') {
        elem.children[1].children[0].value = data.dataCustom;
      } else if (data.eventType === 'logout') {
        var XHR = new XMLHttpRequest();
        var url = 'http://192.168.0.189:8080/ptsoa/servlet/LogoutServlet.cmd';
        XHR.open('post', url, true);

        XHR.onload = function (event) {
          if (XHR.status === 200) {
            var response = XHR.responseText;

            if (response === ' ') {
              console.log('fail');
            } else {
              elem.ownerDocument.defaultView.location.href = 'http://192.168.0.189:8080/ptsoa/theme/FixCS/loginform.html';
            }
          } else {
            console.log('fail');
          }
        };

        XHR.send();
      }
    },
    getTemplate_uiControl0: function () {
      var selfTemplate = "import { Dialog } from 'ysp-interior-components';\nexport default class extends React.Component{\n  \n  constructor(props) {\n  \tsuper(props);\n    this.state = {\n    \tshowModal: false\n    };\n  }\n  \n  clickHandler = () => {\n  \tthis.setState({\n    \tshowModal: !this.state.showModal\n    });\n  }\n  \n  closeDialog = () => {\n  \tthis.setState({\n    \tshowModal: false\n    });\n  }\n  \n  logout = () => {\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'logout'\n      });\n    }\n  }\n  \n  blurRwzt = (e) => {\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'blurRwzt'\n      });\n    }\n  }\n  \n  blurFqr = (e) => {\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'blurFqr'\n      });\n    }\n  }\n  \n  changeLcm = (e) => {\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'changeLcm'\n      });\n    }\n  }\n  \n  submit = () => {\n  \tthis.closeDialog();\n    ysp.source.postMessage({resultType: 'showLoading'});\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'submit'\n      });\n    }\n  }\n  \n\trender() {\n  \treturn (\n    \t<header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }} className=\"navbar navbar-primary header\">\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={this.clickHandler} className=\"navbar-nav-item\">\u67E5\u8BE2</a>\n        </div>\n        <h2 className=\"navbar-title navbar-center\">\u6D41\u7A0B\u8FFD\u8E2A</h2>\n        <div className=\"navbar-nav navbar-right\">\n          <a onClick={this.logout} className=\"navbar-nav-item\">\u9000\u51FA</a>\n        </div>\n        {this.state.showModal &&\n          <Dialog config={{status: \"real\"}}>\n            <span onClick={this.closeDialog} className=\"icon icon-close modal-icon\"></span>\n            <div className=\"modal-body\">\n                <AMUI.Field onChange={this.changeLcm} type=\"select\" defaultValue={this.props.data.customData.lcm} block label=\"\u6D41\u7A0B\u540D\">\n                  {this.props.data.customData.lcmList.map((item, index) => <option key={index} value={item.value}>{item.text}</option>)}\n                </AMUI.Field>\n                <AMUI.Field onBlur={this.blurRwzt} value={this.props.data.customData.rwzt} block label=\"\u4EFB\u52A1\u4E3B\u9898\" />\n                <AMUI.Field onBlur={this.blurFqr} value={this.props.data.customData.fqr} block label=\"\u53D1\u8D77\u4EBA\" />\n              <AMUI.Button amStyle=\"primary\" onClick={this.submit} block>\u786E\u5B9A</AMUI.Button>\n            </div>\n          </Dialog>}\n      </header>\n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.clickHandler = function () {\n      _this.setState({\n        showModal: !_this.state.showModal\n      });\n    };\n\n    _this.closeDialog = function () {\n      _this.setState({\n        showModal: false\n      });\n    };\n\n    _this.logout = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'logout'\n        });\n      }\n    };\n\n    _this.blurRwzt = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'blurRwzt'\n        });\n      }\n    };\n\n    _this.blurFqr = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'blurFqr'\n        });\n      }\n    };\n\n    _this.changeLcm = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'changeLcm'\n        });\n      }\n    };\n\n    _this.submit = function () {\n      _this.closeDialog();\n      ysp.source.postMessage({ resultType: 'showLoading' });\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'submit'\n        });\n      }\n    };\n\n    _this.state = {\n      showModal: false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'header',\n        { style: { position: 'fixed', top: 0, width: '100%', zIndex: 1 }, className: 'navbar navbar-primary header' },\n        React.createElement(\n          'div',\n          { className: 'navbar-nav navbar-left' },\n          React.createElement(\n            'a',\n            { onClick: this.clickHandler, className: 'navbar-nav-item' },\n            '\\u67E5\\u8BE2'\n          )\n        ),\n        React.createElement(\n          'h2',\n          { className: 'navbar-title navbar-center' },\n          '\\u6D41\\u7A0B\\u8FFD\\u8E2A'\n        ),\n        React.createElement(\n          'div',\n          { className: 'navbar-nav navbar-right' },\n          React.createElement(\n            'a',\n            { onClick: this.logout, className: 'navbar-nav-item' },\n            '\\u9000\\u51FA'\n          )\n        ),\n        this.state.showModal && React.createElement(\n          _yspInteriorComponents.Dialog,\n          { config: { status: \"real\" } },\n          React.createElement('span', { onClick: this.closeDialog, className: 'icon icon-close modal-icon' }),\n          React.createElement(\n            'div',\n            { className: 'modal-body' },\n            React.createElement(\n              AMUI.Field,\n              { onChange: this.changeLcm, type: 'select', defaultValue: this.props.data.customData.lcm, block: true, label: '\\u6D41\\u7A0B\\u540D' },\n              this.props.data.customData.lcmList.map(function (item, index) {\n                return React.createElement(\n                  'option',\n                  { key: index, value: item.value },\n                  item.text\n                );\n              })\n            ),\n            React.createElement(AMUI.Field, { onBlur: this.blurRwzt, value: this.props.data.customData.rwzt, block: true, label: '\\u4EFB\\u52A1\\u4E3B\\u9898' }),\n            React.createElement(AMUI.Field, { onBlur: this.blurFqr, value: this.props.data.customData.fqr, block: true, label: '\\u53D1\\u8D77\\u4EBA' }),\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', onClick: this.submit, block: true },\n              '\\u786E\\u5B9A'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control2: function (elem) {
      const myData = {};

      if (elem) {
        if (elem.querySelector('.prev') && elem.querySelector('.prev').className.indexOf('current') > -1 || !elem.querySelector('.prev')) {
          myData.upBtn = true;
        } else {
          myData.upBtn = false;
        }

        if (elem.querySelector('.next') && elem.querySelector('.next').className.indexOf('current') > -1 || !elem.querySelector('.next')) {
          myData.downBtn = true;
        } else {
          myData.downBtn = false;
        }
      }

      return myData;
    },
    doAction_uiControl2: function (data, elem) {
      if (data.eventType == 'click') {
        if (data.dataCustom == 'up-btn') {
          elem.querySelector('.prev').click();
        } else {
          elem.querySelector('.next').click();
        }
      }
    },
    getTemplate_uiControl2: function () {
      var selfTemplate = "import { Loading } from 'ysp-custom-components';\nexport default class extends React.Component{\n  \n  constructor(props) {\n  \tsuper(props);\n    this.state = {\n    \tshowModal: false\n    };\n  }\n  \n  onClick = (e) => {\n    var handler = this.props.customHandler;\n    var data = e.target.name;\n    e.target.blur();\n    if (handler) {\n      if ((data === 'up-btn' && !this.props.data.customData.upBtn) || (data === 'down-btn' && !this.props.data.customData.downBtn)) {\n        ysp.source.postMessage({\n          resultType: 'loading'\n        });\n      }\n      \n      setTimeout(() => {\n        handler({\n          data: data,\n          eventType: 'click'\n        });\n      }, 100);\n    }\n  }\n  \n  componentWillUpdate() {\n    ysp.source.postMessage({ resultType: 'stopLoading' });\n  }\n  \n  render() {\n    return (\n      <div ref={`menu`} style={{ paddingBottom: '5px' }}>\n        <Loading showModal={this.state.showModal} />\n        <AMUI.Container>\n          <AMUI.Button amStyle=\"secondary\" hollow=\"true\" className=\"page-btn up-btn\" name=\"up-btn\" style={{ width: '40%', margin: '0 5%' }} onClick={this.onClick} active={!this.props.data.customData.upBtn} disabled={this.props.data.customData.upBtn}>\u4E0A\u4E00\u9875</AMUI.Button>\n          <AMUI.Button amStyle=\"secondary\" hollow=\"true\" className=\"page-btn down-btn\" name=\"down-btn\" style={{ width: '40%', margin: '0 5%' }} onClick={this.onClick} active={!this.props.data.customData.downBtn} disabled={this.props.data.customData.downBtn}>\u4E0B\u4E00\u9875</AMUI.Button>\n        </AMUI.Container>\n      </div>\n    );\n  }\n  \n  componentWillReceiveProps(nextProps) {\n    if (nextProps.data.customData && this.props.data.customData && nextProps.data.customData.current != this.props.data.customData.current) {\n      this.setState({\n        showModal: false\n      });\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.onClick = function (e) {\n      var handler = _this.props.customHandler;\n      var data = e.target.name;\n      e.target.blur();\n      if (handler) {\n        if (data === 'up-btn' && !_this.props.data.customData.upBtn || data === 'down-btn' && !_this.props.data.customData.downBtn) {\n          ysp.source.postMessage({\n            resultType: 'loading'\n          });\n        }\n\n        setTimeout(function () {\n          handler({\n            data: data,\n            eventType: 'click'\n          });\n        }, 100);\n      }\n    };\n\n    _this.state = {\n      showModal: false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate() {\n      ysp.source.postMessage({ resultType: 'stopLoading' });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { ref: 'menu', style: { paddingBottom: '5px' } },\n        React.createElement(_yspCustomComponents.Loading, { showModal: this.state.showModal }),\n        React.createElement(\n          AMUI.Container,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: 'secondary', hollow: 'true', className: 'page-btn up-btn', name: 'up-btn', style: { width: '40%', margin: '0 5%' }, onClick: this.onClick, active: !this.props.data.customData.upBtn, disabled: this.props.data.customData.upBtn },\n            '\\u4E0A\\u4E00\\u9875'\n          ),\n          React.createElement(\n            AMUI.Button,\n            { amStyle: 'secondary', hollow: 'true', className: 'page-btn down-btn', name: 'down-btn', style: { width: '40%', margin: '0 5%' }, onClick: this.onClick, active: !this.props.data.customData.downBtn, disabled: this.props.data.customData.downBtn },\n            '\\u4E0B\\u4E00\\u9875'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.data.customData && this.props.data.customData && nextProps.data.customData.current != this.props.data.customData.current) {\n        this.setState({\n          showModal: false\n        });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control1: function (elem) {
      var body = [];

      if (elem && window.top.isReady) {
        var trs = elem.querySelectorAll('tbody tr');
        var idx;

        if (!trs.length) {
          return body;
        }

        for (idx = 0; idx < trs.length; idx++) {
          var tds = trs[idx].querySelectorAll('td');

          if (tds.length < 2) {
            return body;
          }

          var title = tds[1].textContent;
          var row = {};
          row.title = tds[3].textContent;
          row.subTitle = '当前步骤' + ': ' + tds[2].textContent;
          row.desc = tds[1].textContent;
          row.after = tds[5].textContent;
          row.href = 'javascript:;';
          body.push(row);
        }

        return body;
      }

      return "Loading";
    },
    doAction_uiControl1: function (data, elem) {
      var index = +data.dataCustom;
      var tr = elem.querySelectorAll('tr')[index];

      if (!tr) {
        return;
      }

      var link = tr.querySelector('a');

      if (link) {
        var desc = link.innerHTML;

        if (desc.indexOf('采购合同') > -1 || desc.indexOf('下发返利') > -1 || desc.indexOf('铺货退货会签单') > -1 || desc.indexOf('销售合同') > -1 || desc.indexOf('非采销合同') > -1 || desc.indexOf('付款申请单') > -1 || desc.indexOf('采购退货') > -1 || desc.indexOf('销售退货申请') > -1 || desc.indexOf('跨仓调拨') > -1 || desc.indexOf('跨项目调拨') > -1 || desc.indexOf('采购返利审批申请') > -1) {
          link.dispatchEvent(new Event('click'));
        } else {
          ysp.appMain.hideLoading();
          alert('当前页面没有被适配，即将跳转原页面');
          ysp.appMain.openWindow(ysp.appMain.getActiveUrl());
        }
      }
    },
    getTemplate_uiControl1: function () {
      var selfTemplate = "import appRenderer from 'appRenderer';\nexport default class extends React.Component {\n  \n  componentDidUpdate(nextProps) {\n    if (nextProps.data.customData !== this.props.data.customData) {\n    \tappRenderer.backToTop();\n    }\n    if (window.isReady) {\n    \tysp.source.postMessage({resultType: 'stopLoading'});\n    }\n  }\n  \n  onClick = (e) => {\n    const handler = this.props.customHandler;\n    if (handler) {\n      let target = e.target;\n      while (target.tagName !== 'LI') {\n        target = target.parentNode;\n      }\n      ysp.source.postMessage({\n        resultType: 'loading'\n      });\n      handler({\n        data: target.getAttribute('data-index')\n      });\n    }\n  }\n  \n  render() {\n    const data = this.props.data.customData;\n    if (data === 'Loading') {\n     return <p style={{width: '100%', height: '100vh'}}></p>\n    }\n    if (!data || !data.length || data.every((d) => !d.title )) {\n      return (<p style={{width: '100%', height: 'calc(100vh - 75px)', textAlign: 'center', lineHeight: 'calc(100vh - 75px)'}}>\u6682\u65E0\u6570\u636E</p>);\n    }\n    const items = data.map((d, idx) => {\n      if (d.title) {\n        return (<AMUI.List.Item {...d} key={idx} onClick={this.onClick} data-index={idx}/>);\n      }\n    });\n    return (\n      <div style={{ marginTop: '40px', marginBottom: '10px' }}>{items[0] ? <AMUI.List>\n        {items}\n      </AMUI.List> : <p>\u6682\u65E0\u6570\u636E</p>}</div>\n    );\n  }\n  \n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _appRenderer = require('appRenderer');\n\nvar _appRenderer2 = _interopRequireDefault(_appRenderer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        var target = e.target;\n        while (target.tagName !== 'LI') {\n          target = target.parentNode;\n        }\n        ysp.source.postMessage({\n          resultType: 'loading'\n        });\n        handler({\n          data: target.getAttribute('data-index')\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(nextProps) {\n      if (nextProps.data.customData !== this.props.data.customData) {\n        _appRenderer2.default.backToTop();\n      }\n      if (window.isReady) {\n        ysp.source.postMessage({ resultType: 'stopLoading' });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.data.customData;\n      if (data === 'Loading') {\n        return React.createElement('p', { style: { width: '100%', height: '100vh' } });\n      }\n      if (!data || !data.length || data.every(function (d) {\n        return !d.title;\n      })) {\n        return React.createElement(\n          'p',\n          { style: { width: '100%', height: 'calc(100vh - 75px)', textAlign: 'center', lineHeight: 'calc(100vh - 75px)' } },\n          '\\u6682\\u65E0\\u6570\\u636E'\n        );\n      }\n      var items = data.map(function (d, idx) {\n        if (d.title) {\n          return React.createElement(AMUI.List.Item, _extends({}, d, { key: idx, onClick: _this2.onClick, 'data-index': idx }));\n        }\n      });\n      return React.createElement(\n        'div',\n        { style: { marginTop: '40px', marginBottom: '10px' } },\n        items[0] ? React.createElement(\n          AMUI.List,\n          null,\n          items\n        ) : React.createElement(\n          'p',\n          null,\n          '\\u6682\\u65E0\\u6570\\u636E'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);