(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_4IixOf: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl9_bFR8rb: function (data, elem) {},
    getTemplate_uiControl9_bFR8rb: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u6570\u5B57\u8D28\u91CF\u76D1\u7763\">\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u6570\\u5B57\\u8D28\\u91CF\\u76D1\\u7763' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    },
    getData_control14_rewWW8: function (elem) {
      if (!elem) return;var data = {};data.content = [];var divs = elem.querySelectorAll('.shop-icon-features');for (var i = 0; i < divs.length; i++) {
        data.content.push({ text: divs[i].textContent.trim(), id: divs[i].querySelector('div').id });
      }return data;
    },
    doAction_uiControl10_GJ6Ww6: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'click') {
        elem.querySelector("#" + data.id).click();
      }
    },
    getTemplate_uiControl10_GJ6Ww6: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          id:id\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div onClick={_this.onClick.bind(_this)} id={ele.id}>{ele.text}</div>\n      )\n    })\n    return (\n      <div className='Nubsuprive'>\n        {lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {\n          id: id\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { onClick: _this.onClick.bind(_this), id: ele.id },\n        ele.text\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'Nubsuprive' },\n      lis\n    );\n  }\n});";
    }
  }, "superives_itownet");
})(window, ysp);