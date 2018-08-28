(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control47_k7iJPb: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl46_LGTXf5: function (data, elem) {},
    getTemplate_uiControl46_LGTXf5: function () {
      var selfTemplate = "import { HeaderLeftbtn } from 'ysp-custom-components';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <HeaderLeftbtn title={this.props.customData} />\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(_yspCustomComponents.HeaderLeftbtn, { title: this.props.customData });\n  }\n});";
    },
    getData_control48_vzq1C5: function (elem) {
      if (!elem) return;var data = { content: [] };data.title = elem.querySelector('div').textContent.trim();var labels = elem.querySelector("table").querySelectorAll('label');for (var i = 0; i < labels.length; i++) {
        var obj = {};obj.left = labels[i].textContent.trim();var ipt = labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('input[type="text"]') ? labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('input[type="text"]') : labels[i].parentElement.nextElementSibling.querySelector('span').querySelector('textarea');obj.ipttext = ipt.value;obj.disabled = ipt.disabled;obj.readonly = ipt.readOnly;data.content.push(obj);
      }return data;
    },
    doAction_uiControl47_7KrR3H: function (data, elem) {},
    getTemplate_uiControl47_7KrR3H: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='maintain_query'>\n        <div>\n          {data.title}\n        </div>\n        {\n          data.content.map(function(ele,index){\n            if(!ele.disabled && !ele.readonly){\n              return(\n              \t<div>\n                \t<div>{ele.left}</div>\n                  <div><AInput type='text' value={ele.ipttext} redOnly={ele.readonly} disabled={ele.disabled} /></div>\n                </div>\n              )\n            }else{\n              return(\n              \t<div>\n                \t<div>{ele.left}</div>\n                  <div>{ele.ipttext}</div>\n                </div>\n              )\n            }\n            \n          })\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'maintain_query' },\n      React.createElement(\n        'div',\n        null,\n        data.title\n      ),\n      data.content.map(function (ele, index) {\n        if (!ele.disabled && !ele.readonly) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              ele.left\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { type: 'text', value: ele.ipttext, redOnly: ele.readonly, disabled: ele.disabled })\n            )\n          );\n        } else {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              ele.left\n            ),\n            React.createElement(\n              'div',\n              null,\n              ele.ipttext\n            )\n          );\n        }\n      })\n    );\n  }\n});";
    },
    getData_control49_MSdXh7: function (elem) {
      if (!elem) return;var data = { title: '授权区域列表', content: [], ths: [''] };var table = elem.querySelectorAll('div>table')[1],
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];arr.push(trs[i].textContent.trim());data.content.push(arr);
      }var table = elem.querySelector('.datagrid-view2').querySelector('table'),
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.ths.push(tds[k].textContent.trim());
        }
      }var table = elem.querySelector('.datagrid-view2').querySelectorAll('table')[1],
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content[i].push(tds[k].textContent.trim());
        }
      }return data;
    },
    doAction_uiControl48_PPJl9I: function (data, elem) {},
    getTemplate_uiControl48_PPJl9I: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='maintain_table'>\n        <div className='deil_title'>\n        \t{data.title}\n        </div>\n        <div>\n        \t<table>\n          \t<thead>\n            \t<tr>\n              \t{\n                  data.ths.map(function(ele,index){\n                    return(<th>{ele}</th>)\n                  })\n                }\n              </tr>\n            </thead>\n            <tbody>\n            \t{\n                data.content.map(function(ele,index){\n                  return(\n                  \t<tr>\n                    \t{\n                        ele.map(function(d,i){\n                          return(<td>{d}</td>)\n                        })\n                      }\n                    </tr>\n                  )\n                })\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'maintain_table' },\n      React.createElement(\n        'div',\n        { className: 'deil_title' },\n        data.title\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              data.ths.map(function (ele, index) {\n                return React.createElement(\n                  'th',\n                  null,\n                  ele\n                );\n              })\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            data.content.map(function (ele, index) {\n              return React.createElement(\n                'tr',\n                null,\n                ele.map(function (d, i) {\n                  return React.createElement(\n                    'td',\n                    null,\n                    d\n                  );\n                })\n              );\n            })\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control50_K5pa1O: function (elem) {
      if (!elem) return;var data = { title: '强检器具种别列表', content: [], ths: [''] };var table = elem.querySelectorAll('div>table')[1],
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];arr.push(trs[i].textContent.trim());data.content.push(arr);
      }var table = elem.querySelector('.datagrid-view2').querySelector('table'),
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.ths.push(tds[k].textContent.trim());
        }
      }var table = elem.querySelector('.datagrid-view2').querySelectorAll('table')[1],
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content[i].push(tds[k].textContent.trim());
        }
      }return data;
    },
    doAction_uiControl49_Jn0wyQ: function (data, elem) {},
    getTemplate_uiControl49_Jn0wyQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='maintain_table'>\n        <div className='deil_title'>\n        \t{data.title}\n        </div>\n        <div>\n        \t<table>\n          \t<thead>\n            \t<tr>\n              \t{\n                  data.ths.map(function(ele,index){\n                    return(<th>{ele}</th>)\n                  })\n                }\n              </tr>\n            </thead>\n            <tbody>\n            \t{\n                data.content.map(function(ele,index){\n                  return(\n                  \t<tr>\n                    \t{\n                        ele.map(function(d,i){\n                          return(<td>{d}</td>)\n                        })\n                      }\n                    </tr>\n                  )\n                })\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'maintain_table' },\n      React.createElement(\n        'div',\n        { className: 'deil_title' },\n        data.title\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              data.ths.map(function (ele, index) {\n                return React.createElement(\n                  'th',\n                  null,\n                  ele\n                );\n              })\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            data.content.map(function (ele, index) {\n              return React.createElement(\n                'tr',\n                null,\n                ele.map(function (d, i) {\n                  return React.createElement(\n                    'td',\n                    null,\n                    d\n                  );\n                })\n              );\n            })\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);