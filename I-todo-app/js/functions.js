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

const clearCompleted = function () {
    const completedTasks = document.querySelectorAll('.task__container.done');
    completedTasks.forEach(taskContainer => {

        let id = +taskContainer.dataset.id;
        taskContainer.remove();
        delete localStorageTasks[id];
        localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
    })
    containerVisible();
    countTasks();
}

const hideTasks = function () {
    const allTasks = document.querySelectorAll('.task__container');
    allTasks.forEach(task => task.remove());
}

const showAll = function () {
    hideTasks();
    loadTasks();

}

const resetSortBtns = function () {
    document.querySelectorAll('.sort').forEach(btn => btn.style.color = '');
}

const showActive = function () {
    showAll();
    const completedTasks = document.querySelectorAll('.task__container.done')
    completedTasks.forEach(task => task.style.display = 'none')

}

const showCompleted = function () {
    showAll();
    const Tasks = document.querySelectorAll('.task__container')
    Tasks.forEach(task => {
        if (!task.classList.contains('done')) task.style.display = 'none';
    })

}

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
    isDarkMode();
}

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
            taskCount = id ? id : 0;
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

const isDarkMode = function () {
    if (sunIcon.classList.contains('hide')) {
        inputBox.style.backgroundColor = 'hsl(235, 24%, 19%)';
        userInput.style.backgroundColor = 'hsl(235, 24%, 19%)';
        userInput.style.color = 'white';
        document.querySelectorAll('.circle').forEach(circle => circle.style.borderColor = 'hsl(233, 14%, 35%)')
        document.querySelectorAll('.task__container ').forEach(task => {
            task.style.backgroundColor = 'hsl(235, 24%, 19%)';
            task.style.borderColor = 'hsl(233, 14%, 35%)'; task.style.color = 'hsl(236, 9%, 61%)'
        })
        sortingBtns.style.backgroundColor = 'hsl(235, 24%, 19%)';
        document.querySelector('body').style.backgroundColor = 'hsl(235, 21%, 11%)';
    } else {
        inputBox.style.backgroundColor = '';
        userInput.style.backgroundColor = '';
        userInput.style.color = '';
        document.querySelectorAll('.circle').forEach(circle => circle.style.borderColor = '')
        document.querySelectorAll('.task__container ').forEach(task => { task.style.color = task.style.backgroundColor = task.style.borderColor = '' })
        sortingBtns.style.backgroundColor = '';
        document.querySelector('body').style.backgroundColor = '';
    }
}