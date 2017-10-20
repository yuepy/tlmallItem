import * as Constant from '../../../../constant/constant.js';
/**
 * @description 新建Plan模块
 */
export var load = function () {
    doAction();
}

function doAction() {
    //ajax 请求 1
   $('#tempPlanList').html(render());
}

function render() {
    let temp =
    `
        <div class="u-lists-one ">
            <h5 class="title ">石棉县远大通讯经营部</h5>
            <a href="javascript:; " class="icon icon-close "></a>
            <div class="time ">创建时间<b>2017-05-03</b></div>
            <div class="btns ">
                <a href=" ">PSI采集</a>
                <a href=" ">签到</a>
                <a href=" ">签退</a>
                <a href=" ">报告</a>
            </div>
        </div>
        <div class="u-lists-one ">
            <h5 class="title ">石棉县远大通讯经营部</h5>
            <a href="javascript:; " class="icon icon-close "></a>
            <div class="time ">创建时间<b>2017-05-03</b></div>
            <div class="btns ">
                <a href=" ">PSI采集</a>
                <a href=" ">签到</a>
                <a href=" ">签退</a>
                <a href=" ">报告</a>
            </div>
        </div>
    `;
    return temp;
}

