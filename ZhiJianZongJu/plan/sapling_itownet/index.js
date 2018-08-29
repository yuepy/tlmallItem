(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control30_2NTUE1: function (elem) {
      if (!elem) {
        return;
      } // var elem = elem.querySelector('iframe').contentWindow.document;
      var elem = elem.ownerDocument;var elema = elem.querySelector('#enterprise-info');var redio = elem.querySelectorAll('.combo-panel');var obj = {};var title = elema.querySelector('.tabs-inner').textContent;obj.title = title;var trs = elema.querySelector('#queryDiv').querySelectorAll('tr');obj.list = [];var a = 0;for (var i = 0; i < trs.length; i++) {
        var chils = trs[i].children;for (var j = 0; j < chils.length; j++) {
          var w = chils[j].getAttribute('width');var len = trs[1].children.length;var colS = chils[j].colSpan;if (w == '100px' && colS != 2) {
            var listobj = {};listobj.key = chils[j].textContent.replace(new RegExp(/(：)/g), "");if (listobj.key == '抽查计划' || listobj.key == '任务执行状态') {
              listobj.check = 'sele';listobj.idx = a;a++;
            } else {
              listobj.check = 'hodler';
            }
            obj.list.push(listobj);
          } else if (w != '100px' && colS != 2) {
            var hodler = chils[j].querySelector('.textbox-text').getAttribute('placeholder');if (obj.list[obj.list.length - 1].check == 'hodler') {
              var val = chils[j].querySelector('.textbox-value').value;obj.list[obj.list.length - 1].hodler = hodler;obj.list[obj.list.length - 1].val = val;
            } else {
              var val = chils[j].querySelector('.textbox-text').value;obj.list[obj.list.length - 1].hodler = hodler;obj.list[obj.list.length - 1].val = val;
            }
          }
        }
      }obj.etcA = [];obj.etcB = [];var etcA = redio[0].querySelectorAll('div');var etcB = redio[1].querySelectorAll('div');for (var i = 0; i < etcA.length; i++) {
        obj.etcA.push(etcA[i].textContent);
      }for (var i = 0; i < etcB.length; i++) {
        obj.etcB.push(etcB[i].textContent);
      }return obj;
    },
    doAction_uiControl28_ACEoFq: function (data, elem) {
      var type = data.eventType;var data = data.customData;var elem = elem.ownerDocument;var elema = elem.querySelector('#enterprise-info');var redio = elem.querySelectorAll('.combo-panel');var trs = elema.querySelector('#queryDiv').querySelectorAll('tr');if (type == 'actA') {
        var etcA = redio[0].querySelectorAll('div');etcA[data].click();
      } else if (type == 'actB') {
        var etcB = redio[1].querySelectorAll('div');etcB[data].click();
      } else if (type == 'lists') {
        if (data.type == '抽查任务编号') {
          var inputs = trs[0].children[3].querySelector('.textbox-text');inputs.focus();$(inputs).val(data.target);ysp.customHelper.fireKeyEvent(inputs, "keyup", 13);
        } else if (data.type == '产品名称') {
          var inputs = trs[0].children[5].querySelector('.textbox-text');inputs.focus();$(inputs).val(data.target);ysp.customHelper.fireKeyEvent(inputs, "keyup", 13);
        } else if (data.type == '企业名称') {
          var inputs = trs[1].children[3].querySelector('.textbox-text');inputs.focus();$(inputs).val(data.target);ysp.customHelper.fireKeyEvent(inputs, "keyup", 13);
        }
      } else if (type == 'reset') {
        trs[1].children[4].querySelectorAll('input')[0].click();
      } else if (type == 'query') {
        trs[1].children[4].querySelectorAll('input')[1].click();
      } else if (type == 'model') {
        var sem = elema.querySelectorAll('.textbox-icon');console.log(sem);var arr = [];for (var i = 0; i < sem.length; i++) {
          if (i == 5 || i == 13) {
            continue;
          } else {
            arr.push(sem[i]);
          }
        }arr[data.i].click();
      }
    },
    getTemplate_uiControl28_ACEoFq: function () {
      var selfTemplate = 'const {\n  Title,\n  List,\n  Field,\n  Select\n} = AMUITouch2\nmodule.exports = React.createClass({\n  model:function(d,i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'model\',\n        data:{\n          d,\n          i\n        }\n      })\n    }\n  },\n  lists: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target.value;\n    var type = e.target.getAttribute(\'data-type\');\n    if (handler) {\n      handler({\n        eventType: \'lists\',\n        data: {\n          target,\n          type\n        }\n      })\n    }\n  },\n  reset: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'reset\'\n      })\n    }\n  },\n  query: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'query\'\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var lis = data.list.map((d, i) => {\n      return (\n        <div className=\'zc-amInput\'>\n          {d.check==\'sele\'?<List.Item title={<Field\n                  readonly="readonly"                                  \n                  value={d.val}\n                  label={d.key}\n                  placeholder={d.area}\n                  data-type={d.key}\n                \tonClick={()=>{_this.model(d.key,d.idx)}}\n                  style={{\n                    textAlign:\'right\'\n                  }}\n                  single  \n                />} />:null}\n        {d.check!=\'sele\'?\n            <List.Item title={<Field\n                  label={d.key}\n                  placeholder={d.hodler}\n                  data-type={d.key}\n                  value={d.val}\n                  single  \n              \t\tonBlur={_this.lists}\n                  style={{\n                    textAlign:\'right\'\n                  }}\n                />} />\n            :\n            null\n            }\n          </div>\n      )\n    })\n    return (\n      <div className=\'zc-detail-top\'>\n        <Title amStyle="primary">{data.title}</Title>\n        <List>\n          {lis}\n        </List>\n        <div className=\'zc-group-btn\'>\n        \t<button onClick={_this.reset}>\u91CD\u7F6E</button>\n          <button onClick={_this.query}>\u67E5\u8BE2</button>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Title = _AMUITouch.Title,\n    List = _AMUITouch.List,\n    Field = _AMUITouch.Field,\n    Select = _AMUITouch.Select;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  model: function model(d, i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'model\',\n        data: {\n          d: d,\n          i: i\n        }\n      });\n    }\n  },\n  lists: function lists(e) {\n    var handler = this.props.customHandler;\n    var target = e.target.value;\n    var type = e.target.getAttribute(\'data-type\');\n    if (handler) {\n      handler({\n        eventType: \'lists\',\n        data: {\n          target: target,\n          type: type\n        }\n      });\n    }\n  },\n  reset: function reset() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'reset\'\n      });\n    }\n  },\n  query: function query() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'query\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var lis = data.list.map(function (d, i) {\n      return React.createElement(\n        \'div\',\n        { className: \'zc-amInput\' },\n        d.check == \'sele\' ? React.createElement(List.Item, { title: React.createElement(Field, {\n            readonly: \'readonly\',\n            value: d.val,\n            label: d.key,\n            placeholder: d.area,\n            \'data-type\': d.key,\n            onClick: function onClick() {\n              _this.model(d.key, d.idx);\n            },\n            style: {\n              textAlign: \'right\'\n            },\n            single: true\n          }) }) : null,\n        d.check != \'sele\' ? React.createElement(List.Item, { title: React.createElement(Field, {\n            label: d.key,\n            placeholder: d.hodler,\n            \'data-type\': d.key,\n            value: d.val,\n            single: true,\n            onBlur: _this.lists,\n            style: {\n              textAlign: \'right\'\n            }\n          }) }) : null\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'zc-detail-top\' },\n      React.createElement(\n        Title,\n        { amStyle: \'primary\' },\n        data.title\n      ),\n      React.createElement(\n        List,\n        null,\n        lis\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'zc-group-btn\' },\n        React.createElement(\n          \'button\',\n          { onClick: _this.reset },\n          \'\\u91CD\\u7F6E\'\n        ),\n        React.createElement(\n          \'button\',\n          { onClick: _this.query },\n          \'\\u67E5\\u8BE2\'\n        )\n      )\n    );\n  }\n});';
    },
    getData_control31_bto6KF: function (elem) {
      if (!elem) {
        return;
      } // var elem = elem.querySelector('iframe').contentWindow.document;
      var elem = elem.ownerDocument;var arr = [];var seleElem = elem.querySelectorAll('.combo-p');for (var i = 0; i < seleElem.length; i++) {
        if (seleElem[i].style.display == 'block') {
          var item = seleElem[i].querySelectorAll('.combobox-item');for (var j = 0; j < item.length; j++) {
            // var obj={}
            // obj.key=item[j].textContent;
            arr.push(item[j].textContent);
          }
        }
      }return arr;
    },
    doAction_uiControl29_QTmspm: function (data, elem) {
      var type = data.eventType;var customData = data.customData; // var elem = elem.querySelector('iframe').contentWindow.document;
      var elem = elem.ownerDocument;if (type == 'closeModal') {
        var doc = elem;console.log(doc);var evt = doc.createEvent("MouseEvent");evt.initEvent("mousedown", true, true);elem.dispatchEvent(evt);
      } else if (type == 'ck') {
        var seleElem = elem.querySelectorAll('.combo-p');for (var i = 0; i < seleElem.length; i++) {
          if (seleElem[i].style.display == 'block') {
            var item = seleElem[i].querySelectorAll('.combobox-item');item[customData].click();
          }
        }
      }
    },
    getTemplate_uiControl29_QTmspm: function () {
      var selfTemplate = 'const {Modal,Field,Choose,List,Icon} = AMUITouch2;\nmodule.exports = React.createClass({\n  ck:function(i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'ck\',\n        data:i\n      })\n    }\n  },\n  closeModal:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'closeModal\'\n      })\n    }\n  },\n  render: function() {\n    var _this=this\n    var data=this.props.data.customData;\n    var list=data.map((d,i)=>{\n      return(\n      \t<List.Item title={d} onClick={()=>{_this.ck(i)}}/>\n      )\n    })\n    if(data.length<=0){\n      return(<div></div>)\n    }\n    return (\n      <div>\n        <Modal\n          title="\u8BF7\u9009\u62E9"\n          role="popup"\n          isOpen={true}\n        \tcancelText=\'\u786E\u5B9A\'\n          onDismiss={_this.closeModal}\n        \tclassName=\'query-selector\'\n          style={{padding:0}}\n        >\n        <List>\n          \t{list}\n\t\t\t\t</List>\n      </Modal>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Field = _AMUITouch.Field,\n    Choose = _AMUITouch.Choose,\n    List = _AMUITouch.List,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  ck: function ck(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'ck\',\n        data: i\n      });\n    }\n  },\n  closeModal: function closeModal() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'closeModal\'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var list = data.map(function (d, i) {\n      return React.createElement(List.Item, { title: d, onClick: function onClick() {\n          _this.ck(i);\n        } });\n    });\n    if (data.length <= 0) {\n      return React.createElement(\'div\', null);\n    }\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        Modal,\n        {\n          title: \'\\u8BF7\\u9009\\u62E9\',\n          role: \'popup\',\n          isOpen: true,\n          cancelText: \'\\u786E\\u5B9A\',\n          onDismiss: _this.closeModal,\n          className: \'query-selector\',\n          style: { padding: 0 }\n        },\n        React.createElement(\n          List,\n          null,\n          list\n        )\n      )\n    );\n  }\n});';
    },
    getData_control32_Fpd09X: function (elem) {},
    doAction_uiControl30_ZBr1Ry: function (data, elem) {},
    getTemplate_uiControl30_ZBr1Ry: function () {
      var selfTemplate = 'import { Header, HeaderLeft,HeaderRight } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  ck(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  handle:function(data,eventType){\n    const handler = this.props.customHandler;\n    if(handler){\n      handler({data,eventType});\n    }\n  },\n  render: function() {\n    var data=this.props.data.customData;\n    const me = this;\n    return (\n      <Header amStyle="primary" title=\'\u73B0\u573A\u62BD\u6837\' style={{position:\'relative\',zIndex:1,background:\'#0a568c\'}}>\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" onClick={back} style={{marginLeft:\'-15px\',background:\'#0a568c\',border:"#0a568c",marginBottom:0}}><span className="icon icon-left-nav"></span>\u8FD4\u56DE</AMUI.Button>\n        \t</HeaderLeft>\n      </Header>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n  ck: function ck() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ data: data, eventType: eventType });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: \'primary\', title: \'\\u73B0\\u573A\\u62BD\\u6837\', style: { position: \'relative\', zIndex: 1, background: \'#0a568c\' } },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: \'primary\', onClick: _appRenderer.back, style: { marginLeft: \'-15px\', background: \'#0a568c\', border: "#0a568c", marginBottom: 0 } },\n          React.createElement(\'span\', { className: \'icon icon-left-nav\' }),\n          \'\\u8FD4\\u56DE\'\n        )\n      )\n    );\n  }\n});';
    },
    getData_control33_5P7ZlT: function (elem) {
      if (!elem) {
        return;
      }var obj = [];var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var detailObj = {};detailObj.detail = [];detailObj.className = trs[i].className;var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          var act = tds[j].getAttribute('field');var val = tds[j].textContent;switch (act) {case 'checkTaskNo':
              detailObj.detail.push({ key: '抽查任务编号：', val: val });break;case 'checkPlanName':
              detailObj.checkPlanName = val;break;case 'prodName':
              detailObj.prodName = val;break;case 'produceOrganName':
              detailObj.detail.push({ key: '企业名称：', val: val });break;case 'enterpAddr':
              detailObj.detail.push({ key: '单位地址：', val: val });break;case 'samplState':
              detailObj.samplState = val;break;case 'isSamplProd':
              detailObj.detail.push({ key: '抽样状态：', val: val });break;case 'planOrgCode':
              detailObj.detail.push({ key: '来源机构：', val: val });break;}
        }obj.push(detailObj);
      }return obj;
    },
    doAction_uiControl31_AoLagy: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'icon') {
        var trs = elem.querySelectorAll('tr');trs[data].click();
      }
    },
    getTemplate_uiControl31_AoLagy: function () {
      var selfTemplate = "const{  Container,TodoItemTypeOne,Pair,Icon}=AMUITouch2;\nmodule.exports = React.createClass({\n  icon: function(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'icon',\n        data:i\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var _this = this;\n    const oder={\n\t\t\t  width:'8px',\n      \theight:'8px',\n        borderRadius: '50%',\n      \tborder:'solid 1px #ff9d00',\n      display: 'inline-block',\n      marginRight:'10px'\n\t\t}\n    var lis = data.map(function(d,i){\n      return(\n        <div className='zc-check'>\n          {d.className=='datagrid-row datagrid-row-checked datagrid-row-selected'?<Icon name='elect-c' style={{color:'#004788'}}/>:<Icon name='elect-l-c' style={{color:'#004788'}} onClick={()=>{_this.icon(i)}}/>}\n       <TodoItemTypeOne \n         defaultCollapsed\n         title={<div><span>{d.checkPlanName}</span><span style={{float:'right',display: 'flex',color:'#ff9d00',alignItems: 'center'}}><i style={oder}></i>{d.samplState}</span></div>}\n\n         subtitle={<Pair name=\"\u4EA7\u54C1\u540D\u79F0\uFF1A\" value={d.prodName}/>}\n            >\n          {d.detail.map((d,i)=>{\n            return(\n              <Pair  name={d.key} value={d.val} />\n            )\n          })}\n       </TodoItemTypeOne>\n          </div>\n      )\n    })    \n    return (\n      <div style={{background:'#f2f2f2',padding:'10px 0'}}>\n      \t{!data[0].checkPlanName?null:lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Container = _AMUITouch.Container,\n    TodoItemTypeOne = _AMUITouch.TodoItemTypeOne,\n    Pair = _AMUITouch.Pair,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  icon: function icon(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'icon',\n        data: i\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    var oder = {\n      width: '8px',\n      height: '8px',\n      borderRadius: '50%',\n      border: 'solid 1px #ff9d00',\n      display: 'inline-block',\n      marginRight: '10px'\n    };\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { className: 'zc-check' },\n        d.className == 'datagrid-row datagrid-row-checked datagrid-row-selected' ? React.createElement(Icon, { name: 'elect-c', style: { color: '#004788' } }) : React.createElement(Icon, { name: 'elect-l-c', style: { color: '#004788' }, onClick: function onClick() {\n            _this.icon(i);\n          } }),\n        React.createElement(\n          TodoItemTypeOne,\n          {\n            defaultCollapsed: true,\n            title: React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d.checkPlanName\n              ),\n              React.createElement(\n                'span',\n                { style: { float: 'right', display: 'flex', color: '#ff9d00', alignItems: 'center' } },\n                React.createElement('i', { style: oder }),\n                d.samplState\n              )\n            ),\n\n            subtitle: React.createElement(Pair, { name: '\\u4EA7\\u54C1\\u540D\\u79F0\\uFF1A', value: d.prodName })\n          },\n          d.detail.map(function (d, i) {\n            return React.createElement(Pair, { name: d.key, value: d.val });\n          })\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { style: { background: '#f2f2f2', padding: '10px 0' } },\n      !data[0].checkPlanName ? null : lis\n    );\n  }\n});";
    },
    getData_control34_GOSLPz: function (elem) {
      if (!elem) {
        return;
      }var obj = {};obj.current = [];obj.hide = [];var btn = elem.querySelectorAll('.cydjbut'); // console.log(btn);
      for (var i = 0; i < 2; i++) {
        var cur = btn[i].value;obj.current.unshift(cur);
      }for (var i = 2; i < btn.length; i++) {
        var hide = btn[i].value;obj.hide.push(hide);
      }return obj;
    },
    doAction_uiControl32_6RkpBT: function (data, elem) {
      var type = data.eventType;var data = data.customData;var btn = elem.querySelectorAll('.cydjbut');if (type == 'action') {
        if (data == '删除') {
          btn[3].click();
        } else if (data == '回退') {
          btn[4].click();
        }
      } else if (type == 'add') {
        btn[1].click();
      } else if (type == 'entry') {
        btn[0].click();
      }
    },
    getTemplate_uiControl32_6RkpBT: function () {
      var selfTemplate = 'const {\n  ButtonAction\n} = AMUITouch2\nmodule.exports = React.createClass({\n  action:function(i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'action\',\n        data:i\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.data.customData;\n    const actions = [{\n        title: data.current[0],\n        hollow: true,\n        style: {\n          color: "#004788",\n          border:\'solid 1px #004788\',\n          background:\'#fff\'\n        },\n        className: "your-classname",\n        onClick: e => {\n          var handler=this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'add\'\n            })\n          }\n        }\n      },\n      {\n        title: data.current[1],\n        style: {\n          background:\'#004788\'\n        },\n        onClick: e => {\n          var handler=this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'entry\'\n            })\n          }\n        }\n      }\n    ];\n    const wrapStyle = {\n      margin: "8px 4px",\n      padding: 0,\n      background: "#fff",\n      borderRadius: "4px"\n    };\n    const ListStyle = {\n      listStyle: "none",\n      color: "#3d8cf8",\n      padding: 0,\n      marginLeft: "15px",\n      marginRight: "15px"\n    };\n    const listStyle = {\n      borderBottom: "1px solid #d8d8d8",\n      paddingTop: "14px",\n      paddingBottom: "14px",\n      lineHeight: 1\n    };\n    const listLastStyle = {\n      borderBottom: "1px solid #d8d8d8",\n      paddingTop: "14px",\n      paddingBottom: "14px",\n      lineHeight: 1,\n      color:\'red\'\n    };\n    var lis=data.hide.map((d,i)=>{\n      return(\n        <div>\n        {d!=\'\u5220\u9664\'?<li style={listStyle} onClick={()=>{_this.action(d)}}>{d}</li>:<li onClick={()=>{_this.action(d)}} style={listLastStyle}>{d}</li>}\n    \t\t</div>\n      )\n    })\n    return (\n      <div>\n        <ButtonAction actions={actions}>\n      <div style={wrapStyle}>\n        <ul style={ListStyle}>\n          {lis}\n        </ul>\n      </div>\n    </ButtonAction>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    ButtonAction = _AMUITouch.ButtonAction;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  action: function action(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'action\',\n        data: i\n      });\n    }\n  },\n  render: function render() {\n    var _this2 = this;\n\n    var _this = this;\n    var data = this.props.data.customData;\n    var actions = [{\n      title: data.current[0],\n      hollow: true,\n      style: {\n        color: "#004788",\n        border: \'solid 1px #004788\',\n        background: \'#fff\'\n      },\n      className: "your-classname",\n      onClick: function onClick(e) {\n        var handler = _this2.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'add\'\n          });\n        }\n      }\n    }, {\n      title: data.current[1],\n      style: {\n        background: \'#004788\'\n      },\n      onClick: function onClick(e) {\n        var handler = _this2.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'entry\'\n          });\n        }\n      }\n    }];\n    var wrapStyle = {\n      margin: "8px 4px",\n      padding: 0,\n      background: "#fff",\n      borderRadius: "4px"\n    };\n    var ListStyle = {\n      listStyle: "none",\n      color: "#3d8cf8",\n      padding: 0,\n      marginLeft: "15px",\n      marginRight: "15px"\n    };\n    var listStyle = {\n      borderBottom: "1px solid #d8d8d8",\n      paddingTop: "14px",\n      paddingBottom: "14px",\n      lineHeight: 1\n    };\n    var listLastStyle = {\n      borderBottom: "1px solid #d8d8d8",\n      paddingTop: "14px",\n      paddingBottom: "14px",\n      lineHeight: 1,\n      color: \'red\'\n    };\n    var lis = data.hide.map(function (d, i) {\n      return React.createElement(\n        \'div\',\n        null,\n        d != \'\u5220\u9664\' ? React.createElement(\n          \'li\',\n          { style: listStyle, onClick: function onClick() {\n              _this.action(d);\n            } },\n          d\n        ) : React.createElement(\n          \'li\',\n          { onClick: function onClick() {\n              _this.action(d);\n            }, style: listLastStyle },\n          d\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        ButtonAction,\n        { actions: actions },\n        React.createElement(\n          \'div\',\n          { style: wrapStyle },\n          React.createElement(\n            \'ul\',\n            { style: ListStyle },\n            lis\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control35_z11Gzi: function (elem) {
      if (!elem) {
        return;
      }var obj = {};console.log(elem.querySelector('.messager-button').querySelectorAll('a').length);obj.title = elem.querySelector(".window-body") && elem.querySelector(".window-body").children[1].textContent;obj.len = elem.querySelector('.messager-button').querySelectorAll('a').length;return obj;
    },
    doAction_uiControl33_fG4eXA: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'confirm') {
        var btn = elem.querySelector('.messager-button').querySelectorAll('a');if (data == true) {
          btn[0].click();
        } else {
          btn[1].click();
        }
      } else if (type == 'alert') {
        var btn = elem.querySelector('.messager-button').querySelector('a');console.log(btn);btn.click();
      }
    },
    getTemplate_uiControl33_fG4eXA: function () {
      var selfTemplate = 'const {Modal,Icon} = AMUITouch2\nmodule.exports = React.createClass({\n  alert:function(data){\n\t\tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'alert\',\n        data:data\n      })\n    }\n  },\n  confirm:function(data){\n\t\tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'confirm\',\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.data.customData;\n    return (\n      <div>\n        {data&&data.len==2?<Modal\n          title={<div className=\'zc-information\'><span></span></div>}\n          role="confirm"\n          isOpen=\'true\'\n          onAction={_this.confirm}\n        >\n          {data.title}\n        </Modal>:null}\n        {data&&data.len!=2?<Modal\n          title={<div className=\'zc-information\'><span></span></div>}\n          role="alert"\n          isOpen=\'true\'\n          onAction={_this.alert}\n        >\n         {data.title}\n        </Modal>:null}\n        \n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  alert: function alert(data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'alert\',\n        data: data\n      });\n    }\n  },\n  confirm: function confirm(data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'confirm\',\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return React.createElement(\n      \'div\',\n      null,\n      data && data.len == 2 ? React.createElement(\n        Modal,\n        {\n          title: React.createElement(\n            \'div\',\n            { className: \'zc-information\' },\n            React.createElement(\'span\', null)\n          ),\n          role: \'confirm\',\n          isOpen: \'true\',\n          onAction: _this.confirm\n        },\n        data.title\n      ) : null,\n      data && data.len != 2 ? React.createElement(\n        Modal,\n        {\n          title: React.createElement(\n            \'div\',\n            { className: \'zc-information\' },\n            React.createElement(\'span\', null)\n          ),\n          role: \'alert\',\n          isOpen: \'true\',\n          onAction: _this.alert\n        },\n        data.title\n      ) : null\n    );\n  }\n});';
    },
    getData_control49_GfmIyU: function (elem) {
      if (!elem) {
        return;
      }var obj = {};console.log(elem.querySelectorAll('td')[2]);obj.currentPage = elem.querySelectorAll('td')[6].querySelector('input').value;obj.allPage = elem.querySelectorAll('td')[7].textContent;return obj;
    },
    doAction_uiControl48_TtTNzw: function (data, elem) {
      var type = data.eventType;if (type == 'next') {
        elem.querySelectorAll('td')[9].click();
      } else if (type == 'prev') {
        elem.querySelectorAll('td')[3].click();
      } else if (type == 'first') {
        elem.querySelectorAll('td')[2].click();
      } else if (type == 'last') {
        elem.querySelectorAll('td')[10].click();
      }
    },
    getTemplate_uiControl48_TtTNzw: function () {
      var selfTemplate = 'const {Icon} = AMUITouch2;\nmodule.exports = React.createClass({\n  next: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'next\',\n      });\n    }\n  },\n  prev: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'prev\',\n      });\n    }\n  },\n  first: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'first\',\n      });\n    }\n  },\n  last: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'last\',\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var _this = this;\n    if(data.page == "0"){\n      return(\n        <div></div> \n      )\n    }\n    return (\n      <div>\n        <div className="hzx-page-box">\n          <span className="hzx-page-left">\n            <span onClick={_this.first}>|&lt;</span>\n            <span onClick={_this.prev}>&lt;</span>\n          </span>\n          <span className="hzx-page-center">\n            <span>\n              <span>\u7B2C</span>\n              <span>{data.currentPage}</span>\n            </span>\n            <span>{data.allPage}</span>\n          </span>\n          <span className="hzx-page-right">\n            <span onClick={_this.next} >&gt;</span>\n            <span onClick={_this.last} >&gt;|</span>\n          </span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  next: function next(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'next\'\n      });\n    }\n  },\n  prev: function prev(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'prev\'\n      });\n    }\n  },\n  first: function first(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'first\'\n      });\n    }\n  },\n  last: function last(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'last\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    if (data.page == "0") {\n      return React.createElement(\'div\', null);\n    }\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { className: \'hzx-page-box\' },\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-left\' },\n          React.createElement(\n            \'span\',\n            { onClick: _this.first },\n            \'|<\'\n          ),\n          React.createElement(\n            \'span\',\n            { onClick: _this.prev },\n            \'<\'\n          )\n        ),\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-center\' },\n          React.createElement(\n            \'span\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u7B2C\'\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              data.currentPage\n            )\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            data.allPage\n          )\n        ),\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-right\' },\n          React.createElement(\n            \'span\',\n            { onClick: _this.next },\n            \'>\'\n          ),\n          React.createElement(\n            \'span\',\n            { onClick: _this.last },\n            \'>|\'\n          )\n        )\n      )\n    );\n  }\n});';
    }
  }, "sapling_itownet");
})(window, ysp);