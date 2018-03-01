/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;

        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			exports: {},
            /******/ 			id: moduleId,
            /******/ 			loaded: false
            /******/ 		};

        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports) {

        "use strict";

        /**
         * 销售总览
         */
        // table的展开和收起点击事件
        var tr_minH = 7;
        window.displayTable = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 7.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("收起");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("展开");
            }
        };
        
        window.displayTable2 = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 5.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("收起");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("展开");
            }
        };

        function tableSH(id, len) {
            var table_minHeight = parseInt($("#" + id).find("thead th").height()) + parseInt($("#" + id).find("tbody td").height()) * len;

            if ($("#" + id).find("tbody tr").length <= len) {
//				console.log("tableSH--1");
                $("#"+id).parent().parent().find(".content").height('auto');
                $("#"+id).parent().parent().find(".btn-display").hide();
            } else {
//				console.log("tableSH--2");
                $("#" + id).parent().height(table_minHeight).css("overflow", "hidden");
                $("#" + id).parent().next(".btn-display").show().addClass("Up");
            }
        }

        // 方法：数字千分位转换
        function toQfw(num) {
            var str_num = num.toString();
            var result = "";
            while (str_num.length > 3) {
                result = "," + str_num.slice(-3) + result;
                str_num = str_num.slice(0, str_num.length - 3);
            }
            return str_num + result;
        };

        // 获取地图数据最大值
        function getMaxValue(data) {
            var vals = [],
                MaxValue = 0;

            if (data.length == 0) {
                MaxValue = 1000;
            } else {
                for (var i = 0; i < data.length; i++) {
                    vals.push(data[i].value);
                }
                MaxValue = Math.max.apply(Math, vals);
            }
            return MaxValue;
        }

        function numToShow(num) {
            var visualMaxUnit = '',
                oMax = 0,
                arr = [];
            var numStr = num.toString();
            var numLen = numStr.length;
            var tempNum = numStr.substring(0, 1);

            numStr = tempNum * Math.pow(10, numLen - 1);
            oMax = parseInt(numStr);

            if (numLen > 0 && numLen < 5) {
                visualMaxUnit = oMax;
            } else if (numLen >= 5 && numLen < 9) {
                visualMaxUnit = oMax / Math.pow(10, 4) + "万";
            } else if (numLen >= 9) {
                visualMaxUnit = oMax / Math.pow(10, 9) + "亿";
            }

            arr.push(oMax);
            arr.push(visualMaxUnit);
            return arr;
        }

        $(function () {

            // 为适配不同分辨率，动态计算高度
            var mapW = $(".spaceDimen .chart").width();
            var mapH = $(".spaceDimen .chart").height(mapW * 0.84);
            var barLineW = $(".timeDimen .trend").width();
            var barLineH = $(".timeDimen .trend").height(barLineW * 0.5);

            //右边与左边对齐，超出部分滚动条
            var leftH = $(".lefth").height();
            var rightHu = $(".businessDimen .u-title").height();
            var rightH1 = $('.businessDimen:nth-child(1)').height();
            var rightH3 = leftH - rightHu - rightH1 - 48;
            $('.businessDimen:nth-child(2) .m-box').css("max-height", rightH3);
            $('.businessDimen:nth-child(2) .m-box').css("overflow-y", "scroll");

            $(".m-body").height(parseInt($("body").height()) - parseInt($(".m-body").css("top")) - 10);

            // 初始化当前日期
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }

            laydate({
                elem: '#selDay',
                // min: laydate.now(-1), //-1代表昨天，-2代表前天，以此类推
                max: laydate.now(), //+1代表明天，+2代表后天，以此类推
                choose: function(datas){ //选择日期完毕的回调
                	$("#date").text($("#selDay").val());
                    init();
                }
            });
            
            $("#orderLogic").change(function(){
            	$("#orderLogic_hidden").text($("#orderLogic").val());
                init();
            });
            
            $("#cycleType").change(function(){
            	$("#cycleType_hidden").text($("#cycleType").val());
                init();
            });
            
            init();
            
            //月度趋势图控件
            lineBarTag();
        });

        function init() {
        	
        	//订单取数逻辑
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// 周期类型：本日,本周,本月
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
        	// 初始化当前日期
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            
        	// 当前的月份
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
          
          //后添加的逻辑，修改时间显示问题
          	//后添加的逻辑，修改时间显示问题
          	var selDate = $("#selDay")[0].value;
            var newDate = date.getFullYear() + '-' + month + '-' + strDate;
          	var oldDate = $("#date").text();
          	if(selDate == "" && oldDate == ""){
              $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            }
            if(selDate == "" && oldDate !=""){
              $("#selDay").val(oldDate);
            }
            if(selDate != "" && selDate != newDate){
              $("#selDay").val(selDate);
            }
            
            //面包屑导航
        	breadcrumb("业务人员","saler");
            
            var orderLogic = $("#orderLogic").val();
        	var cycleType = $("#cycleType").val();
            var date = $("#selDay").val();
            
            var configType = $("#configType").text();
            var loginName = $("#loginName").text();
            var encoder = $("#encoder").text();
            var type = $("#type").text();
            
            var branchName = $("#branchName").text();
            var projectName = $("#projectName").text();
            var bizUnitName = $("#bizUnitName").text();
            var officeName = $("#officeName").text();
            var salerName = $("#salerName").text();
            
            if("day"==cycleType)
        		$("#tren").html("日别趋势图");
        	else if("week"==cycleType)
        		$("#tren").html("周别趋势图");
        	else if("month"==cycleType)
        		$("#tren").html("月度趋势图");
            
            initTags(null);

            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName),
                async: false,
                success: function (response) {
                    //console.log(response);

                    /*$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt);
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt);
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt);
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt);*/
                	
                	$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt.toFixed(2));
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt.toFixed(2));
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt.toFixed(2));
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt.toFixed(2));

                    // 全国地图
                    var mapDatas = response.cityValues;
                    // 省份名称
                    //var provinceName = response.provinceName;
                    var BDmapName = response.provinceName;
                    var BDdatas = response.geoInfos;
                    
                    // 获取百度地图
                    if(BDmapName && BDdatas && BDdatas.length>0) {
                        getBDMap(BDmapName, BDdatas, "map");
                    } else {
                        getBDMap(BDmapName, [], "map");
                    }

                    // 月度趋势图
                    var LineDatas = [{
                        name: '销量',
                        data: response.trenQtys
                    }, {
                        name: '销售额',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                    // 事业部表格
                    var bizUnits = response.department;
                    var positionVersion = $("#positionVersion").text();
                    if(bizUnits) {
                    	$("#bizUnitTable").empty();
                    	bizUnits = departmentbak(bizUnits);
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < bizUnits.length; i++) {
                            if(bizUnits[i].level==1){
                            	firstLevel.push(bizUnits[i]);
                            }else{
                            	secondLevel.push(bizUnits[i]);
                            }
                        }
                        
	                    for (var i = 0; i < firstLevel.length; i++) {
	                        html += '<div class="businessDimen">';
	                        html += '    <div class="u-title">';
	                        html += '        <i class="icon-line"></i>';
	                        html += '        <h2>'+firstLevel[i].department+'</h2>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
	                        html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '            <table';
	                        html += '        </div>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table u-table-b" id="sale-table' + i + '">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th>项目</th><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '                <tbody>';
	                        	
	                        for (var j = 0; j < secondLevel.length; j++) {
	                        	if(secondLevel[j].department==firstLevel[i].department){
	                        		var url = getLink("projectName",secondLevel[j].projectName,"07");
	                        		html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
	                        	}
	                        }
	                        html += '                </tbody>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
	                        html += '    </div>';
	                        html += '</div>';
	                    }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>机型销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        /*html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';*/
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                    // 项目表格
                    var projectName = response.projectName;
                    if(projectName) {
                    	$("#bizUnitTable").empty();
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < projectName.length; i++) {
                            if(projectName[i].level==1){
                            	firstLevel.push(projectName[i]);
                            }else{
                            	secondLevel.push(projectName[i]);
                            }
                        }
                        for (var i = 0; i < firstLevel.length; i++) {
                        	html += '<div class="businessDimen">';
                        	html += '    <div class="u-title">';
                        	html += '        <i class="icon-line"></i>';
                        	html += '        <h2>'+firstLevel[i].projectName+'</h2>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
                        	html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName)
                        		    html += '        <tr><td>'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);

                    
                    // 机型表格
                    var models = response.modelName;
                    $("#modelTable").empty();
                    if(models) {
                        for (var i = 0; i < models.length; i++) {
                            var html = '<tr><td>' + models[i].name + '</td><td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt + '</td></tr>';
                            $("#modelTable").append(html);
                        }
                    }
                    tableSH("model-table", tr_minH-2);
                    
                    // 客户表格
                    var customerName = response.customerName;
                    $("#custTable").empty();
                    if(customerName) {
                        for (var i = 0; i < customerName.length; i++) {
                            var html = '<tr><td>' + customerName[i].name + '</td><td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt + '</td></tr>';
                            $("#custTable").append(html);
                        }
                    }
                    tableSH("cust-table", tr_minH-2);
                    
                    // 门店表格
                    /*var storeName = response.storeName;
                    $("#storeTable").empty();
                    if(storeName) {
                        for (var i = 0; i < storeName.length; i++) {
                            var html = '<tr><td><a href="#" title="' + storeName[i].name + '">' + storeName[i].name + '</a></td><td>' + storeName[i].reachQty + '</td><td>' + storeName[i].reachAmt + '</td></tr>';
                            $("#storeTable").append(html);
                        }
                    }
                    tableSH("store-table", 10);*/
                    
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

        }
        
      
      	window.timeSaleInit = function() {
        	
        	//订单取数逻辑
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// 周期类型：本日,本周,本月
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
        	// 初始化当前日期
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            
        	// 当前的月份
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            
            //面包屑导航
        	breadcrumb("业务人员","saler");
            
            var orderLogic = $("#orderLogic").val();
        	var cycleType = $("#cycleType").val();
            var date = $("#selDay").val();
            
            var configType = $("#configType").text();
            var loginName = $("#loginName").text();
            var encoder = $("#encoder").text();
            var type = $("#type").text();
            
            var branchName = $("#branchName").text();
            var projectName = $("#projectName").text();
            var bizUnitName = $("#bizUnitName").text();
            var officeName = $("#officeName").text();
            var salerName = $("#salerName").text();
            
            if("day"==cycleType)
        		$("#tren").html("日别趋势图");
        	else if("week"==cycleType)
        		$("#tren").html("周别趋势图");
        	else if("month"==cycleType)
        		$("#tren").html("月度趋势图");
            
            initTags(null);

            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName),
                async: false,
                success: function (response) {
                    //console.log(response);

                    /*$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt);
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt);
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt);
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt);*/
                	
                	$("#dayQty").html(response.dayQty);
                    $("#dayAmt").html(response.dayAmt.toFixed(2));
                    $("#monthQty").html(response.monthQty);
                    $("#monthAmt").html(response.monthAmt.toFixed(2));
                    $("#weekQty").html(response.weekQty);
                    $("#weekAmt").html(response.weekAmt.toFixed(2));
                    $("#yearQty").html(response.yearQty);
                    $("#yearAmt").html(response.yearAmt.toFixed(2));

                    // 全国地图
                    var mapDatas = response.cityValues;
                    // 省份名称
                    //var provinceName = response.provinceName;
                    var BDmapName = response.provinceName;
                    var BDdatas = response.geoInfos;
                    
                    // 获取百度地图
                    if(BDmapName && BDdatas && BDdatas.length>0) {
                        getBDMap(BDmapName, BDdatas, "map");
                    } else {
                        getBDMap(BDmapName, [], "map");
                    }

                    // 月度趋势图
                    var LineDatas = [{
                        name: '销量',
                        data: response.trenQtys
                    }, {
                        name: '销售额',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                    // 事业部表格
                    var bizUnits = response.department;
                    var positionVersion = $("#positionVersion").text();
                    if(bizUnits) {
                    	$("#bizUnitTable").empty();
                    	bizUnits = departmentbak(bizUnits);
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < bizUnits.length; i++) {
                            if(bizUnits[i].level==1){
                            	firstLevel.push(bizUnits[i]);
                            }else{
                            	secondLevel.push(bizUnits[i]);
                            }
                        }
                        
	                    for (var i = 0; i < firstLevel.length; i++) {
	                        html += '<div class="businessDimen">';
	                        html += '    <div class="u-title">';
	                        html += '        <i class="icon-line"></i>';
	                        html += '        <h2>'+firstLevel[i].department+'</h2>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
	                        html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '            <table';
	                        html += '        </div>';
	                        html += '    </div>';
	                        html += '    <div class="m-box">';
	                        html += '        <div class="table-content">';
	                        html += '            <table class="table u-table-b" id="sale-table' + i + '">';
	                        html += '        	     <thead>';
	                        html += '                    <tr><th>项目</th><th>销量（台）</th><th>销售额（万）</th></tr>';
	                        html += '                </thead>';
	                        html += '                <tbody>';
	                        	
	                        for (var j = 0; j < secondLevel.length; j++) {
	                        	if(secondLevel[j].department==firstLevel[i].department){
	                        		var url = getLink("projectName",secondLevel[j].projectName,"07");
	                        		html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
	                        	}
	                        }
	                        html += '                </tbody>';
	                        html += '            </table>';
	                        html += '        </div>';
	                        html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
	                        html += '    </div>';
	                        html += '</div>';
	                    }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>机型销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        
                        /*html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>门店销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="store-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>门店</th><th>销量</th><th>销售额</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="storeTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';*/
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                    // 项目表格
                    var projectName = response.projectName;
                    if(projectName) {
                    	$("#bizUnitTable").empty();
                    	var firstLevel = [];
                    	var secondLevel = [];
                    	var html = "";
                        for (var i = 0; i < projectName.length; i++) {
                            if(projectName[i].level==1){
                            	firstLevel.push(projectName[i]);
                            }else{
                            	secondLevel.push(projectName[i]);
                            }
                        }
                        for (var i = 0; i < firstLevel.length; i++) {
                        	html += '<div class="businessDimen">';
                        	html += '    <div class="u-title">';
                        	html += '        <i class="icon-line"></i>';
                        	html += '        <h2>'+firstLevel[i].projectName+'</h2>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th><font size="3" color="red">'+firstLevel[i].qty+'</font></th><th><font size="3" color="red">'+firstLevel[i].amt.toFixed(2)+'</font></th></tr>';
                        	html += '                    <tr><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>机型</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName)
                        		    html += '        <tr><td>'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>展开</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>客户销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="cust-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>客户</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="custTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '    </div>';
                        html += '</div>';
                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);

                    
                    // 机型表格
                    var models = response.modelName;
                    $("#modelTable").empty();
                    if(models) {
                        for (var i = 0; i < models.length; i++) {
                            var html = '<tr><td>' + models[i].name + '</td><td>' + models[i].reachQty + '</td><td>' + models[i].reachAmt + '</td></tr>';
                            $("#modelTable").append(html);
                        }
                    }
                    tableSH("model-table", tr_minH-2);
                    
                    // 客户表格
                    var customerName = response.customerName;
                    $("#custTable").empty();
                    if(customerName) {
                        for (var i = 0; i < customerName.length; i++) {
                            var html = '<tr><td>' + customerName[i].name + '</td><td>' + customerName[i].reachQty + '</td><td>' + customerName[i].reachAmt + '</td></tr>';
                            $("#custTable").append(html);
                        }
                    }
                    tableSH("cust-table", tr_minH-2);
                    
                    // 门店表格
                    /*var storeName = response.storeName;
                    $("#storeTable").empty();
                    if(storeName) {
                        for (var i = 0; i < storeName.length; i++) {
                            var html = '<tr><td><a href="#" title="' + storeName[i].name + '">' + storeName[i].name + '</a></td><td>' + storeName[i].reachQty + '</td><td>' + storeName[i].reachAmt + '</td></tr>';
                            $("#storeTable").append(html);
                        }
                    }
                    tableSH("store-table", 10);*/
                    
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });

        }	
      
        // 配置：百度地图
        function getBDMap(mapName, datas, Id) {
            console.log(mapName);
            console.log(datas);
						document.getElementById("map").setAttribute('option',JSON.stringify(datas));//2018/02/11
            document.getElementById("map").setAttribute('optionName',mapName);

            var BDmap = new BMap.Map(Id, {
                enableMapClick: false
            }); // 创建Map实例


            BDmap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            if(datas && datas.length>0){
                BDmap.centerAndZoom(new BMap.Point(datas[0].value[0], datas[0].value[1]), 11);
            } else {
                BDmap.centerAndZoom(mapName, 10); // 初始化地图,用城市名设置地图中心点
            }

            if(datas && datas.length>0) {
                for (var i = 0; i < datas.length; i++) {
                    var point = new BMap.Point(datas[i].value[0], datas[i].value[1]);
                    var newIcon;
                    if(datas[i].type=='person'){
                    	newIcon = new BMap.Icon("/ptDataShow/images/mark-person.png", new BMap.Size(24, 24));
                    }else if(datas[i].type=='store'){
                    	newIcon = new BMap.Icon("/ptDataShow/images/mark-store.png", new BMap.Size(24, 24));
                    }else if(datas[i].type=='client'){
                        newIcon = new BMap.Icon("/ptDataShow/images/mark-client.png", new BMap.Size(24, 24));
                    }
                    var marker = new BMap.Marker(point, {
                        icon: newIcon
                    });
                    BDmap.addOverlay(marker);
                    var sContent = inforContent(datas, i);

                    var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象(注：为去掉“隐藏百度地图默认图片样式”,需要先初始化下，此代码务必保留！)

                    // 监听点击事件
                    addClickHandler(BDmap, sContent, marker, point);
                }
            }

        }
        
       // 百度地图信息窗内容
        function inforContent(datas, index) {
            var content = '<div class="popup-bd"><div class="box"><h6 class="title" title="' + datas[index].name + '">' + datas[index].name + '</h6><div class="address clearfix"><h6><i class="icon-markads"></i>地址：</h6>' + '<p title="' + datas[index].address + '">' + datas[index].address + '</p></div>' + '<div class="content"><div class="one a"><span>销量：</span><b>' + toQfw(datas[index].salesNums) + '</b></div>' + '<div class="one b"><span>金额：</span><b>' + toQfw(datas[index].sumNums) + '</b>' + '</div></div></div></div>';
            return content;
        }

        function addClickHandler(BDmap, content, marker, point) {
            marker.addEventListener("click", function (e) {
                var infoWindow = new BMap.InfoWindow(content); // 创建信息窗口对象
                BDmap.openInfoWindow(infoWindow, point); // 开启信息窗口
                // 隐藏百度地图默认图片样式
                $("img[src='http://api0.map.bdimg.com/images/iw3.png']").hide();
                $("img[src='http://api0.map.bdimg.com/images/iw_close1d3.gif']").hide();
            });
        }

        // 配置：折线图
        function getLines(datas, Id) {
            var chart = echarts.init(document.getElementById(Id));
            window.onresize = chart.resize;

            var legendDatas = [],
                timeDatas = [],
                salesValReach = [],
                sumValReach = [];

            for (var i in datas) {
                legendDatas.push({ name: datas[i].name, icon: 'rect' });
            }
            if(datas[0].data){
	            for (var j = 0; j < datas[0].data.length; j++) {
	                timeDatas.push(datas[0].data[j].time);
	                salesValReach.push(datas[0].data[j].value);
	                sumValReach.push(datas[1].data[j].value);
	            }
            }

            var option = {
                color: ["#2c81ff", "#ed9429"],
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    show: true,
                    containLabel: true,
                    top: 60,
                    left: 30,
                    right: 30,
                    bottom: 30
                },
                legend: {
                    itemGap: 40, //图例每项之间的间隔
                    itemWidth: 18,
                    itemHeight: 5,
                    top: 10,
                    right: 20,
                    data: legendDatas
                },
                xAxis: [{
                    type: 'category',
                    data: timeDatas,
                    boundaryGap: false, //x轴刻度从原点开始
                    axisPointer: {
                        type: 'line'
                    },
                    axisTick: { //坐标轴刻度相关设置。
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#dfdfdf'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: legendDatas[0].name,
                    //min: 4300,
                    min: 0,
                    splitNumber: 9,
                    position: 'left',
                    axisTick: { //是否显示坐标轴刻度
                        show: false
                    },
                    axisLine: {
                        lineStyle: { //坐标轴线的颜色
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: { //坐标轴刻度相关设置
                            color: '#666'
                        }
                    },
                    splitLine: { //坐标轴在grid区域中的分隔线
                        lineStyle: {
                            color: '#dfdfdf'
                        }
                    }
                }, {
                    type: 'value',
                    name: legendDatas[1].name,
                    //min: 280,
                    //max: 370,
                    min: 0,
                    splitNumber: 9,
                    position: 'right',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#dfdfdf'
                        }
                    }
                }],
                series: [{
                    name: legendDatas[0].name,
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    yAxisIndex: 0,
                    label: {
                        normal: {
                            position: 'top',
                            textStyle: {
                                color: '#2c81ff'
                            }
                        }
                    },
                    data: salesValReach
                }, {
                    name: legendDatas[1].name,
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    label: {
                        normal: {
                            position: 'top',
                            textStyle: {
                                color: '#ed9429'
                            }
                        }
                    },
                    data: sumValReach
                }]
            };

            //chart.setOption(option);
          	document.getElementById("lines").setAttribute('option',JSON.stringify(option));//2018/02/11
        }

        /***/ })
    /******/ ]);
//# sourceMappingURL=headLeader.map