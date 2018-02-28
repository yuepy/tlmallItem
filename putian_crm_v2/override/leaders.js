debugger;
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
                $("#"+id).parent().parent().find(".table-content").height('auto');
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
            $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);

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
          
          //后加功能，修改时间显示问题
          	var selDate = $("#selDay")[0].value;
            var newDate = date.getFullYear() + '-' + month + '-' + strDate;
          	var oldDate = $("#date").text();
          	if(selDate == "" && oldDate == ""){
              $("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
            }
            if(selDate == "" && oldDate !=""){
              $("#selDay").val(oldDate);
            }
          	if(selDate == newDate && oldDate != ""){
              $("#selDay").val(oldDate);
            }
            if(selDate != "" && selDate != newDate){
              $("#selDay").val(selDate);
            }
            //面包屑导航
        	breadcrumb("全国","leader");
            
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
                    var mapDatas = response.province;
                    var mapTotal;
                    if(response.hqReachQty && response.hqReachAmt) {
                        mapTotal = [{ name: "销量", value: response.hqReachQty }, { name: "销售额", value: response.hqReachAmt }];
                    }
                    $(".u-box-infors").remove();
                    if(mapDatas) {
                        getMap(mapDatas, mapTotal, "map");
                    } else {
                        getMap([], mapTotal, "map");
                    }

                    // 趋势图
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
                    $("#bizUnitTable").empty();
                    if(bizUnits) {
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
                        			var url = getLink("projectName",secondLevel[j].projectName,"01");
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
                        html += '        <h2>分公司销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="bizUnit-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>分公司</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
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
                        html += '        <h2>分公司销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="project-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>分公司</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);

                    // 分公司表格
                    var branches = response.branchName;
                    $("#branchTable").empty();
                    if(branches) {
                        for (var i = 0; i < branches.length; i++) {
                        	var url = getLink("branchName",branches[i].name,"04");
                            var html = '<tr><td><a href="'+url+'" title="' + branches[i].name.substr(11) + '">' + branches[i].name.substr(11) + '</a></td><td>' + branches[i].reachQty + '</td><td>' + branches[i].reachAmt.toFixed(2) + '</td></tr>';
                            $("#branchTable").append(html);
                        }
                    }
                    
                    tableSH("bizUnit-table", tr_minH-2);
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
        	breadcrumb("全国","leader");
            
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
                    var mapDatas = response.province;
                    var mapTotal;
                    if(response.hqReachQty && response.hqReachAmt) {
                        mapTotal = [{ name: "销量", value: response.hqReachQty }, { name: "销售额", value: response.hqReachAmt }];
                    }
                    $(".u-box-infors").remove();
                    if(mapDatas) {
                        getMap(mapDatas, mapTotal, "map");
                    } else {
                        getMap([], mapTotal, "map");
                    }

                    // 趋势图
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
                    $("#bizUnitTable").empty();
                    if(bizUnits) {
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
                        			var url = getLink("projectName",secondLevel[j].projectName,"01");
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
                        html += '        <h2>分公司销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="bizUnit-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>分公司</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
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
                        html += '        <h2>分公司销量与销售额</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="project-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>分公司</th><th>销量（台）</th><th>销售额（万）</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>展开</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        $("#bizUnitTable").append(html);
                        //console.log(html);
                    }
                    tableSH("sale-table0", tr_minH);
                    tableSH("sale-table1", tr_minH);
                    tableSH("sale-table2", tr_minH);
                    tableSH("sale-table3", tr_minH);
                    tableSH("sale-table4", tr_minH);

                    // 分公司表格
                    var branches = response.branchName;
                    $("#branchTable").empty();
                    if(branches) {
                        for (var i = 0; i < branches.length; i++) {
                        	var url = getLink("branchName",branches[i].name,"04");
                            var html = '<tr><td><a href="'+url+'" title="' + branches[i].name.substr(11) + '">' + branches[i].name.substr(11) + '</a></td><td>' + branches[i].reachQty + '</td><td>' + branches[i].reachAmt.toFixed(2) + '</td></tr>';
                            $("#branchTable").append(html);
                        }
                    }
                    
                    tableSH("bizUnit-table", tr_minH-2);
                },
                error: function () {
                    console.log("Error:获取后台数据失败！");
                }
            });
        }
      
        // 配置：中国地图
        function getMap(datas, totalDatas, Id) {
            var chart = echarts.init(document.getElementById(Id));
            window.onresize = chart.resize;

            var maxNum = getMaxValue(datas);
            var visual = numToShow(maxNum);

            $("#" + Id).parent().find(".u-visualmap").remove();
            $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>销量</h6></div>');

            $("#" + Id).parent().find(".totalContent").remove();
            if(totalDatas){
                $("#" + Id).parent().append('<div class="u-box-infors">' + '<div class="title">太力总部</div>' + '<div class="content">' + '<div class="a"><span>销量：</span><b>' + toQfw(totalDatas[0].value) + ' 台</b></div>' + '<div class="b"><span>销售额：</span><b>' + toQfw(totalDatas[1].value) + ' 万</b></div>' + '</div></div>');
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    padding: 0,
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function formatter(params) {
                        try {
                            var tip = '<div class="m-tooltip">' + '<div class="title">' + params.data.company + '</div>' + '<div class="content">' + '<div class="a"><span>销量</span><b>' + toQfw(params.value) + '</b></div>' + '<div class="b"><span>销售额</span><b> ' + toQfw(params.data.sum) + '</b></div></div></div>';
                            return tip;
                        } catch (e) {
                            return;
                        }
                    }
                },
                visualMap: {
                    type: 'piecewise',
                    splitNumber: 4, // 实际为5色块，maxOpen会自动加载一个模块，故4色块；
                    pieces: [{ gt: visual[0] }, { gt: visual[0] * 0.25, lte: visual[0] }, { gt: visual[0] * 0.1, lte: visual[0] * 0.25 }, { gt: 1, lte: visual[0] * 0.1 }, { lt: 1 }],
                    maxOpen: true,
                    itemWidth: 25,
                    itemHeight: 13,
                    itemGap: 2,
                    left: '8%',
                    bottom: '6%',
                    inRange: {
                        color: ['#aae6fa', '#78dcfa', '#50c8fa', '#01aafa', '#116ed8']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: "chinaMap",
                    type: 'map',
                    mapType: 'china',
                    zoom: 1.1,
                    roam: false,
                    left: 'center',
                    top: '20%',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            borderColor: '#fff',
                            shadowColor: 'rgba(142, 47, 0, 0.75)',
                            shadowBlur: 3,
                            areaColor: null
                        }
                    },
                    data: datas
                }]
            };

            // 载入配置显示地图
            chart.setOption(option);
            document.getElementById("map").setAttribute('option',JSON.stringify(option));//2018/02/09
            chart.on('click', function(params) {
                //console.log(params.name);
                if(params.name == '' || '台湾省' == params.name){
                    return;
                }
                var loginName = $("#loginName").text();
                var encoder = $("#encoder").text();
                var cycleType = $("#cycleType").val();
                var orderLogic = $("#orderLogic").val();
                var projectName = $("#projectName").text();
                
                var link = "/ptDataShow/salesAll/salesOverview?type=04&branchName=" + encodeURIComponent(params.name) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + '&cycleType='+ cycleType + '&orderLogic='+ orderLogic + '&projectName=' + encodeURIComponent(projectName);
                window.location.href = link;
            });
        }

        

        /***/ })
    /******/ ]);
//# sourceMappingURL=headLeader.map