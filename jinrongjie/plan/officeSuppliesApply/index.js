(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control71_KwgXqv: function (elem) {
      var data = { header: { title: [], number: [] }, base_lc_info: { title: [], content: [], degree: [], miji: { content: [], id: [] } }, base_info: { content: [] }, related_document: [], related_process: [], file: [] }; //附件-----------
      if ($(elem).find("#field-annexupload_tab").length > 0 && $(elem).find("#field-annexupload_tab").find("a").length > 0) {
        $(elem).find("#field-annexupload_tab").find("a").each(function () {
          data.file.push($(this).text().trim());
        });
      }if ($(elem).find("#signdocspan").length > 0 && $(elem).find("#signdocspan").children("a").length > 0) {
        $(elem).find("#signdocspan").children("a").each(function () {
          data.related_document.push($(this).text().trim());
        });
      }if ($(elem).find("#signworkflowspan").length > 0 && $(elem).find("#signworkflowspan").children("a").length > 0) {
        $(elem).find("#signworkflowspan").children("a").each(function () {
          data.related_process.push($(this).text().trim());
        });
      } // header-----------------
      if ($(elem).children(".bt").length > 0) {
        data.header.title.push($(elem).children(".bt").text().trim());
      }if ($(elem).children(".bh").length > 0) {
        data.header.number.push($(elem).children(".bh").text().trim());
      }if ($(elem).children("table").length == 2) {
        var elem1 = $(elem).children("table").eq(0)[0];if ($(elem1).find("tr").length > 0) {
          $(elem1).find("tr").each(function () {
            if ($(this).children("td").length == 1 && $(this).children("td")[0].className == 'zdm') {
              data.base_lc_info.title.push($(this).children("td").text().trim());
            } else {
              var tdl = $(this).find("td").length - 2;$(this).children("td").each(function (i) {
                if ($(this).find("input").length !== 3 && $(this)[0].className == 'zdn' && i == tdl) {
                  data.base_lc_info.content.push($(this).text());
                } //判断radio
                else if ($(this).find("input").length == 3) {
                    var arr1 = [];$(this).contents().each(function (i) {
                      if ($(this)[0].tagName == 'INPUT' && $(this)[0].checked == true) {
                        arr1.push({ text: $(this).parent().contents().eq(i + 1).text().trim(), checked: 'true' });
                      } else if ($(this)[0].tagName == 'INPUT' && $(this)[0].checked == false) {
                        arr1.push({ text: $(this).parent().contents().eq(i + 1).text().trim(), checked: 'false' });
                      }
                    });data.base_lc_info.degree.push(arr1);
                  } else if ($(this).find("input").length == 1 && $(this).find("input")[0].type == 'hidden' && $(this).children("").length == 1) {
                    var arrn = [];arrn.push($(this).text().trim());data.base_lc_info.degree.push(arrn);
                  } else if ($(this).children("select").length > 0) {
                    data.base_lc_info.miji.id.push($(this).children("select")[0].id);$(this).children("select").children("option").each(function () {
                      if ($(this).text().trim() !== '') {
                        var arr = [];if ($(this)[0].selected == true) {
                          arr.push({ text: $(this).text().trim(), selected: true });
                        } else {
                          arr.push({ text: $(this).text().trim(), selected: "" });
                        }data.base_lc_info.miji.content.push(arr);
                      }
                    });
                  }
              });
            }
          });
        }var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).children("tr").each(function () {
          if ($(this).children('.zdm').length == 2 && $(this).children('.zdn').length == 0) {
            if ($(this).next().children('.zdm').length == 2 && $(this).next().children('.zdn').length == 0) {
              var _this = this;$(this).next().children(".zdm").eq(1).find("tr").each(function (i) {
                if ($(this)[0].style.display !== 'none') {
                  var arr2 = [];arr2.push({ num: $(this).children("td").eq(0).find("input").prop("value"), idInput: $(this).children("td").eq(0).find("input").prop("id"), no: i, type: 'card', idButton: $(_this).next().children(".zdm").eq(0).find("tr").eq(i).children("td").eq(0).find("button")[0].getAttribute('onClick').match(/field\d+_\d+/) });data.base_info.content.push(arr2);
                }
              });
            }
          } else {
            $(this).children("td").each(function () {
              var arr2 = []; //判断标题-------------------------------------
              if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
                arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell' });
              } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length > 0) {
                arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
              } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length == 0) {
                arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title1'
                });
              } //判断附件-------------------------------------
              else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                  var arr3 = [];if ($(this).children("table").find("a").length > 0) {
                    $(this).children("table").find("a").each(function (i) {
                      arr3.push($(this).text().trim());
                    });
                  }if ($(this).children("table").find(".btnFlowd").length > 0) {
                    var arr4 = [];$(this).children("table").find(".btnFlowd").each(function (i) {
                      if (!/全部下载/.test($(this).text())) {
                        arr4.push($(this).text().trim().match(/\(.*\)/));
                      }
                    });
                  }arr2.push({ text: arr3, size: arr4, type: 'fujian' });
                } //判断select-------------------------------------
                else if ($(this).children("select").length > 0) {
                    var arr4 = [];$(this).children("select").children("option").each(function () {
                      if ($(this).text().trim() !== '' && $(this)[0].selected == true) {
                        arr4.push({ text: $(this).text().trim(), select: 'selected' });
                      }if ($(this).text().trim() !== '' && $(this)[0].selected == false) {
                        arr4.push({ text: $(this).text().trim(), select: '' });
                      }
                    });arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id") });
                  } //判断双button
                  else if ($(this).children("div").length == 1 && $(this).children("div").children("button").length == 2) {
                      var arr3 = [];$(this).children("div").children("button").each(function () {
                        arr3.push($(this).text());
                      });arr2.push({ text: arr3, type: 'dbutton' });
                    } //判断input-------------------------------------
                    else if ($(this).children("input").length == 1 && $(this).children("input")[0].type !== 'hidden') {
                        arr2.push({ text: $(this).children("input").prop('value'), type: 'input', id: $(this).children("input").prop('id') });
                      } //判断纯文字
                      else if ($(this).children("button").length == 0 && $(this).children("span").length == 1 && $(this).children("span").children("a").length == 1 && $(this).children("input").length > 0 && $(this).children("input")[0].type == 'hidden') {
                          arr2.push({ text: $(this).children("span").children("a").text(), type: 'a' });
                        } else if ($(this).children("span").length == 1 && $(this).children("input").length == 1 && $(this).children("input")[0].type == 'hidden') {
                          arr2.push({ text: $(this).children("span").text(), type: 'a' });
                        } //判断textarea-------------------------------------
                        else if ($(this).children("textarea").length == 1) {
                            arr2.push({ text: $(this).children("textarea").prop('value'), type: 'textarea', id: $(this).children("textarea")[0].id });
                          } //判断button-------------------------------------
                          else if ($(this).children("button").length > 0) {
                              //var arr5 = [];
                              if ($(this).children("button").next("span").length > 0 && $(this).children("button").next("span").children("a").length > 0) {
                                $(this).children("button").each(function () {
                                  var arr = [];$(this).next("span").children('a').each(function () {
                                    arr.push($(this).text());
                                  });arr2.push({ text: arr, type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/)
                                  });
                                });
                              } else {
                                $(this).children("button").each(function () {
                                  arr2.push({ text: '', type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/) });
                                });
                              }
                            } else if ($(this).children('span').eq(0).children("button").length > 0 && $(this).children('span').eq(0).children("button").attr('id').length > 0) {
                              //console.log(43534534523)
                              arr2.push({ text: $(this).find("button").text(), type: 'button2', id: $(this).children('span').eq(0).children("button").attr('id') });
                            } //判断意见-------------------------------------
                            else if ($(this)[0].className == 'zdn' && $(this).children().length == 0 || $(this)[0].children.length == 1 && $(this)[0].children[0].tagName == 'BR') {
                                arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                              } else if ($(this).find(".cke_editor").length > 0) {
                                arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML,
                                  type: 'suggest_final' });
                              }data.base_info.content.push(arr2);
            });
          }
        });
      }return data;
    }, doAction_uiControl61_VyRqhF: function (data, elem) {
      if (data.eventType == 'inputBlur') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("input").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].value = val;
          }
        });
      }if (data.eventType == 'textarea1') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("textarea").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].textContent = val;
          }
        });
      }if (data.eventType == 'select') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("select").each(function () {
          if ($(this)[0].id == id) {
            $(this).children("option").each(function () {
              if ($(this).text() == val) {
                $(this)[0].selected = 'true';
              }
            });
          }
        });
      }if (data.eventType == 'textarea') {
        var val = data.dataCustom;if ($(elem).find('.cke_editor').length > 0) {
          var body = $(elem).find('.cke_editor').find("iframe")[0].contentDocument.body;body.innerHTML = val;
        }
      }if (data.eventType == 'degree') {
        debugger;var val = data.dataCustom;var elem = $(elem).children("table").eq(0)[0];var lth = $(elem).find("tr").eq(1).children("td").eq(1).contents().length;for (var i = 0; i < lth; i++) {
          if ($(elem).find("tr").eq(1).children("td").eq(1).contents().eq(i).text() == val) {
            $(elem).find("tr").eq(1).children("td").eq(1).contents().eq(i - 1)[0].checked = 'true';
          }
        }
      }if (data.eventType == 'button1') {
        //debugger;
        var id = data.dataCustom;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("button").each(function () {
          if ($(this)[0].getAttribute('onClick').match(/field\d+/) == id) {
            $(this).click();
          }
        });
      }if (data.eventType == 'onChange2') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem1 = $(elem).children("table").eq(0)[0];var tbody1 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody1).find("select").each(function () {
          if ($(this)[0].id == id) {
            $(this).children("option").each(function () {
              if ($(this).text() == val) {
                $(this)[0].selected = 'true';
              }
            });
          }
        });
      }if (data.eventType == 'button2') {
        debugger;var id = data.dataCustom;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("button").each(function () {
          if ($(this)[0].id == id) {
            $(this).click();
          }
        });
      }if (data.eventType == 'dbutton') {
        $(elem).find("button").each(function () {
          if (/addbutton0/.test($(this).attr('id'))) {
            $(this).click();
          }
        });
      }if (data.eventType == "numBlur") {
        debugger;var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("input").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].value = val;
          }
        });
      }if (data.eventType == 'ckwp') {
        //debugger;
        var id = data.dataCustom;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("button").each(function () {
          if ($(this)[0].getAttribute('onClick').match(/field\d+_\d+/) == id) {
            $(this).click();
          }
        });
      }if (data.eventType == 'deleteTip') {
        //debugger;
        var id = data.dataCustom;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("button").each(function () {
          if ($(this)[0].getAttribute('onClick').match(/field\d+_\d+/) == id) {
            //  console.log($(this).parent());
            $(this).parent().find("input").eq(0)[0].checked = true;$(tbody2).find("button[name='delbutton0']").click();
          }
        });
      }
    }, getTemplate_uiControl61_VyRqhF: function () {
      var selfTemplate = "module.exports = React.createClass({\n  dbutton:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'dbutton'\n      })\n    }\n  },\n  dbutton2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'dbutton2'\n      })\n    }\n  },\n  button2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button2',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'degree',\n        data: e.target.textContent\n      })\n    }\n  },\n  button1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button1',\n        data: e.target.getAttribute('data-id')\n      })\n    }\n  },\n  ckwp:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'ckwp',\n        data: e.target.id\n      })\n    }\n  },\n   deleteTip:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'deleteTip',\n        data: e.target.id\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'inputBlur',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  numBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'numBlur',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea1',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onChange2',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    if(data.base_lc_info.degree[0].length > 1){\n       var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == 'true'){\n        return(<span className='egyactive' onClick = {_this.degree}>{d.text}</span>)\n      }\n      else{\n        return(<span onClick = {_this.degree}>{d.text}</span>)\n      }\n    })\n    }\n    \n    \n    \n    \n    \n    \n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0){\n          if(d1[0].type == 'title' && d1[0].type){\n            return (<div className = 'font-yell'>{d1[0].text}</div>)\n          } \n           if(d1[0].type == 'title1'){\n            return (<div style={{display:'none'}}></div>)\n          } \n          if(d1[0].type == 'tit_yell' && d1[0].type){\n            return (<div className = 'tit_yell espel'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == 'a'){\n            return (<div className = 'name'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == 'input'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == 'textarea'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == 'fujian'){\n           var fj =  d1[0].text.map(function(d2,i2){\n              return (<div className='file'><div>{d2}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n            })\n            return (<div className='file_box'>{fj}</div>)\n          }\n          else if(d1[0].type == 'button2'){\n            return(<button onClick={_this.button2} id = {d1[0].id}>{d1[0].text}</button>)\n          }\n           else if(d1[0].type == 'dbutton'){\n            return(\n              <div className='dbutton_div'>\n                <button onClick={_this.dbutton}>\u6DFB\u52A0</button>\n              </div>\n            )\n          }\n          else if(d1[0].type == 'button'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className='button_box'><div>{ite}</div><button onClick={_this.button1} className = 'name' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == 'suggest'){\n            return (<div className = \"textArea\" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == 'selcet'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\nelse if(d1[0].type == 'suggest_final'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div>            \n                <div contentEditable='true' className = \"textArea2\" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6587\u6863</span>\n                  <div className='about_box'>\n                    <div className='box_con'>{related_document}</div>\n                    <button></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6D41\u7A0B</span>\n                  <div  className='about_box'>\n                    <div className='box_con'>{related_process}</div>\n                    <button></button>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <span>\u76F8\u5173\u9644\u4EF6</span>\n                  <div>\n                    <div>{file}</div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n          else if(d1[0].type == 'card'){\n            return(<div className='card_div'>\n              <div>{d1[0].no}</div>\n              <div>\u51FA\u5E93\u7269\u54C1</div>\n              <div><div></div><button onClick={_this.ckwp} id={d1[0].idButton}></button></div>\n              <div>\u6570\u91CF</div>\n              <div><AInput onBlur = {_this.numBlur} id = {d1[0].idInput} value = {d1[0].num} /></div>\n             <button onClick={_this.deleteTip} id={d1[0].idButton}></button>\n            </div>)\n          }\n        }       \n      })\n      if(data.base_lc_info.miji.content.length > 0){\n         var option2 = data.base_lc_info.miji.content.map(function(d3,i3){\n               return(<option selected = {d3[0].selected}>{d3[0].text}</option>)\n             })\n      }\n     \n      \n      \n      \n      \n      \n      \n      \n    return (\n      <div className='ysp_table_office_lfj'>\n        <div className='header_box'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n        \n        <div className='center_box'>\n          <div className='tit_yell'>\n          \t{data.base_lc_info.title}\n          </div>\n          <div className='center_tb'>\n         \n          {data.base_lc_info.degree[0].length >1 ? \n              <div className=\"ysp_emergency\">\n                <span className=\"contentTitle\">\u7D27\u6025\u7A0B\u5EA6</span>\n                <div className=\"emergencyCheck\">\n                  {degree}\n                </div>\n              </div>\n\n              : <div>{data.base_lc_info.degree}</div>}\n          <div className='font-yell'>\u77ED\u4FE1\u63D0\u9192</div>\n          <div className='tip'>{data.base_lc_info.content}</div>\n            {data.base_lc_info.miji.content.length > 0 ? <div className='font-yell'>\u5BC6\u7EA7</div> : <div style = {{display:\"none\"}}></div>}  \n            {data.base_lc_info.miji.content.length > 0 ? <select id = {data.base_lc_info.miji.id} onChange ={_this.onChange2} className='select2'>{option2}</select> : <div style = {{display:\"none\"}}></div>}\n        </div>\n        </div>\n        <div className='bottom_box'>\n          <div className='tit_yell'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className='bottom_tb'>{detail}</div>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  dbutton: function dbutton(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'dbutton'\n      });\n    }\n  },\n  dbutton2: function dbutton2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'dbutton2'\n      });\n    }\n  },\n  button2: function button2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button2',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'degree',\n        data: e.target.textContent\n      });\n    }\n  },\n  button1: function button1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button1',\n        data: e.target.getAttribute('data-id')\n      });\n    }\n  },\n  ckwp: function ckwp(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'ckwp',\n        data: e.target.id\n      });\n    }\n  },\n  deleteTip: function deleteTip(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'deleteTip',\n        data: e.target.id\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'inputBlur',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  numBlur: function numBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'numBlur',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea1',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'select',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onChange2',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.base_lc_info.degree[0].length > 1) {\n      var degree = data.base_lc_info.degree[0].map(function (d, i) {\n        if (d.checked == 'true') {\n          return React.createElement(\n            'span',\n            { className: 'egyactive', onClick: _this.degree },\n            d.text\n          );\n        } else {\n          return React.createElement(\n            'span',\n            { onClick: _this.degree },\n            d.text\n          );\n        }\n      });\n    }\n\n    var detail = data.base_info.content.map(function (d1, i1) {\n      //console.log(d1[0]) \n      if (d1.length > 0) {\n        if (d1[0].type == 'title' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'font-yell' },\n            d1[0].text\n          );\n        }\n        if (d1[0].type == 'title1') {\n          return React.createElement('div', { style: { display: 'none' } });\n        }\n        if (d1[0].type == 'tit_yell' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'tit_yell espel' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'a') {\n          return React.createElement(\n            'div',\n            { className: 'name' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'input') {\n          return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n        } else if (d1[0].type == 'textarea') {\n          return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n        } else if (d1[0].type == 'fujian') {\n          var fj = d1[0].text.map(function (d2, i2) {\n            return React.createElement(\n              'div',\n              { className: 'file' },\n              React.createElement(\n                'div',\n                null,\n                d2\n              ),\n              React.createElement(\n                'div',\n                null,\n                d1[0].size[i2]\n              ),\n              React.createElement('button', null)\n            );\n          });\n          return React.createElement(\n            'div',\n            { className: 'file_box' },\n            fj\n          );\n        } else if (d1[0].type == 'button2') {\n          return React.createElement(\n            'button',\n            { onClick: _this.button2, id: d1[0].id },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'dbutton') {\n          return React.createElement(\n            'div',\n            { className: 'dbutton_div' },\n            React.createElement(\n              'button',\n              { onClick: _this.dbutton },\n              '\\u6DFB\\u52A0'\n            )\n          );\n        } else if (d1[0].type == 'button') {\n          if (d1[0].text.length > 0) {\n            var ite = d1[0].text.map(function (e1, i1) {\n              return React.createElement(\n                'a',\n                { 'data-index': i1 },\n                e1\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            { className: 'button_box' },\n            React.createElement(\n              'div',\n              null,\n              ite\n            ),\n            React.createElement('button', { onClick: _this.button1, className: 'name', 'data-id': d1[0].id })\n          );\n        } else if (d1[0].type == 'suggest') {\n          return React.createElement('div', { className: 'textArea', dangerouslySetInnerHTML: { __html: d1[0].text } });\n        } else if (d1[0].type == 'selcet') {\n          var option = d1[0].text.map(function (d3, i3) {\n            return React.createElement(\n              'option',\n              { selected: d3.select },\n              d3.text\n            );\n          });\n          return React.createElement(\n            'select',\n            { id: d1[0].id, onChange: _this.select },\n            option\n          );\n        } else if (d1[0].type == 'suggest_final') {\n          var related_document = data.related_document.map(function (d3, i3) {\n            return React.createElement(\n              'a',\n              null,\n              d3\n            );\n          });\n          var related_process = data.related_process.map(function (d4, i4) {\n            return React.createElement(\n              'a',\n              null,\n              d4\n            );\n          });\n          if (data.file.length > 0) {\n            var file = data.file.map(function (d5, i5) {\n              return React.createElement(\n                'div',\n                null,\n                data.file.length\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            null,\n            React.createElement('div', { contentEditable: 'true', className: 'textArea2', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n            React.createElement(\n              'div',\n              { className: 'ovh' },\n              React.createElement(\n                'span',\n                { className: 'font-yell' },\n                '\\u76F8\\u5173\\u6587\\u6863'\n              ),\n              React.createElement(\n                'div',\n                { className: 'about_box' },\n                React.createElement(\n                  'div',\n                  { className: 'box_con' },\n                  related_document\n                ),\n                React.createElement('button', null)\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                { className: 'ovh' },\n                React.createElement(\n                  'span',\n                  { className: 'font-yell' },\n                  '\\u76F8\\u5173\\u6D41\\u7A0B'\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'about_box' },\n                  React.createElement(\n                    'div',\n                    { className: 'box_con' },\n                    related_process\n                  ),\n                  React.createElement('button', null)\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u76F8\\u5173\\u9644\\u4EF6'\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'div',\n                  null,\n                  file\n                )\n              )\n            )\n          );\n        } else if (d1[0].type == 'card') {\n          return React.createElement(\n            'div',\n            { className: 'card_div' },\n            React.createElement(\n              'div',\n              null,\n              d1[0].no\n            ),\n            React.createElement(\n              'div',\n              null,\n              '\\u51FA\\u5E93\\u7269\\u54C1'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement('div', null),\n              React.createElement('button', { onClick: _this.ckwp, id: d1[0].idButton })\n            ),\n            React.createElement(\n              'div',\n              null,\n              '\\u6570\\u91CF'\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(AInput, { onBlur: _this.numBlur, id: d1[0].idInput, value: d1[0].num })\n            ),\n            React.createElement('button', { onClick: _this.deleteTip, id: d1[0].idButton })\n          );\n        }\n      }\n    });\n    if (data.base_lc_info.miji.content.length > 0) {\n      var option2 = data.base_lc_info.miji.content.map(function (d3, i3) {\n        return React.createElement(\n          'option',\n          { selected: d3[0].selected },\n          d3[0].text\n        );\n      });\n    }\n\n    return React.createElement(\n      'div',\n      { className: 'ysp_table_office_lfj' },\n      React.createElement(\n        'div',\n        { className: 'header_box' },\n        React.createElement(\n          'center',\n          null,\n          data.header.title\n        ),\n        React.createElement(\n          'center',\n          null,\n          data.header.number\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'center_box' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          data.base_lc_info.title\n        ),\n        React.createElement(\n          'div',\n          { className: 'center_tb' },\n          data.base_lc_info.degree[0].length > 1 ? React.createElement(\n            'div',\n            { className: 'ysp_emergency' },\n            React.createElement(\n              'span',\n              { className: 'contentTitle' },\n              '\\u7D27\\u6025\\u7A0B\\u5EA6'\n            ),\n            React.createElement(\n              'div',\n              { className: 'emergencyCheck' },\n              degree\n            )\n          ) : React.createElement(\n            'div',\n            null,\n            data.base_lc_info.degree\n          ),\n          React.createElement(\n            'div',\n            { className: 'font-yell' },\n            '\\u77ED\\u4FE1\\u63D0\\u9192'\n          ),\n          React.createElement(\n            'div',\n            { className: 'tip' },\n            data.base_lc_info.content\n          ),\n          data.base_lc_info.miji.content.length > 0 ? React.createElement(\n            'div',\n            { className: 'font-yell' },\n            '\\u5BC6\\u7EA7'\n          ) : React.createElement('div', { style: { display: \"none\" } }),\n          data.base_lc_info.miji.content.length > 0 ? React.createElement(\n            'select',\n            { id: data.base_lc_info.miji.id, onChange: _this.onChange2, className: 'select2' },\n            option2\n          ) : React.createElement('div', { style: { display: \"none\" } })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'bottom_box' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          '\\u57FA\\u672C\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'bottom_tb' },\n          detail\n        )\n      )\n    );\n  }\n});";
    },
    getData_control95_iOJI8l: function (elem) {
      if (!elem) {
        return;
      }var data = [];if ($(elem).find(".cke_editor").length > 0) {
        if ($(elem).find(".cke_editor").find("iframe").length > 0) {
          data.push($(elem).find(".cke_editor").find("iframe")[0].contentDocument.body.innerHTML);
        }
      }return data;
    },
    doAction_uiControl85_D8fJnW: function (data, elem) {
      if (data.eventType == 'textarea') {
        debugger;var inner = data.dataCustom;$(elem).find(".cke_editor").find("iframe")[0].contentDocument.body.innerHTML = inner;
      }
    },
    getTemplate_uiControl85_D8fJnW: function () {
      var selfTemplate = "module.exports = React.createClass({\ntextarea:function(e){\n  var handler = this.props.customHandler;\n  if(handler){\n    handler({\n      eventType:'textarea',\n      data:e.target.innerHTML\n    })\n  }\n},\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.length > 0){\n      return (\n        <div className='edition_box_lfj'>\n          <div className=\"tit_yell\">\u7B7E\u5B57\u610F\u89C1</div>\n         <div contentEditable='true' className = \"textArea2\" dangerouslySetInnerHTML = {{__html: data}} onBlur = {_this.textarea}></div>\n        </div>\n      )\n    }\n    else{\n      return (<div style = {{display:'none'}}></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.length > 0) {\n      return React.createElement(\n        'div',\n        { className: 'edition_box_lfj' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          '\\u7B7E\\u5B57\\u610F\\u89C1'\n        ),\n        React.createElement('div', { contentEditable: 'true', className: 'textArea2', dangerouslySetInnerHTML: { __html: data }, onBlur: _this.textarea })\n      );\n    } else {\n      return React.createElement('div', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control100_TOs6Ev: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push(elem.textContent);return data;
    },
    doAction_uiControl88_bzSt0V: function (data, elem) {},
    getTemplate_uiControl88_bzSt0V: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.length > 0){\n      return (\n        <div className='summit_button_lfj'>\n        \t<button>{data}</button>\n        </div>\n      )\n    }\n    else{\n      return(<div style ={{display:'none'}}></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.length > 0) {\n      return React.createElement(\n        'div',\n        { className: 'summit_button_lfj' },\n        React.createElement(\n          'button',\n          null,\n          data\n        )\n      );\n    } else {\n      return React.createElement('div', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control101_BtLdvd: function (elem) {},
    doAction_uiControl89_AAi0kp: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }if (data.eventType == 'edit') {
        $(elem).children('button').eq(3).click();
      }
    },
    getTemplate_uiControl89_AAi0kp: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u5185\u90E8\u4EBA\u5458\"}} \n        backIsShow = {true}\n        editIsShow1={false}\n        editIsShow={true}\n        rightText = '\u4FDD\u5B58'\n        edit = {(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'edit'\n            })\n          }\n        }}\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u5185\u90E8\u4EBA\u5458\" },\n        backIsShow: true,\n        editIsShow1: false,\n        editIsShow: true,\n        rightText: '\\u4FDD\\u5B58',\n        edit: function edit(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'edit'\n            });\n          }\n        },\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'save1'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);