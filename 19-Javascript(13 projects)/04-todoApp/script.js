const task = document.querySelector('taskInput')
const addBtn = document.querySelector('btnBtn');
const taskList = document.querySelector('taskList');


addBtn.addEventListener("click", function(){
    const taskList = taskInput.value.trim();

    if (taskText === "") {
        alert("please enter a task!");
        return;
    }
})