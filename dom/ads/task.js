let rotatorCase = Array.from(document.getElementsByClassName("rotator__case"));
let step = 0;

function search () {
    rotatorCase[step].classList.remove('rotator__case_active');           
    step = (step === rotatorCase.length - 1) ? 0 : step + 1;
    rotatorCase[step].classList.add('rotator__case_active');
};

setInterval(search, 1000);