import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 电子钱包模块
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customer/getCustomerElectronicWalletByCustomerCode?customerCode=C15920013`,
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
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customer/getCustomerElectronicWalletByCustomerCode?customerCode=`+userId);//@todo 为了适配，这一步务必加上
}

function render(data) {
    let temp =
    `
     <div id="walletmoney-content">
        <div class=${data.customerElectronicWalletList == null ? '' : 'row' }>
                ${data.customerElectronicWalletList == null ? `<div class='walleMoney-null'>${data.message}</div>` : data.customerElectronicWalletList.map((item) => {
                    return `
                        <div class="content">
                            <div class="contenttop">
                                <span>${item.organization == null ? '' : item.organization}</span>
                            </div>
                            <div class="contentbottom">
                                <div class="col-sm-4 col-md-4">
                                    <div class="contenttext">
                                        <div class="contenttext-top contenttext-center">总额(元):</div>
                                        <div class="contenttext-bottom contenttext-center">${item.amount == null ? '' : item.amount}</div>
                                    </div>
                                </div>  
                                <div class="col-sm-4 col-md-4">  
                                    <div class="contenttext">
                                        <div class="contenttext-top contenttext-center">冻结金额(元):</div>
                                        <div class="contenttext-bottommiddle contenttext-center">${item.freezeAmount == null ? '' : item.freezeAmount}</div>
                                    </div>
                                </div>    
                                <div class="col-sm-4 col-md-4">
                                    <div class="contenttext">
                                        <div class="contenttext-top contenttext-center">可用金额(元):</div>
                                        <div class="contenttext-bottomright contenttext-center">${item.useableAmount == null ? '' : item.useableAmount}</div>
                                    </div>
                                </div> 
                                <div class='clear_float'></div>    
                            </div>
                        </div>
                    `;
                }).join('')}
        </div>
    </div>
    `;
    return temp;
}

