new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve("hello");
  // reject("bye");
  setTimeout(() => {
    resolve("hello");
  }, 1000);
})
  .then(function (data) {
    console.log("then", data);
    return data;
    // throw new Error();
  })
  .catch(function (d) {
    console.log("catch", d);
  })
  .finally(function (data) {
    console.log("finally", data);
  });
console.log("Global end");

// さらで書けねー、、、
// new Promise(function (resolve, reject) {
//   resolve(time(function (value) {}, 0));
// }).then(function (data) {
//   console.log(data);
// });

// function time(callBack, val) {
//   setTimeout(() => {
//     console.log(val++);
//     callBack(val);
//   }, 1000);
// }
