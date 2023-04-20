<?php

namespace Modules\Users\Actions;
use DataTables;

class AdminGetAllUsers extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'name',
            'email',
            'created_at',
            'updated_at'
        ];

        $query = $this->model->query()
            ->select($columns);

        return DataTables::eloquent($query)
            ->editColumn('created_at', function ($item) {
                return $item->created_at?->format('d.m.Y h:s');
            })
            ->editColumn('updated_at', function ($item) {
                return $item->updated_at?->format('d.m.Y h:s');
            })
            ->addColumn('actions', function ($item) {

                $editLink = auth()->user()->hasPermissionTo('users-update') ? '<a href="/admin/users/'.$item->id.'/edit">Редактировать</a>' : '';
                $deleteLink = auth()->user()->hasPermissionTo('users-delete') ? '<a href="/admin/users/'.$item->id.'" data-method="delete">Удалить</a>' : '';

                return $editLink.' '.$deleteLink;
            })
            ->rawColumns(['actions'])
            ->toJson();
    }
}
