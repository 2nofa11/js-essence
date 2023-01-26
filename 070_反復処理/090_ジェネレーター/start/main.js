// イテレーターを簡略化できる

// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* gen(max = 10) {
  let i = 0;
  while (i < max) {
    yield i++;
  }
  return;
}

const obj = {
  *[Symbol.iterator](max = 10) {
    let i = 0;
    while (i < max) {
      yield i++;
    }
    return;
  },
};

for (const i of gen()) {
  console.log(i);
}
