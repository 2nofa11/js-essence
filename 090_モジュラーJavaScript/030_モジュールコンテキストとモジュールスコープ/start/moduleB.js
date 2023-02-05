import "./moduleA.js";

console.log(this);

function fn() {
  console.log(this);
}
fn(); //windowオブジェクトは問れなくなる

const obj = {
  fn,
};

obj.fn();
console.log(window);
console.log(window.d);
