const subscribeFormRef = document.querySelector('.subscribe__form');
const subscribeInputRef = document.querySelector('.subscribe__form-input');

const onSubscribeBtnClick = event => {
  event.preventDefault();
};

subscribeFormRef.addEventListener('submit', onSubscribeBtnClick);
