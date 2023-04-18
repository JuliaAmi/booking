<template>
    <div class="flex m-10">
        <draggable class="dragArea" tag="ul" :list="menu" group="{ name: 'g1' }" @sort="sort">

            <li  v-for="item in menu">
                <MenuItem
                    :menu-item="item"
                />

                <NestedDraggable
                    :menu="item.children"
                    @sort="sort"
                />
            </li>

        </draggable>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import MenuItem from "./MenuItem.vue";
export default defineComponent({
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
            dragging: false,
        }
    },
    methods: {
        sort() {
            let index = 1;

            this.menu.forEach(function (item) {
                item.sort = index++;
            })

            this.$emit('sort');
        },
    },
})
</script>

<style scoped>
li {
    list-style: none;
}
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
    padding: 5px;
    margin: 10px;
}
</style>
