<template>
    <h1>Управление ролями</h1>

    <inertia-link href="/admin/roles/create" v-if="$page.props.authUser.permissions.includes('roles-create')">
        Создать новую роль
    </inertia-link>

    <div>
        <table id="table" class="display" style="width: 100%;" v-once>
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Создана</th>
                <th>Обновлена</th>
                <th>Операции</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {replaceHtmlLinksToInertiaLinks} from "@/helpers";

export default {
    name: "AdminRolesIndex",
    layout: AdminLayout,
    mounted() {
        $('#table').DataTable({
            serverSide: true,
            processing: true,
            ajax: "/admin/roles",
            columns: [
                {data: 'id', name: 'id'},
                {data: 'name', name: 'name'},
                {data: 'created_at', name: 'created_at'},
                {data: 'updated_at', name: 'updated_at'},
                {data: 'actions', name: 'actions', orderable: false},
            ],
            fnDrawCallback: function () {
                replaceHtmlLinksToInertiaLinks('#table');
            }
        });
    }
}
</script>
