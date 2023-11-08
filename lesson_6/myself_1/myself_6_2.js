// 4/11/23     4,5,6
// В начале 6-го видео (своего курса по Программированию) Димыч рассказал - какую Про.-у он будет писать в этом видео
// Сейчас я начну пытаться САМ написать хоть Кусочек её.
// Сколько получится, НО - САМОСТОЯТЕЛЬНО.
// 5/11/23
// Пока получается Лишь Частично.
// -
// Вывожу Первое слово - в input принимаю ответ, кнопкой - подтверждаю, сравниваю с Правильным, если ответ Правильный делаю П.-ю counter ++1 (увеличиваю её З. на 1)....
// --
// Но - когда хочу выводить Второе слово - это уже НЕ получается.... (тогда выводится Первое и Сразу же - Второе, + может Сразу же выскакивать сообщение о НЕправильном ответе)
// ..... Вобщем надо Разбираться дальше....
// 6/11/23
// Создал Новый js-file -- куда перенёс весь работающий - частично - К. -- но убрал Практически Всё - что комментировал Вчера - всё то - что и как я Пробовал (и оно НЕ получалось) -- т.к. оно будет всё Заграмождать место.
// Сегодня буду пробовать Дальше!

// Найти эл. input по id
// для того чтобы манипулирувать его value

let inputId = 'entering_answer';
let getInput = document.getElementById(inputId);

let buttonId = 'confirm_answer';
let getButton = document.getElementById(buttonId);

// Присвоить value of input -- П.-й
let valueOfInput = getInput.value;

let counter = 0;

// function takeInputValue() {
//   if (getInput.value === 'I') {
//     alert('Well done!');
//     counter++;
//     alert(counter);
//   } else {
//     alert('Incorrect/Wrong');
//   }
// }
// alert('Я');
// getButton.addEventListener('click', takeInputValue);

// function next() {
//   alert('My');
//   function takeInputValue1() {
//     if (getInput.value === 'Мой моя моё мои') {
//       alert('Well done!');
//       counter++;
//       alert(counter);
//     } else {
//       alert('Incorrect/Wrong');
//     }
//   }
//   getButton.addEventListener('click', takeInputValue1);
// }
// next();

// 6/11/23 -- Try to write Code further

// Ф. (ниже) полностью Рабочая -- комментирую её чтобы Рифакторить
// function firsWord(){
// alert('Я');

// function takeInputValue() {
//   if (getInput.value === 'I') {
//     alert('Well done!');
//     counter++;
//     alert(counter);
//   } else {
//     alert('Incorrect/Wrong');
//   }
// }
// getButton.addEventListener('click', takeInputValue);
// }
// firsWord();

// Первый Рефакторинг -- Параметр Ф.-и (word) можно вынести в Самую Первую строку
// (а можно оставить при объявлении - Второй - Ф.-и)
// function firsWord(word){
//     alert('Я');

//     function takeInputValue() {
//       if (getInput.value === word) {
//         alert('Well done!');
//         counter++;
//         alert(counter);
//       } else {
//         alert('Incorrect/Wrong');
//       }
//     }
//     getButton.addEventListener('click', takeInputValue);
//     }
//     firsWord('I');

function firsWord(word1, word2) {
  alert(word1);

  function takeInputValue() {
    // alert(word1);
    if (getInput.value === word2) {
      alert('Well done!');
      counter++;
      alert(counter);
    } else {
      alert('Incorrect/Wrong');
    }
  }
  getButton.addEventListener('click', takeInputValue);
}
firsWord('Я', 'I');
firsWord('Живу', 'Live');
