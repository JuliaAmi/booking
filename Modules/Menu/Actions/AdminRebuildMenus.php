<?php

namespace Modules\Menu\Actions;

class AdminRebuildMenus extends BaseAction
{
    public function run($data)
    {
        return $this->model->query()->rebuildTree($data);
    }
}
