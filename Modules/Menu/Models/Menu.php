<?php

namespace Modules\Menu\Models;

use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Menu\Database\factories\MenuFactory;

class Menu extends Model
{
    use HasFactory, NodeTrait;

    protected $fillable = [
        'title',
        'url',
        'is_active',
        'sort',
        'parent_id'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    protected static function newFactory()
    {
        return MenuFactory::new();
    }
}
