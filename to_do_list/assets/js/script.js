document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const deleteAllBtn = document.getElementById('deleteAllBtn');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('taskItem');
            taskItem.innerHTML = `
                <input type="checkbox" class="taskCheckbox">
                <span class="taskText">${taskText}</span>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('taskCheckbox')) {
            const taskText = event.target.nextElementSibling;
            taskText.classList.toggle('completed');
        }
    });

    deleteAllBtn.addEventListener('click', function() {
        taskList.innerHTML = '';
    });
});