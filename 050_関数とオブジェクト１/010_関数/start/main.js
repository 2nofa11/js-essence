function fn() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);

  return a;
}

//　関数名のみで関数の呼び出しを決定している
let c = fn(1, undefined);
console.log(c);
// undefinedはプログラムが決めるもの
// nullは意図したもの
// argument = 関数コンテキストによって作られるもの
// ↑スプレッド演算（rest）でいいのでは？
