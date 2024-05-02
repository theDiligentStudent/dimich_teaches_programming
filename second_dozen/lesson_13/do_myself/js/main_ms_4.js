// 1/05/24
// 13й Ур Д.В.-а (Ц.-ы)
// --
// Сегодня уже занимался -- и теорией и практикой --
// в Других Фа.-х.
// В этих двух попробую Попрактиковаться. Так - как говорит Димыч на 48-й минуте

// //  // //  // //  // //

// Проверка подключения этого js-file к html
// alert('Hello, everyone!');

const myFriends = [
  { name: 'Sanya', birthday: '1979', placeResidents: 'Los Angeles' },
  { name: 'Jeka', birthday: '1983', placeResidents: 'Sietl' },
  { name: 'Maks', birthday: '1982', placeResidents: 'Lviv' },
];
const myColleagues = [
  { name: 'Kolia', birthday: '1979', placeResidents: 'Los Angeles' },
  { name: 'Michalich', birthday: '1983', placeResidents: 'Sietl' },
  { name: 'Valera', birthday: '1982', placeResidents: 'Lviv' },
  { name: 'Yura', birthday: '1982', placeResidents: 'Lviv' },
];
const myNeighbors = [
  { name: 'Sanya', birthday: '1979', placeResidents: 'Los Angeles' },
  { name: 'Jeka', birthday: '1983', placeResidents: 'Sietl' },
  { name: 'Maks', birthday: '1982', placeResidents: 'Lviv' },
];

const mySocialCircle = [myFriends, myColleagues, myNeighbors];

console.log(mySocialCircle);

// // //

document.write('<br>');

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  // document.write('<br>')
  let subMyCircle0 = mySocialCircle[i];
  document.write('<br>');
  for (j = 0; j < subMyCircle0.length; j = j + 1) {
    document.write(subMyCircle0[j].name, '<br>');
  }

  //   document.write('<br>')

  let subMyCircle1 = mySocialCircle[i];
  for (j = 0; j < subMyCircle1.length; j = j + 1) {
    document.write(subMyCircle1[j].birthday, '<br>');
  }

  let subMyCircle2 = mySocialCircle[i];
  for (j = 0; j < subMyCircle2.length; j = j + 1) {
    document.write(subMyCircle2[j].placeResidents, '<br>');
  }
}
