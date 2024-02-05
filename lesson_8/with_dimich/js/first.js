// 28/01/24
// Продолжаю смотреть видеоурок Димыча №8 -- о Ф.-х
// и копипастить за ним -- пытаюсь разобраться
// alert, prompt, document.

// 31/01/24
// Продолжаю смотреть видеоурок Димыча №8 -- о Ф.-х
// с 12й минуты
// Посмотрел/Поделал по 20-ю минуту включительно

// // //
// // //
// // //

// document.write('hi');   // ПравильнаЯ Запись

// document.write(hi);  // НЕПРАВИЛЬНАЯ запись

// /// //

const message = 'Hello!!';

// let resultOfFunction = window.alert(massage);

// let resultOfFunction = document.write(message);
// document.write(message);
// alert(message);

// let resultOfFunction = window.console.log(massage);
// resultOfFunction;
// resultOfFunction();
// resultOfFunction('HI');

// // //
// // //
// // //

// 31/01/24
const message1 = 'Enter your message';
const message2 = 'Hello!!';
const userInput = prompt(message1);
// const br = document.write('<br>'); // так НЕ работает
const userResponse = document.write(userInput);

// document.write(' ' + userInput);
// document.write('<br>');
// document.write('</br>');  // можно и так ставить --- Димыч ставит Так

// br;   // так НЕ работает
// br(); // так НЕ работает
document.write(' Your input is: ' + userInput);

// а РАБОТАЕТ - Вот Так !!  -- как предлагает Димыч!
document.write(' Your input is: ' + userInput + '</br>');
document.write(' Your input is: ' + userInput + '</br>');
document.write(' Your input is: ' + userInput + '</br>');
document.write(' Your input is: ' + userInput + '</br>');

const userInput2 = prompt(message2);
document.write(' Your input is: ' + userInput2);
document.write(' Your input is: ' + userInput2, '</br>' + '1 ' + '2');
document.write(
  ' Your input is: ' + userInput2,
  '</br>' + '1 ' + '2',
  '</br>' + '3 ' + '4'
);
