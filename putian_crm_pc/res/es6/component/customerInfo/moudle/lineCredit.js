import * as Constant from '../../../constant/constant.js';
import * as historyManager from '../../../utils/historyManager.js';
/**
 * @description 信用额度模块
 */
export var load = function (userId) {
    doAction(userId);
}

function doAction(userId) {
    //ajax 请求
    let body = {ouNum:userId};
   $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customerCreditLimitAndDetial/getCustomerCreditLimit`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
            let collectList = data.collect;
            let gdqjed = getCollectData("固定期间额度",collectList);
            let lsjqed = getCollectData("临时期间额度",collectList);
            let gdjsed = getCollectData("固定结算额度",collectList);
            let lsjsed = getCollectData("临时结算额度",collectList);
            let detialList = data.detial;
            let limitList = data.limit;
            $(Constant.MAIN_MOUNT).html(render(gdqjed,lsjqed,gdjsed,lsjsed,detialList,limitList));
            injectEvents();
        },
        error: function (e) {
            console.error(e);
        }        
    }); 
    historyManager.pushState(`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/cust/customerCreditLimitAndDetial/getCustomerCreditLimit`);//@todo 为了适配，这一步务必加上
}
function getCollectData(str,collectList){
    if(null != collectList){
        for(let i=0;i<collectList.length;i++){
            let xCreditType = collectList[i].xCreditType;
            if(str==xCreditType){
                return collectList[i].amount;
            }else{
                return "0";
            }
        }
    }
    return "0";
}

function injectEvents(){
    $("#titleLeft").addClass("linecredit-tabletitle-active");

        /*额度使用明细*/
    $("#titleLeft").click(function(){
        $("#credittable").show();
        $("#detailtable").hide();
        $("#leftspan").show();
        $("#rightspan").hide();
        var linecreditLeft = $("#titleLeft");
        var linecreditRight = $("#titleRight");
        linecreditLeft.addClass("linecredit-tabletitle-active");
        linecreditRight.removeClass("linecredit-tabletitle-active");
    })
        /*信用额度*/
        $("#titleRight").click(function(){
            $("#detailtable").show();
            $("#credittable").hide();
            $("#leftspan").hide();
            $("#rightspan").show();
            var linecreditLeft = $("#titleLeft");
            var linecreditRight = $("#titleRight");
            linecreditLeft.removeClass("linecredit-tabletitle-active");
            linecreditRight.addClass("linecredit-tabletitle-active");
        })
}
function render(gdqjed,lsjqed,gdjsed,lsjsed,detialList,limitList) {
    let temp =
    `

<div id="linecredit-content">
    <div class="linecredit-head">
        <div class="row">
            <div class="linecredit-sum">
                <span></span>
                <span>额度使用汇总</span>
            </div>
                <div class="col-sm-6 col-md-3">
                    <div class="linecredit-span">
                        <div class="linecredit-money">${gdqjed}</div>
                        <div class="linecredit-title">固定期间额度总计</div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="linecredit-span">
                        <div class="linecredit-money">${lsjqed}</div>
                        <div class="linecredit-title">临时期间额度总计</div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="linecredit-span">
                        <div class="linecredit-money linecredit-moneycolor">${gdjsed}</div>
                        <div class="linecredit-title">固定结算额度总计</div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="linecredit-span">
                        <div class="linecredit-money linecredit-moneycolor">${lsjsed}</div>
                        <div class="linecredit-title">临时结算额度总计</div>
                    </div>
                </div>
            </div>
        </div>
    <div class="linecredit-table">
        <div class="linecredit-tabletitle" id="tabletitle">
            <div class="linecredit-tabletitle-unactive" id="titleLeft">
                <span id="leftspan"></span>
                <span class="usertitle">额度使用明细</span>
            </div>
            <div class="linecredit-tabletitle-unactive" id="titleRight">
                <span style="display: none;" id="rightspan"></span>
                <span class="usertitle">信用额度</span>
            </div>
        </div>
        <div style="overflow:auto">
            <table class="table table-striped" id="credittable">
                <thead>
                    <tr>
                        <th>销售订单</th>
                        <th>客户编码</th>
                        <th>客户名称</th>
                        <th>支付金额</th>
                        <th>信用额度类型</th>
                    </tr>
                </thead>
                <tbody>           
                    ${detialList == null ? "" : detialList.map((item) => {
                        return `
                            <tr>
                                <td>${item.orderNum == null ? "" : item.orderNum}</td>
                                <td>${item.ouNum == null ? "" : item.ouNum}</td>
                                <td>${item.name == null ? "" : item.name}</td>
                                <td class="linecredit-tablemoney">${item.payAmt == null ? "" : item.payAmt}</td>
                                <td>${item.xCreditType == null ? "" : item.xCreditType}</td>
                            </tr>
                        `;
                    }).join('')}                     
                </tbody>
            </table>

            <table class="table table-striped" id="detailtable" style="display: none;">
                <thead>
                    <tr>
                        <th>固定期间批复</th>
                        <th>固定期间占用</th>
                        <th>固定期间可用</th>
                        <th>固定期间账期</th>
                        <th>固定结算批复</th>
                        <th>固定计算占用</th>
                        <th>固定结算可用</th>
                        <th>固定结算账期</th>
                        <th>事业部</th>
                    </tr>
                </thead>
                <tbody>
                    ${limitList == null ? "" : limitList.map((item) => {
                        return `
                            <tr>
                                <td>${item.fixPeriodReply == null ? "" : item.fixPeriodReply}</td>
                                <td class="detailtable-employ">${item.fixPeriodOccupy == null ? "" : item.fixPeriodOccupy}</td>
                                <td class="detailtable-usable">${item.fixPeriodUsable == null ? "" : item.fixPeriodUsable}</td>
                                <td>${item.fixPeriodPay == null ? "" : item.fixPeriodPay}</td>
                                <td>${item.fixSettleReply == null ? "" : item.fixSettleReply}</td>
                                <td class="detailtable-employ">${item.fixSettleOccupy == null ? "" : item.fixSettleOccupy}</td>
                                <td class="detailtable-usable">${item.fixSettleUsable == null ? "" : item.fixSettleUsable}</td>
                                <td>${item.fixSettlePay == null ? "" : item.fixSettlePay}</td>
                                <td>${item.orgName == null ? "" : item.orgName}</td>
                            </tr>
                        `;
                    }).join('')}                                
                </tbody>
            </table>
        </div>
    </div>    
</div>
    `;
    return temp;
}

