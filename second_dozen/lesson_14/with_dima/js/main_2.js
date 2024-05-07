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
    russianWord:
      'Своїх головних цілей у навчанні та роботі я досягну до кінця року!',
    englishWord:
      'I will achieve my main goals in study and work by the end of the year!',
  },
  {
    russianWord: 'Ноутбук',
    englishWord: 'Laptop',
  },
  {
    russianWord: 'Ты - надёжный друг',
    englishWord: 'You are a reliable friend',
  },
  {
    russianWord: 'Дождь льёт как из ведра',
    englishWord: 'The rain is pouring down like a bucket',
  },
  {
    russianWord: 'Экран',
    englishWord: 'Screen',
  },
  {
    russianWord: 'Увлекательный',
    englishWord: 'Fascinating',
  },
  {
    russianWord: 'Він дуже ненадійна людина',
    englishWord: 'He is a very unreliable person',
  },
  {
    russianWord: 'Гладить погладить ласкать',
    englishWord: 'Stroke',
  },
];

const arrayWordsUnlearned = [];
const arrayAnswersIncorrect = [];

// Переношу П.-ю  в --- Ма. Об.-в
// let usingPrompt = null;

const settings = [
  { usingPrompt: null },
  {
    numberAnswersCorrect: 0,
    numberAnswersIncorrect: 0,
  },
  { numberToCompare1: 50, numberToCompare2: 75 },
];

const arrayMessages = [
  { messageWelcome: 'Lets start training! Please be careful.' },
  { messageCorrect: 'Right!', messageIncorrect: 'Mistake' },
  {
    messageCorrectAnswers: null,
    messageIncorrectAnswers: null,

    messageAnswersPercents: null,
  },
  {
    messageAboutResults1: 'The number of your Correct answers is ',
    messageAboutResults2: ' out of ',
    messageAboutResults3: 'The number of Incorrect answers: ',
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

  for (let i = 0; i < russianEnglishWords.length; i = i + 1) {
    let rusWord = russianEnglishWords[i].russianWord;
    let engWord = russianEnglishWords[i].englishWord;

    settings[0].usingPrompt = prompt(rusWord);
    if (settings[0].usingPrompt !== engWord) {
      alert(arrayMessages[1].messageIncorrect); // 'mistake'
      alert(settings[1].numberAnswersCorrect); // alert counter
      alert(settings[0].usingPrompt); // current answer
      alert(engWord); // correct answer
      // 5/04/24
      arrayAnswersIncorrect.push(settings[0].usingPrompt); // current answer
      arrayWordsUnlearned.push(russianEnglishWords[i].englishWord); // correct answer
      settings[1].numberAnswersIncorrect++; // counter correct
    } else {
      alert(arrayMessages[1].messageCorrect); // 'right'
      settings[1].numberAnswersCorrect++; // counter correct
      alert(settings[1].numberAnswersCorrect); // alert counter
    }
  }
  // End of cycle execution

  // Show a message with the number of Correct answers
  arrayMessages[3].messageCorrectAnswers =
    arrayMessages[3].messageAboutResults1 +
    settings[1].numberAnswersCorrect +
    arrayMessages[3].messageAboutResults2 +
    russianEnglishWords.length;
  alert(arrayMessages[3].messageCorrectAnswers);

  // Show a message with the number of Incorrect answers
  arrayMessages[3].messageIncorrectAnswers =
    arrayMessages[3].messageAboutResults3 + settings[1].numberAnswersIncorrect;
  alert(arrayMessages[3].messageIncorrectAnswers);

  // calculation of results
  arrayMessages[5].resultTraining = Math.round(
    (settings[1].numberAnswersCorrect / russianEnglishWords.length) * 100
  );

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

// // //

document.write('<br>');

if (arrayWordsUnlearned.length > 0) {
  // name of the list
  document.write('The words - which were translated incorrectly:');
  document.write('<br>');
  document.write('<br>');

  // Cycle for incorrectly entered words by the user
  for (let i = 0; i < arrayWordsUnlearned.length; i++) {
    document.write(i + 1, ' - ', arrayWordsUnlearned[i], '<br>');
  }
}

document.write('<br>');
document.write('<br>');

// name of the list
document.write('The translation you entered:');
document.write('<br>');
document.write('<br>');

// A loop for a list of incorrectly translated words

for (let i = 0; i < arrayAnswersIncorrect.length; i++) {
  document.write(i + 1, ' - ', arrayAnswersIncorrect[i], '<br>');
}

/// /// /// ///

// Вспомогательное

console.log(russianEnglishWords);

console.log(arrayMessages);
console.log(settings);
