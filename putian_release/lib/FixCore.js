$(window).resize(function(){	
	Fix.Form.resizeLayout(window.localStorage.FixTheme);	
});

$(document).ready(function(){

/**
* @fileOverview 页面引擎模板
* @author elvis
* @version 1.0
*/

//Ext.onReady(function() {
	//Fix.Helper.fn_LoadOpen();
	//Fix.Helper.jQy_loading.append(Fix.Helper.jQy_progressBar);
	//Fix.Helper.jQy_progressBar.progressbar({value: 0});
	Fix.Form.resizeLayout(window.localStorage.FixTheme);
	var obj_html = document.getElementsByTagName("html");
	var str_FixJsRef = obj_html[0].getAttribute("FixJsRef");
	
	//elvis 2013-5-17 兼容性判断
	var arr_FixJsRef;
	if(str_FixJsRef === undefined || str_FixJsRef == null)
		str_FixJsRef = "";
	else
		arr_FixJsRef = str_FixJsRef.split(",");
	//end
	
	var str_FixCSSRef = obj_html[0].getAttribute("FixCssRef");
	if(str_FixCSSRef !== undefined && str_FixCSSRef != null && str_FixCSSRef.length > 0){
		var arr_FixCSSRef = str_FixCSSRef.split(",");
		//动态CSS装载
		for(var i = 0; i < arr_FixCSSRef.length; i++){
			var existsCSS = false;
			$("link[rel=stylesheet]").each(function(){
				if(this.href == Fix.Engine.BaseURL + arr_FixCSSRef[i])
					existsCSS = true;
			});
			if(!existsCSS)
				$("head").append('<link rel="stylesheet" type="text/css" href="' + Fix.Engine.BaseURL + arr_FixCSSRef[i] + '" />');
		}
	}
	

	//动态脚本装载
	$("head").append('<script src="' + Fix.Engine.BaseURL + '/components/Verify/verify.js" ></script>');  //老版本兼容新版本验证
	if (str_FixJsRef != "" && arr_FixJsRef.length > 0) {
		var loader = new Fix.Loader(arr_FixJsRef, Fix.Engine.BaseURL, function(){
			Fix.Engine.init();
			Fix.Engine.onInit().fire(Fix.Helper.jQy_loading);	//页面显示load可以更改
			return;
		});
		loader.load();
	}
	else
	{
		Fix.Engine.init();
		Fix.Engine.onInit().fire(Fix.Helper.jQy_loading);	//页面显示load可以更改
	}
});

