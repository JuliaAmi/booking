<?php

namespace Modules\Users\Actions;

class AdminCreateUser extends BaseAction
{
    public function run($data)
    {
        $data['password'] = bcrypt($data['password']);

        return $this->model
            ->create($data)
            ->syncRoles($data['roles']);
    }
}
