import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/fullpage.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';
import "./modules/video.min.js";

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


window.onload = function () {


  var myFullpage = new fullpage('#fullpage', {
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
    menu: '.menu',
    autoScrolling: true,   
    scrollHorizontally: true,
    fitToSection: false,
    navigation: false,
    // responsiveWidth: 768
  });


  // Инициализация слайдера content-slider
  document.querySelectorAll('.content-slider').forEach(n => {
    const mySwiperContent = new Swiper(n, {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      effect: 'fade',
      mousewheelControl: true,
      watchOverflow: true,
      mousewheel: {
        invert: false,
      },
      fadeEffect: {
        crossFade: true
      },
      autoHeight: true,
      on: {
        slideChange: function () {
          var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
          let offer = n.closest('.section').querySelector('.counter');
          offer.innerHTML = '0' + (this.activeIndex + 1) + '' + `<span> /` + ' 0' + (slides_count.length) + '</span>';
          myFullpage.setAllowScrolling(false);
        },
        slideNextTransitionEnd: function () {
          myFullpage.setAllowScrolling(true);
        },
        slidePrevTransitionEnd: function () {
          myFullpage.setAllowScrolling(true);
        },
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

}


let introCatalogBtn = document.querySelector('.hamburger');
let introCatalog = document.querySelector('.introCatalog');
let introCatalogClose = document.querySelector('.introCatalogClose');
let bodyEl = document.querySelector('body');

introCatalogBtn.addEventListener('click', () => {
  introCatalog.classList.add('active');
  bodyEl.classList.add('hidden');
});
introCatalogClose.addEventListener('click', () => {
  introCatalog.classList.remove('active');
  bodyEl.classList.remove('hidden');
});

// Menu show or hide
document.addEventListener('click', function (e) {
  const target = e.target;
  const its_introCatalogBtn = target == introCatalogBtn || introCatalogBtn.contains(target);
  const its_CatalogContent = target == introCatalog || introCatalog.contains(target);

  if (!its_introCatalogBtn && !its_CatalogContent) {
    introCatalog.classList.remove('active');
    introCatalogBtn.classList.remove('active');
    bodyEl.classList.remove('hidden');
  }
});

// close menu in Landing page
$(document).on("click", ".introNavList li a", function (e) {
  $('.introCatalog').removeClass('active');
  $('body').removeClass('hidden');
  // $('#nav-icon3').removeClass('open');
});

