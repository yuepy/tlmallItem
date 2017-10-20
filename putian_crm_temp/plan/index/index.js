(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control70_HXOugN: function (elem) {},
    doAction_uiControl7_PK55F4: function (data, elem) {
      if (data.eventType === 'click') {
        //两种策略
        //1.如果在a标签找到，则触发，否则
        //2.在select中找到点击对象进行触发
        var operation = data.dataCustom;var aEls = elem.querySelectorAll("li a");[].forEach.call(aEls, function (item, index) {
          if (item && item.textContent == operation) {
            item.click();return;
          }
        });var selectEl = elem.querySelector("select");
        var optionEls = selectEl.options;[].forEach.call(optionEls, function (item, index) {
          if (item && item.textContent == operation) {
            selectEl.selectedIndex = index;if (selectEl.onchange) {
              selectEl.onchange();
            } else if (selectEl.dispatchEvent) {
              selectEl.dispatchEvent(new Event('change'));
            } else {
              selectEl.dispatchEvent(new MouseEvent('click', { view: selectEl.defaultView, bubbles: true, cancelable: true }));
            }return;
          }
        });
      }
    },
    getTemplate_uiControl7_PK55F4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6B63\u5728\u52A0\u8F7D\u4E2D\n      {false &&\n      \n            <div>\n              <span style={{display:'block',marginBottom:'20px',textAlign:'center',width:'100%'}}\n            onClick={(e)=>{\n            var handler = this.props.customHandler;\n            if (handler) {\n              handler({\n                data:e.target.dataset.type,\n                eventType: 'click'\n              });\n            }\n            }} data-type=\"\u62DC\u8BBF\u7BA1\u7406\">\u5BA2\u6237\u62DC\u8BBF</span>\n          <span\n            onClick={(e)=>{\n            var handler = this.props.customHandler;\n            if (handler) {\n              handler({\n                data:e.target.dataset.type,\n                eventType: 'click'\n              });\n            }\n            }} data-type=\"\u4FE1\u606F\u534F\u540C\">\u4FE1\u606F\u534F\u540C</span>\n            <span style={{display:'block',marginBottom:'20px',textAlign:'center',width:'100%'}}\n            onClick={(e)=>{\n            var handler = this.props.customHandler;\n            if (handler) {\n              handler({\n                data:e.target.dataset.type,\n                eventType: 'click'\n              });\n            }\n            }} data-type=\"\u4FE1\u606F\u5F55\u5165\">\u4FE1\u606F\u5F55\u5165</span>\n            </div>\n      }  \n     </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      null,\n      '\\u6B63\\u5728\\u52A0\\u8F7D\\u4E2D',\n      false && React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          { style: { display: 'block', marginBottom: '20px', textAlign: 'center', width: '100%' },\n            onClick: function onClick(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: e.target.dataset.type,\n                  eventType: 'click'\n                });\n              }\n            }, 'data-type': '\\u62DC\\u8BBF\\u7BA1\\u7406' },\n          '\\u5BA2\\u6237\\u62DC\\u8BBF'\n        ),\n        React.createElement(\n          'span',\n          {\n            onClick: function onClick(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: e.target.dataset.type,\n                  eventType: 'click'\n                });\n              }\n            }, 'data-type': '\\u4FE1\\u606F\\u534F\\u540C' },\n          '\\u4FE1\\u606F\\u534F\\u540C'\n        ),\n        React.createElement(\n          'span',\n          { style: { display: 'block', marginBottom: '20px', textAlign: 'center', width: '100%' },\n            onClick: function onClick(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: e.target.dataset.type,\n                  eventType: 'click'\n                });\n              }\n            }, 'data-type': '\\u4FE1\\u606F\\u5F55\\u5165' },\n          '\\u4FE1\\u606F\\u5F55\\u5165'\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);