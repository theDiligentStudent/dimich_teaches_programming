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
// 4/12/23
// После просмотра 26-ти минут 6-го урока Димыча -- опять остановлюсь
// и попробую (на основании того, что уже сделал с Димычем) доделать Про.-у САМ.
// Так - как Получится.
// Сперва нужно сделать Одну Общую Ф.-ю для всех prompt и выводить prompt на экран - с помощью Ф.-и, потом нужно сделать if else -- меньше половины правильных ответов или больше. И %-ты.
// Поехали.
// Всё!!   -----  За 1:10 - полностью всё сделал. Протестил.   ..... И (как мне кажется) - Всё Работает!!.....

// 5/12/23
// (это было Вчера)
// забыл что мне нужно вывести на экран сообщение о количестве %-в Правильных ответов..... - думал, что это Пустяк - и быстро справлюсь.....
// --
// Попробовал - но НЕТ!!  НЕ получилось.
// Попробовал сам, потом где-то час с помощью ДжиПиТи мучался .....
// Но в итоге -- так и НЕ получилось.
// Доделал сегодня
// --
// 6/12/23
// Сейчас в ГитХаб сохраню всё так как есть - с комментариями, потом - удалю ЛИШНИЕ КОМЕНТЫ И ЕЩЁ РАЗ СОХРАНЮ -- а потом - то, что уже останется опять Закомментирую --- и буду Дальше - смотреть видео с Димычем......
// 20/12/23
// Позанимался НЕмного по 6-му уроку Димыча (около 40-ка минут).
// Сейчас ориентировочно на 26-й минуте
//   ------------------------
//   -------------------------------

// ==================

// 12/12/23
// ----
// initialization block

// --  words being studied
// let rusWord0 = 'производительность'; // 0
// let engWord0 = 'performance';

// let rusWord1 = 'обида'; // 1
// let engWord1 = 'resentment, offence'; // , hurt, insult ---- additional words

// let rusWord2 = 'ты обиделся?'; // 2
// let engWord2 = 'are you offended?';

// let rusWord3 = 'желание'; // 3
// let engWord3 = 'desire';

// let rusWord4 = 'трудности, препятствие, затруднение'; // 4
// let engWord4 = 'difficulty';

// 1/01/24
// Сейчас - Попробую - изменить Все П.-е с объявлением слов -- Двумя Ма.-ми
// ..... -- и посмотрю -- что из этого - у меня Получится
let rusWords = [
  'производительность',
  'обида',
  'ты обиделся?',
  'желание',
  'трудности, препятствие, затруднение',
];
let engWords = [
  'performance',
  'resentment, offence',
  'are you offended?',
  'desire',
  'difficulty',
];

// Переношу П.-ю с Общим количеством слов -- к Списку объявления слов
// (чтобы они находились РЯДОМ)
let totalNumberOfWords = 5; // 4/12/23  I enter a variable - totalNumberOfWords

// -- other variables

let promptOutput = 'enter a word in English';

// let counter = 0; // enter the counter variable

// 20/12/23 -- Даю П.-й counter Более КОРРЕКТНОЕ и Правильное название
let numberCorrectAnswers = 0; // enter the counter variable

let halfTheAnswers = totalNumberOfWords / 2; // 14/12/23  I enter a variable - halfTheAnswers
let halfTheAnswers1 = rusWords.length / 2; // 14/12/23  I enter a variable - halfTheAnswers

let messageOfPraise = 'Great!';
let finalMessage = 'Well done! Keep trying!';

// code block
// // 4/12/23
// 14/12/23

// let wordBeingStudiedAndAnswer0 = prompt(rusWord0, promptOutput); // 0
let wordBeingStudiedAndAnswer0 = prompt(rusWords[0], promptOutput); // 0
// alert(wordBeingStudiedAndAnswer0 === engWord0);
alert(wordBeingStudiedAndAnswer0 === engWords[0]);
// if (wordBeingStudiedAndAnswer0 === engWord0) {
if (wordBeingStudiedAndAnswer0 === engWords[0]) {
  numberCorrectAnswers++;
}

// let wordBeingStudiedAndAnswer1 = prompt(rusWord1, promptOutput); // 1
let wordBeingStudiedAndAnswer1 = prompt(rusWords[1], promptOutput); // 1
// alert(wordBeingStudiedAndAnswer1 === engWord1);
alert(wordBeingStudiedAndAnswer1 === engWords[1]);
// if (wordBeingStudiedAndAnswer1 === engWord1) {
if (wordBeingStudiedAndAnswer1 === engWords[1]) {
  numberCorrectAnswers++;
}

// let wordBeingStudiedAndAnswer2 = prompt(rusWord2, promptOutput); // 2
let wordBeingStudiedAndAnswer2 = prompt(rusWords[2], promptOutput); // 2
// alert(wordBeingStudiedAndAnswer2 === engWord2);
alert(wordBeingStudiedAndAnswer2 === engWords[2]);
// if (wordBeingStudiedAndAnswer2 === engWord2) {
if (wordBeingStudiedAndAnswer2 === engWords[2]) {
  numberCorrectAnswers++;
}

// let wordBeingStudiedAndAnswer3 = prompt(rusWord3, promptOutput); // 3
let wordBeingStudiedAndAnswer3 = prompt(rusWords[3], promptOutput); // 3
// alert(wordBeingStudiedAndAnswer3 === engWord3);
alert(wordBeingStudiedAndAnswer3 === engWords[3]);
// if (wordBeingStudiedAndAnswer3 === engWord3) {
if (wordBeingStudiedAndAnswer3 === engWords[3]) {
  numberCorrectAnswers++;
}

// let wordBeingStudiedAndAnswer4 = prompt(rusWord4, promptOutput); // 4
let wordBeingStudiedAndAnswer4 = prompt(rusWords[4], promptOutput); // 4
// alert(wordBeingStudiedAndAnswer4 === engWord4);
alert(wordBeingStudiedAndAnswer4 === engWords[4]);
// if (wordBeingStudiedAndAnswer4 === engWord4) {
if (wordBeingStudiedAndAnswer4 === engWords[4]) {
  numberCorrectAnswers++;
}

if (numberCorrectAnswers > halfTheAnswers1) {
  alert(messageOfPraise);
} else {
  alert(finalMessage);
}

alert(halfTheAnswers1);
alert(numberCorrectAnswers);
