<?php

namespace App\Http\Middleware;

use Menu;
use Closure;
use Illuminate\Http\Request;
use Modules\Menu\Actions\GetAllMenus;

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

                $nodes = app(GetAllMenus::class)->run();

                $menu->add('Главаня', route('guest.pages.index'));

                $traverse = function ($nodes, $parent = null) use (&$traverse, &$menu) {

                    foreach ($nodes as $item) {

                        if (empty($parent)) {
                            $menu->add($item->title, empty($item->url) ? ['disableActivationByURL' => 'true'] : $item->url)->nickname('menu_' . $item->id);
                        } else {
                            $menu->item($parent)->add($item->title, empty($item->url) ? ['disableActivationByURL' => 'true'] : $item->url)->nickname('menu_' . $item->id);
                        }

                        if (count($item->children)) {
                            $traverse($item->children, 'menu_' . $item->id);
                        }
                    }
                };

                $traverse($nodes);

            });
        }

        return $next($request);
    }
}
