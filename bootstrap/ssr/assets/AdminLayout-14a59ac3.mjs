import { useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { A as AuthUser } from "./AuthUser-6fb0c5dc.mjs";
const MenuItemComponent_vue_vue_type_style_index_0_scoped_1f6e6f8b_lang = "";
const _sfc_main$2 = {
  name: "MenuItemComponent",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_MenuItemComponent = resolveComponent("MenuItemComponent", true);
  _push(`<!--[-->`);
  ssrRenderList($props.menu, (item) => {
    _push(`<li data-v-1f6e6f8b>`);
    if (item.url !== null) {
      _push(ssrRenderComponent(_component_inertia_link, {
        href: item.url,
        class: { "active": item.is_active }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<span data-v-1f6e6f8b>${ssrInterpolate(item.title)}</span>`);
    }
    if (item.children.length) {
      _push(`<ul data-v-1f6e6f8b>`);
      _push(ssrRenderComponent(_component_MenuItemComponent, {
        menu: item.children
      }, null, _parent));
      _push(`</ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Share/Admin/Menu/MenuItemComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MenuItemComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1f6e6f8b"]]);
const _sfc_main$1 = {
  name: "MenuComponent",
  components: {
    MenuItemComponent
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MenuItemComponent = resolveComponent("MenuItemComponent");
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<nav${ssrRenderAttrs(_attrs)}><ul>`);
  _push(ssrRenderComponent(_component_MenuItemComponent, {
    menu: _ctx.$page.props.menu.data
  }, null, _parent));
  _push(`</ul>`);
  if (!_ctx.$page.props.authUser) {
    _push(`<ul><li>`);
    _push(ssrRenderComponent(_component_inertia_link, { href: "/login" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Авторизация`);
        } else {
          return [
            createTextVNode("Авторизация")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_inertia_link, { href: "/register" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Регистрация`);
        } else {
          return [
            createTextVNode("Регистрация")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Share/Admin/Menu/MenuComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "AdminLayout",
  components: {
    AuthUser,
    MenuComponent
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AuthUser = resolveComponent("AuthUser");
  const _component_MenuComponent = resolveComponent("MenuComponent");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_AuthUser, null, null, _parent));
  _push(ssrRenderComponent(_component_MenuComponent, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminLayout as A
};
