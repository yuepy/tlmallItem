/**
 * @fileOverview AD_Project组件
 * @author elvis
 * @version 1.0
 */

/** 
 * @class AD_Project组件类
 * @constructor AD_Project
 * @param {JSON} configJSON 组件配置属性
 */
Fix.Component.AD_Project = (function(configJSON) {
	/** @lends Fix.Component.AD_Project */
	//var private_var = configJSON.property
	var _obj_COMSelf;
	var _dataConfig = configJSON.Data;
	var _Type = "DataEntity";
	var _BaseFramework = "jQuery";
	var _regEvents = configJSON.event;
	var _COMConfig = {
			label : "PROJECT_NAME",
			value : "PROJECT_ID",
			maxItem : "8",
			minLength : "1",
			title : "项目选择",
			name : "选择",
			isHaveText : true,
			height : "550",
			width : "800",
			url : "theme/FixCS/StandardUniform.html?_objName=PT_PROJECT_INFO&_viewId=PROVIEW",
			valueId : "PROJECT_ID"
	};
	var $inputValue;
	var _initEvent = new Fix.Event();
	var _drawEvent = new Fix.Event();
	var _feedbackEvent = new Fix.Event();
	var _triggerClickEvent = new Fix.Event();
	var _selectValueEvent = new Fix.Event();
	var _rendered = new Fix.Event();
	_dataConfig = {
			BizObj : "PT_PROJECT_INFO",
			Service: "selectMore",
			Fields : "PROJECT_ID,PROJECT_NAME"			
		};
	
	return {
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
		Type: (function(){
			return _Type;
		})(),
		/**
		 * @description 验证图标所在html元素
		 * @field
		 */
		HtmlEntity:{},
		/**
		 * @description 是否异步请求数据
		 * @field
		 */
		BaseFramework: (function() {return _BaseFramework;})(),
		/**
		 * @description 组件容器
		 * @field
		 */
		Container:{},
		/**
		 * @description 是否异步请求数据
		 * @field
		 */
		async: true,
		/**
		 * @description 注册组件初始化事件
		 * @param {function} fn 组件初始化方法
		 */
		onInit: function(fn){
			return Fix.Helper.fn_registerEvent(fn, _initEvent);
		},
		/**
		 * @description 注册组件绘制事件
		 * @param {function} fn 组件绘制方法
		 */
		onDraw: function(fn){
			return Fix.Helper.fn_registerEvent(fn, _drawEvent);
		},
		/**
		 * @description 注册选值事件
		 * @param {function} fn 组件选值方法
		 */
		onSelectValue: function(fn){
			return Fix.Helper.fn_registerEvent(fn, _selectValueEvent);
		},
		/**
		 * @description 注册组件呈现事件
		 * @param {function} fn 组件呈现方法
		 */
		onRendered: function(fn){
			return Fix.Helper.fn_registerEvent(fn, _rendered);
		},
		/**
		* @description 初始化方法
		* @param {Object[]} obj_packages 后台返回的数据
		*/
		onFeedback: function(fn){return Fix.Helper.fn_registerEvent(fn, _feedbackEvent);},
		/**
		 * @description 注册单击触发器事件
		 * @param {function} fn 单击触发器时调用的方法
		 */
		onTriggerClick: function(fn){return Fix.Helper.fn_registerEvent(fn, _triggerClickEvent);},
		/**
		* @description 初始化方法
		* @param {Object[]} obj_packages 后台返回的数据
		*/
		init: function(obj_packages){
			_obj_COMSelf = this;
			var obj_datas = obj_packages;
			
			this.onInit().fire(this.obj);
		},
		/**
		 * @description 组件绘制方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		draw: function(jQy_scope){
			if(typeof jQy_scope == "undefined")
				jQy_scope = $(document);
			
			_obj_COMSelf = this;
			if(typeof _obj_COMSelf.obj == "undefined"){
				if(typeof jQy_scope == "undefined")
					jQy_scope = $(document);
				
				_container = $("#" + configJSON.htmlID, jQy_scope);
			}else{
				_container = _obj_COMSelf.obj;
			}
			_obj_COMSelf.Container = _container;
			_container.empty();
			
			var $btn =$("<div class='ui-button-FixCS-small'><a href='javascript:void(0)'><span>"+_COMConfig.name+"</span></a></div>");  
			$btn.css({"float":"left","margin":"0px"});
			
			var inputValue = configJSON.htmlID+"_input_Project";
			var $tr = $("<tr></tr>");
			$inputValue = $("<input id='"+configJSON.htmlID+"_input' input Type='text' readonly='readonly'/>");
			$inputValue.css({"float":"left","width":"100%"});
			$tr.append($("<td style='width:83%'></td>").append($inputValue));
			var $td = $("<td></td>");
			$tr.append($td.append($btn));
			_container.append($("<table width='100%' cellspacing='0' cellpadding='0' border='0' class='ui-table-clear'></table>").append($tr));
			//$td.css("width", "100px");
			
			if(configJSON.AD_Project.readonly)
				$inputValue.attr("readonly", "readonly");
			
			this.HtmlEntity = $inputValue;

			$inputValue.keyup(function(obj){
			  var filterValue = $(this).val();//过滤条件
			  if (filterValue!=null&&filterValue!="")
			  {
				  _dataConfig.Filter = ""+_COMConfig.label+" like'%"+filterValue+"%'";
			  }
			 
			  var obj_adapter ;
				try{
					obj_adapter = new Fix.Component.DataAdapter(_dataConfig);
					obj_adapter.async = false;
				}catch(e){
					alert(configJSON.htmlID + ":" + e.description);
					return;
				}
				obj_adapter.Filter = Fix.Engine.fn_calculate(_dataConfig.Filter, jQy_scope);
				obj_adapter.getData(auto, [jQy_scope,$(this)]);
			});
			
			var param = {};
			param.title = _COMConfig.title;
			param.width = _COMConfig.width;
			param.height = _COMConfig.height;
			param.containerType = "iframe";
			param.url = _COMConfig.url;
			var parentURL = window.parent.location.href;
			$btn.click(function(){
				_obj_COMSelf.onTriggerClick().fire(_COMConfig, jQy_scope);
				
				//elvis 2012-12-8 url配置中可以解析别名表达式
				if(Fix.Engine !== undefined && Fix.Engine.fn_calculate !== undefined)
					param.url = _COMConfig.url;
				
				if(parentURL.indexOf('index.html') != -1){
					param.url = "../../"+ _COMConfig.url;
				}

				Fix.Manager.createDialog(param, function(instObj){
					var returnValue =instObj.getData();
					if(_COMConfig.isHaveText){
						$inputValue.val(returnValue.record[0].PROJECT_NAME);
						$inputValue.attr("title",returnValue.record[0].PROJECT_NAME);
						$inputValue.data("val",returnValue.record[0].PROJECT_ID);
						$inputValue.attr("FixVal",returnValue.record[0].PROJECT_ID);
						$inputValue.attr("FixDis",returnValue.record[0].PROJECT_NAME);
						_obj_COMSelf.onSelectValue().fire($inputValue.data("val"));
					}
					if(typeof _obj_aliasConfig != "undefined"){
						/*if(configJSON.AD_Project.isHaveText){
							$inputValue.val(returnValue.pkValue);
						}*/
						var obj_aliasAdapter = new Fix.Component.AliasAdapter(_obj_aliasConfig);
						obj_aliasAdapter.fill([returnValue, returnValue], jQy_scope);
					}
					_obj_COMSelf.onFeedback().fire(returnValue,jQy_scope);
					//$inputValue.val(returnValue);
					//Fix.Uniform.refresh();
				}, top);
			});

			_obj_COMSelf.Trigger = $btn;
			Fix.Helper.fn_registerCOMEvent(_obj_COMSelf, _regEvents);
			_obj_COMSelf.onDraw().fire(_obj_COMSelf.Container);
		},
		/**
	 	 * @description 初始化组件时，对组件赋值
		 * @param {String} str_values 组件的值
		 */
		setValue: function(str_value){
			/**
			 * TODO: 需要自己实现代码逻辑
			 * _obj_COMSelf.obj.val(str_value);
			 */
			if($inputValue){
				if (_obj_COMSelf.Container) {
					$inputValue.val(_obj_COMSelf.Container.attr("fixdis"));
					$inputValue.attr("FixVal",_obj_COMSelf.Container.attr("fixval"));
					$inputValue.attr("FixDis",_obj_COMSelf.Container.attr("fixdis"));
					$inputValue.data("val",_obj_COMSelf.Container.attr("fixval"));
				}
				else 
					$inputValue.val(str_value);
			
			}
		},
		/**
		 * @description 提交时，对组件取数据值
		 */
		getData: function(){
			/**
			 * TODO: 需要自己实现代码逻辑
			 * return _obj_COMSelf.obj.val();
			 */
			if($inputValue&&$inputValue.data("val") !== undefined)
				return $inputValue.data("val");
			else
				return "";
		},
		/**
		 * @description 提交时，对组件取文本值
		 */
		getText: function(){
			/**
			 * TODO: 需要自己实现代码逻辑
			 * return _obj_COMSelf.obj.text();
			 */
		}
	};
	/**
	 * @private
	 */
	 function auto(obj_package, arr_args){
		var arr_values=[];
		for(var i=0; i < obj_package.datas.length; i++){
			var obj_data = obj_package.datas[i];
			var TO_item = {};
			$.extend(TO_item, obj_data);
			TO_item["value"] = obj_data[_COMConfig.label];
			TO_item["label"] = obj_data[_COMConfig.label];
			TO_item["valueId"] = obj_data[_COMConfig.valueId];
			if(_COMConfig.category !== undefined && _COMConfig.category != "")
				TO_item["category"] = _COMConfig.category;
			arr_values.push(TO_item);
		}
		arr_args[1].autocomplete({
			source: arr_values,
			select: function(event, ui){
				$inputValue.attr("FixVal",ui.item.valueId);
				$inputValue.attr("FixDis",ui.item.value);
				$inputValue.data("val",ui.item.valueId);
				_obj_COMSelf.onSelectValue().fire(ui);
			}/*,
			change: function(event, ui){
				$inputValue.val(ui.item.label);
			}*/
		});
	 };
});
