<?php

use Illuminate\Support\Facades\Route;
use Modules\Roles\Http\Controllers\Admin\RolesController as AdminRolesController;

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
    Route::controller(AdminRolesController::class)->name('roles.')->prefix('roles')->group(function () {
        Route::get('/', 'index')->middleware(['permission:roles-read'])->name('index');
        Route::get('/create', 'create')->middleware(['permission:roles-create'])->name('create');
        Route::post('/', 'store')->middleware(['permission:roles-create'])->name('store');
        Route::get('/{id}/edit', 'edit')->middleware(['permission:roles-update'])->name('edit');
        Route::patch('/{id}', 'update')->middleware(['permission:roles-update'])->name('update');
        Route::delete('/{id}', 'destroy')->middleware(['permission:roles-delete'])->name('destroy');
    });
});
