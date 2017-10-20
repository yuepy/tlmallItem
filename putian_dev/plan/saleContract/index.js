'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      return ysp.customHelper.getFormData(elem);

    },
    doAction_uiControl0: function (data, elem) {
      var id = data.dataCustom.id;
var value = data.dataCustom.value;
var eventType = data.eventType;
var el;
var _doc = win.top.document;
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

  if (index) {
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
    getTemplate_uiControl0: function getTemplate_uiControl0() {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};';
    },
    getData_control2: function getData_control2(elem) {
      return ysp.customHelper.getTableData(elem);
    },
    doAction_uiControl3: function doAction_uiControl3(data, elem) {},
    getTemplate_uiControl3: function getTemplate_uiControl3() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  });";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   }});";
    },
    getData_control7: function getData_control7(elem) {
      return;
    },
    doAction_uiControl12: function doAction_uiControl12(data, elem) {
      ysp.runtime.Flow.setLastFlow('uiControl12', 'context0');
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl12: function getTemplate_uiControl12() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='distribution-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'distribution-header-left-btn', onClick: this.onClick });\n   }\n});";
    }
  });
})(window, ysp);