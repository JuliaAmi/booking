<?php

namespace Modules\Roles\Actions;

class AdminDeleteRole extends BaseAction
{
    public function run($id)
    {
        return $this->role->query()
            ->findOrFail($id)
            ->delete();
    }
}
