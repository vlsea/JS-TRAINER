// import { dataBaseJson, getHashPassword } from "./index.js";

// const dataBase = JSON.parse(dataBaseJson);

// const newAuthUser = function (login, password) {
//   if (!login || !password) {
//     return console.log(`логин или пароль введен не правильно :`);
//   }
//   const user = dataBase.users.find((item) => item.login === login);

//   if (user.password !== getHashPassword(password)) {
//     console.log(`логин или пароль введен не верно`);
//     return;
//   }
//   const info = dataBase.info.find((item) => item.id === user.id);
//   if (info.systemRole === 2) {
//     console.table(userAuth(info));
//   } else {
//     console.table(adminAuth());
//   }
// };

// const getGender = function (id) {
//   return dataBase.gender.find((item) => item.id === id).gen;
// };

// const getSystemRole = function (id) {
//   return dataBase.systemRole.find((item) => item.id === id).role;
// };

// const getRate = function (id) {
//   if (!id) {
//     return "нет роли";
//   }
//   return dataBase.rate.find((item) => item.id === id).rate;
// };

// const adminAuth = function () {
//   return dataBase.info.map((item) => ({
//     ...item,
//     gender: getGender(item.gender),
//     systemRole: getSystemRole(item.systemRole),
//     rate: getRate(item.rate),
//   }));
// };

// const userAuth = function (user) {
//   return {
//     ...user,
//     gender: getGender(user.gender),
//     rate: getRate(user.rate),
//     systemRole: getSystemRole(user.systemRole),
//   };
// };
// newAuthUser("привет", "123");
// newAuthUser("пока", "234");
