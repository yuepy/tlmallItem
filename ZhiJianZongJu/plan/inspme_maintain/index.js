(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control47_k7iJPb: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl46_LGTXf5: function (data, elem) {},
    getTemplate_uiControl46_LGTXf5: function () {
      var selfTemplate = "import { HeaderLeftbtn } from 'ysp-custom-components';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <HeaderLeftbtn title={this.props.customData} />\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(_yspCustomComponents.HeaderLeftbtn, { title: this.props.customData });\n  }\n});";
    },
    getData_control48_vzq1C5: function (elem) {
      if (!elem) return;var data = { content: [] };data.title = elem.querySelector('div').textContent.trim();var labels = elem.querySelector("table").querySelectorAll('label');for (var i = 0; i < labels.length; i++) {
        var obj = {};obj.left = labels[i].textContent.trim();debugger;var ipt = labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('input[type="text"]') ? labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('input[type="text"]') : labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('textarea');obj.ipttext = ipt.value;obj.disabled = ipt.disabled;obj.readobly = ipt.readOnly;data.content.push(obj);
      }return data;
    },
    doAction_uiControl47_7KrR3H: function (data, elem) {},
    getTemplate_uiControl47_7KrR3H: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        {\n          data.content.map(function(ele,index){\n            if(!ele.disabled && !ele.readonly){\n              \n            }else{\n              \n            }\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      null,\n      data.content.map(function (ele, index) {\n        if (!ele.disabled && !ele.readonly) {} else {}\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);