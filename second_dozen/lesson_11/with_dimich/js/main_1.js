// 4/02/24
// Начинаю 11-й Ур. Димыча (у него в п/л.-е он уже 15-й)

// 5/02/24
// Продолжаю смотреть Ур. Димыча, но, можно сказать - с самого начала

// alert('Hello');  // Проверка подключения JS-файла к html

let myConsole = {};
// myConsole.log();   // Пример Д.В.-а

myConsole = {
  name: 'Alex',
  isMarried: true,
};

window.alert(myConsole.isMarried); // Показать З. Сво-ва Об.-а

myConsole = {
  name: 'Alex',
  // isMarried: true,
  age: 40,
};
myConsole.age = 41;
window.alert(myConsole.age); // Показать З. Сво-ва Об.-а
