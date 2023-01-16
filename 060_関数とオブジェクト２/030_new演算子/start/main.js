// インスタンスを生成するための演算子

// リターンがオブジェクトだった場合、オブジェクトを返す

// オブジェクト以外だった場合、__proto__にprottypeをコピー
// thisの参照先としてコンストラクターを実行する

function F(a, b) {
  this.a = a;
  this.b = b;
  return { a: 1 };
}

F.prototype.c = function () {};

function newOpe(C, ...args) {
  //   return;
  const _this = Object.create(C.prototype); //proto追加 __に入れている
  const result = C.apply(_this, args); // オブジェクトの生成
  console.log(result, _this);
  if (typeof result === "object" && result !== null) return result;
  return _this;
}

const instance = newOpe(F, 1, 2);
// const instance = new F(1, 2);
console.log(instance);
