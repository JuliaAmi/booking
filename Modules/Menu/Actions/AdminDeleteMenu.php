<?php

namespace Modules\Menu\Actions;

class AdminDeleteMenu extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->delete();
    }
}
