

$(document).ready(function(){
	/*  menu  */
	$(".depth1_list > li > a").bind('focus mouseover',function(){
		if (window.innerWidth > 1024  ){
			if (! $('.header').hasClass('pmo')){
				//2depth 없는 경우 hide
				if($(this).next('.depth2').find('.depth2_list > li').length > 0) {
					$('.header').addClass('pmo');
					$('.depth1_list > li').removeClass('ac');
					$(this).next('.depth2').stop().slideDown(200);
					$(this).parents('li').addClass('ac');
				}
			}else{
				if($(this).next('.depth2').find('.depth2_list > li').length > 0) {
					$('.depth1_list > li').removeClass('ac');
					$(".depth2 > li").removeClass('ac');
					$(this).parents('li').addClass('ac');
					$('.depth2').hide();
					$(this).next('.depth2').show();
				}
			}
		}
	});

	
	$('.menu-box').mouseleave(function(){
		if (window.innerWidth > 1024){
			$(".depth1_list > li").removeClass('ac');
			$('.header').removeClass('pmo');
			$(".depth2").stop().slideUp(200);
		}
	});
	$(".depth1_list a").focusout(function(){
		if (window.innerWidth > 1024){
			setTimeout(function(){
				if($('.depth1_list a:focus').length < 1){
					$(".depth1_list > li").removeClass('ac');
					$(".depth2 > li").removeClass('ac');
					$('.header').removeClass('pmo');
					$(".depth2").stop().slideUp(200);
				}
			},100); 
		}
	});
	
	// 검색창 열기
	$(".srch-open").on("click keypress", function (event) {
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
		if (!$(event.target).closest(".srch-box, .srch-open").length) {
			closeSearchBox();
		}
	});

	$(".srch-box").on("focusout", function () {
		setTimeout(() => {
			if (!$(document.activeElement).closest(".srch-box, .srch-open").length) {
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

	$('.menu-open').on('click', function () {
		clickType = "all";
		openAllmenu();
	});

	$('.menu-close').on('click', function () {
		closeAllmenu(clickType);
	});

	// 전체 메뉴 열기
	function openAllmenu() {
		$('#all-menu-pop').fadeIn(250, function () {
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
		if ($(window).width() < 760) {
			$('.menu-depth1').off('click').on('click', function (e) {
				e.preventDefault();
				var parentLi = $(this).parent('li');
				$('.menu-depth1').parent('li').removeClass("active");
				parentLi.addClass("active");
			});
	
			$('.menu-depth2').off('click').on('click', function (e) {
				if ($(window).width() >= 760) return; // 760px 이상일 때 이벤트 실행 방지
				
				var parentLi = $(this).parent('li');
				var subSubMenu = parentLi.children('.depth3');
				if (subSubMenu.length) {
					e.preventDefault();
					$('.menu-depth2').parent('li').removeClass("active").children('.depth3').stop().slideUp();
					parentLi.addClass("active");
					subSubMenu.stop().slideDown();
				} else {
					parentLi.removeClass("active");
					subSubMenu.stop().slideUp();
				}
			});
		} else {
			$('.menu-depth1, .menu-depth2').off('click'); // 데스크탑에서는 이벤트 해제
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
	



	/* SNB line map*/
	$(".line-map > li > a").not('.home > a').each(function(){
		if ($(this).siblings().length < 1){
			$(this).addClass('nl')
		}
	});
	$(".line-map > li > a").click(function(){
		// if (window.innerWidth > 1024 ){
			if ($(this).hasClass('on')){
				$(this).removeClass('on');
				$(this).next('ul').slideUp(200);
			}else{
				$(".line-map > li > a").removeClass('on');
				$(".line-map > li ul").slideUp(200);
				$(this).addClass('on');
				$(this).next('ul').slideDown(200);
			}
		// }
	});
		$(".line-map a").focusout(function(){
		setTimeout(function(){
			if($('.line-map a:focus').not('.line-map .home a').length < 1){
				$(".line-map > li > a").removeClass('on');
				$(".line-map > li ul").slideUp(200);
			}
		},100);
	});
	
	
});



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
						const text = ele.querySelector('.blind');
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
	/* select tab */
	function selectTab(){
		const selectElement = document.getElementById('tab-select');
		const tabContents = document.querySelectorAll('.sel-tab-conts');

			// selectElement가 없으면 함수 종료
			if (!selectElement || tabContents.length === 0) {
			return;
		}

		function showTabContent() {
			const selectedOption = selectElement.selectedOptions[0]; // 선택된 <option>
			const selectedTab = selectedOption.getAttribute('data-tab'); // data-tab 값

			tabContents.forEach(content => {
			if (content.id === selectedTab) {
				content.classList.add('active');
			} else {
				content.classList.remove('active');
			}
			});
		}

		selectElement.addEventListener('change', showTabContent);

		// 초기 상태 설정
		showTabContent();
	}

	// accordion
	function accordion(){
		const accordionButtons = document.querySelectorAll(".btn-accordion");

		accordionButtons.forEach(button => {
			button.addEventListener("click", () => {
				// 현재 클릭한 버튼의 부모 .accordion-item 찾기
				const accordionItem = button.closest(".accordion-item");
				const accordionBody = accordionItem.querySelector(".accordion-body");

				// 클릭한 버튼이 active 상태인지 확인
				const isActive = button.classList.contains("active");

				// 모든 btn-accordion과 accordion-body에서 active 클래스 제거
				accordionButtons.forEach(btn => btn.classList.remove("active"));
				document.querySelectorAll(".accordion-body").forEach(body => body.classList.remove("active"));

				// 클릭한 요소가 active 상태가 아니면 active 클래스 추가
				if (!isActive) {
					button.classList.add("active");
					accordionBody.classList.add("active");
				}
			});
		});
	}

	layerTab();
	selectTab();
	accordion();

})

