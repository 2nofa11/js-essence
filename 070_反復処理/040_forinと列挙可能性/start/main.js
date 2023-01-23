// forin
// 列挙可能プロパティに対して順不同で繰り返す

const s = Symbol();
const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  [s]: "value4", //変数をプロパティとして使う
};
Object.prototype.method = function () {}; //列挙対象に含まれる
// Object.defineProperty(Object.prototype, "method", { enumerable: false });

const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e);

Object.defineProperty(obj, "prop1", { enumerable: false });

for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  console.log(key, obj[key]);
  //   }
}
