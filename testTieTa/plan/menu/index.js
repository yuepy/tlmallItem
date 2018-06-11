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
               
               */
    },
    getTemplate_uiControl2_Gbhhvb: function () {
      var selfTemplate = "module.exports = React.createClass({\n  componentDidMount:function(){\n    var data = this.props.customData;\n    if(data==\"\u6211\u7684\u5F85\u529E\"){\n      var _this = this;\n    _this.onClick();\n    }\n    \n  },\n  onClick:function(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  onClick1:function(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click1\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>{data&&data.length>0 ? \n      <div></div>: <div style={{'background':'#fff'}}>\n          <div className=\"tit\" style={{'padding-top':'10px'}}>\n        <div className=\"goback\" onClick={this.onClick1.bind(this)}>\n          <span className=\"ysp_goback\"></span><span className=\"text\">\u8FD4\u56DE</span>\n        </div>\n        <div className=\"title\">\n          <h1>\u62A5\u5E10\u5BA1\u6279</h1>\n        </div>\n      </div>\n          <div style={{'color':'red','text-align':'center','margin':'20px'}}>*\u60A8\u6682\u65F6\u65E0\u5BA1\u6279\u6743\u9650*</div>\n      </div>}</div>\n    )\n  }\n})";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  componentDidMount: function componentDidMount() {\n    var data = this.props.customData;\n    if (data == \"\u6211\u7684\u5F85\u529E\") {\n      var _this = this;\n      _this.onClick();\n    }\n  },\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  onClick1: function onClick1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click1\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      data && data.length > 0 ? React.createElement(\"div\", null) : React.createElement(\n        \"div\",\n        { style: { 'background': '#fff' } },\n        React.createElement(\n          \"div\",\n          { className: \"tit\", style: { 'padding-top': '10px' } },\n          React.createElement(\n            \"div\",\n            { className: \"goback\", onClick: this.onClick1.bind(this) },\n            React.createElement(\"span\", { className: \"ysp_goback\" }),\n            React.createElement(\n              \"span\",\n              { className: \"text\" },\n              \"\\u8FD4\\u56DE\"\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"title\" },\n            React.createElement(\n              \"h1\",\n              null,\n              \"\\u62A5\\u5E10\\u5BA1\\u6279\"\n            )\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { style: { 'color': 'red', 'text-align': 'center', 'margin': '20px' } },\n          \"*\\u60A8\\u6682\\u65F6\\u65E0\\u5BA1\\u6279\\u6743\\u9650*\"\n        )\n      )\n    );\n  }\n});";
    }
  }, "menu");
})(window, ysp);