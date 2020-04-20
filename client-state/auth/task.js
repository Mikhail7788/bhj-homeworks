'use strict';

const welcome = document.querySelector('.welcome');
const signinBtn = document.getElementById('signin__btn');
const signin = document.querySelector('.signin');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');
const xhr = new XMLHttpRequest();

window.addEventListener('load', () => {
    signin.classList.add('signin_active');
})

signinBtn.addEventListener('click', dataSend);

function dataSend(event) {
    event.preventDefault();

    const formData = new FormData(signinForm);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', signInAlerts);

    function signInAlerts() {
        if(xhr.readyState === 4 ) {
            let getData = JSON.parse(xhr.responseText);
            
            if (getData.success) {
                localStorage.userId = getData.user_id;
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = localStorage.userId;
            } else {
                alert('Неверный логин или пароль');
            }
        }
    }
    xhr.send(formData);
}