(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control26_gWTnBn: function (elem) {},
    doAction_uiControl23_UO9GDq: function (data, elem) {},
    getTemplate_uiControl23_UO9GDq: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <Header amStyle=\"primary\" title=\"\u901A\u77E5\u516C\u544A\">\n          <HeaderLeft>\n            <button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: 'primary', title: '\\u901A\\u77E5\\u516C\\u544A' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            'button',\n            { amStyle: 'primary', onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);