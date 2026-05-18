// let fruits = [`яблоко`, `апельсин`, `банан`];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// const cat = {
//   name: `Мурзик`,
//   speak: function () {
//     return `мяу`;
//   },
// };
// console.log(cat.speak());

// const CurrentAmount = {
//   amount: 2000,
//   addMoney: function () {
//     return amount + addMoney;
//   },
// };

// CurrentAmount.addMoney(500);
// console.log(CurrentAmount);

// const a = {
//   amount: 2000,
//   additionalAmount: 500,
//   withDrawMoney: 5000,
// };

// console.log(a.amount + a.additionalAmount);
// console.log(a.amount - a.withDrawMoney);

// const wallet = {
//   amount: 51000,
//   addMoney: 100,
//   withDrawMoney: 5000,
//   summ: function () {
//     console.log(wallet.amount + wallet.addMoney);
//   },
//   withDraw: function () {
//     if (wallet.withDrawMoney - wallet.amount >= 0) {
//       console.log("недостаточно бабла");
//     } else {
//       console.log(wallet.amount - wallet.withDrawMoney);
//     }
//   },
//   currentAmountStatus: function () {
//     console.log(`баланс равен ${wallet.amount}`);
//   },
// };
// wallet.summ();
// wallet.withDraw();
// wallet.currentAmountStatus();

// const wallet = {
//   amount: 5000,
//   method =function () {
//     wallet.amount + wallet.summ;
//   },
// };

// console.log (wallet.summ());

// let obj = { prop: 42 };
// obj.method = function () {
//   return this.prop * 2;
// };
// console.log(obj.method()); // 84

// let wallet = {
//   amount: 5000,
//   moreMoney: function () {},
//   lessMoney: function () {
//     if (wallet.amount <= 0) {
//       console.log("недостаточно бабла");
//     }
//   },
// };
// wallet.moreMoney = 1500;
// wallet.lessMoney = 8000;
// console.log(wallet.amount + wallet.moreMoney);
// console.log(wallet.amount - wallet.lessMoney);

// let wallet = {
//   amount: 5000,
//   addMoney(amount2) {
//     this.amount += amount2;
//   },
//   withdrawMoney(amount2) {
//     if (this.amount - amount2 < 0) {
//       console.log(`нельзя`);
//       return;
//     }
//     this.amount -= amount2;
//   },
//   balance(){console.log(this.amount)}
// };
// console.log(wallet.addMoney(500));
// console.log(wallet.withdrawMoney(3000));
// wallet.balance ()

// let wallet = {
//   amount: 5000,

//   moreMoney: function () {wallet.amount + wallet.moreMoney},
//   lessMoney: function () {
//     if (wallet.amount <= 0) {
//       console.log("недостаточно бабла");
//       console.log(wallet.amount - wallet.lessMoney);

//     }
//   },
// };
// wallet.moreMoney = 1500;
// wallet.lessMoney = 8000;
// console.log(wallet.moreMoney);

// let array = [1, 2, 3]
// console.log(array)
// array.push(4, 5, 6, 7) //добавляет вконец
// console.log(array)
// array.pop() //удаляет последний
// console.log(array)
// array.shift() //удаляет вначале
// console.log(array)
// array.unshift(1) //добавляет вначло
// console.log(array)
// array.splice(2,3,) //удаляет все после обозначенного индекса , после запятой удаляет указанное кол-во индексов и добавляет указанные элементы
// console.log(array)

// let wallet = {
//   amount: 5000,
//   addMoney(misery) {
//     this.amount += misery;
//   },
//   withDrawMoney(misery) {
//     if (this.amount - misery < 0) {
//       console.log(`нельзя`);
//       return;
//     }
//     this.amount -= misery;
//   },
//   balance() {console.log(this.amount)
//   },
// };
// console.log(wallet.addMoney(5000));
// console.log(wallet.withDrawMoney(150000));
// wallet.balance();

