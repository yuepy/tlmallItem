import * as commonUtils from '../../utils/CommonUtils.js';
import * as Constant from '../../constant/constant.js';
import * as iframeUtils from '../../utils/iframeUtils.js';
import * as header from './moudle/header.js';
$(document).ready(function () {
    header.load();
    $('#menu a').on('click',function(e){
        var target = e.target;
        var delegateTarget = e.delegateTarget;
        e.preventDefault();
        var operation = target.textContent;
        switch(operation){
            case '拜访管理':
               iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, delegateTarget.href, '#contentContainer',{});
               break;
            case '信息协同':
               iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, delegateTarget.href, '#contentContainer',{});
               break;
                case '信息录入':
               iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, delegateTarget.href, '#contentContainer',{});
               break;
            default:
               break;
        }
    });

    /** 用户退出 */
    $('#logout').on('click',function(e){
        $.ajax({
            type: "POST",
            url: `${Constant.SERVER_ROOT}/pttlCrm/login/loginOut`,
            dataType: "json",
            success: function(data){
                window.location.href=`${Constant.LOCAL_SERVER_ROOT}/login.html`;
            },
            error:function(data){
                window.location.href=`${Constant.LOCAL_SERVER_ROOT}/login.html`;
            }
        });
    });
    //iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, "http://localhost:3000/customerList.html", '#contentContainer',{});
});