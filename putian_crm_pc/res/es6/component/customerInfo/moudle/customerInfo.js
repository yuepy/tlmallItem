import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 生成客户信息模版
 * @param {*} client 
 * @return string 返回的模版
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
    var url = `${Constant.SERVER_ROOT}/pttlCrm/cust/customer/getCustomerByCode?customerCode=`+userId;
    $.ajax({
        url: url,
        success: function (data) {
            console.log(data);
            $(Constant.MAIN_MOUNT).html(render(data.customer,data.customerOrgList));
        },
        error: function (e) {
            console.error(e);
        },
        dataType: 'json',
        type: 'GET'
    });
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customer/getCustomerByCode?customerCode=`+userId);//@todo 为了适配，这一步务必加上
}

function render(customer,customerOrgList) {
    let clientInfoTemp =
        `
        <div id="publicHead-content">
            <div class="left-content">
                <ul>
                    <li><span class="title-list-head title-list-icon">客户名称</span>：<span class="title-list-content">${customer.customerName == null ? '' : customer.customerName}</span></li>
                    <li><span class="title-list-head">营业执照</span>：<span class="title-list-content">${customer.taxNum == null ? '' : customer.taxNum}</span></li>
                    <li><span class="title-list-head">法人代表</span>：<span class="title-list-content">${customer.insuranceName == null ? '' : customer.insuranceName}</span></li>
                    <li><span class="title-list-head">统一社会代码</span>：<span class="title-list-content">${customer.socialNum == null ? '' : customer.socialNum}</span></li>
                    <li><span class="title-list-head title-list-icon">客户类型</span>：<span class="title-list-content">${customer.customerType == null ? '' : customer.customerType}</span></li>
                    <li><span class="title-list-head">渠道类型特征</span>：<span class="title-list-content">${customer.channelFeature == null ? '' : customer.channelFeature}</span></li>
                    <li><span class="title-list-head">资质类型</span>：<span class="title-list-content">${customer.aptitudeType == null ? '' : customer.aptitudeType}</span></li>
                    <li><span class="title-list-head">经营地址（省）</span>：<span class="title-list-content">${customer.province == null ? '' : customer.province}</span></li>
                    <li><span class="title-list-head">经营地址（区/县）</span>：<span class="title-list-content">${customer.district == null ? '' : customer.district}</span></li>
                    <li><span class="title-list-head">联系电话（固定）</span>：<span class="title-list-content">${customer.telephone == null ? '' : customer.telephone}</span></li>
                    <li><span class="title-list-head">父客户</span>：<span class="title-list-content">${customer.parentName == null ? '' : customer.parentName}</span></li>
                    <li><span class="title-list-head">销售人员</span>：<span class="title-list-content">${customer.salerName == null ? '' : customer.salerName}</span></li>
                    <li><span class="title-list-head">备注</span>：<span class="title-list-content">${customer.comments == null ? '' : customer.comments}</span></li>
                </ul>
            </div>
            <div class="right-content">
                <ul>
                    <li><span class="title-list-head title-list-icon">客户简称</span>：<span class="title-list-content">${customer.comments == null ? '' : customer.aliasName}</span></li>
                     <li><span class="title-list-head">组织机构代码</span>：<span class="title-list-content">
                        <select>
                            ${customerOrgList == null ? `<option>${item.deptNum}</option>` :customerOrgList.map((item) => {
                                return `<option>${item.orgName}</option>`;
                            })}
                        </select>
                    </span></li>
                    <li><span class="title-list-head">法人身份证</span>：<span class="title-list-content">${customer.insuranceNum == null ? '' : customer.insuranceNum}</span></li>
                    <li><span class="title-list-head">使用状态</span>：<span class="title-list-content">${customer.useState == null ? '' : customer.useState}</span></li>
                    <li><span class="title-list-head title-list-icon">渠道类型</span>：<span class="title-list-content">${customer.channelType == null ? '' : customer.channelType}</span></li>
                    <li><span class="title-list-head">客户状态</span>：<span class="title-list-content">${customer.state == null ? '' : customer.state}</span></li>          
                    <li><span class="title-list-head">资质内容</span>：<span class="title-list-content">${customer.aptitudeContent == null ? '' : customer.aptitudeContent}</span></li>
                    <li><span class="title-list-head">经营地址（市）</span>：<span class="title-list-content">${customer.city == null ? '' : customer.city}</span></li>
                    <li><span class="title-list-head">经营地址</span>：<span class="title-list-content">${customer.address == null ? '' : customer.address}</span></li>
                    <li><span class="title-list-head title-list-icon">联系电话（手机）</span>：<span class="title-list-content">${customer.mobilephone == null ? '' : customer.mobilephone}</span></li>
                    <li><span class="title-list-head title-list-icon">支付偏好</span>：<span class="title-list-content">${customer.prePay == null ? '' : customer.prePay}</span></li>
                    <li><span class="title-list-head">销售人员联系方式</span>：<span class="title-list-content">${customer.salerContact == null ? '' : customer.salerContact}</span></li>
                </ul>
            </div>
        </div>
    `;
    return clientInfoTemp;
}