/** @class */
Fix.Engine = (function() {
	/** @lends Fix.Engine */
	var _className = "Fix.Engine";
	var _obj_COMSelf;
	var _pageName = window.location.pathname;
	_pageName = _pageName.substring(_pageName.lastIndexOf("/") + 1, _pageName.lastIndexOf("."));
	//私有变量
	var __GetDataMethod = "formService.getFormData";
	var __SetDataMethod = "formService.saveFormData";

	var _obj_store = {};
	
	var _initEvent = new Fix.Event();
	var _startEvent = new Fix.Event();
	var _startedEvent = new Fix.Event();
	var _buildInitJSONEvent = new Fix.Event();
	//var _settedDefaultValueEvent = new Fix.Event();
	//var _gettedPageDataEvent = new Fix.Event();
	var _dataBindEvent = new Fix.Event();
	var _onBeforeDataBindEvent = new Fix.Event();
	var _bindCompleteEvent = new Fix.Event();
	var _setToolbarEvent = new Fix.Event();
	var _beforeCollect = new Fix.Event();
	var _verifyEvent = new Fix.Event();
	var _beforeSubmit = new Fix.Event();
	var _submitEvent = new Fix.Event();
	var _submittedEvent = new Fix.Event();
	var _flowSimulate = new Fix.Event();
	var _successInfo = "保存成功";
	if(Fix.Global){
		_successInfo = Fix.Global["{@saveSuccess}"];
	}
	

	//返回对象，暴露属性和方法
	return {
		/** 
	     * @description {Sting} 页面的名字 
	     * @field 
	     */ 
		PageName: _pageName,
		
		/** 
	     * @description {Sting} 站点相对根路径 
	     * @field 
	     */ 
		BaseURL: Fix.App.getHostFull(),
		
		/** 
	     * @description {Map} 页面包含的组件 
	     * @field 
	     */
		Controls: {},
		Configs: {},
		/** 
	     * @description {Array} 修改、查询是，从后台一次性获取的数据 
	     * @field 
	     */
		Data: [],
		/** 
	     * @description {Object} 页面别名清单 
	     * @field 
	     */
		Alias: {},
		/** 
	     * @description {Array} 页面验证规则清单 
	     * @field 
	     */
		Verify: [],
		/** 
	     * @description {String} 业务对象  
	     * @field 
	     */
		BizObj: "",
		/** 
	     * @description {String} 当前页面中，具有层次结构的的组件清单
	     * @field 
	     */
		Map: {
			//新表单构建Map函数，配合新表单使用。旧表单会覆盖以下内容。
			"children":[],"items":[],"id":"fixbody","isdetail":false,
			add:function(str_htmlID, str_tableID, bizObj){
				if(str_tableID == "fixbody")
					Fix.Engine.Map.items.push(str_htmlID);
				else{
					var existsDetail = false;
					for(var i = 0; i < Fix.Engine.Map.children.length; i++){
						var obj_detail = Fix.Engine.Map.children[i];
						if(obj_detail.id == str_tableID){
							existsDetail = true;
							obj_detail.items.push(str_htmlID);
						}
					}
					if(!existsDetail)
						Fix.Engine.Map.children.push({"bizObj":bizObj,"children":[],"items":[str_htmlID],"id":str_tableID,"isdetail":true});
				}
			}
		},
		/** 
	     * @description {Array} 需要绑定事件的组件清单，仅Fix平台组件
	     * @field 
	     */
		RegisterControlEvents: new Array(),
		/** 
	     * @description {Array} 非明细表中的组件
	     * @field 
	     */
		PageElements: [],
		/** 
	     * @description {MAP} 明细表对象
	     * @field 
	     */
        DetailGrid: {},
        /** 
	     * @description {MAP} 明细表中的组件，包括全部的数据绑定组件
	     * @field 
	     */
		ControlsByDetail: {},
		/** 
	     * @description {String} 当前表单操作状态，有如下状态：add/modify/view/search/custom
	     * @field 
	     */
		UseType: "",
		Status:"",
		/** 
	     * @description {bool} 页面是否通过全部校验
	     * @field 
	     */
		PassedVerify: true,
		/** 
	     * @description {JSON} 页面需要加载数据，与后台交互数据的JSON对象
	     * @field 
	     */
		InitJSON: {},
		/** 
	     * @description {JSON} 页面需要提交，与后台交互数据的JSON对象
	     * @field 
	     */
		CollectedJSON: {},
		/** 
	     * @description {MAP} URL问号后的参数
	     * @field 
	     */
		Params: {},
		/** 
	     * @description {Object} DataEntity类型数据的临时容器
	     * @field 
	     */
		ObjStore: _obj_store,
		/** 
	     * @description {String} 提交完成后的提示信息
	     * @field 
	     */
		SubMitMessage : _successInfo,
		/** 
	     * @description {String} 页面实例唯一编号，主要用于附件上传
	     * @field 
	     */
		PageToken:Fix.App.PageToken,
		/**@private*/
		IsReset:false,
		/** 
	     * @description {String} (readonly)页面加载数据使用的后台服务
	     * @field 
	     */
		ConstGetDataMethod:function(){return __GetDataMethod;},
		/** 
	     * @description {String} 页面提交数据使用的后台服务
	     * @field 
	     */
		ConstSetDataMethod:__SetDataMethod,
		
		//事件
		//startEvent:new _FixEvent(),
		/**
	 	 * @description 页面引擎初始化时
	 	 * @param {function} fn 回调函数
		 */
		onInit:function(fn){return Fix.Helper.fn_registerEvent(fn, _initEvent);},
		/**@private*/
		onStart:function(fn){return Fix.Helper.fn_registerEvent(fn, _startEvent);},
		/**
	 	 * @description 页面引擎开始时，已经获取到URL参数后
	 	 * @param {function} fn 回调函数
		 */
		onStarted:function(fn){return Fix.Helper.fn_registerEvent(fn, _startedEvent);},
		/**
	 	 * @description 页面引擎加载数据前，与后台交互组织JSON的事件
	 	 * @param {function} fn 回调函数
		 */
		onBuildInitJSON:function(fn){return Fix.Helper.fn_registerEvent(fn, _buildInitJSONEvent);},
		//onSettedDefaultValue:function(fn){return Fix.Helper.fn_registerEvent(fn, _settedDefaultValueEvent);}, 
		//onGettedPageData:function(fn){return Fix.Helper.fn_registerEvent(fn, _gettedPageDataEvent)}, 
		/**
	 	 * @description 页面引擎获取到数据，绑定数据到页面组件的事件
	 	 * @param {function} fn 回调函数
		 */
		onDataBind:function(fn){return Fix.Helper.fn_registerEvent(fn, _dataBindEvent);},
		/**
	 	 * @description 页面引擎获取到数据，绑定数据到页面组件之前的事件
	 	 * @param {function} fn 回调函数
		 */
		onBeforeDataBind:function(fn){return Fix.Helper.fn_registerEvent(fn, _onBeforeDataBindEvent);},
		/**
	 	 * @description 页面引擎绑定完毕所有组件后
	 	 * @param {function} fn 回调函数
		 */
		onBindComplete:function(fn){return Fix.Helper.fn_registerEvent(fn, _bindCompleteEvent);}, 
		/**
	 	 * @description 页面引擎加载数据后，设置工具栏内容
	 	 * @param {function} fn 回调函数
		 */
		onSetToolbar:function(fn){ return Fix.Helper.fn_registerEvent(fn, _setToolbarEvent);},
		/**
	 	 * @description 页面提交时
	 	 * @param {function} fn 回调函数
		 */
		onSubmit:function(fn){ return Fix.Helper.fn_registerEvent(fn, _submitEvent);},
		/**
	 	 * @description 页面提交前，收集组件数据事件
	 	 * @param {function} fn 回调函数
		 */
		onBeforeCollect:function(fn){ return Fix.Helper.fn_registerEvent(fn, _beforeCollect);},
		/**
	 	 * @description 页面提交前，验证
	 	 * @param {function} fn 回调函数
		 */
		onVerify:function(fn){ return Fix.Helper.fn_registerEvent(fn, _verifyEvent);},
		/**
	 	 * @description 页面提交前，通过验证，提交数据前
	 	 * @param {function} fn 回调函数
		 */
		onBeforeSubmit:function(fn){ return Fix.Helper.fn_registerEvent(fn, _beforeSubmit);},
		onSubmitted:function(fn){ return Fix.Helper.fn_registerEvent(fn, _submittedEvent);},
		onFlowSimulate:function(fn){ return Fix.Helper.fn_registerEvent(fn, _flowSimulate);},
		/**
	 	 * @description 引擎初始化方法
		 */
		init:function(){
			_obj_COMSelf = this;

			if(typeof Fix.Engine.Map.items != "undefined"){
				for(var i = 0; i < Fix.Engine.Map.items.length; i++){
					var str_item = Fix.Engine.Map.items[i];
					var obj_cfg = Fix.Engine.fn_GetElement(str_item, "Alias");
					//_obj_COMSelf.Alias[obj_cfg.alias] = obj_cfg;

					if(typeof obj_cfg.getFunc() != "undefined"&&obj_cfg.getFunc()!="input"){
						var obj_cmp = Fix.create("Fix.Component." + obj_cfg.getFunc(), obj_cfg);
						//自定义控件，赋予默认的disable实现，不会覆盖已有的实现
						if(typeof obj_cmp.disable == "undefined"){
							if(obj_cmp.Type == "DataEntity"){
								obj_cmp.disable = (function(){
									$("#" + this.id).html(this.getText());
								});
							}else{
								obj_cmp.disable = (function(){
									$("#" + this.id).hide();
								});
							}
						}
						
						// qj 2013-04-10 增加是否要预加载数据的属性 兼容原有控件，默认都要进行数据加载
						if(typeof obj_cfg.needPreDataLoader == "undefined"){
							if(obj_cmp.Type == "DataEntity"){
								obj_cfg.needPreDataLoader = true;
							}
						}
						
						//qj 兼容项目老代码用 让Autocompleate控件都不用进行数据预加载 2013-04-13
						if(obj_cfg.Autocomplete){
							obj_cfg.needPreDataLoader = false;
						}
						
						//elvis 2013-3-10 配置文件缓存
						Fix.Engine.Configs[str_item] = obj_cfg;
						// qj 2013-04-10 根据是否要预加载数据的属性进行数据加载
						if(obj_cfg.needPreDataLoader){
							Fix.Component.DataLoader.add(str_item, obj_cfg, "fixbody");
						}
						
						Fix.Engine.Controls[str_item] = obj_cmp;
					}	
				}
				Fix.Engine.onStart().fire();
			}else{
				Fix.Engine.onBindComplete().fire();
				Fix.Engine.Status = "onBindComplete";
			}
		},

		/**
	 	 * @description 页面中获取一个html对象
	 	 * @example
	 	 * Fix.Engine.query("#ControlID")
	 	 * @param {String} str_expression 需要查找的对象表达式
	 	 * @param {Object} scope 查找范围
		 */
		query: function(str_expression, scope) {
			var arr_objs;
			if(typeof(jQuery) != "undefined")
				arr_objs = $(str_expression, scope);
			else if(typeof(Ext) != "undefined")
				arr_objs = Ext.query(str_expression, scope);

			return arr_objs;
		},

		/**@private*/
		create: function(name, config, base){
			//延迟创建
			alert("create方法已经被遗弃,请重新制作表单");
		},
		
		/**
	 	 * @description 表单数据收集，组织成JSON并返回
		 */
		collect : function() {
			var that = this;
			var DataJson = {
				objName:this.BizObj,
				pks:[],
				data : [{
					rowData:[],
					children:[]
				}]
			};
			
			var formData = {
				_OBJ_NAME_:this.BizObj,
				_FORM_ID_: _pageName,
				useType:this.UseType,
				pageToken:this.PageToken,
				formData:DataJson,
				_ATTACHMENT_DELETE_IDS_:$('#_ATTACHMENT_DELETE_IDS_').val()
			};

			//本身dataobject属性
			var arr_childData = new Array();
			
			
			Fix.Engine.Master.collectData(DataJson);
			
			//收集明细表名，目前只实现1层明细
			Fix.Engine.SecondDetail.collectData(DataJson);
			
			var ref_formInfo = {};
			Fix.Engine.Master.collectAliasData(ref_formInfo);
			Fix.Engine.SecondDetail.collectAliasData(ref_formInfo);
			
			formData["formInfo"] = ref_formInfo;
			
			return formData;
		},
		/**
	 	 * @description 触发页面表单数据提交
	 	 * @example
	 	 * Fix.Engine.formSubmit(this)
	 	 * @param {Object} btn_source 触发该方法的对象实例引用
		 */
		formSubmit: function(btn_source, opts)
		{
			if(Fix.Engine.Map === undefined || Fix.Engine.Map.items === undefined )//外部不使用引擎搜集数据的情况,不需要判断item个数|| Fix.Engine.Map.items.length == 0
				alert("未绑定任何字段, 无法保存数据");
			//elvis 2013-3-28 增加接受配置参数
			Fix.Engine.onSubmit().fire(btn_source, opts);
		},
		/**
	 	 * @description 控件数据绑定
	 	 * @example
	 	 * var js_dataModel = {dis:'显示值',val:'值'};
	 	 * var html_ctl = $("#label_0");
	 	 * Fix.Engine.fn_BindValue(html_ctl, js_dataModel);
	 	 * @param {HTML} html_ctl 需要绑定数据的控件
	 	 * @param {Object} js_dataModel 数据绑定模型
		 */
		fn_BindValue: function(html_ctl, js_dataModel, TO_alias){
			//码表处理函数，仅在绑定控件数据
			var bool_flg = false;
			if ((html_ctl.nodeName == "INPUT" && html_ctl.type.toUpperCase() == "TEXT") ||
					(html_ctl.nodeName == "DIV") || (html_ctl.nodeName == "SPAN") || 
					(html_ctl.nodeName == "LABEL")){
				bool_flg = true;
			}
			if(bool_flg && typeof js_dataModel.dis != "undefined"){
				Fix.Helper.fn_SetValue(html_ctl, js_dataModel.dis);
				//文本框绑定日期类型,不进行转换
				if(TO_alias.datatype != "TimeStamp"){
					html_ctl.setAttribute("FixVal", js_dataModel.val);
					html_ctl.setAttribute("FixDis", js_dataModel.dis);
				}
			}else
				Fix.Helper.fn_SetValue(html_ctl, js_dataModel.val);
		},
		/**
	 	 * @description 控件数据获取
	 	 * @example
	 	 * var html_ctl = $("#label_0");
	 	 * Fix.Engine.fn_GetValue(html_ctl, $(document));
	 	 * @param {HTML} html_ctl 需要绑定数据的控件
	 	 * @param {bool} bool_checkObj 是否Fix平台组件
		 */
		fn_GetValue : function(html_ctl, bool_checkObj) {
			if (!html_ctl) {
				return '';
			}

			if(typeof bool_checkObj == "undefined")
				bool_checkObj = true;

			if(typeof Fix.Engine.Controls[html_ctl.id] === "object" && bool_checkObj){
				//检查接口
				return Fix.Engine.Controls[html_ctl.id].getData(html_ctl);
			}
			else{
				if(html_ctl.nodeName == "INPUT" || html_ctl.nodeName == "TEXTAREA") {
					if(html_ctl.type == "checkbox")
						return html_ctl.checked;
					else if(html_ctl.type.toUpperCase() == "TEXT"){
						//码表取值,已被码表赋值，直接获取
						if(html_ctl.getAttribute("FixVal") != null)
							return html_ctl.getAttribute("FixVal");
						else
							return html_ctl.value;						
					}else
						return html_ctl.value;
				} else if(html_ctl.nodeName == "SELECT")
					return html_ctl.value;
				else if(html_ctl.nodeName == "IMG")
					return html_ctl.src;
				else if(html_ctl.nodeName == "DIV" || html_ctl.nodeName == "SPAN"){ 
					//码表取值,已被码表赋值，直接获取
					if(html_ctl.getAttribute("FixVal") != null)
						return html_ctl.getAttribute("FixVal");
					else
						return html_ctl.innerHTML;
					// qj 2013-04-13 label取innerHtml会有转义的问题，要用text()取
				}else if(html_ctl.nodeName == "LABEL"){
					if(html_ctl.getAttribute("FixVal") != null)
						return html_ctl.getAttribute("FixVal");
					else
						return $(html_ctl).text();
				}else
					return html_ctl.innerHTML;
			}
		},
		/**
	 	 * @description 根据别名获取控件
	 	 * @example
	 	 * var fixCOM = Fix.Engine.fn_FindAlias(str_alias, $(document));
	 	 * @param {HTML} obj_target 组件别名
	 	 * @param {jQuery} jQy_scope 查找范围
	 	 * @return {Object} htmlID,scope,control
		 */
		fn_FindAlias : function(obj_target, jQy_scope) {

			str_alias = obj_target;

			var obj_fixbody = Fix.Engine.PageElements;

			//别名在页面级
			for (var j=0; j < obj_fixbody.length; j++) {
				var str_htmlID = obj_fixbody[j];
				var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");

				if(obj_alias.alias == str_alias){
					return {
						scope: "document",
						control: Fix.Engine.query("#" + str_htmlID, $(document))[0],
						htmlID: str_htmlID,
						//elvis 2013-3-12 增加原有对象引用
						obj: obj_alias
					};
				}
			}

			//别名在明细表中
			for (var table_id in Fix.Engine.DetailGrid) {
				var obj_detail = Fix.Engine.DetailGrid[table_id];
				//找到一个出现匹配的明细表
				for (var k=0; k < obj_detail.items.length; k++) {
					var str_htmlID = obj_detail.items[k];
					var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");

					if (obj_alias.alias == str_alias){
						return {
							scope: table_id,
							control: Fix.Engine.query("#" + str_htmlID, jQy_scope)[0],
							htmlID: str_htmlID,
							//elvis 2013-3-12 增加原有对象引用
							obj: obj_alias
						};
					}
				}
			}
		},
		/**
	 	 * @description 根据获取Alias中当前选中值
	 	 * @example
	 	 * var str_value = Fix.Engine.fn_getAliasValue(str_alias, $(document));
	 	 * @param {HTML} obj_target 组件别名
	 	 * @param {jQuery} jQy_scope 查找范围
		 */
		fn_getAliasValue : function(str_alias, jQy_scope)
		{
			var result = "";
			var jQy_control = Fix.Engine.fn_FindAlias(str_alias, jQy_scope);
			if(typeof jQy_control == "undefined"){
				result = null;
			}else{
				var jQy_pass_scope;
				if(jQy_control.scope == "document"){
					jQy_pass_scope = $(document);
					result = this.fn_GetValue(jQy_control.control, jQy_pass_scope);
				}else{
					jQy_pass_scope = jQy_scope;
					var $ctl = jQy_scope.data("ctls")[jQy_control.htmlID];
					if($ctl === undefined)
						result = this.fn_GetValue(jQy_control.control, jQy_pass_scope);
					else
						result = $ctl.getData();
				}
			
				if(result == null)
					result = "";
			}

			return result;
		},
		/**
	 	 * @description 设置值到别名组件中去
	 	 * @example
	 	 * var str_value = Fix.Engine.fn_setAliasValue(str_alias, $(document));
	 	 * @param {String} str_value 设置值
	 	 * @param {String} str_alias 组件别名
	 	 * @param {jQuery} jQy_scope 查找范围
		 */
		fn_setAliasValue: function(str_value, str_alias, jQy_scope){
			var jQy_control = Fix.Engine.fn_FindAlias(str_alias, jQy_scope);
			if(typeof jQy_control != "undefined"){
				var obj_COM = Fix.Engine.Controls[jQy_control.control.id];
				if(obj_COM !== undefined){
					obj_COM.setValue(str_value);
				}else
					Fix.Helper.fn_SetValue(jQy_control.control, str_value);
			}
		},
		/**
	 	 * @description 根据表达式计算别名，并替换表达式中的key，主要用于过滤条件的解释
	 	 * @example
	 	 * obj_adapter.Filter = "NAME = '{NAME}'"
	 	 * obj_adapter.Filter = Fix.Engine.fn_calculate(_dataConfig.Filter, jQy_scope);
	 	 * @param {String} str_string 含有别名的过滤表达式
	 	 * @param {jQuery} jQy_scope 查找范围
		 */
		fn_calculate : function(str_string, jQy_scope)
		{
			//获取页面传递参数
			//elvis 2013-3-12 提取解析参数功能
			str_string = this.fn_calculate_params(str_string, jQy_scope);
			/*
			//如果外面有单引号，就替换获取的别名值，进行转义。
			var arr_matched_params = Fix.Helper.fn_extraction(str_string, "'{&", "}'");
			for (var i=0; i < arr_matched_params.length; i++) {
				var str_result = arr_matched_params[i];
				var str_express = str_result.replace("'{&", "").replace("}'", "");

				str_string = str_string.replace(str_result, "'" + Fix.Engine.Params[str_express].replace("'", "''").trim() + "'");
			}
			//如果没有单引号，就不替换，给与原生字符串，用于传递 'A','B','C'
			var arr_matched_params = Fix.Helper.fn_extraction(str_string, "{&", "}");
			for (var i=0; i < arr_matched_params.length; i++) {
				var str_result = arr_matched_params[i];
				var str_express = str_result.replace("{&", "").replace("}", "");

				str_string = str_string.replace(str_result, Fix.Engine.Params[str_express].trim());
			} 
			*/
			
			//如果外面有单引号，就替换获取的别名值，进行转义。
			/*var arr_matched_ctl = Fix.Helper.fn_extraction(str_string, "'{", "}'");
			for (var i=0; i < arr_matched_ctl.length; i++) {
				var str_result = arr_matched_ctl[i];
				var str_express = str_result.replace("'{", "").replace("}'", "");

				var str_alias = str_express;
				if (str_express.indexOf(".") == -1){
					//表达式中没有"."的情况认为是获取页面组件值的表达式
					str_string = str_string.replace(str_result, "'" + String(this.fn_getAliasValue(str_alias, jQy_scope)).replace(/'/g, "''").trim() + "'");
				}
			}*/
			//如果没有单引号，就不替换，给与原生字符串，用于传递 'A','B','C'
			var arr_matched_ctl = Fix.Helper.fn_extraction(str_string, "{", "}");
			for (var i=0; i < arr_matched_ctl.length; i++) {
				var str_result = arr_matched_ctl[i];
				var str_express = str_result.replace("{", "").replace("}", "");

				var str_alias = str_express;
				if (str_express.indexOf(".") == -1){
					//表达式中没有"."的情况认为是获取页面组件值的表达式
					str_string = str_string.replace(str_result, String(this.fn_getAliasValue(str_alias, jQy_scope)).trim());
				}
			}
			
			return str_string;
		},
		//elvis 2013-3-12 url参数解析
		fn_calculate_params : function(str_string, jQy_scope)
		{
			//获取页面传递参数
			//如果外面有单引号，就替换获取的别名值，进行转义。
			/*var arr_matched_params = Fix.Helper.fn_extraction(str_string, "'{&", "}'");
			for (var i=0; i < arr_matched_params.length; i++) {
				var str_result = arr_matched_params[i];
				var str_express = str_result.replace("'{&", "").replace("}'", "");

				str_string = str_string.replace(str_result, "'" + Fix.Engine.Params[str_express].replace("'", "''").trim() + "'");
			}*/
			//如果没有单引号，就不替换，给与原生字符串，用于传递 'A','B','C'
			var arr_matched_params = Fix.Helper.fn_extraction(str_string, "{&", "}");
			for (var i=0; i < arr_matched_params.length; i++) {
				var str_result = arr_matched_params[i];
				var str_express = str_result.replace("{&", "").replace("}", "");

				str_string = str_string.replace(str_result, Fix.Engine.Params[str_express].trim());
			}
			
			return str_string;
		},
		//elvis 2013-3-12 增加预加载系统环境变量解析方法
		fn_calculate_preload : function(str_string, jQy_scope)
		{
			//如果外面有单引号，就替换获取的别名值，进行转义。
			/*var arr_matched_ctl = Fix.Helper.fn_extraction(str_string, "'{", "}'");
			for (var i=0; i < arr_matched_ctl.length; i++) {
				var str_result = arr_matched_ctl[i];
				var str_express = str_result.replace("'{", "").replace("}'", "");

				var str_alias = str_express;
				if (str_express.indexOf(".") == -1){
					//表达式中没有"."的情况认为是获取页面组件值的表达式
					
					var result = "";
					var jQy_control = Fix.Engine.fn_FindAlias(str_alias, jQy_scope);
					if(typeof jQy_control == "undefined"){
						result = "";
					}else{
						if(typeof jQy_control.obj.defaultValue != "undefined") 
							result = jQy_control.obj.defaultValue;
						if(Fix.Engine.ResultJSON.getSysVar[jQy_control.htmlID] !== undefined)
							result = Fix.Engine.ResultJSON.getSysVar[jQy_control.htmlID];
					}
					
					str_string = str_string.replace(str_result, "'" + String( result ).replace(/'/g, "''").trim() + "'");
				}
			}*/
			//如果没有单引号，就不替换，给与原生字符串，用于传递 'A','B','C'
			var arr_matched_ctl = Fix.Helper.fn_extraction(str_string, "{", "}");
			for (var i=0; i < arr_matched_ctl.length; i++) {
				var str_result = arr_matched_ctl[i];
				var str_express = str_result.replace("{", "").replace("}", "");

				var str_alias = str_express;
				if (str_express.indexOf(".") == -1){
					//表达式中没有"."的情况认为是获取页面组件值的表达式
					
					var result = "";
					var jQy_control = Fix.Engine.fn_FindAlias(str_alias, jQy_scope);
					if(typeof jQy_control == "undefined"){
						result = "";
					}else{
						if(typeof jQy_control.obj.defaultValue != "undefined") 
							result = jQy_control.obj.defaultValue;
						if (Fix.Engine.ResultJSON.getSysVar[jQy_control.htmlID] !== undefined)
							result = Fix.Engine.ResultJSON.getSysVar[jQy_control.htmlID];
					}
					str_string = str_string.replace(str_result, String( result ).trim());
				}
			}
			
			return str_string;
		},
		/**
	 	 * @description 获取绑定元素的配置属性
	 	 * @example
	 	 * var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
	 	 * @param {String} str_htmlID 含有别名的过滤表达式
	 	 * @param {String} str_Type 类型，DataTarget / Alias
	 	 * @return {TO} 元素的属性集
		 */
		fn_GetElement: function(str_htmlID, str_Type){
			var obj_item = window[str_htmlID + "_Config"];//_obj_COMSelf.Elements[str_htmlID];
			
			switch(str_Type) {
				case "DataTarget":
				    if(typeof obj_item.field != "undefined" && obj_item.field != "")
						return obj_item;
					else
						return null;
					break;
				case "Alias":
					obj_item.getFunc = (function(){
						if(typeof this.refc == "undefined")
							return this.func;
						else
							return this.refc.func;
					});
					
					if(typeof obj_item.refc != "undefined")
						obj_item.refc["htmlID"] = str_htmlID;
					else
						obj_item["htmlID"] = str_htmlID;
					
					if(obj_item.getFunc() == "Autocomplete"){
						obj_item["needPreDataLoader"] = false;
					}
					
					
				    return obj_item;
					break;
				default: 
					return null;
			}
		},
		/**
	 	 * @description 获取绑定元素的别名相关属性
	 	 * @example
	 	 * var TO_element = Fix.Engine.fn_GetTOByAlias(str_alias);
	 	 * @param {String} str_alias 别名
	 	 * @return {TO} 元素的属性集
		 */
		fn_GetTOByAlias: function(str_alias){
			for(var i = 0; i < _obj_COMSelf.Map.items.length; i++){
				var str_htmlID = _obj_COMSelf.Map.items[i];
				var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
				if(obj_alias.alias == str_alias){
					obj_alias.scope = "document";
					return obj_alias;
				}
			}
			
			for(var i = 0; i < _obj_COMSelf.Map.children.length; i++){
				var obj_detailTable = _obj_COMSelf.Map.children[i];
				var str_tableID = _obj_COMSelf.Map.children[i].id;
				for(var j = 0; j < obj_detailTable.items.length; j++){
					var str_htmlID = obj_detailTable.items[j];
					var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
					if(obj_alias.alias == str_alias){
						obj_alias.scope = str_tableID;
						return obj_alias;
					}
				}
			}
			
			return null;
		},
		/**
	 	 * @description 通过表名字段名获取绑定元素
	 	 * @example
	 	 * var TO_alias = Fix.Engine.getElementByField("业务对象ID.字段ID");
	 	 * @param {String} str_tableField 表名字段名
	 	 * @return {TO} 元素的属性集
		 */
		getElementByField: function(str_tableField){
			for(var int_count = 0; int_count < _obj_COMSelf.Map.items.length; int_count++){
				var str_htmlID = _obj_COMSelf.Map.items[int_count];
				var TO_alias = _obj_COMSelf.fn_GetElement(str_htmlID, "Alias");
				var str_field = TO_alias.field;
				var str_table = TO_alias.bizObj;
				
				if(str_table + "." + str_field == str_tableField)
					return TO_alias;
			}
			
			for(var int_table = 0; int_table < _obj_COMSelf.Map.children.length; int_table++){
				var TO_table = _obj_COMSelf.Map.children[int_table];
				var str_tableName = str_tableField.substr(0, str_tableField.indexOf("."));

				if(TO_table.bizObj == str_tableName){
					for(var int_count = 0; int_count < TO_table.items.length; int_count++){
						var str_htmlID = TO_table.items[int_count];
						var TO_alias = _obj_COMSelf.fn_GetElement(str_htmlID, "Alias");
						var str_field = TO_alias.field;
						
						if(TO_table.bizObj + "." + str_field == str_tableField){
							return TO_alias;
						}
					}
				}
			}
		},
		/**
	 	 * @description 通过htmlID获取绑定元素
	 	 * @example
	 	 * var TO_element = Fix.Engine.fn_GetTOByHtmlID(htmlID);
	 	 * @param {String} str_InHtmlID 绑定元素的HTML ID
	 	 * @return {TO} 元素的属性集
		 */
		fn_GetTOByHtmlID: function(str_InHtmlID){
			for(var i = 0; i < _obj_COMSelf.Map.items.length; i++){
				var str_htmlID = _obj_COMSelf.Map.items[i];
				if(str_htmlID == str_InHtmlID){
					var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
					obj_alias.scope = "document";
					return obj_alias;
				}
			}
			
			for(var i = 0; i < _obj_COMSelf.Map.children.length; i++){
				var obj_detailTable = _obj_COMSelf.Map.children[i];
				var str_tableID = _obj_COMSelf.Map.children[i].id;
				for(var j = 0; j < obj_detailTable.items.length; j++){
					var str_htmlID = obj_detailTable.items[j];
					if(str_htmlID == str_InHtmlID){
						var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
						obj_alias.scope = str_tableID;
						return obj_alias;
					}
				}
			}
			
			return null;
		},
		/**
	 	 * @description 通过别名获取对应组件所处在的页面范围
	 	 * @example
	 	 * var str_scope = Fix.Engine.fn_GetScopeByAlias(str_value);
	 	 * @param {String} str_InHtmlID 绑定元素的HTML ID
	 	 * @return {String/Object} "document"或者 jQuery行级元素
		 */
		fn_GetScopeByAlias: function(str_alias){
			var TO_element = _obj_COMSelf.fn_GetTOByAlias(str_alias);
			if(TO_element == null)
				return null;
			else
				return TO_element.scope;
		},
		
		/**
	 	 * @description 初始化页面默认值，并且反馈需要后台数据的变量，0在Alias中寻找含有defaultValue的元素值，给页面元素赋值，遇到{xxx}类型的defaultValue，将值收集，并作为函数返回集合
	 	 * @example
	 	 * var arr_sysVar = that._fn_initDefaultValue(that.Map);
	 	 * @param {MAP} 页面的元素集合，即：Fix.Engine.MAP
	 	 * @return {Array} 系统环境变量表达式的集合
		 */
		_fn_initDefaultValue: function(obj_map, arr_alias){
			var arr_sysVarious = {};//new Array();
			var that = this;
			
			var arr_alias = obj_map.items;
			//收集主表别名
			for (var i = 0; i < arr_alias.length; i++) {
				that.PageElements.push(arr_alias[i]);
			}

			//获取页面系统变量
			Fix.Engine.Master.collectSysVar(arr_sysVarious);
			
			//明细表系统变量
			Fix.Engine.SecondDetail.collectSysVar(arr_sysVarious);
				
			return arr_sysVarious;
		},
		
		_fn_Map_Foreach: function (arr_Items, fn_callback){
			for (var i=0; i < arr_Items.length; i++) {
				var obj_target = this.fn_GetElement(arr_Items[i], "DataTarget");
				if(obj_target != null)
					fn_callback(obj_target, arr_Items[i]);
			};
		},
		
		_fn_Alias_Foreach: function (arr_Items, fn_callback){
			for (var i=0; i < arr_Items.length; i++) {
				var TO_alias = _obj_COMSelf.fn_GetElement(arr_Items[i], "Alias");
				fn_callback(TO_alias, arr_Items[i]);
			};
		},
		/**
		 * @description 系统变量翻译到取数组件中
		 * @example
		 * Fix.Engine.fn_Compile_sysVar(obj_cfg, obj_sysVar, 0);
		 * @param0 {JSON} obj_cfg 组件配置段
		 * @param {MAP} obj_sysVar 系统变量表
		 * @param {Number} int_rowIndex 行
		 * @returns
		 */
		fn_Compile_sysVar: function(obj_cfg, obj_sysVar, int_rowIndex){
			
			_fn_EachFilter(obj_cfg, true, int_rowIndex, function(cfg_data){
				var regex = new RegExp("(\{).*?(\})", "ig");
				var arr_match = cfg_data.Filter.match(regex);

				if(arr_match != null){
					for(var int_count = 0; int_count < arr_match.length; int_count++){
						var str_express = arr_match[int_count];
						if (str_express.indexOf(".") > -1)
							cfg_data.Filter = cfg_data.Filter.replace(str_express, obj_sysVar[str_express]);
					}
				}
			});
		},
		/** @class 页面主表对象*/
		Master: (function(){
			/** @lends Fix.Engine.Master */
			//_obj_COMSelf = Fix.Engine;
			return {
				/**
				 * @description 验证元素解释
				 * @example
				 * var arr_param = Fix.Engine.Master.getVerifyParam(str_value);
				 * @param {String} str_tableField 表名字段名
				 * @returns {Array} 验证元素
				 */
				getVerifyParam: function(str_tableField){
					for(var int_count = 0; int_count < _obj_COMSelf.Map.items.length; int_count++){
						var str_htmlID = _obj_COMSelf.Map.items[int_count];
						var TO_alias = _obj_COMSelf.fn_GetElement(str_htmlID, "Alias");
						var str_field = TO_alias.field;
						var str_tabName = TO_alias.bizObj;
						
						if(str_tabName + "." + str_field == str_tableField){
							var str_value = "";
							var obj_ctl;
							var obj_pzs = {};
							var str_type = "";
							if(typeof _obj_COMSelf.Controls[str_htmlID] == "undefined") {
								obj_ctl = _obj_COMSelf.query("#" + str_htmlID)[0];
								str_value = _obj_COMSelf.fn_GetValue(obj_ctl, $(document));
								str_type = "html";
							}else{
								var fix_cmp = _obj_COMSelf.Controls[str_htmlID];
								str_value = fix_cmp.getData();
								obj_ctl = fix_cmp.HtmlEntity;
								if(obj_ctl === undefined)
									obj_ctl = fix_cmp.Container;
								if(fix_cmp.Position !== undefined)
									obj_pzs = fix_cmp.Position;
								if(str_value == null)
									str_value = "";
								str_type = fix_cmp.BaseFramework;
							}
							return [{
								els:obj_ctl,
								val:String(str_value).trim(), 
								scope:"document", 
								position:obj_pzs,
								id:str_htmlID,
								type:str_type,
								//elvis 2013-3-27 为验证提供元素对象信息
								cfg: TO_alias
							}];
						}			
					}
					return false;
					//alert((new Fix.Exception("VaildationNotFoundTableFields", _className, [str_tableField])).description);
				},
				/**
				 * @description 数据绑定组件，从Fix.Engine.Data中获取数据
				 * @param {MAP} obj_sysVar 系统变量 
				 */
				bindControls: function(obj_sysVar){
					_obj_COMSelf._fn_Map_Foreach(_obj_COMSelf.Map.items, function(obj_target, str_htmlID){
						var str_objName = obj_target.bizObj;
						var arr_rtd_source = _obj_COMSelf.Data[str_objName];

						if(typeof _obj_COMSelf.Controls[str_htmlID] == "undefined") {
							//该控件未被接管，则进行HTML解释
							var html_ctl = _obj_COMSelf.query("#" + str_htmlID);

							if(html_ctl.length > 0)
								html_ctl = html_ctl[0];
							else
								throw("数据默认绑定时没有找到元素");

							if(typeof _obj_COMSelf.Data[str_objName] != "undefined" && arr_rtd_source.length > 0)//单表记录，绑定到页面控件中
							{
								var obj_rtd_row = arr_rtd_source[0];
								var TO_alias = _obj_COMSelf.fn_GetElement(str_htmlID, "Alias");
								var str_field = TO_alias.field;
								var js_dataModel = obj_rtd_row[str_field];
								if(typeof js_dataModel == "undefined")
									alert("没有找到对应字段:" + str_field);
								else
									_obj_COMSelf.fn_BindValue(html_ctl, js_dataModel, TO_alias);
								
							}
						}else{
							//该控件已经被接管，则进行控件默认值设置
							var obj_control = _obj_COMSelf.Controls[str_htmlID];
							
							if(typeof obj_sysVar != "undefined" && typeof obj_sysVar[str_htmlID] != "undefined"){
								obj_control.setValue(obj_sysVar[str_htmlID]);
							}
							
							if(typeof _obj_COMSelf.Data[str_objName] != "undefined" && arr_rtd_source.length > 0)//单表记录，绑定到页面控件中
							{
								var obj_rtd_row = arr_rtd_source[0];
								var str_field = Fix.Engine.fn_GetElement(str_htmlID, "Alias").field;
								var js_dataModel = obj_rtd_row[str_field];
								if(js_dataModel){
									//elvis 2013-9-25 将 码表数据存储在外层容器上
									if(obj_control.Container){
										obj_control.Container.attr("FixVal", js_dataModel.val);
										obj_control.Container.attr("FixDis", js_dataModel.dis);
									}
									obj_control.setValue(js_dataModel.val);
								}
								
								if(_obj_COMSelf.UseType == "view")obj_control.disable(js_dataModel.val);
							}
						}
					});
				},
				/**
				 * @description 从主表中收集系统变量，填充至传入的系统变量集中
				 * @param {MAP} arr_sysVarious 系统变量 
				 */
				collectSysVar: function(arr_sysVarious){
					for(var j = 0; j < _obj_COMSelf.PageElements.length; j++) {
						var str_id = _obj_COMSelf.PageElements[j];
						var obj_single_item = _obj_COMSelf.fn_GetElement(_obj_COMSelf.PageElements[j], "Alias");
			
						if(typeof obj_single_item.defaultValue != "undefined") {
							//系统变量在defaultValue中
							var html_ctl = _obj_COMSelf.query("#" + str_id);

							if(html_ctl.length > 0)
								html_ctl = html_ctl[0];
							else
								throw("数据默认绑定时没有找到元素");
							
							var regex = new RegExp("(\{).*?(\})", "ig");
							var match = regex.exec(obj_single_item.defaultValue);

							if(match != null)
								arr_sysVarious[str_id] = obj_single_item.defaultValue;
							else{
								if(typeof _obj_COMSelf.Controls[str_id] == "undefined")//组件此时还未初始化，不能进行默认值赋值
									Fix.Helper.fn_SetValue(html_ctl, obj_single_item.defaultValue);
							}
								
						}
						
						if(typeof _obj_COMSelf.Controls[str_id] != "undefined") {
							var obj_cfg = _obj_COMSelf.fn_GetElement(str_id, "Alias");

							//允许编写变量的组件属性
							_fn_EachFilter(obj_cfg, false, 0, function(cfg_data){
								fn_CollectSysVar(cfg_data.Filter, arr_sysVarious);
							});
						}
					}
				},
				/**
				 * @description 从主表中收集数据，主要用于表单数据提交
				 * @param {JSON} DataJson 数据提交JSON集
				 */
				collectData:function(DataJson){
					var arr_MasterItems = _obj_COMSelf.Map.items;
					_obj_COMSelf._fn_Map_Foreach(arr_MasterItems, function(obj_target, str_htmlID){
						//如果单向绑定，则不再收集该控件信息。主键必须是双向绑定，否则保存时会出错
						if(typeof(obj_target.needSubmit) == "undefined" || obj_target.needSubmit == true || obj_target.needSubmit == "true"){
						
							var obj_column = _fn_collect_Page_JSON (obj_target, str_htmlID);
							if(obj_target.bizObj == _obj_COMSelf.BizObj){
								if(obj_target.isPK)
									DataJson.pks.push(obj_target.field);
	
								DataJson.data[0].rowData.push(obj_column);
							}else{
								var isExists = false;
								for(var i = 0; i < DataJson.data[0].children.length; i++){
									var TO_child = DataJson.data[0].children[i];
									
									if(TO_child.objName == obj_target.bizObj){
										if(obj_target.isPK)
											TO_child.pks.push(obj_target.field);
										TO_child.data[0].rowData.push(obj_column);
										isExists = true;
									}
								}
								
								if(!isExists){
									var DirectJson = {
											objName:obj_target.bizObj,
											pks:[],
											data : [{
												rowData:[],
												children:[]
											}]
										};
									if(obj_target.isPK)
										DirectJson.pks.push(obj_target.field);
									DirectJson.data[0].rowData.push(obj_column);
									DataJson.data[0].children.push(DirectJson);
								}
							}
						}
					});
				},
				
				/**
				 * @description 从主表中收集设置了需要提交的别名数据(needSubmit)，主要用于表单提交FormInfo段数据
				 * @param {MAP} ref_formInfo FormInfo段的JSON集
				 * @param {String} prefix 为提交的别名增加前缀，在查询表单时提交数据时使用
				 */
				collectAliasData:function(ref_formInfo, prefix){
					_obj_COMSelf._fn_Alias_Foreach(_obj_COMSelf.Map.items, function(TO_alias, str_htmlID){
						if(typeof(TO_alias.alias) != "undefined" && typeof(TO_alias.needSubmit) != "undefined" && TO_alias.needSubmit == true){
							var fullkey = TO_alias.alias;
							if(prefix !== undefined)
								fullkey = prefix + fullkey;
							ref_formInfo[fullkey] = _obj_COMSelf.fn_GetValue(_obj_COMSelf.query("#" + str_htmlID)[0], $(document));
						}
					});
				},
				/**
				 * @description 从主表中通过别名获取对象和值，主要用于验证时
				 * @param {String} str_alias 别名
				 * @return {Object} els:对象,val:值,scope:所处范围,position:组件设置的偏移位置,id:组件的HTML ID，type:组件类型
				 */
				getObjAndValueByAlias: function(str_alias){
					var obj_fixbody = Fix.Engine.PageElements;

					//别名在页面级
					for (var j=0; j < obj_fixbody.length; j++) {
						var str_htmlID = obj_fixbody[j];
						var obj_alias = Fix.Engine.fn_GetElement(str_htmlID, "Alias");

						if(obj_alias.alias == str_alias){
							var arr_package = [];
							
							var str_value = "";
							var obj_ctl;
							var obj_pzs = {};
							var str_type = "";
							
							if(typeof Fix.Engine.Controls[str_htmlID] == "undefined") {
								var obj_ctl = Fix.Engine.query("#" + str_htmlID, $(document))[0];
								str_value = Fix.Engine.fn_GetValue(obj_ctl);
								str_type = "html";
							}else{
								var fix_cmp = Fix.Engine.Controls[str_htmlID];
								str_value = fix_cmp.getData();
								obj_ctl = fix_cmp.HtmlEntity;
								if(obj_ctl === undefined)
									obj_ctl = fix_cmp.Container;
								if(fix_cmp.Position !== undefined)
									obj_pzs = fix_cmp.Position;
								if(str_value == null)
									str_value = "";
								str_type = fix_cmp.BaseFramework;
							}
							arr_package.push({
								"els":obj_ctl,
								"val":String(str_value).trim(), 
								"scope":"document",
								"position":obj_pzs,
								id:str_htmlID,
								type:str_type,
								//elvis 2013-3-27 为验证提供元素对象信息
								"cfg": obj_alias,
								"cmp": fix_cmp
							});
							return arr_package;
						}
					}
					
					alert((new Fix.Exception("Runtime_003", _className, [str_alias])).description);
				}
			};
		})(),

		/** @class 页面明细表对象*/
		SecondDetail: (function(){
			/** @lends Fix.Engine.SecondDetail */
			//_obj_COMSelf = Fix.Engine;
			return {
				/**
				 * @description 验证元素解释
				 * @example
				 * var arr_param = Fix.Engine.Master.getVerifyParam(str_value);
				 * @param {String} str_tableField 表名字段名
				 * 
				 * @returns {Array} 验证元素
				 */
				getVerifyParam:function(str_tableField, jQy_scope){
					for(var int_table = 0; int_table < _obj_COMSelf.Map.children.length; int_table++){
						var TO_table = _obj_COMSelf.Map.children[int_table];
						var str_tableName = str_tableField.substr(0, str_tableField.indexOf("."));

						if(TO_table.bizObj == str_tableName){
							for(var int_count = 0; int_count < TO_table.items.length; int_count++){
								var str_htmlID = TO_table.items[int_count];
								var TO_alias = _obj_COMSelf.fn_GetElement(str_htmlID, "Alias");
								var str_field = TO_alias.field;
								
								if(TO_table.bizObj + "." + str_field == str_tableField){
									return _obj_COMSelf.DetailGrid[TO_table.id].obj.getColumnObjAndValue(TO_alias.htmlID, jQy_scope);
								}
							}
						}
					}
					return false;
					//alert((new Fix.Exception("VaildationNotFoundTableFields", _className, [str_tableField])).description);
				},
				/**
				 * @description 数据绑定组件，从Fix.Engine.Data中获取数据
				 * @param {MAP} obj_sysVar 系统变量 
				 */
				bindControls: function(obj_sysVar){
					var arr_DetailTable = _obj_COMSelf.Map.children;
					for (var i = 0; i < arr_DetailTable.length; i++) {
						var str_objName = arr_DetailTable[i].bizObj;
						var str_table = arr_DetailTable[i].id;
						var arr_DetailItems = arr_DetailTable[i].items;
						
						//如果reset时，将需要判断明细表是否已经存在
						if(_obj_COMSelf.DetailGrid[str_table].obj == null){
							//Grid数据绑定
							var obj_grid = new Fix.Component.HTMLGrid({
								id:str_table,
								bizObj:str_objName,
								childrenSource:arr_DetailItems,
								controls:_obj_COMSelf.ControlsByDetail[str_table],
								sysVar:obj_sysVar
							});

							if(_obj_COMSelf.UseType != "add"){
								obj_grid.setParams({
									data:_obj_COMSelf.Data[str_objName]
								});
							}

							_obj_COMSelf.DetailGrid[str_table].obj = obj_grid;
							obj_grid.draw();
							obj_grid.initButton();
							//完成绑定
						}else{
							//reset明细表数据
							var obj_grid = _obj_COMSelf.DetailGrid[str_table].obj;
							
							obj_grid.selectAllRows(true);
							obj_grid.removeSelectedRows();
							obj_grid.DeletedRows = [];
							
							if(_obj_COMSelf.UseType != "add"){
								obj_grid.setParams({
									data:_obj_COMSelf.Data[str_objName]
								});
							}
							
							obj_grid.draw();
							obj_grid.initButton();
						}
						
					}
				},
				/**
				 * @description 从明细表中收集系统变量，填充至传入的系统变量集中
				 * @param {MAP} arr_sysVarious 系统变量 
				 */
				collectSysVar: function(arr_sysVarious){
					for(var str_detail in _obj_COMSelf.DetailGrid) {
						var obj_detail = _obj_COMSelf.DetailGrid[str_detail];
						for(var i = 0; i < obj_detail.items.length; i++){
							var str_id = obj_detail.items[i];
							var obj_cfg = _obj_COMSelf.fn_GetElement(str_id, "Alias");
							
							
							if(typeof obj_cfg.defaultValue != "undefined") {
								//系统变量在defaultValue中
								var html_ctl = _obj_COMSelf.query("#" + str_id);
			
								if(html_ctl.length > 0)
									html_ctl = html_ctl[0];
								else{
									var err_cal = new Fix.Exception("", _className, [str_id]);
									alert(err_cal.description);
								}
								
								var regex = new RegExp("(\{).*?(\})", "ig");
								var match = regex.exec(obj_cfg.defaultValue);

								if(match != null)
									arr_sysVarious[str_id] = obj_cfg.defaultValue;
								else{
									//if(typeof obj_item.getFunc() == "undefined")
									if(typeof obj_cfg.getFunc() == "undefined")
										Fix.Helper.fn_SetValue(html_ctl, obj_cfg.defaultValue);
								}	
							}
							
												
							//允许编写变量的组件属性
							_fn_EachFilter(obj_cfg, false, 0, function(cfg_data){
								fn_CollectSysVar(cfg_data.Filter, arr_sysVarious);
							});
						}
					}
				},
				/**
				 * @description 从明细表中收集数据，主要用于表单数据提交
				 * @param {JSON} DataJson 数据提交JSON集
				 */
				collectData: function(DataJson){
					var arr_DetailTable = _obj_COMSelf.Map.children;
					for (var i = 0; i < arr_DetailTable.length; i++) {
						var str_objName = arr_DetailTable[i].bizObj;
						var str_table = arr_DetailTable[i].id;
						var arr_DetailItems = arr_DetailTable[i].items;
						var bool_isdetail = arr_DetailTable[i].isdetail;
						
						if(bool_isdetail){
							var o = _obj_COMSelf.DetailGrid[str_table].obj;
							var json_detail = o && o.getData(arr_DetailItems);
							if(typeof json_detail == "undefined"){
								_obj_COMSelf.PassedVerify = false;
								return;
							}else if(json_detail != null)
								DataJson.data[0].children.push(json_detail);
						}else{
							var DirectJson = {
								objName:str_objName,
								pks:[],
								data : [{
									rowData:[],
									children:[]
								}]
							};
							_obj_COMSelf._fn_Map_Foreach(arr_DetailItems, function(obj_target, str_htmlID){
								if(typeof(obj_target.needSubmit) == "undefined" || obj_target.needSubmit == true){
									var obj_column = _fn_collect_Page_JSON (obj_target, str_htmlID);
									
									if(obj_target.isPK)
										DirectJson.pks.push(obj_target.field);
	
									DirectJson.data[0].rowData.push(obj_column);
								}
							});
							DataJson.data[0].children.push(DirectJson);
						}
					}
				},
				/**
				 * @description 从明细表中收集设置了需要提交的别名数据(needSubmit)，主要用于表单提交FormInfo段数据
				 * @param {MAP} ref_formInfo FormInfo段的JSON集
				 */
				collectAliasData:function(ref_formInfo){
					var arr_DetailTable = _obj_COMSelf.Map.children;
					for (var i = 0; i < arr_DetailTable.length; i++) {
						var str_objName = arr_DetailTable[i].bizObj;
						var str_table = arr_DetailTable[i].id;
						var arr_DetailItems = arr_DetailTable[i].items;
						var bool_isdetail = arr_DetailTable[i].isdetail;
						
						if(bool_isdetail){
							_obj_COMSelf.DetailGrid[str_table].obj.getAliasData(ref_formInfo, arr_DetailItems);
						}else{
							_obj_COMSelf._fn_Alias_Foreach(arr_DetailItems, function(TO_alias, str_htmlID){
								if(typeof(TO_alias.alias) != "undefined" && typeof(TO_alias.needSubmit) != "undefined" && TO_alias.needSubmit == true){
									ref_formInfo[TO_alias.alias] = _obj_COMSelf.fn_GetValue(_obj_COMSelf.query("#" + str_htmlID)[0], $(document));
								}
							});
						}
					}
				},
				
				/**
				 * @description 收集子表中的控件，组合成集合，用于数据绑定时的 明细表 动态创建 自动实例化内嵌控件
				 * @param {MAP} arr_controls 明细表行中，组件实例的集合
				 * @param {MAP} obj_map 明细表行中组件配置的集合
				 * @param {MAP} arr_detailGrid 明细表集合
				 */
				fn_collectControlByDetail: function(arr_controls, obj_map, arr_detailGrid) {
					var arr_groupedControls = {};
					
					//基于DataTarget找出每张明细表对应的子组件ID
					//收集明细表名，目前只实现1层明细
					var arr_DetailTable = obj_map.children;
					for (var i = 0; i < arr_DetailTable.length; i++) {
						var str_htmlID = arr_DetailTable[i].id;
						var arr_DetailItems = arr_DetailTable[i].items;
						
						arr_detailGrid[str_htmlID] = {obj: null, items: []};
						
						for (var j = arr_DetailItems.length - 1; j >= 0; j--){
							var str_dataTarget = arr_DetailItems[j];
							arr_detailGrid[str_htmlID].items.push(str_dataTarget);
						};
					}
					
					//收集明细表中的控件集合
					for(var item in arr_detailGrid){
						var obj_detail = arr_detailGrid[item];
			
						arr_groupedControls[item] = [];
			
						for (var k=0; k < obj_detail.items.length; k++) {
							var obj_alias = obj_detail.items[k];
			
							if(typeof arr_controls[obj_alias] === "object")
								arr_groupedControls[item].push(arr_controls[obj_alias]);
						}
					}
					return arr_groupedControls;
				}, 
				/**
				 * @description 从主表中通过别名获取对象和值，主要用于验证时
				 * @param {String} str_alias 别名
				 * @return {Object} els:对象,val:值,scope:所处范围,position:组件设置的偏移位置,id:组件的HTML ID，type:组件类型
				 */
				getObjAndValueByAlias: function(str_alias, str_tableID, jQy_scope){
					
					var obj_detail = Fix.Engine.DetailGrid[str_tableID];
					var TO_element = _obj_COMSelf.fn_GetTOByAlias(str_alias);
					if(TO_element != null){
						//找到一个出现匹配的明细表
						return obj_detail.obj.getColumnObjAndValue(TO_element.htmlID, jQy_scope);
					}
					alert((new Fix.Exception("Runtime_003", _className, [str_alias])).description);
				}
			};
		})(),
		/**
		 * @description 数据绑定组件入口
		 * @param {MAP} obj_sysVar 系统变量 
		 */
		fn_DataBind: function(obj_sysVar){
			//传递默认值
			var _passedDefaultValue;
			if(typeof(Fix.Engine.Params._field) != "undefined" && typeof(Fix.Engine.Params._value) != "undefined"){
				var arr_field = Fix.Engine.Params._field.split(",");
				var arr_value = Fix.Engine.Params._value.split(",");
				_passedDefaultValue = {};

				for(var i = 0; i < arr_field.length; i++){
					_passedDefaultValue[arr_field[i]] = arr_value[i];
				}
			}
			

			//elvis 2013-3-10 数据预加载
			_obj_COMSelf.ObjStore = Fix.Component.DataLoader.load("fixbody");

			//循环所有alias,为控件初始化,赋默认值
			for(var j = 0; j < _obj_COMSelf.PageElements.length; j++) {
				var str_htmlID = _obj_COMSelf.PageElements[j];
				var obj_single_item = _obj_COMSelf.fn_GetElement(_obj_COMSelf.PageElements[j], "Alias");
				
				if(typeof _obj_COMSelf.Controls[str_htmlID] == "undefined") {
					var jQy_ctl = _obj_COMSelf.query("#" + str_htmlID);
					if(typeof obj_single_item.defaultValue != "undefined") {
						var html_ctl = jQy_ctl;

						if(html_ctl.length > 0)
							html_ctl = html_ctl[0];
						else
							throw("数据默认绑定时没有找到元素");

						if(typeof obj_sysVar != "undefined" && typeof obj_sysVar[str_htmlID] != "undefined"){
							Fix.Helper.fn_SetValue(html_ctl, obj_sysVar[str_htmlID]);
						}				
					}
					
					//传递默认值
					if(typeof(_passedDefaultValue) != "undefined" && _passedDefaultValue != ""){
						var str_default = _passedDefaultValue[obj_single_item.field];
						if(typeof(str_default) != "undefined"){
							var html_ctl = _obj_COMSelf.query("#" + str_htmlID)[0];
							Fix.Helper.fn_SetValue(html_ctl, str_default);
						}
					}
					//格式匹配
					if(typeof obj_single_item.maskFormat != "undefined" && obj_single_item.maskFormat != ""){
						jQy_ctl.mask(String(obj_single_item.maskFormat));
					}
					
					var _regEvents = obj_single_item.event;
					Fix.Helper.fn_registerCOMEvent(jQy_ctl, _regEvents);
				} else {
					var obj_cfg = Fix.Engine.fn_GetElement(str_htmlID, "Alias");
					
					//系统变量赋值
					_obj_COMSelf.fn_Compile_sysVar(obj_cfg, obj_sysVar, 0);
								
					var obj_control = _obj_COMSelf.Controls[str_htmlID];

					if(obj_control.Type == "DataEntity"){
						//elvis 2013-3-10 通过预加载，获取数据
						//DataEntity类型的组件，由外部统一管理数据源操作，其他类型组件由自身管理数据操作
						/*try{
							Fix.Component.GetStore(str_htmlID, obj_cfg, _obj_COMSelf.ObjStore, false);
						}catch(e){
							alert(e.description);
						}*/
						obj_control.init(_obj_COMSelf.ObjStore[str_htmlID]);
					}else{
						
						//if(obj_control.init !== undefined)obj_control.init();
					}	
					
					if(obj_cfg.autoDraw === undefined || obj_cfg.autoDraw == true){
						obj_control.draw();
						
						if(typeof obj_single_item.defaultValue != "undefined") {
							var defaultValue = obj_single_item.defaultValue;
							
							var htmlID = obj_single_item.htmlID;
							//使控件默认值支持系统变量  add by qj 2013-01-16 
							if(obj_sysVar[htmlID] !== undefined){
								defaultValue = obj_sysVar[htmlID];
							}
							
							obj_control.setValue(defaultValue);
						}
						
						//传递默认值
						if(typeof(_passedDefaultValue) != "undefined"){
							var str_default = _passedDefaultValue[obj_single_item.field];
							if(typeof(str_default) != "undefined"){
								obj_control.setValue(str_default);
							}
						}
					}
				}
			}


			//主表数据默认字段数据绑定
			Fix.Engine.Master.bindControls(obj_sysVar);

			//Fix.Helper.jQy_progressBar.progressbar({value: 80});
			
			//子表Grid实例化，暂时只支持1层明细
			Fix.Engine.SecondDetail.bindControls(obj_sysVar);

			Fix.Engine._fn_Alias_Foreach(Fix.Engine.Map.items, function(TO_alias, str_htmlID){
				if(TO_alias.format !== undefined && TO_alias.format != ""){
					var html_ctl = $("#" + str_htmlID)[0];
					var str_current = Fix.Engine.fn_GetValue(html_ctl);
					var str_conversion = Fix.Format.route(str_current, TO_alias.format, TO_alias.blankFormat);
					Fix.Helper.fn_SetValue(html_ctl, str_conversion);
				}
			});
		},
		setValidationEnable: function(str_target, bool_flag){
			for(var i = 0; i < Fix.Engine.Verify.length; i++){
				var TO_verify = Fix.Engine.Verify[i];
				//验证有效性
				if(TO_verify.target == str_target)
					TO_verify.enable = bool_flag;
					
				//改颜色
				if(TO_verify.rule == "checkDataEmpty"){
					var arr_params = TO_verify.parameters;
					TO_ExplainedParam = Fix.Validation.engine(arr_params[0]);
					if(TO_ExplainedParam !== undefined && TO_ExplainedParam.length > 0){
						//获得验证目标，在对象上增加离开焦点验证事件的实现过程
						var jQy_source = $(TO_ExplainedParam[0].els);
						
						//为空验证控制
						if(TO_verify.rule == "checkDataEmpty"){
							if(bool_flag){
								jQy_source.addClass("required");
							}else{
								jQy_source.removeClass("required");
							}
						}
					}
				}
					
			}
		},
		setUserType:function(type){
			//this.PageName = type;
			this.UseType = type;
		}
	};
	/**
	 * 仅处理系统变量
	 * @param str_string 组件配置段
	 * @param int_rowIndex 行
	 * @param jQy_scope 
	 * @returns
	 */
	function _fn_compile_field(str_string, int_rowIndex, jQy_scope){
		var arr_matched_bizObj = Fix.Helper.fn_extraction(str_string, "{#", "}");
		
		for (var i=0; i < arr_matched_bizObj.length; i++) {
			var str_result = arr_matched_bizObj[i];
			var str_express = str_result.replace("{#", "").replace("}", "");

			if (str_express.indexOf(".") > -1){
				var str_table = str_express.substr(0, str_express.indexOf("."));
				var str_field = str_express.substr(str_express.indexOf(".") + 1);
				if(typeof _obj_COMSelf.Data[str_table] == "undefined")
					str_string = str_string.replace(str_result, "");
				else
					str_string = str_string.replace(str_result, _obj_COMSelf.Data[str_table][int_rowIndex][str_field].val);
			}else{
				var err_cal = new Fix.Exception("fn_calculate_501", _className, [str_express, "{#bizObj.field}"]);
				alert(err_cal.description);
			}
		}
		return str_string;
	}
	
	/**@private*/
	function _fn_EachFilter(data_cfg, need_compiled, int_rowIndex, fn_callback){
		var obj_cfg;
		if(typeof obj_cfg != "undefined")
			obj_cfg = data_cfg.refc;
		else
			obj_cfg = data_cfg;
		
		if(typeof obj_cfg.Data != "undefined" && typeof obj_cfg.Data.Filter != "undefined"){
			if(need_compiled)
				obj_cfg.Data.Filter = _fn_compile_field(obj_cfg.Data.Filter, int_rowIndex, $(document));
			fn_callback(obj_cfg.Data);
		}
		if(typeof obj_cfg.DataStore != "undefined" && typeof obj_cfg.DataStore.Filter != "undefined"){
			if(need_compiled)
				obj_cfg.DataStore.Filter = _fn_compile_field(obj_cfg.DataStore.Filter, int_rowIndex, $(document));
			fn_callback(obj_cfg.DataStore);
		}
		if(typeof obj_cfg.TreeStore != "undefined" && typeof obj_cfg.TreeStore.Filter != "undefined"){
			if(need_compiled)
				obj_cfg.TreeStore.Filter = _fn_compile_field(obj_cfg.TreeStore.Filter, int_rowIndex, $(document));
			fn_callback(obj_cfg.TreeStore);
		}
					
		if(typeof obj_cfg.Filter != "undefined"){
			if(need_compiled)
				obj_cfg.Filter = _fn_compile_field(obj_cfg.Filter, int_rowIndex, $(document));
			fn_callback(obj_cfg);
		}
	}
	/**@private*/
	function _fn_collect_Page_JSON (obj_target, str_htmlID){

		var str_current = _obj_COMSelf.fn_GetValue(_obj_COMSelf.query("#" + str_htmlID)[0], $(document));
		//去除掉结尾的空格
		str_current = String(str_current).rtrim();

		var obj_original;
		if(typeof _obj_COMSelf.Data[obj_target.bizObj] == "undefined" || _obj_COMSelf.Data[obj_target.bizObj].length == 0)
			obj_original = null;
		else{
			var js_dataModel = _obj_COMSelf.Data[obj_target.bizObj][0][obj_target.field];
			//去除掉结尾的空格
			obj_original = String(js_dataModel.val).rtrim();
		}
		
		if(obj_target.datatype == "int"){
			str_current = parseInt(str_current);
			obj_original = (_obj_COMSelf.UseType == "add" || _obj_COMSelf.UseType == "custom" ? null : parseInt(obj_original));
		//	if(isNaN(str_current))
		//		alert(obj_target.field + ":填入的新值数据类型不正确,值将被忽略.原始值为:" + obj_original);
		}else if(obj_target.datatype == "float"){
			str_current = parseFloat(str_current);
			obj_original = (_obj_COMSelf.UseType == "add" || _obj_COMSelf.UseType == "custom" ? null : parseFloat(obj_original));
		//	if(isNaN(str_current))
		//		alert(obj_target.field + ":填入的新值数据类型不正确,值将被忽略.原始值为:" + obj_original);
		}else{
			obj_original = (_obj_COMSelf.UseType == "add" || _obj_COMSelf.UseType == "custom" ? null : obj_original);
		}
		
		var obj_column = {
			DataTarget: obj_target.field,
			Value: str_current,
			OriginalValue: obj_original,
			PK: obj_target.isPK,
			DataType: obj_target.datatype
		};
		
		//主键，在内容中的值写了null的情况下，会被忽略，走新增默认值或者修改默认值。一般用于新增和修改界面使用同一个的情况下
		if(obj_column.PK === true && obj_column.Value == "null"){
			obj_column.Value = null;
		}
		
		if(_obj_COMSelf.UseType == "add" || _obj_COMSelf.UseType == "custom"){
			//添加时如果defatuleValue中设置的时sysIndex系统变量，则将定义回传给服务端
			if(typeof obj_target.defaultValue != "undefined" && obj_target.defaultValue.toString().search(/{sysIndex\..*?\}/g) > -1)
				obj_column["SysVar"] = obj_target.defaultValue; 
		}
		
		return obj_column;
	}
	/**@private*/
	function fn_CollectSysVar(str_filter, arr_sysVarious){
		
		var regex = new RegExp("(\{[^#]).*?(\})", "ig");
		var arr_match = str_filter.match(regex);

		if(arr_match != null){
			for(var int_count = 0; int_count < arr_match.length; int_count++){
				var str_express = arr_match[int_count];
				if (str_express.indexOf(".") > -1 && typeof arr_sysVarious[str_express] == "undefined"){
					//查找出来的表达式必须有"."并且系统变量在收集列表中不重复
					arr_sysVarious[str_express] = str_express;
				}
			}
		}
	}
	
})();

