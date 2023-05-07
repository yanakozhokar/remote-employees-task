const heroCarousel = document.querySelector('.hero__rewiews-list');
const heroCarouselItems = Array.from(
  document.querySelectorAll('.hero__rewiews-item')
);

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
