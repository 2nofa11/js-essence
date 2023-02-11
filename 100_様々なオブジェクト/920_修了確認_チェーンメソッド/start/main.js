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
    for (let prop in this) {
      iteratableObject[prop] = func(this[prop]);
    }
    return iteratableObject;
  }
  set(key, value) {
    // いてもいなくても関係ないはず
    // if (key in this) return this;

    const iteratableObject = new IteratableObject();
    for (let prop in this) {
      iteratableObject[prop] = this[prop];
    }
    iteratableObject[key] = value;
    return iteratableObject;
  }
  filter(func) {
    const iteratableObject = new IteratableObject();
    for (let prop in this) {
      if (func(this[prop], prop)) {
        iteratableObject[prop] = this[prop];
      }
    }
    return iteratableObject;
  }
  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }
}

function prefix(v, i, obj) {
  return "prefix-" + v;
}

const original = new IteratableObject({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});

const result = original.set("key4", "value4").filter(function (val, key) {
  console.log(val, key);
  return key === "key4";
});

// for (const i of result) {
//   console.log(i);
// }

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
/**
 * 期待する出力結果
 * original
 * {key1: "value1", key2: "value2", key3: "value3"}
 *
 * result
 * {key4: "value4"}
 */
