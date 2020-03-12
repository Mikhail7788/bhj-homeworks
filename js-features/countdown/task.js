'use strict';

function countDown() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if(timer.textContent == 0) {
        alert("Вы ничего не сделали, но победили!");
        clearInterval(timerId);
    }
}

let timerId = setInterval(countDown, 1000);

