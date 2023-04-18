<?php

namespace Modules\Menu\Actions;

class AdminFindMenuByID extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id);
    }
}
