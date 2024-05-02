// 1/05/24
// Продолжаю смотреть Ур. про Ц.-ы
// Сейчас с 40й минуты то, что делает Д.В. --- попробую повторить САМ
// --
// Ц. в Ц.-е (Внешний и Внутренний Ц.-ы) ---
// Попробую повторить где-то до 59й минуты видео -- а там - как получится
// ----
// Всё получилось!!!!
// -- 
// Досмотрел видео до 57й минуты
// (теперь опять --- надо Поработать САМОМУ)
//// //// //// //// ////

// Проверка подключения этого js-file к html
// alert('Hello, everyone!');

// I. B.

const largeShoppingList = [
  ['notebook', 'pen', 'pencil'],
  ['mascara', 'lipstick', 'hair dye', 'medicines'],
  ['mushrooms', 'carrots', 'onions', 'canned food', 'sheets of pita bread'],
];

const list = 'LIST  ';
const underliningList = '----------';
const signHyphen = ' - ';

// C. B.

document.write('<br>');

// Extract SubLists from Main List
// или -- если быть точнее/буквальнее
// Extract SubArrays from Main Array
for (let i = 0; i < largeShoppingList.length; i = i + 1) {
  document.write(list + (i + 1), '<br>');
  document.write(underliningList, '<br>');

  let shoppingList = largeShoppingList[i];

  for (let j = 0; j < shoppingList.length; j = j + 1) {
    let purchase = shoppingList[j];

    document.write(j + 1, signHyphen, purchase, '<br>');
  }

  document.write('<br>');
}
