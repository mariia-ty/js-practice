//Lesson 13

// const school = {
//   nameS: "Haig",
//   students: 2145,
//   teachers: 35
// };

// const { nameS, students, teachers, open=true } = school;
//console.log( nameS, students, teachers, open);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// деструктуризація разбита на декілька рядків для розуміння
// const {
//   size: {
//     // покладемо size сюди
//     width,
//     height,
//   },
//   items: [item1, item2], // додамо елементи до items
//   title = "Menu", // відсутня в об'єкті (використовується значення за замовчуванням)
// } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(rgb);
// console.log(red, green, blue);


// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);

// у нас є масив з ім'ям та прізвищем
// let arr = ["Ilya", "Kantor"];

// деструктурируюче присвоювання
// записує firstName = arr[0]
// та surname = arr[1]

// let [firstName, surname] = arr;
// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

// let [firstName, surname] = arr;
// let firstName = arr[0];
// let surname = arr[1];

const person = {
  name: "Nelli",
  surname: "Laroy",
  age: 25,
};

function personInfo({name, surname, age}) {
  return `Мене звати ${name} ${surname} і мені ${age} років".`;
}
console.log(personInfo(person));