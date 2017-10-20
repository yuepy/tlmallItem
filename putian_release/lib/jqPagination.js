/**
 * @fileOverview JQPagination组件
 * @author elvis
 * @version 1.0
 */

/** 
 * @class JQPagination组件类
 * @constructor JQPagination
 * @param {JSON} configJSON 组件配置属性
 */
Fix.Component.JQPagination = (function(configJSON) {
	/** @lends Fix.Component.JQPagination */
	var _obj_COMSelf;
	var _obj_dataConfig = configJSON.DataConfig;
	
	var _pageSize = _obj_dataConfig.PageSize;
	var _records = configJSON.Records;
	var _pages = configJSON.Pages;
	
	var _currentPageIndex ;
	if(_obj_dataConfig.CurrentPageIndex !== undefined)
		_currentPageIndex = _obj_dataConfig.CurrentPageIndex;
	else
		_currentPageIndex = 1;
	
	var _regEvents = configJSON.event;
	var _container;
	var _width = configJSON.Width;
	
	var _Type = "Presenter";
	var _BaseFramework = "jQuery";
	
	var _countMethod = _obj_dataConfig.countMethod;
	if(_countMethod === undefined || _countMethod == "")
		_countMethod = "selectCount";
	
	var targetObj;
	
	var _initEvent = new Fix.Event();
	var _drawEvent = new Fix.Event();
	var _selectValueEvent = new Fix.Event();
	var _rendered = new Fix.Event();
	
	return{
		/**
		 * @description 可选，组件的引用容器
		 * @field
		 */
		obj: configJSON.obj,
		/**
		 * @description 组件ID，通过该ID可以获取到组件
		 * @field
		 */
		id: configJSON.htmlID,
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
		init:function(){
			_obj_COMSelf = this;
			
			if(typeof _obj_COMSelf.obj == "undefined"){
				if(typeof jQy_scope == "undefined")
					jQy_scope = $(document);
				
				_container = $("#" + configJSON.htmlID, jQy_scope);
			}else{
				//从外界初始化好了obj，这种情况是该组件放在了容器中进行了组合
				//此时scope参数为容器的触发器所在的位置
				_container = $(_obj_COMSelf.obj);
			}
			
		},
		/**
		 * @description 组件绘制方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		draw:function(jQy_scope){
			targetObj = configJSON.Target;
			
			//var _obj_dataConfig = $.extend({}, _dataConfig);
			_currentPageIndex = _obj_dataConfig.CurrentPageIndex;
			_pageSize = _obj_dataConfig.PageSize;

			_obj_dataConfig.Service = _countMethod;
			var obj_adapter;
			try{
				obj_adapter = new Fix.Component.DataAdapter(_obj_dataConfig);
			}catch(e){
				alert(configJSON.htmlID + ":" + e.description);
				return;
			}
			
			if(Fix.Engine !== undefined && Fix.Engine.fn_calculate !== undefined)
				obj_adapter.Filter = Fix.Engine.fn_calculate(_obj_dataConfig.Filter, jQy_scope);
			obj_adapter.getPaginate(_fn_JQPagination_render, [jQy_scope, targetObj,_currentPageIndex]);
		},
		/**
		 * @description 为了世纪互联的draw方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		drawAll: function(page_config){
			targetObj = page_config.Target;
			var int_currentIndex = page_config.DataConfig.currentPageIndex;
			var int_totalcount = page_config.DataConfig.dataCount;
			var int_pageSize = page_config.DataConfig.pageSize;
			
			var opt = {
				load_first_page:false,
				current_page:--int_currentIndex,
				callback: pageselectCallback, 
				items_per_page:int_pageSize,
				prev_text: "",
				next_text: "",
				first_text:"",
				last_text:"",
				link_to:"javascript:void(0)"
			};
			$div_container = $("<div style='overflow:auto;line-height: 24px;'></div>").css({width:_width});
			var $div_pagine = $("<div style='float:left;padding:2px'></div>");
			var $input_pagesize = $("<input type=text size=3 maxlength=3 class='ui-input-pagesize'/>");
			
			_container.empty();
			_container.append($div_container);
			
			$input_pagesize.val(int_pageSize);
			$input_pagesize.blur(function(event){
				changePage(this.value, targetObj);
				event.preventDefault();
			});
			$input_pagesize.keypress(function(event){
				if ( event.which == 13 ) {
					//changePage(this.value, targetObj);
					event.preventDefault();
				}
			});
			
			var $div_pagesize = $("<div style='float:right'></div>");
			$div_pagesize.append(Fix.Global["{@page}"]);//"每页"
			$div_pagesize.append($input_pagesize);//
			$div_pagesize.append(Fix.Global["{@record}"]);//"条"
			 
			$div_container.append("<div style='float:left;padding:2px'>[" + Fix.Global["{@total}"] + "<label id='totalPage'>" + int_totalcount + "</label> " + Fix.Global["{@totalrecord}"] + "]</div>");
			$div_container.append($div_pagine);
			$div_container.append($div_pagesize);
			$div_pagine.pagination(int_totalcount, opt);
		},
		/**
		 * @description 组件呈现方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		render: function(jQy_scope){
			if(Fix.DesignerMode == true){
				_fn_JQPagination_render({paginate:{allList:1}}, [{},{}]);
			}else{
				targetObj = configJSON.Target;
				_fn_JQPagination_render({
					paginate:{
						allList:_records,
						pageSize:_pageSize
					}
				}, [jQy_scope,targetObj,_currentPageIndex]);
			}

			Fix.Helper.fn_registerCOMEvent(_obj_COMSelf, _regEvents);
			_obj_COMSelf.onDraw().fire(_container);
		},
		/**
		 * @description view页面时不做隐藏操作
		 */
		disable:function(){
			
		}
	};
	/**
	 * @private 
	 */
	function _fn_JQPagination_render(obj_package, arr_args){
		
		var targetObj = arr_args[1];
		var int_currentIndex = arr_args[2];
		var int_totalcount = obj_package.paginate.allList;
		var int_pageSize = obj_package.paginate.pageSize;
		
		var opt = {
			load_first_page:false,
			current_page:--int_currentIndex,
			callback: pageselectCallback, 
			items_per_page:int_pageSize,
			prev_text: "",
			next_text: "",
			first_text:"",
			last_text:"",
			link_to:"javascript:void(0)"
		};
		$div_container = $("<div style='overflow:auto;line-height: 24px;'></div>").css({width:_width});
		var $div_pagine = $("<div style='float:left;padding:2px'></div>");
		var $input_pagesize = $("<input type=text size=3 maxlength=3 class='ui-input-pagesize'/>");
		
		_container.empty();
		_container.append($div_container);
		
		$input_pagesize.val(int_pageSize);
		$input_pagesize.blur(function(event){
			changePage(this.value, targetObj);
			event.preventDefault();
		});
		$input_pagesize.keypress(function(event){
			if ( event.which == 13 ) {
				//changePage(this.value, targetObj);
				event.preventDefault();
			}
		});
		
		var $div_pagesize = $("<div style='float:right'></div>");
		$div_pagesize.append(Fix.Global["{@page}"]);//"每页"
		$div_pagesize.append($input_pagesize);//
		$div_pagesize.append(Fix.Global["{@record}"]);//"条"
		
		//_container.pagination(int_totalcount, opt);
		 
		$div_container.append("<div style='float:left;padding:2px'>[" + Fix.Global["{@total}"] + "<label id='totalPage'>" + int_totalcount + "</label> " + Fix.Global["{@totalrecord}"] + "]</div>");
		$div_container.append($div_pagine);
		$div_container.append($div_pagesize);
		$div_pagine.pagination(int_totalcount, opt);
	}

	
	/**
     * @private
     */
	function pageselectCallback(page_index, jq){
        // Get number of elements per pagionation page from form
        //var items_per_page = _pageSize;
        //var max_elem = Math.min((page_index+1) * items_per_page, int_totalcount);
		targetObj.pageIndexChange(++page_index, _pageSize);
        
		// Prevent click event propagation
        return false;
    }
	
	function changePage(str_value, targetObj){
		
		int_pageSize = str_value;
		
		var regExp   =   /^\+?[1-9][0-9]*$/;//正整数   
		
		if ( !regExp.test(int_pageSize) )
		{
			alert("请输入合法的数字");
			return ;
		}
		if ( !regExp.test(int_pageSize) )
		{
			alert("请输入合法的数字");
			return ;
		}
		if ( Number(int_pageSize) > 500 ) 
		{
			alert('每页数超出范围,最大500');
			return ;
		}
		
		//targetCfg.Data.CurrentPageIndex = 1;
		//_obj_COMSelf.draw();
		targetObj.pageIndexChange(1, int_pageSize);
		
	}
});