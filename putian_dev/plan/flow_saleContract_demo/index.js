'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({

    getData_control0: function getData_control0(elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl1: function doAction_uiControl1(data, elem) {},
    getTemplate_uiControl1: function getTemplate_uiControl1() {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};';
    },
    getData_control1: function getData_control1(elem) {
      var data = [];
      var trs = elem.querySelectorAll('tr');
      for (var i = 0; i < trs.length; i++) {
        var obj = {};
        var arr = [];
        if (trs[i].textContent.trim()) {
          if (trs[i].querySelectorAll('td')[1]) {
            obj.title = trs[i].querySelectorAll('td')[0].textContent;
            obj.suggest = trs[i].querySelectorAll('td')[1].textContent.trim();
            var trImg = trs[i].querySelectorAll('td')[1];
            if (trImg.querySelector('img')) {
              for (var j = 0; j < trImg.querySelectorAll('img').length; j++) {
                arr.push(trImg.querySelectorAll('img')[j].src);
              }
            }
            obj.img = arr;
            data.push(obj);
          }
        }
      }
      return data;
    },
    doAction_uiControl3: function doAction_uiControl3(data, elem) {},
    getTemplate_uiControl3: function getTemplate_uiControl3() {
      var selfTemplate = '\n  module.exports = React.createClass({\n  render: function() {\n      var data = this.props.data.customData;\n      var lis = data.map(function(d){\n        var imgs = [];\n\n        for(var i=0;i<d.img.length;i++) {\n          \n          imgs[i] = <img className="sign-img" src={d.img[i]} />\n        }\n        imgs.map(function(m){\n          return (\n            {m}\n          );\n        });\n\n        return(\n          <li>\n            <span className="span-key span-left">{d.title}</span>\n            <span className="span-value span-right">{d.suggest}\n            \n            {imgs}\n            </span>\n          </li>\n            \n        );\n      })      \n      return(\n        <AMUI.Card title="审批意见" className="suggest-card">\n          <ul className="suggest-ul">\n            {lis}\n          </ul>\n        </AMUI.Card>\n      );\n    }\n})\n      ';

      return '\n\n"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var lis = data.map(function (d) {\n      var imgs = [];\n\n      for (var i = 0; i < d.img.length; i++) {\n\n        imgs[i] = React.createElement("img", { className: "sign-img", src: d.img[i] });\n      }\n      imgs.map(function (m) {\n        return { m: m };\n      });\n\n      return React.createElement(\n        "li",\n        null,\n        React.createElement(\n          "span",\n          { className: "span-key span-left" },\n          d.title\n        ),\n        React.createElement(\n          "span",\n          { className: "span-value span-right" },\n          d.suggest,\n          imgs\n        )\n      );\n    });\n    return React.createElement(\n      AMUI.Card,\n      { title: "审批意见", className: "suggest-card" },\n      React.createElement(\n        "ul",\n        { className: "suggest-ul" },\n        lis\n      )\n    );\n  }\n});\n\n\n      ';
    },
    getData_control2: function getData_control2(elem) {
      return;
    },
    doAction_uiControl6: function doAction_uiControl6(data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl6: function getTemplate_uiControl6() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='distribution-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    }
  });
})(window, ysp);