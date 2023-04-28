<?php

namespace Modules\Promos\Actions;

class AdminFindPromoByID extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id);
    }
}
