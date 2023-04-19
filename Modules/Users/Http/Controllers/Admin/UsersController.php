<?php

namespace Modules\Users\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Roles\Actions\AdminGetAllRolesForUser;
use Modules\Users\Actions\AdminCreateUser;
use Modules\Users\Actions\AdminDeleteUser;
use Modules\Users\Actions\AdminFindUserByID;
use Modules\Users\Actions\AdminGetAllUsers;
use Modules\Users\Actions\AdminUpdateUser;
use Modules\Users\Http\Requests\CreateUserRequest;
use Modules\Users\Http\Requests\UpdateUserRequest;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        if ($request->ajax() && !$request->inertia()) {
            return app(AdminGetAllUsers::class)->run();
        }

        return Inertia::render('Users::Admin/Index');
    }

    public function create()
    {
        $roles = app(AdminGetAllRolesForUser::class)->run();
        return Inertia::render('Users::Admin/Modify', compact('roles'));
    }

    public function store(CreateUserRequest $request)
    {
        app(AdminCreateUser::class)->run($request->validated());
        return redirect()->route('admin.users.index');
    }

    public function edit($id)
    {
        $user = app(AdminFindUserByID::class)->run($id);
        $roles = app(AdminGetAllRolesForUser::class)->run();
        $userRoles = $user->roles->pluck('name');

        return Inertia::render('Users::Admin/Modify', compact('user','roles', 'userRoles'));
    }

    public function update(UpdateUserRequest $request, $id)
    {
        app(AdminUpdateUser::class)->run($request->validated(), $id);
        return redirect()->route('admin.users.index');
    }

    public function destroy($id)
    {
        app(AdminDeleteUser::class)->run($id);
        return redirect()->route('admin.users.index');
    }
}
