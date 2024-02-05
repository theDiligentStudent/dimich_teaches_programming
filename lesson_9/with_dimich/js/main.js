// 4/02/24
// Сейчас Начинаю Смотреть (с Димычем)
// 9 Ур. - Условная Логика - Ветвление Про.-ы

// /// // ///

// I. B.

const tagBr = '</br>';

// //

// C. B.

// document.write('START', tagBr, 'Product Purchased', tagBr, 'END');

//

// Function declaration block

function productPurchase() {
  document.write('START', tagBr);
  if (true) {
    // if(false) {
    document.write('Product Purchased!', tagBr);
  } else {
    document.write('There are not enough funds in your account', tagBr);
  }
  document.write('END');
  document.write(tagBr, 'END'); // Димыча - Более Правильная и Логичная запись
}

//

// Function call block

productPurchase();
