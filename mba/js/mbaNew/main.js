

$(document).ready(function(){
	/*main-s*/
		if ($('.main_slide').length > 0) {

			let main_slide = $('.main_slide');
			let $status = $('.mb_attr .mb_paging');
			main_slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				let i = (currentSlide ? currentSlide : 0) + 1;
				$status.html('<span>' + i + '</span> / ' + slick.slideCount);
			});

			main_slide
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					// autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.mb_prev'),
					nextArrow: $('.mb_next'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});

				main_slide.slick('refresh');

				$('.mb_stop').click(function () {
					if ($(this).hasClass('play')) {
						$(this).removeClass('play').children('.hide').text('정지');
						main_slide.slick('slickPlay');
					} else {
						$(this).addClass('play').children('.hide').text('시작');
						main_slide.slick('slickPause');
					}
				});
		}
	/*main-e*/

	/*slider1-s*/
	var quick_slide = $('.quick_slide');
		if (quick_slide.length > 0) {
			quick_slide
				.not('.slick-initialized')
				.slick({
					//swipeToSlide: true,
					adaptiveHeight: true,
					draggable: false,
					autoplay: false,
					autoplaySpeed: 3000,
					infinite: true,
					variableWidth: false,
					prevArrow: $('.qs_prev'),
					nextArrow: $('.qs_next'),
					slidesToShow: 3,
					slidesToScroll: 1,
					adaptiveHeight: true,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								variableWidth: false,
								vertical: true,
								slidesToShow: 3,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 768,
							settings: {
								variableWidth: false,
								vertical: true,
								slidesToShow: 3,
								slidesToScroll: 1,
							},
						},
					],
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				quick_slide.slick('refresh');
		}
		$(".quick_slide a.item").focus(function () { 
			$(".quick_slide a.item").attr("tabindex","0"); 
			$(".qs_stop").addClass("play"); 
			document.getElementByClassName("qs_stop").click(); 
		});
	/*slider1-e*/

	$(".F2V ul li a").mouseover(function(){
		$(this).children(".mouse-on").css("display","table");
	});
	$(".F2V ul li a").mouseleave(function(){
		$(this).children(".mouse-on").css("display","none");
	});

	$(".mainTab a").bind("click", function(e){ 
		$(".mainTab a").removeClass("on");
		$(this).addClass("on");
		$(".mainTab-cont").css("display","none");
		let tabaid = $(this).attr('id');
		$("."+tabaid).css("display","block");
	});
});

$(window).on("load resize", function(){
	let aaa=$(".main_slide_box .c-box .c-L img").height() / 5 * 4
	$(".main_slide_box .c-box .c-R").css({"height": aaa + "px"});
});