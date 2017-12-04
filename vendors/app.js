$(document).ready(function() {
    skrollr.init({
        forceHeight: false
    });

    // $(".nav-trigger").click(function() {

    //     $(this).toggleClass('ovarlay');
    // });


    $('.nav-trigger').click(function(e) {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
        $('.header').toggleClass('active');
        e.preventDefault();
    });

    $('.nav li').click(function(e) {
        if ($('.nav').hasClass('active')) {
            $(this).toggleClass('active');
            e.preventDefault();
        }
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    var swiper = new Swiper('.swiper-container', {
        // autoplay: true,
        // speed: 2000,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                // touchEventsTarget: 'swiper-container'
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
                // touchEventsTarget: 'swiper-container'
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
                // touchEventsTarget: 'swiper-container'
            }
        }
    })
    var swiper = new Swiper('.swiper-container s1', {
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 1000,
        setWrapperSize: true,
        autoHeight: true,
        freeMode: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});