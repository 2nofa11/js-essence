const a = {
  prop: 0,
};

const b = {
  prop: 0,
};

// オブジェクトの参照先が変わっているからNG
console.log(a === b);
console.log(a.prop === b.prop);
