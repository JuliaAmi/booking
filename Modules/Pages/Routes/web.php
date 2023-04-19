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

Route::name('admin.')->prefix('admin')->group(function () {
    Route::resource('pages', AdminPagesController::class);
});

Route::name('guest.')->group(function () {
    Route::controller(GuestPagesController::class)->name('pages.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{slug}', 'show')->name('show');
    });
});
