
window.addEventListener("DOMContentLoaded", () => {
	/* layer tab */
	function layerTab() {
		const layerTabArea = document.querySelectorAll('.tab-area.layer');

		/* 탭 접근성 텍스트 세팅 */
		const tabAccText = document.createTextNode(' 선택됨');
		const tabAccTag = document.createElement('i');
		tabAccTag.setAttribute('class', 'blind');
		tabAccTag.appendChild(tabAccText);

		layerTabArea.forEach(e => {
			const layerTabEle = e.querySelectorAll('.tab > ul > li');
			const tabPanel = e.querySelectorAll('.tab-conts');

			function tab() {
				layerTabEle.forEach(ele => {
					const control = ele.getAttribute('aria-controls');
					const selectedTabPanel = document.getElementById(control);

					if (ele.classList.contains('active')) {
						//선택됨 텍스트 추가
						ele.querySelector('button').append(tabAccTag);
					}

					ele.addEventListener('click', () => {
						layerTabInitial(); //레이어탭 초기화

						ele.classList.add('active');
						ele.querySelector('button').append(tabAccTag); //선택됨 텍스트 추가
						ele.setAttribute('aria-selected', 'true');
						selectedTabPanel.classList.add('active');
					});
				});
			}

			//레이어탭 초기화
			function layerTabInitial() {
				layerTabEle.forEach(ele => {
					ele.classList.remove('active');
					ele.setAttribute('aria-selected', 'false');
					if (ele.classList.contains('active')) {
						const text = ele.querySelector('.sr-only.created');
						ele.querySelector('button').removeChild(text);
					}
				});
				tabPanel.forEach(ele => {
					ele.classList.remove('active');
					
				})
			}
			tab();
		});
	}
	layerTab();

	/*  menu  */
	$(".depth1 > li > a").bind('focus mouseover',function(){
		if (window.innerWidth > 1024  ){
			if (! $('.header').hasClass('pmo')){
				//2depth 없는 경우 hide
				if($(this).next('.dp2-bx').find('.depth2 > li').length > 0) {
					$('.header').addClass('pmo');
					$('.depth1 > li').removeClass('on');
					$(this).next('.dp2-bx').slideDown(200);
					$(this).parents('li').addClass('on');
				}
			}else{
				if($(this).next('.dp2-bx').find('.depth2 > li').length > 0) {
					$('.depth1 > li').removeClass('on');
					$(".depth2 > li").removeClass('on');
					$(this).parents('li').addClass('on');
					$('.dp2-bx').hide();
					$(this).next('.dp2-bx').show();
				}
			}
		}
	});
	
	$(".depth2 > li").mouseover(function(){
		if (window.innerWidth > 1024  ){
			$(".depth2 > li").removeClass('on');
			$(this).addClass('on');
		}
	});
	$(".depth2 > li  a").focus(function(){
		if (window.innerWidth > 1024  ){
			$(".depth2 > li").removeClass('on');
			$(this).parents('.depth2 > li').addClass('on');
		}
	});

	$('.gnb-wrp').mouseleave(function(){
		if (window.innerWidth > 1024){
			$(".depth1 > li").removeClass('on');
			$('.header').removeClass('pmo');
			$(".dp2-bx").slideUp(200);
		}
	});
	$(".depth1 a").focusout(function(){
		if (window.innerWidth > 1024){
			setTimeout(function(){
				if($('.depth1 a:focus').length < 1){
					$(".depth1 > li").removeClass('on');
					$(".depth2 > li").removeClass('on');
					$('.header').removeClass('pmo');
					$(".dp2-bx").slideUp(200);
				}
			},100); 
		}
	});
	

	// -----------------------  검색 ------------------------------------
	// 검색창 열기
	$(".srch-btn").on("click keypress", function (event) {
		if (event.type === "click" || event.key === "Enter") {
			event.preventDefault();
			$(".srch-box").addClass("active");
		}
	});

	// 검색창 닫기
	$(".srch-close").on("click", function () {
		closeSearchBox();
	});

	// 포커스가 외부로 나가면 닫기
	$(document).on("click", function (event) {
		if (!$(event.target).closest(".srch-box, .srch-btn").length) {
			closeSearchBox();
		}
	});

	$(".srch-box").on("focusout", function () {
		setTimeout(() => {
			if (!$(document.activeElement).closest(".srch-box, .srch-btn").length) {
				closeSearchBox();
			}
		}, 10);
	});

	function closeSearchBox() {
		$(".srch-box").removeClass("active");
	}
})