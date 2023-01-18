// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   hello() {
//     console.log("hello " + this.name);
//   }
// }

// class Japanese extends Person {
//   constructor(name, age, gender) {
//     super(name, age); //ほかのクラスを継承したコンストラクタ
//     this.gender = gender;
//   }

//   hello() {
//     super.hello();
//     console.log("Konnichiwa " + this.name);
//   }

//   bye() {
//     console.log("Sayonara " + this.name);
//   }
// }

// // 関数コンテキストの一つ。特別な条件下で使用可能
// // 基本はクラス内で使用したい

// const taro = new Japanese("Taro", 23, "Male");
// console.log(taro);
// taro.bye();
// taro.hello();
const american = {
  hello() {
    console.log("hello " + this.name);
  },
};

const bob = {
  name: "Bob",
  hello() {
    super.hello();
    console.log("hello " + this.name);
  },
};
Object.setPrototypeOf(bob, american);
bob.hello();
