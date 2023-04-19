<?php

namespace Modules\Roles\Database\Seeders;

use Modules\Users\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            [
                'name' => 'pages-read',
                'module' => 'Pages'
            ],
            [
                'name' => 'pages-create',
                'module' => 'Pages'
            ],
            [
                'name' => 'pages-update',
                'module' => 'Pages'
            ],
            [
                'name' => 'pages-delete',
                'module' => 'Pages'
            ],
            [
                'name' => 'menu-read',
                'module' => 'Menu'
            ],
            [
                'name' => 'menu-create',
                'module' => 'Menu'
            ],
            [
                'name' => 'menu-update',
                'module' => 'Menu'
            ],
            [
                'name' => 'menu-delete',
                'module' => 'Menu'
            ],
            [
                'name' => 'roles-read',
                'module' => 'Roles'
            ],
            [
                'name' => 'roles-create',
                'module' => 'Roles'
            ],
            [
                'name' => 'roles-update',
                'module' => 'Roles'
            ],
            [
                'name' => 'roles-delete',
                'module' => 'Roles'
            ],
            [
                'name' => 'users-read',
                'module' => 'Users'
            ],
            [
                'name' => 'users-create',
                'module' => 'Users'
            ],
            [
                'name' => 'users-update',
                'module' => 'Users'
            ],
            [
                'name' => 'users-delete',
                'module' => 'Users'
            ],
        ];

        foreach ($permissions as $permission) {
            Permission::create($permission);
        }

        $role = Role::create(['name' => 'Admin']);
        $role->givePermissionTo(Permission::all());
    }
}