/**
 * @description 页面初始化默认值函数
 */
Fix.Engine.onStart(function() {
	//Fix.Helper.jQy_progressBar.progressbar({value: 10});
	//alert("start");
	var that = Fix.Engine;
	//_objName=customer&_usetype=add&_pk=id,asd&_pkvalue=123,sdd
	//that.Params = top.Fix.Utils.getURLParams(window.location.href);
	that.Params = Fix.getURLParams(window.location.href);

	var obj_html = document.getElementsByTagName("html");
	
	//elvis 2013-5-17 兼容性判断
	var str_FixConfig = obj_html[0].getAttribute("FixConfig");
	if(str_FixConfig === undefined || str_FixConfig == null)
		str_FixConfig = __bizObj;
	else
		eval("str_FixConfig = "+ obj_html[0].getAttribute("FixConfig"));
	//end

	that.BizObj = str_FixConfig.bizObj;
	if(that.Params._useType === undefined)
		that.Params._useType = "custom";
	that.UseType = that.Params._useType;	//add、modify、view
	
	//从url传递了相关参数，需要进行前事件处理
	var requestEventData = {};
	
	var formId = Fix.getFormId();
	
	if(that.BizObj && formId){
		requestEventData = {
			eventType:"formInitEvent",
			formType:1,
			bizObjId:that.BizObj,
			formId:formId
		};
	}
	
	that.ControlsByDetail = that.SecondDetail.fn_collectControlByDetail(that.Controls, that.Map, that.DetailGrid);
	//拼装action参数类型
	var json_action = {useType:that.UseType};	
	that.InitJSON = json_action;
	
	that.onStarted().fire();
	
	that.onBuildInitJSON().fire(that.InitJSON);

	//核心访问
	var proxy = new Fix.Component.DataVirtualProxy({
		Method: that.ConstGetDataMethod(),
		Param: that.InitJSON,
		requestEventData : requestEventData
		//ServiceURL: that.BaseURL
	});
	proxy.async = false;
	proxy.FormInteraction(that.onDataBind());
	//Fix.Helper.jQy_progressBar.progressbar({value: 60});
	$(document.body).append("<INPUT id='_ATTACHMENT_DELETE_IDS_' name='_ATTACHMENT_DELETE_IDS_' type='hidden'>");
});


