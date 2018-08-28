(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_UF5UM1: function (elem) {
      if (!elem) return;return elem.textContent;
    },
    doAction_uiControl5_4QGZrI: function (data, elem) {},
    getTemplate_uiControl5_4QGZrI: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u5206\u914D\u8BB0\u5F55\u67E5\u8BE2\">\n  <HeaderLeft>\n    <button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u5206\\u914D\\u8BB0\\u5F55\\u67E5\\u8BE2' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        'button',\n        { amStyle: 'primary', onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    },
    getData_control13_3znx5x: function (elem) {
      if (!elem) return;var data = {};data.title = elem.querySelector('div').textContent.trim();data.querybtn = { text: elem.querySelector('button').textContent, id: elem.querySelector('button').id };data.delbtn = { text: elem.querySelectorAll('button')[1].textContent.trim(), id: elem.querySelectorAll('button')[1].id };data.content = [];var div = elem.querySelector("#queryDiv");var ipts = elem.querySelectorAll('label');for (var i = 0; i < ipts.length; i++) {
        var obj = {};if (i < 4) {
          obj.left = ipts[i].textContent;obj.val = ipts[i].nextElementSibling.nextElementSibling.querySelector('input[type="text"]').value;obj.flat = 'ipt';obj.index = i;data.content.push(obj);
        } else if (i == 4) {
          obj.left = ipts[i].textContent;obj.flat = 'date';obj.index = i;obj.val = ipts[i].nextElementSibling.nextElementSibling.querySelector('input[type="text"]').value;data.content.push(obj);data.content.push({ left: ipts[i].nextElementSibling.nextElementSibling.nextSibling.textContent.trim(), flat: 'date', index: i, val: ipts[i].nextElementSibling.nextElementSibling.nextSibling.nextElementSibling.nextElementSibling.querySelector('input[type="text"]').value }); // obj.left = ipts[i].nextElementSibling.nextElementSibling.nextSibling.textContent.trim();
        } else {
          obj.left = ipts[i].textContent;obj.opts = [];obj.index = i;obj.flat = 'select';var opts = elem.ownerDocument.querySelector(".panel.combo-p").querySelector('div').querySelectorAll('div');obj.selected = [];for (var k = 0; k < opts.length; k++) {
            obj.opts.push(opts[k].textContent);if (opts[k].className.indexOf('combobox-item-selected') != -1) {
              obj.selected.push(true);
            } else {
              obj.selected.push(false);
            }
          }data.content.push(obj);
        }
      } // var ipts = elem.querySelectorAll('input[type="text"]');
      // for(var i=0;i<ipts.length;i++){
      // 	if(ipts[i].style.display!='none'){
      //     var obj = {};
      //     if(i<4){
      //       obj.left = ipts[i].parentElement.parentElement.querySelector('label').textContent;
      //       obj.val = ipts[i].value
      //       obj.flat = 'ipt';
      //     }else if(i==4){
      //       obj.left = ipts[i].textContent;	
      //       obj.flat = 'date';
      //       obj.val = [];
      //     }else{
      //       obj.left = ipts[i].textContent;
      //       obj.opts = [];
      //       obj.flat = 'select';
      //       var opts = elem.ownerDocument.querySelector(".panel.combo-p").querySelector('div').querySelectorAll('div');
      //       for(var k=0;k<opts.length;k++){
      //         obj.opts.push(opts[k].textContent)
      //       }
      //     }
      //     data.content.push(obj);
      //   }
      // }
      return data;
    },
    doAction_uiControl6_eS0Tls: function (data, elem) {
      var type = data.eventType,
          data = data.customData,
          index = +data.index;if (type == 'querclick') {
        elem.querySelector("#" + data.id).click();
      }if (type == 'click') {
        elem.querySelectorAll('button')[1].click();
      }var labels = elem.querySelectorAll('label');if (type == 'blur') {
        if (index < 4) {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[0].value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        }
      }if (type == 'dateipt') {
        if (data.id_index == 0) {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[0].value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        } else {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.nextSibling.nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.nextSibling.nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        }
      }if (type == 'selectchange') {
        elem.ownerDocument.querySelector(".panel.combo-p").querySelector('div').querySelectorAll('div')[+data.selectedIndex].click();
      }
    },
    getTemplate_uiControl6_eS0Tls: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onblur:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:{\n          value:target.value,\n          index:target.getAttribute('data-index')\n        }\n      })\n    }\n  },\n  dateblur:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'dateipt',\n        data:{\n          value:target.value,\n          index:target.getAttribute('data-index'),\n          id_index:target.getAttribute('data-id')\n        }\n      })\n    }\n  },\n  onChange:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        selectedindex = target.selectedIndex;\n    if(handler){\n      handler({\n        eventType:'selectchange',\n        data:{\n          index:target.getAttribute('data-index'),\n          selectedIndex:selectedindex\n        }\n      })\n    }\n  },\n  querybtn:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(handler){\n      handler({\n        eventType:'querclick',\n        data:{\n          id:id\n        }\n      })\n    }\n  },\n  delbtn:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          \n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return '';\n    }\n    var lis = data.content.map(function(ele,index){\n\t\t\t\t\t\t\tif(ele.flat == 'ipt'){\n                return(\n                  <div>\n                  \t<div>{ele.left}</div>\n                    <div><AInput placeholder='\u8BF7\u8F93\u5165' onBlur={_this.onblur.bind(_this)} type='text' data-index={ele.index} value={ele.val} /></div>\n                  </div>\n                )\n              }else if(ele.flat == 'date'){\n                return(\n                \t<div>\n                  \t<div>{ele.left}</div>\n                    <div><AInput onBlur={_this.dateblur.bind(_this)} type='date' data-id={index==4?0:1} data-index={ele.index} value={ele.val} /></div>\n                  </div>\n                )\n              } else if(ele.flat == 'select'){\n                return(\n                \t<div>\n                  \t<div>{ele.left}</div>\n                    <div>\n                      <select data-index={ele.index} onChange={_this.onChange.bind(_this)}>\n                        {\n                        ele.opts.map(function(d,i){\n                          return(\n                          \t<option data-index={i} selected={ele.selected[i]}>{d}</option>\n                          )\n                        })\n                      }\n                      </select>\n                    </div>\n                  </div>\n                )\n              }\n            })\n    return (\n      <div className='queryCondition'>\n        <div className='conditionTitle'>{data.title}</div>\n        <div className='conditionContent'>\n        \t{\n            lis\n          }\n        </div>\n        <div className='querybtn'>\n        \t<button onClick={_this.querybtn.bind(_this)} id={data.querybtn.id}>{data.querybtn.text}</button>\n          <button onClick={_this.delbtn.bind(_this)}>{data.delbtn.text}</button>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onblur: function onblur(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: {\n          value: target.value,\n          index: target.getAttribute('data-index')\n        }\n      });\n    }\n  },\n  dateblur: function dateblur(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'dateipt',\n        data: {\n          value: target.value,\n          index: target.getAttribute('data-index'),\n          id_index: target.getAttribute('data-id')\n        }\n      });\n    }\n  },\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        selectedindex = target.selectedIndex;\n    if (handler) {\n      handler({\n        eventType: 'selectchange',\n        data: {\n          index: target.getAttribute('data-index'),\n          selectedIndex: selectedindex\n        }\n      });\n    }\n  },\n  querybtn: function querybtn(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (handler) {\n      handler({\n        eventType: 'querclick',\n        data: {\n          id: id\n        }\n      });\n    }\n  },\n  delbtn: function delbtn(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {}\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return '';\n    }\n    var lis = data.content.map(function (ele, index) {\n      if (ele.flat == 'ipt') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(AInput, { placeholder: '\\u8BF7\\u8F93\\u5165', onBlur: _this.onblur.bind(_this), type: 'text', 'data-index': ele.index, value: ele.val })\n          )\n        );\n      } else if (ele.flat == 'date') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(AInput, { onBlur: _this.dateblur.bind(_this), type: 'date', 'data-id': index == 4 ? 0 : 1, 'data-index': ele.index, value: ele.val })\n          )\n        );\n      } else if (ele.flat == 'select') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'select',\n              { 'data-index': ele.index, onChange: _this.onChange.bind(_this) },\n              ele.opts.map(function (d, i) {\n                return React.createElement(\n                  'option',\n                  { 'data-index': i, selected: ele.selected[i] },\n                  d\n                );\n              })\n            )\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'queryCondition' },\n      React.createElement(\n        'div',\n        { className: 'conditionTitle' },\n        data.title\n      ),\n      React.createElement(\n        'div',\n        { className: 'conditionContent' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'querybtn' },\n        React.createElement(\n          'button',\n          { onClick: _this.querybtn.bind(_this), id: data.querybtn.id },\n          data.querybtn.text\n        ),\n        React.createElement(\n          'button',\n          { onClick: _this.delbtn.bind(_this) },\n          data.delbtn.text\n        )\n      )\n    );\n  }\n});";
    },
    getData_control14_A3AtPE: function (elem) {
      if (!elem) return;var data = {};data.titles = [];data.content = [];var tds = elem.querySelector('table').querySelector('tr').querySelectorAll('td');for (var i = 1; i < tds.length; i++) {
        if (tds[i].style.display != 'none') {
          data.titles.push(tds[i].textContent.trim());
        }
      }var trs = elem.querySelectorAll('table')[1].querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        if (trs[i].style.display != 'none') {
          var tds = trs[i].querySelectorAll('td');var arr = [];for (var k = 1; k < tds.length; k++) {
            if (tds[k].style.display != 'none') {
              arr.push(tds[k].textContent.trim());
            }
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl21_hA8pLC: function (data, elem) {},
    getTemplate_uiControl21_hA8pLC: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.nextElementSibling.style.display=='none'){\n      // target.style.backgroundImage = 'url(./img/top.png)';\n      target.className = 'top';\n      target.parentElement.style.borderBottom = '1px solid #ccc';\n      target.parentElement.nextElementSibling.style.display = 'block';\n    }else{\n      // target.style.backgroundImage = 'url(./img/xia.png)';\n      target.className = 'xia';\n      target.parentElement.style.borderBottom = '0';\n      target.parentElement.nextElementSibling.style.display = 'none';\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='deilitem'>\n          <div className='deilTitle'>\n          \t<p>{ele[2]}</p>\n            <p className='xia' onClick={_this.click.bind(_this)}>{ele[1]}</p>\n          </div>\n          <div className='deilContent' style={{'display':'none'}} >\n          \t<p>{data.titles[0]}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ele[0]}</p>\n          \t<p>{data.titles[3]}:&nbsp;&nbsp;{ele[3]}</p>\n          \t<p>{data.titles[4]}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ele[4]}</p>\n          \t<p>{data.titles[5]}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ele[5]}</p>\n          \t<p>{data.titles[6]}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ele[6]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div className='deilTable'>\n        {\n          lis\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.nextElementSibling.style.display == 'none') {\n      // target.style.backgroundImage = 'url(./img/top.png)';\n      target.className = 'top';\n      target.parentElement.style.borderBottom = '1px solid #ccc';\n      target.parentElement.nextElementSibling.style.display = 'block';\n    } else {\n      // target.style.backgroundImage = 'url(./img/xia.png)';\n      target.className = 'xia';\n      target.parentElement.style.borderBottom = '0';\n      target.parentElement.nextElementSibling.style.display = 'none';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'deilitem' },\n        React.createElement(\n          'div',\n          { className: 'deilTitle' },\n          React.createElement(\n            'p',\n            null,\n            ele[2]\n          ),\n          React.createElement(\n            'p',\n            { className: 'xia', onClick: _this.click.bind(_this) },\n            ele[1]\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'deilContent', style: { 'display': 'none' } },\n          React.createElement(\n            'p',\n            null,\n            data.titles[0],\n            ':\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0',\n            ele[0]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[3],\n            ':\\xA0\\xA0',\n            ele[3]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[4],\n            ':\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0',\n            ele[4]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[5],\n            ':\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0',\n            ele[5]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[6],\n            ':\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0',\n            ele[6]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'deilTable' },\n      lis\n    );\n  }\n});";
    }
  }, "allocationQuery");
})(window, ysp);