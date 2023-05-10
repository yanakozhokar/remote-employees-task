import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

const formRef = document.querySelector('.hero__form');

const onFormSubmit = event => {
  event.preventDefault();
};

formRef.addEventListener('submit', onFormSubmit);

$('.hero__slider-list').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  arrows: false,
  variableWidth: true,
});