Fix.Engine.onStarted(function(){
	$("[ButtonType=reset]").click(function(){
		$("input:text").val("");
		Fix.Engine.IsReset = true;
		Fix.Engine.fn_DataBind(Fix.Engine.ResultJSON.getSysVar);
		$("#_ATTACHMENT_DELETE_IDS_").val("");
	});
	$("[ButtonType=close]").click(function(){
		var curWin = top.FormWindow.get(window);
		curWin.returnValue = 'reload';
		curWin.Close();
	});
	$("[ButtonType=clean]").click(function(){
		$("input:text").val("");
		$("select").val("");
		//Fix.get("Search_0").els.Trigger.click();
	});
	
	$("textarea").val("");
});


//设置取值
Fix.Engine.onBuildInitJSON(function(obj_initJSON){
	//Fix.Helper.jQy_progressBar.progressbar({value: 20});
	var that = Fix.Engine;
	
	if(that.UseType == "add" || that.UseType == "search" || that.UseType == "custom")
		return;

	obj_initJSON["getData"] = {
		useType:that.UseType,
		objName:that.BizObj,
		relatedObj:[],
		pk:[]
	};
	
	var arr_pks = ( typeof that.Params._pk === "string" ? that.Params._pk.split(",") : [] );
	var arr_pkValue = ( typeof that.Params._pkValue === "string" ? that.Params._pkValue.split(",") : [] );
	
	//组织PK值，要求pks和pkValue中的键值数量必须相等
	for (var i=0; i < arr_pks.length; i++) {
		var str_pk = arr_pks[i];
		var str_value = (that.UseType == "modify" || that.UseType == "view" ? encodeURI(arr_pkValue[i]) : ""); //仅 修改和浏览的时候 可以带入pkValue
		obj_initJSON["getData"].pk.push({
			key:str_pk,
			value:str_value
		});
	};
	
	//收集所有表名
	var arr_MasterItems = Fix.Engine.Map.items; 
	that._fn_Map_Foreach(arr_MasterItems, function(obj_target){
		if(obj_initJSON.getData.relatedObj.indexOf(obj_target.bizObj) == -1)
				obj_initJSON.getData.relatedObj.push(obj_target.bizObj);
	});
	
	//收集明细表名，目前只实现1层明细
	var arr_DetailTable = Fix.Engine.Map.children;
	for (var i = 0; i < arr_DetailTable.length; i++) {
		var arr_DetailItems = arr_DetailTable[i].items;
		
		that._fn_Map_Foreach(arr_DetailItems, function(obj_target){
			if(obj_initJSON.getData.relatedObj.indexOf(obj_target.bizObj) == -1)
					obj_initJSON.getData.relatedObj.push(obj_target.bizObj);
		});
	}
});

