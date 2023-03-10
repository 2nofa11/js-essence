/**
 * 問題：
 * サーバー上に配置してあるJSONファイルを取得して、
 * オブジェクトにセットしましょう。
 *
 * ただし、localStorageにすでにデータが保存されている場合
 * にはサーバーへのデータ取得は行わず、localStorageに
 * 登録されているJSONからオブジェクトを復元してください。
 */
const KEY = "test-data";
const p = Promise.resolve();
let _dirty;

class DataSource {
  static async get(KEY) {
    return DataSource.getLocal(KEY) || (await DataSource.getRemote()) || {};
  }
  static async set(KEY, target) {
    return DataSource.getLocal(KEY) || (await DataSource.getRemote()) || {};
  }
  static getLocal(KEY) {
    console.log("get from local");
    const result = localStorage.getItem(KEY);
    return JSON.parse(result);
  }
  static async getRemote() {
    console.log("get from server");
    const res = await fetch(`../json/${KEY}.json`);
    return await res.json();
  }
  static setLocal(KEY, target) {
    console.log("set to local");
    const json = JSON.stringify(target);
    localStorage.setItem(KEY, json);
  }
  static async setRemote(KEY, target) {
    console.log("set to server");
  }
}

(async () => {
  const targetObj = DataSource.get(KEY);

  const pxy = new Proxy(targetObj, {
    set(target, prop, value, receiver) {
      _dirty = true;

      const result = Reflect.set(target, prop, value, receiver);

      p.then(() => {
        if (_dirty) {
          console.log("** update data **");
          _dirty = false;
          DataSource.setLocal(KEY, target);
        }
      });

      return result;
    },
  });
  console.log("init", pxy);
  pxy.name = "Tom";
  console.log("change", pxy);
  pxy.name = "Tim";
  console.log("change2", pxy);
})();
