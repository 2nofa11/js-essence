// 関数スコープ
function a() {
  let b = 0;
  console.log(b);
}
// 実行コードから見えない
// console.log(b);
a();

// ブロックスコープ
{
  let c = 1;
  console.log(c);
  const d = function () {
    console.log("hoge");
  };
}
