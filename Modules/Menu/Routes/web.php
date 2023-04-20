<?php

use Illuminate\Support\Facades\Route;
use Modules\Menu\Http\Controllers\Admin\MenusController as AdminMenusController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::name('admin.')->prefix('admin')->middleware('auth')->group(function () {
    Route::controller(AdminMenusController::class)->name('menus.')->prefix('menus')->group(function () {
        Route::get('/', 'index')->middleware(['permission:menu-read'])->name('index');
        Route::post('/', 'store')->middleware(['permission:menu-create'])->name('store');
        Route::get('/create', 'create')->middleware(['permission:menu-create'])->name('create');
        Route::post('/rebuild', 'rebuild')->middleware(['permission:menu-update'])->name('rebuild');
        Route::get('/{id}/edit', 'edit')->middleware(['permission:menu-update'])->name('edit');
        Route::patch('/{id}', 'update')->middleware(['permission:menu-update'])->name('update');
        Route::delete('/{id}', 'destroy')->middleware(['permission:menu-delete'])->name('destroy');
    });
});
