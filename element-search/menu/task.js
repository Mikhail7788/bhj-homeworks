function removeMenuActive(element) {
  Array.from(
    element.closest('.menu_main').querySelectorAll('.menu_active')
  ).forEach(element => {
    element.classList.remove('menu_active');
  });
}

function click() {
  if (this.nextElementSibling.tagName == "UL") {
    let itemActive = this.nextElementSibling.classList.contains('menu_active');
    removeMenuActive(this);
    if (!itemActive)
      this.nextElementSibling.classList.add('menu_active');
  }
  return false;
}

Array.from(document.getElementsByClassName('menu__link')).forEach(element => {
  element.onclick = click;
});