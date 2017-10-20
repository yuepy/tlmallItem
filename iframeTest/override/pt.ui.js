var pt;
(function (pt) {
    var ui;
    (function (ui) {
        var CommonUtil = (function () {
            function CommonUtil() {
            }
            CommonUtil.getTopWin = function () {
                return window.parent;
            };
            return CommonUtil;
        }());
        ui.CommonUtil = CommonUtil;
    })(ui = pt.ui || (pt.ui = {}));
})(pt || (pt = {}));
/// <reference path='./CommonUtil.ts'/>
var pt;
(function (pt) {
    var ui;
    (function (ui) {
        var IframeUtil = (function () {
            function IframeUtil() {
            }
            IframeUtil.createIframe = function (name, targetUrl, mount) {
                // var topWin = ui.CommonUtil.getTopWin();
                // if (topWin.frames[name]) {
                //     IframeUtil.switchIframe(name, targetUrl);
                // }
                // else {
                //     var doc = topWin.document;
                //     var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
                //     var mountEl = doc.querySelector(mount);
                //     var iframe = void 0;
                //     try {
                //         iframe = document.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
                //     }
                //     catch (e) {
                //         iframe = document.createElement('iframe');
                //         iframe.name = name;
                //         iframe.src = targetUrl;
                //     }
                //     if (iframe) {
                //         mountEl.appendChild(iframe);
                //     }
                // }
              window.parent.open(targetUrl,'newWin');
            };
            IframeUtil.switchIframe = function (name, targetUrl) {
                /*var topWin = ui.CommonUtil.getTopWin();
                var childWin = topWin.frames[name];
                if (childWin) {
                    childWin.location.href = targetUrl;
                }*/
                window.parent.open(targetUrl,'newWin');
            };
            return IframeUtil;
        }());
        ui.IframeUtil = IframeUtil;
    })(ui = pt.ui || (pt.ui = {}));
})(pt || (pt = {}));
