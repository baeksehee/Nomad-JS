const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // input을 document가 아닌 toDoForm 안에서 찾는 것이다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringfy를 array모양으로 저장 가능.
}

function deleteToDo(event) {
  const li = event.target.parentElement; //target은 클릭된 HTML element.
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; //span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //이 변수 newToDo는 input의 value를 비우기 전의 값을 나타내는 것임. string임.
  toDoInput.value = "";
  toDos.push(newTodo); //투두스는 array
  paintToDo(newTodo);
  saveToDos(); //to두스 array를 localStorage에 집어 넣는 것임.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
