'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function getData_control0(elem) {
      var data = {};
      if (elem.querySelectorAll('table') && elem.querySelectorAll('table')[1]) {

        var thead = elem.querySelectorAll('table')[1];
        var theadTds = thead.querySelectorAll('td');
        var obj = [];
        obj.push(theadTds[0].textContent);
        obj.push(theadTds[2].textContent);
        obj.push(theadTds[4].textContent);
        obj.push(theadTds[6].textContent);
        obj.push(theadTds[8].textContent);
        data.thead = obj;
      }
      var tbody = [];
      var tbodyTrs = elem.children[1].children[1].querySelector('tbody').children;
      for (var i = 0; i < tbodyTrs.length; i++) {

        var tbodyTds = tbodyTrs[i].children;
        var obj = {};
        obj.c1 = tbodyTds[0].textContent;
        obj.c2 = tbodyTds[1].textContent;
        obj.c3 = tbodyTds[2].textContent;
        obj.c4 = tbodyTds[3].textContent;
        obj.c5 = tbodyTds[4].textContent;
        tbody.push(obj);
      }
      data.tbody = tbody;
      return data;
    },
    doAction_uiControl0: function doAction_uiControl0(data, elem) {},
    getTemplate_uiControl0: function getTemplate_uiControl0() {
      var selfTemplate = "";
      return '\n"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var thead = data.thead;\n    var tbody = data.tbody.map(function (tf) {\n      return React.createElement(\n        "tr",\n        { className: "tr-gray" },\n        React.createElement(\n          "td",\n          null,\n          tf.c1\n        ),\n        React.createElement(\n          "td",\n          null,\n          tf.c2\n        ),\n        React.createElement(\n          "td",\n          null,\n          tf.c3\n        ),\n        React.createElement(\n          "td",\n          null,\n          tf.c4\n        ),\n        React.createElement(\n          "td",\n          null,\n          tf.c5\n        )\n      );\n    });\n    return React.createElement(\n      "table",\n      { className: "custom-table" },\n      React.createElement(\n        "thead",\n        null,\n        React.createElement(\n          "tr",\n          { className: "tr-blue" },\n          React.createElement(\n            "td",\n            null,\n            thead[0]\n          ),\n          React.createElement(\n            "td",\n            null,\n            thead[1]\n          ),\n          React.createElement(\n            "td",\n            null,\n            thead[2]\n          ),\n          React.createElement(\n            "td",\n            null,\n            thead[3]\n          ),\n          React.createElement(\n            "td",\n            null,\n            thead[4]\n          )\n        )\n      ),\n      React.createElement(\n        "tbody",\n        null,\n        tbody\n      )\n    );\n  }\n});\n      ';
    },
    getData_control1: function getData_control1(elem) {
      return;
    },
    doAction_uiControl4: function doAction_uiControl4(data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl4: function getTemplate_uiControl4() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='distribution-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    }
  });
})(window, ysp);