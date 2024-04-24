100 > 80;

let product1Cost;
let product2Cost;

product1Cost = 200;
product2Cost = 100;
console.log(product1Cost - product2Cost); // 100
console.log(product1Cost > product2Cost);
console.log(product1Cost - product2Cost > 0); // true

product1Cost = 100;
product2Cost = 200;
console.log(product1Cost - product2Cost); // -100
console.log(product1Cost < product2Cost);
console.log(product1Cost - product2Cost > 0); // false

product1Cost = 200;
product2Cost = 200;
console.log(product1Cost - product2Cost); // 0
console.log(product1Cost === product2Cost);
console.log(product1Cost - product2Cost > 0); // false

// // //
// Приоритет СКОБОК

product1Cost = 200;
product2Cost = 100;
console.log(product1Cost - product2Cost); // 100
console.log(product1Cost > product2Cost);
console.log(product1Cost - product2Cost > 0); // true

product1Cost = 100;
product2Cost = 200;
console.log(product1Cost - product2Cost); // -100
console.log(product1Cost < product2Cost);
console.log(product1Cost - product2Cost > 0); // false

product1Cost = 200;
product2Cost = 200;
console.log(product1Cost - product2Cost); // 0
console.log(product1Cost === product2Cost);
console.log(product1Cost - product2Cost > 0); // false
