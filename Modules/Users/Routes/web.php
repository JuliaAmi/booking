<?php

use Illuminate\Support\Facades\Route;
use Modules\Users\Http\Controllers\Admin\UsersController as AdminUsersController;
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
    Route::controller(AdminUsersController::class)->name('users.')->prefix('users')->group(function () {
        Route::get('/', 'index')->middleware(['permission:users-read'])->name('index');
        Route::get('/create', 'create')->middleware(['permission:users-create'])->name('create');
        Route::post('/', 'store')->middleware(['permission:users-create'])->name('store');
        Route::get('/{id}/edit', 'edit')->middleware(['permission:users-update'])->name('edit');
        Route::patch('/{id}', 'update')->middleware(['permission:users-update'])->name('update');
        Route::delete('/{id}', 'destroy')->middleware(['permission:users-delete'])->name('destroy');
    });
});
