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

// Прежде чем Коммитить и писать К. дальше самому
// ---- Укрупнять Об.-ы - увеличивать Вложенность -- и Создавать Один Г.Об. *попытаться*
// -- я Поудаляю избыточные (лишние) комментарии из JS-файла

// 17,18/04/24
// Сперва поУкрупнял уже Имеющиеся Об.-ы  (П.-х в К.-е у меня уже Больше НЕТ --- есть только Сво-ва Об.-в - их Сво-ва - Об.-ы -- и их З.-я)
// Сделал СЛИЯНИЕ Нескольких Об.-в посоздавав Общие для них Об.-ы
// ---
// Потом - когда у меня осталось объекта 3 или 4 - я Объединил их Все в Один Общий Об.
// --
// конечно же К. в Ф.-ях при этом Увеличился/Удлинился - каждая строка Стала Длиннее
// -- и возможно - Димыч дальше будет делать (в Своём В.) --- совсем не так.....
// ---
// НО - Всё РАВНО ---- я попробовал и поэксперементировал

// Теперь закаммитчу Изменения, --- Потом - Поудаляю лишние комментарии
// и Ещё Раз Закоммитчу

// Уже после -- сделаю новые файлы для работы - продолжения - с Димычем --
// скопирую туда К. с предыдущих файлов    и буду Дальше Смотреть/Делать Ур.



// 23/04/24
// Смотрю/делаю 12й Ур. Димыча (у него он, почему-то 17й) про Ма.-ы
// Дошёл до 41й минуты, где он собрался Рифакторить нашу Про.-у
// "Изучение/Тренировка Иностранных Слов"
// заменяя (в каких-то местах) Об.-ы на Ма.-ы
// ----
// я - сперва -- попробую Зарифакторить - САМОСТОЯТЕЛЬНО

////////////////////
////////////////////

// 23/04/24
// Рефакторю Про.-у
// --- Буду Пробовать -- вместо одного Большого Об.-а
// -- создать один большой Ма.
//    (а помом хочу Внутри него -- заменить Крупные Об.-ы на Ма.-ы)
// ---
// Всё получилось --- с ОДНИМ КРУПНЫМ М.ОДНИМ
// ---
// теперь создал два новых Ф.-а чтобы там перенести -- внутри этого Ма.-а --
// Об.-ы - Крупные - Переделать в Ма.-ы

////////////////////
////////////////////
////////////////////

// Проверка подключения этого js-file к html
// alert('Hi, Friends!!');

//////////////////
//////////////////
//////////////////

// I.B.

// 18/04/24
// Переделываю К. ---- буду Засовывать Все (Уже Укрупнённые) Об.-ы ----
// --- в ОДИН Большой



// const oneBigObject = {
const oneBigArray = [
  {
    allWords: {
      numberTotalWords: 3,
      // numberTotalAnswers: 3,   меняю название на Более Подходящее
    },
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

  // const hintPromptEnglish = 'Enter a word in Russian!';
  // const hintPromptRussian = 'Enter the word in English!';

  {
    checkingMessage: {
      correct: 'Correct answer!',
      incorrect: 'False ((',
    },
    userMessages: {
      start: {
        firstMessage: 'Our training/study begins!  Please be attentive!',
      },
      result: {
        encouragement: 'I know - you are trying, but try More and More )',
        praise: 'Well done!!',
      },
    },
  },

  {
    changingSettings: {
      learnWordPrompt: null, // 14/04/24
      numberAnswersCorrect: 0,
      interestСalculation: null, // работает и  так и
      interestСalculation: 0, //  и  так
      correctAnswersPercentage: null, // работает и  так и
      correctAnswersPercentage: 0, //  и  так
    },
    programSetting: {
      numberCompare: 50,
    },
    additionalSettings: {
      interestMessage: 'The number of your correct answers is ',
      percentIcon: '%',
    },
  },
];

console.log(oneBigArray);

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
  alert(oneBigArray[1].userMessages.start.firstMessage);
  if (!startTime) {
    startStopwatch(); // Start the stopwatch before the first alert
  }

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    oneBigArray[2].changingSettings.learnWordPrompt = prompt(word.original); // так - как делает Димыч
    if (oneBigArray[2].changingSettings.learnWordPrompt !== word.translation) {
      alert(oneBigArray[1].checkingMessage.incorrect);
      alert(oneBigArray[2].changingSettings.numberAnswersCorrect);
      alert(oneBigArray[2].changingSettings.learnWordPrompt);
      alert(word.translation);
    } else {
      alert(oneBigArray[1].checkingMessage.correct);
      oneBigArray[2].changingSettings.numberAnswersCorrect =
        oneBigArray[2].changingSettings.numberAnswersCorrect + 1;
      alert(oneBigArray[2].changingSettings.numberAnswersCorrect);
    }
  }
}

function learnWords() {
  stopStopwatch(); // Stop the stopwatch after the last prompt
}

// Function Call block

// const wordsArray = [word0, word1, word2];
const wordsArray = [
  oneBigArray[0].word0,
  oneBigArray[0].word1,
  oneBigArray[0].word2,
  //   oneBigObject.words.word0,
  //   oneBigObject.words.word1,
  //   oneBigObject.words.word2,
];

learnEnglishWords(wordsArray);

learnWords();

function learnWords1() {
  oneBigArray[2].changingSettings.interestСalculation =
    (oneBigArray[2].changingSettings.numberAnswersCorrect /
    oneBigArray[0].allWords.numberTotalWords) *
    100;

  oneBigArray[2].changingSettings.correctAnswersPercentage =
    oneBigArray[2].additionalSettings.interestMessage +
    Math.round(oneBigArray[2].changingSettings.interestСalculation) +
    oneBigArray[2].additionalSettings.percentIcon;
  alert(oneBigArray[2].changingSettings.correctAnswersPercentage);
  if (
    oneBigArray[2].changingSettings.interestСalculation <=
    oneBigArray[2].programSetting.numberCompare
  ) {
    alert(oneBigArray[1].userMessages.result.encouragement);
  } else {
    alert(oneBigArray[1].userMessages.result.praise);
  }
}

learnWords1();
