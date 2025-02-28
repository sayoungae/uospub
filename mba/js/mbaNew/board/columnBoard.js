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
	jQuery("#listForm").attr("action", "/mbaNew/korColumn/list.do").submit();
	
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
	
	jQuery("#listForm").attr("action", "/mbaNew/korColumn/view.do").submit();
	
}

function fnList () {
	jQuery("#listForm").attr("action", "/mbaNew/korColumn/list.do").submit();
}

function fnSearch () {
	jQuery("#lsearchCnd").val(jQuery("#searchCnd").val());
	jQuery("#lsearchWrd").val(jQuery("#searchWrd").val());
	jQuery("#lpageIndex").val(1);
	if (typeof(jQuery("#lpageCount").val()) != "undefined"){
		jQuery("#lpageCount").val(jQuery("#pageCount").val());
	}
	jQuery("#listForm").attr("action", "/mbaNew/korColumn/list.do").submit();
	
}
