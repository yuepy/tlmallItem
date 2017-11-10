'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control31_MQw3uc: function getData_control31_MQw3uc(elem) {
      var data = { search: { inputValue: [] }, status: [], title: [], content1: [], content2: [], content3: [], thead: ['姓名', '岗位', "部门"], display_status: [] }; //style={{color:'rgb(194,154,42)'}}
      if (elem.contentDocument.getElementById("oTable1")) {
        var elem1 = elem.contentDocument.getElementById("oTable1");if (/bgdark/.test($(elem1).find("#oTDtype_0").attr('background'))) {
          data.status.push("2");
        } else {
          data.status.push("1");
        }if ($(elem1).find("#frame1").length > 0) {
          var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;if ($(elem2).find("#deeptree").length > 0) {
            //data.status.push("1");
            var tree = $(elem2).find("#deeptree")[0];$(tree).find(".webfx-tree-item").each(function () {
              if ($(this).text().trim() !== '' && $(this)[0].style.display !== 'none' && $(this).parent()[0].style.display !== 'none' && $(this).parent().parent()[0].style.display !== 'none' && $(this).parent().parent().parent()[0].style.display !== 'none' && $(this).parent().parent().parent().parent()[0].style.display !== 'none' && $(this).parent().parent().parent().parent().parent()[0].style.display !== 'none' && $(this).parent().parent().parent().parent().parent().parent()[0].style.display !== 'none') {
                var arr = [];var imgth = $(this).find("img").length;var imgEle = $(this)[0].querySelectorAll("img");for (var i = 0; i < imgth; i++) {
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
          } else if ($(elem2).find(".ViewForm").length > 0 && $(elem2).find(".ViewForm").find(".Spacing").length > 0) {
            data.search.inputValue.push($(elem2).find(".ViewForm").find("input[name='lastname']")[0].value);
          }if ($(elem2).find("#SearchForm").length > 0 && $(elem2).find("#SearchForm").children(".ViewForm").length > 0) {
            // data.status.push("2"); //console.log(search.querySelectorAll("input[name='lastname']")[0])
            var search = $(elem2).find("#SearchForm").children(".ViewForm")[0];data.search.inputValue.push($(search).find("input[name='lastname']")[0].value);
          }
        }if ($(elem1).find("#frame2").length > 0) {
          var elem3 = $(elem1).find("#frame2")[0].contentDocument.body;
          if ($(elem3).find("table").length > 0) {
            var Tbody = $(elem3).find("table").children("tbody")[0]; //显示无账号人员
            if ($(Tbody).children(".DataHeader").length == 0) {
              var tr0 = $(Tbody).children("tr").eq(0)[0];var tr1 = $(Tbody).children("tr").eq(1)[0];var tr3 = $(Tbody).children("tr").eq(3)[0]; //人员表格
              if ($(tr0).children("td").length > 0 && $(tr0).find("input").length > 0) {
                if ($(tr0).find("input")[0].checked == true) {
                  data.display_status.push("open");
                } else {
                  data.display_status.push("down");
                }
              }if ($(tr1).children("td").eq(0).find('option').length > 0) {
                $(tr1).children("td").eq(0).find('option').each(function () {
                  var arr1 = [];
                  if ($(this)[0].selected == true) {
                    arr1.push({ text: $(this).text(), selected: 'true' });
                  } else if ($(this)[0].selected == false) {
                    arr1.push({ text: $(this).text(), selected: 'false' });
                  }data.content1.push(arr1);
                });
              }if ($(tr1).children("td").eq(2).find('option').length > 0) {
                $(tr1).children("td").eq(2).find('option').each(function () {
                  var arr2 = [];arr2.push($(this).text().replace(/\s+/ig, "").replace(/\[.*\]/ig, "").replace(/（.*）/, "").replace(/\(.*\)/, "").split("|"));data.content2.push(arr2);
                });
              }
            } else if ($(Tbody).children(".DataHeader").length > 0 && $(Tbody).children(".Line").length > 0) {
              var Tbody = $(Tbody).children(".Line").next().find("tbody")[0];$(Tbody).children('tr').each(function () {
                var arr = [];$(this).children("td").each(function () {
                  if ($(this)[0].style.display !== 'none') {
                    arr.push($(this).text());
                  }
                });data.content3.push(arr);
              });
            }
          }
        }
      }return data;
    }, doAction_uiControl42_lcGQHl: function doAction_uiControl42_lcGQHl(data, elem) {
      if (data.eventType == 'selectPerson') {
        //debugger;
        var id = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
            var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;if ($(elem2).find("#deeptree").length > 0) {
              var tree = $(elem2).find("#deeptree")[0];$(tree).find(".webfx-tree-item").each(function () {
                //debugger;
                if ($(this).find("a")[0].id == id) {
                  $(this).find("a")[0].click(); // if($(this).next()[0].style.display == 'block'){
                  //   $(this).next()[0].style.display = 'none'
                  // }
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
                $(tr1).children("td").eq(0).find('option').eq(val)[0].selected = true;$(tr1).children("td").eq(0).find("select")[0].dispatchEvent(new MouseEvent("dblclick"));
              }
            }
          }
        }
      }if (data.eventType == 'checkOption2') {
        var val = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");
          if ($(elem1).find("#frame2").length > 0) {
            var elem3 = $(elem1).find("#frame2")[0].contentDocument.body;if ($(elem3).find("table").length > 0) {
              var Tbody = $(elem3).find("table").children("tbody")[0]; //显示无账号人员
              var tr0 = $(Tbody).children("tr").eq(0)[0];var tr1 = $(Tbody).children("tr").eq(1)[0];var tr3 = $(Tbody).children("tr").eq(3)[0]; //人员表格
              if ($(tr1).children("td").eq(2).find('option').length > 0) {
                $(tr1).children("td").eq(2).find('option').eq(val)[0].selected = true;$(tr1).children("td").eq(2).find("select")[0].dispatchEvent(new MouseEvent("dblclick"));
              }
            }
          }
        }
      }if (data.eventType == 'search') {
        if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
            var elem2 = $(elem1).find("#frame1")[0].contentDocument.body; //if ($(elem2).find("#SearchForm").length > 0 && $(elem2).find("#SearchForm").children(".ViewForm").length > 0) {
            if ($(elem2).find(".ViewForm").length > 0) {
              if ($(elem2).find("#rightMenuIframe").length > 0) {
                var iframeBody = $(elem2).find("#rightMenuIframe")[0].contentDocument.body;if ($(iframeBody).find("button").length > 0) {
                  console.log($(iframeBody).find("button").eq(0).text());$(iframeBody).find("button").eq(0)[0].click();
                }
              }
            }
          }if ($(elem1).find("#oTDtype_0").length > 0) {
            $(elem1).find("#oTDtype_0")[0].click();
          }
        }
      }if (data.eventType == 'name') {
        var val = data.dataCustom;if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#frame1").length > 0) {
            var elem2 = $(elem1).find("#frame1")[0].contentDocument.body;
            if ($(elem2).find("#SearchForm").length > 0 && $(elem2).find("#SearchForm").children(".ViewForm").length > 0) {
              var search = $(elem2).find("#SearchForm").children(".ViewForm")[0];if ($(search).find("input[name='lastname']").length > 0) {
                $(search).find("input[name='lastname']").prop("value", val);
              }
            } else if ($(elem2).find(".ViewForm").length > 0 && $(elem2).find(".ViewForm").find(".Spacing").length > 0) {
              $(elem2).find(".ViewForm").find("input[name='lastname']").prop("value", val);
            }
          }
        }
      }if (data.eventType == 'tabs1') {
        if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#oTDtype_0").length > 0) {
            $(elem1).find("#oTDtype_0")[0].click();
          }
        }
      }if (data.eventType == 'tabs2') {
        if (elem.contentDocument.getElementById("oTable1")) {
          var elem1 = elem.contentDocument.getElementById("oTable1");if ($(elem1).find("#oTDtype_2").length > 0) {
            $(elem1).find("#oTDtype_2")[0].click();
          }
        }
      }
    }, getTemplate_uiControl42_lcGQHl: function getTemplate_uiControl42_lcGQHl() {
      var selfTemplate = 'module.exports = React.createClass({\n  tabs1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'tabs1\'\n      })\n    }\n  },\n  tabs2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'tabs2\'\n      })\n    }\n  },\n  search:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'search\'\n      })\n    }\n  },\nname:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:\'name\'\n      })\n    }\n  },\n  selectPerson:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'selectPerson\',\n        data:e.target.id\n      })\n    }\n  },\n  checkOption:function(e){\n    var handler = this.props.customHandler;\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    if(handler){\n      handler({\n        eventType:\'checkOption\',\n        data:_target.getAttribute("data-index")\n      })\n    }\n  },\n  checkOption2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'checkOption2\',\n        data:e.target.getAttribute("data-index")\n      })\n    }\n  },\n  toggle:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'toggle\',\n        data:e.target.id\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.title.length > 0){\n      var tree = data.title.map(function(d,i){\n      if(d[0].status ==\'openhome\'){\n        return(<div className=\'home_div\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'xjt\'></i></div></div>)\n      }\n     else if(d[0].status ==\'closehome\'){\n        return(<div className=\'home_div\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'zjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'open\'){\n        return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'common_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'xjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'close\'){\n         return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'common_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span><i id={d[0].imgId} onClick={_this.toggle} className=\'zjt\'></i></div></div>)\n      }\n      else if(d[0].status ==\'bottom\'){\n        return(<div style={{paddingLeft:d[0].length *10-30+"px"}} className=\'bottom_box\'><div className=\'bord\'><span onClick = {_this.selectPerson} id = {d[0].id}>{d[0].text}</span></div></div>)\n      }\n    })\n    }\n    if(data.content1.length > 0){\n      var thead = data.thead.map(function(d3,i3){\n        return(<span>{d3}</span>)\n      })\n       var people = data.content1.map(function(d1,i1){\n         if(d1[0].selected == \'true\'){\n           return(<div className=\'people\' onClick={_this.checkOption} data-index={i1}>{d1[0].text}\n           </div>)\t\n         }\n        else if(d1[0].selected == \'false\'){\n           return(<div className=\'people\' onClick={_this.checkOption} data-index={i1}>\n           {d1[0].text}\n           </div>)\t\n         }\n      })\n    }\n    if(data.content2.length > 0){\n      var thead = data.thead.map(function(d3,i3){\n        return(<span>{d3}</span>)\n      })\n       var people2 = data.content2.map(function(d1,i1){\n           return(<span className=\'people2\' onClick={_this.checkOption2} data-index={i1}>\n           {d1[0][0]}\n           </span>)\t\n      })\n    }\n    if(data.content3.length > 0){\n      var people3 = data.content3.map(function(d,i){\n        return(<li>\n          {\n              d.map(function(d1,i1){\n                return(<span>{d1}</span>)\n              })\n            }\n          </li>)\n      })\n    }\n    return (\n      <div className=\'box_select\'>\n        <div className=\'search_nav\'>\n        \t{\n            data.status == \'1\' ? \n              <ul><li className=\'on\'><span onClick = {_this.tabs1}>\u6309\u7EC4\u7EC7\u7ED3\u6784</span></li><li><span onClick = {_this.tabs2}>\u7EC4\u5408\u67E5\u8BE2</span></li></ul>\n              :\n              <ul><li><span onClick = {_this.tabs1}>\u6309\u7EC4\u7EC7\u7ED3\u6784</span></li><li className=\'on\'><span onClick = {_this.tabs2}>\u7EC4\u5408\u67E5\u8BE2</span></li></ul>\n          }\n        </div>\n        {data.status == \'1\' ? <div className=\'tree_box\'>\n          {tree}\n        </div> :<div style = {{display:"none"}}></div>}\n        {data.status == \'2\' ? \n          <div className=\'search_box\'>\n          \t<div className=\'lst_lfj\'><span>\u59D3\u540D</span><AInput onBlur = {_this.name} value ={data.search.inputValue[0]} /></div>\n            <div className=\'lst_lfj\'><button onClick ={_this.search}>\u641C\u7D22</button></div>\n        \t</div>\n        : \n        <div style = {{display:"none"}}>\n      </div>\n        }\n        {data.display_status == \'open\' ? \n          <div className= \'dis_status\'>\n            <span>\n\t\t\t\t\t\t\t\u663E\u793A\u65E0\u8D26\u53F7\u4EBA\u5458\n            </span>\n          <div className=\'open\'>\n          \n          </div>\n        </div> \n        : \n        <div className= \'dis_status\'>\n           <span>\n\t\t\t\t\t\t\u663E\u793A\u65E0\u8D26\u53F7\u4EBA\u5458\n          </span>\n        <div className=\'down\'>\n        \n        </div>\n      \t</div>\n        }\n       {data.status == \'1\' ?\n        <div className=\'people_box\'>\n        \t{people}\n        </div>\n          :\n        <div style={{display:\'none\'}}></div>\n          }\n        {data.status == \'1\' ? <div className=\'delete_box\'>{people2}</div> : \n        <div style={{display:\'none\'}}></div>\n        }\n         <ul className=\'people3\'>{people3}</ul> \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  tabs1: function tabs1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'tabs1\'\n      });\n    }\n  },\n  tabs2: function tabs2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'tabs2\'\n      });\n    }\n  },\n  search: function search(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'search\'\n      });\n    }\n  },\n  name: function name(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: \'name\'\n      });\n    }\n  },\n  selectPerson: function selectPerson(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selectPerson\',\n        data: e.target.id\n      });\n    }\n  },\n  checkOption: function checkOption(e) {\n    var handler = this.props.customHandler;\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    if (handler) {\n      handler({\n        eventType: \'checkOption\',\n        data: _target.getAttribute("data-index")\n      });\n    }\n  },\n  checkOption2: function checkOption2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'checkOption2\',\n        data: e.target.getAttribute("data-index")\n      });\n    }\n  },\n  toggle: function toggle(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'toggle\',\n        data: e.target.id\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.title.length > 0) {\n      var tree = data.title.map(function (d, i) {\n        if (d[0].status == \'openhome\') {\n          return React.createElement(\n            \'div\',\n            { className: \'home_div\' },\n            React.createElement(\n              \'div\',\n              { className: \'bord\' },\n              React.createElement(\n                \'span\',\n                { onClick: _this.selectPerson, id: d[0].id },\n                d[0].text\n              ),\n              React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'xjt\' })\n            )\n          );\n        } else if (d[0].status == \'closehome\') {\n          return React.createElement(\n            \'div\',\n            { className: \'home_div\' },\n            React.createElement(\n              \'div\',\n              { className: \'bord\' },\n              React.createElement(\n                \'span\',\n                { onClick: _this.selectPerson, id: d[0].id },\n                d[0].text\n              ),\n              React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'zjt\' })\n            )\n          );\n        } else if (d[0].status == \'open\') {\n          return React.createElement(\n            \'div\',\n            { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'common_box\' },\n            React.createElement(\n              \'div\',\n              { className: \'bord\' },\n              React.createElement(\n                \'span\',\n                { onClick: _this.selectPerson, id: d[0].id },\n                d[0].text\n              ),\n              React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'xjt\' })\n            )\n          );\n        } else if (d[0].status == \'close\') {\n          return React.createElement(\n            \'div\',\n            { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'common_box\' },\n            React.createElement(\n              \'div\',\n              { className: \'bord\' },\n              React.createElement(\n                \'span\',\n                { onClick: _this.selectPerson, id: d[0].id },\n                d[0].text\n              ),\n              React.createElement(\'i\', { id: d[0].imgId, onClick: _this.toggle, className: \'zjt\' })\n            )\n          );\n        } else if (d[0].status == \'bottom\') {\n          return React.createElement(\n            \'div\',\n            { style: { paddingLeft: d[0].length * 10 - 30 + "px" }, className: \'bottom_box\' },\n            React.createElement(\n              \'div\',\n              { className: \'bord\' },\n              React.createElement(\n                \'span\',\n                { onClick: _this.selectPerson, id: d[0].id },\n                d[0].text\n              )\n            )\n          );\n        }\n      });\n    }\n    if (data.content1.length > 0) {\n      var thead = data.thead.map(function (d3, i3) {\n        return React.createElement(\n          \'span\',\n          null,\n          d3\n        );\n      });\n      var people = data.content1.map(function (d1, i1) {\n        if (d1[0].selected == \'true\') {\n          return React.createElement(\n            \'div\',\n            { className: \'people\', onClick: _this.checkOption, \'data-index\': i1 },\n            d1[0].text\n          );\n        } else if (d1[0].selected == \'false\') {\n          return React.createElement(\n            \'div\',\n            { className: \'people\', onClick: _this.checkOption, \'data-index\': i1 },\n            d1[0].text\n          );\n        }\n      });\n    }\n    if (data.content2.length > 0) {\n      var thead = data.thead.map(function (d3, i3) {\n        return React.createElement(\n          \'span\',\n          null,\n          d3\n        );\n      });\n      var people2 = data.content2.map(function (d1, i1) {\n        return React.createElement(\n          \'span\',\n          { className: \'people2\', onClick: _this.checkOption2, \'data-index\': i1 },\n          d1[0][0]\n        );\n      });\n    }\n    if (data.content3.length > 0) {\n      var people3 = data.content3.map(function (d, i) {\n        return React.createElement(\n          \'li\',\n          null,\n          d.map(function (d1, i1) {\n            return React.createElement(\n              \'span\',\n              null,\n              d1\n            );\n          })\n        );\n      });\n    }\n    return React.createElement(\n      \'div\',\n      { className: \'box_select\' },\n      React.createElement(\n        \'div\',\n        { className: \'search_nav\' },\n        data.status == \'1\' ? React.createElement(\n          \'ul\',\n          null,\n          React.createElement(\n            \'li\',\n            { className: \'on\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.tabs1 },\n              \'\\u6309\\u7EC4\\u7EC7\\u7ED3\\u6784\'\n            )\n          ),\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'span\',\n              { onClick: _this.tabs2 },\n              \'\\u7EC4\\u5408\\u67E5\\u8BE2\'\n            )\n          )\n        ) : React.createElement(\n          \'ul\',\n          null,\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'span\',\n              { onClick: _this.tabs1 },\n              \'\\u6309\\u7EC4\\u7EC7\\u7ED3\\u6784\'\n            )\n          ),\n          React.createElement(\n            \'li\',\n            { className: \'on\' },\n            React.createElement(\n              \'span\',\n              { onClick: _this.tabs2 },\n              \'\\u7EC4\\u5408\\u67E5\\u8BE2\'\n            )\n          )\n        )\n      ),\n      data.status == \'1\' ? React.createElement(\n        \'div\',\n        { className: \'tree_box\' },\n        tree\n      ) : React.createElement(\'div\', { style: { display: "none" } }),\n      data.status == \'2\' ? React.createElement(\n        \'div\',\n        { className: \'search_box\' },\n        React.createElement(\n          \'div\',\n          { className: \'lst_lfj\' },\n          React.createElement(\n            \'span\',\n            null,\n            \'\\u59D3\\u540D\'\n          ),\n          React.createElement(AInput, { onBlur: _this.name, value: data.search.inputValue[0] })\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'lst_lfj\' },\n          React.createElement(\n            \'button\',\n            { onClick: _this.search },\n            \'\\u641C\\u7D22\'\n          )\n        )\n      ) : React.createElement(\'div\', { style: { display: "none" } }),\n      data.display_status == \'open\' ? React.createElement(\n        \'div\',\n        { className: \'dis_status\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u663E\\u793A\\u65E0\\u8D26\\u53F7\\u4EBA\\u5458\'\n        ),\n        React.createElement(\'div\', { className: \'open\' })\n      ) : React.createElement(\n        \'div\',\n        { className: \'dis_status\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u663E\\u793A\\u65E0\\u8D26\\u53F7\\u4EBA\\u5458\'\n        ),\n        React.createElement(\'div\', { className: \'down\' })\n      ),\n      data.status == \'1\' ? React.createElement(\n        \'div\',\n        { className: \'people_box\' },\n        people\n      ) : React.createElement(\'div\', { style: { display: \'none\' } }),\n      data.status == \'1\' ? React.createElement(\n        \'div\',\n        { className: \'delete_box\' },\n        people2\n      ) : React.createElement(\'div\', { style: { display: \'none\' } }),\n      React.createElement(\n        \'ul\',\n        { className: \'people3\' },\n        people3\n      )\n    );\n  }\n});';
    },
    getData_control38_I5LH3P: function getData_control38_I5LH3P(elem) {},
    doAction_uiControl36_Ik9Qso: function doAction_uiControl36_Ik9Qso(data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).children('button').eq(1).click();
      }if (data.eventType == 'edit') {
        $(elem).children('button').eq(3).click();
      }
    },
    getTemplate_uiControl36_Ik9Qso: function getTemplate_uiControl36_Ik9Qso() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"\u5185\u90E8\u4EBA\u5458"}} \n       backIsShow = {true}\n        editIsShow={true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        edit = {(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'edit\'\n            })\n          }\n        }}\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this,\n          _React$createElement;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, (_React$createElement = {\n        data: { centerText: "\u5185\u90E8\u4EBA\u5458" },\n        backIsShow: true,\n        editIsShow: true\n      }, _defineProperty(_React$createElement, \'editIsShow\', true), _defineProperty(_React$createElement, \'rightText\', \'\\u4FDD\\u5B58\'), _defineProperty(_React$createElement, \'edit\', function edit(e) {\n        var handler = _this2.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'edit\'\n          });\n        }\n      }), _defineProperty(_React$createElement, \'save\', function save(e) {\n        var handler = _this2.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'save1\'\n          });\n        }\n      }), _defineProperty(_React$createElement, \'back\', function back(e) {\n        var handler = _this2.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: \'click\'\n          });\n        }\n      }), _React$createElement));\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control143_MFhimL: function (elem) {},
    doAction_uiControl121_XGHaKQ: function (data, elem) {
      if (data.eventType == 'clcik') {
        elem.ownerDocument.defaultView.btnok_onclick();
      }
    },
    getTemplate_uiControl121_XGHaKQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n     var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'click'\n        })\n      }\n\t},\n  render: function() {\n    return (\n      <div className=\"personSureBtn\" onClick = {(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'clcik'\n            })\n          }\n        }}>\n        \u786E\u5B9A\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { className: 'personSureBtn', onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'clcik'\n            });\n          }\n        } },\n      '\\u786E\\u5B9A'\n    );\n  }\n});";
    }
  });
})(window, ysp);