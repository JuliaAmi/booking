<template>
    <h1>{{ role ? 'Редактировать' : 'Создать новую' }} роль</h1>

    <form>

        <div>
            <label for="name">Название роли</label>
            <input type="text" id="name" v-model="form.name">
            <small>{{ form.errors.name }}</small>
        </div>


        <div v-if="permissions && Object.keys(permissions).length">
            <div v-for="(permission, group) in permissions">
                <b>{{ group }}</b>

                <div v-for="permissionItem in permission">
                    <input type="checkbox" :id="`permission_${permissionItem.id}`" v-model="form.permissions" :value="permissionItem.id">
                    <label :for="`permission_${permissionItem.id}`">{{ permissionItem.name }}</label>
                </div>

            </div>
        </div>

        <button :disabled="form.processing" @click.prevent="submitHandler">
            {{  role ? 'Обновить' : 'Сохранить' }}
        </button>

        <inertia-link href="/admin/roles">Вернуться к списку</inertia-link>
    </form>

</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {useForm} from "@inertiajs/vue3";

export default {
    name: "Modify",
    layout: AdminLayout,
    props: {
        role: Object,
        permissions: Object,
        rolePermissions: Array
    },
    data() {
        return {
            form: useForm({
                name: this.role ? this.role.name : '',
                permissions: this.rolePermissions ? this.rolePermissions : []
            })
        }
    },
    methods: {
        create() {
            this.form.post('/admin/roles');
        },
        update() {
            this.form.patch(`/admin/roles/${this.role.id}`);
        },
        submitHandler() {
            this.role ? this.update() : this.create()
        }
    }
}
</script>
