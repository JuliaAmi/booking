<template>

    <inertia-head>
        <title>{{ page.title }}</title>
        <meta name="description" :content="page.meta_description">
        <meta name="keywords" :content="page.meta_keywords">
    </inertia-head>

    <h1>{{ page.title }}</h1>

    <div v-html="page.content"></div>
</template>

<script>
export default {
    name: "Show",
    props: {
        page: Object
    }
}
</script>
