const sellSliderRef = document.querySelector('.sell__slider-list');
let intervalId;

const sellSlider = () => {
  const sellSliderImagesRef = [
    ...document.querySelectorAll('.sell__slider-img'),
  ];
  const firstElem = sellSliderImagesRef[0].src;

  for (let i = 0; i < sellSliderImagesRef.length; i += 1) {
    if (i < sellSliderImagesRef.length - 1) {
      sellSliderImagesRef[i].src = sellSliderImagesRef[i + 1].src;
    } else {
      sellSliderImagesRef[i].src = firstElem;
    }
  }
};

const startSlider = () => {
  intervalId = setInterval(sellSlider, 3000);
};

const stopSlider = () => {
  clearInterval(intervalId);
};

sellSliderRef.addEventListener('mouseenter', stopSlider);
sellSliderRef.addEventListener('mouseleave', startSlider);

startSlider();
