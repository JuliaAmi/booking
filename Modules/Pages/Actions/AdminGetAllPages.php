<?php

namespace Modules\Pages\Actions;
use DataTables;
class AdminGetAllPages extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'title',
            'slug',
            'is_active',
            'created_at',
            'updated_at'
        ];

        $query = $this->model->query()
            ->select($columns);

        return DataTables::eloquent($query)
            ->editColumn('is_active', function ($item) {
                return $item->is_active ? 'Активна' : 'Не активна';
            })
            ->editColumn('created_at', function ($item) {
                return $item->created_at?->format('d.m.Y h:s');
            })
            ->editColumn('updated_at', function ($item) {
                return $item->updated_at?->format('d.m.Y h:s');
            })
            ->addColumn('actions', function ($item) {

                $showLink = auth()->user()->hasPermissionTo('pages-read') ? '<a href="/admin/pages/'.$item->id.'">Просмотр</a>' : '';
                $editLink = auth()->user()->hasPermissionTo('pages-update') ? '<a href="/admin/pages/'.$item->id.'/edit">Редактировать</a>' : '';
                $deleteLink = auth()->user()->hasPermissionTo('pages-delete') ?'<a href="/admin/pages/'.$item->id.'/destroy" data-method="delete">Удалить</a>' : '';

                return $showLink.' '.$editLink.' '.$deleteLink;
            })
            ->rawColumns(['actions'])
            ->toJson();
    }
}
