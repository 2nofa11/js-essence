/**
 * 問題：
 * 以下の即時関数をモジュール化してください。
 * ※calcオブジェクトはmain.js内で行い、実行してください。
 */
let val = 0;
export const calc = {
  plus: function (target) {
    const newVal = this.val + target;
    console.log(`${this.val} + ${target} = ${newVal}`);
    this.val = newVal;
  },
  minus: function (target) {
    const newVal = this.val - target;
    console.log(`${this.val} - ${target} = ${newVal}`);
    this.val = newVal;
  },
  multiply: function (target) {
    const newVal = this.val * target;
    console.log(`${this.val} x ${target} = ${newVal}`);
    this.val = newVal;
  },
  divide: function (target) {
    const newVal = this.val / target;
    console.log(`${this.val} / ${target} = ${newVal}`);
    this.val = newVal;
  },
};
