import * as Constant from '../constant/constant.js';
/**
 * @description 头部导航
 */
export var load = function (data) {
    doAction(data);
}

function doAction(data) {
    //ajax 请求
   $(Constant.MENU_NAVIGATOR).append($(render(data)));
}

function render(data) {
    let temp =
    `
       <div class="m-crumb">
           ${data.map((item,index)=>{
               if(index == 0){
                  return `
                    <a href="visitManager.html"><em class="icon icon-back"></em></a>
                    <a href="#">${item}</a>
                  `;
               }else{
                  return `
                     <i class="icon icon-arrow"></i>
                     <a>${item}</a>
                  `;
               }
           }).join('')}                  
       </div>
    `;
    return temp;
}

