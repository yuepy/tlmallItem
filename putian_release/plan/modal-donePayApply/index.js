'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control4: function getData_control4(elem) {
      var data = {};
      var thead = [];
      var tbody = [];
      var ths = elem.querySelector('thead').querySelectorAll('th');

      for (var i = 0; i < ths.length; i++) {
        thead.push(ths[i].textContent);
      }
      var body = elem.querySelector('tbody').querySelectorAll('tr');
      if (body[0].querySelector('td').textContent != "没有对应数据") {

        for (var i = 0; i < body.length; i++) {
          var obj = {};
          var td = body[i].querySelectorAll('td');
          obj.c1 = td[0].textContent;
          obj.c2 = td[1].textContent;
          obj.c3 = td[2].textContent;
          obj.c4 = td[3].textContent;
          obj.c5 = td[4].textContent;
          obj.c6 = td[5].textContent;
          tbody.push(obj);
        }
      }
      data.head = thead;
      data.body = tbody;
      console.log(data);
      return data;
    },
    doAction_uiControl0: function doAction_uiControl0(data, elem) {},
    getTemplate_uiControl0: function getTemplate_uiControl0() {
      return '\n"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var head = data.head.map(function (h) {\n      return React.createElement(\n        "th",\n        null,\n        h\n      );\n    });\n    var body = data.body.map(function (b) {\n      return React.createElement(\n        "tr",\n        { className: "tr-gray" },\n        React.createElement(\n          "td",\n          null,\n          b.c1\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c2\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c3\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c4\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c5\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c6\n        )\n      );\n    });\n    if (data.body.length < 1) {\n      body = React.createElement(\n        "tr",\n        { className: "tr-gray" },\n        React.createElement(\n          "td",\n          { colSpan: "6" },\n          "没有对应数据"\n        )\n      );\n    }\n    return React.createElement(\n      "table",\n      { className: "custom-table" },\n      React.createElement(\n        "thead",\n        null,\n        React.createElement(\n          "tr",\n          { className: "tr-blue" },\n          head\n        )\n      ),\n      React.createElement(\n        "tbody",\n        null,\n        body\n      )\n    );\n  }\n\n});\n\n      ';
    },
    getData_control5: function getData_control5(elem) {
      return;
    },
    doAction_uiControl4: function doAction_uiControl4(data, elem) {
      ysp.runtime.Flow.setLastFlow('uiControl4', 'context0');
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl4: function getTemplate_uiControl4() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='distribution-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    },
    getData_control7: function getData_control7(elem) {
      var data = {};
      var thead = [];
      var tbody = [];
      var ths = elem.querySelector('thead').querySelectorAll('th');

      for (var i = 0; i < ths.length; i++) {
        thead.push(ths[i].textContent);
      }

      var body = elem.querySelector('tbody').querySelectorAll('tr');

      if (body[0].querySelector('td').textContent != "没有对应数据") {
        for (var i = 0; i < body.length; i++) {
          var obj = {};
          var td = body[i].querySelectorAll('td');
          obj.c1 = td[0].textContent;
          obj.c2 = td[1].textContent;
          obj.c3 = td[2].textContent;
          obj.c4 = td[3].textContent;
          obj.c5 = td[4].textContent;
          obj.c6 = td[5].textContent;
          tbody.push(obj);
        }
      }

      data.head = thead;
      data.body = tbody;
      console.log(data);
      return data;
    },
    doAction_uiControl1: function doAction_uiControl1(data, elem) {},
    getTemplate_uiControl1: function getTemplate_uiControl1() {
      var selfTemplate = '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var head = data.head.map(function (h) {\n      return React.createElement(\n        "th",\n        null,\n        h\n      );\n    });\n    var body = data.body.map(function (b) {\n      return React.createElement(\n        "tr",\n        { className: "tr-gray" },\n        React.createElement(\n          "td",\n          null,\n          b.c1\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c2\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c3\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c4\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c5\n        ),\n        React.createElement(\n          "td",\n          null,\n          b.c6\n        )\n      );\n    });\n    if (data.body.length < 1) {\n      body = React.createElement(\n        "tr",\n        { className: "tr-gray" },\n        React.createElement(\n          "td",\n          { colSpan: "6" },\n          "没有对应数据"\n        )\n      );\n    }\n    return React.createElement(\n      "table",\n      { className: "custom-table" },\n      React.createElement(\n        "thead",\n        null,\n        React.createElement(\n          "tr",\n          { className: "tr-blue" },\n          head\n        )\n      ),\n      React.createElement(\n        "tbody",\n        null,\n        body\n      )\n    );\n  }\n\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var head = data.head.map(function (h) {\n      return React.createElement("th", null, h);\n    });\n    var body = data.body.map(function (b) {\n      return React.createElement("tr", { className: "tr-gray" }, React.createElement("td", null, b.c1), React.createElement("td", null, b.c2), React.createElement("td", null, b.c3), React.createElement("td", null, b.c4), React.createElement("td", null, b.c5), React.createElement("td", null, b.c6));\n    });\n    if (data.body.length < 1) {\n      body = React.createElement("tr", { className: "tr-gray" }, React.createElement("td", { colSpan: "6" }, "没有对应数据"));\n    }\n    return React.createElement("table", { className: "custom-table" }, React.createElement("thead", null, React.createElement("tr", { className: "tr-blue" }, head)), React.createElement("tbody", null, body));\n  }\n\n});';
    }
  });
})(window, ysp);