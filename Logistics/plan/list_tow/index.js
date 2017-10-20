(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10_JPc3En: function (elem) {
      return elem.querySelectorAll('a')[5].textContent;
    },
    doAction_uiControl14_xA0Hqw: function (data, elem) {
      if (data.eventType == 'click') {
        debugger;var operation = data.dataCustom.name;var planName = data.dataCustom.planName;ysp.customHelper.toPlan(elem, operation, planName);
      }
    },
    getTemplate_uiControl14_xA0Hqw: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <button style={{width:"100%",padding:\'15px\',border:\'none\',background:\'#005aa0\',color:\'#fff\',}} onClick={(e)=>{\n          var handler = this.props.customHandler;\n          var operation = {};\n          operation.name =\'R\u53D1\u8D27\u660E\u7EC6\u67E5\u8BE2\';\n          operation.planName = \'shippingDetails\'\n          if(handler){\n            handler({\n              data:operation,\n              eventType:\'click\'\n            })\n          }\n        }}>\n       {this.props.customData}\n      </button>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'button\',\n      { style: { width: "100%", padding: \'15px\', border: \'none\', background: \'#005aa0\', color: \'#fff\' }, onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          var operation = {};\n          operation.name = \'R\u53D1\u8D27\u660E\u7EC6\u67E5\u8BE2\';\n          operation.planName = \'shippingDetails\';\n          if (handler) {\n            handler({\n              data: operation,\n              eventType: \'click\'\n            });\n          }\n        } },\n      this.props.customData\n    );\n  }\n});';
    }
  });
})(window, ysp);