<?php

namespace Modules\Roles\Actions;

class AdminFindRoleByID extends BaseAction
{
    public function run($id)
    {
        return $this->role->query()
            ->findOrFail($id);
    }
}
