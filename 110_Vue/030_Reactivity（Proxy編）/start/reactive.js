const handler = {
  get(target, key, value, receiver) {
    const res = Reflect.get(target, key, value, receiver);
    console.log("%c[reactive:get]", "background:green");
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    trigger();
    console.log("%c[reactive:get]", "background:red");
    return res;
  },
};

let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
}
function trigger() {
  activeEffect();
}
function reactive(target) {
  return new Proxy(target, handler);
}

export { reactive, effect };
