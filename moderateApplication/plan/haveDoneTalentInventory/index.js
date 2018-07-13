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
      }var data = ysp.customHelper.getTabledata(elem, ['文件名', '上传人', '上传时间', '版本', '操作']);data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl358_Cb1UiT: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'commit') {
        // debugger;
        elem.ownerDocument.querySelector("#" + data).click();setTimeout(function () {
          elem.ownerDocument.defaultView.InitAttachmentList();
        }, 1000); // setTimeout(function () {
        //   var url = ysp.appMain.getActiveUrl();
        //   ysp.appMain.reloadPage(url);
        // }, 2000);
      }if (type == 'add') {
        elem.ownerDocument.querySelector("#" + data).previousElementSibling.querySelector('input').click();
      }if (type == 'updel') {
        var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[data.i].click();
      }
    },
    getTemplate_uiControl358_Cb1UiT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if(target.tagName.toLowerCase() == 'button'){\n      console.log(target.id);\n      if(target.id == 'uploadDiv' ){\n        type = 'commit';\n        data = 'btnFileUpload';\n      }else{\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      type = 'updel';\n      data = {\n        index:target.getAttribute('data-index'),\n        i:target.className=='xiazai'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == 'shang'){\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displblock';\n      }\n    }else{\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(data==undefined){return \"\"}\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(index+1)}</div>\n              <div>{d}</div>\n              <div onClick={_this.click} className='shang'></div>\n            </div>\n          )\n        }\n        if(i == ele.length-1){\n          if(d.length>2){\n              return(\n              <div className='displnone'>\n                <div className='contentitem contentspan' style={{'width':'100%','text-align-last':'auto','text-align':'center'}}><p className='shanchu' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className='xiazai' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:''}</p></div>\n              </div>\n            )\n          }else{\n             return(\n              <div className='displnone'>\n                <div className='contentitem'><p className='xiazai' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n              </div>\n            )\n          }\n        }\n        return(\n        \t<div className='displnone'>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    \n    return (\n      <div className='Enclosure'>\n        <div className='contenttitle'>\n          <span className='xia'></span>\n          <p>{data.title}\n            \n          </p>\n        </div>\n        <div className='content'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if (target.tagName.toLowerCase() == 'button') {\n      console.log(target.id);\n      if (target.id == 'uploadDiv') {\n        type = 'commit';\n        data = 'btnFileUpload';\n      } else {\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      type = 'updel';\n      data = {\n        index: target.getAttribute('data-index'),\n        i: target.className == 'xiazai' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == 'shang') {\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displblock';\n      }\n    } else {\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (data == undefined) {\n      return \"\";\n    }\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (index + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            ),\n            React.createElement('div', { onClick: _this.click, className: 'shang' })\n          );\n        }\n        if (i == ele.length - 1) {\n          if (d.length > 2) {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem contentspan', style: { 'width': '100%', 'text-align-last': 'auto', 'text-align': 'center' } },\n                React.createElement(\n                  'p',\n                  { className: 'shanchu', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[2] + d[3]\n                ),\n                React.createElement(\n                  'p',\n                  { 'data-index': index, className: 'xiazai', onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d.length > 2 ? d[0] + d[1] : ''\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                React.createElement(\n                  'p',\n                  { className: 'xiazai', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[0] + d[1]\n                )\n              )\n            );\n          }\n        }\n        return React.createElement(\n          'div',\n          { className: 'displnone' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'Enclosure' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', { className: 'xia' }),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
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
            arr.push({ left: tds[j].querySelector('span').textContent.trim(), right: tds[j].querySelector("input[type='text']").value, index: j });
          } else if (tds[j].querySelector("input[type='text']")) {
            arr.push({ left: tds[j].querySelector("input[type='text']").value, index: j });
          } else if (tds[j].querySelector('select')) {
            if (tds[j].querySelector('select').querySelector("option").selected == true) {
              arr.push({ left: tds[j].querySelector('select').querySelector("option").textContent.trim(), type: 'seleced', index: j });
            }
          } else {
            arr.push({ left: tds[j].textContent.trim(), index: j });
          }
        }data.content.push(arr);
      }data.title = '继任计划';return data;
    },
    doAction_uiControl360_vmvc3u: function (data, elem) {},
    getTemplate_uiControl360_vmvc3u: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      if(i==0){\n       var con= d.map(function(dd,ii){\n         if(dd.type=='radio'){\n           return(\n            \t<p>\n               <span className={dd.readyState[0]==true?\"ysp-RadiusUnselected-tt\":\"ysp-RadiusSelected-tt\"}>\u662F</span>\n               <span className={dd.readyState[1]==true?\"ysp-RadiusUnselected-tt\":\"ysp-RadiusSelected-tt\"}>\u5426</span></p>\n            )           \n         }\n                   \t\n        })\n        return(\n        \t<div>\n            <p><span>{d[0].left}</span>{con}</p>            \n            <div>\n            \t\t<p><span>{data.content[0][2].left}</span><span>{data.content[0][2].right}</span></p>\n            \t\t<p><span>{data.content[0][3].left}</span><span>{data.content[0][4].left}</span></p>\n            </div>\n            <div>\n            \t\t<p><span>{data.content[1][0].left}</span></p>\n            \t\t<p><span>{data.content[1][1].left}</span><span>{data.content[1][2].left}</span></p>\n            </div>\n            \n          </div>\n        )\n      }else{\n        return(\n            <div></div>\n        )\n      }\n      \n    })\n    return (\n      <div className='ysp-jrjhPartTwo-tt'>\n       \n        {list}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      if (i == 0) {\n        var con = d.map(function (dd, ii) {\n          if (dd.type == 'radio') {\n            return React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                { className: dd.readyState[0] == true ? \"ysp-RadiusUnselected-tt\" : \"ysp-RadiusSelected-tt\" },\n                \"\\u662F\"\n              ),\n              React.createElement(\n                \"span\",\n                { className: dd.readyState[1] == true ? \"ysp-RadiusUnselected-tt\" : \"ysp-RadiusSelected-tt\" },\n                \"\\u5426\"\n              )\n            );\n          }\n        });\n        return React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              d[0].left\n            ),\n            con\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.content[0][2].left\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                data.content[0][2].right\n              )\n            ),\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.content[0][3].left\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                data.content[0][4].left\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            null,\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.content[1][0].left\n              )\n            ),\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                null,\n                data.content[1][1].left\n              ),\n              React.createElement(\n                \"span\",\n                null,\n                data.content[1][2].left\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\"div\", null);\n      }\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-jrjhPartTwo-tt\" },\n      list\n    );\n  }\n});";
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
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.content.map(function(d,i){\n      //debugger;\n      if(d[1].type=='radio'){\n         return(\n         \t\t<div className='ysp-postRadioContent-tt'>\n             \t<p><span>0{i+1}</span><span>{d[0]}</span></p>\n             \t<p>\n                <span className={d[1].checked[0]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>{d[1].left[0]}</span>\n                <span className={d[1].checked[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>{d[1].left[1]}</span>\n             </p>\n             <p>{d[1].right}</p>\n             <p>{data.titleBar[2]}</p>\n             <p>{d[2].txt}</p>\n           </div>\n         )\n         \n      }else{\n         return(\n            <div className='ysp-postRadioContent-tt'>\n                <p><span>0{i+1}</span><span>{d[0].txt}</span></p>\n              <div>\n                  <p><span>{data.titleBar[1]}</span><span>{d[1].txt}</span></p>\n                <p><span>{data.titleBar[2]}</span><span>{d[2].txt}</span></p>\n\n              </div>\n            </div>\n          )\n      }\n      \n    })\n    return (\n      <div className='ysp-grylszs-tt ysp-post-tt ysp-postRadio-tt'>\n        <p>{data.title}</p>\n        {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      //debugger;\n      if (d[1].type == 'radio') {\n        return React.createElement(\n          'div',\n          { className: 'ysp-postRadioContent-tt' },\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '0',\n              i + 1\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[0]\n            )\n          ),\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              { className: d[1].checked[0] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              d[1].left[0]\n            ),\n            React.createElement(\n              'span',\n              { className: d[1].checked[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              d[1].left[1]\n            )\n          ),\n          React.createElement(\n            'p',\n            null,\n            d[1].right\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titleBar[2]\n          ),\n          React.createElement(\n            'p',\n            null,\n            d[2].txt\n          )\n        );\n      } else {\n        return React.createElement(\n          'div',\n          { className: 'ysp-postRadioContent-tt' },\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '0',\n              i + 1\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[0].txt\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.titleBar[1]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1].txt\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.titleBar[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[2].txt\n              )\n            )\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-grylszs-tt ysp-post-tt ysp-postRadio-tt' },\n      React.createElement(\n        'p',\n        null,\n        data.title\n      ),\n      list\n    );\n  }\n});";
    },
    getData_control414_mubcRW: function (elem) {
      if (!elem) {
        return;
      }var data = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector('textarea')) {
            arr.push(tds[j].textContent.trim());
          } else {
            arr.push(tds[j].textContent.trim());
          }
        }data.push(arr);
      }return data;
    },
    doAction_uiControl414_XxK4Qs: function (data, elem) {},
    getTemplate_uiControl414_XxK4Qs: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var list=data.map(function(d,i){\n      return (\n      \t<div><span>{d[0]}</span><span>{d[1]}</span></div>\n      )\n    })\n    return (\n      <div className='ysp-DirectionLifting-tt'>\n        <p>\u63D0\u5347\u65B9\u5411</p>\n       {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          null,\n          d[0]\n        ),\n        React.createElement(\n          'span',\n          null,\n          d[1]\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-DirectionLifting-tt' },\n      React.createElement(\n        'p',\n        null,\n        '\\u63D0\\u5347\\u65B9\\u5411'\n      ),\n      list\n    );\n  }\n});";
    },
    getData_control415_bye06l: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push(elem.querySelector('textarea').value);return data;
    },
    doAction_uiControl415_F1bzl8: function (data, elem) {},
    getTemplate_uiControl415_F1bzl8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='ysp-Remarks-tt'>\n        <p>\u5907\u6CE8</p>\n      \t<ATextarea disabled='disabled' value={this.props.customData}></ATextarea>\n      </div>\n      \n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-Remarks-tt' },\n      React.createElement(\n        'p',\n        null,\n        '\\u5907\\u6CE8'\n      ),\n      React.createElement(ATextarea, { disabled: 'disabled', value: this.props.customData })\n    );\n  }\n});";
    },
    getData_control416_GAKTQV: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector("input[type='radio']")) {
            arr.push({ left: [tds[j].querySelectorAll("input[type='radio']")[0].checked, tds[j].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
          } else if (tds[j].querySelector('select')) {
            var sel = [];var selected = '';var opts = tds[j].querySelectorAll('option');for (var k = 0; k < opts.length; k++) {
              if (opts[k].selected == true) {
                selected = opts[k].textContent;
              }sel.push(opts[k].textContent);
            }arr.push({ selected: selected, right: sel, type: 'select' });
          } else if (tds[j].querySelector('textarea')) {
            arr.push({ left: tds[j].querySelector('textarea').value, right: tds[j].querySelector('textarea').disabled, type: 'textarea' });
          } else {
            arr.push({ left: tds[j].textContent.trim() });
          }
        }data.content.push(arr);
      }data.title = '岗位调动安排：由上级提议，将在盘点会议上和隔级上级、HR共同讨论确认';return data;
    },
    doAction_uiControl416_PPodmf: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var target = elem.parentElement.previousElementSibling.querySelector('a');target.click();
      }
    },
    getTemplate_uiControl416_PPodmf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data==undefined){\n      return \"\";\n    }\n   \tvar list=data.content.map(function(d,i){\n      var lid=d.map(function(dd,ii){\n        if(dd.type=='radio'){\n          return(\n            <div>\n              \t<p>{data.content[0][0].left}</p>\n            \t\t<p><span className={dd.left[0]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u662F</span><span className={dd.left[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u5426</span></p>\n            </div>\n          \t\n          )\n        }else if(dd.type=='select'){\n          return(\n          \t<p><span>{data.content[0][2].left}</span><span>{dd.selected}</span></p>\n          )\n        }else if(dd.type=='textarea'){\n          return(\n          \t<p><span>{data.content[1][0].left}</span><ATextarea disabled={dd.right} value={dd.left}></ATextarea></p>\n          )\n        }\n      })\n      return(\n      \t<div>{lid}</div>\n      )\n    })\n    return (\n      <div className='ysp-JobTransfer-tt'>\n\t\t\t\t\t<p><span>{data.title}</span> <span onClick={_this.onclick.bind(_this)}>\u8BF4\u660E</span></p>\n        \t{list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data == undefined) {\n      return \"\";\n    }\n    var list = data.content.map(function (d, i) {\n      var lid = d.map(function (dd, ii) {\n        if (dd.type == 'radio') {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'p',\n              null,\n              data.content[0][0].left\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                { className: dd.left[0] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n                '\\u662F'\n              ),\n              React.createElement(\n                'span',\n                { className: dd.left[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n                '\\u5426'\n              )\n            )\n          );\n        } else if (dd.type == 'select') {\n          return React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.content[0][2].left\n            ),\n            React.createElement(\n              'span',\n              null,\n              dd.selected\n            )\n          );\n        } else if (dd.type == 'textarea') {\n          return React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              data.content[1][0].left\n            ),\n            React.createElement(ATextarea, { disabled: dd.right, value: dd.left })\n          );\n        }\n      });\n      return React.createElement(\n        'div',\n        null,\n        lid\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-JobTransfer-tt' },\n      React.createElement(\n        'p',\n        null,\n        React.createElement(\n          'span',\n          null,\n          data.title\n        ),\n        ' ',\n        React.createElement(\n          'span',\n          { onClick: _this.onclick.bind(_this) },\n          '\\u8BF4\\u660E'\n        )\n      ),\n      list\n    );\n  }\n});";
    },
    getData_control417_iAGADB: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent.replace(/\s+/g, '').split('：')[1];
    },
    doAction_uiControl417_h4mDKk: function (data, elem) {},
    getTemplate_uiControl417_h4mDKk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    if(data==undefined){\n      return\"\";\n    }\n    return (\n      <div className='ysp-notice-tt'>\n        <p>\u586B\u5199\u6307\u5F15</p>\n        {data}\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data == undefined) {\n      return \"\";\n    }\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-notice-tt\" },\n      React.createElement(\n        \"p\",\n        null,\n        \"\\u586B\\u5199\\u6307\\u5F15\"\n      ),\n      data\n    );\n  }\n});";
    },
    getData_control418_OZ2UDb: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };data.title = '异地意愿：由员工本人填写，上级可查看';var trs = $(elem).children('tbody').children('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].children;for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector("input[type='radio']")) {
            arr.push({ type: 'radio', checked: [tds[j].querySelectorAll("input[type='radio']")[0].checked, tds[j].querySelectorAll("input[type='radio']")[1].checked], index: j });
          } else if (tds[j].querySelector('textarea')) {
            arr.push({ type: 'textarea', readyState: tds[j].querySelector('textarea').readOnly, val: tds[j].querySelector('textarea').value, index: j });
          } else if (tds[j].querySelector("input[type='text']")) {
            arr.push({ readyState: tds[j].querySelector("input[type='text']").readOnly, val: tds[j].querySelector("input[type='text']").value, index: j });
          } else if (tds[j].querySelector('table')) {
            var Table = [];var tableTr = tds[j].querySelectorAll('tr');for (var m = 0; m < tableTr.length; m++) {
              // var Tr=[];
              var tableTd = tableTr[m].querySelectorAll('td');for (var n = 0; n < tableTd.length; n++) {
                if (tableTd[n].querySelector('label') != null) {
                  Table.push({ label: tableTd[n].querySelector('label').textContent.trim(), checked: tableTd[n].querySelector("input[type='checkbox']").checked });
                }
              } //Table.push(Tr)
            }arr.push({ type: 'table', index: j, box: Table });
          } else {
            arr.push({ left: tds[j].textContent.trim(), index: j });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl418_TJLVCW: function (data, elem) {},
    getTemplate_uiControl418_TJLVCW: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    var place=data.content[1][4].box.map(function(pp,id){\n      return(\n      \t<span className={pp.checked==true?\"ysp-checkedobx-tt\":\"ysp-uncheckedbox-tt\"}>{pp.label}</span>\n      )\n    })\n    var list=data.content.map(function(d,i){\n      var lie=d.map(function(dd,ii){\n        if(dd.type=='radio'){\n          return (\n            <div className='ysp-DesireOne-tt'>\n              \t<p>{data.content[0][0].left}</p>\n            \t\t<p><span className={dd.checked[0]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u662F</span><span className={dd.checked[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u5426</span></p>\n            </div>\n            \n          )\n        }else if(dd.type=='textarea'){\n          return(\n          \t<div className='ysp-DesireTwo-tt'>\n            \t\t<p>{data.content[0][2].left}</p>\n              <ATextarea value={dd.val} readOnly={dd.readyState}></ATextarea>\n            </div>\n          )\n        }else if(dd.type=='table'){\n          return(\n          \t<div className='ysp-DesireThree-tt'>\n            \t<p>{data.content[1][3].left}</p>\n              <div>{place}</div>\n            </div>\n          )\n        }\n        \n      })\n      return (\n      \t<div>          \n          {lie}       \t\n        </div>\n      )\n    })\n    return (\n      <div className='ysp-Desire-tt'>\n        <p>{data.title}</p>\n        {list}\n        <div className='ysp-Desirefour-tt'>\n            \t<p>{data.content[1][0].left}</p>\n          \t\t<div>\n          \t\t\t\t<p><span>{data.content[1][1].left}</span><AInput type='text' readOnly={data.content[1][2].readyState} value={data.content[1][2].value}/></p>\n              \t\t<p><span>{data.content[2][0].left}</span><AInput type='text' readOnly={data.content[2][1].readyState} value={data.content[2][1].value}/></p>\n              \t\t<p><span>{data.content[3][0].left}</span><AInput type='text' readOnly={data.content[3][1].readyState} value={data.content[3][1].value}/></p>\n          \t\t</div>\n              \n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var place = data.content[1][4].box.map(function (pp, id) {\n      return React.createElement(\n        \"span\",\n        { className: pp.checked == true ? \"ysp-checkedobx-tt\" : \"ysp-uncheckedbox-tt\" },\n        pp.label\n      );\n    });\n    var list = data.content.map(function (d, i) {\n      var lie = d.map(function (dd, ii) {\n        if (dd.type == 'radio') {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp-DesireOne-tt\" },\n            React.createElement(\n              \"p\",\n              null,\n              data.content[0][0].left\n            ),\n            React.createElement(\n              \"p\",\n              null,\n              React.createElement(\n                \"span\",\n                { className: dd.checked[0] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n                \"\\u662F\"\n              ),\n              React.createElement(\n                \"span\",\n                { className: dd.checked[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n                \"\\u5426\"\n              )\n            )\n          );\n        } else if (dd.type == 'textarea') {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp-DesireTwo-tt\" },\n            React.createElement(\n              \"p\",\n              null,\n              data.content[0][2].left\n            ),\n            React.createElement(ATextarea, { value: dd.val, readOnly: dd.readyState })\n          );\n        } else if (dd.type == 'table') {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp-DesireThree-tt\" },\n            React.createElement(\n              \"p\",\n              null,\n              data.content[1][3].left\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              place\n            )\n          );\n        }\n      });\n      return React.createElement(\n        \"div\",\n        null,\n        lie\n      );\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-Desire-tt\" },\n      React.createElement(\n        \"p\",\n        null,\n        data.title\n      ),\n      list,\n      React.createElement(\n        \"div\",\n        { className: \"ysp-Desirefour-tt\" },\n        React.createElement(\n          \"p\",\n          null,\n          data.content[1][0].left\n        ),\n        React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              data.content[1][1].left\n            ),\n            React.createElement(AInput, { type: \"text\", readOnly: data.content[1][2].readyState, value: data.content[1][2].value })\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              data.content[2][0].left\n            ),\n            React.createElement(AInput, { type: \"text\", readOnly: data.content[2][1].readyState, value: data.content[2][1].value })\n          ),\n          React.createElement(\n            \"p\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              data.content[3][0].left\n            ),\n            React.createElement(AInput, { type: \"text\", readOnly: data.content[3][1].readyState, value: data.content[3][1].value })\n          )\n        )\n      )\n    );\n  }\n});";
    },

    getData_control420_7mHS1N: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push('关闭', elem.getAttribute('src').split('../')[3]);return data; // var canvas=document.createElement('CANVAS');
      // var ctx=canvas.getContext('2d');
      // var dataURL;
      // canvas.height=elem.height;
      // canvas.width=elem.width;
      // ctx.drawImage(elem,0,0);
      // dataURL=canvas.toDataURL(outputFormat);
    },
    doAction_uiControl420_c9pCow: function (data, elem) {
      if (data.eventType == 'click') {
        var target = elem.parentElement.parentElement.parentElement.previousElementSibling.querySelector('a');target.click();
      }
    },
    getTemplate_uiControl420_c9pCow: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(data==undefined){return \"\";}\n    var src=\"http://172.16.11.61:8000/\"+data[1];\n    return (\n      <div className='ysp-zhezhaoPic-tt'>\n        <div >\n        \t\t\n        \t\t<img src={src}/>\n          \t<p onClick={_this.onclick.bind(_this)}>{data[0]}</p>\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data == undefined) {\n      return \"\";\n    }\n    var src = \"http://172.16.11.61:8000/\" + data[1];\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-zhezhaoPic-tt\" },\n      React.createElement(\n        \"div\",\n        null,\n        React.createElement(\"img\", { src: src }),\n        React.createElement(\n          \"p\",\n          { onClick: _this.onclick.bind(_this) },\n          data[0]\n        )\n      )\n    );\n  }\n});";
    },
    getData_control421_C5rEma: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector('select')) {
            var opt = tds[j].querySelector('select').querySelectorAll('option');for (var m = 0; m < opt.length; m++) {
              if (opt[m].selected == true) {
                arr.push({ left: opt[m].textContent, type: 'select' });
              }
            }
          } else if (tds[j].querySelector('textarea')) {
            arr.push({ left: tds[j].querySelector('textarea').value, type: 'textarea' });
          } else {
            arr.push({ left: tds[j].textContent.trim() });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl421_ZOhXir: function (data, elem) {},
    getTemplate_uiControl421_ZOhXir: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData;\n    if(data==undefined){return ''}\n    var list=data.content.map(function(d,i){\n      if(i<2){\n        \treturn(\n            <div>\n                <p><span>{d[0].left}</span><span>{d[1].left}</span></p>\n                <p><span>{d[2].left}</span><span>{d[3].left}</span></p>\n            </div>\n          )\n      }else if(i==2){\n        return(\n          <div>\n            <p><span>{d[0].left}</span></p>\n          \t\t<textarea readOnly={true} value={d[1].left}></textarea>\n          </div>\n        \t\t\n        )\n      }\n      \n    })\n    return (\n      <div className='ysp-jrjhPartOne-tt'>\n        {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data == undefined) {\n      return '';\n    }\n    var list = data.content.map(function (d, i) {\n      if (i < 2) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              d[0].left\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[1].left\n            )\n          ),\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              d[2].left\n            ),\n            React.createElement(\n              'span',\n              null,\n              d[3].left\n            )\n          )\n        );\n      } else if (i == 2) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            React.createElement(\n              'span',\n              null,\n              d[0].left\n            )\n          ),\n          React.createElement('textarea', { readOnly: true, value: d[1].left })\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-jrjhPartOne-tt' },\n      list\n    );\n  }\n});";
    },
    getData_control422_V5VGkF: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent.trim();
    },
    doAction_uiControl422_4PV6BO: function (data, elem) {},
    getTemplate_uiControl422_4PV6BO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='ysp-jrjh-tt'>\n        <p>{this.props.customData}</p>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-jrjh-tt' },\n      React.createElement(\n        'p',\n        null,\n        this.props.customData\n      )\n    );\n  }\n});";
    },
    getData_control465_UAnArO: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl465_c73hcT: function (data, elem) {},
    getTemplate_uiControl465_c73hcT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);