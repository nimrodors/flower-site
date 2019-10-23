/*global $, document, location*/

$(document).ready(function () {

    /*Sticky navigation --> A navigáció ha lejebb görgetek előjön*/

    $('.js--section-rolam').waypoint(function (direction) {
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

$('.js--scroll-to-kollekcio-gomb').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-kollekcio').offset().top - 15
    }, 1500);
});

$('.js--scroll-to-rolam-gomb').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-rolam').offset().top + 15
    }, 2000);
});

/* Navigation scroll*/

$('a[href*="#"]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
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

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});

/*-------------------- MOBILE NAVIGÁCIÓ ------------------*/

$('.mobile-nav-icon').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-ujdonsag').offset().top
    }, 1500);
});

//Ebben a fügvényben tárolom el a kijelölt kollekciókat.

var div = document.getElementsByClassName('collection')[0];

div.addEventListener('click', function (event) {
    var collectionName;
    
    //Itt tárolom el a kollekció nevét és adom át a collection.js-nek. Ami megjeleníti a megfelelő kollekciót
    collectionName = event.target.id;

    try {
        localStorage.setItem('collectionName', collectionName);
        console.log('Maki Siker');
    } catch (error) {
        console.log(error + ' Hiba');
    }


});
