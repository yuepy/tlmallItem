$(function(){
	
	bps = window['bps'] || {
		version: "1.0.0.0"
	};
	
	bps.ns("bps.components");
	
	
	/**
	 * 追回
	 */
	bps.components.reg({
		id:"recover",
		click: function(e){
			var instance = e.instance;
			instance.superclass.click(e);
		},
		beforeSubmitData: function(data){
			debugger;
			loading();
			bps.apply(data,{
				"workItemID": bps.components.core.getPageContext().workItemID//提交工作项ID
			});
			bps.apply(data, {
				//追回后台逻辑设置
				customSaveComponentsBiz:"com.pttl.components.bpff.process.extend.Recover.recover.biz.ext",
				isSaveFormData:false,
				isSaveRelativeData:false,
				isFinishWorkItem:false
			});
			bps.apply(data.extData, {
				//追回流程需要的流程实例ID
				workItemID:bps.components.core.getPageContext().workItemID
			});
		},
		afterSubmitData: function(data){
			var result = data.returnData.bizResult[0];
			if(result==1){
				bpff.components.core.showMessage(this.recover.success);
				CloseWindow("ok");
			}else{
				bpff.components.core.showMessage(this.recover.fail);
			
			}
		}
	});
	
    window['bps'] = bps;
    
    function loading() {
        mini.mask({
            el: document.body,
            cls: 'mini-mask-loading',
            html: '追回中...'
        });
        setTimeout(function () {
            mini.unmask(document.body);
        }, 20000);
    }
    
	function CloseWindow(action){
		if(action=="close"){
		
		}else if(window.CloseOwnerWindow)
			return window.CloseOwnerWindow(action);
		 else
			return window.close();
	}
});