import * as Constant from '../../../../constant/constant.js';

/**
 * 回填数据
 * @param {*} data 
 */
export var load = function (data) {
        doAction(data);
}
/**
 * 搜索
 * @param {*} id 
 * @param {*} id2 
 */
export var searchNameList = function(id,id2){
    searchName(id,id2);
}
//填写数据
function doAction(data) {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getBranch`,
        data:{},
        dataType: 'json',
        type: 'post',
        success: function (data) {
            $("#contentBody").html(render(data));
            /*$.getScript("./js/lib/iCheck/js/jquery.icheck.js",function(){  //动态加载js,成功后，并执行回调函数   
                setTimeout(function(){
                    initAlertClick();
                },10);
            });*/
            showSalesMen();
        },
        error: function (e) {
            console.error(e);
        }        
    });  
}
function render(list) {
    let temp =
    `
        ${list == null ? "" : list.map((item) => {
            return `
            <div class="box" id="box_${item.BRANCHID}">
                <div class="title clearfix">
                    <i class="icon icon-displayArrow"></i>
                    <i class="img-folder" id="${item.BRANCHID}"></i>
                    <span class="area-name">${getCustomerName(item.BRANCHNAME)}</span>
                </div>
                <div class="lists">
                                      
                </div>
            </div>
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

function showSalesMen(){
    
    $("#ContactAlert .box>.title").click(function(){
        let branchId = $(this).find(".img-folder").attr("id");
        $.ajax({
            url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getSaleMan`,
            data:{"branchId":branchId},
            dataType: 'json',
            type: 'get',
            success: function (data) { 
                $("#box_"+branchId).find(".lists").html(renderName(data[0].salesManList));
                    $.getScript("./js/lib/iCheck/js/jquery.icheck.js",function(){  //动态加载js,成功后，并执行回调函数   
                            setTimeout(function(){
                                initAlertClick();
                            },1000);
                        });
            },
            error: function (e) {
                console.error(e);
            }        
        });

        let $this = $(this);
        let flag = $this.siblings(".lists").css("display") == "none" ? true : false;
        if (flag) {
            $this.parent().addClass("z-act");
            $this.siblings(".lists").slideDown(400);
        } else {
            $this.parent().removeClass("z-act");
            $this.siblings(".lists").slideUp(400);
        }
    });
}




