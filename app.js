const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "hello " + username;
  greeting.innerText = `Hello ${username}`;//백틱기호임 
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//h1안에 텍스트를 추가하기 전에는 이 hidden class를 삭제할 수 없다.
loginForm.addEventListener("submit", onLoginSubmit);
