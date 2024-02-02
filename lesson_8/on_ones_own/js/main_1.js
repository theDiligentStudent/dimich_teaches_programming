// 31/01/24
// Смотрю 8ой Ур Димыча ---- Повторяю Сам

// 1/02/24
// Пишу Занову
// (в смысле Самостоятельно)
// Про.-у Димыча из 6го Ур.-а, но буду делать уже
// с Заменой вызова window.alert на document.write --
// так - как показывает Димыч в 8м Ур.-е
// Уже столкнулся с Первой Трудностью/НЕпоняткой. - При вызове document.write..... - - может быть разберусь с ней - когда (позже) досмотрю В. Димыча до конца

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
// const tagBr = '</br>';
// const tagBr1 = '</br> </br>';

let determinePercentageCorrectAnswers;
const numberForStoringCorrectAnswers = 50;

//

// C. B.

function toShowPrompt(russianWord, englishWord) {
  showWordAcceptAnswer = prompt(russianWord, promptHelpText);
  document.write(englishWord === showWordAcceptAnswer);
  // document.write(englishWord === showWordAcceptAnswer, '</br>');
  // document.write(englishWord === showWordAcceptAnswer, '</br> </br>');
  // document.write(englishWord === showWordAcceptAnswer, tagBr);
  if (englishWord === showWordAcceptAnswer) {
    numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
  } else {
    document.write(englishWord);
    // document.write(englishWord, tagBr);
  }
}

toShowPrompt(russianWord0, englishWord0);
toShowPrompt(russianWord1, englishWord1);
toShowPrompt(russianWord2, englishWord2);
