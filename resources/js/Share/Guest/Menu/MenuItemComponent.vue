<template>
    <li v-for="item in menu">

        <template v-if="item.url !== ''">
            <inertia-link :href="item.url" v-if="item.url.includes('booking')">
                {{ item.title }}
            </inertia-link>

            <a :href="item.url" target="_blank" v-else>
                {{ item.title }}
            </a>
        </template>

        <ul v-if="item.children.length">
            <MenuItemComponent :menu="item.children"/>
        </ul>
    </li>
</template>

<script>

export default {
    name: "MenuItemComponent",
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>
