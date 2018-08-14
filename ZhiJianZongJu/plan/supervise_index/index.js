(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_VU6AiQ: function (elem) {
      if (!elem) return;var data = []; // var lis = elem.querySelectorAll('ul>li');
      if (elem.querySelector('ul')) {
        debugger;var lis = elem.querySelector('ul').children;for (var i = 0; i < lis.length; i++) {
          var obj = {};obj.text = lis[i].querySelector('div').textContent.trim(); // var list = lis[i].querySelectorAll('ul>li');
          obj.child = [];var list = lis[i].querySelector('ul') ? lis[i].querySelector('ul').children ? lis[i].querySelector('ul').children : [] : [];for (var k = 0; k < list.length; k++) {
            obj.child.push({ id: list[k].querySelector('div').id, text: list[k].textContent.trim() });
          }data.push(obj);
        }
      }return data;
    },
    doAction_uiControl4_J11h2C: function (data, elem) {},
    getTemplate_uiControl4_J11h2C: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.map(function(ele,index){\n      if(ele.child){\n         var list = ele.child.map(function(d,i){\n        return(\n        \t<li>{d.text}</li>\n        )\n      })\n     }\n      return(\n      \t<div>\n        \t<div>{ele.text}</div>\n          <div><ul>{list?list:\'\'}</ul></div>\n        </div>\n      )\n    })\n    return (\n      <div>\n        {lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      if (ele.child) {\n        var list = ele.child.map(function (d, i) {\n          return React.createElement(\n            \'li\',\n            null,\n            d.text\n          );\n        });\n      }\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          null,\n          ele.text\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'ul\',\n            null,\n            list ? list : \'\'\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      lis\n    );\n  }\n});';
    },
    getData_control15_yhSlrb: function (elem) {},
    doAction_uiControl11_c5KCUQ: function (data, elem) {},
    getTemplate_uiControl11_c5KCUQ: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u8BA1\u91CF\u5F3A\u68C0\">\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u8BA1\\u91CF\\u5F3A\\u68C0' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    }
  });
})(window, ysp);