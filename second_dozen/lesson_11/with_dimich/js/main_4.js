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

// 15/04/24 ---- сделал относительно небольшие и незначительные изменения ---  поудалял лишние комментарии

// 16/04/24
// Дошёл почти до 42й минуты Ур.-а
// Димыч опять начинает рефакторить К. ---- поэтому я опять ----
// --- Прежде, чем продолжать --- возьму и Сохраню/Закоммитчу -- все Изменения

// 18/04/24
// Поработал над Про.-й Дальше САМ -- сделал Всё, что задумал (с Об.-ми) --- всё Получилось
// ---
// Теперь Скопировал К. из файлов  'index_3.html' and 'main_3.js'  Сюда
// чтобы "Старый" К. Сохранился, а над новым работать с Димычем дальше в Новых файлах

////////////////////
////////////////////
////////////////////

// Проверка подключения этого js-file к html
// alert('Hi, Friends!!');

//////////////////
//////////////////
//////////////////

// I.B.

// const words = {
//   numberTotalAnswers: 3,

// 19/04/24
// Рефакторю этот Об. - следом за Димычем
//   word0: {
//     original: 'Reliable',
//     translation: 'Надёжный  достойный доверия  солидный',
//   },
//   word1: {
//     original: 'Wire',
//     translation: 'Провод струна трос',
//   },
//   word2: {
//     original: 'Transfer',
//     translation: 'Передача перевод перенос',
//   },
// };

const englRusVocabulary = {
  numberTotalAnswers: 3,

  words: {
    word0: {
      original: 'Reliable',
      translation: 'Надёжный  достойный доверия  солидный',
    },
    word1: {
      original: 'Wire',
      translation: 'Провод струна трос',
    },
    word2: {
      original: 'Transfer',
      translation: 'Передача перевод перенос',
    },
  },
};

const hintPromptEnglish = 'Enter a word in Russian!';
const hintPromptRussian = 'Enter the word in English!';

const checkingMessage = {
  correct: 'Correct answer!',
  incorrect: 'False ((',
};
const userMessages = {
  start: {
    firstMessage: 'Our training/study begins!  Please be attentive!',
  },
  result: {
    encouragement: 'I know - you are trying, but try More and More )',
    praise: 'Well done!!',
  },
};

const changingSettings = {
  learnWordPrompt: null, // 14/04/24
  numberAnswersCorrect: 0,
  interestСalculation: null, // работает и  так и
  interestСalculation: 0, //  и  так
  correctAnswersPercentage: null, // работает и  так и
  correctAnswersPercentage: 0, //  и  так
};

const programSetting = {
  numberCompare: 50,
};

const additionalSettings = {
  interestMessage: 'The number of your correct answers is ',
  percentIcon: '%',
};

///////

// C.B.

//  Function Initialization block

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

function learnEnglishWords(wordsArray) {
  alert(userMessages.start.firstMessage);
  if (!startTime) {
    startStopwatch(); // Start the stopwatch before the first alert
  }

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    //  Закомментированная Стр. К.-а ниже - это -  Стр. с "Ош.-й"
    //   в Кавычках -- потому - что сама Про. -- НЕ -- ломается, а просто  Работает Дальше,
    // (сама Ош. в слове "originals")
    //   НО -- уже НЕ корректно  --- её Р. -- это undefined  (это в Debug-er)
    // а в Б.-е  ---  нам НЕ показывается Подсказка из prompt-а
    // (Ош. Опечатки)

    // changingSettings.learnWordPrompt = prompt(word.originals); // так - как делает Димы

    changingSettings.learnWordPrompt = prompt(word.original); // так - как делает Димыч
    if (changingSettings.learnWordPrompt !== word.translation) {
      alert(checkingMessage.incorrect);

      // Точно также
      //  Закомментированная Стр. К.-а ниже - это -  Стр. с "Ош.-й"
      //   в Кавычках -- потому - что сама Про. -- НЕ -- ломается, а просто  Работает Дальше,
      //   НО -- уже НЕ корректно  --- её Р. -- это undefined  (это в Debug-er) (вместо Ч.-а)
      // а в Б.-е  ---  нам НЕ показывается Стр. с Количество Правильных (в данный момент) ответов
      // вместо этого Показывается (в alert) undefined
      // (Ош. Опечатки)        (сама Ош. в слове "numbers" --  numbersAnswersCorrect)

      // alert(changingSettings.numbersAnswersCorrect);

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

// const wordsArray = [word0, word1, word2];
const wordsArray = [
  englRusVocabulary.words.word0,
  englRusVocabulary.words.word1,
  englRusVocabulary.words.word2,
];

learnEnglishWords(wordsArray);

learnWords();

function learnWords1() {
  changingSettings.interestСalculation =
    (changingSettings.numberAnswersCorrect /
      englRusVocabulary.numberTotalAnswers) *
    100;

  changingSettings.correctAnswersPercentage =
    additionalSettings.interestMessage +
    Math.round(changingSettings.interestСalculation) +
    additionalSettings.percentIcon;
  alert(changingSettings.correctAnswersPercentage);
  if (changingSettings.interestСalculation <= programSetting.numberCompare) {
    alert(userMessages.result.encouragement);
  } else {
    alert(userMessages.result.praise);
  }
}

learnWords1();
