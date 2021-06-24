//DEFINE UI VARS

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.cear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//LOAD ALL EVENT LISTENERS
loadEventListeners();

//LOAD ALL EVENT LISTENERS
function loadEventListeners() {
  // ADD TASK EVENT
  form.addEventListener('submit', addTask);
}

//ADD TASK
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //CREATE LI ELEMENT
  const li = document.createElement('li');
  //ADD CLASS
  li.className = 'collection-item';
  //CREATE TEXT NODE AND APPEND TO THE LI
  li.appendChild(document.createTextNode(taskInput.value));
  //CREATE NEW LINK ELEMENT
  const link = document.createElement('a');
  //ADD CLASS
  link.className = 'delete-item secondary-content';
  //ADD ICON HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //APPEND THE LINK TO LI
  li.appendChild(link);

  //APPEND THE LI TO UL
  taskList.appendChild(li);

  //CLEAR THE INPUT
  taskInput.value = '';

  e.preventDefault();
}
