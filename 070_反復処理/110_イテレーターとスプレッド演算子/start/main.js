const array1 = [1, 2, 3, 4, 5];
const array2 = [1, ...array1, 6];

array1.push(6);
// console.log(array1);
// console.log(array2);

function sum(...arg) {
  let ret = 0;
  for (let v of arg) {
    ret += v;
    console.log(v);
  }
  return ret;
}

const result = sum(1, 2, 3);
console.log(result);

const obj1 = {
  prop1: "1",
  prop2: "2",
};

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};

const array3 = [...obj1];
console.log(array3);
