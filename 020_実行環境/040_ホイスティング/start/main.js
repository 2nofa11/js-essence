a();

function a() {
  console.log("a is Call");
  // console.log(c); 初期化される前のアクセスはできない
  let c = 1;

  d();
  function d() {
    console.log("d is called");
  }
}

// console.log(b);
const b = 5;
