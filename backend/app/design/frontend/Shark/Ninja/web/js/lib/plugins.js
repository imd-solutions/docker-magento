/**
 * Copyright © 2018 Redbox Digital Limited. All rights reserved.
 */

define([
    'jquery',
    'mage/mage',
    'mage/translate',
    'mage/ie-class-fixer',
    'collapsible',
    'matchMedia',
    'domReady!'
], function ($, collapsible) {
    'use strict';

    // Usage: elements.succinct({ size: 40 });
	$.fn.succinct = function(options) {

		var settings = $.extend({
				size: 240,
				omission: ' <span>...</span>',
				ignore: true
			}, options);

		return this.each(function() {

			var textDefault,
				textTruncated,
				elements = $(this),
				regex    = /[!-\/:-@\[-`{-~]$/,
				init     = function() {
					elements.each(function() {
						textDefault = $(this).html();

						if (textDefault.length > settings.size) {
							textTruncated = $.trim(textDefault)
											.substring(0, settings.size)
											.split(' ')
											.slice(0, -1)
											.join(' ');

							if (settings.ignore) {
								textTruncated = textTruncated.replace(regex, '');
							}

							$(this).html(textTruncated + settings.omission);
						}
					});
				};
			init();
		});
    };

    // usage: $('.cms-menu > p > a').menuActive();
    $.fn.menuActive = function(options) {
        var options = $.extend({
            setupCallback : null
        }, 
        arguments[0] || {});
        var $this = $(this);
        return $this.find(options.item).each(function(i) {
            var el = $(this);

            let baseUrl = window.location.href + '/';

            el.each(function(){
                let menuLink = $(this).attr('href');
                if(menuLink === baseUrl) {
                    $(this).addClass('active');
                }
                $.isFunction( options.setupCallback ) && options.setupCallback.call( this );
            });
        });
    }

    var rbd = rbd || {}; // if namespace is not defined, make it equal to an empty object
    rbd.plg = {
        conf : {
            cm : '.column.main'
        },
        init: function(opts) {
            $.extend(rbd.plg.conf, opts);

            this._nojs();
            this._touchDevice();

            // console.log('yup');

            // document.addEventListener("DOMContentLoaded", function() {
            //     var lazyloadImages;    
              
            //     if ("IntersectionObserver" in window) {
            //       lazyloadImages = document.querySelectorAll(".lazy");
            //       var imageObserver = new IntersectionObserver(function(entries, observer) {
            //         entries.forEach(function(entry) {
            //           if (entry.isIntersecting) {
            //             var image = entry.target;
            //             image.classList.remove("lazy");
            //             imageObserver.unobserve(image);
            //           }
            //         });
            //       });
              
            //       lazyloadImages.forEach(function(image) {
            //         imageObserver.observe(image);
            //       });
            //     } else {  
            //       var lazyloadThrottleTimeout;
            //       lazyloadImages = document.querySelectorAll(".lazy");
                  
            //       function lazyload () {
            //         if(lazyloadThrottleTimeout) {
            //           clearTimeout(lazyloadThrottleTimeout);
            //         }    
              
            //         lazyloadThrottleTimeout = setTimeout(function() {
            //           var scrollTop = window.pageYOffset;
            //           lazyloadImages.forEach(function(img) {
            //               if(img.offsetTop < (window.innerHeight + scrollTop)) {
            //                 img.src = img.dataset.src;
            //                 img.classList.remove('lazy');
            //               }
            //           });
            //           if(lazyloadImages.length == 0) { 
            //             document.removeEventListener("scroll", lazyload);
            //             window.removeEventListener("resize", lazyload);
            //             window.removeEventListener("orientationChange", lazyload);
            //           }
            //         }, 20);
            //       }
              
            //       document.addEventListener("scroll", lazyload);
            //       window.addEventListener("resize", lazyload);
            //       window.addEventListener("orientationChange", lazyload);
            //     }
            // });
              
              
        },
        _nojs: function(){
            let e = $('body');
            if (e.hasClass('no-js')) {
                e.removeClass('no-js');
            }
        },
        _touchDevice: function(){
            let mobile = false;
            //touch on IOS and Android
            let isAndroid = /(android)/i.test(navigator.userAgent),
                isMobile = /(mobile)/i.test(navigator.userAgent);

            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || isAndroid || isMobile) {
                mobile = true;
            } else {
                mobile = false;
            }

            this._addTouchClass(mobile);

            return mobile;
        },
        _addTouchClass: function(mobile){
            if(mobile==true) {
                $('body').addClass('touch');
            };
        }
    };

    rbd.plg.init();

});
