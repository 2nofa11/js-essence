/**
 * 問題：
 * 反復操作可能なオブジェクトIteratableObject
 * を作成してみましょう。
 * Arrayと同様に以下のメソッドが使用可能とします。
 *
 * set(key, value)  *1
 * forEach
 * map
 * filter
 *
 * *1:setはチェーンメソッドとしてつなげられるように実装してみてください。
 *
 * また、for...ofを使用した際にはMapと同じ挙動を取るものとします。
 *
 */
class IteratableObject {
  constructor(obj) {
    for (let prop in obj) {
      this[prop] = obj[prop];
    }
  }
  map(func) {
    const iteratableObject = new IteratableObject();
    for (let [k, v] of this) {
      iteratableObject[k] = func(v);
    }
    return iteratableObject;
  }
  set(key, value) {
    this[key] = value;
    return this;
  }
  filter(func) {
    const iteratableObject = new IteratableObject();
    for (let [k, v] of this) {
      if (func(v, k)) {
        iteratableObject[k] = this[k];
      }
    }
    return iteratableObject;
  }
  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }
  forEach(func) {
    for (let [k, v] of this) {
      func(v, k, this);
    }
  }
  *[Symbol.iterator]() {
    for (let key in this) {
      yield [key, this[key]];
    }
  } //オブジェクトに配列機能を追加している
}

function prefix(v, i, obj) {
  return "prefix-" + v;
}

const original = new IteratableObject({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});

const result = original
  .set("key4", "value4")
  .map(prefix)
  .print()
  .filter(function (val, key) {
    console.log(val, key);
    return key === "key4";
  });

for (const [k, v] of result) {
  console.log(k, v);
}

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
// original.forEach((v) => {
//   console.log(v);
// });
/**
 * 期待する出力結果
 * original
 * {key1: "value1", key2: "value2", key3: "value3"}
 *
 * result
 * {key4: "value4"}
 */
