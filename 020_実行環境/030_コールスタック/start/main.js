// コールスタック
// 実行中のコードがたどってきたコンテキストの積み重ね
// コンテキストが消滅する
// LIFO
function a() {}
function b() {
  a();
}
function c() {
  b();
}
c();
