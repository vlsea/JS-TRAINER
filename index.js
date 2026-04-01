
localStorage.setItem("data", 5);
console.log(localStorage.getItem("data")); // → "5"


let a = [1, 2, 3];
localStorage.setItem("data", JSON.stringify(a));

let b = localStorage.getItem("data");
b = JSON.parse(b);

console.log(b); 
console.log(b[2]); 
console.log(typeof b);


localStorage.removeItem("data"); 

