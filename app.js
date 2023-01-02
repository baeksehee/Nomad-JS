function handleWindowResize() {
  if (window.innerWidth <= 400) {
    document.body.style.backgroundColor = "blue";
  } else if (window.innerWidth > 400 && window.innerWidth <= 800) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}
console.log(window.innerWidth);

window.addEventListener("resize", handleWindowResize);
