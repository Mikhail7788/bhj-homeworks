let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    xhr.onprogress = function(e) {
      progress.value = e.loaded / 100000;
    }
});