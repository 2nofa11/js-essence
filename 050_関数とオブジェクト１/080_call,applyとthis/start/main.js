function a(lname) {
  console.log("hello " + this.name + lname);
}

const b = a.bind({ name: "Tim" }, "cook");

b();
const tim = { name: "Tim" };
a.apply(tim, ["cook"]); //関数が実行まで行われる
a.call(tim, "cook");

const array = [1, 9, 2];

console.log(Math.max.apply(null, array));
console.log(Math.max(...array));
