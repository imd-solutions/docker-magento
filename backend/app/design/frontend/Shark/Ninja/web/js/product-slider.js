require([
    'jquery',
    'slick',
    'domReady!'
], function ($) {
    'use strict';

    return function(config, element) {
        console.log('rendering product slider');
        console.log(config);
        var $element = $(".owl-product-carousel");

        $(".owl-product-carousel").slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
    
        })


        
  
    };
});
