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
        Dnum: _num, // 待办列表角标值
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
          if(aWin.location.href.indexOf('MultiRequestBrowser.jsp') !== -1 && aWin.btnok_onclick){
              aWin.btnok_onclick = function() {
                      aWin.setResourceStr();
                      aWin.parent.opener._setReturnValue({id:aWin.resourceids,name:aWin.resourcenames});
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
            if (aWin.BrowseTable_onclick && aWin.location.href.indexOf('ResourceBrowser.jsp') == -1) {
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
                    obj.options.add(oOption);
                    $(oOption).val(str.split("~")[0]);
                    $(oOption).text(str.split("~")[1]);
                    console.log(str.split("~")[1])
                    $(oOption).html(str.split("~")[1]);

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
          
          /*  showModelDialog 相关流程 子目录跨页面传值兼容  */
            // if (aWin.BrowseTable_onclick && aWin.location.href.indexOf('ResourceBrowser.jsp') !== -1) {
            //     aWin.BrowseTable_onclick = function(e) {
            //       debugger
            //       var target = e.srcElement || e.target;
            //         try {
            //             if (target.nodeName == "TD" || target.nodeName == "A") {
            //                 var newEntry = $($(target).parents("tr")[0].cells[0]).text() + "~" + $($(target).parents("tr")[0].cells[1]).text();
            //                 if (!aWin.isExistEntry(newEntry, aWin.resourceArray)) {
            //                     aWin.addObjectToSelect(doc.all("srcList"), newEntry);
            //                     aWin.reloadResourceArray();
            //                 }
            //             }
            //         } catch (en) {
            //             alert(en.message);
            //         }
            //     }
//             aWin.selectCategory = function(nodeID) {
//               var node = aWin.tree.getNode(nodeID);
//                 var path = node.text;
//                 var id = node.categoryid;
//                 var subid = -1;
//                 var mainid = -1;
//                 var  parth2="<a href='/docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&seccategory="+id+"'>"+node.text+"</a>";  

//                   while (node.parent != null) {        
//                     path = node.parent.text + "/" + path;        
//                     if (node.parent.categorytype == 1 && subid == -1) {
//                         subid = node.parent.categoryid;
//                         parth2="<a href='/docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&subcategory="+subid+"'>"+node.parent.text+"</a>/"+parth2;               
//                     }  else  if (node.parent.categorytype == 0) {
//                         mainid = node.parent.categoryid;    
//                         parth2="<a href='docs/search/DocSummaryList.jsp?showtype=0&displayUsage=0&maincategory="+mainid+"'>"+node.parent.text+"</a>/"+parth2;      
//                   }  
//                     node = node.parent;
//                 } 
//                 path = path.replace(/</g, "＜").replace(/>/g, "＞").replace(/&lt;/g, "＜").replace(/&gt;/g, "＞");

//                 aWin.parent.returnValue = {tag:"1",id:""+id, path:""+path, mainid:""+mainid, subid:""+subid,path2:""+parth2};
//                 aWin.parent.close();
//             }
//          }
          /*  showModelDialog 相关流程 子目录跨页面传值兼容  */
          
          
          // console.log(111,aWin.document)
          aWin.alert = function (){
            console.log('DUANG ~  又是弹框 ! ~.~');
          } 
          
        },
        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function(aWin, doc) {
            aWin.getBrowserVersion = function() {
                    var browserInfo = { browser: "", version: "" };
                    var ua = aWin.navigator.userAgent.toLowerCase();
                    if (aWin.ActiveXObject && ua.indexOf('IE') != 1) {
                        browserInfo.browser = "IE";
                        browserInfo.version = ua.match(/msie ([\d.]+)/)[1];
                    } else if (doc.getBoxObjectFor) {
                        browserInfo.browser = "FF";
                        browserInfo.version = ua.match(/firefox\/([\d.]+)/)[1];
                    } else if (/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)) { //window.MessageEvent && !document.getBoxObjectFor) {
                        browserInfo.browser = "Chrome";
                        browserInfo.version = ua.match(/chrome\/([\d.]+)/)[1];
                    } else if (/webkit/i.test(ua) && !(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))) {
                        browserInfo.browser = "Safari";
                        browserInfo.version = ua.match(/version\/([\d.]+)/)[1];
                    } else if (window.opera) {
                        browserInfo.browser = "Opera";
                        browserInfo.version = ua.match(/opera.([\d.]+)/)[1];
                    } else if (window.openDatabase) {
                        browserInfo.browser = "";
                        browserInfo.version = ua.match(/version\/([\d.]+)/)[1];
                    }
                    return browserInfo;
                }
                /*  找到时机像客户端发出信息，表示我要获取带token的targetURL  */
                // aWin.addEventListener('DOMContentLoaded', function() {

            // aWin.alert = function() {
            //   debugger;
            // }

            if (aWin.location.href.indexOf('Login.jsp') !== -1) {
                console.info('向客户端发送消息,开始获取token地址');
                var actionEvent = '{"target":"null","data":"getTokenURl"}';
                var parent = aWin.frameElement.ownerDocument.defaultView;
                //parent && parent.EAPI.postMessageToNative('getToken', null);
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
                      topWindow.num.push(xmldoc.getElementsByTagName('TodoCountInformation')[0].getElementsByTagName('todoCount')[0].textContent,xmldoc.getElementsByTagName('TodoCountInformation')[0].getElementsByTagName('unreadCount')[0].textContent);
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
        if (typeof type === 'string') {
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
      debugger;
        return topWindow.num;
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
})(window, ysp);