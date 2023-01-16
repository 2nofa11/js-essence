function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log("Own hello " + this.name);
  };
}
// 自身、コンストラクタのプロトタイプ、継承元

// Person.prototype.hello = function () {
//   console.log("P hello " + this.name);
// };

Object.prototype.hello = function () {
  console.log("O hello " + this.name);
};
const bob = new Person("Bob", 18);
bob.hello();

const result = bob.hasOwnProperty("name");
console.log(result);
