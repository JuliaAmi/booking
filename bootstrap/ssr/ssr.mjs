import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      let parts = name.split("::");
      if (parts.length > 1) {
        return resolvePageComponent(`../../Modules/${parts[0]}/Resources/assets/js/Pages/${parts[1]}.vue`, /* @__PURE__ */ Object.assign({ "../../Modules/Dashboard/Resources/assets/js/Pages/Admin/AdminDashboardIndex.vue": () => import("./assets/AdminDashboardIndex-bba6ff26.mjs"), "../../Modules/Menu/Resources/assets/js/Pages/Admin/AdminMenuIndex.vue": () => import("./assets/AdminMenuIndex-5a1ed5f8.mjs"), "../../Modules/Menu/Resources/assets/js/Pages/Admin/AdminMenuModify.vue": () => import("./assets/AdminMenuModify-242e72c8.mjs"), "../../Modules/Menu/Resources/assets/js/Pages/Admin/infra/MenuItem.vue": () => import("./assets/MenuItem-64aea80b.mjs"), "../../Modules/Menu/Resources/assets/js/Pages/Admin/infra/NestedDraggable.vue": () => import("./assets/NestedDraggable-55101729.mjs"), "../../Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesIndex.vue": () => import("./assets/AdminPagesIndex-a2773951.mjs"), "../../Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesModify.vue": () => import("./assets/AdminPagesModify-3fb2cc04.mjs"), "../../Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesShow.vue": () => import("./assets/AdminPagesShow-336e7ecf.mjs"), "../../Modules/Pages/Resources/assets/js/Pages/Guest/GuestPagesIndex.vue": () => import("./assets/GuestPagesIndex-ea761077.mjs"), "../../Modules/Pages/Resources/assets/js/Pages/Guest/GuestPagesShow.vue": () => import("./assets/GuestPagesShow-bba29373.mjs"), "../../Modules/Promos/Resources/assets/js/Pages/Admin/AdminPromosIndex.vue": () => import("./assets/AdminPromosIndex-cf691fb1.mjs"), "../../Modules/Promos/Resources/assets/js/Pages/Admin/AdminPromosModify.vue": () => import("./assets/AdminPromosModify-b6dc258e.mjs"), "../../Modules/Roles/Resources/assets/js/Pages/Admin/AdminRolesIndex.vue": () => import("./assets/AdminRolesIndex-9729c912.mjs"), "../../Modules/Roles/Resources/assets/js/Pages/Admin/AdminRolesModify.vue": () => import("./assets/AdminRolesModify-40e2fb96.mjs"), "../../Modules/Users/Resources/assets/js/Pages/Admin/AdminUsersIndex.vue": () => import("./assets/AdminUsersIndex-1f3f13a2.mjs"), "../../Modules/Users/Resources/assets/js/Pages/Admin/AdminUsersModify.vue": () => import("./assets/AdminUsersModify-45dd7a14.mjs") }));
      } else {
        return resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": () => import("./assets/Login-53779b2a.mjs"), "./Pages/Auth/Register.vue": () => import("./assets/Register-50623855.mjs"), "./Pages/Error.vue": () => import("./assets/Error-13b53302.mjs") }));
      }
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).component("inertia-link", Link).component("inertia-head", Head);
    }
  })
);
