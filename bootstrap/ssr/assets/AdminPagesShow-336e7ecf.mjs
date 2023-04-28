import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { r as replaceHtmlLinksToInertiaLinks } from "./helpers-5224295f.mjs";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
import "@inertiajs/vue3";
import "zooming";
const _sfc_main = {
  name: "AdminPagesShow",
  layout: AdminLayout,
  props: {
    page: Object
  },
  mounted() {
    replaceHtmlLinksToInertiaLinks("#content");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.page.title)}</h1><div id="content">${$props.page.content}</div>`);
  _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/pages" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Вернуться назад`);
      } else {
        return [
          createTextVNode("Вернуться назад")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesShow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPagesShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminPagesShow as default
};
