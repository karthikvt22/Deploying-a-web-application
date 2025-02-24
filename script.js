const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button class="complete-btn">Complete</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('complete-btn')) {
    event.target.parentElement.parentElement.classList.toggle('completed');
  } else if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.parentElement.remove();
  } else if (event.target.classList.contains('edit-btn')) {
    const taskText = event.target.parentElement.previousElementSibling.textContent;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText) {
      event.target.parentElement.previousElementSibling.textContent = newTaskText;
    }
  }
});
uh ahalifbiu;eabi;blvisdbv;sdvbisd;uvsd;vbliufvbuif;vhvsvnsivbifvuv'sfi'odfv
