bps = window['bps'] || {};

/**
 * 基础能力
 */

bps.apply= function(o,c){
	
    if(!o||!c||typeof(c)!='object'){
        return;
    }
     
    for(var p in c){
        o[p]=c[p];
    }
     
    for(var i=2;i<arguments.length;i++){
        arguments.callee(o,arguments[i]);//支持递归调用，将后面所有对象都覆盖到第一个对象上
    }
};

bps.ns = function(ns){
	if (!ns || !ns.length) {
		return null;
	}
	
	var levels = ns.split(".");
	var nsobj = bps;
	
	for (var i=(levels[0] == "bps") ? 1 : 0; i<levels.length; i++) {
		nsobj[levels[i]] = nsobj[levels[i]] || {};
		nsobj = nsobj[levels[i]];
	}
};

bps.ns("bps.BizForm.Core");
bps.ns("bps.BizForm.Constants");
bps.ns("bps.BizForm.config");
bps.ns("bps.BizForm.dataCache");

bps.apply(bps.BizForm.config, {
	btnCols : 4
});

bps.apply(bps.BizForm.Constants, {
	TAB_PREFIX : "tab_",
	BTN_PREFIX : "btn_",
	TABS_CONTAINER_ID : "_tabs",
	BTNS_CONTAINER_ID : "_btns",
	BTNS_CONTAINER : '<div class="nui-toolbar" align="right">'+
						'<table id="_btns">'+
						'<tbody><tr></tr></tbody>'+
						'<tr id="_tr_01"></tr></table>'+
					'</div>',
	TABS_CONTAINER : '<div style="height:100%;width:100%;">'+
						'<div id="_tabs" class="nui-tabs" style="width:100%;height:100%">'+
						'</div>'+
					'</div>'
});


bps.BizForm.dataCache = (function(){
	var tmpWindow = window;
	var mostTop = window;
	var flag = true;
	while(flag){
		if (tmpWindow.parent == tmpWindow._ysp_top) {
			flag = false;
		};
		tmpWindow = tmpWindow.parent;
		if (tmpWindow.bps && tmpWindow.bps.BizForm) {
			mostTop = tmpWindow;
		};
	}
	return mostTop.bps.BizForm.dataCache;
})();

//cache all tds which include a button
var cachedTDs = {};
//all tds' count
var tdsCount = 0;

