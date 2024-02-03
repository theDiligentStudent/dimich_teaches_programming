// 31/01/24
// Смотрю 8ой Ур Димыча ---- Повторяю Сам

// 1/02/24
// Пишу Заново
// (в смысле Самостоятельно)
// Про.-у Димыча из 6го Ур.-а, но буду делать уже
// с Заменой вызова window.alert на document.write --
// так - как показывает Димыч в 8м Ур.-е
// Уже столкнулся с Первой Трудностью/НЕпоняткой. - При вызове document.write..... - - может быть разберусь с ней - когда (позже) досмотрю В. Димыча до конца

// 2/02/24
// Написал Про.-у так - как планировал (с document.write(wordsOfPraise))
// Разделил её на Несколько Частей:
// I. B. -- для ОБЪЯВЛЕНИЯ П.-х
// И   C. B. --- Блок с самим Выполнением Про.-ы ---- который я тоже Разделил на два блока:
// -- Function declaration block --- Блок ОБЪЯВЛЕНИЯ Ф.-й и
// -- Function call block --- Блок их (Ф.-й) Выполнения
// Полностью Все Опе.-и и Действия Про.-ы я занёс в Ф.-и
// --
// НЕ использовал пока только Тег </br> -- для Разделения ВЫВОДИМЫХ Д.-х о результатах -- на Стр.-и
// Сейчас отправлю то, что уже сделал - на ГитХаб -- и вернусь доделывать с </br>
//
//
// Доделал ---- Про.-у с использованием Тега --- </br>
// НЕ даёт мне покоя вот эта вот Стр.-чка: 
// else {
//     document.write(englishWord, br);
//   }
// при последнем Вызове Ф.-и.    -----  если -- З.-е -- false
// --- получается ЛИШНИЙ пробел (который мне Вообще НЕ нужен)
// сейчас за ГитХаблю --- и попробую этот Пробел УБРАТЬ.....


//

// I. B.

const russianWord0 = 'Выше';
const englishWord0 = 'Above'; // 0

const russianWord1 = 'Прямо над (чем-то)';
const englishWord1 = 'Right above'; // 1

const russianWord2 = 'Произвольный';
const englishWord2 = 'Arbitrary'; // 2

const numberOfWordsStudied = 3;
let numberOfCorrectAnswers = 0;

const promptHelpText = 'Enter a word or group of words in English';

// let showWordAcceptAnswer0;
// let showWordAcceptAnswer1;
// let showWordAcceptAnswer2;
let showWordAcceptAnswer;
const tagBr0 = '</br>';
const tagBr1 = '</br> </br>';

const wordsOfPraise = 'Great!';
const wordsEncouragementAndEncouragementTryHarder =
  'Well done! But try harder!';

let determinePercentageCorrectAnswers;
const numberForStoringCorrectAnswers = 50;

const resultInPercentage = 'The number of your correct answers is: ';
const percentIcon = ' %';

let forShowTheNumberOfCorrectAnswers1 = 'Number of correct answers ';
let showTheNumberOfCorrectAnswers;

// C. B.

// Function declaration block

// function toShowPrompt(russianWord, englishWord) {
//   showWordAcceptAnswer = prompt(russianWord, promptHelpText);
//   // document.write(englishWord === showWordAcceptAnswer);
//   // document.write(englishWord === showWordAcceptAnswer, '</br>');
//   // document.write(englishWord === showWordAcceptAnswer, '</br> </br>');
//   document.write(englishWord === showWordAcceptAnswer, tagBr);
//   if (englishWord === showWordAcceptAnswer) {
//     numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
//   } else {
//     // document.write(englishWord);
//     document.write(englishWord, tagBr);
//   }
// }
function toShowPrompt(russianWord, englishWord, br) {
  showWordAcceptAnswer = prompt(russianWord, promptHelpText);
  document.write(englishWord === showWordAcceptAnswer, br);
  if (englishWord === showWordAcceptAnswer) {
    numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
  } else {
    document.write(englishWord, br);
  }
}

function showResults() {
  determinePercentageCorrectAnswers = Math.round(
    (numberOfCorrectAnswers / numberOfWordsStudied) * 100
  );
  if (determinePercentageCorrectAnswers > numberForStoringCorrectAnswers) {
    document.write(wordsOfPraise, tagBr1);
  } else {
    document.write(wordsEncouragementAndEncouragementTryHarder, tagBr1);
  }
}

function showResultInPercentage() {
  document.write(
    resultInPercentage + determinePercentageCorrectAnswers + percentIcon,
    tagBr1
  );
}

function usersCorrectAnswers() {
  showTheNumberOfCorrectAnswers =
    forShowTheNumberOfCorrectAnswers1 +
    numberOfCorrectAnswers +
    ' of ' +
    numberOfWordsStudied;
  document.write(showTheNumberOfCorrectAnswers);
}

// Function call block

toShowPrompt(russianWord0, englishWord0, tagBr0);
toShowPrompt(russianWord1, englishWord1, tagBr0);
toShowPrompt(russianWord2, englishWord2, tagBr1);

showResults();

showResultInPercentage();

usersCorrectAnswers();
