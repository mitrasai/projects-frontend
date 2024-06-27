
function addToDo(){
  let todo_input = document.getElementById('toDoInput');
  let todo_date = document.getElementById('toDoDate');
  let todo_list = document.getElementById('todoList');

  let input = todo_input.value;
  let date = todo_date.value;

  if(input === ''){
    alert(`please enter an input`);
    console.warn('Invalid input');
    return;
  }
  const list_item = toDoItem(input, date);
  todo_list.appendChild(list_item);
  todo_input.value = '';
  todo_date.value = '';
}

function toDoItem(input, date) {
  // creating an new list item
  const item = document.createElement("li");
  // displaying input with date
  item.innerText = `${input}, ${date}`;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";

  // Adding a class to it
  deleteBtn.classList.add("delete-todo-btn");
  
  // functionality
  deleteBtn.addEventListener("click", function() {
    item.remove();
  });

  item.appendChild(deleteBtn);
  return item;
}