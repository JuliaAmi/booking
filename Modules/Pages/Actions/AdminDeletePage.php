<?php

namespace Modules\Pages\Actions;

class AdminDeletePage extends BaseAction
{
    public function run($id)
    {
        return $this->model->query()
            ->findOrFail($id)
            ->delete();
    }
}
