<?php

namespace App\Http\Requests;

use App\Http\Core\Constants;
use Illuminate\Foundation\Http\FormRequest;

class NewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->getMethod() === 'PUT'){
            return [
                'title' => 'required|string|max:1000',
                'description' => 'required|string|max:2000',
                'text' => 'required|string',
                'date' => 'required|date',
                'author' => 'required|string|max:1000',
                'category_id' => 'required|integer',
                'status' => 'required|in:' . implode(',', array_keys(Constants::STATUSES_NEWS)),
                'image' => 'bail|image|max:' . Constants::MAX_FILE_SIZE_IMAGE,
            ];
        }
        return [
            'title' => 'required|string|max:1000',
            'description' => 'required|string|max:2000',
            'text' => 'required|string',
            'date' => 'required|date',
            'author' => 'required|string|max:1000',
            'category_id' => 'required|integer',
            'status' => 'required|in:' . implode(',', array_keys(Constants::STATUSES_NEWS)),
            'image' => 'required|bail|image|max:' . Constants::MAX_FILE_SIZE_IMAGE,
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'image' => 'Должен быть картинкой',
            'image.required' => 'Должено быть загружено изображение',
            'max'  => 'Размер изображения не может быть более ' . floor(Constants::MAX_FILE_SIZE_IMAGE / 1000) . 'Мб',
        ];
    }
}
