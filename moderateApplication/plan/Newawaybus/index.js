(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control593_cgu5TV: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl593_NGWIX5: function (data, elem) {},
    getTemplate_uiControl593_NGWIX5: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control594_h8Rg3M: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl594_rvfVwF: function (data, elem) {},
    getTemplate_uiControl594_rvfVwF: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == 'content disnone'){\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    }else{\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='contenttit'>\n        \t<div className='contentitem'>{ele.leftval}</div>\n          <div className='contentitem'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className='initiator'>\n        <div className='contenttitle'><span></span><p>{data.title}<i className='shouqi' onClick={_this.click}></i></p></div>\n        <div className='content disnone'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == 'content disnone') {\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    } else {\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'contenttit' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.leftval\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'initiator' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement('i', { className: 'shouqi', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control601_tN3b1W: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTabledata(elem, ['文件名', '上传人', '上传时间', '版本', '操作']);data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl601_drhZp8: function (data, elem) {
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
    getTemplate_uiControl601_drhZp8: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if(target.tagName.toLowerCase() == 'button'){\n      console.log(target.id);\n      if(target.id == 'uploadDiv' ){\n        type = 'commit';\n        data = 'btnFileUpload';\n      }else{\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      type = 'updel';\n      data = {\n        index:target.getAttribute('data-index'),\n        i:target.className=='xiazai'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == 'shang'){\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displblock';\n      }\n    }else{\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(index+1)}</div>\n              <div>{d}</div>\n              <div onClick={_this.click} className='shang'></div>\n            </div>\n          )\n        }\n        if(i == ele.length-1){\n          if(d.length>2){\n              return(\n              <div className='displnone'>\n                <div className='contentitem contentspan' style={{'width':'100%','text-align-last':'auto','text-align':'center'}}><p className='shanchu' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className='xiazai' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:''}</p></div>\n              </div>\n            )\n          }else{\n             return(\n              <div className='displnone'>\n                <div className='contentitem'><p className='xiazai' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n              </div>\n            )\n          }\n        }\n        return(\n        \t<div className='displnone'>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    \n    return (\n      <div className='Enclosure'>\n        <div className='contenttitle'>\n          <span className='xia'></span>\n          <p>{data.title}\n            <div>\n              <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n              <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n            </div>\n          </p>\n        </div>\n        <div className='content'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if (target.tagName.toLowerCase() == 'button') {\n      console.log(target.id);\n      if (target.id == 'uploadDiv') {\n        type = 'commit';\n        data = 'btnFileUpload';\n      } else {\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      type = 'updel';\n      data = {\n        index: target.getAttribute('data-index'),\n        i: target.className == 'xiazai' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == 'shang') {\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displblock';\n      }\n    } else {\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (index + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            ),\n            React.createElement('div', { onClick: _this.click, className: 'shang' })\n          );\n        }\n        if (i == ele.length - 1) {\n          if (d.length > 2) {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem contentspan', style: { 'width': '100%', 'text-align-last': 'auto', 'text-align': 'center' } },\n                React.createElement(\n                  'p',\n                  { className: 'shanchu', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[2] + d[3]\n                ),\n                React.createElement(\n                  'p',\n                  { 'data-index': index, className: 'xiazai', onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d.length > 2 ? d[0] + d[1] : ''\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                React.createElement(\n                  'p',\n                  { className: 'xiazai', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[0] + d[1]\n                )\n              )\n            );\n          }\n        }\n        return React.createElement(\n          'div',\n          { className: 'displnone' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'Enclosure' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', { className: 'xia' }),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'button',\n              { onClick: _this.onClick.bind(_this) },\n              '\\u9009\\u62E9\\u6587\\u4EF6'\n            ),\n            React.createElement(\n              'button',\n              { id: data.id, onClick: _this.onClick.bind(_this) },\n              '\\u4E0A\\u4F20\\u6587\\u4EF6'\n            )\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control602_uJLVAB: function (elem) {
      if (!elem) {
        return;
      }var data = [];var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        data.push(lis[i].textContent.trim());
      }return data;
    },
    doAction_uiControl602_ITr4VE: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'click') {
        elem.querySelectorAll('li')[data].querySelector('a').click();
      }
    },
    getTemplate_uiControl602_ITr4VE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data;\n    if(target.tagName.toLowerCase() == 'div'){\n      target.parentElement.nextElementSibling.style.display = 'block';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector('.dianbl').querySelectorAll('li');\n      for(var i=0;i<lis.length;i++){\n        lis[i].style.bottom = i*50 +'px';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      target.parentElement.parentElement.parentElement.style.display = 'none';\n    }\n    if(target.tagName.toLowerCase() == 'button'){\n      type = 'click';\n      data = target.getAttribute('data-id');\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(!data){\n      return '';\n    }\n  \tvar lis = data.map(function(d,i){\n      if(i<3){\n        return(\n        \t<button data-id={i} onClick={_this.onClick}>{d}</button>\n        )\n      }\n    })\n    var list = data.map(function(d,i){\n      if(i>2){\n        return(\n        \t<li><button data-id={i} onClick={_this.onClick}>{d}</button></li>\n        )\n      }\n    })\n    return (\n      <div className='submit'>\n        <div className='subtrue'><div>{lis}</div><div style={{'display':data.length>3?'block':\"none\"}} onClick={_this.onClick.bind(_this)}></div></div>\n        <div className='dianbl'><ul><li><p onClick={_this.onClick}>\u53D6\u6D88</p></li>{list}</ul></div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data;\n    if (target.tagName.toLowerCase() == 'div') {\n      target.parentElement.nextElementSibling.style.display = 'block';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector('.dianbl').querySelectorAll('li');\n      for (var i = 0; i < lis.length; i++) {\n        lis[i].style.bottom = i * 50 + 'px';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      target.parentElement.parentElement.parentElement.style.display = 'none';\n    }\n    if (target.tagName.toLowerCase() == 'button') {\n      type = 'click';\n      data = target.getAttribute('data-id');\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (!data) {\n      return '';\n    }\n    var lis = data.map(function (d, i) {\n      if (i < 3) {\n        return React.createElement(\n          'button',\n          { 'data-id': i, onClick: _this.onClick },\n          d\n        );\n      }\n    });\n    var list = data.map(function (d, i) {\n      if (i > 2) {\n        return React.createElement(\n          'li',\n          null,\n          React.createElement(\n            'button',\n            { 'data-id': i, onClick: _this.onClick },\n            d\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'submit' },\n      React.createElement(\n        'div',\n        { className: 'subtrue' },\n        React.createElement(\n          'div',\n          null,\n          lis\n        ),\n        React.createElement('div', { style: { 'display': data.length > 3 ? 'block' : \"none\" }, onClick: _this.onClick.bind(_this) })\n      ),\n      React.createElement(\n        'div',\n        { className: 'dianbl' },\n        React.createElement(\n          'ul',\n          null,\n          React.createElement(\n            'li',\n            null,\n            React.createElement(\n              'p',\n              { onClick: _this.onClick },\n              '\\u53D6\\u6D88'\n            )\n          ),\n          list\n        )\n      )\n    );\n  }\n});";
    },
    getData_control610_TAMd2I: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.left = elem.querySelector('label').textContent.trim().split('：')[0];data.title = '知会信息';data.right = elem.querySelector('input[type="text"]').value;return data;
    },
    doAction_uiControl610_99P0ZA: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('a').click();
      }
    },
    getTemplate_uiControl610_99P0ZA: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType : 'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return '';\n    }\n    \n    return (\n      <div className='derstanding'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='Content'>\n        \t<div>{data.left}</div>\n          <div>{data.right}</div>\n          <div><button onClick={_this.onClick.bind(_this)}>\u6DFB\u52A0\u77E5\u4F1A\u4EBA</button></div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return '';\n    }\n\n    return React.createElement(\n      'div',\n      { className: 'derstanding' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'Content' },\n        React.createElement(\n          'div',\n          null,\n          data.left\n        ),\n        React.createElement(\n          'div',\n          null,\n          data.right\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'button',\n            { onClick: _this.onClick.bind(_this) },\n            '\\u6DFB\\u52A0\\u77E5\\u4F1A\\u4EBA'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control611_hEg8xm: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '关联流程';data.titles = [];data.content = [];var ths = elem.querySelector('thead').querySelector('tr').querySelectorAll('th');for (var i = 0; i < ths.length; i++) {
        if (i < ths.length - 1) {
          data.titles.push(ths[i].textContent.trim());
        }
      }var trs = elem.querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < data.titles.length; k++) {
          arr.push(tds[k].textContent.trim());
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl611_ZwQDUu: function (data, elem) {
      if (data.eventType == 'click') {
        elem.nextElementSibling.nextElementSibling.click();
      }
    },
    getTemplate_uiControl611_ZwQDUu: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType : 'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(i+1)}</div>\n              <div>{d}</div>\n            </div>\n          )\n        }\n        return(\n        \t<div>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    return (\n      <div className='relation'>\n        <div className='contenttitle'><span></span><p><div>{data.title}</div><button onClick={this.onClick}>\u6DFB\u52A0\u5173\u8054\u6D41\u7A0B</button></p></div>\n        <div className='content'>\n    \t\t\t{lis}    \t\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (i + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            )\n          );\n        }\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'relation' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          React.createElement(\n            'div',\n            null,\n            data.title\n          ),\n          React.createElement(\n            'button',\n            { onClick: this.onClick },\n            '\\u6DFB\\u52A0\\u5173\\u8054\\u6D41\\u7A0B'\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control613_wmAxwy: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '添加关联流程';return data;
    },
    doAction_uiControl613_L0IPtP: function (data, elem) {},
    getTemplate_uiControl613_L0IPtP: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(_yspInteriorComponents.Header, { title: data.title })\n    );\n  }\n});";
    },
    getData_control615_TqWvpB: function (elem) {},
    doAction_uiControl615_2IIuTJ: function (data, elem) {
      if (data.eventType == 'click') {
        if (data.customData == '1') {
          elem.querySelector('button').click();
        } else {
          elem.querySelector('input[type="submit"]').click();
        }
      }
    },
    getTemplate_uiControl615_2IIuTJ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.getAttribute('data-id')\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='alertsub'>\n        <button data-id='0' onClick={this.click}>\u786E\u5B9A</button>\n        <button data-id='1' onClick={this.click}>\u5173\u95ED</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'alertsub' },\n      React.createElement(\n        'button',\n        { 'data-id': '0', onClick: this.click },\n        '\\u786E\\u5B9A'\n      ),\n      React.createElement(\n        'button',\n        { 'data-id': '1', onClick: this.click },\n        '\\u5173\\u95ED'\n      )\n    );\n  }\n});";
    },
    getData_control616_Wbc30T: function (elem) {
      //console.log(elem);
      if (!elem) {
        return "";
      }if (elem) {
        var data = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].textContent.trim() == '...') {
            data.push({ text: nodes[i].textContent.trim(), type: 'nextPage' });
          } else {
            data.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
          }
        }return data;
      }
    },
    doAction_uiControl616_V9yzz3: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = parseInt(data.dataCustom);if (index == 1) {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpage') {
        //debugger;
        var index = parseInt(data.dataCustom[0]);var id = data.dataCustom[1];if (id == 'prevPage') {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else if (id == 'nextPage') {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onClicknextOnce') {
        // debugger;
        var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[trsLen - 2].textContent.trim() == '...') {
          var target = trs[trsLen - 2];target.click();
        }
      } else if (data.eventType == 'onclickpreOnce') {
        debugger;var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[1].textContent.trim() == '...') {
          var target = trs[1];target.click();
        }
      } // } else if (data.eventType == 'onclickpreOnce') {
      //   // debugger;
      //   var child = elem.querySelectorAll('a');
      //   var end = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = end; i > 0; i--) {
      //     if (i == 1) {
      //       alert('已经到首页了');
      //     } else {
      //       child[i - 1].click();
      //       break;
      //     }
      //   }
      // } else if (data.eventType == 'onClicknextOnce') {
      //   var child = elem.querySelectorAll('a');
      //   var start = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = start; i < child.length; i++) {
      //     if (i == child.length - 1) {
      //       alert('已经到末页了');
      //     } else {
      //       child[i].click();
      //       break;
      //     }
      //   }
      // }
    },
    getTemplate_uiControl616_V9yzz3: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.getAttribute('data-id')\n      })\n    }\n  },\n  onclickpage:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onclickpage',\n        data:[target.dataset.index,target.dataset.id]\n      })\n    }\n  },\n  onclickpreOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onclickpreOnce'\n        \n      })\n    }\n  },\n  onClicknextOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onClicknextOnce',\n        \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return (\n        <div>\n        \t\n        </div>\n      )\n    }\n    var str = '<',kr = '|<',\n        _this = this;\n    var lis = data.map(function(ele,index){\n      if(index!=0&&index!=data.length-1){\n        if(ele.type!='nextPage'){\n           return(\n              <li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n            )\n        }\n        \n      }\n    })\n    return (\n      <div className='footerbtn'>\n        <ul>\n          <span>\n          \t\t<li data-id='prevPage' data-index={0} onClick={_this.onclickpage.bind(_this)} className='ysp-prePage'>{kr}</li>\n          \t\t{data[1].type=='nextPage'?<li data-id='prev' onClick={_this.onclickpreOnce.bind(_this)} className='ysp-preOnce'>{str}</li>:''}\n          </span>\n          \n          <span className='ysp-pageBtnScroll-tt'><span>{lis}</span></span>\n          <span>\n          \t\t{data[data.length-2].type=='nextPage'?<li data-id='next' onClick={_this.onClicknextOnce.bind(_this)} className='ysp-nextOne'>></li>:''}\n          \t\t<li data-id='nextPage' data-index={data.length-1} onClick={_this.onclickpage.bind(_this)} className='ysp-nextPage'>>|</li>\n          </span>\n         \n        </ul>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  onclickpage: function onclickpage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickpage',\n        data: [target.dataset.index, target.dataset.id]\n      });\n    }\n  },\n  onclickpreOnce: function onclickpreOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclickpreOnce'\n\n      });\n    }\n  },\n  onClicknextOnce: function onClicknextOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onClicknextOnce'\n\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement('div', null);\n    }\n    var str = '<',\n        kr = '|<',\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      if (index != 0 && index != data.length - 1) {\n        if (ele.type != 'nextPage') {\n          return React.createElement(\n            'li',\n            { 'data-id': index, onClick: _this.onClick, className: ele.class },\n            ele.text\n          );\n        }\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'footerbtn' },\n      React.createElement(\n        'ul',\n        null,\n        React.createElement(\n          'span',\n          null,\n          React.createElement(\n            'li',\n            { 'data-id': 'prevPage', 'data-index': 0, onClick: _this.onclickpage.bind(_this), className: 'ysp-prePage' },\n            kr\n          ),\n          data[1].type == 'nextPage' ? React.createElement(\n            'li',\n            { 'data-id': 'prev', onClick: _this.onclickpreOnce.bind(_this), className: 'ysp-preOnce' },\n            str\n          ) : ''\n        ),\n        React.createElement(\n          'span',\n          { className: 'ysp-pageBtnScroll-tt' },\n          React.createElement(\n            'span',\n            null,\n            lis\n          )\n        ),\n        React.createElement(\n          'span',\n          null,\n          data[data.length - 2].type == 'nextPage' ? React.createElement(\n            'li',\n            { 'data-id': 'next', onClick: _this.onClicknextOnce.bind(_this), className: 'ysp-nextOne' },\n            '>'\n          ) : '',\n          React.createElement(\n            'li',\n            { 'data-id': 'nextPage', 'data-index': data.length - 1, onClick: _this.onclickpage.bind(_this), className: 'ysp-nextPage' },\n            '>|'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);