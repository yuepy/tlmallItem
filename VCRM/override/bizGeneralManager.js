/*
??????.wrapper(body??????????div);
?????????DOM??????body??
???????DOM id : 
???????
todayQty\todayAmt\monthQty\monthAmt\yearQty\yearAmt\
*/
debugger;
window.addEventListener('DOMContentLoaded', function() {
  var wrapperOrigin = document.querySelector('.g-main');
  var wrapper = document.createElement('div');
  if (wrapper) {
    wrapper.style.background = '#F7F7F7';
    wrapper.style.height = '100vh';
    wrapper.style.padding = '0';
    var href = wrapper.ownerDocument.defaultView.document.location.href;
    //????????????.wrapper???html??
    if (href && href.indexOf('configType') != -1) {
      wrapperOrigin.style.display = "none";
      /*
      // ??style
      */
      var style = document.createElement('style');
      style.setAttribute("type", "text/css");
      var cssString = ".fakeWrapper{background: #fff; border-radius: 8px; padding: 5px 0 10px 0;}" +
        ".fakeWrapper:last-child{margin-top: 10px; border-radius: 8px;}" +
        ".headerSum{display: flex; width: 30%; margin: 0 auto;padding: 10px}"+
        ".fakeWrapper:first-child .headerSum i{display: block;height: 20px;width: 20px;background-size: 19px;background-repeat: no-repeat;padding-right: 5px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAABHlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu1Hlu0AAACFQYDnAAAAYnRSTlMAAhw+V2p3fXx2aFU7GgEPRHOAcEEMCk17RwgtJgNMf0YFW1RaUkIkenEGXQ5eeXIwaXgiMhE9G04XUGAzVmNnDWEELEMdGUUebikrJTcYPy80fnQUZTxiEgsJSRA6LihIa5XHcxwAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6ElEQVQ4y42VeVfaQBTFHyoJVAzkuoBYmgarBpWmQaG41K1utBX3LXb9/l+ik5AZkpiJ3r/mnPmdN3l33twQhZUZGR3LKmou/2a8MKGRTMWSjpAmp6YTsZmyipgqs9Xn3FweCdLfxrDaOyTLeB/5VLMOqeZroXofkKKFYc0yUrUo+kjnYCwFviT2C0vxZbBlY9kHJQ2vmP5uQxy+qkpObJoC/OgZX5J+20qGgygQabaMUz+JinCIRmIdilVrjbR1MwDRpk6Ea3zu8tUG1TaxZQbgNn0JcztssDp+0d09qjZhYz/wrkvZ8GUdEOv0aw6oL1Mxi/E1sbVPQ7eNjkYT9qFGR/lyho51nGinYrNHwkXrG9H3CpuWA5oh+mHhjGgI6gK0+6SdG9bFFnYYd3kFFKNgcPT1NJnzUDe8kevdlDybImCPN+PQ3i3zjjl8B1whexcD77k9zrENhYNqszoXA7vc8JZldEoc7NcoDm6LK2RNC3AwzBHwgQ9Fq09poCPGbLCSggUxuOmgP7iDpzD56LqbqDy020/AT9f9BZy6Ln92i2mPKzx8g8dFv1/g+HN9MQAOh5FST+NCkfLqkGI1ZafHYs8zTkni9D+viubc34Ro9sL+JBL2DUnY+7+Po9Gxf4qqKs6z38d/wClxQWUiY5EAAAAASUVORK5CYII=);}"+   
        ".fakeWrapper:first-child .headerSum span{font-size: 18px;font-weight:500;color: #000000}"+
         
        ".header{display: flex;justify-content: space-around;align-items: center;padding: 10px 0px 20px 0px}" +
        ".fakeWrapper .header >span:first-child{font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #4796ed}" +
        ".fakeWrapper .header >span:nth-child(2){font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #e7350d}" +
         ".fakeWrapper .header >span:last-child{font-size: 12px;color:#fff;border-radius:10px ;padding:4px 10px;display:flex;flex-direction: column;text-align: center;background: #ffbe00}" + 
        ".content > div{display: flex; justify-content: flex-start; align-items: center; padding-bottom: 20px}" +
        ".content-item{display: flex; flex-direction: column; align-items: center; width: 33%}" +
  
        ".fakeWrapper:last-child .content-item:first-child h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#4796ed;}" +
        ".fakeWrapper:last-child .content-item:nth-child(2) h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#e7350d;}" +
        ".fakeWrapper:last-child .content-item:last-child h2{font-size: 18px; text-align: center; font-weight: 400;padding-bottom:10px;color:#33333;}" +  
        ".content-item span{font-size: 10px; color: #999; display: block; text-align: center}" +
        "#cardIframe1{-webkit-border-radius:none;border-radius:none;-webkit-box-shadow:none;box-shadow:none;}";
      var cssText = document.createTextNode(cssString);
      style.appendChild(cssText);
      document.head.appendChild(style);
      //???????????
      var fakeWrapper_sales = document.createElement('div');
      fakeWrapper_sales.className = 'fakeWrapper';
      wrapper.appendChild(fakeWrapper_sales);
      //??"????"??DOM
      var headerSum = document.createElement('div');
      headerSum.className = 'headerSum'
      var headerSum_i = document.createElement('i');
      var headerSum_span = document.createElement('span');
      var headerSum_text = document.createTextNode('????');
      headerSum_span.appendChild(headerSum_text);
      headerSum.appendChild(headerSum_i);
      headerSum.appendChild(headerSum_span);
      fakeWrapper_sales.appendChild(headerSum);
      //??????DOM
      var header = document.createElement('div');
      header.className = 'header';
      var header_span = document.createElement('span');
      var header_span1 = document.createElement('span');
      var header_span2 = document.createElement('span');
 ? ? ?var header_text = document.createTextNode('????');
 ? ? ?var header_text1 = document.createTextNode('????');
 ? ? ?var header_text2 = document.createTextNode('????');
      //???????span?
      header_span.appendChild(header_text);
 ? ? ?header_span1.appendChild(header_text1);
      header_span2.appendChild(header_text2);
 ?    header.appendChild(header_span);
      header.appendChild(header_span1);
      header.appendChild(header_span2);
      //?????DOM???fakeWrapper_sales
      fakeWrapper_sales.appendChild(header);
      //??????
      var content = document.createElement('div');
      content.className = 'content';
      //??????div???content?????????
      var content_row_0 = document.createElement('div');
      content.appendChild(content_row_0);
      //??3?div?3?????content_row_0?
      //????
      var div0 = document.createElement('div');
      div0.className = 'content-item';
      var h20 = document.createElement('h2');
      h20.id = 'dayQty';
      var span0 = document.createElement('span');
      var span_text = document.createTextNode('??(?)');
      span0.appendChild(span_text);
      div0.appendChild(h20);
      div0.appendChild(span0);
      //????
      var div1 = document.createElement('div');
      div1.className = 'content-item';
      var h21 = document.createElement('h2');
      h21.id = 'weekQty';
      var span1 = document.createElement('span');
      var span_text = document.createTextNode('??(?)');
      span1.appendChild(span_text);
      div1.appendChild(h21);
      div1.appendChild(span1);
      //????
      var div2 = document.createElement('div');
      div2.className = 'content-item';
      var h22 = document.createElement('h2');
      h22.id = 'monthQty';
      var span2 = document.createElement('span');
      var span_text = document.createTextNode('??(?)');
      span2.appendChild(span_text);
      div2.appendChild(h22);
      div2.appendChild(span2);
      content_row_0.appendChild(div0);
      content_row_0.appendChild(div1);
      content_row_0.appendChild(div2);
      
      //??????div???content?????????
      var content_row_1 = document.createElement('div');
      content.appendChild(content_row_1);
      //??3?div?3?????content_row_1?
      //?????
      var divAmt0 = document.createElement('div');
      divAmt0.className = 'content-item';
      var h2Amt0 = document.createElement('h2');
      h2Amt0.id = 'dayAmt';
      var spanAmt0 = document.createElement('span');
      var span_text = document.createTextNode('???(??)');
      spanAmt0.appendChild(span_text);
      divAmt0.appendChild(h2Amt0);
      divAmt0.appendChild(spanAmt0);
      //?????
      var divAmt1 = document.createElement('div');
      divAmt1.className = 'content-item';
      var h2Amt1 = document.createElement('h2');
      h2Amt1.id = 'weekAmt';
      var spanAmt1 = document.createElement('span');
      var span_text = document.createTextNode('???(??)');
      spanAmt1.appendChild(span_text);
      divAmt1.appendChild(h2Amt1);
      divAmt1.appendChild(spanAmt1);
      //?????
      var divAmt2 = document.createElement('div');
      divAmt2.className = 'content-item';
      var h2Amt2 = document.createElement('h2');
      h2Amt2.id = 'monthAmt';
      var spanAmt2 = document.createElement('span');
      var span_text = document.createTextNode('???(??)');
      spanAmt2.appendChild(span_text);
      divAmt2.appendChild(h2Amt2);
      divAmt2.appendChild(spanAmt2);
      content_row_1.appendChild(divAmt0);
      content_row_1.appendChild(divAmt1);
      content_row_1.appendChild(divAmt2);
      
      //?????DOM???fakeWrapper_sales
      fakeWrapper_sales.appendChild(content);
      document.body.insertBefore(wrapper, wrapperOrigin);
    }
  }
}, false);
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
         * ????
         */
        // table??????????
        var tr_minH = 7;
        window.displayTable = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 7.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("??");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("??");
            }
        };
        
        window.displayTable2 = function (e) {
            var table_minHeight = parseInt($(".table thead th").height()) + parseInt($(".table tbody td").height()) * 5.5;

            if ($(e).hasClass("Up")) {
                //console.log("1");
                $(e).addClass("Down").removeClass("Up");
                $(e).siblings(".table-content").height("auto").css("overflow", "auto");
                $(e).find("span").text("??");
            } else if ($(e).hasClass("Down")) {
                //console.log("2");
                $(e).addClass("Up").removeClass("Down");
                $(e).siblings(".table-content").height(table_minHeight).css("overflow", "hidden");
                $(e).find("span").text("??");
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

        // ??????????
        function toQfw(num) {
            var str_num = num.toString();
            var result = "";
            while (str_num.length > 3) {
                result = "," + str_num.slice(-3) + result;
                str_num = str_num.slice(0, str_num.length - 3);
            }
            return str_num + result;
        };

        // ?????????
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
                visualMaxUnit = oMax / Math.pow(10, 4) + "?";
            } else if (numLen >= 9) {
                visualMaxUnit = oMax / Math.pow(10, 9) + "?";
            }

            arr.push(oMax);
            arr.push(visualMaxUnit);
            return arr;
        }

        $(function () {

            // ???????????????
            var mapW = $(".spaceDimen .chart").width();
            var mapH = $(".spaceDimen .chart").height(mapW * 0.84);
            var barLineW = $(".timeDimen .trend").width();
            var barLineH = $(".timeDimen .trend").height(barLineW * 0.5);

            //???????????????
            var leftH = $(".lefth").height();
            var rightHu = $(".businessDimen .u-title").height();
            var rightH1 = $('.businessDimen:nth-child(1)').height();
            var rightH3 = leftH - rightHu - rightH1 - 48;
            $('.businessDimen:nth-child(2) .m-box').css("max-height", rightH3);
            $('.businessDimen:nth-child(2) .m-box').css("overflow-y", "scroll");

            $(".m-body").height(parseInt($("body").height()) - parseInt($(".m-body").css("top")) - 10);

            // ???????
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
                // min: laydate.now(-1), //-1?????-2?????????
                max: laydate.now(), //+1?????+2?????????
                choose: function(datas){ //?????????
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
            
            //???????
            lineBarTag();
        });

        function init() {
        	
        	//??????
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// ???????,??,??
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
        	// ???????
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            
        	// ?????
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
          
          //???????????????
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
            
            //?????
            //breadcrumb("???","department");
            if($("#modelName").text()){
              breadcrumb("??","modelName");
            }else{
              breadcrumb("???","department");
            }
        	
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
            var modelName = $("#modelName").text().replace(/\+/g,'%2B');//??
            
            if("day"==cycleType)
        		$("#tren").html("?????");
        	else if("week"==cycleType)
        		$("#tren").html("?????");
        	else if("month"==cycleType)
        		$("#tren").html("?????");
          else if("year"==cycleType)
        		$("#tren").html("?????");
            
            initTags(null);
            
            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName)
                + "&modelName=" + encodeURIComponent(modelName),
                async: false,
                success: function (response) {
                    //console.log(response);

                    $("#dayQty").html(numChange(response.dayQty));
                    $("#dayAmt").html(toQfw_new(response.dayAmt.toFixed(2),true));
                    $("#monthQty").html(numChange(response.monthQty));
                    $("#monthAmt").html(toQfw_new(response.monthAmt.toFixed(2),true));
                    $("#weekQty").html(numChange(response.weekQty));
                    $("#weekAmt").html(toQfw_new(response.weekAmt.toFixed(2),true));
                    $("#yearQty").html(numChange(response.yearQty));
                    $("#yearAmt").html(toQfw_new(response.yearAmt.toFixed(2),true));

                    // ????
                    var mapDatas = response.province;
                    var mapTotal;
                    if(response.hqReachQty && response.hqReachAmt) {
                        mapTotal = [{ name: "??", value: response.hqReachQty }, { name: "???", value: response.hqReachAmt }];
                    }
                    $(".u-box-infors").remove();
                    if(mapDatas) {
                        getMap(mapDatas, mapTotal, "map");
                    } else {
                        getMap([], mapTotal, "map");
                    }

                    // ?????
                    var LineDatas = [{
                        name: '??(?)',
                        data: response.trenQtys
                    }, {
                        name: '???(??)',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                 // ?????
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
                        	html += '                    <tr><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].department==firstLevel[i].department){
                        			var url = getLink("projectName",secondLevel[j].projectName,"02");
                        			html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        		}
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>??</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>?????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="branch-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>???</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                 // ????
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
                        	html += '                    <tr><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName){
                              var url = getLink("modelName",secondLevel[j].modelName,"02");
                        			html += '<tr><td><a href="'+url+'" title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td>';
                              html += '<td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                              //html += '        <tr><td>'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                            }
                        		    
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>??</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>?????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="project-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>???</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
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
                    
                    // ????
                    var modelName = response.modelName;
                    $("#modelTable").empty();
                    if(modelName) {
                        // for (var i = 0; i < modelName.length; i++) {
                        //     var html = '<tr><td>' + modelName[i].name.substr(11) + '</td><td>' + modelName[i].reachQty + '</td><td>' + modelName[i].reachAmt + '</td></tr>';
                        //     $("#modelTable").append(html);
                        // }
                      for (var i = 0; i < modelName.length; i++) {
                        	var modelName_title = modelName[i].name;
                        	var nodelName_show = modelName_title;
                        	if(null != modelName_title && modelName_title.length>11){
                        		nodelName_show = modelName_title.substring(0,11)+"...";
                        	}
                        	var reachQty_num = Number(modelName[i].reachQty);
                        	var reachAmt_num = Number(modelName[i].reachAmt);
                        	if(reachQty_num !=0 && reachAmt_num != 0){
                        		var html = '<tr><td title="'+modelName_title+'">'+nodelName_show+'</td><td>' + modelName[i].reachQty + '</td><td>' + modelName[i].reachAmt + '</td></tr>';
                        		$("#modelTable").append(html);
                        	}
                        }
                    }
                    tableSH("model-table", tr_minH-2);
                    
                    // ?????
                    var branches = response.branchName;
                    $("#branchTable").empty();
                    if(branches) {
                        for (var i = 0; i < branches.length; i++) {
                        	var url = getLink("branchName",branches[i].name,"04");
                            var html = '<tr><td><a href="'+url+'" title="' + branches[i].name.substr(11) + '">' + branches[i].name.substr(11) + '</a></td><td>' + branches[i].reachQty + '</td><td>' + branches[i].reachAmt + '</td></tr>';
                            $("#branchTable").append(html);
                        }
                    }
                    tableSH("branch-table", tr_minH-2);
                  
                  	/**????*/
                    clickThSortCommon();
                    
                },
                error: function () {
                    console.log("Error:?????????");
                }
            });
        }
      
      
      	window.timeSaleInit = function() {
        	
        	//??????
        	if($("#orderLogic_hidden").text())
        		$("#orderLogic").val($("#orderLogic_hidden").text());
        	
        	// ???????,??,??
        	if($("#cycleType_hidden").text())
        		$("#cycleType").val($("#cycleType_hidden").text());
        	
        	// ???????
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            
        	// ?????
            // if($("#date").text())
            // 	$("#selDay").val($("#date").text());
            // else
            // 	$("#selDay").val(date.getFullYear() + '-' + month + '-' + strDate);
          
          //???????????????
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
            
            //?????
            //breadcrumb("???","department");
            if($("#modelName").text()){
              breadcrumb("??","modelName");
            }else{
              breadcrumb("???","department");
            }
        	
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
            var modelName = $("#modelName").text().replace(/\+/g,'%2B');//??
            
            if("day"==cycleType)
        		$("#tren").html("?????");
        	else if("week"==cycleType)
        		$("#tren").html("?????");
        	else if("month"==cycleType)
        		$("#tren").html("?????");
          else if("year"==cycleType)
        		$("#tren").html("?????");
            
            initTags(null);
            
            $.ajax({
                url: "/ptDataShow/salesAll/salesAllData?orderLogic="+ orderLogic +"&cycleType=" + cycleType + "&date=" + date + "&type=" + type + "&filter_userId=" + loginName + '&encoder=' + encoder
                + "&branchName=" + encodeURIComponent(branchName) + "&projectName=" + encodeURIComponent(projectName) + "&bizUnitName=" + encodeURIComponent(bizUnitName)
                + "&officeName=" + encodeURIComponent(officeName) + "&salerName=" + encodeURIComponent(salerName)
                + "&modelName=" + encodeURIComponent(modelName),
                async: false,
                success: function (response) {
                    //console.log(response);

                    $("#dayQty").html(numChange(response.dayQty));
                    $("#dayAmt").html(toQfw_new(response.dayAmt.toFixed(2),true));
                    $("#monthQty").html(numChange(response.monthQty));
                    $("#monthAmt").html(toQfw_new(response.monthAmt.toFixed(2),true));
                    $("#weekQty").html(numChange(response.weekQty));
                    $("#weekAmt").html(toQfw_new(response.weekAmt.toFixed(2),true));
                    $("#yearQty").html(numChange(response.yearQty));
                    $("#yearAmt").html(toQfw_new(response.yearAmt.toFixed(2),true));

                    // ????
                    var mapDatas = response.province;
                    var mapTotal;
                    if(response.hqReachQty && response.hqReachAmt) {
                        mapTotal = [{ name: "??", value: response.hqReachQty }, { name: "???", value: response.hqReachAmt }];
                    }
                    $(".u-box-infors").remove();
                    if(mapDatas) {
                        getMap(mapDatas, mapTotal, "map");
                    } else {
                        getMap([], mapTotal, "map");
                    }

                    // ?????
                    var LineDatas = [{
                        name: '??(?)',
                        data: response.trenQtys
                    }, {
                        name: '???(??)',
                        data: response.trenAmts
                    }];
                    getLines(LineDatas, "lines");

                 // ?????
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
                        	html += '                    <tr><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].department==firstLevel[i].department){
                        			var url = getLink("projectName",secondLevel[j].projectName,"02");
                        			html += '        <tr><td><a href="'+url+'" title="' + secondLevel[j].projectName + '">'+secondLevel[j].projectName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                        		}
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>??</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="model-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="modelTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>?????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="branch-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>???</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
                        html += '      </div>';
                        html += '</div>';
                        
                        $("#bizUnitTable").append(html);
                    }
                    
                 // ????
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
                        	html += '                    <tr><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '            <table';
                        	html += '        </div>';
                        	html += '    </div>';
                        	html += '    <div class="m-box">';
                        	html += '        <div class="table-content">';
                        	html += '            <table class="table u-table-b" id="sale-table' + i + '">';
                        	html += '        	     <thead>';
                        	html += '                    <tr><th>??</th><th>?????</th><th>??????</th></tr>';
                        	html += '                </thead>';
                        	html += '                <tbody>';
                        	
                        	for (var j = 0; j < secondLevel.length; j++) {
                        		if(secondLevel[j].projectName==firstLevel[i].projectName){
                              var url = getLink("modelName",secondLevel[j].modelName,"02");
                        			html += '<tr><td><a href="'+url+'" title="'+secondLevel[j].modelName+'">'+secondLevel[j].modelName+'</td>';
                              html += '<td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                              //html += '        <tr><td>'+secondLevel[j].modelName+'</td><td>'+secondLevel[j].qty+'</td><td>'+secondLevel[j].amt.toFixed(2)+'</td></tr>';
                            }
                        		    
                        	}
                        	html += '                </tbody>';
                        	html += '            </table>';
                            html += '        </div>';
                            html += '        <a href="javascript:;" class="btn-display" onclick="displayTable(this)"><span>??</span><i class="icon"></i></a>';
                            html += '    </div>';
                            html += '</div>';
                        }
                        
                        html += '<div class="businessDimen">';
                        html += '    <div class="u-title">';
                        html += '        <i class="icon-line"></i>';
                        html += '        <h2>?????????</h2>';
                        html += '    </div>';
                        html += '    <div class="m-box">';
                        html += '        <div class="table-content branch-sales">';
                        html += '            <table class="table u-table-b" id="project-table">';
                        html += '                <thead>';
                        html += '                    <tr><th>???</th><th>?????</th><th>??????</th></tr>';
                        html += '                </thead>';
                        html += '                <tbody id="branchTable">';
                        html += '                </tbody>';
                        html += '            </table>';
                        html += '         </div>';
                        html += '         <a href="javascript:;" class="btn-display" onclick="displayTable2(this)"><span>??</span><i class="icon"></i></a>';
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
                    
                    // ????
                    var modelName = response.modelName;
                    $("#modelTable").empty();
                    if(modelName) {
                        // for (var i = 0; i < modelName.length; i++) {
                        //     var html = '<tr><td>' + modelName[i].name.substr(11) + '</td><td>' + modelName[i].reachQty + '</td><td>' + modelName[i].reachAmt + '</td></tr>';
                        //     $("#modelTable").append(html);
                        // }
                      for (var i = 0; i < modelName.length; i++) {
                        	var modelName_title = modelName[i].name;
                        	var nodelName_show = modelName_title;
                        	if(null != modelName_title && modelName_title.length>11){
                        		nodelName_show = modelName_title.substring(0,11)+"...";
                        	}
                        	var reachQty_num = Number(modelName[i].reachQty);
                        	var reachAmt_num = Number(modelName[i].reachAmt);
                        	if(reachQty_num !=0 && reachAmt_num != 0){
                        		var html = '<tr><td title="'+modelName_title+'">'+nodelName_show+'</td><td>' + modelName[i].reachQty + '</td><td>' + modelName[i].reachAmt + '</td></tr>';
                        		$("#modelTable").append(html);
                        	}
                        }
                    }
                    tableSH("model-table", tr_minH-2);
                    
                    // ?????
                    var branches = response.branchName;
                    $("#branchTable").empty();
                    if(branches) {
                        for (var i = 0; i < branches.length; i++) {
                        	var url = getLink("branchName",branches[i].name,"04");
                            var html = '<tr><td><a href="'+url+'" title="' + branches[i].name.substr(11) + '">' + branches[i].name.substr(11) + '</a></td><td>' + branches[i].reachQty + '</td><td>' + branches[i].reachAmt + '</td></tr>';
                            $("#branchTable").append(html);
                        }
                    }
                    tableSH("branch-table", tr_minH-2);
                  
                  	/**????*/
                    clickThSortCommon();
                    
                },
                error: function () {
                    console.log("Error:?????????");
                }
            });
        }

        // ???????
        function getMap(datas, totalDatas, Id) {
            var chart = echarts.init(document.getElementById(Id));
            window.onresize = chart.resize;

            var storeNum = getMaxValue(datas);
            var visual = numToShow(storeNum);

            $("#" + Id).parent().find(".u-visualmap").remove();
            $("#" + Id).parent().append('<div class="u-visualmap"><div class="max">' + visual[1] + '+</div>' + '<div class="min">0</div><h6>??</h6></div>');

            $("#" + Id).parent().find(".totalContent").remove();
            if(totalDatas){
                $("#" + Id).parent().append('<div class="u-box-infors">' + '<div class="title">????</div>' + '<div class="content">' + '<div class="a"><span>???</span><b>' + toQfw(totalDatas[0].value) + ' ?</b></div>' + '<div class="b"><span>????</span><b>' + toQfw(totalDatas[1].value) + ' ?</b></div>' + '</div></div>');
            }
            var option = {
                tooltip: {
                    trigger: 'item',
                    padding: 0,
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function formatter(params) {
                        try {
                            var tip = '<div class="m-tooltip">' + '<div class="title">' + params.data.company + '</div>' + '<div class="content">' + '<div class="a"><span>??</span><b>' + toQfw(params.value) + '</b></div>' + '<div class="b"><span>???</span><b> ' + toQfw(params.data.sum) + '</b></div></div></div>';
                            return tip;
                        } catch (e) {
                            return;
                        }
                    }
                },
                visualMap: {
                    type: 'piecewise',
                    splitNumber: 4, // ???5???maxOpen???????????4???
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

            // ????????
            //chart.setOption(option);
            document.getElementById("map").setAttribute('option',JSON.stringify(option));//2018/02/11
            chart.on('click', function(params) {
                //console.log(params.name);
                //alert(params.name);
                if(params.name == '' || '???' == params.name){
                    return;
                }
                // ???????,??,??
                var cycleType = $("#cycleType").val();
                var loginName = $("#loginName").text();
                var encoder = $("#encoder").text();
                var orderLogic = $("#orderLogic").val();
                var projectName = $("#projectName").text();
                
                var link = "/ptDataShow/salesAll/salesOverview?type=04&branchName=" + encodeURIComponent(params.name) + "&bizUnitName=" + encodeURIComponent($("#bizUnitName").html()) + "&filter_userId=" + loginName + '&encoder=' + encoder + '&date='+ $("#selDay").val() + '&cycleType='+ cycleType + '&orderLogic='+ orderLogic+ '&projectName=' + encodeURIComponent(projectName);
                window.location.href = link;
            });
        }

        // ??????
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
	                timeDatas.push((datas[0].data[j].time).substring(5));
	                salesValReach.push(datas[0].data[j].value);
	                sumValReach.push((datas[1].data[j].value)/10000);
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
                    left: 10,
                    right: 10,
                    bottom: 30
                },
                legend: {
                    itemGap: 40, //?????????
                    itemWidth: 18,
                    itemHeight: 5,
                    top: 20,
                    //right: 90,
                  	display: 'block',
                    margin: "0 auto",
                  	width: '70%',
                    data: legendDatas
                },
                xAxis: [{
                    type: 'category',
                    data: timeDatas,
                    boundaryGap: false, //x????????
                    axisPointer: {
                        type: 'line'
                    },
                    axisTick: { //??????????
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
                    axisTick: { //?????????
                        show: false
                    },
                    axisLine: {
                        lineStyle: { //???????
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: { //?????????
                            color: '#666'
                        }
                    },
                    splitLine: { //????grid???????
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
                    yAxisIndex: 1, //??? y ?? index????????????? y???????
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