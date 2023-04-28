import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { useForm } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main = {
  name: "AdminRolesModify",
  layout: AdminLayout,
  props: {
    role: Object,
    permissions: Object,
    rolePermissions: Array
  },
  data() {
    return {
      form: useForm({
        name: this.role ? this.role.name : "",
        permissions: this.rolePermissions ? this.rolePermissions : []
      })
    };
  },
  methods: {
    create() {
      this.form.post("/admin/roles");
    },
    update() {
      this.form.patch(`/admin/roles/${this.role.id}`);
    },
    submitHandler() {
      this.role ? this.update() : this.create();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.role ? "Редактировать" : "Создать новую")} роль</h1><form><div><label for="name">Название роли</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)}><small>${ssrInterpolate($data.form.errors.name)}</small></div>`);
  if ($props.permissions && Object.keys($props.permissions).length) {
    _push(`<div><!--[-->`);
    ssrRenderList($props.permissions, (permission, group) => {
      _push(`<div><b>${ssrInterpolate(group)}</b><!--[-->`);
      ssrRenderList(permission, (permissionItem) => {
        _push(`<div><input type="checkbox"${ssrRenderAttr("id", `permission_${permissionItem.id}`)}${ssrIncludeBooleanAttr(Array.isArray($data.form.permissions) ? ssrLooseContain($data.form.permissions, permissionItem.id) : $data.form.permissions) ? " checked" : ""}${ssrRenderAttr("value", permissionItem.id)}><label${ssrRenderAttr("for", `permission_${permissionItem.id}`)}>${ssrInterpolate(permissionItem.name)}</label></div>`);
      });
      _push(`<!--]--></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($props.role ? "Обновить" : "Сохранить")}</button>`);
  _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/roles" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Roles/Resources/assets/js/Pages/Admin/AdminRolesModify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminRolesModify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminRolesModify as default
};
