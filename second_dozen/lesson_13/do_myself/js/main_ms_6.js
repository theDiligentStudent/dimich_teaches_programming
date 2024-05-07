// 29/04/24

// Сегодня буду - ПРОБОВАТЬ - использовать Ц. ----
// ---- в Про.-е Димыча
// Уже самостоятельно.
// Наверное начну от самого простого -- посмотрю Как будет Получаться -- и тогда -- буду двигаться дальше

// 1/05/24
// Перед этим написал Про.-мку
// с Ма.-м - Двумя Ма.-ми внутри и Ц.-м
// но Ц. получился какой-то - Кривой -
// Самостоятельно - у меня исправить - НЕ получается -- сейчас попробую написать К. -
// чтобы в Ма.-е были НЕ Ма.-вы а Об.-ы  ---- с парами - английское - русское слова
// (так - как писал свою Про.-у Димыч)

// 2/05/24
// Частично написал Про.-ку Димыча по изучению слов - так --
// как он делает -- пара слов: русское - английское - это Один Об.
// - вторая пара - второй Об. -- и т.д.
// -- Поместил эти пары в Ма. (один, общий)
// -- и делаю запуск этой Про.-ы через -- Ц --,
// который поместил -- во Внутрь -- Ф.-и --
// ----
// Теперь надо Закоммитить все изменения
// (т.к. у меня их Очень много -- работаю на 13м Ур. Димыча /про Ц.-ы/
// во многих папках и файлах -- и с Ним и Самостоятельно)
// -- и буду Двигаться Дальше --- хочу Добавить в эту Про.-ку --
// все те Ф.-и, которые были в ней - Раньше
// --- т.е. те из них - которые я смог сделать Самостоятельно

// 3/05/24
// Сегодня закончил писать Про.-ку Димыча 
// --- Полностью и Целиком ---
// Сделал ВСЁ, что Планировал.
// -- Она делает и выполняет - кажется ВСЁ --- что делала и выполняла 
// --- моя Первая Про.-ка (из 6го Ур.-а "Сложная Про.")
// ---
// Теперь - Скопипастю весь этот К. в Фа.-ы для работы с Димой
// -- и буду Досматривать его Ур. про Ц.-ы  /c 58й минуты/

// // // // //

// String to check JS-file connection
// alert('HelIo everyone!');

// // // // //

// I. B.

const russianEnglishWords = [
  {
    russianWord: 'Надёжный',
    englishWord: 'Reliable',
  },
  {
    russianWord: 'Захватывающий',
    englishWord: 'Exciting',
  },
  {
    russianWord: 'Увлекательный',
    englishWord: 'Fascinating',
  },
  {
    russianWord: 'Гладить погладить ласкать',
    englishWord: 'Stroke',
  },
];

// Переношу П.-ю  в --- Ма. Об.-в
// let usingPrompt = null;

const settings = [
  { usingPrompt: null },
  {
    numberAnswersCorrect: 0,
  },
  { numberToCompare1: 50, numberToCompare2: 75 },
];

// Переношу П.-е с их З.-ми в --- Ма. Об.-в
// // const correctMessage = 'right';
// const correctMessage = 'Right!';
// // const incorrectMessage = 'wrong';
// const incorrectMessage = 'Mistake';

const arrayMessages = [
  { messageWelcome: 'Lets start training! Please be careful.' },
  { messageCorrect: 'Right!', messageIncorrect: 'Mistake' },
  {
    messageCorrectAnswers: null,
    messageAnswersPercents: null,
  },
  {
    messageAboutResults1: 'The number of your correct answers is ',
    messageAboutResults2: ' out of ',
  },
  {
    resultInPercent: 'The percentage of your correct answers is: ',
    percentIcon: '%',
  },
  {
    resultTraining: null,
  },
];

// // // // //

// C. B.

function learnWords() {
  // We show a welcome message
  alert(arrayMessages[0].messageWelcome);

  // Start of cycle execution
  for (let i = 0; i < russianEnglishWords.length; i = i + 1) {
    let rusWord = russianEnglishWords[i].russianWord;
    let engWord = russianEnglishWords[i].englishWord;

    settings[0].usingPrompt = prompt(rusWord);
    if (settings[0].usingPrompt !== engWord) {
      alert(arrayMessages[1].messageIncorrect); // 'mistake'
      alert(settings[1].numberAnswersCorrect); // alert counter
      alert(settings[0].usingPrompt);
      alert(engWord);
    } else {
      alert(arrayMessages[1].messageCorrect); // 'right'
      settings[1].numberAnswersCorrect = settings[1].numberAnswersCorrect + 1; // counter
      alert(settings[1].numberAnswersCorrect); // alert counter
    }
  }
  // End of cycle execution

  // Show a message with the number of correct answers
  arrayMessages[3].messageCorrectAnswers =
    arrayMessages[3].messageAboutResults1 +
    settings[1].numberAnswersCorrect +
    arrayMessages[3].messageAboutResults2 +
    russianEnglishWords.length;
  alert(arrayMessages[3].messageCorrectAnswers);

  // calculation of results
  arrayMessages[5].resultTraining =
    (settings[1].numberAnswersCorrect / russianEnglishWords.length) * 100;

  // Show the percentage of correct answers
  arrayMessages[4].messageAnswersPercents =
    arrayMessages[4].resultInPercent +
    arrayMessages[5].resultTraining +
    arrayMessages[4].percentIcon;
  alert(arrayMessages[4].messageAnswersPercents);


  // check the results
  if (arrayMessages[5].resultTraining <= settings[2].numberToCompare1) {
    alert('You tried! But please work even more.');
  } else if (arrayMessages[5].resultTraining <= settings[2].numberToCompare2) {
    alert('You are well done!');
  } else {
    alert('Simply excellent!!');
  }
}

learnWords();

console.log(russianEnglishWords);

console.log(arrayMessages);
console.log(settings);
