(function(){ 
  top.BMap_loadScriptTime = (new Date).getTime(); 
  //document.write('<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=U4tjcZAnOv0D02meLZHUGbCiKYIkOnLX&services=&t=20170315200907"></script>');
  var mapScriptEl = top.document.getElementById("baiduScript");
  if (!mapScriptEl) {
    mapScriptEl = top.document.createElement('script');
    mapScriptEl.id = "baiduScript";
    mapScriptEl.type = "text/javascript";
    mapScriptEl.src = "http://api.map.baidu.com/getscript?v=2.0&ak=U4tjcZAnOv0D02meLZHUGbCiKYIkOnLX&services=&t=20170315200907";
    mapScriptEl.onload = function() {
      top.dispatchEvent(new Event("map_loaded"));
    }
    var headEl = top.document.getElementsByTagName("head")[0];
    headEl.appendChild(mapScriptEl);
  }
})();