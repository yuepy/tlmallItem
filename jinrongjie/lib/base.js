// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function(win, ysp) {
    var utils = ysp.utils;
    var flag = true; // 为true说明需要取token  为false说明不需要取token
    var topWindow = win.top; // 最外层window - top层
    topWindow.tokenUrl = null;
    var soapData = ' <SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">';
    soapData = soapData + ' <SOAP:Body>';
    soapData = soapData + ' <GetTodoCountInfoByPsCode xmlns="http://schemas.fsig.com.cn/commonWebserviceWSAppServerPackage" preserveSpace="no" qAccess="0" qValues="">';
    soapData = soapData + ' <psCode>101160</psCode>';
    soapData = soapData + ' </GetTodoCountInfoByPsCode>';
    soapData = soapData + ' </SOAP:Body>';
    soapData = soapData + ' </SOAP:Envelope>';
    topWindow.yspTokenUrl = function(url) {
        topWindow.tokenUrl = url;
        return url;
    };
    topWindow.num = [];
  	topWindow.file = [];
  	topWindow.file_two = [];
    ysp.customHelper = {};
    var winContainer = []; // openWinow 方法地址存入的数组
    var topWin = null; // Window对象
    var token_flag = false;
    utils.extend(ysp.customHelper, {
        openWin: _openWindow,
        // tigMsg : _tipMsg,
        forceMatchModels: _forceMatchModels,
        toPlan: _toPlan,
        openWindow: _openWindow,
        trim: _trim,
        back: _back,
        getTableData: _getTableData,
        firstMenus: _firstMenus,
        fireKeyEvent: _fireKeyEvent,
        Dnum: _num, // 待办列表角标值
        returnHome: _returnHome,
      	files:_file,
        isArray(array) {
            if (Object.prototype.toString.call(array).indexOf('Array') != -1) {
                return true;
            } else {
                return false;
            }
        },
        isAllNull(array) {
            var tag = true;
            for (var i = 0; i < array.length; i++) {
                var item = ysp.customHelper.trim(array[i]);
                if (item != '') {
                    tag = false;
                }
            }
            return tag;
        },
        /* 适配中定制的公共代码放在这里 */
        /*
        // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
        foo: function(){

        }
        */
        // 以下两个方法用于修改原页面中的错误, 但执行时机不同
        // 以下两个方法用于修改原页面中的错误, 但执行时机不同
        // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
        onTargetLoad: function(aWin, doc) {

					
            aWin.yspTokenUrl = function(url) {
                return url;
            }
            if (aWin.onShowBrowser2) {
                aWin.onShowBrowser2 = function(id, url, linkurl, type1, ismand, funFlag) {
                    var id1 = null;
                    if (type1 == 9 && "0" == "1") {
                        if (aWin.wuiUtil.isNotNull(funFlag) && funFlag == 3) {
                            url = "/systeminfo/BrowserMain.jsp?url=/docs/docs/DocBrowser.jsp"
                        } else {
                            url = "/systeminfo/BrowserMain.jsp?url=/docs/docs/DocBrowserWord.jsp";
                        }
                    }

                    if (type1 == 23) {
                        url += "?billid=-224";
                    }

                    if (type1 == 2 || type1 == 19) {
                        aWin.spanname = "field" + id + "span";
                        aWin.inputname = "field" + id;

                        if (type1 == 2) {
                            aWin.onFlownoShowDate(aWin.spanname, aWin.inputname, ismand);
                        } else {
                            aWin.onWorkFlowShowTime(aWin.spanname, aWin.inputname, ismand);
                        }
                    } else {
                        if (type1 != 162 && type1 != 171 && type1 != 152 && type1 != 142 && type1 != 135 && type1 != 17 && type1 != 18 && type1 != 27 && type1 != 37 && type1 != 56 && type1 != 57 && type1 != 65 && type1 != 165 && type1 != 166 && type1 != 167 && type1 != 168 && type1 != 4 && type1 != 167 && type1 != 164 && type1 != 169 && type1 != 170) {
                            if (aWin.wuiUtil.isNotNull(funFlag) && funFlag == 3) {
                                id1 = aWin.showModalDialog(url, "", "dialogWidth=550px;dialogHeight=550px");
                            } else {
                                if (type1 == 161 || type1 == 224 || type1 == 225 || type1 == 226 || type1 == 227) {
                                    id1 = aWin.showModalDialog(url + "|" + id, aWin, "dialogWidth=550px;dialogHeight=550px");
                                } else {
                                    id1 = aWin.showModalDialog(url, aWin, "dialogWidth=550px;dialogHeight=550px");
                                }
                            }
                        } else {
                            if (type1 == 135) {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;
                                id1 = aWin.showModalDialog(url + "?projectids=" + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                                //} else if (type1 == 4 || type1 == 167 || type1 == 164 || type1 == 169 || type1 == 170) {
                                //type1 = 167 是:分权单部门-分部 不应该包含在这里面 ypc 2012-09-06 修改
                            } else if (type1 == 4 || type1 == 164 || type1 == 169 || type1 == 170) {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;
                                id1 = aWin.showModalDialog(url + "?selectedids=" + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                            } else if (type1 == 37) {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;
                                id1 = aWin.showModalDialog(url + "?documentids=" + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                            } else if (type1 == 142) {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;
                                id1 = aWin.showModalDialog(url + "?receiveUnitIds=" + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                            } else if (type1 == 162) {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;

                                if (aWin.wuiUtil.isNotNull(funFlag) && funFlag == 3) {
                                    url = url + "&beanids=" + aWin.tmpids;
                                    url = url.substring(0, url.indexOf("url=") + 4) + aWin.escape(url.substr(url.indexOf("url=") + 4));
                                    id1 = aWin.showModalDialog(url, "", "dialogWidth=550px;dialogHeight=550px");
                                } else {
                                    url = url + "|" + id + "&beanids=" + aWin.tmpids;
                                    url = url.substring(0, url.indexOf("url=") + 4) + aWin.escape(url.substr(url.indexOf("url=") + 4));
                                    id1 = aWin.showModalDialog(url, aWin, "dialogWidth=550px;dialogHeight=550px");
                                }
                            } else if (type1 == 165 || type1 == 166 || type1 == 167 || type1 == 168) {
                                aWin.index = (id + "").indexOf("_");
                                if (index != -1) {
                                    aWin.tmpids = aWin.uescape("?isdetail=1&isbill=1&fieldid=" + id.substring(0, aWin) + "&resourceids=" + aWin.$GetEle("field" + id).value + "&selectedids=" + aWin.$GetEle("field" + id).value);
                                    id1 = aWin.showModalDialog(url + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                                } else {
                                    aWin.tmpids = aWin.uescape("?fieldid=" + id + "&isbill=1&resourceids=" + aWin.$GetEle("field" + id).value + "&selectedids=" + aWin.$GetEle("field" + id).value);
                                    id1 = aWin.showModalDialog(url + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                                }
                            } else {
                                aWin.tmpids = aWin.$GetEle("field" + id).value;
                                id1 = aWin.showModalDialog(url + "?resourceids=" + aWin.tmpids, "", "dialogWidth=550px;dialogHeight=550px");
                            }
                        }
                        aWin._setReturnValue = function(id1) {
                            if (id1 != undefined && id1 != null) {
                                if (type1 == 171 || type1 == 152 || type1 == 142 || type1 == 135 || type1 == 17 || type1 == 18 || type1 == 27 || type1 == 37 || type1 == 56 || type1 == 57 || type1 == 65 || type1 == 166 || type1 == 168 || type1 == 170) {
                                    if (aWin.wuiUtil.getJsonValueByIndex(id1, 0) != "" && aWin.wuiUtil.getJsonValueByIndex(id1, 0) != "0") {
                                        var resourceids = aWin.wuiUtil.getJsonValueByIndex(id1, 0);
                                        var resourcename = aWin.wuiUtil.getJsonValueByIndex(id1, 1);
                                        var sHtml = ""

                                        resourceids = resourceids.substr(1);
                                        resourcename = resourcename.substr(1);

                                        var resourceIdArray = resourceids.split(",");
                                        var resourceNameArray = resourcename.split(",");
                                        for (var _i = 0; _i < resourceIdArray.length; _i++) {
                                            var curid = resourceIdArray[_i];
                                            var curname = resourceNameArray[_i];
                                            if (linkurl == "/hrm/resource/HrmResource.jsp?id=") {
                                                sHtml += "<a href=javaScript:openhrm(" + curid + "); onclick='pointerXY(event);'>" + curname + "</a>&nbsp";
                                            } else {
                                                sHtml += "<a href=" + linkurl + curid + " target=_blank>" + curname + "</a>&nbsp";
                                            }
                                        }
                                        aWin.$GetEle("field" + id + "span").innerHTML = sHtml;
                                        aWin.$GetEle("field" + id).value = resourceids;
                                    } else {
                                        if (ismand == 0) {
                                            aWin.$GetEle("field" + id + "span").innerHTML = "";
                                        } else {
                                            aWin.$GetEle("field" + id + "span").innerHTML = "<img src='/images/BacoError.gif' align=absmiddle>";
                                        }
                                        aWin.$GetEle("field" + id).value = "";
                                    }

                                } else {
                                    //zzl
                                    var id0lflag = true;
                                    if (aWin.wuiUtil.getJsonValueByIndex(id1, 1) != "") {
                                        id0lflag = true;
                                    } else {
                                        if (aWin.wuiUtil.getJsonValueByIndex(id1, 0) != "0") {
                                            id0lflag = true;
                                        } else {
                                            id0lflag = false;
                                        }
                                    }
                                    //zzl
                                    if (aWin.wuiUtil.getJsonValueByIndex(id1, 0) != "" && id0lflag) {
                                        if (type1 == 162) {
                                            var ids = aWin.wuiUtil.getJsonValueByIndex(id1, 0);
                                            var names = aWin.wuiUtil.getJsonValueByIndex(id1, 1);
                                            var descs = aWin.wuiUtil.getJsonValueByIndex(id1, 2);
                                            var href = aWin.wuiUtil.getJsonValueByIndex(id1, 3);
                                            sHtml = ""
                                            ids = ids.substr(1);
                                            aWin.$GetEle("field" + id).value = ids;

                                            names = names.substr(1);
                                            descs = descs.substr(1);
                                            var idArray = ids.split(",");
                                            var nameArray = names.split(",");
                                            var descArray = descs.split(",");
                                            for (var _i = 0; _i < idArray.length; _i++) {
                                                var curid = idArray[_i];
                                                var curname = nameArray[_i];
                                                var curdesc = descArray[_i];
                                                if (href == '') {
                                                    sHtml += "<a title='" + curdesc + "' >" + curname + "</a>&nbsp";
                                                } else {
                                                    sHtml += "<a title='" + curdesc + "' href='" + href + curid + "' target='_blank'>" + curname + "</a>&nbsp";
                                                }
                                            }

                                            aWin.$GetEle("field" + id + "span").innerHTML = sHtml;
                                            return;
                                        }
                                        if (type1 == 161) {
                                            var ids = aWin.wuiUtil.getJsonValueByIndex(id1, 0);
                                            var names = aWin.wuiUtil.getJsonValueByIndex(id1, 1);
                                            var descs = aWin.wuiUtil.getJsonValueByIndex(id1, 2);
                                            var href = aWin.wuiUtil.getJsonValueByIndex(id1, 3);
                                            aWin.$GetEle("field" + id).value = ids;
                                            if (href == '') {
                                                sHtml = "<a title='" + descs + "'>" + names + "</a>&nbsp";
                                            } else {
                                                sHtml = "<a title='" + descs + "' href='" + href + ids + "' target='_blank'>" + names + "</a>&nbsp";
                                            }
                                            aWin.$GetEle("field" + id + "span").innerHTML = sHtml
                                            return;
                                        }
                                        if (type1 == 9 && "0" == "1" && (funFlag == undefined || funFlag != 3)) {
                                            aWin.tempid = aWin.wuiUtil.getJsonValueByIndex(id1, 0);
                                            aWin.$GetEle("field" + id + "span").innerHTML = "<a href='#' onclick='createDoc(" + id + ", " + aWin.tempid + ", 1)'>" + aWin.wuiUtil.getJsonValueByIndex(id1, 1) + "</a><button type=button id='createdoc' style='display:none' class=AddDocFlow onclick=createDoc(" + id + ", " + aWin.tempid + ",1)></button>";
                                        } else {
                                            if (linkurl == "") {
                                                aWin.$GetEle("field" + id + "span").innerHTML = aWin.wuiUtil.getJsonValueByIndex(id1, 1);
                                            } else {
                                                if (linkurl == "/hrm/resource/HrmResource.jsp?id=") {
                                                    aWin.$GetEle("field" + id + "span").innerHTML = "<a href=javaScript:openhrm(" + aWin.wuiUtil.getJsonValueByIndex(id1, 0) + "); onclick='pointerXY(event);'>" + aWin.wuiUtil.getJsonValueByIndex(id1, 1) + "</a>&nbsp";
                                                } else {
                                                    aWin.$GetEle("field" + id + "span").innerHTML = "<a href=" + linkurl + aWin.wuiUtil.getJsonValueByIndex(id1, 0) + " target='_new'>" + aWin.wuiUtil.getJsonValueByIndex(id1, 1) + "</a>";
                                                }
                                            }
                                        }
                                        aWin.$GetEle("field" + id).value = aWin.wuiUtil.getJsonValueByIndex(id1, 0);
                                        if (type1 == 9 && "0" == "1" && (funFlag == undefined || funFlag != 3)) {
                                            var evt = aWin.getEvent();
                                            var targetElement = evt.srcElement ? evt.srcElement : evt.target;
                                            aWin.jQuery(targetElement).next("span[id=createNewDoc]").html("");
                                        }
                                    } else {
                                        if (ismand == 0) {
                                            aWin.$GetEle("field" + id + "span").innerHTML = "";
                                        } else {
                                            aWin.$GetEle("field" + id + "span").innerHTML = "<img src='/images/BacoError.gif' align=absmiddle>"
                                        }
                                        aWin.$GetEle("field" + id).value = "";
                                        if (type1 == 9 && "0" == "1" && (funFlag == undefined || funFlag != 3)) {
                                            var evt = aWin.getEvent();
                                            var targetElement = evt.srcElement ? evt.srcElement : evt.target;
                                            aWin.jQuery(targetElement).next("span[id=createNewDoc]").html("<button type=button id='createdoc' class=AddDocFlow onclick=createDoc(" + id + ",'','1') title='新建'>新建</button>");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
            /*  showModelDialog 跨页面传值兼容  */
            /*  showModelDialog 相关文档 跨页面传值兼容  */
            if (aWin.onShowSignBrowser) {
                aWin.onShowSignBrowser = function(url, linkurl, inputname, spanname, type1) {
                    var $GetEle = aWin.$GetEle;
                    var wuiUtil = aWin.wuiUtil;
                    var tmpids = $GetEle(inputname).value;
                    if (type1 == 37) {
                        id1 = aWin.showModalDialog("/systeminfo/BrowserMain.jsp?url=" + url +
                            "?documentids=" + tmpids);
                    } else {
                        id1 = aWin.showModalDialog("/systeminfo/BrowserMain.jsp?url=" + url +
                            "?resourceids=" + tmpids);
                    }
                    aWin._setReturnValue = function(id1) {
                        if (id1) {
                            if (wuiUtil.getJsonValueByIndex(id1, 0) != "" && wuiUtil.getJsonValueByIndex(id1, 0) != "0") {
                                var resourceids = wuiUtil.getJsonValueByIndex(id1, 0);
                                var resourcename = wuiUtil.getJsonValueByIndex(id1, 1);
                                var sHtml = "";
                                resourceids = resourceids.substr(1);
                                resourcename = resourcename.substr(1);
                                $GetEle(inputname).value = resourceids;
                                var resourceidArray = resourceids.split(",");
                                var resourcenameArray = resourcename.split(",");
                                for (var _i = 0; _i < resourceidArray.length; _i++) {
                                    var curid = resourceidArray[_i];
                                    var curname = resourcenameArray[_i];
                                    sHtml = sHtml + "<a href=" + linkurl + curid +
                                        " target='_blank'>" + curname + "</a>&nbsp";
                                }
                                $GetEle(spanname).innerHTML = sHtml;
                            } else {
                                $GetEle(spanname).innerHTML = "";
                                $GetEle(inputname).value = "";
                            }
                        }
                    }

                }
            }
            if (aWin.location.href.indexOf('MutiDocBrowser.jsp') !== -1 && aWin.btnok_onclick) {
                aWin.btnok_onclick = function() {
                    aWin.setResourceStr();
                    aWin.parent.opener._setReturnValue({ id: aWin.documentids, name: aWin.documentnames });
                    aWin.parent.close();
                }
            }
            if ((aWin.location.href.indexOf('MultiRequestBrowser.jsp') !== -1 || aWin.location.href.indexOf('BrowserMain.jsp') !== -1) && aWin.btnok_onclick) {
                aWin.btnok_onclick = function() {
                    aWin.setResourceStr();
                    aWin.parent.opener._setReturnValue({ id: aWin.resourceids, name: aWin.resourcenames });
                    aWin.parent.close();
                }
            }
            if (aWin.replaceToHtml) {
                aWin.replaceToHtml = function(str) {
                    var re = str;
                    var re1 = "<";
                    var re2 = ">";
                    do {
                        re = re.replace(re1, "&lt;");
                        re = re.replace(re2, "&gt;");
                        re = re.replace(",", "，");
                        re = re.replace("&quot;", "“");
                    } while (re.indexOf("<") != -1 || re.indexOf(">") != -1 || re.indexOf(",") != -1 || re.indexOf("&quot;") != -1)
                    return re;
                }
            }
            if (aWin.BrowseTable_onclick && aWin.location.href.indexOf('ResourceBrowser.jsp') !== -1 && aWin.BrowseTable_onclick && aWin.location.href.indexOf('BrowserMain.jsp') !== -1) {
                aWin.BrowseTable_onclick = function(e) {
                    var target = e.srcElement || e.target;
                    try {
                        if (target.nodeName == "TD" || target.nodeName == "A") {
                            var newEntry = $($(target).parents("tr")[0].cells[0]).text() + "~" + $($(target).parents("tr")[0].cells[1]).text();
                            if (!aWin.isExistEntry(newEntry, aWin.resourceArray)) {
                                aWin.addObjectToSelect(doc.all("srcList"), newEntry);
                                aWin.reloadResourceArray();
                            }
                        }
                    } catch (en) {
                        alert(en.message);
                    }
                }
            }
            if (aWin.addObjectToSelect) {
                aWin.addObjectToSelect = function(obj, str) {
                    if (obj.tagName != "SELECT") return;
                    var oOption = doc.createElement("OPTION");
                    var value = doc.createTextNode(str.split('~')[0]);
                    var text = doc.createTextNode(str.split('~')[1]);
                    oOption.appendChild(text);
                    oOption.value = str.split('~')[0];
                    obj.appendChild(oOption);
                    // obj.options.add(oOption);
                    // $(oOption).val(str.split("~")[0]);
                    // $(oOption).createTextNode(str.split("~")[1]);
                    // console.log(str.split("~")[1])
                    // $(oOption).html(str.split("~")[1]);

                }
            }
            /*  showModelDialog 相关文档 跨页面传值兼容  */

            /*  showModelDialog 相关流程 跨页面传值兼容  */
            if (aWin.btnsub_onclick) {
                aWin.btnsub_onclick = function() {
                    aWin.setResourceStr();
                    $("#resourceids").val(aWin.resourceids);
                    doc.SearchForm.submit();
                }
            }
            /*  showModelDialog 相关流程 跨页面传值兼容  */
            var newAlert = aWin.alert;
            aWin.alert = function() {
                var text = arguments[0];
                if (text.indexOf('SWF') !== -1 || text.indexOf('error') !== -1) {
                    console.log('DUANG ~  又是弹框 ! ~.~  ');
                } else {
                    newAlert.apply(aWin, arguments);
                }
            }
            aWin.doReview = function() {
                // jQuery($GetEle("flowbody")).attr("onbeforeunload", "");
                doc.getElementById('flowbody').setAttribute('onbeforeunload', '')
                aWin.doLocationHref();
            }
            aWin.checkfileuploadcomplet = function() {
                if (aWin.upfilesnum > 0) {
                    setTimeout("checkfileuploadcomplet()", 1000);
                } else {
                    if (!aWin.checkUploadeErr()) {
                        aWin.hiddenPrompt();
                        aWin.displayAllmenu();
                        return;
                    }
                    doc.frmmain.submit();
                    aWin.frmmain.target = aWin.nowtarget;
                    aWin.frmmain.action = aWin.nowaction;
                    // ysp.customHelper.openWindow(aWin.frmmain.action,'送阅');
                }
            }
            aWin.doLocationHref = function() {
                var $G = aWin.$G;
                var id = doc.getElementById('requestid').value;
                var workflowRequestLogId = 0;
                if ($G("workflowRequestLogId") != null) {
                    workflowRequestLogId = $G("workflowRequestLogId").value;
                }
                aWin.CkeditorExt.updateContent();
                aWin.frmmain.target = "_blank";
                aWin.frmmain.action = "/workflow/request/Remark.jsp?requestid=" + id + "&workflowRequestLogId=" + workflowRequestLogId;
                ysp.customHelper.openWindow(aWin.frmmain.action, '送阅');
                //附件上传
                // aWin.StartUploadAll();
                // aWin.checkfileuploadcomplet();

                //   }catch(e){
                //     var remark="";
                //     try{
                //       remark = aWin.CkeditorExt.getHtml("remark");
                //     }catch(e){}
                //     var forwardurl = "/workflow/request/Remark.jsp?requestid="+id+"&workflowRequestLogId="+workflowRequestLogId+"&remark="+escape(remark);
                //     aWin.openFullWindowHaveBar(forwardurl);
                //   }
            }

            aWin.changeCurpage = function(index) {
                doc.SearchForm.curpage.value = index;
            }
            aWin.onPage = function(index) {
                aWin.changeCurpage(index); //TD34490 lv 修改当前页
                doc.SearchForm.submit();
            }

            // 创建人
          if(aWin.__flash__argumentsToXML){
           aWin.__flash__argumentsToXML = function (obj,index) {
              var s = "<arguments>";
              for (var i=index; i<obj.length; i++) {
                s +=aWin.__flash__toXML(obj[i]);
              }
              return s+"</arguments>";
            }
          }

        },

        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function(aWin, doc) {
            /*  找到时机像客户端发出信息，表示我要获取带token的targetURL  */
            //             aWin.addEventListener('DOMContentLoaded', function() {

            //             })
            // aWin.alert = function() {
            //   debugger;
            // }

            // 测试
            var fakeFormId;
          	var uploadId;
            (function() {
                var addFileInput = function addFileInput(originId, id, target,html) {
                    var placeHolder = doc.getElementById(originId);
                    if (placeHolder) {
                      var tempParent , Object;
                        var file = doc.createElement('input');
                        file.type = 'file';
                        file.id = id;
                        file.name = id;
                        file.onchange = function() {
                          var cb = target.setting.file_dialog_complete_handler;
                          var up = target.setting.upload_success_handler; 
                          var div = doc.createElement('div');
                          div.className = 'progressWrapper';
                          var div1 = doc.createElement('div');
                          div1.className = 'progressContainer';
                          div.id = target.movieName;
                          div.appendChild(div1);
                          var a = doc.createElement('a');
                          a.setAttribute('href','#');
                          a.className = 'progressCancel'
                          var aText = doc.createTextNode(this.files[0].name);
                          var div2 = doc.createElement('div');
                          div2.className = 'progressName';
                          div2.appendChild(aText);
                          var div3 = doc.createElement('div');
                          div3.className = 'progressBarStatus';
                        	var divText = doc.createTextNode('上传准备中，提交后开始上传......');
                          div3.appendChild(divText);
                          var div4 = doc.createElement('div');
                          div4.className = 'progressBarInProgress';
                          div1.appendChild(a);
                          div1.appendChild(div2);
                          div1.appendChild(div3);
                          div1.appendChild(div4);
                          this.ownerDocument.querySelector('.fieldset').appendChild(div);
                          var xhr = new XMLHttpRequest();
                          var form = file && file.parentElement;//找到对应的form
                          var fileName = form.Filename;//找到input name=filename的元素，
                          fileName.value = this.files[0].name; //将这个元素的value设为刚刚上传的文件名
                          var xhr = new XMLHttpRequest();//创建ajax对象
                          xhr.open('post', 'http://192.168.200.63/docs/docupload/MultiDocUploadByWorkflow.jsp');//发送请求
                          this.formData = new FormData(form);//格式化form的数据
                          xhr.send(this.formData);//发送数据
                          var responseT = "";
                          xhr.onreadystatechange = function() {
                            if (xhr.readyState == 4 && xhr.status == 200) {
                              responseT = xhr.responseText;
                              up.call(target,target,responseT);
                              if(e.target.parentElement.getAttribute('file-num') == '1'){
                                topWindow.file.push(ysp.customHelper.trim(responseT));
                              }else if(e.target.parentElement.getAttribute('file-num') == '2'){
                                topWindow.file_two.push(ysp.customHelper.trim(responseT));
                              }
                            }
                          }
                          // cb && cb.call(target);
                        };
                        var fileName = doc.createElement('input');
                        var upload = doc.createElement('input');
                      	var subId = doc.createElement('input');

                      	subId.type = "hidden";
                        fileName.name = 'Filename';
                        upload.name = 'Upload';
                        upload.value = 'Submit Query';
                        var form = doc.createElement('form');
                        form.id = fakeFormId;
                        form.appendChild(file);
                        form.appendChild(fileName);
                        form.appendChild(upload);
                        placeHolder.parentNode.appendChild(form);
                        // placeHolder.parentNode.removeChild(placeHolder);
                    }
                };
                 fakeFormId = 'ysp_fake_form';
                aWin.SWFUpload = function(setting) {
                    this.setting = setting;
                    var elemId = this.setting.button_placeholder_id;
                    if (elemId) {
                        addFileInput(elemId, 'Filedata', this);
                    }
                  	this.fakeFormId = fakeFormId;
                    this.initSWFUpload(this.setting);
                    this.movieElement = this.getMovieElement();
                    console.log('upload overrided!');
                };
            })();

            // 测试结束



            if (aWin.location.href.indexOf('Login.jsp') !== -1) {
                console.info('向客户端发送消息,开始获取token地址');
                var actionEvent = '{"target":"null","data":"getNumber"}';
                var parent = aWin.frameElement.ownerDocument.defaultView;
                parent && parent.EAPI.postMessageToNative('getNum', actionEvent);
                parent && topWindow.EAPI.postMessageToNative('getToken', null);
                sessionStorage.setItem('getTokenURl', true);
                token_flag = true;
            }
            // },false);
            /*  获取token地址  */
            if (token_flag) {
                console.log(topWindow.tokenUrl);
                console.log('拿到客户端给我的token地址');
                token_flag = false;
            }
            /*  获取token地址  */
            /* ajax请求角标数据 */
            if (aWin.location.href.indexOf('main.jsp') !== -1) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("post", "http://192.168.200.121:8080/home/release/com.eibus.web.soap.Gateway.wcp", true);
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        // console.log(xmlhttp.responseText);
                        var xmldoc = (new DOMParser()).parseFromString(xmlhttp.responseText, 'text/xml');
                        topWindow.num.push(xmldoc.getElementsByTagName('TodoCountInformation')[0].getElementsByTagName('todoCount')[0].textContent, xmldoc.getElementsByTagName('TodoCountInformation')[0].getElementsByTagName('unreadCount')[0].textContent);
                    }
                }
                xmlhttp.send(soapData);
            }
            /* ajax请求角标数据 */

            /* 兼容性问题 */
            // aWin.showModalDialog = function(url) {
            //     return aWin.open(url, '新窗口')
            // };
            // aWin.ActiveXObject = function() {
            //   return new aWin.XMLHttpRequest();
            // }
            // aWin.ActiveXObject.prototype = {
            //   loadXML: function(stringContainingXMLSource) {
            //     return this.domParser.parseFromString(stringContainingXMLSource, "application/xml");
            //   }
            // }
            /* 为topWin赋值 */
            if (aWin.frameElement && aWin.frameElement.name == "sourcePageFrame" && aWin.frameElement.dataset.browser) {
                topWin = aWin;
                if (aWin.location.href.indexOf('login') !== -1) {
                    ysp.runtime.Model.setForceMatchModels(['login']);
                }
            };
        },
        //判断array.tag是存在一个值等于item
        isExist(item, tag, array) {
            for (var i = 0; i < array.length; i++) {
                if (item == array[i][tag]) {
                    return true;
                }
            }
            return false;
        },
        //登录相关接口
        //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
        //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
        //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
        needToLogin: function(doc) {
            return false;
        },

        //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
        //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
        //思路与needToLogin类似, 保证能够唯一区分该页面即可.
        isLoginSuccess: function(doc) {
            return false;
        }
    });
    /*调用场景：该方法用于返回客户OA*/
    function _returnHome() {
        if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
            parent.EAPI.back();
        } else {
            ysp.appMain.back();
        }
    }
    /*调用场景：该方法用于返回客户OA*/

    /*调用场景：该方法用于采集表格数据*/
    function _getTableData(elem, titleArgs) {
        if (!elem) {
            return;
        }
        //获取头部标题，存入数组，包括空标签的内容
        if (!elem.querySelector('thead')) {
            console.warn('_getTableData没有找到table thead');
            return null;
        }
        var thead = elem.querySelector('thead');
        if (!thead.querySelectorAll('th')) {
            console.warn('_getTableData thead里面竟然没有th');
            return null;
        }
        var titlesThs = thead.querySelectorAll('th');
        var titles = [];
        var titlesIndexs = [];
        for (var i = 0; i < titlesThs.length; i++) {
            var titleValue = _trim(titlesThs[i].textContent);
            var someCallback = function(value, index, array) {
                if (value == titleValue) {
                    return true;
                }
            }
            var flag = titleArgs.some(someCallback);
            if (flag) {
                titles.push(titleValue);
                titlesIndexs.push(i);
            }
        }
        if (titlesIndexs.length == 0) {
            // console.warn('_getTableData没有找到相对应的titles');
            return null;
        }
        //获取table的body数据
        if (!elem.querySelector('tbody')) {
            console.warn('_getTableData没有找到table tbody');
            return null;
        }
        var tbody = elem.querySelector('tbody');
        if (!tbody.querySelectorAll('tr')) {
            console.warn('_getTableData tbody里面竟然没有tr');
            return null;
        }
        var tbodyTrs = tbody.querySelectorAll('tr');
        var content = [];
        for (var i = 0; i < tbodyTrs.length; i++) {
            var item = [];
            if (!tbodyTrs[i].querySelectorAll('td')) {
                console.warn('_getTableData 当前tr没有td');
                continue;
            }
            var tds = tbodyTrs[i].querySelectorAll('td');
            for (var j = 0; j < tds.length; j++) {
                var someCallback = function(value, index, array) {
                    if (value == j) {
                        return true;
                    }
                }
                var flag = titlesIndexs.some(someCallback);
                if (flag) {
                    //zyt
                    if (tds[j].querySelectorAll("input[type='text']").length != 0) {
                        item.push(tds[j].querySelector("input[type='text']").value)
                    } else if (tds[j].querySelector("select")) {
                        var optionarry = [];
                        var options = tds[j].querySelector("select").querySelectorAll("option")
                        for (var v = 0; v < options.length; v++) {
                            optionarry.push(options[v].textContent)
                        }
                        item.push(optionarry)
                    } else {
                        item.push(tds[j].textContent.trim());
                    }
                }
            }
            content.push(item);
        }
        return {
            titles: titles,
            content: content
        }
    }
    /* 调用场景 : 页面返回. */
    function _back(type) {
        if (typeof type == 'string') {
            if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
                ysp.appMain.back();
            } else {
                var actionEvent = '{"target":"null","data":"' + type + '"}';
                window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
                setTimeout(function() {
                    window.parent.EAPI.back();
                }, 1000);
            }
        } else {
            ysp.appMain.back();
        }
    }
    /* 调用场景 : 页面出现弹框时,自动点击弹框消失. */
    // function _tipMsg(elem){
    // 	if (topWin) {
    //     var doc = topWin.document;
    //     var layerTipEl = ysp.utils.xfind('//div[@id="_DialogDiv_0"]', doc)[0];
    //     if (layerTipEl) {
    //       var contentEl = layerTipEl.querySelector('div#Message_undefined');
    //       if (contentEl) {
    //         return contentEl.textContent;
    //       }
    //     }
    //   }
    // }
    /* 调用场景 : 页面返回或者进入无效,需要强制匹配方案时. */
    function _num() {
        return topWindow.num;
    }
		function _file(num){
      topWindow.file = num;
      return topWindow.file;
    } 
    function _forceMatchModels(args) {
        if (typeof args === 'string') {
            ysp.runtime.Model.setFoceMatchModels([args])
        } else if (typeof args instanceof Array) {
            ysp.runtime.Model.setForceMatchModels(args);
        } else {
            console.error('forceMatchModel 参数类型不正确');
        }
    }
    /* 调用场景 : 适用于'结构为[ul li a]类型Menu强制匹配页面. */
    function _toPlan(elem, operation, planName) {
        if (typeof planName !== 'string') {
            console.error('toPlan : planName参数类型不正确')
        }
        var aEls = elem.querySelectorAll('ul li > a');
        [].forEach.call(aEls, function(item, index) {
            if (item.textContent == operation) {
                item.click();
                _forceMatchModels(planName);
            }
        });
    }

    function _firstMenus(elem, operation) {
        if (typeof operation !== 'string') {
            console.error('firstMenus : operation参数类型不正确')
        }
        var aEls = elem.querySelectorAll('ul li > a');
        [].forEach.call(aEls, function(item, index) {
            if (item.textContent == operation) {
                var href = item.getAttribute('href');
                ysp.customHelper.openWin(href, operation);
            }
        });
    }
    /* 调用场景 : 适用于适配同一父窗口页面,在当前window打开新窗口. */
    function _openWindow(url, title) {
        if (typeof url !== "string") {
            return;
        }
        if (typeof title !== "string") {
            title = "新窗口";
        }
        title = this.trim(title);
        var flag = winContainer.some(function(winTitle) {
            if (winTitle == title) {
                return true;
            }
        });
        if (!flag) {
            winContainer.push(title);
        }
        var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
        if (contentWin) {
            if (title === 'firstLevelIframeContainer') {
                var firstLevelEl = contentWin.document.querySelector('iframe[name^="firstLevelIframeContainer"]');
                firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
            }
            return contentWin.open(url, title);
        }
    }
    /* 调用场景 : 字符串前后去空格. */
    function _trim(str) {
        return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
    }
    /* 调用场景 : 键盘事件 */
    function _fireKeyEvent(el, evtType, keyCode) {
        var doc = el.ownerDocument,
            win = doc.defaultView || doc.parentWindow,
            evtObj;
        if (doc.createEvent) {
            if (win.KeyEvent) {
                evtObj = doc.createEvent('KeyEvents');
                evtObj.initKeyEvent(evtType, true, true, win, false, false, false, false, keyCode, 0);
            } else {
                evtObj = doc.createEvent('UIEvents');
                Object.defineProperty(evtObj, 'keyCode', {
                    get: function() { return this.keyCodeVal; }
                });
                Object.defineProperty(evtObj, 'which', {
                    get: function() { return this.keyCodeVal; }
                });
                evtObj.initUIEvent(evtType, true, true, win, 1);
                evtObj.keyCodeVal = keyCode;
                if (evtObj.keyCode !== keyCode) {
                    console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");
                }
            }
            el.dispatchEvent(evtObj);
        } else if (doc.createEventObject) {
            evtObj = doc.createEventObject();
            evtObj.keyCode = keyCode;
            el.fireEvent('on' + evtType, evtObj);
        }
    }
})(window, ysp);