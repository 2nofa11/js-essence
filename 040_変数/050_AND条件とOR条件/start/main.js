const a = 0;
const b = 2;
const c = 3;
const d = 4;
// aがT/Fか？
console.log(a && b && c);
// Tなら終了
console.log(a || b || c);

console.log((a || b) && (c || d));
