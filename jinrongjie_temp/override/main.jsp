<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <title></title>
    <SCRIPT type=text/javascript src="/wui/common/jquery/jquery.js"></SCRIPT>
    <script type="text/javascript" src="/wui/common/jquery/plugin/jquery.cycle.all.js"></script>
    <script type="text/javascript" src="/js/jquery/plugins/client/jquery.client.js"></script>

    <script type="text/javascript" src="/wui/common/jquery/plugin/jquery.overlabel.js"></script>

    <link href="/css/commom.css" type="text/css" rel="stylesheet">

    <link href="/wui/theme/ecology7/page/softkey/softkey.css" type="text/css" rel="stylesheet">

    <script type="text/javascript" src="/wui/theme/ecology7/page/softkey/Keyboard.js"></script>
    <!-- cookie.js文件保存用户名和密码，base64.js加密文件 -->
    <script type="text/javascript" src="/wui/common/js/cookie/jquery.base64.js"></script>
    <script type="text/javascript" src="/wui/common/js/cookie/jquery.cookie.js"></script>

    <!-- 字体设置，win7、vista系统使用雅黑字体,其他系统使用宋体 Start -->
    <link type='text/css' rel='stylesheet' href='/wui/common/css/w7OVFont.css' id="FONT2SYSTEMF">


    <script type="text/javascript">
        //浏览器版本不支持跳转
        var isMobileTest = "";
        var browserName = $.client.browserVersion.browser; //浏览器名称
        var browserVersion = parseInt($.client.browserVersion.version); //浏览器版本
        var osVersion = $.client.version; //操作系统版本
        var browserOS = $.client.os;

        function accessFilter() {
            //禁止iphone、ipad、android访问
            if (isMobileTest != "1" && (browserOS == "iPhone/iPod" || browserOS == "iPad" || browserOS == "Android")) {
                window.location.href = "/wui/common/page/sysRemind.jsp?labelid=2&browserOS=" + browserOS;
                return;
            }
            //禁止windows下safari访问   
            if ((browserName == "Safari" && browserOS == "Windows")) {
                window.location.href = "/wui/common/page/sysRemind.jsp?labelid=3&browserOS=" + browserOS + "&browserName=" + browserName;
                return;
            }
            if ((browserName == "FF" && browserVersion < 9) || (browserName == "Chrome" && browserVersion < 14) || (browserName == "Safari" && browserVersion < 5 && browserOS != "Windows")) {
                window.location.href = "/wui/common/page/sysRemind.jsp?labelid=1&browserName=" + browserName + "&browserVersion=" + $.client.browserVersion.version;
                return;
            }
            //禁止IE8以下浏览器访问，并提示安装IE8
            if (browserName == "IE" && browserVersion < 8 && !document.documentMode) {
                window.location.href = "/wui/common/page/sysRemind.jsp?labelid=4";
                return;
            }

        }

        accessFilter();
    </script>
    <script language='javascript'>
        document.title = '金融街集团OA办公系统111';
    </script>


    <script language='javascript'>
        document.title = '金融街集团OA办公系统';
    </script>




    <script language="javascript">
        function addCssByStyle(cssString) {
            var doc = document;
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");

            if (style.styleSheet) { // IE
                style.styleSheet.cssText = cssString;
            } else { // w3c
                var cssText = doc.createTextNode(cssString);
                style.appendChild(cssText);
            }

            var heads = doc.getElementsByTagName("head");
            if (heads.length) {
                heads[0].appendChild(style);
            } else {
                doc.documentElement.appendChild(style);
            }
        }

        //alert( window.navigator.userAgent+"%%%"+jQuery.client.version +"%%%"+jQuery.client.browser+"%%%"+$.client.os+"&&&&&"+jQuery.client.getOsVersion())
        var osV = jQuery.client.version;
        var isIE = jQuery.client.browser == "Explorer" ? "true" : "false";

        if (osV < 6) {
            document.getElementById('FONT2SYSTEMF').href = "/wui/common/css/notW7AVFont.css";
            addCssByStyle("input { Line-height:100%!important;}");
        }
    </script>
    <!-- 字体设置，win7、vista系统使用雅黑字体,其他系统使用宋体 End -->

    <!--[if IE 6]>
        <script type='text/javascript' src='/wui/common/jquery/plugin/8a-min.js'></script>
    <![endif]-->

    <!--超时跳转,跳出iframe黄宝2011/5/25-->
    <script type="text/javascript">
        if (top.location != self.location) top.location = self.location;
    </script>

    <SCRIPT language=javascript1.1>
        function checkall() {
            var dactylogram = "";
            if (document.all("dactylogram")) dactylogram = document.all("dactylogram").value;
            if (dactylogram == "") {
                var i = 0;
                var j = 0;
                var errMessage = "";
                if (form1.loginid.value == "") {
                    errMessage = errMessage + "请输入用户名！\n";
                    i = i + 1;
                }
                if (form1.userpassword.value == "") {
                    errMessage = errMessage + "请输入密码！\n";
                    j = j + 1;
                }
                if (i > 0) {
                    alert(errMessage);
                    form1.loginid.focus();
                    return false;
                } else if (j > 0) {
                    alert(errMessage);
                    form1.userpassword.focus();
                    return false;
                }

                setCookie(); // 勾选复选框，则把用户名和密码保存到cookie中


            }
        }

        //把用户名和密码保存到cookie对象中
        function setCookie() { //设置cookie    
            var account = $("#loginid").val(); //获取用户名信息    
            var password = $("#userpassword").val(); //获取登陆密码信息  
            var checked = $("#ck").is(':checked'); //获取是否记住密码复选框  
            if (checked) { //判断是否选中了“记住密码”复选框 
                $.cookie("oa_login_code", account, {
                    path: '/',
                    expires: 365
                }); // 调用jquery.cookie.js中的方法设置cookie中的用户名
                $.cookie("oa_pwd", $.base64.encode(password), {
                    path: '/',
                    expires: 365
                }); // 调用jquery.cookie.js中的方法设置cookie中的登陆密码，并使用base64（jquery.base64.js）进行加密
            } else {
                $.cookie("oa_login_code", "", {
                    path: '/',
                    expires: 365
                }); // 复选框不选中，则根据cookie名称和路径清除用户名
                $.cookie("oa_pwd", "", {
                    path: '/',
                    expires: 365
                }); // 复选框不选中，则根据cookie名称和路径清除密码
            }
        }

        // 从cookie对象中获取用户信息
        function getCookie() {
            var loginCode = $.cookie("oa_login_code"); // 获取cookie中的用户名    
            var pwd = $.cookie("oa_pwd"); //获取cookie中的登陆密码    

            if (loginCode) { // 用户名存在，则把用户名填充到用户名文本框    
                $("#loginid").val(loginCode);
                $("input[name='loginid']").focus(); // 当文本框有值，label的值自动消失
            }
            if (pwd) { // 密码存在，则把密码填充到密码文本框    
                $("#userpassword").val($.base64.decode(pwd));
                $("#ck").attr("checked", "true"); // 密码存在，则把“记住用户名和密码”复选框选中 
                $("input[name='userpassword']").focus(); // 当文本框有值，label的值自动消失
            }
        }

        var dactylogramStr = "";
        var intervalID = 0;
        //--------------------------------------------------------------//
        // 采集指纹特征
        //--------------------------------------------------------------//
        function FingerSample() {
            init();
            if (dactylogramStr == "") {
                OpenDevice();
                if (openStatus == 1) {
                    iRet = dtm.GetExtractMBSimple();
                    if (iRet != 0) {
                        if (intervalID != 0) window.clearInterval(intervalID);
                        intervalID = setTimeout("FingerSample()", 2000);
                    } else {
                        if (intervalID != 0) window.clearInterval(intervalID);
                        if (intervalID2 != 0) window.clearInterval(intervalID2);
                        dactylogramStr = dtm.strInfo;
                        document.all("dactylogram").value = dactylogramStr;
                        form1.submit();
                    }
                    CloseDevice();
                }
            }
            if (intervalID != 0) window.clearInterval(intervalID);
            intervalID = setTimeout("FingerSample()", 2000);
        }

        var openStatus = 0;

        function OpenDevice() {
            openStatus = 0;
            dtm.DataType = 0;
            iRet = dtm.EnumerateDevicesSimple();
            if (iRet == 0) {
                devInfo = dtm.strInfo;
                devNum = devInfo.split(",")[1];
                iRet = dtm.OpenDevice(devNum);
                if (iRet == 0) {
                    openStatus = 1;
                }
            }
        }

        function CloseDevice() {
            iRet = dtm.CloseDevice();
        }

        function init() {
            try {
                OpenDevice();
                if (openStatus != 1) {
                    document.all("dactylogramLoginImgId").src = "/images/loginmode/3.gif";
                    if (intervalID2 != 0) window.clearInterval(intervalID2);
                    intervalID2 = setTimeout("init()", 100);
                } else {
                    if ("" == "nomatch") document.all("dactylogramLoginImgId").src = "/images/loginmode/2.gif";
                    else document.all("dactylogramLoginImgId").src = "/images/loginmode/1.gif";
                    if (intervalID2 != 0) window.clearInterval(intervalID2);
                    if (document.getElementById("onDactylogramOrPassword").value == 0) {
                        if (intervalID != 0) window.clearInterval(intervalID);
                        intervalID = setTimeout("FingerSample()", 2000);
                    }
                }
                CloseDevice();
            } catch (e) {}
        }
        if ("" == "1" || "" == "nomatch") {
            if (intervalID != 0) window.clearInterval(intervalID);
            if (intervalID2 != 0) window.clearInterval(intervalID2);
            intervalID2 = setTimeout("init()", 100);
            intervalID = setTimeout("FingerSample()", 2000);
        }
        var intervalID2 = 0;
        if (false && "" == "1") intervalID2 = setTimeout("init()", 100);

        function changeLoginMode(modeid) {
            if (modeid == 0) {
                document.all("dactylogramLogin").style.display = "";
                document.all("passwordLogin").style.display = "none";
                document.all("loginModeTable").style.margin = "100px 0 0 475px";
                if (intervalID2 != 0) window.clearInterval(intervalID2);
                init();
                if (openStatus == 1) intervalID = setTimeout("FingerSample()", 2000);
            }
            if (modeid == 1) {
                document.all("dactylogramLogin").style.display = "none";
                document.all("passwordLogin").style.display = "";
                if ("" == "nomatch") {
                    document.all("loginModeTable").style.margin = "150px 0 0 475px";
                    document.all("loginPasswordTable").style.margin = "0 0 0 570px";
                } else {
                    document.all("loginModeTable").style.margin = "0 0 35px 475px";
                }
                if (intervalID != 0) window.clearInterval(intervalID);
                if (intervalID2 != 0) window.clearInterval(intervalID2);
            }
        }

        function VchangeLoginMode(modeid) {
            if (modeid == 0) {
                document.all("dactylogramLoginV").style.display = "";
                document.all("passwordLoginV").style.display = "none";
                setTimeout("FingerSample()", 500);
            }
            if (modeid == 1) {
                document.all("dactylogramLoginV").style.display = "none";
                document.all("passwordLoginV").style.display = "";
                if (intervalID != 0) window.clearInterval(intervalID);
            }
        }

        function changeLoginMethod(methodtype) {
            alert(methodtype);
            document.getElementById("loginid").disabled = true;
        }

        //add by sean.yang 2006-02-09 for TD3609
        function changeMsg(msg, ele) {
            if (msg == 0) {

                if (document.all.validatecode.value == '请点击输入验证码') {
                    document.all.validatecode.value = '';
                }
            } else if (msg == 1) {

                if (document.all.validatecode.value == '') {
                    document.all.validatecode.value = '请点击输入验证码';
                }
            }
        }
    </SCRIPT>


    <script language="JavaScript">
        function click(e) {
            if ($.browser.msie) {
                if (event.button == 2 || event.button == 3) {
                    alert('高效源于协同')
                    return false;
                }
            } else {
                if (e.which == 2 || e.which == 3) {
                    alert('高效源于协同')
                    return false;
                }
            }

        }
        document.onmousedown = click
    </script>

    </script>



    <script type="text/javascript">
        $(document).ready(function() {
            $(function() {

                //alert($("label.overlabel").length)
                $("label.overlabel").overlabel();

                var iconImg = "/wui/theme/ecology7/page/images/login/graypoint.png"
                var iconImg_over = "/wui/theme/ecology7/page/images/login/redpoint1.png"

                $('#slideshow').cycle({
                    fx: 'scrollHorz',
                    timeout: 7000,
                    prev: '#crossPrev',
                    next: '#crossNext',
                    pager: '#nav',
                    pagerAnchorBuilder: pagerFactory,
                    before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
                        if ($.browser.msie) {
                            if ($.browser.version == "6.0") {
                                DD_belatedPNG.fix('a,div,img,background,span');
                            }
                        }


                        var curIndex = $(currSlideElement).attr("index");
                        var curSlidnavtitle = $($("#slideDemo .slidnavtitle")[curIndex]);
                        if (curSlidnavtitle != null) {
                            curSlidnavtitle.css("background", "url('" + iconImg + "') center center no-repeat");
                            // curSlidnavtitle.css("zindex",9999999);
                        }

                        var nextIndex = $(nextSlideElement).attr("index");

                        var nextSlidnavtitle = $($("#slideDemo .slidnavtitle")[nextIndex]);
                        if (nextSlidnavtitle != null) {
                            var tesy = "url('" + iconImg_over + "') no-repeat";
                            var tempInt = parseInt(nextIndex) + 1;
                            nextSlidnavtitle.css("background", "url('/wui/theme/ecology7/page/images/login/redpoint" + tempInt + ".png') center center  no-repeat");
                            //nextSlidnavtitle.css("zindex",999);
                        }
                    }
                });

                function pagerFactory(idx, slide) {
                    var s = idx > 20 ? ' style="display:none"' : '';
                    //alert((idx==0?iconImg_over:iconImg)
                    return ' <span class="m-t-5  slidnavtitle hand"  style="background:url(' + (idx == 0 ? iconImg_over : iconImg) + ') center center no-repeat;position:relative;height:32px;width:32px;z-index:99999">&nbsp;</span>';
                };

                $("#login").bind("mouseover", function() {
                    $(this).removeClass("lgsm");
                    $(this).addClass("lgsmMouseOver");
                });
                $("#login").bind("mouseout", function() {
                    $(this).removeClass("lgsmMouseOver");
                    $(this).addClass("lgsm");
                });

                $(".crossNav a").hover(function() {
                    $(this).css("background-position", "0 -29px");
                }, function() {
                    $(this).css("background-position", "0 0px");
                });

                //检测微软雅黑字体在客户端是否安装
                //fontDetection("sfclsid", $("input[name='fontName']").val());
                //检测用户当前浏览器及其版本
                ieVersionDetection();
                setRandomBg();
            });
            //焦点设置
            //$("input[name='loginid']").focus();
            //----------------------------------
            // form表单提交时check
            //----------------------------------

        });


        function setRandomBg() {
            var imgArray = new Array();
            var imgPath = "";

            imgArray[0] = "img21-55870711";

            imgArray[1] = "img21-1397483389";

            imgArray[2] = "img211216762793";

            var discnt = 3;

            if (discnt == 0) { //系统默认图片
                imgArray = new Array("lg_bg1.jpg", "lg_bg2.jpg", "lg_bg3.jpg", "lg_bg4.jpg", "lg_bg5.jpg", "lg_bg6.jpg");
                discnt = 6;
                imgPath = "/wui/theme/ecology7/page/images/login/"
            } else //用户自定义图片
                imgPath = "/LoginTemplateFile/";

            var i = Math.floor(Math.random() * discnt);
            var j = Math.floor(Math.random() * discnt);
            var k = Math.floor(Math.random() * discnt);

            var img1 = "",
                img2 = "",
                img3 = "";
            if (discnt > 3) {
                while (i >= discnt) {
                    i = Math.floor(Math.random() * discnt);
                }
                while (j >= discnt || j == i) {
                    j = Math.floor(Math.random() * discnt);
                }
                while (k >= discnt || k == i || k == j) {
                    k = Math.floor(Math.random() * discnt);
                }
                img1 = imgArray[i];
                img2 = imgArray[j];
                img3 = imgArray[k];
            } else if (discnt == 3) {
                img1 = imgArray[0];
                img2 = imgArray[1];
                img3 = imgArray[2];
            } else if (discnt == 2) {
                img1 = imgArray[0];
                img2 = imgArray[1];
            } else if (discnt == 1) {
                img1 = imgArray[0];
            }

            if (discnt >= 3) {
                $("#disimg0").css("background", "url(" + imgPath + img1 + ") no-repeat");
                $("#disimg1").css("background", "url(" + imgPath + img2 + ") no-repeat");
                $("#disimg2").css("background", "url(" + imgPath + img3 + ") no-repeat");
            } else if (discnt == 2) {
                $("#disimg0").css("background", "url(" + imgPath + img1 + ") no-repeat");
                $("#disimg1").css("background", "url(" + imgPath + img2 + ") no-repeat");
            } else if (discnt == 1) {
                $("#disimg0").css("background", "url(" + imgPath + img1 + ") no-repeat");
            }
        }

        function ieVersionDetection() {
            if (navigator.userAgent.indexOf("MSIE") > 0) { //是否是IE浏览器 
                if (navigator.userAgent.indexOf("MSIE 6.0") > 0) { //6.0
                    $("#ieverTips").show();
                    return;
                }
            }
            $("#ieverTips").hide();
        }

        function fontDetection(objectId, fontName) {
            //加载系统字体
            getSFOfStr(objectId);

            if (!isExistOTF(fontName)) {
                $("#fontTips").show();
            } else {
                $("#fontTips").hide();
            }
        }

        //---------------------------------------------
        // System font detection.  START
        //---------------------------------------------
        /**
         * detection system font exists.
         * @param fontName font name
         * @return true  :Exist.
         *         false :Does not Exist
         */
        function isExistOTF(fontName) {
            if (fontName == undefined ||
                fontName == null ||
                fontName.trim() == '') {
                return false;
            }

            if (sysfonts.indexOf(";" + fontName + ";") != -1) {
                return true;
            }
            return false;
        };

        /**
         * getting to the system font string.
         * @param objectId object's id
         * @return system font string.
         */
        function getSFOfStr(objectId) {
            var sysFontsArray = new Array();
            sysFontsArray = getSystemFonts(objectId);
            for (var i = 0; i < sysFontsArray.length; i++) {
                sysfonts += sysFontsArray[i];
                sysfonts += ';'
            }
        }
        //-------------------------------------------
        // Save the system font string, 
        // used for multiple testing.
        //-------------------------------------------
        var sysfonts = ';';

        /**
         * getting to the system font list
         *
         * @param objectId The id of components of the system font.
         * @return fonts list
         */
        function getSystemFonts(objectId) {
            var a = document.all(objectId).fonts.count;
            var fArray = new Array();
            for (var i = 1; i <= document.all(objectId).fonts.count; i++) {
                fArray[i] = document.all(objectId).fonts(i)
            }
            return fArray
        }

        /**
         * Returns a string, with leading and trailing whitespace
         * omitted.
         * @return  A this string with leading and trailing white
         *          space removed, or this string if it has no leading or
         *          trailing white space.
         */
        String.prototype.trim = function() {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        }

        //---------------------------------------------
        // System font detection.  END
        //---------------------------------------------
    </script>

    <STYLE TYPE="text/css">
        body,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        pre,
        code,
        form,
        fieldset,
        legend,
        input,
        textarea,
        p,
        blockquote,
        th,
        td,
        select {
            font-size: 12px;
        }
        
        body,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        pre,
        code,
        form,
        fieldset,
        legend,
        input,
        textarea,
        p,
        blockquote,
        th,
        td,
        select {
            font-size: 11px;
            /*font-family:"微软雅黑","宋体"!important;*/
        }
        /*For slide*/
        
        .slideDivContinar {
            height: 260px;
            width: 920px;
            padding: 0;
            margin: 0;
            overflow: hidden
        }
        
        .slideDiv {
            height: 260px;
            width: 920px;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
        }
        /*For Input*/
        
        .inputforloginbg {
            width: 172px;
            height: 21px;
            border: none;
        }
        
        .inputforloginbg input {
            border: none;
            height: 15px;
            background: none;
        }
        
        .lgsm {
            width: 76px;
            height: 35px;
            background: url(/wui/theme/ecology7/page/images/login/lg_login_sbmt.png) 0px 0px no-repeat;
            border: none;
        }
        
        .lgsmMouseOver {
            width: 76px;
            height: 35px;
            background: url(/wui/theme/ecology7/page/images/login/lg_login_sbmt_hover.png) 0px 0px no-repeat;
            border: none;
        }
        
        .crossNav {
            width: 100%;
            height: 30px;
            position: absolute;
            margin-top: 105px;
            padding-left: 30px;
            padding-right: 30px;
        }
    </STYLE>
