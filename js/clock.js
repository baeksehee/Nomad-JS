const clock = document.querySelector("h2#clock"); //("clock")만 해도 괜찮다.

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
