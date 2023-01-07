// レキシカルスコープの変数を関数が使用している状態
// プライベートと動的が使える

function incrementFactory() {
  // 関数スコープに収める
  let num = 0;
  function increment() {
    num++;
    console.log(num);
  }
  // 関数を返す
  return increment;
}

const increment = incrementFactory();
increment();
increment();
