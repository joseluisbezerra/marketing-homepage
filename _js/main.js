jQuery(document).ready(function ($) {
    // Fixed header
    window.onscroll = function() {
        if(window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };

    
    // Isotope
    let btns = $('#servicos .button-group button');
    // Filter
    btns.click(function(e) {
        $('#servicos .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('#servicos .grid').isotope({
            filter: selector,
        });
    });
    $(window).on('load', function() {
        $('#servicos .grid').isotope({
            filter: '*',
        });
    });

    
    // Magnify
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
        enabled: true,
        tPrev: "Anterior",
        tNext: "Próxima",
        tCounter: "%curr% de %total%",
        },
    });


    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        }
    });
});