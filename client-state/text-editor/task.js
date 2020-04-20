const editor = document.getElementById('editor');


editor.addEventListener('input', toSave);
window.addEventListener('load', printContent);

function toSave() {
    localStorage.userText = editor.value;
}

function printContent() {
    if (localStorage.userText) {
        editor.value = localStorage.userText;
    } 
}