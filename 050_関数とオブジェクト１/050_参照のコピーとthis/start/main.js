window.name = "Jhon";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
    a();
    const person = {
      name: "hoge",
      hello: function () {
        console.log("Hello " + this.name);
        a();
      },
    };
    person.hello();
  },
};
// personとは切り離される
const ref = person.hello;
ref();
// ★オブジェクトのメソッドか、関数かで変わる

function a() {
  console.log("hello" + this.name);
}
