import * as Constant from '../../../constant/constant.js';
/**
 * @description brand模块
 */
export var load = function (data) {
    doAction(data);
}

function doAction(data) {
    //ajax 请求 1
   $(Constant.HEADER_MOUNT).html(render(data));
   $('.nav-menu-item').on('click',function(e){
       $(this).addClass('active').siblings().removeClass('active');  
   })
}

function render(data) {
    let temp =
    `
       <div class="m-head clearfix">
            <div class="m-settings">
                <a href="" class="u-infors"><i class="icon"></i><span>消息</span></a>
                <a href="" class="u-help"><i class="icon"></i><span>帮助</span></a>
                <a href="" class="u-time"><i class="icon"></i><span>2017-03-15</span></a>
            </div>
        </div>
    `;
    return temp;
}

