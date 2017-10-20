import * as iframeUtils from '../../../utils/iframeUtils.js';
import * as upload from './moudle/upload.js';
import * as backfill from './moudle/backfill.js';
import * as report from './moudle/report.js';

$(document).ready(function () {
    window.receiveMsg = function (data) {
        iframeUtils.showSecondIframe();

        report.load(data);

        upload.load(data.row_Id);
        
        $("#DisplayContact").click(function() {
            if(!$("#DisplayContact").hasClass("initFlag")){
                $("#DisplayContact").addClass("initFlag");
                backfill.load(data.row_Id);
            }
            let flag = $("#ContactAlert").css("right") == 0 ? false : true;
            if (flag) {
                $("#ContactAlert").animate({
                    right: "0px"
                });
            } else {
                return flase;
            }
        });
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
    }
    
    //关闭
    $('#CloseReportPopRoot').unbind().on('click',function(){
        iframeUtils.hideSecondIframe();
    });
    $('#customerReportPopBack').unbind().on('click',function(){
        iframeUtils.hideSecondIframe();
    });
});

