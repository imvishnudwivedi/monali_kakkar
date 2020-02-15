$(function() {
    
    "use strict";



    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });





    //===== Mobile Menu

    $('.header-toggler').on('click', function () {
        $('.offcanvas-menu').addClass('open')
        $('.overlay').addClass('open')
    });

    $('.close-mobile-menu').on('click', function () {
        $('.offcanvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });

    $('.overlay').on('click', function () {
        $('.offcanvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });

    /*Variables*/
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active');
                $this.siblings('ul').slideDown();
            }
        }
    });
    

    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Isotope Project 1
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.project-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });

    //===== banner animation slick slider

    function mainSlider() {
        var BasicSlider = $('.banner-slide');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-area:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-area[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: false,
            prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1330,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    //===== seller Active slick slider
    $('.headline-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
        }
      ]
    });


    //===== seller Active slick slider
    $('.highlights-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]

    });





    //===== seller Active slick slider
    $('.trending-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]

    });




    //===== seller Active slick slider

    $('.video-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,    
        fade: false,
        asNavFor: '.video-slider',
        fade: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',

    });
    $('.video-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.video-item',
        dots: false,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        }
      ]
    });


    //===== team slick slider
    $('.team-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]

    });


    //===== video-slide slick slider
    $('.video-slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-right"></i></span>',
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
        }
      ]
    });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });


    
    
    //===== Go to Top
    
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });
    
    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});