// 29/04/24

// Сегодня буду - ПРОБОВАТЬ - использовать Ц. ----
// ---- в Про.-е Димыча
// Уже самостоятельно.
// Наверное начну от самого простого -- посмотрю Как будет Получаться -- и тогда -- буду двигаться дальше

// String to check JS-file connection
// alert('HelIo everyone!');

// // // // //

// I. B.

// const repetitionProgram = 4;

const russianWord0 = 'Надёжный';
const russianWord1 = 'Захватывающий';
const russianWord2 = 'Увлекательный';
// let russianWords = ['Надёжный', 'Захватывающий', 'Увлекательный'];
let russianWords = ['Надёжный', 'Захватывающий', 'Увлекательный', 'Гладить погладить ласкать'];
let rusWord;

const englishWord0 = 'Reliable';
const englishWord1 = 'Exciting';
const englishWord2 = 'Fascinating';
// let englishWords = ['Reliable', 'Exciting', 'Fascinating'];
let englishWords = ['Reliable', 'Exciting', 'Fascinating', 'Stroke'];
let engWord;

let commonArrayWord = [russianWords, englishWords];

let usingPrompt = null;

// const correctMessage = 'right';
const correctMessage = 'Right!';
// const incorrectMessage = 'wrong';
const incorrectMessage = 'Mistake';

// // // // //

// C. B.

// Попробую написать Ц. в Ц.-е
// *после просмотра 30ти минут Ур-а заглянул в Комментарии --
// -- там ребята пишут о каком-то "Ц.-е в Ц.-е"
// -- я Попробую сделать хотя бы Один такой (самый Простенький)*

// for (let i = 0; i <= 4; i = i + 1) { // ТАК ....  --- НЕ РАБОТАЕТ!!!!
// for (let i = 0; i <= 4; i = i + 1) {   // И ТАК --- ТОЖЕ --- НЕ РАБОТАЕТ....!!!!
  function learnWords() {
    //   for (i = 0; i < 3; i = i + 1) {
    for (i = 0; i < commonArrayWord[0].length; i = i + 1) {
      rusWord = commonArrayWord[0][i];
      engWord = commonArrayWord[1][i];

      //   usingPrompt = prompt(russianWord0);

      usingPrompt = prompt(rusWord);

      if (usingPrompt === engWord) {
        alert(correctMessage);
      } else {
        alert(incorrectMessage);
        // alert(usingPrompt);
        // alert(engWord);
      }
    }
  }

learnWords();
// }
