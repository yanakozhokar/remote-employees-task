const sellCarouselRef = document.querySelector('.sell__slider-list');

const sellSlider = () => {
  const sellCarouselImagesRef = [
    ...document.querySelectorAll('.sell__slider-img'),
  ];
  const firstElem = sellCarouselImagesRef[0].src;

  for (let i = 0; i < sellCarouselImagesRef.length; i += 1) {
    if (i < sellCarouselImagesRef.length - 1) {
      sellCarouselImagesRef[i].src = sellCarouselImagesRef[i + 1].src;
    } else {
      sellCarouselImagesRef[i].src = firstElem;
    }
  }
};

setInterval(sellSlider, 3000);
