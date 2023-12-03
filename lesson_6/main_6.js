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
//  ---------------------
//   ------------------------
//   -------------------------------

//
//
//
//====
//ТРЕТИЙ Вариант Про.-ы
//
// (Подготовка/инициализация Д.-х)
// let rusWord0 = 'безопасность'; // 0
// let engWord0 = 'safety';

// let rusWord1 = 'испуг'; // 1
// let engWord1 = 'fright';

// let rusWord2 = 'сострадание, сочувствие, жалость'; // 2
// let engWord2 = 'compassion';

// // Ввожу П.-ю С ПОДСКАЗКОЙ - во внутрь prompt
// let clue = 'введи Английское слово';

// // П. с Конечным (поощрительным) Текстом
// let finalMessage = 'Well done, but keep trying.';

// // =============
// // Непосредственно Сама Про.
// // заменяю выводы в alert-ах Словами, на выводы П.-ми

// // Теперь МЕНЯЮ ВЫВОДЫ alert на prompt
// // Кстати, --- очень интересный -- вариант Про.-ы теперь получается...
// prompt(rusWord0, clue); // 0  //Использую П.-ю clue -- вместо строки с текстом 'введи Английское слово'
// alert(engWord0);

// prompt(rusWord1, clue); // 1   //Использую П.-ю clue -- вместо строки с текстом 'введи Английское слово'
// alert(engWord1);

// prompt(rusWord2, clue); // 2   //Использую П.-ю clue -- вместо строки с текстом 'введи Английское слово'
// alert(engWord2);

// alert(finalMessage);     // вывод на экран Финального сообщения
//
//
//
// (Подготовка/инициализация Д.-х)
// let rusWord0 = 'безопасность'; // 0
// let engWord0 = 'safety';

// let rusWord1 = 'испуг'; // 1
// let engWord1 = 'fright';

// let rusWord2 = 'сострадание, сочувствие, жалость'; // 2
// let engWord2 = 'compassion';

// let showWord = prompt(word, clue);  // Так -- НЕ работает

// Ввожу П.-ю С ПОДСКАЗКОЙ - во внутрь prompt
// let clue = 'введи Английское слово';

// П. с Конечным (поощрительным) Текстом
// let finalMessage = 'Well done, but keep trying.';

// =============
// Непосредственно Сама Про.
// заменяю выводы в alert-ах Словами, на выводы П.-ми

// Теперь МЕНЯЮ ВЫВОДЫ alert на prompt
// Кстати, --- очень интересный -- вариант Про.-ы теперь получается...
// showWord(rusWord0, clue); // 0  // Так -- НЕ работает
// function learnWords(rusWord, engWord) {
//     // let word;
//     // let word1;
//     let showWord = prompt(rusWord, clue);
//     if(showWord === engWord) {
//         alert('Hi!');
//     }
//     else {
//         alert('By');
//     }
// }
// learnWords(rusWord0, engWord0);
// learnWords(rusWord1, engWord1);
// learnWords(rusWord2, engWord2);
// learnWords('safety');

// prompt(rusWord1, clue); // 1   // Так -- НЕ работает

// prompt(rusWord2, clue); // 2   // Так -- НЕ работает

// alert(finalMessage); // вывод на экран Финального сообщения

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

let finalMessage = 'Well done, but try harder!'; // final message
//
//
// working code block  (execution block)
// alert(rusWord0); // 1
// function wordCheck() {
let word0 = prompt(rusWord0, promptOutput); // 1
alert(word0 === engWord0);
// if(word0 === engWord0) {
//     alert('Hi!');
// } else {
//     alert('By...');
// }

// alert(rusWord1); // 2
let word1 = prompt(rusWord1, promptOutput); // 2
alert(word1 === engWord1);

// alert(rusWord2); // 3
let word2 = prompt(rusWord2, promptOutput); // 3
alert(word2 === engWord2);

alert(finalMessage); // final message/
// }
// wordCheck();
