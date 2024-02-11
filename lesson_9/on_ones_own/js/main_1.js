// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем) -- А кое-что --- буду пробовать делать САМ
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// 5/02/24
// Сейчас  -- на основании того, что увидел в Ур.-е Димыча
// (посмотрел где-то 3 минуты)
// Попробую сделать Про.-ку по ---- Покупке 5 Смартфонов ----
// ---- с помощью 5ти Кнопок и 5-ти addEventListener-ов к ним....

// /// // ///

// I. B.

const btnIPhone = accessToPhoneIds('phone_iphone');
const btnSamsung = accessToPhoneIds('phone_samsung');
const btnXiaomi = accessToPhoneIds('phone_xiaomi');
const btnHuawei = accessToPhoneIds('phone_huawei');
const btnZte = accessToPhoneIds('phone_zte');

let smartphonePrice;
const promptHint = 'Deposit ' + smartphonePrice;

const priceIPhone = 200;
const priceSamsung = 170;
const priceXiaomi = 140;
const priceHuawei = 120;
const priceZte = 100;

// const amountForComparison = 40;
let amountForComparison;

const tagBr = '</br> </br>';

// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

// Сейчас Попробую Немного Доработать этот Функционал - из видео Димыча

function accessToPhoneIds(id) {
  let phoneId = document.getElementById(id);
  return phoneId;
}

// accessToPhoneIds();   // так делать НЕ нужно   --- Всё Работает и БЕЗ вызова этой Ф.-и

function productPurchase(currentProductPurchase) {
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

function currentTarget(evenObject) {
  // let currentValue = currentTarget.evenObject(id);
  let currentValue = evenObject.currentTarget(id);
  return currentValue;
}

function currentProductPurchase(currentTarget) {
  if (currentTarget === 'IPhone') {
    amountForComparison = 200;
  }
  if (currentTarget === 'Samsung Galaxy') {
    amountForComparison = 170;
  }
  if (currentTarget === 'Xiaomi') {
    amountForComparison = 140;
  }
  if (currentTarget === 'Huawei') {
    amountForComparison = 120;
  }
  if (currentTarget === 'ZTE') {
    amountForComparison = 100;
  }
}

//

// Function call block

// productPurchase();

// const btnIPhone = accessToPhoneIds('phone_iphone');
// btnIPhone.addEventListener('click', productPurchase(priceIPhone));
btnIPhone.addEventListener('click', productPurchase);
btnSamsung.addEventListener('click', productPurchase);
btnXiaomi.addEventListener('click', productPurchase);
btnHuawei.addEventListener('click', productPurchase);
btnZte.addEventListener('click', productPurchase);
