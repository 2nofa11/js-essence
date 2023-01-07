// スコープが別スコープにまたがっている状態
// 内側スコープまで探しに行って、次スコープをみる
// グローバルスコープは一番外側
let a = 2;
window.a = 4;
function fn1() {
  //   let a = 1;
  function fn2() {
    console.log(a);
    var a = 3;
  }
  fn2();
}
fn1();
