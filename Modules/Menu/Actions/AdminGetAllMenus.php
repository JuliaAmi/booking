<?php

namespace Modules\Menu\Actions;

class AdminGetAllMenus extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'title',
            'url',
            'is_active',
            'parent_id'
        ];

        return $this->model->query()
            ->select($columns)
            ->get();
    }
}
