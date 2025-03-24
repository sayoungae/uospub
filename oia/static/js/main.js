

$(function(){
    const mslide = new Swiper('.m-slide', {
        // 옵션 설정
        a11y: false,
        init:true,
        intialSlide:0,
        speed: 800,
		loop: true,
        loopedSlides:2,
        breakpoints: {
            1401: {
                slidesPerView: 'auto',
                spaceBetween: 40,
                centeredSlides: true,
                loopedSlides: 1,
            },
        },
        navigation: {
            prevEl: '.mvSlide_prev',
            nextEl: '.mvSlide_next',
        },
        on:{
            realIndexChange: function () {
                // 메인 슬라이드
                $('.m-slide .swiper-slide.on').removeClass('on');
                var target = this.realIndex + 1;
                setTimeout(function(){
                    $('.m-slide .swiper-slide').addClass('on');
                }, 300);
            }
        }
    });
    const visitSlide = new Swiper('.visit-slide', {
        // 옵션 설정
        init:true,
        intialSlide:0,
        speed: 800,
		loop: true, // 접근성시 loop 주석처리 필요
        slidesPerView: 1.2,
        slidesPerGroup : 1,
        spaceBetween: 10,
        navigation: {
            prevEl: '.visitSlide_prev',
            nextEl: '.visitSlide_next',
        },
        breakpoints: {
            761: {
                spaceBetween: 60,
                slidesPerView: 2,
                slidesPerGroup : 2,
            },
            481: {
                enabled: true,
                spaceBetween: 20,
                slidesPerView: 2,
                slidesPerGroup : 2,
            },
            0: {
                enabled: false,
            },
        }
    });
    const guideSlide = new Swiper('.guide-slide', {
        // 옵션 설정
        init:true,
        intialSlide:0,
        speed: 800,
        // autoHeight : true,
        navigation: {
            prevEl: '.guideSlide_prev',
            nextEl: '.guideSlide_next',
        },
        breakpoints: {
            0: {
                enabled: false,
            },
            481: {
                enabled: true,
                slidesPerView: 1,
                slidesPerGroup : 1,
            },
        }
    });
});