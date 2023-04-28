<?php

namespace Modules\Promos\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePromoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:191'],
            'url' => ['required', 'url', 'max:191'],
            'file' => ['nullable', 'image', 'mimes:jpg'],
            'content' => ['nullable', 'string'],
            'is_active' => ['nullable', 'boolean']
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
