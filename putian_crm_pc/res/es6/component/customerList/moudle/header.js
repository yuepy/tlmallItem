import * as Constant from '../../../constant/constant.js';
/**
 * @description 订单模块
 * @return string 返回的模版
 */
export var load = function () {
    doAction();
}

function doAction() {
    //ajax 请求
   $(Constant.HEADER_MOUNT).append($(render()));
}

function render() {
    let temp =
    `
       <div class="serch">
            <input type="text" placeholder="请输入搜索内容" class="inputSearch"/>
            <button class="item">搜索</button>
        </div>
        <div class="help">
            <a href="#" class="messageImg"></a><span>消息</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" class="helpImg"></a><span>帮助</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="itemImg"></i><span>2017-05-23</span>
        </div>
    `;
    return temp;
}

