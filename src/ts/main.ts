const input: HTMLInputElement = document.getElementById(
  "input"
) as HTMLInputElement;
const todolist: HTMLUListElement = document.getElementById(
  "todolist"
) as HTMLUListElement;
const addBtn: HTMLButtonElement = document.getElementById(
  "addBtn"
) as HTMLButtonElement;
addBtn.addEventListener("click", addTodo);
const removeBtn: HTMLButtonElement = document.getElementById(
  ".removeBtn"
) as HTMLButtonElement;

//en tom lista
const todos: [] = [];

//läser av alla todos i listan och skickar på print med
todos.map((todo) => {
  printTodo(todo);
});

function printTodo(todo) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todoStyle");
  taskDiv.setAttribute("id", todo.id);
  const task = document.createElement("li");
  task.innerHTML = todo.text;
  taskDiv.appendChild(task);
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "done";
  doneBtn.onclick = completeTodo;
  taskDiv.appendChild(doneBtn);
  const removeBtn = document.createElement("button");
  removeBtn.onclick = removeTodo;
  removeBtn.innerHTML = "remove";
  taskDiv.appendChild(removeBtn);
  todolist.appendChild(taskDiv);
}

function addTodo() {
  const newTodo = { id: Date(), text: input.value, done: false };
  todos.push(newTodo);
  input.value = "";
  printTodo(newTodo);
}

function removeTodo(e) {
  e.preventDefault();
  let todoIndex = todos.findIndex((thisTodo) => {
    return thisTodo.id === e.target.parentNode.id;
  });
  todos.splice(todoIndex, 1);
  const todoHtml = document.getElementById(`${e.target.parentNode.id}`);
  todoHtml.remove();
  console.log(todos);
}

function completeTodo(e) {
  e.preventDefault();
  e.target.parentNode.setAttribute("class", "done");
  const todoId = e.target.parentNode.id;
  const completeTodo = todos.find((todo) => todo.id === todoId);
  completeTodo ? (completeTodo.done = true) : console.log("error");
  console.log(todos);
}
