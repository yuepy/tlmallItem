(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control8_g4IxSO: function (elem) {
      return elem.textContent;
    },
    doAction_uiControl11_QVlqu9: function (data, elem) {
      if (data.eventType == 'click') {
        // debugger;
        var href = elem.href;ysp.customHelper.openWin(href, 'screen');
      }
    },
    getTemplate_uiControl11_QVlqu9: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <button style={{width:"100%",padding:\'15px\',border:\'none\',background:\'#005aa0\',color:\'#fff\',}} onClick={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}>\n        {this.props.customData}\n      </button>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'button\',\n      { style: { width: "100%", padding: \'15px\', border: \'none\', background: \'#005aa0\', color: \'#fff\' }, onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        } },\n      this.props.customData\n    );\n  }\n});';
    }
  });
})(window, ysp);