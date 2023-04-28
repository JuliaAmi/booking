<?php

namespace Modules\Promos\Actions;

class AdminCreatePromo extends BaseAction
{
    public function run($data)
    {
        return $this->model->create($data);
    }
}
