const arry = ["a", "b", "c"];

// 反復操作を行う際に使用するイテレーターにて反復
arry[4] = "e";

Object.prototype.method = function () {};

Object.defineProperty(arry, 0, {
  enumerable: false,
});
const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);

for (let v of arry) {
  console.log(v);
}
