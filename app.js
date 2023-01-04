const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {// JS에서는 공짜로 첫번째 argument로 발생된 event에 대한 정보를 준다.
  event.preventDefault(); //preventDefault라는 function을 호출한 것이다.
                           //이 function이 하는 일은 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것이다.
                           //form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어 있다.
                           //이 function을 추가함으로써 그 기본 동작을 막고 있는 것이다.
  console.log(event);
}
//모든 EventListner function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 될 것이다.
loginForm.addEventListener("submit", onLoginSubmit);
//submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다는 사실을 기억하도록 해.
