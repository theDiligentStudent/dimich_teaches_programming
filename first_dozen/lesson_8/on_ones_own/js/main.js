// 24/01/24
// Yesterday закончил смотреть В. Димыча №7 -- про DEBUG
// Сегодня начинаю Переходить к 8-му видео
// с вспоминая Про.-ы из 6го Урока --- опять хочу Сперва написать её по памяти
// Сперва наверное напишу небольшой Псевдокод

// Про.-у написанную на конец занятия Протестил -- Всё Работает

//
// 25/11/24
// Вчера написал Псевдокод -- Самый Основной -- и часть Программного К.-а
// часть (основную) I. B.   и часть (тоже основную)  -- C. B.-а
// сделал три Ф.-и prompt и через alert --- сравнение - true   false.
// Сегодня продолжу писать Про.-у Дальше.

// Про.-у написанную на конец занятия Протестил -- Всё Работает

// 26/01/24
// Сейчас буду Доделывать -- Почти Готовую -- Про.-у,
// последнюю Ф.-у.    Она записана в Псевдокоде под № 6
// ---
// Всё! Закончил!   (и Протестил)

// 27/01/24
// В этом -- 8-м Уроке -- Димыч разбирает Ф.-и
// Сейчас я тоже попробую тоже --- Как Смогу --- максимально Переписать мой К. - Ф.-ми
// --
// Закодировал ---- Вообще Всю ---- Про-у (Все её действия) ---- ЧЕРЕЗ Ф.-и
// (весь тот К., что находится в C. B.)
// Теперь надо Залить Все Изменения на ГитХаб
// и После ---- Вернуться - чтобы Удалить Все (большую часть)
// Комментариев из C. B.    -----    чтобы остался (в Основном) только Чистый К.

// Да!  *чуть НЕ забыл* -- Про.-у протестил -- Всё Работает!!!!

// Залил изменения, вернулся --- поудалял Все Комментарии из C. B.,
// Скомпоновал Все Ф.-и вместе Вверху C. B.
// а все их Вызовы - в остались (вместе) в нижней части C. B.

//
//
// Псевдокод
//
//
// 1.
// Показывать на экране Б.-а Русское слово
//    в строке для ВВода слова Ю.-м показывать надпись:
//    "Введи слово на Английском"
// Принимать ответ от Ю.-а

// 2.
//  Сравнивать ответ введённый Ю.-м с ответом Хранящимся в I. B. Про.-ы (в соответствующей П.-й)
// если ответ Совпадает со З.-м П.-й из I. B. -- показывать сообщение ---- true
// если ответ НЕ совпадает -- показывать ---- false

// 3.
// если ответ Совпадает -- то прибавлять Единицу (начиная от 0-ля) к Количеству Правильных ответов
// Иначе ---- показывать сообщением Правильный ответ

// 4.
// После вывода Всех Слов Для Изучения (когда Основная Про./действия Ю.-а закончены) выводить для Него сообщения с Результатами

// 4.1
// Вывести на Экран Поощрительную Стр.-у.....  либо:
// 4.1.1
// Well done! But try harder....   --- если Правильных ответов либо меньше половины, либо половина.
// 4.1.2
// Great!!  ---  если Правильных ответов больше половины *чем 50%*

// 5.
// Вывести на экран сообщение --- The number of your correct answers is 50%
// -- или Сколько там будет процентов
// Их (%-ы) надо будет Высчитать и Вставить в эту Стр.-у сообщения

// 6.
// Вывести на экран сообщение -- The number of your correct answers is 4 out of 6
// 4 из 6ти   или сколько там наберётся
//
//
//
// В скопированный Псевдокод буду постепенно вставлять Стр.-и Про.-ы
//
// I. B.
//

// 1.
let englishWord0 = 'Achieve'; // 0
let russianWord0 = 'Добиваться, достигать';

let englishWord1 = 'Additionally'; // 1
let russianWord1 = 'Кроме того, дополнительно, сверх того';

let englishWord2 = 'Actually'; // 2
let russianWord2 = 'Фактически';

// 25/01/24
// 3.
const totalNumberOfWordsStudied = 3;

let showWordAcceptAnswer0;
let showWordAcceptAnswer1;
let showWordAcceptAnswer2;

// const phraseInsidePrompt = 'Enter words in Russian';
// меняю название П.-й на, как мне кажется -- более соответствующее
const tooltipPromptText = 'Enter words in Russian';

// 25/01/24
// 3.
let totalNumberOfCorrectAnswers = 0;

// 25/01/24
// 4.

// 4.1.1
const messageOfCompleteEncouragement = 'Great!!';

// 4.1.2
const messageEncouragingYouToTryHarder = 'Well done! But try harder....';

let percentageOfCorrectAnswers;

const numberToCompareAnswers = 50;

// 25/01/24
// 5.
const messageAboutPercentCorrectAnswers = 'The number of your correct answers';

// 26/01/24
const percentIcon = ' %';

// 6.
// 26/01/24
const correctAnswersFrom = 'Your correct answers are ';

//
//
// C. B.
//

// 27/01/24
// Попробую Заменить три операции ниже - с prompt-ами ОДНОЙ Ф.-ей
// и потом Вызывать её Три раза со своими Пар.-ми

// Сделал ОТДЕЛЬНЫЙ Б.К.-а для --
// -- ОБЪЯВЛЕНИЯ Ф.-й
// и ОТДЕЛЬНЫЙ (ниже) для ---
// их ВЫЗОВА

function mainOperationInTheProgram(englishWord, russianWord) {
  let showWordAcceptAnswer;
  showWordAcceptAnswer = prompt(englishWord, tooltipPromptText);
  alert(russianWord === showWordAcceptAnswer);
  if (russianWord === showWordAcceptAnswer) {
    totalNumberOfCorrectAnswers = totalNumberOfCorrectAnswers + 1;
  } else {
    alert(russianWord);
  }
}

function calculatingInterest() {
  percentageOfCorrectAnswers = Math.round(
    (totalNumberOfCorrectAnswers / totalNumberOfWordsStudied) * 100
  );
}

function forFinalMassage1() {
  if (percentageOfCorrectAnswers > numberToCompareAnswers) {
    alert(messageOfCompleteEncouragement);
  } else {
    alert(messageEncouragingYouToTryHarder);
  }
}
//
//
// Б.К.-а для --- ВЫЗОВА Ф.-й

mainOperationInTheProgram(englishWord0, russianWord0);
mainOperationInTheProgram(englishWord1, russianWord1);
mainOperationInTheProgram(englishWord2, russianWord2);

calculatingInterest();

forFinalMassage1();

const finalMessage2 =
  messageAboutPercentCorrectAnswers +
  ' ' +
  percentageOfCorrectAnswers +
  percentIcon;

const finalMessage3 =
  correctAnswersFrom +
  totalNumberOfCorrectAnswers +
  ' out of ' +
  totalNumberOfWordsStudied;

alert(finalMessage2);
alert(finalMessage3);
