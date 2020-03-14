'use strict'

let links = Array.from(document.querySelectorAll('.menu__link'));

for (let item of links) {
	item.onclick = function () {
		let parentItem = item.parentElement;
		if (parentItem.querySelector('.menu_sub').className === 'menu menu_sub') {
			parentItem.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parentItem.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (item.closest('.menu_main')) {
			return false
		}
	}
}