<?php
use Illuminate\Support\Facades\Route;

use Modules\Pages\Http\Controllers\Admin\PagesController as AdminPagesController;
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
