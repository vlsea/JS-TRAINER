function growDiv(div) {
  const currentWidth = parseInt(getComputedStyle(div).width);
  const currentHeight = parseInt(getComputedStyle(div).height);
  div.style.width = currentWidth + 15 + "px";
  div.style.height = currentHeight + 15 + "px";
}


function dblClickDiv(div) {
  console.log("=== Данные из дива ===");
  console.log("innerHTML:", div.innerHTML);
  console.log("innerText:", div.innerText);
  console.log("Данные объекта:", {
    name: "Иван Иванов",
    age: 28,
    profession: "Разработчик",
    city: "Санкт-Петербург",
  });
  console.log("====================");
}


let currentImage = 1;
function toggleImage(img) {
  currentImage = currentImage === 1 ? 2 : 1;
  const colors =
    currentImage === 1 ? ["ff6b6b", "ffa726"] : ["4ecdc4", "44a08d"];
  img.src = `https://via.placeholder.com/250x180/${colors[0]}/${colors[1] === "ffa726" ? "ffffff" : "ffffff"}?text=Картинка+${currentImage}`;
  img.alt = `Картинка ${currentImage}`;
}


function getCharCode() {
  const input = document.getElementById("char-input");
  const char = input.value.trim();
  if (char.length === 1) {
    const code = char.charCodeAt(0);
    document.getElementById("char-code-result").textContent =
      `Символ: "${char}" → Код: ${code} (0x${code.toString(16).toUpperCase()})`;
    input.value = "";
    return code;
  }
  return null;
}


function checkDigit() {
  const input = document.getElementById("digit-input");
  const value = input.value.trim();
  if (value.length === 1) {
    const isDigit = /^\d$/.test(value);
    document.getElementById("digit-result").textContent =
      `Символ: "${value}" → Цифра: ${isDigit}`;
    input.value = "";
    return !isDigit; 
  }
  return null;
}
