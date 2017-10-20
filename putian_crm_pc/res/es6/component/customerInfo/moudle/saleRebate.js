import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 销售返利模块
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customer/getCustomerRebateByCustomerCode?customerCode=`+userId,
        success: function (data) {
            console.log(data);
            $(Constant.MAIN_MOUNT).html(render(data));
        },
        error: function (e) {
            console.error(e);
        },
        dataType: 'json',
        type: 'GET'
    });
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customer/getCustomerRebateByCustomerCode?customerCode=`+userId);//@todo 为了适配，这一步务必加上
}

function render(data) {
    let temp =
    `
    <div id="salesrebate-content">
        <div class="salesrebate-contenttable">
            <table class="table content-salesrebate">
                <thead>
                    <tr>
                        <th>返利编码</th>
                        <th>分公司</th>
                        <th>事业部</th>
                        <th>项目</th>
                        <th>型号</th>
                        <th>数量</th>
                        <th>返利金额</th>
                        <th>可用金额</th>
                        <th>生效日期</th>
                        <th>失效日期</th>
                        <th>返利类型</th>
                        <th>返利状态</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.customerRebateList == null ? '' : data.customerRebateList.map((item) => {
                        return `
                            <tr>
                                <td>${item.discountId}</td>
                                <td>${item.organization==null?'':item.organization}</td>
                                <td>${item.deptName==null?'':item.deptName}</td>
                                <td>${item.project==null?'':item.project}</td>
                                <td>${item.model==null?'':item.model}</td>
                                <td class="salesrebate-clsnumber">${item.qty==null?'':item.qty}</td>
                                <td class="salesrebate-clsmoney">${item.discountAmt==null?'':item.discountAmt}</td>
                                <td class="salesrebate-clsmoney">${item.availableAmt==null?'':item.availableAmt}</td>
                                <td>${item.beginDate==null?'':item.beginDate}</td>
                                <td>${item.endDate==null?'':item.endDate}</td>
                                <td>${item.discountType==null?'':item.discountType}</td>
                                <td>${item.discountStatus==null?'':item.discountStatus}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    </div>
    `;
    return temp;
}