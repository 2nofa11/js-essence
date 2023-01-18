function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

const bob = new Person("Bob", 18);
const result = bob.hasOwnProperty("hello"); // オブジェクトのプロパティにいるか
console.log(result);
console.log("hasOwnProperty" in bob); //指定された名前のメソッドをPTC含めて調べる
