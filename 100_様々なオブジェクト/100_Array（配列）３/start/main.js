const arry = [1, 2, 3, 4, 5];
// 配列を結合して値をまとめる

const result = arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr * 2;
}, 0);
// 最後でconstに返す

console.log(result);