</head>

<body style="padding:0;margin:0;background:#e8ebef;margin:0;padding:0;" scroll="auto">
    <TABLE width="100%" height="100%" cellpadding="0px" cellspacing="0px">
        <TR>
            <TD align="center">
                <TABLE width="100%" height="510px" cellpadding="0px" cellspacing="0px">
                    <TR>
                        <TD width="*">&nbsp;</TD>
                        <TD height="610px" valign="top" id="lgcontenttbl" style="width:990px">
                            <form name="form1" action="/login/VerifyLogin.jsp" name="loginForm" method="get" onSubmit="return checkall();">
                                <INPUT type="hidden" value="/wui/theme/ecology7/page/login.jsp?templateId=21&logintype=1&gopage=" name="loginfile">
                                <INPUT type="hidden" name="logintype" value="1">
                                <input type="hidden" name="fontName" value="微软雅黑">
                                <input type=hidden name="message" value="">
                                <input type=hidden name="gopage" value="">
                                <input type=hidden name="formmethod" value="get">
                                <INPUT type=hidden name="rnd">
                                <INPUT type=hidden name="serial">
                                <INPUT type=hidden name="username">
                                <input type="hidden" name="isie" id="isie">
                                <table border="0" width="990px" height="610px" align="center" cellpadding="0px" cellspacing="0px" style="background:url(/LoginTemplateFile/img21-295384658) no-repeat;">
                                    <tr>
                                        <td colspan="2" height="65px">
                                            <!--<div style="border:none;margin:0;padding:0;height:75px;overflow:hidden;">
                                                 <img alt="ecology" src="/wui/theme/ecology7/page/images/login/logo.png"> 
                                                
                                            </div>-->
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" valign="top" style="padding-top:58px">
                                            <!-- 
                                            <div class="crossNav">
                                                <a id="crossPrev" href="#" style="width:26px;height:30px;float:left;display:block;margin:0;padding:0;background:url('/wui/theme/ecology7/page/images/login/slide-previous.png') 0 0 no-repeat;"></a>
                                                <a id="crossNext" href="#" style="width:26px;height:30px;float:right;display:block;margin:0;padding:0;background:url('/wui/theme/ecology7/page/images/login/slide-next.png') 0 0 no-repeat;" ></a>
                                            </div>
                                         -->
                                            <div id="slideDemo" style="overflow:hidden;width:990px;height:260px;">
                                                <div id="slideshow" class="slideDivContinar" style="margin-left:34;clear:left;top:0px;">

                                                    <div id="disimg0" class='slideDiv' index='0' style='cursor: pointer;'></div>

                                                    <div id="disimg1" class='slideDiv' index='1' style='cursor: pointer;'></div>

                                                    <div id="disimg2" class='slideDiv' index='2' style='cursor: pointer;'></div>

                                                </div>
                                                <DIV style="position:relative;height:32px;top:-38;margin-left:34;width:920px;margin-top:0;overflow:hidden;">
                                                    <table border="0" width="920px" align="center" cellpadding="0px" cellspacing="0px">
                                                        <tr>
                                                            <td align="center">
                                                                <DIV style="position:relative" align="center" id="nav"></DIV>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </DIV>
                                            </div>
                                            <div style="width:100%;height:100%;">
                                                <div style="width:710px;height:100%;float:left;">
                                                    <table style="margin-top:100px;margin-left:30px;">
                                                        <tr width="100%">
                                                            <td style="width:10px">
                                                            </td>

                                                            <td style="font-size:11px;position:relative;z-index:1000">
                                                                <style>
                                                                    a {
                                                                        color: #123885;
                                                                    }
                                                                </style>
                                                            </td>
                                                        </tr>
                                                        <tr width="100%">
                                                            <td style="width:10px">
                                                            </td>
                                                            <td style="font-size:11px;">
                                                                <span id="ieverTips" style="display:none;color:red;">当前IE为IE6,为了使您有更好的使用效果和浏览速度，强烈建议您<a href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie-8" style="color:red;">升级</a></span>
                                                            </td>
                                                        </tr>
                                                        <tr width="100%">
                                                            <td style="width:10px">
                                                            </td>
                                                            <td style="font-size:11px;">
                                                                <span id="fontTips" style="display:none">电脑中没有安装【微软雅黑】字体，为了使您有更好的使用效果，建议您<a href="/wui/theme/ecology7/page/login.jsp?dlflg=true" style="color:red;">下载</a></span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div style="width:275px;height:100%;float:right;">
                                                    <div style="margin-left:4px;height:40px;margin-top:6px;width:226px;overflow:hidden;">
                                                        <table height="100%" width="100%" cellpadding="0px" cellspacing="0px">
                                                            <tr>
                                                                <td height="100%" valign="bottom" style="color:red;height:14px;padding-left:24px;">



                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </div>
                                                    <div style="padding-left:30px;">
                                                        <style>
                                                            label.overlabel {
                                                                position: absolute;
                                                                top: 3px;
                                                                left: 5px;
                                                                z-index: 1;
                                                                color: #999;
                                                            }
                                                            
                                                            .input_out {
                                                                height: 21px;
                                                                width: 172px;
                                                                background: url('/wui/theme/ecology7/page/images/login/input_bg_login.gif') no-repeat;
                                                                position: relative;
                                                            }
                                                            
                                                            .input_inner {
                                                                height: 19px;
                                                                width: 166px;
                                                                margin-left: 3px;
                                                                margin-top: 1px;
                                                                border: 0px solid red;
                                                                font-size: 12px;
                                                            }
                                                            
                                                            .s_ck {
                                                                margin-bottom: 2px;
                                                            }
                                                            
                                                            .memory {
                                                                height: 15px;
                                                                vertical-align: middle;
                                                                text-align: left;
                                                            }
                                                        </style>
                                                        <table width="180px" height="130px">
                                                            <!-- 用户名 -->
                                                            <tr style='height:26px'>
                                                                <td>
                                                                    <div class="input_out">
                                                                        <label for="loginid" class="overlabel">用户名:</label>
                                                                        <input type="text" name="loginid" id="loginid" class="input_inner" value="" />
                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <!-- 密码 -->
                                                            <tr style='height:26px'>
                                                                <td>
                                                                    <div class="input_out">
                                                                        <label for="userpassword" class="overlabel">密码:</label>
                                                                        <input type="password" name="userpassword" id="userpassword" class="input_inner" />
                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <!-- 验证码 -->

                                                            <tr style='height:26px;display:none'>
                                                                <td>

                                                                </td>
                                                            </tr>

                                                            <tr style='height:26px;display:none' id="trTokenAuthKey">
                                                                <td>
                                                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td style="position:relative;">
                                                                                <label for="tokenAuthKey" class="overlabel">请输入动态令牌口令</label>
                                                                                <input type="text" id="tokenAuthKey" name="tokenAuthKey" class="input_inner">
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>


                                                            <!-- 语言 -->

                                                            <tr style='height:26px;  display:none'>
                                                                <td>

                                                                </td>
                                                            </tr>



                                                            <!-- 提交 -->
                                                            <tr>
                                                                <td>
                                                                    <span class="s_ck">
                                                                    <input type="checkbox" id="ck" class="memory"/><label for="ck" class="memory">记住用户名和密码</label>&nbsp;
                                                                    <a href="javascript:void(window.open('http://192.168.200.80:8080/fsig/ResetPassword/auth?language=zh_CN&systemFlg=GOA&username='));" >重置密码</a>
                                                                </span>
                                                                    <input type="submit" name="submit" id="login" value="" class="lgsm" tabindex="3" style="margin-left:0px;cursor:pointer;">
                                                                </td>
                                                            </tr>

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td width="100%">
                                            <div style="border-style:none none none none;border-color:#c6c6c6;border-width:1px 0 0 0;">
                                                </divs>
                                        </td>
                                    </tr>

                                </table>
                            </form>
                        </TD>
                        <TD width="*">&nbsp;</TD>
                    </TR>
                </TABLE>
            </TD>
        </TR>
    </TABLE>

    <!--detection the system font start -->
    <DIV style="LEFT: 0px; POSITION: absolute; TOP: 0px;">
        <OBJECT ID="sfclsid" CLASSID="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" WIDTH="0px" HEIGHT="0px"></OBJECT>
    </DIV>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            var fflg = 0;
            if (fflg == 0) {
                $("input[name='loginid']").focus();
            } else if (fflg == 1) {
                $("input[name='userpassword']").focus();
            } else if (fflg == 2) {
                $("input[name='tokenAuthKey']").focus();
            }
        });

        var userUsbType = "0";
        jQuery(document).ready(function() {
            $("#isie").val(isIE);
            //需要usb验证，且采用的是动态口令
            if ("" == "1") {
                jQuery("#loginid").bind("blur", function() {
                    var loginid = jQuery(this).val();
                    if (jQuery(this).val() != "") {
                        loginid = encodeURIComponent(loginid);
                        //根据填写的用户名检查是否启用动态口令 
                        jQuery.post("/login/LoginOperation.jsp?method=checkTokenKey", {
                            "loginid": loginid
                        }, function(data) {
                            userUsbType = jQuery.trim(data);
                            if (userUsbType == "3") {
                                $("#trTokenAuthKey").show();
                            } else {
                                $("#trTokenAuthKey").hide();
                            }
                        });
                    }
                });
            }
        })

        jQuery(window).bind("resize", function() {
            jQuery(".overlabel-wrapper").css("position", "relative");
        })
    </script>

</body>

</html>