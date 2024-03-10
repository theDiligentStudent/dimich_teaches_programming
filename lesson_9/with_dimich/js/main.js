// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем)
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// 6/03/24
// В очередной раз --- САМ -- немного поработал над Про.-й (после 3-х первых минут В.)

// 9/03/24
// Смотрю/Делаю Ур. Д. В.-а с 16-й минуты по 26ю

// /// // ///

// I. B.
// const productTheCost = 120;
// let cardMoneyAmount1 = 100;
// let cardMoneyAmount2 = 120;
// let cardMoneyAmount3 = 200;

let balance1 = 100;
let balance2 = 120;
let balance3 = 200;
const productPrice = 120;

// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

// function goodsPurchase() {
//   document.write('<br>', 'START', '<br>');
//   if(true) {document.write('The product is purchased');
//   // if(false) {document.write('The product is purchased');
//     } else {
//       document.write('There are insufficient funds on the card');
//     }
//   document.write('<br>','END');
// }

// function goodsPurchase() {
//   document.write('<br>', 'START', '<br>');
//   if(cardMoneyAmount1 >= productTheCost) {document.write('The product is purchased');
//   // if(false) {document.write('The product is purchased');
//     } else {
//       document.write('There are insufficient funds on the card');
//     }
//   document.write('<br>','END');
// }

// function goodsPurchase() {
//   document.write('<br>', 'START', '<br>');
//   // if (balance2 >= productPrice) {
//   if (productPrice <= balance1) {
//     document.write('The product is        purchased');
//     // if(false) {document.write('The product is purchased');
//   } else {
//     document.write('There are insufficient funds on the card');
//   }
//   document.write('<br>', 'END');
// }

// 10/30/24
// Ещё раз играемся и Изменяем К.
function goodsPurchase() {
  document.write('<br>', 'START', '<br>');
  // if (balance2 >= productPrice) {
  if (balance3 <= productPrice) {
    document.write('There are insufficient funds on the card');
  } else {
    document.write('The product is        purchased');
  }
  document.write('<br>', 'END');
}

//
// Function call block
goodsPurchase();

// window.document.write('Hello!');
