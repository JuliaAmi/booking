<?php

namespace Modules\Roles\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Roles\Actions\AdminCreateRole;
use Modules\Roles\Actions\AdminDeleteRole;
use Modules\Roles\Actions\AdminFindRoleByID;
use Modules\Roles\Actions\AdminGetAllPermissions;
use Modules\Roles\Actions\AdminGetAllRoles;
use Modules\Roles\Actions\AdminUpdateRole;
use Modules\Roles\Http\Requests\CreateRoleRequest;
use Modules\Roles\Http\Requests\UpdateRoleRequest;

class RolesController extends Controller
{
    public function index(Request $request)
    {
        if ($request->ajax() && !$request->inertia()) {
            return app(AdminGetAllRoles::class)->run();
        }

        return Inertia::render('Roles::Admin/Index');
    }

    public function create()
    {
        $permissions = app(AdminGetAllPermissions::class)->run();
        return Inertia::render('Roles::Admin/Modify', compact('permissions'));
    }

    public function store(CreateRoleRequest $request)
    {
        app(AdminCreateRole::class)->run($request->validated());
        return redirect()->route('admin.roles.index');
    }

    public function edit($id)
    {
        $role = app(AdminFindRoleByID::class)->run($id);
        $permissions = app(AdminGetAllPermissions::class)->run();
        $rolePermissions = $role->permissions->pluck('id');

        return Inertia::render('Roles::Admin/Modify', compact('role', 'permissions', 'rolePermissions'));
    }

    public function update(UpdateRoleRequest $request, $id)
    {
        app(AdminUpdateRole::class)->run($request->validated(), $id);
        return redirect()->route('admin.roles.index');
    }

    public function destroy($id)
    {
        app(AdminDeleteRole::class)->run($id);
        return redirect()->route('admin.roles.index');
    }
}
