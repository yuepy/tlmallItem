(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control130_eOK74Z: function (elem) {},
    doAction_uiControl130_TdgVxM: function (data, elem) {},
    getTemplate_uiControl130_TdgVxM: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        123123\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      \"123123\"\n    );\n  }\n});";
    }
  });
})(window, ysp);