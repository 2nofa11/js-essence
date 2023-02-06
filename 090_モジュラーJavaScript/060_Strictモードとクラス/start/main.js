function fn() {
  console.log(this);
}
class C1 {
  constructor() {
    fn();
    function fn1() {
      console.log(this);
    }
    fn1();
  }

  method() {
    function fn() {
      console.log(this);
    }
  }
}

const c = new C1();
c.method();
