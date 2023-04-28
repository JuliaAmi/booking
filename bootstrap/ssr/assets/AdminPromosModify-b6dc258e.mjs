import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import { useForm } from "@inertiajs/vue3";
import Editor from "@tinymce/tinymce-vue";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main$1 = {
  name: "SimpleTinyEditor",
  components: {
    Editor
  },
  data() {
    return {
      baseUrl: "http://booking"
    };
  },
  methods: {
    filePickerCallback(cb, value, meta) {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", ".txt, application/pdf");
      input.onchange = function() {
        let file = this.files[0];
        let reader = new FileReader();
        let fd = new FormData();
        fd.append("file", file);
        let filename = "";
        $.ajax({
          url: "/admin/upload/file",
          type: "post",
          data: fd,
          contentType: false,
          processData: false,
          async: false,
          success: function(response) {
            filename = response.location;
          }
        });
        reader.onload = function(e) {
          cb(filename, { title: file.name, text: file.name });
        };
        reader.readAsDataURL(file);
      };
      input.click();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Editor = resolveComponent("Editor");
  _push(ssrRenderComponent(_component_Editor, mergeProps({
    "api-key": "xcnykoky7wz5aq4opt33o6n7eng7x7vjjt8qnmfpirm62ovi",
    init: {
      height: 250,
      menubar: false,
      branding: false,
      plugins: ["wordcount", "code", "fullscreen", "lists"],
      toolbar: ["bold italic underline blockquote | bullist numlist | align | formatselect | code fullscreen"]
    }
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Share/Admin/SimpleTinyEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SimpleTinyEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "AdminPromosModify",
  layout: AdminLayout,
  components: {
    SimpleTinyEditor
  },
  props: {
    promo: Object
  },
  data() {
    return {
      form: useForm({
        title: this.promo ? this.promo.title : "",
        url: this.promo ? this.promo.url : "",
        content: this.promo ? this.promo.content : "",
        is_active: this.promo ? this.promo.is_active : false
      })
    };
  },
  methods: {
    create() {
      this.form.post("/admin/promos");
    },
    update() {
      this.form.patch(`/admin/promos/${this.promo.id}`);
    },
    submitHandler() {
      console.log("submit");
      this.promo ? this.update() : this.create();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SimpleTinyEditor = resolveComponent("SimpleTinyEditor");
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.promo ? "Редактировать" : "Создать новую")} акцию</h1><form><div><label for="title">Название</label><input type="text" id="title"${ssrRenderAttr("value", $data.form.title)}><small>${ssrInterpolate($data.form.errors.title)}</small></div><div><label for="url">URL</label><input type="text" id="url"${ssrRenderAttr("value", $data.form.url)}><small>${ssrInterpolate($data.form.errors.url)}</small></div><div><label for="content">Содержимое</label>`);
  _push(ssrRenderComponent(_component_SimpleTinyEditor, {
    id: "content",
    modelValue: $data.form.content,
    "onUpdate:modelValue": ($event) => $data.form.content = $event
  }, null, _parent));
  _push(`<small>${ssrInterpolate($data.form.errors.content)}</small></div><div><label for="is_active">Статус (${ssrInterpolate($data.form.is_active ? "Активна" : "Не активна")})</label><input type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray($data.form.is_active) ? ssrLooseContain($data.form.is_active, null) : $data.form.is_active) ? " checked" : ""}><small>${ssrInterpolate($data.form.errors.is_active)}</small></div><button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($props.promo ? "Обновить" : "Сохранить")}</button>`);
  _push(ssrRenderComponent(_component_inertia_link, { href: "/admin/promos" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Promos/Resources/assets/js/Pages/Admin/AdminPromosModify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPromosModify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminPromosModify as default
};
