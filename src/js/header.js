const menu = document.querySelector('[data-menu]');
const menuList = document.querySelector('.menu__list');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');

const toggleMenu = () => {
  menu.classList.toggle('is-hidden');

  !menu.classList.contains('is-hidden')
    ? (document.querySelector('body').style.overflow = 'hidden')
    : (document.querySelector('body').style.overflow = 'visible');
};

const onMenuListClick = event => {
  if (event.target.nodeName === 'A') {
    toggleMenu();
  }
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuList.addEventListener('click', onMenuListClick);
