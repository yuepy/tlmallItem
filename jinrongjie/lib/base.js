// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function(win, ysp) {
    var utils = ysp.utils;
    var flag = true; // 为true说明需要取token  为false说明不需要取token
    var topWindow = win.top; // 最外层window - top层
  //全局变量 : token地址
    topWindow.tokenUrl = null;
  //数据接口 : 代办\办结角标数量
  	topWindow.tokenNum = 0;
  //接口请求格式 : 
  	topWindow.userid = ''
  //安卓客户端调用 : 获取token链接
    topWindow.yspTokenUrl = function(url) {
        topWindow.tokenUrl = url;
      	console.log(url);
        return url;
    };
  //IOS客户端调用 : 获取token链接
  	topWindow.setSsoToken = function(url){
      topWindow.tokenUrl = url;
      console.log(url);
      return topWindow.tokenUrl;
    };
    topWindow.num = [];
  //全局变量 : 储存页面第一个文件上传功能的参数,用于文件删除
  	topWindow.file = []; 
  //全局变量 : 储存页面第二个文件上传功能的参数,用于文件删除
  	topWindow.file_two = [];
  	topWindow.activepageid = '';
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
      	pageid:_pageid,
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
          /*  showModelDialog 查询内部人员  */
        if(aWin.location.href.indexOf('search/WFSearchResult.jsp') !== -1){
          aWin.onShowResource = function() {
              var tmpval = aWin.$GetEle("creatertype").value;
              var id = null;
              if (tmpval == "0") {
                id = aWin.showModalDialog("/systeminfo/BrowserMain.jsp?url=/hrm/resource/ResourceBrowser.jsp", "", "dialogWidth:550px;dialogHeight:550px;");
              }else {
                id = aWin.showModalDialog("/systeminfo/BrowserMain.jsp?url=/CRM/data/CustomerBrowser.jsp", "", "dialogWidth:550px;dialogHeight:550px;");
              }
              aWin._setReturnValue = function(id){
                if(id){
                  if (aWin.wuiUtil.getJsonValueByIndex(id, 0) != "" && aWin.wuiUtil.getJsonValueByIndex(id, 0) != "0") {
                  aWin.resourcespan.innerHTML = aWin.wuiUtil.getJsonValueByIndex(id, 1);
                  aWin.$GetEle("createrid").value=aWin.wuiUtil.getJsonValueByIndex(id, 0);
                    } else {
                  aWin.resourcespan.innerHTML = "";
                  aWin.$GetEle("createrid").value="";
                    }
                }
                    
              }

            }
        }
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
          /* 相关文档跨页面传值 */
            if (aWin.location.href.indexOf('MutiDocBrowser.jsp') !== -1 && aWin.btnok_onclick) {
              if(aWin.loadToList){
                     aWin.loadToList = function(){
                      var selectObj = doc.all("srcList");   
                       selectObj.innerHTML = '';
                      for(var i=0;i<aWin.resourceArray.length;i++){
                        // aWin.addObjectToSelect(selectObj,aWin.resourceArray[i]);
                    if (selectObj.tagName != "SELECT" || !doc.createTextNode(aWin.resourceArray[i].split('~')[1])) return;
                    var oOption = doc.createElement("OPTION");
                    var value = doc.createTextNode(aWin.resourceArray[i].split('~')[0]);
                    var text = doc.createTextNode(aWin.resourceArray[i].split('~')[1]);
                    oOption.appendChild(text);
                    oOption.value = aWin.resourceArray[i].split('~')[0];
                    selectObj.appendChild(oOption);
                      }

                    }
                 }
               	aWin.loadToList();
                aWin.btnok_onclick = function() {
                    aWin.setResourceStr();
                    aWin.parent.opener._setReturnValue({ id: aWin.documentids, name: aWin.documentnames });
                    aWin.parent.close();
                }
            }
          /* 相关流程跨页面传值 */
          if(aWin.location.href.indexOf('MultiRequestBrowser.jsp') !== -1){
            if(aWin.loadToList){
                     aWin.loadToList = function(){
                      var selectObj = doc.all("srcList");   
                       selectObj.innerHTML = '';
                      for(var i=0;i<aWin.resourceArray.length;i++){
                        // aWin.addObjectToSelect(selectObj,aWin.resourceArray[i]);
                    if (selectObj.tagName != "SELECT" || !doc.createTextNode(aWin.resourceArray[i].split('~')[1])) return;
                    var oOption = doc.createElement("OPTION");
                    var value = doc.createTextNode(aWin.resourceArray[i].split('~')[0]);
                    var text = doc.createTextNode(aWin.resourceArray[i].split('~')[1]);
                    oOption.appendChild(text);
                    oOption.value = aWin.resourceArray[i].split('~')[0];
                    selectObj.appendChild(oOption);
                      }

                    }
                 }
               	aWin.loadToList();
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

                }
            }
            /*  showModelDialog 相关文档 跨页面传值兼容  */

            /*  showModelDialog 相关流程 跨页面传值兼容  */
            if (aWin.btnsub_onclick && aWin.location.href.indexOf('ResourceBrowser.jsp') !== -1  && aWin.location.href.indexOf('BrowserMain.jsp') == -1 ) {
                aWin.btnsub_onclick = function() {
                    aWin.setResourceStr();
                    $("#resourceids").val(aWin.resourceids);
                    doc.SearchForm.submit();
                }
            }
          
