<template>
    <h1>{{ user ? 'Редактировать' : 'Создать нового' }} пользователя</h1>

    <form>

        <h3>Информация пользователя</h3>

        <div>
            <label for="name">ФИО</label>
            <input type="text" id="name" v-model="form.name">
            <small>{{ form.errors.name }}</small>
        </div>

        <div>
            <label for="email">Электронный адрес</label>
            <input type="text" id="email" v-model="form.email">
            <small>{{ form.errors.email }}</small>
        </div>

        <div>
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="form.password">
            <small>{{ form.errors.password }}</small>
        </div>

        <div>
            <label for="password_confirmation">Подтверждение пароля</label>
            <input type="password" id="password_confirmation" v-model="form.password_confirmation">
            <small>{{ form.errors.password_confirmation }}</small>
        </div>

        <div v-if="roles?.length">
            <h3>Роли пользователя</h3>
            <select id="roles" v-model="form.roles" multiple size="10" style="width: 25%;">
                <option :value="role.name" v-for="role in roles" :key="role.id">{{ role.name }}</option>
            </select>
        </div>

        <button :disabled="form.processing" @click.prevent="submitHandler">
            {{ user ? 'Обновить' : 'Сохранить' }}
        </button>

        <inertia-link href="/admin/users">Вернуться к списку</inertia-link>
    </form>
</template>

<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {useForm} from "@inertiajs/vue3";

export default {
    name: "Modify",
    layout: AdminLayout,
    props: {
        user: Object,
        roles: Array,
        userRoles: Array
    },
    data() {
        return {
            form: useForm({
                name: this.user ? this.user.name : '',
                email: this.user ? this.user.email : '',
                password: '',
                password_confirmation: '',
                roles: this.userRoles ? this.userRoles : []
            })
        }
    },
    methods: {
        create() {
            this.form.post('/admin/users');
        },
        update() {
            this.form.patch(`/admin/users/${this.user.id}`);
        },
        submitHandler() {
            this.user ? this.update() : this.create()
        }
    }
}
</script>
