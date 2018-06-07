(function(win, ysp) {
    ysp.runtime.Model.extendLoadingModel({
        getData_control12_mTTkVE: function(elem) {},
        doAction_uiControl12_QX7c7e: function(data, elem) {
            if (data.eventType == 'back') {
                ysp.appMain.back();
            }
        },
        getTemplate_uiControl12_QX7c7e: function() {
            var selfTemplate = "import {Component} from 'react';\nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var _this=this;\n    return (\n    \t\t<div>\n      \t\t\t<CustomHeader data={{centerText:'\u6211\u7684\u4FE1\u606F',rightText:''}} backIsShow={true} back={()=>{\n            let handler=_this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:'back'\n              })\n            }\n            \n            \n            \n          }}></CustomHeader>\n        \t\t<div style={{height:'2.7rem'}}></div>\n      </div>\n    )\n  }\n}";
            return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, { data: { centerText: '\u6211\u7684\u4FE1\u606F', rightText: '' }, backIsShow: true, back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          } }),\n        React.createElement('div', { style: { height: '2.7rem' } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
        },
        getData_control15_TT4EPb: function(elem) {
            if (!elem) {
                return;
            }
            var data = {};
            if (elem) {
                var trs = elem.querySelectorAll('tr');
                var trsLen = trs.length;
                for (var i = 0; i < trsLen; i++) {
                    if (i == 1) {
                        data.name = trs[i].querySelectorAll('td')[1].textContent;
                        data.sex = trs[i].querySelectorAll('td')[2].textContent;
                        data.sexCon = trs[i].querySelectorAll('td')[3].textContent;
                        if (trs[i].querySelector('img')) {
                            data.src = trs[i].querySelector('img').getAttribute('src');
                        } else {
                            return '';
                        }
                    }
                    if (i == 2) {
                        data.birth = trs[i].querySelectorAll('td')[0].textContent;
                        data.birthCon = trs[i].querySelectorAll('td')[1].textContent;
                    }
                }
            }
            return data;
        },
        doAction_uiControl16_pvBLnV: function(data, elem) {},
        getTemplate_uiControl16_pvBLnV: function() {
            var selfTemplate = "module.exports = React.createClass({\n  render: function() {    \n    var data=this.props.customData||[];\n    var _this=this;\n    var src=\"http://192.168.220.110\"+data.src;\n    return (\n      <div className=\"ysp-baseInfo-tt\">\n        <div className='ysp-baseInfoPhoto-tt'><h5>{data.name}</h5><img style={{width:'80px',height:'80px', borderRadius:'50%'}} src={src}/></div>\n        <p><span>{data.sex}\uFF1A</span><span>{data.sexCon}</span></p>\n        <p><span>{data.birth}\uFF1A</span><span>{data.birthCon}</span></p>\n      </div>\n    )\n  }\n});";
            return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    var src = \"http://192.168.220.110\" + data.src;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-baseInfo-tt\" },\n      React.createElement(\n        \"div\",\n        { className: \"ysp-baseInfoPhoto-tt\" },\n        React.createElement(\n          \"h5\",\n          null,\n          data.name\n        ),\n        React.createElement(\"img\", { style: { width: '80px', height: '80px', borderRadius: '50%' }, src: src })\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.sex,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.sexCon\n        )\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        React.createElement(\n          \"span\",\n          null,\n          data.birth,\n          \"\\uFF1A\"\n        ),\n        React.createElement(\n          \"span\",\n          null,\n          data.birthCon\n        )\n      )\n    );\n  }\n});";
        },

        getData_control18_ysLBGm: function(elem) {
            if (!elem) {
                return;
            }
        },
        doAction_uiControl19_3GFMBU: function(data, elem) {
            if (data.eventType == "click") {
                var txt = data.dataCustom[1];
                var tag = data.dataCustom[0];
                var nextTxt = data.dataCustom[2]; // debugger;
                // console.log(txt);
                // console.log(tag);
                // console.log(nextTxt);
                //debugger;
                var param = elem.querySelector('td#selected').nextElementSibling.querySelector('a').getAttribute('href').split(/,/)[0].split(/\(/)[1].split(/\./)[1]; //console.log(elem.ownerDocument.querySelector("form[name=" + param + "]"));
                if (tag == 'P') {
                    if (txt == '家庭成员') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#28');
                    } else if (txt == '银行账户') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#30');
                    } else if (txt == '其他信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#14');
                    } else if (txt == '基本信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#10');
                    } else if (txt == '联系信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#12');
                    } else if (txt == '任职信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#16');
                    } else if (txt == '内部发展信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#18');
                    } else if (txt == '合同信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#22');
                    } else if (txt == '教育经历') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#24');
                    }
                } else if (tag == 'I') {
                    if (nextTxt == '家庭成员') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#28');
                    } else if (nextTxt == '银行账户') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#30');
                    } else if (nextTxt == '其他信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#14');
                    } else if (nextTxt == '基本信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#10');
                    } else if (nextTxt == '联系信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#12');
                    } else if (nextTxt == '任职信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#16');
                    } else if (nextTxt == '内部发展信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#18');
                    } else if (nextTxt == '合同信息') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#22');
                    } else if (nextTxt == '教育经历') {
                        elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#24');
                    }
                }
            }
        },
        getTemplate_uiControl19_3GFMBU: function() {
            var selfTemplate = "module.exports = React.createClass({\n  onclick:function(e){    \n    var target=e.target;\n    var handler=this.props.customHandler;\n    // top.click1Status=true; \n    //sessionStorage.setItem(\"clickStatus\",true);\n    if(handler){\n      handler({\n        eventType:'click',\n        data:[target.tagName,target.textContent,target.getAttribute('data-val')]\n      })\n    }\n    e.target.ownerDocument.querySelector(\".ysp-infoZhezhao-tt\").style.display=\"block\"\n  },\n  render: function() {\n    var _this=this;\n    var data=['\u57FA\u672C\u4FE1\u606F','\u8054\u7CFB\u4FE1\u606F','\u4EFB\u804C\u4FE1\u606F','\u5185\u90E8\u53D1\u5C55\u4FE1\u606F','\u5408\u540C\u4FE1\u606F','\u6559\u80B2\u7ECF\u5386','\u5BB6\u5EAD\u6210\u5458','\u94F6\u884C\u8D26\u6237','\u5176\u4ED6\u4FE1\u606F'];\n    var list=data.map(function(d,i){\n      return (\n      \t\t<div onClick={_this.onclick}>\n        \t\t\t<i data-val={d}></i>\n          \t\t<p>{d}</p>\n        </div>\n      )\n    })\n    return (\n      <div className='ysp-baseInfo-detail'>\n        <div className='ysp-baseInfo-title'>\u8BE6\u7EC6\u4FE1\u606F</div>\n        <div className='ysp-baseInfo-detailList'>\n        \t\t{list}\n        </div>\n      </div>\n    )\n  }\n});";
            return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclick: function onclick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    // top.click1Status=true; \n    //sessionStorage.setItem(\"clickStatus\",true);\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: [target.tagName, target.textContent, target.getAttribute('data-val')]\n      });\n    }\n    e.target.ownerDocument.querySelector(\".ysp-infoZhezhao-tt\").style.display = \"block\";\n  },\n  render: function render() {\n    var _this = this;\n    var data = ['\u57FA\u672C\u4FE1\u606F', '\u8054\u7CFB\u4FE1\u606F', '\u4EFB\u804C\u4FE1\u606F', '\u5185\u90E8\u53D1\u5C55\u4FE1\u606F', '\u5408\u540C\u4FE1\u606F', '\u6559\u80B2\u7ECF\u5386', '\u5BB6\u5EAD\u6210\u5458', '\u94F6\u884C\u8D26\u6237', '\u5176\u4ED6\u4FE1\u606F'];\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        'div',\n        { onClick: _this.onclick },\n        React.createElement('i', { 'data-val': d }),\n        React.createElement(\n          'p',\n          null,\n          d\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-baseInfo-detail' },\n      React.createElement(\n        'div',\n        { className: 'ysp-baseInfo-title' },\n        '\\u8BE6\\u7EC6\\u4FE1\\u606F'\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-baseInfo-detailList' },\n        list\n      )\n    );\n  }\n});";
        },
        getData_control20_rAKl6w: function(elem) {
            // console.log(elem);
            if (!elem) {
                return;
            }
            if (elem) {
                var data = {};
                data.tbId = elem.querySelector('table').getAttribute('id');
                data.content = [];
                data.title = [];
                if (data.tbId == 'DEV' || data.tbId == 'CONTRACT' || data.tbId == 'FAMILY' || data.tbId == 'EDU' || data.tbId == 'BANK') {
                    data.titleBar = "内部发展信息";
                    var trs = elem.querySelector('table').querySelectorAll('tr');
                    for (var i = 0; i < trs.length; i++) {
                        //标题
                        if (i == 1) {
                            var tds = trs[i].querySelectorAll('td');
                            for (var j = 0; j < tds.length; j++) {
                                data.title.push(tds[j].textContent);
                            }
                        } //内容
                        var arr = [];
                        if (i > 1) {
                            var tds = trs[i].querySelectorAll('td');
                            for (var z = 0; z < tds.length; z++) {
                                arr.push(tds[z].textContent);
                            }
                            data.content.push(arr);
                        }
                    }
                } else if (data.tbId == 'BASE') {
                    data.titleBar = "基本信息";
                    var trs = elem.querySelector('table').querySelectorAll('tr');
                    for (var i = 1; i < trs.length; i++) {
                        var arr = [];
                        var tds = trs[i].querySelectorAll('td');
                        for (var z = 0; z < tds.length; z++) {
                            arr.push(tds[z].textContent);
                        }
                        data.content.push(arr);
                    }
                } else if (data.tbId == 'CARD') {
                    data.titleBar = "联系信息";
                    var tbs = elem.querySelectorAll('table');
                    for (var k = 0; k < tbs.length; k++) {
                        var arr = [];
                        if (k == 0) {
                            var trs = tbs[k].querySelectorAll('tr');
                            for (var m = 1; m < trs.length; m++) {
                                var arrTr = [];
                                var tds = trs[m].querySelectorAll('td');
                                for (var n = 0; n < tds.length; n++) {
                                    arrTr.push(tds[n].textContent);
                                }
                                arr.push(arrTr);
                            }
                            data.content.push(arr);
                        } else if (k > 0) {
                            var trs = tbs[k].querySelectorAll('tr');
                            for (var m = 2; m < trs.length; m++) {
                                var arrTr = [];
                                var tds = trs[m].querySelectorAll('td');
                                for (var n = 0; n < tds.length; n++) {
                                    arrTr.push(tds[n].textContent);
                                }
                                arr.push(arrTr);
                            }
                            data.content.push(arr);
                        }
                    }
                }
                if (data.tbId == 'CONTRACT') {
                    data.titleBar = "合同信息";
                }
                if (data.tbId == 'FAMILY') {
                    data.titleBar = "家庭成员";
                }
                if (data.tbId == 'EDU') {
                    data.titleBar = "教育经历";
                }
                if (data.tbId == 'BANK') {
                    data.titleBar = "银行账户";
                }
                return data;
            }
        },
        doAction_uiControl20_MuwVGq: function(data, elem) {
            if (data.eventType == 'back') {
                // debugger;
                var param = elem.ownerDocument.querySelector('#PSTABNBO').querySelector('tr').querySelector('td#selected').nextElementSibling.querySelector('a').getAttribute('href').split(/,/)[0].split(/\(/)[1].split(/\./)[1];
                elem.ownerDocument.defaultView.submitAction_RBET(elem.ownerDocument.querySelector("form[name=" + param + "]"), 'TAB_BUTTON_ID', 'HPS_RSM_TAB_DTL#10');
            } else if (data.eventType == 'filter') {}
        },
        getTemplate_uiControl20_MuwVGq: function() {
            var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{  \n  render () {\t\t\n    var _this=this;\n    var data=this.props.customData; \n   \tvar titleBar=data.titleBar;\n    if(data.tbId=='DEV'){\n      var list=data.content.map(function(d,i){\n        return (\n            <div className='ysp-infoContentlist1-tt'>\n              <p><span>{d[0].replace(/-/g,'/')}</span><span>-</span><span>{d[1].replace(/-/g,'/')}</span></p>\n              <p><span>{d[3]}</span></p>\n              <p><span>{data.title[4]}</span><span>{d[4]}</span></p>\n              <p><span>{data.title[5]}</span><span>{d[5]}</span></p>\n          </div>\n        )\n      })\n    }else if(data.tbId=='CONTRACT'){\n      var list=data.content.map(function(d,i){\n        return (\n        \t\t<div className='ysp-infoContentlist2-tt'>\n          \t\t\t<p><span>{d[0].replace(/-/g,'/')}</span><span>-</span><span>{d[1].replace(/-/g,'/')}</span> <i className={d[2]=='\u6267\u884C\u5B8C'?'fcgray':'fcblue'}>{d[2]}</i></p>\n            <p><span>{data.title[3]}</span><span>{d[3]}</span></p>\n            <p><span>{data.title[4]}</span><span>{d[4]}</span></p>\n            <p><span>{data.title[5]}</span><span>{d[5]}</span></p>\n          \t</div>\n        )\n      })\n    }else if(data.tbId=='FAMILY'){\n      var list=data.content.map(function(d,i){\n        return (\n        \t\t<div className='ysp-infoContentlist3-tt'>\n            <p><span>{d[0]}</span><span>(</span><span>{d[1]}</span><span>)</span><i className={d[2]=='\u662F'?'fcblue':''}>{d[2]=='\u662F'?\"\u7D27\u6025\u8054\u7CFB\u4EBA\":''}</i></p>\n            <p><span>{data.title[3]}</span><span>{d[3]}</span></p>\n          \t<p><span>{data.title[4]}</span><span>{d[4]}</span></p>\n            <p><span>{data.title[5]}</span><span>{d[5]}</span></p>\n          \t</div>\n        )\n      })\n    }else if(data.tbId=='EDU'){\n      var list=data.content.map(function(d,i){\n        return (\n        \t\t<div className='ysp-infoContentlist4-tt'>\n            <p><span>{d[0].replace(/-/g,'/')}</span><span>-</span><span>{d[1].replace(/-/g,'/')}</span></p>\n            <p><span>{data.title[2]}</span><span>{d[2]}</span></p>\n            <p><span>{data.title[3]}</span><span>{d[3]}</span></p>\n          \t<p><span>{data.title[4]}</span><span>{d[4]}</span></p>\n            <p><span>{data.title[5]}</span><span>{d[5]}</span></p>\n             <p><span>{data.title[6]}</span><span>{d[6]}</span></p>\n          \t</div>\n        )\n      })\n    }else if(data.tbId=='BANK'){\n      var list=data.content.map(function(d,i){\n        return (\n        \t\t<div className='ysp-infoContentlist5-tt'>           \n            <p><span>{data.title[0]}</span><span>{d[0]}</span></p>\n            <p><span>{data.title[1]}</span><span>{d[1]}</span></p>\n          \t<p><span>{data.title[2]}</span><span>{d[2]}</span></p>\n            <p><span>{data.title[3]}</span><span>{d[3]}</span></p>\n            <p><span>{data.title[4]}</span><span>{d[4]}</span></p>           \n          \t</div>\n        )\n      })\n    }else if(data.tbId=='BASE'){\n      var list=data.content.map(function(d,i){\n         if(i>0){\n           \treturn (\n                <div className='ysp-infoContentlist6-tt'>\n                    <p><span>{d[0]}</span><span>{d[1]}</span></p>\n                \t\t<p><span>{d[2]}</span><span>{d[3]}</span></p>\n                </div>\n            )\n         }\n        \n      })\n    }else if(data.tbId=='CARD'){      \n      var list=data.content.map(function(d,i){\n        if(i=0){\n          \treturn (\n            \t<div>\n              \t\t<span>{d[0][0]}</span>\n              </div>\n            )\n        }else if(i==1){\n          \n        }else if(i==2){\n          \n        }else if(i==3){\n          \n        }\n        \n        return(\n        \t<div></div>\n        )\n      \t\n        \t\n        \n      })\n    }\n    \n   \n    return(\n      <div className='ysp-infoZhezhao-tt'>\n        <div className='ysp-infoBig-tt'>\n        \t\t<CustomHeader \n             data={{centerText:titleBar,rightText:'\u7F16\u8F91'}} \n             backIsShow={true} \n             back={(e)=>{ \n                let handler = _this.props.customHandler;\n              if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n                e.target.ownerDocument.querySelector(\".ysp-infoZhezhao-tt\").style.display=\"none\"\n             }} \n             filterIsShow={data.tbId=='DEV'|| data.tbId=='CONTRACT' || data.tbId=='CARD' || data.tbId=='BANK'|| data.tbId=='EDU' || data.tbId=='FAMILY'?false:true}\n             filter={()=>{\n                let handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'filter'\n                  });\n                }\n             }}\n          />\n          <div style={{height:\"2.7rem\"}}></div>\n        <div className='ysp-infoContent-tt'>\n           {list}\n            \n          </div>\n        </div>\n          \n      </div>\n      )\n    }\n}";
            return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      var titleBar = data.titleBar;\n      if (data.tbId == 'DEV') {\n        var list = data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-infoContentlist1-tt' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0].replace(/-/g, '/')\n              ),\n              React.createElement(\n                'span',\n                null,\n                '-'\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1].replace(/-/g, '/')\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            )\n          );\n        });\n      } else if (data.tbId == 'CONTRACT') {\n        var list = data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-infoContentlist2-tt' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0].replace(/-/g, '/')\n              ),\n              React.createElement(\n                'span',\n                null,\n                '-'\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1].replace(/-/g, '/')\n              ),\n              ' ',\n              React.createElement(\n                'i',\n                { className: d[2] == '\u6267\u884C\u5B8C' ? 'fcgray' : 'fcblue' },\n                d[2]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[3]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            )\n          );\n        });\n      } else if (data.tbId == 'FAMILY') {\n        var list = data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-infoContentlist3-tt' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                '('\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              ),\n              React.createElement(\n                'span',\n                null,\n                ')'\n              ),\n              React.createElement(\n                'i',\n                { className: d[2] == '\u662F' ? 'fcblue' : '' },\n                d[2] == '\u662F' ? \"\u7D27\u6025\u8054\u7CFB\u4EBA\" : ''\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[3]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            )\n          );\n        });\n      } else if (data.tbId == 'EDU') {\n        var list = data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-infoContentlist4-tt' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0].replace(/-/g, '/')\n              ),\n              React.createElement(\n                'span',\n                null,\n                '-'\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1].replace(/-/g, '/')\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[3]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[5]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[5]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[6]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[6]\n              )\n            )\n          );\n        });\n      } else if (data.tbId == 'BANK') {\n        var list = data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-infoContentlist5-tt' },\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[0]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[0]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[1]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[1]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[2]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[3]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              'p',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[4]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d[4]\n              )\n            )\n          );\n        });\n      } else if (data.tbId == 'BASE') {\n        var list = data.content.map(function (d, i) {\n          if (i > 0) {\n            return React.createElement(\n              'div',\n              { className: 'ysp-infoContentlist6-tt' },\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  d[0]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d[1]\n                )\n              ),\n              React.createElement(\n                'p',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  d[2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d[3]\n                )\n              )\n            );\n          }\n        });\n      } else if (data.tbId == 'CARD') {\n        var list = data.content.map(function (d, i) {\n          if (i = 0) {\n            return React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                d[0][0]\n              )\n            );\n          } else if (i == 1) {} else if (i == 2) {} else if (i == 3) {}\n\n          return React.createElement('div', null);\n        });\n      }\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-infoZhezhao-tt' },\n        React.createElement(\n          'div',\n          { className: 'ysp-infoBig-tt' },\n          React.createElement(_yspCustomComponents.CustomHeader, {\n            data: { centerText: titleBar, rightText: '\u7F16\u8F91' },\n            backIsShow: true,\n            back: function back(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n              e.target.ownerDocument.querySelector(\".ysp-infoZhezhao-tt\").style.display = \"none\";\n            },\n            filterIsShow: data.tbId == 'DEV' || data.tbId == 'CONTRACT' || data.tbId == 'CARD' || data.tbId == 'BANK' || data.tbId == 'EDU' || data.tbId == 'FAMILY' ? false : true,\n            filter: function filter() {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'filter'\n                });\n              }\n            }\n          }),\n          React.createElement('div', { style: { height: \"2.7rem\" } }),\n          React.createElement(\n            'div',\n            { className: 'ysp-infoContent-tt' },\n            list\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
        },
        getData_undefined: function(elem) {},
        doAction_uiControl17_xvQ3Mh: function(data, elem) {},
        getTemplate_uiControl17_xvQ3Mh: function() {
            var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});";
            return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91\"\n    );\n  }\n});";
        }
    }, "employeeInfo");
})(window, ysp);