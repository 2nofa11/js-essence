let d = 0;
function fn() {
  let d = 1;
  const fn1 = new Function("a", "b", "return a + b * d");
  return fn1;
}

const f = fn();
const result = f(1, 2);
console.log(result);

const fn2 = function (a, b) {
  return a + b;
};
console.log(fn2.prototype);
console.log(fn2 instanceof Function);

// オブジェクトであることの証明
// fn2=Functionから生成されている→インスタンスである（つまりOBJ？）
