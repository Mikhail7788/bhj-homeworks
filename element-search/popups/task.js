const modal = Array.from(document.getElementsByClassName('modal'));
const modalClose =  Array.from(document.getElementsByClassName('modal__close'));

modal[0].className = "modal modal_active";

modalClose[1].onclick = function() {
	modal[1].className = "modal modal_active";
	modal[0].className = "modal";
}

modalClose[0].onclick = function() {
	modal[0].className = "modal";
};
modalClose[2].onclick = function() {
	modal[1].className = "modal";
}