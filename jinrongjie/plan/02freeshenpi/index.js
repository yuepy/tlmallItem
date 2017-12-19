(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control289_R8b47y: function (elem) {
      if (!elem) {
        return;
      }var data = { yes: [], header: { title: [], number: [] }, base_lc_info: { title: [], content: [], degree: [], miji: { content: [], id: [] }, jjcd: [] }, base_info: { content: [] }, related_document: [], related_process: [], file: [] };if ($(elem).find('#SWFUpload_1').length > 0) {
        data.yes = 'yes';
      } else {
        data.yes = 'no';
      } //附件-----------
      if ($(elem).find("#field-annexupload_tab").length > 0 && $(elem).find("#field-annexupload_tab").find("a").length > 0) {
        $(elem).find("#field-annexupload_tab").find("a").each(function () {
          data.file.push($(this).text().trim());
        });
      }
      if ($(elem).find("#signdocspan").length > 0 && $(elem).find("#signdocspan").children("a").length > 0) {
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
                if ($(this).text().indexOf('紧急程度') !== -1 && $(this).next('td').children().length == 0) {
                  data.base_lc_info.jjcd.push($(this).next().text().trim());
                } else if ($(this).find("input").length !== 3 && $(this)[0].className == 'zdn' && i == tdl) {
                  data.base_lc_info.content.push($(this).text());
                }if ($(this).find("input").length !== 3 && $(this)[0].className == 'zdn' && i == tdl) {
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
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text()) && $(this).next()[0].className == 'zdn' && ($(this).next().children().length == 0 || $(this).next()[0].children.length > 0 && $(this).next()[0].children[0].tagName == 'BR')) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text()) && $(this).next().find("a").length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell2' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text()) && $(this).next().children().length == 2 && $(this).next().children("span").length == 1 && $(this).next().children("input").length == 1) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title2' });
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
                    if ($(this).attr('onclick') !== undefined && $(this).attr('onclick').indexOf('addDocReadTag') !== -1) {
                      if ($(this).text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'txt', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('doc') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'doc', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('pdf') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'pdf', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('xls') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'xls', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('png') !== -1) {
                        arr3.push({
                          name: $(this).text().trim(), stl: 'png', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('jpg') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'jpg', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('gif') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'gif', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else {
                        arr3.push({ name: $(this).text().trim(), stl: 'unknown', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      }
                    }if ($(this)[0].className == 'progressCancel') {
                      if ($(this).next().text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'txt', no: 'push' });
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
                }if ($(this).children("table").find(".btnFlow").length > 0) {
                  var arr6 = [];$(this).children("table").find(".btnFlow").each(function (i) {
                    if ($(this).attr('onclick') && $(this).attr('onclick').indexOf('onChangeSharetype') !== -1) {
                      arr6.push("111");
                    }
                  });
                }if ($(this).text().indexOf('最大只能') !== -1) {
                  var arr5 = 'yes';
                } else {
                  var arr5 = 'no';
                }arr2.push({ text: arr3, size: arr4, type: 'fujian', yes: arr5, delete: arr6 });
              } //判断select-------------------------------------
              else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == false) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(), select: 'selected' });
                    }if ($(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id"), mark: '1', disabled: 'false' });
                } else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == true) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(),
                        select: 'selected' });
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
                    } else if ($(this).children("span").length == 2 && $(this).find("a").length == 1 && $(this).find("button").length > 0 && $(this).children("input")[0].type == 'hidden') {
                      arr2.push({ text: $(this).find("a").text(), type: 'aaa' });
                    } else if ($(this).children("span").length == 1 && $(this).children("input").length == 1 && $(this).children("input")[0].type == 'hidden' && $(this).children("button").length == 0) {
                      arr2.push({ text: $(this).children("span").text(), type: 'a' });
                    } else if ($(this).children("span").length == 1 && $(this).children("input").length == 0 && $(this).children().length == 1) {
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
                          arr2.push({ text: $(this).find("button").text(), type: 'button22', id: $(this).children('span').eq(0).children("button").attr('id') });
                        } //判断意见-------------------------------------
                        else if ($(this)[0].className == 'zdn' && $(this).children().length == 0 || $(this)[0].children.length == 1 && $(this)[0].children[0].tagName == 'BR') {
                            arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      }if ($(elem).children("table").length == 1) {
        var elem2 = $(elem).children("table").eq(0)[0];var tbody2 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody2).children("tr").each(function () {
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text()) && $(this).next()[0].className == 'zdn' && ($(this).next().children().length == 0 || $(this).next()[0].children.length > 0 && $(this).next()[0].children[0].tagName == 'BR')) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text()) && $(this).next().find("a").length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell2' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text()) && $(this).next().children().length == 2 && $(this).next().children("span").length == 1 && $(this).next().children("input").length == 1) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title2' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_ye' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length == 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title1' });
            } else if ($(this)[0].className == 'zdm' && /正文/.test($(this).text()) && $(this).next().children().length == 2 && $(this).next().children("span").length == 1 && $(this).next().children("input").length == 1) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title2' });
            } //判断附件-------------------------------------
            else if ($(this).children("table").length > 0 && $(this).children("table")[0].id.length > 0) {
                var arr3 = [];
                if ($(this).children("table").find("a").length > 0) {
                  $(this).children("table").find("a").each(function (i) {
                    if ($(this).attr('onclick') !== undefined && $(this).attr('onclick').indexOf('addDocReadTag') !== -1) {
                      if ($(this).text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'txt', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('doc') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'doc',
                          no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('pdf') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'pdf', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('xls') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'xls', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('png') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'png', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('jpg') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'jpg', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else if ($(this).text().indexOf('gif') !== -1) {
                        arr3.push({ name: $(this).text().trim(), stl: 'gif', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      } else {
                        arr3.push({ name: $(this).text().trim(), stl: 'unknown', no: $(this).attr('onClick').match(/\d+/g)[1] });
                      }
                    }if ($(this)[0].className == 'progressCancel') {
                      if ($(this).next().text().indexOf('txt') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'txt', no: 'push' });
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
                        arr3.push({ name: $(this).next().text().trim(), stl: 'zip',
                          no: 'push' });
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
                }if ($(this).children("table").find(".btnFlow").length > 0) {
                  var arr6 = [];$(this).children("table").find(".btnFlow").each(function (i) {
                    if ($(this).attr('onclick') && $(this).attr('onclick').indexOf('onChangeSharetype') !== -1) {
                      arr6.push("111");
                    }
                  });
                }if ($(this).text().indexOf('最大只能') !== -1) {
                  var arr5 = 'yes';
                } else {
                  var arr5 = 'no';
                }arr2.push({ text: arr3, size: arr4, type: 'fujian', yes: arr5, delete: arr6 });
              } //判断select-------------------------------------
              else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == false) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(), select: 'selected' });
                    }if ($(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id"), mark: '1', disabled: 'false' });
                } else if ($(this).children("select").length > 0 && $(this).children("select")[0].disabled == true) {
                  var arr4 = [];$(this).children("select").children("option").each(function () {
                    if ($(this)[0].selected == true) {
                      arr4.push({ text: $(this).text().trim(), select: 'selected' });
                    } else if ($(this)[0].selected == false) {
                      arr4.push({ text: $(this).text().trim(), select: '' });
                    }
                  });arr2.push({ text: arr4, type: 'selcet', id: $(this).children("select").prop("id"), mark: '1', disabled: 'true' });
                } //判断input-------------------------------------
                else if ($(this).children("input").length == 1 && $(this).children("input")[0].type !== 'hidden') {
                    arr2.push({ text: $(this).children("input").prop('value'), type: 'input', id: $(this).children("input").prop('id') });
                  } else if ($(this).children("span").length == 2 && $(this).find("a").length == 1 && $(this).find("button").length > 0 && $(this).children("input")[0].type == 'hidden') {
                    arr2.push({ text: $(this).find("a").text(), type: 'aaa' });
                  } //判断纯文字
                  else if ($(this).children("button").length == 0 && $(this).children("span").length == 1 && $(this).children("span").children("a").length == 1 && $(this).children("input").length > 0 && $(this).children("input")[0].type == 'hidden') {
                      arr2.push({ text: $(this).children("span").children("a").text(), type: 'a'
                      });
                    } else if ($(this).children("span").length == 1 && $(this).children("input").length == 1 && $(this).children("input")[0].type == 'hidden' && $(this).children("button").length == 0) {
                      arr2.push({ text: $(this).children("span").text(), type: 'a' });
                    } else if ($(this).children("span").length == 1 && $(this).children("input").length == 0 && $(this).children().length == 1) {
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
                              });arr2.push({ text: arr,
                                type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/) });
                            });
                          } else {
                            $(this).children("button").each(function () {
                              arr2.push({ text: '', type: 'button', id: $(this)[0].getAttribute('onClick').match(/field\d+/) });
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
                          }data.base_info.content.push(arr2);
          });
        });
      }return data;
    }, doAction_uiControl276_1rRBbI: function (data, elem) {
      // {data.base_lc_info.miji.content[0].length > 0 ? <div><div className="font-yell">密级</div><select onChange={_this.optionChange}>{option2}</select></div> : <div></div>}
      if (data.eventType == 'zhengwen') {
        debugger;if (elem.ownerDocument.getElementById('requestid')) {
          var requestid = elem.ownerDocument.getElementById('requestid').value;
        }if (elem.ownerDocument.getElementById('rand')) {
          var rand = elem.ownerDocument.getElementById('rand').value;
        }
        var xmlhttp;xmlhttp = new XMLHttpRequest();xmlhttp.onreadystatechange = function (data) {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // var _url = 'http://192.168.200.63' + xmlhttp.responseText;
            console.log(xmlhttp.responseText);if (ysp.appMain.isIOS()) {
              top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
            } else if (ysp.appMain.isAndroid()) {
              top.location.href = _url;
            }
          }
        };
      }if (data.eventType == 'deleteFile') {
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
      }if (data.eventType == 'delete_button') {
        var idx = parseInt(data.dataCustom);var elem1 = $(elem).children("table").eq(1)[0];$(elem1).find('.btnFlow').eq(idx).click();
      } // if (data.eventType == 'delete_button') {
      //   var idx = parseInt(data.dataCustom);
      //   var elem1 = $(elem).children("table").eq(1)[0];
      //   $(elem1).find('.btnFlow').eq(idx).click();
      // }
      // if (data.eventType == 'delete_button') {
      //   var idx = parseInt(data.dataCustom);
      //   var elem1 = $(elem).children("table").eq(1)[0];
      //   $(elem1).find('.btnFlow').eq(idx).click();
      // }
      if (data.eventType == 'selectFile') {
        $(elem).find('#Filedata').eq(0).click();$(elem).find('#Filedata').eq(0)[0].parentElement.setAttribute('file-num', '1');
      }if (data.eventType == 'inputBlur') {
        //debugger;
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("input").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].value = val;
          }
        });
      }if (data.eventType == 'textarea1') {
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("textarea").each(function () {
          if ($(this)[0].id == id) {
            $(this)[0].textContent = val;
          }
        });
      }if (data.eventType == 'select') {
        var id = data.dataCustom.id;var val = data.dataCustom.value;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("select").each(function () {
          if ($(this)[0].id == id) {
            $(this).children("option").each(function () {
              if ($(this).text() == val) {
                $(this)[0].selected = true;
              }
            });
          }
        });
      }if (data.eventType == 'optionChange') {
        //debugger;
        var val = data.dataCustom;var elem = $(elem).children("table").eq(0)[0];
        console.log($(elem).find("select").length);$(elem).find("select").children("option").each(function () {
          if ($(this)[0].innerText == val) {
            $(this)[0].selected = 'true';
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
        debugger;
        var id = data.dataCustom;var elem2 = $(elem).children("table").eq(1)[0];var tbody2 = $(elem).children("table").eq(1).children("tbody")[0];$(tbody2).find("button").each(function () {
          if ($(this)[0].id == id) {
            $(this).click();
          }
        });
      }
      if (data.eventType == 'about1') {
        // elem.ownerDocument.defaultView.eval(elem.querySelectorAll('.Browser')[0].onclick());
        // elem.querySelectorAll('.Browser')[0].onclick(); 
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());
      }if (data.eventType == 'about2') {
        elem.ownerDocument.defaultView.eval(elem.querySelector('button[title="相关流程"]').onclick());
      }if (data.eventType == 'preview') {
        debugger; //每个文件的onclick中的第二个number
        var number = data.dataCustom.number;var type = data.dataCustom.type; //现在的文件名称
        var text = data.dataCustom.text; //拼接下载地址
        var _url = 'http://192.168.200.63/weaver/weaver.file.FileDownload?fileid=' + number + '&download=1';if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = _url;
        }
      }
    },
    getTemplate_uiControl276_1rRBbI: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  \n  zhengwen:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'zhengwen\'\n      })\n    }\n  },\n  \n  \n  \n  delete_button:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display=\'none\' ;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"delete_button",\n      \tdata:e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  preview:function(e){\n    if(e.target.tagName == \'DIV\' && e.target.className==\'file\'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == \'DIV\' && e.target.className!==\'file\'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == \'BUTTON\'){\n      var _target = e.target.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          text:_target.textContent,\n          number:_target.getAttribute(\'data-no\'),\n          type:_target.getAttribute(\'data-type\'),\n        },\n        eventType:\'preview\'\n      })\n    }\n  },\n  selectFile:function(e){\n    debugger;\n   // if(e.target.className=="searchRow"){\n      YSP.appRenderer.showLoading();\n    //}\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'selectFile\'\n      })\n    }\n  },\n  deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display=\'none\' ;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"deleteFile",\n      \tdata:e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  about1:function(e){\n    setTimeout(function(){ysp.appMain.hideLoading()},1000);\n\t\tYSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about1\'\n      })\n    }\n  },\n  about2:function(e){\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about2\'\n      })\n    }\n  },\n  button2:function(e){\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button2\',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'degree\',\n        data: e.target.textContent\n      })\n    }\n  },\n  button1:function(e){\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea\',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'inputBlur\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea1\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'select\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   optionChange:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'optionChange\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onChange2\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  more:function(e){\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if(e.target.ownerDocument.querySelectorAll(".bottom_tb").length){\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if(blo && blo.children.length > 0){\n        var lth = blo.children.length ;\n          for(var i=0;i<lth;i++){\n            blo.children[i].style.display = \'block\';\n          }\n          _target.style.display = \'none\';\n          document.getElementsByClassName("button_less")[0].style.display = \'block\';\n        }\n    \t}\n    }\n    ,\n   less:function(e){\n      if(e.target.tagName == \'SPAN\'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n     if(blo.children.length > 0){\n        var lth = blo.children.length ;\n        for(var i=10;i<lth;i++){\n          blo.children[i].style.display = \'none\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_more")[0].style.display = \'block\';\n      }\n     }\n   ,\n  render: function() {\n    var data = this.props.customData|| [];\n    var _this = this ;\n    if(data){\n    if(data.base_lc_info.degree.length > 0){\n       var degree = data.base_lc_info.degree[0].map(function(d,i){\n      if(d.checked == \'true\'){\n        return(<span className=\'egyactive\' onClick = {_this.degree}>{d.text}</span>)\n      }\n      else{\n        return(<span onClick = {_this.degree}>{d.text}</span>)\n      }\n    })\n    }\n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0 && d1[0].type){\n        if(d1[0].type == \'title\' && d1[0].type && d1[0].text==\'\u9644\u4EF6\'){\n             return (<div className=\'push_file_box\'><div className = \'font-yell\'>{d1[0].text}{d1[0].yes}</div>{data.yes==\'yes\' ? <button className=\'selectFileBox\' onClick={_this.selectFile}></button> : <div style = {{display:\'none\'}}></div>}</div>)\n          } \n          if(d1[0].type == \'title\' && d1[0].type){\n            return (<div className = \'font-yell\'>{d1[0].text}</div>)\n          } \n          else if(d1[0].type == \'title2\'){\n            return (<div className = \'font-yell\'>{d1[0].text}</div>)\n          } \n          else if(d1[0].type == \'title1\'){\n            return (<div style={{display:\'none\'}}></div>)\n          } \n          \n          else if(d1[0].type == \'tit_yell\' && d1[0].type){\n            return (<div className = \'tit_yell espel\'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == \'a\'){\n            return (<div className = \'name\'>{d1[0].text}</div>)\n          }\n           else if(d1[0].type == \'aaa\'){\n            return (<div onClick={_this.zhengwen} className = \'name\'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == \'input\'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == \'textarea\'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == \'fujian\'){\n           var fj =  d1[0].text.map(function(d2,i2){\n             if(d2.no!==\'push\'){\n              return (<div>\n                {d1[0] && d1[0].delete && d1[0].delete.length > 0 ? <div className=\'file\' data-no={d2.no} data-type={d2.stl} onClick={_this.preview}><div>{d2.name}</div><div>{d1[0].size[i2]}</div><button></button><a data-index={i2} onClick={_this.delete_button} className=\'delete_button\'></a></div> :  <div className=\'file\' data-no={d2.no} data-type={d2.stl} onClick={_this.preview}><div>{d2.name}</div><div>{d1[0].size[i2]}</div><button></button></div>}\n              \n              </div>)\n             }\n             else{\n              return (<div className=\'file2\' data-no={d2.no} data-type={d2.stl}><div>{d2.name}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i2} onClick={_this.deleteFile}></button></div>)\n             }\n            })\n            return (<div className=\'file_box\'>{fj}</div>)\n          }\n          else if(d1[0].type == \'button2\'){\n            return(<button onClick={_this.button2} id = {d1[0].id}>{d1[0].text}</button>)\n          }\n          else if(d1[0].type == \'button\'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className=\'button_box\'><div>{ite}</div><button onClick={_this.button1} className = \'name\' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == \'suggest\'){\n            return (<div className = "textArea" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == \'selcet\'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\n        }       \n      })\n      \n      var detail2 = data.base_info.content.map(function(d1,i1){\n        if (d1.length >0 && d1[0].type){\n       \t if(d1[0].type == \'suggest_final\'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div>    \n                <div className=\'tit_yell\'>\u7B7E\u5B57\u610F\u89C1</div>\n                <div style={{margin:\'10px\'}}>\n                <div style={{margin:\'0\'}} contentEditable=\'true\' className = "textArea2" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6587\u6863</span>\n                  <div className=\'about_box\'>\n                    <div className=\'box_con\'>{related_document}</div>\n                    <button onClick={_this.about1}></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className=\'ovh\'>\n                 \t  <span className=\'font-yell\'>\u76F8\u5173\u6D41\u7A0B</span>\n                  \t<div  className=\'about_box\'>\n                      <div className=\'box_con\'>{related_process}</div>\n                      <button onClick={_this.about2}></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n                </div>\n            )\n          }\n        }\n      })\n      if(data.base_lc_info && data.base_lc_info.miji  && data.base_lc_info.miji.content.length > 0){\n         var option2 = data.base_lc_info.miji.content.map(function(d3,i3){\n               return(<option  selected = {d3[0].selected}>{d3[0].text}</option>)\n             })\n      }\n     \n      \n      \n      \n      \n      \n      \n      \n    return (\n      <div className=\'ysp_table_lfj\'>\n        <div className=\'header_box\'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>\n       {data.base_lc_info.title[0] ? <div className=\'center_box\'>\n          {data && data.base_lc_info && data.base_lc_info.title ? <div className=\'tit_yell\'>\n          \t{data.base_lc_info.title}\n          </div> : <div></div>}\n          \n          <div className=\'center_tb\'>\n          {data.base_lc_info && data.base_lc_info.degree[0] && data.base_lc_info.degree[0].length >1 ? \n              <div className="ysp_emergency">\n                <span className="contentTitle">\u7D27\u6025\u7A0B\u5EA6</span>\n                <div className="emergencyCheck">\n                  {degree}\n                </div>\n              </div>\n\n              : <div></div>}\n         \n{data.base_lc_info && data.base_lc_info.jjcd && data.base_lc_info.jjcd.length > 0 ? <div>\n              <div className="font-yell">\u7D27\u6025\u7A0B\u5EA6</div>\n              {data.base_lc_info.jjcd}</div> : \n            <div></div>}\n            \n        </div>\n        </div> : <div></div>}\n        \n        <div className=\'bottom_box\'>\n          <div className=\'tit_yell\'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className=\'bottom_tb\'>{detail}</div>\n          <div className=\'ysp_button_more button_more\' onClick={_this.more}><span>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span></div>\n          <div className=\'ysp_button_more button_less\' onClick={_this.less}><span>\u6536\u8D77\u5168\u90E8\u5185\u5BB9</span></div>\n        </div>\n\n        <div className=\'bottom_box bottom_box2\'>\n          <div className=\'bottom_tb\' style={{paddingLeft:\'0\'}}>\n          {detail2}\n              </div>\n        </div>\n      </div>\n    )\n    }\n    else{\n      return (<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n\n  zhengwen: function zhengwen(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'zhengwen\'\n      });\n    }\n  },\n\n  delete_button: function delete_button(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display = \'none\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "delete_button",\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  preview: function preview(e) {\n    if (e.target.tagName == \'DIV\' && e.target.className == \'file\') {\n      var _target = e.target;\n    } else if (e.target.tagName == \'DIV\' && e.target.className !== \'file\') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == \'BUTTON\') {\n      var _target = e.target.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          text: _target.textContent,\n          number: _target.getAttribute(\'data-no\'),\n          type: _target.getAttribute(\'data-type\')\n        },\n        eventType: \'preview\'\n      });\n    }\n  },\n  selectFile: function selectFile(e) {\n    debugger;\n    // if(e.target.className=="searchRow"){\n    YSP.appRenderer.showLoading();\n    //}\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selectFile\'\n      });\n    }\n  },\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display = \'none\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "deleteFile",\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  about1: function about1(e) {\n    setTimeout(function () {\n      ysp.appMain.hideLoading();\n    }, 1000);\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about1\'\n      });\n    }\n  },\n  about2: function about2(e) {\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about2\'\n      });\n    }\n  },\n  button2: function button2(e) {\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button2\',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'degree\',\n        data: e.target.textContent\n      });\n    }\n  },\n  button1: function button1(e) {\n    YSP.appRenderer.showLoading();\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea\',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'inputBlur\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea1\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'select\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  optionChange: function optionChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'optionChange\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'onChange2\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  more: function more(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if (e.target.ownerDocument.querySelectorAll(".bottom_tb").length) {\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if (blo && blo.children.length > 0) {\n        var lth = blo.children.length;\n        for (var i = 0; i < lth; i++) {\n          blo.children[i].style.display = \'block\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_less")[0].style.display = \'block\';\n      }\n    }\n  },\n\n  less: function less(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n    if (blo.children.length > 0) {\n      var lth = blo.children.length;\n      for (var i = 10; i < lth; i++) {\n        blo.children[i].style.display = \'none\';\n      }\n      _target.style.display = \'none\';\n      document.getElementsByClassName("button_more")[0].style.display = \'block\';\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    if (data) {\n      if (data.base_lc_info.degree.length > 0) {\n        var degree = data.base_lc_info.degree[0].map(function (d, i) {\n          if (d.checked == \'true\') {\n            return React.createElement(\n              \'span\',\n              { className: \'egyactive\', onClick: _this.degree },\n              d.text\n            );\n          } else {\n            return React.createElement(\n              \'span\',\n              { onClick: _this.degree },\n              d.text\n            );\n          }\n        });\n      }\n      var detail = data.base_info.content.map(function (d1, i1) {\n        //console.log(d1[0]) \n        if (d1.length > 0 && d1[0].type) {\n          if (d1[0].type == \'title\' && d1[0].type && d1[0].text == \'\u9644\u4EF6\') {\n            return React.createElement(\n              \'div\',\n              { className: \'push_file_box\' },\n              React.createElement(\n                \'div\',\n                { className: \'font-yell\' },\n                d1[0].text,\n                d1[0].yes\n              ),\n              data.yes == \'yes\' ? React.createElement(\'button\', { className: \'selectFileBox\', onClick: _this.selectFile }) : React.createElement(\'div\', { style: { display: \'none\' } })\n            );\n          }\n          if (d1[0].type == \'title\' && d1[0].type) {\n            return React.createElement(\n              \'div\',\n              { className: \'font-yell\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'title2\') {\n            return React.createElement(\n              \'div\',\n              { className: \'font-yell\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'title1\') {\n            return React.createElement(\'div\', { style: { display: \'none\' } });\n          } else if (d1[0].type == \'tit_yell\' && d1[0].type) {\n            return React.createElement(\n              \'div\',\n              { className: \'tit_yell espel\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'a\') {\n            return React.createElement(\n              \'div\',\n              { className: \'name\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'aaa\') {\n            return React.createElement(\n              \'div\',\n              { onClick: _this.zhengwen, className: \'name\' },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'input\') {\n            return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n          } else if (d1[0].type == \'textarea\') {\n            return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n          } else if (d1[0].type == \'fujian\') {\n            var fj = d1[0].text.map(function (d2, i2) {\n              if (d2.no !== \'push\') {\n                return React.createElement(\n                  \'div\',\n                  null,\n                  d1[0] && d1[0].delete && d1[0].delete.length > 0 ? React.createElement(\n                    \'div\',\n                    { className: \'file\', \'data-no\': d2.no, \'data-type\': d2.stl, onClick: _this.preview },\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d2.name\n                    ),\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d1[0].size[i2]\n                    ),\n                    React.createElement(\'button\', null),\n                    React.createElement(\'a\', { \'data-index\': i2, onClick: _this.delete_button, className: \'delete_button\' })\n                  ) : React.createElement(\n                    \'div\',\n                    { className: \'file\', \'data-no\': d2.no, \'data-type\': d2.stl, onClick: _this.preview },\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d2.name\n                    ),\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d1[0].size[i2]\n                    ),\n                    React.createElement(\'button\', null)\n                  )\n                );\n              } else {\n                return React.createElement(\n                  \'div\',\n                  { className: \'file2\', \'data-no\': d2.no, \'data-type\': d2.stl },\n                  React.createElement(\n                    \'div\',\n                    null,\n                    d2.name\n                  ),\n                  React.createElement(\n                    \'div\',\n                    null,\n                    \'\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...\'\n                  ),\n                  React.createElement(\'button\', { \'data-index\': i2, onClick: _this.deleteFile })\n                );\n              }\n            });\n            return React.createElement(\n              \'div\',\n              { className: \'file_box\' },\n              fj\n            );\n          } else if (d1[0].type == \'button2\') {\n            return React.createElement(\n              \'button\',\n              { onClick: _this.button2, id: d1[0].id },\n              d1[0].text\n            );\n          } else if (d1[0].type == \'button\') {\n            if (d1[0].text.length > 0) {\n              var ite = d1[0].text.map(function (e1, i1) {\n                return React.createElement(\n                  \'a\',\n                  { \'data-index\': i1 },\n                  e1\n                );\n              });\n            }\n            return React.createElement(\n              \'div\',\n              { className: \'button_box\' },\n              React.createElement(\n                \'div\',\n                null,\n                ite\n              ),\n              React.createElement(\'button\', { onClick: _this.button1, className: \'name\', \'data-id\': d1[0].id })\n            );\n          } else if (d1[0].type == \'suggest\') {\n            return React.createElement(\'div\', { className: \'textArea\', dangerouslySetInnerHTML: { __html: d1[0].text } });\n          } else if (d1[0].type == \'selcet\') {\n            var option = d1[0].text.map(function (d3, i3) {\n              return React.createElement(\n                \'option\',\n                { selected: d3.select },\n                d3.text\n              );\n            });\n            return React.createElement(\n              \'select\',\n              { id: d1[0].id, onChange: _this.select },\n              option\n            );\n          }\n        }\n      });\n\n      var detail2 = data.base_info.content.map(function (d1, i1) {\n        if (d1.length > 0 && d1[0].type) {\n          if (d1[0].type == \'suggest_final\') {\n            var related_document = data.related_document.map(function (d3, i3) {\n              return React.createElement(\n                \'a\',\n                null,\n                d3\n              );\n            });\n            var related_process = data.related_process.map(function (d4, i4) {\n              return React.createElement(\n                \'a\',\n                null,\n                d4\n              );\n            });\n            if (data.file.length > 0) {\n              var file = data.file.map(function (d5, i5) {\n                return React.createElement(\n                  \'div\',\n                  null,\n                  data.file.length\n                );\n              });\n            }\n            return React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                { className: \'tit_yell\' },\n                \'\\u7B7E\\u5B57\\u610F\\u89C1\'\n              ),\n              React.createElement(\n                \'div\',\n                { style: { margin: \'10px\' } },\n                React.createElement(\'div\', { style: { margin: \'0\' }, contentEditable: \'true\', className: \'textArea2\', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n                React.createElement(\n                  \'div\',\n                  { className: \'ovh\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'font-yell\' },\n                    \'\\u76F8\\u5173\\u6587\\u6863\'\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'about_box\' },\n                    React.createElement(\n                      \'div\',\n                      { className: \'box_con\' },\n                      related_document\n                    ),\n                    React.createElement(\'button\', { onClick: _this.about1 })\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'div\',\n                    { className: \'ovh\' },\n                    React.createElement(\n                      \'span\',\n                      { className: \'font-yell\' },\n                      \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n                    ),\n                    React.createElement(\n                      \'div\',\n                      { className: \'about_box\' },\n                      React.createElement(\n                        \'div\',\n                        { className: \'box_con\' },\n                        related_process\n                      ),\n                      React.createElement(\'button\', { onClick: _this.about2 })\n                    )\n                  )\n                )\n              )\n            );\n          }\n        }\n      });\n      if (data.base_lc_info && data.base_lc_info.miji && data.base_lc_info.miji.content.length > 0) {\n        var option2 = data.base_lc_info.miji.content.map(function (d3, i3) {\n          return React.createElement(\n            \'option\',\n            { selected: d3[0].selected },\n            d3[0].text\n          );\n        });\n      }\n\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_table_lfj\' },\n        React.createElement(\n          \'div\',\n          { className: \'header_box\' },\n          React.createElement(\n            \'center\',\n            null,\n            data.header.title\n          ),\n          React.createElement(\n            \'center\',\n            null,\n            data.header.number\n          )\n        ),\n        data.base_lc_info.title[0] ? React.createElement(\n          \'div\',\n          { className: \'center_box\' },\n          data && data.base_lc_info && data.base_lc_info.title ? React.createElement(\n            \'div\',\n            { className: \'tit_yell\' },\n            data.base_lc_info.title\n          ) : React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            { className: \'center_tb\' },\n            data.base_lc_info && data.base_lc_info.degree[0] && data.base_lc_info.degree[0].length > 1 ? React.createElement(\n              \'div\',\n              { className: \'ysp_emergency\' },\n              React.createElement(\n                \'span\',\n                { className: \'contentTitle\' },\n                \'\\u7D27\\u6025\\u7A0B\\u5EA6\'\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'emergencyCheck\' },\n                degree\n              )\n            ) : React.createElement(\'div\', null),\n            data.base_lc_info && data.base_lc_info.jjcd && data.base_lc_info.jjcd.length > 0 ? React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                { className: \'font-yell\' },\n                \'\\u7D27\\u6025\\u7A0B\\u5EA6\'\n              ),\n              data.base_lc_info.jjcd\n            ) : React.createElement(\'div\', null)\n          )\n        ) : React.createElement(\'div\', null),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'tit_yell\' },\n            \'\\u57FA\\u672C\\u4FE1\\u606F\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\' },\n            detail\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_more\', onClick: _this.more },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_less\', onClick: _this.less },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u6536\\u8D77\\u5168\\u90E8\\u5185\\u5BB9\'\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box bottom_box2\' },\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\', style: { paddingLeft: \'0\' } },\n            detail2\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control290_eLH7bU: function (elem) {
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
    doAction_uiControl277_U4k2sJ: function (data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var input = $(elem).find('#field-annexupload')[0];var value = $(input)[0].value;var arr = $(input)[0].value.split(',');arr.splice(idx, 1);var valuet = arr.toString();console.log(valuet);$(input)[0].value = valuet;
      }if (data.eventType == 'click') {
        $(elem).find("#Filedata").click();if (elem.ownerDocument.querySelectorAll('#ysp_fake_form').length == 2) {
          $(elem).find("#Filedata")[0].parentElement.setAttribute('file-num', '2');
        }
      }
    },
    getTemplate_uiControl277_U4k2sJ: function () {
      var selfTemplate = "module.exports = React.createClass({\n   deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName('file_box2')[0];\n    var idx = e.target.getAttribute('data-index');\n    elem.children[idx].style.display='none'\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"deleteFile\",\n      \tdata:e.target.getAttribute('data-index')\n      })\n    }\n  },\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data && data.length > 0 && data[0].length > 0){\n      var item = data.map(function(d,i){\n      return(\n      <div className='file2' data-no={i} data-type={d[0].stl}><div>{d[0].text}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i} onClick={_this.deleteFile}></button></div>\n      \n      \n      \n      )\n    })\n    }\n    \n   return (\n     <div>\n      <div className=\"ysp-manager-audit-title-icon\">\n        <span>\u9644\u4EF6</span>\n        <i className=\"relate-files\" onClick={_this.click}></i>\n        \n      </div>\n       <div className = 'file_box2'>{item}</div>\n       </div>\n      )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName('file_box2')[0];\n    var idx = e.target.getAttribute('data-index');\n    elem.children[idx].style.display = 'none';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"deleteFile\",\n        data: e.target.getAttribute('data-index')\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data && data.length > 0 && data[0].length > 0) {\n      var item = data.map(function (d, i) {\n        return React.createElement(\n          'div',\n          { className: 'file2', 'data-no': i, 'data-type': d[0].stl },\n          React.createElement(\n            'div',\n            null,\n            d[0].text\n          ),\n          React.createElement(\n            'div',\n            null,\n            '\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...'\n          ),\n          React.createElement('button', { 'data-index': i, onClick: _this.deleteFile })\n        );\n      });\n    }\n\n    return React.createElement(\n      'div',\n      null,\n      React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon' },\n        React.createElement(\n          'span',\n          null,\n          '\\u9644\\u4EF6'\n        ),\n        React.createElement('i', { className: 'relate-files', onClick: _this.click })\n      ),\n      React.createElement(\n        'div',\n        { className: 'file_box2' },\n        item\n      )\n    );\n  }\n});";
    },
    getData_control291_PbOFz1: function (elem) {
      if (!elem) {
        return;
      }if (elem.textContent.indexOf("保存") != -1) {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl280_Rb8qCX: function (data, elem) {
      if (data.eventType == 'click') {
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);$(elem).click();
      }
    },
    getTemplate_uiControl280_Rb8qCX: function () {
      var selfTemplate = "\nimport {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n\n  render(){\n    var data = this.props.customData;\n    return (\n      <div ref = 'outerWrapper'>\n     {data?\n    \t<CommonHeader \n   \t   data={{centerText:\"02\u81EA\u7531\u6D41\u7A0B\"}} \n        backIsShow = {true}\n        editIsShow={true}\n        rightText = \"\u4FDD\u5B58\"\n        save={(e)=>{\n              YSP.appRenderer.showLoading();\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n              YSP.appRenderer.showLoading();\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        /> : \n      <CommonHeader \n   \t   data={{centerText:\"02\u81EA\u7531\u6D41\u7A0B\"}} \n        backIsShow = {true}\n        editIsShow={true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n      }\n        </div>\n    )\t\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { ref: \'outerWrapper\' },\n        data ? React.createElement(_yspCustomComponents.CommonHeader, {\n          data: { centerText: "02\u81EA\u7531\u6D41\u7A0B" },\n          backIsShow: true,\n          editIsShow: true,\n          rightText: \'\\u4FDD\\u5B58\',\n          save: function save(e) {\n            YSP.appRenderer.showLoading();\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'save1\'\n              });\n            }\n          },\n          back: function back(e) {\n            YSP.appRenderer.showLoading();\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click\'\n              });\n            }\n          }\n        }) : React.createElement(_yspCustomComponents.CommonHeader, {\n          data: { centerText: "02\u81EA\u7531\u6D41\u7A0B" },\n          backIsShow: true,\n          editIsShow: true,\n          back: function back(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click\'\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control293_kgGw6R: function (elem) {
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
    doAction_uiControl282_NOfwBB: function (data, elem) {
      if (data.eventType == 'click1') {
        // debugger;
        elem.click();
      }
    },
    getTemplate_uiControl282_NOfwBB: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    if(e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\").length > 0){\n       var elem = e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\")[0];\n    if(elem.style.display =='none'){\n        elem.style.display = 'block'\n      }\n      else{\n        elem.style.display = 'none'\n      }\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6587\u6863</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      if (e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\").length > 0) {\n        var elem = e.target.ownerDocument.getElementsByClassName(\"document_final_lfj\")[0];\n        if (elem.style.display == 'none') {\n          elem.style.display = 'block';\n        } else {\n          elem.style.display = 'none';\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u6587\\u6863'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control294_TpqLKM: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1 && $(elem).find("td").length > 1) {
        $(elem).children("tr").each(function (i) {
          if (i > 0) {
            var arr = [];$($(this).children("td").each(function () {
              arr.push($(this).text().trim());
            }));data.text.push(arr);
          }
        });
      }data.title.push('创建时间', '文档名称', '文档所有者');return data;
    },
    doAction_uiControl283_R2gTe2: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(0).click();
      }
    },
    getTemplate_uiControl283_R2gTe2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul className='document_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul className='document_final_lfj' style ={{margin:'10px'}}>\u6CA1\u6709\u76F8\u5173\u6587\u6863</ul>)\n    }\n    }\n    else{\n      return (<div className='document_final_lfj'></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            'li',\n            { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n            d1.map(function (d2, i2) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d2\n                )\n              );\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          'ul',\n          { className: 'document_final_lfj' },\n          item\n        );\n      } else {\n        return React.createElement(\n          'ul',\n          { className: 'document_final_lfj', style: { margin: '10px' } },\n          '\\u6CA1\\u6709\\u76F8\\u5173\\u6587\\u6863'\n        );\n      }\n    } else {\n      return React.createElement('div', { className: 'document_final_lfj' });\n    }\n  }\n});";
    },
    getData_control295_XbfLng: function (elem) {},
    doAction_uiControl284_Hqy7p8: function (data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl284_Hqy7p8: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName(\"process_final_lfj\")[0];\n    if(elem.style.display =='none'){\n      elem.style.display = 'block'\n    }\n    else{\n      elem.style.display = 'none'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6D41\u7A0B</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName(\"process_final_lfj\")[0];\n      if (elem.style.display == 'none') {\n        elem.style.display = 'block';\n      } else {\n        elem.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u6D41\\u7A0B'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control296_3pQ1iu: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1 && $(elem).find("td").length > 1) {
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
    doAction_uiControl285_IrpfkQ: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(1).click();
      }
    },
    getTemplate_uiControl285_IrpfkQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n    click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='process_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n        return(<ul className='process_final_lfj' style ={{margin:'10px',display:'none'}}>\u6CA1\u6709\u76F8\u5173\u6D41\u7A0B</ul>)\n    }\n    }\n    else {\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            'li',\n            { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n            d1.map(function (d2, i2) {\n              return React.createElement(\n                'li',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  d2\n                )\n              );\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          'ul',\n          { style: { display: 'none' }, className: 'process_final_lfj' },\n          item\n        );\n      } else {\n        return React.createElement(\n          'ul',\n          { className: 'process_final_lfj', style: { margin: '10px', display: 'none' } },\n          '\\u6CA1\\u6709\\u76F8\\u5173\\u6D41\\u7A0B'\n        );\n      }\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control297_AS5kiQ: function (elem) {},
    doAction_uiControl286_7mFbn4: function (data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl286_7mFbn4: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click1'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName(\"fujian_final_lfj\")[0];\n    if(elem.style.display =='none'){\n      elem.style.display = 'block'\n    }\n    else{\n      elem.style.display = 'none'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className=\"ysp-manager-audit-title-icon\" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u9644\u4EF6</span>\n        <i className=\"arrow-right\"></i>\n      </div>);\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'click1',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click1'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName(\"fujian_final_lfj\")[0];\n      if (elem.style.display == 'none') {\n        elem.style.display = 'block';\n      } else {\n        elem.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          'span',\n          null,\n          '\\u76F8\\u5173\\u9644\\u4EF6'\n        ),\n        React.createElement('i', { className: 'arrow-right' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control298_slKGtB: function (elem) {
      if (!elem) {
        return;
      }var elem = $(elem).find("tbody")[0];var data = { text: [], title: [] };if ($(elem).children("tr").length > 1 && $(elem).find("td").length > 1) {
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
    doAction_uiControl287_sin1NV: function (data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;debugger;var _url = "http://192.168.200.63" + $(elem).find('tr').eq(idx).find("a").eq(1).attr("onclick").match(/\/.*[0-9]/g)[0];if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = _url;
        }
      }
    },
    getTemplate_uiControl287_sin1NV: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == 'section_box'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == 'LI'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == 'SPAN'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click',\n        data: _target.getAttribute('data-index')\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className='section_box' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n              if(i2>0){\n               \treturn(<li><span>{data.title[i2]}</span><span>{d2}</span></li>) \n              }\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:'none'}} className='fujian_final_lfj'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{margin:'10px',display:'none'}} className='fujian_final_lfj'>\u6CA1\u6709\u76F8\u5173\u9644\u4EF6</ul>)\n    }\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    if (e.target.className == 'section_box') {\n      var _target = e.target;\n    } else if (e.target.tagName == 'LI') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == 'SPAN') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: _target.getAttribute('data-index')\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            'li',\n            { className: 'section_box', onClick: _this.click, 'data-index': i1 },\n            d1.map(function (d2, i2) {\n              if (i2 > 0) {\n                return React.createElement(\n                  'li',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    data.title[i2]\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    d2\n                  )\n                );\n              }\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          'ul',\n          { style: { display: 'none' }, className: 'fujian_final_lfj' },\n          item\n        );\n      } else {\n        return React.createElement(\n          'ul',\n          { style: { margin: '10px', display: 'none' }, className: 'fujian_final_lfj' },\n          '\\u6CA1\\u6709\\u76F8\\u5173\\u9644\\u4EF6'\n        );\n      }\n    } else {\n      return React.createElement('div', null);\n    }\n  }\n});";
    },
    getData_control299_TNJBBM: function (elem) {
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
    doAction_uiControl288_iNTQmh: function (data, elem) {
      var eventType = data.eventType;var btnIndex = data.dataCustom.num;if (eventType == 'click') {
        setTimeout(function () {
          ysp.appMain.hideLoading();
        }, 1000);elem.querySelectorAll('button')[btnIndex].click(); // ysp.customHelper.openWindow('http://192.168.200.63/workflow/request/Remark.jsp?requestid=118465&workflowRequestLogId=-1', 'sy');
      }
    },
    getTemplate_uiControl288_iNTQmh: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      isMoreOpen: false,\n      isShowBottom: true\n    }\n  }\n  \n  btnClick=(e)=>{\n    YSP.appRenderer.showLoading();\n    debugger;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{num:e.target.dataset.num},\n        eventType:\'click\'\n      })\n    }\n    var evt = new Event(\'ysp-file-upload-mainleadersign-audit\');\n    evt.value = \'\u4E0A\u4F20\u6587\u4EF6\';\n    window.dispatchEvent(evt);\n  }\n  \n  showMoreButton=(e)=>{\n    this.setState((prevState) => {\n  \t\treturn {\n        isMoreOpen: !prevState.isMoreOpen,\n      \tisShowBottom: !prevState.isShowBottom\n      };\n\t\t});\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData||[];\n    if(data == null || data == undefined){\n      return null;\n    }\n    if(data.length>3){\n    return (\n      <div className="ysp-process-form-wrapper">\n        {_this.state.isShowBottom&&\n      \t<div className="ysp-process-form-bottom-button">\n          <div>\n            {data.map((item, index)=>{\n              \n              //\u7B2C\u4E00\u4E2A\u6309\u94AE\n              if(data.indexOf(\'\u63D0\u4EA4\')!==-1){\n                if(item == \'\u63D0\u4EA4\'){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }else if(data.indexOf(\'\u6279\u51C6\')!==-1){\n                if(item == \'\u6279\u51C6\'){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }else if(data.indexOf(\'\u524D\u63D2\')!==-1){\n                if(item == \'\u524D\u63D2\'){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }\n              \n              //\u7B2C\u4E8C\u4E2A\u6309\u94AE\n              if(data.indexOf(\'\u4FDD\u5B58\')!==-1){\n                if(item.indexOf(\'\u4FDD\u5B58\')!==-1){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }else if(data.indexOf(\'\u540E\u63D2\')!==-1){\n                if(item == \'\u540E\u63D2\'){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }else if(data.indexOf(\'\u8FD4\u56DE\')!==-1){\n                if(item == \'\u540E\u63D2\'){\n                  return <span data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</span>\n                }\n              }\n              \n            })}\n            <span onClick={_this.showMoreButton.bind(_this)}></span>\n          </div>\n          \n        </div>\n        }\n        {_this.state.isMoreOpen &&\n          <div className="load-more-coverlayer">\n          \t<div className="load-more-data">\n              <section>\n                {data.length>0&&\n                \tdata.map((item,index)=>{\n                  if(item=="\u6253\u5370"||item=="\u4FDD\u5B58"||item=="\u63D0\u4EA4"||item=="\u8FD4\u56DE"||item=="\u5220\u9664"||item=="\u6279\u51C6"){\n                    return null;\n                  }\n                  return <div data-num={index} onClick={_this.btnClick.bind(_this)}>{item}</div>\n                })\n                }\n              </section>\n              <div onClick={_this.showMoreButton.bind(_this)}>\u8FD4\u56DE</div>\n            </div>\n          </div>\n        }\n      </div>\n      \n    );\n    }else if(data.length==3){\n    return (\n      <div className="ysp-process-form-wrapper">\n        <div className="ysp-process-form-bottom-button">\n            <div>\n                <span data-num={0} onClick={_this.btnClick.bind(_this)}>{data[0]}</span>\n                <span data-num={1} onClick={_this.btnClick.bind(_this)}>{data[1]}</span>\n            </div>\n        </div>\n      </div>\n    )\n  }else{\n    return (\n      <div className=\'summit_button_lfj\'>\n          <button style={{\'font-size\':\'16px\'}} data-num={0} onClick={_this.btnClick.bind(_this)}>{data[0]}</button>\n      </div>\n    )\n  }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      YSP.appRenderer.showLoading();\n      debugger;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { num: e.target.dataset.num },\n          eventType: \'click\'\n        });\n      }\n      var evt = new Event(\'ysp-file-upload-mainleadersign-audit\');\n      evt.value = \'\u4E0A\u4F20\u6587\u4EF6\';\n      window.dispatchEvent(evt);\n    };\n\n    _this2.showMoreButton = function (e) {\n      _this2.setState(function (prevState) {\n        return {\n          isMoreOpen: !prevState.isMoreOpen,\n          isShowBottom: !prevState.isShowBottom\n        };\n      });\n    };\n\n    _this2.state = {\n      isMoreOpen: false,\n      isShowBottom: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data == null || data == undefined) {\n        return null;\n      }\n      if (data.length > 3) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-process-form-wrapper\' },\n          _this.state.isShowBottom && React.createElement(\n            \'div\',\n            { className: \'ysp-process-form-bottom-button\' },\n            React.createElement(\n              \'div\',\n              null,\n              data.map(function (item, index) {\n\n                //\u7B2C\u4E00\u4E2A\u6309\u94AE\n                if (data.indexOf(\'\u63D0\u4EA4\') !== -1) {\n                  if (item == \'\u63D0\u4EA4\') {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                } else if (data.indexOf(\'\u6279\u51C6\') !== -1) {\n                  if (item == \'\u6279\u51C6\') {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                } else if (data.indexOf(\'\u524D\u63D2\') !== -1) {\n                  if (item == \'\u524D\u63D2\') {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                }\n\n                //\u7B2C\u4E8C\u4E2A\u6309\u94AE\n                if (data.indexOf(\'\u4FDD\u5B58\') !== -1) {\n                  if (item.indexOf(\'\u4FDD\u5B58\') !== -1) {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                } else if (data.indexOf(\'\u540E\u63D2\') !== -1) {\n                  if (item == \'\u540E\u63D2\') {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                } else if (data.indexOf(\'\u8FD4\u56DE\') !== -1) {\n                  if (item == \'\u540E\u63D2\') {\n                    return React.createElement(\n                      \'span\',\n                      { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                      data[index]\n                    );\n                  }\n                }\n              }),\n              React.createElement(\'span\', { onClick: _this.showMoreButton.bind(_this) })\n            )\n          ),\n          _this.state.isMoreOpen && React.createElement(\n            \'div\',\n            { className: \'load-more-coverlayer\' },\n            React.createElement(\n              \'div\',\n              { className: \'load-more-data\' },\n              React.createElement(\n                \'section\',\n                null,\n                data.length > 0 && data.map(function (item, index) {\n                  if (item == "\u6253\u5370" || item == "\u4FDD\u5B58" || item == "\u63D0\u4EA4" || item == "\u8FD4\u56DE" || item == "\u5220\u9664" || item == "\u6279\u51C6") {\n                    return null;\n                  }\n                  return React.createElement(\n                    \'div\',\n                    { \'data-num\': index, onClick: _this.btnClick.bind(_this) },\n                    item\n                  );\n                })\n              ),\n              React.createElement(\n                \'div\',\n                { onClick: _this.showMoreButton.bind(_this) },\n                \'\\u8FD4\\u56DE\'\n              )\n            )\n          )\n        );\n      } else if (data.length == 3) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-process-form-wrapper\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-process-form-bottom-button\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                { \'data-num\': 0, onClick: _this.btnClick.bind(_this) },\n                data[0]\n              ),\n              React.createElement(\n                \'span\',\n                { \'data-num\': 1, onClick: _this.btnClick.bind(_this) },\n                data[1]\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\n          \'div\',\n          { className: \'summit_button_lfj\' },\n          React.createElement(\n            \'button\',\n            { style: { \'font-size\': \'16px\' }, \'data-num\': 0, onClick: _this.btnClick.bind(_this) },\n            data[0]\n          )\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control290_ATpyiy: function (elem) {
      if (!elem) {
        return;
      }var data = {};var files = elem.querySelectorAll('.progressWrapper');var fileData = [];var oldFileLength = 0;if (elem.querySelector('#selectDownload')) {
        var downloadFiles = elem.querySelectorAll('a');if (downloadFiles.length > 0) {
          [].forEach.call(downloadFiles, function (fileItem, fileIndex) {
            if (fileItem.parentElement.parentElement.querySelector('#selectDownload')) {
              if (fileItem.style.display !== 'none') {
                fileData.push(fileItem.textContent.trim());oldFileLength++;
              }
            }
          });
        }
      }if (files.length > 0) {
        [].forEach.call(files, function (fileItem, fileIndex) {
          fileData.push(fileItem.querySelector('.progressName').textContent.replace(/\s/g, ""));
        });
      }data.fileData = fileData;data.oldFileLength = oldFileLength;return data;
    },
    doAction_uiControl277_n5afSQ: function (data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var input = $(elem).find('#field-annexupload')[0];var value = $(input)[0].value;var arr = $(input)[0].value.split(',');arr.splice(idx, 1);var valuet = arr.toString();$(input)[0].value = valuet;if (elem.querySelector('a')) {
          if (elem.querySelectorAll('a').length > 0) {
            elem.querySelectorAll('a')[idx].style.display = 'none';$(elem.querySelectorAll('a')[idx].parentElement.parentElement).remove();
          }
        } else {
          $(elem.querySelector('#fsUploadProgressannexupload').querySelectorAll('div.progressWrapper')[idx]).remove();
        }
      }if (data.eventType == 'click') {
        if (elem.querySelector("input[id='Filedata'][name='Filedata']")) {
          if (elem.ownerDocument.defaultView.document.querySelectorAll("input[id='Filedata'][name='Filedata']").length > 1) {
            elem.querySelector("#Filedata").parentElement.setAttribute('file-num', '2');elem.querySelector("input[id='Filedata'][name='Filedata']").click();
          } else {
            elem.querySelectorAll("input[id='Filedata'][name='Filedata']")[0].click();
          }
        }
      }if (data.eventType == 'downLoad') {
        var fileIndex = data.dataCustom;var buttonList = elem.querySelectorAll('#selectDownload');var btnattr = buttonList[fileIndex].querySelector('button');var clickContent = btnattr.getAttribute('onclick');if (clickContent.indexOf('top.location') !== -1) {
          var selfUrl = clickContent.slice(clickContent.indexOf('\/'), clickContent.indexOf('&requestid'));
        } else {
          var indexGroup = clickContent.match(/download.*/)[0];var selfUrl = '/weaver/weaver.file.FileDownload?fileid=' + indexGroup.match(/\d+/)[0] + '&download=1';
        }reviewFiles(selfUrl);
      } /**
          文件预览通用方法
          number 文件唯一编号
        */function reviewFiles(jumpUrl) {
        var _url = 'http://192.168.200.63' + jumpUrl;console.log(_url);if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = _url;
        }
      }
    },
    getTemplate_uiControl277_n5afSQ: function () {
      var selfTemplate = 'module.exports = React.createClass({\n\tdeleteFile: function (e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: "deleteFile",\n\t\t\t\tdata: e.target.getAttribute(\'data-index\')\n\t\t\t})\n\t\t}\n\t},\n\tclick: function (e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: \'click\'\n\t\t\t})\n\t\t}\n\t},\n\tdownLoadClick: function (e) {\n\t\tvar handler = this.props.customHandler;\n    if(e.target.tagName==\'I\'){\n      var _target = e.target.parentElement;\n    }else{\n      var _target = e.target;\n    }\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: _target.getAttribute(\'data-index\'),\n\t\t\t\teventType: "downLoad"\n\t\t\t})\n\t\t}\n\t},\n\trender: function () {\n\t\tvar data = this.props.customData;\n\t\tif (data == null || data == undefined) {\n\t\t\treturn null\n\t\t}\n\t\tvar fileData = data.fileData||[];\n\t\tvar _this = this;\n    var oldFileLength = data.oldFileLength;\n\t\tif (logObject == undefined) {\n\t\t\tvar logObject = { \'doc\': \'doc-log\', \'docx\': \'doc-log\', \'xls\': \'excel-log\', \'xlsx\': \'excel-log\', \'txt\': \'annex-download\', \'pdf\': \'pdf-log\' };\n\t\t}\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div className="ysp-manager-audit-title-icon ysp-manager-audit-wrapper-noborder">\n\t\t\t\t\t<span>\u9644\u4EF6</span>\n\t\t\t\t\t<i className="relate-files" onClick={_this.click}></i>\n\t\t\t\t</div>\n\t\t\t\t<div className=\'ysp-manager-audit-wrapper\'>\n          {oldFileLength>0 ? <div style={{\'font-size\':\'0.9rem\'}}>\u5F85\u9884\u89C8\u9644\u4EF6</div> : ""}\n          {fileData instanceof Array && fileData.length > 0 ?\n\t\t\t\t\t\tfileData.map((fileItem, fileIndex) => {\n            \tif(fileIndex>=oldFileLength){\n                return null\n              }\n\t\t\t\t\t\t\tvar extentdName = fileItem.slice(fileItem.lastIndexOf(\'.\') + 1);\n\t\t\t\t\t\t\tif (logObject[extentdName] == undefined) {\n\t\t\t\t\t\t\t\tvar className = \'annex-download\';\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tvar className = logObject[extentdName] + " " + \'logo-common-css\';\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div className={className} style={{ \'border-bottom\': \'none\' }} onClick={_this.downLoadClick.bind(_this)} data-index={fileIndex}>\n\t\t\t\t\t\t\t\t\t{fileItem}\n                  <i className="download-log" style={{\'right\':\'50px\'}}></i>\n\t\t\t\t\t\t\t\t\t<span className="delete-log" data-type="deleteFile" onClick={_this.deleteFile.bind(_this)} data-index={fileIndex}>X</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t})\n          : \'\'}\n          {fileData.length>oldFileLength ? <div style={{\'font-size\':\'0.9rem\'}}>\u5F85\u4E0A\u4F20\u9644\u4EF6</div> : ""}\n\t\t\t\t\t{fileData instanceof Array && fileData.length > 0 ?\n\t\t\t\t\t\tfileData.map((fileItem, fileIndex) => {\n            \tif(fileIndex<oldFileLength){\n                return null\n              }\n\t\t\t\t\t\t\tvar extentdName = fileItem.slice(fileItem.lastIndexOf(\'.\') + 1);\n\t\t\t\t\t\t\tif (logObject[extentdName] == undefined) {\n\t\t\t\t\t\t\t\tvar className = \'annex-download\';\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tvar className = logObject[extentdName] + " " + \'logo-common-css\';\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div className={className} style={{ \'border-bottom\': \'none\' }}>\n\t\t\t\t\t\t\t\t\t{fileItem}\n\t\t\t\t\t\t\t\t\t<div style={{ \'font-size\': \'0.7rem\' }}>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20\u2026\u2026</div>\n\t\t\t\t\t\t\t\t\t<span className="delete-log" data-type="deleteFile" onClick={_this.deleteFile.bind(_this)} data-index={fileIndex}>X</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t})\n\t\t\t\t\t\t: \'\'}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t)\n\t}\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n\tdisplayName: \'exports\',\n\n\tdeleteFile: function deleteFile(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: "deleteFile",\n\t\t\t\tdata: e.target.getAttribute(\'data-index\')\n\t\t\t});\n\t\t}\n\t},\n\tclick: function click(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: \'click\'\n\t\t\t});\n\t\t}\n\t},\n\tdownLoadClick: function downLoadClick(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tif (e.target.tagName == \'I\') {\n\t\t\tvar _target = e.target.parentElement;\n\t\t} else {\n\t\t\tvar _target = e.target;\n\t\t}\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: _target.getAttribute(\'data-index\'),\n\t\t\t\teventType: "downLoad"\n\t\t\t});\n\t\t}\n\t},\n\trender: function render() {\n\t\tvar data = this.props.customData;\n\t\tif (data == null || data == undefined) {\n\t\t\treturn null;\n\t\t}\n\t\tvar fileData = data.fileData || [];\n\t\tvar _this = this;\n\t\tvar oldFileLength = data.oldFileLength;\n\t\tif (logObject == undefined) {\n\t\t\tvar logObject = { \'doc\': \'doc-log\', \'docx\': \'doc-log\', \'xls\': \'excel-log\', \'xlsx\': \'excel-log\', \'txt\': \'annex-download\', \'pdf\': \'pdf-log\' };\n\t\t}\n\t\treturn React.createElement(\n\t\t\t\'div\',\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-title-icon ysp-manager-audit-wrapper-noborder\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\t\'\\u9644\\u4EF6\'\n\t\t\t\t),\n\t\t\t\tReact.createElement(\'i\', { className: \'relate-files\', onClick: _this.click })\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-wrapper\' },\n\t\t\t\toldFileLength > 0 ? React.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ style: { \'font-size\': \'0.9rem\' } },\n\t\t\t\t\t\'\\u5F85\\u9884\\u89C8\\u9644\\u4EF6\'\n\t\t\t\t) : "",\n\t\t\t\tfileData instanceof Array && fileData.length > 0 ? fileData.map(function (fileItem, fileIndex) {\n\t\t\t\t\tif (fileIndex >= oldFileLength) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tvar extentdName = fileItem.slice(fileItem.lastIndexOf(\'.\') + 1);\n\t\t\t\t\tif (logObject[extentdName] == undefined) {\n\t\t\t\t\t\tvar className = \'annex-download\';\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar className = logObject[extentdName] + " " + \'logo-common-css\';\n\t\t\t\t\t}\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: className, style: { \'border-bottom\': \'none\' }, onClick: _this.downLoadClick.bind(_this), \'data-index\': fileIndex },\n\t\t\t\t\t\tfileItem,\n\t\t\t\t\t\tReact.createElement(\'i\', { className: \'download-log\', style: { \'right\': \'50px\' } }),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t{ className: \'delete-log\', \'data-type\': \'deleteFile\', onClick: _this.deleteFile.bind(_this), \'data-index\': fileIndex },\n\t\t\t\t\t\t\t\'X\'\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : \'\',\n\t\t\t\tfileData.length > oldFileLength ? React.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ style: { \'font-size\': \'0.9rem\' } },\n\t\t\t\t\t\'\\u5F85\\u4E0A\\u4F20\\u9644\\u4EF6\'\n\t\t\t\t) : "",\n\t\t\t\tfileData instanceof Array && fileData.length > 0 ? fileData.map(function (fileItem, fileIndex) {\n\t\t\t\t\tif (fileIndex < oldFileLength) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tvar extentdName = fileItem.slice(fileItem.lastIndexOf(\'.\') + 1);\n\t\t\t\t\tif (logObject[extentdName] == undefined) {\n\t\t\t\t\t\tvar className = \'annex-download\';\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar className = logObject[extentdName] + " " + \'logo-common-css\';\n\t\t\t\t\t}\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: className, style: { \'border-bottom\': \'none\' } },\n\t\t\t\t\t\tfileItem,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ style: { \'font-size\': \'0.7rem\' } },\n\t\t\t\t\t\t\t\'\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20\\u2026\\u2026\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t{ className: \'delete-log\', \'data-type\': \'deleteFile\', onClick: _this.deleteFile.bind(_this), \'data-index\': fileIndex },\n\t\t\t\t\t\t\t\'X\'\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : \'\'\n\t\t\t)\n\t\t);\n\t}\n});';
    },
    getData_control338_n4trKg: function (elem) {
      if (!elem) {
        return;
      };if (elem && elem.querySelector("#loading") && elem.querySelector("#loading").style.display !== "none") {
        return true;
      } else {
        return false;
      }
    },
    doAction_uiControl338_PEpqJb: function (data, elem) {},
    getTemplate_uiControl338_PEpqJb: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n//   componentDidMount(props){\n  //\u6CE8\u610F\uFF1A\u5982\u679C\u6D41\u7A0B\u91CC\u9762\u539FPC\u5E76\u6CA1\u6709#loading\u8FD9\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5C31\u89E3\u5F00\u8FD9\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u8981\u6570\u636E\u91C7\u96C6\n//     var _this=this;\n//     setTimeout(function(){\n//      _this.refs.load.style.display=\"none\"\n//     },3000)\n    \n//   }\n  render(){\n    return(\n    \t<div>\n      \n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n\n    //   componentDidMount(props){\n    //\u6CE8\u610F\uFF1A\u5982\u679C\u6D41\u7A0B\u91CC\u9762\u539FPC\u5E76\u6CA1\u6709#loading\u8FD9\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5C31\u89E3\u5F00\u8FD9\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u8981\u6570\u636E\u91C7\u96C6\n    //     var _this=this;\n    //     setTimeout(function(){\n    //      _this.refs.load.style.display=\"none\"\n    //     },3000)\n\n    //   }\n    value: function render() {\n      return React.createElement(\"div\", null);\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_undefined: function (elem) {
      if (!elem) {
        return;
      }console.log(elem);var data = {};var leftData = [];var rightData = [];var title = [];var content = [];if (!elem.querySelector('#requestlogappednDiv')) {
        data.leftData = leftData;data.rightData = rightData;return data;
      }var divData = elem.querySelector('#requestlogappednDiv');var tableData = $(divData).children('table');var tbody = $(tableData).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
        for (var i = 0; i < trs.length; i++) {
          if (i == 0) {
            var ths = trs[0].querySelectorAll('th');[].forEach.call(ths, function (item, index) {
              title.push(item.textContent.trim());
            });
          } else {
            var tds = $(trs[i]).children('td');var trContent = [];[].forEach.call(tds, function (item, index) {
              if (item.querySelector('table')) {
                var suggest = item.querySelector('iframe').contentDocument.querySelector('table.ViewForm').textContent.replace(/\s/g, "").trim();if (suggest == "") {
                  trContent.push('无');
                } else {
                  trContent.push(suggest);
                }
              } else {
                if (item.querySelector('script')) {
                  trContent.push(item.childNodes[2].textContent.replace(/\s/g, ""));
                } else {
                  trContent.push(item.textContent.replace(/\s/g, "").trim());
                }
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            if (j == title.length - 1) {
              rSingleData.push(innerContent[j]);
            } else {
              rSingleData.push(title[j] + "：" + innerContent[j]);
            }
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data['leftData'] = leftData;data['rightData'] = rightData;return data;
    },
    doAction_: function (data, elem) {},
    getTemplate_: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u541B~ \u4F46\u662F\u6211\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u8D76\u5FEB\u6765\u7F16\u8F91\u6211\u5427~\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u6211\\u662F\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u541B~ \\u4F46\\u662F\\u6211\\u8FD8\\u6CA1\\u6709\\u4EFB\\u4F55\\u5185\\u5BB9\\uFF0C\\u8D76\\u5FEB\\u6765\\u7F16\\u8F91\\u6211\\u5427~"\n    );\n  }\n});';
    },
    getData_control357_5Ts0S3: function (elem) {
      if (!elem) {
        return;
      }var data = {};var leftData = [];var rightData = [];var title = [];var content = [];if (!elem.querySelector('#requestlogappednDiv')) {
        data.leftData = leftData;data.rightData = rightData;return data;
      }var divData = elem.querySelector('#requestlogappednDiv');var tableData = $(divData).children('table');var tbody = $(tableData).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
        for (var i = 0; i < trs.length; i++) {
          if (i == 0) {
            var ths = trs[0].querySelectorAll('th');[].forEach.call(ths, function (item, index) {
              title.push(item.textContent.trim());
            });
          } else {
            var tds = $(trs[i]).children('td');var trContent = [];[].forEach.call(tds, function (item, index) {
              if (item.querySelector('table')) {
                var suggest = item.querySelector('iframe').contentDocument.querySelector('table.ViewForm').textContent.replace(/\s/g, "").trim();if (suggest == "") {
                  trContent.push('无');
                } else {
                  trContent.push(suggest);
                }
              } else {
                if (item.querySelector('script')) {
                  trContent.push(item.childNodes[2].textContent.replace(/\s/g, ""));
                } else {
                  trContent.push(item.textContent.replace(/\s/g, "").trim());
                }
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            if (j == title.length - 1) {
              rSingleData.push(innerContent[j]);
            } else {
              rSingleData.push(title[j] + "：" + innerContent[j]);
            }
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data['leftData'] = leftData;data['rightData'] = rightData;return data;
    },
    doAction_uiControl363_3PQ7Ah: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'showReceiver') {
        var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      } else if (eventType == 'showReceiver') {
        elem.ownerDocument.defaultView.parent.document.querySelector("td[id='oTDtype_0']").click();;
      } else if (eventType == 'changeTab') {
        var docddd = elem.ownerDocument.querySelector('form[name="frmmain"]');var buttomTab = $(docddd).children('table')[2];buttomTab.querySelectorAll('td')[0].click();
      }
    },
    getTemplate_uiControl363_3PQ7Ah: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCommonHeader, ADialog\n} from 'ysp-custom-components';\nexport default class extends Component {\n\n\tconstructor(props) {// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactiveTab: 0,\n\t\t\topen: false\n\t\t}\n\t}\n\n\tbtnClick(e) {//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n\t\tvar target = e.target;\n\t\tvar index = target.getAttribute(\"data-index\");\n\t\tthis.setState(\n\t\t\tfunction (prevState) {\n\t\t\t\tif (prevState.activeTab == 0 && index == 1) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 1,\n            open: true\n\t\t\t\t\t}\n\t\t\t\t} else if (prevState.activeTab == 1 && index == 0) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 0,\n            open: false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t);\n    if(this.state.open==true && index ==0){   \ttarget.ownerDocument.querySelector(\".ysp_table_lfj\").style.display=\"block\";\n    }else{\n      \ttarget.ownerDocument.querySelector(\".ysp_table_lfj\").style.display=\"none\";\n    }\n\t}\n  \n  aboutTabClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType: 'changeTab'\n      })\n    }\n  }\n\n\tshowReceiver(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tvar dataIndex = e.target.getAttribute('data-index');\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: { index: dataIndex },\n\t\t\t\teventType: \"showReceiver\"\n\t\t\t})\n\t\t}\n\t}\n\n\t// render\u65B9\u6CD5-->\u6E32\u67D3\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = _this.props.customData||[];\n\t\tvar leftData = data.leftData||[];\n\t\tvar rightData = data.rightData||[];\n\t\treturn (\n\t\t\t<div className=\"ysp-manager-audit-header-tab\">\n\t\t\t\t<div className=\"left-div\" data-index=\"0\" onClick={_this.btnClick.bind(_this)}><i data-index=\"0\"></i><span data-index=\"0\" className={_this.state.activeTab == 0 ? \"active_tab\" : \"\"} >\u6D41\u7A0B\u8868\u5355</span></div>\n\t\t\t\t<div className=\"left-div\" data-index=\"1\" onClick={_this.btnClick.bind(_this)}><i data-index=\"1\"></i><span data-index=\"1\" className={_this.state.activeTab == 1 ? \"active_tab\" : \"\"} onClick={_this.aboutTabClick.bind(_this)}>\u6D41\u8F6C\u610F\u89C1</span></div>\n\t\t\t\t<div className=\"border-bottom\"></div>\n\t\t\t\t{this.state.open && <ADialog>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{leftData ? leftData.map((litem, lindex) => {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<div className=\"approval-node-info\">\n\t\t\t\t\t\t\t\t\t<div className=\"approval-node-info-left-div\">\n\t\t\t\t\t\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div className=\"approval-node-info-right-div\">\n\t\t\t\t\t\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex )+1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf('\u663E\u793A') >= 0 ? '\u663E\u793A' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}) : <div></div>}\n\t\t\t\t\t</div>\n\t\t\t\t</ADialog>}\n\t\t\t\t<p className=\"bottom\"></p>\n\t\t\t</div>\n\t\t)\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n\t\t_this2.state = {\n\t\t\tactiveTab: 0,\n\t\t\topen: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'btnClick',\n\t\tvalue: function btnClick(e) {\n\t\t\t//\u6D41\u8F6C\u610F\u89C1\u5207\u6362\n\t\t\tvar target = e.target;\n\t\t\tvar index = target.getAttribute(\"data-index\");\n\t\t\tthis.setState(function (prevState) {\n\t\t\t\tif (prevState.activeTab == 0 && index == 1) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 1,\n\t\t\t\t\t\topen: true\n\t\t\t\t\t};\n\t\t\t\t} else if (prevState.activeTab == 1 && index == 0) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tactiveTab: 0,\n\t\t\t\t\t\topen: false\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t});\n\t\t\tif (this.state.open == true && index == 0) {\n\t\t\t\ttarget.ownerDocument.querySelector(\".ysp_table_lfj\").style.display = \"block\";\n\t\t\t} else {\n\t\t\t\ttarget.ownerDocument.querySelector(\".ysp_table_lfj\").style.display = \"none\";\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'aboutTabClick',\n\t\tvalue: function aboutTabClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: 'changeTab'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'showReceiver',\n\t\tvalue: function showReceiver(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar dataIndex = e.target.getAttribute('data-index');\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { index: dataIndex },\n\t\t\t\t\teventType: \"showReceiver\"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\t// render\u65B9\u6CD5-->\u6E32\u67D3\n\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = _this.props.customData || [];\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'ysp-manager-audit-header-tab' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'left-div', 'data-index': '0', onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\tReact.createElement('i', { 'data-index': '0' }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'data-index': '0', className: _this.state.activeTab == 0 ? \"active_tab\" : \"\" },\n\t\t\t\t\t\t'\\u6D41\\u7A0B\\u8868\\u5355'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'left-div', 'data-index': '1', onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\tReact.createElement('i', { 'data-index': '1' }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'data-index': '1', className: _this.state.activeTab == 1 ? \"active_tab\" : \"\", onClick: _this.aboutTabClick.bind(_this) },\n\t\t\t\t\t\t'\\u6D41\\u8F6C\\u610F\\u89C1'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement('div', { className: 'border-bottom' }),\n\t\t\t\tthis.state.open && React.createElement(\n\t\t\t\t\t_yspCustomComponents.ADialog,\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'approval-node-info' },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'approval-node-info-left-div' },\n\t\t\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'approval-node-info-right-div' },\n\t\t\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t\t'\\u63A5\\u6536\\u4EBA:',\n\t\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t\t{ 'data-index': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\t\t\tritem.indexOf('\u663E\u793A') >= 0 ? '\u663E\u793A' : ritem\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}) : React.createElement('div', null)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement('p', { className: 'bottom' })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);