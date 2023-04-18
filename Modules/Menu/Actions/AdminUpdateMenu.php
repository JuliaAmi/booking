<?php

namespace Modules\Menu\Actions;

class AdminUpdateMenu extends BaseAction
{
    public function run($data, $id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->update($data);
    }
}
