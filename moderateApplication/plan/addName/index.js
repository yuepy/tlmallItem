(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control478_7W6cFi: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push(elem.querySelectorAll('button')[0].textContent.trim());
      data.push(elem.querySelectorAll('button')[1].textContent.trim());return data;
    },
    doAction_uiControl478_CyLhBa: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelectorAll('button')[data.customData].click();
      }
    },
    getTemplate_uiControl478_CyLhBa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:e.target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div>\n        <button data-id=\'0\' onClick={this.onClick}>{data[0]}</button>\n        <button data-id=\'1\' onClick={this.onClick}>{data[1]}</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: e.target.getAttribute(\'data-id\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'button\',\n        { \'data-id\': \'0\', onClick: this.onClick },\n        data[0]\n      ),\n      React.createElement(\n        \'button\',\n        { \'data-id\': \'1\', onClick: this.onClick },\n        data[1]\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);