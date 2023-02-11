const arry = [1, 2, 3, 4, 5];

// arry.forEach((v) => {
//   console.log(v);
// });

const newArry = arry.map((v, i, arry) => {
  console.log(v);
  return arry;
});

// console.log(newArry);

const fillterArry = arry.filter((a) => {
  return a % 2 === 0;
});
console.log(fillterArry);
