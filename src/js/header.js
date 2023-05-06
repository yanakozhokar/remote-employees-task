const navMenuDropdownRef = document.querySelector('.nav-menu__dropdown');
const navMenuDropdownItemsRef = document.querySelectorAll(
  '.nav-menu__dropdown-item'
);

const onDropdownMouseover = () => {
  navMenuDropdownItemsRef.forEach(
    item =>
      item.classList.contains('is-hidden') && item.classList.remove('is-hidden')
  );
};

const onDropdownMouseout = () => {
  navMenuDropdownItemsRef.forEach(
    item =>
      item !== navMenuDropdownItemsRef[0] && item.classList.add('is-hidden')
  );
};

navMenuDropdownRef.addEventListener('mouseover', onDropdownMouseover);
navMenuDropdownRef.addEventListener('mouseout', onDropdownMouseout);

// const onDropdownMouseover = () => {
//   navMenuDropdownItemsRef.forEach(
//     item =>
//       item.classList.contains('nav-menu__dropdown-item--hidden') &&
//       item.classList.replace(
//         'nav-menu__dropdown-item--hidden',
//         'nav-menu__dropdown-item'
//       )
//   );
// };

// const onDropdownMouseout = () => {
//   navMenuDropdownItemsRef.forEach(
//     item =>
//       item !== navMenuDropdownItemsRef[0] &&
//       item.classList.replace(
//         'nav-menu__dropdown-item',
//         'nav-menu__dropdown-item--hidden'
//       )
//   );
// };
