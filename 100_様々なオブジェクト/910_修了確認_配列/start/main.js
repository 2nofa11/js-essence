/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
  push(num) {
    super.push(num);
    return this;
  }
  map(func) {
    let newArry = new MyArray();
    for (const v of this) {
      newArry.push(func(v));
    }
    return newArry;
  }

  filter(func) {
    let newArry = new MyArray();
    for (const v of this) {
      if (func(v)) {
        newArry.push(v);
      }
    }
    return newArry;
  }
  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }
  reduce(func, init = 0) {
    let returnVal = init;
    for (const v of this) {
      returnVal = func(returnVal, v);
    }
    return returnVal;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
  .map(double)
  .push(5)
  .print()
  .filter(function (v, i) {
    return v > 2;
  })
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
