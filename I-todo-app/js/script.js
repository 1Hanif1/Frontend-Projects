'use strict';

themeSwitcher.addEventListener('click', function () {
    if (!sunIcon.classList.contains('hide')) {
        // change sun/moon icon
        sunIcon.classList.add('hide');
        moonIcon.classList.remove('hide');

        // change background
        bgDesktop.forEach(img => {
            if (img.classList.contains('bg-d-l')) img.classList.add('hide');
            else img.classList.remove('hide');
        })
        bgMobile.forEach(img => {
            if (img.classList.contains('bg-m-l')) img.classList.add('hide');
            else img.classList.remove('hide');
        })

        // color
        isDarkMode()
    } else {
        sunIcon.classList.remove('hide');
        moonIcon.classList.add('hide');
        bgDesktop.forEach(img => {
            if (img.classList.contains('bg-d-l')) img.classList.remove('hide');
            else img.classList.add('hide');
        })
        bgMobile.forEach(img => {
            if (img.classList.contains('bg-m-l')) img.classList.remove('hide');
            else img.classList.add('hide');
        })

        // Color
        isDarkMode()
    }
})

taskContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('cross')) deleteTask(e.target.closest('.task__container'));
    if (e.target.classList.contains('circle')) markTask(e.target.closest('.task__container'));
    if (e.target.classList.contains('clear')) clearCompleted();
    if (e.target.classList.contains('all')) resetSortBtns() || (e.target.style.color = 'hsl(220, 98%, 61%)') && showAll();
    if (e.target.classList.contains('active')) resetSortBtns() || (e.target.style.color = 'hsl(220, 98%, 61%)') && showActive();
    if (e.target.classList.contains('completed')) resetSortBtns() || (e.target.style.color = 'hsl(220, 98%, 61%)') && showCompleted();
})

userInput.addEventListener('keydown', function (e) {
    if (!(e.key === "Enter") || userInput.value.trim() === '') return;
    let task = userInput.value;
    userInput.value = '';
    ++taskCount;
    saveTask(task, taskCount);
    renderTask(task, taskCount, false);
    containerVisible();
    countTasks();
})

window.addEventListener('load', function () {
    taskCount = 0;
    loadTasks();
    containerVisible();
})