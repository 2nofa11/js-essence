"use strict";

// const interface = "hoge";
function fn() {
  const a = 0;
  console.log(a);
  return this; //　無駄なオブジェクトを出さない
}
console.log(fn.call(3));
