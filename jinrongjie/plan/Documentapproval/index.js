"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control108_46cZtf: function (elem) {
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
                }
                //判断radio
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
                          arr.push({ text: $(this).text().trim(), selected: ""
                          });
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
                        arr2.push({ text: $(this).children("textarea").prop('value'), type: 'textarea', id: $(this).children("textarea")[0].id });
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
                          } else if ($(this)[0].className == 'zdn' && $(this)[0].children.length == 0 || $(this)[0].children.length == 2 && $(this)[0].children[0].tagName == 'BR') {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      } else if ($(elem).children("table").length == 1) {
        var elem2 = $(elem).children("table").eq(0)[0];
        var tbody2 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody2).children("tr").each(function () {
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell2' });
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
                        arr2.push({ text: $(this).children("textarea").prop('value'), type: 'textarea', id: $(this).children("textarea")[0].id });
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
                        else if ($(this)[0].className == 'zdn' && ($(this).children().length == 0 || $(this)[0].children.length == 1 && $(this)[0].children[0].tagName == 'BR')) {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this)[0].className == 'zdn' && $(this)[0].children.length == 2 && $(this)[0].children[0].tagName == 'BR') {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      }return data;
    },
    doAction_uiControl93_sBQFT0: function (data, elem) {
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
        var id = data.dataCustom.id;var val = data.dataCustom.value;
        var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("select").each(function () {
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
        var id = data.dataCustom.id;var val = data.dataCustom.value;
        var elem1 = $(elem).children("table").eq(0)[0];var tbody1 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody1).find("select").each(function () {
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
    },
    getTemplate_uiControl93_sBQFT0: function () {
      var selfTemplate = "module.exports = React.createClass({\n  about1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'about1'\n      })\n    }\n  },\n  about2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'about2'\n      })\n    }\n  },\n  button2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button2',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'degree',\n        data: e.target.value\n      })\n    }\n  },\n  button1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'button1',\n        data: e.target.getAttribute('data-id')\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'inputBlur',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'textarea1',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'select',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onChange2',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  more:function(e){\n    if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length)\n    if(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length){\n      var blo = e.target.ownerDocument.querySelectorAll(\".bottom_tb\")[0];\n      if(blo && blo.children.length > 0){\n        var lth = blo.children.length ;\n          for(var i=0;i<lth;i++){\n            blo.children[i].style.display = 'block';\n          }\n          _target.style.display = 'none';\n          document.getElementsByClassName(\"button_less\")[0].style.display = 'block';\n        }\n    \t}\n    }\n    ,\n   less:function(e){\n      if(e.target.tagName == 'SPAN'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    var blo = document.getElementsByClassName(\"bottom_tb\")[0];\n     if(blo.children.length > 0){\n        var lth = blo.children.length ;\n        for(var i=10;i<lth;i++){\n          blo.children[i].style.display = 'none';\n        }\n        _target.style.display = 'none';\n        document.getElementsByClassName(\"button_more\")[0].style.display = 'block';\n      }\n     }\n   ,\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    \n    \n    \n    \n    \n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0 && d1[0].type){\n          if(d1[0].type == 'title' && d1[0].type){\n            return (<div className = 'font-yell'>{d1[0].text}</div>)\n          } \n           if(d1[0].type == 'title1'){\n            return (<div style={{display:'none'}}></div>)\n          } \n          if(d1[0].type == 'tit_yell' && d1[0].type){\n            return (<div className = 'tit_yell espel'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == 'a'){\n            return (<div className = 'name'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == 'input'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == 'textarea'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == 'fujian'){\n           var fj =  d1[0].text.map(function(d2,i2){\n              return (<div className='file'><div>{d2}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n            })\n            return (<div className='file_box'>{fj}</div>)\n          }\n          else if(d1[0].type == 'button2'){\n            return(<button onClick={_this.button2} id = {d1[0].id}>{d1[0].text}</button>)\n          }\n          else if(d1[0].type == 'button'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className='button_box'><div>{ite}</div><button onClick={_this.button1} className = 'name' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == 'suggest'){\n            return (<div className = \"textArea\" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == 'selcet'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\n        }       \n      })   \n      var detail2 = data.base_info.content.map(function(d1,i1){\n        if(d1[0].type){\n        if(d1[0].type == 'suggest_final'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div>            \n                <div contentEditable='true' className = \"textArea2\" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6587\u6863</span>\n                  <div className='about_box'>\n                    <div className='box_con'>{related_document}</div>\n                    <button onClick={_this.about1}></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className='ovh'>\n                  <span className='font-yell'>\u76F8\u5173\u6D41\u7A0B</span>\n                  <div  className='about_box'>\n                    <div className='box_con'>{related_process}</div>\n                    <button onClick={_this.about2}></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n        }\n      })\n      \n    return (\n      <div className='ysp_table_lfj'>\n        <div className='header_box'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>      \n        <div className='bottom_box'>\n          <div className='tit_yell'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className='bottom_tb'>{detail}</div>\n          <div className='ysp_button_more button_more' onClick={_this.more}><span>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span></div>\n          <div className='ysp_button_more button_less' onClick={_this.less}><span>\u6536\u8D77\u5168\u90E8\u5185\u5BB9</span></div>\n        </div>\n        <div className='bottom_box'>\n          <div style={{paddingLeft:'0'}} className='bottom_tb'>\n          <div className='tit_yell'>\u7B7E\u5B57\u610F\u89C1</div>\n        \t{detail2}\n            </div>\n        </div>\n      </div>\n    )\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  about1: function about1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'about1'\n      });\n    }\n  },\n  about2: function about2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'about2'\n      });\n    }\n  },\n  button2: function button2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button2',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'degree',\n        data: e.target.value\n      });\n    }\n  },\n  button1: function button1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'button1',\n        data: e.target.getAttribute('data-id')\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'inputBlur',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'textarea1',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'select',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onChange2',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  more: function more(e) {\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length)\n    if (e.target.ownerDocument.querySelectorAll(\".bottom_tb\").length) {\n      var blo = e.target.ownerDocument.querySelectorAll(\".bottom_tb\")[0];\n      if (blo && blo.children.length > 0) {\n        var lth = blo.children.length;\n        for (var i = 0; i < lth; i++) {\n          blo.children[i].style.display = 'block';\n        }\n        _target.style.display = 'none';\n        document.getElementsByClassName(\"button_less\")[0].style.display = 'block';\n      }\n    }\n  },\n\n  less: function less(e) {\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    var blo = document.getElementsByClassName(\"bottom_tb\")[0];\n    if (blo.children.length > 0) {\n      var lth = blo.children.length;\n      for (var i = 10; i < lth; i++) {\n        blo.children[i].style.display = 'none';\n      }\n      _target.style.display = 'none';\n      document.getElementsByClassName(\"button_more\")[0].style.display = 'block';\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n\n    var detail = data.base_info.content.map(function (d1, i1) {\n      //console.log(d1[0]) \n      if (d1.length > 0 && d1[0].type) {\n        if (d1[0].type == 'title' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'font-yell' },\n            d1[0].text\n          );\n        }\n        if (d1[0].type == 'title1') {\n          return React.createElement('div', { style: { display: 'none' } });\n        }\n        if (d1[0].type == 'tit_yell' && d1[0].type) {\n          return React.createElement(\n            'div',\n            { className: 'tit_yell espel' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'a') {\n          return React.createElement(\n            'div',\n            { className: 'name' },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'input') {\n          return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n        } else if (d1[0].type == 'textarea') {\n          return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n        } else if (d1[0].type == 'fujian') {\n          var fj = d1[0].text.map(function (d2, i2) {\n            return React.createElement(\n              'div',\n              { className: 'file' },\n              React.createElement(\n                'div',\n                null,\n                d2\n              ),\n              React.createElement(\n                'div',\n                null,\n                d1[0].size[i2]\n              ),\n              React.createElement('button', null)\n            );\n          });\n          return React.createElement(\n            'div',\n            { className: 'file_box' },\n            fj\n          );\n        } else if (d1[0].type == 'button2') {\n          return React.createElement(\n            'button',\n            { onClick: _this.button2, id: d1[0].id },\n            d1[0].text\n          );\n        } else if (d1[0].type == 'button') {\n          if (d1[0].text.length > 0) {\n            var ite = d1[0].text.map(function (e1, i1) {\n              return React.createElement(\n                'a',\n                { 'data-index': i1 },\n                e1\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            { className: 'button_box' },\n            React.createElement(\n              'div',\n              null,\n              ite\n            ),\n            React.createElement('button', { onClick: _this.button1, className: 'name', 'data-id': d1[0].id })\n          );\n        } else if (d1[0].type == 'suggest') {\n          return React.createElement('div', { className: 'textArea', dangerouslySetInnerHTML: { __html: d1[0].text } });\n        } else if (d1[0].type == 'selcet') {\n          var option = d1[0].text.map(function (d3, i3) {\n            return React.createElement(\n              'option',\n              { selected: d3.select },\n              d3.text\n            );\n          });\n          return React.createElement(\n            'select',\n            { id: d1[0].id, onChange: _this.select },\n            option\n          );\n        }\n      }\n    });\n    var detail2 = data.base_info.content.map(function (d1, i1) {\n      if (d1[0].type) {\n        if (d1[0].type == 'suggest_final') {\n          var related_document = data.related_document.map(function (d3, i3) {\n            return React.createElement(\n              'a',\n              null,\n              d3\n            );\n          });\n          var related_process = data.related_process.map(function (d4, i4) {\n            return React.createElement(\n              'a',\n              null,\n              d4\n            );\n          });\n          if (data.file.length > 0) {\n            var file = data.file.map(function (d5, i5) {\n              return React.createElement(\n                'div',\n                null,\n                data.file.length\n              );\n            });\n          }\n          return React.createElement(\n            'div',\n            null,\n            React.createElement('div', { contentEditable: 'true', className: 'textArea2', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n            React.createElement(\n              'div',\n              { className: 'ovh' },\n              React.createElement(\n                'span',\n                { className: 'font-yell' },\n                '\\u76F8\\u5173\\u6587\\u6863'\n              ),\n              React.createElement(\n                'div',\n                { className: 'about_box' },\n                React.createElement(\n                  'div',\n                  { className: 'box_con' },\n                  related_document\n                ),\n                React.createElement('button', { onClick: _this.about1 })\n              )\n            ),\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'div',\n                { className: 'ovh' },\n                React.createElement(\n                  'span',\n                  { className: 'font-yell' },\n                  '\\u76F8\\u5173\\u6D41\\u7A0B'\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'about_box' },\n                  React.createElement(\n                    'div',\n                    { className: 'box_con' },\n                    related_process\n                  ),\n                  React.createElement('button', { onClick: _this.about2 })\n                )\n              )\n            )\n          );\n        }\n      }\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'ysp_table_lfj' },\n      React.createElement(\n        'div',\n        { className: 'header_box' },\n        React.createElement(\n          'center',\n          null,\n          data.header.title\n        ),\n        React.createElement(\n          'center',\n          null,\n          data.header.number\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'bottom_box' },\n        React.createElement(\n          'div',\n          { className: 'tit_yell' },\n          '\\u57FA\\u672C\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'bottom_tb' },\n          detail\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp_button_more button_more', onClick: _this.more },\n          React.createElement(\n            'span',\n            null,\n            '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp_button_more button_less', onClick: _this.less },\n          React.createElement(\n            'span',\n            null,\n            '\\u6536\\u8D77\\u5168\\u90E8\\u5185\\u5BB9'\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'bottom_box' },\n        React.createElement(\n          'div',\n          { style: { paddingLeft: '0' }, className: 'bottom_tb' },\n          React.createElement(\n            'div',\n            { className: 'tit_yell' },\n            '\\u7B7E\\u5B57\\u610F\\u89C1'\n          ),\n          detail2\n        )\n      )\n    );\n  }\n});";
    },
    getData_control112_1msmLu: function (elem) {},
    doAction_uiControl96_ogZVFb: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl96_ogZVFb: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B\"}} \n        backIsShow = {true}\n        editIsShow={true}\n        rightText = '\u4FDD\u5B58'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B\" },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: '\\u4FDD\\u5B58',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'save1'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control138_Q3UQiw: function (elem) {
      if (!elem) {
        return;
      }var z = elem.ownerDocument.defaultView.check_form.toString();if (z) {
        var reg = /userid=[0-9]{1,}/;var value = z.match(reg)[0] && z.match(reg)[0].split("=")[1];
      }return { name: elem.querySelector('td').textContent.trim(), value: value || "" };
    },
    doAction_uiControl117_sypnNO: function (data, elem) {},
    getTemplate_uiControl117_sypnNO: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(z){\n    super(z)\n    this.state = {\n      arrFlag:\"\",\n      addFlag: true\n    }\n  }\n\n  click (){\n    if(this.state.addFlag) {\n      this.setState({addFlag: false})\n      this.setState({arrFlag:this.state.arrFlag+\"1\"})\n    } else {\n      this.componentDidUpdate()\n    }\n  }\n  \n  componentDidUpdate(){\n    var forms = this.refs.div.querySelectorAll(\"form\")\n    var activeForm = forms[forms.length-1]\n    activeForm.Filedata.click()\n  }\n  \n   handleChange(e) {\n    this.setState({addFlag: true})\n    var fileData = e.target;//\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\n    var form = fileData.parentElement.parentElement;//\u627E\u5230\u5BF9\u5E94\u7684form\n    var fileName = form.Filename;//\u627E\u5230input name=filename\u7684\u5143\u7D20\uFF0C\n    fileName.value = fileData.files[0].name; //\u5C06\u8FD9\u4E2A\u5143\u7D20\u7684value\u8BBE\u4E3A\u521A\u521A\u4E0A\u4F20\u7684\u6587\u4EF6\u540D\n     var valueDiv = form.previousElementSibling;\n    valueDiv.innerHTML = fileData.files[0].name;\n     valueDiv.style.display = \"block\"\n\t\tvar xhr = new XMLHttpRequest();//\u521B\u5EFAajax\u5BF9\u8C61\n    xhr.open('post', 'http://192.168.200.63/docs/docupload/MultiDocUploadByWorkflow.jsp');//\u53D1\u9001\u8BF7\u6C42\n    var formData = new FormData(form);//\u683C\u5F0F\u5316form\u7684\u6570\u636E\n    xhr.send(formData);//\u53D1\u9001\u6570\u636E\n    var responseT = \"\";\n\t\t\n    xhr.onreadystatechange = function() {\n      if (xhr.readyState == 4 && xhr.status == 200) {\n        // debugger\n        responseT = xhr.responseText;//\u5F97\u5230\u8BF7\u6C42\u56DE\u6765\u7684\u5185\u5BB9\n        // if (handler) {\n        //   handler({  //\u5C06\u5185\u5BB9\u4F20\u9012\u7ED9\u56DE\u8C03\n        //     eventType: 'click',\n        //     data: responseT\n        //   });\n        // }\n      }\n    }\n\t}\n  \n  render(){\n    \t\n      var data = this.props.customData;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\">\n        <span>{data.name}</span>\n        <i className=\"relate-files\" onClick={this.click.bind(this)}></i>\n        <div ref='div'>\n             { [].map.call(this.state.arrFlag,(()=>{\n                return  (\n                  <div>\n                    \t<div  style={{display:\"none\"}}></div>\n                    \t<form style={{display:\"none\"}}>\n                        <div>\n                          <span>\u4E0A\u4F20</span>\n                          <input type=\"file\" onChange={this.handleChange.bind(this)} name=\"Filedata\"/>\n                        </div>\n                        <input type=\"hidden\" value=\"Submit Query\" name=\"Upload\"/>\n                        <input type=\"hidden\" name=\"Filename\"/>\n                        <input type=\"hidden\" name=\"subId\" value=\"5\"/>\n                        <input type=\"hidden\" name=\"logintype\" value=\"1\"/>\n                        <input type=\"hidden\" name=\"secId\" value=\"106\"/>\n                        <input type=\"hidden\" name=\"userid\" value={data.value}/>\n                        <input type=\"hidden\" name=\"mainId\" value=\"3\"/>\n                      </form>\n                    \t\n                  </div>\n                )\n    })\n             )}\n        </div>\n      </div>\n      )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(z) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, z));\n\n    _this.state = {\n      arrFlag: \"\",\n      addFlag: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click() {\n      if (this.state.addFlag) {\n        this.setState({ addFlag: false });\n        this.setState({ arrFlag: this.state.arrFlag + \"1\" });\n      } else {\n        this.componentDidUpdate();\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      var forms = this.refs.div.querySelectorAll(\"form\");\n      var activeForm = forms[forms.length - 1];\n      activeForm.Filedata.click();\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(e) {\n      this.setState({ addFlag: true });\n      var fileData = e.target; //\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\n      var form = fileData.parentElement.parentElement; //\u627E\u5230\u5BF9\u5E94\u7684form\n      var fileName = form.Filename; //\u627E\u5230input name=filename\u7684\u5143\u7D20\uFF0C\n      fileName.value = fileData.files[0].name; //\u5C06\u8FD9\u4E2A\u5143\u7D20\u7684value\u8BBE\u4E3A\u521A\u521A\u4E0A\u4F20\u7684\u6587\u4EF6\u540D\n      var valueDiv = form.previousElementSibling;\n      valueDiv.innerHTML = fileData.files[0].name;\n      valueDiv.style.display = \"block\";\n      var xhr = new XMLHttpRequest(); //\u521B\u5EFAajax\u5BF9\u8C61\n      xhr.open('post', 'http://192.168.200.63/docs/docupload/MultiDocUploadByWorkflow.jsp'); //\u53D1\u9001\u8BF7\u6C42\n      var formData = new FormData(form); //\u683C\u5F0F\u5316form\u7684\u6570\u636E\n      xhr.send(formData); //\u53D1\u9001\u6570\u636E\n      var responseT = \"\";\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState == 4 && xhr.status == 200) {\n          // debugger\n          responseT = xhr.responseText; //\u5F97\u5230\u8BF7\u6C42\u56DE\u6765\u7684\u5185\u5BB9\n          // if (handler) {\n          //   handler({  //\u5C06\u5185\u5BB9\u4F20\u9012\u7ED9\u56DE\u8C03\n          //     eventType: 'click',\n          //     data: responseT\n          //   });\n          // }\n        }\n      };\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon' },\n        React.createElement(\n          'span',\n          null,\n          data.name\n        ),\n        React.createElement('i', { className: 'relate-files', onClick: this.click.bind(this) }),\n        React.createElement(\n          'div',\n          { ref: 'div' },\n          [].map.call(this.state.arrFlag, function () {\n            return React.createElement(\n              'div',\n              null,\n              React.createElement('div', { style: { display: \"none\" } }),\n              React.createElement(\n                'form',\n                { style: { display: \"none\" } },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u4E0A\\u4F20'\n                  ),\n                  React.createElement('input', { type: 'file', onChange: _this2.handleChange.bind(_this2), name: 'Filedata' })\n                ),\n                React.createElement('input', { type: 'hidden', value: 'Submit Query', name: 'Upload' }),\n                React.createElement('input', { type: 'hidden', name: 'Filename' }),\n                React.createElement('input', { type: 'hidden', name: 'subId', value: '5' }),\n                React.createElement('input', { type: 'hidden', name: 'logintype', value: '1' }),\n                React.createElement('input', { type: 'hidden', name: 'secId', value: '106' }),\n                React.createElement('input', { type: 'hidden', name: 'userid', value: data.value }),\n                React.createElement('input', { type: 'hidden', name: 'mainId', value: '3' })\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control139_KCrEat: function (elem) {
      if (!elem) {
        return;
      }var data = [];var showData = [];var moreData = [];var doc = elem.querySelector('#toolbarmenu');if (doc) {
        //   showData.push(doc.querySelector('.btn_subnobackName').textContent.trim()); //批准
        //   showData.push(doc.querySelector('.btn_subbackName').textContent.trim()); //提交
        //   [].forEach.call(doc.querySelectorAll('.btn_edit'), function (item, index) {//前插 后插
        //     moreData.push(item.textContent.trim());
        //   });
        //   moreData.push(doc.querySelector('.btn_rejectName').textContent.trim()); //退回
        //   moreData.push(doc.querySelector('.btn_forward').textContent.trim()); //送阅
        //   moreData.push(doc.querySelector('.btn_back').textContent.trim()); //返回
        [].forEach.call(doc.querySelectorAll('button'), function (btnItem, tdIndex) {
          data.push(btnItem.textContent.trim());
        });
      } // data.showData = showData;
      // data.moreData = moreData;
      return data;
    },
    doAction_uiControl118_x342Nu: function (data, elem) {
      var eventType = data.eventType;var btnIndex = data.dataCustom.num;if (eventType == 'click') {
        elem.querySelectorAll('button')[btnIndex].click(); // ysp.customHelper.openWindow('http://192.168.200.63/workflow/request/Remark.jsp?requestid=118465&workflowRequestLogId=-1', 'sy');
      }
    },
    getTemplate_uiControl118_x342Nu: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      isMoreOpen: false,\n      isShowBottom: true\n    }\n  }\n  \n  btnClick=(e)=>{\n    debugger;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{num:e.target.dataset.num},\n        eventType:'click'\n      })\n    }\n  }\n  \n  showMoreButton=(e)=>{\n    this.setState((prevState) => {\n  \t\treturn {\n        isMoreOpen: !prevState.isMoreOpen,\n      \tisShowBottom: !prevState.isShowBottom\n      };\n\t\t});\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData||[];\n    if(data == null || data == undefined){\n      return null;\n    }\n    return (\n    \t<div className=\"ysp-process-form-wrapper\">\n        {_this.state.isShowBottom&&\n      \t<div className=\"ysp-process-form-bottom-button\">\n          <div>\n            <span data-num=\"1\" onClick={_this.btnClick.bind(_this)}>{data[6]}</span>\n            <span data-num=\"0\" onClick={_this.btnClick.bind(_this)}>{data[0]}</span>\n            <span onClick={_this.showMoreButton.bind(_this)}></span>\n          </div>\n          \n        </div>\n        }\n        {_this.state.isMoreOpen &&\n          <div className=\"load-more-coverlayer\">\n          \t<div className=\"load-more-data\">\n              <section>\n                <div data-num=\"2\" onClick={_this.btnClick.bind(_this)}>{data[2]}</div>\n                <div data-num=\"3\" onClick={_this.btnClick.bind(_this)}>{data[3]}</div>\n                <div data-num=\"5\" onClick={_this.btnClick.bind(_this)}>{data[5]}</div>\n               \n                {/*\n                  data.map((item ,index)=>{\n                    return <div data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</div>\n                  })\n                */}\n              </section>\n              <div data-num=\"7\" onClick={_this.showMoreButton.bind(_this)}>{data[6]}</div>\n            </div>\n          </div>\n        }\n      </div>\n      \n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      debugger;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { num: e.target.dataset.num },\n          eventType: 'click'\n        });\n      }\n    };\n\n    _this2.showMoreButton = function (e) {\n      _this2.setState(function (prevState) {\n        return {\n          isMoreOpen: !prevState.isMoreOpen,\n          isShowBottom: !prevState.isShowBottom\n        };\n      });\n    };\n\n    _this2.state = {\n      isMoreOpen: false,\n      isShowBottom: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data == null || data == undefined) {\n        return null;\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-process-form-wrapper' },\n        _this.state.isShowBottom && React.createElement(\n          'div',\n          { className: 'ysp-process-form-bottom-button' },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              { 'data-num': '1', onClick: _this.btnClick.bind(_this) },\n              data[6]\n            ),\n            React.createElement(\n              'span',\n              { 'data-num': '0', onClick: _this.btnClick.bind(_this) },\n              data[0]\n            ),\n            React.createElement('span', { onClick: _this.showMoreButton.bind(_this) })\n          )\n        ),\n        _this.state.isMoreOpen && React.createElement(\n          'div',\n          { className: 'load-more-coverlayer' },\n          React.createElement(\n            'div',\n            { className: 'load-more-data' },\n            React.createElement(\n              'section',\n              null,\n              React.createElement(\n                'div',\n                { 'data-num': '2', onClick: _this.btnClick.bind(_this) },\n                data[2]\n              ),\n              React.createElement(\n                'div',\n                { 'data-num': '3', onClick: _this.btnClick.bind(_this) },\n                data[3]\n              ),\n              React.createElement(\n                'div',\n                { 'data-num': '5', onClick: _this.btnClick.bind(_this) },\n                data[5]\n              )\n            ),\n            React.createElement(\n              'div',\n              { 'data-num': '7', onClick: _this.showMoreButton.bind(_this) },\n              data[6]\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control142_bsrJu4: function (elem) {
      if (!elem) {
        return;
      }var data = [];if ($(elem).attr('style')) {
        if ($(elem).attr('style').indexOf('active2') !== -1) {
          data.push({ text: $(elem).text().trim(), active: 'true' });
        } else {
          data.push({ text: $(elem).text().trim(), active: 'false' });
        }
      }return data;
    },
    doAction_uiControl121_q8oPwD: function (data, elem) {
      if (data.eventType == 'click1') {
        // debugger;
        elem.click();
      }
    },
    getTemplate_uiControl121_q8oPwD: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\")[0];\n    if(elem.style.display =='none'){\n      elem.style.display = 'block'\n    }\n    else{\n      elem.style.display = 'none'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6587\u6863</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\")[0];\n      if (elem.style.display == 'none') {\n        elem.style.display = 'block';\n      } else {\n        elem.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u6587\\u6863'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control144_K9tuXT: function (elem) {
      if (!elem) {
        return;
      }var data = { title: [], content: [] };if ($(elem).find("#requestlogappednDiv").length > 0 && $(elem).find("#requestlogappednDiv").children().length > 0) {
        var elem = $(elem).children("div").eq(0).find("tbody")[0];
      } else {
        var elem = $(elem).children("#mainWFHead").eq(0).find("tbody")[0];
      }if ($(elem).children(".HeaderForWF").length > 0 && $(elem).children(".HeaderForWF").children("th").length > 0) {
        $(elem).children(".HeaderForWF").children("th").each(function () {
          data.title.push($(this).text().replace(/\s/ig, ""));
        });
      }if ($(elem).children(".datalight").length > 0 && $(elem).children(".datalight").children("td").length > 0) {
        //console.log(11111111111111);
        $(elem).children(".datalight").each(function () {
          var arr = [];$(elem).children(".datalight").children("td").each(function () {
            arr.push($(this).text().trim().replace(/\s+/ig, "").replace(/fun.*\}/ig, ""));
          });data.content.push(arr);
        });
      }return data;
    },
    doAction_uiControl123_pTBHQG: function (data, elem) {
      if (data.eventType == 'block') {
        debugger;var val = parseInt(data.dataCustom) + 1;if ($(elem).find("#requestlogappednDiv").length > 0 && $(elem).find("#requestlogappednDiv").children().length > 0) {
          var elem = $(elem).children("div").eq(0).find("tbody")[0];
        } else {
          var elem = $(elem).children("#mainWFHead").eq(0).find("tbody")[0];
        }$(elem).children("tr").eq(val).children("td").eq(5).find("span").click();
      }
    },
    getTemplate_uiControl123_pTBHQG: function () {
      var selfTemplate = "module.exports = React.createClass({\n  block:function(e){\n    if(e.target.tagName == 'SPAN'){\n      var _target = e.target;\n    }\n    else{\n      var _target = e.target.className;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'block',\n        data: e.target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.content.length > 0){\n      var item = data.content.map(function(d1,i1){\n        return(\n          <section>\n              <ul className='left_box'>\n                <li>{data.title[0]}</li>\n                <li>{d1[0]}</li>\n              </ul>\n            <ul className='right_box'>\n              <li>\n                <span>{data.title[2]}</span>\n                <span>{d1[2]}</span>\n              </li>\n              <li>\n                <span>{data.title[3]}</span>\n                <span>{d1[3]}</span>\n              </li>\n              <li>\n                <span>{data.title[4]}</span>\n                <span>{d1[4]}</span>\n              </li>\n              <li>\n                <span>{data.title[5]}</span>\n                {d1[5] == '\u663E\u793A' ? <span className='green' data-index={i1} onClick={_this.block}>{d1[5]}</span> :<span className='normal'>{d1[5]}</span>}\n              </li>\n            </ul>\n          </section>\n              )\n      })\n    }\n    else{\n       var item = data.title.map(function(d,i){\n      return(<div className='box_li' style={{display:'none'}}><span>{d}</span></div>)\n    })\n    }\n    return (\n      <div className='suggest_lz_box'>\n        {item}\n      </div>\n    )\n    }\n    else{\n      return(<div style ={{display:'none'}}></div>)\n    }\n  }\n});\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  block: function block(e) {\n    if (e.target.tagName == 'SPAN') {\n      var _target = e.target;\n    } else {\n      var _target = e.target.className;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'block',\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.content.length > 0) {\n        var item = data.content.map(function (d1, i1) {\n          return React.createElement(\n            'section',\n            null,\n            React.createElement(\n              'ul',\n              { className: 'left_box' },\n              React.createElement(\n                'li',\n                null,\n                data.title[0]\n              ),\n              React.createElement(\n                'li',\n                null,\n                d1[0]\n              )\n            ),\n            React.createElement(\n              'ul',\n              { className: 'right_box' },\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d1[2]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[3]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d1[3]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[4]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d1[4]\n                )\n              ),\n              React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[5]\n                ),\n                d1[5] == '\u663E\u793A' ? React.createElement(\n                  'span',\n                  { className: 'green', 'data-index': i1, onClick: _this.block },\n                  d1[5]\n                ) : React.createElement(\n                  'span',\n                  { className: 'normal' },\n                  d1[5]\n                )\n              )\n            )\n          );\n        });\n      } else {\n        var item = data.title.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'box_li', style: { display: 'none' } },\n            React.createElement(\n              'span',\n              null,\n              d\n            )\n          );\n        });\n      }\n      return React.createElement(\n        'div',\n        { className: 'suggest_lz_box' },\n        item\n      );\n    } else {\n      return React.createElement('div', { style: { display: 'none' } });\n    }\n  }\n});";
    },

    getData_control147_v5Mf03: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1) {
        $(elem).children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$($(this).children("td").each(function () {
              arr.push($(this).text().trim());
            }));data.text.push(arr);
          }
        });
      }data.title.push('创建时间', '文档名称', '文档所有者');return data;
    },
    doAction_uiControl126_6eOGJz: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(0).click();
      }
    },
    getTemplate_uiControl126_6eOGJz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='document_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{display:'none'}}></ul>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.text.length > 0) {\n      var item = data.text.map(function (d1, i1) {\n        return React.createElement(\n          'li',\n          { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n          d1.map(function (d2, i2) {\n            return React.createElement(\n              'li',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[i2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d2\n              )\n            );\n          })\n        );\n      });\n    }\n    if (data.text.length > 0) {\n      return React.createElement(\n        'ul',\n        { style: { display: 'none' }, className: 'document_final_lfj' },\n        item\n      );\n    } else {\n      return React.createElement('ul', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control148_AvC1JI: function (elem) {},
    doAction_uiControl127_f5EZp8: function (data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl127_f5EZp8: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName(\"process_final_lfj\")[0];\n    if(elem.style.display =='none'){\n      elem.style.display = 'block'\n    }\n    else{\n      elem.style.display = 'none'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6D41\u7A0B</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName(\"process_final_lfj\")[0];\n      if (elem.style.display == 'none') {\n        elem.style.display = 'block';\n      } else {\n        elem.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u6D41\\u7A0B'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control149_FA7mWN: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1) {
        $(elem).children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$($(this).children("td").each(function () {
              arr.push($(this).text().trim());
            }));data.text.push(arr);
          }
        });
      }$(elem).find("th").each(function () {
        data.title.push($(this).text().trim());
      });return data;
    },
    doAction_uiControl128_U2CfIM: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(1).click();
      }
    },
    getTemplate_uiControl128_U2CfIM: function () {
      var selfTemplate = "module.exports = React.createClass({\n    click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='process_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{display:'none'}}></ul>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.text.length > 0) {\n      var item = data.text.map(function (d1, i1) {\n        return React.createElement(\n          'li',\n          { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n          d1.map(function (d2, i2) {\n            return React.createElement(\n              'li',\n              null,\n              React.createElement(\n                'span',\n                null,\n                data.title[i2]\n              ),\n              React.createElement(\n                'span',\n                null,\n                d2\n              )\n            );\n          })\n        );\n      });\n    }\n    if (data.text.length > 0) {\n      return React.createElement(\n        'ul',\n        { style: { display: 'none' }, className: 'process_final_lfj' },\n        item\n      );\n    } else {\n      return React.createElement('ul', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control150_ItFqSB: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1) {
        $(elem).children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$($(this).children("td").each(function () {
              arr.push($(this).text().trim());
            }));data.text.push(arr);
          }
        });
      }$(elem).find("th").each(function () {
        data.title.push($(this).text().trim());
      });return data;
    },
    doAction_uiControl129_CQZVSe: function (data, elem) {},
    getTemplate_uiControl129_CQZVSe: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n              if(i2 > 0){\n               return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>) \n              }\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='fujian_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{display:'none'}}></ul>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data.text.length > 0) {\n      var item = data.text.map(function (d1, i1) {\n        return React.createElement(\n          'li',\n          { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n          d1.map(function (d2, i2) {\n            if (i2 > 0) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d2\n                )\n              );\n            }\n          })\n        );\n      });\n    }\n    if (data.text.length > 0) {\n      return React.createElement(\n        'ul',\n        { style: { display: 'none' }, className: 'fujian_final_lfj' },\n        item\n      );\n    } else {\n      return React.createElement('ul', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control16_K32wfa: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1) {
        $(elem).children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$($(this).children("td").each(function () {
              arr.push($(this).text().trim());
            }));data.text.push(arr);
          }
        });
      }$(elem).find("th").each(function () {
        data.title.push($(this).text().trim());
      });return data;
    },
    doAction_uiControl14_Jdl4Pm: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(1).click();
      }
    },
    getTemplate_uiControl14_Jdl4Pm: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n              if(i2>0){\n               \treturn(<li><span>{data.title[i2]}</span><span>{d2}</span></li>) \n              }\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='fujian_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{display:'none'}}></ul>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data.text.length > 0) {\n      var item = data.text.map(function (d1, i1) {\n        return React.createElement(\n          'li',\n          { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n          d1.map(function (d2, i2) {\n            if (i2 > 0) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d2\n                )\n              );\n            }\n          })\n        );\n      });\n    }\n    if (data.text.length > 0) {\n      return React.createElement(\n        'ul',\n        { style: { display: 'none' }, className: 'fujian_final_lfj' },\n        item\n      );\n    } else {\n      return React.createElement('ul', { style: { display: 'none' } });\n    }\n  }\n});";
    },
    getData_control41_RmdP9a: function (elem) {},
    doAction_uiControl39_yHuHLu: function (data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl39_yHuHLu: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName(\"fujian_final_lfj\")[0];\n    if(elem.style.display =='none'){\n      elem.style.display = 'block'\n    }\n    else{\n      elem.style.display = 'none'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u9644\u4EF6</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName(\"fujian_final_lfj\")[0];\n      if (elem.style.display == 'none') {\n        elem.style.display = 'block';\n      } else {\n        elem.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u9644\\u4EF6'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);