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

// 13,14/04/24
// Продолжил смотреть В. Д. В.-а НО
// услышал про "СЕКУНДОМЕР" в Про.-е --- опять остановился ---
// Расспросил у ДжиПиТи  -- Как его сделать --- Скопипастил этот К. себе в Про.-у,
// потестил    а потом ещё узнал у ДжиПиТи --- как сделать так ----
// чтобы НЕ вызывать Ф.
//    learnEnglishWords(word0.original, word0.translation, word0, word1, word2);
// Трижды --- или Более Раз ---
// ДжиПиТи мне опять Написал К. --- я --- опять же --- Скопипастил его Себе
// Скопировал оба файла ('html' and 'js') в новые --- чтобы дальше
// Рефакторить К. с Димычем --- а вся Предыдущая версия К.-а --- Сохранилась.

// Сейчас Закоммитчу все изменения    и   дальше "пойду" заниматься - опять - по В. Димыча

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

const hintPromptEnglish = 'Enter a word in Russian!';
const hintPromptRussian = 'Enter the word in English!';

// 12/04/24
// Переделываю К. за Димычем
const checkingMessage = {
  correct: 'Correct answer!',
  incorrect: 'False ((',
};

// 10/04/24
// 12/04/24
// Переделываю К. за Димычем

// 14/04/24
// Переделываю К. за Димычем
//   Убираю let ставлю (Вместо Неё) const
//   т.к. мы изменяем НЕ сам Об. --- А ИЗМЕНЯЕМ его З.-я !!!!!
// --- ПереПрисваиваем НЕ целиком Об. -- А его З.

//   let changingSettings = {
const changingSettings = {
  learnWordPrompt: null, // 14/04/24
  numberAnswersCorrect: 0,
  interestСalculation: null, // работает и  так и
  interestСalculation: 0, //  и  так
  correctAnswersPercentage: null, // работает и  так и
  correctAnswersPercentage: 0, //  и  так
};

// 12/04/24
// Переделываю К. за Димычем
const programSetting = {
  numberCompare: 50,
  numberTotalAnswers: 3,
};

// 11/04/24
// 12/04/24
// Переделываю К. за Димычем
const resultMessage = {
  encouragement: 'Work hard and try harder',
  praise: 'Well done!!',
};

const additionalSettings = {
  interestMessage: 'The number of your correct answers is ',
  percentIcon: '%',
};

///////

// C.B.

//  Function Initialization bloc

// Вариант Ф.-и для Об.-в!

// let startTime;
// function startStopwatch() {
//   startTime = new Date();
// }
// function stopStopwatch() {
//   const stopTime = new Date();
//   const elapsedTime = stopTime - startTime;
//   const minutes = Math.floor(elapsedTime / 60000); // Convert milliseconds to minutes
//   const seconds = Math.floor((elapsedTime % 60000) / 1000); // Convert remaining milliseconds to seconds
//   alert(`Stopwatch stopped.\nElapsed time: ${minutes} minutes ${seconds} seconds.`);
// }

// function learnEnglishWords(learnWord1, learnWord2, words) {

//   alert(learnWord1);

//   if (!startTime) {
//     startStopwatch(); // Start the stopwatch before the first alert
//   }

//   let hintPrompt;

//   const learnWordPrompt = prompt(hintPrompt);
//   if (learnWordPrompt !== learnWord2) {
//     alert(checkingMessage.incorrect);
//     alert(changingSettings.numberAnswersCorrect);
//     alert(learnWordPrompt);
//     alert(learnWord2);
//   } else {
//     alert(checkingMessage.correct);
//     changingSettings.numberAnswersCorrect =
//       changingSettings.numberAnswersCorrect + 1;
//     alert(changingSettings.numberAnswersCorrect);
//   }
// }

// function learnWords() {
//   changingSettings.interestСalculation =
//     // 12/04/24
//     // Переделываю К. за Димычем
//     (changingSettings.numberAnswersCorrect /
//       programSetting.numberTotalAnswers) *
//     100;
//   // 13/04/24
//   // Переделываю К. за Димычем
//   changingSettings.correctAnswersPercentage =
//     additionalSettings.interestMessage +
//     Math.round(changingSettings.interestСalculation) +
//     additionalSettings.percentIcon;
//   alert(changingSettings.correctAnswersPercentage);
//   if (changingSettings.interestСalculation <= programSetting.numberCompare) {
//     alert(resultMessage.encouragement);
//   } else {
//     alert(resultMessage.praise);
//   }
// }

// function learnWords() {
//   stopStopwatch(); // Stop the stopwatch after the last prompt
// }

// // Function Call block

// // My Code, My demand
// learnEnglishWords(word0.original, word0.translation, word0, word1, word2);
// learnEnglishWords(word1.original, word1.translation, word0, word1, word2);
// learnEnglishWords(word2.original, word2.translation, word0, word1, word2);

// learnWords();

// Stopwatch function
let startTime;
function startStopwatch() {
  startTime = new Date();
}

function stopStopwatch() {
  const stopTime = new Date();
  const elapsedTime = stopTime - startTime;
  const minutes = Math.floor(elapsedTime / 60000); // Convert milliseconds to minutes
  const seconds = Math.floor((elapsedTime % 60000) / 1000); // Convert remaining milliseconds to seconds
  alert(
    `Stopwatch stopped.\nElapsed time: ${minutes} minutes ${seconds} seconds.`
  );
}

// Вариант Ф.-и для Об.-в!

function learnEnglishWords(wordsArray) {
  if (!startTime) {
    startStopwatch(); // Start the stopwatch before the first alert
  }

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    // alert(word.original);

    // 14/04/24
    // const learnWordPrompt = prompt();         Меняю П.-ю на Сво-во из Об.-а

    // 15/04/24
    // changingSettings.learnWordPrompt = prompt(); // так - как я делал с Самого Начала *Сам*
    // changingSettings.learnWordPrompt = prompt('Hello!!', 'Hello!');  // пробую/вспоминаю
    changingSettings.learnWordPrompt = prompt(word.original); // так - как делает Димыч
    if (changingSettings.learnWordPrompt !== word.translation) {
      alert(checkingMessage.incorrect);
      alert(changingSettings.numberAnswersCorrect);
      alert(changingSettings.learnWordPrompt);
      alert(word.translation);
    } else {
      alert(checkingMessage.correct);
      changingSettings.numberAnswersCorrect =
        changingSettings.numberAnswersCorrect + 1;
      alert(changingSettings.numberAnswersCorrect);
    }
  }
}

function learnWords() {
  stopStopwatch(); // Stop the stopwatch after the last prompt
}

// Function Call block

// My Code, My demand
const wordsArray = [word0, word1, word2];

learnEnglishWords(wordsArray);

learnWords();

function learnWords1() {
  changingSettings.interestСalculation =
    // 12/04/24
    // Переделываю К. за Димычем
    (changingSettings.numberAnswersCorrect /
      programSetting.numberTotalAnswers) *
    100;
  // 13/04/24
  // Переделываю К. за Димычем
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

learnWords1();
