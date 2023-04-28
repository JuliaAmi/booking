import { useForm } from "@inertiajs/vue3";
import Editor from "@tinymce/tinymce-vue";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { A as AdminLayout } from "./AdminLayout-14a59ac3.mjs";
import "./AuthUser-6fb0c5dc.mjs";
const _sfc_main$1 = {
  name: "TinyEditor",
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
      height: 500,
      menubar: false,
      branding: false,
      automatic_uploads: true,
      images_upload_url: "/admin/upload/image",
      file_picker_callback: $options.filePickerCallback,
      file_picker_types: "file",
      relative_urls: false,
      document_base_url: $data.baseUrl,
      plugins: ["wordcount", "link", "code", "fullscreen", "table", "lists", "image"],
      toolbar: ["link image | bold italic underline blockquote | bullist numlist | align | formatselect | table | code fullscreen"]
    }
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Share/Admin/TinyEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TinyEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "AdminPagesModify",
  layout: AdminLayout,
  components: {
    TinyEditor
  },
  props: {
    page: Object
  },
  data() {
    return {
      form: useForm({
        title: this.page ? this.page.title : "",
        content: this.page ? this.page.content : "",
        is_active: this.page ? this.page.is_active : false,
        meta_keywords: this.page ? this.page.meta_keywords : "",
        meta_description: this.page ? this.page.meta_description : ""
      })
    };
  },
  methods: {
    create() {
      this.form.post("/admin/pages");
    },
    update() {
      this.form.patch(`/admin/pages/${this.page.id}`);
    },
    submitHandler() {
      this.page ? this.update() : this.create();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TinyEditor = resolveComponent("TinyEditor");
  const _component_inertia_link = resolveComponent("inertia-link");
  _push(`<!--[--><h1>${ssrInterpolate($props.page ? "Редактировать" : "Создать новую")} страницу</h1><form><div><label for="title">Название</label><input type="text" id="title"${ssrRenderAttr("value", $data.form.title)}><small>${ssrInterpolate($data.form.errors.title)}</small></div><div><label for="content">Содержимое</label>`);
  _push(ssrRenderComponent(_component_TinyEditor, {
    id: "content",
    modelValue: $data.form.content,
    "onUpdate:modelValue": ($event) => $data.form.content = $event
  }, null, _parent));
  _push(`<small>${ssrInterpolate($data.form.errors.content)}</small></div><div><label for="meta_keywords">SEO ключевые слова</label><input type="text" id="meta_keywords"${ssrRenderAttr("value", $data.form.meta_keywords)}><small>${ssrInterpolate($data.form.errors.meta_keywords)}</small></div><div><label for="meta_description">SEO описание</label><input type="text" id="meta_description"${ssrRenderAttr("value", $data.form.meta_description)}><small>${ssrInterpolate($data.form.errors.meta_description)}</small></div><div><label for="is_active">Статус (${ssrInterpolate($data.form.is_active ? "Активна" : "Не активна")})</label><input type="checkbox" id="is_active"${ssrIncludeBooleanAttr(Array.isArray($data.form.is_active) ? ssrLooseContain($data.form.is_active, null) : $data.form.is_active) ? " checked" : ""}><small>${ssrInterpolate($data.form.errors.is_active)}</small></div><button${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($props.page ? "Обновить" : "Сохранить")}</button>`);
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
  _push(`</form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Pages/Resources/assets/js/Pages/Admin/AdminPagesModify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminPagesModify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AdminPagesModify as default
};
