(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_504Hiz: function (elem) {
      if (!elem) {
        return;
      }var title = elem.children[0].textContent;return title;
    },
    doAction_uiControl12_lcnmT4: function (data, elem) {
      var type = data.eventType;if (type === 'click') {
        var btn = elem.querySelector('.panel-tool').querySelector('a');btn.click();
      }
    },
    getTemplate_uiControl12_lcnmT4: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    const me = this;\n    return (\n      <div>\n        <Header amStyle="primary" title={data}>\n          <HeaderLeft>\n            <AMUI.Button amStyle="primary" onClick={me.handleClick} style={{marginBottom:0,textAlign:"left"}}><span className="icon icon-left-nav"></span>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});\n';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\', title: data },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: me.handleClick, style: { marginBottom: 0, textAlign: "left" } },\n            React.createElement(\'span\', { className: \'icon icon-left-nav\' }),\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control17_VeuQX0: function (elem) {
      if (!elem) {
        return;
      }var labels = elem.querySelectorAll('label');var inputs = elem.querySelectorAll('.ipt');var tIndex = [];var data = [];for (var i = 0; i < labels.length; i++) {
        var title = labels[i].textContent;tIndex.push({ name: title, index: i });
      }for (var k = 0; k < inputs.length; k++) {
        var val = inputs[k].value;data.push({ title: tIndex[k].name, val: val });
      }return data;
    },
    doAction_uiControl13_sV26Mu: function (data, elem) {},
    getTemplate_uiControl13_sV26Mu: function () {
      var selfTemplate = '\nconst {List,Modal} = AMUITouch2;\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var lis = data.map(function(d,i){\n      return(\n          <List.Item\n            title = {d.title}\n            after = {d.val}\n            />\n      )\n    })\n    return (\n      <div>\n        <List>\n        \t{lis}\n        </List>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    List = _AMUITouch.List,\n    Modal = _AMUITouch.Modal;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var lis = data.map(function (d, i) {\n      return React.createElement(List.Item, {\n        title: d.title,\n        after: d.val\n      });\n    });\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        List,\n        null,\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control18_pQ0Aqt: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl14_fTnxNe: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl14_fTnxNe: function () {
      var selfTemplate = 'const {Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    return (\n      <div>\n        <Button block amStyle="primary" onClick={me.handleClick}>{data}</Button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var me = this;\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        Button,\n        { block: true, amStyle: "primary", onClick: me.handleClick },\n        data\n      )\n    );\n  }\n});';
    },
    getData_control23_fPtLX6: function (elem) {
      if (!elem) {
        return;
      }var ths = elem.querySelector('.datagrid-header').querySelector('.datagrid-header-inner').querySelector('.datagrid-htable').querySelector('tr').querySelectorAll('td');var trs = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');var tIndex = [];var data = [];for (var i = 1; i < ths.length; i++) {
        var title = ths[i].textContent.trim();tIndex.push({ name: title, index: i });
      }for (var k = 0; k < trs.length; k++) {
        var index = k;if ($(trs[k]).hasClass('datagrid-row-checked')) {
          var tds = trs[k].querySelectorAll('td');for (var j = 0; j < tIndex.length; j++) {
            if (j == 0) {
              data.push({ items: [], checked: true, index: index });
            }var val = tds[tIndex[j].index].textContent.trim();if (tIndex[j].name == "机构名称") {
              data[data.length - 1].mechanism = val;
            } else if (tIndex[j].name == "机构代码") {
              data[data.length - 1].code = val;
            } else {
              data[data.length - 1].items.push({ title: tIndex[j].name, val: val });
            }
          }
        } else {
          var tds = trs[k].querySelectorAll('td');for (var j = 0; j < tIndex.length; j++) {
            if (j == 0) {
              data.push({ items: [], checked: false, index: index });
            }var val = tds[tIndex[j].index].textContent.trim();if (tIndex[j].name == "机构名称") {
              data[data.length - 1].mechanism = val;
            } else if (tIndex[j].name == "机构代码") {
              data[data.length - 1].code = val;
            } else {
              data[data.length - 1].items.push({ title: tIndex[j].name, val: val });
            }
          }
        }
      }return data;
    },
    doAction_uiControl19_rWqio7: function (data, elem) {
      var type = data.eventType;var customData = data.customData;var _elem = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');if (type === 'click') {
        var ck = _elem[customData].querySelector('.datagrid-cell-check');ck.click();
      }
    },
    getTemplate_uiControl19_rWqio7: function () {
      var selfTemplate = 'const{  Container,TodoItemTypeOne,Pair,Icon}=AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    var lis = data.map(function(d,i){\n      return(\n       <TodoItemTypeOne \n         defaultCollapsed\n         title={\n            <div>{!d.checked?<span style={{paddingRight:5}}><Icon  onClick={me.onClick} data-index={d.index} name="elect-l-c" /></span>:<span style={{paddingRight:5}}><Icon  onClick={me.onClick} data-index={d.index} name="elect-c" /></span>}{d.mechanism}</div>\n          }\n\n         subtitle={ <Pair  name="\u673A\u6784\u4EE3\u7801\uFF1A" value={d.code} />}\n            >\n          {d.items.map(function(item,j){\n            return(\n               <Pair  name={item.title} value={item.val} />\n            )\n          })}       \n       </TodoItemTypeOne>\n      )\n    })    \n    return (\n      <div>\n      \t{lis}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Container = _AMUITouch.Container,\n    TodoItemTypeOne = _AMUITouch.TodoItemTypeOne,\n    Pair = _AMUITouch.Pair,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var me = this;\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        TodoItemTypeOne,\n        {\n          defaultCollapsed: true,\n          title: React.createElement(\n            "div",\n            null,\n            !d.checked ? React.createElement(\n              "span",\n              { style: { paddingRight: 5 } },\n              React.createElement(Icon, { onClick: me.onClick, "data-index": d.index, name: "elect-l-c" })\n            ) : React.createElement(\n              "span",\n              { style: { paddingRight: 5 } },\n              React.createElement(Icon, { onClick: me.onClick, "data-index": d.index, name: "elect-c" })\n            ),\n            d.mechanism\n          ),\n\n          subtitle: React.createElement(Pair, { name: "\\u673A\\u6784\\u4EE3\\u7801\\uFF1A", value: d.code })\n        },\n        d.items.map(function (item, j) {\n          return React.createElement(Pair, { name: item.title, value: item.val });\n        })\n      );\n    });\n    return React.createElement(\n      "div",\n      null,\n      lis\n    );\n  }\n});';
    },
    getData_control24_vzBHSe: function (elem) {
      if (!elem) {
        return;
      }var btn = elem.querySelectorAll('.l-btn-text');var data = [];for (var i = 0; i < btn.length; i++) {
        var obj = {};obj.text = btn[i].textContent;obj.index = i;data.push(obj);
      }return data;
    },
    doAction_uiControl20_EuOkr6: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.children[customData];ck.click();
      }
    },
    getTemplate_uiControl20_EuOkr6: function () {
      var selfTemplate = 'const {Button,ButtonGroup} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    var lis = data.map(function(d,i){\n      return(\n          <Button data-index={d.index} hollow onClick={me.onClick}>{d.text}</Button>\n      )\n    })\n    return (\n      <div className="hzx-btn-box">\n        <ButtonGroup  gapped justify>\n          {lis}\n        </ButtonGroup>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button,\n    ButtonGroup = _AMUITouch.ButtonGroup;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var me = this;\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        Button,\n        { "data-index": d.index, hollow: true, onClick: me.onClick },\n        d.text\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "hzx-btn-box" },\n      React.createElement(\n        ButtonGroup,\n        { gapped: true, justify: true },\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control20_dU6LML: function (elem) {
      if (!elem) {
        return;
      }var title = elem.querySelector('.panel-header').querySelector('.panel-title').textContent;var textArea = elem.querySelector('#openedDialog').querySelector('iframe').contentDocument.querySelector('textarea').value;var btnTxt = elem.querySelector('.dialog-button').querySelector('.l-btn').querySelector('.l-btn-left').querySelector('.l-btn-text').textContent;var data = [];var obj = {};obj.title = title;obj.btnTxt = btnTxt;obj.textArea = textArea;data.push(obj);return data;
    },
    doAction_uiControl15_cL0rNu: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'value') {
        var textArea = elem.querySelector('#openedDialog').querySelector('iframe').contentDocument.querySelector('textarea');textArea.value = customData;
      } else if (type === 'click') {
        var btn = elem.querySelector('.dialog-button').querySelector('.l-btn').querySelector('.l-btn-left').querySelector('.l-btn-text');btn.click();
      } else if (type === 'close') {
        var close = elem.querySelector('.panel-tool').querySelector('.panel-tool-close');close.click();
      }
    },
    getTemplate_uiControl15_cL0rNu: function () {
      var selfTemplate = 'const{Modal,Field,ButtonGroup,Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  onClose: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'close\'\n      });\n    }\n  },\n  onBlur: function(e) {\n    var handler = this.props.customHandler;\n    var val=e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'value\',\n        data:val\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(\n      \t<div></div>\n      )\n    }\n    var lis = data.map(function(d,i){\n      return(\n        <Modal\n          title={d.title}\n          closeBtn={false}\n          isOpen={true}\n        >\n          <Field\n            value={d.textArea}\n            type="textarea"\n            onBlur={me.onBlur}\n            rows={3}\n          />\n          <ButtonGroup justify  style={{paddingTop:10}}>\n            <Button\n              onClick={me.onClose}\n              hollow\n            >\n              \u53D6\u6D88\n            </Button>\n            <Button\n              amStyle="primary"\n              onClick={me.onClick}\n            >\n              \u63D0\u4EA4\n            </Button>\n          </ButtonGroup>\n        </Modal>\n        \n      )\n    })\n    return (\n      <div>\n      \t{lis}\n        <div className="hzx-mask"></div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Field = _AMUITouch.Field,\n    ButtonGroup = _AMUITouch.ButtonGroup,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  onClose: function onClose() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'close\'\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var handler = this.props.customHandler;\n    var val = e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'value\',\n        data: val\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement(\'div\', null);\n    }\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        Modal,\n        {\n          title: d.title,\n          closeBtn: false,\n          isOpen: true\n        },\n        React.createElement(Field, {\n          value: d.textArea,\n          type: \'textarea\',\n          onBlur: me.onBlur,\n          rows: 3\n        }),\n        React.createElement(\n          ButtonGroup,\n          { justify: true, style: { paddingTop: 10 } },\n          React.createElement(\n            Button,\n            {\n              onClick: me.onClose,\n              hollow: true\n            },\n            \'\\u53D6\\u6D88\'\n          ),\n          React.createElement(\n            Button,\n            {\n              amStyle: \'primary\',\n              onClick: me.onClick\n            },\n            \'\\u63D0\\u4EA4\'\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      lis,\n      React.createElement(\'div\', { className: \'hzx-mask\' })\n    );\n  }\n});';
    },
    getData_control21_5RzVCo: function (elem) {
      if (!elem) {
        return;
      }var trs = elem.querySelectorAll('.col2');var data = [];for (var i = 0; i < trs.length; i++) {
        var name = trs[i].querySelector('label').textContent;var val = trs[i].querySelector('input').value;var obj = {};obj.name = name;obj.val = val;data.push(obj);
      }return data;
    },
    doAction_uiControl16_WpXa63: function (data, elem) {},
    getTemplate_uiControl16_WpXa63: function () {
      var selfTemplate = 'const {List} = AMUITouch2;\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var lis = data.map(function(d,i){\n      return(\n        <List.Item  after={d.val} title={d.name} />\n      )\n    })\n    return (\n      <div>\n        <List>\n        \t{lis}\n        </List>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    List = _AMUITouch.List;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var lis = data.map(function (d, i) {\n      return React.createElement(List.Item, { after: d.val, title: d.name });\n    });\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        List,\n        null,\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control22_dMMdhr: function (elem) {
      if (!elem) {
        return;
      }var text = elem.querySelector('.messager-body').children[1].textContent;return text;
    },
    doAction_uiControl18_SPZ3rD: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.querySelector('.messager-body').querySelector('.messager-button').querySelector('a');ck.click();
      }
    },
    getTemplate_uiControl18_SPZ3rD: function () {
      var selfTemplate = 'const {Modal} = AMUITouch2;\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    return (\n      <div>\n        <Modal\n          role="alert" style={{zIndex:999}}\n          isOpen= {true}\n          onAction={me.handleClick}\n        >\n          <div className="hzx-success-icon"></div>\n          {data}\n        </Modal>\n        <div className="hzx-mask"></div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        Modal,\n        {\n          role: "alert", style: { zIndex: 999 },\n          isOpen: true,\n          onAction: me.handleClick\n        },\n        React.createElement("div", { className: "hzx-success-icon" }),\n        data\n      ),\n      React.createElement("div", { className: "hzx-mask" })\n    );\n  }\n});';
    }
  }, "displ_itownet");
})(window, ysp);