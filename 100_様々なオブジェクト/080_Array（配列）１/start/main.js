const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);
const result = array.shift(); //popは最後
console.log(array, result);
array.unshift(0);
console.log(array);
const splice = array.splice(0, 3);
console.log(splice);

// const array2 = array.concat([1, 2]);

const array2 = [...array, 1, 2];
console.log(array2);
