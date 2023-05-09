import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

// const slidesAmount = () => {
//   if (window.innerWidth < 768) {
//     return 1;
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
//     return 2;
//   } else {
//     return 3;
//   }
// };

$('.hero__slider-list').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  arrows: false,
  variableWidth: true,
});
