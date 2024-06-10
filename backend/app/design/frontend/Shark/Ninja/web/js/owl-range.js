require([
        'jquery',
        'owlCarousel',
        'mage/translate',
        'domReady!',
    ], function ($, owlCarousel, translate) {
        'use strict';
    
        return function(config, element) {
            var $element = $("owl-range-carousel");
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
                items:5,
                responsive: {
                    0: {
                        items: 2,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                    481: {
                        items: 2,
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
                        items: 5,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                    1200: {
                        items: 5,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                    1441: {
                        items: 5,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                    1681: {
                        items: 5,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                    1920: {
                        items: 7,
                        nav: true,
                        dotsEach: false,
                        dots: true
                    },
                }
            });
        };
    });
    