const arry = [1, 2, 3, 4, 5];

// for (let i = 0; i < arry.length; i++) {
//   console.log(i);
// }

// let j = 0;
// while (j < arry.length) {
//   console.log(j);
//   j++;
// }

// let v = 0;
// let i = 0;
// while ((v = arry[i++])) {
//   console.log(v);
// }

const f = (value) => {
  return new Promise((resolve) => {
    console.log("開始", value);
    setTimeout(() => {
      console.log("終了", value);
      resolve();
    }, Math.random() * 1000);
  });
};

// Promise.allでやる
// const main = async () =
//   await Promise.all(["A", "B", "C"].map(async (v) => f(v)));
//   console.log("終了");
// };
// main();

// // forでやる
// const main = async () => {
//   for (const i of ["A", "B", "C"]) await f(i);
//   console.log("終了");
// };
// main();

// let p = Promise.resolve();
// ["A", "B", "C"].forEach((v) => (p = p.then(() => f(v))));
// p.then(() => console.log("END"));

const ids = ["q", "e", "r"];
const main = async () => {
  for (const id of ids) {
    await f(id);
  }
};

main();
