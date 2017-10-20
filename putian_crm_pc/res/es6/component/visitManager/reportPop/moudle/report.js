import * as Constant from '../../../../constant/constant.js';

/**
 * 报告数据加载
 * @param {*} data 
 */
export var load = function (data) {
    doAction(data);
}

//加载数据
function doAction(data) {
    if(data.xPlanDate != null){
        var xpd = data.xPlanDate.split('/');
        if(xpd.length == 3){
            $("#planDate").html(xpd[2]+"-"+xpd[0]+"-"+xpd[1]);
        }
    }
    $("#planCreateDate").html(data.created);

    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getMyReportByActionId?actionId=`+data.row_Id,
        data:data,
        dataType: 'json',
        type: 'post',
        success: function (reslult) {
            if(reslult.status == "true" && result.myReport != null){
                console.log(result);
            }
        },
        error: function (e) {
            console.error(e);
        }
    });
}