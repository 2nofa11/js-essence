// "use strict"; で挙動をエラーにできる

// プロパティの設定値
// value
// conf
// enumeble
// write 値の書き換え

// const obj = { prop: 0 }; //オブジェクトリテラル

const obj = {};
Object.defineProperty(obj, "prop", {
  value: 0,
  //   configurable: true,
  writable: true,
});

delete obj.prop;

// obj.prop = 1;

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);
