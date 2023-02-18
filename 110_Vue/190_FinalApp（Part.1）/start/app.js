import { nodeOps } from "./nodeOps.js";
import { createVNode, patch } from "./renderer.js";
function createApp(args) {
  const { render } = args;
  const app = {};
  app.mount = function (selector) {
    const container = nodeOps.qs(selector);
    app.vnode = createVNode(); //仮想ノードが保持されているもの
    const nextNode = render();
    console.log(
      "%c[patch]",
      "background: orange; color: white;",
      app.vnode,
      nextNode
    );

    patch(app.vnode, nextNode, container);
  };
  return app;
}

export { createApp, createVNode as h };
