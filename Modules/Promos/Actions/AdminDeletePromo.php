<?php

namespace Modules\Promos\Actions;

class AdminDeletePromo extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->delete();
    }
}
