// コレクション（入れ物）
// Objectとマップ
// Arrayとセット

const map = new Map();

/* オブジェクト */
const key1 = { hoge: "a" };
map.set(key1, "value1");
console.log(map.get(key1));

/* 関数 */
const key2 = function () {};
map.set(key2, "value2");
console.log(map.get(key2));

/* 数値 */
let key3;
map.set((key3 = 0), "value3");
console.log(map.get(key3)); //プリミティブでの取得もできる

map.delete(key3);
for (let [m, v] of map) {
  console.log(v);
}

const s = new Set();
s.add(key1);
s.add(key2);

for (let v of s) {
  console.log(v);
}

// 特定の値をとる場合はArrayに戻す
// const array = Array.from(s);
const array = [...s];
console.log(array[0]);
