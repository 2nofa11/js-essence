// オブジェクトへの参照？

const a = 0;

// プリミティブ型は値が独立している
function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}

fn1(a);

let b = {
  prop: 0,
};
// オブジェクトは参照がコピーされている
function fn2(arg2) {
  arg2.prop = 1;
  console.log(b, arg2);
}
fn2(b);

// 参照のコピーを削除した
function fn3(arg2) {
  arg2 = {};
  console.log(b, arg2);
}
fn3(b);
