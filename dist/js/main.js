$(document).ready(function() {
  new WOW().init();

  /* 
    Выпадающее меню
  */
  (function() {
    $(".dropdown__header").on("click", function(e) {
      e.preventDefault();
      $(this)
        .parent()
        .toggleClass("dropdown_open");
    });
  })();

  /* 
    Шапка сайта при прокрутке
  */
  (function() {
    function headerToScroll() {
      if (
        $(window).scrollTop() >
        $(".intro").outerHeight() - $(".header").outerHeight()
      ) {
        $(".header").addClass("header_scroll");
      } else {
        $(".header").removeClass("header_scroll");
      }
    }
    headerToScroll();
    $(window).scroll(headerToScroll);
  })();

  /* 
    Мобильная шапка сайта при прокрутке
  */
  (function() {
    function headerToScroll() {
      if (
        $(window).scrollTop() >
        $(".intro").outerHeight() - $(".mobheader").outerHeight()
      ) {
        $(".mobheader").addClass("mobheader_scroll");
      } else {
        $(".mobheader").removeClass("mobheader_scroll");
      }
    }
    headerToScroll();
    $(window).scroll(headerToScroll);
  })();

  /* 
    Анимания кругов
  */
  (function() {
    new WOW({
      boxClass: "exce__circle",
      animateClass: "exce__circle_show",
      offset: 0,
      mobile: true,
      live: true
    }).init();
  })();

  /* 
    FancyBox
  */
  (function() {
    $("[data-fancybox]").fancybox({
      hash: false
    });
  })();

  /* 
    Мобильное меню
  */
  (function() {
    $(".mobheader__menu").on("click", function(e) {
      e.preventDefault();
      $(".mobmenu").slideToggle();
    });

    $(".mobmenu__item > a").on("click", function(e) {
      e.preventDefault();
      $(".mobmenu").slideUp();
    });
  })();

  /* 
    Настройка слайдеров
  */
  (function() {
    // Отзывы
    new Swiper("#reviews-slider", {
      loop: true,
      navigation: {
        nextEl: ".slider-reviews__next",
        prevEl: ".slider-reviews__back"
      }
    });

    // Команда
    new Swiper("#team-slider", {
      loop: true,
      navigation: {
        nextEl: ".team-slider__next",
        prevEl: ".team-slider__back"
      }
    });
  })();

  /* 
    Плавная прокрутка от элемента [data-scrollto="id"] к id
  */
  (function() {
    $("[data-scrollto]").on("click", function(e) {
      e.preventDefault();
      var id = $(this).attr("data-scrollto");
      var minusHeader;
      if (window.innerWidth < 769) {
        minusHeader = $(".mobheader").outerHeight();
      } else {
        minusHeader = $(".header").outerHeight();
      }
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#" + id).offset().top - minusHeader
        },
        2000
      );
    });
  })();
});
