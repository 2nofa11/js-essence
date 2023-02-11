const wm = new WeakMap(); //プライベート変数の定義の仕方

export class Person {
  constructor(name, age) {
    // this._name = name;
    wm.set(this, {
      name,
    });
  }

  hello() {
    console.log(`hello ${wm.get(this).name}`);
  }
}
