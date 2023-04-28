import { r as replaceHtmlLinksToInertiaLinks } from "./helpers-5224295f.mjs";
import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/vue3";
import "zooming";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main = {
  name: "AdminPagesIndex",
  layout: AdminLayout,
  mounted() {
    $("#table").dataTable({
      serverSide: true,
      processing: true,
      ajax: "/admin/pages",
      columns: [
        { data: "id", name: "id" },
        { data: "title", name: "title" },
        { data: "slug", name: "slug" },
        { data: "is_active", name: "is_active" },
        { data: "created_at", name: "created_at" },
        { data: "updated_at", name: "updated_at" },
        { data: "actions", name: "actions", orderable: false }
      ],
      fnDrawCallback: function() {
        replaceHtmlLinksToInertiaLinks("#table");
      }
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>Управление страницами</h1>`);
  if (_ctx.$page.props.authUser.permissions.includes("pages-create")) {
    _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/pages/create" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Создать новую страницу `);
        } else {
          return [
            createTextVNode(" Создать новую страницу ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><table id="table" class="display" style="${ssrRenderStyle({ "width": "100%" })}" data-turbolinks="false"><thead><tr><th>ID</th><th>Название</th><th>Slug</th><th>Статус</th><th>Создана</th><th>Обновлена</th><th>Операции</th></tr></thead><tbody></tbody></table></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPagesIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminPagesIndex as default
};
