import * as iframeUtils from '../../../utils/iframeUtils.js';
import * as sign from './moudle/sign.js';

$(document).ready(function () {
    window.receiveMsg = function (data) {
        iframeUtils.showSecondIframe();

        //签到
        $(".customersign-active").unbind().on('click',function(){
            if($("#address").html()==""){
                alert("请等待定位加载完毕！")
                return ;
            }
            sign.load(data);
        });        
    }

    //关闭
    $('.customersign-unactive').unbind().on('click',function(){
        iframeUtils.hideSecondIframe();
    });
});

