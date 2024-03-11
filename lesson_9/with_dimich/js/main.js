// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем)
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// 6/03/24
// В очередной раз --- САМ -- немного поработал над Про.-й (после 3-х первых минут В.)

// 9/03/24
// Смотрю/Делаю Ур. Д. В.-а с 16-й минуты по 26ю

// 11/03/24
// На 30й минуте Д. В. даёт Задачку на Дом
// Я полностью её выполнил --Купить или НЕ суметь купить ТРИ ТОВАРА  
// Сделал Ф.-ю (внутри которой prompt и У.К.) и вызвал её Трижды

// /// // ///

// I. B.
// const productTheCost = 120;
// let cardMoneyAmount1 = 100;
// let cardMoneyAmount2 = 120;
// let cardMoneyAmount3 = 200;

let balance1 = 100;
let balance2 = 120;
let balance3 = 200;
let cardsBalance = 200;
// const productPrice = window.prompt('How much does this product cost?');
// let productPrice = window.prompt('How much does this product cost?');
let cardsFundsBalance;

// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

// 10/30/24
// Ещё раз играемся и Изменяем К.
function goodsPurchase() {
  // document.write('<br>', 'START', '<br>');
  alert('START');
  // if (balance2 >= productPrice) {
  if (balance3 < productPrice) {
    // document.write('There are insufficient funds on the card');
    alert('There are insufficient funds on the card');
  } else {
    // document.write('The product is purchased');
    alert('The product is purchased');
  }
  balance3 = balance3 - productPrice;
  alert(balance3);
  // document.write('<br>', 'END');
  alert('END');
}

// function goodsPurchase1(balance) {
function goodsPurchase1() {
  alert(cardsBalance);
  alert('START');
  const productPrice = window.prompt('How much does this product cost?');
  if (cardsBalance < productPrice) {
    alert('There are insufficient funds on the card');
  }
  // else if (cardsBalance === 0) {
  //   alert('The operation has been cancelled. The balance on the card is 0.'); }
  else {
    alert('The product is purchased');
  }

  if (cardsBalance >= productPrice) {
    cardsBalance = cardsBalance - productPrice;
  }

  if (cardsBalance > 0) {
    alert(cardsBalance);
  } else {
    alert('The card balance is 0.');
  }
  alert('END');
}

//
// Function call block
goodsPurchase1();
goodsPurchase1();
goodsPurchase1();
// goodsPurchase();

// window.document.write('Hello!');
