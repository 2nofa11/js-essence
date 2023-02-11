/**
 * 問題：
 * オブジェクトの状態をlocalStorageに保存してみましょう。
 * 以下の要件に従ってlocalStorageに状態を保持するオブジェクト
 * を作成してみてください。
 *
 * １．オブジェクトの値が変更された場合に
 * オブジェクトをJSONに変換してlocalStorageに
 * 登録します。localStorageに登録する際のキー
 * は"test-data"としてください。
 *
 * ２．プログラムが実行される際にlocalStorage
 * を指定のキーで検索し、JSONがすでに登録されて
 * いる場合には、そのJSONからオブジェクトを復元し
 * 初期値のオブジェクトとしてください。
 */
const KEY = "test-data";
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
    const json = JSON.stringify(target);
    localStorage.setItem(KEY, json);
  },
};

const result = localStorage.getItem(KEY);

const targetObj = JSON.parse(result);
const pxy = new Proxy(targetObj, handler);
console.log("init", pxy);
pxy.name = "Tom";
console.log("change", pxy);
pxy.name = "piyo";
console.log("change2", pxy);
