// 8/04/24
// Продолжаю делать 11й /у Димыча он 15й/ Ур. -- Об.-ы

// Сейчас иду с 26-й минуты ---- Д. В. собирается ----
// -- модернизировать Про.-у "Переводчик" --- для Изучения Иностранных слов
// -- на Основании Об-в
// ---
// я, как обычно, -- Сперва попробую это сделать САМ
// (и посмотрю - что у меня получится)

// 9/04/24
// Писал К. С Помощью ДжиПиТи
// (нужен был один нюанс -- чтобы при Появлении на экране АНГЛИЙСКОГО слова -
// подсказка в prompt говорила Ввести Слово на РУССКОМ
// и -- Наоборот
// Сам этого написать НЕ смог --- и у ДжиПиТи долго выяснял -- КАК -- это реализовать)

// 10/04/24
// Продолжаю САМ Вспоминать и Писать/Делать Про.-у Димыча
// "по изучению Иностранных Слов"

////////////////////
////////////////////
////////////////////

// Проверка подключения этого js-file к html
// alert('Hi, Friends!!');

//////////////////
//////////////////
//////////////////

// I.B.

const wordsEnglish = {
  word0: 'Reliable',
  word1: 'Wire',
  word2: 'Transfer',
};

const wordsRussian = {
  word0: 'Надёжный  достойный доверия  солидный',
  word1: 'Провод струна трос',
  word2: 'Передача перевод перенос',
};

// 8/04/24
const arrayEnglish = ['Manufacturer', 'Firmly', 'Upward'];
// 8/04/24
const arrayRussian = [
  'Производитель',
  'Твёрдо крепко неизменно',
  'Наверх больше',
];

const hintPromptEnglish = 'Enter a word in Russian!';
const hintPromptRussian = 'Enter the word in English!';

const messageCorrect = 'Correct answer!';
const messageIncorrect = 'False ((';

// 10/04/24
const numberAnswersTotal = 3;
let numberAnswersCorrect = 0;
const numberCompare = 50;

// 11/04/24
const encouragement = 'Work hard and try harder';
const praise = 'Well done!!';

let interestСalculation;
let correctAnswersPercentage;

const interestMessage = 'The number of your correct answers is ';
const percentIcon = '%';

///////

// C.B.

//  Function Initialization bloc

// Function Call block

// 9/04/24
// Код -- который написал мне ДжиПиТи. Включая и вызовы Ф.-и
// --
// Код Полностью/Абсолютно - Рабочий
// -- я его Скопирую и Закомментирую чтобы --
// - на его Основании - продолжать писать/дописывать Про.-у
// (до того состояния -- кокой она была в конце 6го Ур. Димыча
// "Сложная Про. if else  проценты")

// function iLearn(learnWord1, learnWord2, array1, array2) {
function learnEnglishWords(learnWord1, learnWord2, array1, array2) {
  alert(learnWord1);
  let hintPrompt;
  if (array1.includes(learnWord1)) {
    hintPrompt = hintPromptRussian;
  } else if (array2.includes(learnWord1)) {
    hintPrompt = hintPromptEnglish;
  }
  const learnWordPrompt = prompt(hintPrompt);
  if (learnWordPrompt !== learnWord2) {
    alert(messageIncorrect);
    alert(numberAnswersCorrect);
  } else {
    alert(messageCorrect);
    numberAnswersCorrect = numberAnswersCorrect + 1;
    alert(numberAnswersCorrect);
  }
}
// learnEnglishWords();
// learnEnglishWords();
// learnEnglishWords();
// learnEnglishWords(arrayRussian[0], arrayEnglish[0], arrayRussian, arrayEnglish);
// learnEnglishWords(arrayRussian[1], arrayEnglish[1], arrayRussian, arrayEnglish);
// learnEnglishWords(arrayEnglish[2], arrayRussian[2], arrayRussian, arrayEnglish);

function learnWords() {
  interestСalculation = (numberAnswersCorrect / numberAnswersTotal) * 100;
  correctAnswersPercentage =
    interestMessage + Math.round(interestСalculation) + percentIcon;
  alert(correctAnswersPercentage);
  if (interestСalculation <= numberCompare) {
    alert(encouragement);
  } else {
    alert(praise);
  }
}

// learnEnglishWords(arrayRussian[0], arrayEnglish[0], arrayRussian, arrayEnglish);
// learnEnglishWords(arrayRussian[1], arrayEnglish[1], arrayRussian, arrayEnglish);
// learnEnglishWords(arrayEnglish[2], arrayRussian[2], arrayRussian, arrayEnglish);
// arrayRussian[2], // arrayEnglish[2],

learnEnglishWords(arrayRussian[0], arrayEnglish[0], arrayRussian, arrayEnglish);
learnEnglishWords(arrayRussian[1], arrayEnglish[1], arrayRussian, arrayEnglish);
learnEnglishWords(arrayEnglish[2], arrayRussian[2], arrayRussian, arrayEnglish);
learnWords();
// }

// iLearn(arrayRussian[0], arrayEnglish[0], arrayRussian[1], arrayEnglish[1], arrayRussian, arrayEnglish);
