/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

// _は外から操作するな
class Calculator {
  constructor() {
    this.count = 0;
    this._operator = "";
  }
  set(num) {
    switch (this._operator) {
      case "plus":
        this.count = this.count + num;
        console.log(this.count);
        break;
      case "minus":
        this.count = this.count - num;
        console.log(this.count);
        break;
      case "mutiply":
        this.count = this.count * num;
        console.log(this.count);
        break;
      case "divide":
        this.count = this.count / num;
        console.log(this.count);
        break;
      default:
        this.count = num;
        break;
    }
    this._operator = "";
    return this;
  }
  plus() {
    this._operator = "plus";
    return this;
  }
  minus() {
    this._operator = "minus";
    return this;
  }
  divide() {
    this._operator = "divide";
    return this;
  }
  mutiply() {
    this._operator = "mutiply";
    return this;
  }
}

const calc = new Calculator();
calc.set(10).minus().set(3).mutiply().set(6).divide().set(2).plus().set(2);
