function changeSize() {
  const element = document.querySelector(".element");
  element.style.width = "300px";
  element.style.height = "200px";
  element.style.backgroundColor = "#4CAF50";
  element.style.padding = "20px";
  element.style.borderRadius = "10px";
}

document.getElementById("btn1").addEventListener("click", changeSize);

function addClasses() {
  const element = document.getElementById("myElement");
  element.classList.add("big", "red", "rounded");
}

document.getElementById("btn2").addEventListener("click", addClasses);

function removeClasses() {
  const element = document.getElementById("myElement");
  element.classList.remove("big", "red", "rounded");
}

document.getElementById("btn3").addEventListener("click", removeClasses);
