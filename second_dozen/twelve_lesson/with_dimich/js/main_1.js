// 20/04/2024
// Начинаю смотреть (и делать вместе с Димычем) его 12й Ур. ----
// ----
// у меня он 12й -- у Д.В.-а он уже аж - 17й
// успел только немного Теории посмтреть

// 21/04/2024

// alert('Hello');  // Проверка подключения JS-файла к html

// 21/04/20 24

// let grade1 = 1;
// let grade2 = 2;
// let grade3 = 3;
// let grade4 = 4;
// let grade5 = 5;

// console.log(grade3);
// console.log(grade5);

const arrayGrades = [1, 2, 3, 4, 5];

console.log(arrayGrades[1]);
console.log(arrayGrades);
console.log(arrayGrades[4]);
// console.log(arrayGrades[2, 3]);
console.log(arrayGrades[2], arrayGrades[3]);

const arrayGrades1 = [1, 2, null, 3, 4, 5];
console.log(arrayGrades1);
console.log(arrayGrades1[2]);

const arrayGrades3 = [
  [1, 2, 3, 4, 5],
  [1, 2, null, 3, 4, 5],
];
console.log(arrayGrades3);

// 22/04/24

// Ма. оценок студента

let grade1 = 5;
let grade2 = 4;
let grade3 = 3;
let grade4 = 5;
let grade5 = 4;

console.log(grade1); //5 - оценка за первый проект
console.log(grade3); //3 - оценка за тритий проект

// my Array
const arrayStudentGrades = [
  { grade1: 5 },
  { grade2: 4 },
  { grade3: 3 },
  { grade4: 5 },
  { grade5: 4 },
];
console.log(arrayStudentGrades);
console.log(arrayStudentGrades[5]);
console.log(arrayStudentGrades[4]);

let grades = [];
grades = [5, 4, 3, 5, 4];
let extractGrades = grades[0];
console.log(extractGrades);

// let numbersArray = [1, 2, 3, 4 ,5];
// extractNumber = numbersArray[3];
// console.log(extractNumber);

////////////////////

let myFavouriteBooks = [];

let book1 = 'А. Пушкин - Евгений Онегин';
let book2 = 'М. Лермонтов - Герой нашего времени';
let book3 = 'Н. Тургенев - Отцы и дети';
let book4 = 'Н. Гоголь - Мёртвые души';

myFavouriteBooks = [book1, book2, book3, book4];

console.log(myFavouriteBooks[4]);

const showBook1 = myFavouriteBooks[0];
const showBook2 = myFavouriteBooks[1];
const showBook3 = myFavouriteBooks[2];
const showBook4 = myFavouriteBooks[3];

console.log(showBook1);
console.log(showBook2);
console.log(showBook3);
console.log(showBook4);
console.log(myFavouriteBooks);

//////////////////////////

// Boolean values ​​inside the array

const answer1 = false;
const answer2 = true;
const answer3 = true;
const answer4 = true;
const answer5 = false;

const showAnswer = [answer1, answer2, answer3, answer4, answer5];

console.log(showAnswer);
console.log(showAnswer[0]);
console.log(showAnswer[1]);
console.log(showAnswer[2]);
console.log(showAnswer[3]);
console.log(showAnswer[4]);

//////////////////////////////////

// Objects, incl. nested, inside the array.

const family = {
  wife: {
    name: 'Kate',
    age: 30,
    hasChildren: true,
  },
  child1: {
    name: 'Iohan',
    age: 15,
    hasChildren: false,
  },
  child2: {
    name: 'Yana',
    age: 8,
    hasChildren: false,
  },
};

const myFamily = [];
myFamily[0] = family;

console.log(myFamily);

family.husband = {
  name: 'Mikle',
  age: 40,
  hasChildren: true,
};

myFamily[0].husband.age = 38;
console.log(myFamily);

console.log(myFamily[0].husband.name);
console.log(myFamily[0].child2.hasChildren);

const husbandAge = myFamily[0].husband.age;
console.log(husbandAge);

//////////////////////////////////

// 23/04/24

// An array consisting of Arrays.
// List of lists.

let shoppingList1Item1 = 'meat';
let shoppingList1Item2 = 'vegetables';
let shoppingList1Item3 = 'fruits';

let shoppingList2Item1 = 'pasta';
let shoppingList2Item2 = 'coffee';
let shoppingList2Item3 = 'toilet paper';

let shoppingList3Item1 = 'globe';
let shoppingList3Item2 = 'an interesting book';
let shoppingList3Item3 = 'childrens magazine';

let largeShoppingList = [];

largeShoppingList = [
  ['meat', 'vegetables', 'fruits'],
  ['pasta', 'coffee', 'toilet paper'],
  ['globe', 'an interesting book', 'childrens magazine'],
];

console.log(largeShoppingList);

let largeShoppingList1 = [
  [shoppingList1Item1, shoppingList1Item2, shoppingList1Item3],
  [shoppingList2Item1, shoppingList2Item2, shoppingList2Item3],
  [shoppingList3Item1, shoppingList3Item2, shoppingList3Item3],
];

// НЕправильная строка

// largeShoppingList1[0].shoppingList1Item4 = 'fish';

// Та же строка Исправленная ДжиПиТи
largeShoppingList1[0].push('fish');

console.log(largeShoppingList1);

console.log(largeShoppingList1[0][4]);

let extractArray2 = largeShoppingList1[1];
console.log(extractArray2[2]);

let list3Item3 = largeShoppingList1[2][2];
console.log(list3Item3);

//////////////////////////////////

console.log([1, 2, 3]);

const array = [1, 2, 3, true, '', [], {}, 558];
console.log(array);
console.log(array.length); // 8
console.log(array[0]);
