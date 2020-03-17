'use strict'
const arrSliders = Array.from(document.querySelectorAll('div.slider__arrows > div'));

const arrImg = Array.from(document.querySelectorAll('div.slider__items > div'));

let currentImg = 0;

arrSliders[0].onclick = function() {
	arrImg[currentImg].className = "slider__item";
	
	if (currentImg === 0) {
		currentImg = arrImg.length - 1;
	} else {
		currentImg -= 1;
	}
	arrImg[currentImg].className = "slider__item slider__item_active";
}

arrSliders[1].onclick = function() {
	arrImg[currentImg].className = "slider__item";
	
	if (currentImg === (arrImg.length - 1)) {
		currentImg = 0;
	} else {
		currentImg += 1;
	}
	arrImg[currentImg].className = "slider__item slider__item_active";
}