import * as Constant from '../../../../constant/constant.js';
/**
 * @description 新建Plan模块
 */
export var load = function () {
    doAction();
}

function doAction() {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getCustomerVisitList?customerName=`+$("#newPlanListSearchText").val(),
        success: function (data) {
            console.log(data);
            $('#newPlanList').html(render(data));
            $("input[name='visitCustomerCode']").each(function(){
                $("#cList_"+$(this).val()).attr("checked","checked");
            });
            $("#dayPlanContent").val($("#workPlan").html());
        },
        error: function (e) {
            console.error(e);
        },
        dataType: 'json',
        type: 'GET'
    });
}

function render(data) {
    let temp =
    `
        <table class="table">
            ${data.customerVisitList == null ? '' : data.customerVisitList.map((item) => {
                return `
                    <tr>
                        <td>
                            <div class="ck"><input id="cList_${item.customerCode}" name="newPlanChk" type='checkbox' value="${item.userId}:${item.frequency}:${item.period}:${item.visitCount}:${item.customerCode}"/></div>
                        </td>
                        <td>${item.customerName}</td>
                        <td>拜访要求：<b>${item.frequency}</b>次/${item.period}</td>
                        <td>已拜访次数：<b>${item.visitCount}</b></td>
                    </tr>
                `;
            }).join('')}
        </table>
    `;
    return temp;
}

