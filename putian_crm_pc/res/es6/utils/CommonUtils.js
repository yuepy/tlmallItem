import * as Constant from '../constant/constant.js';
/**
 * @description 获取顶层窗口
 */
export let getTopWin = () => {
    if(window.parent){
        return window.parent;
    }else{
        return window;
    }
    
}

export var openMenu = function () {
    var topWin = getTopWin();
    topWin.$('.main-container').css('margin-left', '0');
    //topWin.$('#contentContainer').css('flex', '0 1 89%');2
}

export var closeMenu = function () {
    var topWin = getTopWin();
    topWin.$('.main-container').css('margin-left', '-11%');
    //topWin.$('#contentContainer').css('flex', '0 1 100%');
}
