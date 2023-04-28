import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main = {
  name: "AdminDashboardIndex",
  layout: AdminLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Панель управления</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Dashboard/Resources/assets/js/Pages/Admin/AdminDashboardIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminDashboardIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminDashboardIndex as default
};
