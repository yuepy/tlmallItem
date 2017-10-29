(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control36_m1mkJI: function (elem) {
      if (!elem) {
        return;
      } // console.log(elem.getAttribute('id'));
      var data = {};var doc = $(elem).children('div');[].forEach.call(doc, function (item, divIndex) {
        if (divIndex == 0) {
          // console.log("bef:" + item);
          console.log("bef:" + item.textContent);[].forEach.call($(item).children('div'), function (childItem, childIndex) {
            if (childIndex == 0) {
              $(childItem).find('td')[0].click();
            }
          }); // console.log("after:" + item);
          console.log("aft:" + item.textContent);
        }
      });return data;
    }, doAction_uiControl33_LTZrPM: function (data, elem) {},
    getTemplate_uiControl33_LTZrPM: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    }
  });
})(window, ysp);