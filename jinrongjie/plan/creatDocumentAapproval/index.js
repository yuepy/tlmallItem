(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control110_XrebWI: function (elem) {
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
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length == 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title1' });
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
                        arr2.push({ text: $(this).children("textarea").prop('value'), type: 'textarea', id: $(this).children("textarea")[0].id
                        });
                      } //判断button-------------------------------------
                      else if ($(this).children("button").length > 0) {
                          //var arr5 = [];
                          if ($(this).children("button").next("span").length > 0 && $(this).children("button").next("span").children("a").length > 0) {
                            $(this).children("button").each(function () {
                              var arr = [];$(this).next("span").children('a').each(function () {
                                arr.push($(this).text());
                              });arr2.push({ text: arr, type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/) });
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
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      }return data;
    },
    doAction_uiControl63_VG18Wm: function (data, elem) {
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
        var val = data.dataCustom;var elem = $(elem).children("table").eq(0)[0];var lth = $(elem).find("tr").eq(1).children("td").eq(1).contents().length;for (var i = 0; i < lth; i++) {
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
      }if (data.eventType == 'about1') {
        elem.ownerDocument.defaultView.eval(elem.querySelectorAll('.Browser')[0].onclick());elem.querySelectorAll('.Browser')[0].onclick(); // var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];
        // $(elem).find("button").each(function () {
        //   if ($(this).attr("title") == '相关文档') {
        //     $(this).click();
        //   }
        // });
      }if (data.eventType == 'about2') {
        // var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];
        // $(elem).find("button").each(function () {
        //   if ($(this).attr("title") == '相关流程') {
        //     $(this).click();
        //   }
        // });
        elem.ownerDocument.defaultView.eval(elem.querySelector('button[title="相关流程"]').onclick());elem.querySelector('button[title="相关流程"]').onclick();
      }
    }, getTemplate_uiControl63_VG18Wm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  about1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'about1'\n      })\n    }\n  },\n  about2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'about2'\n      })\n    }\n  },\n  button2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button2',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'degree',\n        data: e.target.value\n      })\n    }\n  },\n  button1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button1',\n        data: e.target.getAttribute('data-id')\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'inputBlur',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea1',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onChange2',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  more:function(e){\n    if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length)\n    if(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length){\n      var blo = e.target.ownerDocument.querySelectorAll(\".bottom_tb\")[0];\n      if(blo && blo.children.length > 0){\n        var lth = blo.children.length ;\n          for(var i=0;i<lth;i++){\n            blo.children[i].style.display = 'block';\n          }\n          _target.style.display = 'none';\n          document.getElementsByClassName(\"button_less\")[0].style.display = 'block';\n        }\n    \t}\n    }\n    ,\n   less:function(e){\n      if(e.target.tagName == 'SPAN'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    var blo = document.getElementsByClassName(\"bottom_tb\")[0];\n     if(blo.children.length > 0){\n        var lth = blo.children.length ;\n        for(var i=10;i<lth;i++){\n          blo.children[i].style.display = 'none';\n        }\n        _target.style.display = 'none';\n        document.getElementsByClassName(\"button_more\")[0].style.display = 'block';\n      }\n     }\n   ,\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    if(data.base_lc_info.degree[0].length > 1){\n       var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == 'true'){\n        return(<option value={d.text} selected = \"selected\">{d.text}</option>)\n      }\n      else{\n        return(<option value={d.text}>{d.text}</option>)\n      }\n    })\n    }\n    \n    \n    \n    \n    \n    \n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0){\n          if(d1[0].type == 'title' && d1[0].type){\n            return (<div className = 'font-yell'>{d1[0].text}</div>)\n          } \n           if(d1[0].type == 'title1'){\n            return (<div style={{display:'none'}}></div>)\n          } \n          if(d1[0].type == 'tit_yell' && d1[0].type){\n            return (<div className = 'tit_yell espel'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == 'a'){\n            return (<div className = 'name'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == 'input'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == 'textarea'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == 'fujian'){\n           var fj =  d1[0].text.map(function(d2,i2){\n              return (<div className='file'><div>{d2}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n            })\n            return (<div className='file_box'>{fj}</div>)\n          }\n          else if(d1[0].type == 'button2'){\n            return(<button onClick={_this.button2} id = {d1[0].id}>{d1[0].text}</button>)\n          }\n          else if(d1[0].type == 'button'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className='button_box'><div>{ite}</div><button onClick={_this.button1} className = 'name' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == 'suggest'){\n            return (<div className = \"textArea\" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == 'selcet'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\nelse if(d1[0].type == 'suggest_final'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div>            \n                <div contentEditable='true' className = \"textArea2\" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6587\u6863</span>\n                  <div className='about_box'>\n                    <div className='box_con'>{related_document}</div>\n                    <button onClick={_this.about1}></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6D41\u7A0B</span>\n                  <div  className='about_box'>\n                    <div className='box_con'>{related_process}</div>\n                    <button onClick={_this.about2}></button>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <span>\u76F8\u5173\u9644\u4EF6</span>\n                  <div>\n                    <div>{file}</div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n        }       \n      })\n      if(data.base_lc_info.miji.content.length > 0){\n         var option2 = data.base_lc_info.miji.content.map(function(d3,i3){\n               return(<option selected = {d3[0].selected}>{d3[0].text}</option>)\n             })\n      }\n     \n      \n      \n      \n      \n      \n      \n      \n    return (\n      <div className='ysp_table_lfj'>\n        <div className='header_box'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n        \n        <div className='center_box'>\n          <div className='tit_yell'>\n          \t{data.base_lc_info.title}\n          </div>\n          <div className='center_tb'>\n          <div className='font-yell'>\u7B49\u7EA7</div>\n          {data.base_lc_info.degree[0].length >1 ? <select onChange = {_this.degree}>{degree}</select> : <div>{data.base_lc_info.degree}</div>}\n          <div className='font-yell'>\u77ED\u4FE1\u63D0\u9192</div>\n          <div className='tip'>{data.base_lc_info.content}</div>\n            {data.base_lc_info.miji.content.length > 0 ? <div className='font-yell'>\u5BC6\u7EA7</div> : <div style = {{display:\"none\"}}></div>}  \n            {data.base_lc_info.miji.content.length > 0 ? <select id = {data.base_lc_info.miji.id} onChange ={_this.onChange2} className='select2'>{option2}</select> : <div style = {{display:\"none\"}}></div>}\n        </div>\n        </div>\n        <div className='bottom_box'>\n          <div className='tit_yell'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className='bottom_tb'>{detail}</div>\n          <div className='ysp_button_more button_more' onClick={_this.more}><span>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span></div>\n          <div className='ysp_button_more button_less' onClick={_this.less}><span>\u6536\u8D77\u5168\u90E8\u5185\u5BB9</span></div>\n        </div>\n        \n        \n        \n        <div className='bottom_box'>\n          \n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  about1: function about1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'about1'\n      });\n    }\n  },\n  about2: function about2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'about2'\n      });\n    }\n  },\n  button2: function button2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button2',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'degree',\n        data: e.target.value\n      });\n    }\n  },\n  button1: function button1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button1',\n        data: e.target.getAttribute('data-id')\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'inputBlur',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea1',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'select',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onChange2',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  more: function more(e) {\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length)\n    if (e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length) {\n      var blo = e.target.ownerDocument.querySelectorAll(\".bottom_tb\")[0];\n      if (blo && blo.children.length > 0) {\n        var lth = blo.children.length;\n        for (var i = 0; i < lth; i++) {\n          blo.children[i].style.display = 'block';\n        }\n        _target.style.display = 'none';\n        document.getElementsByClassName(\"button_less\")[0].style.display = 'block';\n      }\n    }\n  },\n\n  less: function less(e) {\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    var blo = document.getElementsByClassName(\"bottom_tb\")[0];\n    if (blo.children.length > 0) {\n      var lth = blo.children.length;\n      for (var i = 10; i < lth; i++) {\n        blo.children[i].style.display = 'none';\n      }\n      _target.style.display = 'none';\n      document.getElementsByClassName(\"button_more\")[0].style.display = 'block';\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.base_lc_info.degree[0].length > 1) {\n      var degree = data.base_lc_info.degree[0].map(function (d, i) {\n        if (d.checked == 'true') {\n          return React.createElement(\n            'option',\n            { value: d.text, selected: 'selected' },\n            d.text\n          );\n        } else {\n          return React.createElement(\n            'option',\n            { value: d.text },\n            d.text\n          );\n        }\n      });\n    }\n\n    var detail = data.base_info.content.map(function (d1, i1) {\n      //console.log(d1[0]) \n      if (d1.length > 0) {\n        if (d1[0].type == 'title' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'font-yell' },\n            d1[0].text\n          );\n        }\n        if (d1[0].type == 'title1') {\n          return React.createElement('div', { style: { display: 'none' } });\n        }\n        if (d1[0].type == 'tit_yell' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'tit_yell espel' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'a') {\n          return React.createElement(\n            'div',\n            { className: 'name' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'input') {\n          return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n        } else if (d1[0].type == 'textarea') {\n          return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n        } else if (d1[0].type == 'fujian') {\n          var fj = d1[0].text.map(function (d2, i2) {\n            return React.createElement(\n              'div',\n              { className: 'file' },\n              React.createElement(\n                'div',\n                null,\n                d2\n              ),\n              React.createElement(\n                'div',\n                null,\n                d1[0].size[i2]\n              ),\n              React.createElement('button', null)\n            );\n          });\n          return React.createElement(\n            'div',\n            { className: 'file_box' },\n            fj\n          );\n        } else if (d1[0].type == 'button2') {\n          return React.createElement(\n            'button',\n            { onClick: _this.button2, id: d1[0].id },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'button') {\n          if (d1[0].text.length > 0) {\n            var ite = d1[0].text.map(function (e1, i1) {\n              return React.createElement(\n                'a',\n                { 'data-index': i1 },\n                e1\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            { className: 'button_box' },\n            React.createElement(\n              'div',\n              null,\n              ite\n            ),\n            React.createElement('button', { onClick: _this.button1, className: 'name', 'data-id': d1[0].id })\n          );\n        } else if (d1[0].type == 'suggest') {\n          return React.createElement('div', { className: 'textArea', dangerouslySetInnerHTML: { __html: d1[0].text } });\n        } else if (d1[0].type == 'selcet') {\n          var option = d1[0].text.map(function (d3, i3) {\n            return React.createElement(\n              'option',\n              { selected: d3.select },\n              d3.text\n            );\n          });\n          return React.createElement(\n            'select',\n            { id: d1[0].id, onChange: _this.select },\n            option\n          );\n        } else if (d1[0].type == 'suggest_final') {\n          var related_document = data.related_document.map(function (d3, i3) {\n            return React.createElement(\n              'a',\n              null,\n              d3\n            );\n          });\n          var related_process = data.related_process.map(function (d4, i4) {\n            return React.createElement(\n              'a',\n              null,\n              d4\n            );\n          });\n          if (data.file.length > 0) {\n            var file = data.file.map(function (d5, i5) {\n              return React.createElement(\n                'div',\n                null,\n                data.file.length\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            null,\n            React.createElement('div', { contentEditable: 'true', className: 'textArea2', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n            React.createElement(\n              'div',\n              { className: 'ovh' },\n              React.createElement(\n                'span',\n                { className: 'font-yell' },\n                '\\u76F8\\u5173\\u6587\\u6863'\n              ),\n              React.createElement(\n                'div',\n                { className: 'about_box' },\n                React.createElement(\n                  'div',\n                  { className: 'box_con' },\n                  related_document\n                ),\n                React.createElement('button', { onClick: _this.about1 })\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                { className: 'ovh' },\n                React.createElement(\n                  'span',\n                  { className: 'font-yell' },\n                  '\\u76F8\\u5173\\u6D41\\u7A0B'\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'about_box' },\n                  React.createElement(\n                    'div',\n                    { className: 'box_con' },\n                    related_process\n                  ),\n                  React.createElement('button', { onClick: _this.about2 })\n                )\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                null,\n                '\\u76F8\\u5173\\u9644\\u4EF6'\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'div',\n                  null,\n                  file\n                )\n              )\n            )\n          );\n        }\n      }\n    });\n    if (data.base_lc_info.miji.content.length > 0) {\n      var option2 = data.base_lc_info.miji.content.map(function (d3, i3) {\n        return React.createElement(\n          'option',\n          { selected: d3[0].selected },\n          d3[0].text\n        );\n      });\n    }\n\n    return React.createElement(\n      'div',\n      { className: 'ysp_table_lfj' },\n      React.createElement(\n        'div',\n        { className: 'header_box' },\n        React.createElement(\n          'center',\n          null,\n          data.header.title\n        ),\n        React.createElement(\n          'center',\n          null,\n          data.header.number\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'center_box' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          data.base_lc_info.title\n        ),\n        React.createElement(\n          'div',\n          { className: 'center_tb' },\n          React.createElement(\n            'div',\n            { className: 'font-yell' },\n            '\\u7B49\\u7EA7'\n          ),\n          data.base_lc_info.degree[0].length > 1 ? React.createElement(\n            'select',\n            { onChange: _this.degree },\n            degree\n          ) : React.createElement(\n            'div',\n            null,\n            data.base_lc_info.degree\n          ),\n          React.createElement(\n            'div',\n            { className: 'font-yell' },\n            '\\u77ED\\u4FE1\\u63D0\\u9192'\n          ),\n          React.createElement(\n            'div',\n            { className: 'tip' },\n            data.base_lc_info.content\n          ),\n          data.base_lc_info.miji.content.length > 0 ? React.createElement(\n            'div',\n            { className: 'font-yell' },\n            '\\u5BC6\\u7EA7'\n          ) : React.createElement('div', { style: { display: \"none\" } }),\n          data.base_lc_info.miji.content.length > 0 ? React.createElement(\n            'select',\n            { id: data.base_lc_info.miji.id, onChange: _this.onChange2, className: 'select2' },\n            option2\n          ) : React.createElement('div', { style: { display: \"none\" } })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'bottom_box' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          '\\u57FA\\u672C\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'bottom_tb' },\n          detail\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp_button_more button_more', onClick: _this.more },\n          React.createElement(\n            'span',\n            null,\n            '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp_button_more button_less', onClick: _this.less },\n          React.createElement(\n            'span',\n            null,\n            '\\u6536\\u8D77\\u5168\\u90E8\\u5185\\u5BB9'\n          )\n        )\n      ),\n      React.createElement('div', { className: 'bottom_box' })\n    );\n  }\n});";
    }
  });
})(window, ysp);