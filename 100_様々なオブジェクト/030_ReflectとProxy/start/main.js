const targetObj = {
  a: 0,
  get value() {
    return this.b;
  },
};
// プロキシも同じようなことできる
const handler = {
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    console.log(receiver);
    if (target.hasOwnProperty(prop)) {
      return Reflect.get(target, prop, receiver); //バインドさせてる！
    } else {
      return -1;
    }
  },
};
const pxy = new Proxy(targetObj, handler);
console.log(pxy.value);
// console.log(pxy.a);
