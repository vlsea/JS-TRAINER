

document.getElementById("button_1").onclick = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(array[5])
}


document.getElementById("button_2").onclick = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0)
      console.log(i)
  }
}
document.getElementById("button_3").onclick = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let evenNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) console.log(i);
  }
}

document.getElementById("button_4").onclick = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(array.reverse());
}


