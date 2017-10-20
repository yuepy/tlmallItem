import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';
/**
 * @description 拜访查看列表
 * @return string 返回的模版
 */
export var load = function () {
    //doAction();
    getBaseDataAction();
}
function getBaseDataAction(){
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getBaseData`,
        data:'',
        dataType: 'json',
        type: 'post',
        success: function (result1) {
            let flag = result1.flag;
            if(null != flag && flag != "0"){
                $("#VisitLook_Branch").html(renderBaseData(result1.branchList,"1"));
                $("#VisitLook_Office").html(renderBaseData(result1.officeList,"2"));
                $("#VisitLook_Salesman").html(renderBaseData(result1.salesmanList,"3"));
                $("#VisitLook li.flag").unbind("click").on("click",function(){
                    $($(this).find("a")).css("color","#5991F8")
                    $(this).siblings().each(function(index,obj){
                        $($(obj).find("a")).css("color",'#000');
                    })
                    $(this).addClass("roleFlag");
                    $(this).siblings().removeClass("roleFlag");
                    doAction();
                });
                doAction();
            }
        },
        error: function (e) {
            console.error(e);
        }        
    });		
}

function isHaveAll(len,onFlag){
    if(len>1){
        return '<li class="flag" val="" val1="'+onFlag+'" val2=""><a href="javascript:;">全部</a></li>';
    }else{
        return '';
    }
}
function getBaseDataHeader(id,onFlag,name,index){
    if(index=='0'){
        return '<li class="flag roleFlag" val="'+id+'" val1="'+onFlag+'" val2="'+name+'"><a href="javascript:;" style="color:#5991F8">'+name+'</a></li>';
    }else{
        return '<li class="flag" val="'+id+'" val1="'+onFlag+'" val2="'+name+'"><a href="javascript:;">'+name+'</a></li>';
    }
}
function renderBaseData(list,onFlag){
    let temp = ` 
        ${list == null ? "" : isHaveAll(list.length,`${onFlag}`)}
        ${list == null ? "" : list.map((item,index) => {
            return getBaseDataHeader(`${item.id}`,`${onFlag}`,`${item.name}`,`${index}`);            
        }).join('')}
    `
    return temp;    
}
function doAction() {
    let branchName = '';
    let officeName = '';
    let positionId = '';
    let dateTimeFlag = '';
    if($("#VisitLook_Branch li.roleFlag").length>0 ){
        branchName = $("#VisitLook_Branch li.roleFlag").attr("val2");
    }
    if($("#VisitLook_Office li.roleFlag").length>0 ){
        officeName = $("#VisitLook_Office li.roleFlag").attr("val2");
    }
    if($("#VisitLook_Salesman li.roleFlag").length>0 ){
        positionId = $("#VisitLook_Salesman li.roleFlag").attr("val");
    }
    if($("#VisitLook_dateTime li.roleFlag").length>0 ){
        dateTimeFlag = $("#VisitLook_dateTime li.roleFlag").attr("val");
    }

    let body = {branchName:branchName,officeName:officeName,positionId:positionId,dateTimeFlag:dateTimeFlag};
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getCustomerPositionViewList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
				$('#VisitLooKTbody').html(render(data))
                $("#VisitLooKTbody tr").on('click', function (e) {
                    e.preventDefault();
                    let currentTarget = e.currentTarget;
                    let xPriPostnId = $(this).attr('val');
                    let xPlanDate = $(this).attr("val1");
                    if (currentTarget.tagName.toLowerCase() == 'tr') {
                        var bussinessUser = currentTarget.children[0].textContent;
                        var owerBanshichu = currentTarget.children[1].textContent;
                        var ownerBranchCompany = currentTarget.children[2].textContent;
                        iframeUtils.createIframe(`${Constant.SECOND_LEVEL_IFRAME_NAME}`, './visitdetails.html', '#contentContainer',
                        {bussinessUser:bussinessUser,owerBanshichu:owerBanshichu,ownerBranchCompany:ownerBranchCompany,xPriPostnId:xPriPostnId,xPlanDate:xPlanDate});
                    }
                });
        },
        error: function (e) {
            console.error(e);
        }        
    });		
}
function render(list){
    let temp = `    
    ${list == null ? "" : list.map((item) => {
            return `
            <tr val="${item.positionId}" val1="${item.dateTime}">
                <td>${item.lastName}</td>
                <td>${item.officeName}</td>
                <td>${item.branchName == null ? "" : item.branchName}</td>
                <td>${item.positionName}</td>
                <td>${item.reportCount}</td>
                <td>${item.dateTime}</td>
                <td>${item.dateTime}</td>
                <td>${item.isvisit}</td>
                <td>${item.isFinishVisit}</td>
                <td>${item.isHasPlan}</td>
            </tr>
            `;
        }).join('')}
    `
    return temp;
}