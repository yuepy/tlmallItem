'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function getData_control0(elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl0: function doAction_uiControl0(data, elem) {},
    getTemplate_uiControl0: function getTemplate_uiControl0() {
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};';
    },

    getData_control1: function getData_control1(elem) {
      return ysp.customHelper.getTableData(elem);
    },
    doAction_uiControl1: function doAction_uiControl1(data, elem) {},
    getTemplate_uiControl1: function getTemplate_uiControl1() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  },\n  \n  componentWillUnmount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n  }\n});";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   },\n\n   componentWillUnmount: function componentWillUnmount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n   }\n});";
    },
    getData_control6: function getData_control6(elem) {
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
    }
  });
})(window, ysp);