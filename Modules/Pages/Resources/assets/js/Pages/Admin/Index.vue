<template>
    <h1>Управление страницами</h1>

    <inertia-link href="/admin/pages/create">Создать новую страницу</inertia-link>

    <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Slug</th>
                <th>Статус</th>
                <th>Создана</th>
                <th>Обновлена</th>
                <th>Операции</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="page in pages" :key="page.id">
                <td>{{ page.id }}</td>
                <td>{{ page.title }}</td>
                <td>{{ page.slug }}</td>
                <td>{{ page.is_active ? 'Активна' : 'Не активна' }}</td>
                <td>{{ page.created_at }}</td>
                <td>{{ page.updated_at }}</td>
                <td>
                    <inertia-link :href="`/admin/pages/${page.id}`">Просмотр</inertia-link>
                    <inertia-link :href="`/admin/pages/${page.id}/edit`">Редактировать</inertia-link>
                    <inertia-link method="delete" as="button" preserveState:false :href="`/admin/pages/${page.id}`">Удалить</inertia-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>



</template>

<script>
export default {
    name: "Index",
    props: {
        pages: Array
    }
}
</script>
