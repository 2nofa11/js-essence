function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

// 別コンストラクター関数のプロトタイプを受け継いで、
// 機能を流用できるようにすること。(コンストラクタ間で機能の受け渡しができる)

// extendsはクラスの継承

function Japanese(name, age, gender) {
  // 関数コンテキストはThis
  Person.call(this, name, age);
  this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);
const taro = new Japanese("taro", 21, "men");
console.log(taro);

Japanese.prototype.bye = function () {
  console.log("さよなら" + this.name);
};
