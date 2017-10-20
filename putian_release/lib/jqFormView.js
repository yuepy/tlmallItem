/**
 * @fileOverview SimpleGrid组件
 * @author elvis
 * @version 1.0
 */

/** 
 * @class JQFormView组件类
 * @constructor JQFormView
 * @param {JSON} configJSON 组件配置属性
 */
Fix.Component.JQFormView = (function(configJSON){
	/** @lends Fix.Component.JQFormView */
	var _className = "Fix.Component.JQFormView";
	var _obj_COMSelf;
	var _dataConfig = configJSON.Data;
	var _regEvents = configJSON.event;
	var _templateID = configJSON.templateID;
	
	if(_dataConfig === undefined)
		_dataConfig = {};
	var _countMethod = _dataConfig.countMethod;
	if(_countMethod === undefined)
		_countMethod = "selectCount";
	
	var _container;
	var _store;
	
	var _Type = "Presenter";
	var _BaseFramework = "jQuery";
	
	var _initEvent = new Fix.Event();
	var _drawEvent = new Fix.Event();
	var _selectValueEvent = new Fix.Event();
	var _rendered = new Fix.Event();
		
	return{
		/**
		 * @description 组件ID，通过该ID可以获取到组件
		 * @field
		 */
		htmlID: configJSON.htmlID,
		/**
		 * @description 可选，组件的引用容器
		 * @field
		 */
		obj: configJSON.obj,
		/**
		 * @description 组件类型
		 * @field
		 */
		Type: (function(){return _Type;})(),
		/**
		 * @description 组件所使用的基本框架（如JQuery、ExtJs等）
		 * @field
		 */
		BaseFramework: (function() {return _BaseFramework;})(),
		/**
		 * @description 是否异步请求数据
		 * @field
		 */
		async: true,
		/**
		 * @description 注册组件初始化事件
		 * @param {function} fn 组件初始化方法
		 */
		onInit: function(fn){return Fix.Helper.fn_registerEvent(fn, _initEvent);},
		/**
		 * @description 注册组件绘制事件
		 * @param {function} fn 组件绘制方法
		 */
		onDraw: function(fn){return Fix.Helper.fn_registerEvent(fn, _drawEvent);},
		/**
		 * @description 注册选值事件
		 * @param {function} fn 组件选值方法
		 */
		onSelectValue: function(fn){return Fix.Helper.fn_registerEvent(fn, _selectValueEvent);},
		/**
		 * @description 注册组件呈现事件
		 * @param {function} fn 组件呈现方法
		 */
		onRendered: function(fn){return Fix.Helper.fn_registerEvent(fn, _rendered);},
		/**
		* @description 初始化方法
		* @param {Object[]} obj_packages 后台返回的数据
		*/
		init: function(obj_packages){
			_store = obj_packages;
		},
		/**
		 * @description 组件绘制方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		draw: function(jQy_scope){
			
			if(typeof jQy_scope == "undefined")
				jQy_scope = $(document);
			
			_obj_COMSelf = this;
			
			_container = $("#" + configJSON.htmlID, jQy_scope);
			if(!this.obj)
				this.obj = _container;
				
			if(typeof Fix.DesignerMode != "undefined") {
				_dataConfig.NeedPaging=false;
				_dataConfig.Fields="a,b,c";
				var arr_fields = _dataConfig.Fields.split(",");
				var arr_header = _header;
				var obj_datas = {};
				for (var i=0; i < arr_header.length; i++) {
					obj_datas[arr_fields[i]] = i;
				};
				//设计环境运行，默认填充本地变量
				fnData_Render({datas:[obj_datas,obj_datas,obj_datas,obj_datas,obj_datas]}, [this]);
			} else {
				var obj_adapter ;
				try{
					obj_adapter = new Fix.Component.DataAdapter(_dataConfig);
				}catch(e){
					alert(configJSON.htmlID + ":" + e.description);
					return;
				}
				
				if(typeof(_store) != "undefined"){
					
					fnData_Render(_store, [jQy_scope]);
				}				
				else
				{
					if(Fix.Engine !== undefined && Fix.Engine.fn_calculate !== undefined)
						obj_adapter.Filter = Fix.Engine.fn_calculate(_dataConfig.Filter, jQy_scope);
					obj_adapter.getData(fnData_Render, [jQy_scope]);
				}
			}
			
			Fix.Helper.fn_registerCOMEvent(_obj_COMSelf, _regEvents);
			this.onDraw().fire(this.obj);
		},
		/**
		 * @description view页面时不做隐藏操作
		 */
		disable:function(){
			
		},
		/**
		 * @description 翻页
		 * @param {Num} newIndex 页码索引
		 * @param {Num} pageSize 分页大小
		 */
		pageIndexChange: function(newIndex, pageSize){
			_dataConfig.CurrentPageIndex = newIndex;
			_dataConfig.PageSize = pageSize;
			_obj_COMSelf.draw();
		}
	};
	/**
	 * @private 
	 */
	function fnData_Render(obj_package){
		var _tplUrl = configJSON.tplUrl;
		if(_tplUrl === undefined || _tplUrl == "")
			throw new Fix.Exception("URL_IS_REQUIRED", _className);
		
		var taskData = [];
		var datas = obj_package.datas;
		//$("#mytask_menu").append("(" + taskList.length + ")");
		
		_container.empty();
		//_container.append('<script type="text/x-tmpl" id="tpl_formView"></script>');
		
		if(window.localStorage.Local !== undefined && window.localStorage.Local != "undefined" && window.localStorage.Local != "defauld")
			_tplUrl = _tplUrl + "." + window.localStorage.Local;
		
		$.get(_tplUrl,{},function(tplContent){
        	//$("#tpl_formView", _container).html(data);
        	
			if(datas.length > 0)
				_container.append(tmpl(tplContent, datas));
			else
				_container.append(Fix.Global["{@nodata}"]);//"没有对应数据"
    		
    		
    		if(_dataConfig.NeedPaging === true){
    			var $pagine_panel = $("<div id='pagine_panel'></div>");
    			_container.append($pagine_panel);
    			
    			if(_dataConfig.CurrentPageIndex === undefined)
    				_dataConfig.CurrentPageIndex = 1;
    			
    			var _obj_dataConfig = $.extend({}, _dataConfig);
    			if(Fix.Engine !== undefined && Fix.Engine.fn_calculate !== undefined)
    				_obj_dataConfig.Filter = Fix.Engine.fn_calculate(_obj_dataConfig.Filter, jQy_scope);
    			
    			var page_config = {
    				obj:$pagine_panel,
    				Target:_obj_COMSelf,
    				DataConfig:_obj_dataConfig
    			};
    			
    			var pagination = new Fix.Component.JQPagination(page_config);
    			pagination.init();
    			pagination.draw();
    		}
    		
    		_obj_COMSelf.onRendered().fire();
		}, "text");
	}
});