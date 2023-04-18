<template>
    <li v-for="item in menu">

        <template v-if="item.url !== ''">
            <inertia-link :href="item.url" :class="{'active' : item.is_active}">
                {{ item.title }}
            </inertia-link>
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
