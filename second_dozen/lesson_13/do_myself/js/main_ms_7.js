// 5/04/24
// Сегодня хочу попробовать немного Пройтись и повторить материал по Ц.-м
// из Урока Димыча / как Сам Димыч говорил /
// --
// в первую очередь Ц. в Ц.-е
// i и j

// 6/04/24
// Ещё немного поработал с Ц.-ми (Ц. в Ц.-ле)
// поизменял Ма.-ы, дополнил их немного Д.-ми

// и повыводил всё на Э. Б.-а с помощью  document.write();

// // // //

// String to check JS-file connection
// alert('HelIo everyone!');

const myFamily = [
  {
    position: 'my Wife',
    age: 30,
    birthPlace: 'Bachmut',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'my Brother',
    age: 25,
    birthPlace: 'Donetsk',
    haveSecondHalf: false,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'my Sister',
    age: 27,
    birthPlace: 'Donetsk',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
];
const myCommunity = [
  {
    position: 'Brother and Friend',
    age: 20,
    birthPlace: 'Bachmut',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'Older brother',
    age: 40,
    birthPlace: 'Donetsk',
    haveSecondHalf: false,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'Sister',
    age: 50,
    birthPlace: 'Donetsk',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
];
const myJob = [
  {
    position: 'close colleague',
    age: 47,
    birthPlace: 'Bachmut',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'colleague and mentor',
    age: 53,
    birthPlace: 'Donetsk',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
  {
    position: 'our foreman',
    age: 54,
    birthPlace: 'Donetsk',
    haveSecondHalf: true,
    residencePlace: 'Dnepropetrovsk',
  },
];

// const mySocialCircle = [myFamily, myCommunity, myJob];
const mySocialCircle = [myFamily, myCommunity, myJob, myFamily];

console.log(mySocialCircle);

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  for (let j = 0; j < mySocialCircle[i].length; j = j + 1) {
    document.write(mySocialCircle[i][j].age, '<br>');
  }
  document.write('<br>');
}

document.write('<br>');
document.write('<br>');

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  document.write('CIRCLE ', i + 1, '<br>');
  document.write('--------------', '<br>');
  for (let j = 0; j < mySocialCircle[i].length; j = j + 1) {
    document.write(
      i + 1,
      '.',
      j + 1,
      ' - ',
      mySocialCircle[i][j].position,
      '<br>'
    );
  }
  document.write('<br>');
}

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  for (let j = 0; j < mySocialCircle[i].length; j = j + 1) {
    document.write(mySocialCircle[i][j].haveSecondHalf, '<br>');
  }
  document.write('<br>');
}

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  const extractMan = mySocialCircle[0][0];
  // document.write(mySocialCircle[0][0].)
  // document.write(mySocialCircle[0][0].)
  // document.write(mySocialCircle[0][0].)
  // document.write(mySocialCircle[0][0].)
}
const extractMan = mySocialCircle[0][0];
extractMan.name = 'Ivan';

document.write(extractMan.name, '<br>');
document.write(extractMan.position, '<br>');
document.write(extractMan.age, '<br>');
document.write(extractMan.birthPlace, '<br>');
document.write(extractMan.haveSecondHalf, '<br>');
document.write(extractMan.residencePlace, '<br>');

document.write('<br>');

for (let i = 0; i < mySocialCircle.length; i = i + 1) {
  document.write('<br>');
  document.write('ENVIRONMENT ', i + 1);

  for (let j = 0; j < mySocialCircle[i].length; j = j + 1) {
    document.write('<br>');
    document.write('<br>');

    document.write('Person', i + 1, '.', j + 1);
    document.write('<br>');

    document.write('----------');

    document.write('<br>');

    let extractMan = mySocialCircle[i][j];
    extractMan.name = 'Ivan';
    document.write(i + 1, '.', j + 1, ' - ', extractMan.name, '<br>');
    document.write(i + 1, '.', j + 1, ' - ', extractMan.position, '<br>');
    document.write(i + 1, '.', j + 1, ' - ', extractMan.age, '<br>');
    document.write(i + 1, '.', j + 1, ' - ', extractMan.birthPlace, '<br>');
    document.write(i + 1, '.', j + 1, ' - ', extractMan.haveSecondHalf, '<br>');
    document.write(i + 1, '.', j + 1, ' - ', extractMan.residencePlace, '<br>');
  }
  document.write('<br>');
}

//////////// //////////// ////////////

// const myFamily = {
//   myWife: {
//     age: 30,
//     birthPlace: 'Bachmut',
//     haveSecondHalf: true,
//     residencePlace: 'Dnepropetrovsk',
//   },
//   myBrother: {
//     age: 25,
//     birthPlace: 'Donetsk',
//     haveSecondHalf: false,
//     residencePlace: 'Dnepropetrovsk',
//   },
//   mySister: {
//     age: 27,
//     birthPlace: 'Donetsk',
//     haveSecondHalf: true,
//     residencePlace: 'Dnepropetrovsk',
//   },
// };

// console.log(personalConnections);

// const personalConnections = [myFamily];

// for (let i = 0; i < personalConnections.length; i = i + 1) {
//   for (let j = 0; j < personalConnections[i].length; j = j + 1)
//     document.write(personalConnections[i][i].age, '<br>');
// }
