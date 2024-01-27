// 24/01/24
// Yesterday закончил смотреть В. Димыча №7 -- про DEBUG
// Сегодня начинаю Переходить к 8-му видео
// с вспоминая Про.-ы из 6го Урока --- опять хочу Сперва написать её по памяти
// Сперва наверное напишу небольшой Псевдокод

// Про.-у написанную на конец занятия Протестил -- Всё Работает

//
// 25/11/24
// Вчера написал Псевдокод -- Самый Основной -- и часть Программного К.-а
// часть (основную) I. B.   и часть (тоже основную)  -- C. B.-а
// сделал три Ф.-и prompt и через alert --- сравнение - true   false.
// Сегодня продолжу писать Про.-у Дальше.

// Про.-у написанную на конец занятия Протестил -- Всё Работает

// 26/01/24
// Сейчас буду Доделывать -- Почти Готовую -- Про.-у,
// последнюю Ф.-у.    Она записана в Псевдокоде под № 6
// ---
// Всё! Закончил!   (и Протестил)

//
//
// Псевдокод
//
//
// 1.
// Показывать на экране Б.-а Русское слово
//    в строке для ВВода слова Ю.-м показывать надпись:
//    "Введи слово на Английском"
// Принимать ответ от Ю.-а

// 2.
//  Сравнивать ответ введённый Ю.-м с ответом Хранящимся в I. B. Про.-ы (в соответствующей П.-й)
// если ответ Совпадает со З.-м П.-й из I. B. -- показывать сообщение ---- true
// если ответ НЕ совпадает -- показывать ---- false

// 3.
// если ответ Совпадает -- то прибавлять Единицу (начиная от 0-ля) к Количеству Правильных ответов
// Иначе ---- показывать сообщением Правильный ответ

// 4.
// После вывода Всех Слов Для Изучения (когда Основная Про./действия Ю.-а закончены) выводить для Него сообщения с Результатами

// 4.1
// Вывести на Экран Поощрительную Стр.-у.....  либо:
// 4.1.1
// Well done! But try harder....   --- если Правильных ответов либо меньше половины, либо половина.
// 4.1.2
// Great!!  ---  если Правильных ответов больше половины *чем 50%*

// 5.
// Вывести на экран сообщение --- The number of your correct answers is 50%
// -- или Сколько там будет процентов
// Их (%-ы) надо будет Высчитать и Вставить в эту Стр.-у сообщения

// 6.
// Вывести на экран сообщение -- The number of your correct answers is 4 out of 6
// 4 из 6ти   или сколько там наберётся
//
//
//
// В скопированный Псевдокод буду постепенно вставлять Стр.-и Про.-ы
//
// I. B.
//
// 1.
let englishWord0 = 'Achieve'; // 0
let russianWord0 = 'Добиваться, достигать';

let englishWord1 = 'Additionally'; // 1
let russianWord1 = 'Кроме того, дополнительно, сверх того';

let englishWord2 = 'Actually'; // 2
let russianWord2 = 'Фактически';

// 25/01/24
// 3.
const totalNumberOfWordsStudied = 3;

let showWordAcceptAnswer0;
let showWordAcceptAnswer1;
let showWordAcceptAnswer2;

// const phraseInsidePrompt = 'Enter words in Russian';
// меняю название П.-й на, как мне кажется -- более соответствующее
const tooltipPromptText = 'Enter words in Russian';

// 25/01/24
// 3.
let totalNumberOfCorrectAnswers = 0;

// 25/01/24
// 4.

// 4.1.1
const messageOfCompleteEncouragement = 'Great!!';

// 4.1.2
const messageEncouragingYouToTryHarder = 'Well done! But try harder....';

let percentageOfCorrectAnswers;

const numberToCompareAnswers = 50;

// 25/01/24
// 5.
const messageAboutPercentCorrectAnswers = 'The number of your correct answers';

// 26/01/24
const percentIcon = ' %';

// 6.
// 26/01/24
const correctAnswersFrom = 'Your correct answers are ';

//
//
// C. B.
//
// 1.
// Показывать на экране Б.-а Русское слово
//    в строке для ВВода слова Ю.-м показывать надпись:
//    "Введи слово на Английском"
// Принимать ответ от Ю.-а
showWordAcceptAnswer0 = prompt(englishWord0, tooltipPromptText); // 0
// 2.
//  Сравнивать ответ введённый Ю.-м с ответом Хранящимся в I. B. Про.-ы (в соответствующей П.-й)
// если ответ Совпадает со З.-м П.-й из I. B. -- показывать сообщение ---- true
// если ответ НЕ совпадает -- показывать ---- false
alert(russianWord0 === showWordAcceptAnswer0);
//
// !!!!!! ОЧЕНь ИНТЕРЕСНОЕ   действие с П.-й для prompt !!!!!
// alert(showWordAcceptAnswer0);
// показывает на экран - через alert - то, что мы ввели как Ю., через prompt.
//

//
// начинается  --- Условная Логика    (или Ветвление Про.-ы)

// 3.
// если ответ Совпадает -- то прибавлять Единицу (начиная от 0-ля) к Количеству Правильных ответов
// 25/01/24
if (russianWord0 === showWordAcceptAnswer0) {
  totalNumberOfCorrectAnswers = totalNumberOfCorrectAnswers + 1;
}
// Иначе ---- показывать сообщением Правильный ответ
else {
  alert(russianWord0);
}

showWordAcceptAnswer1 = prompt(englishWord1, tooltipPromptText); // 1
alert(russianWord1 === showWordAcceptAnswer1);
// 25/01/24
if (russianWord1 === showWordAcceptAnswer1) {
  totalNumberOfCorrectAnswers = totalNumberOfCorrectAnswers + 1;
} else {
  alert(russianWord1);
}

showWordAcceptAnswer2 = prompt(englishWord2, tooltipPromptText); // 2
alert(russianWord2 === showWordAcceptAnswer2);
// 25/01/24
if (russianWord2 === showWordAcceptAnswer2) {
  totalNumberOfCorrectAnswers = totalNumberOfCorrectAnswers + 1;
} else {
  alert(russianWord2);
}

// 4.
// После вывода Всех Слов Для Изучения (когда Основная Про./действия Ю.-а закончены) выводить для Него сообщения с Результатами

// 4.1
// Вывести на Экран Поощрительную Стр.-у.....  либо:
// 4.1.1
// Great!!  ---  если Правильных ответов больше половины *чем 50%*
// 25/01/24
percentageOfCorrectAnswers = Math.round(
  (totalNumberOfCorrectAnswers / totalNumberOfWordsStudied) * 100
);
if (percentageOfCorrectAnswers > numberToCompareAnswers) {
  alert(messageOfCompleteEncouragement);
}
// 4.1.2
// Well done! But try harder....   --- если Правильных ответов либо меньше половины, либо половина.
else {
  alert(messageEncouragingYouToTryHarder);
}

// 5.
// Вывести на экран сообщение --- The number of your correct answers is 50%
// -- или Сколько там будет процентов
// Их (%-ы) надо будет Высчитать и Вставить в эту Стр.-у сообщения
// 25/01/24
alert(
  messageAboutPercentCorrectAnswers +
    ' ' +
    percentageOfCorrectAnswers +
    percentIcon
);

// 6.
// Вывести на экран сообщение -- The number of your correct answers is 4 out of 6
// 4 из 6ти   или сколько там наберётся
alert(
  correctAnswersFrom +
    totalNumberOfCorrectAnswers +
    ' out of ' +
    totalNumberOfWordsStudied
);
