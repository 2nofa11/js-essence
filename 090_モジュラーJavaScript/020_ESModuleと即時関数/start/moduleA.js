console.log("ESM called");

let privateVal = 1;
export let publicVal = { prop: 10 };

export function publicFn() {
  console.log("publicFn called: " + publicVal.prop++);
  privateVal++;
}

function privateFn() {} // 外からは呼べない
