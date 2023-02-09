const a = { a: 0 };
const json = JSON.stringify(a);

localStorage.setItem("key", json);
const result = localStorage.getItem("key");
const obj2 = JSON.parse(result);
console.log(obj2);
console.log("end");

// devツールからオブジェクトを削除するのよさそう
