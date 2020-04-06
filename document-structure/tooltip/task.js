'use strict';
let tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

document.body.addEventListener('click', (e) => {
    let target = e.target;
    
    if (target.className != 'has-tooltip') return;
    
    e.preventDefault();
    
    tooltip.innerText = target.getAttribute('title');
    
    tooltip.classList.toggle('tooltip_active');
    
    let place = target.getBoundingClientRect();
    tooltip.style.left = place.left + "px";
    tooltip.style.top = place.top + 25 + "px";
    
    target.addEventListener('blur', () => {
        tooltip.classList.remove('tooltip_active');
    });
});