// let wallet = {
//   amount: 5000,
//   addMoney(amount2) {
//       this.amount += amount2;
//       return this.amount;
//   },
//   withDrawMoney(amount2) {
//     if (this.amount - amount2 < 0) {
//       console.log(`нельзя`);
//         return false;
//     }
//       this.amount -= amount2;
//       return this.amount;
//   },
//   balance() {
//     console.log(this.amount);
//   },
// };
// console.log(wallet.addMoney(500));
// console.log(wallet.withDrawMoney(3000));
// wallet.balance();

// let bankAccount = {
//     amount: 10000,
//   depositAmount(amount) {
//     this.amount += amount;
//     console.log(`пополнено на ${amount} , баланс:${this.amount} `);
//     return this.amount;
//   },
//   withDrawMoney(amount) {
//     if (this.amount - amount < 0) {
//       console.log(`недостаточно средств `);
//       return false;
//     }
//     this.amount -= amount;
//     return this.amount;
//   },
//   balance() {
//     console.log(`текущий баланс :${this.amount}`);
//     return this.amount;
//   },
// };
// console.log(bankAccount.depositAmount(2000));
// console.log(bankAccount.withDrawMoney(5000));
// console.log(bankAccount.withDrawMoney(8000));
// console.log(bankAccount.balance());

// let library = {
//   books: ["1984", "Мастер и Маргарита", "Властелин колец"],
// };
// console.log(library)

// let user = {
//   prefs: ["dark mode", "notifications on"],
// };
// console.log(user);

// Создай объект «библиотеку», который будет хранить массив с названиями книг. Методы которые он должен реализовывать:
// Добавление книги
// Очистку всех книг
// Удаление последней книги
// Удаление первой книги
// Вывод всех книг

// let library = {
//   books: [],
//   push() {
//     library.books.push("донкихот - залупка ");
//   },
// };
// console.log(library.push());
// console.log(library);

// let library = {
//   books: [`Ну погоди! Издание:1983г.`],
//   addBook(item) {
//     library.books.push(item);
//     return this.books;
//   },
//   clearAllBooks() {
//     library.books.splice(0);
//     return this.books
//   },
//   deleteLastBook() {
//     library.books.pop();
//     return this.books;
//   },

// };
// console.log(library.addBook("Дядя Федор пёс и кот. Издание: 1984г."));
// console.log(library.clearAllBooks());
// console.log(library.deleteLastBook());

// const summ = a =>  a + a ;

// console.log(summ(4));

// let array = [1, 2, 3, 4, 5];
// console.log(array.reduce((summ , item) => summ + item,5));
// console.log(array);

// const words = ['кот', 'собака', 'слон', 'бегемот', 'жираф', 'тигр']; //оставить только
// строки длина которых больше 5

// // const nums = [1, 2, 3, 4, 5];
// // const doubled = nums.map((n) => n * 2);
// // console.log(doubled);

// // const summ = (a, b) => {
// //   return a + b;
// // };
// // console.log(summ(4, 5));

// const summ = (a,b) => a + b;
// console.log (summ (4,3))

// const words = ["кот", "собака", "слон", "бегемот", "жираф", "тигр"];
// const length5 = words.filter(x)=> {
//     if (words<)
// }

// const nums = [1, 2, 3, 4];

// const evens = nums.filter((n) => {
//   if (n % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// const words = ["кот", "собака", "слон", "бегемот", "жираф", "тигр"];
// const lettersFive = words.filter((n) => {
//     if (n)
// }
// )

// const hello = (addBook) => {
//   console.log("hello" + addBook);
// };
// console.log(typeof hello);
// hello();

// const pow = (a, b) => ({
//   pow: a ** b,
//   printPow() {
//     console.log(this.pow);
//   },
// });
// console.log(pow(5, 5));
// const pow2 = pow(6, 6);
// pow2.printPow();

