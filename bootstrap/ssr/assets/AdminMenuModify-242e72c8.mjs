import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { useForm } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main = {
  name: "AdminMenuModify",
  layout: AdminLayout,
  props: {
    menuItem: Object
  },
  data() {
    return {
      form: useForm({
        title: this.menuItem ? this.menuItem.title : "",
        url: this.menuItem ? this.menuItem.url : "",
        is_active: this.menuItem ? this.menuItem.is_active : false
      })
    };
  },
  methods: {
    create() {
      this.form.post("/admin/menus");
    },
    update() {
      this.form.patch(`/admin/menus/${this.menuItem.id}`);
    },
    submitHandler() {
      this.menuItem ? this.update() : this.create();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.menuItem ? "Редактировать" : "Создать")} пункт меню</h1><form><div><label for="title">Название</label><input type="text" id="title"${ssrRenderAttr("value", $data.form.title)}><small>${ssrInterpolate($data.form.errors.title)}</small></div><div><label for="url">URL</label><input type="text" id="url"${ssrRenderAttr("value", $data.form.url)}><small>${ssrInterpolate($data.form.errors.url)}</small></div><div><label for="is_active">Статус (${ssrInterpolate($data.form.is_active ? "Активна" : "Не активна")})</label><input type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray($data.form.is_active) ? ssrLooseContain($data.form.is_active, null) : $data.form.is_active) ? " checked" : ""}><small>${ssrInterpolate($data.form.errors.is_active)}</small></div><button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($props.menuItem ? "Обновить" : "Сохранить")}</button>`);
  _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/menus" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Вернуться к списку`);
      } else {
        return [
          createTextVNode("Вернуться к списку")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Menu/Resources/assets/js/Pages/Admin/AdminMenuModify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminMenuModify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminMenuModify as default
};
