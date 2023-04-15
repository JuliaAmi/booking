<?php

namespace Modules\Pages\Http\Controllers\Admin;

use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Pages\Http\Requests\CreatePageRequest;
use Modules\Pages\Http\Requests\UpdatePageRequest;
use Modules\Pages\Models\Page;

class PagesController extends Controller
{
    public function index(): Response
    {
        $pages = Page::query()
            ->select(['id', 'title', 'slug', 'is_active', 'created_at', 'updated_at'])
            ->get();

        return Inertia::render('Pages::Admin/Index', compact('pages'));
    }

    public function create(): Response
    {
        return Inertia::render('Pages::Admin/Modify');
    }

    public function store(CreatePageRequest $request): RedirectResponse
    {
        Page::create($request->validated());
        return redirect()->route('admin.pages.index');
    }

    public function show($id): Response
    {
        $page = Page::findOrFail($id);
        return Inertia::render('Pages::Admin/Show', compact('page'));
    }

    public function edit($id): Response
    {
        $page = Page::findOrFail($id);
        return Inertia::render('Pages::Admin/Modify', compact('page'));
    }

    public function update(UpdatePageRequest $request, $id): RedirectResponse
    {
        $page = Page::findOrFail($id);
        $page->update($request->validated());

        return redirect()->route('admin.pages.index');
    }

    public function destroy($id): RedirectResponse
    {
        $page = Page::findOrFail($id);
        $page->delete();

        return redirect()->route('admin.pages.index');
    }
}
