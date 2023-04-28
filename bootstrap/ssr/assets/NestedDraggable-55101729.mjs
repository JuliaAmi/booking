import { defineComponent, resolveComponent, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import MenuItem from "./MenuItem-64aea80b.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const NestedDraggable_vue_vue_type_style_index_0_scoped_e56cea09_lang = "";
const _sfc_main = defineComponent({
  name: "NestedDraggable",
  components: {
    draggable: VueDraggableNext,
    MenuItem
  },
  props: {
    menu: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  methods: {
    sort() {
      let index = 1;
      this.menu.forEach(function(item) {
        item.sort = index++;
      });
      this.$emit("sort");
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_NestedDraggable = resolveComponent("NestedDraggable", true);
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex m-10" }, _attrs))} data-v-e56cea09>`);
  _push(ssrRenderComponent(_component_draggable, {
    class: "dragArea",
    tag: "ul",
    list: _ctx.menu,
    group: "{ name: 'g1' }",
    onSort: _ctx.sort
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.menu, (item) => {
          _push2(`<li data-v-e56cea09${_scopeId}>`);
          _push2(ssrRenderComponent(_component_MenuItem, { "menu-item": item }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_NestedDraggable, {
            menu: item.children,
            onSort: _ctx.sort
          }, null, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menu, (item) => {
            return openBlock(), createBlock("li", null, [
              createVNode(_component_MenuItem, { "menu-item": item }, null, 8, ["menu-item"]),
              createVNode(_component_NestedDraggable, {
                menu: item.children,
                onSort: _ctx.sort
              }, null, 8, ["menu", "onSort"])
            ]);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Modules/Menu/Resources/assets/js/Pages/Admin/infra/NestedDraggable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NestedDraggable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e56cea09"]]);
export {
  NestedDraggable as default
};
