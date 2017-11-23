//页面自适应
$(function(){
    $("body").css({"overflow":"auto", "position":"relative"});
});
    //切换从表tab时，自适应高度
function activechanged(){
    try	{
        var datagrids = $("#tab .mini-datagrid");
        for(var i = 0; i < datagrids.length; i++) {
            var p = $(datagrids[i]).parent();
            if(p.length != 0) {
                if($(p[0]).css("display") != "none") {
                    var newHeight = $(datagrids[i]).height() + 35;
                    $(p[0]).height(newHeight);
                    $(p[0].parent).height(newHeight);
                    $("#tab .mini-tabs-bodys").height(newHeight);
                    break;
                }
            }
        }
    }catch(e){}
}

__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
};
var bootPATH = __CreateJSPath("loadAllUtils.js");
document.write('<script src="' + bootPATH + 'tools.min.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'uuid.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'pingying.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'utils.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + '../jSignature/js/jSignature.min.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + '../jSignature/js/flashcanvas.min.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + '../jqprint/jquery.jqprint-0.3.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + '../ajaxupload/ajaxfileupload.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'fixheight.js" type="text/javascript" ></sc' + 'ript>');
