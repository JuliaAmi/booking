import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { useForm } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main = {
  name: "AdminUsersModify",
  layout: AdminLayout,
  props: {
    user: Object,
    roles: Array,
    userRoles: Array
  },
  data() {
    return {
      form: useForm({
        name: this.user ? this.user.name : "",
        email: this.user ? this.user.email : "",
        password: "",
        password_confirmation: "",
        roles: this.userRoles ? this.userRoles : []
      })
    };
  },
  methods: {
    create() {
      this.form.post("/admin/users");
    },
    update() {
      this.form.patch(`/admin/users/${this.user.id}`);
    },
    submitHandler() {
      this.user ? this.update() : this.create();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.user ? "Редактировать" : "Создать нового")} пользователя</h1><form><h3>Информация пользователя</h3><div><label for="name">ФИО</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)}><small>${ssrInterpolate($data.form.errors.name)}</small></div><div><label for="email">Электронный адрес</label><input type="text" id="email"${ssrRenderAttr("value", $data.form.email)}><small>${ssrInterpolate($data.form.errors.email)}</small></div><div><label for="password">Пароль</label><input type="password" id="password"${ssrRenderAttr("value", $data.form.password)}><small>${ssrInterpolate($data.form.errors.password)}</small></div><div><label for="password_confirmation">Подтверждение пароля</label><input type="password" id="password_confirmation"${ssrRenderAttr("value", $data.form.password_confirmation)}><small>${ssrInterpolate($data.form.errors.password_confirmation)}</small></div>`);
  if ((_a = $props.roles) == null ? void 0 : _a.length) {
    _push(`<div><h3>Роли пользователя</h3><select id="roles" multiple size="10" style="${ssrRenderStyle({ "width": "25%" })}"><!--[-->`);
    ssrRenderList($props.roles, (role) => {
      _push(`<option${ssrRenderAttr("value", role.name)}>${ssrInterpolate(role.name)}</option>`);
    });
    _push(`<!--]--></select></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($props.user ? "Обновить" : "Сохранить")}</button>`);
  _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/users" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Users/Resources/assets/js/Pages/Admin/AdminUsersModify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminUsersModify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminUsersModify as default
};
