<?php

namespace Modules\Roles\Actions;

class AdminUpdateRole extends BaseAction
{
    public function run($data, $id)
    {
         $role = $this->role->query()
            ->findOrFail($id);

         $role->update($data);
         $role->syncPermissions($data['permissions']);

         return $role;
    }
}
