import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';
/**
 * @description 拜访计划 and 临时计划
 */
export var load = function (body,body1) {
    doAction(body,body1);
}
var onclickId = "";
function doAction(body,body1) {
	$.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/getCustomerActionPlanList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
			$('#visitPlanList').html(renderVisit(data.visit));
            $("#visitPlanList .btns a.report").on('click', function (e) {
                e.preventDefault();
                let target = e.target;
                let row_Id = $(this).attr("val");
                onclickId = $(this).attr("id");
                body1.row_Id = row_Id;
                body1.xPlanType = "WithinPlan";
                body1.fn = referenceHtml;
                if (target.tagName.toLowerCase() == 'a') {
                    //var grandEl = target.parentElement.parentElement;
                    iframeUtils.createIframe(`${Constant.SECOND_LEVEL_IFRAME_NAME}`, target.href, '#contentContainer',body1);
                }
            });	                 
            $('#tempPlanList').html(renderTemp(data.temp));
            $("#tempPlanList .btns a.report").on('click', function (e) {
                e.preventDefault();
                let target = e.target;
                let row_Id = $(this).attr("val");
                onclickId = $(this).attr("id");
                body1.row_Id = row_Id;
                body1.xPlanType = "OutOfPlan";
                body1.fn = referenceHtml;
                if (target.tagName.toLowerCase() == 'a') {
                    //var grandEl = target.parentElement.parentElement;                           
                    iframeUtils.createIframe(`${Constant.SECOND_LEVEL_IFRAME_NAME}`, target.href, '#contentContainer',body1);
                }
            });
        },
        error: function (e) {
            console.error(e);
        }        
    });   
}
function renderVisit(list){
    let temp =
    `
     ${list == null ? "" : list.map((item) => {
        return `
        <div class="u-lists-one ">
            <input name="visitCustomerCode" value="${item.ouNum}" type="hidden"/>
            <h5 class="title ">${item.name}</h5>
            <i class="icon icon-close "></i>
            <div class="time ">创建时间<b>${item.created}</b></div>
            <div class="btns ">
                <a href=" ">PSI采集</a>
                <a id="caiji${item.row_Id}" val='${item.row_Id}' class='${item.asgnDT==null?'report':''}' style='${item.asgnDT==null?'color:blue;':''}' 
                href="${item.asgnDT==null?'customerSign.html':'javascript:void(0)'}">${item.asgnDT==null?'未签到':'签到'}</a>
                <a id="qiantui${item.row_Id}" val='${item.row_Id}' class='${item.xAssignoutDT==null?'report':''}' style='${item.xAssignoutDT==null?'color:blue;':''}' 
                href="${item.xAssignoutDT==null?'vistiSignOut.html':'javascript:void(0)'}">${item.xAssignoutDT==null?"未签退":"签退"}</a>                
                <a id="baogao${item.row_Id}" val='${item.row_Id}' class='${item.xCompletedDate==null?'report':''}' style='${item.xCompletedDate==null?'color:blue;':''}'
                href="${item.xCompletedDate==null?'customerReportPop.html':'javascript:void(0)'}">${item.xCompletedDate==null?"未报告":"报告"}</a>
            </div>
        </div>
        `;
    }).join('')}
    `;
    return temp;
}

function renderTemp(list){
    let temp =
    `
     ${list == null ? "" : list.map((item) => {
        return `
        <div class="u-lists-one ">
            <input name="tempCustomerCode" value="${item.ouNum}" type="hidden"/>
            <h5 class="title ">${item.name}</h5>
            <a href="javascript:; " class="icon icon-close "></a>
            <div class="time ">创建时间<b>${item.created}</b></div>
            <div class="btns ">
                <a href=" ">PSI采集</a>
                <a id="caiji${item.row_Id}" val='${item.row_Id}' class='${item.asgnDT==null?'report':''}' style='${item.asgnDT==null?'color:blue;':''}' 
                href="${item.asgnDT==null?'customerSign.html':'javascript:void(0)'}">${item.asgnDT==null?'未签到':'签到'}</a>
                <a id="qiantui${item.row_Id}" val='${item.row_Id}' class='${item.xAssignoutDT==null?'report':''}' style='${item.xAssignoutDT==null?'color:blue;':''}' 
                href="${item.xAssignoutDT==null?'vistiSignOut.html':'javascript:void(0)'}">${item.xAssignoutDT==null?"未签退":"签退"}</a> 
                <a id="baogao${item.row_Id}" val='${item.row_Id}' class='${item.xCompletedDate==null?'report':''}' style='${item.xCompletedDate==null?'color:blue;':''}'
                href="${item.xCompletedDate==null?'customerReportPop.html':'javascript:void(0)'}">${item.xCompletedDate==null?"未报告":"报告"}</a>
            </div>
        </div>
        `;
    }).join('')}
    `;
    return temp;
}
/**
 * 刷新页面
 */
function referenceHtml(){
    $("#"+onclickId).removeClass("report");
    $("#"+onclickId).css("color","");
    $("#"+onclickId).attr("href","javascript:void(0)");
    $("#"+onclickId).unbind();
    if(onclickId.substring(0,1)=="c"){
        $("#"+onclickId).html("&nbsp;&nbsp;签到&nbsp;&nbsp;");
    }else if(onclickId.substring(0,1)=="q"){
        $("#"+onclickId).html("签退");
    }else{
        $("#"+onclickId).html("报告");
    }    
}