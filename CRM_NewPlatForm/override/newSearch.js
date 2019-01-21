/**
 * 拼接查询条件的js
 */
$(function(){
	initSearch(inintPageData,ajaxDataAgain);
	
	$('#zhanKai').click(function(){
		$(this).toggleClass('arrow-bottom');
		if($(this).hasClass("arrow-bottom")){
			$("#muilSelectOption").hide();
		}else{
			$("#muilSelectOption").show();
		}
	});
	
})
///tab页切换
function initTab(map){
	//tab切换
	$('#tab-head li').on("click",function(){
		$(this).addClass("act");
		$(this).siblings().removeClass("act");
		var href = $(this).attr("val");
		var map = getRequestParam();
		if(href.indexOf("&filter_userId")<0){
			href += "&filter_userId="+map.filter_userId;
		}
		if(href.indexOf("&encoder")<0){
			href += "&encoder="+map.encoder;
		}
		if(href.indexOf("&username")<0 && getValue(map.username) != ""){
			href += "&username="+map.username;
		}
		if(href.indexOf("&clickLi")<0){
			href += "&clickLi=true";
		}
		//添加sible 中请求的参数
		if(href.indexOf("&sibleFlag")<0 && getValue(map.sibleFlag) != ""){
			href += "&sibleFlag="+map.sibleFlag;
		}
		window.location.href = href;
	})
}

/**
 * 合并权限的参数
 */
