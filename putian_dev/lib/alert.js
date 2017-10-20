var onlineUser;
var countTab2 = 0;
var countTab5 = 0;
var countTab6 = 0;
var countTab7 = 0;
$(function() {
	image();
	$("#relogin").click(toLogout);
	$("#KinSlideshow").KinSlideshow();
	// document.getElementById("taskDone").style.display = "none";
	alltask();
	test(1);
	changeTab(1);
	changeTable(1);



	Fix.ajax({
        action: {
            _method: "systemService.getUserItems"
        },
        async:false,
        success: function(response){
        	onlineUser = response.userInfo;
        }
    });

	var userId = onlineUser.userId;
	var username = onlineUser.userName;
	var loginid = onlineUser.loginId;
	var dep = onlineUser.orgName || "";
	var userinfo = username + " [" + loginid + "]" + dep;

	$("#userinfo").html(userinfo);


	$("#changePwd").click(function(){
		var height ="250";
		var width = "450";
		var title = Fix.Global["{@pwdTitle}"];
		var draggableConfig = {
				height:height,
				width:width,
				title:title,
				containerType:"div"
		};
		var JQDialog = new Fix.Component.JQDialog(draggableConfig);
		var $container = JQDialog.draw();
		var $table = $("<table width='400px' height='200px'></table>");
		var $oldPwd = $("<tr  style='height:40px'><td width='130px' style='text-align:right'>"+Fix.Global["{@oldPwd}"]+"：</td><td width='140px'><input type='password'/></td></tr>");
		var $newPwd =$("<tr style='height:40px'><td style='text-align:right'>"+Fix.Global["{@newPwd}"]+"：</td><td><input type='password'/></td></tr>");
		var $checkPwd =$("<tr style='height:40px'><td style='text-align:right'>"+Fix.Global["{@checkPwd}"]+"：</td><td><input type='password'/></td></tr>");
		var $btn = $("<tr style='height:40px'><td colspan='2' style='text-align:center'></td></tr>");
		var $submitBtn = $("<button type='button'  style='width:50px'>"+Fix.Global["{@okPwd}"]+"</button>");
		var $cancelBtn =  $("<button type='button' style='width:50px;margin-left:5px'>"+Fix.Global["{@cancelPwd}"]+"</button>");
		$("td",$btn).append($submitBtn);
		$("td",$btn).append($cancelBtn);
		$table.append($oldPwd);
		$table.append($newPwd);
		$table.append($checkPwd);
		$table.append($btn);
		$submitBtn.click(function(){
			var oldPwd = $("input",$oldPwd).val();
			var newPwd =  $("input",$newPwd).val();
			var rePwd =  $("input",$checkPwd).val();
			if(oldPwd==""){
				alert(Fix.Global["{@emptyOldPwd}"]);
				return;
			}
			if(newPwd==""){
				alert(Fix.Global["{@emptyNewPwd}"]);
				return;
			}
			if(rePwd==""){
				alert(Fix.Global["{@emptyCheckPwd}"]);
				return;
			}
			if(newPwd != rePwd){
				alert(Fix.Global["{@pwdDiffer}"]);
				return;
			}
			 Fix.ajax({
	             action: {
	                 _method: "AU_USERINFO.changePassword",
	                 _param: {
	                     oldPwd : oldPwd,
	                     newPwd : newPwd
	                 }
	             },
	             async:false,
	             success: function(response){
	            	 if(response.res == 1){
	            		 alert(Fix.Global["{@pwdSuccess}"]);
	            		 window.location = "loginform.html";
	            	 }else if(response.res == 0){
	            		 alert(Fix.Global["{@errorOldPwd}"]);
	            	 }else{
	            		 alert(Fix.Global["{@unknownError}"]);
	            	 };
	             },
	             error: function(){
	            	 alert(Fix.Global["{@pwdFail}"]);
	             }
	         });
		});
		$cancelBtn.click(function(){
			JQDialog.remove();
		});
		$container.append($table);
		JQDialog.show();
	});
	//外出代理
	var JQDialog;
	$("#outAgent").click(function(){
		var draggableConfig = {
				height:"500px",
				width:"850px",
				title:Fix.Global["{@outAgent}"],
				containerType:"div"
		};
		JQDialog = new Fix.Component.JQDialog(draggableConfig);
		var $container = JQDialog.draw();
		var ifr = $("<iframe frameborder='0' width='100%' height='480px' src='../../forms/system/FIXFLOW_AGENT_AGENTINFO/blank.htm?_objName=FIXFLOW_AGENT_AGENTINFO&_viewId=list&_menuId=7222dfc5-6abc-47c1-be32-2f4a4f93b2d7'></iframe>");
		$container.append(ifr);
		JQDialog.show();
	}).html(Fix.Global["{@outAgent}"]);


});

