import * as Constant from '../../../constant/constant.js';
import * as calendar from '../../../common/calendar.js';
import * as navigator from '../../../common/navigator.js';
import * as newPlan from './moudle/newPlan.js';
import * as newTempVisit from './moudle/newTempVisit.js';
import * as visitPlanList from './moudle/visitPlanList.js';
import * as tempPlanList from './moudle/tempPlanList.js';
var cal = null;
$(document).ready(function() {
	//加载模块
	//1.加载菜单导航条
    navigator.load(["拜访管理","拜访"]);
	//visitPlanList.load();
	//tempPlanList.load();
	inintWorkPlan('');//工作计划
	var currentDay;
	var $calendar = $('#calendar'),
		$month,
		$year,
		$date,
		onDayBack = function(data1){
			$month.html(data1.month);
			$year.html(data1.year);
			$date.html(data1.day);
			currentDay = data1.day;
			inintWorkPlan(data1.year+"-"+data1.month+"-"+data1.day);//	
		};
	var callback = function(data){
	    cal = calendar.getInstance(data,onDayBack,$calendar); 
		currentDay = cal.getDate();
		$month = $('#custom-month').html(cal.getMonthStr());
		$year = $('#custom-year').html(cal.getYear());
		$date = $('#custom-date').html(cal.getDateStr());
	}
    inintCanlendarPlan('',callback);
    $('#custom-next').unbind('click').on('click',function() {  
		var callback = function(data){
			cal.gotoNextMonth(updateMonthYear,data);
			updateWorkPlanView();
		}; 	
		inintCanlendarPlan(cal.getTimeByNextMonth(),callback);	
    });
    $('#custom-prev').unbind('click').on('click',function() {		
		var callback = function(data){
			cal.gotoPreviousMonth(updateMonthYear,data);
			updateWorkPlanView();
		}
		inintCanlendarPlan(cal.getTimeByPreMonth(),callback);
	});

    function updateMonthYear() {
        updateCalendar();
    }
	function updateCalendar() {
       for (var item of $('#calendar span.calendar-cell > b')){
          if(item.textContent == currentDay){
              item.click();
              break;
		  }
	   }
    }
	//日历操作结束
	function updateWorkPlanView(){
		$('#workPlanFill').css('height',`${$('#workPlanCalendar')[0].offsetHeight}px`);
	}

	/** 加载制定拜访计划客户列表 */
	$('#newPlanAddButton,#newPlanListSearch').click(function(){
		newPlan.load();
	});
	
	/** 加载临时拜访计划客户列表 */
	$('#newTempVisitButton,#newTempVisitSearch').click(function(){
		newTempVisit.load();
	});

	/** 新增拜访计划 */
	$('#addDayPlanOkBtn').click(function(){
		var planRowId = $("#planRowId").val();
		var planEaiId = $("#planEaiId").val();
		var planDate = $("#currentSelectDay").val();
		var planComment = $("#dayPlanContent").val();
		var cusInfo = "";
		$("#newPlanList input[name='newPlanChk']:checked").each(function(){
			cusInfo += $(this).val() + ",";
		});
		if(planComment == ''){
			alert("请输入计划内容!");
			return;
		}
		
		$.ajax({
			type: "POST",
            url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/addCustomerVisitPlan`,
           	data: {planComment:planComment,cusInfo:cusInfo,planEaiId:planEaiId,planRowId:planRowId,planDate:planDate},
            dataType: "json",
            success: function(data){
				if(data.status == 'true'){
					console.log("添加成功!");
					inintWorkPlan(planDate);
					$("#addDayPlanCancleBtn").click();
				}else{
					console.log("添加失败!");
				}
			}
		});
	});

	//删除计划
	$("#newPlanDeleteButton").click(function(){
		$.ajax({
			url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/deleteCustomerVisitPlan`,
			data:{planEaiId:$("#planEaiId").val()},
			dataType: 'json',
			type: 'post',
			success: function (data) {
				if(null != data && data.status == 'true'){
					inintWorkPlan($("#currentSelectDay").val());
				}			                 
			},
			error: function (e) {
				console.error(e);
			}
		});
	});

	/** 新增临时拜访计划 */
	$('#addTempDayPlanOkBtn').click(function(){
		$.ajax({
			type: "POST",
            url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/addTempCustomerVisitPlan`,
           	data: {planComment:$("#dayPlanContent").val()},
            dataType: "json",
            success: function(data){
				console.log(data);
				if(data.status == 'true'){
					console.log("添加成功!");
					$("#addTempDayPlanCancleBtn").click();
				}else{
					console.log("添加失败!");
				}
			}
		});
	});
});

/**
 * 初始化日历数据
 * @param {* } xPlanDate 
 * @param {*} callback 
 */
function inintCanlendarPlan(xPlanDate,callback){
	let body = {xPlanDate:xPlanDate};
	$.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/getCustomerPlanCalendar`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
			if(null != data && data.length>0){
				callback(data);
			}			                 
        },
        error: function (e) {
            console.error(e);
        }        
    });
}

/**
 * 工作计划
 * @param {} xPlanDate 
 */
function inintWorkPlan(xPlanDate){
	$("#currentSelectDay").val(xPlanDate);
	let body = {xPlanDate:xPlanDate};
	$.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/getCustomerPlanList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
			if(null != data && null != data.customerPlanList && data.customerPlanList.length>0){
				var d = data.customerPlanList[0];
				$("#workPlan").html(d.commentsLong);
				$("#workPlanNoConstitute").hide();
				$("#workPlanHaveConstitute").show();
				$("#newPlanAddButton").html('编辑');
				$("#newPlanDeleteButton").attr("style","");
				$("#planRowId").val(d.planRowId);
				$("#planEaiId").val(d.planEaiId);
				body.row_Id = d.planRowId;
				visitPlanList.load(body,d);//拜访计划
			}else{
				$("#workPlanNoConstitute").show();
				$("#workPlanHaveConstitute").hide();
				$("#newPlanAddButton").html('新建');
				$("#newPlanDeleteButton").attr("style","display:none;");
				$("#planRowId").val('');
				$("#planEaiId").val('');
				$("#workPlan").html('工作计划尚未制定');
				$('#visitPlanList').html('');
				$('#tempPlanList').html('');
				if(data.isAllowAddVisit == true){
					$("#newPlanAddButton").attr("style","");
				}else{
					$("#newPlanAddButton").attr("style","display:none;");
				}
			}
        },
        error: function (e) {
            console.error(e);
        }        
    });
}