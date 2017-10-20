import * as menu from './moudle/menu.js';
import * as customerInfo from './moudle/customerInfo.js';
import * as portrait from './moudle/portrait.js';
import * as order from './moudle/order.js';
import * as saleRebate from './moudle/saleRebate.js';
import * as lineCredit from './moudle/lineCredit.js';
import * as walletMoney from './moudle/walletMoney.js';
import * as header from './moudle/header.js';
import * as Constant from '../../constant/constant.js';
import * as iframeUtils from '../../utils/iframeUtils.js';

$(document).ready(function () {
    window.receiveMsg = function (data) {
        iframeUtils.showSecondIframe();
        loadPage(data);
    }
    function loadPage(data) {
        header.load(data);
        menu.load();
        var eleMenus = $("#clientMenu a").bind("click", function (event) {
            let target = event.target;
            let query = this.href.split("?")[1];
            let title = target.textContent;
            switch (title) {
                case '客户详情':
                    customerInfo.load(data.userId);
                    break;
                case '客户画像':
                    portrait.load(data.userId);
                    break;
                case '订单':
                    order.load(data.userId);
                    break;
                case '销售返利':
                    saleRebate.load(data.userId);
                    break;
                case '信用额度':
                    lineCredit.load(data.userId);
                    break;
                case '电子钱包':
                    walletMoney.load(data.userId);
                    break;
                default:
                    break;
            }
            return false;
        });

        
        $("#clientMenu a")[0].click();
    }

});