// 関数は実行可能なオブジェクトである。
// 図を用いて説明
function a() {
  console.log("hi");
}

a.prop = 0;
a.method = function () {
  console.log("method");
};

a(); // ()で実行可能なObjを実行できる
a.method();
console.log(a.prop);
