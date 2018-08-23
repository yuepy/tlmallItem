(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1_6CTSeZ: function (elem) {
      if (!elem) return;var data = [];var divs = elem.children;for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent != '' || divs[i].querySelector('img')) {
          var obj = { imgs: [], text: [] };if (divs[i].querySelector('img')) {
            var imgs = divs[i].querySelectorAll('img');for (var k = 0; k < imgs.length; k++) {
              obj.imgs.push(imgs[k].src);
            }obj.flat = 'img';
          } else {
            obj.text = divs[i].textContent.trim();
          }data.push(obj);
        }
      }
      return data;
    },
    doAction_uiControl1_VoxhiB: function (data, elem) {},
    getTemplate_uiControl1_VoxhiB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.map(function(ele,index){\n      return(<p>{ele.text}</p>)\n    })\n    return (\n      <div className=\'Dy_deil\'>\n        {lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.map(function (ele, index) {\n      return React.createElement(\n        \'p\',\n        null,\n        ele.text\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'Dy_deil\' },\n      lis\n    );\n  }\n});';
    },
    getData_control2_pX2Dki: function (elem) {},
    doAction_uiControl2_7w0M92: function (data, elem) {},
    getTemplate_uiControl2_7w0M92: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u5F85\u9605\u6D88\u606F\">\n  <HeaderLeft>\n    <button onClick={back}>\u8FD4\u56DE</button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u5F85\\u9605\\u6D88\\u606F' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        'button',\n        { onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    }
  }, "deil_Dy");
})(window, ysp);