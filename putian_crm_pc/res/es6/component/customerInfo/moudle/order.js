import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 订单模块
 * @return string 返回的模版
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
   let body = {ouNum:userId};
   $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customerCreditLimitAndDetial/getOrderList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
            $(Constant.MAIN_MOUNT).html(render(data));
        },
        error: function (e) {
            console.error(e);
        }        
    });   
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customerCreditLimitAndDetial/getOrderList`);//@todo 为了适配，这一步务必加上
}

function render(data) {
    let temp =
    `
    <div id='order-parent-border'>
        <div class="ordercontent">
                <table class="table content-order">
                    <thead>
                        <tr>
                            <th>销售订单号</th>
                            <th >客户名称</th>
                            <th>销售订单类型</th>
                            <th>状态</th>
                            <th>客户PO</th>
                            <th>三星PO</th>
                            <th>三星客户级别</th>
                            <th>代码</th>
                            <th>分公司名称</th>
                            <th>商务人员名称</th>
                            <th>销售人员</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${data == null ? '' : data.map((item) => {
                    return `
                            <tr>
                                <td>${item.orderNum}</td>
                                <td>${item.name==null?'':item.name}</td>
                                <td>${item.xOrderType==null?'':item.xOrderType}</td>
                                <td>${item.statusCD==null?'':item.statusCD}</td>
                                <td>${item.accntOrderPo==null?'':item.accntOrderPo}</td>
                                <td>${item.accntOrderNum==null?'':item.accntOrderNum}</td>
                                <td>${item.prioCD==null?'':item.prioCD}</td>
                                <td>${item.frghtTermsInfo==null?'':item.frghtTermsInfo}</td>
                                <td>${item.orgName==null?'':item.orgName}</td>
                                <td>${item.empName==null?'':item.empName}</td>
                                <td>${item.salesName==null?'':item.salesName}</td>
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

