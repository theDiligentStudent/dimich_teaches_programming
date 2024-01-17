// 11/01/24
// Today I начинаю учить 7е В. из курса Димыча
// НО
// начинаю учить САМОСТОЯТЕЛЬНО
// ---- Для Этого -- я попытаюсь По Памяти
// -- написать Всю Про.-у из 6го урока Целиком --- сколько смогу. ...... Поехали!!!!
// Сегодня начал писать ПСЕВДОКОД для этой моей/Димыча Про.-ы..... - Закончить НЕ успел....
// 12/01/24
// Попробую дальше писать ПСЕВДОКОД для Про.-ы из 6го урока Димыча. -- Кажется написал...
// Теперь начинаю писать Саму Про.-у
// 13/01/24
// Продолжаю писать Про.-у Димыча из урока №6 -- повторяю -- хочу Всё написать /по памяти/ САМОСТОЯТЕЛЬНО
// 11,12/01/24 - написал (опять же - как Смог) - Сперва - ПсевдоКод
// теперь на основе/превращая его в комментарии - пишу Сам К.
// начал вчера. Сегодня буду продолжать -- Но - Вря ли закончу....
// 14/01/24
// Продолжаю писать про.-у Димыча по Памяти
// Вчера закончил выводить на экран все слова с помощью prompt-ов
// сегодня иду Дальше
// 17/01/24
// Доделал Про.-у Димыча (из 6го урока) ДО Конца.
// Всё проверил. Всё протестировал.
// Теперь перенесу весь html-и-js К. -- в папку с файлами - для работы уже по 7-му В. Димыча
// Все комментарии из Новых html и js-файлов (комментарии из К.-а) поудаляю.
// Оставлю только К. Самой Про.-ы   /практически все/
//
//
//
// 11/01/24

// Разделить Про.-у на ДВЕ Части

// // //

// создать  I. B. - для ввода и Инициализации П.-х --- для Д.-х  // 12/01/24

// создать три Блока с 2мя const-П.-ми в Каждом Блоке -- рус., англ. слово
const rusWord0 = 'Принять (мой ответ)'; // 0
const engWord0 = 'Accept (my answer)';

const rusWord1 = 'Определение, определять, устанавливать, решать'; // 1
const engWord1 = 'Determining';

const rusWord2 =
  'Поощрение (к чему-либо), ободрение, подстрекательство, Обнадёживающий'; // 2
const engWord2 = 'Encouraging';

// Создать Специальную для prompt с надписью Внутри
const textForPromptMessage = 'Enter text in English';

// 17/01/24
// Случилось то, о чём говорил Димыч
//  (в конце своего Курса JS ваще с нуля, в видео про Слайдер),
// что когда пишешь ПсевдоКод -- просто НЕвозможно -- продумать -- Всё Сразу
// и точно -- я  ЗАБЫЛ ПРО П.-ю с общим Кол-вом изучаемых слов, так что --- ввожу её в свой К. сейчас
// (а ещё Забыл -- определить в const-П.-й для сравнения результата с Конкретным Числом --- Число 50 /в отдельную П.-ю/)
const totalNumberOfWordsStudied = 3;

//  1.1 Создать Три П.-х для prompt-ов    // 12/01/24
let showWordAcceptAnswer0;
let showWordAcceptAnswer1;
let showWordAcceptAnswer2;

// 3.1.1
// создать let Variable numberOfCorrectAnswers с Первоначальным З.-м = 0
let numberOfCorrectAnswers = 0;

// 4.1
// Создать П.-ю let  -- determining -- the percentage of correct answers
// /З. которой будет определено в C. B.   перед выполнением действий с ней/
let determiningPercentageOfCorrectAnswers;

// 17/01/24
// а ещё Забыл -- определить в const-П.-й для сравнения результата с Конкретным Числом --- Число 50 /в отдельную П.-ю/
const numberToCompareCorrectAnswers = 50;

// 4.2
// Создать П.-ю  const - для Сообщения в Диалоговом Окне = Great
// message of praise
const messageOfPraise = 'Great!';

// 4.3
// Создать П.-ю  const -  для Сообщения в Диалоговом Окне = Well done! But try harder!
// message encouraging you to try
const messageEncouragingYouToTry = 'Well done! But try harder!';

// 5.1
// Создать П.-ю let -- show -- percentage of correct answers
// /З. которой, также, будет определено в C. B.   перед выполнением действий с ней/
let showPercentageOfCorrectAnswers;

// // //
// // //
// // //

// создать C. B. -- в котором будет производиться вся Работа и Опе.-и с Д.-ми

// 1.
//  Показывать Русское слово и принимать ответ от Изучающего (По.-я Про.-ы)
//   Создать П.-ю -- сейчас ТРИ --- точнее -- я её Уже Создал в --  I. B --
// Теперь нужно З. ей присвоить -- (здесь)
//  для последующего присвоения З.-я prompt (рус. слово, "Введите слово на Английском")
//    Введённое Ю.-м З. присвоить П.-й
showWordAcceptAnswer0 = prompt(rusWord0, textForPromptMessage);

// 14/01/24
// Теперь нужно Сравнить Полученное от Ю.-а З. со З.-м указанным в Про.-е

// 2.
// Сравнивать ответ Ю.-а с ответом из (скрытых) Д.-х Про.-ы
// (и получить -- вывести на Экран ----  Либо true - Либо false)
alert(showWordAcceptAnswer0 === engWord0);

//  3. Создать Ветвление в Про.-е - Вилку/Развилку:

// 3.1 Если ответ Ю.-а совпадает с записанным в Про.-е/с Правильным --  показывать true и
//  Прибавлять к Каждому такому ответу 1
// 17/01/24
if (showWordAcceptAnswer0 === engWord0) {
  numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
}
// 3.2
// Если ответ НЕ совпадает/НЕправильный -- показывать false
// и
// Показывать в диалоговом окне Правильный вариант
else {
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

// 4.
//  После Показа/Проверки - Изучения Всех слов:
//   выдавать Сообщения  --  Great - если Правильных ответов Больше 50%
//     и Well done! But try harder! -- если Правильных ответов Меньше 50%
// 17/01/24
// Присвоить З. Пр.-й determiningPercentageOfCorrectAnswers
determiningPercentageOfCorrectAnswers = Math.round(
  (numberOfCorrectAnswers / totalNumberOfWordsStudied) * 100
);
if (determiningPercentageOfCorrectAnswers > numberToCompareCorrectAnswers) {
  alert(messageOfPraise);
} else {
  alert(messageEncouragingYouToTry);
}

// 5.
//  Показывать сообщением - Результат Правильных ответов в %
// 17/01/24
showPercentageOfCorrectAnswers =
  'The number of your correct answers is ' +
  determiningPercentageOfCorrectAnswers +
  ' %';
alert(showPercentageOfCorrectAnswers);

// 6. Показывать сообщением Количество /цифрой/ правильных ответов
// 17/01/24
alert(numberOfCorrectAnswers);
