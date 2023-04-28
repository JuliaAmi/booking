import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  name: "AuthUser"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  if (_ctx.$page.props.authUser) {
    _push(`<div${ssrRenderAttrs(_attrs)}><p><b>${ssrInterpolate(_ctx.$page.props.authUser.name)}</b></p><p><small>${ssrInterpolate(_ctx.$page.props.authUser.email)}</small></p>`);
    _push(ssrRenderComponent(_component_inertia_link, {
      href: "/logout",
      method: "post",
      as: "button"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Выход`);
        } else {
          return [
            createTextVNode("Выход")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Share/Common/AuthUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AuthUser as A
};
