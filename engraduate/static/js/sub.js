$(function(){
    // snb
    $('.snb-depth1 >ul > li > a').on('click', function(e) {
        const $li = $(this).parent();
        const $nextElement = $(this).next();
        
        // 클릭 이벤트 처리
        $($li).addClass('on');
        $('.snb-depth1 >ul > li').not($li).removeClass('on active');
        $('.snb-depth2').stop().slideUp();


        if ($li.hasClass('on')) {
            $nextElement.stop().slideDown(); // this의 다음 요소 슬라이드 다운
        }
    });
    
    // Enter 이벤트는 keydown으로 분리
    $('.snb-depth1 > li > a').on('keydown', function() {
        if (e.key === 'Enter') {
            $(this).trigger('click');
            alert('Enter 키를 눌렀습니다.');
        }
    });
    
    // faq
    $(".faq-btn").click(function() {
		$(this).parent().next(".faq-answer").slideToggle();
		$(this).toggleClass("opened");
	});
})