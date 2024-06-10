var config = {
    map: {
        '*': {
            'bootstrap.bundle.min': 'js/bootstrap/bootstrap.bundle.min',
            'myTheme': 'js/theme-js',
            'owlCarousel': 'js/owl.carousel',
            'owlRange': 'js/owl-range',
            'jQuery': 'js/lib/jquery-3.7.1',
            'jquery/slick': 'js/lib/slick.min',
            'jquery/match-height': 'js/lib/match-height-0.6.0',
            'js/lib/plugins': 'js/lib/plugins',
            'productSlider': 'js/product-slider'
        }
    },
    deps: [
        "js/bootstrap/bootstrap.bundle.min",
        "js/theme-js"
    ],
    shim: {
        'bootstrap.bundle.min': {
            'deps': ['jquery']
        },
        'js/lib/plugins': {
            deps: ['jquery']
        },
        'js/lib/slick.min': {
            deps: ['jquery']
        },
        'jquery/match-height-0.6.0': {
            deps: ['jquery']
        },
    },

};