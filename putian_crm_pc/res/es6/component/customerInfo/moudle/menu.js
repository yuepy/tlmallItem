import * as Constant from '../../../constant/constant.js';
let $menu = null;
export var load = function(menu){
    doAction();
}

function doAction() {
    //ajax 请求
   $(Constant.MENU_MOUNT).html(render());
   //标签左右箭头滑动效果
   var ul = document.querySelector('.head-tab').querySelector('ul');
   var ulWidth = document.querySelector('.head-tab').querySelector('ul').offsetWidth;
   var lis = document.querySelector('.head-tab').querySelector('ul').querySelectorAll('li');
   for(var i=0,liWidth=0;i<lis.length;i++){
       liWidth+=lis[i].offsetWidth+25;
   }
   var moveWidth = (liWidth > ulWidth) ? ((liWidth - ulWidth)+10) : 0; 

    function moveLeft(){
        if(ul.style.marginLeft == '-'+moveWidth+'px'){
            ul.style.marginRight = 0+'px';
            ul.style.marginLeft = 0+'px';
            ul.style.marginRight = '-'+moveWidth+'px';
        }else{
            console.log('没有移动')
        }
    }
    function moveRight(){
        if(ul.style.marginLeft  != '-'+moveWidth+'px'){
            ul.style.marginLeft = 0+'px';
            ul.style.marginRight = 0+'px';
            ul.style.marginLeft ='-'+moveWidth+'px';
        }else{
            console.log('没有移动')
        }
        
    }
    $('#leftArrow').on('click',function(){
        moveLeft();
        console.log(ulWidth,liWidth,moveWidth)
    });
    $('#rightArrow').on('click',function(){
        moveRight();
    })
    //标签选中效果切换
    $("#clientInfoMenu li").find('a').on('click',function(e) {
        $(this).parent().addClass('active');    
        $(this).parent().siblings().removeClass('active');                       
    });
}

function render(){
   let menuTemp = 
    `
            <div class="head-tab">
                <i class='left-arrow' id="leftArrow"></i>
                <i class='right-arrow' id="rightArrow"></i>
                <ul id="clientInfoMenu">
                    <li><a href="clientinfo.html?arg=clientinfo">客户详情</a></li>
                    <li><a href="order.html">订单</a></li>
                    <li><a href="salesRebate.html">销售返利</a></li>
                    <li><a href="">对账单</a></li>
                    <li><a href="walletMoney.html">电子钱包</a></li>
                    <li><a href="clientinfo.html?arg=portrait">客户画像</a></li>
                    <li class="active"><a href="lineCredit.html" target="synergiesFrame">信用额度</a></li>
                    <li><a href="">门店</a></li>
                    <li ><a href="">过往业绩</a></li>
                    <li><a href="">责任团队视图</a></li>
                    <li><a href="">客户项目</a></li>
                    <li><a href="">客户经营规模</a></li>
                    <li><a href="">收货地址</a></li>
                    <li><a href="">收单地址</a></li>
                </ul>
            </div>
      `;
    $menu = $(menuTemp);
    $menu.on('click',function(e){
        console.info(e.target);
    });
    return $(menuTemp);
}