//设置初始化默认值
Fix.Engine.onBuildInitJSON(function(obj_initJSON){
	//Fix.Helper.jQy_progressBar.progressbar({value: 30});
	var that = Fix.Engine;
	
	//初始化对象、初始化页面默认值，并且反馈需要后台数据的变量
	var arr_sysVar = that._fn_initDefaultValue(that.Map);
		
	obj_initJSON["getSysVar"] = {};

	//系统变量包装
	for (var str_id in arr_sysVar) {
		var str_var = arr_sysVar[str_id];

		obj_initJSON.getSysVar[str_id] = str_var;
	};
});

//设置验证
Fix.Engine.onBuildInitJSON(function(obj_initJSON){
	//Fix.Helper.jQy_progressBar.progressbar({value: 40});
	var that = Fix.Engine;

	//if(that.UseType != "search"){
		obj_initJSON["getFormVerify"] = {
				objName: that.BizObj,//url
				viewId:that.PageName
		};
	//}
});

//设置流程Toolbar
Fix.Engine.onBuildInitJSON(function(obj_initJSON){
	//Fix.Helper.jQy_progressBar.progressbar({value: 50});
	var that = Fix.Engine;
	obj_initJSON["getToolbar"]= {
		useType : that.UseType,
		objName: that.BizObj,
		viewId:that.PageName,
		defId : that.Params._defId,
		defKey : that.Params._defKey,
		instId : that.Params._instId,
		taskId:that.Params._taskId,
		nodeId:that.Params._nodeId
	};
});

