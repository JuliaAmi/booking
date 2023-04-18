<?php

namespace Modules\Menu\Actions;

class AdminCreateMenu extends BaseAction
{
    public function run($data)
    {
        return $this->model->create($data);
    }
}
