$(document).ready(function(){ 
	/*menu*/
		$("#gnb > ul > li > a").bind("mouseover", function(e){
			if($(window).width() > 1370 ){
				$(".heightS").animate({height:"400px"}, 150);
				$(".heightS").css({"border-bottom":"1px solid #dedede"});
				$(".gnb-depth2").stop(true, true).slideDown("fast");
				$(".gnb-depth1 > li").removeClass("on");
				$(this).parent('li').addClass("on"); 
			}else {
				$(".heightS").animate({height:"440px"}, 150);
				$(".heightS").css({"border-bottom":"1px solid #dedede"});
				$(".gnb-depth2").stop(true, true).slideDown("fast");
				$(".gnb-depth1 > li").removeClass("on");
				$(this).parent('li').addClass("on");
			}
		});

		$("#gnb > ul > li *").bind("mouseover", function(e){
			if($(window).width() > 1024 ){
				$(".gnb-depth1 > li").removeClass("on");
				$(this).parents('.gnb-depth1 > li').addClass("on");
			}
		});
	/*menu*/
		$(".menu-area").bind('mouseleave',function(){
			if ($(window).width() > 1024 ){
				$(".gnb-depth2").fadeOut(10);
				$(".heightS").stop(true, true).animate({height:"0"}, 150);
				$(".heightS").css({"border-bottom":"0"});
				$(".gnb-depth1 > li").removeClass("on");
				$(".menu_bg").hide();
				$(".all-menu-open").removeClass("on");
			}
		});

	/*search*/
		$(".search-open").click(function(e){
			$(this).hide();
			$(".search-close").show();
			$(".searchBox-layout").show();
			$(".menu_bg2").show();
		});
		$(".search-close").click(function(e){
			$(this).hide();
			$(".search-open").show();
			$(".searchBox-layout").hide();
			$(".menu_bg2").hide();
		});
		$(".menu_bg2").click(function(e){
			$(this).hide();
			$(".search-open").show();
			$(".search-close").hide();
			$(".searchBox-layout").hide();
		});
	/*search*/

	/*focus*/
		$("#gnb > ul > li > a").focus(function(){
			if($(window).width() > 1024){
				$(".heightS").animate({height:"300px"}, 150);
				$(".heightS").css({"border-bottom":"1px solid #dedede"});
				$(".gnb-depth2").slideDown("fast");
				$(".gnb-depth1 > li ").removeClass("on");
				$(this).parent("li").addClass("on"); 
			}
		});
		$(".gnb-depth1 a").focusout(function(){
			if($(window).width() > 1024){
				setTimeout(function(){
					if($('.gnb-depth1 a:focus').length < 1){
						$(".gnb-depth2").slideUp("fast");
						$(".gnb-depth1 > li ").removeClass("on");
						$(".heightS").animate({height:"0px"}, 150);
				$(".heightS").css({"border-bottom":"0"});
					}
				}, 100);
			}
		});
	/*focus*/

	/*response*/
		$(".gnb-depth1 > li > a").click(function(e){
			if($(window).width() <= 1024){

				if ( $(this).hasClass('on') )
				{
					$(".gnb-depth1 > li > a").removeClass("on");
					$(".gnb-depth2").hide();
					$(this).next(".gnb-depth2").show();
					$(this).addClass("on");
				}else{
					$(".gnb-depth1 > li > a").removeClass("on");
					$(".gnb-depth2").hide();
					$(this).next(".gnb-depth2").show();
					$(this).addClass("on");
				}
			}
		});

		$(".gnb-depth2 > ul > li > a").click(function(e){
			if(window.innerWidth <= 1024 && $(this).siblings().length > 0){
				e.preventDefault();
			}
			if($(window).width() <= 1024){
				if ( $(this).hasClass('on') )
				{
					$(".gnb-depth2 > ul > li .gnb-depth3").removeClass("open");
					$(".gnb-depth2 > ul > li > a").removeClass("on");
					$(".gnb-depth3").slideUp("fast");
				}else{
					$(".gnb-depth2 > ul > li .gnb-depth3").removeClass("open");
					$(".gnb-depth2 > ul > li > a").removeClass("on");
					$(".gnb-depth3").slideUp("fast");
					$(this).next(".gnb-depth3").slideDown("fast");
					$(this).addClass("on");
				}
			}
		});

		$(".mob-menu-open").click(function(){
			$(".gnb-depth1 > li").has('ul').addClass('m-down');
			if($(".gnb-depth1 > li.m-down ").has("ul")){
				$(".gnb-depth1 > li.m-down > a ").attr("href", "#none");
			}
			$(".gnb-depth2 > ul > li").has('ul').addClass('n-down');
			if($(".gnb-depth2 > ul > li.n-down").has("ul")){
				$(".gnb-depth2 > ul > li.n-down > a ").attr("href", "#none");
				$(".gnb-depth2 > ul > li.n-down > a ").addClass("inP");
			}
			if($(window).width() <= 1024){ 
				$(".menu-area").show();
				$(".menu_bg2").show();
				$(".menu_bg2").css({"top":"0px"});
				$(".mob-menu-close").show();
				$(".gnb-depth1 > li:first-child > a").click();
				$("body").css({"overflow":"hidden"});
				$(".mob-search-close").hide();
				$(".mob-search-open").show();
				$(".searchBox-layout").hide();
				$(this).hide();
				$(".gnb-depth2 > ul > li > a.in").attr({"href":"#none"});
			}
		});

		$(".mob-menu-close").click(function(){
			if($(window).width() <= 1024){
				$(".menu-area").hide();
				$(".menu_bg2").hide();
				$(".mob-menu-open").show();
				$(".gnb-depth1 li:first-child a").click();
				$("body").css({"overflow":"visible"});
				$(this).hide();
			}
		});

		$(".mob-search-open").click(function(){
			if($(window).width() <= 1024){
				$(".searchBox-layout").show();
				$(".menu_bg2").show();
				$(".menu_bg2").css({"top":"190px"});
				$("body").css({"overflow":"hidden"});
				$(".mob-search-close").show();
				$(".gnb-depth1 li:first-child a").click();
				$(".mob-menu-close").hide();
				$(".mob-menu-open").show();
				$(".menu-area").hide();

				$(this).hide();
			}
		});
		$(".mob-search-close").click(function(){
			if($(window).width() <= 1024){
				$(".searchBox-layout").hide();
				$(".menu_bg2").hide();
				$(".mob-search-open").show();
				$(".gnb-depth1 li:first-child a").click();
				$("body").css({"overflow":"visible"});
				$(this).hide();
			}
		});

		$(".menu_bg2").click(function(){
			if($(window).width() <= 1024){
				$(".menu_bg2").hide();
				$(".mob-menu-close").hide();
				$(".mob-menu-open").show();
				$(".mob-search-close").hide();
				$(".mob-search-open").show();
				$(".searchBox-layout").hide();
				$(".menu-area").hide();
			}
		});
	/*response*/

	/*TopButton*/
		$(".GoTop-btn").click(function(){
			$('html,body').animate({scrollTop: '0px'}, 500);
		});
	/*TopButton*/

});


