(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control707_ZOPqh5: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl707_x2cV1q: function (data, elem) {},
    getTemplate_uiControl707_x2cV1q: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title=\"\u5B66\u4E60\u6750\u6599\">\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: '\\u5B66\\u4E60\\u6750\\u6599' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control708_dSA3ef: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.firstElementChild.textContent.trim();data.titleinfo = elem.firstElementChild.nextElementSibling.textContent.trim();data.imgs = [];data.texts = [];if (elem.querySelectorAll('div')[0] != undefined) {
        var textimgs = elem.querySelectorAll('div')[0].children;for (var i = 0; i < textimgs.length; i++) {
          if (textimgs[i].textContent.trim()) {
            data.texts.push(textimgs[i].textContent.trim());
          }
        }var imgs = elem.querySelectorAll('img[src]');for (var i = 0; i < imgs.length; i++) {
          data.imgs.push({ src: imgs[i].src, alt: imgs[i].alt });
        }
      }return data;
    },
    doAction_uiControl708_JCwnSE: function (data, elem) {},
    getTemplate_uiControl708_JCwnSE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.texts.map(function(ele,index){\n      var list = data.imgs.map(function(d,i){\n        if(i==index){\n          return(\n      \t<div className='textimg'>\n        \t<p>{ele}</p>\n          <div><img src={data.imgs[index].src} alt={data.imgs[index].alt} /></div>\n        </div>\n      )\n        }\n      })\n      if(data.imgs[index]){\n        return (<div className='Content_deil'>{list}</div>)\n      }else{\n        return(<div className='Content_deil'><p>{ele}</p></div>)\n      }\n    })\n    return (\n      <div className='detail_new'>\n        <div className='deil_title'>\n        \t<h2>{data.title}</h2>\n          <p>{data.titleinfo}</p>\n        </div>\n        {lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.texts.map(function (ele, index) {\n      var list = data.imgs.map(function (d, i) {\n        if (i == index) {\n          return React.createElement(\n            'div',\n            { className: 'textimg' },\n            React.createElement(\n              'p',\n              null,\n              ele\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement('img', { src: data.imgs[index].src, alt: data.imgs[index].alt })\n            )\n          );\n        }\n      });\n      if (data.imgs[index]) {\n        return React.createElement(\n          'div',\n          { className: 'Content_deil' },\n          list\n        );\n      } else {\n        return React.createElement(\n          'div',\n          { className: 'Content_deil' },\n          React.createElement(\n            'p',\n            null,\n            ele\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'detail_new' },\n      React.createElement(\n        'div',\n        { className: 'deil_title' },\n        React.createElement(\n          'h2',\n          null,\n          data.title\n        ),\n        React.createElement(\n          'p',\n          null,\n          data.titleinfo\n        )\n      ),\n      lis\n    );\n  }\n});";
    },
    getData_control709_mG0HKb: function (elem) {},
    doAction_uiControl709_somRTD: function (data, elem) {
      var type = data.eventType;var spans = elem.querySelectorAll('span');if (type == 'nextclick') {
        if (spans[3].querySelector('a')) {
          spans[3].querySelector('a').click();
        } else {
          alert('已经是最后一篇了');
        }
      }if (type == 'prevclick') {
        if (spans[1].querySelector('a')) {
          spans[1].querySelector('a').click();
        } else {
          alert('已经是第一篇了');
        }
      }
    },
    getTemplate_uiControl709_somRTD: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,type,data;\n    if(target.className == 'next'){\n      type = 'nextclick';\n    }else{\n      type = 'prevclick'\n    }\n    if(handler){\n      handler({\n        eventType:type\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='next_prev'>\n        <button className='prev' onClick={this.onClick}>\u4E0A\u4E00\u7BC7</button>\n        <button className='next' onClick={this.onClick}>\u4E0B\u4E00\u7BC7</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data;\n    if (target.className == 'next') {\n      type = 'nextclick';\n    } else {\n      type = 'prevclick';\n    }\n    if (handler) {\n      handler({\n        eventType: type\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'next_prev' },\n      React.createElement(\n        'button',\n        { className: 'prev', onClick: this.onClick },\n        '\\u4E0A\\u4E00\\u7BC7'\n      ),\n      React.createElement(\n        'button',\n        { className: 'next', onClick: this.onClick },\n        '\\u4E0B\\u4E00\\u7BC7'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);