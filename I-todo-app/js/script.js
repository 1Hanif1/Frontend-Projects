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

const clearAllTasks = function () {
    taskContainer.querySelectorAll()
}
const deleteTask = function (todoDiv) {
    const todoTask = todoDiv.querySelector('.task').textContent;
    todoDiv.remove()
    for (let key of Object.keys(localStorageTasks)) {
        if (localStorageTasks[key]?.todo == todoTask) {
            delete localStorageTasks[key]
            break;
        };
    }
    localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
    containerVisible();
    countTasks();
}
const markTask = function (todoDiv) {
    const todoTask = todoDiv.querySelector('.task').textContent;
    if (todoDiv.classList.contains('done')) {
        todoDiv.classList.remove('done');
        todoDiv.querySelector('.circle').classList.remove('done');
        todoDiv.querySelector('.task').classList.remove('done');

        for (let key of Object.keys(localStorageTasks)) {
            if (localStorageTasks[key]?.todo == todoTask) {
                localStorageTasks[key].completed = false;
                break;
            };
        }

        localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
    }
    else {
        todoDiv.classList.add('done');
        todoDiv.querySelector('.circle').classList.add('done');
        todoDiv.querySelector('.task').classList.add('done');

        for (let key of Object.keys(localStorageTasks)) {
            if (localStorageTasks[key]?.todo == todoTask) {
                localStorageTasks[key].completed = true;
                break;
            };
        }

        localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
    }
}
taskContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('cross')) deleteTask(e.target.closest('.task__container'));
    if (e.target.classList.contains('circle')) markTask(e.target.closest('.task__container'));
})

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
const renderTask = function (task, id, status) {
    let html = `
    <div class="task__container ${status ? "done" : ""}" data-id="${id}">
        <div class="circle ${status ? "done" : ""}"></div>
        <div class="task ${status ? "done" : ""}">${task}</div>
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
    renderTask(task, taskCount, false);
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
            let status = localStorageTasks[id]["completed"]
            renderTask(task, id, status);
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