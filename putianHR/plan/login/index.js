(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_mTTkVE: function (elem) {},
    doAction_uiControl12_QX7c7e: function (data, elem) {
      if (data.eventType == 'back') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl12_QX7c7e: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var _this=this;\n    return (\n    \t\t<div>\n      \t\t\t<CustomHeader data={{centerText:'\u6211\u7684\u4FE1\u606F',rightText:''}} backIsShow={true} back={()=>{\n            let handler=_this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'back'\n              })\n            }\n            \n            \n            \n          }}></CustomHeader>\n        \t\t<div style={{height:'2.7rem'}}></div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, { data: { centerText: '\u6211\u7684\u4FE1\u606F', rightText: '' }, backIsShow: true, back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          } }),\n        React.createElement('div', { style: { height: '2.7rem' } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control15_TT4EPb: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem) {
        var trs = elem.querySelectorAll('tr');var trsLen = trs.length;for (var i = 0; i < trsLen; i++) {
          if (i == 1) {
            data.name = trs[i].querySelectorAll('td')[1].textContent;data.sex = trs[i].querySelectorAll('td')[2].textContent;data.sexCon = trs[i].querySelectorAll('td')[3].textContent;if (trs[i].querySelector('img')) {
              data.src = trs[i].querySelector('img').getAttribute('src');
            } else {
              return '';
            }
          }if (i == 2) {
            data.birth = trs[i].querySelectorAll('td')[0].textContent;data.birthCon = trs[i].querySelectorAll('td')[1].textContent;
          }
        }
      }return data;
    },
    doAction_uiControl16_pvBLnV: function (data, elem) {},
    getTemplate_uiControl16_pvBLnV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {    \n    var data=this.props.customData||[];\n    var _this=this;\n    var src=\"http://192.168.220.110\"+data.src;\n    return (\n      <div className=\"ysp-baseInfo-tt\">\n        <div className='ysp-baseInfoPhoto-tt'><h5>{data.name}</h5><img style={{width:'80px',height:'80px', borderRadius:'50%'}} src={src}/></div>\n        <p><span>{data.sex}\uFF1A</span><span>{data.sexCon}</span></p>\n        <p><span>{data.birth}\uFF1A</span><span>{data.birthCon}</span></p>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    var src = \"http://192.168.220.110\" + data.src;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-baseInfo-tt\" },\n      React.createElement(\n        \"div\",\n        { className: \"ysp-baseInfoPhoto-tt\" },\n        React.createElement(\n          \"h5\",\n          null,\n          data.name\n        ),\n        React.createElement(\"img\", { style: { width: '80px', height: '80px', borderRadius: '50%' }, src: src })\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.sex,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.sexCon\n        )\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.birth,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.birthCon\n        )\n      )\n    );\n  }\n});";
    },

    getData_control18_ysLBGm: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl19_3GFMBU: function (data, elem) {
      if (data.eventType == "click") {
        var txt = data.dataCustom[1];var tag = data.dataCustom[0];var nextTxt = data.dataCustom[2]; // debugger;
        // console.log(txt);
        // console.log(tag);
        // console.log(nextTxt);
        var param = elem.querySelectorAll('td')[2].querySelector('a').getAttribute('href').split(/,/)[0].split(/\(/)[1].split(/\./)[1]; //console.log(elem.ownerDocument.querySelector("form[name=" + param + "]"));
        if (tag == 'P') {
          if (txt == '家庭成员') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#28');
          } else if (txt == '银行账户') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#30');
          } else if (txt == '其他信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#14');
          } else if (txt == '基本信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#10');
          } else if (txt == '联系信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#12');
          } else if (txt == '任职信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#16');
          } else if (txt == '内部发展信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#18');
          } else if (txt == '合同信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#22');
          } else if (txt == '教育经历') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#24');
          }
        } else if (tag == 'I') {
          if (nextTxt == '家庭成员') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#28');
          } else if (nextTxt == '银行账户') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#30');
          } else if (nextTxt == '其他信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#14');
          } else if (nextTxt == '基本信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#10');
          } else if (nextTxt == '联系信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#12');
          } else if (nextTxt == '任职信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#16');
          } else if (nextTxt == '内部发展信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#18');
          } else if (nextTxt == '合同信息') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#22');
          } else if (nextTxt == '教育经历') {
            elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#24');
          }
        }
      }
    },

    getTemplate_uiControl23_5JK6Pw: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  selectChange(e){\n   \n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"selectChange\",\n        data:target.value\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div className=\"subSearchType searchCondition\">\n        <div className=\"conditionItem\">\n        \t<div className=\"conditionTitle\">\u67E5\u8BE2\u7C7B\u578B</div>\n          <div className=\"conditionContent\">\n          \t<select onChange={_this.selectChange.bind(_this)} data-type={data&&data.select}>\n              {data&&data.options&&data.options.map(function(d,i){\n                return(\n                  <option>{d}</option>            \n                )\n              })}\n            </select>\n          </div>\n        </div>\n      </div>\n      )\n    }\n}\n\n      \t";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"selectChange\",\n    value: function selectChange(e) {\n\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"selectChange\",\n          data: target.value\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"subSearchType searchCondition\" },\n        React.createElement(\n          \"div\",\n          { className: \"conditionItem\" },\n          React.createElement(\n            \"div\",\n            { className: \"conditionTitle\" },\n            \"\\u67E5\\u8BE2\\u7C7B\\u578B\"\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"conditionContent\" },\n            React.createElement(\n              \"select\",\n              { onChange: _this.selectChange.bind(_this), \"data-type\": data && data.select },\n              data && data.options && data.options.map(function (d, i) {\n                return React.createElement(\n                  \"option\",\n                  null,\n                  d\n                );\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control24_tiZ0zf: function (elem) {
      if (elem) {
        var data = { title: [], content: [] };var trs = elem.children[0].children;[].forEach.call(trs, function (d, i) {
          var obj = { val: "", options: [], type: "", num: "" };if (d.querySelector("label")) {
            data.title.push(d.textContent.trim());
          } else if (d.querySelector("select")) {
            obj.type = "select";var option = d.querySelector("select").querySelectorAll("option");[].forEach.call(option, function (d1, i1) {
              obj.options.push(d1.textContent.trim());
            });obj.num = i;data.content.push(obj);
          } else if (d.querySelector("img") && !d.querySelector("img[alt*='日期']")) {
            obj.type = "search";obj.val = d.querySelector("input[type='text']").value;obj.num = i;data.content.push(obj);
          } else if (d.querySelector("img[alt*='日期']")) {
            obj.type = "date";obj.val = d.querySelector("input[type='text']").value.replace(/\//g, "-");obj.num = i;data.content.push(obj);
          } else if (d.querySelector("#HPS_SEARCH_WRK_HPS_NAME")) {
            obj.type = "input";obj.val = d.querySelector("#HPS_SEARCH_WRK_HPS_NAME").value;obj.num = i;data.content.push(obj);
          }
        });return data;
      } else {

        return;
      }if (elem) {
        var data = {};data.tbId = elem.querySelector('table').getAttribute('id');data.content = [];data.title = [];if (data.tbId == 'DEV' || data.tbId == 'CONTRACT' || data.tbId == 'FAMILY') {
          data.titleBar = "内部发展信息";var trs = elem.querySelector('table').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
            //标题
            if (i == 1) {
              var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
                data.title.push(tds[j].textContent);
              }
            } //内容
            var arr = [];if (i > 1) {
              var tds = trs[i].querySelectorAll('td');for (var z = 0; z < tds.length; z++) {
                arr.push(tds[z].textContent);
              }data.content.push(arr);
            }
          }
        } else if (data.tbId == 'BASE') {
          data.titleBar = "基本信息";var trs = elem.querySelector('table').querySelectorAll('tr');var arr = [];for (var i = 0; i < trs.length; i++) {
            if (i > 0) {
              var tds = trs[i].querySelectorAll('td');for (var z = 0; z < tds.length; z++) {
                arr.push(tds[z].textContent);
              }
            }
          }data.content.push(arr);
        }if (data.tbId == 'CONTRACT') {
          data.titleBar = "合同信息";
        }if (data.tbId == 'FAMILY') {
          data.titleBar = "家庭成员";
        }return data;
      }
    },

    doAction_uiControl24_DZ1rQ2: function (data, elem) {
      var group = data.dataCustom;var type = data.eventType;var index = group.index;var num = group.num;var val = group.val;var trs = elem.children[0].children;if (type == "selectChange") {
        trs[num].querySelector("select").querySelectorAll("option")[index].selected = true;trs[num].querySelector("select").dispatchEvent(new Event("change"));
      } else if (type == "writeBlur") {
        trs[num].querySelector("input").value = val;
      } else if (type == "timeBlur") {
        trs[num].querySelector("input").value = val.replace(/-/g, "/");trs[num].querySelector("input").dispatchEvent(new Event("change"));
      } else if (type == "searchClick") {
        trs[num].querySelector("img").parentElement.click();
      }
    },
    getTemplate_uiControl24_DZ1rQ2: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  selectChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"selectChange\",\n        data:{index:target.selectedIndex,num:target.dataset.num}\n      })\n    }\n  }\n  writeBlur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"writeBlur\",\n        data:{val:target.value,num:target.dataset.num}\n      })\n    }\n  }\n  timeBlur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"timeBlur\",\n        data:{val:target.value,num:target.dataset.num}\n      })\n    }\n  }\n  searchClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"searchClick\",\n        data:{num:target.dataset.num}\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div className=\"searchCondition\">\n      \t{data&&data.content&&data.content.map(function(d,i){\n          if(d.type==\"select\"){\n            return(\n              <div className=\"conditionItem\">\n                <div className=\"conditionTitle\">{data.title[i]}</div>\n                <div className=\"conditionContent\">\n                \t<select onChange={_this.selectChange.bind(_this)} data-num={d.num}>\n                  \t{d.options.map(function(d1,i1){\n                      return(\n                      \t<option>{d1}</option>\n                      )\n                    })}\n                  </select>\n                </div>\n              </div>\n            )\n          }else if(d.type==\"input\"){\n            return(\n              <div className=\"conditionItem\">\n                <div className=\"conditionTitle\">{data.title[i]}</div>\n                <div className=\"conditionContent\">\n                \t<AInput value={d.val} className=\"staffName\" placeholder=\"\u8BF7\u8F93\u5165\u59D3\u540D\" onBlur={_this.writeBlur.bind(_this)} data-num={d.num}/>\n                </div>\n              </div>\n            )\n          }else if(d.type==\"date\"){\n            return(\n              <div className=\"conditionItem\">\n                <div className=\"conditionTitle\">{data.title[i]}</div>\n                <div className=\"conditionContent\">\n                \t<AInput value={d.val} type=\"date\" onBlur={_this.timeBlur.bind(_this)} data-num={d.num}/>\n                </div>\n              </div>\n            )\n          }else if(d.type==\"search\"){\n            return(\n              <div className=\"conditionItem\">\n                <div className=\"conditionTitle\">{data.title[i]}</div>\n                <div className=\"conditionContent\">\n                \t<AInput value={d.val}  className=\"search\"/>\n                  <i className=\"searchIcon\" onClick={_this.searchClick.bind(_this)} data-num={d.num}></i>\n                </div>\n              </div>\n            )\n          }\n        })}\n      </div>\n      )\n    }\n}\n\n      \t";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"selectChange\",\n    value: function selectChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"selectChange\",\n          data: { index: target.selectedIndex, num: target.dataset.num }\n        });\n      }\n    }\n  }, {\n    key: \"writeBlur\",\n    value: function writeBlur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"writeBlur\",\n          data: { val: target.value, num: target.dataset.num }\n        });\n      }\n    }\n  }, {\n    key: \"timeBlur\",\n    value: function timeBlur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"timeBlur\",\n          data: { val: target.value, num: target.dataset.num }\n        });\n      }\n    }\n  }, {\n    key: \"searchClick\",\n    value: function searchClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"searchClick\",\n          data: { num: target.dataset.num }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"searchCondition\" },\n        data && data.content && data.content.map(function (d, i) {\n          if (d.type == \"select\") {\n            return React.createElement(\n              \"div\",\n              { className: \"conditionItem\" },\n              React.createElement(\n                \"div\",\n                { className: \"conditionTitle\" },\n                data.title[i]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"conditionContent\" },\n                React.createElement(\n                  \"select\",\n                  { onChange: _this.selectChange.bind(_this), \"data-num\": d.num },\n                  d.options.map(function (d1, i1) {\n                    return React.createElement(\n                      \"option\",\n                      null,\n                      d1\n                    );\n                  })\n                )\n              )\n            );\n          } else if (d.type == \"input\") {\n            return React.createElement(\n              \"div\",\n              { className: \"conditionItem\" },\n              React.createElement(\n                \"div\",\n                { className: \"conditionTitle\" },\n                data.title[i]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"conditionContent\" },\n                React.createElement(AInput, { value: d.val, className: \"staffName\", placeholder: \"\\u8BF7\\u8F93\\u5165\\u59D3\\u540D\", onBlur: _this.writeBlur.bind(_this), \"data-num\": d.num })\n              )\n            );\n          } else if (d.type == \"date\") {\n            return React.createElement(\n              \"div\",\n              { className: \"conditionItem\" },\n              React.createElement(\n                \"div\",\n                { className: \"conditionTitle\" },\n                data.title[i]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"conditionContent\" },\n                React.createElement(AInput, { value: d.val, type: \"date\", onBlur: _this.timeBlur.bind(_this), \"data-num\": d.num })\n              )\n            );\n          } else if (d.type == \"search\") {\n            return React.createElement(\n              \"div\",\n              { className: \"conditionItem\" },\n              React.createElement(\n                \"div\",\n                { className: \"conditionTitle\" },\n                data.title[i]\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"conditionContent\" },\n                React.createElement(AInput, { value: d.val, className: \"search\" }),\n                React.createElement(\"i\", { className: \"searchIcon\", onClick: _this.searchClick.bind(_this), \"data-num\": d.num })\n              )\n            );\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control28_dbqOIu: function (elem) {},
    doAction_uiControl28_N8wera: function (data, elem) {
      var group = data.dataCustomHandler;var type = data.eventType;if (type == "btnClick") {
        elem.ownerDocument.querySelector("#HPS_SEARCH_WRK_HPS_SEARCH_BTN").click();
      }
    },
    getTemplate_uiControl28_N8wera: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n\tbtnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\"\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div className=\"searchConsequence\">\n      \t<div className=\"ysp_search\" onClick={_this.btnClick.bind(_this)}>\u67E5\u8BE2</div>\n        \n      </div>\n      )\n    }\n}\n\n      \t";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'searchConsequence' },\n        React.createElement(\n          'div',\n          { className: 'ysp_search', onClick: _this.btnClick.bind(_this) },\n          '\\u67E5\\u8BE2'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";

    }
  }, "employeeInfo");
})(window, ysp);