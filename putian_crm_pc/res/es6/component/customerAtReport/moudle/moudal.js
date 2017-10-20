import * as Constant from '../../../constant/constant.js';
import * as iframeUtils from '../../../utils/iframeUtils.js';
import * as backfill from './backfill.js';
export var load = function () {

    $('#module-details').html(module());

    $('.btn-check').click(function(){
        let myReport = JSON.parse($(this).attr("val"));
        setTimeout(()=>$('#module-details').css({'opacity':'1'}),0);  
        $('#module-details').css({'display':'block'});
        //iframeUtils.openFullScreen();
        showModuleData(myReport);//填充数据
        

    })
    


}

function module(){

    let dialog = `
            <div class="content"  style="height:100%">
                <div class="center"  style="height:100%">
                    <div class="m-report-infors" style="height:100%">
                        <div class="content" style="height:80%;overflow:auto">
                                    <div class='details-close'>X</div>
                                    <div class="header" style="height:8%">
                                        <div style="height:50%">客户名称<span class="custSpan"></span></div>
                                        <div style="height:50%">签到时间<span class="signTime"></span></div>
                                    </div>
                                    <div class="body clearfix">
                                        <div class="lists-one">
                                            <h6>华为事业部</h6>
                                            <div><textarea disabled class="huaweiTextarea"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>三星事业部</h6>
                                            <div><textarea disabled class="sanxingTextarea"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>分销事业部</h6>
                                            <div><textarea disabled class="distrTextarea"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>乐视事业部</h6>
                                            <div><textarea disabled class="leshiTextarea"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>客户风险</h6>
                                            <div><textarea disabled class="riskTextarea"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>其他信息</h6>
                                            <div><textarea disabled class="otherTextarea"></textarea></div>
                                        </div>
                                        <div class="m-uploading">
                                            <div class="imagesBox">
                                                <div class="images" id="fileList">
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="javascript:;" class="textBtn"></a>
                                        </div>
                                        <div class="lists-one">
                                            <!--只读状态下添加类名 chatUsers-check -->
                                            <div class="chatUsers chatUsers-check">
                                                <i class="tipFont">@</i>

                                                <!--只读状态下显示的模块-->
                                                <em class="names tipFont"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer" id="ChatOnline">
                                        <div class="text">写留言<i class="icon"></i></div>
                                        <h6 class="title">留言</h6>
                                        <div class="leaveWord">

                                            <div class="chats">
                                                
                                            </div>
                                            
                                            <div class="textarea">
                                                <i class="tipFont" id="DisplayContact">@</i>
                                                <a href="javascript:void(0);" class="btn" id="sendBtn">发送</a>
                                                <div>
                                                    <div class="users" id="ContactUsers"></div>
                                                    <textarea name="chatInfors" id="ChatIpt"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
    return dialog;
}
//展示弹出框内容
function showModuleData(data){ 

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
        




    $(".custSpan").html(data.customerName);
    $(".signTime").html(data.asgnDtStr);
    $(".huaweiTextarea").html(data.xCommentsHuaWei);
    $(".sanxingTextarea").html(data.xCommentsSanXing);
    $(".distrTextarea").html(data.xCommentsFenxiao);
    $(".leshiTextarea").html(data.xCommentsLeshi);
    $(".riskTextarea").html(data.xCommentsRisk);
    $(".otherTextarea").html(data.xCommentsOther); 
    getAllAtNames(data.row_Id);//获取当前活动所有@的人
    showMessage(data.row_Id);//显示留言内容
    var showMessageSetInterval = setInterval(function(){showMessage(data.row_Id)},3000);//每三秒显示留言内容
    $('.details-close').click(function(){//关闭弹出框
                setTimeout(()=>$('#module-details').css({'display':'none'}),1000);  
                $('#module-details').css({'opacity':'0'});
                window.clearInterval(showMessageSetInterval);//关闭没三秒显示留言内容
                $("#ChatIpt").val("");//聊天清空
    });

    $("#sendBtn").click(function(){
        
            sendMessage(data)
        
    })

}
//发送信息
function sendMessage(chatMan){
    let atNames = "";
    if($(".user").find("span") != undefined){
        $(".user").find("span").each(function(i){
            atNames += this.innerText+",";
        });
        atNames=(atNames.substring(atNames.length-1)==',')?atNames.substring(0,atNames.length-1):atNames;
    }


    var fomaterData = {
        "actionId":chatMan.row_Id,
        "empId":atNames,
        "chatRecord":$("#ChatIpt").val()
    };
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/insertChat`,
        data:fomaterData,
        dataType: 'json',
        type: 'post',
        success: function (data) {
            $("#ChatIpt").val("");
        },
        error: function (e) {
            console.error(e);
        }        
    });

}
//获取聊天内容
function showMessage(str){
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getChat`,
        data:{'actionId':str},
        dataType: 'json',
        type: 'get',
        success: function (data) {

            $(".chats").html(chatsAdd(data.reportChats))
            
        },
        error: function (e) {
            console.error(e);
        }        
    });
}
//显示聊天内容体
function chatsAdd(reportChats){
    let dialog = `${reportChats == null ? "" : reportChats.map((item) => {
                        return `
                            <div class="chat-one">
                                <h6>${item.createdBy}</h6>
                                <p>回复<b>${item.empId==null?'':item.empId}</b>：${item.chatRecord}</p>
                            </div>
                            `;
     }).join('')}`;
     return dialog;

}
//获取当前活动所有@的人
function getAllAtNames(row_Id){
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getAtNames`,
        data:{'actionId':row_Id},
        dataType: 'json',
        type: 'get',
        success: function (data) {
            var atReportNames = '';
            for(var o in data){
                atReportNames += data[o].atName+";";
            }
            $(".names").html(atReportNames)
        },
        error: function (e) {
            console.error(e);
        }
    });
}