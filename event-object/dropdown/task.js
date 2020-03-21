let dropValue = document.getElementsByClassName('dropdown__value');
let dropList = document.getElementsByClassName('dropdown__list');
let dropItems = document.getElementsByClassName('dropdown__item');

function menuOpen() {
    dropList[0].className = 'dropdown__list dropdown__list_active';
    return false;
}

dropValue[0].addEventListener('click', menuOpen);

function shift() {
    dropList[0].className = 'dropdown__list';
    return false;
};

for (const item of dropItems) {
    item.onclick = shift;
}