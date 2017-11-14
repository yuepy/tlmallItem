// JavaScript Document
var FCKEditorExt=null;
(function(){
	function $(o){return (typeof(o)=='string')?document.getElementById(o):o;}
	FCKEditorExt={
		editorName:[],
		editorObjs:{},//FF�¶����༭��ʱ��FCKEditorApi��ȡ����ǰ���Ķ���,ֻ�ܻ�ȡ����һ��
		txtChecked:[],
		isEn:false,
		basePath:'/FCKEditor/',
		initEditor:_initEditor,
		//initUploadImage:_initUploadImage,
		id:'insertObjectContainer',
		updateContent:_updateContent,
		getHtml:_getHtml,
		setHtml:_setHtml,
		insertHtml:_insertHtml,
		getText:_getText,
		getTextNew:_getTextNew,
		selectImageType:_selectImageType,
		Ok:_Ok,
		Cancel:_Cancel,
		show:_show,
		showFlashDialog:_showFlashDialog,
		flashVideoDialog:_flashVideoDialog,
		switchEditMode:_switchEditMode,
		switchTextMode:_switchTextMode,
		removeFile:_removeFile,
		FullScreen:_fullScreen,
		InsertVideo:_InsertVideo,
		_sel:null,/**��¼ǰ��ѡ�еĶ���*/
		checkText:_checkText,
		_loadComplete:_loadComplete,
		toolbarExpand:_toolbarExpand,
		DEFAULT:1,
		NO_IMAGE:2,
		WEB_IMAGE:3,
		HtmlLayout_IMAGE:4,
		MobileLayout_IMAGE:5,
		stripScripts:_stripScripts,
		filterXss:_filterXss,
		resize:_resize
	};
var isInit=false;
var _formName=null;

function isEmpty(s){return (typeof(s)=='undefined' || s==null || s.toString()=='');}

function _initEditor(formName,name,isEnglish,isNonImage){
	enableAllmenu();
	enablePhraseselect();
	var sBasePath=this.basePath;
	this.editorName[this.editorName.length]=name;
	this.txtChecked[this.txtChecked.length]=false;
	_formName=formName;
	//_overLoadSubmit();//�����û��Զ���Submit
	var oFCKeditor = new FCKeditor(name);
	if(isNonImage == this.HtmlLayout_IMAGE){
		oFCKeditor.Config["CustomConfigurationsPath"]=sBasePath+"wfEditorConf.js";
	}else if(isNonImage == this.MobileLayout_IMAGE){
		oFCKeditor.Config["CustomConfigurationsPath"]=sBasePath+"wfMobileConf.js";
	}else{
		oFCKeditor.Config["CustomConfigurationsPath"]=sBasePath+"weaverEditorConf.js";
	}
	if(typeof(isEnglish)=='number')isEnglish=(isEnglish==8)?true:false;
	if(isEnglish){//�������Ƕ�ȡ������Ĭ��Ϊ��������
		oFCKeditor.Config["DefaultLanguage"]="en";
		this.isEn=true;
	}
	oFCKeditor.ToolbarSet='ecology';
	if(isNonImage==this.NO_IMAGE){
		oFCKeditor.ToolbarSet='ecologyNoImage';
	}else if(isNonImage==this.HtmlLayout_IMAGE){
		oFCKeditor.ToolbarSet='htmlLayout';
	}
	oFCKeditor.BasePath	= sBasePath;
	oFCKeditor.ReplaceTextarea();
		//oFCKeditor.Create();
	if(isNonImage!=this.NO_IMAGE){
		if(isNonImage==this.WEB_IMAGE)isNonImage=true;
		else isNonImage=false;
		_initUploadImage(formName,isNonImage);//���༭���е�ͼƬ�ϴ����ϵ���ǰForm��,Ĭ�ϴ�ͼƬ�������ϴ���
	}
	isInit=true;//���ǳ�ʼ������
	displayAllmenu();
	displayPhraseselect();
}
	function _updateContent(ename){
		if(!isInit)return;
		if(isEmpty(ename)){
			//ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
			_updateContentAll();
			return;
		}
		if(isTextMode)return;//�ı��༭ʱ������textArea������
		var oEditor = FCKeditorAPI.GetInstance(ename);
		$(ename).value=oEditor.GetXHTML(true);
	}
	function _updateContentAll(){
		for(var i=0; i<FCKEditorExt.editorName.length; i++){
			var tmpname = FCKEditorExt.editorName[i];
			try{
				var oEditor = FCKeditorAPI.GetInstance(tmpname);
				$(tmpname).value = oEditor.GetXHTML(true);
			}catch(e){}
		}
	}
	function _getHtml(ename){
		if(!isInit)return "";
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		this.updateContent(ename);
		return 	$(ename).value;
	}
	function _getText(ename){
		if(!isInit)return "";
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		this.updateContent(ename);
		var s=$(ename).value;		
		var div=document.createElement("div");
		div.innerHTML=s;
		return div.innerText.trim();
	}
	function _getTextNew(ename){
		if(!isInit){
			return "";
		}
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		this.updateContent(ename);
		var s = $(ename).value;
		while(s.indexOf("</p>") >= 0){
			s = s.replace("</p>", "_=+=_");
		}
		while(s.indexOf("</P>") >= 0){
			s = s.replace("</P>", "_=+=_");
		}
		var div = document.createElement("div");
		div.innerHTML = s;
		s = div.innerText;
		while(s.indexOf("_=+=_") >= 0){
			s = s.replace("_=+=_", "<br>");
		}
		var stmp = s.trim();
		while(stmp.indexOf("<br>") >= 0){
			stmp = stmp.replace("<br>", "");
			stmp = stmp.trim();
		}
		if(stmp == ""){
			s = "";
		}
		return s;
	}
	function _setHtml(s,ename){
		if(!isInit)return;
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(isTextMode)	_switchEditMode(ename);//�������ı��༭״̬���л�����.
		var oEditor = FCKeditorAPI.GetInstance(ename);
		if(oEditor!=null && oEditor!=undefined){
			oEditor.SetHTML(s,ename);
		}
	}
	var currentImgType=2;//Ĭ���Ǳ����ļ�����
	var imgsCount=0;//Ĭ���ϴ���ͼƬ��Ϊ0
	function _selectImageType(o){
		if(currentImgType==o.value)return;
		$('imgUrlSpan').style.display=(o.value==1)?'':'none';
		$('imgFileSpan').style.display=(o.value==2)?'':'none';
		$('imgFileSpanTemp').style.display=(o.value==2)?'block':'none';
		currentImgType=o.value;
	}
		var en=new Array('',
			'URL can not be empty or illegal Address',
			'Please select a image file,addresses can not be empty!',
			'Are you confirm delete the image(Y/N)?',
			'You must be on WYSIWYG mode!',
			'example',
			'Insert image',
			'web image',
			'local image',
			'image url',
			'select image',
			'Ok',
			'Cancel',
			'Conversion to text edit mode will be lost format settings, to determine switch?',
			'Insert FlashVideo',
			'Incorrect Flash Video URL');
		var ch=new Array('',
			'URL��ַ����Ϊ�ջ��Ƿ���ַ',
			'��ѡ��ͼƬ�ļ�����ַ����Ϊ��!',
			'ȷ��ɾ����ͼƬ��(Y/N)?',
			'�����л������ӻ��༭״̬�ٲ���!',
			'����',
			'����ͼƬ',
			'����ͼƬ',
			'����ͼƬ',
			'ͼƬ��ַ',
			'ѡ��ͼƬ',
			'ȷ��',
			'ȡ��',
			'ת�����ı��༭�ᶪʧ��ʽ����,ȷ���л���(Y/N)?',
			'����Flash',
			'����ȷ��Flash��Ƶ��ʽ');
	function _getLabel(i){
		return FCKEditorExt.isEn?en[i]:ch[i];
	}
	function _appendFlashVideo(fUrl){
		var s=new Array('<img class="editorFlashVideo" _flashUrl="',fUrl,'" src="/FCKEditor/FlashVideo.jpg" width="96" height="96"/>'
		).join("");
		_insertHtml(s);//���Ӵ������༭��
/*		var iFVideo='<scr'+'ipt id="_initFVideo">initFlashVideo();</scr'+'ipt>';		
		var oDoc = FCKeditorAPI.GetInstance(FCKEditorExt.editorName).EditorDocument;

		var jss=oDoc.getElementByTagName("script");
		alert("jss:"+jss.length);
		for(var i=0;i<jss.length;i++){
			alert(jss[i].id);
			if(jss[i].id=="_initFVideo"){jss[i].removeNode(true);break;}
		}
		if(oDoc.getElementById("_initFVideo")){
			oDoc.getElementById("_initFVideo").removeNode(true);
			alert('exist node!');
		}
			
		oDoc.focus();
		oDoc.execCommand("SelectAll");
		var rng=oDoc.selection.createRange();
		rng.collapse(false);
		rng.select();
		FCKeditorAPI.GetInstance(FCKEditorExt.editorName).InsertHtml(iFVideo);
*/		
		//var js=eDoc.createElement("span");
		//js.innerHTML='<script src="../../ab.js"/>';
		//eDoc.body.appendChild(js);
	}
	function _InsertFlashObject(ename){//����Flash����ִ��
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var fUrl=$('flashUrl').value;
		if($('isFlashVideoUrl').checked){
			_appendFlashVideo(fUrl);
		}else{
			var FCK = FCKeditorAPI.GetInstance(ename);
			var win=$(ename+"___Frame").contentWindow;
			oEmbed=(oEmbed==null)?FCK.EditorDocument.createElement( 'EMBED' ):oEmbed;
			oEmbed.src=fUrl;
			oEmbed.wmode="transparent";
			oFakeImage=(oFakeImage==null)?win.FCKDocumentProcessor_CreateFakeImage('FCK__Flash',oEmbed):oFakeImage;
			oFakeImage.setAttribute('_fckflash', 'true',0) ;
			oFakeImage	= FCK.InsertElementAndGetIt(oFakeImage);
			win.FCKFlashProcessor.RefreshView(oFakeImage,oEmbed);
		}
	}
	function _invalidUrl(val){
		return (val=='' || val.toLowerCase()=='http://' || val.substring(0,4).toLowerCase()!='http');
	}
	String.prototype.endsWith=function(suffix){
		var L1 = this.length ;
		var L2 = suffix.length ;
		if ( L2 > L1 )
			return false ;
		return ( L2 == 0 || this.substr( L1 - L2, L2 ) == suffix );
	}
	String.prototype.trim=function(){
		return this.replace(/^\s+|\s+$/g,"");
	}
	function _Ok(){
		if(insertType==INSERT_FLASH){//ִ�в���Flash�Ĳ���
			var sUrl=$('flashUrl').value;
			if(_invalidUrl(sUrl)){
				alert(_getLabel(1));
			}else{
				if($('isFlashVideoUrl').checked && !sUrl.toLowerCase().endsWith(".flv")){
					alert(_getLabel(15));
					return;
				}
				_InsertFlashObject();//�Ϸ���ַ����
				this.Cancel();
			}
			return;	
		};//End if,insert falseh ===========================
		var imgTypeId=(currentImgType==1)?'imgUrl':'imgFile';
		var val=$(imgTypeId).value;
		var isFile=(imgTypeId=='imgFile');
		if(imgTypeId=='imgUrl' && _invalidUrl(val)){
			alert(_getLabel(1));return;
		}
		if(imgTypeId=='imgFile' && val==''){
			alert(_getLabel(2));return;
		}
		//encodeURIComponent
		var sHtml=null;
		if(isFile){
			sHtml=['<img alt="docimages_',imgsCount,'" src="',val,'"/>'];// id="',$('imgFile').name,'"
		}else{
			sHtml=['<img id="',_generateId(),'" alt="',val,'" src="',val,'"/>'];
			//ע��,�����������г����ķ���ͼƬ�Ǹ���<img alt= ,�������ﲻ�ܽ�alt����Ϊ��һ������.
		}
		var isSucc=_insertHtml(sHtml.join(''),FCKEditorExt._sel.ename);
		if(!isSucc)return;
		if(isFile){//�������ϴ��ļ�����Ҫ���ص�ǰ��������һ��ʾ
			//val="file:///"+val;
			imgId=" id='"+$('imgFile').name+"' ";//�Ȼ�ȡimgName,��_newInputFile֮�������Ѿ����ı�
			_newInputFile(val);//�����µ�Input.file��
			$("docimages_num").value=""+imgsCount;
		}
		
		this.Cancel();
	}
	function _newInputFile(_v){
		imgsCount+=1;
		var o=$('imgFile');
		o.removeAttribute("id");
		var s='<input type="file" id="imgFile" name="docimages_'+imgsCount+'" size="30"/>';
		var newFile=document.createElement(s);//ʹ��Input����ʱname�����޷���ֵ�������ַ���Html����
		$('imgFileSpan').insertBefore(newFile,o);
		o.style.display='none';
		/************************/
		//s="<span>"+_v+"&nbsp;<a href='javascript:;' onclick='FCKEditorExt.removeFile(this,\""+o.name+"\")'>ɾ��</a><br/></span>";
		//$('imgFileSpanTemp').innerHTML+=s;//����ɾ������
	}
	function _removeFile(obj,fileName,ename){
		if(!confirm(_getLabel(3)))return;
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var oDoc = FCKeditorAPI.GetInstance(ename).EditorDocument;
		if(oDoc.getElementById(fileName))
			oDoc.getElementById(fileName).removeNode(true);//ɾ���༭���ڵ�ͼƬ
		
		var files=document.getElementsByName(fileName);		
		if(files.length>0){
			files[0].removeNode(true);
		}
		obj.parentNode.removeNode(true);
	}
	function _generateId(){
		var s="img_";
		return s+Math.ceil((Math.random()*8999+1000));
	}
	
	function _insertHtml(sHtml,ename){//��Html���뵽�༭����ȥ��
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var isSucc=false;
		var oEditor = FCKeditorAPI.GetInstance(ename) ;
		// Check the active editing mode.
		if ( oEditor.EditMode == FCK_EDITMODE_WYSIWYG){
			//var oFakeImage = oEditor.Selection.GetSelectedElement() ;
			oEditor.EditorDocument.focus();//�����ý��㣬Ȼ�����ø���ѡ��
			if(FCKEditorExt._sel){
				//oEditor.EditorDocument.selection=FCKEditorExt._sel;
				FCKEditorExt._sel.select();
			}
			oEditor.InsertHtml(sHtml);
			FCKEditorExt._sel=null;
			//alert(sHtml);
			isSucc=true;
		}else alert(_getLabel(4));
		return isSucc;
	}
	function _Cancel(){
		$(this.id).style.display='none';
		$(this.id+'_Image').style.display='none';
		$(this.id+'_Flash').style.display='none';
		$('imgUrl').value='http://';
		$('flashUrl').value='http://';
	}
	function _show(sel){
		if($(this.id).style.display=='block')return;
		insertType=INSERT_IMAGE;
		$(this.id).firstChild.innerHTML=_getLabel(6);
		this._sel=sel;
		$(this.id).style.display='block';
		$(this.id+'_Image').style.display='block';
		$(this.id+'_Flash').style.display='none';
	}
	function _InsertVideo(){
		var sUrl=prompt(_getLabel(5)+"��mms://www.weaver.com.cn/demo.wmv","http://");
		if(sUrl==undefined || sUrl=="");
		else{
			var w=300,h=200;
			var arHtml=new Array(
"<span><object align='middle'  codebase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701' ",
" classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95'",
" class='OBJECT'  id='MediaPlayer'  width='",w,"'  height='",h,"'  autostartvalue='-1' >",
<!--img src=http://www.baidu.com/img/logo-yy.gif align=absbottom hspace=2 alt='::URL::' border=0-->
"<param name='showstatusbar'  value='-1' ></param>",
"<param name='filename'  value='",sUrl,"' ></param>",
"<param name='autostart'  value='-1' ></param>",
"<embed src='",sUrl,"'  type='application/x-oleobject' width='",w,"' height='",h,"'></embed>",
"</object></span>");
			_insertHtml(arHtml.join(''));
		}
	}
	var sCssText=new Array('<style>\n','.editorImgWin{position:absolute; height: 168px;  width: 399px; background-color: #FFFFFF;font-size:9pt; border: 1px Solid #666;display:none;}\n',
	'.editorImgWin input label{display:inline;}\n',
	'</style>').join('');
	document.writeln(sCssText);
	function _initUploadImage(formName,isNonFile,ename){
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(isNonFile)currentImgType=1;
		var oFrm=$(formName);
		oFrm=(oFrm==null)?document.all[formName]:oFrm;
		if(!oFrm){alert('No formName is '+formName);return;}
		var pos=_getPosition($(ename));//+"___Frame"
		var s=new Array(
		'<div id="insertObjectContainer" class="editorImgWin" style="left:',pos.x+200,'px; top:',pos.y+40,'px;">',
	'<div style="font-weight:bold;height:17px;font-size:10pt;padding-top:3px;padding-left:30px;background-color:#CCC;border-bottom:1px solid #666">',_getLabel(6),'</div><br />',
	'<span id="insertObjectContainer_Image">',
	'<div style="padding-left:10px;padding-bottom:10px;',isNonFile?'display:none;':'','">',
	'<label for="imgTypeUrl"><input style="width:20px;" type="radio" name="imgType" onclick="FCKEditorExt.selectImageType(this)" id="imgTypeUrl" value="1" ',isNonFile?' checked="checked" ':'',' />',_getLabel(7),'</label>',
	isNonFile?'':'<label for="imgTypeFile"><input style="width:20px;" onclick="FCKEditorExt.selectImageType(this)" type="radio" name="imgType" checked="checked" id="imgTypeFile" value="2"/>'+_getLabel(8)+'</label>',
	'</div>',
	'<div style="padding-left:10px;">',
		'<span id="imgUrlSpan" style="display:',isNonFile?'':'none','">'+_getLabel(9)+'��<input name="imgUrl" value="http://" id="imgUrl" style="width:280px;" size="40"/></span>',
		isNonFile?'':'<span id="imgFileSpan">'+_getLabel(10)+'��<input style="width:280px;" type="file" id="imgFile" name="docimages_0" size="30">',
		isNonFile?'':'<input type="hidden" name="docimages_num" id="docimages_num" value="0"/>',
		isNonFile?'':'</span>',
		isNonFile?'':'<span id="imgFileSpanTemp"></span>',
	'</div>',
	'</span>',
	'<span style="display:none;padding-left:10px;" id="insertObjectContainer_Flash">',
	'<label for="isFlashVideoUrl"><input style="width:20px;" type="checkbox" id="isFlashVideoUrl">�Ƿ�Flash��Ƶ(*.flv)</label><br>',
	'Flash��ַ:<input id="flashUrl" style="width:280px;" size="40">',
	'</span>',
	'<br/><div align="center"><button accesskey="O" onclick="FCKEditorExt.Ok();" >',_getLabel(11),'(<u>O</u>)</button>&nbsp;&nbsp;&nbsp;',
	'<button onclick="FCKEditorExt.Cancel();" accesskey="C">',_getLabel(12),'(<u>C</u>)</button>',
	'</div></div>');
		var span=document.createElement("span");
		oFrm.appendChild(span);
		span.innerHTML=s.join('');
	}
	
	function _switchEditMode(ename){
		if(!isInit)return;
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var oEditor = FCKeditorAPI.GetInstance(ename) ;
		if(isTextMode){
			$(ename).style.display='none';
			$(ename+"___Frame").style.display='block';
			oEditor.SetHTML($(ename).value);
			isTextMode=false;
			return;//���ı��༭ģʽ�л������ӻ�״̬
		}
		oEditor.SwitchEditMode();
	}
	var isTextMode=false;
	function _switchTextMode(a,ename){
		if(!isInit)return;
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(isTextMode)return;
		var isSwitched=false;
		var editmode=function(){
		    var oEditor = FCKeditorAPI.GetInstance(ename);
			var txt=oEditor.GetXHTML(true);
			var div=document.createElement("div");
			div.innerHTML=txt;
			$(ename).value=div.innerText;
			$(ename).style.display='block';
			$(ename+"___Frame").style.display='none';
			isTextMode=true;
			isSwitched=true;       
		}
				
         if(typeof(a)=="undefined"){        
		     if(confirm(_getLabel(13)))  editmode(ename);
		              
		}else{
		     editmode(ename);
		}
		return isSwitched;
	}
	function _fullScreen(ename){
		if(!isInit)return;
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var oEditor = FCKeditorAPI.GetInstance(ename);
		oEditor.Commands.GetCommand("FitWindow").Execute();
	}
	function _getPosition(o){
		var p1= o.offsetLeft,p2= o.offsetTop;
		do {
			o = o.offsetParent;
			p1 += o.offsetLeft;
			p2 += o.offsetTop;
		}while( o.tagName.toLowerCase()!="body");
		return {"x":p1,"y":p2};
	}
	var INSERT_IMAGE=1;
	var INSERT_FLASH=2;
	var insertType=1;
	var oFakeImage=null;
	var oEmbed=null
	function _flashVideoDialog(){
		if(typeof(flvBrowserUrl)=="undefined")return;
		if(flvBrowserUrl!=null && flvBrowserUrl!=""){//������Ƶ�б��ļ���
			var sArgs="dialogWidth:600px,dialogHeight:450px";
			var ret=window.showModalDialog(flvBrowserUrl,"",sArgs);
			if(ret){
				_appendFlashVideo(ret);
			}
		}
	}
	function _showFlashDialog(ooFakeImage,ooEmbed){
		if($(this.id).style.display=='block')return;
		//��ʼ��
		oFakeImage=ooFakeImage;
		var oEmbed=ooEmbed;
		var fUrl=(oEmbed==null)?"http://":oEmbed.src;
		$('flashUrl').value=fUrl;
		/////////////////////////////////////////
		insertType=INSERT_FLASH;
		$(this.id).firstChild.innerHTML=_getLabel(14);
		$('isFlashVideoUrl').checked=false;
		$(this.id).style.display='block';
		$(this.id+'_Image').style.display='none';
		$(this.id+'_Flash').style.display='block';
	
	}
	
	var _chedkId=null;
	function _checkText(arg0,ename){
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(arg0=="INIT"){
			if(_chedkId==null){
				_chedkId="spadsdnId";
				var t=$(ename);
				t=(t==null)?document.all[ename]:t;
				t.insertAdjacentHTML("beforeBegin",'<span id="'+_chedkId+'"><img src="/images/BacoError.gif" align="absMiddle"></span>');
			}//���Ѿ����ڱ���ʱ����ֱ�Ӷ�ȡ��
			_doCheck(ename);
			return;	
		}else{
			if(typeof(arg0)=="string")_chedkId=arg0;//�����Ѿ����ں�̾�ű��ǣ�����¼
			else if(typeof(arg0)=="object")_chedkId=arg0.id;
			var txtCheckedNum = getTxtCheckedNum(ename);
			FCKEditorExt.txtChecked[txtCheckedNum]=true;
		}
	}

	function _doCheck(ename){
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		var oFrm=$(ename+"___Frame");
		var sImg='<img src="/images/BacoError.gif" align="absMiddle">';
		var spanId=_chedkId;
		function setCheck(){
			$(ename).value=FCKEditorExt.getText(ename);
			if($(ename).viewtype==null){
				var html=FCKEditorExt.getText(ename);
				if(html=="")$(ename+"span").innerHTML=sImg;
				else $(ename+"span").innerHTML="";
			}else{
				if($(ename).viewtype=="1"){
					var html=FCKEditorExt.getText(ename);
					if(html=="")$(ename+"span").innerHTML=sImg;
					else $(ename+"span").innerHTML="";
				}
			}
		}
		oFrm.attachEvent("onfocus",setCheck);
		oFrm.attachEvent("onblur",setCheck);
		setCheck();
	}
	
	var isLoaded=false;//���Ǳ༭���Ƿ�װ������
	function _loadComplete(o){
		isLoaded=true;
		var _txtchecked = getTxtChecked(o.Name);
		if(_txtchecked)_checkText("INIT", o.Name);//��ʼ����̾��
		if(_isExpand) o.ToolbarSet.Expand();
		else o.ToolbarSet.Collapse() ;
		if(typeof(FCKEditorExt['complete'])=='function')FCKEditorExt['complete'](o);
		/********************************************/		
		//$(o.Name+"___Frame").attachEvent("onblur",FCKeditorAPI.GetInstance(o.Name).updateContent);
	}
	function getTxtChecked(ename){
		var i=0;
		for(i=0; i<FCKEditorExt.editorName.length; i++){
			if(ename == FCKEditorExt.editorName[i]){
				break;
			}
		}
		return FCKEditorExt.txtChecked[i];
	}
	function getTxtCheckedNum(ename){
		var i=0;
		for(i=0; i<FCKEditorExt.editorName.length; i++){
			if(ename == FCKEditorExt.editorName[i]){
				break;
			}
		}
		return i;
	}
	var _isExpand=true;
	function _toolbarExpand(isExpand,ename){
		if(isEmpty(ename)) ename=FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(!isLoaded){//δ��ʼ������
			_isExpand=(isExpand==undefined)?true:isExpand;
			return;
		}
		var oEditor = FCKeditorAPI.GetInstance(ename);
		if(isExpand)
			oEditor.ToolbarSet.Expand();
		else
			oEditor.ToolbarSet.Collapse() ;
	}
	
	function _stripScripts(s){
		var script=new RegExp('(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)', 'img');
		//var object=new RegExp('(?:<object.*?>)((\n|\r|.)*?)(?:<\/object>)', 'img');
		var iframe=new RegExp('(?:<iframe.*?>)((\n|\r|.)*?)(?:<\/iframe>)', 'img');
		return s.replace(script,'').replace(iframe,'');//.replace(object,'');
	}
	
	function _filterXss(s){
		var ename = FCKEditorExt.editorName[FCKEditorExt.editorName.length-1];
		if(ename != "layouttext"){
			var errReg1=/(<\w+ [^<>]*)onload='[^']*' ?([^<>]*\/?>)/img;
			var errReg2=/(<\w+ [^<>]*)onload="[^"]*" ?([^<>]*\/?>)/img;
			var loadReg1=/(<\w+ [^<>]*)onerror='[^']*' ?([^<>]*\/?>)/img;
			var loadReg2=/(<\w+ [^<>]*)onerror="[^"]*" ?([^<>]*\/?>)/img;
			var erpReg1=/(<\w+ [^<>]*)style='.+expression\(.*\)[^']*'([^<>]*\/?>)/img;
			var erpReg2=/(<\w+ [^<>]*)style=".+expression\(.*\)[^"]*"([^<>]*\/?>)/img;
			s=s.replace(errReg1,"$1$2").replace(loadReg1,"$1$2").replace(erpReg1,"$1$2");
			s=s.replace(errReg2,"$1$2").replace(loadReg2,"$1$2").replace(erpReg2,"$1$2");
			s=_stripScripts(s);
		}
		return s;
	}
	function _resize(w,h){
		$(FCKEditorExt.editorName+"___Frame").style.width=w;
		$(FCKEditorExt.editorName+"___Frame").style.height=h;
	}
	
}());

function FCKeditor_OnComplete(editorInstance)
{
	/*by alan
	 * �����㶨λ����һ��������,��������������ͣ����HTML�༭���� 
	 * for td:10409
	 */
	try {
		var i = 0;
		for(var j=0; j<document.getElementsByTagName('INPUT').length; j++) {
			var obj = document.getElementsByTagName('INPUT')[i];
			if(obj.type!='hidden' && obj.style.display!='none') {
				obj.focus();
				break;
			}
			i++;
		}
	}
	catch(e){}
	/*end by alan*/
	FCKEditorExt._loadComplete(editorInstance);
}
