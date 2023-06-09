<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\FileTrait;

class UploadController extends Controller
{
    use FileTrait;

    public function uploadImage(Request $request)
    {
        $response = $this->upload($request->file('file'), 'images');
        return response()->json(['location'=> $response['location']]);
    }

    public function uploadFile(Request $request)
    {
        $response = $this->upload($request->file('file'), 'files');
        return response()->json(['location'=> $response['location']]);
    }
}
