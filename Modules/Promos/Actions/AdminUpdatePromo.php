<?php

namespace Modules\Promos\Actions;

class AdminUpdatePromo extends BaseAction
{
    public function run($data, $id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->update($data);
    }
}
