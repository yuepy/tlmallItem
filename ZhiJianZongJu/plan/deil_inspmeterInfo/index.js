(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control62_3Vpvzg: function (elem) {},
    doAction_uiControl61_K4RhoF: function (data, elem) {},
    getTemplate_uiControl61_K4RhoF: function () {
      var selfTemplate = "import { HeaderLeftbtn } from 'ysp-custom-components';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <HeaderLeftbtn title='\u8BC1\u4E66\u4FE1\u606F' />\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(_yspCustomComponents.HeaderLeftbtn, { title: '\\u8BC1\\u4E66\\u4FE1\\u606F' })\n    );\n  }\n});";
    },
    getData_control63_mlk6gq: function (elem) {
      if (!elem) return;var data = { title: elem.querySelector('div').textContent.trim(), content: [] };var divs = elem.querySelectorAll('.col2');for (var i = 0; i < divs.length; i++) {
        var labels = divs[i].querySelectorAll('label'),
            ipts = divs[i].querySelectorAll('input[type="text"]');for (var k = 0; k < ipts.length; k++) {
          data.content.push({ left: labels[k].textContent.trim(), text: ipts[k].value });
        }
      }return data;
    },
    doAction_uiControl62_dZW4uG: function (data, elem) {},
    getTemplate_uiControl62_dZW4uG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='deil_inspam'>\n        <div className='conditionTitle'>{data.title}</div>\n        {\n          data.content.map(function(ele,index){\n            return(\n            \t<div>\n              \t<div>{ele.left}</div>\n                <div>{ele.text}</div>\n              </div>\n            )\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'deil_inspam' },\n      React.createElement(\n        'div',\n        { className: 'conditionTitle' },\n        data.title\n      ),\n      data.content.map(function (ele, index) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            ele.text\n          )\n        );\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);