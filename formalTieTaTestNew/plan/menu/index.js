(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2_hNIyUF: function (elem) {
      if (elem) {
        var arr = [];if (elem.textContent == "我的待办") {
          arr.push(elem.textContent);
        }return arr;
      }return [];
    },
    doAction_uiControl2_Gbhhvb: function (data, elem) {
      if (data.eventType == "click") {
        // ysp.appMain.showLoading();
        elem.click();
      } else if (data.eventType == "click1") {
        top.EAPI.back();
      } // <div className="content_body">
      //         <span className="logo"></span>
      //         <span className="text">我的待办</span>
      //         <span className="more"></span>
      //       </div>
      /*
               module.exports = React.createClass({
                 onClick:function(e){
                    var target=e.target;
                   var handler=this.props.customHandler;
                   if(handler){
                     handler({
                       eventType:"click"
                     })
                   }
                 },
                 render: function() {
                   return (
                     <div onClick={this.onClick.bind(this)} className="content_body">
                       <span className="logo"></span>
                       <span className="text">我的待办</span>
                       <span className="more"></span>
                     </div>
                   )
                 }
               });
               componentDidMount:function(){
          var _this = this;
          _this.onClick();
        },
               
               */ //   componentDidMount(){
      //     var data = this.props.customData;
      //     if(data=="我的待办"){
      //       var _this = this;
      //     _this.onClick();
      //     }
      //   }
    },
    getTemplate_uiControl2_Gbhhvb: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  onClick(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n    // this.setState({\n    //     open:!this.state.open\n    //   })\n  }\n  onClick1(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click1\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div>{data&&data.length>0 ? \n      <div style={{'background':'#fff'}}>\n          <div className=\"tit\">\n        <div className=\"goback\" onClick={_this.onClick1.bind(_this)}>\n          <span className=\"ysp_goback\"></span><span className=\"text\">\u8FD4\u56DE</span>\n        </div>\n        <div className=\"title\"  style={{'margin-left':'-30px'}}>\n          <h1>\u4EFB\u52A1\u4E2D\u5FC3</h1>\n        </div>\n      </div>\n      <div className=\"content_body\" onClick={_this.onClick.bind(_this)}>\n         <span className=\"logo\"></span>\n         <span className=\"text\">\u6211\u7684\u5F85\u529E</span>\n        <span className=\"more\"></span>\n       </div></div>: <div style={{'background':'#fff'}}>\n          <div className=\"tit\">\n        <div className=\"goback\" onClick={_this.onClick1.bind(_this)}>\n          <span className=\"ysp_goback\"></span><span className=\"text\">\u8FD4\u56DE</span>\n        </div>\n        <div className=\"title\"  style={{'margin-left':'-30px'}}>\n          <h1>\u4EFB\u52A1\u4E2D\u5FC3</h1>\n        </div>\n      </div>\n          <div style={{'color':'red','text-align':'center','margin':'20px'}}>*\u60A8\u6682\u65F6\u65E0\u5BA1\u6279\u6743\u9650*</div>\n      </div>}</div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onClick\",\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n      // this.setState({\n      //     open:!this.state.open\n      //   })\n    }\n  }, {\n    key: \"onClick1\",\n    value: function onClick1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click1\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.length > 0 ? React.createElement(\n          \"div\",\n          { style: { 'background': '#fff' } },\n          React.createElement(\n            \"div\",\n            { className: \"tit\" },\n            React.createElement(\n              \"div\",\n              { className: \"goback\", onClick: _this.onClick1.bind(_this) },\n              React.createElement(\"span\", { className: \"ysp_goback\" }),\n              React.createElement(\n                \"span\",\n                { className: \"text\" },\n                \"\\u8FD4\\u56DE\"\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"title\", style: { 'margin-left': '-30px' } },\n              React.createElement(\n                \"h1\",\n                null,\n                \"\\u4EFB\\u52A1\\u4E2D\\u5FC3\"\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"content_body\", onClick: _this.onClick.bind(_this) },\n            React.createElement(\"span\", { className: \"logo\" }),\n            React.createElement(\n              \"span\",\n              { className: \"text\" },\n              \"\\u6211\\u7684\\u5F85\\u529E\"\n            ),\n            React.createElement(\"span\", { className: \"more\" })\n          )\n        ) : React.createElement(\n          \"div\",\n          { style: { 'background': '#fff' } },\n          React.createElement(\n            \"div\",\n            { className: \"tit\" },\n            React.createElement(\n              \"div\",\n              { className: \"goback\", onClick: _this.onClick1.bind(_this) },\n              React.createElement(\"span\", { className: \"ysp_goback\" }),\n              React.createElement(\n                \"span\",\n                { className: \"text\" },\n                \"\\u8FD4\\u56DE\"\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"title\", style: { 'margin-left': '-30px' } },\n              React.createElement(\n                \"h1\",\n                null,\n                \"\\u4EFB\\u52A1\\u4E2D\\u5FC3\"\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { style: { 'color': 'red', 'text-align': 'center', 'margin': '20px' } },\n            \"*\\u60A8\\u6682\\u65F6\\u65E0\\u5BA1\\u6279\\u6743\\u9650*\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "menu");
})(window, ysp);