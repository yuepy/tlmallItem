String.prototype.trim=function(){
     return this.replace(/(^\s*)|(\s*$)/g, '');
};


function closeWindow(action) {   
    if (window.CloseOwnerWindow) {
        return window.CloseOwnerWindow(action);
    } else {
    	window.close();  
    }          
}

tfcToast = window.getTop().tfcToast || {};
tfcToast.take = tfcToast.take || function(text){//不重新定义方法，解决bug45183
	if(undefined == window.getTop().document.getElementById("toast")){
    	window.getTop().$("body").prepend("<div id='toast' style='padding: 10px; color: rgb(255, 255, 255); display: none; position: absolute; z-index: 10010; opacity: 1; background-color: rgb(0, 0, 0); border-radius: 5px;'>"+text+"</div>");
    }else{
    	window.getTop().$("#toast").stop();
    	window.getTop().document.getElementById("toast").innerHTML = text;
    	if(window.getTop().$("#toast").css("opacity") != 1){
    		window.getTop().$("#toast").css("opacity",1);
    		window.getTop().$("#toast").stop();
    	}
    }
	// 获取窗口宽度
	var winWidth;
	var winHeight;
	if ( window.getTop().innerWidth)
		winWidth = window.getTop().innerWidth;
	else if (( window.getTop().document.body) && ( window.getTop().document.body.clientWidth))
		winWidth = window.getTop().document.body.clientWidth;
	// 获取窗口高度
	if (window.getTop().innerHeight)
		winHeight = window.getTop().innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight =  window.getTop().document.body.clientHeight;
	var top = window.getTop().document.body.scrollHeight - winHeight/2 - window.getTop().$("#toast").height()/2;
    var left = window.getTop().document.body.scrollWidth - winWidth/2 - window.getTop().$("#toast").width()/2 ;
    window.getTop().$("#toast").css("left",parseInt(left) + "px");
    window.getTop().$("#toast").css("top",parseInt(top) + "px");
    window.getTop().$("#toast").fadeIn(1000);
	window.getTop().$("#toast").fadeTo(1500,0.8);
	window.getTop().$("#toast").fadeOut(1500);
};

 
function getTop() {
	var _parent = window;
	while(_parent) {
		if (_parent.frameElement.getAttribute('data-browser') || _parent === _parent.parent) {
			return _parent;
		}
		_parent = _parent.parent;
	}
}
