import { G as GuestLayout } from "./GuestLayout-ab27d8a2.mjs";
import { r as replaceHtmlLinksToInertiaLinks, w as wrapTables, z as zoomImages } from "./helpers-5224295f.mjs";
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
import "@inertiajs/vue3";
import "zooming";
const _sfc_main = {
  name: "GuestPagesShow",
  layout: GuestLayout,
  props: {
    page: Object
  },
  mounted() {
    replaceHtmlLinksToInertiaLinks("#content");
    wrapTables("#content");
    zoomImages();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_head = resolveComponent("inertia-head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_inertia_head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($props.page.title)}</title><meta name="description"${ssrRenderAttr("content", $props.page.meta_description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", $props.page.meta_keywords)}${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.page.title), 1),
          createVNode("meta", {
            name: "description",
            content: $props.page.meta_description
          }, null, 8, ["content"]),
          createVNode("meta", {
            name: "keywords",
            content: $props.page.meta_keywords
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1>${ssrInterpolate($props.page.title)}</h1><div id="content">${$props.page.content}</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Pages/Resources/assets/js/Pages/Guest/GuestPagesShow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GuestPagesShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  GuestPagesShow as default
};
