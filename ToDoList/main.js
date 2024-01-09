let inputToDo = document.getElementById('inputToDo');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function () {
  var list = document.createElement('li');
  if (!inputToDo.value) {
    alert('할 일을 입력해 주세요');
  } else {
    list.innerText = inputToDo.value;
    toDoList.appendChild(list);
    inputToDo.value = '';
  }

  list.addEventListener('click', function () {
    if (list.style.textDecoration === 'line-through') {
      list.style.textDecoration = '';
    } else {
      list.style.textDecoration = 'line-through';
    }
  });
  list.addEventListener('dblclick', function () {
    toDoList.removeChild(list);
  });
});
