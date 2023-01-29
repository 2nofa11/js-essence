// スレッド：一本の糸（mainスレッド）
// JS実行>レンダリング
// 同期処理ではメインスレッドでコードが順番に実行される（スレッド遵守）

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log("sleep done");
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("button clicked");
});

setTimeout(() => {
  sleep(3000);
}, 3000); //メインスレッドが開放される

// 一時的にメインスレッドから処理をきりはなす
