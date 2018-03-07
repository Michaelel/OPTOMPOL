$(function() {

	PopUpHide();

//mPageScroll2id
	jQuery(document).ready(function() {
		jQuery.scrollTo('#_catalog',500);
	});

	jQuery(document).ready(function() {
		jQuery.scrollTo('#__catalog',500);
	});

	$(".nav a").mPageScroll2id();
	$(".logo a").mPageScroll2id();
	$(".anchor a").mPageScroll2id();

//hight detect
	function heightDetect() {
		$("#header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	function _heightDetect() {
		$("#_header").css("height", $(window).height());
	};
	_heightDetect();
	$(window).resize(function() {
		_heightDetect();
	});

	function __heightDetect() {
		$("#__header").css("height", $(window).height());
	};
	__heightDetect();
	$(window).resize(function() {
		__heightDetect();
	});

//parallax
	$('#header').parallax({imageSrc: 'img/header-bg.jpg'});
	$('#order').parallax({imageSrc: 'img/order-bg.png'});
	$('#_header').parallax({imageSrc: '../../img/header-bg.jpg'});
	$('#_order').parallax({imageSrc: '../../img/order-bg.png'});
	$('#__header').parallax({imageSrc: '../../../img/header-bg.jpg'});
	$('#__order').parallax({imageSrc: '../../../img/order-bg.png'});

//fixed navbar-->
	$(window).scroll(function() {
		if($(window).scrollTop() > $('#header').height()) {
			$('.nav').css('margin-left','380px');
			$('.line-for-fixed-navbar').css('display', 'block');
		    $('.top_line').addClass('fixednav');
		    $('.anchor').css('display', 'block');
		}
		if($(window).scrollTop() < $('#header').height()) {
			$('.top_line').removeClass('fixednav');
			$('.line-for-fixed-navbar').css('display','none');
			$('.anchor').css('display', 'none');
		}
	});
	$(window).scroll(function() {
		if ($('.b-popup').is(':visible')) {
			$('.top_line').removeClass('fixednav');
			$('.line-for-fixed-navbar').css('display', 'block');
		}
		if($(window).scrollTop() > $('#_header').height()) {
			$('.nav').css('margin-left','380px');
			$('.line-for-fixed-navbar').css('display', 'block');
		    $('.top_line').addClass('fixednav');
		    $('.anchor').css('display', 'block');
		}
		if($(window).scrollTop() < $('#_header').height()) {
			$('.top_line').removeClass('fixednav');
			$('.line-for-fixed-navbar').css('display','none');
			$('.anchor').css('display', 'none');
		}
	});

	$(window).scroll(function() {
		if ($('.b-popup').is(':visible')) {
			$('.top_line').removeClass('fixednav');
			$('.line-for-fixed-navbar').css('display', 'block');
		}
		if($(window).scrollTop() > $('#__header').height()) {
			$('.nav').css('margin-left','380px');
			$('.line-for-fixed-navbar').css('display', 'block');
		    $('.top_line').addClass('fixednav');
		    $('.anchor').css('display', 'block');
		}
		if($(window).scrollTop() < $('#__header').height()) {
			$('.top_line').removeClass('fixednav');
			$('.line-for-fixed-navbar').css('display','none');
			$('.anchor').css('display', 'none');
		}
	});

 //animations, waypoints etc..
	$('.nav').addClass('animated fadeInDown');
	$('.logo').addClass('animated fadeIn');
	$('.left').addClass('animated fadeInLeftBig');
	$('.center').addClass('animated fadeInDownBig');
	$('.right').addClass('animated fadeInRightBig');
	$('.company').addClass('animated zoomInRight');


	$('#catalog').waypoint(function() {
		$('.line-for-fixed-navbar').addClass('animated fadeInDown');
		$('.top_line').addClass('animated fadeIn');
		$('#catalog_items').addClass('animated fadeIn');
		$('.anchor').addClass('animated rotateIn')
	}, {offset: '100%'});

	$('#_catalog').waypoint(function() {
		$('.line-for-fixed-navbar').addClass('animated fadeInDown');
		$('.top_line').addClass('animated fadeIn');
	}, {offset: '100%'});

	$('#__catalog').waypoint(function() {
		$('.line-for-fixed-navbar').addClass('animated fadeInDown');
		$('.top_line').addClass('animated fadeIn');
	}, {offset: '100%'});

	$('.animate-first').css('opacity', 0);
	$('.animate-second').css('opacity', 0);
	$('.animate-third').css('opacity', 0);
	$('.animate-fourth').css('opacity', 0);

	$('#order').waypoint(function() {
		$('.animate-first').addClass('animated fadeInLeft');
		$('.animate-second').addClass('animated fadeInLeft');
		$('.animate-third').addClass('animated fadeInLeft');
		$('.animate-fourth').addClass('animated fadeInLeft');
	}, {offset: '50%'});

	$('#_order').waypoint(function() {
		$('.animate-first').addClass('animated fadeInLeft');
		$('.animate-second').addClass('animated fadeInLeft');
		$('.animate-third').addClass('animated fadeInLeft');
		$('.animate-fourth').addClass('animated fadeInLeft');
	}, {offset: '50%'});

	$('#__order').waypoint(function() {
		$('.animate-first').addClass('animated fadeInLeft');
		$('.animate-second').addClass('animated fadeInLeft');
		$('.animate-third').addClass('animated fadeInLeft');
		$('.animate-fourth').addClass('animated fadeInLeft');
	}, {offset: '50%'});
});

function PopUpShow(num){
    $("#popup-"+num).show();
}
function PopUpHide(){
    $(".b-popup").hide();
}
