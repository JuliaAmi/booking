<?php

namespace App\Http\Middleware;

use Menu;
use Closure;
use Illuminate\Http\Request;

class GenerateMenus
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->routeIs('admin.*')) {
            Menu::make('menu', function ($menu) {
                $menu->add('Управление cтраницами сайта', route('admin.pages.index'))->active('admin/pages/*');
                $menu->add('Управление навигацией сайта', route('admin.menus.index'))->active('admin/menus/*');
                $menu->add('Вернуться к сайту', route('guest.pages.index'));
            });
        } else {
            Menu::make('menu', function ($menu) {
                $menu->add('Главаня', route('guest.pages.index'));
                $menu->add('Управление cтраницами сайта', route('admin.pages.index'));
            });
        }

        return $next($request);
    }
}
