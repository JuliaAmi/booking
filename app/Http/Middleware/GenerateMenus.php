<?php

namespace App\Http\Middleware;

use Menu;
use Closure;
use Illuminate\Http\Request;
use Modules\Menu\Actions\BuildMenusFromDataBase;

class GenerateMenus
{
    public function buildAdminMenu()
    {
        Menu::make('menu', function ($menu)  {
            if (auth()->check()) {
                $menu->add('Панель управления', route('admin.index'))->nickname('dashboard');

                if (auth()->user()->hasPermissionTo('pages-read')) {
                    $menu->item('dashboard')->add('Управление cтраницами сайта', route('admin.pages.index'))->active('admin/pages/*');
                }

                if (auth()->user()->hasPermissionTo('promos-read')) {
                    $menu->item('dashboard')->add('Управление акциями', route('admin.promos.index'))->active('admin/promos/*');
                }

                if (auth()->user()->hasPermissionTo('menu-read')) {
                    $menu->item('dashboard')->add('Управление навигацией сайта', route('admin.menus.index'))->active('admin/menus/*');
                }

                if (auth()->user()->hasPermissionTo('roles-read')) {
                    $menu->item('dashboard')->add('Управление ролями', route('admin.roles.index'))->active('admin/roles/*');
                }

                if (auth()->user()->hasPermissionTo('users-read')) {
                    $menu->item('dashboard')->add('Управление пользователями', route('admin.users.index'))->active('admin/users/*');
                }

                $menu->add('Вернуться к сайту', route('guest.pages.index'));
            }
        });
    }

    public function buildGuestMenu()
    {
        Menu::make('menu', function ($menu) {
            $menu->add('Главаня', route('guest.pages.index'));
            app(BuildMenusFromDataBase::class)->run($menu);
            $menu->add('Панель управления', route('admin.index'));
        });
    }

    public function handle(Request $request, Closure $next)
    {
        $request->routeIs('admin.*') ? $this->buildAdminMenu() : $this->buildGuestMenu();
        return $next($request);
    }
}
