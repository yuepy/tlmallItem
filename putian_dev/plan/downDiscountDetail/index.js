"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function getData_control0(elem) {
      return '返回';
    },
    doAction_uiControl2: function doAction_uiControl2(data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl2: function getTemplate_uiControl2() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='downDiscountDetail-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'downDiscountDetail-header-left-btn', onClick: this.onClick });\n   }\n});";
    },
    getData_control1: function getData_control1(elem) {
      var data = {};
      var heads = [];
      var body = [];
      var bodyTrs = elem.children;
      var headDiv = elem.parentNode.parentNode.parentNode.parentNode.previousElementSibling.querySelector('#frozen-north');
      var headTrs;
      var items;
      if (headDiv) {
        var headTbody = headDiv.querySelector('tbody');
        if (headTbody) {
          headTrs = headTbody.children;
        }
      }

      function _forEach(arr, callback, startIndex) {
        if (arr && arr.length) {
          for (var index = startIndex || 0; index < arr.length; index++) {
            callback(arr[index], index);
          }
        }
      }

      _forEach(headTrs, function (tr) {
        _forEach(tr.children, function (td) {
          heads.push(td.textContent);
        });
      });

      _forEach(bodyTrs, function (tr) {
        items = [];
        _forEach(tr.children, function (td) {
          items.push({
            type: 'text',
            value: td.textContent
          });
        });
        body.push(items);
      });

      data.heads = heads;
      data.body = body;
      return data;
    },
    doAction_uiControl3: function doAction_uiControl3(data, elem) {},
    getTemplate_uiControl3: function getTemplate_uiControl3() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  },\n  \n  componentWillUnmount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n  }\n});";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   },\n\n   componentWillUnmount: function componentWillUnmount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n   }\n});";
    }
  });
})(window, ysp);