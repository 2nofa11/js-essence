function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error();
  return val;
}

init()
  .then((val) => console.log("hello", val))
  .catch(function () {
    console.log("E");
  });
// sleep(0)
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
