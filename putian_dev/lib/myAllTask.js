var agent = "";

$(document).ready(function(){
	//从url传递了相关参数，需要进行前事件处理
	/*var config = {
		BizObj:"AU_ROLEINFO"
	};
	var uniform = new Fix.UniformEngine(config);
	uniform.onDataBind(function(){
		//alert("onDataBind");
	});
	uniform.start();
	*/
	$("#switcher").buttonset();
	
	var str_filter = "{isSuspended:false;}";
	
	/*var urlParam = Fix.getURLParams(window.location.href);
	agent = urlParam["_agent"];
	if(agent === undefined || agent == ""){
		
	}else{
		str_filter = "{agent:'"+agent+"'}";
	}*/
//	setProcessDefinitionInfo("c_defKey");
	showTaskCount();
	//drawDetailView(str_filter);
	drawTable(str_filter);
	$("#c_category").change(function(){
		SearchTask();
	});
	getAgentUsersAndCount();
	
	$("#mylist2").html(Fix.Global["{@dlrw}"]);
	$("#mylist").html(Fix.Global["{@wdrw}"]);
	$("#pageTitle").html(Fix.Global["{@mytask}"]);
	$("#gridModel").attr("title",Fix.Global["{@gridModel}"]);
	$("#listModel").attr("title",Fix.Global["{@listModel}"]);
	$("#label_mytask").html(Fix.Global["{@mytask}"]);
	$("#label_sharetask").html(Fix.Global["{@sharetask}"]);
	$("#label_taskdone").html(Fix.Global["{@taskdone}"]);
	$("#label_myinvolved").html(Fix.Global["{@myinvolved}"]);
	$("#label_task_subject").html(Fix.Global["{@rwzt}"]);
	$("#label_defKey").html(Fix.Global["{@queryFlowName}"]);
	$("#label_current_step").html(Fix.Global["{@dqbz}"]);
	$("#label_arrived_time").html(Fix.Global["{@ddsj}"]);
	$("#label_to").html(Fix.Global["{@to}"]);
	$("#label_search").html($("#label_search").html().replace("查询",Fix.Global["{@search}"]));
	$("#label_clear").html($("#label_clear").html().replace("清空",Fix.Global["{@clear}"]));
	var lang = "zh-cn";
	if(window.localStorage.Local&&window.localStorage.Local=="en_US"){
		lang="en";
	}
	$("#startTime").focus(function(){
		WdatePicker({maxDate:"#F{$dp.$D('endTime')}",lang:lang});
	});
	$("#endTime").focus(function(){
		WdatePicker({minDate:"#F{$dp.$D('startTime')}",lang:lang});
	});
});

function SearchTask(pageIndex){
	pageIndex = pageIndex || 1;
	//agent = getAgent();
	var str_filter = "";
	var defKey = $("#c_defKey").val();
	defKey = $("#c_category").val();
	var desc = $("#c_description").val();
	var cuser = $("#c_user").val();
	var name = $("#c_name").val();
	//var initor = $("#Initiator").val();
	var start = $("#startTime").val();
	var end = $("#endTime").val();
	if(start != "")
		start += " 00:00:00";
	if(end != "")
		end += " 23:59:59";
	var isSuspended = false;
	
	if(defKey == "Adaptation"){
		
		var filterDefkeys= ["discount_lower","discount_upper","po_contract","po_contractn","so_contractn","po_contract2","po_payment","po_pay","po_purchase_return","so_sale_return_apply","dg_store","dg_store_s_import","dg_store_s","dg_allot_cross_project","dg_dis_countersign"].join("_FIXFLOWDEFKEY_");
		
		str_filter = "{defKey:'"+filterDefkeys+"',description:'" + desc + "',name:'" + name  + "',initiatorName:'" + cuser  + "',isSuspended:'" + isSuspended 
		+ "',start_time:'" + start + "',end_time:'" + end + "',agent:'"+agent+"'}";
	}else{
		str_filter = "{defKey:'"+defKey+"',description:'" + desc + "',name:'" + name  + "',initiatorName:'" + cuser  + "',isSuspended:'" + isSuspended 
		+ "',start_time:'" + start + "',end_time:'" + end + "',agent:'"+agent+"'}";
	}
	/*var flag = $("[name=radio]:radio:checked", $("#switcher")).val();
	if(flag=="0"){
		drawDetailView(str_filter);
	}else if(flag=="1"){
		drawTable(str_filter);
	}*/
	drawTable(str_filter, pageIndex);
}

