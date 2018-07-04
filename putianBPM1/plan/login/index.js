(function(win, ysp) {
    ysp.runtime.Model.extendLoadingModel({
        getData_control0_N7zrZx: function(elem) {
            if (elem) {
                var data = [];
                var ipts = elem.querySelectorAll('.mini-textbox-input');
                var btnVal = elem.querySelectorAll('.log');
                data.push(ipts[0].value);
                data.push(ipts[1].value);
                data.push(btnVal[0].value);
                if (elem.querySelector("#userId").querySelector(".mini-errorIcon")) {
                    data.push(true);
                } else {
                    data.push(false);
                };
                if (elem.querySelector("#password").querySelector(".mini-errorIcon")) {
                    data.push(true);
                } else {
                    data.push(false);
                }
                if (elem.querySelector("#error")) {
                    data.push(elem.querySelector("#error").textContent);
                } else {
                    data.push("");
                }
                return data;
            }
            return "";
        },
        doAction_uiControl0_W1BKWP: function(data, elem) {
            if (data.eventType == 'change') {
                var data = data.dataCustom;
                if (data[0] == 'ysp-login-card-loginUserName') {
                    $(elem).find('.mini-textbox-input').eq(0).val(data[1]);
                    $(elem).find('.mini-textbox-input').eq(0).trigger("change");
                } else if (data[0] == 'ysp-login-card-loginPassWord') {
                    $(elem).find('.mini-textbox-input').eq(1).val(data[1]);
                }
            } else if (data.eventType == 'click') {
                $(elem).find('.log').eq(0).click();
            } else if (data.eventType == "cancel") {
                ysp.customHelper.back();
            }
        },
        getTemplate_uiControl0_W1BKWP: function() {
            var selfTemplate = 'export default class extends React.Component{\n\n  render(){\n   const\t{customData,customHandler}=this.props;\n    return (\n      <div className=\'ysp-login-background\'>\n      \t<div className=\'ysp-login-card\'>\n          <div className=\'ysp-login-card-user\'>\n        \t\t<span className=\'user\'></span>\n          \t<input className=\'ysp-login-card-loginUserName\' type=\'text\' defaultValue={customData[0]} onChange={(e)=>{customHandler({data:[e.target.className,e.target.value],eventType:\'change\'})}}/>\n            {customData[3]? <span className="ysp_user_errorIcon"></span>:<span></span>}\n        \t</div>\n          <div className=\'ysp-login-card-pass\'>\n          \t<span className=\'pass\'></span>\n        \t\t<input className=\'ysp-login-card-loginPassWord\' type=\'password\' defaultValue={customData[1]} onChange={(e)=>{customHandler({data:[e.target.className,e.target.value],eventType:\'change\'})}} defaultValue={customData[1]}/>\n            {customData[4]? <span className="ysp_user_errorIcon"></span>:<span></span>}\n        \t</div>\n        \t<div className="ysp-login-card-btnBody">\n            <AMUI.Button style={{width:\'50%\'}} block amStyle=\'primary\' onClick={(e)=>{customHandler({eventType:\'click\'})}}>{customData[2]}</AMUI.Button>\n            <AMUI.Button style={{width:\'50%\'}} block amStyle=\'primary\' onClick={(e)=>{customHandler({eventType:\'cancel\'})}}>\u53D6\u6D88</AMUI.Button>\n          </div>\n          {customData[5]==""? <div></div>:<div className="ysp_error_tip" style={{color:"red",textAlign:"center"}}>{customData[5]}</div>}\n   \t\t\t</div>   \n      </div>\n    )\n  }\n}';
            return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-login-background' },\n        React.createElement(\n          'div',\n          { className: 'ysp-login-card' },\n          React.createElement(\n            'div',\n            { className: 'ysp-login-card-user' },\n            React.createElement('span', { className: 'user' }),\n            React.createElement('input', { className: 'ysp-login-card-loginUserName', type: 'text', defaultValue: customData[0], onChange: function onChange(e) {\n                customHandler({ data: [e.target.className, e.target.value], eventType: 'change' });\n              } }),\n            customData[3] ? React.createElement('span', { className: 'ysp_user_errorIcon' }) : React.createElement('span', null)\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-login-card-pass' },\n            React.createElement('span', { className: 'pass' }),\n            React.createElement('input', _defineProperty({ className: 'ysp-login-card-loginPassWord', type: 'password', defaultValue: customData[1], onChange: function onChange(e) {\n                customHandler({ data: [e.target.className, e.target.value], eventType: 'change' });\n              } }, 'defaultValue', customData[1])),\n            customData[4] ? React.createElement('span', { className: 'ysp_user_errorIcon' }) : React.createElement('span', null)\n          ),\n          React.createElement(\n            'div',\n            { className: 'ysp-login-card-btnBody' },\n            React.createElement(\n              AMUI.Button,\n              { style: { width: '50%' }, block: true, amStyle: 'primary', onClick: function onClick(e) {\n                  customHandler({ eventType: 'click' });\n                } },\n              customData[2]\n            ),\n            React.createElement(\n              AMUI.Button,\n              { style: { width: '50%' }, block: true, amStyle: 'primary', onClick: function onClick(e) {\n                  customHandler({ eventType: 'cancel' });\n                } },\n              '\\u53D6\\u6D88'\n            )\n          ),\n          customData[5] == \"\" ? React.createElement('div', null) : React.createElement(\n            'div',\n            { className: 'ysp_error_tip', style: { color: \"red\", textAlign: \"center\" } },\n            customData[5]\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
        }
    }, "login");
})(window, ysp);