bps.apply(bps.BizForm.Core, {
	getButton : function(id){
		return bps.BizForm.Core.getControl(bps.BizForm.Constants.BTN_PREFIX + id);	
	},
	getButtons : function(){
		var btonIDs = bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX];
		var btns = [];
		for(var i=0;i<btonIDs.length;i++){
			btns.push(bps.BizForm.Core.getButton(btonIDs[i]));
		}
		return btns;
	},
	addButton: function(id, btnProperty){
		bps.BizForm.Core._createTd(tdsCount);
		var toID = "td_0_"+tdsCount;
		tdsCount+=1;
		return bps.BizForm.Core.createBtnTemplate(id, btnProperty, toID);
	},
	removeButton: function(id){
		var btn = bps.BizForm.Core.getButton(id);
		bps.BizForm.Core.unregisterBtn(id);
		if(btn && btn.destroy){
			btn.destroy();
		}
		$(cachedTDs[bps.BizForm.Constants.BTN_PREFIX+id]).remove();
	},

	getTab : function(id){
		return bps.BizForm.Core.getControl(bps.BizForm.Constants.TAB_PREFIX + id);
	},

	getControl : function(id){
		return 	bps.BizForm.dataCache[id];
	},

	registerBtn : function(id,btn) {
		var btnID = bps.BizForm.Constants.BTN_PREFIX + id;
		bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX] = bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX] || [];
		bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX].push(id);//保存所有的id
		bps.BizForm.Core.register(btnID, btn);
	},

	registerTab : function(id,tab) {
		bps.BizForm.Core.register(bps.BizForm.Constants.TAB_PREFIX + id,tab);
	},

	register : function(id,control) {
		bps.BizForm.dataCache[id] = control;
	},

	unregisterBtn : function(id) {
		bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX] = bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX] || [];
		bps.BizForm.dataCache[bps.BizForm.Constants.BTN_PREFIX].remove(id);//删除id
		bps.BizForm.Core.unregister(bps.BizForm.Constants.BTN_PREFIX + id);
	},

	unregisterTab : function(id) {
		bps.BizForm.Core.unregister(bps.BizForm.Constants.TAB_PREFIX + id);
	},

	unregister : function(id) {
		bps.BizForm.dataCache[id] = null;
	},

	renderTo : function (id) {
		var html = bps.BizForm.Constants.BTNS_CONTAINER + bps.BizForm.Constants.TABS_CONTAINER;
		document.getElementById(id).innerHTML = html;										
		nui.parse(html);
		bps.BizForm.tabs = nui.get(bps.BizForm.Constants.TABS_CONTAINER_ID);
	},

	renderBtnsTo : function (id) {
		document.getElementById(id).innerHTML = bps.BizForm.Constants.BTNS_CONTAINER;
		nui.parse(bps.BizForm.Constants.BTNS_CONTAINER);
	},

	renderTabsTo : function (id) {
		document.getElementById(id).innerHTML = bps.BizForm.Constants.TABS_CONTAINER;
		nui.parse(bps.BizForm.Constants.TABS_CONTAINER);
		bps.BizForm.tabs = nui.get(bps.BizForm.Constants.TABS_CONTAINER_ID);
	},

	setTabUrl : function(tab,url, tabLoadFn, tabDestroyFn){
		bps.BizForm.tabs.loadTab(url, tab, tabLoadFn, tabDestroyFn);
	},

	beforeCreateBtn : function(btn) {
		return true;
	},

	createBtn : function(id,btn,toID) {
		var btnProperties = {
			renderTo:toID,
			type:"button",
			text:btn.text,
			id:id
		};
		for (var prop in btn) {
			if (btn.hasOwnProperty(prop)) {
				btnProperties[prop] = btn[prop];
			};
		};
		var btn = nui.create(btnProperties);
		btn.setWidth("100%");
		return btn;
	},

	createBtnTemplate : function(id,btn,toID) {
		if(!bps.BizForm.Core.beforeCreateBtn(btn)){
			return;
		}
		btn = bps.BizForm.Core.createBtn(id,btn,toID);
		
		bps.BizForm.Core.registerBtn(id,btn);
		
		bps.BizForm.Core.afterCreateBtn(btn);
		return btn;
	},

	afterCreateBtn : function(btn) {
		
	},

	getControlFromTabById : function(id,tabID) {
		var control;
		var tab;
		if(tabID){
			tab = bps.BizForm.Core.getTab(tabID);
			return tab._iframeEl.contentWindow.nui.get(id);
		}
		for (var prop in bps.BizForm.dataCache) {
			if(prop.substring(0,4)==bps.BizForm.Constants.TAB_PREFIX){
				tab = bps.BizForm.Core.getControl(prop);
				if(tab&&tab._iframeEl&&tab._iframeEl.contentWindow&&tab._iframeEl.contentWindow.nui){
					control = tab._iframeEl.contentWindow.nui.get(id);
					if (control) {
						return control;
					};
				}
			}
		};
	},

	getFormFromTabById : function(formId,tabID) {
		var form;
		var tab;
		if(tabID){
			tab = bps.BizForm.Core.getTab(tabID);
			form  = new tab._iframeEl.contentWindow.nui.Form("#" + formId);
			return form;
		}
		for (var prop in bps.BizForm.dataCache) {
			if(prop.substring(0,4)==bps.BizForm.Constants.TAB_PREFIX){
				tab = bps.BizForm.Core.getControl(prop);
				if(tab&&tab._iframeEl&&tab._iframeEl.contentWindow&&tab._iframeEl.contentWindow.nui){
					form  = new tab._iframeEl.contentWindow.nui.Form("#" + formId);
					if (form) {
						return form;
					};
				}
			}
		};
	},
	beforeCreateTab : function(tab,tabs) {
		return true;
	},

	afterCreateTab : function(tab,tabs) {
	},

	createTab : function(id,tab,tabs) {
		var tabTmp;
		var data  = {};
		data.id = id;
		data.title = tab.title;
		data.content = tab.content;
		data.params = tab.params;
		if (data.content.lastIndexOf(".html") == data.contentlength - 5 || data.content.lastIndexOf(".jsp") == 4){
			data.url = data.content;
			tabTmp = tabs.addTab(data);
		} else{
			tabTmp = tabs.addTab(data);
	    	el = tabs.getTabBodyEl(data);
	    	el.innerHTML = data.content;
		};
		if(!tabs.getActiveTab()){
			tabs.activeTab(0);
		}
		return tabTmp;
	},

	createTabTemplate : function(id,tab,tabs) {
		tabs = tabs || bps.BizForm.tabs;
		if (!bps.BizForm.Core.beforeCreateTab(tab,tabs)) {
			return;
		};
		var tabTmp = bps.BizForm.Core.createTab(id,tab,tabs);
		bps.BizForm.Core.registerTab(tab.id,tabTmp);
		bps.BizForm.Core.afterCreateTab(tab,tabs);
		return tabTmp;
	},
	
	renderBtns : function(btns){
		tdsCount = btns.length;
		
		for(var i=0;i<btns.length;i++) {
			var td = bps.BizForm.Core._createTd(i);
			var btn = new bps.BizForm.Button(btns[i].id,btns[i].chName,btns[i].exts);
			bps.BizForm.Core.createBtnTemplate(btn.id,btn,"td_0_"+i);
			cachedTDs[bps.BizForm.Constants.BTN_PREFIX+btn.id] = td;
		}
		
	},

	renderTabs : function (tabs) {
		var tab;
		for (var i = 0, l = tabs.length; i < l ; i++) {
			tab = new bps.BizForm.Tab(tabs[i].id,tabs[i].chName,"",tabs[i].exts);
			bps.BizForm.Core.createTabTemplate(tab.id,tab);
		};
		nui.parse();
	},
	
	/**
	 * colIndex 在tr中创建一个td colIndex为第几个td
	 */
	_createTd: function(colIndex){
		var tdStyles = bps.BizForm.config.tdStyles;
		var td = document.createElement("td");
		var style = td.style;
		for (var property in tdStyles) {
			style[property] = tdStyles[property];
		};
		td.id="td_0_"+colIndex;
		$("#_tr_01").append(td);
		return td;
	},

	addBtnEventListener : function (btnID,func) {
		if(btnID.indexOf(bps.BizForm.Constants.BTN_PREFIX)==0){
			btnID = btnID.substring(4);
		}
		var btn = bps.BizForm.Core.getButton(btnID);
		if(btn){
			btn.on("click",func);
		}
	},

	removeBtnEventListener : function (btnID,func) {
		if(btnID.indexOf(bps.BizForm.Constants.BTN_PREFIX)==0){
			btnID = btnID.substring(4);
		}
		//bps.BizForm.Core.getButton(btnID).set({"onclick":func});
		bps.BizForm.Core.getButton(btnID).un("click",func);
	},

	initData : function(tab, e){
		if(tab._iframeEl.contentWindow.initData){
			tab._iframeEl.contentWindow.initData(e);
		}
	}

});

bps.BizForm.Button = function (id,text,params) {
	this.id = id ;
	this.params = params;
	this.text = text;
};

bps.apply(bps.BizForm.Button.prototype, {
	set : function(attrs) {
		for (prop in attrs) {
			this[prop] = attrs[prop];
		};
	 	return this;
	},

	get : function(attrName) {
		return this[attrName];
	},

	setId : function(id) {
		this.id = id;
	 	return this;
	},

	setText : function(text) {
		this.text = text;
	 	return this;
	}
});



bps.BizForm.Tab = function (id,title,content,params) {
	this.id = id;
	this.title = title;
	this.content = content;
	this.params = params;
};

bps.apply(bps.BizForm.Tab.prototype, {
	set : function(attrs) {
		for (prop in attrs) {
			this[prop] = attrs[prop];
		};
	 	return this;
	},

	get : function(attrName) {
		return this[attrName];
	},

	setId : function(id) {
		this.id = id;
	 	return this;
	},

	setTitle : function(title) {
		this.title = title;
	 	return this;
	},

	setUrl : function(url) {
		this.url = url;
	 	return this;
	},

	setContent : function(content) {
		this.content = content;
	 	return this;
	}
});

