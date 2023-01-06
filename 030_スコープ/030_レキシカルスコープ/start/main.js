// コードを書く場所によって参照できるスコープが変わる
// =静的スコープ

let a = 2;
function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
    // クロージャにて確認できる
    // 自身のスコープの外側=外部スコープ
    console.log(b);
  }
  fn2();
}
debugger;
fn1();