//表单加载前事件
Fix.Engine.onBuildInitJSON(function(obj_initJSON){
	//Fix.Helper.jQy_progressBar.progressbar({value: 55});
	var that = Fix.Engine;
	/*
	obj_initJSON["getToolbar"]= {
		useType : that.UseType,
		defId : that.Params._defId,
		defKey : that.Params._defKey,
		instId : that.Params._instId,
		taskId:that.Params._taskId,
		nodeId:that.Params._nodeId
	};
	*/
});

//从后台获取结果数据，绑定至控件
//完成Ajax数据请求后，返回的结果
Fix.Engine.onDataBind(function(obj_JSONResult) {

	var that = Fix.Engine;
	that.onBeforeDataBind().fire(obj_JSONResult);
	that.ResultJSON = obj_JSONResult;
	

	//查询表单不做toolbar呈现
	if(that.UseType != "search"){
		//构建toolbar
		$("#ToolbarBox").empty();
		that.onSetToolbar().fire(obj_JSONResult.getToolbar);
	}else{
		that.query("#ToolbarBox").hide();
	}
	
	var obj_sysVar = obj_JSONResult.getSysVar;
	that.Verify = obj_JSONResult.getFormVerify;
	
	that.Data = obj_JSONResult.getData;
	if(that.UseType == "add" || that.UseType == "search" || that.UseType == "custom")
		that.Data = {};
	
	if(typeof Fix.Engine.Data == "undefined") { 
		alert("数据加载失败");
		/*
		var curWin = top.FormWindow.get(window);
		curWin.returnValue = 'reload';
		curWin.Close();
		return;
		*/ 
	}
	
	if( (that.UseType != "add" && that.UseType != "search" && that.UseType != "custom") && that.Data[that.BizObj] === undefined ) {
		alert("修改时，没有找到指定的记录，或未绑定任何字段");
		var curWin = top.FormWindow.get(window);
		curWin.returnValue = 'reload';
		curWin.Close();
		return;
	}
	
	//Fix.Helper.jQy_progressBar.progressbar({value: 70});
	

	Fix.Engine.fn_DataBind(obj_sysVar);
	
	Fix.Engine.onBindComplete().fire();
	/*
	if($(".ui-table-A input:first")[0]!=undefined){
		$(".ui-table-A input:first")[0].focus();
	}
	*/
	Fix.Engine.Status = "onBindComplete";
});

