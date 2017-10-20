import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 生成客户客户画像模版
 * @param {*} client 
 * @return string 返回的模版
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customerPhoto/getCustomerPhotoByCustomerCode?customerCode=`+userId,
        success: function (data) {
            console.log(data);
            $(Constant.MAIN_MOUNT).html(render(data.customerPhoto,data.customerThreeMonthDeliveryList,data.customerModelLimitList));
        },
        error: function (e) {
            console.error(e);
        },
        dataType: 'json',
        type: 'GET'
    });
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customerPhoto/getCustomerPhotoByCustomerCode?customerCode=`+userId);//@todo 为了适配，这一步务必加上
}

function render(customerPhoto,customerThreeMonthDeliveryList,customerModelLimitList) {
    let portraitTemp =
        `
        <div id="portraitContent" class='common-content-style'>
            <div class='row'>
                <div class="portrait-content-top common-content-border-style">
                    <div class="portrait-content-common-head">
                        <span></span>
                        <span>客户画像</span>
                    </div>
                    <div class='col-sm-6 col-md-6'>
                        <div class="portrait-content-head-left portrait-content-left-text">
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>是否激活</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.custStatCd == null ? '' : customerPhoto.custStatCd}</span></div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>下单情况</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.orderType == null ? '' : customerPhoto.orderType}</span></div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>支付方式</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.payType == null ? '' : customerPhoto.payType}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class='col-sm-6 col-md-6'>
                        <div class="portrait-content-head-left">
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>合作品牌</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.prodBrandList == null ? '' : customerPhoto.prodBrandList}</span></div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>合作品类</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.prodTypeList == null ? '' : customerPhoto.prodTypeList}</span></div>
                            </div>
                            <div class="col-sm-4 col-md-4">
                                <div class='portrait-top-text'><span>合作网络版本</span></div>
                                <div class='portrait-top-text portrait-top-xm-text'><span>${customerPhoto.prodNetwList == null ? '' : customerPhoto.prodNetwList}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portrait-content-bottom ">
                    <div class="col-sm-6 col-md-6">    
                        <div class='portrait-icon-leftblur'>                              
                            <div class="portrait-content-bottom-left portrait-content-common">
                                <div class="portrait-content-common-head">
                                    <span></span>
                                    <span>近三月提货量</span>
                                </div>
                                <div class="left-content">
                                    <table class="table common-table-even">
                                        <thead class='portrait-table-head'>
                                            <th>提货量</th>
                                            <th>提货日期</th>
                                        </thead>
                                            <tbody>
                                                ${customerThreeMonthDeliveryList == null ? '' : customerThreeMonthDeliveryList.map((item) => {
                                                    return `
                                                        <tr>
                                                            <td class="textsumber-color">${item.qty}</td>
                                                            <td>${item.month}</td>
                                                        </tr>
                                                    `;
                                                }).join('')}
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 delect-div">
                        <div class="portrait-icon-rightblur">
                        <div class="portrait-content-bottom-right portrait-content-common">
                            <div class="portrait-content-common-head">
                                <span></span>
                                <span>上月TOP10型号</span>
                            </div>
                            <div class="right-content">
                                <div class='right-content-head'>
                                    <span class='col-sm-4 col-md-4'>排名</span>
                                    <span class='col-sm-4 col-md-4'>机型</span>
                                    <span class='col-sm-4 col-md-4'>数量</span>
                                </div>
                                ${customerModelLimitList == null ? '' : customerModelLimitList.map((item) => {
                                    return `
                                        <ul class='left-content-text col-sm-4 col-md-4 number'>
                                            <li><span>${item.rowNum}</span></li>
                                        </ul>
                                        <ul class='left-content-text col-sm-4 col-md-4 type'>
                                            <li><span>${item.modelName}</span></li>
                                        </ul>
                                        <ul class='left-content-text col-sm-4 col-md-4 count'>
                                            <li><span class='common-text-color'>${item.qty}</span></li>
                                        </ul>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return portraitTemp;
}

