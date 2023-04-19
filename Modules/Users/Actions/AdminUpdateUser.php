<?php

namespace Modules\Users\Actions;

class AdminUpdateUser extends BaseAction
{
    public function run($data, $id)
    {
        if (!empty($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

         $user = $this->model->query()
            ->findOrFail($id);

         $user->update($data);
         $user->syncRoles($data['roles']);

         return $user;
    }
}
