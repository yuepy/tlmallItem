(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control351_tQzaTT: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl351_GF3X46: function (data, elem) {},
    getTemplate_uiControl351_GF3X46: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control352_eTEEC0: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl352_OL3zoh: function (data, elem) {},
    getTemplate_uiControl352_OL3zoh: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == 'content disnone'){\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    }else{\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='contenttit'>\n        \t<div className='contentitem'>{ele.leftval}</div>\n          <div className='contentitem'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className='initiator'>\n        <div className='contenttitle'><span></span><p>{data.title}<i className='shouqi' onClick={_this.click}></i></p></div>\n        <div className='content disnone'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == 'content disnone') {\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    } else {\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'contenttit' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.leftval\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'initiator' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement('i', { className: 'shouqi', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control353_1uSZ1H: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '员工信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
          }if (tds[k].querySelector('select')) {
            var opts = tds[k].querySelector('select').querySelectorAll('option');for (var j = 0; j < opts.length; j++) {
              if (opts[j].value == tds[k].querySelector('select').value) {
                arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: opts[j].textContent.trim() });
              }
            }
          }if (tds[k].querySelector('a')) {
            arr.push({ href: tds[k].querySelector('a').href, text: tds[k].textContent.trim(), type: 'a' });
          }
        }data.content.push(arr);
      } // var table = elem.querySelectorAll('table')[2];
      var tr = elem.querySelectorAll('tr')[elem.querySelectorAll('tr').length - 2];var tds = tr.querySelectorAll('td')[0];data.content.push([{ type: 'textarea' }]);return data;
    },
    doAction_uiControl353_qebUo5: function (data, elem) {},
    getTemplate_uiControl353_qebUo5: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    // debugger;\n    if(target.tagName.toLowerCase() == 'i'){\n      target = target.parentElement.parentElement;\n    }\n    if(target.tagName.toLowerCase() == 'a'){\n      target = target.parentElement;\n    }\n    if(target.previousSibling.className == 'content disnone'){\n      target.previousSibling.className = 'content';\n      target.querySelector('a').className = 'xia';\n    }else{\n      target.previousSibling.className = 'content disnone';\n      target.querySelector('a').className = 'shang';\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index<2){\n        var lisele = ele.map(function(d,i){\n          return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    var list = data.content.map(function(ele,index){\n      if(index>1){\n        var lisele = ele.map(function(d,i){\n          if(!d.type){\n            return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n          }else{\n            if(d.type == 'textarea'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem'><textarea value={d.right}></textarea></div>\n                </div>\n              )\n            }\n          }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    return (\n      <div className='information'>\n       \t<div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n          {lis}</div>\n        <div className='content disnone'>\n          {list}\n          \n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    // debugger;\n    if (target.tagName.toLowerCase() == 'i') {\n      target = target.parentElement.parentElement;\n    }\n    if (target.tagName.toLowerCase() == 'a') {\n      target = target.parentElement;\n    }\n    if (target.previousSibling.className == 'content disnone') {\n      target.previousSibling.className = 'content';\n      target.querySelector('a').className = 'xia';\n    } else {\n      target.previousSibling.className = 'content disnone';\n      target.querySelector('a').className = 'shang';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index < 2) {\n        var lisele = ele.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'contenttit' },\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.left\n            ),\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.right\n            )\n          );\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    var list = data.content.map(function (ele, index) {\n      if (index > 1) {\n        var lisele = ele.map(function (d, i) {\n          if (!d.type) {\n            return React.createElement(\n              'div',\n              { className: 'contenttit' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.left\n              ),\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.right\n              )\n            );\n          } else {\n            if (d.type == 'textarea') {\n              return React.createElement(\n                'div',\n                { className: 'contenttit' },\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  d.left\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  React.createElement('textarea', { value: d.right })\n                )\n              );\n            }\n          }\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        list\n      )\n    );\n  }\n});";
    },
    getData_control354_S7sgbQ: function (elem) {
      if (!elem) {
        return;
      }var data = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].textContent.replace(/\s+/g, '') != '') {
            data.push({ index: j, content: tds[j].querySelector('a').textContent, class: tds[j].querySelector('a').getAttribute('class') });
          }
        }
      }return data;
    },
    doAction_uiControl354_iFVgGK: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = data.dataCustom;var target = elem.querySelectorAll('td')[index].querySelector('a');target.click();
      }
    },
    getTemplate_uiControl354_iFVgGK: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.dataset.index\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.map(function(d,i){\n      \n      return (\n      \t<span className={d.class=='initA'?\"ysp-RadiusUnselected-tt\":'ysp-RadiusSelected-tt'} data-index={d.index} onClick={_this.onclick.bind(_this)}>{d.content}</span>\n      )\n    })\n    return (\n      <div className='ysp-brtx-tt'>{list}</div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.dataset.index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.map(function (d, i) {\n\n      return React.createElement(\n        'span',\n        { className: d.class == 'initA' ? \"ysp-RadiusUnselected-tt\" : 'ysp-RadiusSelected-tt', 'data-index': d.index, onClick: _this.onclick.bind(_this) },\n        d.content\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-brtx-tt' },\n      list\n    );\n  }\n});";
    },
    getData_control355_gD0TbJ: function (elem) {
      if (!elem) {
        return;
      }var data = { titleBar: [], content: [] };data.title = '个人优劣势综述';var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        if (i == 0) {
          var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            data.titleBar.push(tds[j].textContent.trim());
          }
        } else if (i > 0) {
          var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            arr.push(tds[j].textContent.trim());
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl355_Bbh981: function (data, elem) {},
    getTemplate_uiControl355_Bbh981: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      return(\n      \t<div>\n        \t\t<p><span>0{i+1}</span><span>{d[0]}</span></p>\n          <div>\n          \t\t<p><span>{data.titleBar[1]}</span><span>{d[1]}</span></p>\n            <p><span>{data.titleBar[2]}</span><span>{d[2]}</span></p>\n            <p><span>{data.titleBar[3]}</span><span>{d[3]}</span></p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div className='ysp-grylszs-tt'>\n        <p>{data.title}</p>\n        {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'p',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '0',\n            i + 1\n          ),\n          React.createElement(\n            'span',\n            null,\n            d[0]\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.titleBar[1]\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[1]\n            )\n          ),\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.titleBar[2]\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[2]\n            )\n          ),\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.titleBar[3]\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[3]\n            )\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-grylszs-tt' },\n      React.createElement(\n        'p',\n        null,\n        data.title\n      ),\n      list\n    );\n  }\n});";
    },
    getData_control357_v8V89U: function (elem) {
      if (!elem) {
        return;
      }var data = {};var trs = elem.querySelectorAll('tr');data.title = '知会信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl357_OhufHt: function (data, elem) {},
    getTemplate_uiControl357_OhufHt: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        return(\n        \t<div>\n          \t<div className='contentitem'>{d.left}</div>\n            <div className='contentitem'>{d.right}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    return (\n      <div className='understanding'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n    \t\t\t{lis}    \t\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d.left\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d.right\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'understanding' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control358_ePkNrp: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl358_Cb1UiT: function (data, elem) {},
    getTemplate_uiControl358_Cb1UiT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control359_TGdNhO: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl359_TB08ho: function (data, elem) {
      if (data.eventType == 'close') {
        elem.click();
      }
    },
    getTemplate_uiControl359_TB08ho: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclickClose:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'close'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='ysp-closeBtn-tt'>\n        <button onClick={this.onclickClose.bind(this)}>{this.props.customData}</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclickClose: function onclickClose(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'close'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-closeBtn-tt' },\n      React.createElement(\n        'button',\n        { onClick: this.onclickClose.bind(this) },\n        this.props.customData\n      )\n    );\n  }\n});";
    },
    getData_control360_8px16H: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector("input[type='radio']")) {
            arr.push({ radio: [tds[j].querySelectorAll("input[type='radio']")[0].disabled, tds[j].querySelectorAll("input[type='radio']")[1].disabled], readyState: [tds[j].querySelectorAll("input[type='radio']")[0].checked, tds[j].querySelectorAll("input[type='radio']")[1].checked], index: j, type: 'radio' });
          } else if (tds[j].querySelector("input[type='text']") && tds[j].querySelector("span")) {
            arr.push({ left: tds[j].querySelector('span').textContent.trim(), index: j });
          } else if (tds[j].querySelector("input[type='text']")) {
            arr.push({ left: tds[j].querySelector("input[type='text']").value, index: j });
          } else {
            arr.push({ left: tds[j].textContent.trim(), index: j });
          }
        }data.content.push(arr);
      }data.title = '继任计划';return data;
    },
    doAction_uiControl360_vmvc3u: function (data, elem) {},
    getTemplate_uiControl360_vmvc3u: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      if(i==0){\n       var con= d.map(function(dd,ii){\n         if(dd.type=='radio'){\n           return(\n            \t<p>\n               <span calssName={dd.readyState[0]==true?\"ysp-RadiusUnselected-tt\":\"ysp-RadiusSelected-tt\"}>\u662F</span>\n               <span calssName={dd.readyState[1]==true?\"ysp-RadiusUnselected-tt\":\"ysp-RadiusSelected-tt\"}>\u5426</span></p>\n            )           \n         }\n         if(dd.index==2 || dd.index==3){\n           return(\n           \t<p><span>{dd.left}</span><input readOnly={false}/></p>\n           )\n         }\n          \t\n        })\n        return(\n        \t<div>\n            <p>{d[0].left}</p>\n            {con}\n          </div>\n        )\n      }else{\n        return(\n            <div></div>\n        )\n      }\n      \n    })\n    return (\n      <div>\n        {list}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      if (i == 0) {\n        var con = d.map(function (dd, ii) {\n          if (dd.type == 'radio') {\n            return React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                { calssName: dd.readyState[0] == true ? \"ysp-RadiusUnselected-tt\" : \"ysp-RadiusSelected-tt\" },\n                \"\\u662F\"\n              ),\n              React.createElement(\n                \"span\",\n                { calssName: dd.readyState[1] == true ? \"ysp-RadiusUnselected-tt\" : \"ysp-RadiusSelected-tt\" },\n                \"\\u5426\"\n              )\n            );\n          }\n          if (dd.index == 2 || dd.index == 3) {\n            return React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                dd.left\n              ),\n              React.createElement(\"input\", { readOnly: false })\n            );\n          }\n        });\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"p\",\n            null,\n            d[0].left\n          ),\n          con\n        );\n      } else {\n        return React.createElement(\"div\", null);\n      }\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      list\n    );\n  }\n});";
    },
    getData_control361_gSFPJh: function (elem) {
      if (!elem) {
        return;
      }var data = { titleBar: [], content: [] };data.title = '职业发展方向建议:(注：可以选择本岗位或者其他岗位)';var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        if (i == 0) {
          var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            data.titleBar.push(tds[j].textContent.trim());
          }
        } else if (i > 0) {
          var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            if (tds[j].querySelector("input[type='radio']")) {
              arr.push({ left: [tds[j].textContent.trim().split(/\n/)[0].trim(), tds[j].textContent.trim().split(/\n/)[1].trim()], right: tds[j].querySelector("input[type='text']").value, checked: [tds[j].querySelectorAll("input[type='radio']")[0].checked, tds[j].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
            } else if (tds[j].querySelector("textarea")) {
              arr.push({ txt: tds[j].querySelector("textarea").value });
            } else {
              arr.push(tds[j].textContent.trim());
            }
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl361_CILv1M: function (data, elem) {},
    getTemplate_uiControl361_CILv1M: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      if(d[1].type=='radio'){\n         return(\n         \t\t<div>\n             \t<p><span>0{i+1}</span>{d[0]}</p>\n             \t<p>\n                <span className={d[1].checked[0]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>{d[1].left[0]}</span>\n                <span className={d[1].checked[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>{d[1].left[1]}</span>\n             </p>\n             <p>{d[1].right}</p>\n             <p>{data.titleBar[2]}</p>\n             <p>{d[2].txt}</p>\n           </div>\n         )\n         \n      }else{\n         return(\n            <div>\n                <p><span>0{i+1}</span><span>{d[0]}</span></p>\n              <div>\n                  <p><span>{data.titleBar[1]}</span><span>{d[1]}</span></p>\n                <p><span>{data.titleBar[2]}</span><span>{d[2]}</span></p>\n\n              </div>\n            </div>\n          )\n      }\n      \n    })\n    return (\n      <div className='ysp-grylszs-tt ysp-post-tt ysp-postRadio-tt'>\n        <p>{data.title}</p>\n        {list}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      if (d[1].type == 'radio') {\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"0\",\n              i + 1\n            ),\n            d[0]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              { className: d[1].checked[0] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              d[1].left[0]\n            ),\n            React.createElement(\n              \"span\",\n              { className: d[1].checked[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              d[1].left[1]\n            )\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[1].right\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            data.titleBar[2]\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            d[2].txt\n          )\n        );\n      } else {\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"0\",\n              i + 1\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              d[0]\n            )\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.titleBar[1]\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.titleBar[2]\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                d[2]\n              )\n            )\n          )\n        );\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-grylszs-tt ysp-post-tt ysp-postRadio-tt\" },\n      React.createElement(\n        \"p\",\n        null,\n        data.title\n      ),\n      list\n    );\n  }\n});";
    }
  });
})(window, ysp);