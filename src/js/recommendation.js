import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

const recSliderListRef = document.querySelector('.recommendation__slider-list');
const recSliderItemsRef = [
  ...document.querySelectorAll('.recommendation__slider-item'),
];
const recFilterListRef = document.querySelector('.recommendation__filter-list');
const houses = recSliderItemsRef.filter(item => item.dataset.type === 'house');
const villas = recSliderItemsRef.filter(item => item.dataset.type === 'villa');
const apartments = recSliderItemsRef.filter(
  item => item.dataset.type === 'apartment'
);
let slider;

const onFilterBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } else if (event.target.dataset.filter === 'houses') {
    recSliderListRef.innerHTML = houses.map(house => house.outerHTML).join('');
  } else if (event.target.dataset.filter === 'villas') {
    recSliderListRef.innerHTML = villas.map(villa => villa.outerHTML).join('');
  } else if (event.target.dataset.filter === 'apartments') {
    recSliderListRef.innerHTML = apartments
      .map(apartment => apartment.outerHTML)
      .join('');
  }
};

recFilterListRef.addEventListener('click', onFilterBtnClick);

const getSlidesAmount = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return 2;
  } else {
    return 3;
  }
};

const updateSlider = () => {
  const slidesToShow = getSlidesAmount();
  if (slider) {
    slider.slick('slickSetOption', 'slidesToShow', slidesToShow, true);
  }

  const marginLeft =
    Math.round(
      (recSliderListRef.clientWidth -
        recSliderItemsRef[0].clientWidth * slidesToShow) /
        (slidesToShow - 1)
    ) + 1;

  recSliderItemsRef.forEach(
    item => (item.style = `margin-left: ${marginLeft}px;`)
  );
};

$(document).ready(() => {
  slider = $('.recommendation__slider-list').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.recomendation__prev-btn'),
    nextArrow: $('.recommendation__next-btn'),
    slidesToShow: getSlidesAmount(),
    variableWidth: true,
  });

  window.addEventListener('resize', updateSlider);
});

const slidesToShow = getSlidesAmount();

const marginLeft =
  Math.round(
    (recSliderListRef.clientWidth -
      recSliderItemsRef[0].clientWidth * slidesToShow) /
      (slidesToShow - 1)
  ) + 1;

recSliderItemsRef.forEach(
  item => (item.style = `margin-left: ${marginLeft}px;`)
);
