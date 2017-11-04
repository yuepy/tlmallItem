(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control63_TDtQ9K: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem.querySelector('#Tree_treeView_0') && elem.querySelector('#Tree_treeView_0').querySelector('div')) {
        var firstLevel = elem.querySelector('#Tree_treeView_0');var currLevel = [];var currStatus = [];var nextLevel = {};for (var i = 0; i < firstLevel.length; i++) {
          var tds = firstLevel[i].querySelector('table').querySelectorAll('td');var tdLength = tds.length;currLevel.push(tds[tdLength - 1].textContent);
        }data[curr] = currLevel;
      }return data;
    },
    doAction_uiControl60_JAR1Q4: function (data, elem) {},
    getTemplate_uiControl60_JAR1Q4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    },
    getData_control64_oWfCI1: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem.querySelector('#Tree_treeView_0') && elem.querySelector('#Tree_treeView_0').querySelector('div')) {
        var firstLevel = $(elem.querySelector('#Tree_treeView_0')).children('div');var currLevel = [];var currStatus = [];var nextLevel = {};for (var i = 0; i < firstLevel.length; i++) {
          var tds = firstLevel[i].querySelector('table').querySelectorAll('td');alert(tdLength);var tdLength = tds.length;currLevel.push(tds[tdLength - 1].textContent);
        }data["curr"] = currLevel;
      }return data;
    },
    doAction_uiControl61_KgALSV: function (data, elem) {},
    getTemplate_uiControl61_KgALSV: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    }
  });
})(window, ysp);