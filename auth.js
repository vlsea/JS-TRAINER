import { dataBaseJson, getHashPassword } from "./index.js";

const dataBase = JSON.parse(dataBaseJson);

const newAuthUser = function (login, password) {
  if (!login || !password) {
    return console.log(`логин или пароль введен не правильно :`);
  }
  const user = dataBase.users.find((item) => item.login === login);
  console.log(user);
  if (user.password !== getHashPassword(password)) {
    console.log(`логин или пароль введен не верно`);
    return;
  }
};

const getGender = function (id) {
  return dataBase.gender.find((item) => item.id === id).gen;
};

const getSystemRole = function (id) {
  return dataBase.systemRole.find((item) => item.id === id).role;
};

newAuthUser("привет", "123");
