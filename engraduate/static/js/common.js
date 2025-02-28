
window.addEventListener("DOMContentLoaded", () => {
	/* layer tab */
	function layerTab() {
		const layerTabAreas = document.querySelectorAll('.tab-area.layer');
		layerTabAreas.forEach(area => {
			const tabs = area.querySelectorAll('.tab > ul > li');
			const panels = area.querySelectorAll('.tab-conts');
	  
			tabs.forEach(tab => {
				const controlId = tab.getAttribute('aria-controls');
				const panel = document.getElementById(controlId);
		
				// 초기 활성 상태 체크
				if(tab.classList.contains('active')) {
				tab.querySelector('button').insertAdjacentHTML('beforeend', '<i class="blind"> 선택됨</i>');
				}
		
				tab.addEventListener('click', () => {
				// 모든 외부 탭과 패널 초기화
				tabs.forEach(t => {
					t.classList.remove('active');
					t.setAttribute('aria-selected', 'false');
					const btn = t.querySelector('button');
					const acc = btn.querySelector('.blind');
					if(acc) btn.removeChild(acc);
				});
				panels.forEach(p => p.classList.remove('active'));
		
				// 클릭한 탭 활성화
				tab.classList.add('active');
				tab.setAttribute('aria-selected', 'true');
				tab.querySelector('button').insertAdjacentHTML('beforeend', '<i class="blind"> 선택됨</i>');
				panel.classList.add('active');
			});
		  });
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


	// -------------- 전체메뉴 ---------------------
	let focusedElBefore;
	var clickType = "";

	$('.all-menu').on('click', function () {
		clickType = "all";
		openAllmenu();
	});

	$('.menu-close').on('click', function () {
		closeAllmenu(clickType);
	});

	// 전체 메뉴 열기
	function openAllmenu() {
		$('#all-menu-pop').fadeIn(0, function () {
			$('body').addClass('setAni');
			setTimeout(function () {
				moveFocusToFirstMenuItem();
			}, 300);
		});
		focusedElBefore = document.activeElement;
	}

	// 첫 번째 메뉴 아이템에 포커스 이동
	function moveFocusToFirstMenuItem() {
		var firstMenuItem = $('.all-menu-box').find('a, button, input, select, textarea').filter(':visible').first();
		if (firstMenuItem.length > 0) {
			firstMenuItem.focus();
		}
	}

	// 전체 메뉴 닫기
	function closeAllmenu() {
		$('body').removeClass('setAni');
		$('#all-menu-pop').fadeOut(250);
		if (focusedElBefore) {
			setTimeout(() => {
				focusedElBefore.focus();
			}, 300);
		}
	}

	// 760px 미만일 때 menu-depth1 동작 추가
	
	function handleMenuClick() {
		var $menuOpen = $(".menu-depth1");
		if ($(window).width() < 760) {
			$menuOpen.off('click').on('click', function (e) {
				e.preventDefault();
				
				var parentLi = $(this).parent('li');
				var submenu = parentLi.children('.depth2');

				if (!parentLi.hasClass('active')) {
					// 다른 열린 메뉴 닫기
					$menuOpen.parent('li').removeClass('active');
				}

				// 현재 클릭한 메뉴 토글
				parentLi.toggleClass('active');
			});

			// depth 3 있으면 클릭 이벤트
			$('.menu-depth2').off('click').on('click', function (e) {
				var parentLi = $(this).parent('li');
				var subSubMenu = parentLi.children('.depth3');
				
				if (subSubMenu.length) {
					e.preventDefault();
					e.stopPropagation();
			
					// 클릭한 요소의 active 상태를 토글
					if (parentLi.hasClass("active")) {
						parentLi.removeClass("active");
						subSubMenu.stop().slideUp()
					} else {
						// 다른 항목의 active 제거 (하나만 열리도록)
						$('.all-menu-depth .depth2 > li').removeClass("active").children('.depth3').stop().slideUp();
					
						parentLi.addClass("active");
						subSubMenu.stop().slideDown()
					}
				}
			});
			
		} else {
			$menuOpen.off('click'); // 데스크탑에서는 이벤트 해제

		}
	}

	function handleResize() {
        handleMenuClick();
        if ($(window).width() < 760) {
            closeAllmenu();
        }
    }

    handleMenuClick();
    $(window).on('resize', handleResize);

})