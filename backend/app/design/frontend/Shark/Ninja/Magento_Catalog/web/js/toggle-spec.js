define(['jquery'], function ($) {
    'use strict';
    return function toggleBackground (config, element) {
        $(element).on('click', function() {
            var cards = document.querySelectorAll('.spec-card');
            cards.forEach(function(card) {
                card.classList.toggle('new-background');
            });
        });
    };
});
