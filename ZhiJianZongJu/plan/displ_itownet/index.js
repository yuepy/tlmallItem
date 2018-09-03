(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_504Hiz: function (elem) {
      if (!elem) {
        return;
      }var title = elem.children[0].textContent;return title;
    },
    doAction_uiControl12_lcnmT4: function (data, elem) {
      var type = data.eventType;if (type === 'click') {
        var btn = elem.querySelector('.panel-tool').querySelector('a');btn.click();
      }
    },
    getTemplate_uiControl12_lcnmT4: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    const me = this;\n    return (\n      <div>\n        <Header amStyle="primary" title={data}>\n          <HeaderLeft>\n            <AMUI.Button amStyle="primary"  onClick={me.handleClick} style={{marginBottom:0,textAlign:"left", background:"#0a568c",borderColor:"#0a568c",marginLeft:"-15"}}><span className="icon icon-left-nav"></span>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});\n';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\', title: data },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: me.handleClick, style: { marginBottom: 0, textAlign: "left", background: "#0a568c", borderColor: "#0a568c", marginLeft: "-15" } },\n            React.createElement(\'span\', { className: \'icon icon-left-nav\' }),\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control17_VeuQX0: function (elem) {
      if (!elem) {
        return;
      } // var labels = elem.querySelectorAll('label');
      // var inputs = elem.querySelectorAll('.ipt');
      // var tIndex = [];
      // var data = [];
      // for (var i = 0; i < labels.length; i++) {
      //   var title = labels[i].textContent;
      //   tIndex.push({
      //     name: title,
      //     index: i
      //   });
      // }
      // for (var k = 0; k < inputs.length; k++) {
      //   var val = inputs[k].value;
      //   data.push({
      //     title: tIndex[k].name,
      //     val: val
      //   });
      // }
      var trs = elem.querySelectorAll('tr');var data = [];for (var i = 0; i < trs.length; i++) {
        if (trs[i].style.display == "none") {
          continue;
        }var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          var labels = tds[k].querySelectorAll('label');var vals = tds[k].querySelectorAll('.ipt');for (var j = 0; j < labels.length; j++) {
            var name = labels[j].textContent.trim();
          }for (var l = 0; l < vals.length; l++) {
            var val = vals[l].value;data.push({ title: name, val: val });
          }
        }
      }return data;
    },
    doAction_uiControl13_sV26Mu: function (data, elem) {},
    getTemplate_uiControl13_sV26Mu: function () {
      var selfTemplate = '\nconst {List,Modal} = AMUITouch2;\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var lis = data.map(function(d,i){\n      return(\n          <List.Item\n            title = {<span style={{fontWeight:"bold"}}>{d.title}</span>}\n            after = {d.val}\n            />\n      )\n    })\n    return (\n      <div style={{textAlign:"left"}}>\n        <List>\n        \t{lis}\n        </List>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    List = _AMUITouch.List,\n    Modal = _AMUITouch.Modal;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var lis = data.map(function (d, i) {\n      return React.createElement(List.Item, {\n        title: React.createElement(\n          "span",\n          { style: { fontWeight: "bold" } },\n          d.title\n        ),\n        after: d.val\n      });\n    });\n    return React.createElement(\n      "div",\n      { style: { textAlign: "left" } },\n      React.createElement(\n        List,\n        null,\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control18_pQ0Aqt: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl14_fTnxNe: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl14_fTnxNe: function () {
      var selfTemplate = 'const {Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    return (\n      <div className="hzx-btn-close">\n        <Button block amStyle="primary" onClick={me.handleClick}>{data}</Button>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var me = this;\n    return React.createElement(\n      "div",\n      { className: "hzx-btn-close" },\n      React.createElement(\n        Button,\n        { block: true, amStyle: "primary", onClick: me.handleClick },\n        data\n      )\n    );\n  }\n});';
    },
    getData_control23_fPtLX6: function (elem) {
      if (!elem) {
        return;
      }var ths = elem.querySelector('.datagrid-header').querySelector('.datagrid-header-inner').querySelector('.datagrid-htable').querySelector('tr').querySelectorAll('td');var trs = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');var tIndex = [];var data = [];for (var i = 1; i < ths.length; i++) {
        var title = ths[i].textContent.trim();tIndex.push({ name: title, index: i });
      }for (var k = 0; k < trs.length; k++) {
        var index = k;if ($(trs[k]).hasClass('datagrid-row-checked')) {
          var checked = true;
        } else {
          var checked = false;
        }data.push({ items: [], checked: checked, index: index });var tds = trs[k].querySelectorAll('td');for (var j = 0; j < tIndex.length; j++) {
          var val = tds[tIndex[j].index].textContent.trim();if (tIndex[j].name == "机构名称") {
            data[data.length - 1].title = val;
          } else if (tIndex[j].name == "机构代码") {
            data[data.length - 1].subTitle = val;
          } else {
            data[data.length - 1].items.push({ title: tIndex[j].name, val: val });
          }
        }
      }return data;
    },
    doAction_uiControl19_rWqio7: function (data, elem) {
      var type = data.eventType;var customData = data.customData;var _elem = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');if (type === 'click') {
        var ck = _elem[customData].querySelector('.datagrid-cell-check');ck.click();
      }
    },
    getTemplate_uiControl19_rWqio7: function () {
      var selfTemplate = 'const{  Container,TodoItemTypeOne,Pair,Icon}=AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n    \n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == \'hzx-card-title\'){\n      target = target.querySelectorAll(\'p\')[1];\n    }else{\n      target = target.parentElement.querySelectorAll(\'p\')[1];\n    }\n    if(target.parentElement.nextElementSibling.style.display==\'none\'){\n      target.className = \'up\';\n      target.parentElement.style.borderBottom = \'1px solid #ccc\';\n      target.parentElement.nextElementSibling.style.display = \'block\';\n    }else{\n      target.className = \'down\';\n      target.parentElement.style.borderBottom = \'0\';\n      target.parentElement.nextElementSibling.style.display = \'none\';\n    }\n    \n    e.stopPropagation();\n    \n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }else\n    var _this = this;\n    var lis = data.map(function(d,i){    \n    if(d.title == ""){\n      return(\n         <div style={{textAlign:"center"}}>\u6682\u65E0\u6570\u636E</div>\n        )\n      }\n      return(\n        \n           <div  className=\'hzx-card-item\'>\n          \t <div onClick={_this.click.bind(_this)}></div>\t\n             <div style={{float:"left",marginTop:20}} onClick={()=>{_this.onClick(d.index)}}>\n               {!d.checked?<span style={{paddingRight:5}}><Icon data-index={d.index}  className="hzx-sign"/></span>:<span style={{paddingRight:5}}><Icon data-index={d.index} name="elect-c" style={{color:"#0a568c"}}/></span>}\n             </div>           \n             <div className=\'hzx-card-title\'   onClick={_this.click.bind(_this)}>\n               <p onClick={_this.click.bind(_this)}> {d.title}</p>\n               <p className=\'down\' onClick={_this.click.bind(_this)}>\u673A\u6784\u4EE3\u7801\uFF1A{d.subTitle}</p>\n             </div>\n             <div className=\'hzx-card-list\' style={{\'display\':\'none\'}} > \n                {d.items.map(function(item,j){\n                  return(\n                     <p>  {item.title} :&nbsp;&nbsp;&nbsp;{item.val} </p>\n                  )\n                })} \n              </div> \n           </div>\n      )\n    })  \n    return (\n      <div className=\'hzx-card-box\'>\n      \t{lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Container = _AMUITouch.Container,\n    TodoItemTypeOne = _AMUITouch.TodoItemTypeOne,\n    Pair = _AMUITouch.Pair,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == \'hzx-card-title\') {\n      target = target.querySelectorAll(\'p\')[1];\n    } else {\n      target = target.parentElement.querySelectorAll(\'p\')[1];\n    }\n    if (target.parentElement.nextElementSibling.style.display == \'none\') {\n      target.className = \'up\';\n      target.parentElement.style.borderBottom = \'1px solid #ccc\';\n      target.parentElement.nextElementSibling.style.display = \'block\';\n    } else {\n      target.className = \'down\';\n      target.parentElement.style.borderBottom = \'0\';\n      target.parentElement.nextElementSibling.style.display = \'none\';\n    }\n\n    e.stopPropagation();\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement(\'div\', null);\n    } else var _this = this;\n    var lis = data.map(function (d, i) {\n      if (d.title == "") {\n        return React.createElement(\n          \'div\',\n          { style: { textAlign: "center" } },\n          \'\\u6682\\u65E0\\u6570\\u636E\'\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'hzx-card-item\' },\n        React.createElement(\'div\', { onClick: _this.click.bind(_this) }),\n        React.createElement(\n          \'div\',\n          { style: { float: "left", marginTop: 20 }, onClick: function onClick() {\n              _this.onClick(d.index);\n            } },\n          !d.checked ? React.createElement(\n            \'span\',\n            { style: { paddingRight: 5 } },\n            React.createElement(Icon, { \'data-index\': d.index, className: \'hzx-sign\' })\n          ) : React.createElement(\n            \'span\',\n            { style: { paddingRight: 5 } },\n            React.createElement(Icon, { \'data-index\': d.index, name: \'elect-c\', style: { color: "#0a568c" } })\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'hzx-card-title\', onClick: _this.click.bind(_this) },\n          React.createElement(\n            \'p\',\n            { onClick: _this.click.bind(_this) },\n            \' \',\n            d.title\n          ),\n          React.createElement(\n            \'p\',\n            { className: \'down\', onClick: _this.click.bind(_this) },\n            \'\\u673A\\u6784\\u4EE3\\u7801\\uFF1A\',\n            d.subTitle\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'hzx-card-list\', style: { \'display\': \'none\' } },\n          d.items.map(function (item, j) {\n            return React.createElement(\n              \'p\',\n              null,\n              \'  \',\n              item.title,\n              \' :\\xA0\\xA0\\xA0\',\n              item.val,\n              \' \'\n            );\n          })\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'hzx-card-box\' },\n      lis\n    );\n  }\n});';
    },
    getData_control24_vzBHSe: function (elem) {
      if (!elem) {
        return;
      }var btn = elem.querySelectorAll('.l-btn-text');var data = [];for (var i = 0; i < btn.length; i++) {
        var obj = {};obj.text = btn[i].textContent;obj.index = i;data.push(obj);
      }return data;
    },
    doAction_uiControl20_EuOkr6: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.children[customData];ck.click();
      }
    },
    getTemplate_uiControl20_EuOkr6: function () {
      var selfTemplate = "const {Button,ButtonGroup} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data:index\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    var lis = data.map(function(d,i){\n      if(d.text == \"\u63D0\u4EA4\"){\n        return(<div></div>)\n      }\n      return(\n          <Button data-index={d.index} hollow onClick={me.onClick}>{d.text}</Button>\n      )\n    })\n    return (\n      <div className=\"hzx-btn-box\">\n        <ButtonGroup  gapped justify>\n          {lis}\n        </ButtonGroup>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button,\n    ButtonGroup = _AMUITouch.ButtonGroup;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement(\"div\", null);\n    }\n    var me = this;\n    var lis = data.map(function (d, i) {\n      if (d.text == \"\u63D0\u4EA4\") {\n        return React.createElement(\"div\", null);\n      }\n      return React.createElement(\n        Button,\n        { \"data-index\": d.index, hollow: true, onClick: me.onClick },\n        d.text\n      );\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"hzx-btn-box\" },\n      React.createElement(\n        ButtonGroup,\n        { gapped: true, justify: true },\n        lis\n      )\n    );\n  }\n});";
    },

    getData_control22_dMMdhr: function (elem) {
      if (!elem) {
        return;
      }var text = elem.querySelector('.messager-body').children[1].textContent;return text;
    },
    doAction_uiControl18_SPZ3rD: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.querySelector('.messager-body').querySelector('.messager-button').querySelector('a');ck.click();
      }
    },
    getTemplate_uiControl18_SPZ3rD: function () {
      var selfTemplate = 'const {Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    return (\n      <div>\n        <div style={{position:"absolute",zIndex:9999,width:"80%",background: "#fff",height:200,left:"10%",top:"30%",textAlign:"center",paddingTop:50}}\n\n        >\n          <div className="hzx-success-icon"></div>\n          <p style={{lineHight:30}}>{data}</p>\n          <div>\n          \t<Button hollow style={{border:0,color:"#0a568c",marginTop:6}} onClick={me.handleClick}>\u786E\u5B9A</Button>\n          </div>\n        </div>\n        <div className="hzx-mask"></div>\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "div",\n        { style: { position: "absolute", zIndex: 9999, width: "80%", background: "#fff", height: 200, left: "10%", top: "30%", textAlign: "center", paddingTop: 50 }\n\n        },\n        React.createElement("div", { className: "hzx-success-icon" }),\n        React.createElement(\n          "p",\n          { style: { lineHight: 30 } },\n          data\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            Button,\n            { hollow: true, style: { border: 0, color: "#0a568c", marginTop: 6 }, onClick: me.handleClick },\n            "\\u786E\\u5B9A"\n          )\n        )\n      ),\n      React.createElement("div", { className: "hzx-mask" })\n    );\n  }\n});';
    },
    getData_control13_fAtIib: function (elem) {
      if (!elem) {
        return;
      }var labels = elem.querySelectorAll('label');var inputs = elem.querySelectorAll('.textbox-text');var selectTxt = elem.children[1].children[8].querySelector('.textbox-value');var data = { items: [] };var tIndex = [];for (var i = 0; i < labels.length; i++) {
        var name = labels[i].textContent;tIndex.push({ name: name, index: i });
      }for (var k = 0; k < tIndex.length; k++) {
        var val = inputs[tIndex[k].index].value;if (tIndex[k].name == "状态") {
          data.items.push({ name: tIndex[k].name, val: val, type: "select" });
        } else {
          data.items.push({ name: tIndex[k].name, val: val, index: k, type: "input" });
        }
      }return data;
    },
    doAction_uiControl9_0T1lGT: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'onBlur') {
        var labels = elem.querySelectorAll('label');labels[customData.index].nextElementSibling.value = customData.val;labels[customData.index].nextElementSibling.nextElementSibling.querySelectorAll('input')[0].value = customData.val;labels[customData.index].nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = customData.val; //inputs.value = customData.val;
        // inputs.click();
        // $(inputs).val(customData.val);
        // ysp.customHelper.fireKeyEvent(inputs, "keyup", 13);
      }if (type === 'onClick') {
        var ck = elem.children[1].children[8].querySelector('.textbox-addon').querySelector('a');ck.click();
      }
    },
    getTemplate_uiControl9_0T1lGT: function () {
      var selfTemplate = 'const{Field,Modal,Choose,List,Icon,Title} = AMUITouch2;\nmodule.exports = React.createClass({\n  onBlur: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    var val = e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'onBlur\',\n        data:{\n          val:val,\n          index:index\n        }\n      });\n    }\n  },\n  onClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'onClick\',\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    var lis = data.items.map(function(d,i){\n      if(d.type == "input"){\n      return(\n        <Field\n          label={<span style={{fontWeight: "bold"}}>{d.name}</span>}\n          labelWidth="7em"\n          single\n          placeholder={d.val}\n          value={d.val}\n          onBlur={me.onBlur}\n          data-index={d.index}\n        />\n      )\n      }else{\n        return(\n        <div className="hzx-input-box">\n          <span   style={{fontWeight: "bold",fontSize:".875rem"}}>{d.name}</span>\n          <input className="hzx-input" value={d.val} onClick={me.onClick}/>\n        </div>\n          \n      )}})\n    return (\n      <div>\n        <Title className="hzx-title">\u4EBA\u5DE5\u5206\u914D</Title>\n        {lis}\n\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Field = _AMUITouch.Field,\n    Modal = _AMUITouch.Modal,\n    Choose = _AMUITouch.Choose,\n    List = _AMUITouch.List,\n    Icon = _AMUITouch.Icon,\n    Title = _AMUITouch.Title;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onBlur: function onBlur(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    var val = e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'onBlur\',\n        data: {\n          val: val,\n          index: index\n        }\n      });\n    }\n  },\n  onClick: function onClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'onClick\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    var lis = data.items.map(function (d, i) {\n      if (d.type == "input") {\n        return React.createElement(Field, {\n          label: React.createElement(\n            \'span\',\n            { style: { fontWeight: "bold" } },\n            d.name\n          ),\n          labelWidth: \'7em\',\n          single: true,\n          placeholder: d.val,\n          value: d.val,\n          onBlur: me.onBlur,\n          \'data-index\': d.index\n        });\n      } else {\n        return React.createElement(\n          \'div\',\n          { className: \'hzx-input-box\' },\n          React.createElement(\n            \'span\',\n            { style: { fontWeight: "bold", fontSize: ".875rem" } },\n            d.name\n          ),\n          React.createElement(\'input\', { className: \'hzx-input\', value: d.val, onClick: me.onClick })\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        Title,\n        { className: \'hzx-title\' },\n        \'\\u4EBA\\u5DE5\\u5206\\u914D\'\n      ),\n      lis\n    );\n  }\n});';
    },
    getData_control12_LmKPug: function (elem) {
      if (!elem) {
        return;
      }var ths = elem.querySelector('.datagrid-header').querySelector('.datagrid-header-inner').querySelector('.datagrid-htable').querySelector('tr').querySelectorAll('td');var trs = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');var tIndex = [];var data = [];for (var i = 1; i < ths.length; i++) {
        var title = ths[i].textContent.trim();tIndex.push({ name: title, index: i });
      }for (var k = 0; k < trs.length; k++) {
        var index = k;if ($(trs[k]).hasClass('datagrid-row-checked')) {
          var checked = true;
        } else {
          var checked = false;
        }data.push({ items: [], checked: checked, index: index });var tds = trs[k].querySelectorAll('td');for (var j = 0; j < tIndex.length; j++) {
          var val = tds[tIndex[j].index].textContent.trim();if (tIndex[j].name.indexOf('计量器具') > -1) {
            data[data.length - 1].title = val;
          } else if (tIndex[j].name == "使用区域") {
            data[data.length - 1].subTitle = val;
          } else if (tIndex[j].name.indexOf('状态') > -1) {
            data[data.length - 1].state = val;
          } else {
            data[data.length - 1].items.push({ title: tIndex[j].name, val: val });
          }
        }
      }return data;
    },
    doAction_uiControl8_GHEmhF: function (data, elem) {
      var type = data.eventType;var customData = data.customData;var _elem = elem.querySelector('.datagrid-body').querySelector('.datagrid-btable').querySelectorAll('tr');if (type === 'click') {
        var ck = _elem[customData].querySelector('.datagrid-cell-check');ck.click();
      }
    },
    getTemplate_uiControl8_GHEmhF: function () {
      var selfTemplate = 'const{  Container,TodoItemTypeOne,Pair,Icon}=AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n    \n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == \'hzx-card-title\'){\n      target = target.querySelectorAll(\'p\')[1];\n    }else{\n      target = target.parentElement.querySelectorAll(\'p\')[1];\n    }\n    if(target.parentElement.nextElementSibling.style.display==\'none\'){\n      target.className = \'up\';\n      target.parentElement.style.borderBottom = \'1px solid #ccc\';\n      target.parentElement.nextElementSibling.style.display = \'block\';\n    }else{\n      target.className = \'down\';\n      target.parentElement.style.borderBottom = \'0\';\n      target.parentElement.nextElementSibling.style.display = \'none\';\n    }\n    \n    e.stopPropagation();\n    \n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }else\n    var _this = this;\n    var lis = data.map(function(d,i){    \n    if(d.title == ""){\n      return(\n         <div style={{textAlign:"center"}}>\u6682\u65E0\u6570\u636E</div>\n        )\n      }\n      return(\n        \n           <div  className=\'hzx-card-item\'>\n          \t <div onClick={_this.click.bind(_this)}></div>\t\n             <div style={{float:"left",marginTop:20}} onClick={()=>{_this.onClick(d.index)}}>\n               {!d.checked?<span style={{paddingRight:5}}><Icon data-index={d.index}  className="hzx-sign"/></span>:<span style={{paddingRight:5}}><Icon data-index={d.index} name="elect-c" style={{color:"#0a568c"}}/></span>}\n             </div>           \n             <div className=\'hzx-card-title\'   onClick={_this.click.bind(_this)}>\n               <p onClick={_this.click.bind(_this)}> {d.title} {d.state == "\u5F85\u5206\u914D"?<span style={{float:"right",color:"#ff9d00",fontWeight:"normal",fontSize:12}}>O{d.state}</span>:<span style={{float:"right",color:"#eb092e",fontWeight:"normal",fontSize:12}}>O{d.state}</span>}</p>\n               <p className=\'down\' onClick={_this.click.bind(_this)}>\u4F7F\u7528\u533A\u57DF\uFF1A{d.subTitle}</p>\n             </div>\n             <div className=\'hzx-card-list\' style={{\'display\':\'none\'}} > \n                {d.items.map(function(item,j){\n                  return(\n                     <p>  {item.title} :&nbsp;&nbsp;&nbsp;{item.val} </p>\n                  )\n                })} \n              </div> \n           </div>\n      )\n    })  \n    return (\n      <div className=\'hzx-card-box\'>\n      \t{lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Container = _AMUITouch.Container,\n    TodoItemTypeOne = _AMUITouch.TodoItemTypeOne,\n    Pair = _AMUITouch.Pair,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == \'hzx-card-title\') {\n      target = target.querySelectorAll(\'p\')[1];\n    } else {\n      target = target.parentElement.querySelectorAll(\'p\')[1];\n    }\n    if (target.parentElement.nextElementSibling.style.display == \'none\') {\n      target.className = \'up\';\n      target.parentElement.style.borderBottom = \'1px solid #ccc\';\n      target.parentElement.nextElementSibling.style.display = \'block\';\n    } else {\n      target.className = \'down\';\n      target.parentElement.style.borderBottom = \'0\';\n      target.parentElement.nextElementSibling.style.display = \'none\';\n    }\n\n    e.stopPropagation();\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement(\'div\', null);\n    } else var _this = this;\n    var lis = data.map(function (d, i) {\n      if (d.title == "") {\n        return React.createElement(\n          \'div\',\n          { style: { textAlign: "center" } },\n          \'\\u6682\\u65E0\\u6570\\u636E\'\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'hzx-card-item\' },\n        React.createElement(\'div\', { onClick: _this.click.bind(_this) }),\n        React.createElement(\n          \'div\',\n          { style: { float: "left", marginTop: 20 }, onClick: function onClick() {\n              _this.onClick(d.index);\n            } },\n          !d.checked ? React.createElement(\n            \'span\',\n            { style: { paddingRight: 5 } },\n            React.createElement(Icon, { \'data-index\': d.index, className: \'hzx-sign\' })\n          ) : React.createElement(\n            \'span\',\n            { style: { paddingRight: 5 } },\n            React.createElement(Icon, { \'data-index\': d.index, name: \'elect-c\', style: { color: "#0a568c" } })\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'hzx-card-title\', onClick: _this.click.bind(_this) },\n          React.createElement(\n            \'p\',\n            { onClick: _this.click.bind(_this) },\n            \' \',\n            d.title,\n            \' \',\n            d.state == "\u5F85\u5206\u914D" ? React.createElement(\n              \'span\',\n              { style: { float: "right", color: "#ff9d00", fontWeight: "normal", fontSize: 12 } },\n              \'O\',\n              d.state\n            ) : React.createElement(\n              \'span\',\n              { style: { float: "right", color: "#eb092e", fontWeight: "normal", fontSize: 12 } },\n              \'O\',\n              d.state\n            )\n          ),\n          React.createElement(\n            \'p\',\n            { className: \'down\', onClick: _this.click.bind(_this) },\n            \'\\u4F7F\\u7528\\u533A\\u57DF\\uFF1A\',\n            d.subTitle\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'hzx-card-list\', style: { \'display\': \'none\' } },\n          d.items.map(function (item, j) {\n            return React.createElement(\n              \'p\',\n              null,\n              \'  \',\n              item.title,\n              \' :\\xA0\\xA0\\xA0\',\n              item.val,\n              \' \'\n            );\n          })\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'hzx-card-box\' },\n      lis\n    );\n  }\n});';
    },
    getData_control14_LPTe6I: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl10_1oAid9: function (data, elem) {},
    getTemplate_uiControl10_1oAid9: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    const me = this;\n    return (\n      <div>\n        <Header amStyle="primary" title={data}>\n          <HeaderLeft>\n            <AMUI.Button amStyle="primary" onClick={back} style={{marginBottom:0,textAlign:"left", background:"#0a568c",borderColor:"#0a568c",marginLeft:"-15"}}><span className="icon icon-left-nav"></span>\u8FD4\u56DE</AMUI.Button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});\n';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \'primary\', title: data },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \'primary\', onClick: _appRenderer.back, style: { marginBottom: 0, textAlign: "left", background: "#0a568c", borderColor: "#0a568c", marginLeft: "-15" } },\n            React.createElement(\'span\', { className: \'icon icon-left-nav\' }),\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control25_1xsqC5: function (elem) {
      if (!elem) {
        return;
      }var btn = elem.querySelectorAll('button');var data = [];for (var i = 1; i >= 0; i--) {
        var obj = {};obj.text = btn[i].textContent;obj.index = i;data.push(obj);
      }return data;
    },
    doAction_uiControl21_rUk0Da: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.children[customData];ck.click();
      }
    },
    getTemplate_uiControl21_rUk0Da: function () {
      var selfTemplate = "const {Button,ButtonGroup} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data:index\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    var me = this;\n    var lis = data.map(function(d,i){\n      return(\n          <Button rounded data-index={d.index} hollow onClick={me.onClick}>{d.text}</Button>\n      )\n    })\n    return (\n      <div className=\"hzx-btn-othBox\">\n        <ButtonGroup  gapped justify>\n          {lis}\n        </ButtonGroup>\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button,\n    ButtonGroup = _AMUITouch.ButtonGroup;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var me = this;\n    var lis = data.map(function (d, i) {\n      return React.createElement(\n        Button,\n        { rounded: true, "data-index": d.index, hollow: true, onClick: me.onClick },\n        d.text\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "hzx-btn-othBox" },\n      React.createElement(\n        ButtonGroup,\n        { gapped: true, justify: true },\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control26_ewTeMy: function (elem) {
      if (!elem) {
        return;
      }var btn = elem.querySelectorAll('button');var data = { actions: [], more: [] };for (var i = 0; i < btn.length; i++) {
        var index = i;var text = btn[i].textContent;if (index == 0 || index == 1) {
          data.actions.push({ text: text, index: i });
        } else {
          data.more.push({ text: text, index: i });
        }
      }return data;
    },
    doAction_uiControl22_7JRUmg: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.children[customData];ck.click();
      }
    },
    getTemplate_uiControl22_7JRUmg: function () {
      var selfTemplate = 'const {ButtonAction,Button} = AMUITouch2;\n\nconst wrapStyle = {\n  margin: "8px 4px",\n  padding: 0,\n  background: "#fff",\n  borderRadius: "4px",\n};\n\nconst ListStyle = {\n  listStyle: "none",\n  color: "#0a568c",\n  padding: 0,\n  marginLeft: "15px",\n  marginRight: "15px"\n};\n\nconst listStyle = {\n  borderBottom: "1px solid #d8d8d8",\n  paddingTop: "14px",\n  paddingBottom: "14px",\n  lineHeight: 1\n};\n\nconst listLastStyle = {\n  paddingTop: "14px",\n  paddingBottom: "14px",\n  lineHeight: 1\n};\n\nmodule.exports = React.createClass({\n  onClick: function(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data:index\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(\n        <div></div>\n      )\n    }\n    const actions =[\n      {\n      title: data.actions[0].text,\n      onClick:e =>{\n        var handler = this.props.customHandler;\n        var index = data.actions[0].index;\n        if (handler) {\n          handler({\n            eventType: \'click\',\n            data:index\n          });\n        }\n      }  \n    },{\n      title:data.actions[1].text,\n      onClick:e =>{\n        var handler = this.props.customHandler;\n        var index = data.actions[1].index;\n        if (handler) {\n          handler({\n            eventType: \'click\',\n            data:index\n          });\n        }\n      } \n    }\n    ];\n    var lis = data.more.map(function(d,i){\n      return(\n          <li style={listStyle} data-index={d.index} onClick={me.onClick}>{d.text}</li>\n      )\n    })\n    return (\n      <div className="hzx-btn-actions">\n        <ButtonAction actions={actions}>\n              <div style={wrapStyle}>\n                <ul style={ListStyle}>\n                  {lis}\n                </ul>\n              </div>\n        </ButtonAction>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    ButtonAction = _AMUITouch.ButtonAction,\n    Button = _AMUITouch.Button;\n\n\nvar wrapStyle = {\n  margin: "8px 4px",\n  padding: 0,\n  background: "#fff",\n  borderRadius: "4px"\n};\n\nvar ListStyle = {\n  listStyle: "none",\n  color: "#0a568c",\n  padding: 0,\n  marginLeft: "15px",\n  marginRight: "15px"\n};\n\nvar listStyle = {\n  borderBottom: "1px solid #d8d8d8",\n  paddingTop: "14px",\n  paddingBottom: "14px",\n  lineHeight: 1\n};\n\nvar listLastStyle = {\n  paddingTop: "14px",\n  paddingBottom: "14px",\n  lineHeight: 1\n};\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var index = e.target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    var actions = [{\n      title: data.actions[0].text,\n      onClick: function onClick(e) {\n        var handler = _this.props.customHandler;\n        var index = data.actions[0].index;\n        if (handler) {\n          handler({\n            eventType: \'click\',\n            data: index\n          });\n        }\n      }\n    }, {\n      title: data.actions[1].text,\n      onClick: function onClick(e) {\n        var handler = _this.props.customHandler;\n        var index = data.actions[1].index;\n        if (handler) {\n          handler({\n            eventType: \'click\',\n            data: index\n          });\n        }\n      }\n    }];\n    var lis = data.more.map(function (d, i) {\n      return React.createElement(\n        "li",\n        { style: listStyle, "data-index": d.index, onClick: me.onClick },\n        d.text\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "hzx-btn-actions" },\n      React.createElement(\n        ButtonAction,\n        { actions: actions },\n        React.createElement(\n          "div",\n          { style: wrapStyle },\n          React.createElement(\n            "ul",\n            { style: ListStyle },\n            lis\n          )\n        )\n      )\n    );\n  }\n});';
    },

    getData_control28_sbvmmd: function (elem) {
      if (!elem) {
        return;
      }var messager = elem.querySelector('.messager-body');if (!messager) {
        return;
      }var text = messager.children[1];if (!text) {
        return;
      }var textContent = text.textContent;return textContent;
    },
    doAction_uiControl24_02QD6P: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === "click") {
        var ck = elem.querySelector('.messager-body').querySelector('.messager-button').querySelector('a');ck.click();
      }
    },
    getTemplate_uiControl24_02QD6P: function () {
      var selfTemplate = 'const {Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  handleClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(<div></div>)\n    }\n    return (\n      <div>\n        <div style={{position:"absolute",zIndex:9999,width:"80%",background: "#fff",height:200,left:"10%",top:"30%",textAlign:"center",paddingTop:50}}\n        >\n          <div className="hzx-success-icon"></div>\n          <p style={{lineHight:30}}>{data}</p>\n          <div className="hzx-alert-btn">\n          \t<Button hollow   style={{border:0,color:"#0a568c",marginTop:6}} onClick={me.handleClick}>\u786E\u5B9A</Button>\n          </div>\n        </div>\n        <div className="hzx-mask"></div>\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nvar _AMUITouch = AMUITouch2,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement("div", null);\n    }\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "div",\n        { style: { position: "absolute", zIndex: 9999, width: "80%", background: "#fff", height: 200, left: "10%", top: "30%", textAlign: "center", paddingTop: 50 }\n        },\n        React.createElement("div", { className: "hzx-success-icon" }),\n        React.createElement(\n          "p",\n          { style: { lineHight: 30 } },\n          data\n        ),\n        React.createElement(\n          "div",\n          { className: "hzx-alert-btn" },\n          React.createElement(\n            Button,\n            { hollow: true, style: { border: 0, color: "#0a568c", marginTop: 6 }, onClick: me.handleClick },\n            "\\u786E\\u5B9A"\n          )\n        )\n      ),\n      React.createElement("div", { className: "hzx-mask" })\n    );\n  }\n});';
    },
    getData_control27_CCL8uX: function (elem) {
      if (!elem) {
        return;
      }var selectBox = elem.querySelector('.combo-p');var selectTxt = elem.querySelectorAll('.combobox-item');if (selectBox.style.display == "none") {
        var data = { items: [], show: false };
      } else {
        var data = { items: [], show: true };
      }for (var i = 0; i < selectTxt.length; i++) {
        var name = selectTxt[i].textContent;var index = i;if ($(selectTxt[i]).hasClass('combobox-item-selected')) {
          data.items.push({ value: name, index: index, checked: true });
        } else {
          data.items.push({ value: name, index: index, checked: false });
        }
      }return data;
    },
    doAction_uiControl23_E42kxI: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'onClick') {
        var ck = elem.querySelector('.combo-p').querySelector('.combo-panel').children[customData];ck.click();
      }if (type == 'closeModal') {
        var doc = elem.ownerDocument;var evt = doc.createEvent("MouseEvent");evt.initEvent("mousedown", true, true);elem.dispatchEvent(evt);
      }
    },
    getTemplate_uiControl23_E42kxI: function () {
      var selfTemplate = 'const {Modal,Field,Choose,List,Icon} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType:\'onClick\',\n        data:index\n      });\n    }\n  },\n  closeModal:function(){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'closeModal\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(data.show == false){\n      return(<div></div>)\n    }\n    var me = this;\n    var list = data.items.map((d,i)=>{\n      return(\n  \t\t\t<List.Item title={d.value} data-index={d.index} after={d.checked?<Icon size="2x" name="elect-c" />:<Icon size="2x" name="elect-l-c" />}  onClick={()=>{me.onClick(d.index)}}/>\n      )\n    })\n    return (\n        <Modal\n\n            title = {<div style={{color:"#fff"}}>\u8BF7\u9009\u62E9</div>}\n            role = "popup"\n            isOpen = {true}\n            cancelText=\'\u786E\u5B9A\'\n          \tonDismiss={me.closeModal}\n            className = "query-selector"\n          >\n          <List>\n           {list}\n          </List>\n        </Modal> \n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Field = _AMUITouch.Field,\n    Choose = _AMUITouch.Choose,\n    List = _AMUITouch.List,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(index) {\n    var handler = this.props.customHandler;\n    var index = index;\n    if (handler) {\n      handler({\n        eventType: \'onClick\',\n        data: index\n      });\n    }\n  },\n  closeModal: function closeModal() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'closeModal\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (data.show == false) {\n      return React.createElement(\'div\', null);\n    }\n    var me = this;\n    var list = data.items.map(function (d, i) {\n      return React.createElement(List.Item, { title: d.value, \'data-index\': d.index, after: d.checked ? React.createElement(Icon, { size: \'2x\', name: \'elect-c\' }) : React.createElement(Icon, { size: \'2x\', name: \'elect-l-c\' }), onClick: function onClick() {\n          me.onClick(d.index);\n        } });\n    });\n    return React.createElement(\n      Modal,\n      {\n\n        title: React.createElement(\n          \'div\',\n          { style: { color: "#fff" } },\n          \'\\u8BF7\\u9009\\u62E9\'\n        ),\n        role: \'popup\',\n        isOpen: true,\n        cancelText: \'\\u786E\\u5B9A\',\n        onDismiss: me.closeModal,\n        className: \'query-selector\'\n      },\n      React.createElement(\n        List,\n        null,\n        list\n      )\n    );\n  }\n});';
    },
    getData_control29_TWgJuI: function (elem) {
      if (!elem) {
        return;
      }var page = elem.querySelector('.pagination-num').value;var allPage = elem.querySelector('tbody').querySelector('tr').children[7].querySelector('span').textContent;var obj = {};obj.page = page;obj.allPage = allPage;return obj;
    },
    doAction_uiControl25_Ga28wL: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'first') {
        var ck = elem.querySelector('tbody').querySelector('tr').children[2].querySelector('a');ck.click();
      }if (type === 'prev') {
        var ck = elem.querySelector('tbody').querySelector('tr').children[3].querySelector('a');ck.click();
      }if (type === 'next') {
        var ck = elem.querySelector('tbody').querySelector('tr').children[9].querySelector('a');ck.click();
      }if (type === 'last') {
        var ck = elem.querySelector('tbody').querySelector('tr').children[10].querySelector('a');ck.click();
      }
    },
    getTemplate_uiControl25_Ga28wL: function () {
      var selfTemplate = 'const {Icon} = AMUITouch2;\nmodule.exports = React.createClass({\n  next: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'next\',\n      });\n    }\n  },\n  prev: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'prev\',\n      });\n    }\n  },\n  first: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'first\',\n      });\n    }\n  },\n  last: function(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'last\',\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var _this = this;\n    if(data.page == "0"){\n      return(\n        <div></div> \n      )\n    }\n    return (\n      <div>\n        <div className="hzx-page-box">\n          <span className="hzx-page-left">\n            <span onClick={_this.first}>|&lt;</span>\n            <span onClick={_this.prev}>&lt;</span>\n          </span>\n          <span className="hzx-page-center">\n            <span>\n              <span>\u7B2C</span>\n              <span>{data.page}</span>\n            </span>\n            <span>{data.allPage}</span>\n          </span>\n          <span className="hzx-page-right">\n            <span onClick={_this.next} >&gt;</span>\n            <span onClick={_this.last} >&gt;|</span>\n          </span>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Icon = _AMUITouch.Icon;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  next: function next(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'next\'\n      });\n    }\n  },\n  prev: function prev(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'prev\'\n      });\n    }\n  },\n  first: function first(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'first\'\n      });\n    }\n  },\n  last: function last(index) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'last\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var _this = this;\n    if (data.page == "0") {\n      return React.createElement(\'div\', null);\n    }\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { className: \'hzx-page-box\' },\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-left\' },\n          React.createElement(\n            \'span\',\n            { onClick: _this.first },\n            \'|<\'\n          ),\n          React.createElement(\n            \'span\',\n            { onClick: _this.prev },\n            \'<\'\n          )\n        ),\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-center\' },\n          React.createElement(\n            \'span\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u7B2C\'\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              data.page\n            )\n          ),\n          React.createElement(\n            \'span\',\n            null,\n            data.allPage\n          )\n        ),\n        React.createElement(\n          \'span\',\n          { className: \'hzx-page-right\' },\n          React.createElement(\n            \'span\',\n            { onClick: _this.next },\n            \'>\'\n          ),\n          React.createElement(\n            \'span\',\n            { onClick: _this.last },\n            \'>|\'\n          )\n        )\n      )\n    );\n  }\n});';
    },

    getData_control20_v12yAy: function (elem) {
      if (!elem) {
        return;
      }var head = elem.querySelector('.panel-header');if (!head) {
        return;
      }var title = elem.querySelector('.panel-header').querySelector('.panel-title').textContent;var doc = elem.querySelector('#openedDialog') && elem.querySelector('#openedDialog').querySelector('iframe').contentDocument;if (!doc) {
        return;
      }var textArea = elem.querySelector('#openedDialog').querySelector('iframe').contentDocument.querySelector('textarea') && elem.querySelector('#openedDialog').querySelector('iframe').contentDocument.querySelector('textarea');if (!textArea) {
        return;
      }var textAreaText = textArea.value;var btnTxt = elem.querySelector('.dialog-button').querySelector('.l-btn').querySelector('.l-btn-left').querySelector('.l-btn-text').textContent;var data = [];var obj = {};obj.title = title;obj.btnTxt = btnTxt;obj.textArea = textAreaText;data.push(obj);return data;
    },
    doAction_uiControl15_lB7mlt: function (data, elem) {
      var type = data.eventType;var customData = data.customData;if (type === 'value') {
        var textArea = elem.querySelector('#openedDialog').querySelector('iframe').contentDocument.querySelector('textarea');textArea.value = customData;
      } else if (type === 'click') {
        var btn = elem.querySelector('.dialog-button').querySelector('.l-btn').querySelector('.l-btn-left').querySelector('.l-btn-text');btn.click();
      } else if (type === 'close') {
        var close = elem.querySelector('.panel-tool').querySelector('.panel-tool-close');close.click();
      }
    },
    getTemplate_uiControl15_lB7mlt: function () {
      var selfTemplate = 'const{Modal,Field,ButtonGroup,Button} = AMUITouch2;\nmodule.exports = React.createClass({\n  onClick: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  onClose: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'close\'\n      });\n    }\n  },\n  onBlur: function(e) {\n    var handler = this.props.customHandler;\n    var val=e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'value\',\n        data:val\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var me = this;\n    if(data == undefined){\n      return(\n      \t<div></div>\n      )\n    }\n    var lis = data.map(function(d,i){\n    if(d.title == "\u9000\u56DE\u8FFD\u6EAF"){\n      return(<div></div>)\n    }\n      return(\n        <div style={{position:"absolute",zIndex:9999,width:"80%",background: "#fff",height:200,left:"10%",top:"30%",textAlign:"center",paddingTop:10}}>\n            <p>{d.title}</p>\n            <Field\n              value={d.textArea}\n              style={{width:"90%",marginLeft:"5%"}}\n              type="textarea"\n              onBlur={me.onBlur}\n              rows={3}\n            />\n            <div className="hzx-btn-modal">\n              <ButtonGroup justify  style={{paddingTop:33}}>\n                <Button\n                  onClick={me.onClose}\n                  hollow\n                  style={{border:"none"}}\n                >\n                  \u53D6\u6D88\n                </Button>\n                <Button\n                  amStyle="primary"\n                  onClick={me.onClick}\n                >\n                  \u63D0\u4EA4\n                </Button>\n              </ButtonGroup>\n            </div>\n        </div>\n        \n      )\n    })\n    return (\n      <div>\n      \t{lis}\n        <div className="hzx-mask"></div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _AMUITouch = AMUITouch2,\n    Modal = _AMUITouch.Modal,\n    Field = _AMUITouch.Field,\n    ButtonGroup = _AMUITouch.ButtonGroup,\n    Button = _AMUITouch.Button;\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  onClose: function onClose() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'close\'\n      });\n    }\n  },\n  onBlur: function onBlur(e) {\n    var handler = this.props.customHandler;\n    var val = e.target.value;\n    if (handler) {\n      handler({\n        eventType: \'value\',\n        data: val\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    if (data == undefined) {\n      return React.createElement(\'div\', null);\n    }\n    var lis = data.map(function (d, i) {\n      if (d.title == "\u9000\u56DE\u8FFD\u6EAF") {\n        return React.createElement(\'div\', null);\n      }\n      return React.createElement(\n        \'div\',\n        { style: { position: "absolute", zIndex: 9999, width: "80%", background: "#fff", height: 200, left: "10%", top: "30%", textAlign: "center", paddingTop: 10 } },\n        React.createElement(\n          \'p\',\n          null,\n          d.title\n        ),\n        React.createElement(Field, {\n          value: d.textArea,\n          style: { width: "90%", marginLeft: "5%" },\n          type: \'textarea\',\n          onBlur: me.onBlur,\n          rows: 3\n        }),\n        React.createElement(\n          \'div\',\n          { className: \'hzx-btn-modal\' },\n          React.createElement(\n            ButtonGroup,\n            { justify: true, style: { paddingTop: 33 } },\n            React.createElement(\n              Button,\n              {\n                onClick: me.onClose,\n                hollow: true,\n                style: { border: "none" }\n              },\n              \'\\u53D6\\u6D88\'\n            ),\n            React.createElement(\n              Button,\n              {\n                amStyle: \'primary\',\n                onClick: me.onClick\n              },\n              \'\\u63D0\\u4EA4\'\n            )\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      lis,\n      React.createElement(\'div\', { className: \'hzx-mask\' })\n    );\n  }\n});';
    }
  }, "displ_itownet");
})(window, ysp);