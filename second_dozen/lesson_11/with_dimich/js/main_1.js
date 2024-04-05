// 2/04/24
// Начинаю 11-й Ур. Димыча (у него в п/л.-е он уже 15-й)

// 3/04/24
// Продолжаю смотреть Ур. Димыча, но, можно сказать - с самого начала
// посмотрел/поделал до 12й минуты

//   4/04/24
//  Продолжаю смотреть Ур. Димыча, c 12-й минуты

// alert('Hello');  // Проверка подключения JS-файла к html

let myConsole = {};
// myConsole.log();   // Пример Д.В.-а

myConsole = {
  name: 'Alex',
  isMarried: true,
};

// window.alert(myConsole.isMarried); // Показать З. Сво-ва Об.-а   по-другому -- мы можем Обратиться к Сво-ву Об.-а

myConsole = {
  name: 'Alex',
  // isMarried: true,
  age: 40,
};
myConsole.age = 41;
// window.alert(myConsole.age); // Показать З. Сво-ва Об.-а

// 3/04/24

// Object - Real Object
let laptop1 = {
  name: 'ZTE',
  manufacturer: 'Zenbook',
  price: 1000,
};
let laptop2 = {
  name: 'MacBook',
  manufacturer: 'APPLE',
  price: 2000,
};

// Object - Process
const fundsTransfer = {
  from: 'Alexander1',
  // to: 'Alexander2',
  to: 'bookstore Ranok',
  transferAmount: 450,
};

// 4/04/24
// I do it myself
let laptop3 = {
  name: 'MacBook',
  manufacturer: {
    name: 'APPLE',
    assortment: 'laptops, smartphones, tablets, wireless headphones',
    isBrandReliable: true,
  },
  price: 2000,
};

// D. V. is doing it
let laptop4 = {
  name: 'MacBook',
  manufacturer: {
    title: 'APPLE',
    factoriesNumbers: 75,
    factoryAddress: 'China, USA, Honkong',
  },
  price: 2000,
};
console.log(laptop4.manufacturer.factoryAddress);
console.log(laptop4.manufacturer.factoryAddress.toUpperCase());
