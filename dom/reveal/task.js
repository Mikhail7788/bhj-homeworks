'use strict'

const reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {

	document.addEventListener('scroll', () => {

        if(reveal[i].getBoundingClientRect().top < window.innerHeight) {
            reveal[i].classList.add('reveal_active');
        } else {
			reveal[i].classList.remove('reveal_active');
		}    
  });
}

const button = document.getElementById('registerButton');
button.addEventListener('click', e => {
conts name = document.getElementById('fio');
const user = name.value;
console.log(`Пользователь ${user} зарегистрирован`);
});