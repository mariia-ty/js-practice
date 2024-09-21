//Lesson 7
// const students = ["Nazar", "Mariia", "Platon", "Kiril", "Mykola", "Vlad"]
// console.log(students);
// console.log(students[4]);
// console.log(students.length);

// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Logging clients: ", clients[i]);
// }

// const students = [];
// for (let i = 0; i < 3; i += 1) {
//   students.push(`student-${i}`);
// }
// console.log("students: ", students);

// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким іменем є в базі даних!";
//     break;
//   }
//   message = "Клієнта з таким іменем немає в базі даних!";
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше ніж ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[0][0]);
// console.log(matrix[1][2]);
// console.log(matrix[2][2]);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("Підмасив матриці matrix[i]: ", matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log("Елемент підмасив матриці matrix[i][j]: ", matrix[i][j]);
//     total += matrix[i][j];
//   }
// }
// console.log(total);
