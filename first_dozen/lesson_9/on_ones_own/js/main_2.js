// 15/03/24
// Посмотрел 9-й
// Ур. Д.В.-а  (у него он почему-то уже 11-й) до 37й минуты
// ---- Теперь попробую проделать Всё САМОСТОЯТЕЛЬНО

// 18/03/24
// Доделал Всё из 9го (11го) Ур.-а Д. В.-а
// --- полностью по памяти -- даже Без Конспекта --
// Написал Ф.-ю с Покупкой/НЕпокупкой товара,  Менял местами Опн.-ы, менял соответственно
// Оп.-ы,   менял У. Внутри if else,
// сделал П.-ю с вводом Д.-х через prompt Числом -- Двумя способами --
// productPriceNumber = +productPriceString;
// и
// productPriceNumber = window.Number(productPriceString);
// + Разобрался и Вспомнил NaN (Not a Number)

// I. B.
let cardBalance = 200;

const operationStart = 'START';
const operationEnd = 'END';
const tagBr = '<br>';

const promptText = 'Give the price of the product';
const successfulOperation = 'The product is purchased!';
const cardMoneyAmountNot = 'Amount of money on the card ((';
// 16/03/24
const bankCardEmpty = 'The card balance is 0';
// const = ;
// const = ;

// let productPrice;   // Меняю название П.-й на productPriceString

let productPriceString; // 18/03/24
let productPriceNumber; // 18/03/24

///////////////

// C. B.

// Function Declaration Block

// 16/03/24
// Полностью Рабочая Ф. .....   ---- буду её Переделывать -- меняя У.-я --- как учил Д. В.

// function goodsPurchase() {
//   window.document.write(cardBalance, tagBr);
//   window.document.write(operationStart, tagBr);
//   productPrice = prompt(promptText);

//   if (cardBalance >= productPrice) {
//     window.document.write(successfulOperation, tagBr);
//   } else {
//     window.document.write(cardMoneyAmountNot, tagBr);
//   }

//   if(productPrice <= cardBalance) {
//     cardBalance = cardBalance - productPrice;
//   }

//   window.document.write(operationEnd, tagBr);
//   window.document.write(cardBalance, tagBr, tagBr);
// }

// 18/03/24
// Переделываю Ф. меняя ей У.-я
// Сделал --- Всё Работает!
// Теперь буду переделывать (Ф.-ю) меняя (попробую и в 1м и во 2м У.-и) Опн.-ы
// (и менять Оп.-а)

// function goodsPurchase() {
//   window.document.write(cardBalance, tagBr);
//   window.document.write(operationStart, tagBr);
//   productPrice = prompt(promptText);

//   if (cardBalance < productPrice) {
//     // window.document.write(successfulOperation, tagBr);
//     window.document.write(cardMoneyAmountNot, tagBr);
//   } else {
//     // window.document.write(cardMoneyAmountNot, tagBr);
//     window.document.write(successfulOperation, tagBr);
//   }

//   if (productPrice <= cardBalance) {
//     cardBalance = cardBalance - productPrice;
//   }

//   window.document.write(operationEnd, tagBr);
//   window.document.write(cardBalance, tagBr, tagBr);
// }

// 18/03/24
// Поменял местами Опн.-ы (в Обоих У.-х) и /естественно/ Оп.-ы
// --- Всё Адекватно Работает

// Теперь из этой Ф.-и -- мне надо Повторить /Скопипастить/ за Д. В.-мне
// --
// Сделать ДВЕ Ф.-и ---- чтобы в них СТР. Превращалась в ЧИСЛО
// (чтобы ЧИСЛО сравнивалось с  ЧИСЛОМ)   /ДВУМЯ (разными)/ способами

// function goodsPurchase() {
//   window.document.write(cardBalance, tagBr);
//   window.document.write(operationStart, tagBr);
//   productPrice = prompt(promptText);

//   if (productPrice > cardBalance) {
//     // window.document.write(successfulOperation, tagBr);
//     window.document.write(cardMoneyAmountNot, tagBr);
//   } else {
//     // window.document.write(cardMoneyAmountNot, tagBr);
//     window.document.write(successfulOperation, tagBr);
//   }

//   if (cardBalance >= productPrice) {
//     cardBalance = cardBalance - productPrice;
//   }

//   window.document.write(operationEnd, tagBr);
//   window.document.write(cardBalance, tagBr, tagBr);
// }

// 18/03/24
// productPriceNumber = +productPriceString;
// --
// Всё получилось (Скопипастить) -- Всё Корректно Работает

// function goodsPurchase() {
//   window.document.write(cardBalance, tagBr);
//   window.document.write(operationStart, tagBr);
//   productPriceString = prompt(promptText);
//   productPriceNumber = +productPriceString;

//   if (productPriceNumber > cardBalance) {
//     // window.document.write(successfulOperation, tagBr);
//     window.document.write(cardMoneyAmountNot, tagBr);
//   } else {
//     // window.document.write(cardMoneyAmountNot, tagBr);
//     window.document.write(successfulOperation, tagBr);
//   }

//   if (cardBalance >= productPriceNumber) {
//     cardBalance = cardBalance - productPriceNumber;
//   }

//   window.document.write(operationEnd, tagBr);
//   window.document.write(cardBalance, tagBr, tagBr);
// }

// 18/03/24
// productPriceNumber = window.Number(productPriceString);
// --
// Всё получилось (Скопипастить) -- Всё Корректно Работает

function goodsPurchase() {
  window.document.write(cardBalance, tagBr);
  window.document.write(operationStart, tagBr);
  productPriceString = prompt(promptText);
  productPriceNumber = window.Number(productPriceString);

  if (productPriceNumber > cardBalance) {
    // window.document.write(successfulOperation, tagBr);
    window.document.write(cardMoneyAmountNot, tagBr);
  } else {
    // window.document.write(cardMoneyAmountNot, tagBr);
    window.document.write(successfulOperation, tagBr);
  }

  if (cardBalance >= productPriceNumber) {
    cardBalance = cardBalance - productPriceNumber;
  }

  window.document.write(operationEnd, tagBr);
  window.document.write(cardBalance, tagBr, tagBr);
}

/////

// Function Call Block
goodsPurchase();
goodsPurchase();
goodsPurchase();
