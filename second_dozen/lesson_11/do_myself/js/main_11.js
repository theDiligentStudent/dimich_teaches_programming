// 8/04/24
// Продолжаю делать 11й /у Димыча он 15й/ Ур. -- Об.-ы

// Сейчас иду с 26-й минуты ---- Д. В. собирается ----
// -- модернизировать Про.-у "Переводчик" --- для Изучения Иностранных слов
// -- на Основании Об-в
// ---
// я, как обычно, -- Сперва попробую это сделать САМ
// (и посмотрю - что у меня получится)

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

const wordsRussian = {
  word0: 'Надёжный  достойный доверия  солидный',
  word1: 'Провод струна трос',
  word2: 'Передача перевод перенос',
};

// 8/04/24
const arrayEnglish = ['Manufacturer', 'Firmly', 'Upward'];
// 8/04/24
const arrayRussian = [
  'Производитель',
  'Твёрдо крепко неизменно',
  'Наверх больше',
];

///////

// C.B.

//  Function Initialization bloc

function learnEnglishWords(learnWord1, learnWord2) {
  alert(learnWord1);
  let learnWordPrompt = prompt();
  if (learnWordPrompt === learnWord2) {
    alert('True!!');
  } else {
    alert('false ((');
  }
}
// 8/04/24
function learnEnglishWords1(learnWord1, learnWord2) {
  alert(learnWord1);
  const learnWordPrompt = prompt();
  if (!(learnWordPrompt === learnWord2)) {
    alert('false ((');
  } else {
    alert('True!!');
  }
}
// 8/04/24
function learnEnglishWords2(learnWord1, learnWord2) {
  alert(learnWord1);
  let learnWordPrompt = prompt();
  if (learnWord2 === learnWordPrompt) {
    alert('True!!');
  } else {
    alert('false ((');
  }
}

// Function Call block

// learnEnglishWords(wordsEnglish.word0, wordsRussian.word0);
// learnEnglishWords(wordsRussian.word1, wordsEnglish.word1);
// learnEnglishWords(wordsEnglish.word2, wordsRussian.word2);

// learnEnglishWords(arrayEnglish[0], arrayRussian[0]);
// learnEnglishWords(arrayEnglish[1], arrayRussian[1]);
// learnEnglishWords(arrayRussian[2], arrayEnglish[2]);

// 8/04/24
// learnEnglishWords1(wordsEnglish.word0, wordsRussian.word0);
// learnEnglishWords2(arrayRussian[2], arrayEnglish[2]);

// 8/04/24
// Код -- который написал мне ДжиПиТи. Включая и вызовы Ф.-и
// --
// Код Полностью/Абсолютно - Рабочий
// -- я его Скопирую и Закомментирую чтобы --
// - на его Основании - продолжать писать/дописывать Про.-у
// (до того состояния -- кокой она была в конце 6го Ур. Димыча
// "Сложная Про. if else  проценты")

const hintPromptEnglish = 'Enter a word in Russian!';
const hintPromptRussian = 'Enter the word in English!';

function learnEnglishWords4(learnWord1, learnWord2, array1, array2) {
  alert(learnWord1);
  let hintPrompt;
  if (array1.includes(learnWord1)) {
    hintPrompt = hintPromptRussian;
  } else if (array2.includes(learnWord1)) {
    hintPrompt = hintPromptEnglish;
  }
  const learnWordPrompt = prompt(hintPrompt);
  if (learnWordPrompt !== learnWord2) {
    alert('false ((');
  } else {
    alert('True!!');
  }
}

// learnEnglishWords4(
//   arrayRussian[0],
//   arrayEnglish[0],
//   arrayRussian,
//   arrayEnglish
// );
// learnEnglishWords4(
//   arrayRussian[1],
//   arrayEnglish[1],
//   arrayRussian,
//   arrayEnglish
// );
// learnEnglishWords4(
//   // arrayRussian[2],
//   // arrayEnglish[2],
//   arrayEnglish[2],
//   arrayRussian[2],
//   arrayRussian,
//   arrayEnglish
// );

// learnEnglishWords4(wordsEnglish.word0, wordsRussian.word0);
// learnEnglishWords4(arrayEnglish[0], arrayRussian[0]);
// learnEnglishWords4(arrayRussian[2], arrayEnglish[2]);


const hint1PromptEnglish = 'Enter a word in Russian!';
const hint1PromptRussian = 'Enter the word in English!';

function learnEnglishWords5(learnWord1, learnWord2, array1, array2) {
  alert(learnWord1);
  let hintPrompt;
  if (array1.includes(learnWord1)) {
    hintPrompt = hintPromptRussian;
  } else if (array2.includes(learnWord1)) {
    hintPrompt = hintPromptEnglish;
  }
  const learnWordPrompt = prompt(hintPrompt);
  if (learnWordPrompt !== learnWord2) {
    alert('false ((');
  } else {
    alert('True!!');
  }
}

learnEnglishWords5(
  arrayRussian[0],
  arrayEnglish[0],
  arrayRussian,
  arrayEnglish
);
learnEnglishWords5(
  arrayRussian[1],
  arrayEnglish[1],
  arrayRussian,
  arrayEnglish
);
learnEnglishWords5(
  // arrayRussian[2],
  // arrayEnglish[2],
  arrayEnglish[2],
  arrayRussian[2],
  arrayRussian,
  arrayEnglish
);