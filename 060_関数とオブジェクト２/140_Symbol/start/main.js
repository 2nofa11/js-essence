// プロパティの重複を避けられる関数

const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(typeof s);

// どのように利用されているか？
const str = new String("tom");
console.log(str);
// Symbolの経緯

String.prototype[s] = function () {
  return "hello" + this;
};
String.prototype[s2] = function () {};
const tom = "Tom";
console.log(tom[s]()); // sという変数に入っているシンボル
