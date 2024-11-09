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

//const num = [5, 15, 20, 30, 55];
//const filteredNum = [];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 3) {
//     filteredNum.push(num[i]);
//   }
// }

// const filteredNum = num.filter(value => {
//   return value > 20;
// });

// console.log(filteredNum);

const numbers = [1, 2, 3];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функціональний forEach
numbers.forEach((num) => console.log(num));

// Вказуємо параметр idx якщо потрібен доступ до лічильника
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));