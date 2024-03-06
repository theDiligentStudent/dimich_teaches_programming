// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем)
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// 6/03/24
// В очередной раз --- САМ -- поработал над Про.-й (после 3-х первых минут В.)

// /// // ///

// I. B.

const tagBr = '</br>';
const operationBeginning = 'Start';
let inputData;
const promptValue = 100;
const textPrompt = 'Deposit 100 dollars';
const amountPurchase = 100;
const sufficientAmount = 'The product is purchased';
const insufficientFunds = 'Insufficient funds on your card';
const operationEnd = 'End';


// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

function goodsPurchase() {
  alert('Start');
  document.write(tagBr);
  // document.write(operationBeginning);
  document.write(tagBr);
  inputData = prompt(promptValue, textPrompt);
  if (inputData >= amountPurchase) {
    document.write(sufficientAmount);
  } else {
    document.write(insufficientFunds);
  }
  // document.write(tagBr);
  // document.write(operationEnd);
  alert(operationEnd);
}

//
// Function call block
goodsPurchase();

// window.document.write('Hello!');
