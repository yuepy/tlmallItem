// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function(win, ysp) {

    var utils = ysp.utils;
    ysp.customHelper = {};
    top.date = "";
    var topWin = top;
  	var topWindow = window.top;
    topWin.AndroidBack = function() {
        ysp.appMain.back();
    };
   	var KAOQIN = false; // 移动端点击考勤单点登录跳转标识
  	var GONGCHU = false; // 移动端点击公出单点登录跳转标识
  	//根据客户端传值来判断自动跳转的目标页面
    topWindow.isShortcut = function(str){
      if(str == '考勤'){
        KAOQIN = true;
        GONGCHU = false;
        ysp.customHelper.isShortcut = 'kaoqin';
      }else if(str == '公出'){
        KAOQIN = false;
        GONGCHU = true;
        ysp.customHelper.isShortcut = 'gongchu';
      }
    }
    utils.extend(ysp.customHelper, {
        /* 适配中定制的公共代码放在这里 */

        /*
        // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
        foo: function(){

        }
        */
      	isShortcut:"",
        trim: _trim,
        back: _back,
        selectSthMask: _selectSthMask,
        tableData: _tableData,
        alert: _alert,
        tab: null,
      	innerBack:null,
    		// userId:null,
    		// passWord:null,
      	// indexName:null,
        // 以下两个方法用于修改原页面中的错误, 但执行时机不同
        // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
        onTargetLoad: function(aWin, doc) {
            //取消操作时间超过20分钟页面
            if (aWin.location.href.indexOf("cmd=expire") !== -1) {
                var btn = doc.querySelectorAll(".ps_loginmessagelarge")[1].querySelector("a");
                btn.click();
            }
            //每个tab页面的切换
            var tblpstabs = doc.querySelector("#tblpstabs");
            if (tblpstabs && tblpstabs.querySelectorAll("a")[1].textContent !== "调休假余额查询" && tblpstabs.querySelectorAll("a")[1].textContent !== "考勤类型") {
                tblpstabs.querySelectorAll("a")[1].click();
            }
          	//解决重复登录的问题
          	if(aWin.location.href.indexOf("http://192.168.220.110/psp/ps/EMPLOYEE/HRMS/h/?cmd=logout")!==-1){
            	var timer=setInterval(function(){
                if(doc.querySelector("#userid").value!==""&&doc.querySelector("#pwd").value!==""){
                  sessionStorage.setItem("userid",doc.querySelector("#userid").value);
              		sessionStorage.setItem("pwd",doc.querySelector("#pwd").value);
                  aWin.location.href="http://192.168.220.110/psp/ps/EMPLOYEE/HRMS/h/?tab=TL_SELF?&cmd=login&languageCd=ZHS";
                  clearInterval(timer);
                }
              },500);
            }
          	if(aWin.location.href.indexOf("http://192.168.220.110/psp/ps/EMPLOYEE/HRMS/h/?tab=TL_SELF?&cmd=login&languageCd=ZHS")!==-1){
              doc.querySelector("#userid").value=sessionStorage.getItem("userid");
              doc.querySelector("#pwd").value=sessionStorage.getItem("pwd");
          	}
          	// 用户名、密码记录
          	if(doc.querySelector("#login_error")&&(doc.querySelector("#login_error").textContent.indexOf("您已请求了一个安全资源")!==-1||doc.querySelector("#login_error").textContent.indexOf("验证码校验超时")!==-1)){
            	var timer=setInterval(function(){
                if(doc.querySelector("#userid").value!==""&&doc.querySelector("#pwd").value!==""){
                  sessionStorage.setItem("userid",doc.querySelector("#userid").value);
              		sessionStorage.setItem("pwd",doc.querySelector("#pwd").value);
                  clearInterval(timer);
                }
              },500);
            }
          	if(doc.querySelector("#login_error")&&doc.querySelector("#login_error").textContent=="验证码校验错误"){
              doc.querySelector("#userid").value=sessionStorage.getItem("userid");
              doc.querySelector("#pwd").value=sessionStorage.getItem("pwd");
          	}
            //返回
            if (aWin.location.href.indexOf("http://192.168.220.110/psp/ps/EMPLOYEE/HRMS/h/?tab=TL_SELF") !== -1) {
                ysp.customHelper.tab = "menu"
            }
							
						

        },

        // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
        beforeTargetLoad: function(aWin, doc) {
          //ios弹出_ysp_top
        	// alert(aWin.location.href);
					var oldAlert=aWin.alert;
          aWin.alert=function(str){
            if(/_ysp_top/.test(str)){
              return;
            }else{
              
            }
          }
          debugger;
          aWin.addEventListener('DOMContentLoaded', function() {
            // alert("开始")
                // if (topWindow.EAPI.isIOS()) {
                //   //判断当前移动端应该跳转目标页面标识
                //     if(aWin.location.href.indexOf('app/appMyTask.jsp') != -1){
                //        topWindow.EAPI.postMessageToNative('isPending', null);
                //     } 
                //     if (aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp" || aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp#") {
                //         topWindow.EAPI.postMessageToNative('showDetailBPMCard', null);
                //         sessionStorage.setItem('showDetailBPMCard', true);
                //     }
                //     if (aWin.location.href.indexOf('index.html') !== -1) {
                //         var actionEvent = '{"target":"null","data":"closePreLoading"}';
                //         //关闭主webview的loading状态
                //         var parent = aWin.frameElement.ownerDocument.defaultView;
                //         //parent && parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
                //         //sessionStorage.setItem('closePreLoading-domcontentloaded',true);
                //     }
                // }
                if (topWindow.EAPI.isAndroid()) {
                  // debugger;
                   //判断当前移动端应该跳转目标页面标识
                  if(aWin.location.href.indexOf('http://192.168.220.110/psp/ps/EMPLOYEE/HRMS/h/?tab=TL_SELF') != -1){
                        var str = topWindow.yspCheckIn.showBPMIsPending();
                        if(str == '考勤'){
                          KAOQIN = true;
                          GONGCHU = false;
                          ysp.customHelper.isShortcut = 'kaoqin';
                        }else if(str == '公出'){
                          KAOQIN = false;
                          GONGCHU = true;
                          ysp.customHelper.isShortcut = 'gongchu';
                        }
                    }
                    // if (aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp" || aWin.location.href == "http://192.168.220.51:8000/ptsoa/skins/default/index.jsp#") {
                    //     topWindow.AndriodCardList = topWindow.yspCheckIn.showDetailBPMCard();
                    //     topWindow.AndriodCardList = JSON.parse(topWindow.AndriodCardList);
                    // }
                }
//                 aWin.createIframe = function createIframe(name, targetUrl, mount, data) {
//                         // if (parent.EAPI.isIOS() && targetUrl.indexOf("192.168.1.174") != -1) {
//                         //   var topWin = aWin.getTopWin(aWin);
//                         //   if (topWin.frames[name]) {
//                         //     var childrenWin = topWin.frames[name];
//                         //     if (childrenWin.location.href.indexOf(targetUrl) == -1) {
//                         //       aWin.postMsgToIframe(name, data, targetUrl);
//                         //     } else {
//                         //       aWin.postMsgToIframe(name, data);
//                         //     }
//                         //   } else {
//                         //     var doc = topWin.document;
//                         //     var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
//                         //     var mountEl = doc.querySelector(mount);
//                         //     var iframe = void 0;
//                         //     try {
//                         //       iframe = doc.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
//                         //     } catch (e) {
//                         //       iframe = doc.createElement('iframe');
//                         //       iframe.name = name;
//                         //       iframe.src = targetUrl;
//                         //     }
//                         //     if (iframe) {
//                         //       mountEl.appendChild(iframe);
//                         //     }
//                         //     aWin.postMsg(name, data);
//                         //   }
//                         //   return;
//                         // }

//                         var childWin = ysp.customHelper.openWindow(targetUrl, name);
//                         var flag = false;

//                         function postMsg(data) {
//                             if (childWin.receiveMsg) {
//                                 childWin.receiveMsg(data);
//                                 flag = true;
//                             }
//                             if (!flag) {
//                                 setTimeout(postMsg.bind(this, data), 200);
//                             }
//                         }
//                         if (data) {
//                             postMsg(data);
//                         }
//                     }
                    //观察页面是否等待状态,选择合适的showLoading和hideLoading
//                 if (aWin.location.href.indexOf('index.html') !== -1) {

//                     try {
//                         var MutationObserver = aWin.MutationObserver ||
//                             aWin.WebKitMutationObserver ||
//                             aWin.MozMutationObserver;
//                         var mutationObserverSupport = !!MutationObserver;      
//                         var callback = function(records) {       
//                             var someFlag = records.some(function(record) {
//                                 if (record.type == "attributes") {
//                                     console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
//                                     if (record.target.tagName.toLowerCase() === 'html' && record.target.classList && record.target.classList.contains('loading')) {
//                                         ysp.appMain.showLoading();
//                                     } else {
//                                         ysp.appMain.hideLoading();
//                                     }
//                                 }
//                             });
//                         };
//                         var mo = new MutationObserver(callback);
//                         var option = {
//                             'attributes': true,
//                             'childList': true
//                         };
//                         var docEl = doc.documentElement
//                         if (docEl) {
//                             mo.observe(docEl, option);
//                         }
//                     } catch (e) {
//                         console.log("mutationobserver is not supported! the compatibility starting ...");
//                     }
//                 }
            }, false);
        
          //hr前五个快捷入口加载不出来的解决办法
//           var href=aWin.location.href;
         
//           debugger;
//           if(href.indexOf("kaoqin")!==-1){
//             debugger
//             alert(ysp.customHelper.indexName)
//             ysp.customHelper.indexName="kaoqin"
//             alert(ysp.customHelper.indexName)
//           }else if(href.indexOf("gongchu")!==-1){
//             ysp.customHelper.indexName="gongchu"
//           }
          
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
    /*调用场景：字符串前后需要去除空格时调用*/
    function _trim(str) {
        return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
    }
    /*调用场景：页面返回时使用*/
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

    /*调用场景：查询弹框数据*/
    function _selectSthMask(elem) {
        if (elem && elem.className && elem.className == "ps_pagecontainer" && elem.textContent.indexOf("收入明细") == -1) {
            var data = {
                    scope: [], //范围选择；
                    btns: [], //查询、清除、取消、基本查询按钮
                    consequence: "", //搜索结果
                    tips: "", //显示前几条
                    page: {}, //翻页信息
                    table: {
                        title: [],
                        content: []
                    }
                }
                /********获取范围选择的所有数据start********/
            var scopeTable = elem.querySelector("table[role='presentation']");
            if (scopeTable) {
                var topTrs = scopeTable.querySelectorAll("tr");
                [].forEach.call(topTrs, function(d, i) {
                    var topInfo = {
                        type: "",
                        title: [],
                        options: [],
                        selectedOption: "",
                        inputValue: ""
                    };
                    if (d.querySelectorAll("td")[0].querySelector("span") && d.querySelectorAll("td")[0].querySelectorAll("span").length > 0) { //外派地
                        topInfo.type = "span";
                        topInfo.title.push(d.querySelectorAll("td")[0].querySelector("span").textContent);
                        topInfo.title.push(d.querySelectorAll("td")[2].querySelector("span").textContent);
                        data.scope.push(topInfo);
                    } else {
                        if (d.querySelectorAll("td")[2].querySelectorAll("a").length > 0) {
                            topInfo.type = "search"; //外派地有搜索的
                        } else {
                            topInfo.type = "normal";
                        }
                        topInfo.title.push(d.querySelectorAll("td")[0].querySelector("label").textContent);
                        var options = d.querySelectorAll("option");
                        [].forEach.call(options, function(d1, i1) {
                            topInfo.options.push(d1.textContent.trim());
                            if (d1.selected) {
                                topInfo.selectedOption = d1.textContent;
                            }
                        });
                        topInfo.inputValue = d.querySelectorAll("td")[2].querySelector("input").value;
                        data.scope.push(topInfo);
                    }
                });
            }
            /********获取范围选择的所有数据end*********/
            /********按钮群start*********/
            var btnBar = elem.querySelector("div[id*='divSEARCHBELOW']");
            if (btnBar) {
                var btns = btnBar.querySelectorAll("a");
                [].forEach.call(btns, function(d2, i2) {
                    if (d2.querySelector("input")) {
                        data.btns.push(d2.querySelector("input").value)
                    } else {
                        data.btns.push(d2.textContent.trim())
                    }
                })
            }
            /********按钮群end***********/
            /********只能显示前几条信息start***********/
            var consequence = elem.querySelector(".PSSRCHSUBTITLE")
            if (consequence) {
                data.consequence = consequence.textContent;
            }
            var tip = elem.querySelector(".PSSRCHINSTRUCTIONS");
            if (tip) {
                data.tips = tip.textContent
            }
            /********只能显示前几条信息end***********/
            /********翻页start***********/
            var page = elem.querySelector(".PSSRCHRESULTSTITLE");
            if (page) {
                data.page.num = page.querySelector("tr[valign='baseline']").querySelector("td[align='right']").querySelector("span").textContent;
                var pageRight = page.querySelector("tr[valign='baseline']").querySelector("td[align='right']");
                if (pageRight) {
                    data.page.first = pageRight.querySelectorAll("span")[0].textContent;
                    data.page.middle = pageRight.querySelectorAll("span")[1].textContent;
                    data.page.last = pageRight.querySelectorAll("span")[2].textContent;
                }
            }
            /********翻页end*************/
            /****************数据表格start*******************/
            var table = elem.querySelector("#PTSRCHRESULTS");
            if (table) {
                //表头
                var ths = table.querySelectorAll("th");
                [].forEach.call(ths, function(d3, i3) {
                        data.table.title.push(d3.textContent);
                    })
                    //表内容
                var trs = table.querySelectorAll("tr");
                [].forEach.call(trs, function(d4, i4) {
                    if (i4 > 0) {
                        var tds = d4.querySelectorAll("td");
                        var tdsArr = [];
                        [].forEach.call(tds, function(d5, i5) {
                            tdsArr.push(d5.textContent)
                        })
                        data.table.content.push(tdsArr)
                    }
                })
            }
            /****************数据表end**********************/
            return data;
        } else {
            return "elem不存在";
        }
    }
    /*调用场景：表格的数据table的class后三位必须是WBO*/
    function _tableData(elem) {
        if (elem.className && elem.className.indexOf("WBO") !== -1 && elem.querySelectorAll("th").length > 0) {
            var data = {
                title: [],
                content: []
            };

            //表格
            if (elem.children[0].children.length == 2 && elem.querySelectorAll("table").length == 1) {
                var targetTable = elem.querySelector("table");
            } else {
                var targetTable = elem;
            }
            //表头
            var ths = targetTable.querySelectorAll("tr")[0].querySelectorAll("th");
            [].forEach.call(ths, function(d1, i1) {
                data.title.push(d1.textContent);
            });
            //内容
            var trs = targetTable.querySelectorAll("tr:not(:first-child)");
            [].forEach.call(trs, function(d2, i2) {
                var tds = d2.querySelectorAll("td");
                var trArr = [];
                [].forEach.call(tds, function(d3, i3) {
                    var tdObj = {
                        type: "",
                        text: "",
                        select: "",
                        options: []
                    };
                    if (d3.querySelectorAll("input[type='button']").length == 1) {
                        tdObj.type = "button";
                        tdObj.text = d3.querySelector("input[type='button']").value;
                    } else if (d3.querySelectorAll("img").length == 1 && d3.querySelector("img").getAttribute("alt").indexOf("日期") !== -1) {
                        tdObj.type = "date";
                        tdObj.text = d3.querySelector("input[type='text']").value;
                    } else if (d3.querySelectorAll("select").length > 0) {
                        tdObj.type = "select";
                        var options = d3.querySelectorAll("option");
                        [].forEach.call(options, function(d4, i4) {
                            tdObj.options.push(d4.textContent);
                            if (d4.selected) {
                                tdObj.select = d4.textContent;
                            }
                        })
                    } else if (d3.querySelectorAll("input[type='text']").length > 0 && d3.querySelectorAll("img").length == 0) {
                        tdObj.type = "input";
                        tdObj.text = d3.querySelector("input[type='text']").value;
                    } else if (d3.querySelectorAll("input[type='checkbox']").length > 0) {
                        tdObj.type = "checkbox";
                        if (d3.querySelector("input[type='checkbox']").checked) {
                            tdObj.select = "true"
                        } else {
                            tdObj.select = "false"
                        }
                    } else if (d3.querySelectorAll("img").length == 1 && d3.querySelector("img").getAttribute("alt").indexOf("删除") !== -1) {
                        tdObj.type = "delete"
                    } else if (d3.querySelectorAll("img").length == 1 && d3.querySelector("img").getAttribute("alt").indexOf("添加") !== -1) {
                        tdObj.type = "add"
                    } else if (d3.querySelectorAll("a").length > 0 && d3.querySelectorAll("img").length == 0) {
                        tdObj.type = "a";
                        tdObj.text = d3.querySelector("a").textContent;
                    } else {
                        tdObj.type = "text";
                        tdObj.text = d3.textContent.trim();
                    }
                    trArr.push(tdObj)
                });
                data.content.push(trArr);
            });
            return data;
            // }else{
            //   return "elem里不止一个table或者elem有不止两个tr";
            // }
        } else {
            return "elem不存在";
        }
    }
    /*调用场景：提示框 elem为role="alertdialog"*/
    function _alert(elem) {
        var data = {
            title: "",
            content: "",
            button: []
        }
        if (elem.querySelector(".PTPOPUP_TITLE")) {
            data.title = elem.querySelector(".PTPOPUP_TITLE").textContent.trim();
        }
        if (elem.querySelector("#alertmsg")) {
            data.content = elem.querySelector("#alertmsg").textContent.trim();
        }
        // if(elem.querySelector("#alertbutton")){
        //   var buttons=elem.querySelector("#alertbutton").querySelectorAll("input");
        //   for(var n=0;n<buttons.length;n++){
        //     data.button.push(buttons[n].value)
        //   }
        // }
        if (elem.querySelectorAll(".PSPUSHBUTTON")) {
            var btns = elem.querySelectorAll(".PSPUSHBUTTON");
            [].forEach.call(btns, function(item, index) {
                data.button.push(item.querySelector("input").value);
            })
        }
        return data;
    }
})(window, ysp);