function Person1(name, age) {
  this.name = name;
  this.age = age;
}

Person1.hello = function () {
  console.log("huuu");
};
Person1.hello();

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    console.log("hello");
    return this._name;
  },
  set: function (val) {
    this._name = val;
  },
});

const p1 = new Person1("bob", 23);
p1.name = "tom";
console.log(p1.name);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    console.log("hello");
    return this._name;
  }
  set name(val) {
    this._name = val;
  }

  static hello() {
    console.log("huga", this);
  }
}

const p2 = new Person2("Jhon", 30);
console.log(p2);

Person2.hello(); // 静的メソッド
