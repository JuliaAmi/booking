<?php

namespace Modules\Pages\Actions;

class AdminCreatePage extends BaseAction
{
    public function run($data)
    {
        return $this->model->create($data);
    }
}
