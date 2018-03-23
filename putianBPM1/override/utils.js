/**
 * 本js用于封装业务上常用的js
 * @param orgId
 * @returns
 */
//千分位
function formatNumber(num) { 
  if (isNaN(num)) { 
    throw new TypeError("num is not a number"); 
  } 
  
  return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");  
} 
//人力附件
function getEnclosure(enclosure){
	if(enclosure==null || enclosure=="")return "";
	var s=enclosure.split(";");
	var s_enclosure="";
	var str="";
	for(var i=0;i<s.length;i++){
		if(s[i]=="")continue;
		str=s[i].split(",");
		s_enclosure+="<a href='"+str[1]+"' target='_blank'>"+str[0]+"</a><br>";
	}
	return s_enclosure;
}
//错误提示
function getMsg(message){
	var str=message.split("ErrCode");
	var msg="";
	for(var i=1;i<str.length;i++){
		var t="";
		var s=str[i].substring(str[i].indexOf("Message"));	
		if(s.indexOf(")")!=-1){
			s=s.split(")");
			for(var j=0;j<s.length;j++){
				if(s[j].indexOf("(")!=-1){
					t+=s[j]+")"+"<br>";	
				}else{
					t+=s[j]+"<br>";	
				}
			}
		}else{
			t=s+"<br>";
		}	                    		
		msg+=t;
	}
	msg=msg.replace(/Message/g,"错误信息");
 	return msg;
}
//翻译userid usercode
function getEmp(userid,userCode){
	var data =null;
	if(utils.tmFile.isEmpty(userid) && utils.tmFile.isEmpty(userCode)){
		return null;
	}
	nui.ajax({
		url:"com.pttl.bps.MarketManager.marketActivities.returnMachineApply.returnMachineApply.queryEmp.biz.ext",
		type:'POST',
    	data:{userId:userid,userCode:userCode},
    	async:false,
    	cache:false,
    	contentType:'text/json',
    	success:function(text){
    		var result=nui.decode(text);
    		data=result.emp;
    	},
    	error:function(e){
    	}
	});
	return data;
}
//翻译供应商
function getVendorByName(vendorName){
	var vendor =null;
	if(utils.tmFile.isEmpty(vendorName)){
		return null;
	}
	 $.ajax({
         url:"com.pttl.bps.GoodsManager.purchaseingmanager.orderModify.orderModify.queryVendorList.biz.ext",
         type:'post',
         data:nui.encode({vendorName:vendorName}),
         cache: false,
         async:false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text); 
             if(returnJson.exception == null){
            	 vendor = returnJson.data.length==0?null:returnJson.data[0];//处理ajax异步不能及时返回数据
              }
         }
     });
	 return vendor;
}
//翻译供应商
function getVendorById(vendorId){
	var vendor =null;
	if(utils.tmFile.isEmpty(vendorId)){
		return null;
	}
	 $.ajax({
         url:"com.pttl.bps.GoodsManager.purchaseingmanager.orderModify.orderModify.queryVendorList.biz.ext",
         type:'post',
         data:nui.encode({vendorId:vendorId}),
         cache: false,
         async:false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text); 
             if(returnJson.exception == null){
            	 vendor = returnJson.data.length==0?null:returnJson.data[0];//处理ajax异步不能及时返回数据
              }
         }
     });
	 return vendor;
}
//显示错误提示
function showMsg(msg){
	var x ="right";
    var y = "top";
    var state = "danger";
    mini.showTips({
        content: msg,
        state: state,
        x: x,
        y: y,
        timeout: 3000
    });
}
//明细 表的错误提示
function showDetailMsg(msg){
	var x ="right";
    var y = "center";
    var state = "danger";
    mini.showTips({
        content: msg,
        state: state,
        x: x,
        y: y,
        timeout: 3000
    });
}
//查询电子签章
function getSign(processInstID){
	nui.ajax({
		url:"com.pttl.bps.SellManager.sellExecute.discountLower.discountLower.queryPtSignature.biz.ext",
		type:'POST',
		contetnType:'text/json',
		data:{processInstID:processInstID},
		async:false,
		cache:false,
		success:function(text){
			var data=nui.decode(text);
			var params=data.userid;
			var p;
			for(var i=0;i<params.length;i++){
				p=params[i];
				if($('#'+p.activityDefID)[0]==null){
					continue;
				}
				if(p.sContent != null && p.sPath != "" ){
               	 	/*显示签章*/
                   $('#'+p.activityDefID)[0].innerHTML="";
					var img = new Image();
					img.src = p.sContent;
					img.width=200;
					img.height=50;
					$(img).appendTo($('#'+p.activityDefID));
				
               }
				$('#'+p.activityDefID).append(p.approveMsg);
				//else if(p.sPath != null && p.sPath != ""){
               		//上传的
               	//	$('#'+p. activityDefID)[0].innerHTML="";
				//	var img = new Image();
				//	img.src = p.sPath;
				//	img.width=200;
				//	img.height=50;
				//	$(img).appendTo($('#'+p.activityDefID));
               //}
			}
		},
		error:function(e){
			nui.ajax("电子签名查询错误，请联系管理员","提示");
		}
	});
}
//查询电子签章带时间
function getSignAndTime(processInstID){
	nui.ajax({
		url:"com.pttl.bps.SellManager.sellExecute.discountLower.discountLower.queryPtSignature.biz.ext",
		type:'POST',
		contetnType:'text/json',
		data:{processInstID:processInstID},
		async:false,
		cache:false,
		success:function(text){
			var data=nui.decode(text);
			var params=data.userid;
			var p;
			for(var i=0;i<params.length;i++){
				p=params[i];
				if($('#'+p.activityDefID)[0]==null){
					continue;
				}
				if(p.sContent != null && p.sPath != "" ){
               	 	/*显示签章*/
                   $('#'+p.activityDefID)[0].innerHTML="";
					var img = new Image();
					img.src = p.sContent;
					img.width=200;
					img.height=50;
					$(img).appendTo($('#'+p.activityDefID));
				
               }
				if(p.approveMsg==null)continue;
				$('#'+p.activityDefID).append(p.approveMsg);
				var approveTime=nui.formatDate(p.approveTime,"yyyy-MM-dd");
				$('#'+p.activityDefID).append("&nbsp;&nbsp;"+(approveTime==""?p.approveTime:approveTime));
				//else if(p.sPath != null && p.sPath != ""){
               		//上传的
               	//	$('#'+p. activityDefID)[0].innerHTML="";
				//	var img = new Image();
				//	img.src = p.sPath;
				//	img.width=200;
				//	img.height=50;
				//	$(img).appendTo($('#'+p.activityDefID));
               //}
			}
		},
		error:function(e){
			nui.ajax("电子签名查询错误，请联系管理员","提示");
		}
	});
}

