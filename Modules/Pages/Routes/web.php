<?php

use Illuminate\Support\Facades\Route;
use Modules\Pages\Http\Controllers\Admin\PagesController as AdminPagesController;
use Modules\Pages\Http\Controllers\PagesController as GuestPagesController;
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

    Route::controller(AdminPagesController::class)->name('pages.')->prefix('pages')->group(function () {
        Route::get('/', 'index')->middleware(['permission:pages-read'])->name('index');
        Route::get('/create', 'create')->middleware(['permission:pages-create'])->name('create');
        Route::post('/', 'store')->middleware(['permission:pages-create'])->name('store');
        Route::get('/{id}', 'show')->middleware(['permission:pages-read'])->name('show');
        Route::get('/{id}/edit', 'edit')->middleware(['permission:pages-update'])->name('edit');
        Route::patch('/{id}', 'update')->middleware(['permission:pages-update'])->name('update');
        Route::delete('/{id}', 'destroy')->middleware(['permission:pages-delete'])->name('destroy');
    });
});

Route::name('guest.')->group(function () {
    Route::controller(GuestPagesController::class)->name('pages.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{slug}', 'show')->name('show');
    });
});
