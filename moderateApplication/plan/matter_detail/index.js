(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control722_GIuRhm: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.textContent.trim();return data;
    },
    doAction_uiControl722_qRz8Kf: function (data, elem) {},
    getTemplate_uiControl722_qRz8Kf: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control723_48oTJh: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.firstElementChild.textContent.trim();data.titleinfo = elem.firstElementChild.nextElementSibling.textContent.trim();data.imgs = [];data.texts = [];var texts = elem.children;for (var i = 2; i < texts.length; i++) {
        if (texts[i].textContent.trim()) {
          data.texts.push(texts[i].textContent.trim());
        }
      }var imgs = elem.querySelectorAll('img[src]');for (var i = 0; i < imgs.length; i++) {
        data.imgs.push({ src: imgs[i].src, alt: imgs[i].alt });
      }return data;
    },
    doAction_uiControl723_1uAz89: function (data, elem) {},
    getTemplate_uiControl723_1uAz89: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.texts.map(function(ele,index){\n      var list = data.imgs.map(function(d,i){\n        if(i==index){\n          return(\n      \t<div className='textimg'>\n        \t<p>{ele}</p>\n          <div><img src={data.imgs[index].src} alt={data.imgs[index].alt} /></div>\n        </div>\n      )\n        }else{\n          <div className='textimg'>\n          \t<div><img src={d.src}  alt={d.alt} /></div>\n          </div>\n        }\n      })\n      if(data.imgs[index]){\n        return (<div className='Content_deil'>{list}</div>)\n      }else{\n        return(<div className='Content_deil'><p>{ele}</p></div>)\n      }\n    })\n    return (\n      <div className='detail_new'>\n        <div className='deil_title'>\n        \t<h2>{data.title}</h2>\n          <p>{data.titleinfo}</p>\n        </div>\n        {lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.texts.map(function (ele, index) {\n      var list = data.imgs.map(function (d, i) {\n        if (i == index) {\n          return React.createElement(\n            'div',\n            { className: 'textimg' },\n            React.createElement(\n              'p',\n              null,\n              ele\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement('img', { src: data.imgs[index].src, alt: data.imgs[index].alt })\n            )\n          );\n        } else {\n          React.createElement(\n            'div',\n            { className: 'textimg' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement('img', { src: d.src, alt: d.alt })\n            )\n          );\n        }\n      });\n      if (data.imgs[index]) {\n        return React.createElement(\n          'div',\n          { className: 'Content_deil' },\n          list\n        );\n      } else {\n        return React.createElement(\n          'div',\n          { className: 'Content_deil' },\n          React.createElement(\n            'p',\n            null,\n            ele\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'detail_new' },\n      React.createElement(\n        'div',\n        { className: 'deil_title' },\n        React.createElement(\n          'h2',\n          null,\n          data.title\n        ),\n        React.createElement(\n          'p',\n          null,\n          data.titleinfo\n        )\n      ),\n      lis\n    );\n  }\n});";
    },
    getData_control724_QpGbCf: function (elem) {},
    doAction_uiControl724_nqS4TQ: function (data, elem) {
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
    getTemplate_uiControl724_nqS4TQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,type,data;\n    if(target.className == 'next'){\n      type = 'nextclick';\n    }else{\n      type = 'prevclick'\n    }\n    if(handler){\n      handler({\n        eventType:type\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='next_prev'>\n        <button className='prev' onClick={this.onClick}>\u4E0A\u4E00\u7BC7</button>\n        <button className='next' onClick={this.onClick}>\u4E0B\u4E00\u7BC7</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data;\n    if (target.className == 'next') {\n      type = 'nextclick';\n    } else {\n      type = 'prevclick';\n    }\n    if (handler) {\n      handler({\n        eventType: type\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'next_prev' },\n      React.createElement(\n        'button',\n        { className: 'prev', onClick: this.onClick },\n        '\\u4E0A\\u4E00\\u7BC7'\n      ),\n      React.createElement(\n        'button',\n        { className: 'next', onClick: this.onClick },\n        '\\u4E0B\\u4E00\\u7BC7'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);