const title = document.querySelector(".title");

const colors = ["mediumaquamarine", "skyblue", "purple", "orange"];

function superEventHandler() {
  function handleMouseEnter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  }

  function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
    title.style.color = colors[1];
  }

  function handleWindowResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  }

  function handleRightClick() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }

  title.addEventListener("mouseenter", handleMouseEnter);
  title.addEventListener("mouseleave", handleMouseLeave);

  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("contextmenu", handleRightClick);

}

superEventHandler();
