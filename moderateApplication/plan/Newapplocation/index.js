(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control587_qgQlzN: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.textContent.trim();return data;
    },
    doAction_uiControl587_km9Wh8: function (data, elem) {
      if ("back" == data.eventType) {
        // ysp.appMain.back(); //ysp.runtime.Model.setForceMatchModels(['commission']);
        ysp.runtime.Browser.activeBrowser.contentWindow.close(); //   if (ysp.appMain.isIOS()) {
        //     top.EAPI.postMessageToNative('closePage', null);
        //   }
        //   if (ysp.appMain.isAndroid()) {
        //     window.yspCheckIn.closePage();
        //   }
      }
    },
    getTemplate_uiControl587_km9Wh8: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  back:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'back'\n      })\n    }\n  },\n  // componentDidMount:function(){\n  //   if(ysp.appMain.isAndroid()){\n  //     window.yspCheckIn.closePageType(\"1\");\n  //   }\n  //   if(ysp.appMain.isIOS()){\n  //     var _setupWebViewJavascriptBridge = function (callback) {\n  //       if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }\n  //       if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }\n  //       window.WVJBCallbacks = [callback];\n  //       var WVJBIframe = document.createElement(\"iframe\");\n  //       WVJBIframe.style.display = \"none\";\n  //       WVJBIframe.src = \"wvjbscheme://__BRIDGE_LOADED__\";\n  //       document.documentElement.appendChild(WVJBIframe);\n  //       setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)\n  //   \t};\n  //     _setupWebViewJavascriptBridge(function(bridge) {\n  //         bridge.callHandler(\"closePageType\", 'true',function responseCallback(responseData) {\n  //             console.log(\"JS received response:\", responseData)\n  //         })\n  //     });\n  //   }\n  // },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={this.back.bind(this)}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'back'\n      });\n    }\n  },\n  // componentDidMount:function(){\n  //   if(ysp.appMain.isAndroid()){\n  //     window.yspCheckIn.closePageType(\"1\");\n  //   }\n  //   if(ysp.appMain.isIOS()){\n  //     var _setupWebViewJavascriptBridge = function (callback) {\n  //       if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }\n  //       if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }\n  //       window.WVJBCallbacks = [callback];\n  //       var WVJBIframe = document.createElement(\"iframe\");\n  //       WVJBIframe.style.display = \"none\";\n  //       WVJBIframe.src = \"wvjbscheme://__BRIDGE_LOADED__\";\n  //       document.documentElement.appendChild(WVJBIframe);\n  //       setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)\n  //   \t};\n  //     _setupWebViewJavascriptBridge(function(bridge) {\n  //         bridge.callHandler(\"closePageType\", 'true',function responseCallback(responseData) {\n  //             console.log(\"JS received response:\", responseData)\n  //         })\n  //     });\n  //   }\n  // },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: this.back.bind(this) },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control588_gFJbDL: function (elem) {
      if (!elem) {
        return;
      }var data = { flag: [] };data.flag.push(elem.previousElementSibling.previousElementSibling.querySelectorAll('li')[0].querySelector('a').getAttribute("class"));var lis = elem.querySelectorAll("li");for (var i = 0; i < lis.length - 1; i++) {
        var cla = lis[i].querySelector("a").getAttribute("class");data.flag.push(cla);
      }return data;
    },
    doAction_uiControl588_WA9IUZ: function (data, elem) {
      if ('click' == data.eventType) {
        var title = data.dataCustom;if ('待办' == title) {
          ysp.appMain.showLoading();elem.querySelectorAll("li")[0].querySelector("a").click();
        } else {
          // var url = ysp.appMain.getActiveUrl();
          // ysp.appMain.openWindow(url);
          ysp.appMain.showLoading();elem.querySelectorAll("li")[1].querySelector("a").click();
        }
      }if (data.eventType == 'onclick') {
        ysp.appMain.showLoading();elem.parentElement.querySelector('ul').querySelectorAll('li')[0].querySelector('a').click(); // elem.previousElementSibling.previousElementSibling.querySelectorAll('li')[0].querySelector('a').click();
      }
    },
    getTemplate_uiControl588_WA9IUZ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onclick'\n      })\n    }\n  },\n  handlerClick:function(e){\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: title,\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData && this.props.customData.flag || [];\n    return (\n      <div class=\"ysp-index-title\">\n        <div className = {data[0] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\"} data-title = \"\u5F85\u529E\" onClick={this.onclick.bind(this)}>\u65B0\u5EFA\u7533\u8BF7</div>\n        <div className = {data[1] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\"} data-title = \"\u5F85\u529E\" onClick={this.handlerClick.bind(this)}>\u5F85\u529E</div>\n        <div className = {data[2] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\"} data-title = \"\u5DF2\u529E\" onClick={this.handlerClick.bind(this)}>\u5DF2\u529E</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclick'\n      });\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: title,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData && this.props.customData.flag || [];\n    return React.createElement(\n      'div',\n      { 'class': 'ysp-index-title' },\n      React.createElement(\n        'div',\n        { className: data[0] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\", 'data-title': '\\u5F85\\u529E', onClick: this.onclick.bind(this) },\n        '\\u65B0\\u5EFA\\u7533\\u8BF7'\n      ),\n      React.createElement(\n        'div',\n        { className: data[1] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\", 'data-title': '\\u5F85\\u529E', onClick: this.handlerClick.bind(this) },\n        '\\u5F85\\u529E'\n      ),\n      React.createElement(\n        'div',\n        { className: data[2] == \"active\" ? \"ysp-index-title-color\" : \"ysp-index-title-noColor\", 'data-title': '\\u5DF2\\u529E', onClick: this.handlerClick.bind(this) },\n        '\\u5DF2\\u529E'\n      )\n    );\n  }\n});";
    },
    getData_control589_UX7D7i: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = [];data.content = []; // var flow_title = elem.querySelectorAll('div.flow-title');
      // var flow_list = elem.querySelectorAll('div.flow-list');
      // for (var i = 1; i < flow_title.length; i++) {
      //   data.title.push(flow_title[i].textContent.trim());
      // }
      // for (var i = 1; i < flow_list.length; i++) {
      //   var arr = [];
      //   var alist = flow_list[i].querySelectorAll('a[href="javascript:void(0)"]');
      //   for (var k = 0; k < alist.length; k++) {
      //     arr.push(alist[k].textContent.trim());
      //   data.content.push(arr);
      // }
      var arr = [];var str = ['请假申请单', '因公外出申请单', '差旅费用报销流程']; //var str = ['请假申请单', '因公外出申请单'];
      var alist = elem.querySelectorAll('a[href="javascript:void(0)"]'); // debugger
      for (var i = 0; i < alist.length; i++) {
        var flag = alist[i].getAttribute('url'); //筛选掉常用流程中无URL的流程
        if (str.indexOf(alist[i].textContent.trim()) != -1) {
          if (flag != null) {
            arr.push({ text: alist[i].textContent.trim(), index: i, url: alist[i].getAttribute('url') });
          }
        }
      }return arr;
    },
    doAction_uiControl589_fBkpUm: function (data, elem) {
      var type = data.eventType;var data = data.customData; // if ('click' == data.eventType) {
      //   var flow_list = elem.querySelectorAll('flow-list')[++data.id].querySelectorAll('a[javascript:void(0)]')[data.title].click();
      // for (var i = 0; i < flow_list.length; i++) {
      //   if (flow_list[i].textContent.trim() == data.customData) {
      //     flow_list[i].click();
      //   }
      // }
      // }
      if ('click' == type) {
        var url = data.url;var flat = url.indexOf('http://172.16.11.61') != -1 ? true : false;if (ysp.appMain.isIOS()) {
          if (flat) {
            ysp.appMain.openWindow(url);
          } else {
            elem.ownerDocument.defaultView.open(url);
          }
        } else {
          elem.ownerDocument.defaultView.open(url);
        }
      }
    },
    getTemplate_uiControl589_fBkpUm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  // click:function(e){\n  //   debugger;\n  //   var handler = this.props.customHandler,\n  //       target = e.target;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click',\n  //       data:{\n  //         title:target.getAttribute('data-title'),\n  //         id:target.getAttribute('data-id')\n  //       }\n  //     })\n  //   }\n  // },\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          index:target.getAttribute('data-id'),\n          url:target.getAttribute('url')\n        }\n\t\t\t})\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(!data){\n      return '';\n    }\n    var lis = data.map(function(ele,index){\n      return(\n        <div url={ele.url} onClick={_this.onClick} data-id={ele.index}>{ele.text}</div>\n      )\n    })\n    return(\n    \t<div className='Newapplocationbtn'>\n        \t{lis}\n      </div>\n    )\n    // var flow_content = data.title.map(function(d,i){\n    //   var flow_list = data.content[i].map(function(ele,index){\n    //     return(\n    //     \t<button data-id={i} data-title={index} onClick={_this.click.bind(_this)}>{ele}</button>\n    //     )\n    //   })\n    //   return(\n    //   \t<div>\n    //     \t<div>{d}</div>\n    //       <div>{flow_list}</div>\n    //     </div>\n    //   )\n    // })\n    // return (\n    //   <div>\n    //     <div>{flow_content}</div>\n    //   </div>\n    // )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  // click:function(e){\n  //   debugger;\n  //   var handler = this.props.customHandler,\n  //       target = e.target;\n  //   if(handler){\n  //     handler({\n  //       eventType:'click',\n  //       data:{\n  //         title:target.getAttribute('data-title'),\n  //         id:target.getAttribute('data-id')\n  //       }\n  //     })\n  //   }\n  // },\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {\n          index: target.getAttribute('data-id'),\n          url: target.getAttribute('url')\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (!data) {\n      return '';\n    }\n    var lis = data.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { url: ele.url, onClick: _this.onClick, 'data-id': ele.index },\n        ele.text\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'Newapplocationbtn' },\n      lis\n    );\n    // var flow_content = data.title.map(function(d,i){\n    //   var flow_list = data.content[i].map(function(ele,index){\n    //     return(\n    //     \t<button data-id={i} data-title={index} onClick={_this.click.bind(_this)}>{ele}</button>\n    //     )\n    //   })\n    //   return(\n    //   \t<div>\n    //     \t<div>{d}</div>\n    //       <div>{flow_list}</div>\n    //     </div>\n    //   )\n    // })\n    // return (\n    //   <div>\n    //     <div>{flow_content}</div>\n    //   </div>\n    // )\n  }\n});";
    }
  }, "Newapplocation");
})(window, ysp);