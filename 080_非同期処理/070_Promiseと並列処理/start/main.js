function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

// 反復可能オブジェクト
Promise.allSettled([sleep(2), sleep(5)]).then(function (d) {
  console.log(d);
});
// sleep(0)
//   .then(function (val) {
//     return Promise.all([sleep(2), sleep(5)]);
//   })
//   .then(function (val) {
//     console.log(val);
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });

// 反復可能オブジェクトにPriomiseのインスタンスを追加する
