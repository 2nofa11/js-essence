let a = "1";
let b = 1;
let c = true;
let e = "";
let f = 0;
let g = "0";
function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b); // 暗黙的に型変換を行う
}

printEquality(g, f);
