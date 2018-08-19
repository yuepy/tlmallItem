(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12_3csfXA: function (elem) {},
    doAction_uiControl21_LpMBnd: function (data, elem) {},
    getTemplate_uiControl21_LpMBnd: function () {
      var selfTemplate = "import { Header, HeaderLeft,HeaderRight } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  ck(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  handle:function(data,eventType){\n    const handler = this.props.customHandler;\n    if(handler){\n      handler({data,eventType});\n    }\n  },\n  render: function() {\n    const me = this;\n    return (\n      <Header amStyle=\"primary\" title='\u62BD\u6837\u5355\u5F55\u5165' style={{position:'relative',zIndex:1,background:'#0a568c'}}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" onClick={back} style={{marginLeft:'-15px',background:'#0a568c',border:\"#0a568c\",marginBottom:0}}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        \t</HeaderLeft>\n      </Header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  ck: function ck() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ data: data, eventType: eventType });\n    }\n  },\n  render: function render() {\n    var me = this;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: 'primary', title: '\\u62BD\\u6837\\u5355\\u5F55\\u5165', style: { position: 'relative', zIndex: 1, background: '#0a568c' } },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: 'primary', onClick: _appRenderer.back, style: { marginLeft: '-15px', background: '#0a568c', border: \"#0a568c\", marginBottom: 0 } },\n          React.createElement('span', { className: 'icon icon-left-nav' }),\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control13_5uyXkI: function (elem) {
      if (!elem) {
        return;
      }var zc = {};zc.obj = [];zc.selectAll = [];var seleIndex = 0,
          iptIndex = 0;var arr = [];var bigElem = elem.querySelector('#fieldSampling').querySelectorAll('.panel');var seleElem = elem.querySelectorAll('.combo-p');zc.select = [];for (var i = 0; i < seleElem.length; i++) {
        var lis = seleElem[i].querySelectorAll('.combobox-item');var selarr = [];for (var j = 0; j < lis.length; j++) {
          var selobj = {};selobj.key = lis[j].textContent;selarr.push(selobj);
        }zc.select.push(selarr);
      }for (var i = 0; i < bigElem.length - 1; i++) {
        if (i == 7 || i == 8) {
          continue;
        } else {
          var obj = {};var title = bigElem[i].querySelector('.panel-title').textContent;obj.title = title;obj.tagName = [];if (bigElem[i].querySelector('table')) {
            var trs = bigElem[i].querySelector('table').querySelectorAll('tr');for (var j = 0; j < trs.length; j++) {
              var tds = trs[j].querySelectorAll('td');for (var q = 0; q < tds.length; q++) {
                if (tds[q].getAttribute('align')) {
                  var tagNameK = tds[q].textContent.replace(new RegExp(/(：)/g), "").replace(new RegExp(/(\*)/g), "").trim();obj.tagName.push({ key: tagNameK });
                } else {
                  var len = tds[q].querySelectorAll('span').length;var clsName;if (tds[q].querySelector('span')) {
                    clsName = tds[q].querySelector('span').className;
                  }if (len == 2 && clsName != 'textbox basic-radio combo datebox' && clsName != 'textbox basic-radio numberbox' && clsName != 'textbox basic-radio textbox-invalid numberbox') {
                    var val;var area = tds[q].querySelector('.textbox-text').value;if (area.substring(0, 1) == '请') {
                      val = tds[q].querySelector('.textbox-value').value;
                    } else {
                      val = tds[q].querySelector('.textbox-text').value;
                    }obj.tagName[obj.tagName.length - 1].check = "select";obj.tagName[obj.tagName.length - 1].area = area;obj.tagName[obj.tagName.length - 1].val = val;obj.tagName[obj.tagName.length - 1].idx = seleIndex;seleIndex++;
                  } else if (len == 1 && clsName != 'textbox basic-radio combo datebox' || clsName == 'textbox basic-radio numberbox' || clsName == 'textbox basic-radio textbox-invalid numberbox') {
                    var val = tds[q].querySelector('.textbox-value').value;var area = tds[q].querySelector('.textbox-text').value;obj.tagName[obj.tagName.length - 1].check = "input";obj.tagName[obj.tagName.length - 1].area = area;obj.tagName[obj.tagName.length - 1].val = val;obj.tagName[obj.tagName.length - 1].idx = iptIndex;iptIndex++;
                  } else if (clsName == 'textbox basic-radio combo datebox') {
                    var val = tds[q].querySelector('.textbox-value').value;var area = tds[q].querySelector('.textbox-text').value;obj.tagName[obj.tagName.length - 1].check = "data";obj.tagName[obj.tagName.length - 1].area = area;obj.tagName[obj.tagName.length - 1].val = val;
                  }
                }
              }
            }
          }zc.obj.push(obj);
        }
      }return zc;
    },
    doAction_uiControl22_XPmDuc: function (data, elem) {
      var type = data.eventType;var data = data.customData;var seleElem = elem.querySelectorAll('.combo-p');var sElem = elem.querySelector('#fieldSampling');var bigElem = elem.querySelector('#fieldSampling').querySelectorAll('.panel');if (type == 'model') {
        var act = sElem.querySelectorAll('.textbox-icon');var arr = [];for (var i = 0; i < act.length; i++) {
          if (i == 5 || i == 13) {
            continue;
          } else {
            arr.push(act[i]);
          }
        }arr[data.i].click();
      } else if (type == 'ipt') {
        var arr = [];var box = sElem.querySelectorAll('.textbox');for (var i = 0; i < box.length; i++) {
          if (!box[i].querySelector('span')) {
            if (i == 53 || i == 58 || i == 60 || i == 65 || i == 66 || i == 67 || i == 68) {
              continue;
            } else {
              arr.push(box[i]);
            }
          }
        }arr[data.i].querySelector('.textbox-text').value = data.d;arr[data.i].querySelector('.textbox-value').value = data.d;
      } else if (type == 'remarks') {
        var box = sElem.querySelectorAll('.textbox');box[65].querySelector('textarea').value = data;box[65].querySelector('.textbox-value').value = data;
      }
    },
    getTemplate_uiControl22_XPmDuc: function () {
      var selfTemplate = "const {List,Title,Select,Field} = AMUITouch2;\nmodule.exports = React.createClass({\n  remarks:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'remarks',\n        data:target.value\n      })\n    }\n  },\n  model:function(d,i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'model',\n        data:{\n          d,\n          i\n        }\n      })\n    }\n  },\n  ipt:function(e){\n    var target=e.target;\n    var d=target.value;\n    var i=target.getAttribute('data-type');\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ipt',\n        data:{\n          d,\n          i\n        }\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.data.customData;\n    var _this=this;\n  \tvar list=data.obj.map((d,i)=>{\n\t\t\treturn(\n      \t<div className='zc-amInput'>\n        \t<List>\n            <Title amStyle=\"primary\">{d.title}</Title>\n            <div>\n            {d.title=='\u5907\u6CE8'?<Field    \n                  placeholder='\u8BF7\u8F93\u5165\u62BD\u6837\u5355\u5F55\u5165\u7684\u5907\u6CE8\u8BB0\u5F55'\n                  single  \n                  onBlur={_this.remarks}\n                />:null}\n            {d.tagName.map((d,i)=>{\n              return(\n              \t<div>\n                \t{d.check=='select'?<List.Item title={<Field\n                  readonly=\"readonly\"                                  \n                  value={d.val}\n                  label={d.key}\n                  placeholder={d.area}\n                  data-type={d.key}\n                \tonClick={()=>{_this.model(d.key,d.idx)}}\n                  single  \n                />} />:<List.Item title={<Field\n                  value={d.val}\n                  label={d.key}\n                  placeholder={d.area}\n                  data-type={d.idx}\n                  onBlur={_this.ipt}\n                  single  \n                />} />}\n                </div>\n              )\n            })}\n              </div>\n          </List>\n        </div>\n      )\n    })\n    return (\n      <div  className='zc-detail-top'>\n       {list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    List = _AMUITouch.List,\n    Title = _AMUITouch.Title,\n    Select = _AMUITouch.Select,\n    Field = _AMUITouch.Field;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  remarks: function remarks(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'remarks',\n        data: target.value\n      });\n    }\n  },\n  model: function model(d, i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'model',\n        data: {\n          d: d,\n          i: i\n        }\n      });\n    }\n  },\n  ipt: function ipt(e) {\n    var target = e.target;\n    var d = target.value;\n    var i = target.getAttribute('data-type');\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'ipt',\n        data: {\n          d: d,\n          i: i\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    var list = data.obj.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { className: 'zc-amInput' },\n        React.createElement(\n          List,\n          null,\n          React.createElement(\n            Title,\n            { amStyle: 'primary' },\n            d.title\n          ),\n          React.createElement(\n            'div',\n            null,\n            d.title == '\u5907\u6CE8' ? React.createElement(Field, {\n              placeholder: '\\u8BF7\\u8F93\\u5165\\u62BD\\u6837\\u5355\\u5F55\\u5165\\u7684\\u5907\\u6CE8\\u8BB0\\u5F55',\n              single: true,\n              onBlur: _this.remarks\n            }) : null,\n            d.tagName.map(function (d, i) {\n              return React.createElement(\n                'div',\n                null,\n                d.check == 'select' ? React.createElement(List.Item, { title: React.createElement(Field, {\n                    readonly: 'readonly',\n                    value: d.val,\n                    label: d.key,\n                    placeholder: d.area,\n                    'data-type': d.key,\n                    onClick: function onClick() {\n                      _this.model(d.key, d.idx);\n                    },\n                    single: true\n                  }) }) : React.createElement(List.Item, { title: React.createElement(Field, {\n                    value: d.val,\n                    label: d.key,\n                    placeholder: d.area,\n                    'data-type': d.idx,\n                    onBlur: _this.ipt,\n                    single: true\n                  }) })\n              );\n            })\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'zc-detail-top' },\n      list\n    );\n  }\n});";
    },
    getData_control14_LX5w2M: function (elem) {
      if (!elem) {
        return;
      }var arr = [];var seleElem = elem.querySelectorAll('.combo-p');for (var i = 0; i < seleElem.length; i++) {
        if (seleElem[i].style.display == 'block') {
          var item = seleElem[i].querySelectorAll('.combobox-item');for (var j = 0; j < item.length; j++) {
            // var obj={}
            // obj.key=item[j].textContent;
            arr.push(item[j].textContent);
          }
        }
      }return arr;
    },
    doAction_uiControl23_dXei2q: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type == 'closeModal') {
        var doc = elem.ownerDocument;var evt = doc.createEvent("MouseEvent");evt.initEvent("mousedown", true, true);elem.dispatchEvent(evt);
      } else if (type == 'ck') {
        var seleElem = elem.querySelectorAll('.combo-p');for (var i = 0; i < seleElem.length; i++) {
          if (seleElem[i].style.display == 'block') {
            var item = seleElem[i].querySelectorAll('.combobox-item');item[customData].click();
          }
        }
      }
    },
    getTemplate_uiControl23_dXei2q: function () {
      var selfTemplate = "const {Modal,Field,Choose,List,Icon} = AMUITouch2;\nmodule.exports = React.createClass({\n  ck:function(i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ck',\n        data:i\n      })\n    }\n  },\n  closeModal:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'closeModal'\n      })\n    }\n  },\n  render: function() {\n    var _this=this\n    var data=this.props.data.customData;\n    var list=data.map((d,i)=>{\n      return(\n      \t<List.Item title={d} onClick={()=>{_this.ck(i)}}/>\n      )\n    })\n    if(data.length<=0){\n      return(<div></div>)\n    }\n    return (\n      <div>\n        <Modal\n          title=\"\u8BF7\u9009\u62E9\"\n          role=\"popup\"\n          isOpen={true}\n        \tcancelText='\u786E\u5B9A'\n          onDismiss={_this.closeModal}\n        \tclassName='query-selector'\n        >\n        <List>\n          \t{list}\n\t\t\t\t</List>\n      </Modal>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Field = _AMUITouch.Field,\n    Choose = _AMUITouch.Choose,\n    List = _AMUITouch.List,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  ck: function ck(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'ck',\n        data: i\n      });\n    }\n  },\n  closeModal: function closeModal() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'closeModal'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var list = data.map(function (d, i) {\n      return React.createElement(List.Item, { title: d, onClick: function onClick() {\n          _this.ck(i);\n        } });\n    });\n    if (data.length <= 0) {\n      return React.createElement('div', null);\n    }\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        Modal,\n        {\n          title: '\\u8BF7\\u9009\\u62E9',\n          role: 'popup',\n          isOpen: true,\n          cancelText: '\\u786E\\u5B9A',\n          onDismiss: _this.closeModal,\n          className: 'query-selector'\n        },\n        React.createElement(\n          List,\n          null,\n          list\n        )\n      )\n    );\n  }\n});";
    },
    getData_control25_lpZr1o: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl25_kTznRA: function (data, elem) {
      var type = data.eventType;if (type == 'save') {
        elem.querySelector('#baoCun').click();
      } else if (type == 'commit') {
        elem.querySelector('#tiJiao').click();
      }
    },
    getTemplate_uiControl25_kTznRA: function () {
      var selfTemplate = "const {Button}=AMUITouch2;\nmodule.exports = React.createClass({\n  save:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'save'\n      })\n    }\n  },\n commit:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'commit'\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    return (\n      <div style={{display:'flex'}}>\n        <Button onClick={_this.save} amStyle=\"primary\" style={{background:0,color:'rgb(10, 86, 140)'}}>\n          \u4FDD\u5B58\n        </Button>\n        <Button onClick={_this.commit} amStyle=\"primary\" style={{background:'rgb(10, 86, 140)',borderColor:'rgb(10, 86, 140)'}}>\n          \u63D0\u4EA4\n        </Button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  save: function save() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'save'\n      });\n    }\n  },\n  commit: function commit() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'commit'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      'div',\n      { style: { display: 'flex' } },\n      React.createElement(\n        Button,\n        { onClick: _this.save, amStyle: 'primary', style: { background: 0, color: 'rgb(10, 86, 140)' } },\n        '\\u4FDD\\u5B58'\n      ),\n      React.createElement(\n        Button,\n        { onClick: _this.commit, amStyle: 'primary', style: { background: 'rgb(10, 86, 140)', borderColor: 'rgb(10, 86, 140)' } },\n        '\\u63D0\\u4EA4'\n      )\n    );\n  }\n});";
    },
    getData_control26_P8mG16: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector(".window-body").children[1].textContent;
    },
    doAction_uiControl26_KwgBAw: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'confirm') {
        var btn = elem.querySelector('.messager-button').querySelectorAll('a');if (data == true) {
          btn[0].click();
        } else {
          btn[1].click();
        }
      }
    },
    getTemplate_uiControl26_KwgBAw: function () {
      var selfTemplate = "const {Modal,Icon} = AMUITouch2\nmodule.exports = React.createClass({\n  confirm:function(data){\n\t\tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'confirm',\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.data.customData;\n    return (\n      <div>\n        {data?<Modal\n          title={<div><span></span></div>}\n          role=\"confirm\"\n          isOpen='true'\n          onAction={_this.confirm}\n        >\n          {data}\n        </Modal>:null}\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  confirm: function confirm(data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'confirm',\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return React.createElement(\n      'div',\n      null,\n      data ? React.createElement(\n        Modal,\n        {\n          title: React.createElement(\n            'div',\n            null,\n            React.createElement('span', null)\n          ),\n          role: 'confirm',\n          isOpen: 'true',\n          onAction: _this.confirm\n        },\n        data\n      ) : null\n    );\n  }\n});";
    }
  }, "addSampling");
})(window, ysp);