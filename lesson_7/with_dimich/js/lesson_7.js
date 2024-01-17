const rusWord0 = 'Принять (мой ответ)'; // 0
const engWord0 = 'Accept (my answer)';

const rusWord1 = 'Определение, определять, устанавливать, решать'; // 1
const engWord1 = 'Determining';

const rusWord2 =
  'Поощрение (к чему-либо), ободрение, подстрекательство, Обнадёживающий'; // 2
const engWord2 = 'Encouraging';

const totalNumberOfWordsStudied = 3;

const textForPromptMessage = 'Enter text in English';

let showWordAcceptAnswer0; // prompt 0
let showWordAcceptAnswer1; // prompt 1
let showWordAcceptAnswer2; // prompt 2

let numberOfCorrectAnswers = 0;

let determiningPercentageOfCorrectAnswers;

const numberToCompareCorrectAnswers = 50;

const messageOfPraise = 'Great!';

const messageEncouragingYouToTry = 'Well done! But try harder!';

let showPercentageOfCorrectAnswers;

// // //
// // //
// // //

showWordAcceptAnswer0 = prompt(rusWord0, textForPromptMessage);

alert(showWordAcceptAnswer0 === engWord0);

if (showWordAcceptAnswer0 === engWord0) {
  numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
  alert(engWord0);
}

showWordAcceptAnswer1 = prompt(rusWord1, textForPromptMessage);
alert(showWordAcceptAnswer1 === engWord1);
if (showWordAcceptAnswer1 === engWord1) {
  numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
  alert(engWord1);
}

showWordAcceptAnswer2 = prompt(rusWord2, textForPromptMessage);
alert(showWordAcceptAnswer2 === engWord2);
if (showWordAcceptAnswer2 === engWord2) {
  numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
} else {
  alert(engWord2);
}

determiningPercentageOfCorrectAnswers = Math.round(
  (numberOfCorrectAnswers / totalNumberOfWordsStudied) * 100
);
if (determiningPercentageOfCorrectAnswers > numberToCompareCorrectAnswers) {
  alert(messageOfPraise);
} else {
  alert(messageEncouragingYouToTry);
}

showPercentageOfCorrectAnswers =
  'The number of your correct answers is ' +
  determiningPercentageOfCorrectAnswers +
  ' %';
alert(showPercentageOfCorrectAnswers);

alert(numberOfCorrectAnswers);
