import * as Constant from '../constant/constant.js';
import * as commonUtils from './CommonUtils.js';



function _createIframe(name, targetUrl, mount, data){
    var topWin = commonUtils.getTopWin();
    if (topWin.frames[name]) {
        var childrenWin = topWin.frames[name];
        if(!childrenWin.frameElementUrl){
           childrenWin.frameElementUrl = targetUrl;
           postMsgToIframe(name, data, targetUrl);
        }else{
           if(childrenWin.frameElementUrl == targetUrl){
               postMsgToIframe(name, data);
           }else{
               childrenWin.frameElementUrl = targetUrl;
               postMsgToIframe(name, data, targetUrl);
           }
        } 
    }
    else {
        var doc = topWin.document;
        var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
        var mountEl = doc.querySelector(mount);

        var iframe = void 0;
        try {
            iframe = document.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
        }
        catch (e) {
            iframe = document.createElement('iframe');
            iframe.name = name;
            iframe.src = targetUrl;
            iframe.classList.add('content-main-region');
        }
        if (iframe) {
            mountEl.appendChild(iframe);
            iframe.contentWindow.frameElementUrl = targetUrl;
        }
        postMsg(name, data);
    }
}
window.createIframe = _createIframe;
/**
 * @description 创建iframe
 * @param {*} name iframe名称
 * @param {*} targetUrl 目标地址
 * @param {*} mount 挂载点
 * @param {*} data 传送数据
 */
export let createIframe = (name, targetUrl, mount, data) => {
    window.createIframe(name, targetUrl, mount, data);//@todo 这个方法务必不能动，否则适配会受到很大影响
}
/**
 * @description 向其他窗口传数据
 * @param {*} name iframe名称
 * @param {*} data 传送数据
 * @param {*} flag 传送iframe对象是否已经DOMContentLoaded加载完毕，如果加载完毕，证明窗口receiveMsg已经装哉进去，可以进行穿入数据
 */
function _postMsg(name, data,flag = false) {
    let topWin = commonUtils.getTopWin();

    if (topWin.frames[name] && topWin.frames[name].receiveMsg) {
        topWin.frames[name].receiveMsg(data);
        flag = true;
    }
    if (!flag) {
        setTimeout(postMsg.bind(this, name, data,flag), 100);
    }
}

window.postMsg = _postMsg;

/**
 * @description 传送数据到指定name的iframe，前提iframe务必有receiveMsg方法
 * @param {*} name iframe名称
 * @param {*} data 
 */
export let _postMsgToIframe = (name, data, targetUrl) => {
    let topWin = commonUtils.getTopWin();
    let childWin = topWin.frames[name];
    if (targetUrl) {
        childWin.location.href = targetUrl;
    }
    postMsg(name, data);
}

window.postMsgToIframe = _postMsgToIframe;

export let showSecondIframe = () => {
    let topWin = commonUtils.getTopWin();
    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
        topWin.$(`iframe[name^=${Constant.SECOND_LEVEL_IFRAME_NAME}]`).css('left','30%');
        commonUtils.closeMenu();
    }
}

export let hideSecondIframe = () =>{
    let topWin = commonUtils.getTopWin();
    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
        topWin.$(`iframe[name^=${Constant.SECOND_LEVEL_IFRAME_NAME}]`).css('left','100%');
        commonUtils.openMenu();
    }
}

export let openFullScreen = () =>{
    let topWin = commonUtils.getTopWin();
    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
        topWin.$(`iframe[name^=${Constant.SECOND_LEVEL_IFRAME_NAME}]`).css({'left':'0%','width':'100%'});
    }
}

export let closeFullScreen = () =>{
    let topWin = commonUtils.getTopWin();
    if (topWin.frames[Constant.SECOND_LEVEL_IFRAME_NAME]) {
        topWin.$(`iframe[name^=${Constant.SECOND_LEVEL_IFRAME_NAME}]`).css({'left':'30%','width':'70%'});
    }
}
