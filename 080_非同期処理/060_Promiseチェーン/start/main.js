function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0)
  .then((val) => sleep(val))
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    // sleep(val);
    // return val;
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  });

// リターンにPromiseのインスタンスを書いてあげるチェーンが切れてしまう

// new Promise(function (resolve, reject) {
//   resolve(
//     sleep(function (val) {
//       return val;
//     }, 1)
//   );
// }).then((val) => {
//   sleep(function (val) {
//     return val;
//   }, val);
// });
