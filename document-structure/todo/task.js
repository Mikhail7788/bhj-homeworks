'use strict';
let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');

function addTask () {
    
    taskList.insertAdjacentHTML('afterbegin', `
        <div class= "task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    taskList.querySelector('.task__remove').onclick = (e) => {
        e.target.closest('.task').remove();
    }
    taskInput.value = '';
}

taskInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && taskInput.value != '') {
        addTask(taskInput.value);
    }
})

taskAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value != '') {
        addTask(taskInput.value);
    }
});