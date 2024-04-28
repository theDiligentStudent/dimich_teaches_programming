// 26/04/24
// Начинаю смотреть/делать 13й Ур. (Циклы)
// --- у Димыча в п/л.-е он, почему-то уже 19й
// Досмотрел - до - 10й минуты

// 27/04/24
// досмотрел до 20й минуты

// 28/04/24

//////

// alert('Hello, everyone!');

const myArray = [1, 2, 3];

function showArray() {
  for (let i = 0; i < myArray.length; i++) {
    const show = myArray[i];
    window.alert(show);
  }
}

// showArray();

function aLetterPrint() {
  for (let i = 0; i < 3; i++) {
    document.write('a ');
  }
}

// aLetterPrint();

let index = 0;

function printLetter() {
  repeatCount = 7;
  // index = 8;
  index = 7;
  // if (repeatCount !== 0) {
  // if (index > 0 && index < 7) {
  // if (index < 7) {
  // if (index < repeatCount) {
  if (index <= repeatCount) {
    document.write('b');
  }
}

// printLetter();

// 27/04/24

function printLetter1() {
  repeatCount = 0;
  // index = 8;
  index = 0;
  // if (repeatCount !== 0) {
  // if (index > 0 && index < 7) {
  // if (index < 7) {
  // if (index < repeatCount) {
  if (index > repeatCount) {
    document.write('b');
  }
}

// printLetter1();

// function printLetter2() {
// 29/04/24
// // пишем (первый) цикл
let repeatCount = 5; //10 or 100 or 1000

for (let index = 2; index <= repeatCount; index = index + 1) {
  // выполняем Целевое Действие (Если - проверка - Пройдена /true/)
  // let repeatCount = 2;
  document.write('b' + '<br>');
}

// задаём Исходные Д.
// repeatCount = 3;

// задаём Стартовое З.
// index = 4;

// проводим Проверку
// if (index <= repeatCount) {

//   }
// }

// printLetter2();
document.write('<br>');

const gradeArray = [5, 1, 4, 5, 4, 2, 5, 4];
for (index = 0; index <= gradeArray.length; index = index + 1) {
  document.write(gradeArray[index] + '<br>');
}

document.write('<br>');

let repeatCount1 = 5; //10 or 100 or 1000

for (let index = 1; index < repeatCount; index = index + 1) {
  // выполняем Целевое Действие (Если - проверка - Пройдена /true/)
  // let repeatCount = 2;
  document.write('b' + '<br>');
}

document.write('<br>');

const gradeArray1 = [5, 1, 4, 5, 4];
for (index = 0; index < gradeArray1.length; index = index + 1) {
  document.write(gradeArray1[index] + '<br>');
}

document.write('<br>');
