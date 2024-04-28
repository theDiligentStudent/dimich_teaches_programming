// 28/04/24
// Ещё пробую писать Маленькие (Мои Первые) Ц.-ы --- САМ --
// ----- чтобы Разобраться
// (в них, как можно Лучше)

// String to check JS-file connection
// alert('HelIo everyone!');

//////////////////

const familyMembers = ['Father', 'Mother', 'Daughter', 'Son'];

for (let index = 0; index < familyMembers.length - 1; index = index + 1) {
  document.write(familyMembers[index] + '<br>');
}

document.write('<br>');

for (let index = 1; index < 5; index = index + 1) {
  document.write('family ');
}

document.write('<br>');

// // //

const numberFamilies = 10;

// for (let index = 1; index < 5; index = index + 1) {
for (let index = 0; index <= numberFamilies; index = index + 1) {
  document.write('family ');
}
