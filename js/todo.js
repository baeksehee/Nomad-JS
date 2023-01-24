const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // input을 document가 아닌 toDoForm 안에서 찾는 것이다.
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 value를 새로운 변수에 복사하는 것
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
