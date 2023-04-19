<?php

namespace Modules\Users\Actions;

class AdminDeleteUser extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->delete();
    }
}
