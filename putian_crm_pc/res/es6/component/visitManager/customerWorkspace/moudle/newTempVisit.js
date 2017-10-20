import * as Constant from '../../../../constant/constant.js';
/**
 * @description 临时Plan模块
 */
export var load = function () {
    doAction();
}

function doAction() {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getCustomerVisitList?customerName=`+$("#newTempVisitSearchText").val(),
        success: function (data) {
            console.log(data);
            $('#newTempVisit').html(render(data));
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
                            <div class="ck"><input type="checkbox"></div>
                        </td>
                        <td>${item.customerName}</td>
                        <td>拜访要求：<b>${item.frequency}</b>次/${item.period}</td>
                        <td>已拜访次数：<b>${item.visitCount==null?'0':item.visitCount}</b></td>
                    </tr>
                `;
            }).join('')}
        </table>
    `;
    return temp;
}

