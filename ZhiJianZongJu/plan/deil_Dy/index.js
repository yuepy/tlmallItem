(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1_6CTSeZ: function (elem) {
      if (!elem) return;var data = {};data.content = [];var divs = elem.children;for (var i = 0; i < divs.length; i++) {
        if (divs[i].textContent != '' || divs[i].querySelector('img')) {
          var obj = { imgs: [], text: [] };if (divs[i].querySelector('img')) {
            var imgs = divs[i].querySelectorAll('img');for (var k = 0; k < imgs.length; k++) {
              obj.imgs.push(imgs[k].src);
            }obj.flat = 'img';
          } else if (divs[i].querySelector('h1')) {
            data.titles = divs[i].querySelector('h1').textContent.trim();
          } else if (divs[i].querySelector('table')) {
            //获取table表格内部的数据
            obj.flat = 'table';obj.contenttable = ysp.customHelper.getTableText(divs[i].querySelector('table'));
          } else {
            obj.text = divs[i].textContent.trim();
          }if (obj.text.indexOf('创建时间') != -1) {
            data.foots = divs[i].textContent.trim();
          }if (!divs[i].querySelector('h1') && divs[i].textContent.indexOf('创建时间') == -1) {
            data.content.push(obj);
          }
        }
      }return data;
    },
    doAction_uiControl1_VoxhiB: function (data, elem) {},
    getTemplate_uiControl1_VoxhiB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      if(ele.flat == \'img\'){\n        return(\n        \t<div>\n          \t{\n              ele.imgs.map(function(d,i){\n                return(<img src={d}></img>)\n              })\n            }\n            {\n              ele.text.map(function(d,i){\n                return(<p>{d}</p>)\n              })\n            }\n          </div>\n        )\n      } else if(ele.flat == \'table\'){\n        return(\n          <div>\n            <table style={{\'width\':\'100%\'}} border="1">\n              <thead>\n                {\n                  ele.contenttable.th.map(function(d,i){\n                    return(<th style={{\'text-align\':\'center\'}}>{d}</th>)\n                  })\n                }\n              </thead>\n              <tbody>\n                {\n                  ele.contenttable.tr.map(function(d,i){\n                    return(\n                      <tr>\n                        {\n                          d.map(function(dd,ii){\n                            return(<td style={{\'text-align\':\'center\'}}>{dd}</td>)\n                          })\n                        }\n                      </tr>\n                    )\n                  })\n                }\n              </tbody>\n            </table>\n            {\n              ele.text.map(function(d,i){\n                return(<p>{d}</p>)\n              })\n            }\n          </div>\n        )\n      }else{\n      \treturn(<p>{ele.text}</p>)\n      }\n    })\n    return (\n      <div className=\'Dy_deil\'>\n        <div className=\'deilTitle\'><h1>{data.titles}</h1></div>\n        <div className=\'deilContent\'>{lis}</div>\n        <div className=\'deilFoot\'>{data.foots}</div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      if (ele.flat == \'img\') {\n        return React.createElement(\n          \'div\',\n          null,\n          ele.imgs.map(function (d, i) {\n            return React.createElement(\'img\', { src: d });\n          }),\n          ele.text.map(function (d, i) {\n            return React.createElement(\n              \'p\',\n              null,\n              d\n            );\n          })\n        );\n      } else if (ele.flat == \'table\') {\n        return React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'table\',\n            { style: { \'width\': \'100%\' }, border: \'1\' },\n            React.createElement(\n              \'thead\',\n              null,\n              ele.contenttable.th.map(function (d, i) {\n                return React.createElement(\n                  \'th\',\n                  { style: { \'text-align\': \'center\' } },\n                  d\n                );\n              })\n            ),\n            React.createElement(\n              \'tbody\',\n              null,\n              ele.contenttable.tr.map(function (d, i) {\n                return React.createElement(\n                  \'tr\',\n                  null,\n                  d.map(function (dd, ii) {\n                    return React.createElement(\n                      \'td\',\n                      { style: { \'text-align\': \'center\' } },\n                      dd\n                    );\n                  })\n                );\n              })\n            )\n          ),\n          ele.text.map(function (d, i) {\n            return React.createElement(\n              \'p\',\n              null,\n              d\n            );\n          })\n        );\n      } else {\n        return React.createElement(\n          \'p\',\n          null,\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'Dy_deil\' },\n      React.createElement(\n        \'div\',\n        { className: \'deilTitle\' },\n        React.createElement(\n          \'h1\',\n          null,\n          data.titles\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'deilContent\' },\n        lis\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'deilFoot\' },\n        data.foots\n      )\n    );\n  }\n});';
    },
    getData_control2_pX2Dki: function (elem) {},
    doAction_uiControl2_7w0M92: function (data, elem) {},
    getTemplate_uiControl2_7w0M92: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nexport default () =>\n<Header amStyle=\"primary\" title=\"\u5F85\u9605\u6D88\u606F\">\n  <HeaderLeft>\n    <button onClick={back}>\u8FD4\u56DE</button>\n  </HeaderLeft>\n</Header>;";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nexports.default = function () {\n  return React.createElement(\n    _yspInteriorComponents.Header,\n    { amStyle: 'primary', title: '\\u5F85\\u9605\\u6D88\\u606F' },\n    React.createElement(\n      _yspInteriorComponents.HeaderLeft,\n      null,\n      React.createElement(\n        'button',\n        { onClick: _appRenderer.back },\n        '\\u8FD4\\u56DE'\n      )\n    )\n  );\n};";
    }
  }, "deil_Dy");
})(window, ysp);