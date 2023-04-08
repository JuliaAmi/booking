import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": () => import("./assets/About-c41c390b.mjs"), "./Pages/Welcome.vue": () => import("./assets/Welcome-feef8a49.mjs") });
      return pages[`./Pages/${name}.vue`]();
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).component("inertia-link", Link).component("inertia-head", Head);
    }
  })
);
