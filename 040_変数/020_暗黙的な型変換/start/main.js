let a = 0;
printTypeAndValue(a);

let b = parseInt("10");
printTypeAndValue(b);

let c = 15 - b;
printTypeAndValue(c);

// null = 空
let d = c - null;
printTypeAndValue(d);

let e = d - true;
printTypeAndValue(e);

function printTypeAndValue(val) {
  console.log(typeof val, val);
}