function renderName(list){
    let temp = 
    `
        ${list == null ? "" : list.map((item) => {
            return `
            <div class="lists-one">
                <input type="checkbox" class="primary" id="id${item.SALESMANID}" val="${item.SALESMANID}" val1="${item.SALESMANNAME}">
                <label for="id${item.index}"><i class="img-user"></i><span>${item.SALESMANNAME}</span></label>
            </div>
         `;
        }).join('')}
    `;
    return temp;
}
//点击确定函数选中的
function backFillHtml(){
    let name = [];
    let id = [];
    $("#contentBody input[type='checkbox']:checked").each(function(i,obj){
       let m = {};
       m.name = $(obj).attr("val1");
       m.id = $(obj).attr("val");
       name.push(m);
    });
    $("#ContactUsers").html(backDiv(name));
    delChecked();    
}
//删除选中的元素
function delChecked(){
    let contactSum1 = $("#ContactAlert .body input[type='checkbox']:checked").length;
    $("#ContactUsers .user i.icon-close").on("click",function(){
        let val = $(this).attr("val");
        $(this).parent().remove();
        let $checkboxs = $("#ContactAlert .body input[type='checkbox'][id='id"+val+"']");
        $checkboxs.iCheck('uncheck');
        contactSum1--;
        if (contactSum1 <= 0) {
            $("#ContactSure em").html("");
        } else {
            $("#ContactSure em").html("(" + contactSum1 + ")");
        }
    });
}
function backDiv(list){
    let temp = 
    `
    ${list == null ? "" : list.map((item) => {
            return `
               <div class="user">
                    <i class="icon icon-close" val="${item.id}"></i>
                    <span val="${item.id}" val1="${item.name}">${item.name}</span>
                </div>
            `;
    }).join('')}         
    `;
    return temp;    
}
//初始化弹出层函数
function initAlertClick(){
     /*
        * 联系人 浮层弹出框
        * 
        * (注：checkbox用了iCheck插件，相关点击和判断事件请参考http://www.bootcss.com/p/icheck/)
        * 
        * 功能效果：
        * 1、点击@弹出框联系人弹出框
        * 2、返回按钮：点击隐藏弹出框
        * 3、判断body需要的高度
        * 4、点击各组（包括展开和闭合），显示该组的所有联系人，超出部分body显示滚动条，去除搜索提示的效果
        * 5、点击各组联系人，确认按钮显示已选中的个数
        * 6、全选：（包括全部选择和取消）全选指当前的展开项，兼并功能5
        * 7、确定按钮：点击之后将所有选中的联系人添加到相应模块中
        * 8、搜索框：
        * （1）focus:隐藏提示文字
        * （2）blur:如果有用户输入的内容就隐藏提示问题，否则显示提示文字
        * （3）搜索内容列表：点击之后隐藏，跳转到相应用户行,添加提示搜索到名称的效果
        */

    // 1
    // 2
    $("#ContactClose").click(function() {
        let cWidth = $("#ContactAlert").css("width");
        $("#ContactAlert").animate({
            right: "-" + cWidth
        });
    });

    // 3
    let mainH = $("#ContactAlert").outerHeight();
    let headerH = $("#ContactAlert .header").outerHeight();
    let footerH = $("#ContactAlert .footer").outerHeight();
    let bodyMtop = parseInt($("#ContactAlert .body").css("margin-top"));
    let bodyH = mainH - headerH - footerH - bodyMtop;
    $("#ContactAlert .body").outerHeight(bodyH);

    // 4
    /*$("#ContactAlert .box>.title").click(function() {
        let $this = $(this);
        let flag = $this.siblings(".lists").css("display") == "none" ? true : false;
        if (flag) {
            $this.parent().addClass("z-act");
            $this.siblings(".lists").slideDown(400);
        } else {
            $this.parent().removeClass("z-act");
            $this.siblings(".lists").slideUp(400);
        }
    });*/

    // 5
     // 记录确定按钮显示已选中的联系人的个数
    var contactSum = $("#ContactAlert .body input[type='checkbox']:checked").length;
    $("#ContactAlert .body input[type='checkbox']").on('ifChanged', function(event) {
        let $btnCount = $("#ContactSure em");
        $(this).parents(".lists-one").removeClass("z-tipAct");

        if ($(this).is(':checked')) {
            contactSum++;
        } else {
            contactSum--;
        }

        if (contactSum <= 0) {
            $btnCount.html("");
        } else {
            $btnCount.html("(" + contactSum + ")");
        }

    });

    // 6
    $("#ContactCheckAll").on('ifChanged', function(event) {
        let $checkboxs = $("#ContactAlert .body input[type='checkbox']");
        if ($(this).is(':checked')) {
            $checkboxs.iCheck('check');
        } else {
            $checkboxs.iCheck('uncheck');
        }

    });

    // 7(1)确定之后，将已选中的人员按顺序填写到相应框中；如果没有选中任何人，填写为空；
    $("#ContactSure").click(function() {
        /*var $this = $(this);
        var count = $this.find("em").html();
        if (count == "") {
            $("#ContactClose").click();
        } else {

        }*/
        $("#ContactClose").click();
        backFillHtml();
    });

}


//搜索
function searchName(id,id2){
    $("#"+id2).show();
    let name = $("#"+id).val();
    if(typeof name != "undefined" && name != null && name != ""){
        $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/visit/customerPositonView/getSaleMan`,
        data:{name:name},
        dataType: 'json',
        type: 'post',
        success: function (data) {
            if(null != data && data.length>0){
                $("#"+id2).html(renderSearch(data[0].salesManList));
                clickSearchA();
            }
        },
        error: function (e) {
            console.error(e);
        }        
    });
    }
}
function renderSearch(list){
    let temp = 
    `
     ${list == null ? "" : list.map((item) => {
        return `
            <a href="javascript:;" val="${item.SALESMANID}" val1="${item.SALESMANNAME}">${item.SALESMANNAME}</a>
        `;
        }).join('')}
    `;
    return temp;
}
function clickSearchA(){
    // 8-(3)
    $("#search-lists a").click(function() {
        let username = $(this).attr("val");
        let namesLen = $("#ContactAlert .body .lists-one").length;

        $(this).parent().hide();
        $("#ContactAlert .search input").val($(this).attr("val1")).siblings("label").hide();

        for (let i = 0; i < namesLen; i++) {
            if ($("#ContactAlert .body .lists-one").eq(i).find("input[val='"+username+"']").attr("val") == username) {
                $("#ContactAlert .body .lists-one").eq(i).parent().siblings(".title").click();
                let itop = $("#ContactAlert .body .lists-one").eq(i).position().top;
                setTimeout(function() {
                    // 由于显示列表有时间延迟，需要同样的延迟来解决滚动条定位问题
                    $("#ContactAlert .body").scrollTop(itop);
                }, 400);
                $("#ContactAlert .body .lists-one").eq(i).addClass("z-tipAct");
                return ;
            }
        }

    });

}