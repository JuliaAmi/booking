<?php

use Illuminate\Support\Facades\Route;
use Modules\Promos\Http\Controllers\Admin\PromosController as AdminPromosController;
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

    Route::controller(AdminPromosController::class)->name('promos.')->prefix('promos')->group(function () {
        Route::get('/', 'index')->middleware(['permission:promos-read'])->name('index');
        Route::get('/create', 'create')->middleware(['permission:promos-create'])->name('create');
        Route::post('/', 'store')->middleware(['permission:promos-create'])->name('store');
        Route::get('/{id}', 'show')->middleware(['permission:promos-read'])->name('show');
        Route::get('/{id}/edit', 'edit')->middleware(['permission:promos-update'])->name('edit');
        Route::patch('/{id}', 'update')->middleware(['permission:promos-update'])->name('update');
        Route::delete('/{id}', 'destroy')->middleware(['permission:promos-delete'])->name('destroy');
    });
});
