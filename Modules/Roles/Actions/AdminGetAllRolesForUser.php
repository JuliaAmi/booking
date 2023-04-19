<?php

namespace Modules\Roles\Actions;

class AdminGetAllRolesForUser extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'name',
        ];

        return $this->role->query()
            ->select($columns)
            ->get();

    }
}