function drawDetailView(str_filter){
	    	
	var JQFormView_Config = {
		htmlID:"detailList",
		tplUrl:"../template/flow_UniformMyAllTask.tpl",
    	Data:{
		  "PageSize": 6,
		  "countMethod": "searchAllTasksCount",
		  "Filter": str_filter,
		  "Fields": "*",
		  "BizObj": "TASK",
		  "Service": "searchAllTasks",
		  "NeedPaging": true,
		  "CurrentPageIndex":1
		}
	};
	
	var detailView = new Fix.Component.JQFormView(JQFormView_Config);
	detailView.draw();
}

function OpenMyTaskLink(form, bizObjId, defKey, defId, instId, taskId, nodeId, fKey, fValue, title,agent){
    var url = form;
    if(fValue === undefined || fValue == "")
    {
		params = {
			_objName : bizObjId,
			_useType : 'add',
			_defKey : defKey,
			_defId : defId,
			_instId : instId,
			_taskId : taskId,
			_nodeId : nodeId,
			_agent : agent
		};
	}else{
		params = {
			_objName : bizObjId,
			_useType : 'modify',
			_defKey : defKey,
			_defId : defId,
			_instId : instId,
			_taskId : taskId,
			_nodeId : nodeId,
			_pk : fKey,
			_pkValue : fValue,
			_agent : agent
		};
	}
	if(url !== undefined && url != ''){
		url = top.Fix.Utils.appendParams(url, params);
	}
	//window.open(Fix.App.appHost + url);

	var tabObj = {
			id:taskId,
			url: Fix.App.appHost + url,
			name: "form " + title,
	};
	top.Fix.Manager.createTabInMainTab(tabObj, function(){window.location.reload();}, parent.parent);
}

function drawTable(str_filter, pageIndex){
	
	var pageIndex = pageIndex || 1;
	
	if(str_filter == "" && agent != ""){
		str_filter = "{agent:'"+agent+"'}";
	}

	/*待办任务和共享任务放一起*/
	var JQDataTables_Config = {
    		htmlID:"detailList",
    		id:"dataTable",
    		Header:[
                	{mDataProp:null, sTitle:Fix.Global["{@rwzt}"],
                		fnRender:function(oObj,sVal){
                			//return  "<a href='javascript:void(0)' onclick=OpenAllTaskLink('"+sVal+"','"+data.BIZOBJID+"','"+data.DEFKEY+"','"+data.DEFID+"','"+data.INSTID+"','"+data.TASKID+"','"+data.NODEID+"','"+data.FKEY+"','"+data.FVALUE+"','"+agent+"')>"+Fix.Global["{@viewBtn}"]+"</a>";
                			return  "<a func='openFlow' href='javascript:void(0)' ></a>";
                		}
                	},
                	{mDataProp:"NAME", sTitle:Fix.Global["{@dqbz}"]},
                	{mDataProp:"PI_INITIATOR", sTitle:Fix.Global["{@fqr}"], sWidth:"80px"},
                	{mDataProp:"PI_START_TIME", sTitle:Fix.Global["{@tjsj}"], sWidth:"140px"},
                	{mDataProp:"CREATETIME", sTitle:Fix.Global["{@ddsj}"], sWidth:"140px"}
                	//{mDataProp:"expectedExecutionTime", sTitle:Fix.Global["{@yjzxsj}"], sWidth:"140px"},
                	//{columnName:"xs", columnCaption: "限时"},
                    //{columnName:"cs", columnCaption: "超时"},
                	/*
                    {mDataProp:null,sTitle:Fix.Global["{@cz}"], sWidth:"50px",
                		fnRender:function(oObj,sVal){
                			//return  "<a href='javascript:void(0)' onclick=OpenAllTaskLink('"+sVal+"','"+data.BIZOBJID+"','"+data.DEFKEY+"','"+data.DEFID+"','"+data.INSTID+"','"+data.TASKID+"','"+data.NODEID+"','"+data.FKEY+"','"+data.FVALUE+"','"+agent+"')>"+Fix.Global["{@viewBtn}"]+"</a>";
                			return  "<a func='openFlow' href='javascript:void(0)' >"+Fix.Global["{@viewBtn}"]+"</a>";
                		}
                    }
                    */
                 ],
            colDef:[],
            hasPage:true,
            colFormat:[{
            	name:"",
            	style:"",
            	styleType:""
            }],
    		DataStore:{
			  "PageSize": 15,
			  "countMethod": "searchAllTasksCount",
			  "Filter": str_filter,
			  "Fields": "*",
			  "BizObj": "TASK",
			  "Service": "searchAllTasks",
			  "NeedPaging": true,
			  "CurrentPageIndex": pageIndex
			},
			JQDataTables:{
				"fnCreatedRow": function(nRow, aData, iDataIndex){
					$('a[func=openFlow]', nRow).html(aData.DESCRIPTION);
					$('a[func=openFlow]', nRow)[0].aData = aData;
					$('a[func=openFlow]', nRow).click(function(){
						var data = $(this)[0].aData;
						OpenAllTaskLink(data.FORM,data.BIZOBJID,data.DEFKEY,data.DEFID,data.INSTID,data.TASKID,data.NODEID,data.FKEY,data.FVALUE,data.DESCRIPTION,agent);
					});
				}
			}
		};
	
	var jqDataTables = new Fix.Component.JQDataTables(JQDataTables_Config);
	jqDataTables.onDraw(function(){
		$("#dataTable").css("width","99%");
	});
	jqDataTables.init();
	jqDataTables.draw();
	
}


