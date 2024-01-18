const todoList = document.getElementById('todoList');
const input = document.getElementById('inputTodo');

function inputVisibility() {
  var myDiv = document.getElementById('inputBox');
  myDiv.style.display = 'block';
}

function inputUnVisibility() {
  var myDiv = document.getElementById('inputBox');
  myDiv.style.display = 'none';
}

function addToDo() {
  const newElement = document.createElement('div');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const text = document.createElement('span');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'remove';

  text.textContent = input.value;
  input.value = '';

  newElement.appendChild(checkbox);
  newElement.appendChild(text);
  newElement.appendChild(deleteButton);
  todoList.appendChild(newElement);

  checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      text.style.textDecoration = 'line-through';
    } else {
      text.style.textDecoration = 'none';
    }
  });

  deleteButton.addEventListener('click', (event) => {
    todoList.removeChild(newElement);
  });
}

input.addEventListener('keypress', (event) => {
  const ENTER = 13;
  if (event.keyCode === ENTER) {
    addToDo();
  }
});
