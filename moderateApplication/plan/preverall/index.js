(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control476_6BDyKm: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.ownerDocument.querySelector('div.top').textContent.trim();data.content = {};data.content.text = elem.querySelector('tr').textContent.trim().split('：')[0];data.content.ipt = {};data.content.ipt.id = elem.querySelector('input').id;data.content.ipt.readonly = elem.querySelector('input').readOnly;data.content.ipt.text = elem.querySelector('input').value;return data;
    }, doAction_uiControl476_u3fyiU: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('a').click();
      }
    },
    getTemplate_uiControl476_u3fyiU: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n      \teventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        <div className=\'title\'>{data.title}</div>\n        <div>\n        \t<div>{data.content.text}</div>\n          <div><input value={data.content.ipt.text} id={data.content.ipt.id} readOnly={data.content.ipt.readonly} /></div>\n          <a href="javascript:;" onClick={this.onClick} ></a>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { className: \'title\' },\n        data.title\n      ),\n      React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          null,\n          data.content.text\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\'input\', { value: data.content.ipt.text, id: data.content.ipt.id, readOnly: data.content.ipt.readonly })\n        ),\n        React.createElement(\'a\', { href: \'javascript:;\', onClick: this.onClick })\n      )\n    );\n  }\n});';
    },

    getData_control484_IqZpnH: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push('取消');data.push('确定'); // defaultView.frameElement
      return data;
    },
    doAction_uiControl484_WRXRqX: function (data, elem) {
      var type = data.eventType;if (type == 'click') {
        debugger;elem.ownerDocument.defaultView.frameElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector('a').click();
      }if (type == 'onclick') {
        elem.querySelector('input').click();
      }
    },
    getTemplate_uiControl484_WRXRqX: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  onClick:function(){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onclick\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\'addcommit\'>\n        <button onClick={this.click}>{data[0]}</button>\n        <button onClick={this.onClick}>{data[1]}</button>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  onClick: function onClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclick'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'addcommit' },\n      React.createElement(\n        'button',\n        { onClick: this.click },\n        data[0]\n      ),\n      React.createElement(\n        'button',\n        { onClick: this.onClick },\n        data[1]\n      )\n    );\n  }\n});";
    }
  }, "preverall");
})(window, ysp);