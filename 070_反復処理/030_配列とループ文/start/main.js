const arry = [1, 2, 3, 4, 5];

// for (let i = 0; i < arry.length; i++) {
//   console.log(i);
// }

// let j = 0;
// while (j < arry.length) {
//   console.log(j);
//   j++;
// }

let v = 0;
let i = 0;
while ((v = arry[i++])) {
  console.log(v);
}