function toLogout() {
	$.ajax({
		url : Fix.App.getHost() + 'servlet/LogoutServlet.cmd',
		dataType : 'json',
		async : false,
		type : 'post',
		success : function(data, textStatus) {
			top.location.href = "loginform.html";
		},
	});

}

function test(obj) {
	$.ajax({
		url : Fix.App.getHost() + 'servlet/IndexPage.cmd',
		dataType : 'json',
		type : 'post',
		data : {
			fid : obj
		},
		success : function(response) {
			var forum = response.forum;
			var message = response.message;
			// alert(message);
			document.getElementById('table'+obj).innerHTML = forum;
			document.getElementById('comments').innerHTML = message;
			// alert(a);
		}
	});

}

function changeTab(obj) {
	if (obj == "1") {
		$("#tab1").addClass("select");
		$("#tab2").removeClass();
		document.getElementById("taskDone").style.display = "none";
		document.getElementById("allTask").style.display = "";

	} else if (obj == "2") {
		$("#tab1").removeClass();
		$("#tab2").addClass("select");
		document.getElementById("taskDone").style.display = "";
		document.getElementById("allTask").style.display = "none";
		if(countTab2==0){
			taskDone();
			countTab2=1;
		}
	}
}

function changeTable(obj) {
	if (obj == "1") {
		$("#tab4").addClass("select");
		$("#tab5").removeClass();
		$("#tab6").removeClass();
		$("#tab7").removeClass();
		$("#table1").show();
		$("#table2").hide();
		$("#table3").hide();
		$("#table4").hide();

	} else if (obj == "2") {
		$("#tab4").removeClass();
		$("#tab5").addClass("select");
		$("#tab6").removeClass();
		$("#tab7").removeClass();
		$("#table1").hide();
		$("#table2").show();
		$("#table3").hide();
		$("#table4").hide();
		if(countTab5==0){
			test(2);
			countTab5=1;
		}
	} else if (obj == "3") {
		$("#tab4").removeClass();
		$("#tab5").removeClass();
		$("#tab6").addClass("select");
		$("#tab7").removeClass();
		$("#table1").hide();
		$("#table2").hide();
		$("#table3").show();
		$("#table4").hide();
		if(countTab6==0){
			test(3);
			countTab6=1;
		}
	} else if (obj == "4") {
		$("#tab4").removeClass();
		$("#tab5").removeClass();
		$("#tab6").removeClass();
		$("#tab7").addClass("select");
		$("#table1").hide();
		$("#table2").hide();
		$("#table3").hide();
		$("#table4").show();
		if(countTab7==0){
			test(4);
			countTab7=1;
		}
	}
}
function flowBegin() {
	var url = "../../forms/pt/DG_BORROW/dg_borrow.htm";
	var params = {
		_objName : 'undefined',
		_viewId : 'dg_borrow',
		_menuId : '0c728146-bd71-4fa8-a2b3-16bf0bfdf841',
		objName : 'DG_BORROW',
		_useType : 'add',
		_defKey : 'dg_borrow'
	};
	if (url !== undefined && url != '') {
		url = top.Fix.Utils.appendParams(url, params);
	}
	var tabObj = {
		id : "test",
		width : "1150",
		height : "500",
		title : "测试",
		url : url,
		name : "form "
	};
	top.Fix.Manager.createDialog(tabObj, function() {
	}, window);
}

function openForum(fid, uuid) {
	var url = "../../forms/forumPost/FORUM_POST/forum_view.htm";
	var params = {
		FID : fid,
		_viewId : 'forumPost',
		_menuId : 'ec3e760d-b47c-4aa8-a448-e3db5fd193e1',
		objName : 'FORUM_POST',
		_pk : 'UUID',
		_pkValue : uuid,
		_useType : 'view'
	};

	if (url !== undefined && url != '') {
		url = top.Fix.Utils.appendParams(url, params);
	}
	var tabObj = {
		id : "test",
		width : "1150",
		height : "500",
		title : "信息",
		url : url,
		name : "form "
	};
	top.Fix.Manager.createDialog(tabObj, function() {
	}, window);
}

function image(){
	var subject = [];
	var attachment_name = [];
	$.ajax({
		url : Fix.App.getHost() + 'servlet/IndexImage.cmd',
		dataType : 'json',
		type : 'post',
		data : {
			data : 1
		},
		success : function(response) {
			var image = response.image;
            subject = image.SUBJECT;
            attachment_name = image.ATTACHMENT_NAME;
          //var _fieldToken =Fix.Engine.Data.FIX_ACC_TABLE1[0].FILE_DATA.val;
        	for(var i=0;i<subject.length;i++){
        	var url = Fix.Helper.getFirstFile(attachment_name[i]);
        	var title = subject[i];
        	//alert(url);
        	$("#img"+i).attr("src", url);
        	$("#img"+i).attr("alt", title);
        	}
		}
	});


}
