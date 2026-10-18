const taskInput = document.querySelector('taskInput');
const addBtn = document.querySelector('addBtn');
const taskList = document.querySelector('taskList');

addBtn.addEventListener("click", function () {

    const taskList = taskInput.ariaValueMax.trim();

    if (taskInput === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
})
   