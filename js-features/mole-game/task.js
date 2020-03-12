let hole = [];
const kill = document.getElementById('dead');
const lost = document.getElementById('lost');
kill.textContent = 0;
lost.textContent = 0;
let winner = 0;
let loser = 0;

function getHole() {
	for (let i = 1; i < 10; i++) {
		hole.push(document.getElementById(`hole${i}`));
	}
	return hole;
}

getHole();

for (let i = 0; i < 10; i++) {
	hole[i].onclick = sniper;
	function sniper() {
		if (hole[i].classList.contains('hole_has-mole')) {
			kill.textContent++;
			//console.log(kill.textContent);
		} else {
			lost.textContent++;
			//console.log(lost.textContent);
		}
		
		if (kill.textContent == 10) {
			alert('На бобровую шапку вполне хватит!');
			kill.textContent = 0;
			lost.textContent = 0;
		} else if (lost.textContent == 5) {
			alert('5 промохов дружище. Охотник из тебя не очень :-(');
			kill.textContent = 0;
			lost.textContent = 0;
		}
	}
}