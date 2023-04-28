import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import NestedDraggable from "./NestedDraggable-55101729.mjs";
import { debounce } from "lodash";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
import "vue-draggable-next";
import "./MenuItem-64aea80b.mjs";
const _sfc_main = {
  name: "AdminMenuIndex",
  layout: AdminLayout,
  components: {
    NestedDraggable
  },
  props: {
    menus: Array
  },
  methods: {
    rebuildTree: debounce(function() {
      let index = 1;
      this.menus.forEach(function(item) {
        item.sort = index++;
      });
      axios.post("/admin/menus/rebuild", { menu: this.menus }).catch((error) => {
      });
    }, 300)
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_NestedDraggable = resolveComponent("NestedDraggable");
  _push(`<!--[--><h1>Управление меню сайта</h1>`);
  if (_ctx.$page.props.authUser.permissions.includes("menu-create")) {
    _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/menus/create" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Создать пункт меню `);
        } else {
          return [
            createTextVNode(" Создать пункт меню ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_NestedDraggable, {
    onSort: $options.rebuildTree,
    menu: $props.menus
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Menu/Resources/assets/js/Pages/Admin/AdminMenuIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminMenuIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminMenuIndex as default
};
