"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control110_XrebWI: function (elem) {
      if (!elem) {
        return;
      }var data = { header: { title: [], number: [] }, base_lc_info: { title: [],
          content: [], degree: [], miji: { content: [], id: [] } }, base_info: { content: [] }, related_document: [], related_process: [], file: [], state: [] };if ($(elem).find('#field27376span').length > 0 || $(elem).find('#field27381span').length > 0) {
        if ($(elem).find('#field27376span').find("a").length > 0 || $(elem).find('#field27381span').find("a").length > 0) {
          data.state.push('open_div_lfj');
        }
      } //附件-----------
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
      }
      if ($(elem).children(".bh").length > 0) {
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
                      var arr = [];if ($(this)[0].selected == true) {
                        arr.push({ text: $(this).text().trim(), selected: true });
                      } else {
                        arr.push({ text: $(this).text().trim(), selected: "" });
                      }data.base_lc_info.miji.content.push(arr);
                    });
                  }
              });
            }
          });
        }var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).children("tr").each(function () {
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && $(this).next().find('img').length == 1 && $(this).next().find('img').attr('src').indexOf('BacoError') !== -1) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title', mark: '1' });
            } else if ($(this)[0].className == 'zdm' && $(this).next().find('img').length == 2 && $(this).next().find('img').eq(1).attr('src').indexOf('BacoError') !== -1) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title', mark: '1' });
            } else if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell2' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_ye' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length == 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title1' });
            } //判断附件-------------------------------------
            else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                var arr3 = [];if ($(this).children("table").find("a").length > 0) {
                  $(this).children("table").find("a").each(function (i) {
                    if ($(this).attr('onclick') !== undefined && $(this).attr('onclick').indexOf('openAccessory') !== -1) {
                      if ($(this).text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'txt', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('doc') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'doc', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('pdf') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'pdf', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('xls') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'xls', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('png') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'png', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('jpg') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'jpg',
                          no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('gif') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'gif', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else {
                        arr3.push({ name: $(this).text().trim(), stl: 'unknown', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      }
                    }if ($(this)[0].className == 'progressCancel') {
                      if ($(this).next().text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'txt',
                          no: 'push' });
                      } else if ($(this).next().text().indexOf('doc') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'doc', no: 'push' });
                      } else if ($(this).next().text().indexOf('pdf') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'pdf', no: 'push' });
                      } else if ($(this).next().text().indexOf('xls') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'xls', no: 'push' });
                      } else if ($(this).next().text().indexOf('png') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'png', no: 'push' });
                      } else if ($(this).next().text().indexOf('jpg') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'jpg', no: 'push' });
                      } else if ($(this).next().text().indexOf('gif') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'gif', no: 'push' });
                      } else if ($(this).next().text().indexOf('zip') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'zip', no: 'push' });
                      } else if ($(this).next().text().indexOf('ppt') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'ppt', no: 'push' });
                      } else {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'unknown', no: 'push' });
                      }
                    }
                  });
                }if ($(this).children("table").find(".btnFlowd").length > 0) {
                  var arr4 = [];$(this).children("table").find(".btnFlowd").each(function (i) {
                    if (!/全部下载/.test($(this).text())) {
                      arr4.push($(this).text().trim().match(/\(.*\)/));
                    }
                  });
                }arr2.push({ text: arr3, size: arr4, type: 'fujian' });
              } //判断select-------------------------------------
              else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == false) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(),
                        select: 'selected' });
                    }if ($(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });
                  arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id"), mark: '1', disabled: 'false' });
                } else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == true) {
                  var arr4 = [];
                  $(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(), select: 'selected' });
                    } else if ($(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id"), mark: '1', disabled: 'true' });
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
                              arr2.push({
                                text: '', type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/) });
                            });
                          }
                        } else if ($(this).children('span').eq(0).children("button").length > 0 && $(this).children('span').eq(0).children("button").attr('id').length > 0) {
                          //console.log(43534534523)
                          arr2.push({ text: $(this).find("button").text(), type: 'button22', id: $(this).children('span').eq(0).children("button").attr('id') });
                        } //判断意见-------------------------------------
                        else if ($(this)[0].className == 'zdn' && $(this).children().length == 0 || $(this)[0].children.length == 1 && $(this)[0].children[0].tagName == 'BR') {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }
            data.base_info.content.push(arr2);
          });
        });
      }return data;
    }, doAction_uiControl63_VG18Wm: function (data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var elem1 = $(elem).children("table").eq(1)[0];$(elem1).find('input').each(function () {
          if ($(this).attr('temptitle') && $(this).attr('temptitle').indexOf('附件') !== -1) {
            var value = $(this)[0].value;var arr = $(this)[0].value.split(',');console.log(arr.length);if (arr.length !== 1) {
              arr.splice(idx, 1);var valuet = arr.toString(); //console.log(valuet);
              $(this)[0].value = valuet;
            } else {
              $(this)[0].value = '';
            }
          }
        });
      }if (data.eventType == 'selectFile') {
        $(elem).find('#Filedata').eq(0).click();$(elem).find('#Filedata').eq(0)[0].parentElement.setAttribute('file-num', '1');
      }if (data.eventType == 'inputBlur') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("input").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].value = val;$(this)[0].dispatchEvent(new Event('change'));$(this)[0].dispatchEvent(new Event('blur'));
          }
        });
      }if (data.eventType == 'textarea1') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("textarea").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].textContent = val;$(this)[0].dispatchEvent(new Event('change'));$(this)[0].dispatchEvent(new Event('blur'));
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
        var val = data.dataCustom;var elem = $(elem).children("table").eq(0)[0];
        var lth = $(elem).find("tr").eq(1).children("td").eq(1).contents().length;for (var i = 0; i < lth; i++) {
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
        // elem.ownerDocument.defaultView.eval(elem.querySelectorAll('.Browser')[0].onclick());
        // elem.querySelectorAll('.Browser')[0].onclick(); 
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());
      }if (data.eventType == 'about2') {
        elem.ownerDocument.defaultView.eval(elem.querySelector('button[title="相关流程"]').onclick());
      }
    }, getTemplate_uiControl63_VG18Wm: function getTemplate_uiControl63_VG18Wm() {
      var selfTemplate = 'module.exports = React.createClass({\n  selectFile:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'selectFile\'\n      })\n    }\n  },\n  deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display=\'none\' ;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"deleteFile",\n      \tdata:e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  about1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about1\'\n      })\n    }\n  },\n  about2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about2\'\n      })\n    }\n  },\n  button2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button2\',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'degree\',\n        data: e.target.textContent\n      })\n    }\n  },\n  button1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea\',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'inputBlur\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea1\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'select\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onChange2\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  more:function(e){\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if(e.target.ownerDocument.querySelectorAll(".bottom_tb").length){\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if(blo && blo.children.length > 0){\n        var lth = blo.children.length ;\n          for(var i=0;i<lth;i++){\n            blo.children[i].style.display = \'block\';\n          }\n          _target.style.display = \'none\';\n          document.getElementsByClassName("button_less")[0].style.display = \'block\';\n        }\n    \t}\n    }\n    ,\n   less:function(e){\n      if(e.target.tagName == \'SPAN\'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n     if(blo.children.length > 0){\n        var lth = blo.children.length ;\n        for(var i=10;i<lth;i++){\n          blo.children[i].style.display = \'none\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_more")[0].style.display = \'block\';\n      }\n     }\n   ,\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n    if(data){\n    if(data.base_lc_info.degree[0].length > 1){\n       var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == \'true\'){\n        return(<span className=\'egyactive\' onClick = {_this.degree}>{d.text}</span>)\n      }\n      else{\n        return(<span onClick = {_this.degree}>{d.text}</span>)\n      }\n    })\n    }\n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0 && d1[0].type){\n          if(d1[0].type == \'title\' && d1[0].type && d1[0].mark==\'1\'){\n            return (<div className = \'font-yell\'>{d1[0].text}<span className=\'must_mark\'></span></div>)\n          } \n         else if(d1[0].type == \'title\' && d1[0].type && d1[0].text==\'\u9644\u4EF6\'){\n            return (<div className=\'push_file_box\'><div className = \'font-yell\'>{d1[0].text}</div><button onClick={_this.selectFile}>\u9009\u62E9\u6587\u4EF6</button></div>)\n          } \n          if(d1[0].type == \'title\' && d1[0].type){\n            return (<div className = \'font-yell\'>{d1[0].text}</div>)\n          } \n          else if(d1[0].type == \'title1\'){\n            return (<div style={{display:\'none\'}}></div>)\n          } \n          else if(d1[0].type == \'tit_yell\' && d1[0].type){\n            return (<div className = \'tit_yell espel\'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == \'a\'){\n            return (<div className = \'name\'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == \'input\'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == \'textarea\'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == \'fujian\'){\n           var fj =  d1[0].text.map(function(d2,i2){\n             if(d2.no!==\'push\'){\n              return (<div className=\'file\' data-no={d2.no} data-type={d2.stl} onClick={_this.preview}><div>{d2.name}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n             }\n             else{\n              return (<div className=\'file2\' data-no={d2.no} data-type={d2.stl}><div>{d2.name}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i2} onClick={_this.deleteFile}></button></div>)\n             }\n            })\n            return (<div className=\'file_box\'>{fj}</div>)\n          }\n          else if(d1[0].type == \'button2\'){\n            return(<button onClick={_this.button2} id = {d1[0].id}>{d1[0].text}</button>)\n          }\n          else if(d1[0].type == \'button\'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className=\'button_box\'><div>{ite}</div><button onClick={_this.button1} className = \'name\' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == \'suggest\'){\n            return (<div className = "textArea" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == \'selcet\'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\n        }       \n      })\n      \n      var detail2 = data.base_info.content.map(function(d1,i1){\n        if (d1.length >0 && d1[0].type){\n       \t if(d1[0].type == \'suggest_final\'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div style ={{margin:\'10px\'}}>            \n                <div style={{margin:\'0\'}} contentEditable=\'true\' className = "textArea2" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6587\u6863</span>\n                  <div className=\'about_box\'>\n                    <div className=\'box_con\'>{related_document}</div>\n                    <button onClick={_this.about1}></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className=\'ovh\'>\n                 \t  <span className=\'font-yell\'>\u76F8\u5173\u6D41\u7A0B</span>\n                  \t<div  className=\'about_box\'>\n                      <div className=\'box_con\'>{related_process}</div>\n                      <button onClick={_this.about2}></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n        }\n      })\n      if(data.base_lc_info.miji.content.length > 0){\n         var option2 = data.base_lc_info.miji.content.map(function(d3,i3){\n               return(<option selected = {d3[0].selected}>{d3[0].text}</option>)\n             })\n      }\n     \n      \n      \n      \n      \n      \n      \n      \n    return (\n      <div className=\'ysp_table_lfj\' id= {data.state}>\n        <div className=\'header_box\'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n        \n        <div className=\'center_box\'>\n          <div className=\'tit_yell\'>\n          \t{data.base_lc_info.title}\n          </div>\n          <div className=\'center_tb\'>\n            {data.base_lc_info.degree[0].length >1 ? \n              <div className="ysp_emergency">\n                <span className="contentTitle">\u7D27\u6025\u7A0B\u5EA6</span>\n                <div className="emergencyCheck">\n                  {degree}\n                </div>\n              </div>\n\n              : <div>{data.base_lc_info.degree}</div>}\n         \n            {data.base_lc_info.miji.content.length > 0 ? <div className=\'font-yell\'>\u5BC6\u7EA7</div> : <div style = {{display:"none"}}></div>}  \n            {data.base_lc_info.miji.content.length > 0 ? <select disabled id = {data.base_lc_info.miji.id} onChange ={_this.onChange2} className=\'select2\'>{option2}</select> : <div style = {{display:"none"}}></div>}\n        </div>\n        </div>\n        <div className=\'bottom_box\'>\n          <div className=\'tit_yell\'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className=\'bottom_tb\'>{detail}</div>\n          <div className=\'ysp_button_more button_more\' onClick={_this.more}><span>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span></div>\n          <div className=\'ysp_button_more button_less\' onClick={_this.less}><span>\u6536\u8D77\u5168\u90E8\u5185\u5BB9</span></div>\n        </div>\n\n        <div className=\'bottom_box\'>\n          <div className=\'bottom_tb\' style={{paddingLeft:\'0\'}}>\n          <div className=\'tit_yell\'>\u7B7E\u5B57\u610F\u89C1</div>\n          {detail2}\n              </div>\n        </div>\n      </div>\n    )\n    }\n    else{\n      return (<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  selectFile: function selectFile(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selectFile\'\n      });\n    }\n  },\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display = \'none\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "deleteFile",\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  about1: function about1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about1\'\n      });\n    }\n  },\n  about2: function about2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about2\'\n      });\n    }\n  },\n  button2: function button2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button2\',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'degree\',\n        data: e.target.textContent\n      });\n    }\n  },\n  button1: function button1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea\',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'inputBlur\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea1\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'select\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'onChange2\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  more: function more(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if (e.target.ownerDocument.querySelectorAll(".bottom_tb").length) {\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if (blo && blo.children.length > 0) {\n        var lth = blo.children.length;\n        for (var i = 0; i < lth; i++) {\n          blo.children[i].style.display = \'block\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_less")[0].style.display = \'block\';\n      }\n    }\n  },\n\n  less: function less(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n    if (blo.children.length > 0) {\n      var lth = blo.children.length;\n      for (var i = 10; i < lth; i++) {\n        blo.children[i].style.display = \'none\';\n      }\n      _target.style.display = \'none\';\n      document.getElementsByClassName("button_more")[0].style.display = \'block\';\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.base_lc_info.degree[0].length > 1) {\n        var degree = data.base_lc_info.degree[0].map(function (d, i) {\n          if (d.checked == \'true\') {\n            return React.createElement(\n              \'span\',\n              { className: \'egyactive\', onClick: _this.degree },\n              d.text\n            );\n          } else {\n            return React.createElement(\n              \'span\',\n              { onClick: _this.degree },\n              d.text\n            );\n          }\n        });\n      }\n      var detail = data.base_info.content.map(function (d1, i1) {\n        //console.log(d1[0]) \n        if (d1.length > 0 && d1[0].type) {\n          if (d1[0].type == \'title\' && d1[0].type && d1[0].mark == \'1\') {\n            return React.createElement(\n              \'div\',\n              { className: \'font-yell\' },\n              d1[0].text,\n              React.createElement(\'span\', { className: \'must_mark\' })\n            );\n          } else if (d1[0].type == \'title\' && d1[0].type && d1[0].text == \'\u9644\u4EF6\') {\n            return React.createElement(\n              \'div\',\n              { className: \'push_file_box\' },\n              React.createElement(\n                \'div\',\n                { className: \'font-yell\' },\n                d1[0].text\n              ),\n              React.createElement(\n                \'button\',\n                { onClick: _this.selectFile },\n                \'\\u9009\\u62E9\\u6587\\u4EF6\'\n              )\n            );\n          }\n          if (d1[0].type == \'title\' && d1[0].type) {\n            return React.createElement(\n              \'div\',\n              { className: \'font-yell\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'title1\') {\n            return React.createElement(\'div\', { style: { display: \'none\' } });\n          } else if (d1[0].type == \'tit_yell\' && d1[0].type) {\n            return React.createElement(\n              \'div\',\n              { className: \'tit_yell espel\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'a\') {\n            return React.createElement(\n              \'div\',\n              { className: \'name\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'input\') {\n            return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n          } else if (d1[0].type == \'textarea\') {\n            return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n          } else if (d1[0].type == \'fujian\') {\n            var fj = d1[0].text.map(function (d2, i2) {\n              if (d2.no !== \'push\') {\n                return React.createElement(\n                  \'div\',\n                  { className: \'file\', \'data-no\': d2.no, \'data-type\': d2.stl, onClick: _this.preview },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    d2.name\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    d1[0].size[i2]\n                  ),\n                  React.createElement(\'button\', null)\n                );\n              } else {\n                return React.createElement(\n                  \'div\',\n                  { className: \'file2\', \'data-no\': d2.no, \'data-type\': d2.stl },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    d2.name\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...\'\n                  ),\n                  React.createElement(\'button\', { \'data-index\': i2, onClick: _this.deleteFile })\n                );\n              }\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'file_box\' },\n              fj\n            );\n          } else if (d1[0].type == \'button2\') {\n            return React.createElement(\n              \'button\',\n              { onClick: _this.button2, id: d1[0].id },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'button\') {\n            if (d1[0].text.length > 0) {\n              var ite = d1[0].text.map(function (e1, i1) {\n                return React.createElement(\n                  \'a\',\n                  { \'data-index\': i1 },\n                  e1\n                );\n              });\n            }\n            return React.createElement(\n              \'div\',\n              { className: \'button_box\' },\n              React.createElement(\n                \'div\',\n                null,\n                ite\n              ),\n              React.createElement(\'button\', { onClick: _this.button1, className: \'name\', \'data-id\': d1[0].id })\n            );\n          } else if (d1[0].type == \'suggest\') {\n            return React.createElement(\'div\', { className: \'textArea\', dangerouslySetInnerHTML: { __html: d1[0].text } });\n          } else if (d1[0].type == \'selcet\') {\n            var option = d1[0].text.map(function (d3, i3) {\n              return React.createElement(\n                \'option\',\n                { selected: d3.select },\n                d3.text\n              );\n            });\n            return React.createElement(\n              \'select\',\n              { id: d1[0].id, onChange: _this.select },\n              option\n            );\n          }\n        }\n      });\n\n      var detail2 = data.base_info.content.map(function (d1, i1) {\n        if (d1.length > 0 && d1[0].type) {\n          if (d1[0].type == \'suggest_final\') {\n            var related_document = data.related_document.map(function (d3, i3) {\n              return React.createElement(\n                \'a\',\n                null,\n                d3\n              );\n            });\n            var related_process = data.related_process.map(function (d4, i4) {\n              return React.createElement(\n                \'a\',\n                null,\n                d4\n              );\n            });\n            if (data.file.length > 0) {\n              var file = data.file.map(function (d5, i5) {\n                return React.createElement(\n                  \'div\',\n                  null,\n                  data.file.length\n                );\n              });\n            }\n            return React.createElement(\n              \'div\',\n              { style: { margin: \'10px\' } },\n              React.createElement(\'div\', { style: { margin: \'0\' }, contentEditable: \'true\', className: \'textArea2\', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n              React.createElement(\n                \'div\',\n                { className: \'ovh\' },\n                React.createElement(\n                  \'span\',\n                  { className: \'font-yell\' },\n                  \'\\u76F8\\u5173\\u6587\\u6863\'\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'about_box\' },\n                  React.createElement(\n                    \'div\',\n                    { className: \'box_con\' },\n                    related_document\n                  ),\n                  React.createElement(\'button\', { onClick: _this.about1 })\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'div\',\n                  { className: \'ovh\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'font-yell\' },\n                    \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'about_box\' },\n                    React.createElement(\n                      \'div\',\n                      { className: \'box_con\' },\n                      related_process\n                    ),\n                    React.createElement(\'button\', { onClick: _this.about2 })\n                  )\n                )\n              )\n            );\n          }\n        }\n      });\n      if (data.base_lc_info.miji.content.length > 0) {\n        var option2 = data.base_lc_info.miji.content.map(function (d3, i3) {\n          return React.createElement(\n            \'option\',\n            { selected: d3[0].selected },\n            d3[0].text\n          );\n        });\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_table_lfj\', id: data.state },\n        React.createElement(\n          \'div\',\n          { className: \'header_box\' },\n          React.createElement(\n            \'center\',\n            null,\n            data.header.title\n          ),\n          React.createElement(\n            \'center\',\n            null,\n            data.header.number\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'center_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'tit_yell\' },\n            data.base_lc_info.title\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'center_tb\' },\n            data.base_lc_info.degree[0].length > 1 ? React.createElement(\n              \'div\',\n              { className: \'ysp_emergency\' },\n              React.createElement(\n                \'span\',\n                { className: \'contentTitle\' },\n                \'\\u7D27\\u6025\\u7A0B\\u5EA6\'\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'emergencyCheck\' },\n                degree\n              )\n            ) : React.createElement(\n              \'div\',\n              null,\n              data.base_lc_info.degree\n            ),\n            data.base_lc_info.miji.content.length > 0 ? React.createElement(\n              \'div\',\n              { className: \'font-yell\' },\n              \'\\u5BC6\\u7EA7\'\n            ) : React.createElement(\'div\', { style: { display: "none" } }),\n            data.base_lc_info.miji.content.length > 0 ? React.createElement(\n              \'select\',\n              { disabled: true, id: data.base_lc_info.miji.id, onChange: _this.onChange2, className: \'select2\' },\n              option2\n            ) : React.createElement(\'div\', { style: { display: "none" } })\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'tit_yell\' },\n            \'\\u57FA\\u672C\\u4FE1\\u606F\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\' },\n            detail\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_more\', onClick: _this.more },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_less\', onClick: _this.less },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u6536\\u8D77\\u5168\\u90E8\\u5185\\u5BB9\'\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\', style: { paddingLeft: \'0\' } },\n            React.createElement(\n              \'div\',\n              { className: \'tit_yell\' },\n              \'\\u7B7E\\u5B57\\u610F\\u89C1\'\n            ),\n            detail2\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control140_bXKhMF: function (elem) {
      var data = [];return data;
    },
    doAction_uiControl119_i0hwxQ: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl119_i0hwxQ: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CommonHeader } from 'ysp-custom-components';\nexport default class extends Component {\n  componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n\n\trender() {\n\t\tvar title = \"\u516C\u6587\u5BA1\u6279\u5355(\u603B\u7ECF\u7406\u5BA1\u6838)\";\n\t\treturn (\n      <div ref = 'outerWrapper'>\n\t\t\t<CommonHeader\n\t\t\t\tdata={{ centerText: title && title }}\n\t\t\t\tbackIsShow={true}\n\t\t\t\teditIsShow={true}\n\t\t\t\trightText='\u4FDD\u5B58'\n\t\t\t\tsave={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'save1'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tback={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: 'click'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t/>\n        </div>\n\t\t)\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n\t\t\tsetTimeout(function () {\n\t\t\t\touter.scrollTop = 0;\n\t\t\t}, 500);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar title = \"\u516C\u6587\u5BA1\u6279\u5355(\u603B\u7ECF\u7406\u5BA1\u6838)\";\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ ref: 'outerWrapper' },\n\t\t\t\tReact.createElement(_yspCustomComponents.CommonHeader, {\n\t\t\t\t\tdata: { centerText: title && title },\n\t\t\t\t\tbackIsShow: true,\n\t\t\t\t\teditIsShow: true,\n\t\t\t\t\trightText: '\\u4FDD\\u5B58',\n\t\t\t\t\tsave: function save(e) {\n\t\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\t\tif (handler) {\n\t\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\t\teventType: 'save1'\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\tback: function back(e) {\n\t\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\t\tif (handler) {\n\t\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\t\teventType: 'click'\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control141_DVQsTW: function (elem) {
      if (!elem) {
        return;
      }var data = [];data.push(elem.textContent);return data;
    },
    doAction_uiControl120_2GbTfo: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'click') {
        elem.click();
      }
    },
    getTemplate_uiControl120_2GbTfo: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n  btnClick=(e)=>{\n    YSP.appRenderer.showLoading(\"\u8BF7\u7A0D\u7B49...\");\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n    var evt = new Event('ysp-file-upload-06faqi');\n    evt.value = '\u4E0A\u4F20\u6587\u4EF6';\n    window.dispatchEvent(evt);\n  }\n  \n  render(){\n    var data = this.props.customData;\n    var _this = this;\n    if(data.length > 0){\n      return (\n        <div className='summit_button_lfj'>\n        \t<button style={{'font-size':'16px'}} onClick={_this.btnClick.bind(_this)}>{data}</button>\n        </div>\n      )\n    }\n    else{\n      return(<div style ={{display:'none'}}></div>)\n    }\n\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      YSP.appRenderer.showLoading(\"\u8BF7\u7A0D\u7B49...\");\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n      var evt = new Event('ysp-file-upload-06faqi');\n      evt.value = '\u4E0A\u4F20\u6587\u4EF6';\n      window.dispatchEvent(evt);\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      if (data.length > 0) {\n        return React.createElement(\n          'div',\n          { className: 'summit_button_lfj' },\n          React.createElement(\n            'button',\n            { style: { 'font-size': '16px' }, onClick: _this.btnClick.bind(_this) },\n            data\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control212_Mv9Gc5: function (elem) {
      if (!elem) {
        return;
      }var data = [];$(elem).find(".progressWrapper").each(function () {
        var arr = [];if ($(this).find(".progressName").text().indexOf('txt') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'text' });
        } else if ($(this).find(".progressName").text().indexOf('doc') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'doc' });
        } else if ($(this).find(".progressName").text().indexOf('pdf') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'pdf' });
        } else if ($(this).find(".progressName").text().indexOf('jpg') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'jpg' });
        } else if ($(this).find(".progressName").text().indexOf('xls') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'xls' });
        } else if ($(this).find(".progressName").text().indexOf('png') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'png' });
        } else if ($(this).find(".progressName").text().indexOf('zip') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'zip' });
        } else if ($(this).find(".progressName").text().indexOf('ppt') !== -1) {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'ppt' });
        } else {
          arr.push({ text: $(this).find(".progressName").text(), stl: 'unknown' });
        }data.push(arr);
      });return data;
    },
    doAction_uiControl194_h2bz95: function (data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var input = $(elem).find('#field-annexupload')[0];var value = $(input)[0].value;var arr = $(input)[0].value.split(',');arr.splice(idx, 1);var valuet = arr.toString();console.log(valuet);$(input)[0].value = valuet;
      }if (data.eventType == 'click') {
        $(elem).find("#Filedata").click();if (elem.ownerDocument.querySelectorAll('#ysp_fake_form').length == 2) {
          $(elem).find("#Filedata")[0].parentElement.setAttribute('file-num', '2');
        }
      }
    },
    getTemplate_uiControl194_h2bz95: function () {
      var selfTemplate = "module.exports = React.createClass({\n   deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName('file_box2')[0];\n    var idx = e.target.getAttribute('data-index');\n    elem.children[idx].style.display='none'\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"deleteFile\",\n      \tdata:e.target.getAttribute('data-index')\n      })\n    }\n  },\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0 && data[0].length > 0){\n      var item = data.map(function(d,i){\n      return(\n      <div className='file2' data-no={i} data-type={d[0].stl}><div>{d[0].text}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i} onClick={_this.deleteFile}></button></div>\n      \n      \n      \n      )\n    })\n    }\n    \n   return (\n     <div>\n      <div className=\"ysp-manager-audit-title-icon\">\n        <span>\u9644\u4EF6</span>\n        <i className=\"relate-files\" onClick={_this.click}></i>\n        \n      </div>\n       <div className = 'file_box2'>{item}</div>\n       </div>\n      )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName('file_box2')[0];\n    var idx = e.target.getAttribute('data-index');\n    elem.children[idx].style.display = 'none';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"deleteFile\",\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0 && data[0].length > 0) {\n      var item = data.map(function (d, i) {\n        return React.createElement(\n          'div',\n          { className: 'file2', 'data-no': i, 'data-type': d[0].stl },\n          React.createElement(\n            'div',\n            null,\n            d[0].text\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...'\n          ),\n          React.createElement('button', { 'data-index': i, onClick: _this.deleteFile })\n        );\n      });\n    }\n\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon' },\n        React.createElement(\n          'span',\n          null,\n          '\\u9644\\u4EF6'\n        ),\n        React.createElement('i', { className: 'relate-files', onClick: _this.click })\n      ),\n      React.createElement(\n        'div',\n        { className: 'file_box2' },\n        item\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);