//           if(aWin.location.href.indexOf('MultiRequestBrowser.jsp?resourceids=&splitflag=') !== -1 || aWin.location.href.indexOf('MultiRequestBrowser.jsp?resourceids=') !== -1 || aWin.location.href.indexOf('MultiRequestBrowser.jsp') !== -1 ){
//             if(aWin.doSearch){
//               aWin.doSearch = function(){
//                 debugger;
//                 aWin.setResourceStr();
//                 doc.all("resourceids").value = aWin.resourceids.substring(1) ;
//                 doc.SearchForm.submit();
//               }
//             }
//             if(aWin.reloadResourceArray){
//                  aWin.reloadResourceArray = function(){
//               aWin.resourceArray = new Array();
//                 var destList = $("select[name=srcList]")[0];
//                 for(var i=0;i<destList.options.length;i++){
//                   aWin.resourceArray[i] = destList.options[i].value+"~"+destList.options[i].text ;
//                 }
//                 //alert(resourceArray.length);
//               }
//             }
//          	if(aWin.setResourceStr){
//             aWin.setResourceStr = function(){

//                 aWin.resourceids ="";
//                 aWin.resourcenames = "";
//                 for(var i=0;i<aWin.resourceArray.length;i++){
//                   aWin.resourceids += ","+aWin.resourceArray[i].split("~")[0] ;
//                   aWin.resourcenames += ","+aWin.resourceArray[i].split("~")[1] ;
//                 }
//                 //alert(resourceids+"--"+resourcenames);
//                 $("input[name=resourceids]").val(aWin.resourceids.substring(1));
//               }
//           }
              
