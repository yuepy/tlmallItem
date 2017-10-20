import * as Constant from '../../../constant/constant.js';
import * as iframeUtils from '../../../utils/iframeUtils.js';
/**
 * @description brand模块
 */
export var load = function (data) {
    doAction(data);
}

function doAction(data) {
    //ajax 请求 1
   $(Constant.HEADER_MOUNT).html(render(data));
   $('#Close').on('click',function(){
       iframeUtils.hideSecondIframe();
   });
}

function render(data) {
    let temp =
    `
     <div class="head">
        <div class="head-title">
            <h2>${data.companyName}</h2>
            <button>启用</button>
        </div>
        <div class="head-detile">
            <h4>客户编号：${data.clientNum}</h4><h4>操作日期：2017-04-28</h4>
        </div>
        <div id='Close'></div>
    </div>
    `;
    return temp;
}

