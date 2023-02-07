// プロパティの操作に独自の処理を追加するためのオブジェクト

const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error("readonly");
  },
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);

    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return -1; // 値がなかった場合のデフォルト値
    }
    // return target[prop];
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    // delete target[prop];
    throw new Error("readonly");
  },
};
const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;

// delete pxy.a;
console.log(pxy.a);
console.log(pxy.b);
