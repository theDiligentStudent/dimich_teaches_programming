//  28/04/24

// Ещё раз продолжаю смотреть 13й Ур. Димыча (про Ц.-ы)
// с 19й минуты

// 30/04/24
// Смотрю/Делаю Ур. про Ц.-ы с 40й минуты

//// //// //// ////

// String to check JS-file connection
// alert('HelIo everyone!');

// I. B.

const repeatCount = 3;

// C. B.

for (let index = 1; index <= repeatCount; index = index + 1) {
  // for (инициализация стартового З.;  проверка; инкриментируем Индекс) {
  // for (init;  conditions; increment) {

  // целевое действие
  document.write('a ');
}

document.write('<br>');

for (let index = 0; index <= repeatCount; index = index + 1) {
  document.write('a ');
}

document.write('<br>');

for (let i = 0; i < repeatCount; i = i + 1) {
  document.write('a ');
}

// // // //

document.write('<br>');

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < newArray.length; i = i + 2) {
for (let i = 1; i < newArray.length + 2; i = i + 2) {
  document.write(newArray[i] + ' ');
}

// // // //

document.write('<br>');

const arrayGrades = [5, 4, 3, 5, 4, 5, 5, 4, 3, 5, 4, 5, 5, 4, 3, 5, 4, 5];

for (let i = 0; i < arrayGrades.length + 2; i++) {
  document.write(arrayGrades[i], '<br>');
}

// 30/04/24

// // // //

document.write('<br>');

const myBooks = [
  // 'Быт и нравы древних римлян',
  'Герой нашего времени',
  'Статский советник',
  // 'Турецкий гамбит',
  // 'Алтын талабан'
];

for (let i = 0; i < myBooks.length; i = i + 1) {
  document.write(myBooks[i], '<br>');
}

// // // //

document.write('<br>');

// const myFriends = {
//   first: { name: 'Sanya', birthday: '1979', placeResidents: 'Los Angeles' },
//   second: { name: 'Jeka', birthday: '1983', placeResidents: 'Sietl' },
//   third: { name: 'Maks', birthday: '1982', placeResidents: 'Lviv' },
// };
const myFriends = [
  { name: 'Sanya', birthday: '1979', placeResidents: 'Los Angeles' },
  { name: 'Jeka', birthday: '1983', placeResidents: 'Sietl' },
  { name: 'Maks', birthday: '1982', placeResidents: 'Lviv' },
];

const myBestFriends = [myFriends];
console.log(myBestFriends);

for (let i = 0; i < myFriends.length; i = i + 1) {
  document.write(myBestFriends[0][i].name, '<br>');
}

// // // //

document.write('<br>');

const largeShoppingList = [
  ['notebook', 'pen', 'pencil'],
  ['mascara', 'lipstick', 'hair dye'],
  ['mushrooms', 'carrots', 'onions'],
];

// for(let i = 0; i <1; i = i +1) {
//   document.write(largeShoppingList[i], '<br>')

// for (let i = 0; i < 3; i = i + 1) {
//   document.write(
//     largeShoppingList[0][i],
//     '<br>',
//     largeShoppingList[1][i],
//     '<br>',
//     largeShoppingList[2][i],
//     '<br>'
//   );
// }
// }

for (let i = 0; i < largeShoppingList.length; i++) {
  for (let j = 0; j < largeShoppingList[i].length; j++) {
    document.write(largeShoppingList[i][j], '<br>');
  }
}

let shoppingList0 = largeShoppingList[0];
console.log(shoppingList0);

const list0Product0 = shoppingList0[0];
const list0Product1 = shoppingList0[1];
const list0Product2 = shoppingList0[2];
//
//
let shoppingList1 = largeShoppingList[1];
console.log(shoppingList0);

const list1Product0 = shoppingList1[0];
const list1Product1 = shoppingList1[1];
const list1Product2 = shoppingList1[2];
//
//
let shoppingList2 = largeShoppingList[2];
console.log(shoppingList2);

const list2Product0 = shoppingList2[0];
const list2Product1 = shoppingList2[1];
const list2Product2 = shoppingList2[2];

console.log(list0Product2);
