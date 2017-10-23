(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control21_gJDSQv: function (elem) {
      var data = [];if ($(elem).length > 0 && $(elem).find("tr").length > 0 && $(elem).find("tr").children("*").length > 0) {
        var $trs = $(elem).find("tr:visible");for (var idx = 0; idx < $trs.length; idx++) {
          var $tds = $trs.eq(idx).children("th:visible,td:visible");if (idx === $trs.length) {
            data.push({ "title": "备注", "tag": "other", "val": $tds.eq(0).text().trim().replace(/(\s)|(备注：)/g, "") });
          } else {
            if ($trs.eq(idx).find("table").length === 0 && $trs.eq(idx)[0].parentElement.parentElement === elem) {
              for (var idx1 = 0; idx1 < parseInt($tds.length / 2); idx1++) {
                var $targetTd = $tds.eq(2 * idx1 + 1);if ($tds.eq(2 * idx1 + 1).find("*:visible").length > 0) {
                  if ($targetTd.find("input[type='radio'],input[type='checkbox']:visible").length > 1) {
                    var arr = [];$targetTd.children("input[type='radio'],input[type='checkbox']:visible").each(function (idx2, d2) {
                      arr.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": idx2 === 0 ? $(d2).parent().find("span.error").length > 0 ? "error" : "sure" : d2.className, "date": false, "tag": "INPUT", "type": d2.type, "disabled": d2.disabled, "readOnly": d2.readOnly, "checked": d2.checked, "val": $targetTd.children("label:visible").eq(idx2).text().replace(/\s/g, ""), "index": idx, "index1": idx1, "index2": idx2 });
                    });data.push(arr);
                  } else if ($targetTd.find("input.Wdate:visible").length == 2) {
                    var arr = [];$targetTd.children("input.Wdate:visible").each(function (idx2, d2) {
                      var dataForm;var dataString = /WdatePicker/.test(d2.getAttribute("onfocus")) ? d2.getAttribute("onfocus") : d2.getAttribute("onclick");var _dateString = dataString.replace(/.*WdatePicker\(\{(.*)\}\).*/g, '$1');var dateObject = ysp.customHelper.produceDataObject(_dateString);if (/yyyy-MM-dd/.test(dataString) && /HH:mm/.test(dataString)) {
                        dataForm = "YMDHm";
                      } else if (/yyyy-MM-dd/.test(dataString) && !/HH:mm/.test(dataString)) {
                        dataForm = "YMD";
                      } else if (!/yyyy-MM-dd/.test(dataString) && /HH:mm/.test(dataString)) {
                        dataForm = "Hm";
                      }arr.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": d2.className, "date": true, "dataForm": dataForm, "tag": "INPUT", "disabled": d2.disabled, "readOnly": d2.readOnly, "val": $(d2).val(), "index": idx, "index1": idx1, "index2": idx2, "maxDate": dateObject.maxDate === undefined ? "" : dateObject.maxDate.replace(/'(.*)'/g, "$1"), "minDate": dateObject.minDate === undefined ? "" : dateObject.minDate.replace(/'(.*)'/g, "$1") });
                    });data.push(arr);
                  } else {
                    if ($targetTd.find("input:visible").length > 0) {
                      var firstVisible = $tds.eq(2 * idx1 + 1).find("input:visible")[0];if (/Wdate/.test(firstVisible.className)) {
                        var dataForm;var dataString = /WdatePicker/.test(firstVisible.getAttribute("onfocus")) ? firstVisible.getAttribute("onfocus") : firstVisible.getAttribute("onclick");if (/yyyy-MM-dd/.test(dataString) && /HH:mm/.test(dataString)) {
                          dataForm = "YMDHm";
                        } else if (/yyyy-MM-dd/.test(dataString) && !/HH:mm/.test(dataString)) {
                          dataForm = "YMD";
                        } else if (!/yyyy-MM-dd/.test(dataString) && /HH:mm/.test(dataString)) {
                          dataForm = "Hm";
                        }data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": firstVisible.className, "date": true, "dataForm": dataForm, "tag": "INPUT", "disabled": firstVisible.disabled, "readOnly": firstVisible.readOnly, "val": $(firstVisible).val(), "index": idx, "index1": idx1 });
                      } else if (/ac_input/.test(firstVisible.className)) {
                        data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": firstVisible.className, "date": false, "dataForm": "area", "tag": "INPUT", "disabled": firstVisible.disabled, "readOnly": firstVisible.readOnly, "val": $(firstVisible).val(), "index": idx, "index1": idx1 });
                      } else {
                        data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": firstVisible.className, "date": false, "tag": "INPUT", "disabled": firstVisible.disabled, "readOnly": firstVisible.readOnly, "val": $(firstVisible).val(), "index": idx, "index1": idx1 });
                      }
                    } else if ($targetTd.find("textarea:visible").length > 0) {
                      var firstVisible = $targetTd.find("textarea:visible")[0];data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": firstVisible.className, "tag": "TEXTAREA", "disabled": firstVisible.disabled, "readOnly": firstVisible.readOnly, "val": $(firstVisible).val(), "index": idx, "index1": idx1 });
                    } else if ($targetTd.find("select:visible").length > 0) {
                      var firstVisible = $targetTd.find("select:visible")[0];var _options = [];$(firstVisible).children("option").each(function (idx2, d2) {
                        _options.push({ "val": $(d2).val(), "text": $(d2).text(), "dataIndex": idx2 });
                      });data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "className": firstVisible.className, "tag": "SELECT", "disabled": firstVisible.disabled, "val": $(firstVisible).val(), "options": _options, "index": idx, "index1": idx1 });
                    } else {
                      data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "tag": "other", "val": $tds.eq(2 * idx1 + 1).text().trim().replace(/\s/g, "") });
                    }
                  }
                } else {
                  if (!/^\s*$/.test($tds.eq(2 * idx1).text())) {
                    var _$td = $tds.eq(2 * idx1 + 1).clone();if (_$td.find("*:hidden").length > 0) {
                      _$td.find("*:hidden").remove();
                    }data.push({ "title": $tds.eq(2 * idx1).find("span:hidden").length > 0 && /\*/.test($tds.eq(2 * idx1).find("span:hidden").eq(0).text()) ? $tds.eq(2 * idx1).text().trim().replace(/(\s)|(\*)/g, "") : $tds.eq(2 * idx1).text().trim().replace(/\s/g, ""), "tag": "other", "val": _$td.text().trim().replace(/\s/g, "") });
                  }
                }
              }
            }
          }
        }
      } else {
        return data;
      }return data;
    },
    doAction_uiControl21_H8mT5H: function (data, elem) {
      if (data.eventType.eventDataType == "click") {
        if (data.eventType.eventTarget == "radio") {
          var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var index2 = parseInt(data.dataCustom.dataIndex2);var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).children("input[type='radio'],input[type='checkbox']:visible").eq(index2)[0];if (targets) {
            targets.click();
          }
        } else if (data.eventType.eventTarget == "button") {} else if (data.eventType.eventTarget == "back") {}
      } else if (data.eventType.eventDataType == "change") {
        if (data.eventType.eventTarget == "input") {
          var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var index2 = parseInt(data.dataCustom.dataIndex2);var _value = data.dataCustom.dataValue;var _document = elem.ownerDocument;var eventInput = _document.createEvent("HTMLEvents");var eventInput1 = _document.createEvent("HTMLEvents");eventInput.initEvent("change", true, false);eventInput1.initEvent("blur", true, false);if (data.dataCustom.dataIndex2 === undefined || data.dataCustom.dataIndex2 === null) {
            var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("input:visible")[0];
          } else {
            var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("input:visible").eq(index2)[0];
          }if (targets) {
            targets.value = _value;targets.dispatchEvent(eventInput);setTimeout(function () {
              targets.dispatchEvent(eventInput1);
            }, 500);
          }
        } else if (data.eventType.eventTarget == "textarea") {
          var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var _value = data.dataCustom.dataValue;var _document = elem.ownerDocument;var eventInput = _document.createEvent("HTMLEvents");var eventInput1 = _document.createEvent("HTMLEvents");eventInput.initEvent("change", true, false);eventInput1.initEvent("blur", true, false);var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("textarea:visible")[0];if (targets) {
            targets.value = _value;targets.dispatchEvent(eventInput);setTimeout(function () {
              targets.dispatchEvent(eventInput1);
            }, 500);
          }
        } else if (data.eventType.eventTarget == "select") {
          var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var _value = data.dataCustom.dataValue;var _document = elem.ownerDocument;var eventInput = _document.createEvent("HTMLEvents");eventInput.initEvent("change", true, false);var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("select:visible")[0];if (targets) {
            targets.value = _value;targets.dispatchEvent(eventInput);targets.click();
          }
        }
      } else if (data.eventType.eventDataType == "date") {
        var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var index2 = parseInt(data.dataCustom.dataIndex2);var _value = data.dataCustom.dataValue;var time = {};if (/:/.test(_value) && /-/.test(_value)) {
          time.year = parseInt(_value.split(/\s/)[0].split("-")[0]);time.month = parseInt(_value.split(/\s/)[0].split("-")[1]);time.day = parseInt(_value.split(/\s/)[0].split("-")[2]);time.hours = parseInt(_value.split(/\s/)[1].split(":")[0]);time.minutes = parseInt(_value.split(/\s/)[1].split(":")[1]);
        } else if (/:/.test(_value) && !/-/.test(_value)) {
          time.hours = parseInt(_value.split(/\s/)[1].split(":")[0]);time.minutes = parseInt(_value.split(/\s/)[1].split(":")[1]);
        } else if (!/:/.test(_value) && /-/.test(_value)) {
          time.year = parseInt(_value.split(/\s/)[0].split("-")[0]);time.month = parseInt(_value.split(/\s/)[0].split("-")[1]);time.day = parseInt(_value.split(/\s/)[0].split("-")[2]);
        }if (data.dataCustom.dataIndex2 === undefined || data.dataCustom.dataIndex2 === null) {
          var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("input:visible")[0];
        } else {
          var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("input:visible").eq(index2)[0];
        }if (targets) {
          var _document = elem.ownerDocument;var eventInput = _document.createEvent("HTMLEvents");eventInput.initEvent("focus", true, false);targets.dispatchEvent(eventInput);targets.click();var timer = setInterval(function () {
            if ($(_document).find("iframe[hidefocus]").length > 0 && $(_document).find("iframe[hidefocus]")[0].contentWindow) {
              var _win_ = $(_document).find("iframe[hidefocus]")[0].contentWindow;if (_win_ && _win_.$dt) {
                if (/:/.test(_value) && /-/.test(_value)) {
                  _win_.$dt.y = time.year;_win_.$dt.M = time.month;_win_.$dt.d = time.day;_win_.$dt.H = time.hours;_win_.$dt.m = time.minutes;
                } else if (/:/.test(_value) && !/-/.test(_value)) {
                  _win_.$dt.H = time.hours;_win_.$dt.m = time.minutes;
                } else if (!/:/.test(_value) && /-/.test(_value)) {
                  _win_.$dt.y = time.year;_win_.$dt.M = time.month;_win_.$dt.d = time.day;
                }_win_.day_Click();clearInterval(timer);
              }
            }
          }, 500);
        }
      } else if (data.eventType.eventDataType == "area") {
        var index = parseInt(data.dataCustom.dataIndex);var index1 = parseInt(data.dataCustom.dataIndex1);var _value = data.dataCustom.dataValue;var targets = $(elem).find("tr:visible").eq(index).children("th:visible,td:visible").eq(2 * index1 + 1).find("input:visible")[0];if (targets) {
          targets.value = _value;ysp.customHelper.fireKeyEvent(targets, "keyup");
        }
      }
    },
    getTemplate_uiControl21_H8mT5H: function () {
      var selfTemplate = "var React=require(\"react\");\nvar {MainCard}=require(\"ysp-custom-components\");\nmodule.exports = React.createClass({\n  render: function(){\n    var data=this.props.customData\n    if(data && data.length>0){\n      return (<MainCard type=\"\u8F66\u8F86\u7533\u8BF7\u5BA1\u6279\" title=\"\u8C03\u5EA6\u5458\u586B\u5199\" customData={data} customHandler={this.props.customHandler} />)\n    }else{\n  \t\treturn (<div style={{display:\"none\"}}></div>)\n    }\n  }\n});\n";
      return "\"use strict\";\n\nvar React = require(\"react\");\n\nvar _require = require(\"ysp-custom-components\"),\n    MainCard = _require.MainCard;\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    if (data && data.length > 0) {\n      return React.createElement(MainCard, { type: \"\\u8F66\\u8F86\\u7533\\u8BF7\\u5BA1\\u6279\", title: \"\\u8C03\\u5EA6\\u5458\\u586B\\u5199\", customData: data, customHandler: this.props.customHandler });\n    } else {\n      return React.createElement(\"div\", { style: { display: \"none\" } });\n    }\n  }\n});";
    }
  });
})(window, ysp);