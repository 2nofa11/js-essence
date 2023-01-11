// 呼び出し元のオブジェクトへの参照を保持するキーワード
// →実行コンテキストによって変わる
const person = {
  name: "Tom",
  hello: function () {
    console.log("hello" + this.name);
  },
};

person.hello();
