document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurger = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)[0];

  $navbarBurger.addEventListener('click', () => {
    const $target = document.getElementById($navbarBurger.dataset.target);
    $navbarBurger.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });
});
