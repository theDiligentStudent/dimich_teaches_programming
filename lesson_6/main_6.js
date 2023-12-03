// Урок 6-й с Димычем
//   по Общему Программированию
//     1/11/23
//     15/11/23
//     --
//     Две недели -- с 1го по 14-е ноября --
//     я пытался написать САМ (Полностью), ту Про.-у про которую Димыч рассказал в начале этого (6го) урока..... --
//     -- получилось у  меня мало что, т.е. получилось Плохо ---- теперь буду пробовать делать так - как учит - Димыч - в этом видео.
// 25/11/23
//     К Сегодняшнему дню я сделал Про.-у Димыча
//     записал весь К., коммиты, комментарии разные -- закончил её где-то неделю назад....
//     и вот Сейчас - начал смотреть видео Димыча.
// 28/11/23
//   Продолжаю смотреть видео Димыча ---- и копипастить )) за ним.... или Перед ним
// 29/11/23
//  Смотрю видео Димыча Дальше с 18-й минуты
// 30/11/23
// Сперва -- Удаляю Всю Работу -- которую проделал Ранее и уже закомментировал,
// Все варианты Выполнения Про.-ы (какой она была Вначале/Раньше).
// После этого начинаю смотреть видео Димыча дальше -- где-то с 20-й минуты.
// Повспоминал как работает method prompt --- а то забыл уже...... - Димыч в видео уже перешёл к нему - поэтому я попробовал Вспомнить Сам - увидел - что Забыл..... -- и стал вспоминать.
// 2/12/23
// Сперва напишу по памяти всю основную Про.-у, которую написал Димыч в своём 6-м видео к 19-й минуте. (Это Повторение заняло у меня 40 минут) -- Потом продолжу смотреть видео с Димычем.
// 3/12/23
// Сейчас буду смотреть видео (6-е) Димыча дальше, с 22-й минуты.
// Но - сперва - поудаляю много комментариев, работы (более ранней) над К.-м Про.-ы.
//  ---------------------
//   ------------------------
//   -------------------------------

// ==================

// 2/12/23
// ----
// initialization block
let rusWord0 = 'производительность'; // 1
let engWord0 = 'performance';

let rusWord1 = 'обида'; // 2
let engWord1 = 'resentment, hurt, offense, insult';

let rusWord2 = 'ты обиделся?'; // 3
let engWord2 = 'are you offended?';

let promptOutput = 'enter a word in English';

let counter = 0; // enter the counter variable

let finalMessage = 'Well done, but try harder!'; // final message
//
//
// // working code block 1 (execution block)

// let wordWithAnswer0 = prompt(rusWord0, promptOutput); // 1
// alert(wordWithAnswer0 === engWord0);

// // alert(rusWord1); // 2
// let wordWithAnswer1 = prompt(rusWord1, promptOutput); // 2
// alert(wordWithAnswer1 === engWord1);

// // alert(rusWord2); // 3
// let wordWithAnswer2 = prompt(rusWord2, promptOutput); // 3
// alert(wordWithAnswer2 === engWord2);

// alert(finalMessage); // final message/
//
//
// // working code block 2 (execution block)

// let wordWithAnswer0 = prompt(rusWord0, promptOutput); // 1
// alert(wordWithAnswer0 === engWord0);
// if (wordWithAnswer0 === engWord0) {
//   counter++;
//   alert(counter);
// }

// // alert(rusWord1); // 2
// let wordWithAnswer1 = prompt(rusWord1, promptOutput); // 2
// alert(wordWithAnswer1 === engWord1);
// if (wordWithAnswer1 === engWord1) {
//   counter++;
//   alert(counter);
// }

// // alert(rusWord2); // 3
// let wordWithAnswer2 = prompt(rusWord2, promptOutput); // 3
// alert(wordWithAnswer2 === engWord2);
// if (wordWithAnswer2 === engWord2) {
//   counter++;
//   alert(counter);
// }

// alert(finalMessage); // final message/
//
//
// working code block 3 (execution block)

let wordWithAnswer0 = prompt(rusWord0, promptOutput); // 1
alert(wordWithAnswer0 === engWord0);
if (wordWithAnswer0 === engWord0) {
  counter++;
  alert(counter);
}

// alert(rusWord1); // 2
let wordWithAnswer1 = prompt(rusWord1, promptOutput); // 2
alert(wordWithAnswer1 === engWord1);
if (wordWithAnswer1 === engWord1) {
  counter++;
  alert(counter);
}

// alert(rusWord2); // 3
let wordWithAnswer2 = prompt(rusWord2, promptOutput); // 3
alert(wordWithAnswer2 === engWord2);
if (wordWithAnswer2 === engWord2) {
  counter++;
  alert(counter);
}

alert(finalMessage); // final message/
