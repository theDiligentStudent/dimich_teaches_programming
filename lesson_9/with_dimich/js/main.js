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

// 12/03/24
// Поупражнялся Со Сменой Условий, Оп.-в и Опн.-в ---- так как Учил делать Д. В.!
// А ещё Все Стр.-вые Д. Перенёс из C. B. в П.-е в I. B.! ----
// Стр.-ых Д. внутри Ф.-и - Больше Нет!
// -----
// Осталось только Поудалять Практически Все Комментарии
// (за Исключением Некоторых) -- и сразу опять Закоммитить

// /// // ///
// /// // ///
// /// // ///

// I. B.

// const productTheCost = 120;
// let cardMoneyAmount1 = 100;
// let cardMoneyAmount2 = 120;
// let cardMoneyAmount3 = 200;

const operationStart = 'START';
let productPrice;
const forPromptText = 'How much does this product cost?';

// let balance1 = 100;
// let balance2 = 120;
// let balance3 = 200;
let cardsBalance = 200;
// const productPrice = window.prompt('How much does this product cost?');
// let productPrice = window.prompt('How much does this product cost?');
// let cardsFundsBalance;

const productPurchased = 'The product is purchased';
const lackOfFunds = 'There are insufficient funds on the card';
const whenBalanceOnCardIs0 = 'The card balance is 0.';
const operationEnd = 'END';
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
// function goodsPurchase1() {
//   alert(cardsBalance);
//   alert('START');
//   const productPrice = window.prompt('How much does this product cost?');
//   if (cardsBalance < productPrice) {
//     alert('There are insufficient funds on the card');
//   }
//   // else if (cardsBalance === 0) {
//   //   alert('The operation has been cancelled. The balance on the card is 0.'); }
//   else {
//     alert('The product is purchased');
//   }

//   if (cardsBalance >= productPrice) {
//     cardsBalance = cardsBalance - productPrice;
//   }

//   if (cardsBalance > 0) {
//     alert(cardsBalance);
//   } else {
//     alert('The card balance is 0.');
//   }
//   alert('END');
// }

//////

// Играюсь с К.-м, - как учил Д. В. --
// Меняю местами Опн.-ы - Изменяю Оп.-ы
// Всё Успешно Получилось
// function goodsPurchase1() {
//   alert(cardsBalance);
//   alert('START');
//   const productPrice = window.prompt('How much does this product cost?');
//   if (productPrice > cardsBalance) {
//     alert('There are insufficient funds on the card');
//   }
//   // else if (cardsBalance === 0) {
//   //   alert('The operation has been cancelled. The balance on the card is 0.'); }
//   else {
//     alert('The product is purchased');
//   }

//   if (productPrice <= cardsBalance) {
//     cardsBalance = cardsBalance - productPrice;
//   }

//   if (cardsBalance > 0) {
//     alert(cardsBalance);
//   } else {
//     alert('The card balance is 0.');
//   }
// }

////////////

// Закомментирую эту Ф.-ю чтобы Зарефакторить мою/Д. В.-а Про.-у
// ---
// Вынесу все Стр.-ые Д. в I. B. и позаношу их в П.-е

// function goodsPurchase1() {
//   alert(cardsBalance);
//   alert('START');
//   const productPrice = window.prompt('How much does this product cost?');
//   if (productPrice <= cardsBalance) {
//     alert('The product is purchased');
//   }
//   // else if (cardsBalance === 0) {
//   //   alert('The operation has been cancelled. The balance on the card is 0.'); }

//   // else if (productPrice === '') { alert('There are insufficient funds on the card');}
//   // К. в Этой Строке почему-то НЕ получилось реализовать.....
//   ///////
//   else {
//     alert('There are insufficient funds on the card');
//   }

//   if (productPrice <= cardsBalance) {
//     cardsBalance = cardsBalance - productPrice;
//   }

//   if (cardsBalance > 0) {
//     alert(cardsBalance);
//   } else {
//     alert('The card balance is 0.');
//   }

//   // alert(cardsBalance);

//   alert('END');
// }

///////////

// Рефакторю мой К./мою Ф.-ю
// Заношу все Стр.-ые Д. в П.-е

function goodsPurchase1() {
  alert(cardsBalance);
  alert(operationStart);
  // const productPrice = window.prompt(forPromptText);
  productPrice = window.prompt(forPromptText); // Объявил П. в I. B. --- а Здесь -- присвоил ей З. (результат prompt-а)
  if (productPrice <= cardsBalance) {
    alert(productPurchased);
  }
  // else if (cardsBalance === 0) {
  //   alert('The operation has been cancelled. The balance on the card is 0.'); }

  // else if (productPrice === '') { alert('There are insufficient funds on the card');}
  // К. в Этой Строке почему-то НЕ получилось реализовать.....
  ///////
  else {
    alert(lackOfFunds);
  }

  if (productPrice <= cardsBalance) {
    cardsBalance = cardsBalance - productPrice;
  }

  if (cardsBalance > 0) {
    alert(cardsBalance);
  } else {
    alert(whenBalanceOnCardIs0);
  }

  // alert(cardsBalance);

  alert(operationEnd);
}

/////////////////////////

// Function call block
goodsPurchase1();
goodsPurchase1();
goodsPurchase1();

// goodsPurchase();

// window.document.write('Hello!');
