import * as Constant from '../../constant/constant.js';
$(document).ready(function () {
    $('#loginButton').on('click',function(e){
        $.ajax({
            type: "POST",
            url: `${Constant.SERVER_ROOT}/pttlCrm/login/loginIn?loginName=`+$("#loginName").val()+'&password='+$("#password").val(),
            dataType: "json",
            success: function(data){
                if(data.loginFlag){
                    window.location.href=`${Constant.LOCAL_SERVER_ROOT}/pttlCrm/res/index.html`;
                }else{
                    alert('用戶名或密码错误！');
                }
            },
            error:function(data){
                alert('get data error');
            }
        });
    });
    //iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, "http://localhost:3000/customerList.html", '#contentContainer',{});
});