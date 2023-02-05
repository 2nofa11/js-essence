import { publicFn, publicVal } from "./moduleA.js";
publicFn();
publicFn();
publicFn();
publicFn();

console.log(publicVal.prop++);
console.log(publicVal.prop++);

publicFn();
