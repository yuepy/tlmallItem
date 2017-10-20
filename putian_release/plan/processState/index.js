"use strict";

(function (win, ysp) {
  function getTemplate() {
    var selfTemplate = "\n      module.exports = React.createClass({\n        render: function() {\n            var data = this.props.data.customData;\n              var body = data.body;\n              var heads = data.heads;\n              var items;\n              var blocks = body.map(function(b, index) {\n                items = b.map(function(obj, idx) {\n                    if (heads[idx]) {\n                      return (<li key={'ul-' + index + '-li-' + idx + Date.now()}>\n                          <span className='span-key'>{heads[idx]}</span>\n                          <span className='span-value'>{obj.value}</span>\n                        </li>);\n                    }\n                  });\n                  return (<ul key={'ul-' + index + Date.now()}>\n                      {items}\n                    </ul>);\n              });\n              if (!blocks.length) {\n                blocks.push(<ul key={'ul-' + Date.now()}>\n                      <li key={'ul-' + '-li-' + Date.now()}>\n                          <span className='span-key'>暂无数据</span>         \n                        </li>\n                    </ul>)\n              }\n              return (<div className='proc-container'>\n                  {blocks}\n                </div>);\n          }\n      })\n    ";

    return "\n      'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var body = data.body;\n    var heads = data.heads;\n    var items;\n    var blocks = body.map(function (b, index) {\n      items = b.map(function (obj, idx) {\n        if (heads[idx]) {\n          return React.createElement(\n            'li',\n            { key: 'ul-' + index + '-li-' + idx + Date.now() },\n            React.createElement(\n              'span',\n              { className: 'span-key' },\n              heads[idx]\n            ),\n            React.createElement(\n              'span',\n              { className: 'span-value' },\n              obj.value\n            )\n          );\n        }\n      });\n      return React.createElement(\n        'ul',\n        { key: 'ul-' + index + Date.now() },\n        items\n      );\n    });\n    if (!blocks.length) {\n      blocks.push(React.createElement(\n        'ul',\n        { key: 'ul-' + Date.now() },\n        React.createElement(\n          'li',\n          { key: 'ul-' + '-li-' + Date.now() },\n          React.createElement(\n            'span',\n            { className: 'span-key' },\n            '暂无数据'\n          )\n        )\n      ));\n    }\n    return React.createElement(\n      'div',\n      { className: 'proc-container' },\n      blocks\n    );\n  }\n});\n    ";
  }

  ysp.runtime.Model.extendLoadingModel({
    getData_control4: function getData_control4(elem) {
      return ysp.customHelper.getTableDataWithThead && ysp.customHelper.getTableDataWithThead(elem);
    },
    doAction_uiControl5: function doAction_uiControl5(data, elem) {},
    getTemplate_uiControl5: function getTemplate_uiControl5() {
      return getTemplate();
    },
    getData_control5: function getData_control5(elem) {
      return ysp.customHelper.getTableDataWithThead && ysp.customHelper.getTableDataWithThead(elem);
    },
    doAction_uiControl6: function doAction_uiControl6(data, elem) {},
    getTemplate_uiControl6: function getTemplate_uiControl6() {
      return getTemplate();
    },
    getData_control7: function getData_control7(elem) {
      return '返回';
    },
    doAction_uiControl0: function doAction_uiControl0(data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl0: function getTemplate_uiControl0() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='process-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'process-header-left-btn', onClick: this.onClick });\n   }\n});";
    }
  });
})(window, ysp);