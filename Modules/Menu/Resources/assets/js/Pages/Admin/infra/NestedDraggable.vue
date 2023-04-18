<template>
    <div class="flex m-10">
        <draggable class="dragArea" :list="menu" @change="log">

            <MenuItem
                :menu-item="item"
                v-for="item in menu"
                :key="item.id"
            />

        </draggable>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import MenuItem from "./MenuItem.vue";
export default defineComponent({
    components: {
        draggable: VueDraggableNext,
        MenuItem
    },
    props: {
        menu: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            enabled: true,
            dragging: false,
        }
    },
    methods: {
        log(event) {
            console.log(event)
        },
    },
})
</script>

<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>
