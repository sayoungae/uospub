function fnPressEnter () {
	
	if (event.keyCode == 13) {
		fnSearch();
	}
	
}

function fnPaging (pageIndex) {

	if ( pageIndex == null || pageIndex == "" ) {
		pageIndex = jQuery("#lpageIndex").val();
	}

	jQuery("#lpageIndex").val(pageIndex);
	jQuery("#lpageCount").val($("#pageCount").val());
	jQuery("#listForm").attr("action", "/mbaNew/korReply/list.do").submit();

}

function fnClearSearchWrd () {
	
	jQuery("#searchWrd").val("");
	
}

function fnView (sort, seq) {
	
	if (jQuery("#lviewAuth").length > 0) {
		if (jQuery("#lviewAuth").val() != "Y") {
			alert("보기 권한이 없습니다.");
			return;
		}
	}
	
	jQuery("#lseq").val(seq);
	jQuery("#lsort").val(sort);
	
	jQuery("#listForm").attr("action", "/mbaNew/korReply/view.do").submit();
	
}

function fnList () {
	jQuery("#listForm").attr("action", "/mbaNew/korReply/list.do").submit();
}

function fnSearch () {
	
	jQuery("#lsearchCnd").val(jQuery("#searchCnd").val());
	jQuery("#lsearchWrd").val(jQuery("#searchWrd").val());
	jQuery("#lpageIndex").val(1);
	
	jQuery("#listForm").attr("action", "/mbaNew/korReply/list.do").submit();
	
}

function fnWrite () {
	
	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}
	
	jQuery("#listForm").attr("action", "/mbaNew/korReply/write.do").submit();
	
}

function fileCtrl (gbn) { 
	
	let maxSize = 5;
	if ( jQuery("#fileListSize").length > 0 ) {
		
		maxSize = 5 - parseInt( jQuery("#fileListSize").val() );
		
	}
	
	if ( gbn == "plus" ) {
		
		for (let i = 0; i < maxSize; i++) {

			// let $fileDiv = jQuery(".f_num:eq("+i+")");
			//
			// if ($fileDiv.hasClass("hide")) {
			// 	jQuery(".f_num:eq("+i+")").show();
			// 	break;
			// }

			if (jQuery(".f_num:eq("+i+")").css("display") == "none") {
				jQuery(".f_num:eq("+i+")").show();
				break;
			}
			
			if ( i >= (maxSize - 1) ) {
				alert("첨부 가능한 파일은 최대 "+ maxSize +"개 입니다.");
				return;
			}
			
		}
		
	} else if ( gbn == "minus" ) {
		
		if ( (maxSize - 1) == 0 ) {
			alert("1개 이하로는 삭제할수없습니다.");
			return;
		} else {
			
			for (let i = (maxSize - 1); i > 0; i--) {
				
				if ( jQuery(".f_num:eq("+ i +")").css("display") != "none" ) {
					jQuery(".f_num:eq("+ i +")").hide();
					fnClearFile(jQuery(".f_num:eq("+ i +")"));
					break;
				}
				
				if ( i <= 1 ) {
					alert("1개 이하로는 삭제할수없습니다.");
					return;
				}
				
			}
			
		}
		
	}
	
}

//개편으로 추가 20161128 addClass로 변경
function fileCtrl2 (gbn) { 
	
	let maxSize = 5;
	if ( jQuery("#fileListSize").length > 0 ) {
		
		maxSize = 5 - parseInt( jQuery("#fileListSize").val() );
		
	}
	
	if ( gbn == "plus" ) {
		
		for (let i = 0; i < maxSize; i++) {
			
			if ( jQuery(".f_num:eq("+ i +")").css("display") == "none" ) {
				jQuery(".f_num:eq("+ i +")").removeClass("hide");
				break;
			}
			
			if ( i >= (maxSize - 1) ) {
				alert("첨부 가능한 파일은 최대 "+ maxSize +"개 입니다.");
				return;
			}
			
		}
		
	} else if ( gbn == "minus" ) {
		
		if ( (maxSize - 1) == 0 ) {
			alert("1개 이하로는 삭제할수없습니다.");
			return;
		} else {
			
			for (let i = (maxSize - 1); i > 0; i--) {
				
				if ( jQuery(".f_num:eq("+ i +")").css("display") != "none" ) {
					jQuery(".f_num:eq("+ i +")").addClass("hide");
					fnClearFile(jQuery(".f_num:eq("+ i +")"));
					break;
				}
				
				if ( i <= 1 ) {
					alert("1개 이하로는 삭제할수없습니다.");
					return;
				}
				
			}
			
		}
		
	}
	
}

//browser detect
let browser = (function() {
	let s = navigator.userAgent.toLowerCase();
	let match = /(webkit)[ \/](\w.]+)/.exec(s)
			|| /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s)
			|| /(msie) ([\w.]+)/.exec(s)
			|| /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];
	return {
		name : match[1] || "",
		version : match[2] || "0"
	};
}());

