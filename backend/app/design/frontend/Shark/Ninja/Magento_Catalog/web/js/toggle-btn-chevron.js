
/** 
require([
    'jquery',
    'mage/translate',
    'domReady!',
    'fontAwesome',
], function ($, translate) {
    'use strict';

    return function(config) {
        document.addEventListener('DOMContentLoaded', function() {
            var toggleButtons = document.querySelectorAll('.toggle-btn'); 
            toggleButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    var icon = this.querySelector('.chevron-icon');
                    if (icon.classList.contains('fa-chevron-up')) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    } else {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    }
                });
            });
        });
    };
}
);
**/