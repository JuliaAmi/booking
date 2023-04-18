<template>
    <li v-for="item in menu" :key="item.id">

        <ul v-if="item.children?.length">
            <MenuItemComponent :menu="item.children"/>
        </ul>
        <inertia-link :href="item.url" :class="{'active' : item.is_active}">
            {{ item.title }}
        </inertia-link>
    </li>
</template>

<script>

export default {
    name: "MenuItemComponent",
    props: {
        menu: Array
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>
