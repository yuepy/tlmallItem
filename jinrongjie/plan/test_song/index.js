(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control36_m1mkJI: function (elem) {
      if (!elem) {
        return;
      }var data = {};var firstLevelData = {};var secondLevelData = {};var threeLevelData = {}; // 获取一级div
      var doc = $(elem).children('div');[].forEach.call(doc, function (firstLevel, firstLevelIndex) {
        //遍历一级div
        var secondLevelContent = {}; //用来保存二级数据
        var threeLevelContent = {}; //用来保存三级数据
        [].forEach.call(firstLevel.querySelector('table').querySelectorAll('td'), function (secondLevel, secondLevelIndex) {
          //查找click事件
          if (secondLevelIndex == 0) {
            secondLevel.click(); //点击加载二级数据
            [].forEach.call($(firstLevel).children('div'), function (tempLevel, tempIndex) {
              [].forEach.call($(tempLevel).children('div'), function (threeLevelItem, threeLevelIndex) {
                //遍历二级div
                [].forEach.call($(threeLevelItem).find('td'), function (clickItem, clickItemIndex) {
                  if (clickItemIndex == 1) {
                    clickItem.click();[].forEach.call(threeLevelItem.querySelector('div'), function (endTempItem, endTempIndex) {
                      [].forEach.call($(endTempItem).children('div'), function (endItem, endItemIndex) {
                        [].forEach.call(endItem.querySelectorAll('td'), function (endClickItem, endClickItemIndex) {
                          if (endClickItemIndex == 3) {
                            console.log(endClickItem.textContent);threeLevelContent[endItemIndex] = endClickItem.textContent;
                          }
                        });
                      });
                    });
                  }if (clickItemIndex == 3) {
                    secondLevelContent[threeLevelIndex] = clickItem.textContent;
                  }
                });threeLevelData = threeLevelContent;
              });
            });
          } //保存一级数据
          if (secondLevelIndex == 2) {
            firstLevelData[firstLevelIndex] = secondLevel.textContent;
          }
        });secondLevelData[firstLevelIndex] = secondLevelContent;
      });data.firstLevelData = firstLevelData;data.secondLevelData = secondLevelData;data.threeLevelData = threeLevelData;return data;
    }, doAction_uiControl33_LTZrPM: function (data, elem) {}, getTemplate_uiControl33_LTZrPM: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~\"\n    );\n  }\n});";
    }
  });
})(window, ysp);