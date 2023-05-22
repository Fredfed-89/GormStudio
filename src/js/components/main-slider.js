import Swiper from 'swiper/bundle';

const mySwiper = new Swiper('.swiper', {
  // direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
