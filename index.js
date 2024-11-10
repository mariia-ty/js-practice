//lesson 14

// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers);

// const num = [5, 15, 20, 30, 55];
//const filteredNum = [];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 3) {
//     filteredNum.push(num[i]);
//   }
// }

// const filteredNum = num.filter((value) => {
//   return value > 20;
// });

// console.log(filteredNum);

// const numbers = [1, 2, 3];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функціональний forEach
// numbers.forEach((num) => console.log(num));

// Вказуємо параметр idx якщо потрібен доступ до лічильника
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// const words = ["hi", "hello", "sup", "bonjour"];

// const exclamation = words.map((string) => string + '!');
// console.log(exclamation);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];

// Для кожного елемента колекції (user) повернемо значення поля name
// const names = users.map((user) => user.name);

// console.log(names);

// const active = users.map((user) => user.isActive)
// console.log(active);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find(num => num > 5));

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some поверне true якщо хоча б одного фрукта буде більше ніж 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0);

console.log(allAvailable);
console.log(anyAvailable);
