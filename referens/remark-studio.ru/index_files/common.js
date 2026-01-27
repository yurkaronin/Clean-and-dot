"use strict";

$(document).ready(function() {

  /**
  * Слайдеры
  */

  // слайдер на главной в первом экране
  $('.home-sider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.home-sider__nav',
    draggable: false,
    swipe: false,
  });
  $('.home-sider__nav').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: '.home-sider__main',
    dots: false,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
  });



  /**
  * Стрелка наверх 
  */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  /**
  * Адаптивное меню
  * Docs: https://slideout.js.org/
  */

  var slideout = new Slideout({
    'panel': document.getElementById('wrapper'),
    'menu': document.getElementById('mobile-nav'),
    'padding': 256,
    'tolerance': 70
  });

  document.querySelector('.nav-toggle').addEventListener('click', function() {
    slideout.toggle();
  });


  /**
  * FancyBox 3
  * Docs: http://fancyapps.com/fancybox/3/docs/
  */

  $("[data-fancybox]").fancybox({
    buttons : [
      'close',
    ],
    touch: false,
  });


  /**
  * Прокрутка страницы по якорю
  */

  $('.scroll-link, a[href="#form"]').on('click', function (event) {
    event.preventDefault();
    var target = $(this),
      url = target.attr('href');

    $('html, body').animate({
      scrollTop: $(url).offset().top - 0
    }, 750);

  });


  /**
  * Адаптивные видео
  */

  $('.article iframe').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

});