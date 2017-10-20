Fix = window['Fix'] || {};
//$(document).bind("selectstart",function(){return false;});

$(document).ready(function(){
	
	/*if($.browser.msie&&($.browser.version == "8.0")){
		//ie8样式兼容性问题，强制宽度100%
		$(".ui-table-A input[type=text]").css({width:"100%"});
		$(".ui-table-Detail input[type=text]").css({width:"100%"});
	}*/

	$("[ButtonType=clean]").click(function(){
		$("input:text").val("");
	});
	//浏览界面，表头点击伸缩功能
	$(".table_title").css({cursor: "pointer",cursor: "hand"});
	$(".table_title").click(function(){
		$(this).next().toggle(
				function(){$(".button_topup", this).removeClass("button_todown").addClass("button_topup")}, 
				function(){$(".button_topup", this).removeClass("button_topup").addClass("button_todown")}
		);
	});
	
	Fix.Localization.Init();
});



Fix.Runtime = {
	getFixContainer:function(obj_source){
		var $container = $(obj_source).closest(".fixContainer");
		if($container.length == 0)
			$container = $(window.frameElement).closest(".fixContainer");
		return $container;
	},
	getToken:function(obj_source){
		var $container = Fix.Runtime.getFixContainer(obj_source);
		return $container.attr("token");
	},
	closeThisPage:function(obj_source){
		var token = Fix.Runtime.getToken(obj_source);
		if(top.Fix !== undefined){
			top.Fix.Manager.clearError();
			top.Fix.Manager.close(token);
		}
		else{
			window.opener.top.Fix.Manager.close(token);
		}
	},
	setErrorMsg:function(html_obj, str_msg){
		var jQy_source = $(html_obj);
		jQy_source.addClass("failformcss");
		return str_msg;
	},
	setError:function(errMsg){
		var errorTitle = "错误";
		var Local = Fix.Runtime.store.get("Local");
		//if(window.localStorage.Local&&window.localStorage.Local=="en_US"){
		if(Local=="en_US"){
			errorTitle = "Error";
		}
		var notify = {
				title: errorTitle,
				//text: str_msg,
				type: 'error',
				hide: false,
				shadow: true,
				sticker: false,
				width: '250px'
			};
		if(top.Fix.Manager.CurrErr){
			top.Fix.Manager.CurrErr.pnotify_remove();
		}
		notify.text = errMsg;
		var permanotice = top.$.pnotify(notify);
		top.Fix.Manager.CurrErr = permanotice;
	},
	clearError:function(html_obj){
		if(top.Fix.Manager.CurrErr){
			top.Fix.Manager.CurrErr.pnotify_remove();
		}
		if(html_obj!=""&&html_obj!=undefined){
			var jQy_source = $(html_obj);
			jQy_source.removeClass("failformcss");
		}
	},
	/**
	 * @author elvis
	 * @description 附加值
	 * @param {jQuery} $obj 目标对象
	 * @param {String} str_value 值
	 * @param {String} separating 分隔符
	 */
	appendValue: function($obj, str_value, separating){
		var org_value = $obj.val();
		var new_value = "";
		if(org_value == "")
			new_value = str_value;
		else
			new_value = org_value + separating + str_value;
		$obj.val(new_value);
	},
	/**
	 * @author elvis
	 * @description 生成平台提交服务的URL
	 * @param {String} _methodID 后台服务
	 * @param {String} _params 传递参数
	 */
	getURL: function(_methodID, _params){
		return Fix.App.getHost() + "servlet/StreamSupportAction.cmd?type=customerDownloadService&FixJSON={'_method':'" + _methodID + "','_param':{" + _params + "}}";
	},
	store:{
		set: function(str_key, str_value){
			if(window.localStorage !== undefined){
				window.localStorage[str_key] = str_value;
			}else{
				$.cookie(str_key, str_value);
			}
		},
		get: function(str_key){
			var obj_value = "";
			
			if(window.localStorage !== undefined){
				obj_value = window.localStorage[str_key];
			}else{
				obj_value = $.cookie(str_key);
			}
			if(obj_value === undefined)
				obj_value = "";
			return obj_value;
		}
	},
	FormFollowUp: function(msg, btn){
		alert(Fix.Engine.SubMitMessage);
		Fix.Runtime.closeThisPage(btn);
	}
};

