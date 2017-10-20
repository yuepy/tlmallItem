import * as Constant from '../../../constant/constant.js';
import * as iframeUtils from '../../../utils/iframeUtils.js';

/**
 * @description 客户列表
 * @return string 返回的模版
 */
export var load = function () {
    doAction(10,1);
}

function doAction(pageSize,pageNum) {
    let body = {"pageSize":pageSize,"pageNum":pageNum};
    let customerName = document.getElementById("customerList_name");
    if(customerName){
        body.customerName = customerName.value;
    }
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/customer/getCustomerList`,
        data:body,
        dataType: 'json',
        type: 'post',
        success: function (data) {
            let clientListTbody = document.getElementById("clientListTbody");
            if(clientListTbody){
                $("#clientListTbody").html(renderAgain(data.data));
            }else{
                $(Constant.MAIN_MOUNT).html(render(data.data));
                $("#customerList_search").on("click",function(){
                    doAction(10,1);
                });
            }            
            inintPage(data.page);
            $("#clientList td.customerFontStyle").on('click', function (e) {
                e.preventDefault();
                let target = e.target;
                let userId = $(this).attr("val");
                if (target.tagName.toLowerCase() == 'a') {
                    var grandEl = target.parentElement.parentElement;
                    var companyName = grandEl.children[0].textContent;
                    var clientNum = grandEl.children[3].textContent;                  
                    iframeUtils.createIframe(`${Constant.SECOND_LEVEL_IFRAME_NAME}`, target.href, '#contentContainer',{companyName:companyName,clientNum:clientNum,userId:userId});
                }
            });

        },
        error: function (e) {
            console.error(e);
        }        
    });

}

function render(customerList) {
    let temp =
    `
       <div class="content_head">
            &nbsp;&nbsp;&nbsp;<i class="backImage"></i>
            <span style="color:#9B9B9B;">信息协同</span>
            <span class="pointImage"></span>
            <span>客户信息</span>
            <div class='information-serch'>
                <input type="text" value="" id="customerList_name" placeholder="请输入搜索内容"/>
                <input type="button" value="搜索" id="customerList_search"/>
            </div>
        </div>
        <div class="content-body">
            <div class="export-imagetitle">
                <a href="#" class="export-image"></a>
                <span style="color: #9B9B9B;">导出</span>
            </div>
            <div class="content-bodytable" id="clientList">
                <table class="table table-border">
                    <thead>
                        <tr>
                            <th>客户全称</th>
                            <th>分公司</th>
                            <th>经营地址</th>
                            <th>营业执照</th>
                            <th>渠道类型</th>
                            <th>准入状态</th>
                            <th>使用状态</th>
                        </tr>
                    </thead>
                    <tbody id="clientListTbody">
                     ${customerList == null ? "" : customerList.map((item) => {
                        return `
                        <tr>
                            <td class="customerFontStyle" val="${item.userId}"><a href="customerInfo.html">${item.customerName}</a></td>
                            <td>${getCustomerName(item.branchName)}</td>
                            <td>${item.address == null ? "" : item.address}</td>
                            <td>${item.taxNum}</td>
                            <td>${item.channelType}</td>
                            <td>${item.state}</td>
                            <td>${item.useState}</td>
                        </tr>
                        `;
                   }).join('')}     
                    </tbody>
                </table>
            </div>
            <div id="Page" style="width:100%;">
                
            </div>
        </div>
    `;
    return temp;
}
function renderAgain(customerList){
    let temp =
    `
            ${customerList == null ? "" : customerList.map((item) => {
            return `
            <tr>
                <td class="customerFontStyle" val="${item.userId}"><a href="customerInfo.html">${item.customerName}</a></td>
                <td>${getCustomerName(item.branchName)}</td>
                <td>${item.address == null ? "" : item.address}</td>
                <td>${item.taxNum == null ? "" : item.taxNum}</td>
                <td>${item.channelType}</td>
                <td>${item.state}</td>
                <td>${item.useState}</td>
            </tr>
            `;
        }).join('')}
    `;
    return temp;
}
function getCustomerName(str){
    if(str != null && str != "" && typeof(str) != "undefined"){
        return str.substring(str.lastIndexOf("_")+1,str.length);
    }else{
        return "";
    }    
}
/**
 * 分页
 * @param {*} page 
 */
function inintPage(page){
    let pageCount = page.pageCount; //总页数
    let currentPage = page.pageNum; //当前页码
    let totalCount = page.totalCount;//总记录条数
    let pageHtml = "<li class='skip' id='skip_count'><span>共"+pageCount+"页</span><span>到第</span><input type='number' class='skip-num' min='1'/><span>页</span></li>";
    pageHtml += "<li id='skip_right_goto' val='"+pageCount+"'><a class='skip-right-icon'></a></li>";
    let options = {
        bootstrapMajorVersion: 2, //版本
        currentPage: currentPage, //当前页数
        numberOfPages: 5,//显示页码数标个数
        totalPages: pageCount, //总页数
        //图标的更改显示可以在这里修改。
        itemTexts: function (type, page, current) {
            switch (type) {
                case "first":
                    return "<<";//"";
                case "prev":
                    return "<";
                case "next":
                    return ">";
                case "last":
                    return ">>";
                case "page":
                    return page;
            }
        },//点击事件，用于通过Ajax来刷新整个list列表
        onPageClicked: function (event, originalEvent, type, page) {
            //单击当前页码触发的事件。若需要与后台发生交互事件可在此通过ajax操作。page为目标页数。
            doAction(10,page); 
        },
        pageHtml:pageHtml
    };
    //<ul id="bp-3-element-page" style="cursor:hand;"></ul>
    $('#Page').bootstrapPaginator(options);
    //$('#bp-3-element-page').append("<li><a>总共"+pageCount+"页</a></li>");    
    let liCount = document.getElementById("skip_count");
    if(liCount){//if(!liCount){
        //$('#Page ul').append("<li class='skip' id='skip_count'><span>共"+pageCount+"页</span><span>到第</span><input type='number' class='skip-num' min='1'/><span>页</span></li>");
        //$('#Page ul').append("<li id='skip_right_goto' val='"+pageCount+"'><a class='skip-right-icon'></a></li>");
        $("#skip_right_goto").on("click",function(e){
            gotoPageNum($(this).attr("val"));
        });
    }
}
/**
 * 跳转到第几页
 */
function gotoPageNum(pageCount){
    let pageNum = $("#skip_count input.skip-num").val();
    if(null != pageNum && pageNum != "" && isNumber(pageNum) && pageNum>=0){
        pageNum = parseInt(pageNum);
        if(parseInt(pageNum) > parseInt(pageCount)){
            pageNum = pageCount;
        }
    }else{
        //pageNum = 1;
        $("#skip_count input.skip-num").val("");
        return ;
    }
    doAction(10,pageNum);
}
/**
 * 判断数值类型，包括整数和浮点数
 */
function isNumber(str){
    if(isDouble(str) || isInteger(str)) return true;
    return false;
}
/**
 * 匹配integer
 */
function isInteger(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[-\+]?\d+$/);
    if(result==null)return false;
    return true;
}
/**
 * 匹配double或float
 */
function isDouble(str){
    if(str==null||str=="") return false;
    var result=str.match(/^[-\+]?\d+(\.\d+)?$/);
    if(result==null)return false;
    return true;
}