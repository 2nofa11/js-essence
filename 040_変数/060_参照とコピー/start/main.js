let a = "hello";
let b = a;
b = "bye";
console.log(a);
console.log(b);

let c = {
  prop: "hello",
};
let d = c;
// 参照の切り替えを行う
d = {};
d.prop = "bye";
console.log(c);
console.log(d);
