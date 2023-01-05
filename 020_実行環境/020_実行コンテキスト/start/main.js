// コードを実行する際の文脈
// ⇒実行コンテキスト（グローバルと関数）
// 実行中のコンテキスト内とαが使える

let a = 5;

function b() {
  console.log(this, arguments, a);
  //関数コンテキスト
}

// console.log(a);
b();
