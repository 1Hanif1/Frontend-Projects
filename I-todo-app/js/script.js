'use strict';
let localStorageTasks, taskCount;
/**
 * Things to implement:
 * Insert new todos ~
 * save todos ~
 * mark as complete
 * delete todos
 * sort todos
 * clear completed todos
 * show number of todos
 * Switch themes
 */
const userInput = document.querySelector('.userInput');
const taskContainer = document.querySelector('.main__tasks');

const countTasks = function () {
    let totalTask = document.querySelectorAll('.task__container ').length;
    document.querySelector('.totalTask').textContent = totalTask;
}

const saveTask = function (task, id) {
    let taskObject = {
        'todo': task,
        'completed': false,
    }
    localStorageTasks[id] = taskObject;
    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
}
const renderTask = function (task, id) {
    let html = `
    <div class="task__container " data-id="${id}">
        <div class="circle"></div>
        <div class="task">${task}</div>
        <img class="cross" src="./images/icon-cross.svg" alt="/">
    </div>
    `
    taskContainer.insertAdjacentHTML('afterbegin', html);
}
userInput.addEventListener('keydown', function (e) {
    if (!(e.key === "Enter") || userInput.value.trim() === '') return;
    let task = userInput.value;
    ++taskCount;
    saveTask(task, taskCount);
    renderTask(task, taskCount);
    containerVisible();
    countTasks();
})


const loadTasks = function () {
    localStorageTasks = localStorage.getItem('tasks');
    if (!localStorageTasks) {
        localStorageTasks = {};
        localStorage.setItem('tasks', JSON.stringify(localStorageTasks))
        taskCount = 0;
    } else {
        localStorageTasks = JSON.parse(localStorageTasks);
        for (const id in localStorageTasks) {
            let task = localStorageTasks[id]["todo"];
            renderTask(task, id);
            taskCount = id;
        }
        countTasks();
    }
}
const containerVisible = function () {
    if (Object.keys(localStorageTasks).length > 0)
        taskContainer.style.visibility = 'visible';
    else
        taskContainer.style.visibility = 'hidden';
}
window.addEventListener('load', function () {
    loadTasks();
    containerVisible();
})