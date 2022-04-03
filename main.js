const keyboard = document.querySelector(".keyboard");
const qube = document.querySelector("#qube");

window.addEventListener("keydown", (e) => {
  if(e.key === "F2") {
    keyboard.classList.add("hide");
    qube.rows = "10";
  } else if(e.key === "F4") {
    keyboard.classList.remove("hide");
    qube.rows = "6";
  }
})