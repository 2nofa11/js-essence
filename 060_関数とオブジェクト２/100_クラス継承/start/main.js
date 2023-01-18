// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console, log("hello " + this.name);
  }
}
// function Japanese(name, age, gender) {
//   Person.call(this, name, age);
//   this.gender = gender;
// }

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age); // クラス特有
    this.gender = gender;
  }
  hello() {
    console.log("Konnichiwa " + this.name);
  }
  bye() {
    console.log("Sayonara " + this.name);
  }
}
// Japanese.prototype = Object.create(Person.prototype);

// Japanese.prototype.hello = function () {
//   console.log("Konnichiwa " + this.name);
// };

// Japanese.prototype.bye = function () {
//   console.log("Sayonara " + this.name);
// };

const taro = new Japanese("Taro", 23, "Male");
