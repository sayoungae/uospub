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
	jQuery("#listForm").attr("action", "/mbaNew/korOpen/list.do").submit();
	
}

function fnClearSearchWrd () {
	
	jQuery("#searchWrd").val("");
	
}

function fnList () {
	jQuery("#listForm").attr("action", "/mbaNew/korOpen/list.do").submit();
}

function fnSearch () {
	
	jQuery("#lsearchCnd").val(jQuery("#searchCnd").val());
	jQuery("#lsearchWrd").val(jQuery("#searchWrd").val());
	jQuery("#lpageIndex").val(1);
	
	jQuery("#listForm").attr("action", "/mbaNew/korOpen/list.do").submit();
	
}

function fnFileDown (seq, fSeq) {
	jQuery("#dseq").val(seq);
	jQuery("#df_seq").val(fSeq);
	jQuery("#downForm").attr("action", "/common/FileDown.do").submit();
}

$(function(){
	/* FAQ */

	// FAQ 질문을 클릭했을 때
	$(".faq-question").click(function() {
		// 클릭한 질문 아래에 있는 답변을 토글(보이기/숨기기)
		$(this).next(".faq-answer").slideToggle();

		// 클릭한 아이콘의 클래스를 토글하여 이미지를 변경
		$(this).find(".icon").toggleClass("opened");
	});

	// FAQ 답변을 숨김 (디폴트 상태)
	//$(".faq-answer").hide();
});