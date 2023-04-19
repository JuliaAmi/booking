<?php

namespace Modules\Users\Http\Controllers\Admin;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Roles\Actions\AdminGetAllRoles;
use Modules\Roles\Actions\AdminGetAllRolesForUser;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('Users::Admin/Index');
    }

    public function create()
    {
        $roles = app(AdminGetAllRolesForUser::class)->run();
        return Inertia::render('Users::Admin/Modify', compact('roles'));
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.users.index');
    }

    public function edit($id)
    {
        $roles = app(AdminGetAllRolesForUser::class)->run();
        return Inertia::render('Users::Admin/Modify', compact('roles'));
    }

    public function update(Request $request, $id)
    {
        return redirect()->route('admin.users.index');
    }

    public function destroy($id)
    {
        return redirect()->route('admin.users.index');
    }
}
