<template>
    <MenuComponent />
    <main>
        <slot></slot>
    </main>
</template>

<script>
import MenuComponent from "@/Share/Guest/Menu/MenuComponent.vue";
export default {
    name: "GuestLayout",
    components: {
        MenuComponent
    }
}
</script>
