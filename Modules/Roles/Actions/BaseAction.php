<?php

namespace Modules\Roles\Actions;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class BaseAction
{
    public Role $role;
    public Permission $permission;

    public function __construct(Role $role, Permission $permission)
    {
        $this->role = $role;
        $this->permission = $permission;
    }
}