Fix.Engine.onBindComplete(function(){
	//view情况下将所有html组件都只读
	if(Fix.Engine.UseType == "view"){
		//$('input').attr('disabled','disabled');
		//$('textarea').attr('disabled','disabled');
		$('input').attr('readOnly','');
		$('textarea').attr('readOnly','');
		$('input').addClass("disabledStyle");
		$('textarea').addClass("disabledStyle");
		$('button').hide();
	}
	
	//Fix.Helper.jQy_progressBar.progressbar({value: 100});
	//Fix.Helper.fn_LoadClose();

	var arr_events = Fix.Engine.RegisterControlEvents;
	for(var i = 0; i < arr_events.length; i++){
		var obj_event = arr_events[i];
		var element = Fix.get(obj_event.htmlID).els;
		var str_exec = "element." + obj_event.eventID + "(obj_event.fn)";
		eval(str_exec);
	}	
	
	var that = Fix.Engine;
	if(that.Verify !== undefined){
		//预先加载验证规则
		var arr_JsRef = [];
		for(var i = 0; i < that.Verify.length; i++){
			var TO_verify = that.Verify[i];
			for(var j = 0;j < TO_verify.jsVerify.refs.length; j++){
				if(arr_JsRef.indexOf(TO_verify.jsVerify.refs[j]) == -1)
					arr_JsRef.push(TO_verify.jsVerify.refs[j]);
			}
		}
		
		var loader = new Fix.Loader(arr_JsRef, Fix.Engine.BaseURL, function(){
			return;
		});
		loader.load();
		//验证规则加载完毕
		
		//离开焦点验证
		var arr_verify = that.Verify;
		var jQy_source_id_array = [];
		var verifyIndex = {};
		for(var i = 0; i < arr_verify.length; i++){
			var TO_verify = arr_verify[i];
			TO_verify.enable = true;
			
			//验证的第一个参数是验证目标
			var arr_params = TO_verify.parameters;
			TO_ExplainedParam = Fix.Validation.engine(arr_params[0]);
			if(TO_ExplainedParam !== undefined && TO_ExplainedParam.length > 0){
				//获得验证目标，在对象上增加离开焦点验证事件的实现过程
				var jQy_source = $(TO_ExplainedParam[0].els);
				var jQy_source_id = jQy_source.attr("id");
				
				var arr_notice = jQy_source.data("notice");
				if(typeof(arr_notice) == "undefined"){
					arr_notice = [];
				}
				arr_notice.push(TO_verify);
				jQy_source.data("notice", arr_notice);
				if(TO_verify.jsVerify.errorTips !== undefined && TO_verify.jsVerify.errorTips.customHtmlID !== undefined)
					$("[id='" + TO_verify.jsVerify.errorTips.customHtmlID + "']").empty();
				
				if(verifyIndex[jQy_source_id]==undefined){
					verifyIndex[jQy_source_id] = {};
					verifyIndex[jQy_source_id].trigger = "";
				}
				verifyIndex[jQy_source_id].trigger += TO_verify.jsVerify.trigger+",";
				verifyIndex[jQy_source_id].els = jQy_source;
			}
		}
		for(var x in verifyIndex){
			var trigger = verifyIndex[x].trigger;
			var jQy_source = verifyIndex[x].els;
			if(trigger.indexOf("blur")>-1){				
				jQy_source.focusout(function(){
					if(top.$("#_my97DP").is(":visible")){
						return;
					}
					var $ul = $("<ul></ul>");
					var arr_notification = $(this).data("notice");
					var errMsg= "";
					var errFlag = true;
					for(var int_verifies = 0; int_verifies < arr_notification.length; int_verifies++ ){
						var this_verify = arr_notification[int_verifies];
						if(!this_verify.enable)continue;
						var TO_explained = Fix.Validation.explainRule(this_verify);
						var var_PassParam = TO_explained.param;
						var TO_message = TO_explained.TO_message;
						errMsg = eval(TO_explained.exp);
						
						if(errMsg==""&&errFlag){
							var param = var_PassParam[0];
							Fix.Runtime.clearError(param[0].els);
						}else{
							var $li = $("<li>"+errMsg+"</li>");
							$ul.append($li);
							//Fix.Runtime.setError($ul[0].outerHTML);
							errFlag = false;
						}
					}
					if(!errFlag)
						Fix.Runtime.setError($ul[0].outerHTML);
				});
			}
			
			jQy_source.bind("focusin, click", (function(){
				Fix.Runtime.clearError(this);
			}));
		}
		//完毕
	}	
	
	Fix.Calculation.collect();
	
	var focusables = $(":focusable");

	focusables.keypress(function(e) {
	    if (e.keyCode === 13) {
	    	//如果textarea多行则不需要将焦点自动移到下一个对象上去
	    	if(e.srcElement.nodeName.toLowerCase() == "textarea")
	    		return true;
	        var current = focusables.index(this),
	            next = focusables.eq(current + 1).length ? focusables.eq(current + 1) : focusables.eq(0);
	        next.focus();
	        return false;
	    }
	});
});

