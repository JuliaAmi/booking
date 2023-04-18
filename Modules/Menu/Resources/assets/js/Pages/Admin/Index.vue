<template>
    <h1>Управление меню сайта</h1>


    <inertia-link href="/admin/menus/create">Создать пункт меню</inertia-link>

    <NestedDraggable :menu="menus"/>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import NestedDraggable from "./infra/NestedDraggable.vue";

export default {
    name: "Index",
    layout: AdminLayout,
    components: {
        NestedDraggable
    },
    props: {
        menus: Array
    }
}
</script>
