//banner轮播图
var mySwiper = new Swiper('.banner .swiper-container', {
	mode: 'horizontal',
	loop: true,
	speed: 600,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	// 如果需要分页器
	pagination: '.swiper-pagination'
})

//歌单推荐
var mySwiper2 = new Swiper('.gedan .swiper-container', {
	mode: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20
});

//精彩节目
var mySwiper3 = new Swiper('.program .swiper-container', {
	mode: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20
});

//主播
var mySwiper4 = new Swiper('.mmhost .swiper-container', {
	mode: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20
});

//song
var mySwiper = new Swiper(".tabbox .swiper-container", {
	mode: "horizontal",
	loop: false,
	pagination: ".swiper-pagination"
});
$(function() {
	var h = $(".header_top").height();
	console.log("h=" + h)
	$(window).scroll(function() {
		var top = $(this).scrollTop();
		console.log("top="+top)			
		if(top > h) {
			console.log(22222)
			$('.header_nav').css({
				top: 0
			})

			$('.footerarea').css({
				bottom: 0
			})

		} else {
			console.log(33333)
			$('.header_nav').css({
				top: "0.37rem"
			})
			$('.footerarea').css({
				bottom: "-40px"
			})
		}
	})
})