// const words = ["кот", "собака", "слон", "бегемот", "жираф", "тигр"];
// console.log(words.filter((itemss) => {
//     if (itemss.length > 5)
//     {return true}

// }));

// console.log(words.filter(() => {}));

// ***ДОМАШНЕЕ ЗАДАНИЕ***
// (1)

// // оставить только строки длина которых больше 5
// const words = ["кот", "собака", "слон", "бегемот", "жираф", "тигр"];
// console.log(words.filter((items) => items.length > 5));

// (2)

// // оставить только те, которые больше 1000 и применить к ним скидку 20%
// const prices = [800, 1200, 1500, 900, 2000, 600];
// console.log(prices.filter((item) => item > 1000).map((item)=>item *0.80));

//2e решение для 2й задачи:

// const prices = [800, 1200, 1500, 900, 2000, 600];
// prices.filter((discount) => {
//   if (discount < 1000) return;
//   console.log(discount * 0.8);
// });

// (3)

// // //оставить только строки длина которых больше 5 и преобразовать в верхний регистр
// const words = ["кот", "собака", "слон", "бегемот", "жираф", "тигр"];
// console.log(words.filter((item) => item.length > 5).map((item)=>item.toUpperCase()));

// function number(item) {
//   return Math.trunc(item) === item;
// }

// console.log(number(3));

// function randomNumbers(number1, number2) {
//   return Math.floor(Math.random() * (number2 - number1) + number1);
// }
// console.log(randomNumbers(5, 15));

// дано число - 35142. Нужно его отсортировать, чтобы получилось число 12345

// const number = 35142;
// console.log(+number.toString().split("").sort().join(""));

