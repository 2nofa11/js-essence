let activeEffect = null;

function trigger() {
  activeEffect();
}
function effect(func) {
  activeEffect = func;
}

export { trigger, effect };
