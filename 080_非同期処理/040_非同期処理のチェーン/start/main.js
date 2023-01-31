function sleep(callBack, value) {
  setTimeout(function () {
    console.log("hello", value++);
    callBack(value);
  }, 1000);
}
// 非同期のチェーンをつなげるためにコールバックを用いる
sleep(function (value) {
  //   console.log("done");
  sleep(function (value) {
    sleep(function (value) {}, value);
  }, value);
}, 0);
