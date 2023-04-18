<?php

namespace Modules\Menu\Actions;

class AdminGetNodeTreeMenus extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'title',
            'url',
            'sort',
            'is_active',
            'parent_id',
            '_lft',
            '_rgt'
        ];

        return $this->model->query()
            ->select($columns)
            ->get()
            ->sortBy('sort')
            ->toTree();
    }
}
