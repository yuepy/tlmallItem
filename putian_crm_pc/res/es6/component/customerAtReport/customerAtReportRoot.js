import * as list from './moudle/list.js';
import * as backfill from './moudle/backfill.js';

$(document).ready(function () {
    list.load();

    /* 8、搜索框：
        * （1）focus:隐藏提示文字
        * （2）blur:如果有用户输入的内容就隐藏提示问题，否则显示提示文字
        * （3）搜索内容列表：点击之后隐藏，跳转到相应用户行,添加提示搜索到名称的效果
        */
        // 8-(1)(2)
        $("#ContactAlert .search label").click(function() {
            $("#ContactAlert .search input").focus();
        });
        $("#contactSearch").focus(function() {
            $(this).siblings("label").hide();
        }).blur(function() {
            let flag = $(this).val() == "" ? true : false;
            if (flag) {
                $(this).siblings("label").show();
                $("#search-lists").html("");
            }
        });
        //点击搜索
        $("#icon-search").on("click",function(){
            backfill.searchNameList('contactSearch','search-lists');            
        });

});