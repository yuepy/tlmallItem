import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';

export var load = function () {
    doAction();
}

function doAction(){
    $('#mainContainer').html(render());
    $('.content_body').html(customerInfo());
    $('.content_top').find('span').click(function(e){
        var opertion = e.target.innerHTML;
        $(e.target).addClass("active_btn").siblings(".active_btn").removeClass("active_btn");
        switch(opertion){
            case '客户信息采集' : $('.content_body').html(customerInfo());break;
            case '客户经营信息采集' : $('.content_body').html(btn_switch());break;
        }
    })
    
    
};
var customerInfo=function(){
    $('.content_body').html(information());
    $('.content_body').find("input").focus(function(e){
        var target=e.target;
        $(target).css("borderColor","#2c81ff")
    })
    $('.content_body').find("input").blur(function(e){
        var target=e.target;
        $(target).css("borderColor","#b9b9b9")
    })
    
};
var btn_switch = function(){
    $('.content_body').html(switchs());
    $('.content_body').find("select").focus(function(e){
        var target=e.target;
        $(target).css("borderColor","#2c81ff")
    })
    $('.content_body').find("select").blur(function(e){
        var target=e.target;
        $(target).css("borderColor","#b9b9b9")
    })
    $('.addconect').click(function(){
        $('#information-dialog').toggle()
    })
    // $(".commit_btn").find("button").click(function(){
    //     $('#information-dialog').hide()
    // })
    $('#information-dialog').click(function(e){
        if($(e.target).attr("id")=="information-dialog"){
            $(e.target).hide()
        }
    })
    $('#information-dialog').find("input").focus(function(e){
        var target=e.target;
        $(target).css("borderColor","#2c81ff")
    })
    $('#information-dialog').find("input").blur(function(e){
        var target=e.target;
        $(target).css("borderColor","#b9b9b9")
    })
    $('#information-dialog').find("textarea").focus(function(e){
        var target=e.target;
        $(target).css("borderColor","#2c81ff")
    })
    $('#information-dialog').find("textarea").blur(function(e){
        var target=e.target;
        $(target).css("borderColor","#b9b9b9")
    })
    $('#information-dialog').find("select").focus(function(e){
        var target=e.target;
        $(target).css("borderColor","#2c81ff")
    })
    $('#information-dialog').find("select").blur(function(e){
        var target=e.target;
        $(target).css("borderColor","#b9b9b9")
    })
};
function render(){
    let temp = `
        <div class="content_head">
            <div class="head_title">
                
                <a href="./customerInformationCollection.html"><i class="backImage"></i></a>
                <span style="color:#9B9B9B;">客户其他信息采集</span>
                <span class="pointImage"></span>
                <span>录入</span>
            </div>
            <div class="information_serch">
                <input type="text" value="" id="customerList_name" placeholder="请输入搜索内容">
                <input type="button" value="搜索" id="customerList_search">
            </div>
        </div>
        <div class="content_top">
            <span class="btn active_btn" >客户信息采集</span>
            <span class="btn" >客户经营信息采集</span>
        </div>
        <div class="content_body">
        </div>
        
    ` 
    return temp;
}
 function switchs(){
     let content = `
     <div class="content_middle">
        <div class="total">
            <div class='card_title'>总量</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>渠道类型</th>
                        <th>渠道类型特征</th>
                        <th>支付偏好</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><select><option>零售商</option></select></td>
                            <td><select><option>百货商场</option></select></td>
                            <td><select><option>现金</option></select></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="connect_manager">
            <div class="card_top">
                <div class="card_title">联系人</div>
                <div class="title_right">
                    <i></i>
                    <span class='addconect'>添加联系人</span>
                     <div id='information-dialog'>
                        <div class='dialog_content'>
                            <div class='dialog_title'>编辑联系人信息</div>
                            <div class='dialog_detail'>
                                <div>
                                    <label>
                                        <span>姓名</span>
                                        <input type='text'/>
                                    </label>
                                    <label>
                                        <span>性别</span>
                                        <input/>
                                    </label>
                                    <label>
                                        <span>职位</span>
                                        <input/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>部门</span>
                                        <input/>
                                    </label>
                                    <label>
                                        <span>生日</span>
                                        <input/>
                                    </label>
                                    <label>
                                        <span>用户类型</span>
                                        <select>
                                            <option>三星</option>
                                            <option>华为</option>
                                            <option>苹果</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>移动电话</span>
                                        <input/>
                                    </label>
                                    <label>
                                        <span>固定电话</span>
                                        <input/>
                                    </label>
                                    <label>
                                        <span>传真电话</span>
                                        <input/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>电子邮件</span>
                                        <input/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>注释</span>
                                        <textarea></textarea>
                                    </label>
                                </div>
                                <div class="commit_btn">
                                    <button>确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='card_table'>
                <table>
                <thead>
                    <th>联系人</th>
                    <th>性别</th>
                    <th>生日</th>
                    <th>职位</th>
                    <th>用户类型</th>
                    <th>移动电话</th>
                    <th>办公电话</th>
                    <th>办公传真</th>
                    <th>电子邮件</th>
                    <th>注释</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>王大宇</td>
                        <td>男</td>
                        <td>1986-09-01</td>
                        <td>财务经理</td>
                        <td>财务经理</td>
                        <td>13897276521</td>
                        <td>010-97276521</td>
                        <td>0553-5965828</td>
                        <td>0553-5965828</td>
                        <td>注释文字内容注释文字...</td>
                        <td class='editor'><a href="javascript:void(0);">编辑</a></td>
                        <td class='delete'><a href="javascript:void(0);">删除</a></td>
                    </tr>
                    <tr>
                        <td>王大宇</td>
                        <td>男</td>
                        <td>1986-09-01</td>
                        <td>财务经理</td>
                        <td>财务经理</td>
                        <td>13897276521</td>
                        <td>010-97276521</td>
                        <td>0553-5965828</td>
                        <td>0553-5965828</td>
                        <td>注释文字内容注释文字...</td>
                        <td class='editor'><a href="javascript:void(0);">编辑</a></td>
                        <td class='delete'><a href="javascript:void(0);">删除</a></td>
                    </tr>
                    <tr>
                        <td>王大宇</td>
                        <td>男</td>
                        <td>1986-09-01</td>
                        <td>财务经理</td>
                        <td>财务经理</td>
                        <td>13897276521</td>
                        <td>010-97276521</td>
                        <td>0553-5965828</td>
                        <td>0553-5965828</td>
                        <td>注释文字内容注释文字...</td>
                        <td class='editor'><a href="javascript:void(0);">编辑</a></td>
                        <td class='delete'><a href="javascript:void(0);">删除</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="content_bottom">
                <button class="save">保存</button>
                <button class="submit">提交</button>
            </div>
        </div>
        
    </div>
    `
    return content;
 }


