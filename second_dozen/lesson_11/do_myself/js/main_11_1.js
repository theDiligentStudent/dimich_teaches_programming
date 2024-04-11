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

// 11/04/24
// Доделал Про.-ку (как смог) - целиком
// слова заключены в Ма.-ы

// Поудалял все Лишние комментарии из Про.-ы
// и немножко видоизменил её (чуточку)
// --
// в Ф.-ю learnWordPrompt в У. if (если НЕ верно) -- добавил:
// alert(learnWordPrompt)
// alert(learnWord2)
// -- две строки - "Показать введённый мной НЕ правильный вариант"
// и -- Сразу Же -- "Показать Правильный варианта этого слова"

// GPT написал мне К. для Подсказок в prompt к Об.-м
// я его Переписал
// (старые Строчки - к Ма.-м - я закомментировал -- теперь Закоммитчу этот К. - Потом вернусь - поудаляю - Лишние комментарии - Закоммитчу - Продолжу смотреть В. с Димычем)

// Поудалял Лишние комментарии, скопировал файлы html и js -- в файлы для Работы с Димычем, -- теперь буду коммитить изменения

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

// const wordsRussian = {
//   word0: 'Надёжный  достойный доверия  солидный',
//   word1: 'Провод струна трос',
//   word2: 'Передача перевод перенос',
// };

// // 8/04/24
// const arrayEnglish = ['Manufacturer', 'Firmly', 'Upward'];
// // 8/04/24
// const arrayRussian = [
//   'Производитель',
//   'Твёрдо крепко неизменно',
//   'Наверх больше',
// ];

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

// Вариант Ф.-и для Об.-в!

function learnEnglishWords(learnWord1, learnWord2, wordsEnglish, wordsRussian) {
  alert(learnWord1);
  let hintPrompt;
  if (Object.values(wordsEnglish).includes(learnWord1)) {
    hintPrompt = hintPromptRussian;
  } else if (Object.values(wordsRussian).includes(learnWord1)) {
    hintPrompt = hintPromptEnglish;
  }
  const learnWordPrompt = prompt(hintPrompt);
  if (learnWordPrompt !== learnWord2) {
    alert(messageIncorrect);
    alert(numberAnswersCorrect);
    alert(learnWordPrompt);
    alert(learnWord2);
  } else {
    alert(messageCorrect);
    numberAnswersCorrect = numberAnswersCorrect + 1;
    alert(numberAnswersCorrect);
  }
}

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

// Function Call block

learnEnglishWords(
  wordsRussian.word0,
  wordsEnglish.word0,
  wordsRussian,
  wordsEnglish
);
learnEnglishWords(
  wordsRussian.word1,
  wordsEnglish.word1,
  wordsRussian,
  wordsEnglish
);
learnEnglishWords(
  wordsEnglish.word2,
  wordsRussian.word2,
  wordsRussian,
  wordsEnglish
);

learnWords();