function getPermissionParam(){
	var params = {};
	if(paramMap){
		for(var key in paramMap){
			if(key.indexOf("filter_")>-1){
				if(key.lastIndexOf("_filter") > 1){
					params[key.substring(7,key.length-7)] = paramMap[key];
				}else if(key == "filter_branchName"){
					//不做操作
				}else if(key.lastIndexOf("_equ") > 1){
					params[key.substring(7,key.length-4)] = paramMap[key];
				}else if(key.lastIndexOf("_in") > 1){
					params[key.substring(7,key.length-3)] = paramMap[key].replace(/'/g,"");
				}else{
					params[key.substring(7)] = paramMap[key];
				}
			}
		}
	}
	return params;
}
/**
 * @param callBack 回调函数
 */
function initSearch(callBack,ajaxDataAgain){
	var map = getRequestParam();//分析 请求路径中的参数
	if(getValue(map.reportId) == ""){//StringUtils中的getValue
		if(getValue(map.clickLi) == ""){
			window.sessionStorage.removeItem("myMonth");
			window.sessionStorage.removeItem("myYear");
			window.sessionStorage.removeItem("start_day");
			window.sessionStorage.removeItem("end_day");
		}
		map.reportId = $("#queryForm input[name='reportId']").val();
	}
	if(getValue(map.reportId) == ""){
		layerInfo("传递参数不正确，没有报表ID！")
		return ;
	}
	initTab(map);
	//自定义表格  默认有
	if(getValue(map.customize) == "false"){
		$("#searchHead .customize").remove();
	}
	//导出  默认有
	if(getValue(map.exportExcel) == "false"){
		$("#searchHead .export").remove();
	}
	map = $.extend({},map,getPermissionParam());
	map.reportId = "n"+map.reportId;
	if("nreport19"==map.reportId || "nreport24"==map.reportId || "nreport2-2-1"==map.reportId){
		map.month=window.sessionStorage.getItem("myMonth");
		if(""==getValue(map.month)){
			var dateToday = new Date();
			var monthT = (dateToday.getMonth()+1);
			monthT =(monthT<10 ? "0"+monthT:monthT);
			map.month=dateToday.getFullYear()+"-"+monthT;
		}
	}
	//客户、门店拜访计划汇总report830    客户拜访反馈汇总report831    门店拜访反馈汇总report832
	/*if("nreport830"==map.reportId || "nreport831"==map.reportId || "nreport832"==map.reportId){
		var dateToday = new Date();
		var monthT = (dateToday.getMonth()+1);
		monthT =(monthT<10 ? "0"+monthT:monthT);
		var dayT = (dateToday.getDate());
		dayT =(dayT<10 ? "0"+dayT:dayT);
		var today = dateToday.getFullYear()+"-"+monthT+"-"+dayT;
		
		map.plandate_startTime = today;//默认今天
		map.plandate_endTime = today;//默认今天
	}*/
	$.ajax({
		type : "POST",
        dataType: "json",
		url : "/ptDataShow/search/getSearchContent",
		data : getJsonString(map),
		success : function(result) {
			var inputArray = [];//input控件
			var dateArray = [];//日期控件
			var selectArray = [];//select控件，暂时不用
			var muilSelectArray = [];//多选控件
			if(null != result){
				for(i in result){
					var type = result[i].TYPE;
					if(type=="muilSelect"){
						muilSelectArray.push(result[i]);
					}else if(type=="input"){
						inputArray.push(result[i]);
					}else if(type=="select"){
						selectArray.push(result[i]);
					}else{
						dateArray.push(result[i]);//日期控件
					}
				}
			}
			if(map.isNoBread=="true"){//没有面包屑的标识
				getSearchHtml1(inputArray,dateArray,muilSelectArray,selectArray);
			}else if(map.isDateArray=="true"){
				getSearchHtml1(inputArray,dateArray,muilSelectArray,selectArray);
			}else{
				getSearchHtml(inputArray,dateArray,muilSelectArray,selectArray);
			}
			//多选点击事件
			if(muilSelectArray.length>0){
				initMuilSelectClick();
			}else{
				$("#zhanKai").parent().remove();
			}
			
			//时间段点击事件
			if(dateArray.length>0){
				initDateYMClick(ajaxDataAgain,map);
			}
			
			//input 点击事件
			if(inputArray.length>0){
				initInputClick();
			}
			
			//清空
			$("#clearBtn2").click(function(){
				clearGlobal(ajaxDataAgain);
			})
			if(callBack && typeof callBack=='function'){
				callBack();
				//搜索
				$("#queryBtnSearch,#searchBtn2").click(function(){
					$('#zhanKai').addClass("arrow-bottom");
					$("#muilSelectOption").hide();//收回
					var vFlag = true;
					if(vFlag){
						ajaxDataAgain();
					}
				});
			}
		},
	});
}
//input 控件
function initInputClick(){
	//初始化日期的name
	var svCode = $("#selectInput option:selected").val();
	var svfName = $("#selectInput option:selected").html();
	$("#searchHead input.search").attr({"name":svCode,"fName":svfName});
	//改变时间类型  事件
	$("#selectInput").on("change",function(){
		var $option = $(this).find("option:selected");
		var code = $option.val();
		var fName = $option.html();
		$("#searchHead input.search").attr({"name":code,"fName":fName});
	});
}
//日期点击事件
function initDateYMClick(ajaxDataAgain,map){
	
	if(map.isNoBread=="true" || map.isDateArray=="true"){//没有面包屑的标识
		
		var classType = "betweenDate";
		
		//初始化日期的name
		var svCode = $("#selectDate option:selected").val();
		var svfName = $("#selectDate option:selected").html();
		$("#searchHead .outstore input.start").attr({"name":"start_"+svCode,"fName":svfName});
		$("#searchHead .outstore input.end").attr({"name":"end_"+svCode,"fName":svfName});
		
		if($("#searchHead .date:eq(0)").hasClass("betweenWeek")){
			$("#searchHead .date").css("width","120px");
			classType = "betweenWeek";//周段
		}
		
		//改变时间类型  事件
		$("#selectDate").on("change",function(){
			var $option = $(this).find("option:selected");
			var code = $option.val();
			var name = $option.html();
			$("#searchHead .outstore input.start").attr({"name":"start_"+code,"fName":name});
			$("#searchHead .outstore input.end").attr({"name":"end_"+code,"fName":name});
		});
		//库存客户查询-新   库存明细查询-新
    debugger;
		if(map.reportId == 'nreport852' || map.reportId == 'nreport852-1'){
			//默认7天前
			if(sessionStorage.getItem("start_day")){
				$("#selectDate").parent().find("input.start").val(sessionStorage.getItem("start_day"));
			}else{
				$("#selectDate").parent().find("input.start").val(getDay(-7));
				window.sessionStorage.setItem("start_day",getDay(-7));
			}
			
			if(sessionStorage.getItem("end_day")){
				$("#selectDate").parent().find("input.end").val(sessionStorage.getItem("end_day"));
			}else{
				$("#selectDate").parent().find("input.end").val(getDay(0));
				window.sessionStorage.setItem("end_day",getDay(0));
			}
		}else{
			//默认今天
			var dateToday = new Date();
			if(classType == "betweenWeek"){
				var year = dateToday.getFullYear();//年
				var month = dateToday.getMonth()+1;//月
				var today = dateToday.getDate();//日
				var tWeek = dateToday.getDay()==0 ? dateToday.getDay()+7 : dateToday.getDay()+1;//0-6  今天周几
				var futureDate = getDateAfter_n(year+'-'+month+"-"+today,(7-tWeek));//未来的日期
				var week = getWeekOfYear(year+'-'+month+"-"+today);
				if(futureDate.substr(0,4) != year){
					year = futureDate.substr(0,4);
				}
				week = (week <=9) ? "0"+week : week;
				$("#searchHead .date").val(year+"年第"+week+"周");
			}else{
				var monthT = (dateToday.getMonth()+1);
				monthT =(monthT<10 ? "0"+monthT:monthT);
				var dayT = (dateToday.getDate());
				dayT =(dayT<10 ? "0"+dayT:dayT);
				$("#searchHead .date").val(dateToday.getFullYear()+"-"+monthT+"-"+dayT);
			}
		}
		
		if(classType == "betweenWeek"){
			var clickBtn;
			$("#searchHead .date").on("click",function(){
				clickBtn = $(this);
			})
			$("#searchHead .date").datepicker({
				language: "zh-CN",
				//startView:0,//0：天（默认） 1：月 2：年	3：十年 4：世纪
				autoclose: true,//选中之后自动隐藏日期选择框
				clearBtn: true,//清除按钮
				todayBtn: 'linked',//今日按钮 false true
				format: "yyyy年第1周",
				calendarWeeks : true,
				weekStart:1,
				forceParse:false,
				todayHighlight:true //今天高亮显示
			}).on('changeDate',function(ev){
				var year = ev.date.getFullYear();   
				var month = ev.date.getMonth()+1; 
				var today= ev.date.getDate();
				var tWeek = ev.date.getDay()==0 ? ev.date.getDay()+7 : ev.date.getDay()+1;//0-6
				var futureDate = getDateAfter_n(year+'-'+month+"-"+today,(7-tWeek));
				var week = getWeekOfYear(year+'-'+month+"-"+today);
				if(futureDate.substr(0,4) != year){
					year = futureDate.substr(0,4);
				}
				week = (week <=9) ? "0"+week : week;
				clickBtn.val(year+"年第"+week+"周");
			})
		}else{
			//年月日  
			$("#searchHead .date").datepicker({
				language: "zh-CN",
				//startView:1,
				autoclose: true,//选中之后自动隐藏日期选择框
				clearBtn: true,//清除按钮
				todayBtn: 'linked',//今日按钮 false true
				format: "yyyy-mm-dd",
				todayHighlight:true //今天高亮显示
			}).on('changeDate',function(ev){
				var reportId = map.reportId;
				var flag = this.classList.contains("start");
				if(ev.date){
					var year = ev.date.getFullYear();   
					var month = ev.date.getMonth()+1;  
					month =(month<10 ? "0"+month:month);   
					var dayT = (ev.date.getDate());
					dayT =(dayT<10 ? "0"+dayT:dayT);
					var mydate = (year.toString()+"-"+month.toString()+"-"+dayT);
					if(flag){
						window.sessionStorage.setItem("start_day",mydate);
					}else{
						window.sessionStorage.setItem("end_day",mydate);
					}
				}else{
					if(flag){
						window.sessionStorage.removeItem("start_day",mydate);
					}else{
						window.sessionStorage.removeItem("end_day",mydate);
					}
				}
			});
		}
	}else{
		$("#searchHead .date").each(function(){
			if($(this).hasClass("month")){
				$(this).datepicker({
		            format:'yyyy-mm',
		    		autoclose: true,
		    		startView: 1,//0day 1month 2year
		    		minViewMode:1,
		    		todayBtn:"linked",
		    		clearBtn:true
		  		 }).on('changeDate',function(ev){
		  			var reportId = map.reportId;
		  			if(reportId=="nreport19" //分公司销售人员达成  分公司电商中心经理 角色
		  				|| reportId=="nreport24" || reportId=="nreport2-2-1"){
		  				$("#muilSelectOption .option-r-c[name='filter_officeName'] span[val='全部']").click();
		  				$("#clearBtn2").click();//执行清空事件
		  			}else{
		  				ajaxDataAgain();//查询事件
		  			}
		  	  		 if(ev.date){
		  	  			var year = ev.date.getFullYear();   
		  		  		var month = ev.date.getMonth()+1;  
		  		  		month =(month<10 ? "0"+month:month);   
		  		  		var mydate = (year.toString()+"-"+month.toString());
		  	      		window.sessionStorage.setItem("myMonth",mydate);
		  	      		//window.sessionStorage.setItem("myYear",year.toString());
		  	  	  	 }else{
		  	  	  		window.sessionStorage.removeItem("myMonth");
		  	  	  		//window.sessionStorage.removeItem("myYear");
		  	  	  	 }
		  		 });
			}else if($(this).hasClass("year")){
				$(this).datepicker({
		            format:'yyyy',
		    		autoclose: true,
		    		startView: 2,//0day 1month 2year
		    		minViewMode:2,
		    		todayBtn:"linked",
		    		clearBtn:true
		  		 }).on('changeDate',function(ev){
		  			ajaxDataAgain();//查询事件
		  	  		 if(ev.date){
		  	  			var year = ev.date.getFullYear();   
		  	      		window.sessionStorage.setItem("myYear",year.toString());
		  	  	  	 }else{
		  	  	  		window.sessionStorage.removeItem("myYear");
		  	  	  	 }
		  		 });
			}else{
				$(this).datepicker({
			        language: "zh-CN",
			        //startView:1,
			        autoclose: true,//选中之后自动隐藏日期选择框
			        clearBtn: true,//清除按钮
			        todayBtn: 'linked',//今日按钮 false true
			        format: "yyyy-mm-dd"
			    });
				//默认今天
				var dateToday = new Date();
				var monthT = (dateToday.getMonth()+1);
				monthT =(monthT<10 ? "0"+monthT:monthT);
				var dayT = (dateToday.getDate());
				dayT =(dayT<10 ? "0"+dayT:dayT);
				$("#searchHead .date").val(dateToday.getFullYear()+"-"+monthT+"-"+dayT);
			}
		})
	}
	
}
window.timeInitDateYMClick = function(){
  debugger;
  //改变时间类型  事件
		$("#selectDate").on("change",function(){
			var $option = $(this).find("option:selected");
			var code = $option.val();
			var name = $option.html();
			$("#searchHead .outstore input.start").attr({"name":"start_"+code,"fName":name});
			$("#searchHead .outstore input.end").attr({"name":"end_"+code,"fName":name});
		});
//   if(map.isNoBread=="true" || map.isDateArray=="true"){//没有面包屑的标识
		
// 		var classType = "betweenDate";
		
// 		//初始化日期的name
// 		var svCode = $("#selectDate option:selected").val();
// 		var svfName = $("#selectDate option:selected").html();
// 		$("#searchHead .outstore input.start").attr({"name":"start_"+svCode,"fName":svfName});
// 		$("#searchHead .outstore input.end").attr({"name":"end_"+svCode,"fName":svfName});
		
// 		if($("#searchHead .date:eq(0)").hasClass("betweenWeek")){
// 			$("#searchHead .date").css("width","120px");
// 			classType = "betweenWeek";//周段
// 		}
		
// 		//改变时间类型  事件
// 		$("#selectDate").on("change",function(){
// 			var $option = $(this).find("option:selected");
// 			var code = $option.val();
// 			var name = $option.html();
// 			$("#searchHead .outstore input.start").attr({"name":"start_"+code,"fName":name});
// 			$("#searchHead .outstore input.end").attr({"name":"end_"+code,"fName":name});
// 		});
// 		//库存客户查询-新   库存明细查询-新
//     debugger;
// 		if(map.reportId == 'nreport852' || map.reportId == 'nreport852-1'){
// 			//默认7天前
// 			if(sessionStorage.getItem("start_day")){
// 				$("#selectDate").parent().find("input.start").val(sessionStorage.getItem("start_day"));
// 			}else{
// 				$("#selectDate").parent().find("input.start").val(getDay(-7));
// 				window.sessionStorage.setItem("start_day",getDay(-7));
// 			}
			
// 			if(sessionStorage.getItem("end_day")){
// 				$("#selectDate").parent().find("input.end").val(sessionStorage.getItem("end_day"));
// 			}else{
// 				$("#selectDate").parent().find("input.end").val(getDay(0));
// 				window.sessionStorage.setItem("end_day",getDay(0));
// 			}
// 		}else{
// 			//默认今天
// 			var dateToday = new Date();
// 			if(classType == "betweenWeek"){
// 				var year = dateToday.getFullYear();//年
// 				var month = dateToday.getMonth()+1;//月
// 				var today = dateToday.getDate();//日
// 				var tWeek = dateToday.getDay()==0 ? dateToday.getDay()+7 : dateToday.getDay()+1;//0-6  今天周几
// 				var futureDate = getDateAfter_n(year+'-'+month+"-"+today,(7-tWeek));//未来的日期
// 				var week = getWeekOfYear(year+'-'+month+"-"+today);
// 				if(futureDate.substr(0,4) != year){
// 					year = futureDate.substr(0,4);
// 				}
// 				week = (week <=9) ? "0"+week : week;
// 				$("#searchHead .date").val(year+"年第"+week+"周");
// 			}else{
// 				var monthT = (dateToday.getMonth()+1);
// 				monthT =(monthT<10 ? "0"+monthT:monthT);
// 				var dayT = (dateToday.getDate());
// 				dayT =(dayT<10 ? "0"+dayT:dayT);
// 				$("#searchHead .date").val(dateToday.getFullYear()+"-"+monthT+"-"+dayT);
// 			}
// 		}
		
// 		if(classType == "betweenWeek"){
// 			var clickBtn;
// 			$("#searchHead .date").on("click",function(){
// 				clickBtn = $(this);
// 			})
// 			$("#searchHead .date").datepicker({
// 				language: "zh-CN",
// 				//startView:0,//0：天（默认） 1：月 2：年	3：十年 4：世纪
// 				autoclose: true,//选中之后自动隐藏日期选择框
// 				clearBtn: true,//清除按钮
// 				todayBtn: 'linked',//今日按钮 false true
// 				format: "yyyy年第1周",
// 				calendarWeeks : true,
// 				weekStart:1,
// 				forceParse:false,
// 				todayHighlight:true //今天高亮显示
// 			}).on('changeDate',function(ev){
// 				var year = ev.date.getFullYear();   
// 				var month = ev.date.getMonth()+1; 
// 				var today= ev.date.getDate();
// 				var tWeek = ev.date.getDay()==0 ? ev.date.getDay()+7 : ev.date.getDay()+1;//0-6
// 				var futureDate = getDateAfter_n(year+'-'+month+"-"+today,(7-tWeek));
// 				var week = getWeekOfYear(year+'-'+month+"-"+today);
// 				if(futureDate.substr(0,4) != year){
// 					year = futureDate.substr(0,4);
// 				}
// 				week = (week <=9) ? "0"+week : week;
// 				clickBtn.val(year+"年第"+week+"周");
// 			})
// 		}else{
// 			//年月日  
// 			$("#searchHead .date").datepicker({
// 				language: "zh-CN",
// 				//startView:1,
// 				autoclose: true,//选中之后自动隐藏日期选择框
// 				clearBtn: true,//清除按钮
// 				todayBtn: 'linked',//今日按钮 false true
// 				format: "yyyy-mm-dd",
// 				todayHighlight:true //今天高亮显示
// 			}).on('changeDate',function(ev){
// 				var reportId = map.reportId;
// 				var flag = this.classList.contains("start");
// 				if(ev.date){
// 					var year = ev.date.getFullYear();   
// 					var month = ev.date.getMonth()+1;  
// 					month =(month<10 ? "0"+month:month);   
// 					var dayT = (ev.date.getDate());
// 					dayT =(dayT<10 ? "0"+dayT:dayT);
// 					var mydate = (year.toString()+"-"+month.toString()+"-"+dayT);
// 					if(flag){
// 						window.sessionStorage.setItem("start_day",mydate);
// 					}else{
// 						window.sessionStorage.setItem("end_day",mydate);
// 					}
// 				}else{
// 					if(flag){
// 						window.sessionStorage.removeItem("start_day",mydate);
// 					}else{
// 						window.sessionStorage.removeItem("end_day",mydate);
// 					}
// 				}
// 			});
// 		}
// 	}else{
// 		$("#searchHead .date").each(function(){
// 			if($(this).hasClass("month")){
// 				$(this).datepicker({
// 		            format:'yyyy-mm',
// 		    		autoclose: true,
// 		    		startView: 1,//0day 1month 2year
// 		    		minViewMode:1,
// 		    		todayBtn:"linked",
// 		    		clearBtn:true
// 		  		 }).on('changeDate',function(ev){
// 		  			var reportId = map.reportId;
// 		  			if(reportId=="nreport19" //分公司销售人员达成  分公司电商中心经理 角色
// 		  				|| reportId=="nreport24" || reportId=="nreport2-2-1"){
// 		  				$("#muilSelectOption .option-r-c[name='filter_officeName'] span[val='全部']").click();
// 		  				$("#clearBtn2").click();//执行清空事件
// 		  			}else{
// 		  				ajaxDataAgain();//查询事件
// 		  			}
// 		  	  		 if(ev.date){
// 		  	  			var year = ev.date.getFullYear();   
// 		  		  		var month = ev.date.getMonth()+1;  
// 		  		  		month =(month<10 ? "0"+month:month);   
// 		  		  		var mydate = (year.toString()+"-"+month.toString());
// 		  	      		window.sessionStorage.setItem("myMonth",mydate);
// 		  	      		//window.sessionStorage.setItem("myYear",year.toString());
// 		  	  	  	 }else{
// 		  	  	  		window.sessionStorage.removeItem("myMonth");
// 		  	  	  		//window.sessionStorage.removeItem("myYear");
// 		  	  	  	 }
// 		  		 });
// 			}else if($(this).hasClass("year")){
// 				$(this).datepicker({
// 		            format:'yyyy',
// 		    		autoclose: true,
// 		    		startView: 2,//0day 1month 2year
// 		    		minViewMode:2,
// 		    		todayBtn:"linked",
// 		    		clearBtn:true
// 		  		 }).on('changeDate',function(ev){
// 		  			ajaxDataAgain();//查询事件
// 		  	  		 if(ev.date){
// 		  	  			var year = ev.date.getFullYear();   
// 		  	      		window.sessionStorage.setItem("myYear",year.toString());
// 		  	  	  	 }else{
// 		  	  	  		window.sessionStorage.removeItem("myYear");
// 		  	  	  	 }
// 		  		 });
// 			}else{
// 				$(this).datepicker({
// 			        language: "zh-CN",
// 			        //startView:1,
// 			        autoclose: true,//选中之后自动隐藏日期选择框
// 			        clearBtn: true,//清除按钮
// 			        todayBtn: 'linked',//今日按钮 false true
// 			        format: "yyyy-mm-dd"
// 			    });
// 				//默认今天
// 				var dateToday = new Date();
// 				var monthT = (dateToday.getMonth()+1);
// 				monthT =(monthT<10 ? "0"+monthT:monthT);
// 				var dayT = (dateToday.getDate());
// 				dayT =(dayT<10 ? "0"+dayT:dayT);
// 				$("#searchHead .date").val(dateToday.getFullYear()+"-"+monthT+"-"+dayT);
// 			}
// 		})
// 	}
}
/**
 * 获取 某天前的日期
 * @param day
 * @returns {String}
 */
function getDay(day){
    var today = new Date();
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = (today.getMonth()+1);
    tMonth =(tMonth<10 ? "0"+tMonth:tMonth);
	var tDate = (today.getDate());
	tDate =(tDate<10 ? "0"+tDate:tDate);
    return tYear+"-"+tMonth+"-"+tDate;
}

//多选点击事件
function initMuilSelectClick(clickFn){
	$("#muilSelectOption .option-r").each(function(){
		var hi = 40;//parseInt($(this).css("height"));
		var cHeight = parseInt($(this).find(".option-r-c").css("height"));
		if(cHeight>hi){//如果大于则存在更多
			$(this).parent().find(".option-btn .bt").unbind().click(function(){
				$(this).toggleClass("m");
				var optionR = $(this).parent().prev();
				if($(this).hasClass("m")){
					$(this).html('收起&nbsp;&nbsp;>');
					optionR.css("height","auto");
					var optionRh = optionR.height();
					optionR.prev().height(optionRh+20);
				}else{
					$(this).html('更多&nbsp;&nbsp;>');	
					optionR.css("height","40px");
					optionR.prev().height(41);
				}
			})
		}else{
			$(this).siblings(".option-btn").hide();
		}
	});
	$("#muilSelectOption .option-r-c span").each(function(){
		$(this).unbind().click(function(){
			if($(this).html()=="全部"){
				$(this).addClass("act");
				$(this).siblings().removeClass("act");
			}else{
				$(this).toggleClass('act');
				if($(this).hasClass("single")){
					$(this).siblings().removeClass("act");//如果是单选标识，则移除其他选中状态
				}
				if($(this).parent().find(".act:not(.all)").length==0){
					$(this).siblings(".all").addClass("act");//全部
				}else{
					$(this).siblings(".all").removeClass("act");//全部
				}
			}
			clickMuilSelect(this,clickFn);
		});
	});
	
	//默认隐藏
	//$("#muilSelectOption .option-list.none").hide();
	/*$("#muilSelectOption .option-list.block .option-l span").click(function(){
		$(this).toggleClass("importMuil");
		var mflag = $(this).hasClass("importMuil");//是否有
		var tagid = $(this).parent().parent().attr("tagid");
		showMuilSelect(tagid,mflag);
	});*/
}
//点击展示
function showMuilSelect(tagid,mflag){
	var $child = $("#muilSelectOption .option-list[pid='"+tagid+"_p']");
	if($child.length>0){
		if(mflag){
			$($child[0]).show();
		}else{
			$($child[0]).hide();
		}
		showMuilSelect($($child[0]).attr("tagid"),mflag);
	}
}
//点击事件
function clickMuilSelect(obj,clickFn){
	var topParentId = $(obj).parent().parent().parent().attr("tagid");
	var $child = $("#muilSelectOption .option-list[pid='"+topParentId+"_p']");
	if($child.length>0){//证明有值
		var requestParam = getRequestParam();
		for(var i=0;i<$child.length;i++){
			var $c = $($child[i]);
			var cid = $c.attr("id");
			var filterId = cid.substring(7,cid.length);
			var body = {filterId:[filterId]};
			body = $.extend({}, body, getMuilSelectParam(obj)); 
			body = $.extend({},getPermissionParam(),body);
			if("report19"== getValue(requestParam.reportId)//分公司销售人员达成
				|| "report24"== getValue(requestParam.reportId) 
				|| "report2-2-1"== getValue(requestParam.reportId)){
				body.month = $("#searchHead input[name='filter_month']").val();
				if(body.month==""){
					var dateToday = new Date();
					var monthT = (dateToday.getMonth()+1);
					monthT =(monthT<10 ? "0"+monthT:monthT);
	  		  		body.month=dateToday.getFullYear()+"-"+monthT;
				}
			}
			$.ajax({
				type : "POST",
	            dataType: "json",
				url : "/ptDataShow/search/getSearchContent",
				data : getJsonString(body),
				async: false,
				success : function(result) {
					if(null != result && result.length > 0){
						$c.find(".option-r-c").html(getMuselectOption(result[0]));
						
						$c.find(".option-r").each(function(j,a){
							var hi = 40;//parseInt($(this).css("height"));
							var cHeight = parseInt($(this).find(".option-r-c").css("height"));
							if(cHeight>hi){//如果大于则存在更多
								$(this).siblings(".option-btn").show();
								$(this).siblings(".option-btn").find(".bt").html('更多&nbsp;&nbsp;>');	
								$(this).css("height","40px");
								$(this).siblings(".option-l").height(41);
								$(this).parent().find(".option-btn .bt").unbind().click(function(){
									$(this).toggleClass("m");
									var optionR = $(this).parent().prev();
									if($(this).hasClass("m")){
										$(this).html('收起&nbsp;&nbsp;>');
										optionR.css("height","auto");
										var optionRh = optionR.height();
										optionR.prev().height(optionRh+20);
									}else{
										$(this).html('更多&nbsp;&nbsp;>');	
										optionR.css("height","40px");
										optionR.prev().height(41);
									}
								})
							}else{
								$(this).css("height","40px");
								$(this).siblings(".option-l").height(41);
								$(this).siblings(".option-btn").hide();
							}
						});
						
						$c.find(".option-r-c span").each(function(){
							$(this).unbind().click(function(){
								if($(this).html()=="全部"){
									$(this).addClass("act");
									$(this).siblings().removeClass("act");
								}else{
									$(this).toggleClass('act');
									if($(this).hasClass("single")){
										$(this).siblings().removeClass("act");//如果是单选标识，则移除其他选中状态
									}
									if($(this).parent().find(".act:not(.all)").length==0){
										$(this).siblings(".all").addClass("act");//全部
									}else{
										$(this).siblings(".all").removeClass("act");//全部
									}
								}
								clickMuilSelect(this,clickFn);
							});
						});
						clickMuilSelect($c.find(".option-r-c span:eq(0)")[0],clickFn);//刷新 联动
					}
				}
			})
		}
	}else{
		if(clickFn){
			clickFn();
		}
	}
}
/**
 * 获取联动的参数
 * @param obj
 * @returns {___anonymous2249_2250}
 */
var globBody;
function getMuilSelectParam(obj){
	var body = {};
	globBody = {};
	if(obj){
		var name = $(obj).parent().attr("name");//code
		if(name.indexOf("filter_")==0){
			name = name.substring(7,name.length);
		}else if(name.indexOf("other_")==0){
			name = name.substring(6,name.length);
		}
		var values = "";
		$(obj).parent().find(".act:not(.all)").each(function(index,ob){
			if($(ob).hasClass("act")){
				values += $(ob).attr("val")+",";//值
			}
		})
		if(values.length>0){
			values = values.substring(0, values.length-1);
			globBody[name] = values;
		}
		/*body[name] = values;
		body = recursionGetParam(obj,body); */
		recursionGetParam(obj,globBody);
		body = globBody;
	}
	return body;
}
/**
 * 递归获取参数
 * @param obj
 */
function recursionGetParam(obj,body){
	var topParentId = $(obj).parent().parent().parent().attr("pid");
	var $child = $("#muilSelectOption .option-list[tagid='"+topParentId.substring(0,topParentId.length-2)+"']");
	if($child.length>0){
		var body1 = {};
		var name = $child.find(".option-r-c").attr("name");
		if(name.indexOf("filter_")==0){
			name = name.substring(7,name.length);
		}else if(name.indexOf("other_")==0){
			name = name.substring(6,name.length);
		}
		var values = "";
		$child.find(".option-r-c .act:not(.all)").each(function(index,ob){
			if($(ob).hasClass("act")){
				values += $(ob).attr("val")+",";
			}
		})
		if(values.length>0){
			values = values.substring(0, values.length-1);
			body1[name] = values;
		}
		globBody = $.extend({}, globBody, body1); 
		recursionGetParam($child.find(".option-r-c span:eq(0)")[0],globBody);
	}
	//return body;
}

/**
 * 拼接搜索条件的页面
 * @param inputArray
 * @param dateArray
 * @param muilSelectArray
 * @param selectArray
 */
function getSearchHtml(inputArray,dateArray,muilSelectArray,selectArray){
	var html = '';
	//日期类控件
	if(dateArray && dateArray instanceof Array && dateArray.length>0){
		html += getSearchDateHtml(dateArray);
	}
	
	//文本类 控件
	if(inputArray && inputArray instanceof Array && inputArray.length>0){
		html += getSearchTextHtml(inputArray);
	}
	
	//下拉框控件
	if(inputArray && inputArray instanceof Array && inputArray.length>0){
		html += getSearchSelectHtml(selectArray);
	}
	
	//$("#searchHead").prepend(html);//条件搜索区域
	
	//muilSelect  多选框
	var mHtml =  '';
	if(muilSelectArray && muilSelectArray.length>0){
		mHtml += getSearchMuselectHtml(muilSelectArray);
		
		mHtml += '<div class="btn-box">';
		mHtml += '	<input type="button" value="确定" class="sure-btn" id="searchBtn2"/>';
		mHtml += '	<input type="button" value="清空筛选" class="clear-btn" id="clearBtn2"/>';
		mHtml += '</div>';
	}
	$("#muilSelectOption").html(mHtml);
}

// 下拉框
function getSearchSelectHtml(selectArray){
	var html = '<div class="outstore">';
	for(var i=0;i<selectArray.length;i++){
		var item = selectArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;
		var sqlList = item.sqlList;
		html += '<span>'+name+'：</span>';
		html += '<select name="'+code+'" fname="'+name+'" class="select sl">';
		//html += '<option value="">--请选择--</option>';
		if(item.sqlList != null && item.sqlList != ""){
			var sqlList = JSON.parse(item.sqlList);
			for(var j=0;j<sqlList.length;j++){
				var sqlItem = sqlList[j];
				var value = '';
				for(var m in sqlItem){
					value = sqlItem[m];
				}
				if(getValue(value) != ""){
					html += '<option value="'+value+'">'+value+'</option>';
				}
			}
		}
		html += '</select>';
	}
	return html;
}

//文本类
function getSearchTextHtml(inputArray){
	var html = '<select class="select" id="selectInput">';
	for(var i=0;i<inputArray.length;i++){
		var item = inputArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;//input
		html += '<option value="'+code+'">'+name+'</option>';
	}
	html += '</select>';
	html += '<input type="text" name="" class="search" value="" placeholder="请输入搜索内容" />';
	html += '<input type="button" id="queryBtnSearch" class="search-btn" value="搜索" />';
	return html;
}
//日期类
function getSearchDateHtml(dateArray){
	var html = '<input type="button" id="queryBtnSearch" style="display: none;">';
	for(var i=0;i<dateArray.length;i++){
		var item = dateArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;
		if(type=="month"){//月别
			html += '<span class="name">'+name;
			html += '</span><i class="icon"></i><input name="'+code+'" readonly="readonly" type="text" class="form-control date '+type+'"/>';
		}else if(type=="year"){//年份
			html += '<span class="name">'+name;
			html += '</span><i class="icon"></i><input name="'+code+'" readonly="readonly" type="text" class="form-control date '+type+'"/>';
		}
	}
	$("#searchHead .dateDiv").html(html);
	return html;
}

//得到分组后的 muilSelect
function getGroupMuilSelectArray(muilSelectArray){
	var result = [];
	var group = [];
	for(var i=0;i<muilSelectArray.length;i++){
		var item = muilSelectArray[i];
		if(getValue(item.TEXT) != ""){//一个开始
			group = [];
		}
		group.push(item);
		if(getValue(item.LINE).indexOf("1") >= 0){//分组结束
			result.push(group);
		}
	}
	return result;
}
//获取muilSelect内容 muilSelect 多选类
function getSearchMuselectHtml(muilSelectArray){
	var result = getGroupMuilSelectArray(muilSelectArray);
	var html = '';
	for(var a=0;a<result.length;a++){
		var itemList = result[a];
		html += '<div class="option-con">';
		for(var i=0;i<itemList.length;i++){
			var item = itemList[i];
			if(getValue(item.TEXT)!=""){
				html += '<div class="filter-tag">'+item.TEXT+'</div>';
			}
			var display = getValue(item.DISPLAY);
			html += '	<div class="option-list clearfix '+display+'" id="filter_'+item.ID+'" tagid="filter_'+item.TAGID+'" pid="filter_'+getValue(item.PID)+'_p">';
			var line = getValue(item.LINE).indexOf("0")>=0?"no-under":"";//是否划线
			html += '		<div class="option-l '+line+'"><span>'+item.NAME+'</span></div>';
			html += '		<div class="option-r" fName="'+item.NAME+'" name="'+item.CODE+'">';
			html += '			<div class="option-r-c" fName="'+item.NAME+'" name="'+item.CODE+'">';
			html += getMuselectOption(item);//选项span
			html += '			</div>';
			html += '		</div>';
			
			html += '	<div class="option-btn">';
			html += '		<div class="bt">更多&nbsp;&nbsp;></div>';
			html += '	</div>';
			
			html += '</div>';
		}
		html += '</div>';
	}
	return html;
}
function getMuselectOption(item){
	var html1 = '<span class="all act" val="全部">全部</span>';
	var html = "";
	if(item.sqlList != null && item.sqlList != ""){
		var sqlList = JSON.parse(item.sqlList);
		var classType = getValue(item.CLASSTYPE);
		var isFirst = "";
		if(classType != "" && classType.indexOf(",") >= 0){
			classType = getValue(item.CLASSTYPE).split(",")[0];
			isFirst = getValue(item.CLASSTYPE).split(",")[1];
		}
		var tagId = Number(item.tag_id);
		if(null != sqlList){
			for(var j=0;j<sqlList.length;j++){
				var sqlItem = sqlList[j];
				var value = '';
				for(var m in sqlItem){
					value = sqlItem[m];
				}
				if(getValue(value) != ""){
					if(isFirst != "" && j==0){
						html1 = '<span class="all" val="全部">全部</span>';
						html += '<span class="'+classType+' '+isFirst+'" val="'+value+'">'+getSplitStr(value,"_")+'</span>';
					}else{
						html += '<span class="'+classType+'" val="'+value+'">'+getSplitStr(value,"_")+'</span>';
					}
				}
			}
		}
	}
	return html1+html;
}


/**
 * 参数中的对象 转为 json字符串
 */
function getJsonString(body){
	for(var key in body){
		if(typeof(body[key]) == "object" || typeof(body[key]) == "function"){
			if(body[key] instanceof Function || body[key] instanceof Date){
				delete body[key];
			}else{
				body[key] = JSON.stringify(body[key]);
			}
		}
	}
	return body;
}


/**
 * 获取div 中的参数
 * @param divId
 * @returns {___anonymous9880_9881}
 */
function getParamMap(divId){
	var param = {};
	$("#"+divId).find("input").each(function(i,o){//select
		if($(o).attr("type") != "button"){//&& getValue($(o).val()) != ""
			param[$(o).attr("name")] = $(o).val();
		}
	});
	return param
}
/**
 * 获取所有的搜索条件中的参数
 * @param divId
 */
function getSearchParam(flag){
	var param = {};
	$("#searchHead").find("input").each(function(i,o){
		if($(o).attr("type") != "button" && getValue($(o).val()) != ""){
			if($(this).hasClass("betweenWeek")){
				param[$(o).attr("name")] = $(o).val().replace("年第","-W").replace("周","");
			}else{
				param[$(o).attr("name")] = $(o).val();
			}
		}
	});
	//select 框
	$("#searchHead").find("select.sl").each(function(i,o){//select
		if(getValue($(o).val()) != ""){
			param[$(o).attr("name")] = $(o).val();
		}
	});
	
	param = setDateParam(param);//处理时间段的函数
	
	//多选
	$(".option-r").each(function(i,ob){
		var arrayList = [];
		var arrayStr = "";
		if($(ob).find("span.act:not(.all)").length>0){
			$(ob).find("span.act:not(.all)").each(function(j,obj){
				if(flag){
					arrayList.push($(obj).attr("val"));//$(obj).html()
				}else{
					arrayStr += "'"+$(obj).attr("val")+"',";
				}
			});
			if(flag){
				if(arrayList.length>0){
					param[$(ob).attr("name")+"_in"] = arrayList;
				}
			}else{
				if(arrayStr != ""){
					if(arrayStr.indexOf("'")==0){
						arrayStr = arrayStr.substring(1);
					}
					if(arrayStr.lastIndexOf("',")==arrayStr.length-2){
						arrayStr = arrayStr.substring(0,arrayStr.length-2);
					}
				}
				param[$(ob).attr("name")+"_in"] = arrayStr;
			}
		}
	});
	return param;
}
//处理时间段的函数
function setDateParam(param){
	var body = {};
	if(null != param){
		for(key in param){
			if(key.indexOf("start_")==0 && key.indexOf(",") > 0 ){//以start开头 并且有逗号
				var startStr = key.substring(6,key.length);
				var startValue = param[key];
				for(twoKey in param){
					if(twoKey.indexOf("end_")==0 && twoKey.indexOf(",") > 0 ){//以end_开头 并且有逗号
						var endStr = twoKey.substring(4,twoKey.length);
						if(startStr == endStr){
							var endValue = param[twoKey];
							//去掉_array
							/*var v = endStr.substring(0,endStr.indexOf("_ARRAY"));
							v += endStr.substring(v.length+6,endStr.length);
							body[v] = startValue+","+endValue;*/
							if(startStr.lastIndexOf("_ARRAY") != startStr.length-6){
								body[startStr+"_ARRAY"] = startValue+","+endValue;
							}else{
								body[startStr] = startValue+","+endValue;
							}
						}
					}
				}
			}else if(key.indexOf("start_")==0){//以start开头
				var startStr = key.substring(6,key.length);
				var startValue = param[key];
				for(twoKey in param){
					if(twoKey.indexOf("end_")==0){//以end_开头 
						var endStr = twoKey.substring(4,twoKey.length);
						if(startStr == endStr){
							var endValue = param[twoKey];
							if(startStr.lastIndexOf("_ARRAY") != startStr.length-6){
								body[startStr+"_ARRAY"] = startValue+","+endValue;
							}else{
								body[startStr] = startValue+","+endValue;
							}
						}
					}
				}
			}else if(key.indexOf("end_")==0 && key.indexOf(",") > 0 ){
				//不处理
			}else{
				body[key] = param[key];
			}
		}
	}
	return body;
}
/**
 * 分析url中的参数  
 * 将参数转为对象
 * @returns {___anonymous9918_9919}
 */
function getRequestParam(flag){
	//reportPid=salesTask&filter_userId=LIUYU&encoder=TElVWVUrMTAvMjg5LzIwMTcgMTU6Mjk6MzE=
	var requestUrl = window.location.href;
	var obj = {};
	if(requestUrl != null && requestUrl != "" && typeof(requestUrl) != "undefined"){
		var urlArray = requestUrl.split("?");
		if(urlArray.length==2){
			var params = urlArray[1].split("&");
			for (var i = 0; i < params.length; i++) {
				var item = params[i].split("=");
				//if(item[0] != "filter_userId"){
					obj[item[0]] = item[1];
				//}
			}
		}
	}
	if(getValue(obj.reportPid) == "customerAndStoreClassify"){
		delete obj["filter_userId"];
	}
	if(flag){
		for(key in obj){
			if(key == "reportPid"){
				obj["报表父Id"] = obj[key];
			}else if(key == "reportId"){
				obj["报表Id"] = obj[key];
			}else if(key == "username" || key == "loginName" || key == "filter_userId"){
				obj["用户名"] = obj[key];
			}
		}
		delete obj.reportPid;
		delete obj.reportId;
		delete obj.username;
		delete obj.loginName;
		delete obj.filter_userId;
	}
	return obj;
}

/**
 * 清空
 */
function clearGlobal(callBack,divId){
	if(divId){
		$("#"+divId).find("input[type='text']").each(function(i,o){//select
			$(o).val("");
		});
	}
	$("span.act:not(.all)").removeClass("act");
	$("span.all").addClass("act");
	if(callBack && typeof callBack=='function'){
		callBack();
	}
}

/**
 * 提交form
 * @param service
 * @param obj
 */
function submitExcleGlobal(service,obj,ths,method,enctype){
	var $form = $("#submitExcelGlobal");
	var type = "get";
	var enctypeHtml = "";
	if(method && typeof method == "string"){
		type = method;
	}
	/*if(enctype){
		enctypeHtml = 'enctype="application/json"';
	}*/
	if($form && $form.length == 0){
		var form = '<form action="'+service+'" method="'+type+'" id="submitExcelGlobal" '+enctypeHtml+' target="iframeGloable">';
		form += '</form>';
		form += '<iframe name="iframeGloable" id="iframeGloable" style="display:none"></iframe>';
		$("body").append(form);
	}
	var inputHtml = "";
	if(obj && typeof obj == "object"){
		for(var key in obj){
			if(obj[key] && key.indexOf("start_")<0 && key.indexOf("end_")<0){
				inputHtml += '<input type="hidden" name="'+key+'" value=\''+obj[key]+'\'/>';
			}
		}
	}
	$("#submitExcelGlobal").html(inputHtml);
	if(ths){
		$(ths).html("进行中");
		$(ths).attr("onclick","");
		$(ths).attr("href","javascript:;");
	}
	$("#submitExcelGlobal").submit();
}


/**
 * 
 * @param {*克隆一个对象} obj 
 */
function globalClone(obj){
	var o;
	switch(typeof obj){
	case 'undefined': break;
	case 'string'   : o = obj + '';break;
	case 'number'   : o = obj - 0;break;
	case 'boolean'  : o = obj;break;
	case 'object'   :
		if(obj === null){
			o = null;
		}else{
			if(obj instanceof Array){
				o = [];
				for(var i = 0, len = obj.length; i < len; i++){
					o.push(globalClone(obj[i]));
				}
			}else{
				o = {};
				for(var k in obj){
					o[k] = globalClone(obj[k]);
				}
			}
		}
		break;
	default:		
		o = obj;break;
	}
	return o;	
}



/*** 	没有面包屑的时候			*/
/**
 * 拼接搜索条件的页面
 * @param inputArray
 * @param dateArray
 * @param muilSelectArray
 * @param selectArray
 */
function getSearchHtml1(inputArray,dateArray,muilSelectArray,selectArray){
	var html = '';
	//日期类控件
	if(dateArray && dateArray instanceof Array && dateArray.length>0){
		 //html += getSearchDateHtml1(dateArray);
		$("#searchHead").append(getSearchDateHtml1(dateArray));
	}
	
	//文本类 控件
	if(inputArray && inputArray instanceof Array && inputArray.length>0){
        if($("#searchHead").children("select").length == 0){
            html += getSearchTextHtml1(inputArray);
        }
	}
	
	//下拉框控件
	if(inputArray && inputArray instanceof Array && inputArray.length>0){
        if($("#searchHead").children("input").length == 0){
            html += getSearchSelectHtml1(selectArray);
        }
	}
	
	$("#searchHead").prepend(html);//条件搜索区域
	
	//muilSelect  多选框
	var mHtml =  '';
	if(muilSelectArray && muilSelectArray.length>0){
		mHtml += getSearchMuselectHtml(muilSelectArray);
		
		mHtml += '<div class="btn-box">';
		mHtml += '	<input type="button" value="确定" class="sure-btn" id="searchBtn2"/>';
		mHtml += '	<input type="button" value="清空筛选" class="clear-btn" id="clearBtn2"/>';
		mHtml += '</div>';
	}
	$("#muilSelectOption").html(mHtml);
}
//下拉框
function getSearchSelectHtml1(selectArray){
	var html = '<div class="outstore">';
	for(var i=0;i<selectArray.length;i++){
		var item = selectArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;
		var sqlList = item.sqlList;
		html += '<span>'+name+'：</span>';
		html += '<select name="'+code+'" fname="'+name+'" class="select sl">';
		//html += '<option value="">--请选择--</option>';
		if(item.sqlList != null && item.sqlList != ""){
			var sqlList = JSON.parse(item.sqlList);
			for(var j=0;j<sqlList.length;j++){
				var sqlItem = sqlList[j];
				var value = '';
				for(var m in sqlItem){
					value = sqlItem[m];
				}
				if(getValue(value) != ""){
					html += '<option value="'+value+'">'+value+'</option>';
				}
			}
		}
		html += '</select>';
	}
	return html;
}

//文本类
function getSearchTextHtml1(inputArray){
	var html = '<select class="select" id="selectInput">';
	for(var i=0;i<inputArray.length;i++){
		var item = inputArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;//input
		html += '<option value="'+code+'">'+name+'</option>';
	}
	html += '</select>';
	html += '<input type="text" name="" class="search" value="" placeholder="请输入搜索内容" />';
	html += '<input type="button" id="queryBtnSearch" class="search-btn" value="搜索" />';
	return html;
}
//日期类
function getSearchDateHtml1(dateArray){
	var html = '<div class="outstore out">';
		html += '	<select class="select" id="selectDate">';
	for(var i=0;i<dateArray.length;i++){
		var item = dateArray[i];
		var name = item.NAME;
		var code = item.CODE;
		var type = item.TYPE;
		html += '<option value="'+code+'">'+name+'</option>';
	}
	html += '	</select>';
	html += '	<i class="icon"></i>';
	html += '	<input type="text" class="form-control date start da '+type+'"/>';
	html += '	<span class="crossbar">—</span>';
	html += '	<i class="icon"></i>';
	html += '	<input type="text" class="form-control date end da '+type+'"/>';
	html += '</div>';
	return html;
}

/***
 * 判断sible中的参数
 */
function getSibleRequestParam(){
	var map = getRequestParam();
	if(map && map.sibleFlag){
		return {"sibleFlag":map.sibleFlag};
	}
	return {};
}
