(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control689_XPqfle: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.firstElementChild.textContent.trim();data.titleinfo = elem.firstElementChild.nextElementSibling.textContent.trim();data.content = [];if (elem.querySelectorAll('div')[0]) {
        var contents = elem.querySelectorAll('div')[0].children;for (var i = 0; i < contents.length; i++) {
          if (contents[i].querySelector('img') || contents[i].textContent.trim() != '') {
            var obj = {};if (contents[i].querySelector('img') && !contents[i].querySelector('a')) {
              var imgs = contents[i].querySelectorAll('img');obj.src = [];obj.alt = [];for (var k = 0; k < imgs.length; k++) {
                obj.src.push(imgs[k].src);obj.alt.push(imgs[k].alt);
              }obj.text = contents[i].textContent.trim();obj.flat = 'img';
            }if (contents[i].textContent.trim() != '' && !contents[i].querySelector('a')) {
              obj.text = contents[i].textContent.trim();obj.flat = 'text';
            } //有下载但是没有图片
            if (contents[i].querySelector('a') && !contents[i].querySelector('img')) {
              obj.href = [];obj.text = [];var hrefs = contents[i].querySelectorAll('a');for (var k = 0; k < hrefs.length; k++) {
                obj.href.push(hrefs[k].href);obj.text.push(hrefs[k].textContent.trim());
              }obj.flat = 'ahref';
            } //判断内部有没有下载功能并且有图片
            if (contents[i].querySelector('img') && contents[i].querySelector('a')) {
              var imgs = contents[i].querySelectorAll('img');obj.src = [];obj.alt = [];for (var k = 0; k < imgs.length; k++) {
                obj.src.push(imgs[k].src);obj.alt.push(imgs[k].alt);
              }obj.text = contents[i].textContent.trim();obj.flat = 'img';obj.href = [];obj.text = [];var hrefs = contents[i].querySelectorAll('a');for (var k = 0; k < hrefs.length; k++) {
                obj.href.push(hrefs[k].href);obj.text.push(hrefs[k].textContent.trim());
              }obj.textele = contents[i].textContent.trim();var str = obj.textele;for (var u = 0; u < obj.text.length; u++) {
                if (obj.textele.indexOf(obj.text[u]) != -1) {
                  str = str.replace(obj.text[u], '').trim();
                }
              }obj.textele = str;obj.flat = 'aimg';
            }data.content.push(obj);
          }
        }
      }return data;
    },
    doAction_uiControl689_ARcAEV: function (data, elem) {},
    getTemplate_uiControl689_ARcAEV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      if(ele.flat == 'text'){\n        return(\n        \t<div>\n          \t<div>{ele.text}</div>\n          </div>\n        )\n      }else if(ele.flat == 'img'){\n        var imgs = ele.src.map(function(d,i){\n          return(\n          \t<img src={d} alt={ele.alt[i]}></img>\n          )\n        })\n        return(\n        \t<div>{imgs}</div>\n        )\n      } else if(ele.flat == 'ahref'){\n        var hrefs = ele.text.map(function(textele,textindex){\n          return(\n          \t<a href={ele.href[textindex]}>{textele}</a>\n          )\n        })\n        return (\n        \t<div>{hrefs}</div>\n        )\n      } else if(ele.flat == 'aimg'){\n        \n        // var imgs = ele.src.map(function(d,i){\n        //   return(\n        //   \t<img src={d} alt={ele.alt[i]}></img>\n        //   )\n        // })\n        var hrefs = ele.text.map(function(textele,textindex){\n          return(\n          \t<div><a href={ele.href[textindex]}>{textele}<img src={ele.src[textindex]} alt={ele.alt[textindex]}></img></a></div>\n          )\n        })\n        return(\n        \t<div>\n            {ele.textele}\n            {hrefs}\n          </div>\n        )\n      }\n      \n    })\n    return (\n      <div className='detail_new'>\n        <div className='deil_title'>\n        \t<h2>{data.title}</h2>\n          <p>{data.titleinfo}</p>\n        </div>\n        <div className='deil_content'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      if (ele.flat == 'text') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.text\n          )\n        );\n      } else if (ele.flat == 'img') {\n        var imgs = ele.src.map(function (d, i) {\n          return React.createElement('img', { src: d, alt: ele.alt[i] });\n        });\n        return React.createElement(\n          'div',\n          null,\n          imgs\n        );\n      } else if (ele.flat == 'ahref') {\n        var hrefs = ele.text.map(function (textele, textindex) {\n          return React.createElement(\n            'a',\n            { href: ele.href[textindex] },\n            textele\n          );\n        });\n        return React.createElement(\n          'div',\n          null,\n          hrefs\n        );\n      } else if (ele.flat == 'aimg') {\n\n        // var imgs = ele.src.map(function(d,i){\n        //   return(\n        //   \t<img src={d} alt={ele.alt[i]}></img>\n        //   )\n        // })\n        var hrefs = ele.text.map(function (textele, textindex) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'a',\n              { href: ele.href[textindex] },\n              textele,\n              React.createElement('img', { src: ele.src[textindex], alt: ele.alt[textindex] })\n            )\n          );\n        });\n        return React.createElement(\n          'div',\n          null,\n          ele.textele,\n          hrefs\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'detail_new' },\n      React.createElement(\n        'div',\n        { className: 'deil_title' },\n        React.createElement(\n          'h2',\n          null,\n          data.title\n        ),\n        React.createElement(\n          'p',\n          null,\n          data.titleinfo\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'deil_content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control690_kCTk7I: function (elem) {},
    doAction_uiControl690_C8xvQG: function (data, elem) {
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
    getTemplate_uiControl690_C8xvQG: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,type,data;\n    if(target.className == \'next\'){\n      type = \'nextclick\';\n    }else{\n      type = \'prevclick\'\n    }\n    if(handler){\n      handler({\n        eventType:type\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className=\'next_prev\'>\n        <button className=\'prev\' onClick={this.onClick}>\u4E0A\u4E00\u7BC7</button>\n        <button className=\'next\' onClick={this.onClick}>\u4E0B\u4E00\u7BC7</button>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data;\n    if (target.className == \'next\') {\n      type = \'nextclick\';\n    } else {\n      type = \'prevclick\';\n    }\n    if (handler) {\n      handler({\n        eventType: type\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \'div\',\n      { className: \'next_prev\' },\n      React.createElement(\n        \'button\',\n        { className: \'prev\', onClick: this.onClick },\n        \'\\u4E0A\\u4E00\\u7BC7\'\n      ),\n      React.createElement(\n        \'button\',\n        { className: \'next\', onClick: this.onClick },\n        \'\\u4E0B\\u4E00\\u7BC7\'\n      )\n    );\n  }\n});';
    },
    getData_control691_dMOz3P: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl691_pZIyEU: function (data, elem) {},
    getTemplate_uiControl691_pZIyEU: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\'titleH1\'>\n          <Header title="\u5DE5\u4F5C\u52A8\u6001">\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'titleH1\' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: \'\\u5DE5\\u4F5C\\u52A8\\u6001\' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\'span\', null),\n          React.createElement(\n            \'button\',\n            { onClick: _appRenderer.back },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control434_1EWVyP: function (elem) {},
    doAction_uiControl434_LdbUKu: function (data, elem) {},
    getTemplate_uiControl434_LdbUKu: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n \n  componentDidMount(){\n    \n    var elem=this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    \n    setTimeout(function(){\n      elem.scrollTop=0;\n    },500)\n  }\n  render(){\n    return(\n    \t<div ref=\"toTop\"></div>\n    )\n  }\n}";
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n\n      var elem = this.refs.toTop.ownerDocument.querySelector(".view-wrapper");\n\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return React.createElement("div", { ref: "toTop" });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);