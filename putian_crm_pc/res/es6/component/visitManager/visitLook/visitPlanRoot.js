import * as visitLook from './moudle/visitLook.js';
$(document).ready(function () {
    $("#visittable-content span.More").on("click",function(){
        $(this).toggleClass("more1");
        if($(this).hasClass("more1")){
            $(this).parent().css("overflow","visible");
        }else{
            $(this).parent().css("overflow","hidden");
        }
    });
    visitLook.load(); 
});