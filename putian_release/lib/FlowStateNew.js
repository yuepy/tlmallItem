/**
 * @fileOverview NewFlowState组件
 * @author Rex
 * @version 1.0
 */

/** 
 * @class NewFlowState组件类
 * @constructor NewFlowState
 * @param {JSON} configJSON 组件配置属性
 */
Fix.Component.FlowStateNew = (function(configJSON) {
	/** @lends Fix.Component.FlowStateNew */
	var _className = "Fix.Component." + configJSON.func;
	var _obj_COMSelf;
	var _dataConfig;
	var _Type = "Presenter";
	var _BaseFramework = "jQuery";
	var _container;
	var _regEvents = configJSON.event;
	var _initEvent = new Fix.Event();
	var _drawEvent = new Fix.Event();
	var _selectValueEvent = new Fix.Event();
	var _rendered = new Fix.Event();
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
		Type: (function() {return _Type;})(),
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
		 * @description 组件容器
		 * @field
		 */
		Container:{},
		/**
		 * @description 验证图标位置
		 * @field
		 */
		Position:{offset:"-21 3"},
		/**
		 * @description 注册组件初始化事件
		 * @param {function} fn 组件初始化方法
		 */
		onInit: function(fn) {return Fix.Helper.fn_registerEvent(fn, _initEvent);},
		/**
		 * @description 注册组件绘制事件
		 * @param {function} fn 组件绘制方法
		 */
		onDraw: function(fn) {return Fix.Helper.fn_registerEvent(fn, _drawEvent);},
		/**
		 * @description 注册选值事件
		 * @param {function} fn 组件选值方法
		 */
		onSelectValue: function(fn) {return Fix.Helper.fn_registerEvent(fn, _selectValueEvent);},
		/**
		 * @description 注册组件呈现事件
		 * @param {function} fn 组件呈现方法
		 */
		onRendered: function(fn) {return Fix.Helper.fn_registerEvent(fn, _rendered);},
		/**
		* @description 初始化方法
		* @param {Object[]} obj_packages 后台返回的数据
		*/
		init: function(obj_packages){
			//this.draw();
		},
		/**
		 * @description 组件绘制方法
		 * @param {Object} jQy_scope 组件所在容器
		 */
		draw: function(jQy_scope) {
			if(typeof jQy_scope == "undefined")
				jQy_scope = $(document);
			
			_obj_COMSelf = this;
			if(typeof _obj_COMSelf.obj == "undefined"){
				if(typeof jQy_scope == "undefined")
					jQy_scope = $(document);
				
				_container = $("#" + configJSON.htmlID, jQy_scope);
			}else{
				//从外界初始化好了obj，这种情况是该组件放在了容器中进行了组合
				//此时scope参数为容器的触发器所在的位置
				_container = _obj_COMSelf.obj;
			}
			var urlParam = Fix.getURLParams(window.location.href);
			var instId = urlParam["_instId"];
			var defKey = urlParam["_defKey"];
			if(instId){
				$div = $("<div class='process'></div>").appendTo(_container);
				$div1 = $("<div class='bgs'><h3><span id='clz'>处理中</span></h3><div id='taskNotDoneTb'></div></div>").appendTo($div);
				$div2 = $("<div class='bgs'><h3><span id='clz'>已处理</span></h3><div id='taskDoneTb'></div></div>").appendTo($div);
				
				//if(instId==""||instId==undefined)return;
				Fix.ajax({
					action : {
						_method : "flow.getTaskProcess",
						_param : [ instId ]
					},
					async : false,
					loading : false,
					success : function(response) {
						var procData = response;
						var taskListEnd = procData.taskListEnd;
						var taskListIng = procData.taskListIng;
								showTaskDoneGrid(taskListEnd);
								showTaskNotDoneGrid(taskListIng);
					}
				});
			}
		},
		/**
	 	 * @description 初始化组件时，对组件赋值
		 * @param {String} str_values 组件的值
		 */
		setValue: function(str_values) {
			
		},
		/**
		 * @description 提交时，对组件取数据值
		 */
		getData : function() {
			
		},
		/**
		 * @description 提交时，对组件取文本值
		 */
		getText : function() {
		
		},
		disable: function(){
			
		}
	};
	
	//私有实现,控件呈现函数
	function showTaskDoneGrid(taskListEnd) {
		var config = {
			"SimpleGrid" : {
				CSSclass : "dataTable",
				"Style" : {
					"width" : "100%"
				},
				"Header" : [ Fix.Global["{@end_bzmc}"], 
				             Fix.Global["{@end_clr}"], 
				             Fix.Global["{@end_ddsj}"], 
				             Fix.Global["{@end_wcsj}"], 
				             Fix.Global["{@end_yjclsj}"], 
				             Fix.Global["{@end_cljg}"],
				             Fix.Global["{@end_clyj}"] ]
			},
			"htmlID" : "taskDoneTb",
			"func" : "SimpleGrid",
			"Data" : {
				"Filter" : "1=1",
				"Fields" : "nodeName,assignessName,createTime,endTime,expectedExecutionTime,commandMessage,taskComment",
				"BizObj" : "abc"

			},
			event : {
				
			}
		};

		var simpleGrid = new Fix.Component.SimpleGrid(config);
		simpleGrid.init({
			datas : taskListEnd
		});
		simpleGrid.draw();
	}

	function showTaskNotDoneGrid(taskListIng) {
		for(var i = 0; i < taskListIng.length; i++){
			var taskIng = taskListIng[i];
			var isSuspended = taskIng.isSuspended;
			if(isSuspended == true){
				taskIng.nodeName += "[暂停]";
			}
		}
		
		
		var config = {
			"SimpleGrid" : {
				CSSclass : "dataTable",
				"Style" : {
					"width" : "100%"
				},
				"Header" : [ Fix.Global["{@ing_bzmc}"], 
				             Fix.Global["{@ing_dqcl}"], 
				             Fix.Global["{@ing_ddsj}"], 
				             Fix.Global["{@ing_yjclsj}"] ]
			},
			"htmlID" : "taskNotDoneTb",
			"func" : "SimpleGrid",
			"Data" : {
				"Filter" : "1=1",
				"Fields" : "nodeName,nowProc,createTime,expectedExecutionTime",
				"BizObj" : "abc"

			},
			event : {
				
			}
		};

		var simpleGrid = new Fix.Component.SimpleGrid(config);
		simpleGrid.init({
			datas : taskListIng
		});
		simpleGrid.draw();
	}
});

