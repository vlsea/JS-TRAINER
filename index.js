let a = "время покушац";
function showValue() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = a;
}
document.getElementById("btn").addEventListener("click", showValue);

function getNumbers() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  return { a, b };
}

function add() {
  const { a, b } = getNumbers();
  document.getElementById("result").textContent = a + b;
}

function sub() {
  const { a, b } = getNumbers();
  document.getElementById("result").textContent = a - b;
}

function mul() {
  const { a, b } = getNumbers();
  document.getElementById("result").textContent = a * b;
}

function div() {
  const { a, b } = getNumbers();
  if (b === 0) {
    document.getElementById("result").textContent = "Ошибка: деление на 0";
  } else {
    document.getElementById("result").textContent = a / b;
  }
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mul").addEventListener("click", mul);
document.getElementById("div").addEventListener("click", div);
