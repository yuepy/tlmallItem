import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';
/**
 * 签退
 * @param {*} data 
 */
var referenceHtmlFn;
export var load = function(data){
    referenceHtmlFn = data.fn;
    data.fn = "";
    doAction(data)
}
function doAction(data){
    $("#customersign-content .customersign-mapcontent-textbottomspan").each(function(){
        data[$(this).attr("name")] = $(this).html();
    });
    data.AssignOutComments = $.trim($("#remarktextname").val());
    data.AcitonEAIId = data.row_Id;
    data.ActionStatus = "已签退";
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerVisitPlan/addCustomerSignOut`,
        data:data,
        dataType: 'json',
        type: 'post',
        success: function (reslult) {
            referenceHtmlFn();//刷新父页面
            iframeUtils.hideSecondIframe();//关闭
            if(reslult.status == "true"){
                alert(reslult.status);               
                //window.parent.referenceHtml();
            }else{
                alert("签到失败！");
            }
        },
        error: function (e) {
            console.error(e);
        }        
    });
}