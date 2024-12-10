

$(document).ready(function(){
	$(".depth1_list > li > a").bind('focus mouseover',function(){
		if (window.innerWidth > 1024  ){
			$('.depth2').show();
			$('.menu-back').show();
		}
	});
	$('.menu-box').mouseleave(function(){
		if (window.innerWidth > 1024){
			$('.depth2').hide();
			$('.menu-back').hide();
		}
	});
	$(".depth1_list > li:last-child > div > ul > li:last-child > a").focusout(function(){
		$('.depth2').hide();
		$('.menu-back').hide();
	});

	$('.menu-open').click(function(){
		if (window.innerWidth <= 1024 ){
			$('.menu-box').css("right","-320px").animate({"right": "0"}, 200).show();
			$(".mor-back").fadeIn();
			$("body").css({"overflow-y":"hidden"});
		}
	});
	$('.menu-out').click(function(){
		if (window.innerWidth <= 1024 ){
			$('.menu-box').animate({"right": "-320px"}, 200, function(){$('.menu-box').hide(); });
			$(".mor-back").fadeOut();
			$("body").css({"overflow-y":"auto"});
		}
	});
	$(".depth1_list > li > a").click(function(e){
		if (window.innerWidth <= 1024 ){
			if($(this).siblings().length > 0){
				e.preventDefault();
			}
			if ($(this).parent('li').hasClass('on')){
				$(".depth1_list > li").removeClass('on');
				$(".depth1_list > li .depth2").slideUp(200);
			}else{
				$(".depth1_list > li").removeClass('on');
				$(".depth1_list > li .depth2").slideUp(200);
				$(this).parent('li').addClass('on');
				$(this).parent('li').find('.depth2').slideDown(200);
			}
		}
	});

	/* line map*/
	$(".line-map > li > a").not('.home > a').each(function(){
		if ($(this).siblings().length < 1){
			$(this).addClass('nl')
		}
	});
	$(".line-map > li > a").click(function(){

		if (window.innerWidth > 1024 ){
			if ($(this).hasClass('on')){
				$(this).removeClass('on');
				$(this).next('ul').slideUp(200);
			}else{
				$(".line-map > li > a").removeClass('on');
				$(".line-map > li ul").slideUp(200);
				$(this).addClass('on');
				$(this).next('ul').slideDown(200);
			}
		}
	});
		$(".line-map a").focusout(function(){
		setTimeout(function(){
			if($('.line-map a:focus').not('.line-map .home a').length < 1){
				$(".line-map > li > a").removeClass('on');
				$(".line-map > li ul").slideUp(200);
			}
		},100);
	});
	/* 주소복사 */
	$('.copyUrl > a').click(function(){
		$(this).addClass('focus');
		if($(this).hasClass('focus')){
			$(this).focus();
		}
	});
	$('.copyUrl > a').keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9) {
			if(event.shiftKey) { //Shift + Tab 이벤트
				$(this).removeClass('focus');
			}
		}
	})
	$('.copyUrl > a').keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9) {
			if(!event.shiftKey) { // Tab 이벤트
				$(this).removeClass('focus');
			}
		}
	})
	/* -- 주소복사*/
	
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

	function selectTab(){
		const selectElement = document.getElementById('tab-select');
		const tabContents = document.querySelectorAll('.sel-tab-conts');
	  
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
	layerTab();
	selectTab();

})

