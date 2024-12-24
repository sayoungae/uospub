$(function(){

    const mVisual = new Swiper('.visual-slide', {
        speed: 800,
		loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            prevEl: '.mvSlide_prev',
            nextEl: '.mvSlide_next',
        },
        pagination: {
            el: '.swiper-progress',
            type: 'progressbar',
        },
        on:{
            init: function () {
                updatePageNumber(this);
            },
            slideChange: function () {
                updatePageNumber(this);
            },
            realIndexChange: function () {
                // 메인 슬라이드
                $('.visual-slide .swiper-slide.on').removeClass('on');
                var target = this.realIndex + 1;
                setTimeout(function(){
                    $('.visual-slide .swiper-slide.bg0' + target).addClass('on');
                }, 300);
            },
            beforeChange: function(){

            }
        }
    });
    // 페이지 번호 업데이트 함수
    function updatePageNumber(mVisual) {
        const pageCurrent = document.querySelector('.currentPage');
        const pageTotal = document.querySelector('.totalPage');

        const current = mVisual.realIndex + 1; // 현재 슬라이드 (0부터 시작하므로 +1)
        const total = mVisual.slides.length; // 실제 슬라이드 개수
        pageCurrent.textContent = `${current}`;
        pageTotal.textContent = `${total}`;

    }
    var sw = 0;
    $('.btn_pause').click(function(){
        if(sw==0){
            mVisual.autoplay.stop();
            sw = 1;
        }
    });
    $('.btn_play').click(function(){
        if(sw==1){
            mVisual.autoplay.play();
            sw = 0;
        }
    });

    // m-introduce introduce_zone
    $(".introduce_zone .accBtn").each(function(){
        let t = $(this);
        if(t.parent().hasClass("active")){
            t.attr("title","활성 탭").closest("li").siblings().find(".accBtn").attr("title","비활성 탭");
        }
    });
    $(".introduce_zone .accBtn").on("click",function(){
        let t = $(this);
        t.closest("li").addClass("active").siblings().removeClass("active");
        if(t.hasClass("accBtn")){ //접근성
            t.attr("title","활성 탭").closest("li").siblings().find(".accBtn").attr("title","비활성 탭");
        }
    });
    const quickSlide = new Swiper('.quick-slide', {
        a11y:false,
        speed: 800,
		//loop: true,
        spaceBetween: 10,
        navigation: {
            prevEl: '.quickSlide_prev',
            nextEl: '.quickSlide_next',
        },
        slidesPerView: 8,
        breakpoints: {
            1200: {
                slidesPerView: 8,
                slidesPerGroup:1,
                spaceBetween: 20,
                grid:{
                    fill:'row',
                    rows:2,
                },
            },
            1024: {
                slidesPerView: 6,
                slidesPerGroup:6,
                spaceBetween: 20,
                grid:{
                    fill:'row',
                    rows:2,
                },
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup:4,
                spaceBetween: 10,
                grid:{
                    fill:'row',
                    rows:2,
                },
            },
            481: {
                slidesPerView: 3,
                slidesPerGroup:3,
                spaceBetween: 10,
                grid:{
                    fill:'row',
                    rows:3,
                },
            },
            0: {
                slidesPerView: 3,
                slidesPerGroup:3,
                spaceBetween: 10,
                grid:{
                    fill:'row',
                    rows:3,
                },
            }
        }
        
    });
    quickSlide();
});