<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadImage(Request $request)
    {
        $path = $request->file('file')->store('images', 'public');
        return response()->json(['location'=> "/storage/{$path}"]);
    }

    public function uploadFile(Request $request)
    {
        $path = $request->file('file')->store('files', 'public');
        return response()->json(['location'=> "/storage/{$path}"]);
    }
}
