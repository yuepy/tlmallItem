(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control146_VMHbdf: function (elem) {},
    doAction_uiControl124_5rlz54: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl124_5rlz54: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u6D41\u8F6C\u6B65\u9AA4\"}} \n       backIsShow = {true}\n        editIsShow={true}\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n          YSP.appRenderer.showLoading();\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u6D41\u8F6C\u6B65\u9AA4\" },\n        backIsShow: true,\n        editIsShow: true,\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'save1'\n            });\n          }\n        },\n        back: function back(e) {\n          YSP.appRenderer.showLoading();\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control151_CNE0nw: function (elem) {
      if (!elem) {
        return [];
      }
      if (elem) {
        return [].map.call(elem.querySelectorAll('a'), function (item) {
          return item.textContent.trim();
        });
      }
    },
    doAction_uiControl125_Ti8rgT: function (data, elem) {
      if (data.eventType == 'click') {
        var _data = data.customData;
        debugger;
        switch (_data) {
          case 'delete':
            var _btn = elem.querySelectorAll('a')[1];
            _btn && _btn.click();
            break;
          case 'add':
            var _btn = elem.querySelectorAll('a')[0];
            _btn && _btn.click();
            break;
        }
      }
    },
    getTemplate_uiControl125_Ti8rgT: function () {
      var selfTemplate = 'export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      isShow:true\n    }\n  }\n  onClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:e.target.dataset.key\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    return(\n    \t<div className=\'ysp_freeflow_button_container\'>\n      \t<AMUI.Button\tstyle={{width:\'44%\'}}\thollow className=\'ysp_freeflow_submit\' onClick={this.onClick.bind(this)}\tdata-key=\'add\'>\n        \t{data[0]}\n        </AMUI.Button>\n        <AMUI.Button\tstyle={{width:\'44%\'}}\t className=\'ysp_freeflow_preservation\' onClick={this.onClick.bind(this)}\tdata-key=\'delete\'>\n        \t{data[1]}\n        </AMUI.Button>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.onClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: e.target.dataset.key\n        });\n      }\n    };\n\n    _this.state = {\n      isShow: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_freeflow_button_container\' },\n        React.createElement(\n          AMUI.Button,\n          { style: { width: \'44%\' }, hollow: true, className: \'ysp_freeflow_submit\', onClick: this.onClick.bind(this), \'data-key\': \'add\' },\n          data[0]\n        ),\n        React.createElement(\n          AMUI.Button,\n          { style: { width: \'44%\' }, className: \'ysp_freeflow_preservation\', onClick: this.onClick.bind(this), \'data-key\': \'delete\' },\n          data[1]\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control152_TloxG6: function (elem) {
      if (!elem) {
        return [];
      }
      if (elem) {
        var data = { th: [], td: [] };
        var _th = elem.querySelectorAll('.Header th');
        [].map.call(_th, function (item) {
          data.th.push(item.innerHTML.trim());
        });
        var _tr = elem.querySelectorAll('#freewfoTable>tbody>tr');
        [].forEach.call(_tr, function (item, idx) {
          if (idx > 2) {
            var arr = [];
            var _td = item.querySelectorAll('td');
            [].forEach.call(_td, function (val, i) {
              if (i == 0) {
                var children = {};
                children.attr = 'radio';
                children.check = val.querySelector('input').checked;
              } else if (i == 3) {
                var children = {};
                children.opts = [];
                children.attr = 'select';
                children.selectedIndex = val.querySelector('select').selectedIndex;
                var _opts = val.querySelectorAll('option');
                [].map.call(_opts, function (op) {
                  var child = [];
                  child.push(op.innerHTML);
                  children.opts.push(child);
                });
              } else if (val.querySelector('button')) {
                var children = {};
                children.attr = 'operator';
                children.text = val.querySelector('input').value;
              } else {
                var children = {};
                children.attr = 'input';
                children.text = val.querySelector('input').value;
              }
              arr.push(children);
            });
            data.td.push(arr);
          }
        });
        return data;
      }
    },
    doAction_uiControl130_CRhxBG: function (data, elem) {
      if (data.eventType == 'click') {
        var _data = data.customData;
        switch (_data[0]) {
          case 'radio':
            var num = 3 + parseInt(_data[1]);
            var _btn = elem.querySelectorAll('#freewfoTable>tbody>tr')[num].querySelector('input');
            _btn.click();
            break;
          case 'opt':
            var num = 3 + parseInt(_data[1]);
            var _selectedIndex = _data[2];
            var _opts = elem.querySelectorAll('#freewfoTable>tbody>tr')[num].querySelectorAll('td')[3].querySelector('select');
            _opts.selectedIndex = _data[2];
            break;
          case 'btn':
            var num = 3 + parseInt(_data[1]);
            var _btn = elem.querySelectorAll('#freewfoTable>tbody>tr')[num].querySelectorAll('td')[4].querySelector('button');
            _btn.click();
            break;
        }
      } else if (data.eventType == 'blur') {
        var _data = data.customData;
        switch (_data[0]) {
          case 'num':
            var num = 3 + parseInt(_data[1]);
            var _input = elem.querySelectorAll('#freewfoTable>tbody>tr')[num].querySelectorAll('input')[1];
            _input.value = _data[2];
            break;
          case 'input':
            var num = 3 + parseInt(_data[1]);
            var _input = elem.querySelectorAll('#freewfoTable>tbody>tr')[num].querySelectorAll('input')[2];
            _input.value = _data[2];
            break;
        }
      }
    },
    getTemplate_uiControl130_CRhxBG: function () {
      var selfTemplate = 'export default class extends React.Component{\n\tonClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:[e.target.dataset.attr,e.target.dataset.key,e.target.dataset.index]\n      })\n    }\n  }\n  onBlur=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'blur\',\n        data:[e.target.dataset.attr,e.target.dataset.key,e.target.value]\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    var cardBoddy=[];\n    var\t_this=this;\n    cardBoddy.push(\n    \t<div className=\'ysp_forward_card_container\'>\n      \t{\tdata.th\t&&\tdata.td.map(function(item,index){\n          return(\n          \t\t<div className=\'ysp_forward_card\'>\n            \t\t{item.map(function(\tval,idx\t){\n                \tif(\tval.attr==\'radio\'\t){\n                    if(\tval.check==false\t){\n                      return(\n                        <div className=\'ysp_forward_check\'>\n                          <i className=\'ysp_forward_icon_check\' data-attr=\'radio\' onClick={_this.onClick.bind(_this)}\tdata-key={index}></i>\n                        </div>\n                      )\n                    }else{\n                      return(\n                        <div className=\'ysp_forward_check\'>\n                          <i\tclassName=\'ysp_forward_icon_checked\'\tdata-attr=\'radio\' onClick={_this.onClick.bind(_this)}\tdata-key={index}></i>\n                        </div>\n                      )\n                    }\n                  }else if(val.attr==\'input\'\t&&\tdata.th[idx]==\'\u5E8F\u53F7\'){\n                     return(\n                     \t<div className=\'ysp_forward_num\'>\n                        <span>{data.th[idx]}</span>\n                      \t<AInput\ttype=\'text\'\tvalue={val.text} data-attr=\'num\'\tdata-key={index} onBlur={_this.onBlur.bind(_this)}/> \n                      </div>\n                     )      \n                  }else if(val.attr==\'select\'){\n                     return(\n                      <div className=\'ysp_forward_select\'>\n                         <span>{data.th[idx]}</span>\n                         <div className=\'ysp_ops_checked_cont\'>\n                        \t{\tval.opts.map(function(opts,num){\n                          \tif(\tnum==\tval.selectedIndex\t){\n                              return(\n                              \t<div className=\'ysp_ops_ckecked\' onClick={_this.onClick.bind(_this)}\tdata-attr=\'opt\'\tdata-key={index} data-index={num}>{opts}</div>\n                              )  \n                            }else{\n                            \treturn(\n                              \t<div\tonClick={_this.onClick.bind(_this)}\tdata-attr=\'opt\'\tdata-key={index} data-index={num} className=\'ysp_ops\'>{opts}</div>\n                            \t)    \n                            }  \n                          })}\n                         </div>\n                      </div>\n                    )      \n                  }else if(\tval.attr==\'operator\'\t){\n                    return(\n                    \t<div\tclassName=\'ovh\'>\n                        <span\tclassName=\'font-yell\'>{data.th[idx]}</span>\n                      \t<div className=\'about_box\'>\n                        \t<div className=\'box_con\'></div>\n                          <button onClick={_this.onClick.bind(_this)} data-attr=\'btn\' data-key={index}\t></button>\n                        </div>\n                      </div>\n                    ) \n                  }else{\n                    return(\n                     \t<div>\n                        <span>{data.th[idx]}</span>\n                      \t<AInput\ttype=\'text\'\tvalue={val.text} data-attr=\'input\'\tdata-key={index} onBlur={_this.onBlur.bind(_this)}/> \n                      </div>\n                     ) \n                  }\n              \t})}\n            \t</div>\n            )\n        \t})\t\n        }\n        \n      </div>\n    )\n    if(\tdata\t){\n      return(\n      \t<div>\n        \t{\tcardBoddy\t}\n        </div>\n    \t)\n    }else{\n      return(\n        <div\tstyle={{display:\'none\'}}\t></div>\n      )\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: [e.target.dataset.attr, e.target.dataset.key, e.target.dataset.index]\n        });\n      }\n    }, _this2.onBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'blur\',\n          data: [e.target.dataset.attr, e.target.dataset.key, e.target.value]\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var cardBoddy = [];\n      var _this = this;\n      cardBoddy.push(React.createElement(\n        \'div\',\n        { className: \'ysp_forward_card_container\' },\n        data.th && data.td.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp_forward_card\' },\n            item.map(function (val, idx) {\n              if (val.attr == \'radio\') {\n                if (val.check == false) {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'ysp_forward_check\' },\n                    React.createElement(\'i\', { className: \'ysp_forward_icon_check\', \'data-attr\': \'radio\', onClick: _this.onClick.bind(_this), \'data-key\': index })\n                  );\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'ysp_forward_check\' },\n                    React.createElement(\'i\', { className: \'ysp_forward_icon_checked\', \'data-attr\': \'radio\', onClick: _this.onClick.bind(_this), \'data-key\': index })\n                  );\n                }\n              } else if (val.attr == \'input\' && data.th[idx] == \'\u5E8F\u53F7\') {\n                return React.createElement(\n                  \'div\',\n                  { className: \'ysp_forward_num\' },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.th[idx]\n                  ),\n                  React.createElement(AInput, { type: \'text\', value: val.text, \'data-attr\': \'num\', \'data-key\': index, onBlur: _this.onBlur.bind(_this) })\n                );\n              } else if (val.attr == \'select\') {\n                return React.createElement(\n                  \'div\',\n                  { className: \'ysp_forward_select\' },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.th[idx]\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'ysp_ops_checked_cont\' },\n                    val.opts.map(function (opts, num) {\n                      if (num == val.selectedIndex) {\n                        return React.createElement(\n                          \'div\',\n                          { className: \'ysp_ops_ckecked\', onClick: _this.onClick.bind(_this), \'data-attr\': \'opt\', \'data-key\': index, \'data-index\': num },\n                          opts\n                        );\n                      } else {\n                        return React.createElement(\n                          \'div\',\n                          { onClick: _this.onClick.bind(_this), \'data-attr\': \'opt\', \'data-key\': index, \'data-index\': num, className: \'ysp_ops\' },\n                          opts\n                        );\n                      }\n                    })\n                  )\n                );\n              } else if (val.attr == \'operator\') {\n                return React.createElement(\n                  \'div\',\n                  { className: \'ovh\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'font-yell\' },\n                    data.th[idx]\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'about_box\' },\n                    React.createElement(\'div\', { className: \'box_con\' }),\n                    React.createElement(\'button\', { onClick: _this.onClick.bind(_this), \'data-attr\': \'btn\', \'data-key\': index })\n                  )\n                );\n              } else {\n                return React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.th[idx]\n                  ),\n                  React.createElement(AInput, { type: \'text\', value: val.text, \'data-attr\': \'input\', \'data-key\': index, onBlur: _this.onBlur.bind(_this) })\n                );\n              }\n            })\n          );\n        })\n      ));\n      if (data) {\n        return React.createElement(\n          \'div\',\n          null,\n          cardBoddy\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);