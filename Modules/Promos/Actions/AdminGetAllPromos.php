<?php

namespace Modules\Promos\Actions;
use DataTables;
class AdminGetAllPromos extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'title',
            'url',
            'img',
            'content',
            'is_active',
            'created_at',
            'updated_at'
        ];

        $query = $this->model->query()
            ->select($columns);

        return DataTables::eloquent($query)
            ->editColumn('img', function ($item) {
                return "<img src='{$item->img}'  alt='{$item->title}' width='200'>";
            })
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

                $editLink = auth()->user()->hasPermissionTo('promos-update') ? '<a href="/admin/promos/'.$item->id.'/edit">Редактировать</a>' : '';
                $deleteLink = auth()->user()->hasPermissionTo('promos-delete') ?'<a href="/admin/promos/'.$item->id.'" data-method="delete">Удалить</a>' : '';

                return $editLink.' '.$deleteLink;
            })
            ->rawColumns(['actions', 'img'])
            ->toJson();
    }
}
