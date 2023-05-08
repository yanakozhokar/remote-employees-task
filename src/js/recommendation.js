import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

const slidesAmount = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return 2;
  } else {
    return 3;
  }
};

$('.recommendation__slider-list').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: $('.recomendation__prev-btn'),
  nextArrow: $('.recommendation__next-btn'),
  slidesToShow: slidesAmount(),
});
