(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control572_xaRBP3: function (elem) {},
    doAction_uiControl572_bOwq97: function (data, elem) {
      if ('click' == data.eventType) {
        elem && elem.click();
      }
    },
    getTemplate_uiControl572_bOwq97: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\"  onClick={this.handlerClick.bind(this)}>\n        BPM\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"BPM\"\n    );\n  }\n});";
    },
    getData_control573_yxwQIJ: function (elem) {},
    doAction_uiControl573_UzV3Su: function (data, elem) {
      if ("click" == data.eventType) {
        elem && elem.click();
      }
    },
    getTemplate_uiControl573_UzV3Su: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u515A\u7FA4\u5DE5\u4F5C\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u515A\\u7FA4\\u5DE5\\u4F5C\"\n    );\n  }\n});";
    },
    getData_control574_rxxUS9: function (elem) {},
    doAction_uiControl574_hehvPo: function (data, elem) {
      if ('click' == data.eventType) {
        elem && elem.click();
      }
    },
    getTemplate_uiControl574_hehvPo: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u7EAA\u68C0\u76D1\u5BDF\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u7EAA\\u68C0\\u76D1\\u5BDF\"\n    );\n  }\n});";
    },
    getData_control577_63WGNP: function (elem) {},
    doAction_uiControl577_dppg6H: function (data, elem) {
      if ('click' == data.eventType) {
        // var el = elem && elem.querySelector('ul').nextElementSibling;
        // el && el.click();
        elem.ownerDocument.defaultView.open('http://172.16.11.61/List.aspx');
      }
    },
    getTemplate_uiControl577_dppg6H: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u5FEB\u8BAF\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u5FEB\\u8BAF\"\n    );\n  }\n});";
    },
    getData_control581_MyOJP0: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl581_WKv8W8: function (data, elem) {
      if ('click' == data.eventType) {
        var el = elem && elem.querySelector('ul').nextElementSibling;el && el.click();
      }
    },
    getTemplate_uiControl581_WKv8W8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u516C\u53F8\u516C\u544A\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u516C\\u53F8\\u516C\\u544A\"\n    );\n  }\n});";
    },
    getData_control584_Dv9hyl: function (elem) {},
    doAction_uiControl584_EzVBoB: function (data, elem) {
      if ('click' == data.eventType) {
        elem && elem.click();
      }
    },
    getTemplate_uiControl584_EzVBoB: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u91CD\u5927\u4E8B\u9879\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u91CD\\u5927\\u4E8B\\u9879\"\n    );\n  }\n});";
    },
    getData_control644_fkQ0GT: function (elem) {
      if (!elem) {
        return;
      }var data = [];var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        data.push(lis[i]);
      }return data;
    },
    doAction_uiControl644_S884vI: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelectorAll('li')[data.customData.index].querySelector('a').click();
      }
    },
    getTemplate_uiControl644_S884vI: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.getAttribute('data-id');\n    if(handler){\n      handler({eventType:'click',data:{index:index}})\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n    _this = this;\n    var lis = data.map(function(ele,index){\n      return (\n      \t<div onClick={_this.onClick} data-id={index}>\u56FE\u7247{++index}</div>\n      )\n    })\n    return (\n      <div>\n        {lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.getAttribute('data-id');\n    if (handler) {\n      handler({ eventType: 'click', data: { index: index } });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { onClick: _this.onClick, 'data-id': index },\n        '\\u56FE\\u7247',\n        ++index\n      );\n    });\n    return React.createElement(\n      'div',\n      null,\n      lis\n    );\n  }\n});";
    },
    getData_control772_ZLrDG3: function (elem) {},
    doAction_uiControl772_nTamgL: function (data, elem) {
      if ('click' == data.eventType) {
        //ysp.appMain.openWindow("http://172.16.11.61:81/Login.aspx");
        elem.ownerDocument.defaultView.open("http://172.16.11.61:81/Login.aspx");
      }
    },
    getTemplate_uiControl772_nTamgL: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\"ysp-homePage\" onClick={this.handlerClick.bind(this)}>\n        \u5DE5\u8D44\u5355\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-homePage\", onClick: this.handlerClick.bind(this) },\n      \"\\u5DE5\\u8D44\\u5355\"\n    );\n  }\n});";
    }
  }, "homePage");
})(window, ysp);