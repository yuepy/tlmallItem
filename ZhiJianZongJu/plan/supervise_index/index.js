(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_VU6AiQ: function (elem) {
      if (!elem) return; // elem.previousElementSibling.querySelectorAll('div')[elem.previousElementSibling.querySelectorAll('div').length-1].click();
      var data = []; // var lis = elem.querySelectorAll('ul>li');
      if (elem.querySelector('ul')) {
        var lis = elem.querySelector('ul').children;for (var i = 0; i < lis.length; i++) {
          var obj = {};obj.id = lis[i].querySelector('div').id;obj.text = lis[i].querySelector('div').textContent.trim(); // var list = lis[i].querySelectorAll('ul>li');
          obj.child = [];var list = lis[i].querySelector('ul') ? lis[i].querySelector('ul').children ? lis[i].querySelector('ul').children : [] : [];for (var k = 0; k < list.length; k++) {
            obj.child.push({ id: list[k].querySelector('div').id, text: list[k].textContent.trim() });
          }data.push(obj);
        }
      }return data;
    },
    doAction_uiControl4_J11h2C: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'click') {
        elem.querySelector("#" + data.id).querySelector('span').click();
      }
    },
    getTemplate_uiControl4_J11h2C: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(target.className == \'bot\'){\n      target.className = \'top\';\n      target.nextElementSibling.style.display = \'none\';\n    }else{\n      target.className = \'bot\';\n      target.nextElementSibling.style.display = \'block\';\n    }\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:{\n          id:id\n        }\n      })\n    }\n  },\n  click:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onclick\',\n        data:{\n          \n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return \'\';\n    }\n    var lis = data.map(function(ele,index){\n      if(ele.child){\n         var list = ele.child.map(function(d,i){\n        return(\n        \t<li onClick={_this.click.bind(_this)}>{d.text}</li>\n        )\n      })\n     }\n      return(\n      \t<div>\n        \t<div className=\'top\' onClick={_this.onClick.bind(_this)} id={ele.id}><span></span>{ele.text}</div>\n          <div className=\'tabul\'><ul>{list?list:\'\'}</ul></div>\n        </div>\n      )\n    })\n    return (\n      <div className=\'tabbox\'>\n        {lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (target.className == \'bot\') {\n      target.className = \'top\';\n      target.nextElementSibling.style.display = \'none\';\n    } else {\n      target.className = \'bot\';\n      target.nextElementSibling.style.display = \'block\';\n    }\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: {\n          id: id\n        }\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'onclick\',\n        data: {}\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var lis = data.map(function (ele, index) {\n      if (ele.child) {\n        var list = ele.child.map(function (d, i) {\n          return React.createElement(\n            \'li\',\n            { onClick: _this.click.bind(_this) },\n            d.text\n          );\n        });\n      }\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          { className: \'top\', onClick: _this.onClick.bind(_this), id: ele.id },\n          React.createElement(\'span\', null),\n          ele.text\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'tabul\' },\n          React.createElement(\n            \'ul\',\n            null,\n            list ? list : \'\'\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'tabbox\' },\n      lis\n    );\n  }\n});';
    },
    getData_control15_yhSlrb: function (elem) {},
    doAction_uiControl11_c5KCUQ: function (data, elem) {},
    getTemplate_uiControl11_c5KCUQ: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u8BA1\u91CF\u5F3A\u68C0\">\n  <HeaderLeft>\n    <AMUI.Button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</AMUI.Button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u8BA1\\u91CF\\u5F3A\\u68C0' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        AMUI.Button,\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    }
  });
})(window, ysp);