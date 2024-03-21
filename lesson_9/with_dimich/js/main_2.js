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
// ---------------
// Поудалял как можно больше (лишних) комментариев
// Теперь буду Коммитить Изменения

// 14/03/24
// Досмотрел/Доделал 9-й /у Д. В.-а в плейлисте он уже 11-й/ до 35-й минуты
// Удалил ещё немного комментариев, которые в данный момент уже наверное являются больше - лишними

// 19/03/24
// prompt --- NaN, isNaN(), ' ', ok, canсel,  &&, ||, 0 === productCost,
// конструкция:
// if() {
// } else {
//   if() {
//   } else {
//   }
// }

// 21/03/24
// Посмотрел  этот /9-й (у Д. В.-а он почему-то 11-й)/ Ур. до почти 42-й минуты
// -- и Сперва -- сделал Всё САМ -- всё то, что думаю он будет делать дальше 
// (т.е. попытался забежать НЕмножко Наперёд)


// /// // ///
// /// // ///
// /// // ///

// I. B.

const operationStart = 'START';

// 14/03/24
let cardsBalance = 200;

const forPromptText = 'How much does this product cost?';
let productPriceString;
let productCost;

const productPurchased = 'The product is purchased';
const lackOfFunds = 'There are insufficient funds on the card';
const whenBalanceOnCardIs0 = 'The card balance is 0.';

const operationEnd = 'END';
// //

// C. B.

// Function declaration block

///////////

// Рефакторю мой К./мою Ф.-ю
// Заношу все Стр.-ые Д. в П.-е

// 19/03/24
function goodsPurchase() {
  alert(cardsBalance);
  alert(operationStart);

  // productPrice = window.prompt(forPromptText);
  productPriceString = window.prompt(forPromptText); // Переписываю К.за Д. В.-м
  // const productCost = +productPriceString;    The first option
  productCost = window.Number(productPriceString); // the second option

  // if (isNaN(productCost) || 0 === productCost || productCost > cardsBalance) {
  // вариант ДжиПиТи
  //   if (isNaN(productCost)) {
  //     // alert(lackOfFunds);
  //     alert('You input Incorrect number!!');
  //   } else {
  //     if (productCost > cardsBalance) {
  //       alert(lackOfFunds);
  //     } else {
  //       alert(productPurchased);
  //     }
  //   }

  // Вариант Д. В.-а:

  // First
  if (!isNaN(productCost)) {
    // alert(lackOfFunds);
    if (productCost > cardsBalance) {
      alert(lackOfFunds);
    } else {
      alert(productPurchased);
    }
  } else {
    alert('You input Incorrect number!!');
  }

  // Second
  // if (isNaN(productCost)) {
  //   // alert(lackOfFunds);
  //   alert('You input Incorrect number!!');
  // } else {
  //   if (productCost > cardsBalance) {
  //     alert(lackOfFunds);
  //   } else {
  //     alert(productPurchased);
  //   }
  // }

  if (productCost <= cardsBalance) {
    cardsBalance = cardsBalance - productCost;
  }

  if (cardsBalance > 0) {
    alert(cardsBalance);
  } else {
    alert(whenBalanceOnCardIs0);
  }

  alert(operationEnd);
}

/////////////////////////

// Function call block

goodsPurchase();
// goodsPurchase();
// goodsPurchase();

///
////
/////

// ИЗУЧАЮ ПРОБУЮ RETURN

// function sum(a, b) {

//   // let c = a + b;
//    c = a + b;  // Почему-то Всё Работает БЕЗ *!!!!* Объявления П.-й.....
//   return c;
// }

// let d = sum(4, 5);
// console.log (d);
// alert (d);
// console.log(d + 5);
