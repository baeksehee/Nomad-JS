const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // input을 document가 아닌 toDoForm 안에서 찾는 것이다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //application이 시작될 때 toDos array는 항상 비어있음

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringfy를 array모양으로 저장 가능.
}

function deleteToDo(event) {
  const li = event.target.parentElement; //target은 클릭된 HTML element.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id는 string타입이고. toDo.id는 number 타입임. 그래서 parseInt를 활용
  saveToDos() //`toDos` DB에서 todo를 지운 뒤에 saveToDos를 한 번 더 불러야 함
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
// newToDo를 작성하고 form을 submit할 때마다
// newTodo를 toDos array(빈 array)에 그냥 push 하게 됨
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //이 변수 newToDo는 input의 value를 비우기 전의 값을 나타내는 것임. string임.
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //투두스는 array
  paintToDo(newTodoObj);
  saveToDos(); //to두스 array를 localStorage에 집어 넣는 것임.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 투두스에 parsedToDos를 넣어서 전에 있던 toDo들을 복원 -> 투두스 array가 새로고침할 때마디 빈 값이 되지 않도록 됨
  parsedToDos.forEach(paintToDo); //forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행
}

function sexyFilter() {}

[1, 2, 3, 4].filter(sexyFilter);
