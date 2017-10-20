'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function getData_control0(elem) {
      return ysp.customHelper.getFormData(elem);
    },
    doAction_uiControl2: function doAction_uiControl2(data, elem) {
      var id = data.dataCustom.id;
      var value = data.dataCustom.value;
      var eventType = data.eventType;
      var el;

      if (!id) {
        return;
      }

      el = elem.querySelector('#' + id);
      if (!el) {
        return;
      }

      if (eventType === 'click') {
        el.click();
      } else if (eventType === 'change') {
        el.value = value;
        el.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl2: function getTemplate_uiControl2() {
      //var selfTemplate = "module.exports = React.createClass({\n\tonClick: function(e) {\n\t\tvar id = e.target.getAttribute('data-id');\n\t\tvar handler = this.props.customHandler;\n\t\tif (id && handler) {\n\t\t\thandler({\n\t\t\t\tdata: {\n\t\t\t\t\tid: id\n\t\t\t\t},\n\t\t\t\teventType: 'click'\n\t\t\t});\n\t\t}\n\t},\n\tonChange: function(e) {\n\t\tvar id = e.target.getAttribute('data-id');\n\t\tvar value = e.target.value;\n\t\tvar handler = this.props.customHandler;\n\t\tif (id && handler) {\n\t\t\thandler({\n\t\t\t\tdata: {\n\t\t\t\t\tid: id,\n\t\t\t\t\tvalue: value\n\t\t\t\t},\n\t\t\t\teventType: 'change'\n\t\t\t});\n\t\t}\n\t},\n\trender: function() {\n    \tvar data = this.props.data.customData;\n    \tvar self = this;\n    \tvar blocks = [];\n    \tvar items = [];\n    \tvar title = '基本信息';\n    \tdata.forEach(function(d, idx) {\n    \t\tswitch (d.type) {\n       \t\t\tcase 'input': {\n       \t\t\t\titems.push(<li key={'li-' + idx}>\n       \t\t\t\t\t<span className='span-left span-key'>{d.key}</span>\n       \t\t\t\t\t<span className='span-right'><input data-id={d.id} onChange={self.onChange}/></span>\n       \t\t\t\t\t</li>);\n       \t\t\t\tbreak;\n       \t\t\t}\n       \t\t\t/*case 'textarea': {\n       \t\t\t\titems.push(<li key={'li-' + idx}>\n       \t\t\t\t\t<span className='span-key'>{d.key}</span>\n       \t\t\t\t\t<textarea data-id={d.id} onChange={self.onChange}></textarea>\n       \t\t\t\t\t</li>);\n       \t\t\t\tbreak;\n       \t\t\t}*/\n       \t\t\tcase 'button': {\n\t\t\t\t\titems.push(<li key={'li-' + idx}>\n       \t\t\t\t\t<span className='span-key'>{d.key}</span>\n       \t\t\t\t\t<button data-id={d.id} onClick={self.onClick}>{d.text}</button>\n       \t\t\t\t\t</li>);\n       \t\t\t\tbreak;\n       \t\t\t}\n       \t\t\tcase 'text': {\n                  \tif ((!d.value || d.value.length <= 30) && d.key.length <= 8) {\n                    \titems.push(<li key={'li-' + idx}>\n       \t\t\t\t\t<span className='span-left span-key'>{d.key}</span>\n       \t\t\t\t\t<span className='span-right span-value'>{d.value || ' '}</span>\n       \t\t\t\t\t</li>);\n\n                    } else {\n                    \titems.push(<li key={'li-' + idx}>\n       \t\t\t\t\t<span className='span-line span-key'>{d.key}</span>\n       \t\t\t\t\t<span className='span-line span-value'>{d.value || ' '}</span>\n       \t\t\t\t\t</li>);\n                    }\n       \t\t\t\tbreak;\n       \t\t\t}\n       \t\t\tcase 'title': {\n       \t\t\t\tblocks.push(<div className='div-container' key={'blocks-' + blocks.length}>\n       \t\t\t\t<span className='span-title'>{title}</span>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t{items}\n\t\t\t\t\t</ul>\n       \t\t\t\t</div>);\n       \t\t\t\titems = [];\n       \t\t\t\ttitle = d.value;\n       \t\t\t\tbreak;\n       \t\t\t}\n              \tcase 'subTitle': {\n       \t\t\t\titems.push(<li key={'li-' + idx}><span className='span-sub-title'>{d.value}</span></li>);\n       \t\t\t}\n       \t\t}   \n    \t});\n      \t\n        return (<div className='outer-container'>\n\t\t\t{blocks}\n        </div>);\n    }\n});";
      //return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var id = e.target.getAttribute('data-id');\n    var handler = this.props.customHandler;\n    if (id && handler) {\n      handler({\n        data: {\n          id: id\n        },\n        eventType: 'click'\n      });\n    }\n  },\n  onChange: function onChange(e) {\n    var id = e.target.getAttribute('data-id');\n    var value = e.target.value;\n    var handler = this.props.customHandler;\n    if (id && handler) {\n      handler({\n        data: {\n          id: id,\n          value: value\n        },\n        eventType: 'change'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var self = this;\n    var blocks = [];\n    var items = [];\n    var title = '基本信息';\n    data.forEach(function (d, idx) {\n      switch (d.type) {\n        case 'input':\n          {\n            items.push(React.createElement(\n              'li',\n              { key: 'li-' + idx },\n              React.createElement(\n                'span',\n                { className: 'span-left span-key' },\n                d.key\n              ),\n              React.createElement(\n                'span',\n                { className: 'span-right' },\n                React.createElement('input', { 'data-id': d.id, onChange: self.onChange })\n              )\n            ));\n            break;\n          }\n        /*case 'textarea': {\n        \titems.push(<li key={'li-' + idx}>\n        \t\t<span className='span-key'>{d.key}</span>\n        \t\t<textarea data-id={d.id} onChange={self.onChange}></textarea>\n        \t\t</li>);\n        \tbreak;\n        }*/\n        case 'button':\n          {\n            items.push(React.createElement(\n              'li',\n              { key: 'li-' + idx },\n              React.createElement(\n                'span',\n                { className: 'span-key' },\n                d.key\n              ),\n              React.createElement(\n                'button',\n                { 'data-id': d.id, onClick: self.onClick },\n                d.text\n              )\n            ));\n            break;\n          }\n        case 'text':\n          {\n            if ((!d.value || d.value.length <= 30) && d.key.length <= 8) {\n              items.push(React.createElement(\n                'li',\n                { key: 'li-' + idx },\n                React.createElement(\n                  'span',\n                  { className: 'span-left span-key' },\n                  d.key\n                ),\n                React.createElement(\n                  'span',\n                  { className: 'span-right span-value' },\n                  d.value || ' '\n                )\n              ));\n            } else {\n              items.push(React.createElement(\n                'li',\n                { key: 'li-' + idx },\n                React.createElement(\n                  'span',\n                  { className: 'span-line span-key' },\n                  d.key\n                ),\n                React.createElement(\n                  'span',\n                  { className: 'span-line span-value' },\n                  d.value || ' '\n                )\n              ));\n            }\n            break;\n          }\n        case 'title':\n          {\n            blocks.push(React.createElement(\n              'div',\n              { className: 'div-container', key: 'blocks-' + blocks.length },\n              React.createElement(\n                'span',\n                { className: 'span-title' },\n                title\n              ),\n              React.createElement(\n                'ul',\n                null,\n                items\n              )\n            ));\n            items = [];\n            title = d.value;\n            break;\n          }\n        case 'subTitle':\n          {\n            items.push(React.createElement(\n              'li',\n              { key: 'li-' + idx },\n              React.createElement(\n                'span',\n                { className: 'span-sub-title' },\n                d.value\n              )\n            ));\n          }\n      }\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'outer-container' },\n      blocks\n    );\n  }\n});";
      var selfTemplate = 'import { GetFormTemplate } from \'ysp-custom-components\';\nexport default (props) => <GetFormTemplate {...props} />';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nexports.default = function (props) {\n  return React.createElement(_yspCustomComponents.GetFormTemplate, props);\n};';
    },
    getData_control8: function getData_control8(elem) {
      return ysp.customHelper.getTableData(elem);
    },
    doAction_uiControl16: function doAction_uiControl16(data, elem) {},
    getTemplate_uiControl16: function getTemplate_uiControl16() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  },\n  \n  componentWillUnmount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n  }\n});";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   },\n\n   componentWillUnmount: function componentWillUnmount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n   }\n});";
    },
    getData_control3: function getData_control3(elem) {
      return ysp.customHelper.getTableDataWithThead(elem);
    },
    doAction_uiControl8: function doAction_uiControl8(data, elem) {},
    getTemplate_uiControl8: function getTemplate_uiControl8() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  },\n  \n  componentWillUnmount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n  }\n});";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   },\n\n   componentWillUnmount: function componentWillUnmount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n   }\n});";
    },
    getData_control4: function getData_control4(elem) {
      return ysp.customHelper.getTableDataWithThead(elem);
    },
    doAction_uiControl11: function doAction_uiControl11(data, elem) {},
    getTemplate_uiControl11: function getTemplate_uiControl11() {
      var selfTemplate = "module.exports = React.createClass({\n\trender: function() {\n    \treturn (<AMUI.Table {...this.props.data.customData} mode='HorizonScroll'></AMUI.Table>)\n    },\n  \n  componentDidMount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n  },\n  \n  componentWillUnmount: function() {\n  \tdocument.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n  }\n});";
      return "'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   render: function render() {\n      return React.createElement(AMUI.Table, _extends({}, this.props.data.customData, { mode: 'HorizonScroll' }));\n   },\n\n   componentDidMount: function componentDidMount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'hidden';\n   },\n\n   componentWillUnmount: function componentWillUnmount() {\n      document.querySelector('[data-type=\\'root\\']').style.overflow = 'auto';\n   }\n});";
    },

    getData_control11: function getData_control11(elem) {
      return '返回';
    },
    doAction_back_btn: function doAction_back_btn(data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_back_btn: function getTemplate_back_btn() {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='process-header-left-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'process-header-left-btn', onClick: this.onClick });\n   }\n});";
    }
  });
})(window, ysp);