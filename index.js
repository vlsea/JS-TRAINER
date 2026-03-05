let mySet = new Set();

function initSet() {
  const elements = ["e", "r", "i", "k", "t", "h", "e", "b", "e", "s", "t"];
  elements.forEach((el) => mySet.add(el));
  document.getElementById("initial-set").innerHTML =
    "Set: " + Array.from(mySet).join(", ");
  updateCurrentSet();
  console.log("Инициализированный Set:", Array.from(mySet));
}

function updateCurrentSet() {
  document.getElementById("current-set").innerHTML =
    "Текущий Set: " + Array.from(mySet).join(", ");
}

function addToSet() {
  const input = document.getElementById("input-add");
  const value = input.value.trim();
  if (value) {
    mySet.add(value);
    input.value = "";
    updateCurrentSet();
  }
}

function checkElement() {
  const input = document.getElementById("input-check");
  const value = input.value.trim();
  const result = mySet.has(value);
  document.getElementById("check-result").innerHTML = value + ": " + result;
  input.value = "";
}

function filterArray() {
  const arr = [1, 3, 6, 2, 8, 4, 12, 7, 0, 9, 15, 3];
  const filtered = [];
  for (const num of arr) {
    if (num > 5) {
      filtered.push(num);
    }
  }
  document.getElementById("filtered-array").innerHTML =
    "Исходный: [" +
    arr.join(", ") +
    "]<br>" +
    "Новый (>5): [" +
    filtered.join(", ") +
    "]";
}

window.onload = initSet;
