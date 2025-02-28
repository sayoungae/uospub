
function newsTab(num,tot,obj) {
	for(var i=1;i<=tot;i++) {
		document.getElementById(obj+i).src = document.getElementById(obj+i).src.replace("on.png",".png");
		document.getElementById(obj+"Cont"+i).className = "hide";
	}
	document.getElementById(obj+num).src = document.getElementById(obj+num).src.replace(".png","on.png");
	document.getElementById(obj+"Cont"+num).className = "";
}
// 기본 팝업
function popup(url,id,width,height) {
	window.open(url,id,"toolbar=no,location=no,status=no,menubar=no,scrollbars=no,left=0, top=0, resizable=no,width=" + width + "px,height=" + height + "px");
}
function popup2(url,id,width,height) {
	window.open(url,id,"toolbar=no,location=no,status=no,menubar=no,scrollbars=no,left=0, top=0, resizable=no,width=" + width + "px,height=" + height + "px");
}


//파일다운로드 type1
function fnFileDown (seq, fSeq) {

	jQuery("#dseq").val(seq);
	jQuery("#df_seq").val(fSeq);
	if( isMobile() ){
		var hurl = "/common/view/common/FileDown.do?dseq="+seq+"&df_seq="+fSeq;
		jQuery("#downForm").attr("action", hurl).submit();
	}
	else{
		jQuery("#downForm").attr("action", "/common/FileDown.do").submit();
	}

}

//파일다운로드 type2
function fnViewFileDown (file_path, file_upNm, file_orgNm) {

	jQuery("#file_path").val(file_path);
	jQuery("#file_upNm").val(file_upNm);
	jQuery("#file_orgNm").val(file_orgNm);

	jQuery("#downForm").attr("action", "/common/view/FileDown.do").submit();
	// if( isMobile() ){
	// 	var hurl = "/common/view/FileDown.do?file_path="+file_path+"&file_upNm="+file_upNm+"&file_orgNm="+file_orgNm;
	// 	jQuery("#downForm").attr("action", hurl).submit();
	// }
	// else{
	// 	jQuery("#downForm").attr("action", "/common/view/FileDown.do").submit();
	// }

}

//파일다운로드 type3
function fnDirFileDown(file_path, file_upNm, file_orgNm) {
	jQuery("#file_path").val(file_path);
	jQuery("#file_upNm").val(file_upNm);
	jQuery("#file_orgNm").val(file_orgNm);

	jQuery("#downForm").attr("action", "/common/dir/FileDown.do").submit();

}

function fnGetInternetExplorerVersion() {

	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
	}

	if ( rv > -1 ) {

		if ( rv <= 8 ) {
			jQuery(".dimm").css("filter", "alpha(opacity=80)");
			jQuery(".dimm .addLayer").css("filter", "alpha(opacity=80)");
		}

	}

}

//html 제거 정규식
function fnRemoveHtml(text)
{
	text = text.replace(/<br>/ig, "\n"); // <br>을 엔터로 변경
	text = text.replace(/&nbsp;/ig, " "); // 공백      
	// HTML 태그제거
	text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");

	// shkim.add.
	text = text.replace(/<(no)?script[^>]*>.*?<\/(no)?script>/ig, "");
	text = text.replace(/<style[^>]*>.*<\/style>/ig, "");
	text = text.replace(/<(\"[^\"]*\"|\'[^\']*\'|[^\'\">])*>/ig, "");
	text = text.replace(/<\\w+\\s+[^<]*\\s*>/ig, "");
	text = text.replace(/&[^;]+;/ig, "");
	text = text.replace(/\\s\\s+/ig, "");

	return text;
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/gi, "");
};

//모바일 접속여부 체크
function isMobile(){
	var filter = "win16|win32|win64|mac|macintel";

	if( navigator.platform  ){
		if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
			return true;
		}else{
			return false;
		}
	}
}