$(window).on("load resize", function(){
	$("body").removeAttr("style");
	$(".menu-area").removeAttr("style");
	$(".searchBox-layout").removeAttr("style");
	$(".search-close").css({"display":"none"});
	$(".search-open").css({"display":"block"});
	$(".mob-menu-close").css({"display":"none"});
	$(".mob-menu-open").css({"display":"block"});
	$(".menu_bg").removeAttr("style");
	$(".menu_bg2").removeAttr("style");
	$("#gnb").removeAttr("style");
	$(".gnb-depth1").removeAttr("style");
	$(".gnb-depth2").css({"display":"none"});
	$(".gnb-depth1 > li").removeAttr("style");
	$(".gnb-depth1 > li > a").removeClass("on");
	$(".subTop .menuPart > ul > li > a.Sd1").removeClass("onBg");
	$(".gnb-depth2 > ul > li > a.inP").removeClass("on");
	$(".gnb-depth3").css({"display":"none"});
	$(".subTop .menuPart .boxL").slideUp("fast");
});

$(window).on('scroll',function() {
	if($('html,body').scrollTop() >= 150){
		$(".GoTop-btn").stop(true,true).fadeIn(500); 
		} else {
		$(".GoTop-btn").stop(true,true).fadeOut(500); 
	}
});