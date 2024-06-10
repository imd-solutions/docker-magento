require([
    'jquery',
    'owlCarousel',
    'mage/translate',
    'domReady!',
], function ($, owlCarousel, translate) {
    'use strict';

    return function (config, element) {
        console.log('HELLO');
        var $element = $("owl-product-carousel");
        $element.owlCarousel({
            // Configuration options
            navElement: 'div',
            autoplay: $element.data('autoplay'),
            autoplayHoverPause: $element.data('autoplayhoverpause'),
            loop: $element.data('loop'),
            center: $element.data('center'),
            margin: $element.data('margin'),
            stagePadding: $element.data('stagepadding'),
            nav: $element.data('nav'),
            dots: $element.data('dots'),
            mouseDrag: $element.data('mousedrag'),
            touchDrag: $element.data('touchdrag'),
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                481: {
                    items: 1,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                768: {
                    items: 3,
                    nav: true,
                    dotsEach: false,
                    dots: true

                },
                992: {
                    items: 4,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                1200: {
                    items: 4,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                1441: {
                    items: 4,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                1681: {
                    items: 4,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
                1920: {
                    items: 4,
                    nav: true,
                    dotsEach: false,
                    dots: true
                },
            }
        });
    };
});
