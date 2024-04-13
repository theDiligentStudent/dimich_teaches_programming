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

// 12 и 13/04/24
// Д.В. начал переносить П.-е в Об.-ы
// -- я Остановил В. на 29й минуте --
// и САМ - перенёс ВСЕ П. - в Об.-ы
// (для этого я создал 8 Об.-в) -----
// теперь Закоммитчу изменения ---
// зайду заново --- поудаляю большое кол-во комментариев ---
// и опять Закоммитчу



////////////////////
////////////////////
////////////////////

// Проверка подключения этого js-file к html
// alert('Hi, Friends!!');

//////////////////
//////////////////
//////////////////

// I.B.

// 11/04/24
// Изменяю К. за Д. В.-м

// const wordsEnglish = {
//     word0: 'Reliable',
//     word1: 'Wire',
//     word2: 'Transfer',
//   };

//   const wordsRussian = {
//     word0: 'Надёжный  достойный доверия  солидный',
//     word1: 'Провод струна трос',
//     word2: 'Передача перевод перенос',
//   };

// 11/04/24
// Переделываю К. / Делаю за Димычем
const word0 = {
  original: 'Reliable',
  translation: 'Надёжный  достойный доверия  солидный',
};
const word1 = {
  original: 'Wire',
  translation: 'Провод струна трос',
};
const word2 = {
  original: 'Transfer',
  translation: 'Передача перевод перенос',
};

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

// 12/04/24
// Переделываю К. за Димычем
// const messageCorrect = 'Correct answer!';
// const messageIncorrect = 'False ((';
const checkingMessage = {
  correct: 'Correct answer!',
  incorrect: 'False ((',
};

// 10/04/24
// const numberAnswersTotal = 3;
// 12/04/24
// Переделываю К. за Димычем
// let numberAnswersCorrect = 0;
// 12/04/24
// Переделываю К. за Димычем
let changingSettings = {
  numberAnswersCorrect: 0,
  interestСalculation: null, // работает и  так и
  interestСalculation: 0, //  и  так
  correctAnswersPercentage: null, // работает и  так и
  correctAnswersPercentage: 0, //  и  так
};
// const numberCompare = 50;
// 12/04/24
// Переделываю К. за Димычем
const programSetting = {
  numberCompare: 50,
  numberAnswersTotal: 3,
};

// 11/04/24
// const encouragement = 'Work hard and try harder';
// const praise = 'Well done!!';
// 12/04/24
// Переделываю К. за Димычем
const resultMessage = {
  encouragement: 'Work hard and try harder',
  praise: 'Well done!!',
};

// 12/04/24
// Переделываю К. за Димычем
// Переношу (буду пытьтаться) эти П.-е в  Об. выше "changingSettings"
// let interestСalculation;
// let correctAnswersPercentage;

// 12/04/24
// Переделываю К. за Димычем
// Переношу (буду пытьтаться) эти П.-е в  Об. ниже "additionalSettings"
// const interestMessage = 'The number of your correct answers is ';
// const percentIcon = '%';
const additionalSettings = {
  interestMessage: 'The number of your correct answers is ',
  percentIcon: '%',
};

///////

// C.B.

//  Function Initialization bloc

// Вариант Ф.-и для Об.-в!

// My Code, My demand
// function learnEnglishWords(learnWord1, learnWord2, word0, word1, word2) {
// GPT Code
function learnEnglishWords(learnWord1, learnWord2, words) {
  alert(learnWord1);
  // alert(learnWord1.original); // Display the original word

  let hintPrompt;

  // My Code, My demand
  // if (Object.values(word0, word1, word2).includes(original)) {
  //   hintPrompt = hintPromptRussian;
  // } else if (Object.values(word0, word1, word2).includes(translation)) {
  //   hintPrompt = hintPromptEnglish;
  // }

  // GPT Code

  // if (Object.values(words).some(word => word.original === learnWord1.original)) {
  //   hintPrompt = hintPromptRussian;
  // } else if (Object.values(words).some(word => word.translation === learnWord1.translation)) {
  //   hintPrompt = hintPromptEnglish;
  // }

  const learnWordPrompt = prompt(hintPrompt);
  if (learnWordPrompt !== learnWord2) {
    alert(checkingMessage.incorrect);
    alert(changingSettings.numberAnswersCorrect);
    alert(learnWordPrompt);
    alert(learnWord2);
  } else {
    alert(checkingMessage.correct);
    changingSettings.numberAnswersCorrect =
      changingSettings.numberAnswersCorrect + 1;
    alert(changingSettings.numberAnswersCorrect);
  }
}

function learnWords() {
  changingSettings.interestСalculation =
    // 12/04/24
    // Переделываю К. за Димычем
    // (changingSettings.numberAnswersCorrect /
    //   programSetting.numberAnswersTotal) *
    // 100;
    (changingSettings.numberAnswersCorrect /
      programSetting.numberAnswersTotal) *
    100;
  // 13/04/24
  // Переделываю К. за Димычем
  // correctAnswersPercentage =
  //   interestMessage + Math.round(interestСalculation) + percentIcon;
  changingSettings.correctAnswersPercentage =
    additionalSettings.interestMessage +
    Math.round(changingSettings.interestСalculation) +
    additionalSettings.percentIcon;
  alert(changingSettings.correctAnswersPercentage);
  if (changingSettings.interestСalculation <= programSetting.numberCompare) {
    alert(resultMessage.encouragement);
  } else {
    alert(resultMessage.praise);
  }
}

// Function Call block

// My Code, My demand
learnEnglishWords(word0.original, word0.translation, word0, word1, word2);
learnEnglishWords(word1.original, word1.translation, word0, word1, word2);
learnEnglishWords(word2.original, word2.translation, word0, word1, word2);

// GPT Code
// learnEnglishWords(word0.original, word0.translation, { word0, word1, word2 });
// learnEnglishWords(word1.original, word1.translation, { word0, word1, word2 });
// learnEnglishWords(word2.original, word2.translation, { word0, word1, word2 });

// learnEnglishWords(word0, word0, { word0, word1, word2 });
// learnEnglishWords(word1, word1, { word0, word1, word2 });
// learnEnglishWords(word2, word2, { word0, word1, word2 });

learnWords();