function getAgentUsersAndCount(){
	Fix.ajax({
        action: {
            _method: "flow.getAgentUsersAndCount"
        },
        async:false,
        success: function(response){
        	agentInfo = response.agentInfo;
        	var li_str = "";
        	
        	if(agentInfo && agentInfo.length > 0){
        		$("#sidebar").show();
        		$("#content").css("margin-left", "120px"); 
        	}

        	for(var i=0; i < agentInfo.length;i++){
        		//var str = "<li><a href=\"javascript:searchAgentTask('"+agentInfo[i].userid+"','"+agentInfo[i].username+"')\">"+agentInfo[i].username+"</li>";
        		//li_str = li_str + str;
        		var $li = $("<li><a href=\"javascript:searchAgentTask('"+agentInfo[i].userid+"','"+agentInfo[i].username+"')\">"+agentInfo[i].username+"</a></li>");
        		$("#agentUserList").append($li);
        	}
        	
        	//$("#agentUserList").html(li_str);
        }
    });
}

function searchAgentTask(agentUserId,userName){
	$("#pageTitle").html(userName+Fix.Global["{@atasks}"]);
	agent = agentUserId;
	$("#searchPanel input").val("");
	SearchTask();
	//var href = window.location.pathname+"?_agent="+agentUserId;
	//window.location.href = href;
}

function mytask(){
	drawDetailView('{isSuspended:false;}');
	$('#pageTitle').html(Fix.Global["{@mytask}"]);
}
/*function getAgent(){
	return agent;
}*/



function showTaskCount(){
	//return;
	Fix.ajax({
		action : {
			_method : "TASK.searchTaskCountByCategory",
			_param:{}
		},
		async:false,
		success : function(response) {
			var taskCountByC = response.taskCountByC;
//			$("#c_category").empty();
			
			for(var i = 0; i < taskCountByC.length; i++){
				var value = taskCountByC[i].PROCESSDEFINITION_KEY;
	    		var count = taskCountByC[i].COUNT;
				var text =  taskCountByC[i].CATEGORY +"("+count+")";
	    		
	    		if(value == ""){
	    			$("#label_mytask").html("待办任务("+count+")");
	    		}
	    		
	    		setOptionText($("#c_category"), value, text);
			}
			setOptionText($("#c_category"), "Adaptation", "适配流程");
		}
	});
}
	

function setOptionText($select, value, text){
	var find = false;
	$select.find("option").each(function(i, opt){
		if(opt.value == value){
			opt.text = text;
			find = true;
			return;
		}
	});
	if(find)return;
	
	var categoryItem = new Option(text,value);
	$select[0].options.add(categoryItem);
}
