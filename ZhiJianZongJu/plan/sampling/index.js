(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4_wbZOPU: function (elem) {
      if (!elem) {
        return;
      }return elem.children[2].textContent;
    },
    doAction_uiControl4_2uC6Po: function (data, elem) {},
    getTemplate_uiControl4_2uC6Po: function () {
      var selfTemplate = "import { Header, HeaderLeft,HeaderRight } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  ck(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  handle:function(data,eventType){\n    const handler = this.props.customHandler;\n    if(handler){\n      handler({data,eventType});\n    }\n  },\n  render: function() {\n    var data=this.props.data.customData;\n    const me = this;\n    return (\n      <Header amStyle=\"primary\" title={data} style={{position:'relative',zIndex:1,background:'#0a568c'}}>\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" onClick={back} style={{marginLeft:'-15px',background:'#0a568c',border:\"#0a568c\",marginBottom:0}}><span className=\"icon icon-left-nav\"></span>\u8FD4\u56DE</AMUI.Button>\n        \t</HeaderLeft>\n      </Header>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n  ck: function ck() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  handle: function handle(data, eventType) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({ data: data, eventType: eventType });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      _yspInteriorComponents.Header,\n      { amStyle: 'primary', title: data, style: { position: 'relative', zIndex: 1, background: '#0a568c' } },\n      React.createElement(\n        _yspInteriorComponents.HeaderLeft,\n        null,\n        React.createElement(\n          AMUI.Button,\n          { amStyle: 'primary', onClick: _appRenderer.back, style: { marginLeft: '-15px', background: '#0a568c', border: \"#0a568c\", marginBottom: 0 } },\n          React.createElement('span', { className: 'icon icon-left-nav' }),\n          '\\u8FD4\\u56DE'\n        )\n      )\n    );\n  }\n});";
    },

    getData_control8_em0xM3: function (elem) {
      if (!elem) {
        return;
      }var obj = {};obj.current = [];obj.hide = [];var btn = elem.querySelectorAll('.cydjbut');console.log(btn);for (var i = 0; i < 2; i++) {
        var cur = btn[i].value;obj.current.unshift(cur);
      }for (var i = 2; i < btn.length; i++) {
        var hide = btn[i].value;obj.hide.push(hide);
      }return obj;
    },
    doAction_uiControl9_rNT14Q: function (data, elem) {
      var type = data.eventType;var data = data.customData;var btn = elem.querySelectorAll('.cydjbut');if (type == 'action') {
        console.log(data);if (data == '删除') {
          btn[3].click();
        } else if (data == '回退') {
          btn[4].click();
        }
      }
    },
    getTemplate_uiControl9_rNT14Q: function () {
      var selfTemplate = "const {\n  ButtonAction\n} = AMUITouch2\nmodule.exports = React.createClass({\n  action:function(i){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'action',\n        data:i\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.data.customData;\n    const actions = [{\n        title: data.current[0],\n        hollow: true,\n        style: {\n          color: \"#004788\"\n        },\n        className: \"your-classname\"\n      },\n      {\n        title: data.current[1]\n      }\n    ];\n    const wrapStyle = {\n      margin: \"8px 4px\",\n      padding: 0,\n      background: \"#fff\",\n      borderRadius: \"4px\"\n    };\n    const ListStyle = {\n      listStyle: \"none\",\n      color: \"#3d8cf8\",\n      padding: 0,\n      marginLeft: \"15px\",\n      marginRight: \"15px\"\n    };\n    const listStyle = {\n      borderBottom: \"1px solid #d8d8d8\",\n      paddingTop: \"14px\",\n      paddingBottom: \"14px\",\n      lineHeight: 1\n    };\n    const listLastStyle = {\n      borderBottom: \"1px solid #d8d8d8\",\n      paddingTop: \"14px\",\n      paddingBottom: \"14px\",\n      lineHeight: 1,\n      color:'red'\n    };\n    var lis=data.hide.map((d,i)=>{\n      return(\n        <div>\n        {d!='\u5220\u9664'?<li style={listStyle} onClick={()=>{_this.action(d)}}>{d}</li>:<li onClick={()=>{_this.action(d)}} style={listLastStyle}>{d}</li>}\n    \t\t</div>\n      )\n    })\n    return (\n      <div>\n        <ButtonAction actions={actions}>\n      <div style={wrapStyle}>\n        <ul style={ListStyle}>\n          {lis}\n        </ul>\n      </div>\n    </ButtonAction>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _AMUITouch = AMUITouch2,\n    ButtonAction = _AMUITouch.ButtonAction;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  action: function action(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'action',\n        data: i\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    var actions = [{\n      title: data.current[0],\n      hollow: true,\n      style: {\n        color: \"#004788\"\n      },\n      className: \"your-classname\"\n    }, {\n      title: data.current[1]\n    }];\n    var wrapStyle = {\n      margin: \"8px 4px\",\n      padding: 0,\n      background: \"#fff\",\n      borderRadius: \"4px\"\n    };\n    var ListStyle = {\n      listStyle: \"none\",\n      color: \"#3d8cf8\",\n      padding: 0,\n      marginLeft: \"15px\",\n      marginRight: \"15px\"\n    };\n    var listStyle = {\n      borderBottom: \"1px solid #d8d8d8\",\n      paddingTop: \"14px\",\n      paddingBottom: \"14px\",\n      lineHeight: 1\n    };\n    var listLastStyle = {\n      borderBottom: \"1px solid #d8d8d8\",\n      paddingTop: \"14px\",\n      paddingBottom: \"14px\",\n      lineHeight: 1,\n      color: 'red'\n    };\n    var lis = data.hide.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        null,\n        d != '\u5220\u9664' ? React.createElement(\n          \"li\",\n          { style: listStyle, onClick: function onClick() {\n              _this.action(d);\n            } },\n          d\n        ) : React.createElement(\n          \"li\",\n          { onClick: function onClick() {\n              _this.action(d);\n            }, style: listLastStyle },\n          d\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        ButtonAction,\n        { actions: actions },\n        React.createElement(\n          \"div\",\n          { style: wrapStyle },\n          React.createElement(\n            \"ul\",\n            { style: ListStyle },\n            lis\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control9_Qzm2vo: function (elem) {
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
    doAction_uiControl10_4Xvo7f: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'icon') {
        var trs = elem.querySelectorAll('tr');trs[data].click();
      }
    },
    getTemplate_uiControl10_4Xvo7f: function () {
      var selfTemplate = "const{  Container,TodoItemTypeOne,Pair,Icon}=AMUITouch2;\nmodule.exports = React.createClass({\n  icon: function(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'icon',\n        data:i\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var _this = this;\n    const oder={\n\t\t\t  width:'8px',\n      \theight:'8px',\n        borderRadius: '50%',\n      \tborder:'solid 1px #ff9d00',\n      display: 'inline-block',\n      marginRight:'10px'\n\t\t}\n    var lis = data.map(function(d,i){\n      return(\n        <div className='zc-check'>\n          {d.className!='datagrid-row'?<Icon name='elect-c' style={{color:'#004788'}}/>:<Icon name='elect-l-c' style={{color:'#004788'}} onClick={()=>{_this.icon(i)}}/>}\n       <TodoItemTypeOne \n         defaultCollapsed\n         title={<div><span>{d.checkPlanName}</span><span style={{float:'right',display: 'flex',color:'#ff9d00',alignItems: 'center'}}><i style={oder}></i>{d.samplState}</span></div>}\n\n         subtitle={<Pair name=\"\u4EA7\u54C1\u540D\u79F0\uFF1A\" value={d.prodName}/>}\n            >\n          {d.detail.map((d,i)=>{\n            return(\n              <Pair  name={d.key} value={d.val} />\n            )\n          })}\n       </TodoItemTypeOne>\n          </div>\n      )\n    })    \n    return (\n      <div style={{background:'#f2f2f2',padding:'10px 0'}}>\n      \t{lis}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Container = _AMUITouch.Container,\n    TodoItemTypeOne = _AMUITouch.TodoItemTypeOne,\n    Pair = _AMUITouch.Pair,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  icon: function icon(i) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'icon',\n        data: i\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    var oder = {\n      width: '8px',\n      height: '8px',\n      borderRadius: '50%',\n      border: 'solid 1px #ff9d00',\n      display: 'inline-block',\n      marginRight: '10px'\n    };\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { className: 'zc-check' },\n        d.className != 'datagrid-row' ? React.createElement(Icon, { name: 'elect-c', style: { color: '#004788' } }) : React.createElement(Icon, { name: 'elect-l-c', style: { color: '#004788' }, onClick: function onClick() {\n            _this.icon(i);\n          } }),\n        React.createElement(\n          TodoItemTypeOne,\n          {\n            defaultCollapsed: true,\n            title: React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d.checkPlanName\n              ),\n              React.createElement(\n                'span',\n                { style: { float: 'right', display: 'flex', color: '#ff9d00', alignItems: 'center' } },\n                React.createElement('i', { style: oder }),\n                d.samplState\n              )\n            ),\n\n            subtitle: React.createElement(Pair, { name: '\\u4EA7\\u54C1\\u540D\\u79F0\\uFF1A', value: d.prodName })\n          },\n          d.detail.map(function (d, i) {\n            return React.createElement(Pair, { name: d.key, value: d.val });\n          })\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { style: { background: '#f2f2f2', padding: '10px 0' } },\n      lis\n    );\n  }\n});";
    },

    getData_control11_2TiVW6: function (elem) {
      if (!elem) {
        return;
      }var elem = elem.querySelector('iframe').contentWindow.document;var elema = elem.querySelector('#enterprise-info');var redio = elem.querySelectorAll('.combo-panel');var obj = {};var title = elema.querySelector('.tabs-inner').textContent;obj.title = title;var trs = elema.querySelector('#queryDiv').querySelectorAll('tr');obj.list = [];for (var i = 0; i < trs.length; i++) {
        var chils = trs[i].children;for (var j = 0; j < chils.length; j++) {
          var w = chils[j].getAttribute('width');if (w == '100px') {
            var listobj = {};listobj.key = chils[j].textContent.replace(new RegExp(/(：)/g), "");if (listobj.key == '抽查计划' || listobj.key == '任务执行状态') {
              listobj.check = 'sele';
            } else {
              listobj.check = 'hodler';
            }obj.list.push(listobj);
          }
        }
      }obj.etcA = [];obj.etcB = [];var etcA = redio[0].querySelectorAll('div');var etcB = redio[1].querySelectorAll('div');for (var i = 0; i < etcA.length; i++) {
        obj.etcA.push(etcA[i].textContent);
      }for (var i = 0; i < etcB.length; i++) {
        obj.etcB.push(etcB[i].textContent);
      }return obj;
    },
    doAction_uiControl12_XV205D: function (data, elem) {
      var type = data.eventType;var data = data.customData;var elem = elem.querySelector('iframe').contentWindow.document;var elema = elem.querySelector('#enterprise-info');var redio = elem.querySelectorAll('.combo-panel');var trs = elema.querySelector('#queryDiv').querySelectorAll('tr');if (type == 'actA') {
        var etcA = redio[0].querySelectorAll('div');etcA[data].click();
      } else if (type == 'actB') {
        var etcB = redio[1].querySelectorAll('div');etcB[data].click();
      } else if (type == 'lists') {
        if (data.type == '抽查任务编号') {
          trs[0].children[3].querySelectorAll('input')[1].value = data.target;console.log(1111);console.log(data.target);console.log(1111);
        } else if (data.type == '产品名称') {
          trs[0].children[5].querySelectorAll('input')[1].value = data.target;
        } else if (data.type == '企业名称') {
          trs[1].children[3].querySelectorAll('input')[1].value = data.target;
        }
      } else if (type == 'reset') {
        trs[1].children[4].querySelectorAll('input')[0].click();
      } else if (type == 'query') {
        trs[1].children[4].querySelectorAll('input')[1].click();
      }
    },
    getTemplate_uiControl12_XV205D: function () {
      var selfTemplate = "const {\n  Title,\n  List,\n  Field,\n  Select\n} = AMUITouch2\nmodule.exports = React.createClass({\n  lists:function(e){\n    var handler=this.props.customHandler;\n    var target=e.target.value;\n    var type=e.target.getAttribute('data-type');\n    if(handler){\n      handler({\n        eventType:'lists',\n        data:{\n          target,\n          type\n        }\n      })\n    }\n  },\n  reset:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'reset'\n      })\n    }\n  },\n  query:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'query'\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data = this.props.data.customData;\n    var actA = data.etcA.map((d, i) => {\n      return (\n        <Select.Item value={i}>{d}</Select.Item>\n      )\n    })\n    var actB = data.etcB.map((d, i) => {\n      return (\n        <Select.Item value={i}>{d}</Select.Item>\n      )\n    })\n    var lis = data.list.map((d, i) => {\n      return (\n        <div className='zc-amInput'>\n        {d.check=='sele'?d.key=='\u62BD\u67E5\u8BA1\u5212'? <List.Item title={d.key} after={<Select\n                            multiple={false}\n                            className='zc-amSele'\n                            onValueChange={value => {\n                    \t\t\t\t\t\tvar handler=this.props.customHandler;\n                    \t\t\t\t\t\tif(handler){\n                                  handler({\n                                    eventType:'actA',\n                                    data:value\n                                  })\n                                }\n                            }}\n                          >\n               {actA}\n              </Select>}>\n              \n            </List.Item>:<List.Item title={d.key} after={<Select\n                            multiple={false}\n                            className='zc-amSele'\n                             onValueChange={value => {\n                    \t\t\t\t\t\tvar handler=this.props.customHandler;\n                    \t\t\t\t\t\tif(handler){\n                                  handler({\n                                    eventType:'actB',\n                                    data:value\n                                  })\n                                }\n                              console.log(value);\n                            }}\n                          >\n               {actB}\n              </Select>}>\n              \n            </List.Item>\n           \n            :\n            <List.Item title={<Field\n                  label={d.key}\n                  placeholder={\"\u8F93\u5165\u7528\"+d.key}\n                  data-type={d.key}\n                  single  \n              \t\tonBlur={_this.lists}\n                />} />\n            }\n          </div>\n      )\n    })\n    return (\n      <div className='zc-detail-top'>\n        <Title amStyle=\"primary\">{data.title}</Title>\n        <List>\n          {lis}\n        </List>\n        <div className='zc-group-btn'>\n        \t<button onClick={_this.reset}>\u91CD\u7F6E</button>\n          <button onClick={_this.query}>\u67E5\u8BE2</button>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Title = _AMUITouch.Title,\n    List = _AMUITouch.List,\n    Field = _AMUITouch.Field,\n    Select = _AMUITouch.Select;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  lists: function lists(e) {\n    var handler = this.props.customHandler;\n    var target = e.target.value;\n    var type = e.target.getAttribute('data-type');\n    if (handler) {\n      handler({\n        eventType: 'lists',\n        data: {\n          target: target,\n          type: type\n        }\n      });\n    }\n  },\n  reset: function reset() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'reset'\n      });\n    }\n  },\n  query: function query() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'query'\n      });\n    }\n  },\n  render: function render() {\n    var _this2 = this;\n\n    var _this = this;\n    var data = this.props.data.customData;\n    var actA = data.etcA.map(function (d, i) {\n      return React.createElement(\n        Select.Item,\n        { value: i },\n        d\n      );\n    });\n    var actB = data.etcB.map(function (d, i) {\n      return React.createElement(\n        Select.Item,\n        { value: i },\n        d\n      );\n    });\n    var lis = data.list.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { className: 'zc-amInput' },\n        d.check == 'sele' ? d.key == '\u62BD\u67E5\u8BA1\u5212' ? React.createElement(List.Item, { title: d.key, after: React.createElement(\n            Select,\n            {\n              multiple: false,\n              className: 'zc-amSele',\n              onValueChange: function onValueChange(value) {\n                var handler = _this2.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'actA',\n                    data: value\n                  });\n                }\n              }\n            },\n            actA\n          ) }) : React.createElement(List.Item, { title: d.key, after: React.createElement(\n            Select,\n            {\n              multiple: false,\n              className: 'zc-amSele',\n              onValueChange: function onValueChange(value) {\n                var handler = _this2.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'actB',\n                    data: value\n                  });\n                }\n                console.log(value);\n              }\n            },\n            actB\n          ) }) : React.createElement(List.Item, { title: React.createElement(Field, {\n            label: d.key,\n            placeholder: \"\u8F93\u5165\u7528\" + d.key,\n            'data-type': d.key,\n            single: true,\n            onBlur: _this.lists\n          }) })\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'zc-detail-top' },\n      React.createElement(\n        Title,\n        { amStyle: 'primary' },\n        data.title\n      ),\n      React.createElement(\n        List,\n        null,\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'zc-group-btn' },\n        React.createElement(\n          'button',\n          { onClick: _this.reset },\n          '\\u91CD\\u7F6E'\n        ),\n        React.createElement(\n          'button',\n          { onClick: _this.query },\n          '\\u67E5\\u8BE2'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control10_1AK7hT: function (elem) {
      if (!elem) {
        return;
      }console.log(elem.querySelector(".window-body").children[1].textContent);return elem.querySelector(".window-body").children[1].textContent;
    },
    doAction_uiControl11_khgP8w: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'confirm') {
        var btn = elem.querySelector('.messager-button').querySelectorAll('a');if (data == true) {
          btn[0].click();
        } else {
          btn[1].click();
        }
      }
    },
    getTemplate_uiControl11_khgP8w: function () {
      var selfTemplate = "const {Modal,Icon} = AMUITouch2\nmodule.exports = React.createClass({\n  confirm:function(data){\n\t\tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'confirm',\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    var data=this.props.data.customData;\n    return (\n      <div>\n        {data?<Modal\n          title={<div className='zc-information'><span></span></div>}\n          role=\"confirm\"\n          isOpen='true'\n          onAction={_this.confirm}\n        >\n          {data}\n        </Modal>:null}\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  confirm: function confirm(data) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'confirm',\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return React.createElement(\n      'div',\n      null,\n      data ? React.createElement(\n        Modal,\n        {\n          title: React.createElement(\n            'div',\n            { className: 'zc-information' },\n            React.createElement('span', null)\n          ),\n          role: 'confirm',\n          isOpen: 'true',\n          onAction: _this.confirm\n        },\n        data\n      ) : null\n    );\n  }\n});";
    }
  }, "sampling");
})(window, ysp);