// 値（オペランド）をもとに処理して、結果を返す

// let a = (1 + 2) * 3;
let a = 0;
console.log(a);

// let b = ++a;
// let b;
// a = b = a + 1;

// let b = a++;
let b;
a = (b = a) + 1;
console.log(b);

function fn() {
  let a = 0;
  return a++;
}

console.log(!(fn() * 5));
