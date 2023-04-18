<template>
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>

    <inertia-link href="/admin/pages">Вернуться назад</inertia-link>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";

export default {
    name: "Show",
    layout: AdminLayout,
    props: {
        page: Object
    }
}
</script>
