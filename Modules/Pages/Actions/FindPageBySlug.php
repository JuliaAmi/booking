<?php

namespace Modules\Pages\Actions;

class FindPageBySlug extends BaseAction
{
    public function run($slug)
    {
        $columns = [
            'title',
            'content',
            'meta_keywords',
            'meta_description'
        ];

        return $this->model->query()
            ->select($columns)
            ->whereSlug($slug)
            ->where('is_active', 1)
            ->firstOrFail();
    }
}
