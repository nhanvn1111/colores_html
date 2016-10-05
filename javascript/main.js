/**
  * Init Header
  * Full Screen
  * Retina Logos
  * Project Isotope
  * Widget Testimonial
  * Logo Customer
  * Toggles
  * Gmap
  * Progress Bar
  * Animation
  * Go Top
  * Twitter
  * Contact Form
  * Flickr
  * Gallary Post
  * Gallary About
  * Portfolio Projects
  * Tabs
  * Skill Bar
  * Testimonial
  * Slide Header
  * Simple Slider
*/

;(function($) {

   'use strict'

   var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

   var init_header = function() {
      var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
      if ( largeScreen ) {
         if( $().sticky ){
            $('header.header-sticky').sticky();
         }
      }

      $(window).scroll( function() {
         if ( $( window).scrollTop() > 200 ) {
            $('header').addClass('float-header');
         } else {
            $('header').removeClass('float-header');
         }
      });

      $('.one-page .mainnav ul > li > a').on('click',function() {
         var anchor = $(this).attr('href').split('#')[1];

         if (anchor) {
            if ( $('#'+anchor).length > 0 ) {
               var headerHeight = 0;
               if ( $('.header-sticky').length > 0 && largeScreen ) {
                  headerHeight = $('#header').outerHeight();
               }
               var target = $('#'+anchor).offset().top - headerHeight;
               $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
            }
         }
         return false;
      }); // click on one-page menu
      
      $('.one-page .mainnav > ul > li > a').on( 'click', function() {
         $( this ).addClass('active').parent().siblings().children().removeClass('active');
      });
   };

   var fullScreen = function() {
      (function() {
         function setupSlider() {
            if($('body')[0].className == 'full-screen') {
                //$('.top').css('background-color','transparent');
                $('.header').css({'background-color':'#011d27', 'border-bottom':'1px solid #fff'});

                var hTop = $('.top').outerHeight();
                var hHead = $('.header').outerHeight();
                var hWin = screen.height;
                var slide = $('.head-slide').data('slide');

                $('.head-slide').css({'height':hWin - hTop - hHead});
                $('.head-slide .' + slide).css({'height':hWin - hTop - hHead-55});
                $('.head-slide .' + slide + ' ul li').css({'height':hWin - hTop - hHead-55});
                $('.head-slide .' + slide + ' ul li img').css({'height':hWin - hTop - hHead-55});
            }
         }

         $(window).on("resize", setupSlider);
         $(document).on("ready", setupSlider);
      })(); // set fullscreen and vertical align for content

      (function() {
         var current = 1; 
         var height = $('.text-scroll').height(); 
         var numberDivs = $('.text-scroll').children().length; 
         var first = $('.text-scroll h1:nth-child(1)');

         setInterval(function() {
            var number = current * -height;
            first.css('margin-top', number + 'px');
            if ( current === numberDivs ) {
              first.css('margin-top', '0px');
              current = 1;
            } else current++;
         }, 2500);
      })(); // scroll divs

      (function() {
         $('.btn-top').on('click',function() {
            var anchor = $(this).attr('href').split('#')[1];
            if ( anchor ) {
               if ( $('#'+anchor).length > 0 ) {
                  var headerHeight = 0;
                  if ( $('.header-sticky').length > 0 ) {
                     headerHeight = $('#header').outerHeight();
                  }
                  var target = $('#'+anchor).offset().top - headerHeight;

                  $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
               }
            }
            return false;
         });
      })(); // scroll target
   };

   var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;

      if(retina) {
         $('.header .logo, .footer .logo').find('img').attr({src:'./images/logo@2x.png',width:'145',height:'23'});
      }
   };

   var projectIsotope = function() {
        if ( $().isotope ) {
            var $container = $('.portfolio-container');
            var col = $('.portfolio-container').data('col');

            $container.imagesLoaded(function(){
               $container.isotope({
                    itemSelector: col,
                    columnWidth: col,
                    transitionDuration: '1s'
               }); // end isotope
            });


            $('.class-filter li').on('click',function(){
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-container').isotope({ filter: selector });
                return false;
            }); // on click

            $('.filte.menu-items .class-filter li a').on('click', function () { // add state active for element a after click at OUR MENU
                $('.filte.menu-items  .class-filter li a').removeClass('active');
                $(this).addClass('active');
            });

            $('.class-filter li:nth-child(1) a').click();
        }; // if isotope exists
   };

    var widgetTestimonial = function () {
        $('.widget-testimonial .testimonial-text').bxSlider({
            animation: "slide",
            pause: 2000,
            controls:true,
            pager : false,
            nextText: '<i class="icons-angle-right"></i>',
            prevText: '<i class="icons-angle-left"></i>',
        });
    };

    var logoClient = function () {
        $('.logo-client.logo-small .text').bxSlider({
            pause: 2000,
            controls:true,
            pager : false,
            minSlides: 1,
            maxSlides: 4,
            slideWidth: 242,
            slideMargin: 0,
            animation: "slide",
            nextText: '<i class="icons-angle-right"></i>',
            prevText: '<i class="icons-angle-left"></i>',
        });

        $('.logo-client.logo-large .text').bxSlider({
            pause: 2000,
            controls:true,
            pager : false,
            minSlides: 1,
            maxSlides: 4,
            slideWidth: 270,
            slideMargin: 30,
            animation: "slide",
            nextText: '<i class="icons-angle-right"></i>',
            prevText: '<i class="icons-angle-left"></i>',
        });
    };

   var rollSlider = function() {
      if ( $().flexslider ) {
         $('.or-slider').each(function() {
            var $this = $(this);
            var easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';
            $this.find('.flexslider').flexslider({
               animation      :  $this.data('effect'),
               direction      :  $this.data('direction'), // vertical
               pauseOnHover   :  true,
               useCSS         :  false,
               animationSpeed :  800,
               slideshowSpeed :  5000,
               controlNav     :  false,
               directionNav   :  true,
               slideshow      :  $this.data('auto'),
               prevText    :  '<i class="icons-angle-left"></i>',
               nextText    :  '<i class="icons-angle-right"></i>',
               smoothHeight   :  true,
            }); // flexslider
         }); // or-slider each
      }
   };

   var toggles = function() {
      var args = {easing : 'easeOutExpo', duration: 600};
      $('.toggle .toggle-title.active').siblings('.toggle-content').show();

      $('.toggle.toggle-enable .toggle-title').click(function() {
         $(this).closest('.toggle').find('.toggle-content').slideToggle(args);
         $(this).toggleClass('active');
      }); // toggle 

      $('.accordion .toggle-title').click(function () {
         if( !$(this).is('.active') ) {
            $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
            $(this).toggleClass('active');
            $(this).next().slideToggle(args);
         } else {
            $(this).toggleClass('active');
            $(this).next().slideToggle(args);
         }     
      }); // accordion
   };

    var gmapSetup = function() {
        if ( $().goMap ) {
            $("#map").goMap({ // load map
                markers: [{  
                    address: 'Kew green london'
                }],
                scrollwheel: false, 
                disableDoubleClickZoom: false,
                zoom: 13,
                maptype: 'ROADMAP'
            });
        }
    };

   var progressBar = function() {
      $('.progress-bar').on('on-appear', function() {
         $(this).each(function() {
            var percent = $(this).data('percent');

            $(this).find('.progress-animate').animate({
               "width": percent + '%'
            },1200);

            $(this).parent('.progress-single').find('.perc').addClass('show').animate({
               "width": percent + '%'
            },1200);
         });
      });
   }

   var ResponsiveMenu = {

      menuType: 'desktop',

      initial: function(winWidth) {
         ResponsiveMenu.menuWidthDetect(winWidth);
         ResponsiveMenu.menuBtnClick();
         ResponsiveMenu.parentMenuClick();
      },

      menuWidthDetect: function(winWidth) {
         var currMenuType = 'desktop';

         if (matchMedia('only screen and (max-width: 978px)').matches) {
            currMenuType = 'mobile';
         } // change menu type

         if ( currMenuType !== ResponsiveMenu.menuType ) {
            ResponsiveMenu.menuType = currMenuType;

            if ( currMenuType === 'mobile' ) {
               var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
               $('#header').find('.header-wrap').after($mobileMenu);
               var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
               hasChildMenu.children('ul').hide();
               hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
               $('.btn-menu').removeClass('active');
             } 
             else {
               var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
               $desktopMenu.find('.sub-menu').removeAttr('style');
               $('#header').find('.span10').after($desktopMenu);
               $('.btn-submenu').remove();
             }
         } // clone and insert menu
      },

      menuBtnClick: function() {
         $('.btn-menu').on('click', function() {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
         });
      }, // click on moblie button

      parentMenuClick: function() {
         $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            if ( $(this).has('ul') ) {
               e.stopImmediatePropagation()
               $(this).next('ul').slideToggle(300);
               $(this).toggleClass('active');
            }
         });
      } // click on sub-menu button
   };

   
   var ajaxSubscribe = {
      obj: {
         subscribeEmail    : $('#subscribe-email'),
         subscribeButton   : $('#subscribe-button'),
         subscribeMsg      : $('#subscribe-msg'),
         subscribeContent  : $("#subscribe-content"),
         dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
         success_message   : '<div class="notification_ok">Thank you for joining our mailing list. Please check your email for a confirmation link.</div>',
         failure_message   : '<div class="notification_error">There was a problem processing your submission.</div>',
         noticeError       : '<div class="notification_error">{msg}</div>',
         noticeInfo        : '<div class="notification_error">{msg}</div>',
         basicAction       : 'mail/subscribe.php',
         mailChimpAction   : 'mail/subscribe-mailchimp.php'
      },

      eventLoad: function() {
         var objUse = ajaxSubscribe.obj;

         $(objUse.subscribeButton).on('click', function() {
            if ( window.ajaxCalling ) return;
            var isMailchimp = objUse.dataMailchimp === 'true';

            if ( isMailchimp ) {
              ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
            } else {
              ajaxSubscribe.ajaxCall(objUse.basicAction);
            }
         });
      },

      ajaxCall: function (action) {
         window.ajaxCalling = true;
         var objUse = ajaxSubscribe.obj;
         var messageDiv = objUse.subscribeMsg.html('').hide();
         $.ajax({
            url: action,
            type: 'POST',
            dataType: 'json',
            data: {
               subscribeEmail: objUse.subscribeEmail.val()
            },
            success: function (responseData, textStatus, jqXHR) {
               if ( responseData.status ) {
                  objUse.subscribeContent.fadeOut(500, function () {
                     messageDiv.html(objUse.success_message).fadeIn(500);
                  });
               } else {
                  switch (responseData.msg) {
                  case "email-required":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email is required.'));
                     break;
                  case "email-err":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email invalid.'));
                     break;
                  case "duplicate":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email is duplicate.'));
                     break;
                  case "filewrite":
                     messageDiv.html(objUse.noticeInfo.replace('{msg}','Mail list file is open.'));
                     break;
                  case "undefined":
                     messageDiv.html(objUse.noticeInfo.replace('{msg}','undefined error.'));
                     break;
                  case "api-error":
                     objUse.subscribeContent.fadeOut(500, function () {
                        messageDiv.html(objUse.failure_message);
                     });
                  }
                  messageDiv.fadeIn(500);
               }
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alert('Connection error');
            },
            complete: function (data) {
               window.ajaxCalling = false;
            }
         });
      }
   };

   var orAnimation = function() {
      $('.colores-animation').each( function() {
            if( !isMobile.any() ) {
                var orElement = $(this),
                orAnimationClass = orElement.data('animation'),
                orAnimationDelay = orElement.data('animation-delay'),
                orAnimationOffset = orElement.data('animation-offset'),
                effect = orElement.data('portfolio-effect');

                orElement.css({
                    '-webkit-animation-delay':  orAnimationDelay,
                    '-moz-animation-delay':     orAnimationDelay,
                    'animation-delay':          orAnimationDelay
                });

                orElement.waypoint(function () {
                orElement.addClass('animated ' + effect ).addClass(orAnimationClass);
                },{
                   triggerOnce: true,
                   offset: orAnimationOffset
                });
            } else {
                $('.colores-animation').addClass('animated');
            }
        });
   };

   var goTop = function() {
      $(window).scroll(function() {
         if ( $(this).scrollTop() > 800 ) {
            $('.go-top').addClass('show');
         } else {
            $('.go-top').removeClass('show');
         }
      }); 
      
      $('.go-top').click(function() {
         $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
         return false;
      });
   };

    var twitter = function () {
        if ( $().tweet ) {
            $('.list-tiwtter').each(function () {
                var $this = $(this);
                $this.tweet({
                    username: $this.data('username'),
                    join_text: "auto",
                    avatar_size: null,
                    count: $this.data('number'),
                    template: "{text} {time}",
                    loading_text: "loading tweets...",
                    modpath: $this.data('modpath')      
                }); // tweet
            }); // lastest-tweets each
        };
    };

   var ajaxContactForm = function() {
      // http://www.bitrepository.com/a-simple-ajax-contact-form-with-php-validation.html
      $('.contact-form').each(function() {
         var $this = $(this); 
         $this.submit(function() {
            var str = $this.serialize();
            $.ajax({
               type: "POST",
               url:  $this.attr('action'),
               data: str,
               success: function(msg) {
                  // Message Sent? Show the 'Thank You' message and hide the form
                  var result;
                  if(msg == 'OK') {
                     result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
                  } else {
                     result = msg;
                  }
                  result = '<div class="result">' + result + '</div>';
                  $this.find('.note').html(result);
               }
            });
            return false;
         }); // submit

      }); // each contactform
   }; 

   var flickrFeed = function() {
      var limitShow = 0, limitItems = 0;

      if ( $().jflickrfeed ) {
         $('.flickr-photos').each( function() {
            var $this = $(this);
            limitShow = ($this.data('limitshow') !=  undefined ? $this.data('limitshow') : 6);
            limitItems = ($this.data('limit') !=  undefined ? $this.data('limit') : 6);

            $(this).jflickrfeed({
               limit: limitItems,
               qstrings: {
                  id: '92231417@N05' // Your Flickr Id
               },
               itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank" class="flickr-hide"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
            },function(){

                    for(var i = limitShow - 6; i < limitShow; i++)
                        $('.widget-flickr ul li a')[i].className = 'flickr-show';
               });
         });
      }

      $('.flickr-next').on('click',function() {
         $('.widget-flickr ul li a').removeClass('flickr-show').addClass('flickr-hide');
         limitShow += 6;
         if(limitShow >= $('.widget-flickr ul li a').length) 
            limitShow = $('.widget-flickr ul li a').length;
         for(var i = limitShow - 6; i < limitShow; i++)
            $('.widget-flickr ul li a')[i].className = 'flickr-show';
      })

      $('.flickr-prev').on('click',function() {
         $('.widget-flickr ul li a').removeClass('flickr-show').addClass('flickr-hide');
         limitShow -= 6;
         if(limitShow <= 6) 
            limitShow = 6;
         for(var i = limitShow - 6; i < limitShow; i++)
            $('.widget-flickr ul li a')[i].className = 'flickr-show';
      })
   };

    var gallaryPost = function () {
        $('.post .gallery').each(function(){
            $(this).children('.carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 170,
                itemMargin: 5,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('.carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });
        });
    }

    var gallaryAbout = function () {
        $('.about-posts .about-teams .gallery').each(function(){
            $(this).children('.carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.sub-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 170,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('.carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });

            $('.sub-carousel li').click(function (e) {
                $('.carousel li')[$('.sub-carousel li').index(this)].click();
            });

            $('.carousel li').click(function (e) {
                $('.sub-carousel li')[$('.carousel li').index(this)].click();
            });
        });

        $('.team-colores .about-teams .gallery').each(function(){
            $(this).children('.carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 270,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.sub-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 170,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('.carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });

            $('.sub-carousel li').click(function (e) {
                $('.carousel li')[$('.sub-carousel li').index(this)].click();
            });

            $('.carousel li').click(function (e) {
                $('.sub-carousel li')[$('.carousel li').index(this)].click();
            });
        });
    }

    var portfolioProjects = function () {
        $('.portfolio-projects .about-teams .gallery').each(function(){
            $(this).children('.carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 270,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.sub-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 170,
                itemMargin: 30,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('.carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });

            $('.portfolio-projects .sub-carousel li').click(function () {
                $('.carousel li')[$('.portfolio-projects .sub-carousel li').index(this)].click();
            });

            $('.portfolio-projects .carousel li').click(function () {
                $('.portfolio-projects .sub-carousel li')[$('.portfolio-projects .carousel li').index(this)].click();
            });

            $('.portfolio-direc .pro-next').click(function () {
                $('.portfolio-projects .featured-post.gallery .slider .fa-angle-right').trigger('click');
                $('.portfolio-projects .sub-carousel li')[$('.portfolio-projects .carousel li').index(
                    $('.portfolio-projects .carousel li.flex-active-slide'))].click();
            });

            $('.portfolio-direc .pro-prev').click(function () {
                $('.portfolio-projects .featured-post.gallery .slider .fa-angle-left').trigger('click');
                $('.portfolio-projects .sub-carousel li')[$('.portfolio-projects .carousel li').index(
                    $('.portfolio-projects .carousel li.flex-active-slide'))].click();
            });
        });


        $('.portfolio-posts .about-teams .gallery').each(function(){
            $(this).children('.carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 270,
                itemMargin: 5,
                asNavFor: $(this).children('.slider'),
                prevText: '<i class="fa fa-caret-left"></i>',
                nextText: '<i class="fa fa-caret-right"></i>',
            });
            $(this).children('.slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: $(this).children('.carousel'),
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
            });
        });
    }

    var tabs = function() {
        $('.tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').click( function(e){  
                var liActive = $(this).index();
                var contentActive = $(this).siblings().removeClass('active').parents('.tabs').children('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    }

    var skillBar = function () {
        if ( $().circleProgress ) {
            $('.box-skill').appear(function() {
                $('.skill .process').each(function() {
                    var $this = $(this);

                    // set color
                    var color = "#12d11f";
                    if ($this[0].classList.length>1) {
                        switch($this[0].classList[1]) {
                            case 'blue':
                                color = "#18ded7";
                                break;
                            case 'dark':
                                color = "#011d27";
                                break;
                            case 'green-dark':
                                color = "#1f9353";
                                break;
                            case 'orange':
                                color = "#df8316";
                                break;
                            case 'pink':
                                color = "#d11267";
                                break;
                            case 'red':
                                color = "#d11212";
                                break;
                        }
                    }

                    // set percent
                    var val = $this.data('val');
                    var size = $this.data('size');
                    var percent = val / 100;
                    $this.circleProgress({
                        value: percent,
                        size: 120,
                        thickness: '10',
                        reverse: true,
                        fill: {
                            color: [color]
                        },
                        animation: {
                            duration: 1200,
                            easing: 'circleProgressEasing'
                        }
                    });

                    var percent_number_step = $.animateNumber.numberStepFactories.append('%');
                        $this.children('.number').animateNumber({
                            number: val,
                            numberStep: percent_number_step
                    }, 1200);
                });
            });
        }
    }

    var testimonial = function () {
        $(".testimonial-slide.small").owlCarousel({
            margin:30,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            autoWidth:true,
            items:3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });

        $(".testimonial-slide.large").owlCarousel({
            margin:30,
            loop:true,
            autoWidth:true,
            items:3,
            nav: true,
            navText: [
              '<i class="icons-angle-left"></i>',
              '<i class="icons-angle-right"></i>'
              ],
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });
    };

    var slideHeader = function () {
        var background = $('.head-slide').data('background');
        var slide = $('.head-slide').data('slide');
        $('.head-slide').css('background','url("'+ background + '") no-repeat') ;
        var temp = '.head-slide .flexslider.' + slide;

        try {
            $('.head-slide h3.title').stop().transition({top: '-5%', opacity: '0'}, 0);
            $('.head-slide h3.sub-title').stop().transition({top: '-1%', opacity: '0'}, 0);
            $('.head-slide p.content').stop().transition({left: '-5%', opacity: '0'}, 0);
            $('.head-slide a.link').stop().transition({bottom: '-5%', opacity: '0'}, 0);
        }
        catch (e) {}

        $(temp).flexslider({
            controlNav: false,
            animationSpeed: 1000,
            slideshow: true, 
            start: function(slider) {
                $('.head-slide .flex-active-slide h3.title').stop().transition({top: '0', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide h3.sub-title').stop().transition({top: '65px', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide p.content').stop().transition({left: '0', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide a.link').stop().transition({bottom: '0', opacity: '1'}, 1200);
            },
            before: function(slider) {
                $('.head-slide .flex-active-slide h3.title').stop().transition({top: '-5%', opacity: '0'}, 1200);
                $('.head-slide .flex-active-slide h3.sub-title').stop().transition({top: '-1%', opacity: '0'}, 1200);
                $('.head-slide .flex-active-slide p.content').stop().transition({left: '-5%', opacity: '0'}, 1200);
                $('.head-slide .flex-active-slide a.link').stop().transition({bottom: '-5%', opacity: '0'}, 1200);
            },
            after: function(slider) {
                $('.head-slide .flex-active-slide h3.title').stop().transition({top: '0', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide h3.sub-title').stop().transition({top: '65px', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide p.content').stop().transition({left: '0', opacity: '1'}, 1200);
                $('.head-slide .flex-active-slide a.link').stop().transition({bottom: '0', opacity: '1'}, 1200);
            }
        });

        $('.head-slide .fa-angle-right').click(function () {
            $('.head-slide .flexslider .flex-next').trigger('click');
        });

        $('.head-slide .fa-angle-left').click(function () {
            $('.head-slide .flexslider .flex-prev').trigger('click');
        });
    }

    var removePreloader = function() {
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };


   // Dom Ready
   $(function() {
      fullScreen();
      slideHeader();
      retinaLogos();
      projectIsotope();
      widgetTestimonial();
      testimonial();
      logoClient();
      rollSlider();
      toggles();
      progressBar();
      orAnimation();
      goTop();
      ajaxContactForm();
      flickrFeed();
      ajaxSubscribe.eventLoad();
      gallaryPost();
      tabs();
      gallaryAbout();
      portfolioProjects();
      skillBar();
      removePreloader();
      gmapSetup();
      twitter();
      
      // Initialize responsive menu
      ResponsiveMenu.initial($(window).width());
      $(window).resize(function() {
         ResponsiveMenu.menuWidthDetect($(this).width());
      });

      // Detect elements into viewport
      $('[data-waypoint-active="yes"]').waypoint(function() {
         $(this).trigger('on-appear');
      }, { offset: '90%', triggerOnce: true });

      $(window).on('load', function() {
         setTimeout(function() {
            $.waypoints('refresh');
         }, 100);
      });
   });

})(jQuery);