import { useForm } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  name: "Login",
  data() {
    return {
      form: useForm({
        email: "",
        password: ""
      })
    };
  },
  methods: {
    login() {
      this.form.post("/login");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>Авторизация</h1><form><div><label for="email">Электронная почта</label><input type="text" id="email"${ssrRenderAttr("value", $data.form.email)}><small>${ssrInterpolate($data.form.errors.email)}</small></div><div><label for="password">Пароль</label><input type="password" id="password"${ssrRenderAttr("value", $data.form.password)}><small>${ssrInterpolate($data.form.errors.password)}</small></div><button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>Вход</button>`);
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
  _push(`</form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};
