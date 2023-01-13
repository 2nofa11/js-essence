window.name = "John";

const person = {
  name: "Tom",
  counter: 0,
  hello: function () {
    this.counter++;
    console.log("Hello " + this.name, this.counter);
  },
};
person.hello();

function fn(ref) {
  ref();
}

const helloTom = person.hello.bind(person);
fn(helloTom);

function a(name) {
  console.log("hello" + name);
}
const b = a.bind(null, "Tim"); // thisまたは引数を固定できる
b("huga");
