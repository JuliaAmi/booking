<?php

namespace Modules\Menu\Actions;

class GetAllMenus extends BaseAction
{
    public function run()
    {
        $columns = [
            'id',
            'title',
            'url',
            'parent_id',
            '_lft',
            '_rgt',
            'sort'
        ];

        return $this->model->query()
            ->select($columns)
            ->where('is_active', 1)
            ->get()
            ->sortBy('sort')
            ->toTree();
    }
}