function fnClearFile(obj) {

	if (browser.name == "msie") {
		jQuery(obj).replaceWith(jQuery(obj).clone(true));
	} else {
		jQuery(obj).val("");
	}

}

function fnCheckFileType (obj) {
	
	let filePath = jQuery(obj).val();
	
	if ( filePath.match(/\.(EXE|HTML|HTML|JS|JSP|ASP|PHP|CAP|XML|XHTML|exe|html|html|js|jsp|asp|php|cap|xml|xhtml)$/i) ) {
		alert("첨부할수 없는 유형의 파일입니다.");
		fnClearFile(obj);	
		return true;
	} else {
		return true;
	}
	
}
	
// 무결성&길이 체크
function fnEmptyCheck (obj, len, msg1, msg2) {
	
	let tempVal = jQuery(obj).val();
	if ( tempVal == null || tempVal == "" )	{
		alert(msg1);
		jQuery(obj).focus();
		return false;
	} else if ( tempVal.length > len ) {
		alert(msg2);
		jQuery(obj).focus();
		return false;
	}
	
	return true;
}

// 단어 체크 
function fnWordCheck (obj, checkWord, msg1) {
	
	let tempVal = jQuery(obj).val();
	
	tempVal = tempVal.toUpperCase();
	checkWord = checkWord.toUpperCase();
	
	if ( tempVal.indexOf( checkWord ) > -1 ) {
		alert(msg1);
		jQuery(obj).focus();
		return false;
	}
	
	return true;
}

// 유효성 검사
function fnEffectCheck () {
	

	
	if ( !fnEmptyCheck( jQuery("#title"), 100, "제목을 입력해 주세요", "제목을 100자 이하로 입력해 주세요." ) ) { 
		return false;
	}
	if ( !fnWordCheck ( jQuery("#title"), "script", "제목에 script 라는 단어는 입력하실수 없습니다." ) ) {
		return false;
	}
	if ( !fnWordCheck ( jQuery("#title"), "font", "제목에 font 라는 단어는 입력하실수 없습니다." ) ) {
		return false;
	}
	
	oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됩니다.
	let sIR = document.getElementById("content").value; 
	while ( sIR.indexOf(unescape("%uFEFF")) != -1 ) {
		sIR = sIR.replace(unescape("%uFEFF"), "");
	}
    document.getElementById("content").value = sIR;
    	
	let tempStr = jQuery("#content").val();
	
	if ( tempStr.indexOf("img") != -1 || tempStr.indexOf("IMG") != -1 ) {
		
		
		
	} else {
		
		tempStr = fnRemoveHtml(tempStr);
		tempStr = tempStr.trim();
		
		if ( tempStr == null || tempStr == "" ) {
			alert("내용을 입력해 주세요");
			oEditors.getById["content"].exec("FOCUS",[]); 
			return false;
		}
		
	}
	
	if ( !fnWordCheck ( jQuery("#content"), "script", "제목에 script 라는 단어는 입력하실수 없습니다." ) ) {
		return false;
	}
	
	let tempVal = jQuery("input[name=open_yn]:checked").val();
	if( tempVal == null || tempVal == "" ) {
		alert("공개 여부를 선택해 주세요.");
		return false;
	}
	
	return true;
}

function fnInsert () {
	
	if ( !fnEffectCheck() )	{
		return;
	}
	
	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}
	
	if ( confirm("글을 등록 하시겠습니까?") ) {
		
		jQuery("#frm").attr("action", "/mbaNew/korReply/insert.do").submit();
		
	} else {
		
		return;
		
	}
	
}

function fnReset () {
	
	document.getElementById("frm").reset();
	
	let tempVal = "";
	let viewContent = jQuery("#content").val();
	
	if( viewContent != null && viewContent != "" ) {
		tempVal = viewContent;
	}
	
	oEditors.getById["content"].exec("SET_CONTENTS", [tempVal]); 
	
}

function fnModify () {
	
	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}
	
	jQuery("#listForm").attr("action", "/mbaNew/korReply/modify.do").submit();
	
}

function fnUpdate () {
	
	if ( !fnEffectCheck() )	{
		return;
	}
	
	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}
	
	if ( confirm("글을 수정 하시겠습니까?") ) {
		
		jQuery("#file_yn").val(
			jQuery("input[name=file_del]:checked").map(
				function(){
					return this.value;
				}
			).get().join("-")
		);
		
		jQuery("#frm").attr("action", "/mbaNew/korReply/update.do").submit();
		
	} else {
		
		return;
		
	}

}

function fnDelete () {
	
	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}
	
	if ( confirm("글을 삭제 하시겠습니까?") ) {
		
		jQuery("#listForm").attr("action", "/mbaNew/korReply/delete.do").submit();
		
	} else {
		
		return;
		
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