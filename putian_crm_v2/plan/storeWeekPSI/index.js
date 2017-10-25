(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control192_T67x3k: function (elem) {},
    doAction_uiControl189_yeSTwE: function (data, elem) {
      if (data.eventType == "back") {
        // ysp.customHelper.backHome();
        //ysp.appMain.back(); //ysp.customHelper.back(); //history.go(-1);
        // var a = ysp.runtime.Context.activeContext.id;
        var pageId = ysp.customHelper.pageId();if (parent.EAPI.isAndroid() && pageId == "context52_Wg5qcG") {
          history.back();
        } else if (parent.EAPI.isIOS() && pageId == "context52_Wg5qcG") {
          var url = "http://192.168.1.224:8080/pttlCrm/res/page/psi/storeInfocollection.html";ysp.appMain.reloadPage(url);
        } else if (parent.EAPI.isIOS() && pageId == "context2_15cCKI") {
          var urls = "http://192.168.1.224:8080/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";ysp.appMain.reloadPage(urls);
        } else {
          history.back();
        }
      }
    },
    getTemplate_uiControl189_yeSTwE: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  InformationHeader\n} from 'ysp-custom-components';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n   constructor(props){\n     super(props);\n   }\n  \n  click(){\n    var evt = new Event('ysp-time-show')\n    window.dispatchEvent(evt)\n  }\n   render(){\n       let _this = this;\n       return (\n         <InformationHeader \n           data={{centerText:\"\u5468\u522BPSI\",rightText:\"\"}} \n           backIsShow={true}\n           time={(e)=>{\n              var evt = new Event('ysp-time-show');\n              evt.value = '\u6253\u5F00\u65E5\u5386';\n            \twindow.dispatchEvent(evt)\n              // let target=e.target;\n              // let handler=this.props.customHandler;\n              // if(handler){\n              //    handler({\n              //      eventType:'click'\n              //    })\n              // }\n  \t\t\t\t\t}\n          }\n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click() {\n      var evt = new Event('ysp-time-show');\n      window.dispatchEvent(evt);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.InformationHeader, {\n        data: { centerText: \"\u5468\u522BPSI\", rightText: \"\" },\n        backIsShow: true,\n        time: function time(e) {\n          var evt = new Event('ysp-time-show');\n          evt.value = '\u6253\u5F00\u65E5\u5386';\n          window.dispatchEvent(evt\n          // let target=e.target;\n          // let handler=this.props.customHandler;\n          // if(handler){\n          //    handler({\n          //      eventType:'click'\n          //    })\n          // }\n          );\n        },\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control193_MxubXF: function (elem) {
      if (!elem) {
        return;
      }var el = elem.querySelectorAll('span')[2].querySelectorAll('input')[1].value;return el;
    },
    doAction_uiControl190_VytUNE: function (data, elem) {},
    getTemplate_uiControl190_VytUNE: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  \n\trender(){\n    var data=this.props.customData;\n    return(\n    \t<div className=\"ysp_InfomationFill_week_PSI\">\n        <span>\u4F60\u9009\u62E9\u4E86\u7B2C</span>\n        <span>{data}</span>\n        <span>\u5468</span>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_InfomationFill_week_PSI\" },\n        React.createElement(\n          \"span\",\n          null,\n          \"\\u4F60\\u9009\\u62E9\\u4E86\\u7B2C\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          \"\\u5468\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control196_oJplbb: function (elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }return data;
    },
    doAction_uiControl193_VE8ZbC: function (data, elem) {
      if (data.eventType == "alertClick") {
        ysp.customHelper.tipMsg.confirm();
      }
    },
    getTemplate_uiControl193_VE8ZbC: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tAlert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  \n  render(){\n    var _this=this;\n    var data=this.props.customData;\n     return(\n    \t<div>\n        {data.postMessage==\"\" ? \"\" : \n          <Alert\n            content={data.postMessage} \n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"alertClick\"\n                  })\n                }\n              }\n            }\n          />\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data.postMessage == \"\" ? \"\" : React.createElement(_yspCustomComponents.Alert, {\n          content: data.postMessage,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"alertClick\"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control197_NbJPxo: function (elem) {
      if (!elem) {
        return [];
      }var data = { content: [], SO: [], I: [], trsLength: [], date: [] };var trs = elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr");if (trs) {
        [].forEach.call(trs, function (item, index) {
          var date = elem.querySelector(".m-time").querySelectorAll("span")[2].querySelectorAll("input")[0].value;var trsLength = trs.length;var SOInput = item.querySelectorAll("td")[6].querySelectorAll("input")[1] || item.querySelectorAll("td")[6].textContent;var input = item.querySelectorAll("td")[7].querySelectorAll("input")[1] || item.querySelectorAll("td")[7].textContent;var SOInputType;var SOInputValue;var b = [];var a = [];if (SOInput) {
            if (item.querySelectorAll("td")[6].querySelectorAll("input")[1]) {
              SOInputType = true;SOInputValue = item.querySelectorAll("td")[6].querySelectorAll("input")[1].value;
            } else {
              SOInputType = 'flag';SOInputValue = item.querySelectorAll("td")[6].textContent;
            }
          } else {
            SOInputType = false;SOInputValue = "";
          }b.push(SOInputType);b.push(SOInputValue);data.SO.push(b); //data.SO.inputValue.push(SOInputValue);
          var inputType;var inputValue;if (input) {
            if (item.querySelectorAll("td")[7].querySelectorAll("input")[1]) {
              inputType = true;inputValue = item.querySelectorAll("td")[7].querySelectorAll("input")[1].value;
            } else {
              inputType = "flag";inputValue = item.querySelectorAll("td")[7].textContent;
            }
          } else {
            inputType = false;inputValue = "";
          }a.push(inputType);a.push(inputValue);data.I.push(a);var c = [];var dateText = item.querySelectorAll("td")[0].textContent;var xmText = item.querySelectorAll("td")[2].textContent;var cpxlText = item.querySelectorAll("td")[3].textContent;var jxText = item.querySelectorAll("td")[4].textContent;var colorText = item.querySelectorAll("td")[5].textContent;c.push(dateText);c.push(xmText);c.push(cpxlText);c.push(jxText);c.push(colorText);data.content.push(c);data.trsLength.push(trsLength);data.date.push(date);
        });return data;
      }return data;
    },
    doAction_uiControl194_WPQSbb: function (data, elem) {
      if (data.eventType == "change") {
        var value = data.dataCustom.value;var index = data.dataCustom.index;var type = data.dataCustom.type;if ("PSISO" == type) {
          elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[index].querySelectorAll("td")[6].querySelectorAll("input")[1].value = value.replace(/[^0-9]/g, "");
        }if ("PSII" == type) {
          elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[index].querySelectorAll("td")[7].querySelectorAll("input")[1].value = value.replace(/[^0-9]/g, "");
        }
      } else if (data.eventType == "click") {
        elem.ownerDocument.querySelector(".collectionPSIentercontentbutton").querySelectorAll("span")[0].click();
      }
    },
    getTemplate_uiControl194_WPQSbb: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  \n  onChange(e){\n    //var target = e.target;\n    e.target.value = e.target.value.replace(/[^0-9]/g,'');\n    var handler = this.props.customHandler;\n    var value = e.target.value;\n    if(handler){\n      handler({\n        data:{\n          value: value,\n          index: e.target.getAttribute(\"data-index\"),\n          type: e.target.getAttribute(\"data-type\")\n        },\n        eventType:\"change\"\n      })\n    }\n  }\n  onClick(e){\n    var handler=this.props.customHandler;\n    var targets = e.target;\n    targets.disabled = true;\n    setTimeout(function(e){\n      targets.disabled = false;\n    },1500);\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  }\n\trender(){\n    var data = this.props.customData || [];\n    var trsLength = (this.props.customData && this.props.customData.trsLength) || []\n    var _this=this;\n    return(\n    \t<div className=\"ysp_StoreInfomationFillWeek_PSI\">\n      \t{trsLength.length >0 ? \n        data.SO.map((item,index)=>{\n          return(\n            <div className=\"ysp_StoreInfomationFillWeek_PSI_item\">\n              <div>\n                <span className=\"ysp_PSI_item\">{data.content[index][1]}</span>\n                <span className=\"ysp_PSI_date\">{data.date[index]}</span>\n              </div>\n              <div>\n                <span>\u4EFB\u52A1\u9879:</span>\n                <span>{data.content[index][2]}{data.content[index][3]}{data.content[index][4]}</span>\n              </div>\n              <div>\n                {\n                  item[0] == true && item[1].length >0 ? <div className=\"ysp_StoreWeek_PSI_item_input_blueColor\">\n                  <span>SO</span>\n                  <span><input type=\"text\" name=\"name\" value= {item[1]} data-index={index} data-type = \"PSISO\" onChange={_this.onChange.bind(_this)} /></span>\n                </div> : item[0] == true && item[1].length <= 0 ? <div className=\"ysp_StoreWeek_PSI_item_input_color\">\n                  <span>SO</span>\n                  <span><input type=\"text\" name=\"name\" data-index={index} data-type = \"PSISO\" onChange={_this.onChange.bind(_this)} value = {item[1]}/></span>\n                </div> : item[0] == \"flag\" ? \n                <div className=\"ysp_StoreWeek_PSI_item_noInput\">\n                  <span>SO</span>\n                  <span>{item[1]}</span>\n                </div>      \n                  : \n                <div className=\"ysp_StoreWeek_PSI_item-color\">\n                  <span>SO</span>\n                  <span><input type=\"text\" disabled/></span>\n                </div>\n                }\n              \t \n                {\n                  data.I[index][0] == true && data.I[index][1].length >0 ? \n                <div className=\"ysp_StoreWeek_PSI_item_input_blueColor\">\n                  <span>I</span>\n                  <span><input type=\"text\" name = \"name\" value={data.I[index][1]} data-index={index} data-type = \"PSII\" onChange={_this.onChange.bind(_this)}/></span>\n                </div> : \n                  data.I[index][0] == true && data.I[index][1].length <=0 ? \n                <div className=\"ysp_StoreWeek_PSI_item_input_color\">\n                  <span>I</span>\n                  <span><input type=\"text\" name = \"name\" data-index={index} data-type = \"PSII\" onChange={_this.onChange.bind(_this)} value = {data.I[index][1]}/></span>\n                </div> : data.I[index][0] == \"flag\" ? \n                <div className=\"ysp_StoreWeek_PSI_item_noInput\" >\n                  <span>I</span>\n                  <span>{data.I[index][1]}</span>\n                </div> : \n                <div className=\"ysp_StoreWeek_PSI_item-color\" >\n                  <span>I</span>\n                  <span><input type=\"text\" disabled/></span>\n                </div>\n                }\n              </div>\n           </div>\n          )\n        }) : <div>\u6682\u65E0\u6570\u636E</div>}\n        <div className=\"ysp_weekPSI_submit-save\">\n        \t<button onClick={_this.onClick.bind(_this)} className=\"ysp_weekPSI_submitBtn\" >\u63D0\u4EA4</button>\n        </div>\n        \n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      //var target = e.target;\n      e.target.value = e.target.value.replace(/[^0-9]/g, '');\n      var handler = this.props.customHandler;\n      var value = e.target.value;\n      if (handler) {\n        handler({\n          data: {\n            value: value,\n            index: e.target.getAttribute(\"data-index\"),\n            type: e.target.getAttribute(\"data-type\")\n          },\n          eventType: \"change\"\n        });\n      }\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var targets = e.target;\n      targets.disabled = true;\n      setTimeout(function (e) {\n        targets.disabled = false;\n      }, 1500);\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      var trsLength = this.props.customData && this.props.customData.trsLength || [];\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_StoreInfomationFillWeek_PSI\" },\n        trsLength.length > 0 ? data.SO.map(function (item, index) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp_StoreInfomationFillWeek_PSI_item\" },\n            React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"span\",\n                { className: \"ysp_PSI_item\" },\n                data.content[index][1]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_PSI_date\" },\n                data.date[index]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                \"\\u4EFB\\u52A1\\u9879:\"\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                data.content[index][2],\n                data.content[index][3],\n                data.content[index][4]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              item[0] == true && item[1].length > 0 ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_input_blueColor\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"SO\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", name: \"name\", value: item[1], \"data-index\": index, \"data-type\": \"PSISO\", onChange: _this.onChange.bind(_this) })\n                )\n              ) : item[0] == true && item[1].length <= 0 ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_input_color\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"SO\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", name: \"name\", \"data-index\": index, \"data-type\": \"PSISO\", onChange: _this.onChange.bind(_this), value: item[1] })\n                )\n              ) : item[0] == \"flag\" ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_noInput\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"SO\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  item[1]\n                )\n              ) : React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item-color\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"SO\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", disabled: true })\n                )\n              ),\n              data.I[index][0] == true && data.I[index][1].length > 0 ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_input_blueColor\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"I\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", name: \"name\", value: data.I[index][1], \"data-index\": index, \"data-type\": \"PSII\", onChange: _this.onChange.bind(_this) })\n                )\n              ) : data.I[index][0] == true && data.I[index][1].length <= 0 ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_input_color\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"I\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", name: \"name\", \"data-index\": index, \"data-type\": \"PSII\", onChange: _this.onChange.bind(_this), value: data.I[index][1] })\n                )\n              ) : data.I[index][0] == \"flag\" ? React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item_noInput\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"I\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  data.I[index][1]\n                )\n              ) : React.createElement(\n                \"div\",\n                { className: \"ysp_StoreWeek_PSI_item-color\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"I\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  React.createElement(\"input\", { type: \"text\", disabled: true })\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"div\",\n          null,\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"ysp_weekPSI_submit-save\" },\n          React.createElement(\n            \"button\",\n            { onClick: _this.onClick.bind(_this), className: \"ysp_weekPSI_submitBtn\" },\n            \"\\u63D0\\u4EA4\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control198_wFVkk6: function (elem) {},
    doAction_uiControl195_Ihf2ES: function (data, elem) {
      if (data.eventType == 'upValue') {
        var input = elem.ownerDocument.querySelector('#srarch_date');input.value = data.dataCustom;input.focus();elem.ownerDocument.querySelector("#search").click();
      }
    },
    getTemplate_uiControl195_Ihf2ES: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      year : true,\n      mouth : true,\n      day : true,\n      show : false,\n      data : true\n    }\n    window.addEventListener('ysp-time-show',this.toggle.bind(this),false)\n  }\n  componentDidUpdate(){\n    this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n  }\n  styleId(){\n    var doc = this.refs.time;\n    if(this.state.data && !this.state.day  && !!this.state.mouth){\n      doc.querySelector('#year').style.width = '50%';\n      doc.querySelector('#mouth').style.width = '50%';\n    }\n    if(this.state.data && !this.state.mouth && !this.state.day){\n      doc.querySelector('#year').style.width = '100%';\n    }\n    if(!this.state.data){\n      doc.querySelector('#year').style.width = '100%';\n    }\n  }\n  toggle(){\n    this.setState({\n      show : !this.state.show\n    })\n  }\n  activeValue(even){\n    var doc = even.parentElement.nextElementSibling;\n    var year = doc.querySelector('#year').querySelector('.active').textContent;\n    var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n    mouth = mouth < 10 ? '0' + mouth : mouth; \n    day = day && day < 10 ? '0' + day : day;\n    var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n    return time;\n    // if(this.props.customData){\n    //   var year = doc.querySelector('#year').querySelector('.active').textContent;\n    //   var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    //   var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n    //   mouth = mouth < 10 ? '0' + mouth : mouth; \n    //   day = day && day < 10 ? '0' + day : day;\n    //   var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n    //   return time;\n    // }else{\n    //   return doc.querySelector('#year').querySelector('.active').textContent;\n    // }\n    \n  }\n  upValue(e){\n    var handler = this.props.customHandler;\n    var value = this.activeValue(e.target);\n    if(handler){\n      handler({\n        data : value,\n        eventType : 'upValue'\n      })\n    }\n    this.setState({\n      show : false\n    })\n  }\n  render(){\n    var _this = this;\n    return(\n      <div>{this.state.show && \n        <div className='moudle-time' ref='time'>\n          <div className = 'date-time'>\n            <SaleReachCalendar \n              mouth = {_this.state.mouth}\n              day = {_this.state.day}\n              upValue = {_this.upValue.bind(_this)}\n              show = {(e)=>{\n                _this.toggle();\n              }}\n              y = {_this.state.year}\n            />\n          </div>\n        </div>}\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      year: true,\n      mouth: true,\n      day: true,\n      show: false,\n      data: true\n    };\n    window.addEventListener('ysp-time-show', _this2.toggle.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      this.state.show ? this.styleId() : console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }, {\n    key: 'styleId',\n    value: function styleId() {\n      var doc = this.refs.time;\n      if (this.state.data && !this.state.day && !!this.state.mouth) {\n        doc.querySelector('#year').style.width = '50%';\n        doc.querySelector('#mouth').style.width = '50%';\n      }\n      if (this.state.data && !this.state.mouth && !this.state.day) {\n        doc.querySelector('#year').style.width = '100%';\n      }\n      if (!this.state.data) {\n        doc.querySelector('#year').style.width = '100%';\n      }\n    }\n  }, {\n    key: 'toggle',\n    value: function toggle() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: 'activeValue',\n    value: function activeValue(even) {\n      var doc = even.parentElement.nextElementSibling;\n      var year = doc.querySelector('#year').querySelector('.active').textContent;\n      var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n      var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n      mouth = mouth < 10 ? '0' + mouth : mouth;\n      day = day && day < 10 ? '0' + day : day;\n      var time = day ? year + '-' + mouth + '-' + day : mouth ? year + '-' + mouth : year;\n      return time;\n      // if(this.props.customData){\n      //   var year = doc.querySelector('#year').querySelector('.active').textContent;\n      //   var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n      //   var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n      //   mouth = mouth < 10 ? '0' + mouth : mouth; \n      //   day = day && day < 10 ? '0' + day : day;\n      //   var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n      //   return time;\n      // }else{\n      //   return doc.querySelector('#year').querySelector('.active').textContent;\n      // }\n    }\n  }, {\n    key: 'upValue',\n    value: function upValue(e) {\n      var handler = this.props.customHandler;\n      var value = this.activeValue(e.target);\n      if (handler) {\n        handler({\n          data: value,\n          eventType: 'upValue'\n        });\n      }\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        this.state.show && React.createElement(\n          'div',\n          { className: 'moudle-time', ref: 'time' },\n          React.createElement(\n            'div',\n            { className: 'date-time' },\n            React.createElement(_yspCustomComponents.SaleReachCalendar, {\n              mouth: _this.state.mouth,\n              day: _this.state.day,\n              upValue: _this.upValue.bind(_this),\n              show: function show(e) {\n                _this.toggle();\n              },\n              y: _this.state.year\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);