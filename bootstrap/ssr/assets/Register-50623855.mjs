import { useForm } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  name: "Register",
  data() {
    return {
      form: useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    register() {
      this.form.post("/register");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>Регистрация</h1><div><label for="name">Ф.И.О</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)}><small>${ssrInterpolate($data.form.errors.name)}</small></div><div><label for="email">Электронная почта</label><input type="text" id="email"${ssrRenderAttr("value", $data.form.email)}><small>${ssrInterpolate($data.form.errors.email)}</small></div><div><label for="password">Пароль</label><input type="password" id="password"${ssrRenderAttr("value", $data.form.password)}><small>${ssrInterpolate($data.form.errors.password)}</small></div><div><label for="password_confirmation">Подтверждение Пароля</label><input type="password" id="password_confirmation"${ssrRenderAttr("value", $data.form.password_confirmation)}><small>${ssrInterpolate($data.form.errors.password_confirmation)}</small></div><button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>Регистрация</button>`);
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Register as default
};
