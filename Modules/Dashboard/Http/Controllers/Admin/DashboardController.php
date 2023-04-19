<?php

namespace Modules\Dashboard\Http\Controllers\Admin;

use Illuminate\Routing\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard::Admin/Index');
    }
}
