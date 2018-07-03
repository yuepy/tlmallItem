(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control75_RJmbF0: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['序号', '环节名称', '人员工号', '人员姓名', '操作状态']);data.title = elem.ownerDocument.querySelector('.title').textContent.trim();return data;
    },
    doAction_uiControl75_VJeb32: function (data, elem) {},
    getTemplate_uiControl75_VJeb32: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control130_x1XVmf: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = '审批预览';return data;
    },
    doAction_uiControl130_74HZ6u: function (data, elem) {},
    getTemplate_uiControl130_74HZ6u: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'titleH1\' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\'span\', null),\n          React.createElement(\n            \'button\',\n            { onClick: _appRenderer.back },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);