// let number = [-35412];
// number.pop();
// number.push(3, 5, 4, 1, 2);
// console.log(number.sort())

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.info = function () {
//     console.log(`${this.name} ${this.age}`);
//   };
// }
// const user1 = new User("вася", 15);
// user1.info();
// console.log(user1);

// const user2 = new User("петя", 15);
// user2.info();
// console.log(user2);

// console.log(user1 instanceof User);

// const array = new Array()
// console.log(array);

// function Student(name) {
//   this.name = name;
//   this.grade = [];
//   this.addGrade = function (value) {this.grade.push ()};
// }

// const student1 = new Student("Егор");
// const student2 = new Student("Иван");
// const student3 = new Student("Степан");

// console.log(student1);

// const number = 35142;
// console.log(+number.toString().split("").sort().join(""));

// const a = 728391;
// console.log(+a.toString().split("").sort().join(""));

// const b = 847291;
// console.log(+b.toString().split("").sort().reverse ().join(""));

// const a = 35412;
// console.log(+a.toString().split("").sort().join(""));

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.info = function () {
//     console.log(`${this.name} ${this.age}`);
//   };
// }
// const user1 = new User("вася", 15);
// user1.info();
// console.log(user1);

// const user2 = new User("петя", 15);
// user2.info();
// console.log(user2);

// function Tire(brand, model, size, price) {
//   this.brand = brand;
//   this.model = model;
//   this.size = size;
//   this.price = price;
//   this.getInfo = function () {
//     return `${this.brand} ${this.model}, ${this.size},${this.price} рублей`;
//   };
// }

// const tire1 = new Tire("Bridgestone", "Turanza", "215//65/R16", 4500);
// const tire2 = new Tire("Bridgestone", "Turanza", "225//45/R17", 6500);
// console.log(tire1.getInfo());
// console.log(tire2.getInfo());

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// this.getInfo =function () {
//       return `${this.title} , ${this.author},${this.year}`;
//   };
// }

// const Book1 = new Book ("Пиступление и наказуха", "Джек Воробей", 2005)
// const Book2 = new Book("Молочные пастушки", "Ромка Трахтенберг", 2001);

// console.log(Book1.getInfo());
// console.log(Book2.getInfo());

// function User(login, password) {
//   this.login = login;
//   this.password = password;

//   this.changePassword = function (oldPass, newPass) {
//     if (this.password === oldPass) {
//       this.password = newPass;
//     }
//   };
// }
// const user1 = new User("Головастик", 123);
// const user2 = new User("Многохвостик", 124);

// console.log(user1);
// user1.changePassword(124, 125);
// console.log(user1);

// function NewUser() {
//   this.users = [];
//   this.addusers = function (login, password) {
//     // this.users.push({ login, password });
//     const user = { login, password };
//     console.log(user);
//   };
// }

// const user1 = new NewUser();
// const user2 = new NewUser();
// console.log(user1);
// user1.addusers("мурзик", 2345);

// function Movie(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getInfo = function () {
//     return `${this.title}, ${this.author},${this.year}`;
//   };
//   this.isOld = function () {
//     if (2026 - this.year > 20)
//       return `${this.title}, ${this.author},${this.year}`;
//   };
// }
// const Movie1 = new Movie("мышка дурак", "Залупин А.А", 2020);
// const Movie2 = new Movie("мышка умняк", "Твердослив Ж.Б", 1985);

// console.log(Movie1.getInfo());
// console.log(Movie2.isOld());

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// this.getInfo =function () {
//       return `${this.title} , ${this.author},${this.year}`;
//   };
// }

// const Book1 = new Book ("Пиступление и наказуха", "Джек Воробей", 2005)
// const Book2 = new Book("Молочные пастушки", "Ромка Трахтенберг", 2001);

// console.log(Book1.getInfo());
// console.log(Book2.getInfo());

// function Car(model, maker, year) {
//   this.model = model;
//   this.maker = maker;
//   this.year = year;
//   this.getInfo = function () {
//     return `${this.model},${this.maker},${this.year}`;
//   };
//   this.isClassic = function () {
//     if (2026 - this.year > 30)
//       return `${this.model},${this.maker},${this.year}`;
//   };
// }

// const Car1 = new Car("бьвикъ", "табота", 2005);
// const Car2 = new Car("мразатти", "мишель", 2000);

// console.log(Car1.getInfo());
// console.log(Car2.isClassic());

// function User(username, email, password, yearRegistred) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
//   this.yearRegistred = yearRegistred;
//   this.getInfo = function () {
//     return `Пользователь :${this.username},Почта: ${this.email}, Год регистрации: ${this.yearRegistred}`;
//   };
//   this.isOldUser = function () {
//     if (2026 - this.yearRegistred > 5)
//       return ` старый пользователь : ${this.username}`;
//     else {
//       return `новый пользователь : ${this.username}`;
//     }
//   };
//   this.checkPassword = function (inputPassword) {
//     if (this.password === inputPassword) {
//       return `пароль верный ${this.username}`;
//     } else {
//       return `пароль неверный ${this.username}`;
//     }
//   };
// }

// const User1 = new User("МитрополитВодкин", "merVdi@mail.ru", "qwerty1", 2015);
// const User2 = new User("МагдаленаКривая", "magda@mail.ru", "qwerty2", 2021);
// const User3 = new User("ЛилияГнусная", "lilibot@mail.ru", "qwerty3", 2016);
// const User4 = new User("МатильдПушистая", "matilda@mail.ru", "qwerty2", 2000);

// console.log(User1.getInfo());
// console.log(User1.isOldUser());
// console.log(User1.checkPassword("qwerty1"));
// console.log(User2.getInfo());
// console.log(User2.isOldUser());
// console.log(User2.checkPassword("qwerty1"));
// console.log(User3.getInfo());
// console.log(User3.checkPassword("qwerty1"));
// console.log(User3.isOldUser());
// console.log(User4.getInfo());
// console.log(User4.isOldUser());
// console.log(User4.checkPassword("qwerty1"));

// function User(username, email, password, yearRegistred) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
//   this.yearRegistred = yearRegistred;
//   this.getInfo = function () {};
//   this.isOlderUser = function () {};
//   this.checkPassword = function (inputPassword) { };

// }

// class user {
//   constructor(username, email, password, yearRegistred) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.yearRegistred = yearRegistred;
//   }
//   getInfo() {
//     return `пользователь : ${this.username}, ${this.email},${this.yearRegistred}`;
//   }
// }

// ------------------------------------------------------------------------------

const usersDataBase = {
  gender: [
    { gen: "Мужской", id: 1 },
    { gen: "Женский", id: 2 },
  ],
  systemRole: [
    { role: "администратор", id: 1 },
    { role: "пользователь", id: 2 },
  ],
  rate: [
    { rate: "Обычный", id: 1 },
    { rate: "Премиум", id: 2 },
    { rate: "VIP", id: 3 },
  ],
  users: [],
  info: [],
};
export const getHashPassword = function (password) {
  let hash = "";
  for (let i = 0; i < password.length; i++) {
    hash += password[i].charCodeAt().toString(16);
  }
  return hash;
};

usersDataBase.getRandomId = function () {
  return Math.trunc(Math.random() * 9000 + 1000);
};
usersDataBase.getRandomId();

usersDataBase.uniqueLogin = function (newLogin) {
  return this.users.some((user) => {
    return user.login === newLogin;
  });
};

usersDataBase.newRegUser = function (
  login,
  password,
  gender,
  rate,
  name,
  surname,
) {
  if (!login || !password || !gender || !rate || !name || !surname) {
    console.log(`регистрация не прошла :`);
    return;
  }
  if (this.uniqueLogin(login)) {
    console.log(`логин не уникальный : `);
    return;
  }
  const hashPassword = getHashPassword(password);
  const id = this.getRandomId();
  const user = new Data(login, id, hashPassword);
  this.users.push(user);
  const info = new Info(name, surname, gender, id, 2, rate);
  this.info.push(info);

  console.log(this.users);
  console.log(this.info);
};

usersDataBase.newRegAdmin = function (login, password, gender, name, surname) {
  if (!login || !password || !gender || !name || !surname) {
    console.log(`регистрация не прошла :`);
    return;
  }
  if (this.uniqueLogin(login)) {
    console.log(`логин не уникальный : `);
    return;
  }
  const hashPassword = getHashPassword(password);
  const id = this.getRandomId();
  const admin = new Data(login, id, hashPassword);
  this.users.push(admin);
  const info = new Info(name, surname, gender, id, 1);
  this.info.push(info);

  console.log(this.users);
  console.log(this.info);
};

function Data(login, id, password) {
  this.login = login;
  this.id = id;
  this.password = password;
}
function Info(name, surname, gender, id, systemRole, rate) {
  this.name = name;
  this.surname = surname;
  this.gender = gender;
  this.id = id;
  this.systemRole = systemRole;
  if (rate) {
    this.rate = rate;
  }
}

usersDataBase.newRegUser("привет", "123", 1, 3, "Шахзод-убийца", "Прекрасный");

usersDataBase.newRegUser("привет", "123", 1, 3, "Шахзод-убийца", "Прекрасный");

usersDataBase.newRegAdmin("пока", "234", 1, "Биджон", "Красивый");

export const dataBaseJson = JSON.stringify(usersDataBase, null, 1);

// ---------------------------------------------------------------------------------

// const usersDataBase = {
//   gender: [
//     { gen: "Мужской", id: 1 },
//     { gen: "Женский", id: 2 },
//   ],
//   systemRole: [
//     { role: "администратор", id: 1 },
//     { role: "пользователь", id: 2 },
//   ],
//   rate: [
//     { rate: "Обычный", id: 1 },
//     { rate: "Премиум", id: 2 },
//     { rate: "VIP", id: 3 },
//   ],
//   users: [],
//   info: [],
// };

// class User {
//   constructor(login, id, password) {
//     this.login = login;
//     this.id = id;
//     this.password = password;
//   }
// }
// class Info {
//   constructor(name, surname, gender, rate, id, systemRole) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.id = id;
//     this.systemRole = systemRole;
//   }
// }
// usersDataBase.hashPassword = function (password) {
//   let hash = "";
//   for (let i = 0; i < password.length; i++) {
//     hash += password[i].charCodeAt().toString(16);
//   }
//   return hash;
// };

// usersDataBase.hashPassword("привет");

// usersDataBase.getRandomId = function () {
//   return Math.trunc(Math.random() * (9999 - 1000 + 1) + 1000);
// };
// console.log(usersDataBase.getRandomId());

// usersDataBase.uniqueLogin = function (newLogin) {
//   return this.users.some((user) => {
//     return user.login === newLogin;
//   });
//   // usersDataBase.uniqueLogin = function (newLogin) {
//   //   return this.users.some((user) => {
//   //     return user.login === newLogin;
//   //   });
// };

// const array = [5, 2, 9, 1, 6];
// const minNumbers = function () {
//   return array.find((num) => num < 2);
// };
// console.log(minNumbers());

// const array = [1, 2, 2, 3, 4, 4, 5];
// const duplicates = array.filter(
//   (item, index, arr) => arr.indexOf(item) !== index,
// );
// console.log(duplicates());

// const array = [1, 2, 2, 3, 4, 4, 5];
// const getEvennumbers = function () {
//   return array.filter((numbers) => numbers % 2 === 0);
// };
// console.log(getEvennumbers());

// const array = [1, 2, 2, 3, 4, 4, 5];
// const getGreaterTwo = function () {
//   return array.filter((item) => item > 2);
// };
// console.log(getGreaterTwo());

// const array = [1, 2, 2, 3, 4, 4, 5];
// const getEvenGreaterThanThree = function () {
//   return array.filter((item) => item % 2 === 0 && item > 3);
// };
// console.log(getEvenGreaterThanThree());

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = function () {
//   return numbers.map((item) => item * 2);
// };
// console.log(doubleNumbers());

// const words = ["cat", "dog", "bird", "fish"];
// const addExclamation = function () {
//   return words.map((exclamation) => exclamation + `!`);
// };
// console.log(addExclamation());

// const nums = [1, 2, 3, 4, 5];
// const product = function () {
//   return nums.reduce((acc, item) => acc * item,1);
// };
// console.log(product());

// const items = [
//   { type: "A", value: 2 },
//   { type: "B", value: 5 },
//   { type: "A", value: 3 },
// ];
// const summ = function () {
//   return items.reduce((acc, item) => {
//     // if (!acc[item.type]) {
//     //   acc[item.type] = 0;
//     // }
//     acc[item.type]+=item.value
//     return acc;
//   }, {});
// };

// console.log(summ());

// const array = [5, 2, 9, 1, 6];
// const minNumbers = function () {
//   let item = Infinity;
//   array.forEach((num) => {
//     if (item > num) {
//       item = num;
//     }
//   });
//   return item;
// };
// console.log(minNumbers());

// const duplicates = arr.filter(
//   (item, index, arr) => arr.indexOf(item) !== index,
// );
// console.log(duplicates);

// const arr = [1, 2, 2, 3, 1, 4, 5, 5];
// const uniqueNumber = function () {
//   const numbers = [];
//   arr.forEach((num) => {
//     if (!numbers.includes(num)) {
//     numbers.push(num)}
//   });
//   return numbers;
// };
// console.log(uniqueNumber());

// const nums = [1, 2, 3, 4, 5];
// const product = function () {
//   return nums.reduce((acc, num) => acc * num, 2);
// };
// console.log(product());

// const items = [
//   { type: "А", value: 2 },
//   { type: "B", value: 5 },
//   { type: "А", value: 3 },
// ];
// const firstByType = function () {
//   return items.reduce((acc, item) => {
//     const { type, value } = item;
//     if (!acc[type]) {
//       acc[type] = 0;
//     }
//     acc[type] += value;
//     return acc;
//   }, {});
// };
// console.log(firstByType());

// const revertUniqueNumbers = function (array1, array2) {
//   const array = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i]));
//     result.push(array1[i]);
//   }
// };
// return array;
// revertUniqueNumbers([1, 2, 3, 4], [3, 4, 5, 6]);

// console.log(revertUniqueNumbers());

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const sumOdd = function () {
//   return numbers.reduce((acc, item) => {
//     if (item % 2 === 1) {
//       return acc + item;
//     }
//     return acc;
//   }, 0);
// };
// console.log(sumOdd());

// const users = [
//   { name: "Alice", age: 25, isActive: true },
//   { name: "Bob", age: 17, isActive: false },
//   { name: "Carol", age: 32, isActive: true },
//   { name: "Dave", age: 20, isActive: false },
// ];

// const getActiveUsers = function (users) {
//   return users.filter((item) => item.isActive);
// };

// const getAdultUsersNames = function (users) {
//   return users.filter((item) => item.age >= 18).map((item) => item.name);
// };

// const getActiveAdultUserNames = function (users) {
//   return users
//     .filter((item) => item.isActive === true)
//     .map((item) => item.name);
// };

// const findUserByName = function (users, name) {
//   return users.find((item) => item.name === name);
// };

// console.log(getActiveUsers(users));
// console.log(getAdultUsersNames(users));
// console.log(getActiveAdultUserNames(users));
// console.log(findUserByName(users, "Carol"));

// const revertUniqueNumbers = function (array1, array2) {
//   const array = [];
//   array1.forEach((item) => {
//     if (array2.includes(item)) {
//       array.push(item);
//     }
//   });
//   return array
// };

// console.log(revertUniqueNumbers([1, 2, 3, 4], [3, 4, 5, 6]));

// const getNumbersNotInSecond = function (array1, array2) {
//   const array = [];
//   array1.forEach((item) => {
//     if (!array2.includes(item)) {
//       array.push(item);
//     }
//   });
//   return array;
// };
// console.log(getNumbersNotInSecond([1, 2, 3, 4], [3, 4, 5, 6]));

// const getCommonStrings = function (array1, array2) {
//   const array = [];
//   array1.forEach((item) => {
//     if (array2.includes(item)) {
//       array.push(item);
//     }
//   });
//   return array;
// };
// console.log(
//   getCommonStrings(["apple", "banana", "orange"], ["orange", "kiwi", "apple"]),
// );

// const getUniquieFromBoth = function (array1, array2) {
//   const result = [];
//   array2.forEach((item) => {
//     if (!array1.includes(item)) {
//       result.push(item);
//     }
//   });
//   array1.forEach((item) => {
//     if (!array2.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// };
// console.log(getUniquieFromBoth([1, 2, 3, 4], [3, 4, 5, 6]));

// const getCommonNumbers = function (array1, array2) {
//   const array = [];
//   array1.filter((item) => {
//     if (array2.includes(item)) {
//       array.push(item);
//     }
//   });
//   return array;
// };
// console.log(getCommonNumbers([1, 2, 3, 4], [3, 4, 5, 6]));

// const getCommonNumbers = function (array1, array2) {
//   return array1.filter((item) => array2.includes(item));
// };

// console.log(getCommonNumbers([1, 2, 3, 4], [3, 4, 5, 6]));

// const getOddNumbers = function (array) {
//   return array.filter((item) => item % 2 === 1);
// };
// console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));

// const getDoubledCommonNumbers = function (array1, array2) {
//   return array1.filter((item) => array2.incudes(item));

// };
// console.log(getDoubledCommonNumbers([1, 2, 3, 4], [3, 4, 5, 6]));
