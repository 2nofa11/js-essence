class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("hello " + this.name);
  }
}

const bob = new Person("bob", 20);
console.log(bob);
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.hello = function () {
//   console.log("hello " + this.name);
// };

// クラスはコンストラクタ関数をクラス表記で書けるようにしたもの
// 簡単にかけうようにした、シンタックスシュガー
// 裏側で動いている仕組みを理解できてるとガチで学べてる！
