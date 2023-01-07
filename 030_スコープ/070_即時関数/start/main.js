// 一度だけ実行される関数＝コンストラクタ？IIFE

// これをまとめたい！って時に
function a() {
  console.log("called");
}
a();

(function () {
  console.log("called");
})();
// ()関数の実行とグループ化[演算の優先順位を上げる]

let b = (function (d) {
  //　一度しか初期化されないのが即時関数によって保障される
  let privateValue = 0;
  let publicValue = 10;
  function privateFn() {
    console.log("privateFn");
  }
  function publicFn() {
    console.log("publicFn" + publicValue++);
  }
  console.log("called" + d);
  return { privateValue, publicFn };
})(10);
console.log(b);
// b.privateFn();
b.publicFn();
b.publicFn();
b.publicFn();
b.publicFn();