function information(){
    let info = `
     <div class="content_middle">
        <div class="business_sale_scale">
            <div class='card_title'>业务类型规模</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>月量情况（台/月）</th>
                        <th>是否需要更新</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value="2000"/></td>
                            <td>是</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="brand_scale">
            <div class='card_title'>品牌规模</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>品牌</th>
                        <th>容量情况（台/月）</th>
                        <th>填写时间</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>华为</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>OPPO</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>VIVO</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>IPhone</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>乐视</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="business_type_scale">
            <div class='card_title'>业务类型规模</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>业务类型</th>
                        <th>百分比（%）</th>
                        <th>填写时间</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>批发</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>电商</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>零售</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="price_scale">
            <div class='card_title'>价格段规模</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>品牌</th>
                        <th>容量情况（台/月）</th>
                        <th>填写时间</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0-499</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>500-999</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>2000-2999</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>3000-3999</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>4000以上</td>
                            <td><input type="text" value="2000"/></td>
                            <td>2017-06-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="operator_capacity">
            <div class='card_title'>运营商月容量</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>业务类型</th>
                        <th>百分比（%）</th>
                        <th>填写时间</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>全网通产品</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>电信产品</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                        <tr>
                            <td>移动产品</td>
                            <td><input type="text" value="20%"/></td>
                            <td>2017-06-10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="competitor_scale">
            <div class='card_title'>竞争者规模</div>
            <div class='card_table'>
                <table>
                    <thead>
                        <th>竞争者</th>
                        <th>容量情况（台/月）</th>
                        <th>记录创建人</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>中部</td>
                            <td><input type="text" value="2000"/></td>
                            <td>王某某</td>
                        </tr>
                        <tr>
                            <td>天音</td>
                            <td><input type="text" value="2000"/></td>
                            <td>李大嘴</td>
                        </tr>
                        <tr>
                            <td>爱施德</td>
                            <td><input type="text" value="2000"/></td>
                            <td>陈真</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="content_bottom">
        <button class="save">保存</button>
        <button class="submit">提交</button>
    </div>
    `
    return info;
}