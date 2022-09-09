jQuery(document).ready(function ($) {
    // 监测窗口大小变化
    $(window).resize(function () {
        if ($(document).width() >= 754) {
            $(".header").css('background', '');
        } else {
            if ($(".navbar-toggle").attr("aria-expanded") === "true") {
                $(".header").css('background', '#000');
            } else {
                $(".header").css('background', '');
            }
        }
    });
    // Bootstrap menu fix
    $(".navbar-toggle").click(function () {
        if ($(".navbar-toggle").attr("aria-expanded") === "false") {
            $(".header").css('background', '#000');
        } else {
            $(".header").css('background', '');
        }
    });
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass('in');
    });
    // jQuery sticky menu
    $(".header").sticky({ topSpacing: 0 });
    // jQuery smooth scroll
    $('.navbar-nav li a, .scroll-to-bottom a').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '70';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
    // jQuery counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Owl Carousel
    $('.article-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: 5000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Owl Carousel
    $('.client-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: 5000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    // Owl Carousel
    $('.old-event-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: 5000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.portfolio-menu li').click(function () {
        $(".portfolio-menu li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});
