const header = document.querySelector('.js-header');
const logo = document.querySelector('.js-logo');
const mobileNavBtn = document.querySelector('.js-mobile-menu-btn');
const mobileNavOpenIcon = document.querySelector('.js-mobile-open-icon');
const mobileNavCloseIcon = document.querySelector('.js-mobile-close-icon');
const mobileNav = document.querySelector('.js-mobile-nav');

if (mobileNavBtn) {
  mobileNavBtn.addEventListener('click', () => {
    // header.classList.toggle('bg-primary');

    logo.classList.toggle('c-black');
    logo.classList.toggle('c-white');

    mobileNav.classList.toggle('dn');

    mobileNavOpenIcon.classList.toggle('db');
    mobileNavOpenIcon.classList.toggle('dn');

    mobileNavCloseIcon.classList.toggle('dn');
  });
}

let menuButtons = document.querySelectorAll('.js-subnav');

for (let i = 0, len = menuButtons.length; i < len; i++) {
  menuButtons[i].addEventListener('click', (e) => {
    let childSubmenu = menuButtons[i].parentElement.querySelector(
      '.js-child-nav'
    );
    e.preventDefault();

    menuButtons[i].classList.toggle('is-active');
    menuButtons[i].classList.toggle('is-toggled');
    childSubmenu.classList.toggle('dn');
  });
}

document.addEventListener('click', (evt) => {
  const flyoutElement = document.querySelector('.js-child-nav');
  const subnav = document.querySelector('.js-subnav');
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement || targetElement == subnav) {
      // This is a click inside. Do nothing, just return.
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  // console.log('Clicked outside!');
  flyoutElement.classList.add('dn');
});
