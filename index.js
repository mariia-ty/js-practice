//lesson 16
//Приклад: Створення класу користувача (User)

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   sayHello() {
//     console.log(`Привіт, мене звати ${this.name}, моя пошта: ${this.email}`);
//   }
// }
// const mango = new User('Mango', 'mango@example.com');
// console.log(mango);
// mango.sayHello();

// const poly = new User('Poly', 'poly@example.com');
// console.log(poly);
// poly.sayHello();

// const pear = new User('Pear', 'pear@gmail.com');
// console.log(pear);
// // pear.sayHello();

// class User {
//   constructor(name, email) {
//     this.name = name; // Ім'я користувача
//     this.email = email; // Пошта користувача
//   }

  // // Метод для привітання
  // sayHello() {
  //   console.log(`Привіт, мене звати ${this.name}, моя пошта: ${this.email}`);
  // }

  // // Метод для оновлення імені
  // updateName(newName) {
  //   this.name = newName;
  //   console.log(`Ім'я оновлено на: ${this.name}`);
  // }

//   // Метод для оновлення пошти
//   updateEmail(newEmail) {
//     this.email = newEmail;
//     console.log(`Пошта оновлена на: ${this.email}`);
//   }
// }
// // Створення екземплярів класу
// const mango = new User('Mango', 'mango@example.com');
// console.log(mango);
// mango.sayHello();

// // Оновлюємо ім'я та пошту для Mango
// mango.updateName('Mango Updated');
// mango.updateEmail('updated_mango@example.com');
// mango.sayHello();

// const poly = new User('Poly', 'poly@example.com');
// console.log(poly);
// poly.sayHello();

// // Оновлюємо пошту для Poly
// poly.updateEmail('new_poly@example.com');
// poly.sayHello();

// class Car {
//   constructor(make, model, year) {
//     this.make = make; // Марка автомобіля
//     this.model = model; // Модель автомобіля
//     this.year = year; // Рік випуску
//   }

//   // Метод для виводу інформації про автомобіль
//   displayInfo() {
//     console.log(`Автомобіль: ${this.make} ${this.model}, ${this.year} року`);
//   }

//   // Метод для оновлення моделі автомобіля
//   updateModel(newModel) {
//     this.model = newModel;
//     console.log(`Модель оновлена на: ${this.model}`);
//   }

//   // Метод для оновл
// // Метод для оновлення року випуску
//   updateYear(newYear) {
//     this.year = newYear;
//     console.log(`Рік випуску оновлено на: ${this.year}`);
//   }
// }

// Створення екземплярів класу
//const car1 = new Car('Toyota', 'Camry', 2020);
//console.log(car1);
//car1.displayInfo();

// Оновлюємо модель та рік для car1
// car1.updateModel('Corolla');
// car1.updateYear(2022);
// car1.displayInfo();

// const car2 = new Car('Honda', 'Civic', 2018);
// console.log(car2);
// car2.displayInfo();

// // Оновлюємо рік для car2
// car2.updateYear(2021);
// car2.displayInfo();

// //car3
// const car3 = new Car('Maserati', 'MC20', 2021);
// console.log(car3);
// car3.displayInfo();

class Student {
  constructor(name, grade, email) {
    this.name = name; 
    this.grade = grade; 
    this.email = email; 
  }
  studentName() {
    console.log(`The name of the student is: ${this.name}`);
  }
  updateGrade(newGrade) {
    this.grade = newGrade;
  }
  displayInfo() {
    console.log(`Student name: ${this.name}, Grade: ${this.grade}, Email: ${this.email}`);
    
  }
};

const mango = new Student('Mango', 10, 'mango@example.com');
mango.studentName();
mango.updateGrade(11);
mango.displayInfo();
