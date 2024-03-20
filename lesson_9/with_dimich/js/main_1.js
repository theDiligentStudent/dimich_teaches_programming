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

// /// // ///
// /// // ///
// /// // ///

// I. B.

const operationStart = 'START';

let productPriceString;

const forPromptText = 'How much does this product cost?';

// 14/03/24
// Возвращаю баланс карты числом ---- т.к. Д. В. кажется будет использовать ДругоЙ способ -- НЕ перевод Числа в Стр.-у
let cardsBalance = 200;
// Делаю Баланс На Карте НЕ ЧИСЛОМ, а СТРОКОЙ !!!!!!
// ЧТОБЫ СДЕЛАТЬ один Тип Данных (при сравнении в . Л.-е
// let cardsBalance = '200';

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

// function goodsPurchase() {
//   alert(cardsBalance);
//   alert(operationStart);

//   // productPrice = window.prompt(forPromptText);
//   productPriceString = window.prompt(forPromptText); // Переписываю К.за Д. В.-м
//   // const productCost = +productPriceString;    The first option
//   const productCost = window.Number(productPriceString); // the second option
//   // const productCost = Number(productPriceString);  // the second option

//   if (cardsBalance <= productCost) {
//     alert(lackOfFunds);
//   } else {
//     alert (productPurchased);
//   }

//   // if (productPriceString <= cardsBalance) {
//   // Переписываю К.за Д. В.-м
//   if (productCost <= cardsBalance) {
//     // cardsBalance = cardsBalance - productPriceString;
//     // Переписываю К.за Д. В.-м
//     cardsBalance = cardsBalance - productCost;
//   }

//   if (cardsBalance > 0) {
//     alert(cardsBalance);
//   } else {
//     alert(whenBalanceOnCardIs0);
//   }
// }

// 19/03/24
// Ф. Полностью Работающая.....
// ----
// Хочу только поменять местами У.-я в if else  ----
// чтобы продукт Приобретался/Покупался -- НЕ в if -- а именно в else,
// так - как у Д. В.-а
// Поэтому --- ЭТУ Ф.-ю я -- комментирую --- а Переделывать - буду в Ф.-и Ниже
// function goodsPurchase() {
//   alert(cardsBalance);
//   alert(operationStart);

//   // productPrice = window.prompt(forPromptText);
//   productPriceString = window.prompt(forPromptText); // Переписываю К.за Д. В.-м
//   // const productCost = +productPriceString;    The first option
//   const productCost = window.Number(productPriceString); // the second option
//   // const productCost = Number(productPriceString);  // the second option

//   if (0 != productCost && productCost <= cardsBalance) {
//     alert(productPurchased);
//   } else {
//     alert(lackOfFunds);
//   }

//   // if (productPriceString <= cardsBalance) {
//   // Переписываю К.за Д. В.-м
//   if (productCost <= cardsBalance) {
//     // cardsBalance = cardsBalance - productPriceString;
//     // Переписываю К.за Д. В.-м
//     cardsBalance = cardsBalance - productCost;
//   }

//   if (cardsBalance > 0) {
//     alert(cardsBalance);
//   } else {
//     alert(whenBalanceOnCardIs0);
//   }

//   alert(operationEnd);
// }

// 19/03/24
function goodsPurchase() {
  alert(cardsBalance);
  alert(operationStart);

  // productPrice = window.prompt(forPromptText);
  productPriceString = window.prompt(forPromptText); // Переписываю К.за Д. В.-м
  // const productCost = +productPriceString;    The first option
  const productCost = window.Number(productPriceString); // the second option
  // const productCost = Number(productPriceString);  // the second option

  // if (isNaN(productCost) || 0 === productCost || productCost > cardsBalance) {
    // вариант ДжиПиТи
  if (isNaN(productCost)) {
    alert(lackOfFunds);
  } else {
    if (productCost > cardsBalance) {
      alert(lackOfFunds);
    } else {
      alert(productPurchased);
    }
  }

  // Мой вариант
  // if (isNaN(productCost) || 0 === productCost || productCost > cardsBalance) {
  //   alert(lackOfFunds);
  // } else {
  //   alert(productPurchased);
  // }

  // if (productPriceString <= cardsBalance) {
  // Переписываю К.за Д. В.-м
  if (productCost <= cardsBalance) {
    // cardsBalance = cardsBalance - productPriceString;
    // Переписываю К.за Д. В.-м
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
