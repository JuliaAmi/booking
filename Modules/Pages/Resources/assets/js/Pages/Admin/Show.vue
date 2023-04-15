<template>
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>

    <inertia-link href="/admin/pages">Вернуться назад</inertia-link>
</template>

<script>
export default {
    name: "Show",
    props: {
        page: Object
    }
}
</script>
