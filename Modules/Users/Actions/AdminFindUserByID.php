<?php

namespace Modules\Users\Actions;

class AdminFindUserByID extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id);
    }
}
