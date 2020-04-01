'use strict'

const mainInterests = document.querySelector('.interests_main');

mainInterests.addEventListener('change', event => {
  const interest = event.target.closest('.interest');
  //console.log(interest);    
  const subInterest = interest.querySelectorAll('.interests');
  const checkInterest = interest.querySelector('.interest__check');

  subInterest.forEach(mainInterests => {
    let subCheck = mainInterests.querySelectorAll('.interest__check');
    
	  subCheck.forEach(el => {
      if (checkInterest.checked) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  });
});