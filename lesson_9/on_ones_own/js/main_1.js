// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем) -- А кое-что --- буду пробовать делать САМ
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// /// // ///

// I. B.

const promptHint = 'Deposit $40';
const amountForComparison = 40;
const tagBr = '</br> </br>';

// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

// Сейчас Попробую Немного Доработать этот Функционал - из видео Димыча

// function productPurchase() {
//     document.write('START', tagBr);
//   if (true) {
//     // if(false) {
//     document.write('Product Purchased!', tagBr);
//   } else {
//     document.write('There are not enough funds in your account', tagBr);
//   }
//   document.write('END');
//   document.write(tagBr, 'END'); // Димыча - Более Правильная и Логичная запись
// }

// function startProgramme() {
//   // document.write('START', tagBr);
//   alert('START', tagBr);
// }                               // ЛИШНЯЯ Ф.

function productPurchase() {
  alert('START', tagBr);
  const requestAmountAndAccept = prompt(promptHint);
  if (requestAmountAndAccept >= amountForComparison) {
    document.write(tagBr, 'Product Purchased!');
    // if(false) {
  } else {
    document.write(tagBr, 'There are not enough funds in your account');
  }
  // document.write('END');
  document.write(tagBr, 'END'); // Димыча - Более Правильная и Логичная запись
}

//

// Function call block

// startProgramme();  // ЛИШНЯЯ Ф.
productPurchase();
