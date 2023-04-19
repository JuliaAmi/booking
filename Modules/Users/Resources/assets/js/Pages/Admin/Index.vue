<template>
    <h1>Управление пользовтелями</h1>

    <inertia-link href="/admin/users/create">Создать нового пользователя</inertia-link>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";

export default {
    name: "Index",
    layout: AdminLayout
}
</script>
