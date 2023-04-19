<?php

namespace Modules\Roles\Actions;

class AdminCreateRole extends BaseAction
{
    public function run($data)
    {
        return $this->role
            ->create($data)
            ->syncPermissions($data['permissions']);
    }
}
