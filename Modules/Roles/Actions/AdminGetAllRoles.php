<?php

namespace Modules\Roles\Actions;
use DataTables;

class AdminGetAllRoles extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'name',
            'created_at',
            'updated_at'
        ];

        $query = $this->role->query()
            ->select($columns);

        return DataTables::eloquent($query)
            ->editColumn('created_at', function ($item) {
                return $item->created_at?->format('d.m.Y h:s');
            })
            ->editColumn('updated_at', function ($item) {
                return $item->updated_at?->format('d.m.Y h:s');
            })
            ->addColumn('actions', function ($item) {

                $editLink = '<a href="/admin/roles/'.$item->id.'/edit">Редактировать</a>';
                $deleteLink = '<a href="/admin/roles/'.$item->id.'" data-method="delete">Удалить</a>';

                return $editLink.' '.$deleteLink;
            })
            ->rawColumns(['actions'])
            ->toJson();
    }
}
