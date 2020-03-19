let slidersArr = Array.from(document.getElementsByClassName("slider__item"));
let dots = Array.from(document.getElementsByClassName("slider__dot"));
let sliderNextArr = document.getElementsByClassName('slider__arrow_next');
let sliderPrevArr = document.getElementsByClassName('slider__arrow_prev');
let sliderActive = 0;

function notActive() {
    slidersArr[sliderActive].className = "slider__item";
    dots[sliderActive].className = "slider__dot";
}

function active() {
    slidersArr[sliderActive].className = "slider__item slider__item_active";
    dots[sliderActive].className = "slider__dot slider__dot_active";
}

function nextSlider() {
    notActive();
    if (sliderActive < slidersArr.length - 1) {
        sliderActive = sliderActive + 1;
    } else {
        sliderActive = 0;
    }
    active();
}

function prevSlider() {
    notActive();
    if (sliderActive > 0) {
        sliderActive = sliderActive - 1;
    } else {
        sliderActive = slidersArr.length - 1;
    }
    active();
}

sliderNextArr[0].onclick = nextSlider;
sliderPrevArr[0].onclick = prevSlider;

function dotAction () {
    notActive();
    sliderActive = dots.indexOf(this);
    active();
}

for (const dot of dots) {
    dot.onclick = dotAction;
}