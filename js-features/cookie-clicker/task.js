const cookie = document.getElementById("cookie")

const clickerCount = document.getElementById("clicker__counter");

function clicker() {
	clickerCount.textContent ++;
    
    if (clickerCount.textContent % 2 !== 0) {
		cookie.width = 150;
    } else {
		cookie.width = 300;
    }
}
    
cookie.onclick = clicker;