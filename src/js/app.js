import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/fullpage.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


window.onload = function () {

  new fullpage('#fullpage', {
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
    menu: '#menu',
    autoScrolling: false,
    scrollHorizontally: true,
    fitToSection: false,
    navigation: false,

    afterSlideLoad: function (origin, destination, direction) {
      // setCounter();
    },
    afterRender: function () {
      // setCounter();
    },
    afterLoad: function (origin, destination, direction, trigger) {
      // setCounter();
    },
  });

  // function setCounter() {
  //   var sectionItem = fullpage_api.getActiveSection().item;
  //   var numSlides = sectionItem.querySelectorAll(".fp-slide").length;
  //   var currentSlideWrapper = sectionItem.querySelector(".counter");
  //   if (currentSlideWrapper) {
  //     var slideNumber = fullpage_api.getActiveSlide().index + 1;
  //   }
  //   if (currentSlideWrapper) {
  //     currentSlideWrapper.innerHTML = "0" + slideNumber + "<span> /" + ' 0' + numSlides + "</span>";
  //   }
  // }

  // $('.navArrowPrev').on('click', function () { fullpage_api.moveSlideLeft(); });
  // $('.navArrowNext').on('click', function () { fullpage_api.moveSlideRight(); });

}



// Инициализация слайдера content-slider
document.querySelectorAll('.content-slider').forEach(n => {
  const mySwiperContent = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,   
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoHeight: true,   
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.section').querySelector('.counter');
        offer.innerHTML = '0' + (this.activeIndex + 1) + '' + `<span> /` + ' 0' + (slides_count.length) + '</span>';
      }
    },
    navigation: {
      nextEl: n.closest('.section').querySelector('.navArrowNext'),
      prevEl: n.closest('.section').querySelector('.navArrowPrev'),
    },
    pagination: {
      el: n.querySelector('.pagination'),
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
      },
      576: {
        spaceBetween: 20,
      },
    },
  });


  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.section').querySelector('.counter');
      if (offer_1) {
        offer_1.innerHTML = '0' + (mySwiperContent.activeIndex + 1) + '' + `<span> /` + ' 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});

