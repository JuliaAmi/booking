<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
trait FileTrait
{
    public function upload($file, $folder = 'uploads')
    {
       $originalName = $file->getClientOriginalName();
       $size = $file->getSize();
       $extention = $file->getClientOriginalExtension();
       $serverName = Storage::disk('public')->put($folder, $file);
       $location  = Storage::url($serverName);

        return [
            'originalName' => $originalName,
            'size' => $size,
            'extention' => $extention,
            'location' => $location
        ];
    }
}
