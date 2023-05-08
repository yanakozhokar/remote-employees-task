const heroCarousel = document.querySelector('.hero__slider-list');
const heroCarouselItems = [...document.querySelectorAll('.hero__slider-item')];

let currentIndex = 0;
let isAnimating = false;
let timer;

function goToSlide(index) {
  if (isAnimating) return;

  isAnimating = true;

  heroCarouselItems[currentIndex].classList.remove('active');
  currentIndex = index % heroCarouselItems.length;
  heroCarouselItems[currentIndex].classList.add('active');

  const slideWidth = heroCarouselItems[currentIndex].offsetWidth;
  heroCarousel.style.transition = 'transform 1s ease';
  heroCarousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

function goToPrev() {
  goToSlide(currentIndex - 1);
  resetTimer();
}

function goToNext() {
  goToSlide(currentIndex + 1);
  resetTimer();
}

function autoPlay() {
  timer = setInterval(() => {
    goToNext();
  }, 3000);
}

function resetTimer() {
  clearInterval(timer);
  autoPlay();
}

autoPlay();

//? Работает корректно, но прокрутка не вечная

// const heroCarousel = document.querySelector('.hero__slider-list');
// const heroCarouselItems = Array.from(
//   document.querySelectorAll('.hero__slider-item')
// );

// let currentIndex = 0;
// let isAnimating = false;
// let timer;

// function goToSlide(index) {
//   if (isAnimating) return;

//   isAnimating = true;

//   heroCarouselItems[currentIndex].classList.remove('active');
//   currentIndex = index % heroCarouselItems.length;
//   heroCarouselItems[currentIndex].classList.add('active');

//   const slideWidth = heroCarouselItems[currentIndex].offsetWidth;
//   heroCarousel.style.transition = 'transform 1s ease';
//   heroCarousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

//   setTimeout(() => {
//     isAnimating = false;
//   }, 500);
// }

// function goToPrev() {
//   goToSlide(currentIndex - 1);
//   resetTimer();
// }

// function goToNext() {
//   goToSlide(currentIndex + 1);
//   resetTimer();
// }

// function autoPlay() {
//   timer = setInterval(() => {
//     goToNext();
//   }, 3000);
// }

// function resetTimer() {
//   clearInterval(timer);
//   autoPlay();
// }

// autoPlay();

//? Прокрутка вечная, но после первой прокрутки все элементы идентичны

// const heroCarousel = document.querySelector('.hero__slider-list');
// let heroCarouselItems = Array.from(
//   document.querySelectorAll('.hero__slider-item')
// );

// let currentIndex = 0;
// let isAnimating = false;
// let timer;

// function updateCarouselItems() {
//   heroCarouselItems = Array.from(
//     document.querySelectorAll('.hero__slider-item')
//   );
// }

// function goToSlide(index) {
//   if (isAnimating) return;

//   isAnimating = true;

//   heroCarouselItems[currentIndex].classList.remove('active');
//   currentIndex = index % heroCarouselItems.length;
//   heroCarouselItems[currentIndex].classList.add('active');

//   const slideWidth = heroCarouselItems[currentIndex].offsetWidth;
//   heroCarousel.style.transition = 'transform 1s ease';
//   heroCarousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

//   setTimeout(() => {
//     isAnimating = false;
//   }, 500);

//   if (currentIndex === heroCarouselItems.length - 1) {
//     const cloneFirstSlide = heroCarouselItems[0].cloneNode(true);
//     heroCarousel.appendChild(cloneFirstSlide);
//     updateCarouselItems();
//   } else if (currentIndex === 0 && heroCarouselItems.length > 1) {
//     heroCarouselItems[heroCarouselItems.length - 1].remove();
//     updateCarouselItems();
//     currentIndex++;
//   }
// }

// function goToPrev() {
//   goToSlide(currentIndex - 1);
//   resetTimer();
// }

// function goToNext() {
//   goToSlide(currentIndex + 1);
//   resetTimer();
// }

// function autoPlay() {
//   timer = setInterval(() => {
//     goToNext();
//   }, 3000);
// }

// function resetTimer() {
//   clearInterval(timer);
//   autoPlay();
// }

// autoPlay();

//? Работает корректно, прокрутка вечная, но старые элементы не удаляются

// const heroCarousel = document.querySelector('.hero__slider-list');
// let heroCarouselItems = Array.from(
//   document.querySelectorAll('.hero__slider-item')
// );

// let currentIndex = 0;
// let isAnimating = false;
// let timer;

// function updateCarouselItems() {
//   heroCarouselItems = Array.from(
//     document.querySelectorAll('.hero__slider-item')
//   );
// }

// function goToSlide(index) {
//   if (isAnimating) return;

//   isAnimating = true;

//   heroCarouselItems[currentIndex].classList.remove('active');
//   currentIndex = index % heroCarouselItems.length;
//   heroCarouselItems[currentIndex].classList.add('active');

//   const slideWidth = heroCarouselItems[currentIndex].offsetWidth;
//   heroCarousel.style.transition = 'transform 1s ease';
//   heroCarousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

//   setTimeout(() => {
//     isAnimating = false;
//   }, 500);

//   if (currentIndex === heroCarouselItems.length - 1) {
//     const cloneItems = heroCarouselItems.map(item => item.cloneNode(true));
//     heroCarousel.append(...cloneItems);
//     updateCarouselItems();
//   } else if (currentIndex === 0 && heroCarouselItems.length > 1) {
//     const numToRemove = heroCarouselItems.length - 1;
//     heroCarouselItems.splice(-numToRemove).forEach(item => item.remove());
//     updateCarouselItems();
//     currentIndex++;
//   }
// }

// function goToPrev() {
//   goToSlide(currentIndex - 1);
//   resetTimer();
// }

// function goToNext() {
//   goToSlide(currentIndex + 1);
//   resetTimer();
// }

// function autoPlay() {
//   timer = setInterval(() => {
//     goToNext();
//   }, 3000);
// }

// function resetTimer() {
//   clearInterval(timer);
//   autoPlay();
// }

// autoPlay();
