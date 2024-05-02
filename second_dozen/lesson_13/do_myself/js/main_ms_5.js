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


// // // // //

// String to check JS-file connection
// alert('HelIo everyone!');

// // // // //

// I. B.

// const repetitionProgram = 4;

const russianWord0 = 'Надёжный';
const russianWord1 = 'Захватывающий';
const russianWord2 = 'Увлекательный';
// let russianWords = ['Надёжный', 'Захватывающий', 'Увлекательный'];
let russianWords = [
  'Надёжный',
  'Захватывающий',
  'Увлекательный',
  'Гладить погладить ласкать',
];
let rusWord;

const englishWord0 = 'Reliable';
const englishWord1 = 'Exciting';
const englishWord2 = 'Fascinating';
// let englishWords = ['Reliable', 'Exciting', 'Fascinating'];
let englishWords = ['Reliable', 'Exciting', 'Fascinating', 'Stroke'];
let engWord;

let commonArrayWord = [russianWords, englishWords];

// // // // /// // ////

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

const settings = [{ usingPrompt: null }];

// Переношу П.-е с их З.-ми в --- Ма. Об.-в
// // const correctMessage = 'right';
// const correctMessage = 'Right!';
// // const incorrectMessage = 'wrong';
// const incorrectMessage = 'Mistake';

const arrayMessages = [
  { correctMessage: 'Right!' },
  { incorrectMessage: 'Mistake' },
];

// // // // //

// C. B.

// Попробую написать Ц. в Ц.-е
// *после просмотра 30ти минут Ур-а заглянул в Комментарии --
// -- там ребята пишут о каком-то "Ц.-е в Ц.-е"
// -- я Попробую сделать хотя бы Один такой (самый Простенький)*

// for (let i = 0; i <= 4; i = i + 1) { // ТАК ....  --- НЕ РАБОТАЕТ!!!!
// for (let i = 0; i <= 4; i = i + 1) {   // И ТАК --- ТОЖЕ --- НЕ РАБОТАЕТ....!!!!
function learnWords() {
  // Попробую Переписать этот К.
  // -- Используя -- Об.-ы -- в Ма.-е  ----
  // Ма.-в в Ма.-ве
  //   //   for (i = 0; i < 3; i = i + 1) {
  //   for (i = 0; i < commonArrayWord[0].length; i = i + 1) {
  //     rusWord = commonArrayWord[0][i];
  //     engWord = commonArrayWord[1][i];
  //     //   usingPrompt = prompt(russianWord0);
  //     usingPrompt = prompt(rusWord);
  //     if (usingPrompt === engWord) {
  //       alert(correctMessage);
  //     } else {
  //       alert(incorrectMessage);
  //       // alert(usingPrompt);
  //       // alert(engWord);
  //     }
  //   }

  for (let i = 0; i < russianEnglishWords.length; i = i + 1) {
    let rusWord = russianEnglishWords[i].russianWord;
    let engWord = russianEnglishWords[i].englishWord;
    // document.write(rusWord, '<br>');
    // document.write(engWord, '<br>');

    //   // document.write('<br>');

    //   for (let i = 0; i < russianEnglishWords.length; i = i + 1) {
    //     let rusWord = russianEnglishWords[i].russianWord;
    //     let engWord = russianEnglishWords[i].englishWord;
    //     // document.write(rusWord, '<br>');
    //     document.write(engWord, '<br>');
    //   }
    // }
    // // document.write('<br>')

    settings[0].usingPrompt = prompt(rusWord);
    if (settings[0].usingPrompt !== engWord) {
      alert(arrayMessages[1].incorrectMessage);
      alert(settings[0].usingPrompt);
      alert(engWord);
    } else {
      alert(arrayMessages[0].correctMessage);
    }
  }
}
learnWords();

console.log(russianEnglishWords);

console.log(arrayMessages);
console.log(settings);
