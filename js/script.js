$(function () {
  // Section 003 : Charactar 슬라이드
  const swiper = new Swiper('.charactar-slide', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 0,

    speed: 1500,
    effect: 'slide',

    // Navigation arrows
    navigation: {
      nextEl: '.slide-btn-next',
      prevEl: '.slide-btn-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
  });

  // Section 004 : Movie Clip 슬라이드
  var videoSlide = new Swiper('.video-slide', {
    loop: true,
    spaceBetween: 12,
    centeredSlides: true,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var highlightSlide = new Swiper('.highlight-slide', {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 1,
    navigation: {
      nextEl: '.video-button-next',
      prevEl: '.video-button-prev',
    },
    thumbs: {
      swiper: videoSlide,
    },
  });
});
