/*global $,document, location*/

$(document).ready(function () {

    /*Sticky navigation --> A navigáció ha lejebb görgetek előjön*/

    $('.js--section-ujdonsag').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
    });
});
/*Legörget az újdonsághoz*/

$('.js--scroll-to-ujdonsag-gomb').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-ujdonsag').offset().top - 50
    }, 1500);
});

$('.js--scroll-to-kollekciok-gomb').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-kollekcio').offset().top - 50
    }, 1500);
});
/* Navigation scroll*/

$('a[href*="#"]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 30
            }, 1000);
            return false;
        }
    }
});

/*Animation*/

$('.js--wp-1').waypoint(function () {
    $('.js--wp-1').addClass('animated zoomIn'); /*bounceInRight, fadeInRight, */
}, {
    offset: '50%'
});

/*LIGHTBOX GALERY*/

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

/*-------------------- MOBILE NAVIGÁCIÓ ------------------*/

/*
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if(icon.hasClass('ion-navicon')) {
        icon.addClass('ion-close');
        icon.removeClass('ion-navicon');
    } else {
        icon.addClass('ion-navicon');
        icon.removeClass('ion-close');
    }
});
*/

$('.mobile-nav-icon').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-ujdonsag').offset().top
    }, 1500);
});




























