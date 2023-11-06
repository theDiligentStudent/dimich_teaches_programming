// 4/11/23
// В начале 6-го видео (своего курса по Программированию) Димыч рассказал - какую Про.-у он будет писать в этом видео
// Сейчас я начну пытаться САМ написать хоть Кусочек её.
// Сколько получится, НО - САМОСТОЯТЕЛЬНО.
5/11/23
// Пока получается Лишь Частично.
// -
// Вывожу Первое слово - в input принимаю ответ, кнопкой - подтверждаю, сравниваю с Правильным, если ответ Правильный делаю П.-ю counter ++1 (увеличиваю её З. на 1).... 
// -- 
// Но - когда хочу выводить Второе слово - это уже НЕ получается.... (тогда выводится Первое и Сразу же - Второе, + может Сразу же выскакивать сообщение о НЕправильном ответе)
// ..... Вобщем надо Разбираться дальше....

// Найти эл. input по id
// для того чтобы манипулирувать его value

let inputId = 'entering_answer';
let getInput = document.getElementById(inputId);

let buttonId = 'confirm_answer';
let getButton = document.getElementById(buttonId);

// Присвоить value of input -- П.-й
let valueOfInput = getInput.value;

// function takeInputValue () {
//     // let inputValue = valueOfInput;
//     let inputValue = alert('Hi!');
//     return inputValue;
//     // alert('Hi');
// }
// getButton.addEventListener('click', takeInputValue);

//    Пробую По-Другому
// function compare() {
//   function takeInputValue() {
//     let inputValue = valueOfInput;
//     return inputValue;
//     // alert('Hi');
//   }
//   getButton.addEventListener('click', takeInputValue);

//   if (inputValue === 'I') {
//     alert('Well done!');
//   } else {
//     alert(uncorrect);
//   }
// }
// compare();

// function compare() {
//   function takeInputValue() {
//     let inputValue = valueOfInput;
//     return inputValue;
//     // alert('Hi');
//   }
//   getButton.addEventListener('click', takeInputValue);

//   if (inputValue === 'I') {
//     alert('Well done!');
//   } else {
//     alert(uncorrect);
//   }
// }
// compare();

//   Здесь у меня получилось --- Начало -- но только не могу сделать Нормальную/полноценную Ф.-ю, с Пар.-ми.......
//     Буду пробовать Ниже
// let counter = 0;

// function takeInputValue (word) {
//     // let inputValue = valueOfInput;
//     if(getInput.value === word) {
//         alert('Well done!');
//         counter++;
//         alert(counter);
//     } else {
//         alert('Incorrect/Wrong');
//     }
// }
// getButton.addEventListener('click', takeInputValue);

// alert('Я');
// takeInputValue ('I');
// getButton.addEventListener('click', takeInputValue);

// console.log(getInput.value);
// alert(getInput.value);

// alert('Я');
// alert('My');
// alert('Name');
// alert('Имя');
// alert('Your');
// alert('Моё');

let counter = 0;

function takeInputValue() {
  if (getInput.value === 'I') {
    alert('Well done!');
    counter++;
    alert(counter);
  } else {
    alert('Incorrect/Wrong');
  }
}
alert('Я');
getButton.addEventListener('click', takeInputValue);

function next() {
  alert('My');
  function takeInputValue1() {
    if (getInput.value === 'Мой моя моё мои') {
      alert('Well done!');
      counter++;
      alert(counter);
    } else {
      alert('Incorrect/Wrong');
    }
  }
  getButton.addEventListener('click', takeInputValue1);
}
next();