//窗口打开方式
Fix.openMethod = {
	open: function(s,obj){
		switch(s){
			case "slide":
				Fix.openMethod.slide(obj);
				break;
			case "dialog":
				Fix.openMethod.dialog(obj);
				break;
		}
	},
	slide: function(obj){
		//var url = obj.url;
		var SlideObj = {
				obj:{},
				tabContainer:"",
				pageContainer:""
		};
		var $slide = window.slide;
		if(!$slide){
			$slide = $('<div class="slip-layer"></div>');
			
			var $leftBar = $('<div class="slip-left"></div>');
			
			var $closeBtn = $('<div class="slip-corner"><a href="javascript:void(0)" class="shrink" title="收起"></a></div>');
			$closeBtn.click(function(){
				//$($slide,"#container").hide( "slide", {direction:"right"}, 500, function(){
					$slide.remove();
					window.slide = null;
				//});
			});
			$leftBar.append($closeBtn);
			
			var $slideTab = $('<div class="slip-tabs" id="ulList"></div>');
			$leftBar.append($slideTab);
			$leftBar.append('<div class="slip-corner-shadow">&nbsp;</div>');
			
			var $rightBar = $('<div class="slip-content"><div class="slip-top-shadow">&nbsp;</div></div>');
			
			var $pageContainer = $('<div class="slip-center"></div>');
			$rightBar.append($pageContainer);
			$rightBar.append('<div class="slip-bottom-shadow">&nbsp;</div>');
			
			$slide.append($rightBar).append($leftBar);
			//var $slideIframe = $("<div style='margin-left:50px; background:#fff;height:100%'><iframe id='slideIframe' src='blank.html' width='100%' height='100%' border=0 frameborder=0 scrolling='no'></iframe></div>");
			//$slide.append($slideTab);
			//$slide.append($slideIframe);
			
			SlideObj.obj = $slide;
			SlideObj.tabContainer = $slideTab;
			SlideObj.pageContainer = $pageContainer;
			
			$("#container").append($slide);
			
			window.slide = $slide;
			
		}else{
			SlideObj.obj = $slide;
			SlideObj.tabContainer = $(".slip-tabs", $slide);
			SlideObj.pageContainer = $(".slip-center", $slide);
		}
		
		if(!$slide.is(":visible")){
			$slide.show( "slide", {direction:"right"}, 500, function(){
				//$("#slideIframe",$(this)).attr("src",url);
			});
		}
		
		return SlideObj;
	},
	dialog: function(objCfg){

		if (objCfg.url == '' || objCfg.url == undefined)
			return;
		
		if(objCfg.height === undefined || objCfg.height == "")
			obj.height = "280px";
		if(objCfg.width === undefined || objCfg.width == "")
			objCfg.width = "500px";
		if(objCfg.title === undefined || objCfg.title == "")
			objCfg.title = "标题";
		objCfg.containerType = "iframe";
		var JQDialog = new Fix.Component.JQDialog(objCfg);
		var $container = JQDialog.draw();
		$container.attr("src",objCfg.url);
		JQDialog.show();
		return JQDialog;
	},
	openExtWindow: function(int_width, int_height, str_title, str_url){
		top.FormWindow.window = window;

		var config = {
		            width: Number(int_width),
		            height: Number(int_height),
		            title: str_title,
		            pm_url: str_url,
		            parent_url:window.location.href,
		            maintab_url:""
		};
		var popDiv = top.FormWindow.createWindow(config);
		//popDiv.ResultEvent = "";

		//popDiv.show();
		return popDiv;
	}
};

/** @class */
Fix.Localization = {
	/** @lends Fix.Localization */
	/**
 	 * @description 本地化初始方法
	 */
	Init: function(){
		var Local = Fix.Runtime.store.get("Local");
		//if(window.localStorage.Local !== undefined && window.localStorage.Local != "undefined" && window.localStorage.Local != "defauld"){
		if(Local != "defauld"){
			var obj_html = document.getElementsByTagName("html");
			//表单
			if($("html").attr("FixConfig") !== undefined ){		//if(obj_html[0].getAttribute("FixConfig") !== undefined){
				var str_FixConfig;
				eval("str_FixConfig = "+ obj_html[0].getAttribute("FixConfig"));
				Fix.Localization.PageInit(str_FixConfig.bizObj, Fix.getFormId());
			}
			
			var url = window.location.href;
			var formId = url.substring(Fix.App.getHost().length);
			Fix.Localization.HTMLInit(formId);

		}
	},
	/**
	 * @description 本地化文字转换
	 * @param str_bizObj
	 * @param str_formID
	 */
	PageInit: function(str_bizObj, str_formID){
		if(top.Fix.Local==undefined){
			var Local = Fix.Runtime.store.get("Local");
			$.getScript("i18n/" + Local + ".js", function(){
				pageI18N(str_bizObj,str_formID);
			});
		}else{
			pageI18N(str_bizObj,str_formID);
		}
	},
	HTMLInit: function(str_formID){
		if(top.Fix.Global[str_formID] === undefined)
			return;
		
		var global_objs = top.Fix.Global[str_formID];
		//try{
		for(var key in global_objs){
			var str_key = global_objs[key];
			
			try{
				if(str_key.substr(0,2) == "{@")
					eval(key + " = Fix.Global[str_key]"); 
				else
					eval(key + " = str_key");
			}catch(e){}
			
		}//}catch(e){}
	}
};

function pageI18N(str_bizObj,str_formID){
	if(top.Fix.Local[str_bizObj] === undefined || top.Fix.Local[str_bizObj][str_formID] === undefined){
		return;
	}
	var local_objs = top.Fix.Local[str_bizObj][str_formID];
	for(var key in local_objs){
		try{
		eval(key + " = local_objs[key]");
		}catch(e){}
	}
}



//Fix.Global = Fix.Util.decode(window.localStorage.Global);
Fix.Global = Fix.Util.decode(Fix.Runtime.store.get("Global"));

