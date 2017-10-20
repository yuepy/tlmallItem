
$(document).ready(function () {
    $('#menu a').on('click',function(e){
        var target = e.target;
        var delegateTarget = e.delegateTarget;
        e.preventDefault();
        var operation = target.textContent;
        switch(operation){
            case '拜访工作台':
               iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, delegateTarget.href, '#contentContainer',{});
               break;
            case '信息协同':
               iframeUtils.createIframe(`${Constant.FIRST_LEVEL_IFRAME_NAME}`, delegateTarget.href, '#contentContainer',{});
               break;
            default:
               break;
        }
    });
});