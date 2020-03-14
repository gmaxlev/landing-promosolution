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

    // Логотипы клиентов
    new Swiper("#brands-slider", {
      loop: true,
      navigation: {
        nextEl: $(".logos-slider__br"),
        prevEl: $(".logos-slider__bl")
      }
    });
  })();

  /* 
    Слайдер на первом экране
  */
  (function() {
    // Цвета
    var colors = ["#c71a78", "#009eaa", "#ff8400", "#ee1c24", "#8dc748"];
    // Команда
    new Swiper("#intro-slider", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      },
      autoplay: {
        delay: 3000
      },
      on: {
        progress: function(progress) {
          if (progress > 0.9 || (progress > 0.08 && progress < 0.25)) {
            $(".intro").css("background-color", colors[0]);
          } else if (progress > 0.25 && progress < 0.4) {
            $(".intro").css("background-color", colors[1]);
          } else if (progress > 0.4 && progress < 0.57) {
            $(".intro").css("background-color", colors[2]);
          } else if (progress > 0.57 && progress < 0.74) {
            $(".intro").css("background-color", colors[3]);
          } else if (progress < 0.9) {
            $(".intro").css("background-color", colors[4]);
          }
        }
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
