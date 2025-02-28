$(document).ready(function(){ 
	/*leftMenu s*/
		$(".leftMenu > li > a").click(function(){ 
			if($(this).hasClass("on")){
				$(".leftMenu > li > a").removeClass("on"); 
				$(".depM3").slideUp(); 
			}else{
				$(".leftMenu > li.L-down > a").removeClass("on"); 
				$(".depM3").slideUp(); 
				$(this).addClass("on"); 
				$(this).next(".depM3").slideDown(); 
			}
		});
	/*leftMenu e*/

	/*tab s*/
		$(".tab-box li a").bind("click", function(e){ 
			$(".tab-box li a").removeClass("on2");
			$(this).addClass("on2");
			$(".tab-box-cont").css("display","none");
			var tabaid = $(this).attr('id');
			$("."+tabaid).css("display","block");
		});
		$("#select-text").click(function(){
			if($(this).hasClass("on")){  
				$(".select-option").css({"display":"none"});
				$(this).removeClass("on");
			}else{
				$(".select-option").css({"display":"block"});
				$(this).addClass("on");
			}
		});
	/*tab e*/

	/*tab to other s*/
		$(".tabV1 ul li a").bind("click", function(e){ 
			var offset = $('#goTo-e01').offset(); 
			$('html').animate({scrollTop : offset.top}, 0);
		});
	/*tab to other e*/

	/*imgShow s*/
		/*imgShow01*/
		if ($('.imgShow01').length > 0) {
			var imgShow01 = $('.imgShow01');
			var $status01 = $('.mb_attr01 .mb_paging');
			imgShow01.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status01.html('<span>' + i + '</span> / ' + slick.slideCount);
			});
			imgShow01
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.imgShow_prev01'),
					nextArrow: $('.imgShow_next01'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				imgShow01.slick('refresh');
		}

		/*imgShow02*/
		if ($('.imgShow02').length > 0) {
			var imgShow02 = $('.imgShow02');
			var $status02 = $('.mb_attr02 .mb_paging');
			imgShow02.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status02.html('<span>' + i + '</span> / ' + slick.slideCount);
			});
			imgShow02
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.imgShow_prev02'),
					nextArrow: $('.imgShow_next02'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				imgShow02.slick('refresh');
		}

		/*imgShow03*/
		if ($('.imgShow03').length > 0) {
			var imgShow03 = $('.imgShow03');
			var $status03 = $('.mb_attr03 .mb_paging');
			imgShow03.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status03.html('<span>' + i + '</span> / ' + slick.slideCount);
			});
			imgShow03
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.imgShow_prev03'),
					nextArrow: $('.imgShow_next03'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				imgShow03.slick('refresh');
		}

		/*imgShow04*/
		if ($('.imgShow04').length > 0) {
			var imgShow04 = $('.imgShow04');
			var $status04 = $('.mb_attr04 .mb_paging');
			imgShow04.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status04.html('<span>' + i + '</span> / ' + slick.slideCount);
			});
			imgShow04
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.imgShow_prev04'),
					nextArrow: $('.imgShow_next04'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				imgShow04.slick('refresh');
		}

		/*imgShow05*/
		if ($('.imgShow05').length > 0) {
			var imgShow05 = $('.imgShow05');
			var $status05 = $('.mb_attr05 .mb_paging');
			imgShow05.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				$status05.html('<span>' + i + '</span> / ' + slick.slideCount);
			});
			imgShow05
				.not('.slick-initialized')
				.slick({
					centerPadding: 0,
					dots: false,
					//appendDots: $('.ms_paging'),
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true,
					fade: true,
					draggable: true,
					prevArrow: $('.imgShow_prev05'),
					nextArrow: $('.imgShow_next05'),
				})
				.on('afterChange', function (event) {
					event.stopPropagation();
				});
				imgShow05.slick('refresh');
		}

	/*imgShow e*/

	/*ManualFestival s*/
		$('.ManualFestival-slider01').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider02').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider03').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider04').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider05').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider06').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		$('.ManualFestival-slider07').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.ManualFestival-slider08').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	/*ManualFestival e*/

});

$(window).on("load resize", function(){

	/*leftMenu s*/
		$(".leftMenu > li").has('ul').addClass('L-down');
		if($(".leftMenu > li.L-down ").has("ul")){
			$(".leftMenu > li.L-down > a ").attr("href", "#none");
		}
	/*leftMenu e*/

	/*tab s*/
		if(window.innerWidth > 1024){

			var md1Num2=$(".tab-box > li").length;
			$(".tab-box > li").css({"width":"calc(100% / "+ md1Num2 +")"});

			$(".select-option").css({"display":"block"}); 
			$(".select-option > li > a").click(function(){
				$(".select-option").css({"display":"block"}); 
			});
		}else if(window.innerWidth <= 1024){
			$(".select-option").css({"display":"none"});
			$(".select-option > li > a").click(function(){
				$(".select-option").css({"display":"none"}); 
				$("#select-text").text($(this).text());
				$("#select-text").removeClass("on");
			});
			$("#select-text").text($(".select-option > li > a.on2").text());
		}
	/*tab e*/


	/*page s*/
	if($(window).width() > "1024"){
		var lastPage = 10;
	}else if($(window).width() <= "1024" && $(window).width() > "768"){
		var lastPage = 10;
	}else if($(window).width() <= "768"){
			var lastPage = 5;
	}
	var firstPage = 1;
	$(".paging a.num").each(function(){
		var currentPage = $(this).text();
		if(currentPage>=firstPage&&currentPage<= lastPage){
			$(this).show();
		}
		else{
			$(this).hide();
		}
	});
	/*page e*/

});

$(window).on("load resize", function(){
	$("#select-text").removeClass("on");
});


function fnSelCeo () {

	if ( jQuery("#selCeo").val() != null && jQuery("#selCeo").val() != "" ) {
	document.location.href = jQuery("#selCeo").val();
	}

}