const menuSub = Array.from(document.querySelectorAll('li.menu__item > ul'));
const menuItems = Array.from(document.querySelectorAll('li.menu__item > a'));

menuItems[1].onclick = function() {
	menuSub[0].className = "menu menu_sub menu_active";
	menuSub[1].className = "menu menu_sub";
	return false;
}
menuItems[5].onclick = function() {
	menuSub[1].className = "menu menu_sub menu_active";
	menuSub[0].className = "menu menu_sub";
	return false;
}