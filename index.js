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

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// function personInfo({name, surname, age}) {
//   return `Мене звати ${name} ${surname} і мені ${age} років".`;
// }
// console.log(personInfo(person));

// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// const { name, age, email } = user;
// console.log(name, age, email);

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const { make, model, year, features:[feature1, feature2, feature3], safety:{airbags, antilock_brakes, stability_control} } = car;
// console.log( feature1);

const movie = {
  title: "The Shawshank Redemption",
  director: {
    name: "Frank Darabont",
    nationality: "American",
  },
  actors: ["Tim Robbins", "Morgan Freeman"],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90,
  },
};

const { title, director:{ name, nationality }, actors:[actor1, actor2], release_year, ratings:{imdb, rotten_tomatoes} } = movie; 
console.log(imdb);
