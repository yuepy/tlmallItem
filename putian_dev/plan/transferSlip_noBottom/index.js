"use strict";

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
    },
    getData_control9: function getData_control9(elem) {

      var data = {};
      var tbody = [];
      if (elem.querySelector('tbody') && elem.querySelector('tbody').querySelectorAll('tr')) {
        var tbodyTrs = elem.querySelector('tbody').querySelectorAll('tr');
        if (tbodyTrs[0]) {
          for (var i = 0; i < tbodyTrs.length; i++) {
            var tbodyTds = tbodyTrs[i].querySelectorAll('td');
            var obj = {};
            obj.c1 = tbodyTds[0].querySelectorAll('label').length > 1 ? tbodyTds[0].querySelector('label').textContent : tbodyTds[0].textContent;
            obj.c2 = tbodyTds[1].textContent;
            obj.c3 = tbodyTds[2].textContent;
            obj.c4 = tbodyTds[3].textContent;
            obj.c5 = tbodyTds[4].textContent;
            obj.c6 = tbodyTds[5].textContent;
            obj.c7 = tbodyTds[6].textContent;
            obj.c8 = tbodyTds[7].textContent;
            tbody.push(obj);
          }
        }
      }
      var tfoot = [];

      if (elem.querySelector('tfoot') && elem.querySelector('tfoot').querySelectorAll('tr')) {
        var tbodyTrs = elem.querySelector('tfoot').querySelectorAll('tr');
        if (tbodyTrs[0]) {
          for (var i = 0; i < tbodyTrs.length; i++) {
            var tbodyTds = tbodyTrs[i].querySelectorAll('td');
            var obj = {};

            obj.c1 = tbodyTds[0].textContent;
            obj.c2 = tbodyTds[1].textContent;
            obj.c3 = tbodyTds[2].textContent;
            obj.c4 = tbodyTds[3].textContent;
            obj.c5 = tbodyTds[4].textContent;
            obj.c6 = tbodyTds[5].textContent;
            obj.c7 = tbodyTds[6].textContent;
            obj.c8 = tbodyTds[7].textContent;
            tfoot.push(obj);
          }
        }
      }
      data.tfoot = tfoot;
      data.tbody = tbody;
      return data;
    },
    doAction_uiControl5: function doAction_uiControl5(data, elem) {},
    getTemplate_uiControl5: function getTemplate_uiControl5() {
      var selfTemplate = "";
      return "\n        \"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var tbody = data.tbody.map(function (tb) {\n      return React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          tb.c1\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c2\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c3\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c4\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c5\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c6\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c7\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tb.c8\n        )\n      );\n    });\n    var tfoot = data.tfoot.map(function (tf) {\n      return React.createElement(\n        \"tr\",\n        null,\n        React.createElement(\n          \"td\",\n          null,\n          tf.c1\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c2\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c3\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c4\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c5\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c6\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c7\n        ),\n        React.createElement(\n          \"td\",\n          null,\n          tf.c8\n        )\n      );\n    });\n    return React.createElement(\n      \"table\",\n      { className: \"custom-table\" },\n      React.createElement(\n        \"tbody\",\n        null,\n        tbody\n      ),\n      React.createElement(\n        \"tfoot\",\n        null,\n        tfoot\n      )\n    );\n  }\n});\n      ";
    }
  });
})(window, ysp);