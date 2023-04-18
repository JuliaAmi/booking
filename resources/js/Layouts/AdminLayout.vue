<template>
    <MenuComponent />
    <main>
        <slot></slot>
    </main>
</template>

<script>

import MenuComponent from "@/Share/Admin/Menu/MenuComponent.vue";
export default {
    name: "AdminLayout",
    components: {
        MenuComponent
    }
}
</script>
