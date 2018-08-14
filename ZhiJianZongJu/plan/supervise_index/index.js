(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_4UGULQ: function (elem) {
      if (!elem) return;var data = {};data.content = [];var ul = elem.querySelector('ul'),
          lis = ul.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var obj = {};var list = lis[i].querySelector('ul') ? lis[i].querySelector('ul').querySelectorAll('li') : '';for (var k = 0; k < list.length; k++) {
          obj.right.push({ text: list[k].textContent, id: list[k].querySelector('div').id });
        } // data.content.push({
        //   text: lis[i].textContent.trim(),
        //   id: lis[i].querySelector('div').id
        // });
      }return data;
    },
    doAction_uiControl4_A7hmQ4: function (data, elem) {},
    getTemplate_uiControl4_A7hmQ4: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var lis = data.content.map(function(ele,index){\n      return (\n      \t<div id={ele.id}><span></span>{ele.text}</div>\n      )\n    })\n    return (\n      <div>\n        {lis}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        "div",\n        { id: ele.id },\n        React.createElement("span", null),\n        ele.text\n      );\n    });\n    return React.createElement(\n      "div",\n      null,\n      lis\n    );\n  }\n});';
    }
  });
})(window, ysp);