<?php

namespace Modules\Pages\Http\Controllers;

use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Pages\Actions\FindPageBySlug;

class PagesController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages::Guest/GuestPagesIndex');
    }

    public function show($slug)
    {
        $page = app(FindPageBySlug::class)->run($slug);
        return Inertia::render('Pages::Guest/GuestPagesShow', compact('page'));
    }

}
