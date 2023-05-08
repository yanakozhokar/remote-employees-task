import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  slidesToShow: 3,
});
