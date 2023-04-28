<?php

namespace Modules\Promos\Http\Controllers\Admin;

use App\Traits\FileTrait;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Promos\Actions\AdminCreatePromo;
use Modules\Promos\Actions\AdminDeletePromo;
use Modules\Promos\Actions\AdminFindPromoByID;
use Modules\Promos\Actions\AdminGetAllPromos;
use Modules\Promos\Actions\AdminUpdatePromo;
use Modules\Promos\Http\Requests\CreatePromoRequest;
use Modules\Promos\Http\Requests\UpdatePromoRequest;

class PromosController extends Controller
{

    use FileTrait;
    public function index(Request $request)
    {
        if ($request->ajax() && !$request->inertia()) {
            return app(AdminGetAllPromos::class)->run();
        }

        return Inertia::render('Promos::Admin/AdminPromosIndex');
    }

    public function create(): Response
    {
        return Inertia::render('Promos::Admin/AdminPromosModify');
    }

    public function store(CreatePromoRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (!empty($request->file('file'))) {
            $img = $this->upload($request->file('file'));
            $data['img'] = $img['location'];
        }

        app(AdminCreatePromo::class)->run($data);
        return redirect()->route('admin.promos.index');
    }

    public function edit($id): Response
    {
        $promo = app(AdminFindPromoByID::class)->run($id);
        return Inertia::render('Promos::Admin/AdminPromosModify', compact('promo'));
    }

    public function update(UpdatePromoRequest $request, $id): RedirectResponse
    {
        $data = $request->validated();

        if (!empty($request->file('file'))) {
            $img = $this->upload($request->file('file'));
            $data['img'] = $img['location'];
        }

        app(AdminUpdatePromo::class)->run($data, $id);
        return redirect()->route('admin.promos.index');
    }

    public function destroy($id): RedirectResponse
    {
        app(AdminDeletePromo::class)->run($id);
        return redirect()->route('admin.promos.index');
    }

}
