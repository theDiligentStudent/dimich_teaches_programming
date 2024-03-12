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

// /// // ///
// /// // ///
// /// // ///

// I. B.

const operationStart = 'START';

let productPrice;

const forPromptText = 'How much does this product cost?';

let cardsBalance = 200;

const productPurchased = 'The product is purchased';
const lackOfFunds = 'There are insufficient funds on the card';
const whenBalanceOnCardIs0 = 'The card balance is 0.';
const operationEnd = 'END';
// //

// C. B.

// Function declaration block

// 10/30/24
// Ещё раз играемся и Изменяем К.

// Закомментирую эту Ф.-ю чтобы Зарефакторить мою/Д. В.-а Про.-у
// ---
// Вынесу все Стр.-ые Д. в I. B. и позаношу их в П.-е

///////////

// Рефакторю мой К./мою Ф.-ю
// Заношу все Стр.-ые Д. в П.-е

function goodsPurchase() {
  alert(cardsBalance);
  alert(operationStart);
  // const productPrice = window.prompt(forPromptText);
  productPrice = window.prompt(forPromptText); // Объявил П. в I. B. --- а Здесь -- присвоил ей З. (результат prompt-а)
  if (productPrice <= cardsBalance) {
    alert(productPurchased);
  }
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

  alert(operationEnd);
}

/////////////////////////

// Function call block
goodsPurchase();
goodsPurchase();
goodsPurchase();


