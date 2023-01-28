/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 *
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 *
 * の値が順番にコンソールに表示されます。
 */

const it = genStep({ min: 4, max: 10, step: 2 });

function* genStep({ min = 1, max = 2, step = 1 } = {}) {
  let i = min - step;
  while (i < max) {
    yield (i = i + step);
  }
  return;
}
console.log(it);
for (let value of it) {
  console.log(value);
}

// const it2 = genStep({});
// for (let value of it2) {
//   console.log(value);
// }