//根据机构ID翻译机构名称
function getOrgByorgId(orgId){
	if(isNaN(orgId)){
		return "参数非法,必须为数字!";
	}
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(orgId)){
		return null;
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.orgToOrgName.biz.ext",
         type:'post',
         data:nui.encode({orgId:orgId}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.org.length==0?null:returnJson.org[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

//根据机构名称翻译机构ID
function getOrgByorgName(orgName){
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(orgName)){
		return null;
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.orgNameToOrgId.biz.ext",
         type:'post',
         data:nui.encode({orgName:orgName}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.org.length==0?null:returnJson.org[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

//根据机构Code翻译机构名称
function getOrginfoByOrgCode(orgcode){
	var defer = $.Deferred();
	if(orgcode==""){
		return "";
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.getOrginfoByOrgCode.biz.ext",
         type:'post',
         data:nui.encode({"orgId":orgcode}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.org.length==0?null:returnJson.org[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

//翻译项目
function getProjectById(projectId){
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(projectId)){
		return null;
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.projectId2ProjectName.biz.ext",
         type:'post',
         data:nui.encode({projectId:projectId}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.data.length==0?null:returnJson.data[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

//用户名  对应表ORG_EMPLOYEE
function getUserById(userId){
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(userId) || isNaN(userId)){
		return null;
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.userId2UserName.biz.ext",
         type:'post',
         data:nui.encode({userId:userId}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.data.length==0?null:returnJson.data[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

//用户名  对应表ORG_EMPLOYEE
function getUserByUserId(userId){
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(userId) ){
		return null;
	}
	 $.ajax({
         url:"com.primeton.plugext.utils.UserLoginId2UserName.biz.ext",
         type:'post',
         data:nui.encode({userId:userId}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 defer.resolve(returnJson.data.length==0?null:returnJson.data[0]);//处理ajax异步不能及时返回数据
              }
         }
     });
	 return defer.promise();
}

function getUserIdByUserName(userName){
	var defer = $.Deferred();
	if(utils.tmFile.isEmpty(userName)){
		return "";
	}
	$.ajax({
        url:"com.primeton.plugext.utils.userName2UserId.biz.ext",
        type:'post',
        data:nui.encode({userName:userName}),
        cache: false,
        async:false,
        contentType:'text/json',
        success:function(text){
            var returnJson = nui.decode(text);
            if(returnJson.exception == null){
            	defer.resolve(returnJson.data.length==0?null:returnJson.data[0]);
             }
        }
    });
	return defer.promise();
}

//翻译子表中的类别，品牌，机型等
function dicCodeConvert(dicCode,filed){
	if(utils.tmFile.isEmpty(dicCode) || utils.tmFile.isEmpty(filed)){
		return null;
	}
	var param=new Object();
	var dic=null;
	 var dicType={"type":"ITEM_TYPE","itemBrand":"ITEM_BRAND","itemModel":"ITEM_MODEL"};
	 if(filed in dicType){
		 param.dicType=dicType[filed];//字典类型
      }else{
    	  return {"dicDisplay":dicCode};
      }
	 param.dicCode=dicCode;
	 $.ajax({
         url:"com.primeton.plugext.utils.dicCodeConvert.biz.ext",
         type:'post',
         data:nui.encode(param),
         cache: false,
         async:false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 dic=returnJson.data.length==0?null:returnJson.data[0];
              }
         }
     });
	 return dic;
}
//根据fileToken查询以上传的文件列表
/*
 * fileToken  文件的ID
 * divID   需要展示的divID
 * isShowDelete  是否显示删除按钮
 */
function getFileList(fileToken,divID,isShowDelete){
	
	if( utils.tmFile.isEmpty(fileToken)){
		 $("#"+divID).append("无");
		return ;
	}
	 $.ajax({
         url:"com.primeton.plugext.fileupload.getFileList.biz.ext",
         type:'post',
         data:nui.encode({fileToken:fileToken}),
         cache: false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 var FileTable="<table style=' width: 100%;'>";
            	 if(text.data.length==0){
            		 FileTable+="<tr>";
            		 FileTable+="<td style=' width: 80%;'>无</td>";
            		 FileTable+="</tr>";
            	 }
            	 for(var i=0;i<text.data.length;i++){
            		 FileTable+="<tr>";
            		 FileTable+="<td style=' width: 80%;word-break: break-word;'>";
            		 var name=window.encodeURIComponent(text.data[i].clientFileName);
            		 FileTable+="<a href='"+getRootPath()+text.data[i].clientPath+"?fileName="+name+"' target='_blank' download='"+text.data[i].clientFileName+"'>"+text.data[i].clientFileName+"</a>";
            		 FileTable+="</td>";
            		 FileTable+="<td style=' width: 1%;'>";
            		 FileTable+=utils.tmFile.tm_countFileSize(text.data[i].size);
            		 FileTable+="</td>";
            		 FileTable+="<td>";
            		 if(isShowDelete){
            			 FileTable+="<a href='javascript:;' onclick='deleteFile(this)' file='"+nui.encode(text.data[i])+"'>删除</a>";
            		 }else{
            			 FileTable+="&nbsp;";
            		 }
            		 FileTable+="</td>";
            		 FileTable+="</tr>";
            	 }
            	 FileTable+="</table>";
            	 $("#"+divID).append(FileTable);
              }
         }
     });
}

//删除以上传的文件
function deleteFile(e){
	var file=$(e).attr("file");
	if(!file){
		return;
	}
	var tr=$(e).parent().parent();
	nui.confirm("确定删除文件?","警告⚠️",function(e){
		if(e=="ok"){
			 $.ajax({
		         url:"com.primeton.plugext.fileupload.deleteFile.biz.ext",
		         type:'post',
		         data:nui.encode({file:nui.decode(file)}),
		         cache: false,
		         contentType:'text/json',
		         success:function(text){
		             var returnJson = nui.decode(text);
		             if(returnJson.exception == null){
		            	 nui.alert("文件删除成功！","提示",function(){
		            		 tr.remove();
		            	 });
		              }
		         }
		     });
		}
	});
}

/** 
 * http://localhost:8083/proj 
 */  
function getRootPath(){  
    //获取当前网址，如： http://localhost:8083/proj/meun.jsp  
    var curWwwPath = window.document.location.href;  
    //获取主机地址之后的目录，如： proj/meun.jsp  
    var pathName = window.document.location.pathname;  
    var pos = curWwwPath.indexOf(pathName);  
    //获取主机地址，如： http://localhost:8083  
    var localhostPath = curWwwPath.substring(0, pos);  
    //获取带"/"的项目名，如：/proj  
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/')+1);  
    return(localhostPath + projectName);  
}  

function getSaveFormByFormId(id,key,entity){
	var data;
	var criteria="{\"criteria/_entity\": \""+entity+"\",\"criteria/_expr[1]/"+key+"\":\""+id+"\",\"criteria/_expr[1]/_op\": \"=\"}";
	 $.ajax({
         url:"com.primeton.plugext.utils.getSaveForm.biz.ext",
         type:'post',
         data:nui.encode(eval("("+criteria+")")),
         cache: false,
         async:false,
         contentType:'text/json',
         success:function(text){
             var returnJson = nui.decode(text);
             if(returnJson.exception == null){
            	 data= text.data[0];
              }
         }
     });
	 return data;
}
    //获取合同编号
    /*
     * 根据年份获取年份加自然数的合同档案编号
     */
	function getContractCode(year,type){
		if(utils.tmFile.isEmpty(year)){
			return null;
		}
		var data=null;
		 $.ajax({
	         url:"com.primeton.plugext.contract.queryIndexval.biz.ext",
	         type:'post',
	         data:nui.encode({year:year,type:type}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){
	            	 var indexval=returnJson.indexval;
	            	 data=year+"-"+(indexval);
	              }
	         }
	     });
		return data;
	}
	//按年流水除合同
	function getNumByYear(year,type){
		if(utils.tmFile.isEmpty(year)){
			return null;
		}
		var data=null;
		 $.ajax({
	         url:"com.primeton.plugext.contract.queryIndexval.biz.ext",
	         type:'post',
	         data:nui.encode({year:year,type:type}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){
	            	 var indexval=returnJson.indexval;
	            	 data=indexval;
	              }
	         }
	     });
		return data;
	}
	
	//修改编号
	function updateIndexval(year,indexval,tableName){
		nui.ajax({
			url:"com.primeton.plugext.contract.updateIndexval.biz.ext",
			type:'POST',
			data:{year:year,indexval:indexval,tableName:tableName},
			contentType:'text/json',
			cache:false,
			async:false
		});
	}
    
    //页面关闭函数
	function closeWindow(action) {   
	    if (window.CloseOwnerWindow) {
	        return window.CloseOwnerWindow(action);
	    } else {
	    	window.close();  
	    }          
	}
	
	//翻译项目
	function getProjectById_PHTH(projectId){
		var project =null;
		if(utils.tmFile.isEmpty(projectId)){
			return null;
		}
		 $.ajax({
	         url:"com.pttl.bps.MaterialManager.order.discountersign.getProjectByProjectId.biz.ext",
	         type:'post',
	         data:nui.encode({projectId:projectId}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text); 
	             if(returnJson.exception == null){
	            	 project = returnJson.data.length==0?null:returnJson.data[0];//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return project;
	}
	

	//翻译 事业部
	function getBuById(buId){
		var data=null;
		var datas={};
		if(buId==null){
			return null;
		}
		 $.ajax({
	         url:"com.primeton.plugext.utils.orgCodebyOrgName.biz.ext",
	         type:'post',
	         data:nui.encode({orgCode:buId}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){
	            	 if(returnJson.org[0]==null){
	            		 data=null;
	            	 }else{
	            		 data=returnJson.org.length==0?null:returnJson.org[0].orgname;//处理ajax异步不能及时返回数据
	            	 }
	            	 datas.buName=data;
	            	 datas.orgname=data;
	             }
	         }
	     });
		return datas;;
	}


	//翻译退后客户
	function getCustomerById(customerId){
		var defer = $.Deferred();
		if(utils.tmFile.isEmpty(customerId)){
			return null;
		}
		 $.ajax({
	         url:"com.pttl.bps.MaterialManager.order.discountersign.getCustomerByCustomerId.biz.ext",
	         type:'post',
	         data:nui.encode({customerId:customerId}),
	         cache: false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){
	            	 defer.resolve(returnJson.customer.length==0?null:returnJson.customer[0]);//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return defer.promise();
	}
	
	//翻译客户
	function getCustomerByName(customerName){
		var defer = $.Deferred();
		if(utils.tmFile.isEmpty(customerName)){
			return null;
		}
		 $.ajax({
	         url:"com.primeton.plugext.utils.getCustomerByCustomerName.biz.ext",
	         type:'post',
	         data:nui.encode({customerName:customerName}),
	         cache: false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){
	            	 defer.resolve(returnJson.customer.length==0?null:returnJson.customer[0]);//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return defer.promise();
	}
	
	//手机号验证
	function isTelePhone(e){
        if (utils.regRule.mobile(e.value)) return true;
        e.errorText = "手机号无效";
        e.isValid = false;
        return false;
		
	}
	//格式化千分位
    function format(num) {
	    return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	}
	//翻译客户
	function getCustomerById_DGBOI(customerId){
		var customer=null;
		if(utils.tmFile.isEmpty(customerId)){
			return null;
		}
		 $.ajax({
	         url:"com.pttl.bps.MaterialManager.order.discountersign.getCustomerByCustomerId.biz.ext",
	         type:'post',
	         data:nui.encode({customerId:customerId}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){	            	
	            	 customer=returnJson.customer.length==0?null:returnJson.customer[0];//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return customer;
	}
	
	//翻译仓库
	function getStoreById(storeId){
		var store=null;
		if(utils.tmFile.isEmpty(storeId)){
			return null;
		}
		 $.ajax({
	         url:"com.primeton.plugext.publicModel.getPtStore.biz.ext",
	         type:'post',
	         data:nui.encode({storeId:storeId}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){	            	
	            	 store=returnJson.store.length==0?null:returnJson.store[0];//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return store;
	}
	
	//翻译PCC
	function getPCCByUuid(uuid,cityType){
		var ptCity=null;
		if(utils.tmFile.isEmpty(uuid)){
			return null;
		}
		
		if(utils.tmFile.isEmpty(cityType)){
			return null;
		}
		
		 $.ajax({
	         url:"com.pttl.bps.ClienteleManager.info_management.disbusinesshall.disbusinesshall.getPCCbyUuid.biz.ext",
	         type:'post',
	         data:nui.encode({uuid:uuid,cityType:cityType}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){	            	
	            	 ptCity=returnJson.ptCity.length==0?null:returnJson.ptCity[0];//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return ptCity;
	}
	
	//翻译PCC
	function getPCCByName(Name,cityType){
		var ptCity=null;
		if(utils.tmFile.isEmpty(Name)){
			return null;
		}
		
		if(utils.tmFile.isEmpty(cityType)){
			return null;
		}
		
		 $.ajax({
	         url:"com.pttl.bps.ClienteleManager.info_management.disbusinesshall.disbusinesshall.getPCCbyName.biz.ext",
	         type:'post',
	         data:nui.encode({name:Name,cityType:cityType}),
	         cache: false,
	         async:false,
	         contentType:'text/json',
	         success:function(text){
	             var returnJson = nui.decode(text);
	             if(returnJson.exception == null){	            	
	            	 ptCity=returnJson.ptCity.length==0?null:returnJson.ptCity[0];//处理ajax异步不能及时返回数据
	              }
	         }
	     });
		 return ptCity;
	}
	
	/**
	 * 查看流程图公用方法
	 * processInstID 流程实例ID 必要参数
	 * tabObjcet tab对象 不传入则以弹窗显示
	 */
	function showFlow(processInstID,tabObjcet){
		if(isNaN(processInstID)){
			return "参数非法,必须为数字!";
		}
		if(utils.tmFile.isEmpty(processInstID)){
		     nui.showTips({
		            content: "此数据为迁移数据<br/>&nbsp;&nbsp;无法查看",
		            state: "warning",
		            x: "right",
		            y: "bottom",
		            timeout: 3000
		        });
			return;
		}
		if(utils.tmFile.isEmpty(tabObjcet)){
			$.ajax({
		         url:"com.primeton.plugext.flow.getFlowDetail.biz.ext",
		         type:'post',
		         data:nui.encode({processInstID:processInstID}),
		         cache: false,
		         contentType:'text/json',
		         success:function(text){
		             var returnJson = nui.decode(text);
		             if(returnJson.exception != null){
		                return;
		              }
		             if(returnJson.data==null){
		                 nui.showTips({
				            content: "流程不存在<br/>&nbsp;&nbsp;无法查看",
				            state: "warning",
				            x: "right",
				            y: "bottom",
				            timeout: 3000
				        });
		                 return;
		             }
		             nui.open({
		 		        url:bootPATH+"../publicModel/get_Wfworkitem.jsp",
		 	            title: "流程跟踪",
		 	            width: 1107,
		 	            height: 450,
		 	            allowResize:false,
		 	            showMaxButton:true,
		 	            onload:function(){
		 		            var iframe = this.getIFrameEl(); 	           
		 			        //调用弹出页面方法进行初始化
		 			        iframe.contentWindow.setData(returnJson.data);            
		 	            },
		 		    });
		         }
		     });
		}else{
			if(processInstID){
				var isOpen=false;
		        var tab=new Object();
		        tab.title="流程跟踪";
		        tab.url=bootPATH+"../publicModel/get_Wfworkitem.jsp";
		        tab.showCloseButton=true;
		        //查询出流程
		         $.ajax({
			         url:"com.primeton.plugext.flow.getFlowDetail.biz.ext",
			         type:'post',
			         data:nui.encode({processInstID:processInstID}),
			         cache: false,
			         contentType:'text/json',
			         success:function(text){
			             var returnJson = nui.decode(text);
			             if(returnJson.exception != null){
			                return;
			              }
			             if(returnJson.data==null){
			                 nui.showTips({
					            content: "流程不存在<br/>&nbsp;&nbsp;无法查看",
					            state: "warning",
					            x: "right",
					            y: "bottom",
					            timeout: 3000
					        });
			                 for(var i=0;i<tabObjcet.tabs.length;i++){
					             if(tabObjcet.tabs[i].title==tab.title && tabObjcet.tabs[i].url==tab.url){
					            	tabObjcet.removeTab(tabObjcet.tabs[i]);
					                break;
					             }
					         }
			                return;
			             }
			             for(var i=0;i<tabObjcet.tabs.length;i++){
				             if(tabObjcet.tabs[i].title==tab.title && tabObjcet.tabs[i].url==tab.url){
				            	tabObjcet.activeTab(tabObjcet.tabs[i]);
				            	tabObjcet.tabs[i].onload=function (e) {
							        var tabs = e.sender;
							        var iframe = tabs.getTabIFrameEl(e.tab);
							        //直接从页面获取，不用去后台获取
						   			iframe.contentWindow.setData(returnJson.data);
							     };
				            	tabObjcet.reloadTab(tabObjcet.tabs[i]);
				                isOpen=true;
				                break;
				             }
				         }
					     if(!isOpen){
					    	 tab.onload = function (e) {
						        var tabs = e.sender;
						        var iframe = tabs.getTabIFrameEl(e.tab);
						        //直接从页面获取，不用去后台获取
					   			iframe.contentWindow.setData(returnJson.data);
						     };
					    	 tabObjcet.addTab(tab);
						     tabObjcet.activeTab(tab);
					     }
			         }
			     });
	        }
			
		}
		
	}
	
	/**
	 * 省市县三级联动公用组件
	 * type:"", 标签所属联动(province:省份，city：城市，county：区县)
     *Name:200, 标签name
     *style:"", 标签样式
     *property:标签属性
	 */
	/********************************省市县三级联动开始**************************************/
	function city(config){
		var ement="";
		if(config.type=="province"){
			ement="<input class='nui-combobox' textField='cityName' allowInput='true' ajaxType='get' "+config.property+" id='province' url='com.primeton.plugext.utils.citylinkage.biz.ext?parentId=' valueField='uuid' name='"+config.Name+"' style='"+config.style+"' showNullItem='true' nullItemText='请选择省份' onvaluechanged='onProvinceChanged' onvalidation='onComboValidation'/>";
		}
		if(config.type=="city"){
			ement="<input class='nui-combobox' textField='cityName' allowInput='true' ajaxType='get' "+config.property+" valueField='uuid' id='city' name='"+config.Name+"' style='"+config.style+"' showNullItem='true' nullItemText='请选择城市' onvaluechanged='onCityChanged' onvalidation='onComboValidation'/>";
		}
		if(config.type=="county"){
			ement="<input class='nui-combobox' textField='cityName' allowInput='true' ajaxType='get' "+config.property+" valueField='uuid' id='county' name='"+config.Name+"' style='"+config.style+"' showNullItem='true' nullItemText='请选择区/县' onvalidation='onComboValidation'/>";
		}
		return ement;
	}
	function onProvinceChanged(e){
		var city=nui.get("city");
		var county=nui.get("county");
		if(city.nullItemText!="Y"){
			city.setData(null);
			county.setData(null);
		}
		if(utils.tmFile.isNotEmpty(e.selected)){
			var id = e.selected.uuid;
	        var url = "com.primeton.plugext.utils.citylinkage.biz.ext?parentId=" + id;
	        city.setUrl(url);
	        //city.select(0);
		}
	}
	function onCityChanged(e){
		var county=nui.get("county");
		if(county.nullItemText!="Y"){
			county.setData(null);
		}
		if(utils.tmFile.isNotEmpty(e.selected)){
			var id = e.selected.uuid;
			var url = "com.primeton.plugext.utils.citylinkage.biz.ext?parentId=" + id;
	        county.setUrl(url);
	        //county.select(0);
		}
	}
	function onComboValidation(e) {
		if(this.data.length==0){
			return;
		}
        var items = this.findItems(e.value);
        if (!items || items.length == 0) {
            e.isValid = false;
            e.errorText = "输入值不在下拉数据中";
        }
    }
	/********************************省市县三级联动结束**************************************/
	
	/*
	 * 流程终止更改状态
	 */
	function terminateWorkfolw(tableName,statusFiled,UUID) {

	       $.ajax({
		         url:"com.primeton.plugext.utils.terminateFlow.biz.ext",
		         type:'post',
		         data:nui.encode({tableName:tableName,statusFiled:statusFiled,UUID:UUID}),
		         cache: false,
		         contentType:'text/json',
		         success:function(text){
		             var returnJson = nui.decode(text);
		             if(returnJson.exception != null){
		                return;
		              }
		         }
		     });
	  }
		
	  /**
	   * datagrid 反选
	   */    
	       function unSelectRows(grid){
	           
				var rows = grid.getData();
				for(var i=0,l=rows.length;i<l;i++){
				   var row = rows[i]
				   var isSelect=grid.isSelected(row)?false:true;
				   if(isSelect){
				   		grid.select(row);
				   }else{
				   	grid.deselect(row);
				   }
				   
				}
        
        }  
   
	       //合同ID，得到合同名称
	       function contractName(uuid){
			    var defer = $.Deferred();
				if(uuid==""){
					return "";
				}
				var criteria="{\"criteria/_entity\": \"com.pttl.bps.AdministrationManager.sell.contract.PoContractInfo\", \"criteria/_expr[1]/uuid\": \""+uuid+"\", \"criteria/_expr[1]/_op\": \"=\"}";
				 $.ajax({
			         url:"com.pttl.bps.AdministrationManager.sell.sellContract.contractList.biz.ext",
			         type:'post',
			         data:nui.encode(nui.decode(criteria)),
			         cache: false,
			         contentType:'text/json',
			         success:function(data){
			               defer.resolve(data.total==0?null:data.data[0].contractNum);//处理ajax异步不能及时返回数据
			         }
			     });
			     return defer.promise();
			}
  
	       
	       function logPrint(printStr){
	    	   nui.ajax({
	            	url:"com.pttl.bps.HRManager.holidayMgr.holidayMgr.logPrint.biz.ext",
	            	type:'POST',
	            	contentType:'text/json',
	            	async: false,
	            	data:{str:printStr}
	            });
	       }