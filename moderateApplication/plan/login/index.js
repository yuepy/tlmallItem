(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_64AfPL: function (elem) {
      if (!elem) {
        return;
      }var data = { userNo: [], userName: [] };var userNo = elem.ownerDocument.querySelector("#txtLoginID").value;data.userNo.push(userNo);var userName = elem.ownerDocument.querySelector("#txtUserName").value;data.userName.push(userName);return data;
    },
    doAction_uiControl0_dQui51: function (data, elem) {
      if ("click" == data.eventType) {
        elem.ownerDocument.querySelector("#btnSysLogin").click();
      }if ("change" == data.eventType) {
        var text = data.dataCustom.text;var value = data.dataCustom.value;if ("userNo" == text) {
          elem.ownerDocument.querySelector("#txtLoginID").value = value;
        } else if ("userName" == text) {
          elem.ownerDocument.querySelector("#txtUserName").value = value;
        }
      }
    },
    getTemplate_uiControl0_dQui51: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerChange:function(e){\n    var target = e.target;\n    var text = target.dataset.text;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: {\n          text : text,\n          value : value\n        },\n        eventType:'change'\n      })\n    }\n    \n  },\n  handlerClik:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-zk-login\">\n        <div>\n          <AInput value={data && data.userNo} data-text = \"userNo\" onChange={this.handlerChange.bind(this)}/>\n        </div>\n        <div>\n          <AInput value = {data && data.userName} data-text = \"userName\" onChange=  {this.handlerChange.bind(this)}/>\n        </div>\n        <div onClick={this.handlerClik.bind(this)}>\n        \t\u767B\u5F55\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handlerChange: function handlerChange(e) {\n    var target = e.target;\n    var text = target.dataset.text;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          text: text,\n          value: value\n        },\n        eventType: 'change'\n      });\n    }\n  },\n  handlerClik: function handlerClik(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'ysp-zk-login' },\n      React.createElement(\n        'div',\n        null,\n        React.createElement(AInput, { value: data && data.userNo, 'data-text': 'userNo', onChange: this.handlerChange.bind(this) })\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(AInput, { value: data && data.userName, 'data-text': 'userName', onChange: this.handlerChange.bind(this) })\n      ),\n      React.createElement(\n        'div',\n        { onClick: this.handlerClik.bind(this) },\n        '\\u767B\\u5F55'\n      )\n    );\n  }\n});";
    }
  }, "login");
})(window, ysp);