for (let i = 0; i < 5; i++) {
  var j = i * 2; //スコープ外の変数だと、同一メモリを使うため実行後の値が入る

  setTimeout(() => {
    console.log(j);
  }, 1000);
} //ブロックスコープが1ループごとに切り替わる
