define([
    "jquery",
    "domReady!"
],
    function ($) {
        console.log('code is here v3');

        /**
         * Theme custom javascript
         */

        let userScroll = false;

        function debounce(func, wait) {
            let timeout;
            return function () {
                const context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        function handleScroll() {
            if (!userScroll) return;

            var scroll = $(window).scrollTop();
            if (scroll >= 170) {
                $('body.cms-index-index').removeClass('not-scrolled');
                $('#header-promo').addClass('header-promo-hide');
                $('.page-header').addClass('scroll-active');
                $('.page-header').removeClass('scroll-inactive');
            } else {
                $('.page-header').removeClass('scroll-active');
                $('body.cms-index-index').addClass('not-scrolled');
                $('#header-promo').removeClass('header-promo-hide');
                $('.page-header').addClass('scroll-inactive');
            }
        }

        $('.page-header').addClass('scroll-inactive');
        $(window).scroll(debounce(handleScroll, 100));

        $(window).on('wheel touchmove keydown', function () {
            userScroll = true;
            debounce(handleScroll, 100)(); // Trigger immediately if user scrolls
        });

        $(window).on('scroll', function () {
            // Reset the flag after the debounce delay
            setTimeout(() => userScroll = false, 150);
        });

        // Upsell modal
        // Function to update modal content dynamically
        function updateModalContent(card) {
            var title = card.find("h5").text();
            var subtitle = card.find("p").text();
            var iconClass = card.find(".upsell-card__icon").attr("class");

            $(".upsell-modal__header h3").text(title);
            $(".upsell-modal__header p").text(subtitle);

            var modalIcon = $(".upsell-modal__icon");

            modalIcon.attr("class", iconClass + " upsell-modal__icon");
        }

        // Show or hide the modal when a button is clicked
        $(".upsell-card").on("click", function (event) {
            event.preventDefault();
            var $card = $(this);
            updateModalContent($card);
            $(".upsell-modal").fadeToggle().css('display', 'flex');;
        });

        // Hide the modal when the close button is clicked
        $(".upsell-modal__close").on("click", function () {
            $(".upsell-modal").fadeToggle();
        });

        // Hide the modal when clicking outside of the modal container
        $(".upsell-modal").on("click", function (event) {
            if (!$(event.target).closest(".upsell-modal__container").length) {
                $(".upsell-modal").fadeToggle();
            }
        });



        /**
         * Fix hover on IOS
         */
        $('body').bind('touchstart', function () {
        });

        /**
         * Click show filter on mobile
         */

        $("body").on('click', '#btn-filter, .filter-overlay, #close-filter', function () {
            $('html').toggleClass('show-filter-sidebar');
        });

        /**
         * Focus input search
         */

        $('.block-search .input-text,.block-search .searchbox-cat').focus(function () {
            $('body').addClass('search-active');
        });

        $('.block-search .input-text,.block-search .searchbox-cat').blur(function () {
            $('body').removeClass('search-active');
        });

        /**
         * Mobile
         */

        $('#desktop-customer-links > .header.links').clone().appendTo('#mobile-customer-links');

        $("body").on('click', '#mobile-nav,.nav-mobile-overlay', function () {
            $('body').toggleClass('show-nav-mobile');
        });

        function appendToMobile() {
            var breakpoints = $('#bzo-header-mobile').data('breakpoint');
            var doc_width = $(window).width();
            if (doc_width <= breakpoints) {
                var mobileElement = $('div[data-element-mobile]');
                mobileElement.each(function () {
                    var mobileContent = $(this).find('div[data-mobile-content]');
                    var mobileElement = $(this).data('element-mobile');
                    $("#" + mobileElement).append(mobileContent);
                })
            } else {
                var desktopElement = $('div[data-element-desktop]');
                desktopElement.each(function () {
                    var desktopContent = $(this).find('div[data-mobile-content]');
                    var desktopElement = $(this).data('element-desktop');
                    $("#" + desktopElement).append(desktopContent);
                })
            }
        }

        appendToMobile();

        $(window).resize(function () {
            appendToMobile();
        });

        /**
         * Sticky menu
         */

        $("body").on('click', '.sticky-nav-btn a, .overlay-sticky-menu', function () {
            $('html').toggleClass('show-sticky-menu');
        });

        /**
         * Filter Sidebar
         */
        $("body").on('click', '.close-filter, .toolbar-filter .btn-filter, .filter-overlay', function () {
            $('html').toggleClass('show-filter');
        });

        /**
         * Button Qty
         */
        $('.qty-plus').click(function () {
            var qty = $(this).parent().prev(".tf-qty");
            qty.val(Number(qty.val()) + 1);
            return;
        });

        $('.qty-minus').click(function () {
            var qty = $(this).parent().prev(".tf-qty");
            var value = Number(qty.val()) - 1;
            if (value > 0) {
                $(qty).val(value);
            }
            return;
        });

        /**
         * Countdown static
         */

        function _countDownStatic(date, id) {
            var dateNow = new Date();
            var amount = date.getTime() - dateNow.getTime();
            delete dateNow;
            if (amount < 0) {
                id.html("Now!");
            } else {
                var days = 0;
                hours = 0;
                mins = 0;
                secs = 0;
                out = "";
                amount = Math.floor(amount / 1000);
                days = Math.floor(amount / 86400);
                amount = amount % 86400;
                hours = Math.floor(amount / 3600);
                amount = amount % 3600;
                mins = Math.floor(amount / 60);
                amount = amount % 60;
                secs = Math.floor(amount);
                $(".time-day .num-time", id).text(days);
                $(".time-day .title-time", id).text(((days <= 1) ? "Day" : "Days"));
                $(".time-hours .num-time", id).text(hours);
                $(".time-hours .title-time", id).text(((hours <= 1) ? "Hour" : "Hours"));
                $(".time-mins .num-time", id).text(mins);
                $(".time-mins .title-time", id).text(((mins <= 1) ? "Min" : "Mins"));
                $(".time-secs .num-time", id).text(secs);
                $(".time-secs .title-time", id).text(((secs <= 1) ? "Sec" : "Secs"));
                setTimeout(function () {
                    _countDownStatic(date, id)
                }, 1000);
            }
        }

        $(".countdown-static").each(function () {
            var timer = $(this).data('timer');
            var data = new Date(timer);
            _countDownStatic(data, $(this));
        });

        /**
         * Close message qty error
         */

        $("body").on('click', '.box-tocart .control div.mage-error', function () {
            $(this).parent('.control').children('.qty').removeClass('mage-error');
            $(this).remove();
        });

        $('.toggle-segments').on('click', (e) => {
            e.preventDefault();
            if ($('.section-1').hasClass('active')) {
                $('.section-1').removeClass('active')
                $('.section-2').addClass('active')
            } else {
                $('.section-1').addClass('active')
                $('.section-2').removeClass('active')
            }
        });


        /**
         * Menu Overlay Code
         */

        $('.header__inner__controls__nav__icon--menu, .sn-mobile-menu__header__close').on('click', (e) => {
            e.preventDefault();
            console.log('open menu');
            if ($('body').hasClass('menu-open')) {
                //close the menu
                $('body').removeClass('menu-open');
                $('body').removeClass('show-search');
                $('body').removeClass('show-child');
            } else {
                //open the menu
                $('body').addClass('menu-open');
            }
        })

        $('.sn-mobile-menu__header__search').on('click', (e) => {
            e.preventDefault();
            if ($('body').hasClass('show-search')) {
                //close the menu
                $('body').removeClass('show-search');
            } else {
                //open the menu
                $('body').addClass('show-search');
            }
        });

        $('.header__inner__controls__nav__icon--search').on('click', (e) => {
            e.preventDefault();
            if (!$('body').hasClass('menu-open')) {
                $('body').addClass('show-search');
                $('body').addClass('menu-open');
            }
        });

        $('.mobile-menu-container li.parent a.level-top').on('click', (e) => {
            e.preventDefault();
            console.log(e);
            //get submenu and show in overlay
            let ele = $(e.target);
            let submenu = ele.parent().find('.megamenu-content-cate');
            console.log(submenu);
            $('.sn-mobile-menu__menu__child-menu').html(submenu.clone());
            $('body').addClass('show-child');
        })

        $('.sn-mobile-menu__header__back').on('click', (e) => {
            e.preventDefault();
            $('body').removeClass('show-child');
        });

        $('.products-tabs__nav a').on('click', (e) => {
            e.preventDefault();
            $('.products-tabs__nav a').removeClass('active');
            $('.products-tabs__pannel').removeClass('active');
            $('.products-tabs__button').removeClass('active');
            let ele = $(e.target);
            ele.addClass('active');

            let target = ele.attr('href');
            console.log(target.substring(1));
            $('.' + target.substring(1)).addClass('active');
            $('.' + target.substring(1) + '-button').addClass('active');

        });

        $('.products-tabs__button a').on('click', (e) => {
            e.preventDefault();
            $('.products-tabs__nav a').removeClass('active');
            $('.products-tabs__pannel').removeClass('active');
            $('.products-tabs__button').removeClass('active');
            console.log('here');

            let ele = $(e.target);
            ele.addClass('active');

            let target = ele.attr('href');
            console.log(target.substring(1));
            $('.' + target.substring(1)).addClass('active');
            $('.' + target.substring(1) + '-button').addClass('active');
        });



        $('.accordions__section a').on('click', (e) => {
            e.preventDefault();
            $('.accordions__section').removeClass('active');
            let ele = $(e.target);
            ele.parent().addClass('active');
        })


        // Item dropdowns
        $(document).ready(function () {
            $('.filter-options-title').click(function () {
                $(this).toggleClass('open');
                var content = $(this).next('.filter-options-content');
                if (content.css('display') === 'block') {
                    content.css('display', 'none');
                } else {
                    content.css('display', 'block');
                }
            });
        });

        // "Sort by" stuff
        $('.dropdown-button').click(function () {
            var dropdown = $('#dropdown-content');
            var button = $('.dropdown-button');
            dropdown.toggleClass('show');
            button.toggleClass('active');
        });

        $('.dropdown-option').click(function () {
            var dropdown = $('#dropdown-content');
            var button = $('.dropdown-button');
            dropdown.removeClass('show');
            button.removeClass('active');
        });

        $(document).click(function (event) {
            if (!$(event.target).closest('.dropdown-button').length) {
                var dropdowns = $('.dropdown-content');
                dropdowns.each(function () {
                    if ($(this).hasClass('show')) {
                        $(this).removeClass('show');
                    }
                });
                var buttons = $('.dropdown-button');
                buttons.each(function () {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    }
                });
            }
        });

        // Removes page bottom class
        $(window).on('load', function () {
            var pageBottom = $('.page-bottom');
            if (pageBottom.length) {
                var fullPage = pageBottom.find('.full-page');
                if (fullPage.length) {
                    pageBottom.removeClass('page-bottom');
                }
            }
        });

        // new filter menu:

        $('.open-filter-menu').on('click', (e) => {
            console.log("opening filter menu...");
            e.preventDefault();
            if (!$('body').hasClass('menu-open-filters')) {
                $('body').addClass('show-search-filters');
                $('body').addClass('menu-open-filters');
            }
        });

        $('.close-filters').on('click', (e) => {
            e.preventDefault();
            console.log('closing filter menu');
            if ($('body').hasClass('menu-open-filters')) {
                //close the menu
                $('body').removeClass('menu-open-filters');
            }
        })


        // new sort menu

        $('.open-sort-menu').on('click', (e) => {
            console.log("opening sort menu...");
            e.preventDefault();
            if (!$('body').hasClass('menu-open-sort')) {
                $('body').addClass('show-search-sort');
                $('body').addClass('menu-open-sort');
            }
        });

        $('.close-sort').on('click', (e) => {
            e.preventDefault();
            console.log('closing filter menu');
            if ($('body').hasClass('menu-open-sort')) {
                //close the menu
                $('body').removeClass('menu-open-sort');
            }
        })

        // Move filters on resize etc...
        const sidebar = document.querySelector('.sidebar-main');
        const pageMain = document.querySelector('.page-main');
        if (sidebar && pageMain) {
            let originalParent = sidebar.parentNode;
            let originalNextSibling = sidebar.nextElementSibling;

            function handleResize() {
                if (window.innerWidth < 769) {
                    if (!pageMain.contains(sidebar)) {
                        pageMain.appendChild(sidebar);
                    }
                } else {
                    if (sidebar.parentNode !== originalParent) {
                        if (originalNextSibling) {
                            originalParent.insertBefore(sidebar, originalNextSibling);
                        } else {
                            originalParent.appendChild(sidebar);
                        }
                    }
                }
            }

            // Run on initial load
            handleResize();

            // Attach the resize event listener
            window.addEventListener('resize', handleResize);
        }

    });