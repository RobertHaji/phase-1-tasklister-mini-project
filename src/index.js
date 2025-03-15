document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.getElementById("create-task-form");
  const submit = document.getElementById("submitInput");
  let taskItem = document.getElementById("tasks");
  let taskList = [];
  const date = document.getElementById('number-of-days')
  const color = document.getElementById('priority')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('new-task-description')
    taskList.push(taskInput);
    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button')
    const dateDue = document.createElement("p");
    taskItem.style.position = 'relative'
    deleteButton.style.padding = '3px 10px' 
    deleteButton.style.marginLeft = '10px'
    deleteButton.style.marginTop ='-4px'
    deleteButton.textContent = 'X'
    newTask.style.display = 'flex'
    newTask.style.gap = '10px'
    newTask.style.alignItems = 'center'
    dateDue.style.fontSize = '12px'
    dateDue.textContent = date.value
    newTask.textContent = taskInput.value
    if (color.value === 'high') {
      newTask.style.color='red'
    } else if (color.value === 'medium') {
      newTask.style.color='yellow'
    } else {
      newTask.style.color='green'
    }
    taskItem.appendChild(newTask)
    newTask.appendChild(dateDue)
    newTask.appendChild(deleteButton)
    taskInput.value = ''
    deleteButton.addEventListener('click', () => {
      taskItem.removeChild(newTask)
    })
  }) 
  
});
