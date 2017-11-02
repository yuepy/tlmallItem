(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control31_MQw3uc: function (elem) {
      var data = { title: [], content1: [], content2: [], thead: ['姓名', '岗位', "部门"], display_status: [] };if (elem.contentDocument.getElementById("oTable1")) {
        var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
          var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;if ($(elem2).find("#deeptree").length > 0) {
            var tree = $(elem2).find("#deeptree")[0];$(tree).find(".webfx-tree-item").each(function () {
              if ($(this).text().trim() !== '' && $(this)[0].style.display !== 'none' && $(this).parent()[0].style.display !== 'none') {
                var arr = [];var imgth = $(this).find("img").length;
                var imgEle = $(this)[0].querySelectorAll("img");for (var i = 0; i < imgth; i++) {
                  if (/plus/.test(imgEle[i].src) && /global/.test(imgEle[i + 1].src)) {
                    arr.push({ status: 'closehome', text: $(this).find("a").text(), id: $(this).find("a")[0].id, length: $(this).find("img").length, imgId: $(this).find("img").eq(i)[0].id });data.title.push(arr);break;
                  } else if (/minus/.test(imgEle[i].src) && /global/.test(imgEle[i + 1].src)) {
                    arr.push({ status: 'openhome', text: $(this).find("a").text(), id: $(this).find("a")[0].id, length: $(this).find("img").length, imgId: $(this).find("img").eq(i)[0].id });data.title.push(arr);break;
                  } else if (/plus/.test(imgEle[i].src)) {
                    arr.push({ status: 'close', text: $(this).find("a").text(), id: $(this).find("a")[0].id, length: $(this).find("img").length, imgId: $(this).find("img").eq(i)[0].id });data.title.push(arr);break;
                  } else if (/Colse/.test(imgEle[i].src)) {
                    arr.push({ status: 'bottom', text: $(this).find("a").text(), id: $(this).find("a")[0].id, length: $(this).find("img").length, imgId: $(this).find("img").eq(i)[0].id });data.title.push(arr);break;
                  } else if (/minus/.test(imgEle[i].src)) {
                    arr.push({ status: 'open', text: $(this).find("a").text(), id: $(this).find("a")[0].id, length: $(this).find("img").length, imgId: $(this).find("img").eq(i)[0].id });data.title.push(arr);break;
                  }
                }
              }
            });
          }
        }if ($(elem1).find("#frame2").length > 0) {
          var elem3 = $(elem1).find("#frame2")[0].contentDocument.body;if ($(elem3).find("table").length > 0) {
            var Tbody = $(elem3).find("table").children("tbody")[0]; //显示无账号人员
            var tr0 = $(Tbody).children("tr").eq(0)[0];var tr1 = $(Tbody).children("tr").eq(1)[0];var tr3 = $(Tbody).children("tr").eq(3)[0]; //人员表格
            if ($(tr0).children("td").length > 0 && $(tr0).find("input").length > 0) {
              if ($(tr0).find("input")[0].checked == true) {
                data.display_status.push("open");
              } else {
                data.display_status.push("down");
              }
            }if ($(tr1).children("td").eq(0).find('option').length > 0) {
              $(tr1).children("td").eq(0).find('option').each(function () {
                var arr1 = [];if ($(this)[0].selected == true) {
                  arr1.push({ text: $(this).text().replace(/\s+/ig, "").split("|"), selected: 'true' });
                } else if ($(this)[0].selected == false) {
                  arr1.push({ text: $(this).text().replace(/\s+/ig, "").split("|"), selected: 'false' });
                }data.content1.push(arr1);
              });
            }if ($(tr1).children("td").eq(2).find('option').length > 0) {
              $(tr1).children("td").eq(2).find('option').each(function () {
                var arr2 = [];if ($(this)[0].selected == true) {
                  arr2.push({ text: $(this).text().replace(/\s+/ig, "").split("|"), selected: 'true' });
                }if ($(this)[0].selected == false) {
                  arr2.push({ text: $(this).text().replace(/\s+/ig, "").split("|"), selected: 'false' });
                }data.content2.push(arr2);
              });
            }
          }
        }
      }return data;
    }, doAction_uiControl42_lcGQHl: function (data, elem) {
      if (data.eventType == 'selectPerson') {
        //debugger;
        var id = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
            var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;if ($(elem2).find("#deeptree").length > 0) {
              var tree = $(elem2).find("#deeptree")[0];$(tree).find(".webfx-tree-item").each(function () {
                //debugger;
                if ($(this).find("a")[0].id == id) {
                  $(this).find("a")[0].click();
                }
              });
            }
          }
        }
      }if (data.eventType == 'toggle') {
        //debugger;
        var id = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
            var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;if ($(elem2).find("#deeptree").length > 0) {
              var tree = $(elem2).find("#deeptree")[0];$(tree).find(".webfx-tree-item").each(function () {
                $(this).find("img").each(function () {
                  if ($(this)[0].id == id) {
                    $(this).click();
                  }
                });
              });
            }
          }
        }
      }if (data.eventType == 'checkOption') {
        var val = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame2").length > 0) {
            var elem3 = $(elem1).find("#frame2")[0].contentDocument.body;if ($(elem3).find("table").length > 0) {
              var Tbody = $(elem3).find("table").children("tbody")[0]; //显示无账号人员
              var tr0 = $(Tbody).children("tr").eq(0)[0];var tr1 = $(Tbody).children("tr").eq(1)[0];var tr3 = $(Tbody).children("tr").eq(3)[0]; //人员表格
              if ($(tr1).children("td").eq(0).find('option').length > 0) {
                $(tr1).children("td").eq(0).find('option').eq(val)[0].selected = true;
              }
            }
          }
        }
      }
    }, getTemplate_uiControl42_lcGQHl: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  selectPerson:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'selectPerson\',\n        data:e.target.id\n      })\n    }\n  },\n  checkOption:function(e){\n    var handler = this.props.customHandler;\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    if(handler){\n      handler({\n        eventType:\'checkOption\',\n        data:_target.getAttribute("data-index")\n      })\n    }\n  },\n  toggle:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toggle\',\n        data:e.target.id\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    var tree = data.title.map(function(d,i){\n      if(d[0].status ==\'openhome\'){\n        return(<div className=\'home_div\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'xjt\'></i></div></div>)\n      }\n     else if(d[0].status ==\'closehome\'){\n        return(<div className=\'home_div\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'zjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'open\'){\n        return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'common_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'xjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'close\'){\n         return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'common_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'zjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'bottom\'){\n        return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'bottom_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span></div></div>)\n      }\n    })\n    if(data.content1.length > 0){\n      var thead = data.thead.map(function(d3,i3){\n        return(<span>{d3}</span>)\n      })\n       var people = data.content1.map(function(d1,i1){\n         if(d1[0].selected == \'true\'){\n           return(<div style={{background:\'#ccc\'}} className=\'people\' onClick={_this.checkOption} data-index={i1}>\n           {\n                d1[0].text.map(function(d2,i2){\n           return(<span>{d2}</span>)\n         })\n             }\n           </div>)\t\n         }\n        else if(d1[0].selected == \'false\'){\n           return(<div className=\'people\' onClick={_this.checkOption} data-index={i1}>\n           {\n                d1[0].text.map(function(d2,i2){\n           return(<span>{d2}</span>)\n         })\n             }\n           </div>)\t\n         }\n      })\n    }\n    return (\n      <div className=\'box_select\'>\n        <div className=\'tree_box\'>\n          {tree}\n        </div>\n        {data.display_status == \'open\' ? \t\t\t\t\t<div className= \'dis_status\'>\n            <span>\n\t\t\t\t\t\t\t\u663E\u793A\u65E0\u8D26\u53F7\u4EBA\u5458\n            </span>\n          <div className=\'open\'>\n          \n          </div>\n        </div> \n        : \n        <div className= \'dis_status\'>\n           <span>\n\t\t\t\t\t\t\u663E\u793A\u65E0\u8D26\u53F7\u4EBA\u5458\n          </span>\n        <div className=\'down\'>\n        \n        </div>\n      \t</div>\n        }\n        <div className=\'thead\'>\n          {thead}\n        </div>\n        <div className=\'people_box\'>\n        \t{people}\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  selectPerson: function selectPerson(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selectPerson\',\n        data: e.target.id\n      });\n    }\n  },\n  checkOption: function checkOption(e) {\n    var handler = this.props.customHandler;\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    if (handler) {\n      handler({\n        eventType: \'checkOption\',\n        data: _target.getAttribute("data-index")\n      });\n    }\n  },\n  toggle: function toggle(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'toggle\',\n        data: e.target.id\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var tree = data.title.map(function (d, i) {\n      if (d[0].status == \'openhome\') {\n        return React.createElement(\n          \'div\',\n          { className: \'home_div\' },\n          React.createElement(\n            \'div\',\n            { className: \'bord\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.selectPerson, id: d[0].id },\n              d[0].text\n            ),\n            React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'xjt\' })\n          )\n        );\n      } else if (d[0].status == \'closehome\') {\n        return React.createElement(\n          \'div\',\n          { className: \'home_div\' },\n          React.createElement(\n            \'div\',\n            { className: \'bord\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.selectPerson, id: d[0].id },\n              d[0].text\n            ),\n            React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'zjt\' })\n          )\n        );\n      } else if (d[0].status == \'open\') {\n        return React.createElement(\n          \'div\',\n          { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'common_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'bord\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.selectPerson, id: d[0].id },\n              d[0].text\n            ),\n            React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'xjt\' })\n          )\n        );\n      } else if (d[0].status == \'close\') {\n        return React.createElement(\n          \'div\',\n          { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'common_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'bord\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.selectPerson, id: d[0].id },\n              d[0].text\n            ),\n            React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'zjt\' })\n          )\n        );\n      } else if (d[0].status == \'bottom\') {\n        return React.createElement(\n          \'div\',\n          { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'bottom_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'bord\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.selectPerson, id: d[0].id },\n              d[0].text\n            )\n          )\n        );\n      }\n    });\n    if (data.content1.length > 0) {\n      var thead = data.thead.map(function (d3, i3) {\n        return React.createElement(\n          \'span\',\n          null,\n          d3\n        );\n      });\n      var people = data.content1.map(function (d1, i1) {\n        if (d1[0].selected == \'true\') {\n          return React.createElement(\n            \'div\',\n            { style: { background: \'#ccc\' }, className: \'people\', onClick: _this.checkOption, \'data-index\': i1 },\n            d1[0].text.map(function (d2, i2) {\n              return React.createElement(\n                \'span\',\n                null,\n                d2\n              );\n            })\n          );\n        } else if (d1[0].selected == \'false\') {\n          return React.createElement(\n            \'div\',\n            { className: \'people\', onClick: _this.checkOption, \'data-index\': i1 },\n            d1[0].text.map(function (d2, i2) {\n              return React.createElement(\n                \'span\',\n                null,\n                d2\n              );\n            })\n          );\n        }\n      });\n    }\n    return React.createElement(\n      \'div\',\n      { className: \'box_select\' },\n      React.createElement(\n        \'div\',\n        { className: \'tree_box\' },\n        tree\n      ),\n      data.display_status == \'open\' ? React.createElement(\n        \'div\',\n        { className: \'dis_status\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u663E\\u793A\\u65E0\\u8D26\\u53F7\\u4EBA\\u5458\'\n        ),\n        React.createElement(\'div\', { className: \'open\' })\n      ) : React.createElement(\n        \'div\',\n        { className: \'dis_status\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u663E\\u793A\\u65E0\\u8D26\\u53F7\\u4EBA\\u5458\'\n        ),\n        React.createElement(\'div\', { className: \'down\' })\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'thead\' },\n        thead\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'people_box\' },\n        people\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);