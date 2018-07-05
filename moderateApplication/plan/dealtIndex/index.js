(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control193_N9CBTD: function (elem) {
      if (!elem) {
        return;
      }var content = ysp.customHelper.getTableData(elem, ['流程名称', '流程编号', '内容摘要', '申请人', '停留时间', '申请日期']);var arr = ['请假申请单', '销假申请单', '离职申请单', '加班申请单', '因公外出申请单', '考勤异常申请单', '员工异动申请单', '招聘申请单', '员工合同续签申请单', '试用期转正申请单', '录用入职申请单', '培训申请单', '人才盘点信息表', '资产预算调整流程', '资产预算调整流程V2', '信用冻结订单释放申请流程', '资产类预算外申请流程V2', '借款/预付款申请单', '资产处理申请单', '差旅费用报销流程', '费用报销流程', '路线新增流程', '路线变更流程', '客资/送大方/销售人员.路线批量审批', '市场用品采购流程', '总部合同审批流程', '用印申请流程', '合同审批流程', '客资批量审批', '送达方批量审批', '路线批量审批'];var data = ysp.customHelper.getDatamove(content, arr);content.content = data.data;content.index = data.index;return content;
    },
    doAction_uiControl193_bw3nWM: function (data, elem) {
      var type = data.eventType,
          data = +data.customData;if (type == 'td_click') {
        data = ++data;elem.querySelectorAll('tr')[data].querySelector('a').click();
      }
    },
    getTemplate_uiControl193_bw3nWM: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,data={};\n    \n    //\u70B9\u51FB\u4E8B\u4EF6   \u70B9\u51FB\u8FDB\u5165\u8BE6\u60C5\u9875\n    if(target.tagName.toLowerCase() == \'div\'){\n      type=\'td_click\';\n      data = target.getAttribute(\'data-id\');\n    }\n    \n    \n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  onclick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    //\u5224\u65AD\u662F\u5426\u4E3A\u4E0B\u5566\u6309\u94AE   \u6539\u53D8\u9690\u85CF\u7684\u5143\u7D20display\n    if(target.getAttribute(\'data-id\') == \'true\'){\n      // target = (target.tagName.toLowerCase() == \'span\')? target.parentElement:target;\n      target.setAttribute(\'data-id\',\'false\');\n      target.style.transform = \'translateY(-13px) rotate(45deg)\';\n      target.parentElement.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'data-id\',\'true\');\n      target.style.transform = \'translateY(3px) rotate(45deg)\';\n      target.parentElement.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'none\';\n    }\n    if(handler){\n      handler({\n        type:\'tag\',\n        data:target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n    \t\t_this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className=\'Content\'>\n        \t<div className=\'Content_item\' onClick={_this.onClick} data-id={data.index[index]}>\n            {ele[0]}</div>\n          <div className=\'Content_item\'><p>{data.titles[1]}</p><p>{ele[1]}</p></div>\n          <div className=\'Content_item\'>\n            <p>{data.titles[3]}</p><p>{ele[3]}</p><a className=\'distab\' href=\'javascript:;\' ><span data-id=\'true\' onClick={_this.onclick} ></span></a></div>\n          <div data-id={index} className=\'Content_disnone\'>\n          \t<div id=\'summary\'>\n            \t<div>{data.titles[2]}</div>\n              <div>{ele[2]}</div>\n            </div>\n            <div>\n            \t<div>{data.titles[4]}</div>\n              <div>{ele[4]}</div>\n            </div>\n            <div>\n            \t<div>{data.titles[5]}</div>\n              <div>{ele[5]}</div>\n            </div>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div>\n        {lis}\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data = {};\n\n    //\u70B9\u51FB\u4E8B\u4EF6   \u70B9\u51FB\u8FDB\u5165\u8BE6\u60C5\u9875\n    if (target.tagName.toLowerCase() == 'div') {\n      type = 'td_click';\n      data = target.getAttribute('data-id');\n    }\n\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    //\u5224\u65AD\u662F\u5426\u4E3A\u4E0B\u5566\u6309\u94AE   \u6539\u53D8\u9690\u85CF\u7684\u5143\u7D20display\n    if (target.getAttribute('data-id') == 'true') {\n      // target = (target.tagName.toLowerCase() == 'span')? target.parentElement:target;\n      target.setAttribute('data-id', 'false');\n      target.style.transform = 'translateY(-13px) rotate(45deg)';\n      target.parentElement.parentElement.parentElement.querySelector('div.Content_disnone').style.display = 'block';\n    } else {\n      target.setAttribute('data-id', 'true');\n      target.style.transform = 'translateY(3px) rotate(45deg)';\n      target.parentElement.parentElement.parentElement.querySelector('div.Content_disnone').style.display = 'none';\n    }\n    if (handler) {\n      handler({\n        type: 'tag',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'Content' },\n        React.createElement(\n          'div',\n          { className: 'Content_item', onClick: _this.onClick, 'data-id': data.index[index] },\n          ele[0]\n        ),\n        React.createElement(\n          'div',\n          { className: 'Content_item' },\n          React.createElement(\n            'p',\n            null,\n            data.titles[1]\n          ),\n          React.createElement(\n            'p',\n            null,\n            ele[1]\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'Content_item' },\n          React.createElement(\n            'p',\n            null,\n            data.titles[3]\n          ),\n          React.createElement(\n            'p',\n            null,\n            ele[3]\n          ),\n          React.createElement(\n            'a',\n            { className: 'distab', href: 'javascript:;' },\n            React.createElement('span', { 'data-id': 'true', onClick: _this.onclick })\n          )\n        ),\n        React.createElement(\n          'div',\n          { 'data-id': index, className: 'Content_disnone' },\n          React.createElement(\n            'div',\n            { id: 'summary' },\n            React.createElement(\n              'div',\n              null,\n              data.titles[2]\n            ),\n            React.createElement(\n              'div',\n              null,\n              ele[2]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              data.titles[4]\n            ),\n            React.createElement(\n              'div',\n              null,\n              ele[4]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              null,\n              data.titles[5]\n            ),\n            React.createElement(\n              'div',\n              null,\n              ele[5]\n            )\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      null,\n      lis\n    );\n  }\n});";
    },
    getData_control194_rkfuKp: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl194_iLZaeH: function (data, elem) {
      if ("back" == data.eventType) {
        ysp.appMain.back(); //ysp.runtime.Model.setForceMatchModels(['commission']);
      }
    },
    getTemplate_uiControl194_iLZaeH: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  back:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'back\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\'titleH1\'>\n          <Header title="\u5F85\u529E">\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={this.back.bind(this)}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nvar _appRenderer = require(\'appRenderer\');\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'back\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \'div\',\n      { className: \'titleH1\' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: \'\\u5F85\\u529E\' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\'span\', null),\n          React.createElement(\n            \'button\',\n            { onClick: this.back.bind(this) },\n            \'\\u8FD4\\u56DE\'\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control123_7z5oV6: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.content = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
        data.content.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
      }return data;
    },
    doAction_uiControl123_ScHZwa: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'click') {
        if (data == 'prev' || 'next') {
          if (data == 'prev') {
            var childrens = elem.children;for (var i = 0; i < childrens.length; i++) {
              if (childrens[i].className == 'cpb') {
                if (i != 1) {
                  childrens[i - 1].click();
                } else {
                  alert('已经到首页了');
                }
              }
            }
          } else {
            var childrens = elem.children;for (var i = 0; i < childrens.length; i++) {
              if (childrens[i].className == 'cpb') {
                if (i != childrens.length - 1) {
                  childrens[i + 1].click();
                } else {
                  alert('已经到末页了');
                }
              }
            }
          }
        } else {
          data = +data;elem.children[data].click();
        }
      }
    },
    getTemplate_uiControl123_ScHZwa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var str = \'<\',kr = \'|<\',\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index!=0&&index!=data.content.length-1){\n        return(\n        \t<li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n        )\n      }\n    })\n    return (\n      <div className=\'footerbtn\'>\n        <ul>\n          <li data-id={0} onClick={_this.onClick}>{kr}</li>\n          <li data-id=\'prev\' onClick={_this.onClick}>{str}</li>\n          {lis}\n          <li data-id=\'next\' onClick={_this.onClick}>></li>\n          <li data-id={data.content.length-1} onClick={_this.onClick}>>|</li>\n        </ul>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: target.getAttribute(\'data-id\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var str = \'<\',\n        kr = \'|<\',\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index != 0 && index != data.content.length - 1) {\n        return React.createElement(\n          \'li\',\n          { \'data-id\': index, onClick: _this.onClick, className: ele.class },\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'footerbtn\' },\n      React.createElement(\n        \'ul\',\n        null,\n        React.createElement(\n          \'li\',\n          { \'data-id\': 0, onClick: _this.onClick },\n          kr\n        ),\n        React.createElement(\n          \'li\',\n          { \'data-id\': \'prev\', onClick: _this.onClick },\n          str\n        ),\n        lis,\n        React.createElement(\n          \'li\',\n          { \'data-id\': \'next\', onClick: _this.onClick },\n          \'>\'\n        ),\n        React.createElement(\n          \'li\',\n          { \'data-id\': data.content.length - 1, onClick: _this.onClick },\n          \'>|\'\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);