//           }
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
              if(doc.getElementById('flowbody')){
                doc.getElementById('flowbody').setAttribute('onbeforeunload', '')
              }else if(doc.getElementById('bodyiframe')){
                doc.getElementById('bodyiframe').setAttribute('onbeforeunload', '')
              }
                
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

          /* 退回流程 */
          aWin.doReject_New = function(){
            aWin.getRemarkText_log();
            aWin.doReject();
          }
          
          if(aWin.onSetRejectNode){
            aWin.onSetRejectNode = function(){
            	var $G = aWin.$G;
              var requestidId = doc.getElementById('requestid').value;
              var workflowId = doc.getElementById('workflowid').value;
              var nodeId = doc.querySelector('input[name="nodeid"]').value;
             	var url=aWin.escape("/workflow/request/RejectNodeSet.jsp?requestid="+requestidId+"&workflowid="+workflowId+"&nodeid="+nodeId+"&isrejectremind=1&ischangrejectnode=1&isselectrejectnode=1&isFreeNode=");
                var result = aWin.showModalDialog("/systeminfo/BrowserMain.jsp?url="+url);
                aWin.setReturnValue = function (result){
                    if (result != null) {
                       // $G("RejectNodes").value=result;
                    var val=result.split("|");
                      if($G("RejectNodes")) $G("RejectNodes").value=val[0];
                      if($G("RejectToNodeid")) $G("RejectToNodeid").value=val[1]; 
                     return true;
                  }else{
                      return false;
                  }
                }
            }
          }
          
          
          aWin.onsave = function(){
            var nodeids="";
            var $G = aWin.$G;
            if($G("checkall").checked){ 
             nodeids="-1";
            }else{ 

                if($G("nodeid_121108").checked){
                    if(nodeids.length>0){
                        nodeids+=","+$G("nodeid_121108").value;
                    }else{
                        nodeids=$G("nodeid_121108").value;
                    }
                }

                if($G("nodeid_121109").checked){
                    if(nodeids.length>0){
                        nodeids+=","+$G("nodeid_121109").value;
                    }else{
                        nodeids=$G("nodeid_121109").value;
                    }
                }

                //alert(nodeids);
                   }
            var rejectnodeid="";
            rejectnodeid=aWin.getRadioValue("rejectnodeid");
            if(rejectnodeid==""){
                alert("请选择退回节点");
                return false;
            }
            aWin.parent.opener.setReturnValue(nodeids+"|"+rejectnodeid);
            if(aWin.parent.opener.setReturnValue(nodeids+"|"+rejectnodeid)){
               aWin.parent.opener.showtipsinfo(380971,8061,121109,1,1,3151,"","reject","2","divFavContent18980","正在退回流程，请稍等....")
               }
            aWin.parent.close();
        }
    		
          /* 相关文档 子目录传值兼容性问题 */
          if(aWin.selectCategory){
             aWin.selectCategory = function(nodeID) {
                var node = aWin.tree.getNode(nodeID);
                var path = node.text;
                var id = node.categoryid;
                var subid = -1;
                var mainid = -1;
                var  parth2="<a href='/docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&seccategory="+id+"'>"+node.text+"</a>";  
                while (node.parent != null) {        
                    path = node.parent.text + "/" + path;        
                    if (node.parent.categorytype == 1 && subid == -1) {
                        subid = node.parent.categoryid;
                        parth2="<a href='/docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&subcategory="+subid+"'>"+node.parent.text+"</a>/"+parth2;               
                    }  else  if (node.parent.categorytype == 0) {
                        mainid = node.parent.categoryid;    
                        parth2="<a href='docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&maincategory="+mainid+"'>"+node.parent.text+"</a>/"+parth2;      
                  }  
                    node = node.parent;
                }  
                path = path.replace(/</g, "＜").replace(/>/g, "＞").replace(/&lt;/g, "＜").replace(/&gt;/g, "＞");
               	aWin.parent.opener.returnValue = {tag:"1",id:""+id, path:""+path, mainid:""+mainid, subid:""+subid,path2:""+parth2};
								aWin.parent.opener._setReturnValue({tag:"1",id:""+id, path:""+path, mainid:""+mainid, subid:""+subid,path2:""+parth2})
                aWin.parent.close();
              }
           }
          //正文预览
          aWin.check_form=function(thiswins,items){
            /* added by cyril on 2008-08-14 for td:8521 */
            var isconn = false;
            try {
              var xmlhttp;
                if (window.XMLHttpRequest) {
                  xmlhttp = new XMLHttpRequest();
                }  
                else if (window.ActiveXObject) {
                  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
                }
                var URL = "/systeminfo/CheckConn.jsp?userid=201&time="+new Date();
                xmlhttp.open("GET",URL, false);
                xmlhttp.send(null);
                var result = xmlhttp.status;
                if(result==200) {
                  isconn = true;
                  var response_flag = xmlhttp.responseText;
                  if(response_flag!='0') {
                    var flag_msg = '';
                    if(response_flag=='1') {
                      // var diag = new Dialog();
                      // diag.Width = 300;
                      // diag.Height = 180;
                      // diag.ShowCloseButton=false;
                      // diag.Title = "网页超时提醒";
                      // //diag.InvokeElementId="pageOverlay"
                      // diag.URL = "/wui/theme/ecology7/page/loginSmall.jsp?username=ychwang";
                      // diag.show();
                      // return false;
                    }
                    else if(response_flag=='2') {
                      flag_msg = '网络故障或其它原因导致您连接不上服务器，请复制下重要信息稍候再提交！';
                    }
                    //主从帐户特殊处理 by alan for TD10156
                    if(response_flag=='3') {
                      flag_msg = '提交信息失败,该页面非当前帐号打开,请刷新页面后再提交!';

                      return false;
                    }
                    flag_msg += '\r\n\r\n按【确定】继续,按【取消】停留在本页!';
                      //alert(xmlhttp.responseText);
                      return confirm(flag_msg);
                    }
                }
                xmlhttp = null;

                //检查多行文本框 oracle下检查HTML不能超过4000个字符

                try {
                  var lenck = true;
                  var tempfieldvlaue = document.getElementById("htmlfieldids").value;
                  while(true) {
                    var tempfield = tempfieldvlaue.substring(0, tempfieldvlaue.indexOf(","));
                    tempfieldvlaue = tempfieldvlaue.substring(tempfieldvlaue.indexOf(",")+1);
                    var fieldid = tempfield.substring(0, tempfield.indexOf(";"));
                    var fieldname = tempfield.substring(tempfield.indexOf(";")+1);
                    if(fieldname=='') break;
                    if(!checkLengthOnly(fieldid,'4000',fieldname,'当前文本长度','文本长度不能超过','1个中文字符等于2个长度')) {
                      lenck = false;
                      break;
                    }
                  }
                  if(lenck==false) return false;
                }
                catch(e) {}

            }
            catch(e) {
              return check_conn();
            }
            if(!isconn)
              return check_conn();
              /* end by cyril on 2008-08-14 for td:8521 */

            thiswin = thiswins
            items = ","+items + ",";

            var tempfieldvlaue1 = "";
            try{
              tempfieldvlaue1 = document.getElementById("htmlfieldids").value;
            }catch (e) {
            }

            for(i=1;i<=thiswin.length;i++){
              tmpname = thiswin.elements[i-1].name;
              tmpvalue = thiswin.elements[i-1].value;
                if(tmpvalue==null){
                    continue;
                }

              if(tmpname!="" && items.indexOf(","+tmpname+",")!=-1){
                if(tempfieldvlaue1.indexOf(tmpname+";") == -1){
                  while(tmpvalue.indexOf(" ") >= 0){
                    tmpvalue = tmpvalue.replace(" ", "");
                  }
                  while(tmpvalue.indexOf("\r\n") >= 0){
                    tmpvalue = tmpvalue.replace("\r\n", "");
                  }

                  if(tmpvalue == ""){
                    if(thiswin.elements[i-1].getAttribute("temptitle")!=null){
                      alert("\""+thiswin.elements[i-1].getAttribute("temptitle")+"\""+"未填写！");
                      return false;
                    }else{
                      alert("必要信息不完整！");
                      return false;
                    }
                  }
                } else {
                  var divttt=document.createElement("div");
                  divttt.innerHTML = tmpvalue;
                  var tmpvaluettt = jQuery.trim(jQuery(divttt).text());
                  if(tmpvaluettt == ""){
                    if(thiswin.elements[i-1].getAttribute("temptitle")!=null){
                      alert("\""+thiswin.elements[i-1].getAttribute("temptitle")+"\""+"未填写！");
                      return false;
                    }else{
                      alert("必要信息不完整！");
                      return false;
                    }
                  }
                }
              }
            }
            return true;
          }
        },

        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function(aWin, doc) {
          //空白页关闭
          var _href = aWin.location.href;
          if(/workflow\/request\/ViewRequest\.jsp\?requestid=\d+&message=/.test(_href)||/about:blank/.test(_href)){
            aWin.close();
          }
            // 测试
          if(aWin.onSetRejectNode){
             console.log(aWin.onSetRejectNode.toString())
             }
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
                          var fileNum=this.parentElement.getAttribute('file-num');
                          //附件上传 文件放置DIV
                          
                          if(fileNum=="1"){
                            this.ownerDocument.querySelectorAll('.fieldset')[0].appendChild(div);
                          }else if(fileNum=="2"){
                            this.ownerDocument.querySelectorAll('.fieldset')[1].appendChild(div);
                          }else{
                            this.ownerDocument.querySelector('.fieldset').appendChild(div);
                          }
                          
                          //附件上传 文件放置DIV
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
                              topWindow.file.push(ysp.customHelper.trim(responseT));
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
          
          //loading
    				// aWin.addEventListener("DOMContentLoaded",function(){
    				// var load = doc.createElement('div');
    				// load.className = 'ysp_load_haha';
    				// doc.body.appendChild(load)
    				// },false)

            // 测试结束


            if (aWin.location.href.indexOf('Login.jsp') !== -1) {
                console.info('向客户端发送消息,开始获取token地址');
              	var parent = aWin.frameElement.ownerDocument.defaultView;
              	aWin.addEventListener('DOMContentLoaded', function() {
                // var actionEvent = '{"target":"null","data":"getNumber"}';
                topWindow.tokenNum++;
                  if(topWindow.EAPI.isAndroid()){
                    topWindow.AndroidTokenurl = topWindow.redcore.getUserTokenUrl();
                  }else if(topWindow.EAPI.isIOS()){
                    topWindow && topWindow.EAPI.postMessageToNative('getToken', null);
                  }
                 if(topWindow.tokenNum>1){
                  //当token过期时像客户端请求新的token
                   if(topWindow.EAPI.isIOS()){
                     topWindow && topWindow.EAPI.postMessageToNative('overdueGetToken', null);
                   }else if(topWindow.EAPI.isAndroid()){
                     topWindow.AndroidTokenurl = topWindow.redcore.getNewToken();
                   }
                   token_flag = true;
                }
                sessionStorage.setItem('getToken', true);
              },false);
            }
            // },false);
            /*  获取token地址  */
            if (token_flag) {
              if(topWindow.EAPI.isIOS()){
                 console.log('拿到客户端给我的token地址'+topWindow.tokenUrl);
              }else if(topWindow.EAPI.isAndroid()){
                console.log('拿到客户端给我的token地址'+topWindow.AndroidTokenurl);
              }
                token_flag = false;
              	var oldHref = aWin.location.href;
              /* 拼接token 重新登录 */
              if(oldHref && topWindow.EAPI.isIOS()){
                ysp.appMain.reloadPage("http://192.168.200.63/login/Vpn-sso.jsp?tokenStr="+topWindow.tokenUrl);
              }else if(oldHref && topWindow.EAPI.isAndroid()){
                ysp.appMain.reloadPage("http://192.168.200.63/login/Vpn-sso.jsp?tokenStr="+topWindow.AndroidTokenurl);
              }
            }
            /*  获取token地址  */
            /* ajax请求角标数据 */
            if (aWin.location.href.indexOf('main.jsp') !== -1) {
                  var usercookie = doc.cookie.split(';')
                  	for(var i =0;i<usercookie.length;i++){
                    if(usercookie[i].indexOf('loginid') !== -1){
                      topWindow.userid= usercookie[i].split('=')[1];
                      // console.log(topWindow.userid)
                    }
                }
                  var soapData = ' <SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">';
                      soapData = soapData + ' <SOAP:Body>';
                      soapData = soapData + ' <GetTodoCountInfoByPsCode xmlns="http://pub.fsig.com.cn/">';
                      soapData = soapData + ' <psCode>'+topWindow.userid+'</psCode>';
                      soapData = soapData + ' </GetTodoCountInfoByPsCode>';
                      soapData = soapData + ' </SOAP:Body>';
                      soapData = soapData + ' </SOAP:Envelope>';
                var xmlhttp = new XMLHttpRequest();
              if(topWindow.EAPI.isIOS()){
                //测试环境 - IOS角标
                	xmlhttp.open("post",'http://192.168.1.12:8090/FsigPubServiceProject/webService/OAService?wsdl',true);
                //正式环境 - IOS角标
                	//xmlhttp.open("post",'http://bi.fsig.com.cn:8090/FsigPubServiceProject/webService/OAService?wsdl',true);
              }else{
                //测试环境 - Andriod角标
                  xmlhttp.open("post", "http://192.168.200.122:8080/home/system/com.eibus.web.soap.Gateway.wcp", true);
                //正式环境 - Andriod角标
              	//xmlhttp.open("post", "http://bi.fsig.com.cn:8090/FsigPubServiceProject/webService/OAService?wsdl", true);
              }
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var xmldoc = (new DOMParser()).parseFromString(xmlhttp.responseText, 'text/xml');
                        topWindow.num.push(xmldoc.getElementsByTagName('return')[0].getElementsByTagName('todoCount')[0].textContent, xmldoc.getElementsByTagName('return')[0].getElementsByTagName('unreadCount')[0].textContent);
                    }else if(xmlhttp.status == 400){
                      topWindow.num.push('请求失败!');
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
            if (topWindow.EAPI.isAndroid() || topWindow.parent.EAPI.isStudio()) {
                ysp.appMain.back();
            } else {
                var actionEvent = '{"target":"null","data":"' + type + '"}';
                topWindow.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
                setTimeout(function() {
                    topWindow.EAPI.back();
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
        ysp.runtime.Model.setForceMatchModels([args]);
      } else if (args instanceof Array) {
        ysp.runtime.Model.setForceMatchModels(args);
      } else {
        console.error('forceMatchModels 参数类型不正确');
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
  	function _pageid(){
      topWindow.activepageid = ysp.runtime.Context.activeContext.id;
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