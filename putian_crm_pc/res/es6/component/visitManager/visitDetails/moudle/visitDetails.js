import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';
/**
 * @description brand模块
 */
export var load = function (data) {
    doAction(data);
}

function doAction(data) {
    //ajax 请求 1
   let body = {xPriPostnId:data.xPriPostnId,xPlanDate:data.xPlanDate};
   $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getCustomerPositionViewDetialList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (list) {
            if(null != list && list.length>0){
                data.workPlan = list[0].workPlan==null?"":list[0].workPlan;
            }else{
                data.workPlan = "";
            }
			$('#Details').html(render(data,list));  
            $('#Close').on('click',function(){
                iframeUtils.hideSecondIframe();
            });
            
            $('#module-details').html(module());
            $('.details-Presentation').click(function(){
                setTimeout(()=>$('#module-details').css({'opacity':'1'}),0);  
                $('#module-details').css({'display':'block'});
                iframeUtils.openFullScreen();
                getCustomerPositionViewReportList($(this).attr("val"));//填充数据
            })
            $('.details-close').click(function(){
                iframeUtils.closeFullScreen(); 
                setTimeout(()=>$('#module-details').css({'display':'none'}),1000);  
                $('#module-details').css({'opacity':'0'});
            });
        },
        error: function (e) {
            console.error(e);
        }        
    });
   
}
//初始化数据
function render(data,list) {
    let temp =
    `
  <div class='details-head'>
        <div class='head-title'>
            <h2>${data.bussinessUser}</h2>
        </div>
        <div class='head-detile'>
            <span>所属办事处：${data.owerBanshichu}</span><span>所属分公司：${data.ownerBranchCompany}</span>
        </div>
        <div id='Close'></div>
    </div>
    <div id='visitdetails'>
        <div class='personnel-content-head'>
            <div class='workplan'><span class='icon'></span><span>工作计划</span></div>
            <div class='customersign-remarktextarea'>
                    <span class='remarktextimg'></span>
                    <textarea id='remarktextname'>${data.workPlan}
                    </textarea>
                </div>
        </div>
        <div class='personnel-content '>
            <table class=' table-even'>
                <thead>
                    <th>客户</th>
                    <th>填写报告时间</th>
                    <th>计划时间</th>
                    <th>签到时间</th>
                    <th>签退时间</th>
                    <th>签到地址</th>
                    <th>备注</th>
                    <th>是否拜访</th>
                    <th>填写报告情况</th>
                </thead>
                <tbody>
                    ${list == null ? "" : list.map((item) => {
                        return `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.created}</td>
                            <td>${item.asgnDT}</td>
                            <td>${item.asgnDT}</td>
                            <td>${item.xAssignoutDT==null?"":item.xAssignoutDT}</td>
                            <td>${item.comments}</td>
                            <td>${item.commentsLong == null?"":item.commentsLong}</td>
                            <td></td>
                            <td val="${item.row_Id}" class='${item.xCompletedDate==null?"":"details-Presentation report"}'>${item.xCompletedDate==null?"":"报告"}</td>
                        </tr>
                        `;
                   }).join('')}                     
                </tbody>
            </table>
        </div>
    </div>
    `;
    return temp;
}


function module(){
    let dialog = `
            <div class="content">
                <div class="center">
                    <div class="m-report-infors">
                        <div class="content">
                                    <div class='details-close'>X</div>
                                    <div class="header">
                                        <div>客户名称<span id="report_customerName">海淀区经营部</span></div>
                                        <div>签到时间<span id="report_DT">2017-05-14 18:00:08</span></div>
                                    </div>
                                    <div class="body clearfix">
                                        <div class="lists-one">
                                            <h6>华为事业部</h6>
                                            <div><textarea disabled id="report_huawei"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>三星事业部</h6>
                                            <div><textarea disabled id="report_sanxing"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>分销事业部</h6>
                                            <div><textarea disabled id="report_fenxiao"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>乐视事业部</h6>
                                            <div><textarea disabled id="report_leshi"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>客户风险</h6>
                                            <div><textarea disabled id="report_kehufengxian"></textarea></div>
                                        </div>
                                        <div class="lists-one">
                                            <h6>其他信息</h6>
                                            <div><textarea disabled id="report_others"></textarea></div>
                                        </div>
                                        <div class="m-uploading">
                                            <div class="imagesBox">
                                                <div class="images" id="fileList">
                                                    <!--
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    <div id="" class="file-item">
                                                        <img src="images/help_icon.png">
                                                        <div class="info" title="ie9.png">ie9.png</div>
                                                    </div>
                                                    -->
                                                </div>
                                            </div>
                                            <a href="javascript:;" class="textBtn"></a>
                                        </div>
                                        <div class="lists-one">
                                            <!--只读状态下添加类名 chatUsers-check -->
                                            <div class="chatUsers chatUsers-check">
                                                <i class="tipFont">@</i>

                                                <!--只读状态下显示的模块-->
                                                <em class="names" id="report_atName">李燕；张海；刘佳；</em>
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
//报告
function getCustomerPositionViewReportList(row_Id){
$.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getCustomerPositionViewReportList`,
        data:{row_Id:row_Id},
        dataType: 'json',
        type: 'post',
        success: function (list) {
            if(null != list && list.length>0){
                let item = list[0];
                $("#report_customerName").html(item.name);
                $("#report_DT").html(item.asgnDT);//签到时间
                $("#report_huawei").html(item.xCommentsHuaWei);//华为事业部
                $("#report_sanxing").html(item.xCommentsSanXing);//三星事业部
                $("#report_fenxiao").html(item.xCommentsFenXiao);//分销事业部
                $("#report_leshi").html(item.xCommentLeShi);//乐视事业部
                $("#report_kehufengxian").html(item.xCommentsRisk);//客户风险
                $("#report_others").html(item.xCommentsOther);//其他信息
                let atNameList = item.actionAtNameList;
                let atName = "";
                if(null != atNameList && atNameList.length>0){
                    for(let i=0;i<atNameList.length;i++){
                        atName += atNameList[i].atName+";";
                    }
                }
                $("#report_atName").html(atName);//@人
                $("#fileList").html(getActionAtt(item.actionAttList));
                //actionChatList;聊天记录
            }            
        },
        error: function (e) {
            //console.error(e);
        }        
    });
}
//附件 图片
function getActionAtt(list){
    let temp = 
    `
    ${list == null ? "" : list.map((item) => {
            return `
               <div id="" class="file-item">
                    <img src="${item.path}">
                    <div class="info" title="图">${getPictureName(item.path)}</div>
                </div>
            `;
    }).join('')}         
    `;
    return temp;    
}
//图片名称
function getPictureName(str){
    if(str != null && str != "" && typeof(str) != "undefined"){
        return str.substring(str.lastIndexOf("/")+1,str.length);
    }else{
        return "";
    }    
}