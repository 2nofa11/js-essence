// ①内部メソッドを呼び出す関数の格納場所
// ②Proxyと合わせて使用する

// class C {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }
// const obj1 = new C(1, 2);
// console.log(obj1);
// const obj2 = Reflect.construct(C, [1, 2]);
// console.log(obj2);

// console.log("c" in obj1);
// console.log(Reflect.has(obj1, "b"));

// const result = Reflect.defineProperty;
// console.log(result);

const bob = {
  name: "Bob",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: "Tom",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  // プロパティにアクセスするときの初期結果
  // クラスのレクチャーでもやってたらしい
  get hello() {
    return this._hello();
  },
};
tom.hello;

//内部のメソッドに直接アクセスできる手段
Reflect.get(tom, "hello", bob);
