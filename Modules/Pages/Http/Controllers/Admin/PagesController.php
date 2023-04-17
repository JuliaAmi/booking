<?php

namespace Modules\Pages\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Pages\Actions\AdminCreatePage;
use Modules\Pages\Actions\AdminDeletePage;
use Modules\Pages\Actions\AdminFindPageByID;
use Modules\Pages\Actions\AdminGetAllPages;
use Modules\Pages\Actions\AdminUpdatePage;
use Modules\Pages\Http\Requests\CreatePageRequest;
use Modules\Pages\Http\Requests\UpdatePageRequest;

class PagesController extends Controller
{
    public function index(Request $request)
    {
        if ($request->ajax() && !$request->inertia()) {
            return app(AdminGetAllPages::class)->run();
        }

        return Inertia::render('Pages::Admin/Index');
    }

    public function create(): Response
    {
        return Inertia::render('Pages::Admin/Modify');
    }

    public function store(CreatePageRequest $request): RedirectResponse
    {
        app(AdminCreatePage::class)->run($request->validated());
        return redirect()->route('admin.pages.index');
    }

    public function show($id): Response
    {
        $page = app(AdminFindPageByID::class)->run($id);
        return Inertia::render('Pages::Admin/Show', compact('page'));
    }

    public function edit($id): Response
    {
        $page = app(AdminFindPageByID::class)->run($id);
        return Inertia::render('Pages::Admin/Modify', compact('page'));
    }

    public function update(UpdatePageRequest $request, $id): RedirectResponse
    {
        app(AdminUpdatePage::class)->run($request->validated(), $id);
        return redirect()->route('admin.pages.index');
    }

    public function destroy($id): RedirectResponse
    {
        app(AdminDeletePage::class)->run($id);
        return redirect()->route('admin.pages.index');
    }
}
