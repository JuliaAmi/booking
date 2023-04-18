<template>
    <nav>
        <ul>
            <MenuItemComponent :menu="$page.props.menu.data"/>
        </ul>
    </nav>
</template>

<script>
import MenuItemComponent from "./MenuItemComponent.vue";
export default {
    name: "MenuComponent",
    components: {
        MenuItemComponent
    }
}
</script>

<style scoped>

</style>
