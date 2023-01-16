function F(a, b) {
  this.a = a;
  this.b = b;
  //   const result = new Object();
  //   result.a = 1;
  //   return result;
}

F.prototype.c = function () {};

const instance = new F(1, 2);
console.log(instance);
console.log(instance instanceof F);
console.log(instance.__proto__ === Object.prototype); // instanseofはprototypeの値を確認している

// instanceof ⇒作成元のコンストラクターが割り出せる
// ⇒条件分岐が使えるようになる

function fn(arg) {
  if (arg instanceof Array) {
    arg.push("value");
  } else {
    arg["key"] = "value";
  }
  console.log(arg);
}
fn({});
fn([]);
