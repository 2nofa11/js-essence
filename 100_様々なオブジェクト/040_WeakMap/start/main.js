// 弱い参照でオブジェクトを保持するコレクション
// 弱い？キーはオブジェクト

const wm = new WeakMap(); //forofは使えない

let o = {};
wm.set(o, "VALUE1"); //弱いオブジェクト

// o = null; // 疑似的にGCしてる
// o = {};
console.log(wm.delete(o));
console.log(wm.get(o));
