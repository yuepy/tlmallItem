'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control234_iT3NEF: function getData_control234_iT3NEF(elem) {
      var data = ['三会文件审批流程'];return data;
    },
    doAction_uiControl217_OJCT1f: function doAction_uiControl217_OJCT1f(data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl217_OJCT1f: function getTemplate_uiControl217_OJCT1f() {
      var selfTemplate = '\n\nimport {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n\n  render(){\n    var data = this.props.customData\n    return (\n      <div ref = \'outerWrapper\'>\n    \t<CommonHeader \n       data={{centerText:data}}\n        backIsShow = {true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n        </div>\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { ref: \'outerWrapper\' },\n        React.createElement(_yspCustomComponents.CommonHeader, {\n          data: { centerText: data },\n          backIsShow: true,\n          editIsShow: true,\n          rightText: \'\\u4FDD\\u5B58\',\n          save: function save(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'save1\'\n              });\n            }\n          },\n          back: function back(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'click\'\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control236_XPsOLs: function getData_control236_XPsOLs(elem) {
      if (!elem) {
        return;
      }var data = { header: { title: [], number: [] }, base_lc_info: { title: [], content: [], degree: [], miji: { content: [], id: [] } }, base_info: { content: [] }, related_document: [], related_process: [], file: [] }; //附件-----------
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
            } //判断附件2-------------------------------------
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
                        arr3.push({ name: $(this).next().text().trim(), stl: 'doc', tno: 'push' });
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
                        else if ($(this)[0].className == 'zdn' && ($(this).children().length == 0 || $(this)[0].children.length > 0 && $(this)[0].children[0].tagName == 'BR')) {
                            if ($(this)[0].innerHTML.replace(/&nbsp;/, "").replace(/\<br\>/ig, "").replace(/\s+/, "") == '') {
                              arr2.push({ text: '', type: 'suggest' });
                            } else {
                              arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                            }
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      } else if ($(elem).children("table").length == 1) {
        var elem2 = $(elem).children("table").eq(0)[0];var tbody2 = $(elem).children("table").eq(0).children("tbody")[0];$(tbody2).children("tr").each(function () {
          //var arr1 = [];
          $(this).children("td").each(function () {
            var arr2 = []; //判断标题-------------------------------------
            if ($(this)[0].className == 'zdm' && /签字意见/.test($(this).text())) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'tit_yell2'
              });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length > 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title' });
            } else if ($(this)[0].className == 'zdm' && $(this)[0].textContent.trim().length == 0) {
              arr2.push({ text: $(this).text().replace(/\s/ig, "").trim(), type: 'title1' });
            } //判断附件111-------------------------------------
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
                        arr3.push({ name: $(this).next().text().trim(), stl: 'doc', tno: 'push' });
                      } else if ($(this).next().text().indexOf('pdf') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'pdf', no: 'push' });
                      } else if ($(this).next().text().indexOf('xls') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'xls', no: 'push' });
                      } else if ($(this).next().text().indexOf('png') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'png', no: 'push' });
                      } else if ($(this).next().text().indexOf('jpg') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(), stl: 'jpg', no: 'push' });
                      } else if ($(this).next().text().indexOf('gif') !== -1) {
                        arr3.push({ name: $(this).next().text().trim(),
                          stl: 'gif', no: 'push' });
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
                        else if ($(this)[0].className == 'zdn' && ($(this).children().length == 0 || $(this)[0].children.length > 0 && $(this)[0].children[0].tagName == 'BR')) {
                            if ($(this)[0].innerHTML.replace(/&nbsp;/, "").replace(/\<br\>/ig, "").replace(/\s+/, "") == '') {
                              arr2.push({ text: '',
                                type: 'suggest' });
                            } else {
                              arr2.push({ text: $(this)[0].innerHTML, type: 'suggest' });
                            }
                          } else if ($(this).find(".cke_editor").length > 0) {
                            arr2.push({ text: $(this).find(".cke_editor").find('iframe')[0].contentDocument.body.innerHTML, type: 'suggest_final' });
                          }data.base_info.content.push(arr2);
          });
        });
      }return data;
    },
    doAction_uiControl221_vvZQgQ: function doAction_uiControl221_vvZQgQ(data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var elem1 = $(elem).children("table").eq(1)[0];$(elem1).find('input').each(function () {
          if ($(this).attr('temptitle') && $(this).attr('temptitle').indexOf('发文附件') !== -1) {
            var value = $(this)[0].value;var arr = $(this)[0].value.split(',');arr.splice(idx, 1);var valuet = arr.toString();console.log(valuet);$(this)[0].value = valuet;
          }
        });
      }if (data.eventType == 'selectFile') {
        $(elem).find('#Filedata').eq(0).click();
      }if (data.eventType == 'inputBlur') {
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
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());
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
    getTemplate_uiControl221_vvZQgQ: function getTemplate_uiControl221_vvZQgQ() {
      var selfTemplate = 'module.exports = React.createClass({\n   selectFile:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'selectFile\'\n      })\n    }\n  },\n  deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display=\'none\' ;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"deleteFile",\n      \tdata:e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  about1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about1\'\n      })\n    }\n  },\n  about2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'about2\'\n      })\n    }\n  },\n  button2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button2\',\n        data: e.target.id\n      })\n    }\n  },\n  degree:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'degree\',\n        data: e.target.value\n      })\n    }\n  },\n  button1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  textarea:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea\',\n        data:e.target.innerHTML\n      })\n    }\n  },\n   inputBlur:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'inputBlur\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   textarea1:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'textarea1\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  select:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'select\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n   onChange2:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onChange2\',\n        data:{\n          value:e.target.value,\n          id:e.target.id\n        }\n      })\n    }\n  },\n  more:function(e){\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement;\n    }\n    else{\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if(e.target.ownerDocument.querySelectorAll(".bottom_tb").length){\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if(blo && blo.children.length > 0){\n        var lth = blo.children.length ;\n          for(var i=0;i<lth;i++){\n            blo.children[i].style.display = \'block\';\n          }\n          _target.style.display = \'none\';\n          document.getElementsByClassName("button_less")[0].style.display = \'block\';\n        }\n    \t}\n    }\n    ,\n   less:function(e){\n      if(e.target.tagName == \'SPAN\'){\n        var _target = e.target.parentElement;\n      }\n      else{\n        var _target = e.target;\n      }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n     if(blo.children.length > 0){\n        var lth = blo.children.length ;\n        for(var i=10;i<lth;i++){\n          blo.children[i].style.display = \'none\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_more")[0].style.display = \'block\';\n      }\n     }\n   ,\n  render: function() {\n    var data = this.props.customData;\n    var _this = this ;\n\t\t\tif(data){\n        if(data.base_info.content.length > 0){\n      var detail = data.base_info.content.map(function(d1,i1){\n        //console.log(d1[0]) \n        if (d1.length >0 && d1[0].type){\n          if(d1[0].type == \'title\' && d1[0].type && d1[0].text!==\'\u6B63\u6587\' && d1[0].text!==\'\u53D1\u6587\u9644\u4EF6\'){\n            return (<div className = \'font-yell\'>{d1[0].text}</div>)\n          } \n          if(d1[0].type == \'title\' && d1[0].type && d1[0].text==\'\u53D1\u6587\u9644\u4EF6\'){\n            return (<div className=\'push_file_box\'><div className = \'font-yell\'>{d1[0].text}</div><button onClick={_this.selectFile}>\u9009\u62E9\u6587\u4EF6</button></div>)\n          } \n           if(d1[0].type == \'title1\'){\n            return (<div style={{display:\'none\'}}></div>)\n          } \n          if(d1[0].type == \'tit_yell\' && d1[0].type){\n            return (<div className = \'tit_yell espel\'>{d1[0].text}</div>)\n          }  \n          else if(d1[0].type == \'a\'){\n            return (<div className = \'name\'>{d1[0].text}</div>)\n          }\n          else if(d1[0].type == \'input\'){\n            return (<AInput id={d1[0].id} value = {d1[0].text} onBlur = {_this.inputBlur}/>)\n          }\n          else if(d1[0].type == \'textarea\'){\n            return (<AInput onBlur = {_this.textarea1} id = {d1[0].id} value ={d1[0].text} />)\n          }\n          else if(d1[0].type == \'fujian\'){\n           var fj =  d1[0].text.map(function(d2,i2){\n             if(d2.no!==\'push\'){\n              return (<div className=\'file\' data-no={d2.no} data-type={d2.stl} onClick={_this.preview}><div>{d2.name}</div><div>{d1[0].size[i2]}</div><button></button></div>)\n             }\n             else{\n              return (<div className=\'file2\' data-no={d2.no} data-type={d2.stl}><div>{d2.name}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i2} onClick={_this.deleteFile}></button></div>)\n             }\n            })\n            return (<div className=\'file_box\'>{fj}</div>)\n          }\n         \n          else if(d1[0].type == \'button\'){\n            if(d1[0].text.length > 0){\n              var ite = d1[0].text.map(function(e1,i1){\n                return(<a data-index={i1}>{e1}</a>)\n              })\n            }\n            return (<div className=\'button_box\'><div>{ite}</div><button onClick={_this.button1} className = \'name\' data-id ={d1[0].id}></button></div>)\n          }\n          else if(d1[0].type == \'suggest\'){\n            return (<div className = "textArea" dangerouslySetInnerHTML = {{__html: d1[0].text}}></div>)\n          }\n           else if(d1[0].type == \'selcet\'){\n             var option = d1[0].text.map(function(d3,i3){\n               return(<option selected = {d3.select}>{d3.text}</option>)\n             })\n            return (<select id={d1[0].id} onChange={_this.select}>\n              {option}\n            </select>)\n          }\n        }       \n      })   \n      var detail2 = data.base_info.content.map(function(d1,i1){\n        if(d1.length >0 && d1[0].type){\n        if(d1[0].type == \'suggest_final\'){\n  var related_document = data.related_document.map(function(d3,i3){\n    return(<a>{d3}</a>)\n  })\n   var related_process = data.related_process.map(function(d4,i4){\n    return(<a>{d4}</a>)\n  })\n   if(data.file.length > 0){\n    \tvar file = data.file.map(function(d5,i5){\n       return(<div>{data.file.length}</div>)\n     }) \n   }\n            return (\n              <div className=\'detail2_box\'>            \n                <div contentEditable=\'true\' className = "textArea2" dangerouslySetInnerHTML = {{__html: d1[0].text}} onBlur = {_this.textarea}></div>\n      <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6587\u6863</span>\n                  <div className=\'about_box\'>\n                    <div className=\'box_con\'>{related_document}</div>\n                    <button onClick={_this.about1}></button>\n                    </div>\n                  </div>\n                <div>\n                  <div className=\'ovh\'>\n                  <span className=\'font-yell\'>\u76F8\u5173\u6D41\u7A0B</span>\n                  <div  className=\'about_box\'>\n                    <div className=\'box_con\'>{related_process}</div>\n                    <button onClick={_this.about2}></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            )\n          }\n        }\n      })\n      }\n    return (\n      <div className=\'ysp_table_lfj2\'>\n        <div className=\'header_box\'>\n        \t<center>{data.header.title}</center>\n          <center>{data.header.number}</center>\n        </div>      \n        <div className=\'bottom_box\'>\n          <div className=\'tit_yell\'>\u57FA\u672C\u4FE1\u606F</div>\n          <div className=\'bottom_tb\'>{detail}</div>\n          <div className=\'ysp_button_more button_more\' onClick={_this.more}><span>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span></div>\n          <div className=\'ysp_button_more button_less\' onClick={_this.less}><span>\u6536\u8D77\u5168\u90E8\u5185\u5BB9</span></div>\n        </div>\n        <div className=\'bottom_box bottom_box2\'>\n          <div className=\'bottom_tb\'>\n          <div className=\'tit_yell\'>\u7B7E\u5B57\u610F\u89C1</div>\n        \t{detail2}\n            </div>\n        </div>\n      </div>\n    )\n  }\n    else{\n      return (<div></div>)\n    }\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  selectFile: function selectFile(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'selectFile\'\n      });\n    }\n  },\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display = \'none\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "deleteFile",\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  about1: function about1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about1\'\n      });\n    }\n  },\n  about2: function about2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'about2\'\n      });\n    }\n  },\n  button2: function button2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button2\',\n        data: e.target.id\n      });\n    }\n  },\n  degree: function degree(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'degree\',\n        data: e.target.value\n      });\n    }\n  },\n  button1: function button1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'button1\',\n        data: e.target.getAttribute(\'data-id\')\n      });\n    }\n  },\n  textarea: function textarea(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea\',\n        data: e.target.innerHTML\n      });\n    }\n  },\n  inputBlur: function inputBlur(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'inputBlur\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  textarea1: function textarea1(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'textarea1\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  select: function select(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'select\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  onChange2: function onChange2(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'onChange2\',\n        data: {\n          value: e.target.value,\n          id: e.target.id\n        }\n      });\n    }\n  },\n  more: function more(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    //debugger;\n    //console.log(e.target.ownerDocument.querySelectorAll(".bottom_tb").length)\n    if (e.target.ownerDocument.querySelectorAll(".bottom_tb").length) {\n      var blo = e.target.ownerDocument.querySelectorAll(".bottom_tb")[0];\n      if (blo && blo.children.length > 0) {\n        var lth = blo.children.length;\n        for (var i = 0; i < lth; i++) {\n          blo.children[i].style.display = \'block\';\n        }\n        _target.style.display = \'none\';\n        document.getElementsByClassName("button_less")[0].style.display = \'block\';\n      }\n    }\n  },\n\n  less: function less(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement;\n    } else {\n      var _target = e.target;\n    }\n    var blo = document.getElementsByClassName("bottom_tb")[0];\n    if (blo.children.length > 0) {\n      var lth = blo.children.length;\n      for (var i = 10; i < lth; i++) {\n        blo.children[i].style.display = \'none\';\n      }\n      _target.style.display = \'none\';\n      document.getElementsByClassName("button_more")[0].style.display = \'block\';\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.base_info.content.length > 0) {\n        var detail = data.base_info.content.map(function (d1, i1) {\n          //console.log(d1[0]) \n          if (d1.length > 0 && d1[0].type) {\n            if (d1[0].type == \'title\' && d1[0].type && d1[0].text !== \'\u6B63\u6587\' && d1[0].text !== \'\u53D1\u6587\u9644\u4EF6\') {\n              return React.createElement(\n                \'div\',\n                { className: \'font-yell\' },\n                d1[0].text\n              );\n            }\n            if (d1[0].type == \'title\' && d1[0].type && d1[0].text == \'\u53D1\u6587\u9644\u4EF6\') {\n              return React.createElement(\n                \'div\',\n                { className: \'push_file_box\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'font-yell\' },\n                  d1[0].text\n                ),\n                React.createElement(\n                  \'button\',\n                  { onClick: _this.selectFile },\n                  \'\\u9009\\u62E9\\u6587\\u4EF6\'\n                )\n              );\n            }\n            if (d1[0].type == \'title1\') {\n              return React.createElement(\'div\', { style: { display: \'none\' } });\n            }\n            if (d1[0].type == \'tit_yell\' && d1[0].type) {\n              return React.createElement(\n                \'div\',\n                { className: \'tit_yell espel\' },\n                d1[0].text\n              );\n            } else if (d1[0].type == \'a\') {\n              return React.createElement(\n                \'div\',\n                { className: \'name\' },\n                d1[0].text\n              );\n            } else if (d1[0].type == \'input\') {\n              return React.createElement(AInput, { id: d1[0].id, value: d1[0].text, onBlur: _this.inputBlur });\n            } else if (d1[0].type == \'textarea\') {\n              return React.createElement(AInput, { onBlur: _this.textarea1, id: d1[0].id, value: d1[0].text });\n            } else if (d1[0].type == \'fujian\') {\n              var fj = d1[0].text.map(function (d2, i2) {\n                if (d2.no !== \'push\') {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'file\', \'data-no\': d2.no, \'data-type\': d2.stl, onClick: _this.preview },\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d2.name\n                    ),\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d1[0].size[i2]\n                    ),\n                    React.createElement(\'button\', null)\n                  );\n                } else {\n                  return React.createElement(\n                    \'div\',\n                    { className: \'file2\', \'data-no\': d2.no, \'data-type\': d2.stl },\n                    React.createElement(\n                      \'div\',\n                      null,\n                      d2.name\n                    ),\n                    React.createElement(\n                      \'div\',\n                      null,\n                      \'\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...\'\n                    ),\n                    React.createElement(\'button\', { \'data-index\': i2, onClick: _this.deleteFile })\n                  );\n                }\n              });\n              return React.createElement(\n                \'div\',\n                { className: \'file_box\' },\n                fj\n              );\n            } else if (d1[0].type == \'button\') {\n              if (d1[0].text.length > 0) {\n                var ite = d1[0].text.map(function (e1, i1) {\n                  return React.createElement(\n                    \'a\',\n                    { \'data-index\': i1 },\n                    e1\n                  );\n                });\n              }\n              return React.createElement(\n                \'div\',\n                { className: \'button_box\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  ite\n                ),\n                React.createElement(\'button\', { onClick: _this.button1, className: \'name\', \'data-id\': d1[0].id })\n              );\n            } else if (d1[0].type == \'suggest\') {\n              return React.createElement(\'div\', { className: \'textArea\', dangerouslySetInnerHTML: { __html: d1[0].text } });\n            } else if (d1[0].type == \'selcet\') {\n              var option = d1[0].text.map(function (d3, i3) {\n                return React.createElement(\n                  \'option\',\n                  { selected: d3.select },\n                  d3.text\n                );\n              });\n              return React.createElement(\n                \'select\',\n                { id: d1[0].id, onChange: _this.select },\n                option\n              );\n            }\n          }\n        });\n        var detail2 = data.base_info.content.map(function (d1, i1) {\n          if (d1.length > 0 && d1[0].type) {\n            if (d1[0].type == \'suggest_final\') {\n              var related_document = data.related_document.map(function (d3, i3) {\n                return React.createElement(\n                  \'a\',\n                  null,\n                  d3\n                );\n              });\n              var related_process = data.related_process.map(function (d4, i4) {\n                return React.createElement(\n                  \'a\',\n                  null,\n                  d4\n                );\n              });\n              if (data.file.length > 0) {\n                var file = data.file.map(function (d5, i5) {\n                  return React.createElement(\n                    \'div\',\n                    null,\n                    data.file.length\n                  );\n                });\n              }\n              return React.createElement(\n                \'div\',\n                { className: \'detail2_box\' },\n                React.createElement(\'div\', { contentEditable: \'true\', className: \'textArea2\', dangerouslySetInnerHTML: { __html: d1[0].text }, onBlur: _this.textarea }),\n                React.createElement(\n                  \'div\',\n                  { className: \'ovh\' },\n                  React.createElement(\n                    \'span\',\n                    { className: \'font-yell\' },\n                    \'\\u76F8\\u5173\\u6587\\u6863\'\n                  ),\n                  React.createElement(\n                    \'div\',\n                    { className: \'about_box\' },\n                    React.createElement(\n                      \'div\',\n                      { className: \'box_con\' },\n                      related_document\n                    ),\n                    React.createElement(\'button\', { onClick: _this.about1 })\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'div\',\n                    { className: \'ovh\' },\n                    React.createElement(\n                      \'span\',\n                      { className: \'font-yell\' },\n                      \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n                    ),\n                    React.createElement(\n                      \'div\',\n                      { className: \'about_box\' },\n                      React.createElement(\n                        \'div\',\n                        { className: \'box_con\' },\n                        related_process\n                      ),\n                      React.createElement(\'button\', { onClick: _this.about2 })\n                    )\n                  )\n                )\n              );\n            }\n          }\n        });\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_table_lfj2\' },\n        React.createElement(\n          \'div\',\n          { className: \'header_box\' },\n          React.createElement(\n            \'center\',\n            null,\n            data.header.title\n          ),\n          React.createElement(\n            \'center\',\n            null,\n            data.header.number\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box\' },\n          React.createElement(\n            \'div\',\n            { className: \'tit_yell\' },\n            \'\\u57FA\\u672C\\u4FE1\\u606F\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\' },\n            detail\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_more\', onClick: _this.more },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp_button_more button_less\', onClick: _this.less },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u6536\\u8D77\\u5168\\u90E8\\u5185\\u5BB9\'\n            )\n          )\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'bottom_box bottom_box2\' },\n          React.createElement(\n            \'div\',\n            { className: \'bottom_tb\' },\n            React.createElement(\n              \'div\',\n              { className: \'tit_yell\' },\n              \'\\u7B7E\\u5B57\\u610F\\u89C1\'\n            ),\n            detail2\n          )\n        )\n      );\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control240_RGKfZ5: function getData_control240_RGKfZ5(elem) {
      if (!elem) {
        return;
      }var data = [];$(elem).find("#ysp_fake_form").each(function () {
        var arr = [];if ($(this).find("#Filedata").attr('value').indexOf('txt') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'text' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('doc') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'doc' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('pdf') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'pdf' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('jpg') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'jpg' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('xls') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'xls' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('png') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'png' });
        } else if ($(this).find("#Filedata").attr('value').indexOf('unknown') !== -1) {
          arr.push({ text: $(this).find("#Filedata").attr('value'), stl: 'unknown' });
        }data.push(arr);
      });return data;
    },
    doAction_uiControl222_QKfKdT: function doAction_uiControl222_QKfKdT(data, elem) {
      if (data.eventType == 'deleteFile') {
        var idx = data.dataCustom;var input = $(elem).find('#field-annexupload')[0];var value = $(input)[0].value;var arr = $(input)[0].value.split(',');arr.splice(idx, 1);var valuet = arr.toString();console.log(valuet);$(input)[0].value = valuet;
      }if (data.eventType == 'click') {
        $(elem).find("#Filedata").click();
      }
    },
    getTemplate_uiControl222_QKfKdT: function getTemplate_uiControl222_QKfKdT() {
      var selfTemplate = 'module.exports = React.createClass({\n   deleteFile:function(e){\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box2\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display=\'none\'\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"deleteFile",\n      \tdata:e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data.length > 0 && data[0][0]){\n      var item = data.map(function(d,i){\n      return(\n        \n        \n        \n      <div className=\'file2\' data-no={i} data-type={d[0].stl}><div>{d[0].text}</div><div>\u4E0A\u4F20\u51C6\u5907\u4E2D\uFF0C\u63D0\u4EA4\u540E\u5F00\u59CB\u4E0A\u4F20...</div><button data-index={i} onClick={_this.deleteFile}></button></div>\n      \n      \n      \n      )\n    })\n    }\n    \n   return (\n     <div>\n      <div className="ysp-manager-audit-title-icon">\n        <span>\u9644\u4EF6</span>\n        <i className="relate-files" onClick={_this.click}></i>\n        \n      </div>\n       <div className = \'file_box2\'>{item}</div>\n       </div>\n      )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  deleteFile: function deleteFile(e) {\n    var elem = e.target.ownerDocument.getElementsByClassName(\'file_box2\')[0];\n    var idx = e.target.getAttribute(\'data-index\');\n    elem.children[idx].style.display = \'none\';\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: "deleteFile",\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data.length > 0 && data[0][0]) {\n      var item = data.map(function (d, i) {\n        return React.createElement(\n          \'div\',\n          { className: \'file2\', \'data-no\': i, \'data-type\': d[0].stl },\n          React.createElement(\n            \'div\',\n            null,\n            d[0].text\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u4E0A\\u4F20\\u51C6\\u5907\\u4E2D\\uFF0C\\u63D0\\u4EA4\\u540E\\u5F00\\u59CB\\u4E0A\\u4F20...\'\n          ),\n          React.createElement(\'button\', { \'data-index\': i, onClick: _this.deleteFile })\n        );\n      });\n    }\n\n    return React.createElement(\n      \'div\',\n      null,\n      React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u9644\\u4EF6\'\n        ),\n        React.createElement(\'i\', { className: \'relate-files\', onClick: _this.click })\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'file_box2\' },\n        item\n      )\n    );\n  }\n});';
    },
    getData_control246_OhFkhp: function getData_control246_OhFkhp(elem) {
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
    doAction_uiControl226_qpsbtx: function doAction_uiControl226_qpsbtx(data, elem) {
      if (data.eventType == 'click1') {
        // debugger;
        elem.click();
      }
    },
    getTemplate_uiControl226_qpsbtx: function getTemplate_uiControl226_qpsbtx() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click1\'\n      })\n    }\n    if(e.target.ownerDocument.getElementsByClassName("document_final_lfj").length > 0){\n       var elem = e.target.ownerDocument.getElementsByClassName("document_final_lfj")[0];\n    if(elem.style.display ==\'none\'){\n        elem.style.display = \'block\'\n      }\n      else{\n        elem.style.display = \'none\'\n      }\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className="ysp-manager-audit-title-icon" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6587\u6863</span>\n        <i className="arrow-right"></i>\n      </div>);\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click1\',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click1\'\n        });\n      }\n      if (e.target.ownerDocument.getElementsByClassName("document_final_lfj").length > 0) {\n        var elem = e.target.ownerDocument.getElementsByClassName("document_final_lfj")[0];\n        if (elem.style.display == \'none\') {\n          elem.style.display = \'block\';\n        } else {\n          elem.style.display = \'none\';\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u76F8\\u5173\\u6587\\u6863\'\n        ),\n        React.createElement(\'i\', { className: \'arrow-right\' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control247_8gbHwd: function getData_control247_8gbHwd(elem) {
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
    doAction_uiControl232_C6yMJP: function doAction_uiControl232_C6yMJP(data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(0).click();
      }
    },
    getTemplate_uiControl232_C6yMJP: function getTemplate_uiControl232_C6yMJP() {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == \'section_box\'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == \'LI\'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data: _target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className=\'section_box\' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul className=\'document_final_lfj\'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul className=\'document_final_lfj\' style ={{margin:\'10px\',display:\'none\'}}>\u6CA1\u6709\u76F8\u5173\u6587\u6863</ul>)\n    }\n    }\n    else{\n      return (<div className=\'document_final_lfj\'></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    if (e.target.className == \'section_box\') {\n      var _target = e.target;\n    } else if (e.target.tagName == \'LI\') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: _target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            \'li\',\n            { className: \'section_box\', onClick: _this.click, \'data-index\': i1 },\n            d1.map(function (d2, i2) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d2\n                )\n              );\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          \'ul\',\n          { className: \'document_final_lfj\' },\n          item\n        );\n      } else {\n        return React.createElement(\n          \'ul\',\n          { className: \'document_final_lfj\', style: { margin: \'10px\', display: \'none\' } },\n          \'\\u6CA1\\u6709\\u76F8\\u5173\\u6587\\u6863\'\n        );\n      }\n    } else {\n      return React.createElement(\'div\', { className: \'document_final_lfj\' });\n    }\n  }\n});';
    },
    getData_control248_8VzzGD: function getData_control248_8VzzGD(elem) {},
    doAction_uiControl233_pZZvPm: function doAction_uiControl233_pZZvPm(data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl233_pZZvPm: function getTemplate_uiControl233_pZZvPm() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click1\'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName("process_final_lfj")[0];\n    if(elem.style.display ==\'none\'){\n      elem.style.display = \'block\'\n    }\n    else{\n      elem.style.display = \'none\'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className="ysp-manager-audit-title-icon" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u6D41\u7A0B</span>\n        <i className="arrow-right"></i>\n      </div>);\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click1\',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click1\'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName("process_final_lfj")[0];\n      if (elem.style.display == \'none\') {\n        elem.style.display = \'block\';\n      } else {\n        elem.style.display = \'none\';\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u76F8\\u5173\\u6D41\\u7A0B\'\n        ),\n        React.createElement(\'i\', { className: \'arrow-right\' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control249_ZqWXJh: function getData_control249_ZqWXJh(elem) {
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
    doAction_uiControl234_6uZJeB: function doAction_uiControl234_6uZJeB(data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(1).click();
      }
    },
    getTemplate_uiControl234_6uZJeB: function getTemplate_uiControl234_6uZJeB() {
      var selfTemplate = 'module.exports = React.createClass({\n    click:function(e){\n    if(e.target.className == \'section_box\'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == \'LI\'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data: _target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className=\'section_box\' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n          return(<li><span>{data.title[i2]}</span><span>{d2}</span></li>)\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:\'none\'}} className=\'process_final_lfj\'>\n        {item}\n      </ul>)\n    }\n    else{\n        return(<ul className=\'process_final_lfj\' style ={{margin:\'10px\',display:\'none\'}}>\u6CA1\u6709\u76F8\u5173\u6D41\u7A0B</ul>)\n    }\n    }\n    else {\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    if (e.target.className == \'section_box\') {\n      var _target = e.target;\n    } else if (e.target.tagName == \'LI\') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: _target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            \'li\',\n            { className: \'section_box\', onClick: _this.click, \'data-index\': i1 },\n            d1.map(function (d2, i2) {\n              return React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[i2]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d2\n                )\n              );\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          \'ul\',\n          { style: { display: \'none\' }, className: \'process_final_lfj\' },\n          item\n        );\n      } else {\n        return React.createElement(\n          \'ul\',\n          { className: \'process_final_lfj\', style: { margin: \'10px\', display: \'none\' } },\n          \'\\u6CA1\\u6709\\u76F8\\u5173\\u6D41\\u7A0B\'\n        );\n      }\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control250_K7wRbV: function getData_control250_K7wRbV(elem) {},
    doAction_uiControl235_0v1uQ1: function doAction_uiControl235_0v1uQ1(data, elem) {
      if (data.eventType == 'click1') {
        elem.click();
      }
    },
    getTemplate_uiControl235_0v1uQ1: function getTemplate_uiControl235_0v1uQ1() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  \n  click1(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click1\'\n      })\n    }\n    var elem = e.target.ownerDocument.getElementsByClassName("fujian_final_lfj")[0];\n    if(elem.style.display ==\'none\'){\n      elem.style.display = \'block\'\n    }\n    else{\n      elem.style.display = \'none\'\n    }\n  }\n  \n  render(){\n      var data = this.props.customData;\n    var _this = this;\n      return (\n      <div className="ysp-manager-audit-title-icon" onClick = {_this.click1.bind(_this)}>\n        <span>\u76F8\u5173\u9644\u4EF6</span>\n        <i className="arrow-right"></i>\n      </div>);\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click1\',\n    value: function click1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click1\'\n        });\n      }\n      var elem = e.target.ownerDocument.getElementsByClassName("fujian_final_lfj")[0];\n      if (elem.style.display == \'none\') {\n        elem.style.display = \'block\';\n      } else {\n        elem.style.display = \'none\';\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\', onClick: _this.click1.bind(_this) },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u76F8\\u5173\\u9644\\u4EF6\'\n        ),\n        React.createElement(\'i\', { className: \'arrow-right\' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control251_Knv3Dp: function getData_control251_Knv3Dp(elem) {
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
    doAction_uiControl236_IIk1f9: function doAction_uiControl236_IIk1f9(data, elem) {
      if (data.eventType == 'click') {
        var idx = parseInt(data.dataCustom) + 1;$(elem).find('tr').eq(idx).find("a").eq(1).click();
      }
    },
    getTemplate_uiControl236_IIk1f9: function getTemplate_uiControl236_IIk1f9() {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    if(e.target.className == \'section_box\'){\n      var _target = e.target;\n    }\n    else if(e.target.tagName == \'LI\'){\n      var _target = e.target.parentElement;\n    }\n    else if(e.target.tagName == \'SPAN\'){\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data: _target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data){\n      if(data.text.length > 0){\n          var item = data.text.map(function(d1,i1){\n        return(<li className=\'section_box\' onClick={_this.click} data-index = {i1}>\n          {\n            d1.map(function(d2,i2){\n              if(i2>0){\n               \treturn(<li><span>{data.title[i2]}</span><span>{d2}</span></li>) \n              }\n        })\n            }\n          </li>)\n      })\n    }\n    if(data.text.length > 0){\n       return(<ul style ={{display:\'none\'}} className=\'fujian_final_lfj\'>\n        {item}\n      </ul>)\n    }\n    else{\n       return(<ul style ={{margin:\'10px\',display:\'none\'}} className=\'fujian_final_lfj\'>\u6CA1\u6709\u76F8\u5173\u9644\u4EF6</ul>)\n    }\n    }\n    else{\n      return(<div></div>)\n    }\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    if (e.target.className == \'section_box\') {\n      var _target = e.target;\n    } else if (e.target.tagName == \'LI\') {\n      var _target = e.target.parentElement;\n    } else if (e.target.tagName == \'SPAN\') {\n      var _target = e.target.parentElement.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\',\n        data: _target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    var data = this.props.customData;\n    if (data) {\n      if (data.text.length > 0) {\n        var item = data.text.map(function (d1, i1) {\n          return React.createElement(\n            \'li\',\n            { className: \'section_box\', onClick: _this.click, \'data-index\': i1 },\n            d1.map(function (d2, i2) {\n              if (i2 > 0) {\n                return React.createElement(\n                  \'li\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    data.title[i2]\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    d2\n                  )\n                );\n              }\n            })\n          );\n        });\n      }\n      if (data.text.length > 0) {\n        return React.createElement(\n          \'ul\',\n          { style: { display: \'none\' }, className: \'fujian_final_lfj\' },\n          item\n        );\n      } else {\n        return React.createElement(\n          \'ul\',\n          { style: { margin: \'10px\', display: \'none\' }, className: \'fujian_final_lfj\' },\n          \'\\u6CA1\\u6709\\u76F8\\u5173\\u9644\\u4EF6\'\n        );\n      }\n    } else {\n      return React.createElement(\'div\', null);\n    }\n  }\n});';
    },
    getData_control252_rDy3h7: function getData_control252_rDy3h7(elem) {
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
          var arr = [];$(elem).children(".datalight").children("td").each(function (i) {
            if (i == 1) {
              arr.push($(this).find('iframe')[0].contentDocument.body.querySelectorAll('td')[0].textContent.trim().replace(/\s+/ig, "").replace(/fun.*\}/ig, ""));
            } else {
              arr.push($(this).text().trim().replace(/\s+/ig, "").replace(/fun.*\}/ig, ""));
            }
          });data.content.push(arr);
        });
      }return data;
    },
    doAction_uiControl237_pbST0G: function doAction_uiControl237_pbST0G(data, elem) {
      if (data.eventType == 'block') {
        debugger;var val = parseInt(data.dataCustom) + 1;if ($(elem).find("#requestlogappednDiv").length > 0 && $(elem).find("#requestlogappednDiv").children().length > 0) {
          var elem = $(elem).children("div").eq(0).find("tbody")[0];
        } else {
          var elem = $(elem).children("#mainWFHead").eq(0).find("tbody")[0];
        }$(elem).children("tr").eq(val).children("td").eq(5).find("span").click();
      }
    },
    getTemplate_uiControl237_pbST0G: function getTemplate_uiControl237_pbST0G() {
      var selfTemplate = 'module.exports = React.createClass({\n  block:function(e){\n    if(e.target.tagName == \'SPAN\'){\n      var _target = e.target;\n    }\n    else{\n      var _target = e.target.className;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'block\',\n        data: e.target.getAttribute(\'data-index\')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n    if(data){\n      if(data.content.length > 0){\n      var item = data.content.map(function(d1,i1){\n        return(\n          <section>\n              <ul className=\'left_box\'>\n                <li>{data.title[0]}</li>\n                <li>{d1[0]}</li>\n              </ul>\n            <ul className=\'right_box\'>\n              <li>\n                <span>{data.title[2]}</span>\n                <span>{d1[2]}</span>\n              </li>\n              <li>\n                <span>{data.title[3]}</span>\n                <span>{d1[3]}</span>\n              </li>\n              <li>\n                <span>{data.title[4]}</span>\n                <span>{d1[4]}</span>\n              </li>\n              <li>\n                <span>{data.title[5]}</span>\n                {d1[5] == \'\u663E\u793A\' ? <span className=\'green\' data-index={i1} onClick={_this.block}>{d1[5]}</span> :<span className=\'normal\'>{d1[5]}</span>}\n              </li>\n            </ul>\n          </section>\n              )\n      })\n    }\n    else{\n       var item = data.title.map(function(d,i){\n      return(<div className=\'box_li\' style={{display:\'none\'}}><span>{d}</span></div>)\n    })\n    }\n    return (\n      <div className=\'suggest_lz_box\'>\n        {data.content.length > 0 ? \n        \t\t<div>{item}</div>\n         :\n        <div style={{textAlign:\'center\'}}>\u6682\u65E0\u6D41\u8F6C\u610F\u89C1</div>\n        }\n      </div>\n    )\n    }\n    else{\n      return(<div style ={{display:\'none\'}}></div>)\n    }\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  block: function block(e) {\n    if (e.target.tagName == \'SPAN\') {\n      var _target = e.target;\n    } else {\n      var _target = e.target.className;\n    }\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'block\',\n        data: e.target.getAttribute(\'data-index\')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (data) {\n      if (data.content.length > 0) {\n        var item = data.content.map(function (d1, i1) {\n          return React.createElement(\n            \'section\',\n            null,\n            React.createElement(\n              \'ul\',\n              { className: \'left_box\' },\n              React.createElement(\n                \'li\',\n                null,\n                data.title[0]\n              ),\n              React.createElement(\n                \'li\',\n                null,\n                d1[0]\n              )\n            ),\n            React.createElement(\n              \'ul\',\n              { className: \'right_box\' },\n              React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[2]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d1[2]\n                )\n              ),\n              React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[3]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d1[3]\n                )\n              ),\n              React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[4]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  d1[4]\n                )\n              ),\n              React.createElement(\n                \'li\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  data.title[5]\n                ),\n                d1[5] == \'\u663E\u793A\' ? React.createElement(\n                  \'span\',\n                  { className: \'green\', \'data-index\': i1, onClick: _this.block },\n                  d1[5]\n                ) : React.createElement(\n                  \'span\',\n                  { className: \'normal\' },\n                  d1[5]\n                )\n              )\n            )\n          );\n        });\n      } else {\n        var item = data.title.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: \'box_li\', style: { display: \'none\' } },\n            React.createElement(\n              \'span\',\n              null,\n              d\n            )\n          );\n        });\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'suggest_lz_box\' },\n        data.content.length > 0 ? React.createElement(\n          \'div\',\n          null,\n          item\n        ) : React.createElement(\n          \'div\',\n          { style: { textAlign: \'center\' } },\n          \'\\u6682\\u65E0\\u6D41\\u8F6C\\u610F\\u89C1\'\n        )\n      );\n    } else {\n      return React.createElement(\'div\', { style: { display: \'none\' } });\n    }\n  }\n});';
    },
    getData_control254_T6B9QE: function getData_control254_T6B9QE(elem) {
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
    doAction_uiControl239_QvAmoC: function doAction_uiControl239_QvAmoC(data, elem) {
      var eventType = data.eventType;var btnIndex = data.dataCustom.num;if (eventType == 'click') {
        elem.querySelectorAll('button')[btnIndex].click(); // ysp.customHelper.openWindow('http://192.168.200.63/workflow/request/Remark.jsp?requestid=118465&workflowRequestLogId=-1', 'sy');
      }
    },
    getTemplate_uiControl239_QvAmoC: function getTemplate_uiControl239_QvAmoC() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      isMoreOpen: false,\n      isShowBottom: true\n    }\n  }\n  \n   btnClick=(e)=>{\n    debugger\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{num:e.target.dataset.num},\n        eventType:\'click\'\n      })\n    }\n    var evt = new Event(\'ysp-file-upload-01hetongshenpi\');\n    evt.value = \'\u4E0A\u4F20\u6587\u4EF6\';\n    window.dispatchEvent(evt);\n  }\n  \n  showMoreButton=(e)=>{\n    this.setState((prevState) => {\n  \t\treturn {\n        isMoreOpen: !prevState.isMoreOpen,\n      \tisShowBottom: !prevState.isShowBottom\n      };\n\t\t});\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData||[];\n    if(data == null || data == undefined){\n      return null;\n    }\n    return (\n    \t<div className="ysp-process-form-wrapper">\n        {_this.state.isShowBottom&&\n      \t<div className="ysp-process-form-bottom-button">\n          <div>\n            <span data-num="4" onClick={_this.btnClick.bind(_this)}>{data[4]}</span>\n            <span data-num="0" onClick={_this.btnClick.bind(_this)}>{data[0]}</span>\n            <span onClick={_this.showMoreButton.bind(_this)}></span>\n          </div>\n          \n        </div>\n        }\n        {_this.state.isMoreOpen &&\n          <div className="load-more-coverlayer">\n          \t<div className="load-more-data">\n              <section>\n                 <div data-num="1" onClick={_this.btnClick.bind(_this)}>{data[1]}</div>\n                <div data-num="2" onClick={_this.btnClick.bind(_this)}>{data[2]}</div>\n                <div data-num="3" onClick={_this.btnClick.bind(_this)}>{data[3]}</div>\n               \n               \n                {/*\n                  data.map((item ,index)=>{\n                    return <div data-num={index} onClick={_this.btnClick.bind(_this)}>{data[index]}</div>\n                  })\n                */}\n              </section>\n              <div data-num="7" onClick={_this.showMoreButton.bind(_this)}>{data[5]}</div>\n            </div>\n          </div>\n        }\n      </div>\n      \n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      debugger;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { num: e.target.dataset.num },\n          eventType: \'click\'\n        });\n      }\n      var evt = new Event(\'ysp-file-upload-01hetongshenpi\');\n      evt.value = \'\u4E0A\u4F20\u6587\u4EF6\';\n      window.dispatchEvent(evt);\n    };\n\n    _this2.showMoreButton = function (e) {\n      _this2.setState(function (prevState) {\n        return {\n          isMoreOpen: !prevState.isMoreOpen,\n          isShowBottom: !prevState.isShowBottom\n        };\n      });\n    };\n\n    _this2.state = {\n      isMoreOpen: false,\n      isShowBottom: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data == null || data == undefined) {\n        return null;\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-process-form-wrapper\' },\n        _this.state.isShowBottom && React.createElement(\n          \'div\',\n          { className: \'ysp-process-form-bottom-button\' },\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              { \'data-num\': \'4\', onClick: _this.btnClick.bind(_this) },\n              data[4]\n            ),\n            React.createElement(\n              \'span\',\n              { \'data-num\': \'0\', onClick: _this.btnClick.bind(_this) },\n              data[0]\n            ),\n            React.createElement(\'span\', { onClick: _this.showMoreButton.bind(_this) })\n          )\n        ),\n        _this.state.isMoreOpen && React.createElement(\n          \'div\',\n          { className: \'load-more-coverlayer\' },\n          React.createElement(\n            \'div\',\n            { className: \'load-more-data\' },\n            React.createElement(\n              \'section\',\n              null,\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'1\', onClick: _this.btnClick.bind(_this) },\n                data[1]\n              ),\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'2\', onClick: _this.btnClick.bind(_this) },\n                data[2]\n              ),\n              React.createElement(\n                \'div\',\n                { \'data-num\': \'3\', onClick: _this.btnClick.bind(_this) },\n                data[3]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { \'data-num\': \'7\', onClick: _this.showMoreButton.bind(_this) },\n              data[5]\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);