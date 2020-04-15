let valute;
let valuteContainer = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        valute = xhr.response.response.Valute;   
    }

    loader.classList.toggle('loader_active');

    for (let valuteItem in valute) {
        valuteContainer.insertAdjacentHTML("afterBegin",
        `<div class="item__code">${valute[valuteItem].CharCode} ${valute[valuteItem].Value} руб.</div>`);
    }
}