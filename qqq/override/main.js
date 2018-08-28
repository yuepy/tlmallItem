
/**
 * 获取权限树URL
 */
function getPrivilegeTreeUrl(pId,appurl){
	
	var serviceName = 'com.itown.ecqs.sysmgr.service.EcqsWebAppinfoService';
	var methodName = 'listAppInfo';

	var url = getBaseUrl() + '/r/' + serviceName + "?m=" + methodName + "&c=true";

	var _params = [];
	var user = mp.getSessionUserInfo();
	_params.push(pId);
	_params.push(appurl);

	var pStr = JSON.stringify(_params);
	url += "&p=" + encodeURIComponent(pStr);
	
	return url;
}

/**
 * 加载权限树，第一级为抽屉风格，第二级为tree风格
 * @param offline
 * @return
 */
function loadPrivilegeTree(){
	// 处理结果
    var process = function(result) {
	 	if(result.message){
	 		alert(result.message);
	 	}else{
	 		var data = result.value;
	 		var selected = true;//缺省选择第一个
	 		data.forEach(function(item){ 
	 			$('#mainMenu').accordion('add',{
					title:item.text,
					selected:selected,
					content:'<ul id="nodeItem' + item.id + '" class="easyui-tree"></ul>'
				});

	 			//加载树内容
	 			$('#nodeItem' + item.id).tree({
	 		        url : getPrivilegeTreeUrl(item.id,item.attributes.url),
	 		        lines : true,
	 		        onBeforeExpand:function(node,param){
	 		        	$('#nodeItem' + item.id).tree('options').url = getPrivilegeTreeUrl(node.id,mp.isOffline());
	 		        },
	 		        loadFilter: function(data){
	 		        	return data.value;
	 		        },
	 		        onClick: function(node){
	 		        	//调用功能
	 		        	var linkUrl = node.attributes.url;
                this.setAttribute('url',node.attributes.url);
	 		        	if(linkUrl){
	 		        		//判断权限
	 		        		// if(!mp.hasClientInvokeRight(linkUrl)){//是否允许调用
	 		        		// 	//前端权限判断完后，判断后端权限
		 		        	// 	var user = mp.getSessionUserInfo();
		 		        	// 	if(!mp.checkFunctionRight(user.userCode,user.companyCode,linkUrl)){
		 		        	// 		$.messager.alert('提示:','对不起，您没有[' + linkUrl + ']的访问权限，请重新登录或联系管理人员！');
		 		        	// 		return;
		 		        	// 	}
	 		        		// }
	 		        		//
	 		        		var src =  node.attributes.url;
	 		        		if (node.attributes.target && node.attributes.target.length > 0) {
	 							window.open(src, node.attributes.target);
	 						} else {
	 							var tabs = $('#mainTabs');
	 							var opts = {
	 								id:node.id,
	 								title : node.text,
	 								closable : true,
	 								iconCls : node.iconCls,
	 								content : mp.formatString('<iframe src="{0}" allowTransparency="true" style="border:0;width:100%;height:99%;" frameBorder="0"></iframe>', src),
	 								border : false,
	 								fit : true
	 							};
	 							if (tabs.tabs('exists', opts.title)) {
	 								var flag = true;
	 								var existtab = tabs.tabs('tabs');
	 								$.each(existtab, function(i, entity){
	 									  if(entity[0].id==node.id){
	 										 flag = false;
	 									  }
	 								});
	 								if(flag){
	 									tabs.tabs('add', opts);
	 								}else{
	 									tabs.tabs('select', opts.title);
	 								}
	 							} else {
	 								tabs.tabs('add', opts);
	 							}
	 							bindTabEvent();
	 					    	bindTabMenuEvent();
	 						}

	 		        	}
	 		        }
	 		    });

	 			selected = false;
	 		});
		}
	}
    var user = mp.getSessionUserInfo();
	mp.execute(process, 'com.itown.ecqs.sysmgr.service.EcqsWebAppinfoService', 'listAppInfo','99',"");



}
//绑定tab的双击事件、右键事件
function bindTabEvent(){
    $(".tabs-inner").on('dblclick',function(){
        var subtitle = $(this).children("span").text();
        if($(this).next().is('.tabs-close')){
            $('#tabs').tabs('close',subtitle);
        }
    });
    $(".tabs-inner").on('contextmenu',function(e){
        $('#mm').menu('show', {
            left: e.pageX,
            top: e.pageY
     });
     var subtitle =$(this).children("span").text();
     $('#mm').data("currtab",subtitle);
     return false;
    });
 }
//绑定tab右键菜单事件
function bindTabMenuEvent() {
    //关闭当前
    $('#mm-tabclose').click(function() {
        var currtab_title = $('#mm').data("currtab");
        $('#mainTabs').tabs('close', currtab_title);
    });
    //全部关闭
    $('#mm-tabcloseall').click(function() {
        $('.tabs-inner span').each(function(i, n) {
            if ($(this).parent().next().is('.tabs-close')) {
                var t = $(n).text();
                $('#mainTabs').tabs('close', t);
            }
        });
    });
    //关闭除当前之外的TAB
    $('#mm-tabcloseother').click(function() {
        var currtab_title = $('#mm').data("currtab");
        $('.tabs-inner span').each(function(i, n) {
            if ($(this).parent().next().is('.tabs-close')) {
                var t = $(n).text();
                if (t != currtab_title)
                    $('#mainTabs').tabs('close', t);
            }
        });
    });
    //关闭当前右侧的TAB
    $('#mm-tabcloseright').click(function() {
        var nextall = $('.tabs-selected').nextAll();
        if (nextall.length == 0) {
//            alert('已经是最后一个了');
            return false;
        }
        nextall.each(function(i, n) {
            if ($('a.tabs-close', $(n)).length > 0) {
                var t = $('a:eq(0) span', $(n)).text();
                $('#mainTabs').tabs('close', t);
            }
        });
        return false;
    });
    //关闭当前左侧的TAB
    $('#mm-tabcloseleft').click(function() {
        var prevall = $('.tabs-selected').prevAll();
        if (prevall.length == 1) {
//            alert('已经是第一个了');
            return false;
        }
        prevall.each(function(i, n) {
            if ($('a.tabs-close', $(n)).length > 0) {
                var t = $('a:eq(0) span', $(n)).text();
                $('#mainTabs').tabs('close', t);
            }
        });
        return false;
    });
}
