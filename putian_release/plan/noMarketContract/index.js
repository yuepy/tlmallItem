'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl3: function (data, elem) {
      var id = data.dataCustom.id;
var value = data.dataCustom.value;
var eventType = data.eventType;
var el;
if (!id) {
  return;
}
el = elem.querySelector('#' + id);
if (!el) {
  return;
}
if (eventType === 'click') {
  el.click();
} else if (eventType === 'change') {
  el.value = value;
  el.dispatchEvent(new Event('change'));
} else if (eventType === 'linkClick') {
  var index = data.dataCustom.index;

  if (!isNaN(index)) {
    var a = el.querySelectorAll('a')[+index];
    var link = a.href;
    if (window.top.EAPI.isIOS()) {
	window.top.EAPI.openWindow(link, "file");
} else if (window.top.EAPI.isAndroid()) {
	          if (a) {
            a.click();
          }
}
  }
}

    },
    getTemplate_uiControl3: function getTemplate_uiControl3() {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};";
    },

    //返回
    getData_control7: function getData_control7(elem) {
      return;
    },
    doAction_uiControl13: function doAction_uiControl13(data, elem) {
      ysp.runtime.Flow.setLastFlow('uiControl13', 'context0');
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl13: function getTemplate_uiControl13() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='distribution-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    },
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "";
      return "\"use strict\";";
    }
  });
})(window, ysp);