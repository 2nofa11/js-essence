// オブジェクトとは切り離される
const a = {
  prop: 0,
};

let { prop } = a;

prop = 1;
console.log(a, prop);

// 分割代入で中身を抽出して使う
function fn({ prop }) {
  prop = 2;
  console.log(a, prop);
}

fn(a);

const c = {
  prop1: {
    prop2: 0,
  },
};

let { prop1 } = c;
console.log(prop1);
prop1.prop2 = 3;
console.log(c, prop1);
