<?php

namespace Modules\Pages\Actions;

class AdminFindPageByID extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id);
    }
}
