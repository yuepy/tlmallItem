$(function(){
	
	bps = window['bps'] || {
		version: "1.0.0.0"
	};
	
	bps.ns("bps.components");
	
	bps.ns("bps.components.submit.config");
	
	bps.apply(bps.components.submit.config, {
		selectParticipant: "selectParticipant",
		selectActivityParticipant: "selectActivityParticipantAndAppoint",
		selectActivity: "selectActivity",
		selectActivityAndParticipant: "selectParticipantAndActivity",
		selectUpperParticipant: "selectUpperParticipant",
		selectParentUpperParticipant: "selectParentUpperParticipant",
		selectActivityAndNextActivityParticipant: "selectActivityAndNextActivityParticipant"		
	});
	
	/**
	 * 提交组件
	 */
	bps.components.reg({
		id:"submit",
		afterCreate: function(e){
			//调用此方法的时候，当前业务组件已经实例化了，可通过e.instance访问当前业务组件实例
			//父类默认实现是绑定事件，将当前组件和按钮click事件绑定起来
			var instance = e.instance;	 //通过e.instance 访问当前组件的实例
			instance.superclass.afterCreate(e);
			
			var selfObj = {
				title: e.instance.participant
			};
			
			var otherParam = {};//选择资源内部已经封装了默认配置
			
			//注册回调函数
			//选择参与者
			this.addCallback(bps.components.submit.config.selectParticipant, function(e, cb){
				instance.selectParticipants = instance.selectParticipants || {};
				instance.selectResource(selfObj, otherParam, e.instance.selectParticipants, cb);
			});
			
			//选择后继活动参与者并指派
			this.addCallback(bps.components.submit.config.selectActivityParticipant, function(e, cb){
				//将processDefID(long类型)和activityDefID放入到commitParamObj对象里面
				otherParam.commitParamObj = otherParam.commitParamObj || {};
				var workItem = bps.components.core.getPageContext().workItem;
				//将后继活动的相关参数传入，选择参与者默认支持选择参与者
				otherParam.commitParamObj.processDefID = workItem.processDefID;
				var activityDef = {
						id: instance.selectActivities
				};
				if(!activityDef.id){//不存在则加载；存在则直接使用
					activityDef = bps.components.core.getAjaxData(
							"org.gocom.bps.web.bizform.components.commonComponent.getNextActivitiesMaybeArrived.biz.ext",
							{activityInstID: workItem.activityInstID},
					"activity");
				}
				otherParam.commitParamObj.activityDefID = activityDef.id;
				
				//查询下一个活动的需要
				otherParam.commitParamObj.processInstID = workItem.processInstID;
				
				//当前活动需要支持参与者列表，需要支持参与者规则
				otherParam.loadUrl = "org.gocom.bps.web.bizform.components.submit.submitComponents.queryNextActivityParticipants.biz.ext";
				
				instance.selectParticipants = instance.selectParticipants || {};
				instance.selectResource(selfObj, otherParam, e.instance.selectParticipants, cb);
			});
			
			//选择上级参与者并指派
			this.addCallback(bps.components.submit.config.selectUpperParticipant, function(e, cb){
				//将processDefID(long类型)和activityDefID放入到commitParamObj对象里面
				otherParam.commitParamObj = otherParam.commitParamObj || {};
				var upperParticipant = bps.components.core.getPageContext().participantID;
				//将后继活动的相关参数传入，选择参与者默认支持选择参与者
				otherParam.commitParamObj.agentFrom = upperParticipant;
				instance.selectParticipants = instance.selectParticipants || {};
				instance.selectResource(selfObj, otherParam, e.instance.selectParticipants, cb);
			});
			
			//选择直线主管上级参与者并指派
			this.addCallback(bps.components.submit.config.selectParentUpperParticipant, function(e, cb){
				//将processDefID(long类型)和activityDefID放入到commitParamObj对象里面
				otherParam.commitParamObj = otherParam.commitParamObj || {};
				var upperParticipant = bps.components.core.getPageContext().participantID;
				//将后继活动的相关参数传入，选择参与者默认支持选择参与者
				otherParam.commitParamObj.currentParticipant = upperParticipant;
				
				//指定新的逻辑流，专门用于选择直线主管的上级参与者
				otherParam.loadUrl = "org.gocom.bps.web.bizform.components.submit.submitComponents.queryUpperDirectManager.biz.ext";
				
				instance.selectParticipants = instance.selectParticipants || {};
				instance.selectResource(selfObj, otherParam, e.instance.selectParticipants, cb);
			});
			
			//注册选择活动回调函数
			this.addCallback(bps.components.submit.config.selectActivity, function(e, cb){
				var workItemID=bps.components.core.getPageContext().workItemID;
				nui.open({
					url : bps.components.core.getContextPath() + "/bizform/components/submit/jsp/appointActivity4Freeflow.jsp",
					title : instance.appointActivity4Freeflow,
					width : 800,
					height : 460,
					onload : function() {
						var iframe = this.getIFrameEl();
						instance.selectActivities = instance.selectActivities || {};
						iframe.contentWindow.setData({
							workItemID: workItemID,
							selectActivities: instance.selectActivities
						});
					},
					ondestroy: function (action){
						var iframe = this.getIFrameEl();
						var data = iframe.contentWindow.getData();
						data = nui.clone(data);
						instance.selectActivities = instance.selectActivities || {};
						if(data){
							instance.selectActivities = data.id;//选择的数据需要保存
						}
						if (action == "ok") {
							if(cb){
								cb();//回调
							}
						}
					}
				});
			});
		},
		click: function(e){
			e.isValidateForm = true;
			var instance = e.instance;
			if(instance.submitCommonJudgement(instance,function(){})){
				instance.superclass.click(e);
				return;
			}else{
				if(instance.submitWay == "normal"){//普通提交
					//父类的click方法实现了保存业务数据以及完成工作项，普通提交直接调用即可
					instance.superclass.click(e);
				}else if(instance.submitWay == bps.components.submit.config.selectParticipant){//选择参与者
					//先选择参与者，选择参与者之后，回调父类的click方法
					instance.getCallback(bps.components.submit.config.selectParticipant)(e, function(){
						instance.superclass.click(e);
					});
				}else if(instance.submitWay == bps.components.submit.config.selectActivity){//选择活动
					//先选择活动，选择活动之后，回调父类的click方法
					instance.getCallback(bps.components.submit.config.selectActivity)(e, function(){
						instance.superclass.click(e);
					});
				}else if(instance.submitWay == bps.components.submit.config.selectActivityAndParticipant){//选择活动和参与者
					//先选择活动，然后选择参与者，最后调父类的click方法；以实现选活动和参与者
					instance.getCallback(bps.components.submit.config.selectActivity)(e, function(){
						instance.getCallback(bps.components.submit.config.selectParticipant)(e, function(){
							instance.superclass.click(e);
						});
					});
				}else if(instance.submitWay == bps.components.submit.config.selectActivityParticipant){//选择后继活动参与者并指派
					//选择活动参与者
					instance.getCallback(bps.components.submit.config.selectActivityParticipant)(e, function(){
						instance.superclass.click(e);
					});
				}else if(instance.submitWay == bps.components.submit.config.selectUpperParticipant){//选择上级参与者并指派
					//选择活动参与者
					instance.getCallback(bps.components.submit.config.selectUpperParticipant)(e, function(){
						instance.superclass.click(e);
					});
				}else if(instance.submitWay == bps.components.submit.config.selectParentUpperParticipant){//选择上级参与者并指派
					//选择活动参与者
					instance.getCallback(bps.components.submit.config.selectParentUpperParticipant)(e, function(){
						instance.superclass.click(e);
					});
				}else if(instance.submitWay == bps.components.submit.config.selectActivityAndNextActivityParticipant){//选择活动并从后继活动中选择参与者
					//选择活动参与者
					instance.getCallback(bps.components.submit.config.selectActivity)(e, function(){
						instance.getCallback(bps.components.submit.config.selectActivityParticipant)(e, function(){
							instance.superclass.click(e);
						});
					});
				}
			}		
		},
			
		beforeSubmitData: function(data){
			loading();
			bps.apply(data,{
				"workItemID": bps.components.core.getPageContext().workItemID//提交工作项ID
			});
			bps.apply(data, {
				//业务开发人员自定义的保存表单控件业务逻辑流；目前提交组件就是保存选择的参与者，选择的后继活动
				customSaveComponentsBiz:"org.gocom.bps.web.bizform.components.submit.submitComponents.appointNextActivityOrParticipants.biz.ext"
			});
			if(this.selectParticipants){
				bps.apply(data.extData, {//参与者信息放到data.extData，extData只支持简单的数据结构
					"selectParticipants": this.selectParticipants.ids
				});
			}
			if(this.selectActivities){
				bps.apply(data.extData, {//活动信息放到data.extData，extData只支持简单的数据结构
					"selectActivities": this.selectActivities
				});
			}
			
			//是否提交后通知
			if(bps.components.core.getPageContext().notification){
				var notification = bps.components.core.getPageContext().notification;
				this.data.bizComponents.push(notification);
			}
			
			data.isSaveBizComponentsData = true; // 修改bug45946， 只有点击提交按钮才去保存业务组件的信息
		},
		afterSubmitData: function(data){
			//注销通知对象
			bps.components.core.getPageContext().notification = null;
			if(data.returnData.exception){
				var Cts =data.returnData.exception.message;
				if(Cts.indexOf("21040507") > 0 )
				{
					if(Cts.indexOf("200002") > 0 ){
						var message=Cts.split("(")[1].replace(")","");
						bpff.components.core.showMessage("下一个环节找不到参与者,原因:"+message);
					}else{
						bpff.components.core.showMessage("下一个环节找不到参与者,请联系管理员");
					}
				}else if(Cts.indexOf("12101001") > 0){
					bpff.components.core.showMessage("session失效或者用户未登陆");
				}else{
					bpff.components.core.showMessage(this.submitFailure);
				}
			}else{
				bpff.components.core.showMessage(this.submitSuccess);
			}
		},
		
		submitCommonJudgement: function(instance,cb){
			var flag = false;
			var processInstID = bps.components.core.getPageContext().processInstID;
			var workItemID = bps.components.core.getPageContext().workItemID;
			input = {processInstID:processInstID,
	        		workItemID:workItemID};
			nui.ajax({
		        url: "org.gocom.bps.web.bizform.components.submit.submitComponents.queryStateData.biz.ext",
		        type: "POST",
		        data: {input:input},
		        cache: false,
		        async: false,
		        success: function (ret) {
		        	if(ret.exception){
		        		bpff.components.core.showMessage("load data error1, please contact administrator");
		        		return flag;
		        	}
		        	var data = nui.decode(ret)["data"];
		        	if(data.backStateData) {
		        		bps.apply(instance.data.extData, {
	        				clearBackActivityFlag: true
	        			});
		        	}
		        	if(data.backStateData||(!data.backStateData&&!data.isLastWorkItem)){
		        		flag = true;
	        		}
		        },
		        fail: function(err){
		        	bpff.components.core.showMessage("load data error2, please contact administrator");
		        }
	        });
			return flag;
		},
		
		selectResource: function(selfObj,otherParam, selectData, cb){//不修改现在提交组件
			bps.components.core.selectResource(selfObj,otherParam, selectData, cb);
		}
	});
	
    window['bps'] = bps;
    function loading() {
        mini.mask({
            el: document.body,
            cls: 'mini-mask-loading',
            html: '加载中...'
        });
      	ysp.appMain.showLoading();
        setTimeout(function () {
            mini.unmask(document.body);
          ysp.appMain.hideLoading();
        }, 200000);
    }
});