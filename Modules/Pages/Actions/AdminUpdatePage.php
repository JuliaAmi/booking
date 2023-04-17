<?php

namespace Modules\Pages\Actions;

class AdminUpdatePage extends BaseAction
{
    public function run($data, $id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->update($data);
    }
}
