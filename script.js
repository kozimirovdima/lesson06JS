"use strict";
const askUser = function () {
  let mathRandom = Math.ceil(Math.random() * 100) + 1;
  alert(mathRandom);
  const game = function () {
    let userInput = prompt("Угадайте число от 1 до 100");
    if (userInput === null) {
      alert("Игра окончена");
      return;
    }
    if (isNaN(userInput)) {
      alert("Введи число!");
      game();
      return;
    }
    if (userInput > mathRandom) {
      alert("Загаданное число меньше");
      game();
    } else if (userInput < mathRandom) {
      alert("Загаданное число больше");
      game();
    } else {
      alert("Поздравляю, Вы угадали!!!");
    }
  };
  game();
};
askUser();