//elvis 2013-3-28 增加接受配置参数
Fix.Engine.onSubmit(function(btn_source, opts){
	var that = Fix.Engine;
	that.onBeforeCollect().fire();
	that.PassedVerify = true; 
	//表单验证并提交
	var json = that.collect();

	//elvis 2013-3-28 增加接受配置参数
	//that.onVerify().fire(btn_source, opts);
	
	//that.PassedVerify = true;
	//用于事件注入的参数
	/*********************************/
	if(opts.isVerification != "false"){
		that.PassedVerify = verifyRule();
	}else{
		that.PassedVerify = true;
	}
	/*********************************/
	var requestEventData = {};
	var bizObjId = that.BizObj;
	var formId = Fix.getFormId();
	var buttonId = "";
	if(btn_source !== undefined){
		if(btn_source.setting && btn_source.setting.id)
			buttonId = btn_source.setting.id;
		else{
			var btn_id = $(btn_source).attr("btn_id");
			if(btn_id)
				buttonId = btn_id;
		}
	}
	
	
	if(bizObjId && formId && buttonId){
		requestEventData = {
			eventType : "formSubmitEvent",
			formType : 1,
			bizObjId : bizObjId,
			formId : formId,
			buttonId : buttonId
		};
	}
	
	
	if(that.PassedVerify)
	{
		if(btn_source !== undefined && btn_source.obj !== undefined && btn_source.obj.disable !== undefined)
			btn_source.obj.disable(true);
		
		//外部附加数据，通过该属性预先设置，提交前做合并
		if(that.CollectedJSON !== undefined)
			that.CollectedJSON = $.extend(true, that.CollectedJSON, json);
		
		that.onBeforeSubmit().fire(btn_source);
		var proxy = new Fix.Component.DataVirtualProxy({
			Method: that.ConstSetDataMethod,
			Param: that.CollectedJSON,
			requestEventData : requestEventData
		});
		try{
			var IEVersion = document.documentMode;
			if (IEVersion == undefined || IEVersion > 8) {
				$.blockUI({message:"正在处理，请稍候..."});
			}
			proxy.FormInteraction(that.onSubmitted(btn_source));
		}catch(e){
			that.SubMitMessage = "保存完成";
			
			$.unblockUI();
		}finally{
			
			that.CollectedJSON = {};
			if(btn_source !== undefined && btn_source.obj !== undefined && btn_source.obj.disable !== undefined){
				btn_source.obj.enable(true);
			}
			if($(btn_source).hasClass("isDisabled")){
				$(btn_source).removeClass("isDisabled").removeClass("disable");
			}
		}
	}
});

//elvis 2013-3-27 接收参数
Fix.Engine.onVerify(function(btn_source, opts){
	var _obj_COMSelf = Fix.Engine;
	//_obj_COMSelf.PassedVerify = true;
	
	//elvis 2013-3-28 该按钮是否激发验证
	if(opts === undefined || opts == null)
		opts = {};
	
	if(opts.isVerification !== undefined && opts.isVerification == "false")
		return;
	
	var arr_verify = _obj_COMSelf.Verify;
	//提交时验证全部的规则，doublecheck all rule
	var errMsg = ""
	for(var i = 0; i < arr_verify.length; i++){
		var TO_verify = arr_verify[i];
		if(TO_verify.enable == false)continue;
		var TO_explained = Fix.Validation.explainRule(TO_verify);
		if(TO_explained === false){
			//页面没有绑定需要验证的字段或者控件
		}else{
			var var_PassParam = TO_explained.param;
			
			//elvis 2013-3-27 验证信息
			if(var_PassParam[0].length >0){
				var target_vg = "";
				if(var_PassParam[0][0].cfg !== undefined)
					target_vg = var_PassParam[0][0].cfg.validationgroup;

				if(target_vg === undefined)	target_vg = "";
				
				var source_vg = opts.validationgroup;
				if(source_vg === undefined)	source_vg = "";
				
				if(target_vg != source_vg)
					continue;
			}

			
			var TO_message = TO_explained.TO_message;
			//eval("Fix.Engine.PassedVerify = Fix.Engine.PassedVerify & " + TO_explained.exp);
			var msg = eval(TO_explained.exp);
			if(msg!=""&&i < arr_verify.length){
				errMsg += eval(TO_explained.exp) + "<br>";
			}else if(msg!=""&&i==arr_verify.length-1){
				errMsg += eval(TO_explained.exp);
			}else{
				continue;
			}
		}
	}
	Fix.Engine.PassedVerify = verifyRule();
	if(errMsg!=""){
		Fix.Runtime.clearError();
		Fix.Runtime.setError(errMsg);
		Fix.Engine.PassedVerify = false;
	}
	//Fix.Engine.PassedVerify = Boolean(Fix.Engine.PassedVerify);
});

//用于流程模拟运行的时候弹出人员确认选择 add by qianjun 2013.3.13 
Fix.Engine.onFlowSimulate(function(btn, args){
	var flowParam = args.flowParam;
	var callBack = args.callBack;
	var taskInstList = btn._flow_result_obj;
	var flowEndTime = btn.flowEndTime;
	//下一步还有未处理的任务，或者流程已经结束的时候(弹出结束提醒)
	if(taskInstList && (taskInstList.length > 0 || flowEndTime != "")){
		
		
		var height = "450";
		var width = "450";
		var title = "确定流程处理人";
		var draggableConfig = {
				height:height,
				width:width,
				title:title,
				containerType:"div"
		};
		var JQDialog = new top.Fix.Component.JQDialog(draggableConfig);
		var $container = JQDialog.draw();
		var _theme = $.cookie('_FixTheme');
    	if(_theme == null){
    		_theme = window.localStorage.FixTheme;
    	}
		var tplUrl = Fix.App.getHost()+"theme/"+_theme+"/template/flow_confirmProcesser.tpl";
		if(taskInstList.length == 0){
			title = "提示信息";
			tplUrl = Fix.App.getHost()+"theme/"+_theme+"/template/flow_confirmProcesserNoTask.tpl";
		}
		
		
		$.get(tplUrl,{}, function(tplContent){
			$container.append(tmpl(tplContent, taskInstList));
			$("#closeBtn",$container).click(function(){
				JQDialog.remove();
				
			});
			
			$("#okBtn",$container).click(function(){
				var selectInfo = [];
				$("select", $container).each(function(i,selected){
					//var taskId = selected.id;
//					if($(selected).attr("disabled") == "" || $(selected).attr("disabled") == false){				
						var nodeId = selected.id;
						var processer = $(selected).val();
						selectInfo.push({
							nodeId : nodeId, 
							processer : processer
						});
//					}
//					else{
					
//					}
				});
				
				Fix.Engine.CollectedJSON["selectInfo"] = selectInfo;
				Fix.Engine.CollectedJSON.flowParam.isSimulationRun = false;
			
//				Fix.Engine.onSubmitted(function(btn){
//					JQDialog.remove();
//				});
//				
				JQDialog.remove();
				//callBack({});
				
				//btn.addClass("isDisabled");
				//btn.addClass("disable");
				//添加一个btn_id属性，否则不会拼接reuqestEventData,不会执行表单保存前后时间  qj 2013.05.03
				btn.btn_id = "okBtn";
				Fix.Engine.formSubmit(btn,args);
				
			});
		},"text");
		JQDialog.show();
	}else{
		//如果没有返回任务信息 则直接执行callback，比如流程全部处理完毕时
		Fix.Engine.CollectedJSON.flowParam.isSimulationRun = false;
		callBack({});
		
		
	}
});


