// base.js 是对原 PC 页面进行操作的脚本文件
// 通常用于处理原 PC 页面的兼容性问题、页面跳转逻辑等
(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */

    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc){
      //如果cors行不通  ,改成iframe嵌套请求.除了速度会慢没有影响
// if(aWin.location.href.indexOf("login")!=-1){
//   var timer = setInterval(function(){
//     if(doc.querySelector('#topholder')){
//       var iframe = doc.createElement('iframe');
//             iframe.name='test'
//             iframe.setAttribute('src','http://120.52.96.35:45254/uac/services/CreateAiuapTokenSoap?wsdl');
//             doc.querySelector('#topholder').appendChild(iframe)
//       clearInterval(timer);
//     }
//   },500)
   					
// }
				var timer = setInterval(function(){
          if(doc.querySelector("#funcTree")){
            var panel=doc.querySelectorAll(".panel")[0];
            if(panel.style.display!=="none"){
              var tree=panel.querySelector("#funcTree").querySelectorAll(".tree-node");
              for(var i=0;i<tree.length;i++){
                if(tree[i].textContent.indexOf("任务中心")!==-1){
                  tree[i].click()
                }
              }
            }

            clearInterval(timer);
          } 
        },500);
  
     },

    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
        aWin.addEventListener('DOMContentLoaded',function(){
						if(aWin.location.href.indexOf("loginid")!=-1){
						var url = aWin.location.href;
						var date = new Date();
						var currentDate = date.toLocaleDateString();
						currentDate = currentDate.split('/');
						currentDate = currentDate[0]+currentDate[1]+currentDate[2]
						var currentTime = date.toLocaleTimeString();
						if(top.EAPI.isIOS() || top.EAPI.isStudio()){
						currentTime = currentTime.split(/[\u4E00-\u9FA5]+/)[1].split(':');
						currentTime = currentDate+currentTime[0]+currentTime[1]+currentTime[2];
						}else{
						var src = currentTime.split(':');
						currentTime = currentDate+currentTime[0]+currentTime[1]+src[2].split(' ')[0];
						}
						var userName = url.split("?")[1].split('=')[1].split('&')[0];
						var data = '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://server.webservice.auth.bwda.com">';
						//data += '<soapenv:Header/>';
						data+='<soapenv:Header>'
						data+='<Esb>'
						data+='<Route>'
						data+='<Sender>60.6004</Sender>'
						data+='<ServCode>40.4007.CreateAiuapTokenSoap</ServCode>'
						data+='<Time>2018-03-04 15:03:19.380</Time>'
						data+='<MsgId>60.6004_20180304150319380</MsgId>'  //sender+yymmdd
						data+='<AuthCode/>'
						data+='<TransId/>'
						data+='<TransId/>'
						data+='<AuthType/>'
						data+='<Version/>'
						data+='<MsgId>20.2001_20180304150319380</MsgId>'
						data+='</Route>'
						data+='</Esb>'
						data+='</soapenv:Header>'
						data += '<soapenv:Body>';
						data += '<ser:CreateAiuapTokenSoap soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">';
						data += '<requestInfo xsi:type="soapenc:string" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">'
						data += '<![CDATA[';
						data += "<REQUEST>";
						data += "<HEAD>";
						data += "<CODE></CODE>";
						data += "<SID></SID>";
						data += "<TIMESTAMP>"+currentTime+"</TIMESTAMP>";
						data += "<SERVICEID>CHNTFMS</SERVICEID>";
						data += "</HEAD>";
						data += "<BODY>";
						data += "<LOGINACCT>"+userName+"</LOGINACCT>";
						data += "</BODY>";
						data += "</REQUEST>]]></requestInfo>";
						data += "</ser:CreateAiuapTokenSoap>"
						data += "</soapenv:Body>"
						data += "</soapenv:Envelope>"
						var xhr = new XMLHttpRequest();
						xhr.onreadystatechange = function(){
						if(xhr.status == 200 && xhr.readyState == 4){
						var token = xhr.response.split('TOKEN')[1].split(/(;+)/)[2].split('&')[0];
						var APPACCTID = xhr.response.split('APPACCTID')[1].split(/(;+)/)[2].split('&')[0]
						var urlToken = "http://120.52.96.35:13080/cwbase/jtgl/Verification/Verification.aspx?Login=ZGTT&token="+token+"&appAcctId="+APPACCTID+"&flag=1";
						aWin.location.href = urlToken;
						}
						}
						//xhr.open('POST','http://120.52.96.35:45254/uac/services/CreateAiuapTokenSoap?wsdl',false);
						xhr.open('POST','http://120.52.96.35:9000/proxy',false);
              //现在为cors跨域资源共享.不能添加head头部 会改变method  .导致请求不会响应
						//xhr.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
						//xhr.setRequestHeader("SOAPAction", '');    //重点 soap请求务必添加. 
						xhr.send(data);
            
 						}
        },false)
    },

    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },

    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }


  });

})(window, ysp);

//配合iframe方法使用.将请求换成这个越过esb总线直接请求4A接口
// var date = new Date();
// 						var currentDate = date.toLocaleDateString();
// 						currentDate = currentDate.split('/');
// 						currentDate = currentDate[0]+currentDate[1]+currentDate[2]
// 						var currentTime = date.toLocaleTimeString();
// currentTime = currentTime.split(/[\u4E00-\u9FA5]+/)[1].split(':');
// 						currentTime = currentDate+currentTime[0]+currentTime[1]+currentTime[2];
// //var userName='wangyd'
// var data = '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://server.webservice.auth.bwda.com">';
// 						data += '<soapenv:Header/>';
// 						data += '<soapenv:Body>';
// 						data += '<ser:CreateAiuapTokenSoap soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">';
// 						data += '<requestInfo xsi:type="soapenc:string" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">'
// 						data += '<![CDATA[';
// 						data += "<REQUEST>";
// 						data += "<HEAD>";
// 						data += "<CODE></CODE>";
// 						data += "<SID></SID>";
// 						data += "<TIMESTAMP>"+currentTime+"</TIMESTAMP>";
// 						data += "<SERVICEID>CHNTFMS</SERVICEID>";
// 						data += "</HEAD>";
// 						data += "<BODY>";
// 						data += "<LOGINACCT>"+userName+"</LOGINACCT>";
// 						data += "</BODY>";
// 						data += "</REQUEST>]]></requestInfo>";
// 						data += "</ser:CreateAiuapTokenSoap>"
// 						data += "</soapenv:Body>"
// 						data += "</soapenv:Envelope>"
// 						var xhr = new XMLHttpRequest();
// 						xhr.onreadystatechange = function(){
// 						if(xhr.status == 200 && xhr.readyState == 4){
// 						var token = xhr.response.split('TOKEN')[1].split(/(;+)/)[2].split('&')[0];
// 						var APPACCTID = xhr.response.split('APPACCTID')[1].split(/(;+)/)[2].split('&')[0]
// 						var urlToken = "http://120.52.96.35:13080/cwbase/jtgl/Verification/Verification.aspx?Login=ZGTT&token="+token+"&appAcctId="+APPACCTID+"&flag=1";
// debugger;
// 						aWin.location.href = urlToken;
// 						}
// 						}
// 						xhr.open('POST','http://120.52.96.35:45254/uac/services/CreateAiuapTokenSoap?wsdl',false);
// 						//xhr.open('POST','http://120.52.96.35:9000/proxy',false);
// 						xhr.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
// 						xhr.setRequestHeader("SOAPAction", '');    //重点 soap请求务必添加. 
// 						xhr.send(data);