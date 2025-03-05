let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Don't add empty tasks

    tasks.push(taskText);
    taskInput.value = ''; // Clear input field
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
