<?php

namespace Modules\Roles\Actions;

class AdminGetAllPermissions extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'name',
            'module'
        ];

        return $this->permission->query()
            ->select($columns)
            ->get()
            ->groupBy('module');
    }
}
