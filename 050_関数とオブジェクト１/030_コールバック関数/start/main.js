// 他の関数に引数として渡せる関数

function hello(name) {
  console.log("hello " + name);
}

function bye(name) {
  console.log("bye " + name);
}

function fn(cb) {
  // 何らかの処理をする
  cb("Tom"); // ()で実行
}
fn(hello);
fn(bye); // オブジェクトとして実引数に関数を渡している
fn(function () {
  console.log("hi");
});

setTimeout(hello, 1000); // 使いわわしが効くようになる(cbに引数を渡す方法はまた後日)
