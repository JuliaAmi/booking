<?php

namespace Modules\Menu\Http\Controllers\Admin;

use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Menu\Actions\AdminCreateMenu;
use Modules\Menu\Actions\AdminDeleteMenu;
use Modules\Menu\Actions\AdminFindMenuByID;
use Modules\Menu\Actions\AdminGetAllMenus;
use Modules\Menu\Actions\AdminUpdateMenu;
use Modules\Menu\Http\Requests\CreateMenuRequest;
use Modules\Menu\Http\Requests\UpdateMenuRequest;

class MenusController extends Controller
{
    public function index()
    {
        $menus = app(AdminGetAllMenus::class)->run();
        return Inertia::render('Menu::Admin/Index', compact('menus'));
    }

    public function create()
    {
        return Inertia::render('Menu::Admin/Modify');
    }

    public function store(CreateMenuRequest $request)
    {
        app(AdminCreateMenu::class)->run($request->validated());
        return redirect()->route('admin.menus.index');
    }

    public function edit($id)
    {
        $menuItem = app(AdminFindMenuByID::class)->run($id);
        return Inertia::render('Menu::Admin/Modify', compact('menuItem'));
    }

    public function update(UpdateMenuRequest $request, $id)
    {
        app(AdminUpdateMenu::class)->run($request->validated(), $id);
        return redirect()->route('admin.menus.index');
    }

    public function destroy($id)
    {
        app(AdminDeleteMenu::class)->run($id);
        return redirect()->route('admin.menus.index');
    }
}
