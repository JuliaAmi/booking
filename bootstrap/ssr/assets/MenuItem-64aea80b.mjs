import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const MenuItem_vue_vue_type_style_index_0_scoped_c9feb4ef_lang = "";
const _sfc_main = {
  name: "MenuItem",
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-c9feb4ef><div style="${ssrRenderStyle({ "display": "flex", "align-content": "center", "justify-content": "space-between" })}" data-v-c9feb4ef><div data-v-c9feb4ef><div data-v-c9feb4ef>${ssrInterpolate($props.menuItem.is_active ? "Активна" : "Не активна")}</div><div data-v-c9feb4ef>${ssrInterpolate($props.menuItem.title)}</div><div data-v-c9feb4ef>${ssrInterpolate($props.menuItem.url)}</div></div><div data-v-c9feb4ef>`);
  if (_ctx.$page.props.authUser.permissions.includes("menu-update")) {
    _push(ssrRenderComponent(_component_inertia_link, {
      href: `/admin/menus/${$props.menuItem.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Редактировать `);
        } else {
          return [
            createTextVNode(" Редактировать ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.authUser.permissions.includes("menu-delete")) {
    _push(ssrRenderComponent(_component_inertia_link, {
      href: `/admin/menus/${$props.menuItem.id}`,
      as: "button",
      method: "delete",
      preserveState: false
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Удалить `);
        } else {
          return [
            createTextVNode(" Удалить ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Menu/Resources/assets/js/Pages/Admin/infra/MenuItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9feb4ef"]]);
export {
  MenuItem as default
};
