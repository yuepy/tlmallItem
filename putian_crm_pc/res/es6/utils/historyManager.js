
export var pushState = function(href){
    if (history.pushState && href ) {
        history.pushState({ title: href }, null, href);
    }else{
        console.error(`确保historyManager传入的href=${href}是否正确`);
    }
}            
//@todo 浏览器返回前进暂时不考虑
// var fnHashTrigger = function (target) {
//     var query = location.href.split("?")[1], eleTarget = target || null;
//     if (typeof query == "undefined") {
//         if (eleTarget = eleMenus.get(0)) {
//             // 如果没有查询字符，则使用第一个导航元素的查询字符内容
//             history.replaceState(null, document.title, location.href.split("#")[0] + "?" + eleTarget.href.split("?")[1]) + location.hash;
//             fnHashTrigger(eleTarget);
//         }
//     } else {
//         eleMenus.each(function () {
//             if (eleTarget === null && this.href.split("?")[1] === query) {
//                 eleTarget = this;
//             }
//         });

//         if (!eleTarget) {
//             // 如果查询序列没有对应的导航菜单，去除查询然后执行回调
//             history.replaceState(null, document.title, location.href.split("?")[0]);
//             fnHashTrigger();
//         } else {
//             $(eleTarget).trigger("click");
//         }
//     }
// };
// if (history.pushState) {
//     window.addEventListener("popstate", function () {
//         fnHashTrigger();
//     });

//     // 默认载入
//     fnHashTrigger();
// }