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
	jQuery("#listForm").attr("action", "/mbaNew/korNotice/list.do").submit();

}

function fnAllListPaging (pageIndex) {

	if ( pageIndex == null || pageIndex == "" ) {
		pageIndex = jQuery("#lpageIndex").val();
	}

	jQuery("#lpageIndex").val(pageIndex);
	jQuery("#listForm").attr("action", "/mbaNew/korNotice/allList.do").submit();

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

	jQuery("#listForm").attr("action", "/mbaNew/korNotice/view.do").submit();

}

function fnAllList () {
	jQuery("#listForm").attr("action", "/mbaNew/korNotice/allList.do").submit();
}

function fnList () {
	jQuery("#listForm").attr("action", "/mbaNew/korNotice/list.do").submit();
}

function fnSearch () {

	jQuery("#lsearchCnd").val(jQuery("#searchCnd").val());
	jQuery("#lsearchWrd").val(jQuery("#searchWrd").val());
	jQuery("#cate_id2").val(jQuery("#searchCateId2 option:selected").val());
	jQuery("#cate_id").val(jQuery("#searchCateId option:selected").val());
	jQuery("#lpageIndex").val(1);
	if (typeof(jQuery("#lpageCount").val()) != "undefined"){
		jQuery("#lpageCount").val(jQuery("#pageCount").val());
	}

	jQuery("#listForm").attr("action", "/mbaNew/korNotice/list.do").submit();

}

function fnAllListSearch () {

	jQuery("#lsearchCnd").val(jQuery("#searchCnd").val());
	jQuery("#lsearchWrd").val(jQuery("#searchWrd").val());

	if(jQuery("#searchCateId2 option:selected").val() != undefined) {
		jQuery("#cate_id2").val(jQuery("#searchCateId2 option:selected").val());
	}

	jQuery("#cate_id").val(jQuery("#searchCateId option:selected").val());
	jQuery("#lpageIndex").val(1);

	jQuery("#listForm").attr("action", "/mbaNew/korNotice/allList.do").submit();

}

function fnWrite () {

	if (jQuery("#lwriteAuth").length > 0) {
		if (jQuery("#lwriteAuth").val() != "Y") {
			alert("권한이 없습니다.");
			return;
		}
	}

	jQuery("#listForm").attr("action", "/mbaNew/korNotice/write.do").submit();

}

function fnFileCtrl (gbn) {

	var maxSize = 5;
	if ( jQuery("#fileListSize").length > 0 ) {

		maxSize = 5 - parseInt( jQuery("#fileListSize").val() );

	}

	if ( gbn == "plus" ) {

		for (var i = 0; i < maxSize; i++) {

			if ( jQuery(".f_num:eq("+ i +")").css("display") == "none" ) {
				jQuery(".f_num:eq("+ i +")").show();
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

			for (var i = (maxSize - 1); i > 0; i--) {

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

//browser detect
var browser = (function() {
	var s = navigator.userAgent.toLowerCase();
	var match = /(webkit)[ \/](\w.]+)/.exec(s)
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

	var filePath = jQuery(obj).val();

	if ( filePath.match(/\.(EXE|HTML|HTML|JS|JSP|ASP|PHP|CAP|XML|XHTML|exe|html|html|js|jsp|asp|php|cap|xml|xhtml)$/i) ) {
		alert("첨부할수 없는 유형의 파일입니다.");
		fnClearFile(obj);
		return true;
	} else {
		return true;
	}

}

//무결성&길이 체크
function fnEmptyCheck (obj, len, msg1, msg2) {

	var tempVal = jQuery(obj).val();
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

	var tempVal = jQuery(obj).val();

	tempVal = tempVal.toUpperCase();
	checkWord = checkWord.toUpperCase();

	if ( tempVal.indexOf( checkWord ) > -1 ) {
		alert(msg1);
		jQuery(obj).focus();
		return false;
	}

	return true;
}

//유효성 검사
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

	if( jQuery('input[name="temp_char3"]').is(":checked") ){

		var tempVal = jQuery("#temp_char4").val().trim();
		if (tempVal == null || tempVal == "") {
			alert("공지 시작일을 입력해 주세요.");
			jQuery("#temp_char4").focus();
			return;
		}

		tempVal = jQuery("#temp_char5").val().trim();
		if (tempVal == null || tempVal == "") {
			alert("공지 종료일을 입력해 주세요.");
			jQuery("#temp_char5").focus();
			return;
		}
	}

	oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됩니다.
	var sIR = document.getElementById("content").value;
	while ( sIR.indexOf(unescape("%uFEFF")) != -1 ) {
		sIR = sIR.replace(unescape("%uFEFF"), "");
	}
	document.getElementById("content").value = sIR;

	var tempStr = jQuery("#content").val();

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

		jQuery("#frm").attr("action", "/mbaNew/korNotice/insert.do").submit();

	} else {

		return;

	}

}

function fnReset () {

	document.getElementById("frm").reset();

	var tempVal = "";
	var viewContent = jQuery("#content").val();

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

	jQuery("#listForm").attr("action", "/mbaNew/korNotice/modify.do").submit();

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

		jQuery("#frm").attr("action", "/mbaNew/korNotice/update.do").submit();

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

		jQuery("#listForm").attr("action", "/mbaNew/korNotice/delete.do").submit();

	} else {

		return;

	}

}

function fnNoticeChk () {

	if( jQuery('input[name="temp_char3"]').is(":checked") ){

		if ( jQuery("#list_id").val() == 'FA1' ){

			jQuery.ajax({

				url : "/korNotice/notCheck.do"
				, async : false
				, type : "post"
				, dataType : "json"
				, data : {
					id : jQuery("#list_id").val()
				}
				, success : function(json) {

					if ( json.gbn == "Y" ) {
						alert("고정공지는 학과당 5개이상 사용할 수 없습니다.");
						jQuery('input[name="temp_char3"]:checked').attr("checked", false);
					} else {
						jQuery("#date").show();

					}

				}
				, error : function() {
					alert("error");
					return;
				}

			});

		} else {

			jQuery("#date").show();

		}

	}else{
		// 공지기간 초기화
		jQuery("#temp_char4").val("");
		jQuery("#temp_char5").val("");
		jQuery("#date").hide();

	}
}

function fnFileDown (seq, fSeq) {
	jQuery("#dseq").val(seq);
	jQuery("#df_seq").val(fSeq);
	jQuery("#downForm").attr("action", "/common/FileDown.do").submit();
}

function goMoreDetail(tag) {
	var frm = $("form[name=detailFrm]")[0];
	$('#searchWord').val(tag);
	frm.action = "/search/search.do";
	frm.submit();
}