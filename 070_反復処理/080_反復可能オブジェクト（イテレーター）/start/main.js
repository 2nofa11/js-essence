const items = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

// const items = Object.entries(obj); //for of配列のため

Object.prototype[Symbol.iterator] = function () {
  //   console.log(this);
  let _this = this;
  const keys = Object.keys(this); //プロパティを配列
  //   console.log(keys); レキシカルスコープとスコープチェーン参照
  let i = 0;
  return {
    next() {
      //   console.log(this);
      let key = keys[i++];
      return { value: [key, _this[key]], done: i > keys.length };
    },
  };
};

for (let [j, k] of items) {
  console.log(j);
}
